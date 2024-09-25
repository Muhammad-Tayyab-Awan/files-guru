const path = require("path");

function getFiles(arrayOfContent) {
  if (arrayOfContent) {
    if (Array.isArray(arrayOfContent)) {
      let files = arrayOfContent.filter(item => {
        if (path.extname(item)) {
          return item;
        }
      });
      return files;
    } else {
      return `Wrong Argument: Found ${typeof arrayOfContent} instead of Array`;
    }
  } else {
    return 'Missing Argument "arrayOfContent"';
  }
}

module.exports = getFiles;
