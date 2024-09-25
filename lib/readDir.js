const fs = require("fs");

function readDir(dirPath) {
  if (dirPath) {
    if (typeof dirPath === "string") {
      if (fs.existsSync(dirPath)) {
        return fs.readdirSync(dirPath);
      } else {
        return "Path You provided is not found";
      }
    } else {
      return `Wrong Argument: Found ${typeof dirPath} instead of string`;
    }
  } else {
    return 'Missing Argument "dirPath"';
  }
}
module.exports = readDir;
