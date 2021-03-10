
import React from 'react';

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";

import "./App.css";



const App=()=> {
  return (
    <>
      <h2>Hello Web</h2>
      <ChatEngine
            height="100vh"
            publicKey='d95244ba-f078-4225-b14b-3b1b541cc39b'
            userName="react-chat-admin"
            userSecret="qwerty12345"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    </>
  );
}

export default App;
