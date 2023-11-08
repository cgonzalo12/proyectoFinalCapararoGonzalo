import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
