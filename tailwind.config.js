module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero-bg.svg')",
        'featured': "url('/images/featured-bg.png')",
        'footer': "url(/images/footer.png)"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        desciblue: '#0A22F5',
        descired: '#FF1414',
        descigrey: '#F5F5F5',
        descigreyfont: '#464646',
      },
    },
  },
  plugins: [],
}