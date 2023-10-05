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
      
        
    },[]);

    return (
        <>
            {translations ? (
                <>
                    <Navbar />
                    <PageBanner pageTitle={LessonInput[`name_${locale}`]} /> 
                   
                   
                    <Footer />
                </>
            ) : (
            ''
            )}
        </>
    )
}



export default BlogDetails;