import { BrowserRouter, Routes, Route } from "react-router-dom";

/**** COMPONENTS  ****/
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StickyHeader from "./components/StickyHeader";

/**** PAGES  ****/
import Home from "./pages/Home";
import Product from "./pages/products";
import OneProduct from "./pages/oneProduct";

/**** CSS  ****/
import "bootstrap/dist/css/bootstrap.min.css";

import LogoImage from "./assets/images/bird.jpg";
import "animate.css";

function App() {
  return (
    <>
      {1 !== 1 ? (
        <div>
          <img src={LogoImage} className="loading_image animate__swing " />
        </div>
      ) : (
        <BrowserRouter>
          <TopHeader />
          <StickyHeader />
          <Header />
          <Routes>
            <Route path={"/"}>
              <Route index element={<Home />}></Route>
              
              <Route path="/product" element={<Product />}></Route>
              <Route path="/product/zeinab" element={<OneProduct />}></Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      )}
      <Footer />
    </>
  );
}

export default App;
