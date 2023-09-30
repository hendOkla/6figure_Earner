import React , { useState , useEffect } from 'react';
import { useRouter } from "next/router";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
import { getDictionary } from "getDictionary"; 
 
const Pricing = () => {
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

    
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="pricing"/>
            <div className="pt-80">
                <PricingStyleFour />
            </div> 
            <Footer />
        </>
    )
}

export default Pricing;