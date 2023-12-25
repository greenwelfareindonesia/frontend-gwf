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
      colors: {
        filter: "#3E3E0850",
        "primary-1": "#5F5E36",
        "primary-2": "#3E3E08",
        "light-1": "#ffffff",
        "light-2": "#ecece6",
        dark: "#313335",
      },
    },
  },
  plugins: [],
});
