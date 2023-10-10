/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Define a custom screen size for disabling the keyboard
        "disable-keyboard": { raw: "(max-width: 639px)" },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))",
      },
      fontFamily: {
        titillium: ['"Titillium Web"', "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        notosanslao: ["notosanslao", "sans-serif"],
      },
      colors: {
        "my-yellow": "#FFFC00",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["winter", "night", "light"],
    themes: [
      "winter",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "light",
    ],
  },
};
