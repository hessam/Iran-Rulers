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
      <div style={{ 
        fontSize: '9px', 
        color: 'var(--parchment-dim)', 
        textTransform: 'uppercase', 
        letterSpacing: '0.1em', 
        marginBottom: '6px', 
        borderBottom: '1px solid var(--border-dim)', 
        paddingBottom: '4px' 
      }}>
        {t(REGION_NAMES[hoveredRegion])}
      </div>
      
      {pw.map((p, i) => (
        <div key={i} style={{ marginBottom: i < pw.length - 1 ? '8px' : 0 }}>
          <h3 style={{ 
            color: (C as any)[p.culture] || 'var(--gold)', 
            margin: '0 0 4px 0', 
            fontSize: '14px',
            lineHeight: 1.2
          }}>
            {t(p.name)}
          </h3>
          <div className="tt-row">
            <span style={{ color: 'var(--parchment)' }}>{p.dates}</span>
            <br />
            {t(p.capital)} · {statusLabel(p.status)}
          </div>
        </div>
      ))}
    </div>
  );
};
