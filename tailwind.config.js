module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero-bg.svg')",
        'featured': "url('/images/featured-bg.png')"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        desciblue: '#0A22F5',
        descired: '#FF1414',
        descigrey: '#F5F5F5',
        descigreyfont: '#B1B1B1'
      },
    },
  },
  plugins: [],
}