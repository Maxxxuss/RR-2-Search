import React from "react";
import moment from "moment";
import { Comment, Image } from "semantic-ui-react";

const isOwnMessage = (note, user) => {
  return note.user.id === user.uid ? "message__self" : "";
};

const isImage = note => {
  return note.hasOwnProperty("image") && !note.hasOwnProperty("content");
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ notes, user }) => (
  <Comment>
    {/* <Comment.Avatar src={note.user.avatar} /> */}
    {/* <Comment.Content className={isOwnMessage(note, user)}>
      <Comment.Author as="a">{note.user.name}</Comment.Author>
      <Comment.Metadata>{timeFromNow(note.timestamp)}</Comment.Metadata>
      {isImage(note) ? ( */}
        <Image src={notes.image} className="message__image" />
      {/* ) : (
        <Comment.Text>{note.content}</Comment.Text>
      )}
    </Comment.Content> */}
  </Comment>
);

export default Message;
