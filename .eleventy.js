module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./site/scss/');
  eleventyConfig.setDataDeepMerge(false);
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  eleventyConfig.addTransform('postcss', require('./transforms/postcss'));

  eleventyConfig.addShortcode("PageMetadata", require('./components/PageMetadata'));
  eleventyConfig.addShortcode("SubjectImg", require('./components/SubjectImg'));
  eleventyConfig.addShortcode("SVGMark", require('./components/SVGMark'));
  eleventyConfig.addPairedShortcode("SVGSubject", require('./components/SVGSubject'));

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "./site",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
}