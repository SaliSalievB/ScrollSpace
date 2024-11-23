import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import BookCard from '../components/BookCard';
import './BookList.css';
import { useSearchParams } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category'); // Extract the 'category' from the query string
    let url = '/books';
    if (category) {
      url += `?category=${category}`;
    }

    axios.get(url)
      .then(response => {
        let sortedBooks = response.data;

        // Sort books based on the selected category
        if (category === 'new-releases') {
          sortedBooks = sortedBooks.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        } else if (category === 'bestsellers') {
          sortedBooks = sortedBooks.sort((a, b) => b.sales - a.sales);
        }

        setBooks(sortedBooks);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, [searchParams]);

  const handleAddToCart = (bookId) => {
    axios.post('/cart/AddItem', { bookId, quantity: 1 })
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
        <BookCard key={book.id} book={book} onAddToCart={() => handleAddToCart(book.id)} />
      ))}
    </div>
  );
}

export default BookList;
