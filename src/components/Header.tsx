import React from 'react';
import { UI } from '../constants';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  toggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');

  return (
    <header>
      <h1 id="hdr-title" title={t(UI.hdr_title)}>{t(UI.hdr_title)}</h1>
      <div className="hdr-sub" id="hdr-sub" title={t(UI.hdr_sub)}>
        {t(UI.hdr_sub)}
      </div>
      <button className="lang-btn" id="langBtn" onClick={toggleLang}>
        {lang === 'en' ? 'فارسی' : 'English'}
      </button>
    </header>
  );
};
