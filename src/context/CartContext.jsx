import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const CartContext = createContext({ carrito: [] });

export const CartProvider = ({ children }) => {
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const estaEnCarrito = cart.find((p) => p.id === producto.id);
    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };
  const clearCarrito = () => {
    setCart([]);
  };
  const borrarDelCarrito = (id) => {
    const nuevoCarrito = cart.filter((producto) => producto.id !== id);
    setCart(nuevoCarrito);
  };
  const totalProductos = cart.reduce(
    (acumulador, prod) => acumulador + prod.cantidad,
    0
  );
  const totalPrecio = cart.reduce(
    (acumulador, prod) => acumulador + prod.precio * prod.cantidad,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        clearCarrito,
        borrarDelCarrito,
        totalProductos,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
