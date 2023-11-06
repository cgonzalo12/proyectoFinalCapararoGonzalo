import carrito from "../../assets/carrito.svg";
import { Link } from "react-router-dom";
import "./carrito.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductos } = useContext(CartContext);
  const nro = totalProductos;
  return (
    <Link to={"/cart"} className="btn m-1 bg-white d-flex align-items-center">
      <img src={carrito} alt="" />
      <p className="text-dark m-1 ml-1">{nro}</p>
    </Link>
  );
};

export default CartWidget;
