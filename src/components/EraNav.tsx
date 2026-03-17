import React, { useEffect, useRef } from 'react';
import { Era, Language } from '../types';

interface EraNavProps {
  eras: Era[];
  eraIdx: number;
  setEraIdx: (idx: number) => void;
  lang: Language;
}

export const EraNav: React.FC<EraNavProps> = ({ eras, eraIdx, setEraIdx, lang }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.children[eraIdx] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [eraIdx]);

  return (
    <nav className="era-nav" id="eraBtns" ref={navRef}>
      {eras.map((era, i) => (
        <button
          key={era.id}
          className={i === eraIdx ? 'active' : ''}
          onClick={() => setEraIdx(i)}
        >
          {t(era.label)}
        </button>
      ))}
    </nav>
  );
};
