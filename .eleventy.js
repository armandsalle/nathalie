const c = require("@contentful/rich-text-html-renderer");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("src/_assets");

  eleventyConfig.addShortcode("getHtml", data => {
    return c.documentToHtmlString(data);
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
