import React , { useState , useEffect } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import axios from 'axios';
import swal from 'sweetalert';

function BlogSidebar({ myValue }){
    const [showInput, setShowInput] = useState(false);
    const [isActive, setisActive] = useState(false);



    
    
    
    
    const router = useRouter();
    const toggleInput = () => {
        setShowInput(!showInput);
    };
    const[LinkInput,setLink]=useState({
        links:'',
        error_list:[]
    });
    const handleInput=(e)=>{        
        e.persist();
        setLink({...LinkInput,[e.target.name]:e.target.value});
    }
    const data={
        links : LinkInput.links,
    }


    useEffect(()=>{
        const username = localStorage.getItem('username');

        axios.get(`/api/check-payment/${username}`).then(res=>{
            if(res.data.status === 200){
                setisActive(true);
            }else if(res.data.status === 400){
                setisActive(false)
            }
        });
    },[]);
    

    const handleClick = async(e) => {
        e.preventDefault();

        axios.post('api/check-Link',data).then(res=>{
            if(res.data.status===200){
                localStorage.setItem('Link',res.data.extension);                
                router.push({pathname: '/payment-plans'});
                setLink({...LinkInput,error_list:''});                             
            }else if(res.data.status===400){
                swal("Warning",res.data.message,"warning");                 
                setLink({...LinkInput,error_list:''});
            }else{
                setLink({...LinkInput,error_list:res.data.errors});  
            }
        })
      };


      
    
    return (
        <>
            <div className="widget-area" id="secondary">

                {isActive ? (
                     <div className="widget widget_tag_cloud" >
                        <h3 className="widget-title">Show Lessons </h3>

                        <div className="tagcloud">
                            <Link href={`show-lessons?MyID=${myValue}`} onClick={toggleInput} width={'100%'}>
                                <span className="tag-link-count"> </span>  Show 
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="widget widget_tag_cloud" >
                            <h3 className="widget-title">Payment</h3>
                            <div className="tagcloud">
                                <Link href="#myInput" onClick={toggleInput} width={'100%'}>
                                    <span className="tag-link-count"> <Icon.ShoppingCart /></span>  Pay 
                                </Link>
                            </div>
                        </div>
                        {showInput && (
                            <div className='row row-div'>
                                <div className='col-lg-8'>
                                    <input type="Url"
                                            className="form-control"
                                            name="links"
                                            placeholder='Enter the share link please'
                                            onChange={handleInput}
                                            value={LinkInput.links}
                                            required       
                                    />
                                    <span className='span span-reg'>{LinkInput.error_list.links}</span>
                                </div>
                                
                                <div className='col-lg-4'>
                                    <button href="/contact/" onClick={handleClick} className="btn btn-success btn-div">send </button>
                                </div>
                            </div>
                            
                        )}
                    </div>                   
                )}
      
            </div>





        </>
    )
}

export default BlogSidebar;  









