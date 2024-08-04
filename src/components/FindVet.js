import React, { useState } from 'react';

const FindVet = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [selectedPinCode, setSelectedPinCode] = useState('');

  const handleSelectChange = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <>
      <div className="contact">
        <div className="row">
          <form>
          <h1 className="heading">
                <span>Find</span> Vet 
            </h1>
            <p>Fill out the form below to find a vet near you.</p>

            <div className="inputGroup">
              <div className="inputBox">
              <label className="selectedLabel">Selected City: {selectedCity || 'None'}</label>
                <label htmlFor="city">City:</label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(e) => handleSelectChange(e, setSelectedCity)}
                >
                  <option value="">Select City</option>
                  <option value="Pune">Pune</option>
                  <option value="Indore">Indore</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
                
              </div>

              <div className="inputBox">
              <label className="selectedLabel">Selected Locality: {selectedLocality || 'None'}</label>
                <label htmlFor="locality">Locality:</label>
                <select
                  id="locality"
                  value={selectedLocality}
                  onChange={(e) => handleSelectChange(e, setSelectedLocality)}
                >
                  <option value="">Select Locality</option>
                  <option value="Shivaji Nagar">Pune-Shivaji Nagar</option>
                  <option value="Karve Nagar">Pune-Karve Nagar</option>
                  <option value="Vijay Nagar">Indore-Vijay Nagar</option>
                  <option value="Palasia">Indore-Palasia</option>
                  <option value="Rajwada">Indore-Rajwada</option>
                  <option value="Andheri">Mumbai-Andheri</option>
                  <option value="Chembur">Mumbai-Chembur</option>
                  <option value="Juhu">Mumbai-Juhu</option>
                </select>
                
              </div>

              <div className="inputBox">
                <label className="selectedLabel">Selected PinCode: {selectedPinCode || 'None'}</label>
                <label htmlFor="pincode">PinCode:</label>
                <select
                  id="pincode"
                  value={selectedPinCode}
                  onChange={(e) => handleSelectChange(e, setSelectedPinCode)}
                >
                  <option value="">Select PinCode</option>
                  <option value="411003">Shivaji Nagar - 411003</option>
                  <option value="411052">Karve Nagar - 411052</option>
                  <option value="411033">Hinjewadi - 411033</option>
                  <option value="452010">Vijay Nagar - 452010</option>
                  <option value="452001">palasia - 452001</option>
                  <option value="452004">Rajawada - 452004</option>
                  <option value="400047">Andheri - 400047</option>
                  <option value="400049">Juhu - 400049</option>
                  <option value="400071">Chembur - 400071</option>
                </select>
                
              </div>
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindVet;
