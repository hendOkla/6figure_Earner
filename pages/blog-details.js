import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import { useRouter } from 'next/router';
import { getDictionary } from "getDictionary";

import axios from "axios";
 
const BlogDetails = () => {

    const router = useRouter();
    const { course_id } = router.query;
    const senCourseID = course_id;

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);


    
    const [count, setCount] = useState(null);
    const [courseInput,  setCourse] = useState({
        category_id:'',
        name_ar:'',
        name_en:'',
        name_sp:'',
        description_ar:'',
        description_en:'',
        description_sp:'',
    });

    useEffect(()=>{
        axios.get(`/api/edit-course/${course_id}`).then(res=>{
            if(res.data.status === 200){
                setCourse(res.data.course);
            }
        });
        
        axios.get(`/api/countLesson/${course_id}`).then(response => {
        setCount(response.data.count);
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
                    <PageBanner pageTitle={courseInput[`name_${locale}`]} /> 
                    <div className="blog-details-area ptb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="blog-details-desc">
                                        <div className="article-image">
                                            <img src={`http://127.0.0.1:8000/${courseInput.image}`} alt="image" />
                                        </div>
                                        <div className="article-content">
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <Icon.Clock /> {translations.form.number_lesson}: {count}
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2>{courseInput[`name_${locale}`]}</h2> 
                                            <p>{courseInput[`description_${locale}`]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <BlogSidebar myValue={senCourseID}/>
                                </div>
                            </div>
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

export default BlogDetails;