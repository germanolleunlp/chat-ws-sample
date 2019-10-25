import faker from "faker";

const Mutation = {
  addMessage: (_parent, { conversationId, authorId, text }, { pubsub }) => {
    const message = {
      id: faker.random.uuid(),
      text,
      conversationId,
      authorId
    };

    pubsub.publish(`conversation-${conversationId}`, { messageAdded: message });

    return message;
  }
};

export { Mutation as default };
