/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    screens : {
      'xl' : {'max' : '1200px'},
      'lg' : {'max' : '991px'},
      'md' : {'max' : '775px'},
      'sm' : {'max' : '550px'},
      'xsm' : {'max' : '375px'},

    }
  },
  plugins: [],
}