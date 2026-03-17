import React from 'react';
import { Snapshot, Language, Power } from '../types';
import { UI, CULTURE_NAMES, REGION_NAMES, C } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  snap: Snapshot;
  modalData: { type: 'region', id: string } | { type: 'power', power: Power } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, lang, snap, modalData }) => {
  if (!isOpen || !modalData) return null;

  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');
  const yr = lang === 'fa' && snap.yearFA ? snap.yearFA : snap.year;

  const statusLabel = (s: string) => {
    const m: any = { direct: UI.direct, vassal: UI.vassal, contested: UI.contested, sphere: UI.sphere };
    return t(m[s] || UI.direct);
  };

  const renderDynastyCard = (p: Power, full: boolean) => (
    <div className="dynasty-card" key={p.name.en}>
      <h3>
        <div className="dc-swatch" style={{ background: (C as any)[p.culture] || C.empty }}></div>
        {t(p.name)}
        <span className={`status-badge status-${p.status}`}>{statusLabel(p.status)}</span>
      </h3>
      <div className="dc-meta">{t(p.capital)} · {p.dates}</div>
      {full && <div className="dc-desc">{t(p.desc) || ''}</div>}
    </div>
  );

  let content = null;

  if (modalData.type === 'region') {
    const rid = modalData.id;
    const pw = snap.powers.filter(p => (p.regions || []).includes(rid));
    const rn = t(REGION_NAMES[rid]);

    content = (
      <>
        <h2>{rn}</h2>
        <div className="modal-subtitle">{t(snap.title)} · {yr}</div>
        {!pw.length ? (
          <p style={{ color: 'var(--cream-dim)', fontStyle: 'italic', padding: '8px 0' }}>
            {lang === 'fa' ? 'در این دوره هیچ قدرت ثبت‌شده‌ای این منطقه را در دست نداشت.' : 'No documented power held this region at this time.'}
          </p>
        ) : (
          pw.map(p => renderDynastyCard(p, true))
        )}
      </>
    );
  } else if (modalData.type === 'power') {
    const p = modalData.power;
    const cultName = t(CULTURE_NAMES[p.culture] || { en: p.culture, fa: p.culture });

    content = (
      <>
        <h2>{t(p.name)}</h2>
        <div className="modal-subtitle">{t(p.capital)} · {p.dates}</div>
        <div className="modal-grid">
          <div className="modal-field">
            <label>{t(UI.culture_lbl)}</label>
            <p style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ display: 'inline-block', width: '13px', height: '13px', borderRadius: '50%', background: (C as any)[p.culture] || C.empty, border: '1px solid rgba(255,255,255,0.2)' }}></span>
              {cultName}
            </p>
          </div>
          <div className="modal-field">
            <label>{t(UI.status_lbl)}</label>
            <p><span className={`status-badge status-${p.status}`}>{statusLabel(p.status)}</span></p>
          </div>
        </div>
        <div className="modal-section-title">{t(UI.territories)}</div>
        <div className="region-tags">
          {(p.regions || []).map(r => (
            <div key={r} className="region-tag">{t(REGION_NAMES[r])}</div>
          ))}
        </div>
        <div className="modal-section-title">{t(UI.notes)}</div>
        <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--cream)' }}>{t(p.desc) || ''}</p>
      </>
    );
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} id="modalOverlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal" id="modalBody">
        <button className="modal-close" id="modalClose" onClick={onClose}>✕</button>
        <div id="modalContent">
          {content}
        </div>
      </div>
    </div>
  );
};
