import React, { useState, useEffect } from 'react';
import { ERAS } from './data';
import { Language, Power } from './types';
import { Header } from './components/Header';
import { EraNav } from './components/EraNav';
import { MapArea } from './components/MapArea';
import { SidePanel } from './components/SidePanel';
import { BottomBar } from './components/BottomBar';
import { MobileSheet } from './components/MobileSheet';
import { Modal } from './components/Modal';
import { Tooltip } from './components/Tooltip';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [eraIdx, setEraIdx] = useState(0);
  const [snapIdx, setSnapIdx] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [modalData, setModalData] = useState<{ type: 'region', id: string } | { type: 'power', power: Power } | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const era = ERAS[eraIdx];
  const safeSnapIdx = snapIdx >= era.snapshots.length ? 0 : snapIdx;
  const snap = era.snapshots[safeSnapIdx];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    if (lang === 'fa') {
      document.body.classList.add('lang-fa');
    } else {
      document.body.classList.remove('lang-fa');
    }
  }, [lang]);

  const handleEraChange = (idx: number) => {
    setEraIdx(idx);
    setSnapIdx(0);
  };

  const toggleLang = () => setLang(l => l === 'en' ? 'fa' : 'en');

  const handleRegionClick = (rid: string) => {
    setModalData({ type: 'region', id: rid });
  };

  const handlePowerClick = (power: Power) => {
    setModalData({ type: 'power', power });
  };

  const handleRegionHover = (e: React.MouseEvent, rid: string) => {
    setHoveredRegion(rid);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleRegionLeave = () => {
    setHoveredRegion(null);
  };

  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');
  const yr = lang === 'fa' && snap.yearFA ? snap.yearFA : snap.year;

  return (
    <div className="page-stack">
      <Header lang={lang} toggleLang={toggleLang} />
      <EraNav eras={ERAS} eraIdx={eraIdx} setEraIdx={handleEraChange} lang={lang} />

      <div className="middle-row">
        <div className="left-col" style={{ position: 'relative' }}>
          <div className="map-year-bar">
            <div className="map-year-label" id="yearLabel">{yr}</div>
            <div className="map-snap-title" id="snapTitle">{t(snap.title)}</div>
          </div>
          
          <MapArea
            snap={snap}
            lang={lang}
            onRegionClick={handleRegionClick}
            onRegionHover={handleRegionHover}
            onRegionLeave={handleRegionLeave}
          />

          {era.snapshots.length > 1 && (
            <div className="floating-timeline">
              <button 
                className="snap-arrow" 
                disabled={safeSnapIdx === 0} 
                onClick={() => setSnapIdx(Math.max(0, safeSnapIdx - 1))}
              >
                ‹
              </button>
              
              <div className="timeline-track">
                {era.snapshots.map((snapItem, i) => (
                  <React.Fragment key={i}>
                    <button
                      className={`timeline-node ${i === safeSnapIdx ? 'active' : ''}`}
                      onClick={() => setSnapIdx(i)}
                    >
                      {lang === 'fa' && snapItem.yearFA ? snapItem.yearFA : snapItem.year}
                    </button>
                    {i < era.snapshots.length - 1 && <div className="timeline-connector" />}
                  </React.Fragment>
                ))}
              </div>

              <button 
                className="snap-arrow" 
                disabled={safeSnapIdx === era.snapshots.length - 1} 
                onClick={() => setSnapIdx(Math.min(era.snapshots.length - 1, safeSnapIdx + 1))}
              >
                ›
              </button>
            </div>
          )}
        </div>

        <SidePanel era={era} snap={snap} lang={lang} onPowerClick={handlePowerClick} />
      </div>

      <BottomBar era={era} snap={snap} lang={lang} onPowerClick={handlePowerClick} />
      
      <button className="mob-fab" id="mobFab" onClick={() => setIsSheetOpen(true)}>
        <div className="fab-dot"></div>
        {lang === 'fa' ? 'قدرت‌ها' : 'Powers'}
        <div className="fab-count" id="fabCount">{snap.powers.length}</div>
      </button>

      <MobileSheet
        era={era}
        snap={snap}
        lang={lang}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onPowerClick={handlePowerClick}
      />

      <Modal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        lang={lang}
        snap={snap}
        modalData={modalData}
      />

      <Tooltip
        hoveredRegion={hoveredRegion}
        mousePos={mousePos}
        snap={snap}
        lang={lang}
      />
    </div>
  );
}

export default App;
