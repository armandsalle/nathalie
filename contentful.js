const contentful = require("contentful");
require("dotenv").config();

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API
});

const getData = async param => {
  let res = null;

  await client
    .getEntry(param)
    .then(entry => {
      res = entry.fields;
    })
    .catch(err => (res = err));
  return res;
};

module.exports = getData;
