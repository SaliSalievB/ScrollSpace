// src/components/MyLibrary.js

import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import './MyLibrary.css';

function MyLibrary() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/Cart/UserLibrary')
      .then((response) => {
        console.log('API Response:', response.data);
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching library:', error);
        setError('Failed to load your library. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleDownload = async (bookId, title) => {
    try {
      console.log('Downloading book:', title);

      const response = await axios.get(`/Cart/Download/${bookId}`, {
        responseType: 'blob', // Important to specify the response type as blob
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${title}.pdf`; // Use the book title for the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

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
                <button
                  onClick={() => handleDownload(book.bookId, book.title)}
                  className="download-button"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
