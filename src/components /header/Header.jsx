import React from "react";
import logo from "../../images/Vector 2 (Stroke).svg";
import lupa from "../../images/fa6-solid_magnifying-glass.svg"
import H from "./Header.module.css";
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';

import Clock from "../clock/Clock";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === 'en') {
      i18n.changeLanguage('en');
      setLanguage('en');
    } else if (selectedLanguage === 'ru') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    }
  };

  return (
    <header>
      <div className={H.header}>
      <div className={H.name}>
        <div className={H.logo}>
          <img className={H.pic} src={logo} />
          <h1>{t('Welcome to React')}</h1>
          </div>
            <h2>{t('chance')}</h2>
          </div>

        <div className={H.info}>
            <div className={H.box}>
            <div className={H.phone}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" viewBox="0 0 16 16">
                <path fill="white" fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <p>0300 300 <br/> 0334 444</p>
            </div>
            <div className={H.qrcode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 24 24">
                <path fill="white" d="M1 1h10v10H1V1zm2 2v6h6V3H3z" />
                <path fill="white" fillRule="evenodd" d="M5 5h2v2H5z" />
                <path fill="white" d="M13 1h10v10H13V1zm2 2v6h6V3h-6z" />
                <path fill="white" fillRule="evenodd" d="M17 5h2v2h-2z" />
                <path fill="white" d="M1 13h10v10H1V13zm2 2v6h6v-6H3z" />
                <path fill="white" fillRule="evenodd" d="M5 17h2v2H5z" />
                <path fill="white" d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z" />
                </svg>
                <p>QR электронной <br/> очереди</p>
            </div>
            <div className={H.buttons}>
                <button className={H.button} onClick={() => handleLanguageChange('ru')}>
                {language === 'ru' ? 'ru' : 'ru'}
                </button>
                <button  className={H.button} onClick={() => handleLanguageChange('en')}>
                {language === 'en' ? 'en' : 'en'}
                </button>
            </div>
          </div>
          < Clock/>
        </div>

        <div className={H.lupa}>
        <img src={lupa} alt="" />
        <p>Поиск</p>
        </div>
  
      </div>
    </header>
  );
}
