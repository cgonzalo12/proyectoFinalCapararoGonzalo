import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  ItemDetail.propTypes = {
    producto: PropTypes.object.isRequired,
  };

  const handelSumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  };

  const handelRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }} className="d-flex align-items-center">
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <ItemCount
            handelRestar={handelRestar}
            handelSumar={handelSumar}
            cantidad={cantidad}
            producto={producto}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
