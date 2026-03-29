import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer"; 
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;