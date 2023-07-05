import React , { useState }from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import { useRouter } from 'next/router';
import * as Icon from 'react-feather';
import swal from 'sweetalert';
import Link from 'next/link';
import axios from 'axios';
 
const Login = () => {

   

    const router = useRouter();

    const[loginInput, setLogin]= useState({
        email:'',
        password:'',
        error_list:[],
    });

    const handleInput=(e)=>{
        e.persist(); 
        setLogin({...loginInput,[e.target.name]:e.target.value});
        
    }






    const handleSubmit= async(e)=>{
        e.preventDefault();

        const data ={
            email :loginInput.email,
            password :loginInput.password,
        }
          //CHECK IF PASSWORD EQUAL CONFIRM PASSWORD  
            axios.get(`/sanctum/csrf-cookie`).then(response=>{
                axios.post(`/api/login-customer`,data).then(res=>{
                    if(res.data.status===200){
                        localStorage.setItem('auth_token',res.data.token);
                        localStorage.setItem('auth_token',res.data.fname); 
                        localStorage.setItem('username',res.data.username);
                        swal("Success",res.data.message,"success"); 
                        if(localStorage.getItem(`course_id`)!==null){
                            router.push({pathname: '/blog-details' , query: { id: localStorage.getItem(`course_id`) }});
                        }else{
                            router.push({pathname: '/'});
                        }

                        
                    }else if(res.data.status===401){
                        swal("Warning",res.data.message,"warning");                
                    }else{
                        setLogin({...loginInput,error_list:res.data.validation_errors});
                    }
                })
            })

 


        
    }



    





    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Login" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" />
                            </Link>
                            <p>Don't have an account yet? <Link href="/sign-up">Sign Up</Link></p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email"
                                       className="form-control"
                                        name="email"
                                        onChange={handleInput}
                                />
                                <span className='span span-reg'>{loginInput.error_list.email}</span>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" 
                                       className="form-control"
                                       name="password"
                                       onChange={handleInput}
                                />
                                <span className='span span-reg'>{loginInput.error_list.password}</span>
                            </div>

                            <div className="mb-3">
                                <p><Link href="/forgot-password">Forgot Password</Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>

                        <div className="foot">
                            <p>or connect with</p>
                            <ul>
                                <li>
                                    <a href="https://www.mail.com/" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Login;