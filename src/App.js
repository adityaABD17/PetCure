import React from "react";
import "./assets/css/style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import FindVet from "./components/FindVet";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Review from "./components/Review";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Doctor from "./components/Doctor";

function App() {
  return (
    <div className="App">


    <BrowserRouter>

      <NavBar />
      <Routes>
      <Route path="/" element={
      <div>
      <Home />
      <About />
      <FindVet />
      <Mission />
      <Review />
      </div>
      }></Route>

      <Route path="/login" element={<Login></Login>}></Route>

      <Route path="/Doctor" element={<Doctor></Doctor>}></Route>

      </Routes>

      <Footer />
    
    
    </BrowserRouter>
      
    </div>
  );
}

export default App;