const Conversation = {
  messages(parent, _args, { db }) {
    return db.messages.filter(({ conversationId }) => conversationId === parent.id);
  },

  owner(parent, _args, { db }) {
    return db.users.find(({ id }) => id === parent.ownerId);
  }
};

export { Conversation as default };
