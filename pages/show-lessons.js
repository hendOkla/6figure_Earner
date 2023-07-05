import React , {useState , useEffect} from 'react';
import PageBanner from '@/components/Common/PageBanner';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import * as Icon from 'react-feather';
import axios from "axios";
import { useRouter } from 'next/router';


const DownloadLesson = () => {
    const router = useRouter();
    const { MyID } = router.query;



    



    const CourseID = MyID;
    const course_id = CourseID;
    const [lessonList,setLessonList] = useState([]);

    

    useEffect(()=>{
        axios.get(`/api/custom-lesson/${course_id}`).then(res=>{
            if(res.data.status === 200){
                setLessonList(res.data.lessons);
            }
        });
    },[course_id]);

    const handleDownloadClick = (e,videoId,Url)=>{
        e.preventDefault();

        localStorage.setItem('lesson_id',videoId);
        router.push({
            pathname: '/showLesson',
            query: {URL:Url }
        });

        


    }
    return (
      <div>
        <Navbar />
        <PageBanner pageTitle="Course Name" />
        <div className="team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        lessonList.map((item)=>{
                            return(
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-team">
                                        <div className="team-image">
                                            <img height={'150px'} src="/images/team-image/team1.jpeg" alt="image" />
                                        </div>
            
                                        <div className="team-content">
                                            <div onClick={(e)=>handleDownloadClick(e,item.id, item.video)} className="team-info">
                                                <h3>Display</h3>
                                            </div>
                                            <div>
                                                <h6>{item.name_en}</h6>
                                            </div>
            
                                            <p>{item.description_en}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div> 

       
        <Footer />
      </div>
    );
  };
  
  export default DownloadLesson;