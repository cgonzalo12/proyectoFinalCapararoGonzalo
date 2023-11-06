import Productos from "../data/products.js";
import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

export const getProductos = () => {
  const referenceProductos = doc(db, "productos", "NT4I2we3BF1zP6EFKfxu");
  getDoc(referenceProductos).then((snapshop) => {
    snapshop.exists() ? console.log(snapshop.data()) : console.log("No existe");
  });
};

export const getProducto = (id) => {
  const productos = Productos.map((producto) => ({
    id: producto.id,
    precio: producto.precio,
    nombre: producto.nombre,
    img: producto.img,
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    destacado: producto.destacado,
  }));
  const producto = productos.filter((producto) => producto.id === parseInt(id));
  return new Promise((resolve) => {
    resolve(producto);
  }, 500);
};
const createProducto = () => {};
const removeProducto = () => {};
const actualizarProducto = () => {};

export const pedirProductos = () => {
  return new Promise((resolve) => {
    resolve(Productos);
  }, 500);
};

export const pedirCategoria = (id) => {
  const productos = Productos.map((producto) => ({
    id: producto.id,
    precio: producto.precio,
    nombre: producto.nombre,
    img: producto.img,
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    destacado: producto.destacado,
  }));
  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === parseInt(id)
  );

  return new Promise((resolve) => {
    resolve(productosFiltrados);
  }, 500);
};
export const pedirItem = (id) => {
  const productosFiltrados = Productos.find((prod) => prod.id === parseInt(id));

  return new Promise((resolve) => {
    resolve(productosFiltrados);
  }, 500);
};

const productoService = {
  getProducto,
  createProducto,
  removeProducto,
  actualizarProducto,
};
export default productoService;
