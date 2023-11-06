import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const CartItem = ({ nombre, descripcion, precio, cantidad, id }) => {
  const { borrarDelCarrito } = useContext(CartContext);
  return (
    <>
      <Card className="text-center m-2">
        <Card.Header>{nombre}</Card.Header>
        <Card.Body>
          <Card.Title>{descripcion}</Card.Title>
          <Card.Text>
            Cantidad de productos {cantidad} - Precio unitario $ {precio}
          </Card.Text>
          <Button className="btn btn-dark" onClick={() => borrarDelCarrito(id)}>
            Eliminar de carrito
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Total unidad $ {precio * cantidad}
        </Card.Footer>
      </Card>
    </>
  );
};
export default CartItem;
CartItem.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
