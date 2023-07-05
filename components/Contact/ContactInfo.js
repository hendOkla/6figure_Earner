import React,{ useState} from 'react';
import * as Icon from 'react-feather';
import axios from "axios";

const ContactInfo = () => {

    const [contactList,setContactList] = useState([]);
    

    React.useEffect(() => {
        setContactList([]);       
        fetchContactList();    
    },[]);

    function fetchContactList(){
        axios.get(`/api/view-contact`).then(res=>{
            
            if(res.data.status === 200){
                setContactList(res.data.contact)
                console.log(res.data.contact);
            }
        });
    } 



    return (
        contactList.map((item)=>{
            return(
                <>
                    <div className="contact-info-area ptb-80">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="contact-info-box">
                                        <div className="icon">
                                            <Icon.Mail />
                                        </div>
                                        <h3>Mail Here</h3>
                                        <p><a href="mailto:info@startp.com">{item.email}</a></p>
                                    </div>
                                </div>
        
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="contact-info-box">
                                        <div className="icon">
                                            <Icon.MapPin />
                                        </div>
                                        <h3>Visit Here</h3>
                                        <p>{item.location_en}</p>
                                    </div>
                                </div>
        
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="contact-info-box">
                                        <div className="icon">
                                            <Icon.Phone />
                                        </div>
                                        <h3>Call Here</h3>
                                        <p><a href="tel:+1234567890">{item.phone}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        })

    )
}

export default ContactInfo;  