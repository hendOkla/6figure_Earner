import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import axios from "axios";
import { getDictionary } from "getDictionary";




const NavbarStyleFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();



  /* const cart = useSelector((state) => state.cart); */
  const [menu, setMenu] = React.useState(true);
  const [categoryList,setCategoryList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);


  const { locale } = router;
  const { pathname, query } = router;
  const [translations, setTranslations] = useState(null);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setCurrentPath(router.asPath);

    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    // Check if `localStorage` is available
    if (typeof window !== 'undefined') {
      const authToken = window.localStorage.getItem('auth_token');
      if (authToken !== null) {
        setIsLoggedIn(true);
      }
    } 
    fetchCategoryList(); 

    //for translation 
    async function fetchTranslations() {
        const translations = await getDictionary(locale);
        setTranslations(translations);
    }
    fetchTranslations();

  }, [router.query,isLoggedIn]);


  

  const handleClick = (isLoggedIn) => {
    setIsLoading(true);
    if(isLoggedIn){
      axios.post('api/logout-customer').then(res=>{
        if(res.data.status===200){
          /* localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_token'); */
          window.localStorage.clear();
          if (router.pathname === '/') {
            router.reload(); // Reload the page if on the "/" path
          } else {
            router.push({ pathname: '/' });
          }
        }
        setIsLoading(false);
      });
    }else{
      router.push({
        pathname: '/login'
      });
      setIsLoading(false);
    }
  };

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
    <div>
      {isLoading ? (
        // Show loading style while checking if isLoggedIn is true        
        <div class="containerLoadin">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <span class="loading">Loading...</span>            
        </div>
      ) : (
        <header id="header" className="headroom navbar-color-white navbar-style-four">
          <div className="startp-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/" className="navbar-brand img-header">
                  <img src="/images/logo-white.png" alt="logo"     height= {"75px;"} />
                  
                </Link>
                <div style={{ color: 'white' }}> 
                  <span style={{ fontWeight: 900, padding: 10 }}> {isLoggedIn ? '': ''} </span>      
                  {isLoggedIn ? localStorage.getItem('link'): ''}  
                </div>

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
                        {translations ? (translations.form.home) : ('')}                      
                      </Link>
                    </li>

                    {isLoggedIn && (
                      <li className="nav-item">
                          <Link
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            {translations ? (translations.form.education) : ('')} <Icon.ChevronDown />
                          </Link>
    
                          <ul className="dropdown-menu">
                              {
                                categoryList.map((item)=>{
                                    return(
                                      <li className="nav-item" key={item.id}>
                                        <Link className="nav-item"  href={{ pathname: '/blog-5', query: { id: `${item.id}` ,cat:`${item.name_en}`} }}>
                                          {translations ? (item[`name_${locale}`]) : ('')}
                                        </Link>
                                      </li>
                                    )
                                })
                            }
                          </ul>
                      </li>

                    )}







                    <li className="nav-item">
                    </li>

                    <li className="nav-item">
                        <Link href="/about-3/"onClick={toggleNavbar}className={`nav-link ${currentPath == "/about-3/" && "active"}`}>
                        {translations ? (translations.form.about) : ('')}
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
                        {translations ? (translations.form.contact) : ('')}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/pricing"
                        onClick={toggleNavbar}
                        className={`nav-link ${
                          currentPath == "/" && "active"
                        }`}
                      >
                        {translations ? (translations.form.services) : ('')}                      
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Others option */}
                <div className="others-option">
                  <button href="/contact/" onClick={() => handleClick(isLoggedIn)} className="btn btn-primary">
                    {isLoggedIn ? (translations ? (translations.form.logOut) : ('')) : (translations ? (translations.form.login) : (''))} 
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>
      )}




    </div>

    
  );
};

export default NavbarStyleFour;
