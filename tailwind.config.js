// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');
const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  });
});

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    borderWidth: {
      11: '11px'
    },
    screens: {
      xs: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        sky: 'var(--sky)',
        bubble: 'var(--bubble)',
        darkgreen: 'var(--darkgreen)',
        lightgreen: 'var(--lightgreen)',
        brown: 'var(--brown)',
        gold: 'var(--gold)',
        bluegray: 'var(--bluegray)',
        gray: 'var(--gray)',
        white: 'var(--white)',
        darksky: 'var(--darksky)',
        darkbubble: 'var(--darkbubble)',
        purple: 'var(--purple)',
        lightPurple: 'var(--lightPurple)',
        text: 'var(--text)',
        hoverPrimary: 'var(--hoverPrimary)'
      },
      backgroundImage: {
        clouds: 'var(--clouds)',
        clouds2: 'var(--clouds2)',
        schedule: 'var(--schedule)',
        minsoo: 'var(--minsoo)'
      },
      borderWidth: {
        2: '2px',
        4: '4px',
        6: '4px',
        8: '8px',
        10: '10px'
      }
    }
  },
  plugins: [MyClass]
};
