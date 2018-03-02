exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  presets: babelrc.presets.concat(['flow']),
});

exports.onCreateNode = ({ node }) => {
  console.log(node);
};
