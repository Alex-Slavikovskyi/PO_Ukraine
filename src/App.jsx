import { Layout } from './Layout/Layout'
import { useTranslation } from 'react-i18next';

function App() {
  // const { t, i18n } = useTranslation();
  
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // }

  return (
    <>
     {/* <button onClick={() => changeLanguage('en')} className='p-4 border-spacing-1'>EN</button>
    <button onClick={() => changeLanguage('uk')} className='p-4 border-spacing-1'>UK</button> */}
    {/*<div>{t("text1")}</div>
    <div>{t("text1")}</div>
    <div>{t("text1")}</div> */}
      <Layout />
    </>
  )
}

export default App
