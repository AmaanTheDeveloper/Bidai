/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F8F5F0',
          maroon: {
            DEFAULT: '#6F1D2A',
            dark: '#581721',
            light: '#8C2737',
            hover: '#5B1722',
          },
          gold: {
            DEFAULT: '#C9A227',
            dark: '#A8851B',
            light: '#E5BE48',
            soft: '#F4E8C1',
          },
          beige: {
            DEFAULT: '#EDE3D5',
            light: '#F6F1E9',
            border: '#DFD4C4',
          },
          dark: '#241F20',
          muted: '#5F5859',
          lightMuted: '#8A8182',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'wedding': '0 10px 30px -5px rgba(111, 29, 42, 0.06), 0 4px 12px -2px rgba(36, 31, 32, 0.04)',
        'wedding-hover': '0 20px 40px -10px rgba(111, 29, 42, 0.12), 0 8px 20px -4px rgba(201, 162, 39, 0.15)',
        'card': '0 2px 15px -3px rgba(36, 31, 32, 0.05), 0 1px 6px -2px rgba(111, 29, 42, 0.03)',
      },
    },
  },
  plugins: [],
};
