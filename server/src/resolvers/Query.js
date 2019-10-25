const Query = {
  conversations: (_parent, _args, { db }) => {
    return db.conversations;
  },

  conversation: (_, args, { db }) => {
    const conversation = db.conversations.find(({ id }) => args.id === id);

    if (!conversation) {
      throw Error("No conversation found");
    }

    return conversation;
  }
};

export { Query as default };
