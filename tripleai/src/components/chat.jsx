import React, { useState, useEffect } from 'react';

function Chat({ socket }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const room_id = 'chat_room';

  useEffect(() => {
    socket.emit('join_room', { room_id });

    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      socket.emit('leave_room', { room_id });
      socket.off('message');
    };
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit('send_message', { room_id, message });
    setMessage('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
