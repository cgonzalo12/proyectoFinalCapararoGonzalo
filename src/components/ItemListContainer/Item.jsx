import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

const Item = ({ id, nombre, img, precio }) => {
  Item.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  };
  return (
    <>
      <Col md={4} className="my-2">
        <Card style={{ width: "25rem" }} className="mx-auto">
          <Card.Img
            variant="top"
            style={{ width: "25rem" } && { height: "20rem" }}
            src={img}
          />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              Precio: $ {precio} <br />
              Codigo de producto: {id}
            </Card.Text>
            <Button variant="dark">Comprar</Button>
            {/* <Button variant="dark" className="m-2" onClick={onClickDetalle}>
              Vista Rapida
            </Button> */}
            <Link to={`/item/${id}`} className="btn btn-dark m-2" key={id}>
              Detalle Producto
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;
