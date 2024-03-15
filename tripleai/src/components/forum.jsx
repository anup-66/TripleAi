import React, { useState, useEffect } from 'react';

function Forum({ socket }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    socket.on('post_created', (data) => {
      setPosts((prevPosts) => [...prevPosts, data.post]);
    });

    return () => {
      socket.off('post_created');
    };
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    socket.emit('create_post', { content: newPost });
    setNewPost('');
  };

  return (
    <div>
      <h2>Forum</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Forum;
