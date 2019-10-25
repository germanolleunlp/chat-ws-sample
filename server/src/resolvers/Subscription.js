const Subscription = {
  messageAdded: {
    subscribe: (_parent, { conversationId }, { pubsub }) => {
      return pubsub.asyncIterator(`conversation-${conversationId}`);
    }
  }
};

export { Subscription as default };
