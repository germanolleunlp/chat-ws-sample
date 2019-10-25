import faker from "faker";

const german_olle = {
  id: 1,
  name: "German Olle",
  initials: "GO"
};

const carolina_dutto = {
  id: 2,
  name: "Carolina Dutto",
  initials: "CD"
};

const users = [german_olle, carolina_dutto];

const conversation_one = {
  id: 1,
  ownerId: german_olle.id
};

const conversations = [conversation_one];

const messages = [
  {
    id: faker.random.uuid(),
    text: faker.lorem.text(),
    conversationId: conversation_one.id,
    authorId: german_olle.id
  },
  {
    id: faker.random.uuid(),
    text: faker.lorem.text(),
    conversationId: conversation_one.id,
    authorId: carolina_dutto.id
  },
  {
    id: faker.random.uuid(),
    text: faker.lorem.text(),
    conversationId: conversation_one.id,
    authorId: german_olle.id
  }
];

export default {
  users,
  conversations,
  messages
};
