//
// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
//
// const socket = io('http://localhost:5000');
//
// function GlobalChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [username, setUsername] = useState('');
//
//   useEffect(() => {
//     // Handle incoming messages
//     socket.on('message', handleMessageReceived);
//     // Fetch previous messages
//     socket.on('previous_messages', handlePreviousMessagesReceived);
//
//     // Clean up listeners when component unmounts
//     return () => {
//       socket.off('message', handleMessageReceived);
//       socket.off('previous_messages', handlePreviousMessagesReceived);
//     };
//   }, []);
//
//   const handleMessageReceived = message => {
//     setMessages(prevMessages => [...prevMessages, message]);
//   };
//
//   const handlePreviousMessagesReceived = previousMessages => {
//     setMessages(previousMessages);
//   };
//
//   const handleMessageChange = event => {
//     setNewMessage(event.target.value);
//   };
//
//   const handleSubmit = event => {
//     event.preventDefault();
//     if (newMessage.trim() !== '' && username.trim() !== '') {
//       socket.emit('message', { message: newMessage, username });
//       setNewMessage('');
//     } else {
//       alert('Please add a message and username');
//     }
//   };
//
//   const handleUsernameChange = event => {
//     setUsername(event.target.value);
//   };
//
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
//         {messages.map((message, index) => (
//           <div className="mb-4" key={index}>
//             <div className="bg-blue-500 text-white rounded-lg p-4">{message.username}: {message.message}</div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="flex p-4">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={handleMessageChange}
//           placeholder="Type your message"
//           className="flex-1 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
//         />
//         <input
//           type="text"
//           value={username}
//           onChange={handleUsernameChange}
//           placeholder="Your username"
//           className="ml-4 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
//         />
//         <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
//       </form>
//     </div>
//   );
// }
//
// export default GlobalChat;
//
// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
//
// const socket = io('http://localhost:5000');
//
// function GlobalChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [username, setUsername] = useState('');
//
//   useEffect(() => {
//     socket.on('message', handleMessageReceived);
//     socket.on('previous_messages', handlePreviousMessagesReceived);
//
//     return () => {
//       socket.off('message', handleMessageReceived);
//       socket.off('previous_messages', handlePreviousMessagesReceived);
//     };
//   }, []);
//
//   const handleMessageReceived = message => {
//     setMessages(prevMessages => [...prevMessages, message]);
//   };
//
//   const handlePreviousMessagesReceived = previousMessages => {
//     setMessages(previousMessages);
//   };
//
//   const handleMessageChange = event => {
//     setNewMessage(event.target.value);
//   };
//
//   const handleSubmit = event => {
//     event.preventDefault();
//     if (newMessage.trim() !== '' && username.trim() !== '') {
//       socket.emit('message', { message: newMessage, username });
//       setNewMessage('');
//     } else {
//       alert('Please add a message and username');
//     }
//   };
//
//   const handleReply = (message, username) => {
//     setNewMessage(`@${username} ${message}`);
//   };
//
//   const handleUsernameChange = event => {
//     setUsername(event.target.value);
//   };
//
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
//         {messages.map((message, index) => (
//           <div className="mb-4" key={index}>
//             <div className="bg-blue-500 text-white rounded-lg p-4">
//               <div>{message.username}: {message.message}</div>
//               <button onClick={() => handleReply(message.message, message.username)}>Reply</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="flex p-4">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={handleMessageChange}
//           placeholder="Type your message"
//           className="flex-1 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
//         />
//         <input
//           type="text"
//           value={username}
//           onChange={handleUsernameChange}
//           placeholder="Your username"
//           className="ml-4 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
//         />
//         <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
//       </form>
//     </div>
//   );
// }
//
// export default GlobalChat;

// Reply feature for color change
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function GlobalChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('message', handleMessageReceived);
    socket.on('previous_messages', handlePreviousMessagesReceived);

    return () => {
      socket.off('message', handleMessageReceived);
      socket.off('previous_messages', handlePreviousMessagesReceived);
    };
  }, []);

  const handleMessageReceived = message => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  const handlePreviousMessagesReceived = previousMessages => {
    setMessages(previousMessages);
  };

  const handleMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newMessage.trim() !== '' && username.trim() !== '') {
      socket.emit('message', { message: newMessage, username });
      setNewMessage('');
    } else {
      alert('Please add a message and username');
    }
  };

  const handleReply = (message, username) => {
    setNewMessage(`@${username} ${message}`);
  };

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-[390px] fixed top-0 right-0">
      <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
        {messages.map((message, index) => (
          <div className="mb-4" key={index}>
            <div className={`p-4 rounded-lg ${message.username === username ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              <div>{message.username}: {message.message}</div>
              {message.username !== username && (
                <button onClick={() => handleReply(message.message, message.username)}>Reply</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex p-4 w-[320px]">
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type your message"
          className="p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 w-[170px]"
        />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
          className="ml-4 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 w-[90px]"
        />
        <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
      </form>
    </div>
  );
}

export default GlobalChat;

