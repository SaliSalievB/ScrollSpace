import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import axios from '../axiosConfig';
import './CartPage.css';

function CartPage() {
  const { cart, refreshCart } = useContext(CartContext);

  const handleRemoveItem = (bookId) => {
    axios.post('/cart/RemoveItem', 
       { bookId },
    )
    .then(() => {
      console.log('Item removed from cart.');
      refreshCart();
    })
    .catch(error => {
      console.error('Error removing item from cart:', error);
    });
  };

  const handleEmptyCart = () => {
    axios.delete('/cart/EmptyCart')
      .then(() => {
        console.log('Cart emptied successfully.');
        refreshCart(); // Refresh the cart to reflect the empty state
        window.alert("Thank you for your purchase")
      })
      .catch(error => {
        console.error('Error emptying the cart:', error);
      });
  };

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.cartItems && cart.cartItems.length > 0 ? (
        <ul>
          {cart.cartItems.map(item => (
            <li key={item.id}>
              {item.book.title} - Quantity: {item.quantity}
              <button onClick={() => handleRemoveItem(item.book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.cartItems && cart.cartItems.length > 0 && (
        <button className="payment" onClick={handleEmptyCart} >Pay</button>
      )}
    </div>
  );
}

export default CartPage;
