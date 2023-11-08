import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, clearCarrito, totalPrecio } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((producto) => (
          <CartItem
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            cantidad={producto.cantidad}
          />
        ))
      ) : (
        <div>
          <h2 className="d-flex justify-content-center m-2">
            No hay productos en el carrito !!
          </h2>
          <NavLink
            to={"/"}
            className="btn btn-dark d-flex justify-content-center m-2"
            key={1}
          >
            Ver productos
          </NavLink>
        </div>
      )}
      <div className="d-flex justify-content-between  m-2">
        {cart.length > 0 && (
          <Button className="btn btn-dark" onClick={clearCarrito}>
            Vaciar Carrito
          </Button>
        )}
        {cart.length > 0 && (
          <NavLink
            to={"/checkout"}
            className="btn btn-dark d-flex justify-content-center m-2"
            key={1}
          >
            Terminar Compra
          </NavLink>
        )}
        {cart.length > 0 && (
          <h4 className="font-weight-bold">total ${totalPrecio}</h4>
        )}
      </div>
    </>
  );
};
export default Cart;
