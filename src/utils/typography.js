import Typography from 'typography';
import theme from 'typography-theme-lincoln';

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(3 / 4),
    marginBottom: rhythm(3 / 4),
  },
  p: {
    marginTop: rhythm(1 / 2),
    marginBottom: rhythm(1 / 2),
  },
});

const typography = new Typography(theme);

export default typography;
