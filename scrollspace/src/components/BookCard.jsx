import React, { useContext } from 'react';
import './BookCard.css';
import axios from '../axiosConfig';
import { CartContext } from '../components/CartContext'; // Ensure the import path is correct

function BookCard({ book }) {
  const { refreshCart } = useContext(CartContext);
  const userRole = localStorage.getItem('role'); // Retrieve the user's role from localStorage

  const handleAddToCart = () => {
    axios.post('/cart/AddItem', { bookId: book.id, quantity: 1 })
      .then((response) => {
        console.log('Item added to cart:', response.data);
        refreshCart();
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  const handleReject = () => {
    axios.delete(`/books/${book.id}`)
      .then((response) => {
        console.log('Book rejected:', response.data);
        // Optionally refresh a list of books or notify the user
      })
      .catch((error) => {
        console.error('Error rejecting book:', error);
      });
  };

  return (
    <div className="book-card">
      <img src={book.coverImageUrl} alt={book.title} className="book-cover" />
      <h4>{book.title}</h4>
      <p>{book.description}</p>
      <p>Price: ${book.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Conditionally render the "Reject" button for Admin role */}
      {userRole === 'Admin' && (
        <button className="reject-button" onClick={handleReject}>Reject</button>
      )}
    </div>
  );
}

export default BookCard;
