/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0000ff",

          "secondary": "#0041ff",

          "accent": "#00d700",

          "neutral": "#0a0103",

          "base-100": "#fffdfa",

          "info": "#008cac",

          "success": "#00b68f",

          "warning": "#b48b00",

          "error": "#de2c50",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  
}

