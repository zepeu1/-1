export type FactionType = 'K.S.A' | 'White Bone Cult' | 'Pollution' | 'C.R.A';

export interface Character {
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  mbti: string;
  keywords: string[];
  description: string;
  quote: string;
  weapon: string;
  position: string;
  ability: string;
  rank: string;
  appearance: string;
  code: string;
  faction: FactionType;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Rule {
  title: string;
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  location: string;
  difficulty: 'NORMAL' | 'HARD' | 'EXTREME' | 'SUICIDE';
  description: string;
  reward: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
}