const themeColorsBasic = {
    darkGreen: '#093009',
    forestGreen: '#0D3E10',
    mughalGreen: '#1F6032',
    japaneseLaurel: '#29773E',
    seaGreen: '#369457',
  };

  export const theme = {
    colors:{
      common: {
        black: '#36454F',
        white: '#ffffff'
      },
      primary: themeColorsBasic.mughalGreen,
      secondary: themeColorsBasic.darkGreen,
      supportive: themeColorsBasic.seaGreen,
      ...themeColorsBasic
    },
    spacing: {
      petit: 8,
      small: 16,
      base: 24,
      medium: 32,
      large: 40,
      xLarge: 48
    },
    radius: {
      main: 20,
      sub: 10,
      inline: 4
    }
  }