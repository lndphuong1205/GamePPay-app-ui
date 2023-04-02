export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 'device1',
    category: 'product',
    title: 'MI Super Bass Bluetooth Wireless Headphones',
    price: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    poster: require('../assets/images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
      require('../assets/images/products/Mi1.png'),
      require('../assets/images/products/Mi2.png'),
      require('../assets/images/products/Mi3.png'),
    ],
  },
  {
    id: 'device2',
    category: 'product',
    title: 'boAt Rockerz 450 Bluetooth Headphone',
    price: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    poster: require('../assets/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      require('../assets/images/products/boat1.png'),
      require('../assets/images/products/boat2.png'),
      require('../assets/images/products/boat3.png'),
    ],
  },
  {
    id: 'device3',
    category: 'product',
    title: 'boAt Airdopes 441',
    price: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: false,
    poster: require('../assets/images/accessories/boatairpods1.png'),
    isAvailable: false,
    productImageList: [
      require('../assets/images/accessories/boatairpods1.png'),
      require('../assets/images/accessories/boatairpods2.png'),
      require('../assets/images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: 'device4',
    category: 'product',
    title: 'boAt Bassheads 242',
    price: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: true,
    offPercentage: 25,
    poster: require('../assets/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      require('../assets/images/accessories/boatbassheads1.png'),
      require('../assets/images/accessories/boatbassheads2.png'),
      require('../assets/images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: 'device5',
    category: 'accessory',
    title: 'boAt Rockerz 255 Pro+',
    price: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    poster: require('../assets/images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      require('../assets/images/accessories/boatrockerz1.png'),
      require('../assets/images/accessories/boatrockerz2.png'),
      require('../assets/images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: 'device6',
    category: 'accessory',
    title: 'Boult Audio AirBass Propods TWS',
    price: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    poster: require('../assets/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      require('../assets/images/accessories/boultairbass1.png'),
      require('../assets/images/accessories/boultairbass2.png'),
      require('../assets/images/accessories/boultairbass3.png'),
    ],
  },
];
