const { addExternalBabelPlugins, override } = require("customize-cra");

module.exports = override(
  addExternalBabelPlugins(
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-jsx"
  )
);
