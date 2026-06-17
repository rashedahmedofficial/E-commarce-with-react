import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Productdetails from "./pages/Productdetails";
import Carts from "./pages/Cart";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout setOpenCart={setOpenCart} />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Productdetails setOpenCart={setOpenCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
           <Route path="/cart" element={<Carts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;