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
            // main: "#A91079",
            // primary: "#F806CC",
            // secondary: "#570A57"
            background: "#1B515E",
            main: "#ABCD9E",
            primary: "#88B990",
            secondary: "#338275"
            // background: "#495C83",
            // main: "#A8A4CE",
            // primary: "#C8B6E2",
            // secondary: "#7A86B6"
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