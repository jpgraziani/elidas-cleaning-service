module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061D3F',
        secondary: '#C0D2DE',
        tan: '#FSEAE3',
        darkTan: '#ECCFB7',
      },
      backgroundImage: {
        'message-bkg': "url('/src/assets/images/sidekix-media-g51F6-WYzyU-unsplash.jpg')",
        'dots-pattern': "url('/src/assets/images/dot-seamless-pattern.svg')"
    },
    maxWidth: {
      '85': '85%',
    }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
