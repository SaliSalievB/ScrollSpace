// src/pages/MyLibrary.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import './MyLibrary.css'; // Create this CSS file for styling

function MyLibrary() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the user's library from the backend
    axios.get('/users/my-library')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching library:', error);
        setError('Failed to load your library. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading your library...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="my-library-container">
      <h2>My Library</h2>
      {books.length === 0 ? (
        <p>Your library is empty. Start adding some books!</p>
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              {/* Replace with your BookCard component if you have one */}
              <img src={book.coverImageUrl} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {/* Additional book details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;