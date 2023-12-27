import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import Link from 'next/link';
import axios from "axios";





 
const myProfile = () => {
    const [CustomerInput,  setCustomer] = useState({
        username:'',
        lname:'',
        fname:'',
        email:'',
        link:'',
        password:'',
        confPassword:'',
        status:'',
    });
    useEffect(()=>{
        const id =localStorage.getItem('id');
        axios.get(`/api/edit-customer/${id}`).then(res=>{
            if(res.data.status===200){
                setCustomer(res.data.customer);
            }
        })
    },[]);

    




    return (
        <>
            <Navbar/>
            <PageBanner pageTitle="" />  
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                            <img src={`https://6figure-earner.com/LarReApi/public/${CustomerInput.image}`} alt='not uploaded image for user ' width='100px' height='100px'/>
                            </Link>
                        </div>
                        <form >
                            <div className="row">
                                <div className="col-lg-4">
                                    <label>Username: </label>
                                </div>
                                <div className="col-lg-8">
                                    <label>{CustomerInput.username}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label>First Name: </label>
                                </div>
                                <div className="col-lg-8">
                                    <label>{CustomerInput.fname}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label>Last Name: </label>
                                </div>
                                <div className="col-lg-8">
                                    <label>{CustomerInput.lname}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label>Email: </label>
                                </div>
                                <div className="col-lg-8">
                                    <label>{CustomerInput.email}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label>Link: </label>
                                </div>
                                <div className="col-lg-8">
                                    <label>{CustomerInput.link}</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>                       
            <Footer />
        </>
    )
}

export default myProfile;