module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      },
      backgroundImage: {
        clouds: 'var(--clouds)',
        clouds2: 'var(--clouds2)',
        schedule: 'var(--schedule)',
      },
    },
  },
  plugins: [require("daisyui")],
};
