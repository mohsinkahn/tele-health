/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
       backgroundImage: {
        'hero-bg': "url('/back.png')",
      },
      colors: {
        // background: 'var(--color-background)',
        // foreground: 'var(--color-foreground)',

        // primary: 'var(--color-primary)',
        // accent: 'var(--color-accent)',
        // success: 'var(--color-success)',
        // danger: 'var(--color-danger)',

        // border: 'var(--color-border)',
        // muted: 'var(--color-muted)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '5px 3px 1px 8px #98b1ae',
        'custom-dark': '6px 6px 15px rgba(0, 0, 0, 0.3)',
        
      },
    },
  },
  plugins: [],
}
