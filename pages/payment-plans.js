import React from 'react';
import Services from '@/components/BigdataAnalytics/Services';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import { useRouter } from 'next/router';

const PaymentPlans = () => {
  const router = useRouter();
  


  React.useEffect(() => {
    const link = localStorage.getItem('Link');
    const authToken = window.localStorage.getItem('auth_token');
    if(link === null || authToken=== null){
      router.push({pathname: '/'});
    }    
  },[]);

    return (
      <div>
        <Navbar />
        <Services />
        <Footer />
      </div>
    );
};
  
export default PaymentPlans;