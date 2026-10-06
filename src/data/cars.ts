import type { Car } from './types';

export const cars: Car[] = [
  {
    slug: 'ferrari488gtb',
    name: 'Ferrari 488 GTB Spider',
    brand: 'Ferrari',
    tagline: 'Open-top V8 drama.',
    bodyType: 'convertible',
    description: 'Pure Italian performance with 670 PS and a 0-100 km/h sprint in 3.0 seconds. The chassis and gearbox are tuned for the track, so the car feels like an extension of the driver. Drop the roof and it becomes the perfect car for a spirited drive.',
    topSpeedKmh: 330,
    powerPs: 670,
    displacementCc: 3902,
    zeroTo100s: 3.0,
    seats: 2,
    doors: 2,
    transmission: 'Auto',
    bags: 1,
    prices: {
      monThu: { h3: 400, h6: 600, h12: 1000, h24: 1550 },
      friSun: { h3: 450, h6: 650, h12: 1100, h24: 1700 }
    }
  },
  {
    slug: 'porsche-gt3',
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    tagline: 'Track DNA, road legal.',
    bodyType: 'coupe',
    description: "The 911 GT3 is about chasing hundredths of a second and shaving every gram. It delivers undiluted racing performance and the kind of adrenaline only a true sports car can give.",
    topSpeedKmh: 320,
    powerPs: 510,
    displacementCc: 3996,
    zeroTo100s: 3.4,
    seats: 2,
    doors: 2,
    transmission: 'Auto',
    bags: 1,
    prices: {
      monThu: { h3: 350, h6: 600, h12: 1000, h24: 1500 },
      friSun: { h3: 400, h6: 650, h12: 1050, h24: 1550 }
    }
  },
  {
    slug: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    brand: 'Lamborghini',
    tagline: 'The super SUV.',
    bodyType: 'SUV',
    description: "The world's first Super Sport Utility Vehicle joins supercar soul with everyday usability. A 4.0-litre twin-turbo V8 with 850 Nm of torque pushes it from 0 to 100 km/h in 3.6 seconds, and Lamborghini DNA shows in every detail.",
    topSpeedKmh: 305,
    powerPs: 650,
    displacementCc: 3996,
    zeroTo100s: 3.6,
    seats: 5,
    doors: 5,
    transmission: 'Auto',
    bags: 3,
    prices: {
      monThu: { h3: 400, h6: 680, h12: 1200, h24: 1800 },
      friSun: { h3: 470, h6: 750, h12: 1350, h24: 1950 }
    }
  },
  {
    slug: 'lamborghinihuracan',
    name: 'Lamborghini Huracán EVO',
    brand: 'Lamborghini',
    tagline: 'V10 theatre.',
    bodyType: 'coupe',
    description: "The latest Huracan from Sant'Agata delivers 640 PS and launches from 0 to 100 km/h in 2.9 seconds. Its suspension and gearbox are set up for the circuit, which makes the coupe feel razor sharp on the road too.",
    topSpeedKmh: 325,
    powerPs: 640,
    displacementCc: 5204,
    zeroTo100s: 2.9,
    seats: 2,
    doors: 2,
    transmission: 'Auto',
    bags: 1,
    prices: {
      monThu: { h3: 400, h6: 650, h12: 1050, h24: 1700 },
      friSun: { h3: 450, h6: 700, h12: 1200, h24: 1850 }
    }
  },
  {
    slug: 'audirs6performance',
    name: 'Audi RS6 Avant Performance',
    brand: 'Audi',
    tagline: 'The family car that outruns supercars.',
    bodyType: 'estate',
    description: 'Feel and hear the difference. The RS6 Avant Performance carries the most powerful engine ever fitted to an RS6, with estate practicality on top.',
    topSpeedKmh: 305,
    powerPs: 630,
    displacementCc: 3993,
    zeroTo100s: 3.4,
    seats: 5,
    doors: 5,
    transmission: 'Auto',
    bags: 4,
    prices: {
      monThu: { h3: 250, h6: 450, h12: 600, h24: 900 },
      friSun: { h3: 300, h6: 500, h12: 700, h24: 1000 }
    }
  },
  {
    slug: 'bmwm5cs',
    name: 'BMW M5 CS',
    brand: 'BMW',
    tagline: 'Loud, fast and fully loaded.',
    bodyType: 'saloon',
    description: "The best of BMW M, with an aggressive stance and a 0-100 km/h time of just 2.9 seconds. Fully equipped, the savage acceleration still feels refined and comfortable.",
    topSpeedKmh: 305,
    powerPs: 635,
    displacementCc: 4395,
    zeroTo100s: 2.9,
    seats: 4,
    doors: 4,
    transmission: 'Auto',
    bags: 3,
    prices: {
      monThu: { h3: 250, h6: 450, h12: 600, h24: 900 },
      friSun: { h3: 300, h6: 500, h12: 650, h24: 950 }
    }
  },
  {
    slug: 'mercedesgt63',
    name: 'Mercedes-AMG GT 63',
    brand: 'Mercedes-AMG',
    tagline: 'German muscle, grand-tourer comfort.',
    bodyType: 'coupe',
    description: 'Distinctive sports-car proportions outside, and an interior that makes you want to drive dynamically the moment you sit down.',
    topSpeedKmh: 315,
    powerPs: 585,
    displacementCc: 3982,
    zeroTo100s: 3.2,
    seats: 4,
    doors: 4,
    transmission: 'Auto',
    bags: 3,
    prices: {
      monThu: { h3: 300, h6: 500, h12: 700, h24: 1200 },
      friSun: { h3: 350, h6: 550, h12: 800, h24: 1350 }
    }
  },
  {
    slug: 'mercedesg63',
    name: 'Mercedes-AMG G 63',
    brand: 'Mercedes-AMG',
    tagline: 'Icon status. Zero compromise.',
    bodyType: 'SUV',
    description: 'An off-roader and a status symbol. It looks brutal and drives that way, with a V8 and side exhausts putting the sound right behind your head. Inside you get ambient lighting, massage seats and a rear-seat multimedia system for passengers.',
    topSpeedKmh: 240,
    powerPs: 585,
    displacementCc: 3982,
    zeroTo100s: 4.5,
    seats: 5,
    doors: 5,
    transmission: 'Auto',
    bags: 4,
    prices: {
      monThu: { h3: 300, h6: 480, h12: 680, h24: 1200 },
      friSun: { h3: 350, h6: 550, h12: 780, h24: 1350 }
    }
  },
  {
    slug: 'mercedess500',
    name: 'Mercedes-Benz S 500',
    brand: 'Mercedes-Benz',
    tagline: 'First-class on four wheels.',
    bodyType: 'luxury saloon',
    description: 'A luxury car with real status. Fully equipped, the S-Class offers a relaxed ride with ambient lighting and massage seats.',
    topSpeedKmh: 250,
    powerPs: 435,
    displacementCc: 2999,
    zeroTo100s: 4.9,
    seats: 5,
    doors: 4,
    transmission: 'Auto',
    bags: 3,
    only24h: true,
    prices: {
      monThu: { h24: 850 },
      friSun: { h24: 900 }
    }
  }
];
