import React , { useState , useEffect }from 'react';
import Link from 'next/link';
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const FunFactsArea = () => {
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
            <div className="funfacts-area ptb-80">
                <div className="container">
                    <div className="contact-cta-box">
                        <h3>{translations ? (translations.form.haveQ) : ('')}</h3>
                        <p>{translations ? (translations.form.dontHesitate) : ('')}</p>

                        <Link href="/contact" className="btn btn-primary">
                        {translations ? (translations.form.contact) : ('')}
                        </Link>
                    </div>
                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFactsArea;