import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import firebase from '../../firebase/firebase';

import Message from "./Message";

class Messages extends React.Component {
  // state = {
  //   messagesRef: firebase.database().ref("notes"),
  //   notes: [],
  //   messagesLoading: true,
  //   channel: 11,
  //   user: 11
  // };

  // componentDidMount() {
  //   const { channel, user } = this.state;

  //   if (channel && user) {
  //     this.addListeners(channel.id);
  //   }
  // }

  // addListeners = channelId => {
  //   this.addMessageListener(channelId);
  // };

  // addMessageListener = channelId => {
  //   let loadedMessages = [];
  //   this.state.messagesRef.child(channelId).on("child_added", snap => {
  //     loadedMessages.push(snap.val());
  //     this.setState({
  //       notes: loadedMessages,
  //       messagesLoading: false
  //     });
  //   });
  // };

  // displayMessages = notes =>
  //   notes.length > 0 &&
  //   notes.map(notes => (
  //     <Message
  //       notes={notes}
  //     />
  //   ));

  render() {
    // const { messagesRef, notes, channel, user } = this.state;

    return (
      <React.Fragment>
        <p>
          Hier Bilder
        </p>

        {/* <Segment>
          <Comment.Group className="notes">
            {this.displayMessages(notes)}
          </Comment.Group>
        </Segment> */}

        {/* <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        /> */}
      </React.Fragment>
    );
  }
}

export default Messages;
