import React from "react";
import ServicesPay from '@/components/BigdataAnalytics/ServicesPay';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import { useRouter } from 'next/router';


const Pay = () => {
    return (
        <div>
          {/* <Navbar /> */}
          <ServicesPay />
          <Footer />
        </div>
    );
}
export default Pay;
