// Modal.js

import React from 'react';

const Modal = ({ post, closeModal }) => {
  const { title, body, date } = post;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Date: {date}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Modal;
