import { Culture, LocalizedString, City } from './types';

export const C = {
  persian:      '#7B2D8B',  // Derafsh Kaviani purple
  arab:         '#2E6B40',  // Islamic Arab — forest green
  turkic:       '#7A3020',  // Turkic / Mongol — dark crimson
  hellenic:     '#1E4A8A',  // Hellenistic / Greek — royal blue
  nomadic:      '#7A5020',  // Nomadic / Steppe — burnt sienna
  foreign:      '#9A1E2E',  // Foreign Imperial — imperial red
  mesopotamian: '#5A3412',  // Babylonian / Assyrian — deep brown (pre-Arab Semitic)
  empty:        '#161008',
};

export const UI: Record<string, LocalizedString> = {
  hdr_title:   { en: 'The Poly-Sovereignty of Greater Iran', fa: 'چندفرمانروایی ایران‌زمین' },
  hdr_sub:     { en: 'An Atlas of Overlapping Dominions · 2700 BC – 1946 AD', fa: 'اطلسی از حکومت‌های هم‌زمان · ۲۷۰۰ پیش از میلاد تا ۱۹۴۶ میلادی' },
  side_head:   { en: 'Powers in This Era', fa: 'قدرت‌های این دوران' },
  legend:      { en: 'Cultural Groups', fa: 'گروه‌های فرهنگی' },
  modern_iran: { en: 'Modern Iran', fa: 'ایران امروزی' },
  territories: { en: 'Territories', fa: 'قلمروها' },
  notes:       { en: 'Historical Notes', fa: 'یادداشت تاریخی' },
  culture_lbl: { en: 'Cultural Group', fa: 'گروه فرهنگی' },
  status_lbl:  { en: 'Status', fa: 'وضعیت' },
  direct:      { en: 'Direct Control', fa: 'کنترل مستقیم' },
  vassal:      { en: 'Vassal', fa: 'دست‌نشانده' },
  contested:   { en: 'Contested', fa: 'متنازع' },
  sphere:      { en: 'Sphere of Influence', fa: 'حوزه نفوذ' },
};

export const MODERN_IRAN = new Set(['azerbaijan','tabaristan','media','elam','fars','sistan','khorasan']);

export const REGION_NAMES: Record<string, LocalizedString> = {
  caucasus:    { en:'CAUCASUS',     fa:'قفقاز' },
  transoxiana: { en:'TRANSOXIANA',  fa:'فرارود' },
  anatolia:    { en:'ANATOLIA',     fa:'آناتولی' },
  azerbaijan:  { en:'AZERBAIJAN',   fa:'آذربایجان' },
  tabaristan:  { en:'TABARISTAN',   fa:'طبرستان' },
  khorasan:    { en:'KHORASAN',     fa:'خراسان' },
  mesopotamia: { en:'MESOPOTAMIA',  fa:'بین‌النهرین' },
  media:       { en:'MEDIA',        fa:'ماد' },
  elam:        { en:'ELAM',         fa:'عیلام' },
  fars:        { en:'FARS',         fa:'فارس' },
  sistan:      { en:'SISTAN',       fa:'سیستان' },
  bactria:     { en:'BACTRIA',      fa:'باختر' },
};

export const CULTURE_NAMES: Record<string, Culture> = {
  persian:      { en:'Persian/Iranian',    fa:'پارسی/ایرانی',  color: C.persian },
  arab:         { en:'Arab/Caliphate',     fa:'عرب/خلافت',    color: C.arab },
  turkic:       { en:'Turkic/Mongol',      fa:'ترک/مغول',     color: C.turkic },
  hellenic:     { en:'Hellenic/Greek',     fa:'یونانی/هلنی',  color: C.hellenic },
  nomadic:      { en:'Nomadic/Steppe',     fa:'کوچ‌نشین',     color: C.nomadic },
  foreign:      { en:'Foreign Imperial',  fa:'استعماری',     color: C.foreign },
  mesopotamian: { en:'Babylonian/Semitic', fa:'بابلی/سامی',   color: C.mesopotamian },
};

export const REGIONS = ['caucasus','transoxiana','anatolia','azerbaijan','tabaristan',
                 'khorasan','mesopotamia','media','elam','fars','sistan','bactria'];

export const CITIES: City[] = [
  { id:'tiflis',    name:{en:'Tbilisi', fa:'تفلیس'}, x:150, y:65 },
  { id:'baku',      name:{en:'Baku', fa:'باکو'}, x:320,  y:85 },
  { id:'samarkand', name:{en:'Samarkand', fa:'سمرقند'}, x:530, y:85 },
  { id:'bukhara',   name:{en:'Bukhara', fa:'بخارا'}, x:480, y:75 },
  { id:'konya',     name:{en:'Konya', fa:'قونیه'}, x:50, y:160 },
  { id:'tabriz',    name:{en:'Tabriz', fa:'تبریز'}, x:220, y:155 },
  { id:'amol',      name:{en:'Amol', fa:'آمل'}, x:420, y:185 },
  { id:'sari',      name:{en:'Sari', fa:'ساری'}, x:475, y:192 },
  { id:'nishapur',  name:{en:'Nishapur', fa:'نشابور'}, x:560, y:205 },
  { id:'merv',      name:{en:'Merv', fa:'مرو'}, x:640, y:155 },
  { id:'herat',     name:{en:'Herat', fa:'هرات'}, x:620, y:245 },
  { id:'babylon',   name:{en:'Babylon', fa:'بابل'}, x:75, y:350 },
  { id:'baghdad',   name:{en:'Baghdad', fa:'بغداد'}, x:85, y:305 },
  { id:'hamadan',   name:{en:'Hamadan', fa:'همدان'}, x:205, y:285 },
  { id:'ray',       name:{en:'Ray', fa:'ری'}, x:275, y:255 },
  { id:'susa',      name:{en:'Susa', fa:'شوش'}, x:210, y:375 },
  { id:'shiraz',    name:{en:'Shiraz', fa:'شیراز'}, x:380, y:415 },
  { id:'balkh',     name:{en:'Balkh', fa:'بلخ'}, x:675, y:380 },
  { id:'zaranj',    name:{en:'Zaranj', fa:'زرنج'}, x:570, y:415 },
];
