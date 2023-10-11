import React,{ useState, useEffect } from 'react';
import Navbar  from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import ServicesArea from "@/components/ITStartup/ServicesArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 

import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';






const BigdataAnalytics = () => {
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
            <Navbar />
            <PageBanner pageTitle="" />

            <MainBanner />

            <ServicesArea />
           
            <Footer />
        </>
    )
}

export default BigdataAnalytics;