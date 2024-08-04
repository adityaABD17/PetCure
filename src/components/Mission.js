import React from 'react'

import AboutImg from "../assets/images/mission.jpg";

function Mission() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>Our</span> Mission
        </h1>
        <div className="row">
            
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
           
            <p>
            At <span>Pet Cure</span>, our mission is to foster a healthier and happier life for pets by providing access to reliable veterinary care and essential pet services. We strive to connect pet owners with compassionate veterinarians and groomers, ensuring every pet receives the best possible care. Through our platform, we aim to build a community where pet health and well-being are prioritized, offering convenience and peace of mind to pet owners everywhere.


            </p>
            <p>
            Join us in our commitment to enhancing the lives of pets and their families, one paw at a time.</p>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission
