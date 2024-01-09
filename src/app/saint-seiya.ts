export interface ArmorAttack {
  id: number;
  name: string;
}

export interface ArmorVersion {
  id: number;
  name: string;
  image: string;
  thumb: string;
  attacks: Array<ArmorAttack>;
}

export interface Strength {
  id: number;
  name: string;
}

export interface ArmorStrength {
  id: number;
  amount: string;
  strength: Strength;
}

export interface Category {
  id: number;
  name: string;
}

export interface Armor {
  id: number;
  name: string;
  category: Category;
  versions: ArmorVersion[];
  strengths: ArmorStrength[];
}
