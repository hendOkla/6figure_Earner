import React ,{ useState , useEffect} from "react";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import { FaGlobe } from 'react-icons/fa';





const Sidebar = () => {
  const router = useRouter();
  const { locale } = router;
  const { pathname, query } = router;

  const [translations, setTranslations] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchTranslations() {
      const translations = await getDictionary(locale);
      setTranslations(translations);
    }
    fetchTranslations();
    

    if (typeof window !== 'undefined') {
      const authToken = window.localStorage.getItem('auth_token');   
      if (authToken !== null) {
        // Do something if link is not empty
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
    } 
  },[isLoggedIn]);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const sidebarDropdown = () => {
    setSidebarOpen(!sidebarOpen);
  };

 return (
   <>
     <div className="lang-didebar">
       <div className="dropdown" onClick={toggleDropdown}>
         <a href="#" title="Default Demo" style={{ backgroundColor: "#483e3e00" }}>
          <FaGlobe />
         </a>
         {dropdownOpen && (
           <>
            <a href={`${pathname}?${new URLSearchParams(query).toString()}`} title="Demo">
              {translations ? translations.form.en : ''}
            </a>
             <a href={`/ar/${pathname}?${new URLSearchParams(query).toString()}`} title="RTL Demo">
               {translations ? translations.form.ar : ''}
             </a>
             <a href={`/sp/${pathname}?${new URLSearchParams(query).toString()}`} title="RTL Demo">
               {translations ? translations.form.sp : ''}
             </a>
             <a href='#' title="RTL Demo" style={{ backgroundColor: "#483e3e00" }}>
               
             </a>
           </>
         )}
       </div>
     </div>

   </>
 );
};

export default Sidebar;