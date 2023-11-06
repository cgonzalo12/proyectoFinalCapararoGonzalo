import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const coleccionRef = categoryId
      ? query(productosRef, where("categoriaId", "==", categoryId))
      : productosRef;

    getDocs(coleccionRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoryId]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};
export default ItemListContainer;
