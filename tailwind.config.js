module.exports = {
  mode: "jit",  // just-in-time compilation
  purge: {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './src/**/**/*.{html,js,jsx,ts,tsx}',
      './src/**/**/**/*.{html,js,jsx,ts,tsx}',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#5698D4',
      'accessibilityBlue': 'rgb(45, 105, 216)',
      'charcoal': '#264653',
      'darkgrey': '#aeaeb4',
      'lightgrey': '#D9D9D9',
      'dogwater': '#E0AFA0',
      'darkdogwater' : '#CE7F67',
      'neutral': '#edeff2',
      'green': '#57A773',
      'white': '#FFFFFF',
      'black': '#000000',
      'truegrey': '#F6F6F6',
      'sidegrey': '#b9bdc4',
      'darkCharcoal': '#153243'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '1919px',
      // => @media (min-width: 1536px) { ... }
      '8xl': '2559px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      inter: ['Inter'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'baselg': '1.0625rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1.5xl': '1.4rem',
      '2xl': '1.5rem',
      '2.5xl': '1.675rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.75rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
        objectFit: ['cover', 'contain'],
    },
  },
  plugins: [],
}
