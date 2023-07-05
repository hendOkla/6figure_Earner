import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import BlogSidebar2 from '@/components/Blog/BlogSidebar2';
import { useRouter } from 'next/router';

import axios from "axios";




 
const BlogDetails = () => {
    const videoKey = Date.now();
    const router = useRouter();
    
    const { URL } = router.query;
    const [LessonInput,  setLesson] = useState([]);



    useEffect(()=>{
        const { videoId } = localStorage.getItem(`lesson_id`);         
        axios.get(`/api/edit-lesson/${videoId}`).then(res=>{
            if(res.data.status === 200){
                setLesson(res.data.lesson);
            }
        }); 
    },[]);

    return (
        <>
            <Navbar />
            <PageBanner pageTitle={LessonInput.name_en} /> 
            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <video key={videoKey} width={'100%'} controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
                                        <source src={`https://6figure-earner.world/LarReApi/public/${URL}`} />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="article-content">                                    
                                    <p>{LessonInput.description_en}</p>
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
    )
}



export default BlogDetails;