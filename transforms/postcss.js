const
  postcss = require('postcss'),
  postcssPlugins = [
    require('@knagis/postcss-advanced-variables'),
    require('postcss-nested'),
    require('cssnano')
  ],
  postcssOptions = {
    from: 'site/scss/entry.scss',
    syntax: require('postcss-scss')
  };

module.exports = async function (content) {

  if (!this.outputPath.endsWith('.css')) return content;

  return (
    await postcss(postcssPlugins).process(content, postcssOptions)
  ).css;

};