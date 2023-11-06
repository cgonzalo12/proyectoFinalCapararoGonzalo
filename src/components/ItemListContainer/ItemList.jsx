import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ productos }) => {
  const rta = [];
  ItemList.propTypes = {
    productos: PropTypes.array.isRequired,
  };

  const renderProductos = () => {
    for (let index = 0; index < productos.length; index++) {
      rta.push(
        <Item
          key={productos[index].id}
          id={productos[index].id}
          img={productos[index].img}
          nombre={productos[index].nombre}
          precio={productos[index].precio}
        ></Item>
      );
    }
    return rta;
  };
  return (
    <div>
      <Row>{renderProductos()}</Row>
    </div>
  );
};
export default ItemList;
