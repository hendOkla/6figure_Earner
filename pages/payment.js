import React , { useState } from 'react';
import axios from "axios";

import ReCAPTCHA from 'react-google-recaptcha';

 
const payment = () => {

  
    
  const [isHuman, setIsHuman] = useState(false);
  
  const handleRecaptchaChange = (value) => {
    setIsHuman(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isHuman) {
      // Perform form submission logic
    } else {
      alert('Please verify that you are a human');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      <ReCAPTCHA
        sitekey="6LeNoNsoAAAAAGP9LtPnTn45Ft3A32ytuxdLvCMh"
        onChange={handleRecaptchaChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default payment;