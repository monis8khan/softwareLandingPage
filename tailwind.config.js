module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
            // background: "#2E0249",
            // main: "#F806CC",
            // primary: "#A91079",
            // secondary: "#570A57"
            background: "#1B515E",
            main: "#ABCD9E",
            primary: "#88B990",
            secondary: "#338275"
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
        }
      }
  }