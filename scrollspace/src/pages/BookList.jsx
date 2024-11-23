import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import BookCard from '../components/BookCard';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleAddToCart = (bookId) => {
    axios.post('/cart/AddItem', null, {
      params: { bookId, quantity: 1 }
    })
    .then(response => {
      console.log('Item added to cart:', response.data);
      // Optionally update cart state or notify user
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
    });
  };

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default BookList;
