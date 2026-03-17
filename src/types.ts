export type Language = 'en' | 'fa';

export interface LocalizedString {
  en: string;
  fa: string;
}

export interface Power {
  name: LocalizedString;
  culture: string;
  capital: LocalizedString;
  status: 'direct' | 'vassal' | 'contested' | 'sphere';
  dates: string;
  regions: string[];
  desc: LocalizedString;
}

export interface Snapshot {
  year: string;
  yearFA?: string;
  title: LocalizedString;
  powers: Power[];
}

export interface Era {
  id: string;
  label: LocalizedString;
  years: string;
  desc: LocalizedString;
  snapshots: Snapshot[];
}

export interface Culture {
  en: string;
  fa: string;
  color: string;
}
