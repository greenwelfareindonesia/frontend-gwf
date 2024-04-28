/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        5: "5",
      },
      maxWidth: {
        100: "100px",
        200: "200px",
        300: "300px",
      },
      margin: {
        70: "70px",
      },
      width: {
        200: "200px",
        220: "220px",
        300: "300px",
        400: "400px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      minHeight: {
        "custom-header": "calc(100vh - 88px)",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      colors: {
        "filter-1": "#3E3E0850",
        "filter-2": "#3E3E0875",
        "primary-1": "#5F5E36",
        "primary-2": "#3E3E08",
        "primary-3": "#707034",
        "light-1": "#ffffff",
        "light-2": "#bfbfbf",
        dark: "#313335",
      },
    },
  },
  plugins: [],
});
