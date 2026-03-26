/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    //"./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    screens: {
      //'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

     // 'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      //'2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        'quicksand':['Quicksand', 'sans-serif'],
        'barlow':['Barlow Condensed', 'sans-serif']
      },
      colors: {
        'primary': '#017984',//#007984'
        'bg1': '#f9f9f4',//'#F6F5EE',
        'bg2':'#F6F5EE',//'#F1F0EA'
        'bg3':'#fcfcf7',
        'secondary': '#f2b84b',
        'tertiary': '#04b684',
      },
    },
  },
  plugins: [
    /*require('postcss-import'),*/
    require('@tailwindcss/typography'),
  ],
}
