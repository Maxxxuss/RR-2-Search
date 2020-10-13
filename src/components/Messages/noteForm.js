import React from "react";
import {v4 as uuidv4} from "uuid";
import  firebase  from "../../firebase/firebase";

import { Segment, Button, Input } from "semantic-ui-react";

import FileModal from "./fileModal";
// import ProgressBar from "./ProgressBar";

class MessageForm extends React.Component {
  state = {
    storageRef: firebase.storage().ref(),
    uploadTask: null,
    uploadState: "",
    percentUploaded: 0,
    note: "",
    channel: 1,
    user: this.props.currentUser,
    loading: false,
    errors: [],
    modal: false
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createMessage = (fileUrl = null) => {
    const note = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      }
    };
    if (fileUrl !== null) {
      note["image"] = fileUrl;
    } else {
      note["content"] = this.state.note;
    }
    return note;
  };

  sendMessage = () => {
    const { messagesRef } = this.props;
    const { note, channel } = this.state;

    if (note) {
      this.setState({ loading: true });
      messagesRef
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, note: "", errors: [] });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          });
        });
    } else {
      this.setState({
        errors: this.state.errors.concat({ note: "Add a note" })
      });
    }
  };

  uploadFile = (file, metadata) => {
    const pathToUpload = this.state.channel.id;
    const ref = this.props.messagesRef;
    const filePath = `chat/public/${uuidv4()}.jpg`;


    this.setState(
      {
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          snap => {
            const percentUploaded = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({ percentUploaded });
          },
          err => {
            console.error(err);
            this.setState({
              errors: this.state.errors.concat(err),
              uploadState: "error",
              uploadTask: null
            });
          },
          () => {
            this.state.uploadTask.snapshot.ref
              .getDownloadURL()
              .then(downloadUrl => {
                this.sendFileMessage(downloadUrl, ref, pathToUpload);
              })
              .catch(err => {
                console.error(err);
                this.setState({
                  errors: this.state.errors.concat(err),
                  uploadState: "error",
                  uploadTask: null
                });
              });
          }
        );
      }
    );
  };

  sendFileMessage = (fileUrl, ref, pathToUpload) => {
    ref
      .child(pathToUpload)
      .push()
      .set(this.createMessage(fileUrl))
      .then(() => {
        this.setState({ uploadState: "done" });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err)
        });
      });
  };

  render() {
    // prettier-ignore
    const { errors, note, loading, modal, uploadState, percentUploaded } = this.state;

    return (
      <Segment className="message__form">
        {/* <Input
          fluid
          name="note"
          onChange={this.handleChange}
          value={note}
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
          className={
            errors.some(error => error.note.includes("note"))
              ? "error"
              : ""
          }
          placeholder="Write your note"
        /> */}
        <Button.Group icon widths="2">
        <Button
            onClick={this.sendMessage}
            disabled={loading}
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />

          <Button
            color="teal"
            onClick={this.openModal}
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
        <FileModal
          modal={modal}
          closeModal={this.closeModal}
          uploadFile={this.uploadFile}
        />
      </Segment>
    );
  }
}

export default MessageForm;
