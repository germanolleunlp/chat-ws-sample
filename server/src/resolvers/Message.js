const Message = {
  conversation(parent, _args, { db }) {
    return db.conversations.find(({ id }) => id === parent.conversationId);
  },

  author(parent, _args, { db }) {
    return db.users.find(({ id }) => id === parent.authorId);
  }
};

export { Message as default };
