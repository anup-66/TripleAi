import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor({ socket }) {


  const [code, setCode] = useState('');
  const room_id = 'code_room';

  useEffect(() => {
    // Join the room when the component mounts
    socket.emit('join_room', { room_id });

    // Cleanup function to leave the room when the component unmounts
    return () => {
      socket.emit('leave_room', { room_id });
    };
  }, []);

  useEffect(() => {
    // Listen for changes to code from other users and update the code editor
    socket.on('code_updated', ({ code }) => {
      setCode(code);
    });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      socket.off('code_updated');
    };
  }, [socket]);

  const handleChange = (newValue, event) => {
    // Update the code in the local state and emit an event to the server
    setCode(newValue);
    socket.emit('update_code', { room_id, code: newValue });
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <MonacoEditor
        height="500"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{
          automaticLayout: true
        }}
        onChange={handleChange}
      />
    </div>
  );
}

export default CodeEditor;
