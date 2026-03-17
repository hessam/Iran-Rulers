import React from 'react';
import { Era, Snapshot, Language, Power } from '../types';
import { UI, CULTURE_NAMES, C } from '../constants';

interface BottomBarProps {
  era: Era;
  snap: Snapshot;
  lang: Language;
  onPowerClick: (power: Power) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ era, snap, lang, onPowerClick }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');

  const entries = Object.entries(CULTURE_NAMES);
  const half = Math.ceil(entries.length / 2);
  const row1 = entries.slice(0, half);
  const row2 = entries.slice(half);

  return (
    <div className="bottom-bar">
      <div className="legend-wrap">
        <div className="legend-title" id="legend-title">{t(UI.legend)}</div>
        <div className="legend-row" id="legend-row-1">
          {row1.map(([k, v]) => (
            <div key={k} className="legend-item">
              <div className="legend-swatch" style={{ background: v.color }}></div>
              <div className="legend-label">{t(v)}</div>
            </div>
          ))}
        </div>
        <div className="legend-row" id="legend-row-2">
          {row2.map(([k, v]) => (
            <div key={k} className="legend-item">
              <div className="legend-swatch" style={{ background: v.color }}></div>
              <div className="legend-label">{t(v)}</div>
            </div>
          ))}
        </div>
        <div className="legend-row" style={{ marginTop: '5px', paddingTop: '5px', borderTop: '1px solid var(--border)' }}>
          <div className="legend-item">
            <svg width="18" height="14" style={{ flexShrink: 0 }}>
              <rect x="1" y="1" width="16" height="12" rx="1"
                fill="rgba(56,180,100,0.12)"
                stroke="rgba(60,215,120,0.7)" strokeWidth="1.5"
                strokeDasharray="3 2" />
            </svg>
            <div className="legend-label" id="legend-iran-label" style={{ color: 'rgba(80,210,130,0.85)', fontSize: '10px' }}>
              {t(UI.modern_iran)}
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-wrap">
        <div className="tl-title" id="tlTitle">{t(era.label)} · {era.years}</div>
        <div className="tl-rows" id="tlRows">
          {snap.powers.map((p, i) => (
            <div key={i} className="tl-row">
              <div
                className="tl-bar"
                style={{
                  background: (C as any)[p.culture] || C.empty,
                  width: Math.max(55, 70 + (p.regions || []).length * 18) + 'px'
                }}
                onClick={() => onPowerClick(p)}
              >
                {t(p.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
