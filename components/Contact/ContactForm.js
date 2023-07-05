import React, { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
      title: "Congratulations!",
      text: "Your message was successfully send and will back to you soon",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  

  

const ContactForm = () => {

    const[emailMessage,setEmailMessage] = useState({
        customer_name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
        error_list:[]
    })

    const handleInput=(e)=>{
        
        e.persist();
        setEmailMessage({...emailMessage,[e.target.name]:e.target.value});
    }

    const data = {
        customer_name: emailMessage.customer_name,
        email: emailMessage.email,
        number: emailMessage.number,
        subject: emailMessage.subject,
        text: emailMessage.text,
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`/api/sendMail`,data).then(res=>{
           
            
            if(res.data.status === 200){
                alertContent();                 
            }else if(res.data.status === 400){
                setEmailMessage({...emailMessage,error_list:res.data.errors});  
            }
        });
    };

    return (
        <>
            <div className="contact-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Get In Touch With Us</h2>
                        <div className="bar"></div>
                        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <img src="/images/contact-img.png" alt="image" />
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="customer_name" 
                                                placeholder="Your Name" 
                                                className="form-control" 
                                                value={emailMessage.customer_name}
                                                onChange={handleInput}
                                                required
                                            />
                                            <span className='span span-reg'>{emailMessage.error_list.customer_name}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Your email address" 
                                                className="form-control" 
                                                value={emailMessage.email}
                                                onChange={handleInput}
                                                required
                                            />
                                            <span className='span span-reg'>{emailMessage.error_list.email}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Your phone number" 
                                                className="form-control" 
                                                value={emailMessage.number}
                                                onChange={handleInput}
                                                required
                                            />
                                            <span className='span span-reg'>{emailMessage.error_list.number}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Your Subject" 
                                                className="form-control" 
                                                value={emailMessage.subject}
                                                onChange={handleInput}
                                                required
                                            />
                                            <span className='span span-reg'>{emailMessage.error_list.subject}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="5" 
                                                placeholder="Write your message..." 
                                                className="form-control" 
                                                value={emailMessage.text}
                                                onChange={handleInput}
                                                required
                                            />
                                            <span className='span span-reg'>{emailMessage.error_list.text}</span>
                                        </div>
                                   </div>
                
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;  