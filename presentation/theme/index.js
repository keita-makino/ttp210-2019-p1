import createTheme from '../../createTheme';

const colors = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF', // almost black w/ blueish tint
  tertiary: '#6699FF', // bright red
  quaternary: '#EEEEEE' // pale gray
};

const theme = createTheme(
  colors,
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '3.6rem'
        },
        h2: {
          fontSize: '3rem'
        },
        h3: {
          fontSize: '2.5rem'
        },
        h4: {
          fontSize: '2.2rem'
        },
        h5: {
          fontSize: '1.8rem'
        },
        h6: {
          fontSize: '1.3rem'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  }
);

export default theme;
