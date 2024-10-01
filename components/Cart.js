import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css_files/Cart.css'; // Ensure the path is correct

const Cart = ({ cartItems, removeFromCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId) // Deselect the item
        : [...prevSelected, itemId] // Select the item
    );
  };

  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      // Navigate to the checkout page and pass the selected items
      navigate('/checkout', { state: { selectedItems } });
    } else {
      alert('Please select at least one item to checkout.');
    }
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    // Update selected items when an item is removed
    setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
  };

  // Reset selected items when the component unmounts
  useEffect(() => {
    return () => {
      setSelectedItems([]); // Clear selected items
    };
  }, []);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="item-checkbox" // Optional: Add class for styling
              />
              <img src={item.imageUrl} alt={item.name} className="item-image" /> {/* Use imageUrl */}
              <span className="item-details">
                {item.name} - ${item.price.toFixed(2)}
                {item.size && <span> (Size: {item.size})</span>} {/* Display selected size if available */}
              </span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-buttons">
          <button onClick={handleCheckout}>Proceed to Checkout</button>
          <button className="continue-shopping" onClick={() => navigate('/merchandise')}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Cart;