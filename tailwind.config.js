/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#FF7A00",
          100: "#FFF5EB",
          200: "#FFEBD7",
          300: "#FFDAB2",
          400: "#FFC281",
          500: "#FF7A00",
          600: "#E35900",
          700: "#B34700",
          800: "#8C3600",
          900: "#732B00",
        },
        black: {
          DEFAULT: "#000000", // Default black
          50: "#F5F5F5",      // Lightest black (very close to white)
          100: "#E5E5E5",     // Very light gray
          200: "#CCCCCC",     // Light gray
          300: "#999999",     // Medium gray
          400: "#666666",     // Darker gray
          500: "#333333",     // Dark gray
          600: "#1A1A1A",     // Charcoal
          700: "#121212",     // Off-black
          800: "#0D0D0D",     // Almost black
          900: "#000000"      // Pure black
        },
        gray: {
          100: "#CDCDE0",
          200: "#A9A9B3"
        },
        success: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          300: "#9AE6B4",
          400: "#68D391",
          500: "#0CC25F",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        danger: {
          100: "#FFF5F5",
          200: "#FED7D7",
          300: "#FEB2B2",
          400: "#FC8181",
          500: "#F56565",
          600: "#E53E3E",
          700: "#C53030",
          800: "#9B2C2C",
          900: "#742A2A",
        },
        warning: {
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
      },
    },
  },
  plugins: [],
};
