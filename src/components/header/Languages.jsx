import React from "react";
import { useTranslation } from 'react-i18next';

const Languages = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="languages-btn">
          <button type="button" className='btn btn-primary' onClick={() => changeLanguage('en')}>
            en
          </button>
          <button type="button" className='btn btn-primary' onClick={() => changeLanguage('ru')}>
            ru
          </button>
        </div>
    )
}

export default Languages