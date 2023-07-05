import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import axios from "axios";



const NavbarStyleFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const [categoryList,setCategoryList] = useState([]);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });

     fetchCategoryList(); 


  },[]);

  function fetchCategoryList(){
    axios.get('/api/all-category').then(res=>{
      if(res.data.status ===200){
          setCategoryList(res.data.category)
      }
    });
  } 

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom navbar-color-white navbar-style-four">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/it-startup" className="navbar-brand img-header">
                <img src="/images/logo-white.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home 
                      
                    </Link>


                  </li>
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Courses <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">

                    {
                        categoryList.map((item)=>{
                            return(


                              <li className="nav-item" key={item.id}>
                                <Link className="nav-item"  href={{ pathname: '/blog-5', query: { id: `${item.id}` } }}>
                                  {item.name_en}
                                </Link>
                              </li>
                            )
                        })
                    }


                    </ul>
                  </li>
                  <li className="nav-item">
                  {/* <select
                    className='form-control'
                    name="category_id"
                    
                  >
                      <option>Select Category </option>
                      {
                          categoryList.map((item)=>{
                              return(
                                  <option value={item.id} key={item.id}>{item.name_en} </option>                                                            
                              )
                          })
                      }
                  </select> */}
                  </li>

                  <li className="nav-item">
                      <Link href="/about-3/"onClick={toggleNavbar}className={`nav-link ${currentPath == "/about-3/" && "active"}`}>
                        About
                      </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/team/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/team/" && "active"
                      }`}
                    >
                      Team
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">
                {/* <Link href="/cart/" className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link> */}
 
                <Link href="/contact/" className="btn btn-primary">
                  Support
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarStyleFour;
