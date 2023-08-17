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

  useEffect(() => {
    async function fetchTranslations() {
      const translations = await getDictionary(locale);
      setTranslations(translations);
    }
    fetchTranslations();
  }, []);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

 return (
   <>
     <div className="lang-didebar">
       {/* Add onClick event and conditionally render dropdown based on dropdownOpen state */}
       <div className="dropdown" onClick={toggleDropdown}>

         <a href="#" title="Default Demo" style={{ backgroundColor: "#483e3e00" }}>
          <FaGlobe />
         </a>


         {/* Conditionally render dropdown content if dropdown is open */}
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