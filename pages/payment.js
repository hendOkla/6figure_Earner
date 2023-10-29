import React , { useState } from 'react';
import axios from "axios";

import ReCAPTCHA from 'react-google-recaptcha';

 
const payment = () => {

  
    
  const [isHuman, setIsHuman] = useState(false);
  
  const handleRecaptchaChange = (value) => {
    console.log(value);
    setIsHuman(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isHuman) {
      // Perform form submission logic
      console.log('welcomecaptcha');
    } else {
      alert('Please verify that you are a human');
    }
  };

  return (
    <form>
      {/* Your form fields here */}
      <ReCAPTCHA
        sitekey="6LeNoNsoAAAAAGP9LtPnTn45Ft3A32ytuxdLvCMh"
        onChange={handleRecaptchaChange}
      />
      <button onClick={(e) => handleSubmit(e,"300")} type="submit">Submit</button>
    </form>
  );
}

export default payment;