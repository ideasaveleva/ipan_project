module.exports = {
  purge: [
		'/index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
		screens: {
      '2xl': {'max': '1920px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1000px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '720px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '480px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '360px'},
      // => @media (max-width: 639px) { ... }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}