import React, { useMemo } from 'react';
import { Snapshot, Language, Power } from '../types';
import { REGIONS, REGION_NAMES, C } from '../constants';

interface MapAreaProps {
  snap: Snapshot;
  lang: Language;
  onRegionClick: (rid: string) => void;
  onRegionHover: (e: React.MouseEvent, rid: string) => void;
  onRegionLeave: () => void;
}

export const MapArea: React.FC<MapAreaProps> = ({ snap, lang, onRegionClick, onRegionHover, onRegionLeave }) => {
  const t = (obj: any) => (obj ? obj[lang] || obj.en : '');

  // Helper to convert hex to rgb
  const h2r = (hex: string) => [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
  const r2h = (r: number, g: number, b: number) => '#' + [r,g,b].map(v => Math.round(v).toString(16).padStart(2,'0')).join('');
  const blend = (h1: string, h2: string) => {
    const [r1,g1,b1] = h2r(h1);
    const [r2,g2,b2] = h2r(h2);
    return r2h((r1+r2)/2, (g1+g2)/2, (b1+b2)/2);
  };
  const darken = (hex: string, f = 0.65) => {
    const [r,g,b] = h2r(hex);
    return r2h(r*f, g*f, b*f);
  };

  const rmap = useMemo(() => {
    const map: Record<string, Power[]> = {};
    REGIONS.forEach(r => map[r] = []);
    snap.powers.forEach(p => {
      (p.regions || []).forEach(r => {
        if (map[r]) map[r].push(p);
      });
    });
    return map;
  }, [snap]);

  const getRegionStyle = (rid: string) => {
    const pw = rmap[rid];
    if (!pw || pw.length === 0) {
      return { fill: C.empty, opacity: 1, stroke: '#2a1e08', strokeDasharray: 'none', strokeWidth: 1, overlayOpacity: 0 };
    } else if (pw.length === 1) {
      const p = pw[0];
      const col = (C as any)[p.culture] || C.empty;
      if (p.status === 'vassal') {
        return { fill: darken(col, 0.72), opacity: 0.9, stroke: col, strokeDasharray: '5 2', strokeWidth: 1.5, overlayFill: 'url(#hatch-v)', overlayOpacity: 0.3 };
      } else if (p.status === 'sphere') {
        return { fill: darken(col, 0.6), opacity: 0.85, stroke: col, strokeDasharray: '8 3', strokeWidth: 1.5, overlayFill: 'url(#hatch-v)', overlayOpacity: 0.2 };
      } else {
        return { fill: col, opacity: 1, stroke: '#1e1508', strokeDasharray: 'none', strokeWidth: 1, overlayOpacity: 0 };
      }
    } else {
      const cols = pw.map(p => (C as any)[p.culture] || C.empty);
      let blended = cols[0];
      for (let i = 1; i < cols.length; i++) blended = blend(blended, cols[i]);
      return { fill: blended, opacity: 0.92, stroke: '#C9A84C', strokeDasharray: '6 2', strokeWidth: 1.8, overlayFill: 'url(#hatch-c)', overlayOpacity: 0.22 };
    }
  };

  return (
    <div className="svg-wrap">
      <svg id="atlas-svg" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hatch-v" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5"/>
          </pattern>
          <pattern id="hatch-c" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"/>
          </pattern>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(200,168,76,0.035)" strokeWidth="0.5"/>
          </pattern>
          <filter id="glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="iran-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feColorMatrix in="blur" type="matrix"
              values="0 0 0 0 0.22
                      0 0 0 0 0.65
                      0 0 0 0 0.40
                      0 0 0 0.7 0" result="glow"/>
            <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="760" height="440" fill="url(#grid)"/>

        {/* REGIONS */}
        {[
          { id: 'caucasus', points: '0,0 370,0 370,110 0,110' },
          { id: 'transoxiana', points: '370,0 760,0 760,110 370,110' },
          { id: 'anatolia', points: '0,110 140,110 140,220 0,220' },
          { id: 'azerbaijan', points: '140,110 370,110 370,220 140,220' },
          { id: 'tabaristan', points: '370,110 560,110 560,220 370,220' },
          { id: 'khorasan', points: '560,110 760,110 760,330 370,330 370,220 560,220' },
          { id: 'mesopotamia', points: '0,220 140,220 140,440 0,440' },
          { id: 'media', points: '140,220 370,220 370,330 140,330' },
          { id: 'elam', points: '140,330 300,330 300,440 140,440' },
          { id: 'fars', points: '300,330 510,330 510,440 300,440' },
          { id: 'sistan', points: '510,330 600,330 600,440 510,440' },
          { id: 'bactria', points: '600,330 760,330 760,440 600,440' }
        ].map(r => {
          const style = getRegionStyle(r.id);
          return (
            <g key={r.id}>
              <polygon
                id={`r-${r.id}`}
                className="region"
                points={r.points}
                style={{ fill: style.fill, opacity: style.opacity, stroke: style.stroke, strokeDasharray: style.strokeDasharray, strokeWidth: style.strokeWidth }}
                onMouseEnter={(e) => onRegionHover(e, r.id)}
                onMouseMove={(e) => onRegionHover(e, r.id)}
                onMouseLeave={onRegionLeave}
                onClick={() => onRegionClick(r.id)}
              />
              <polygon
                id={`o-${r.id}`}
                points={r.points}
                fill={style.overlayFill}
                opacity={style.overlayOpacity}
                style={{ pointerEvents: 'none' }}
              />
            </g>
          );
        })}

        {/* BORDER HIGHLIGHTS */}
        <polygon points="0,0 370,0 370,110 0,110" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="370,0 760,0 760,110 370,110" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="0,110 140,110 140,220 0,220" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="140,110 370,110 370,220 140,220" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="370,110 560,110 560,220 370,220" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="560,110 760,110 760,330 370,330 370,220 560,220" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="0,220 140,220 140,440 0,440" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="140,220 370,220 370,330 140,330" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="140,330 300,330 300,440 140,440" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="300,330 510,330 510,440 300,440" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="510,330 600,330 600,440 510,440" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>
        <polygon points="600,330 760,330 760,440 600,440" fill="none" stroke="rgba(200,168,76,0.1)" strokeWidth="0.7" pointerEvents="none"/>

        {/* MODERN IRAN BORDER HIGHLIGHT */}
        <g id="modern-iran-overlay" style={{ pointerEvents: 'none' }}>
          <polygon points="140,110 370,110 370,220 140,220" fill="rgba(56,180,100,0.05)"/>
          <polygon points="370,110 560,110 560,220 370,220" fill="rgba(56,180,100,0.05)"/>
          <polygon points="560,110 620,110 620,220 370,220 370,330 620,330 620,110" fill="rgba(56,180,100,0.05)"/>
          <polygon points="140,220 370,220 370,330 140,330" fill="rgba(56,180,100,0.05)"/>
          <polygon points="140,330 300,330 300,440 140,440" fill="rgba(56,180,100,0.05)"/>
          <polygon points="300,330 510,330 510,440 300,440" fill="rgba(56,180,100,0.05)"/>
          <polygon points="510,330 600,330 600,440 510,440" fill="rgba(56,180,100,0.05)"/>
          <polygon points="140,110 370,110 370,220 140,220" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="370,110 560,110 560,220 370,220" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="560,110 620,110 620,330 370,330 370,220 560,220" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="140,220 370,220 370,330 140,330" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="140,330 300,330 300,440 140,440" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="300,330 510,330 510,440 300,440" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polygon points="510,330 600,330 600,440 510,440" fill="none" stroke="rgba(56,200,110,0.5)" strokeWidth="1.6" filter="url(#iran-glow)"/>
          <polyline points="140,110 560,110" fill="none" stroke="rgba(60,215,120,0.4)" strokeWidth="1.3" strokeDasharray="4 3"/>
          <polyline points="560,110 560,220 620,220" fill="none" stroke="rgba(60,215,120,0.4)" strokeWidth="1.3" strokeDasharray="4 3"/>
          <polyline points="620,220 620,330 510,330 510,440 140,440" fill="none" stroke="rgba(60,215,120,0.4)" strokeWidth="1.3" strokeDasharray="4 3"/>
          <polyline points="140,440 140,110" fill="none" stroke="rgba(60,215,120,0.4)" strokeWidth="1.3" strokeDasharray="4 3"/>
        </g>

        {/* REGION LABELS */}
        <g style={{ direction: lang === 'fa' ? 'rtl' : 'ltr', letterSpacing: lang === 'fa' ? 'normal' : '0.05em' }} lang={lang}>
          <text className="region-label" x="185" y="58" textAnchor="middle">{t(REGION_NAMES.caucasus)}</text>
          <text className="region-label" x="565" y="58" textAnchor="middle">{t(REGION_NAMES.transoxiana)}</text>
          <text className="region-label" x="70" y="168" textAnchor="middle">{t(REGION_NAMES.anatolia)}</text>
          <text className="region-label" x="255" y="168" textAnchor="middle">{t(REGION_NAMES.azerbaijan)}</text>
          <text className="region-label" x="465" y="168" textAnchor="middle">{t(REGION_NAMES.tabaristan)}</text>
          <text className="region-label" x="615" y="196" textAnchor="middle">{t(REGION_NAMES.khorasan)}</text>
          <text className="region-label" x="70" y="334" textAnchor="middle">{t(REGION_NAMES.mesopotamia)}</text>
          <text className="region-label" x="255" y="278" textAnchor="middle">{t(REGION_NAMES.media)}</text>
          <text className="region-label" x="220" y="390" textAnchor="middle">{t(REGION_NAMES.elam)}</text>
          <text className="region-label" x="405" y="390" textAnchor="middle">{t(REGION_NAMES.fars)}</text>
          <text className="region-label" x="555" y="390" textAnchor="middle">{t(REGION_NAMES.sistan)}</text>
          <text className="region-label" x="680" y="390" textAnchor="middle">{t(REGION_NAMES.bactria)}</text>
        </g>

        {/* Decorative city dots */}
        <g opacity="0.45">
          <circle cx="170" cy="70" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="530" cy="70" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="72" cy="155" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="275" cy="155" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="465" cy="148" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="650" cy="152" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="72" cy="328" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="255" cy="268" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="210" cy="382" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="400" cy="382" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="552" cy="382" r="1.8" fill="var(--gold-dim)"/>
          <circle cx="672" cy="382" r="1.8" fill="var(--gold-dim)"/>
        </g>
        {/* Compass rose */}
        <g transform="translate(730,22)" opacity="0.28">
          <line x1="0" y1="-11" x2="0" y2="11" stroke="var(--gold)" strokeWidth="0.8"/>
          <line x1="-11" y1="0" x2="11" y2="0" stroke="var(--gold)" strokeWidth="0.8"/>
          <polygon points="0,-11 -2.5,-5 2.5,-5" fill="var(--gold)"/>
          <text x="0" y="-13" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="5.5" fill="var(--gold)">N</text>
        </g>
      </svg>

      {/* HTML TOUCH OVERLAY */}
      <div id="map-touch-layer">
        <div className="mtr" data-rid="caucasus" style={{left:'0%', top:'0%', width:'48.7%', height:'25%'}} onClick={() => onRegionClick('caucasus')}></div>
        <div className="mtr" data-rid="transoxiana" style={{left:'48.7%', top:'0%', width:'51.3%', height:'25%'}} onClick={() => onRegionClick('transoxiana')}></div>
        <div className="mtr" data-rid="anatolia" style={{left:'0%', top:'25%', width:'18.4%', height:'25%'}} onClick={() => onRegionClick('anatolia')}></div>
        <div className="mtr" data-rid="azerbaijan" style={{left:'18.4%', top:'25%', width:'30.3%', height:'25%'}} onClick={() => onRegionClick('azerbaijan')}></div>
        <div className="mtr" data-rid="tabaristan" style={{left:'48.7%', top:'25%', width:'25%', height:'25%'}} onClick={() => onRegionClick('tabaristan')}></div>
        <div className="mtr" data-rid="khorasan" style={{left:'73.7%', top:'25%', width:'26.3%', height:'25%'}} onClick={() => onRegionClick('khorasan')}></div>
        <div className="mtr" data-rid="khorasan" style={{left:'48.7%', top:'50%', width:'51.3%', height:'25%'}} onClick={() => onRegionClick('khorasan')}></div>
        <div className="mtr" data-rid="mesopotamia" style={{left:'0%', top:'50%', width:'18.4%', height:'50%'}} onClick={() => onRegionClick('mesopotamia')}></div>
        <div className="mtr" data-rid="media" style={{left:'18.4%', top:'50%', width:'30.3%', height:'25%'}} onClick={() => onRegionClick('media')}></div>
        <div className="mtr" data-rid="elam" style={{left:'18.4%', top:'75%', width:'21%', height:'25%'}} onClick={() => onRegionClick('elam')}></div>
        <div className="mtr" data-rid="fars" style={{left:'39.5%', top:'75%', width:'27.6%', height:'25%'}} onClick={() => onRegionClick('fars')}></div>
        <div className="mtr" data-rid="sistan" style={{left:'67.1%', top:'75%', width:'11.8%', height:'25%'}} onClick={() => onRegionClick('sistan')}></div>
        <div className="mtr" data-rid="bactria" style={{left:'78.9%', top:'75%', width:'21.1%', height:'25%'}} onClick={() => onRegionClick('bactria')}></div>
      </div>

      <div className="ornament ornament-tl">✦</div>
      <div className="ornament ornament-tr">✦</div>
      <div className="ornament ornament-bl">✦</div>
      <div className="ornament ornament-br">✦</div>
    </div>
  );
};
