export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        96: "24rem", // Adjust this as necessary for your content
      },

      screens: {
        // Custom breakpoints
        vsm: "320px",
        xsm: "620px",
        sm: "720px",
        md: "900px", // Medium breakpoint (you can adjust the value as needed)
        lg: "1280px",
        xl: "1420px",
      },
      colors: {
        green_gradient: "#063B26",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        yellow_light: "#CFFF92",
        dim_yellow: "#E6FFE2",
        dim_green: "#EEFFEB",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
