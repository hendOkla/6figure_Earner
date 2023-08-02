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
    const senCourseID = course_id;

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);


    
    const [count, setCount] = useState(null);
    const [bookInput,  setBook] = useState({});

    useEffect(()=>{
        axios.get(`/api/showOneBook/${course_id}`).then(res=>{
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
        <>
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
                                                <br></br>
                                                <h1 style={{ fontSize: '80px'}}>Loading....</h1>
                                            </div>
                                        </div>
                                    </div>   
                                </>
                                
                         
                            )
                        }

                    <Footer />                
                </>
            ) : (
            ''
            )}
        </>
    )
}

export default digitalBook;