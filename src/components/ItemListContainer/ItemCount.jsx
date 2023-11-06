import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
const ItemCount = ({ handelRestar, handelSumar, cantidad, producto }) => {
  ItemCount.propTypes = {
    handelRestar: PropTypes.func.isRequired,
    handelSumar: PropTypes.func.isRequired,
    cantidad: PropTypes.number.isRequired,
    producto: PropTypes.object.isRequired,
  };

  const [terminarCompra, setTerminarCompra] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);
  return (
    <>
      <div>
        {terminarCompra ? (
          <>
            <Button
              variant="dark"
              className="w-100 m-2"
              onClick={() => {
                setTerminarCompra(false);
                agregarAlCarrito(producto, cantidad);
              }}
            >
              Terminar compra
            </Button>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <Button variant="dark" onClick={handelRestar}>
                -
              </Button>
              <p className="m-0 mx-2">{cantidad}</p>
              <Button variant="dark" onClick={handelSumar}>
                +
              </Button>
            </div>
            <Button
              variant="dark"
              className="w-100 m-2"
              onClick={() => setTerminarCompra(true)}
            >
              Agregar al carrito
            </Button>
          </>
        )}
      </div>
    </>
  );
};
export default ItemCount;
