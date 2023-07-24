
import React ,{ useState , useEffect} from "react";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const Sidebar = () => {

const router = useRouter();
const { locale } = router;
const { pathname, query } = router;

const [translations, setTranslations] = useState(null);

useEffect(() => {
async function fetchTranslations() {
  const translations = await getDictionary(locale);
  setTranslations(translations);
}
fetchTranslations();

}, []);

return (
<>
  {translations ? (
    <div className="lang-didebar">
      <a href={`${pathname}?${new URLSearchParams(query).toString()}`} title="Default Demo">
      {translations.form.en}
      </a>
      <a href={`/ar/${pathname}?${new URLSearchParams(query).toString()}`} title="RTL Demo">
      {translations.form.ar}
      </a>
      <a href={`/sp/${pathname}?${new URLSearchParams(query).toString()}`} title="RTL Demo">
      {translations.form.sp}
      </a>
    </div>
  ) : (
  ''
  )}
</>

);
};

export default Sidebar;