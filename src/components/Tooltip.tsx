import React, { useEffect, useState } from 'react';
import { Snapshot, Language } from '../types';
import { REGION_NAMES, C, UI } from '../constants';

interface TooltipProps {
  hoveredRegion: string | null;
  mousePos: { x: number, y: number };
  snap: Snapshot;
  lang: Language;
}

export const Tooltip: React.FC<TooltipProps> = ({ hoveredRegion, mousePos, snap, lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hoveredRegion && window.innerWidth > 850) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [hoveredRegion]);

  if (!hoveredRegion) return null;

  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');
  const pw = snap.powers.filter(p => (p.regions || []).includes(hoveredRegion));

  if (!pw.length) return null;

  const statusLabel = (s: string) => {
    const m: any = { direct: UI.direct, vassal: UI.vassal, contested: UI.contested, sphere: UI.sphere };
    return t(m[s] || UI.direct);
  };

  return (
    <div
      id="tooltip"
      className={isVisible ? 'visible' : ''}
      style={{
        left: Math.min(mousePos.x + 14, window.innerWidth - 230) + 'px',
        top: Math.min(mousePos.y + 14, window.innerHeight - 120) + 'px',
        opacity: isVisible ? 1 : 0
      }}
    >
      <h3 id="tt-region">{t(REGION_NAMES[hoveredRegion])}</h3>
      <div className="tt-row" id="tt-ruler">
        {pw.map((p, i) => (
          <React.Fragment key={i}>
            <span style={{ color: (C as any)[p.culture] || C.empty, fontWeight: 600 }}>{t(p.name)}</span>
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="tt-row" id="tt-status">
        {pw.map((p, i) => (
          <React.Fragment key={i}>
            <span>{t(p.capital)}</span> · <span>{statusLabel(p.status)}</span>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
