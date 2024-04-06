/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
      },
      colors:{
        grayWhite:'#dcdbdc',
        releaseBlack:'#080202',
        releaseBlack200:'#121212',
        shadowBlack:'#1a1a1a',
        darkYellow:'#E87D0E',
        normalBlue:'#4d84cc',
        buttonBg:'#2c2c2c',
        darkRed:"#D80027",
        bgGradientColor: 'linear-gradient(to bottom, #070320, #050D7C, #2B36B5)',
        darkGreen:"#2FAB73",
        newBgColor: "linear-gradient(90deg, #EF6CBE 0%, #5E71F2 100%)",

      
      }
    },
  },
  plugins: [],
}

