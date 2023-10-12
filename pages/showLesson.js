import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import BlogSidebar2 from '@/components/Blog/BlogSidebar2';
import { useRouter } from 'next/router';
import { getDictionary } from "getDictionary";
import axios from "axios";




 
const BlogDetails = () => {
    const videoKey = Date.now();
    const router = useRouter();
    
    const { URL } = router.query;
    const [LessonInput,  setLesson] = useState([]);

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);


    useEffect(()=>{
        const videoId  = localStorage.getItem('lesson_id');  
        axios.get(`/api/edit-lesson/${videoId}`).then(res=>{
            if(res.data.status === 200){
                setLesson(res.data.lesson);
            }
        }); 

        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[URL]);

    return (
        <>
            {translations ? (
                <>
                    <Navbar />
                    <PageBanner pageTitle={LessonInput[`name_${locale}`]} /> 
                    <div className="blog-details-area ptb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="blog-details-desc">
                                        <div className="article-image">
                                            <video key={videoKey} width={'100%'} controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
                                                <source src={`http://127.0.0.1:8000/${(locale==='ar')? LessonInput.video :LessonInput[`video_${locale}`]}`} />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="article-content">                                    
                                            <p>{LessonInput[`description_${locale}`]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <BlogSidebar2 />                           
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