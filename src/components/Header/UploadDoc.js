import React from "react";
import {v4 as uuidv4} from "uuid";
import  firebase  from "../../firebase/firebase";

import { Segment, Button } from "semantic-ui-react";

import FileModal from "../Docs/fileModal";

class UploadDoc extends React.Component {

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
    modal: false,
    messagesRef: firebase.database().ref("notess"),

  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendMessage = () => {
    const { messagesRef } = this.props;
    const { note, channel } = this.state;

    if (note) {
      this.setState({ loading: true });
      messagesRef
        .child(channel.id)
        .push()
        .set(this.onAddNote())
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
                this.handelAddNote(downloadUrl);
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
 
  sendFileMessage = (ref) => {
    ref
      .push()
      .set(this.props.onAddNote(this.state.fileUrl))
      .then(() => {
        this.setState({ uploadState: "done" });
      })
  };

  handelAddNote = (downloadUrl) => {
    const fileUrl = downloadUrl
    this.setState(()=> ({fileUrl}))
    this.props.onAddNote(this.state.fileUrl)  
   };

  render() {
    // prettier-ignore
    const {loading, modal } = this.state;

    return (
      <Segment className="message__form">

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

export default UploadDoc;
