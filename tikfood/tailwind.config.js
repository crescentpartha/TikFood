// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",
//         },
//       },
//       "dark",
//       "cupcake",
//     ],
//   },
//   plugins: [require("daisyui")],
// }

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

