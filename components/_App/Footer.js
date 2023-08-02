import React,{ useState, useEffect } from 'react';
import Link from "next/link";
import * as Icon from "react-feather";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <p className="p-footer">
                {translations ? (translations.form.Footer_para) : ('')}
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="single-footer-widget">
                
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>{translations ? (translations.form.address) : ('')}</h3>

                <ul className="footer-contact-info">
                  {/* <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li> */}
                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:6figure@6figure-earner.net">6figure@6figure-earner.net</a>
                  </li>
                  {/* <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                </ul>
               {/*  <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} StartP. All rights reserved by{" "}
                  <a href="#" target="_blank">
                    IT-Developer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
