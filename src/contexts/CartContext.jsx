import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  // item amount state 
  const [itemAmount, setItemAmount] = useState(0);

  // update item amount 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0)
      setItemAmount(amount);
    }
  }, [cart])

  // total price state 
  const [total, setTotal] = useState(0);

  // update total price
  useEffect(() => {
    const total = cart.reduce((accumulator, current) => {
      const priceNrs = Math.round(current.price * 131.89);
      return accumulator + priceNrs * current.amount;
    }, 0);
    setTotal(total);
  }, [cart])

  // add to cart 
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // if cart item is already in cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if ((item.id) === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  }

  // remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  // clear cart 
  const clearCart = () => {
    setCart([]);
  };

  // increase amt 
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  }

  // decrease amt 
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map(item => {
        if ((item.id) === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
