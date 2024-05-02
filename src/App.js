// App.js

import React, { useState, useEffect } from 'react';
import MainView from './components/MainView';
import Modal from './components/Modal';
import { fetchData } from './api';
import './styles.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      <MainView posts={posts} openModal={openModal} />
      {selectedPost && <Modal post={selectedPost} closeModal={closeModal} />}
    </div>
  );
}

export default App;
