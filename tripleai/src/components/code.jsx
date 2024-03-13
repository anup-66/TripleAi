// App.js
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import CodeEditor from './CodeEditor';
import Chat from './chat';
import Forum from './forum';

const ENDPOINT = 'http://localhost:5000'; // Your Flask backend endpoint

function Code() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    setSocket(socket);
    console.log(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Collaborative Coding Environment</h1>
      <div>
        <CodeEditor socket={socket} />
        <Chat socket={socket} />
        <Forum socket={socket} />
      </div>
    </div>
  );
}

export default Code;
