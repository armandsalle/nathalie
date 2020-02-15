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

  // eleventyConfig.addShortcode("imgBase64", data => {
  //   axios
  //     .get("http:" + data)
  //     .then(response => {
  //       let returnedB64 = Buffer.from(response.data).toString("base64");
  //       return response;
  //     })
  //     .catch(err => console.log(err));

  //   // image2base64(`https:${data}`)
  //   //   .then(response => {
  //   //     return response;
  //   //   })
  //   //   .catch(error => {
  //   //     console.log(error); //Fail quietly....
  //   //   });
  // });

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
