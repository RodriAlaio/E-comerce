import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextComponent from "./components/CartContextComponent";
import CheckOut from "./components/CheckOut";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListlContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";



function App() {
  

  return (
    <>
     <CartContextComponent> 
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListlContainer />}/>
          <Route path="/category/:idCategory" element={<ItemListlContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextComponent>
    </>
  );
}

export default App;
