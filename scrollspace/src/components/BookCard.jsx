import React, { useContext } from 'react';
import './BookCard.css';
import axios from '../axiosConfig';
import { CartContext } from '../components/CartContext'; // Ensure the import path is correct

function BookCard({ book }) {
  const { refreshCart } = useContext(CartContext);

  const handleAddToCart = () => {
    axios.post('/cart/AddItem', { bookId: book.id, quantity: 1 })
      .then(response => {
        console.log('Item added to cart:', response.data);
        refreshCart();
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="book-card">
      <h4>{book.title}</h4>
      <p>{book.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default BookCard;
