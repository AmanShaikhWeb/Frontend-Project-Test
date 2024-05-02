// PostCard.js

import React from 'react';

const PostCard = ({ post }) => {
  const { id, date, title,content, body, author, role, thumbnail, large, small } = post;

  return (
    <div className="post-card">
      <img src={thumbnail.small} alt="Thumbnail" width={320}/>
      <h2>{title}</h2>
      <p> {content}</p>
      <p> {author.name}</p>
      <p> {author.role}</p>
      <p>{body}</p>
      <button>Learn More</button>
    </div>
  );
};

export default PostCard;
