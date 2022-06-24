import { BrowserRouter, Routes, Route } from "react-router-dom";

/**** COMPONENTS  ****/
import TopHeader from "./components/TopHeader";
import Footer from './components/Footer'

/**** PAGES  ****/
import Home from './pages/Home';

/**** CSS  ****/
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
       <TopHeader/>
       <BrowserRouter>
          <Routes>
            <Route path={"/"}>
              <Route index element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </>
    
  );
}

export default App;
