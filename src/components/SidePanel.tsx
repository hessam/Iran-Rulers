import React from 'react';
import { Era, Snapshot, Language, Power } from '../types';
import { UI, REGION_NAMES, C } from '../constants';

interface SidePanelProps {
  era: Era;
  snap: Snapshot;
  lang: Language;
  onPowerClick: (power: Power) => void;
}

export const SidePanel: React.FC<SidePanelProps> = ({ era, snap, lang, onPowerClick }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');

  return (
    <aside className="side-panel">
      <div className="side-panel-head" id="side-head">{t(UI.side_head)}</div>
      <div className="era-desc" id="eraDesc">{t(era.desc)}</div>
      <div className="ruler-list" id="rulerList">
        {snap.powers.map((p, i) => {
          const rnames = (p.regions || []).map(r => t(REGION_NAMES[r])).join(' · ');
          return (
            <div key={i} className="ruler-item" onClick={() => onPowerClick(p)}>
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
    </aside>
  );
};
