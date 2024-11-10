import React from 'react';
import './BookCard.css';

function BookCard({ title, description }) {
  return (
    <div className="book-card">
      <img src="/path/to/placeholder.jpg" alt={title} /> {/* Replace with real image paths */}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default BookCard;