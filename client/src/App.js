import React from "react";
import logo from "./logo.svg";
import "./App.css";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import LiveChatWidget from "./LiveChatWidget";

const GET_CONVERSATIONS = gql`
  query {
    conversations {
      id
      owner {
        id
      }
      messages {
        id
        text
        author {
          id
          initials
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_CONVERSATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Conversations-container">
        {data.conversations.map(conversation => {
          return (
            <div className="Conversation" key={conversation.id}>
              <LiveChatWidget conversation={conversation} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
