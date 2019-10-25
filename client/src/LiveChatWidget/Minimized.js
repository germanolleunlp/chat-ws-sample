import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { IconButton, ChatIcon } from "@livechat/ui-kit";

const CONVERSATION_SUBSCRIPTION = gql`
  subscription($conversationId: Int!) {
    messageAdded(conversationId: $conversationId) {
      id
    }
  }
`;

const Minimized = ({ conversationId, maximize }) => {
  const { data = { messageAdded: null } } = useSubscription(CONVERSATION_SUBSCRIPTION, {
    variables: { conversationId }
  });

  const { messageAdded } = data;

  return (
    <div
      onClick={maximize}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        background: "#0093FF",
        color: "#fff",
        borderRadius: "50%",
        cursor: "pointer"
      }}
    >
      <IconButton color="#fff">
        <ChatIcon style={{ position: "relative " }} />
        {!!messageAdded && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: 20,
              height: 20,
              background: "red",
              color: "#fff",
              borderRadius: "50%",
              top: "-5px",
              right: "0"
            }}
          >
            !
          </span>
        )}
      </IconButton>
    </div>
  );
};

export default Minimized;
