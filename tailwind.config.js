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
      verticalText: {
        writingMode: "vertical-rl",
        textAlign: "center",
        transform: "rotate(180deg)",
      },
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
        78: "78px",
        270: "200px",
        300: "300px",
        340: "340px",
        460: "460px",
      },
      width: {
        200: "200px",
        217: "217px",
        220: "220px",
        300: "300px",
        400: "400px",
        490: "490px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
      },
      minHeight: {
        "custom-header": "calc(100vh - 88px)",
        100: "100px",
        140: "140px",
        111: "111px",
        200: "200px",
        280: "280px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        879: "879px",
        900: "900px",
        1000: "1000px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      borderRadius: {
        "4xl": "2rem", // Customize the radius value as needed
      },
      colors: {
        "filter-1": "#3E3E0850",
        "filter-2": "#3E3E0875",
        "filter-3": "#31333550",
        "filter-4": "#3B3F5C",
        "filter-5": "#A6A68D",
        "filter-6": "#ECECE6",
        "primary-1": "#5F5E36",
        "primary-2": "#3E3E08",
        "primary-3": "#707034",
        "light-1": "#ffffff",
        "light-2": "#bfbfbf",
        "light-3": "#efefeb",
        "light-4": "#d9d9d9",
        "light-5": "#d1d1b4",
        "light-6": "#F2F29E",
        dark: "#313335",
      },
      screens: {
        'sm': '600px',
        'md': '1024px',  
        'xl': '1280px',
      },
      fontSize: {
        'xxs': '0.65rem',   // Add your custom size here
        'xxxs': '0.45rem',   // Add your custom size here
      },
    },
  },
  plugins: [],
});
