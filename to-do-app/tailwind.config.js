/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "rgb-94-108-132": "rgb(94, 108, 132)",
        "rgb-82-97-122": "rgb(82, 97, 122)",
      },
      backgroundColor: {
        "rgb-0-82-204": "rgb(0, 82, 204)",
      },
    },
  },
  plugins: [],
};
