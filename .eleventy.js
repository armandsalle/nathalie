const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const localImages = require("eleventy-plugin-local-images");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("src/_assets");

  eleventyConfig.addShortcode("getHtml", data => {
    return documentToHtmlString(data);
  });

  eleventyConfig.addPlugin(localImages, {
    distPath: "dist",
    assetPath: "/_assets/img"
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "_data"
    }
  };
};
