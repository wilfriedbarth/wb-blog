exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  presets: babelrc.presets.concat(['flow']),
});
