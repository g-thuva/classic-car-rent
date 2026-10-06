export interface Company {
  name: string;
  tagline?: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  benefits: string[];
  currency: string;
  intro?: string;
}

export interface Prices {
  monThu: { h3?: number; h6?: number; h12?: number; h24: number };
  friSun: { h3?: number; h6?: number; h12?: number; h24: number };
}

export interface Car {
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  bodyType: string;
  description: string;
  topSpeedKmh: number;
  powerPs: number;
  displacementCc: number;
  zeroTo100s: number;
  
  // Standard rental metadata
  seats?: number;
  doors?: number;
  transmission?: string;
  bags?: number;

  prices: Prices;
  only24h?: boolean;
}
