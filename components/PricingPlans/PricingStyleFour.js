import React, { useState , useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import * as Icon from 'react-feather';
import { getDictionary } from "getDictionary";


const PricingStyleFour = () => {
    const router = useRouter();
    const { locale } = router;
    const [translations, setTranslations] = useState(null);
    

    useEffect(() => {
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();        
        
    }, []);

    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    return (
        <>
            <div className="pricing-area pb-50">
                
                <div className="container"> 
                    <h5 className='mb-4'> 
                        {translations ? (translations.form.pricing1) : ('')}
                    </h5>
                   
                    <div className="section-title">
                        <br></br><br></br>
                        <h2>{translations ? (translations.form.pricingPlan) : ('')}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="tab pricing-tab bg-color">
                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>6FE Standard</h3>
                                                <p><br></br></p>
                                                <img src="/images/standard.webp" alt="logo" height="250px;"></img>
                                            </div>

                                            <div className="price">
                                                $350 <span></span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="checkout?type=standard" className="btn btn-primary">                                                     
                                                    {translations ? (translations.form.Checkout) : ('')}
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> 6FE Academy</li>
                                                <li><Icon.Check /> 6FE Ebook</li>
                                                <li><Icon.X  style={{ color: 'red' }} /> 6FE Streaming</li>
                                                <li><Icon.X  style={{ color: 'red' }} /> 6FE Consultations</li>
                                                <li><Icon.X  style={{ color: 'red' }} /> 6FE Private call</li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>6FE Pro</h3>
                                                <p><br></br></p>
                                                <img src="/images/Pro.webp" alt="logo" height="250px;"></img>
                                            </div>

                                            <div className="price">
                                                $600 <span>/m</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="checkout?type=Pro" className="btn btn-primary">
                                                {translations ? (translations.form.Checkout) : ('')}
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> 6FE Academy</li>
                                                <li><Icon.Check /> 6FE Ebook</li>
                                                <li><Icon.Check /> 6FE Streaming</li>
                                                <li><Icon.Check /> 6FE Consultations</li>
                                                <li><Icon.Check /> 6FE Private call</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default PricingStyleFour;