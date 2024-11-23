import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import './MyLibrary.css';

function MyLibrary() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the user's purchased books from the backend
    axios.get('/Order')
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
            <div key={book.orderId} className="book-item">
              <img src={book.coverImageUrl} alt={book.title} className="book-cover" />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price.toFixed(2)}</p>
                <p>Purchased on: {new Date(book.orderDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
