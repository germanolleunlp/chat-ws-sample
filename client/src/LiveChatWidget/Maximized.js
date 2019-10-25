import React, { Fragment } from "react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import {
  TextInput,
  MessageList,
  Message,
  MessageText,
  MessageGroup,
  TextComposer,
  Row,
  Fill,
  Fit,
  IconButton,
  SendButton,
  CloseIcon,
  Avatar
} from "@livechat/ui-kit";

const ADD_MESSAGE = gql`
  mutation($conversationId: Int!, $authorId: Int!, $text: String!) {
    addMessage(conversationId: $conversationId, authorId: $authorId, text: $text) {
      id
      text
      author {
        id
        initials
      }
    }
  }
`;

const Maximized = ({ conversationId, userId, messages, minimize }) => {
  const [addMessage] = useMutation(ADD_MESSAGE);

  const onMessageSend = text => {
    addMessage({ variables: { conversationId, authorId: userId, text } });
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div
          style={{
            flexGrow: 1,
            minHeight: 0,
            height: "100%",
            textAlign: "left"
          }}
        >
          <MessageList active containScrollInSubtree>
            <MessageGroup onlyFirstWithMeta>
              {messages.map(message => (
                <Message style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: 3, padding: 5 }} key={message.id}>
                  <MessageText>{message.text}</MessageText>
                  <Avatar
                    letter={message.author.initials}
                    size="24px"
                    style={{ backgroundColor: "#0b0b0b", color: "#fff", fontSize: 10 }}
                  />
                </Message>
              ))}
            </MessageGroup>
          </MessageList>
        </div>
        <TextComposer
          onSend={onMessageSend}
          style={{
            zIndex: 2
          }}
        >
          <Row align="center">
            <Fill>
              <TextInput />
            </Fill>
            <Fit>
              <SendButton />
            </Fit>
          </Row>
        </TextComposer>
      </div>

      <div
        onClick={minimize}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          minHeight: "60px",
          background: "#0093FF",
          color: "#fff",
          borderRadius: "50%",
          cursor: "pointer",
          margin: "15px 0 15px auto"
        }}
      >
        <IconButton color="#fff">
          <CloseIcon />
        </IconButton>
      </div>
    </Fragment>
  );
};

Maximized.defaultProps = {
  events: []
};

export default Maximized;
