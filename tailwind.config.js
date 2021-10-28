module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backGround:"#f4f2e6",
        dark: "#1A1D16",
        logoBg: "#fefefe",
        olive: "#3c541b",
      },
      fontFamily: {
        dukeCharming: ["Duke Charming"],
        heading: ['Vidaloka'],
        poppins: ['Poppins'],
      },
      backgroundImage: {
        'text-bg-one': "url('/darkLeaves.jpg')",
        'text-bg-two': "url('/lightLeaves.jpg')",
        'text-bg-three': "url('/public/vercel.svg')",
      },
      brightness: {
        5: '.05',
        10: '.1',
        15: '.15',
        20: '.20',
        25: '.25',
      },
      inset: {
        '1/10': '10%',
        '1/5': '20%',
        '3/10': '30%',
      },
      height: {
        oneTen: "110vh",
        big: "115vh",
        bigger: "135vh",
        ninety: "90vh",
        eigthyFive: "85vh",
        eigthy: "80vh",
      },
      width: {
        big: "125vw",
        ninety: "90vw",
        eigthyFive: "85vw",
        eigthy: "80vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
