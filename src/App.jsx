import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./hooks/DataHook";
import Home from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { CartDataProvider } from "./hooks/CartHook";
import Store from "./pages/store/Store";
import { StoreDataProvider } from "./hooks/StoreHook";
import SingleStrore from "./pages/singleStore/SingleStrore";
import CheckOut from "./pages/checkout/CheckOut";
const App = () => {
  return (
    <>
      <StoreDataProvider>
        <CartDataProvider>
          <DataProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:id" element={<SingleStrore />} />
                <Route path="/Checkout" element={<CheckOut />} />
              </Routes>
            </BrowserRouter>
          </DataProvider>
        </CartDataProvider>
      </StoreDataProvider>
    </>
  );
};

export default App;
