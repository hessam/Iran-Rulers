import React from 'react';
import { Era, Snapshot, Language, Power } from '../types';
import { UI, CULTURE_NAMES, REGION_NAMES, C } from '../constants';

interface MobileSheetProps {
  era: Era;
  snap: Snapshot;
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onPowerClick: (power: Power) => void;
}

export const MobileSheet: React.FC<MobileSheetProps> = ({ era, snap, lang, isOpen, onClose, onPowerClick }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');
  const yr = lang === 'fa' && snap.yearFA ? snap.yearFA : snap.year;

  return (
    <>
      <div className={`mob-sheet-backdrop ${isOpen ? 'open' : ''}`} id="sheetBackdrop" onClick={onClose} style={{ display: isOpen ? 'block' : 'none', background: isOpen ? 'rgba(0,0,0,0.5)' : 'transparent' }}></div>
      <div className={`mob-sheet ${isOpen ? 'open' : ''}`} id="mobSheet" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="mob-sheet-handle" onClick={onClose}></div>
        <div className="mob-sheet-title">
          <h3 id="sheetTitle">{lang === 'fa' ? 'قدرت‌های ' : t(UI.side_head) + ': '}{yr}</h3>
          <button onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="mob-era-desc" id="mobEraDesc">{t(era.desc)}</div>
        <div className="mob-legend" id="mobLegend">
          {Object.entries(CULTURE_NAMES).map(([k, v]) => (
            <div key={k} className="mob-legend-item">
              <div className="mob-legend-swatch" style={{ background: v.color, border: '1px solid rgba(255,255,255,0.12)' }}></div>
              <div className="mob-legend-label">{t(v)}</div>
            </div>
          ))}
          <div className="mob-legend-item">
            <svg width="14" height="12" style={{ flexShrink: 0 }}>
              <rect x="1" y="1" width="12" height="10" rx="1" fill="rgba(56,180,100,0.15)" stroke="rgba(60,215,120,0.7)" strokeWidth="1.5" strokeDasharray="3 2" />
            </svg>
            <div className="mob-legend-label" style={{ color: 'rgba(80,210,130,0.85)' }}>{t(UI.modern_iran)}</div>
          </div>
        </div>
        <div className="mob-sheet-body">
          <div className="ruler-list" id="rulerListMob">
            {snap.powers.map((p, i) => {
              const rnames = (p.regions || []).map(r => t(REGION_NAMES[r])).join(' · ');
              return (
                <div key={i} className="ruler-item" onClick={() => { onClose(); setTimeout(() => onPowerClick(p), 50); }}>
                  <div className="ruler-dot" style={{ background: (C as any)[p.culture] || C.empty }}></div>
                  <div className="ruler-info">
                    <div className="ruler-name">{t(p.name)}</div>
                    <div className="ruler-sub">{t(p.capital)} · {p.dates}</div>
                    <div className="ruler-regions">{rnames}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
