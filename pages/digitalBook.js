import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import { useRouter } from 'next/router';
import { getDictionary } from "getDictionary";
import axios from "axios";

const digitalBook = () => {
    const router = useRouter();
    const { course_id } = router.query;

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);    
    const [bookInput,  setBook] = useState({});
    
    useEffect(()=>{
        
        const courseID = localStorage.getItem('course_idBook');
        console.log(courseID);
        axios.get(`/api/getBookCourse/${courseID}`).then(res=>{
            if(res.data.status === 200){
                setBook(res.data.book);
                console.log(res.data.book);

                
            }
        });
        
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();   
    },[course_id]);

    

    

    return (
      <form>
          <style jsx>{`
              .pdf-embed {
                  width: 100%;
                  height: 100vh;
              }

              /* Hide download and print buttons */
              .pdf-embed::-webkit-media-controls-download-button,
              .pdf-embed::-webkit-media-controls-print-button {
                  display: none !important;
              }
          `}</style>
          {translations ? (
              <>
                  <Navbar />
                      {bookInput.length ? 
                          (
                              bookInput.map((item)=>{
                                  return(
                                      <>
                                          <PageBanner pageTitle={item[`name_${locale}`]} /> 
                                          <div className="blog-details-area ptb-80">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="col-lg-12 col-md-12">
                                                          <embed src={`https://6figure-earner.com/LarReApi/public/${item[`book_${locale}`]}`} className="pdf-embed" width="100%" height="1500px" type="application/pdf"/>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>   
                                      </>
                               
                                  )
                              })
                          ) : (
                              <>
                                  <PageBanner pageTitle={translations.form.digitalBook} /> 
                                  <div className="d-table">
                                      <div className="error-content">
                                          <div className="notfound-404" >
                                              {/* Added loading text */}
                                              Loading....
                                          </div>
                                      </div>
                                  </div>   
                              </>
                              
                       
                          )
                      }

                  {/* Moved Footer outside of the conditional rendering */}
                  {/* so that it is always rendered */}
                  <Footer />                
              </>
          ) : null}
      </form>
    );
}

export default digitalBook;