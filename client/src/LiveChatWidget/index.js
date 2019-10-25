import React from "react";

import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ThemeProvider, FixedWrapper } from "@livechat/ui-kit";

import Maximized from "./Maximized";
import Minimized from "./Minimized";

const CONVERSATION_SUBSCRIPTION = gql`
  subscription($conversationId: Int!) {
    messageAdded(conversationId: $conversationId) {
      id
      text
      author {
        id
        initials
      }
    }
  }
`;

const LiveChatWidget = ({ conversation, ...props }) => {
  const { id, messages, owner } = conversation;

  const { data = { messageAdded: null } } = useSubscription(CONVERSATION_SUBSCRIPTION, {
    variables: { conversationId: id }
  });

  const { messageAdded } = data;

  if (messageAdded) {
    messages.push(messageAdded);
  }

  return (
    <ThemeProvider>
      <FixedWrapper.Root
        maximizedOnInit
        style={{
          position: "absolute"
        }}
      >
        <FixedWrapper.Maximized>
          <Maximized {...props} conversationId={id} userId={owner.id} messages={messages} />
        </FixedWrapper.Maximized>
        <FixedWrapper.Minimized>
          <Minimized {...props} conversationId={id} />
        </FixedWrapper.Minimized>
      </FixedWrapper.Root>
    </ThemeProvider>
  );
};

export default LiveChatWidget;
