import React from 'react'
import AboutImg from "../assets/images/about.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
            
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes us special?</h3>
            <p>
            At PetCure, we are dedicated to providing exceptional care for your beloved pets. Our platform connects pet owners with experienced veterinarians, ensuring your furry friends receive the best possible treatment. We believe in compassionate, personalized care to keep your pets healthy and happy.
            </p>
            <p>
            With a commitment to health, convenience, and trust, PetCure is your go-to partner in pet wellness. Our mission is to make veterinary care accessible and stress-free, so you can focus on the joy your pets bring to your life.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
