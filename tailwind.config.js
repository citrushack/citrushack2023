/* eslint-disable @typescript-eslint/no-var-requires */
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
    },
    '.border-rainbow': {
      // https://stackoverflow.com/a/53037637 PAIN
      border: 'double transparent',
      borderRadius: '9999px',
      backgroundImage:
        'linear-gradient(white, white), linear-gradient(to bottom right, #FBBC05 0%, #EA4335 33%, #34A853 80%, #4285F4 100%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box'
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
    // colors: {
    //   'green': '#2BAD21',
    // },
    // linearBorderGradients: {
    //   'green': '#69c063',
    //   'blue': '#00f',
    // },

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
        hoverPrimary: 'var(--hoverPrimary)',
        goldHover: 'var(--goldHover)',
        brownHover: 'var(--brownHover)',
        link: 'var(--link)'
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
  // plugins: [MyClass, require('tailwindcss-border-gradients')(),]
  plugins: [MyClass]
};
