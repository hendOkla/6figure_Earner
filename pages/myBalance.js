import React, { useState, useEffect } from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageBanner from '@/components/Common/PageBanner';
import axios from 'axios';

const MyBalance = () => {
  const [username, setUsername] = useState('');
  const [firstFollowerList, setFirstFollowerList] = useState([]);
  const [secondFollowerLists, setSecondFollowerLists] = useState([]);
  let totalSum = 0;
  let firstCounter = 0;
  let secondCounter = 0;
  useEffect(() => {
    // Get username from storage
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }

    // Fetch data using axios
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/get-attendBy/${username}`);
        if (res.data.status === 200) {
          setFirstFollowerList(res.data.attendBy);

          // Iterate over each element of the matrix
          const secondFollowerPromises = res.data.attendBy.map(async (element) => {
            // Make a query for each element
            const queryResult = await axios.get(`/api/get-attendBy/${element.username}`);
            return queryResult.data.attendBy;
          });

          Promise.all(secondFollowerPromises).then((results) => {
            setSecondFollowerLists(results);
          });
        } else {
          console.log('Not welcome');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
    if (username) {
      fetchData();
    }




  }, [username]);

  useEffect(() => {
    // Toggle dropdown
    const handleClick = (event) => {
      event.target.parentElement.querySelector('.nested').classList.toggle('active');
      event.target.classList.toggle('caret-down');
    };

    const toggler = document.getElementsByClassName('caret');
    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', handleClick);
    }

    return () => {
      for (let i = 0; i < toggler.length; i++) {
        toggler[i].removeEventListener('click', handleClick);
      }
    };
  }, [firstFollowerList]);

  return (
    <>
      <Navbar />
      <PageBanner pageTitle="My Balance" />
      <div className="blog-area">
        <div className="container">
          <div className="row">
            <ul id="myUL">
              <li>
                <span className="caret caret-down">{username}</span>
                <ul className="nested active">
                {firstFollowerList.map((follower, index) => {

                  const currentDate = new Date();
                  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
                  const currentYear = currentDate.getFullYear();

                  const followerCreatedAt = new Date(follower.created_at);
                  const followerMonth = followerCreatedAt.getMonth() + 1;
                  const followerYear = followerCreatedAt.getFullYear();
                  
                  
                  const followerUpdatedAt = new Date(follower.updated_at);
                  const followerUpdatedMonth = followerUpdatedAt.getMonth() + 1;
                  const followerUpdatedYear = followerUpdatedAt.getFullYear();



                  if (followerMonth === currentMonth && followerYear === currentYear) {
                    firstCounter++;
                    totalSum += follower.amount * 0.15;
                  } else if(followerUpdatedMonth===currentMonth && followerUpdatedYear===currentYear){
                    firstCounter++;
                    totalSum += 50 * 0.5;
                  }




                  return (
                    <li key={follower.username}>
                      <span className="caret active caret-down Level2">
                        <span className="spam-ul">{follower.username}</span>
                        <span className="span span-reg StyledDiv"> {(followerMonth === currentMonth && followerYear === currentYear)?`${(follower.amount * 0.15)}$`:((followerUpdatedMonth===currentMonth && followerUpdatedYear===currentYear)?`${(50 * 0.5)}$`:'0 $')}</span>
                      </span>

                      <ul className="nested active level3">
                        {secondFollowerLists[index]?.map((secondFollower) => {

                          const secondCreatedAt = new Date(secondFollowerLists.created_at);
                          const secondMonth = secondCreatedAt.getMonth() + 1;
                          const secondYear = secondCreatedAt.getFullYear();


                          const secondUpdatedAt = new Date(secondFollowerLists.updated_at);
                          const secondUpdatedMonth = secondUpdatedAt.getMonth() + 1;
                          const secondUpdatedYear = secondUpdatedAt.getFullYear();



                          if (secondMonth === currentMonth && secondYear === currentYear) {
                            secondCounter++;
                            totalSum += secondFollower.amount * 0.01;
                          } else if(secondUpdatedMonth===currentMonth && secondUpdatedYear===currentYear){
                            secondCounter++;
                            totalSum += 50 * 0.5;
                          }



                          
                          
                          return (
                            <li key={secondFollower.username}>
                              <span className="spam-ul">{secondFollower.username}</span>
                              <span className="span span-reg StyledDiv">     {(secondMonth === currentMonth && secondYear === currentYear)?`${(secondFollower.amount * 0.01)}$`:((secondUpdatedMonth===currentMonth && secondUpdatedYear===currentYear)?`${(50 * 0.5)}$`:'0 $')}</span>
                            </li>
                          );
                        })}
                      </ul>
                      
                    </li>
                    
                  );
                })}                
                </ul>                
              </li>
            </ul>
            <spam className="pan span-reg spam-ul">Total Sum: <spam style={{color:'white'}}>{totalSum}$</spam></spam>
          </div>
            <div className='row'>
              <div className="cart-table table-responsive" style={{ margin: '0 auto', width: '75%' }}>
                  <table className="table table-bordered">
                      <thead style={{color:'white'}}>
                          <tr>
                              <th className='tb-text' scope="col" style={{fontSize:"30px"}}  colspan="3"> Company Bonus</th>
                          </tr>
                      </thead>
                      <tbody>
                              <tr >
                                <td className="product-thumbnail tb-text">X5</td> 
                                <td className='tb-text'>500$</td>  
                                <td className='tb-text'>{(firstCounter>=5)?firstCounter:'0'}</td>                            
                              </tr>
                              <tr >
                                <td className="product-thumbnail tb-text"> X10</td>   
                                <td className='tb-text'>MACBOOK AIR</td>       
                                <td className='tb-text'>{(firstCounter>=10)?firstCounter:'0'}</td>                         
                              </tr>
                              <tr >
                                <td className="product-thumbnail tb-text">X20</td>     
                                <td className='tb-text'>PAID TRIP + 500%</td>  
                                <td className='tb-text'>{(firstCounter>=20)?firstCounter:'0'}</td>                                                          
                              </tr>
                              <tr >
                                <td className="product-thumbnail tb-text">X30</td>   
                                <td className='tb-text'>2500$</td>   
                                <td className='tb-text'>
                                  {firstCounter >= 15 && (firstCounter + secondCounter) >= 30 ? (
                                    <React.Fragment>
                                      {firstCounter + secondCounter}
                                      <br/>Congratulations
                                    </React.Fragment>
                                  ) : (
                                    '0'
                                  )}
                                </td> 

                              </tr>
                              <tr >
                                  <td className="product-thumbnail tb-text">X60</td>         
                                  <td className='tb-text'>ROLEX</td>   
                                  <td className='tb-text'>
                                    {firstCounter >= 30 && (firstCounter + secondCounter) >= 60 ? (
                                      <React.Fragment>
                                        {firstCounter + secondCounter}
                                        <br/>Congratulations
                                      </React.Fragment>
                                    ) : (
                                      '0'
                                    )}
                                </td>                    
                              </tr>
                              <tr >
                                <td className="product-thumbnail tb-text">X150</td>    
                                <td className='tb-text'>CAR WORTH 15.000$</td>      
                                <td className='tb-text'>
                                  {firstCounter >= 75 && (firstCounter + secondCounter) >= 150 ? (
                                    <React.Fragment>
                                      {firstCounter + secondCounter}
                                      <br/>Congratulations
                                    </React.Fragment>
                                  ) : (
                                    '0'
                                  )}
                                </td>                 
                              </tr>
                      </tbody>
                  </table>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBalance;