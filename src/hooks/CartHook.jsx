import { createContext, useState, useEffect } from "react";

export const CartData = createContext();

export const CartDataProvider = ({ children }) => {
  const [openModal, setopenModal] = useState(false);

  const [carItems, setcarItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (cart) => {
    const itemExist = carItems.find((item) => item.id === cart.id);

    if (itemExist) {
      const incItem = carItems.map((item) => {
        if (item.id === cart.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          };
        }
        return item;
      });
      setcarItems(incItem);
    } else {
      const newItem = { ...cart, quantity: 1 };
      setcarItems((prevState) => [...prevState, newItem]);
    }
  };

  const removeFromCart = (cart) => {
    const updatedItems = carItems.map((item) => {
      if (item.id === cart.id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: item.price * (item.quantity - 1),
        };
      }
      return item;
    });
    const filteredItems = updatedItems.filter((item) => item.quantity > 0);
    setcarItems(filteredItems);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carItems));
    console.log(carItems);
  }, [carItems]);

  return (
    <CartData.Provider
      value={{ carItems, addToCart, removeFromCart, openModal, setopenModal }}
    >
      {children}
    </CartData.Provider>
  );
};
