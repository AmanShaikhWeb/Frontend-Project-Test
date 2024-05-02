// MainView.js

import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import PostCard from './PostCard';

const MainView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="main-view">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MainView;
