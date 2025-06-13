/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Relief"', 'cursive'],
        sevillana: ['"Sevillana"', 'cursive'],
        savate: ['"Savate"', 'sans-serif'],
      },
      colors: {
        noteYellow: '#FFF59D',
        appPink: '#FADADD',
        noteText: '#000000',
        addButton: '#FF4B4B',
      },
    },
  },
  plugins: [],
};
