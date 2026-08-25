/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070E1F",
        navy: {
          50: "#EEF3FC",
          100: "#DCE6F8",
          400: "#4C6EA8",
          600: "#1B3B73",
          800: "#0E244B",
          900: "#0A1A38",
          950: "#070F22",
        },
        electric: {
          300: "#8FB4FF",
          400: "#6EA1FF",
          500: "#3D7EFF",
          600: "#2A63E0",
          700: "#1F4CB8",
        },
        paper: "#F6F8FC",
        line: "#E3E9F4",
        slate: {
          500: "#5B677E",
          600: "#4A5568",
          300: "#B9C3D6",
        },
        wa: "#25D366",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,14,31,0.04), 0 12px 32px -12px rgba(10,26,56,0.16)",
        "card-hover": "0 4px 10px rgba(7,14,31,0.06), 0 24px 48px -16px rgba(10,26,56,0.24)",
        glow: "0 0 0 1px rgba(61,126,255,0.15), 0 20px 60px -12px rgba(42,99,224,0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(10,26,56,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(10,26,56,0.045) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        blink: {
          "0%, 55%": { opacity: "1" },
          "56%, 100%": { opacity: "0" },
        },
        typeline1: {
          "0%": { width: "0ch" },
          "18%": { width: "27ch" },
          "92%": { width: "27ch" },
          "100%": { width: "27ch" },
        },
        typeline2: {
          "0%, 20%": { width: "0ch" },
          "40%": { width: "23ch" },
          "92%": { width: "23ch" },
          "100%": { width: "23ch" },
        },
        typeline3: {
          "0%, 42%": { width: "0ch" },
          "62%": { width: "19ch" },
          "92%": { width: "19ch" },
          "100%": { width: "19ch" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typeline1: "typeline1 6s ease-in-out infinite",
        typeline2: "typeline2 6s ease-in-out infinite",
        typeline3: "typeline3 6s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
