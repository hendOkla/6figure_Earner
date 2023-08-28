import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from "axios";
import { getDictionary } from "getDictionary";

 
const Blog5 = () => {
    const router = useRouter();
    const { id } = router.query;
    const { cat } = router.query;
    const [curseList,setCurseList] = useState([]);
    const [curseListBook,setCurseListBook] = useState([]);




    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);
    

    React.useEffect(() => {
        const authToken = window.localStorage.getItem('auth_token');
        if (authToken === null) {
            router.push({pathname: '/login'});
        }
        setCurseList([]);       
        setCurseListBook([]);
        fetchCourseList();    

        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[id]);

    function fetchCourseList(){
        axios.get(`/api/courseWIdCat`, {params: {id: id,status: 0}} ).then(res=>{
            console.log (id);
            if(res.data.status === 200){
                setCurseList(res.data.course)
                console.log(res.data.course);
            }
        });
        axios.get(`/api/courseWIdCat`, {params: {id: id,status: 1}} ).then(res=>{
            console.log (id);
            if(res.data.status === 200){
                setCurseListBook(res.data.course)
                console.log(res.data.course);
            }
        });


    } 

    const handleClick = (category_id , course_id) => {
            localStorage.setItem('category_id',category_id);
            localStorage.setItem('course_id',course_id);     
               
        if(localStorage.getItem(`auth_token`)){
            router.push({
                pathname: '/blog-details',
                query:{course_id: course_id}
            });
        }else{
            router.push({
                pathname: '/login'
            });
        }
    };
    const handleClickBook = (category_id , course_id) => {
            localStorage.setItem('category_idBook',category_id);
            localStorage.setItem('course_idBook',course_id);     
               
        if(localStorage.getItem(`auth_token`)){
            router.push({
                pathname: '/digitalBook',
                query:{course_id: course_id}
            });
        }else{
            router.push({
                pathname: '/login'
            });
        }
    };



    return (
        <>
            {translations ? (
                <>
                    <Navbar />
                    <PageBanner pageTitle={cat} /> 
                        <div className="blog-area ptb-80">
                            <div className="container">
                                <div className="row">
                                    {curseList.length ? 
                                        (
                                            curseList.map((item)=>{
                                                return(
                                                    <>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="single-services-box-item" onClick={() => handleClick(id, item.id)}>
                                                                <div className="icon">
                                                                    <img src={`https://6figure-earner.net/LarReApi/public/${item.image}`}  alt="image" />
                                                                </div>
                                                                <h3>
                                                                    <Link href="#" className="link-service" >
                                                                        {item[`name_${locale}`]}
                                                                    </Link>
                                                                </h3>
                                                                <p>{item[`description_${locale}`]}</p>
                                                                
                                                                <Link href="#"  className="learn-more-btn link-service">
                                                                    <Icon.ArrowRight /> {localStorage.getItem(`auth_token`)?translations.form.buy:translations.form.show}
                                                                </Link>

                                                                <div className="shape">
                                                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        ) : (
                                            <div className="d-table">
                                                <div className="error-content">
                                                    <div className="notfound-404" >
                                                        <h1 style={{ fontSize: '80px'}}>Loading....</h1>
                                                    </div>
                                                </div>
                                            </div>                            
                                        )
                                    }
                                </div>
                            </div>

                            {/* Shape Images */}
                            <div className="shape2 rotateme">
                                <img src="/images/shape2.svg" alt="shape" />
                            </div>
                            <div className="shape3">
                                <img src="/images/shape3.svg" alt="shape" />
                            </div>
                            <div className="shape4">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape6 rotateme">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape7">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape8 rotateme">
                                <img src="/images/shape2.svg" alt="shape" />
                            </div>
                        </div>
                        {/* Book */}
                        
                        <PageBanner pageTitle='Books' />
                        <div className="blog-area ptb-80">
                            <div className="container">
                                <div className="row">
                                    {curseListBook.length ? 
                                        (
                                            curseListBook.map((itemBook)=>{
                                                return(
                                                    <>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="single-services-box-item" onClick={() => handleClickBook(id, itemBook.id)}>
                                                                <div className="icon">
                                                                    <img src={`https://6figure-earner.net/LarReApi/public/${itemBook.image}`}  alt="image" />
                                                                </div>
                                                                <h3>
                                                                    <Link href="#" className="link-service" >
                                                                        {itemBook[`name_${locale}`]}
                                                                    </Link>
                                                                </h3>
                                                                <p>{itemBook[`description_${locale}`]}</p>
                                                                
                                                                <Link href="#"  className="learn-more-btn link-service">
                                                                    <Icon.ArrowRight /> {localStorage.getItem(`auth_token`)?translations.form.buy:translations.form.show}
                                                                </Link>

                                                                <div className="shape">
                                                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        ) : (
                                            <div className="d-table">
                                                <div className="error-content">
                                                    <div className="notfound-404" >
                                                        <h1 style={{ fontSize: '80px'}}>Loading....</h1>
                                                    </div>
                                                </div>
                                            </div>                            
                                        )
                                    }
                                </div>
                            </div>

                            {/* Shape Images */}
                            <div className="shape2 rotateme">
                                <img src="/images/shape2.svg" alt="shape" />
                            </div>
                            <div className="shape3">
                                <img src="/images/shape3.svg" alt="shape" />
                            </div>
                            <div className="shape4">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape6 rotateme">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape7">
                                <img src="/images/shape4.svg" alt="shape" />
                            </div>
                            <div className="shape8 rotateme">
                                <img src="/images/shape2.svg" alt="shape" />
                            </div>
                        </div>

                    <Footer />                    
                
                </>
            ) : (
            ''
            )}
        </>
    )
}

export default Blog5;