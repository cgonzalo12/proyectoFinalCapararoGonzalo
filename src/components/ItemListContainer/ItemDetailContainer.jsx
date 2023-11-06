import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const productoRef = doc(db, "productos", itemId);
    getDoc(productoRef).then((resp) => {
      setItem({ id: resp.id, ...resp.data() });
    });
  }, [itemId]);

  return (
    <>
      <h2>Detalle de producto</h2>
      <ItemDetail producto={item} />
    </>
  );
};
export default ItemDetailContainer;
