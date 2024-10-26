/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#051A65',
        'primary-blue': '#1C3EB2',
        'primary-orange': '#FF823B',
        'primary-orange-dark': '#db6826',
        'footer-primary': '#050D2D',
        'sectionB': '#F8F3EA',
        'sectionC': '#D1E8FF',
        'sectionD':'#5784E6',
        'secondary-blue': '#0B1956',
        'blue-hover': '#040A22',
        'background-gray':'#F9F9FB',
        'primary-orange-light': '#FFD4A2',
        'custom-orange': '#D76D31',
        'blue-light': '#1774D3',
        'custom-light': '#1159a2',
      },
    },
  },
  plugins: [],
};
