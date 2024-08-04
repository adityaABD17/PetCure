import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();


const navbarRef = useRef();
const navbarHandler = () =>{
  navbarRef.current.classList.toggle("active");
};

  return (
    <div>
      <header className="header">
        <a href="#" className='logo'>
          <img src={Logo} alt='logo' />
        </a>
        <nav className='navbar' ref={navbarRef}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Find Vet</a>
            <a href="#mission">Our Mission</a>
            <a href="#reviews">Reviews</a>
           
        </nav>
        <div className='icons'>
          <button type="button" className="btn btn-success">Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-danger" onClick={()=>navigate("/login")}>Login</button>   
          <div className='fas fa-bars' id="menu-btn" onClick={() => navbarHandler}> </div>          
        </div>



      </header>
    </div>
  );
 
}

export default NavBar
