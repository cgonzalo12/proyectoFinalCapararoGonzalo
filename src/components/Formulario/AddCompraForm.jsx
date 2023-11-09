import { useContext, useState } from "react";
import { db } from "../../service/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";

const AddCompraForm = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const { cart, totalPrecio, clearCarrito } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState("");

  const pedido = {
    usuario: datos,
    items: cart,
    total: totalPrecio,
  };
  const handleComprar = async (e) => {
    e.preventDefault();
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
    });
    clearCarrito();
  };
  if (pedidoId) {
    return (
      <>
        <div className="container">
          <h1 className="main-title">
            Muchas Gracias por confiar en Deco Home {datos.nombre}
          </h1>
          <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container ">
        <form onSubmit={handleComprar} className="row g-3 align-items-center">
          <h1 className="main-title">Complete sus datos</h1>

          <div className="mb-3 ">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={datos.nombre}
              placeholder="ingrese su nombre"
              onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="ingrese su email"
              value={datos.email}
              onChange={(e) => setDatos({ ...datos, email: e.target.value })}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              className="form-control"
              type="number"
              name="telefono"
              value={datos.telefono}
              placeholder="ingrese su telefono"
              onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
            ></input>
          </div>
          <button type="submit" className="btn btn-dark">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCompraForm;
