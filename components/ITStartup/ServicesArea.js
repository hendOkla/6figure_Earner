import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const ServicesArea = () => {
    const router = useRouter();

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    useEffect(()=>{
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[]);

    return (
        <>
            <div className="services-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>{translations ? (translations.form.wrProvide) : ('')}</h2>
                                <div className="bar"></div>
                                <h5>{translations ? (translations.form.sourcesProvider) : ('')} </h5>
                            </div>

                            <div className="row">
                                <ul>
                                    <li><p>{translations ? (translations.form.Cryptocurrency) : ('')} </p></li>
                                    <li><p>{translations ? (translations.form.forexTrade) : ('')}</p></li>
                                    <li><p>{translations ? (translations.form.realEst) : ('')}</p></li>
                                    <li><p>{translations ? (translations.form.photography) : ('')}</p></li>
                                    <li><p>{translations ? (translations.form.eCommerce) : ('')}</p></li>
                                    <li><p>{translations ? (translations.form.copywriting) : ('')}</p></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-right-image">
                            <img 
                                src="/images/services-right-image/book-self.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="book-self"
                            />
                           
                            <img 
                                src="/images/services-right-image/box.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="box"
                            />
                         
                            <img 
                                src="/images/services-right-image/chair.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="chair"
                            /> 
                            
                            <img 
                                src="/images/services-right-image/cloud.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="cloud"
                            />
                   
                            <img 
                                src="/images/services-right-image/cup.png"
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="cup"
                            />
               
                            <img 
                                src="/images/services-right-image/flower-top.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="flower"
                            />
                     
                            <img 
                                src="/images/services-right-image/head-phone.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="head-phone"
                            />
                  
                            <img 
                                src="/images/services-right-image/monitor.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="monitor"
                            />
                
                            <img 
                                src="/images/services-right-image/mug.png"
                                className="animate__animated animate__rotateIn animate__delay-0.2s" 
                                alt="mug"
                            />
           
                            <img 
                                src="/images/services-right-image/table.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="table"
                            />
                    
                            <img 
                                src="/images/services-right-image/tissue.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="tissue"
                            />
                   
                            <img 
                                src="/images/services-right-image/water-bottle.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="water-bottle"
                            />
                
                            <img 
                                src="/images/services-right-image/wifi.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="wifi"
                            />
                        
                            <img 
                                src="/images/services-right-image/cercle-shape.png"
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                         
                            <img 
                                src="/images/services-right-image/service-right-main-pic.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-left-image">
                            <img 
                                src="/images/services-left-image/big-monitor.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="big-monitor"
                            />
            
                            <img 
                                src="/images/services-left-image/creative.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="creative"
                            />
    
                            <img 
                                src="/images/services-left-image/developer.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="developer"
                            />
                    
                            <img 
                                src="/images/services-left-image/flower-top.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="flower-top"
                            />
        
                            <img 
                                src="/images/services-left-image/small-monitor.png"
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="small-monitor"
                            />
                        
                            <img 
                                src="/images/services-left-image/small-top.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="small-top"
                            />
                
                            <img 
                                src="/images/services-left-image/table.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="table"
                            />
            
                            <img 
                                src="/images/services-left-image/target.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="target"
                            />
                        
                            <img 
                                src="/images/services-left-image/cercle-shape.png"
                                className="bg-image rotateme" 
                                alt="shape"
                            />
           
                            <img 
                                src="/images/services-left-image/service-left-main-pic.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Lorem Ipsum Dolor Sit Amet</h2>
                                <div className="bar"></div>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            </div>

                            <div className="row">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesArea;