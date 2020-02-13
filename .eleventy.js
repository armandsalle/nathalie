module.exports = elevetyConfig => {
  elevetyConfig.addPassthroughCopy("src/_assets")

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "_data"
    }
  }
}
