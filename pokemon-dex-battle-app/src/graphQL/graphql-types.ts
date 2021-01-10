export interface Pokemon {
  name: string;
  maxHP: number;
  image: string;
  weaknesses: string[];
  types: string[];
  resistant: string[];
  evolutions: Evolutions[];
  attacks: Attacks;
}

export interface Evolutions {
  name: string;
  image: string;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface Attack {
  name: string;
  type: string;
  damage: string;
}
