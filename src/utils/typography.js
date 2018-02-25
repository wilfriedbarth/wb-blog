import Typography from 'typography';
import sutroTheme from 'typography-theme-sutro';
sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(1 / 2),
    marginBottom: rhythm(1 / 2),
  },
  p: {
    marginBottom: rhythm(1 / 3),
  },
});

const typography = new Typography(sutroTheme);

export default typography;
