module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      bgpattern: '#037834',
      black: '#000000',
      cardborder: '#fff48c',
      cardred: '#f64242',
      white: '#ffffff',
      btncolor: '#efce4b',
    },
    fontFamily: {
      main: ['Alfa Slab One'],
      secondary: ['Courier Prime'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['48px', '64px'],
      xxxl: ['64px', '104px'],
      card: ['90px', '90px'],
    },
    animation: {
      // 5 cards layout
      card05: 'keyframe05 1s ease 0s 1 forwards',
      card15: 'keyframe15 1s ease 0.2s 1 forwards',
      card25: 'keyframe25 1s ease 0.4s 1 forwards',
      card35: 'keyframe35 1s ease 0.6s 1 forwards',
      card45: 'keyframe45 1s ease 0.8s 1 forwards',
      // 2 cards layout
      card02: 'keyframe02 1s ease 0s 1 forwards',
      card12: 'keyframe12 1s ease 0.2s 1 forwards',
      // --- responsive ---
      // 5 cards layout
      card05m: 'keyframe05m 1s ease 0s 1 forwards',
      card15m: 'keyframe15m 1s ease 0.2s 1 forwards',
      card25m: 'keyframe25m 1s ease 0.4s 1 forwards',
      card35m: 'keyframe35m 1s ease 0.6s 1 forwards',
      card45m: 'keyframe45m 1s ease 0.8s 1 forwards',
      // 2 cards layout
      card02m: 'keyframe02m 1s ease 0s 1 forwards',
      card12m: 'keyframe12m 1s ease 0.2s 1 forwards',
      // --- congratulation ---
      congratulation: 'keyframeCongratulation 1s infinite',
    },
    keyframes: {
      // 5 cards layout
      keyframe05: {
        '1%': { top: '-240px', transform: 'rotate(10deg)' },
        '100%': { top: '42%', left: '20%', transform: 'rotate(20deg)' },
      },
      keyframe15: {
        '1%': { top: '-240px', transform: 'rotate(10deg)' },
        '100%': { top: '52%', left: '35%', transform: 'rotate(10deg)' },
      },
      keyframe25: {
        '1%': { top: '-240px', transform: 'rotate(0deg)' },
        '100%': { top: '55%', left: '50%', transform: 'rotate(0deg)' },
      },
      keyframe35: {
        '1%': { top: '-240px', transform: 'rotate(-10deg)' },
        '100%': { top: '52%', left: '65%', transform: 'rotate(-10deg)' },
      },
      keyframe45: {
        '1%': { top: '-240px', transform: 'rotate(-10deg)' },
        '100%': { top: '42%', left: '80%', transform: 'rotate(-20deg)' },
      },
      // 2 cards layout
      keyframe02: {
        '100%': { top: '50%', left: '37%' },
      },
      keyframe12: {
        '100%': { top: '50%', left: '63%' },
      },
      // --- responsive ---
      // 5 cards layout for mobile responsive
      keyframe05m: {
        '100%': { top: '35%', left: '20%' },
      },
      keyframe15m: {
        '100%': { top: '35%', left: '50%' },
      },
      keyframe25m: {
        '100%': { top: '35%', left: '80%' },
      },
      keyframe35m: {
        '100%': { top: '55%', left: '30%' },
      },
      keyframe45m: {
        '100%': { top: '55%', left: '70%' },
      },
      // 2 cards layout for mobile responsive
      keyframe02m: {
        '100%': { top: '40%', left: '30%' },
      },
      keyframe12m: {
        '100%': { top: '40%', left: '70%' },
      },
      // --- congratulation ---
      keyframeCongratulation: {
        '0%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
