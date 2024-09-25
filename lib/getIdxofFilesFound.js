const chkArrayofString = require("./chkArrayofString");

function getIdxofFilesFound(filesFound) {
  if (filesFound && getIdxofFilesFound.arguments.length === 1) {
    if (Array.isArray(filesFound)) {
      if (chkArrayofString(filesFound)) {
        let indexOfFilesFound = filesFound
          .map(file => {
            return parseInt(
              file.split(" ")[file.split(" ").length - 1].split(".")[0]
            );
          })
          .sort((a, b) => {
            return a - b;
          });
        return indexOfFilesFound;
      } else {
        return `Wrong Argument: function \"getIdxofFilesFound\" only accepts array of string as \"filesFound[]\"`;
      }
    } else {
      return `Wrong Argument: Found ${typeof filesFound} instead of array as \"filesFound[]\"`;
    }
  } else {
    if (getIdxofFilesFound.arguments.length > 1) {
      return `Wrong Argument: function \"getIdxofFilesFound\" only accepts 1 argument`;
    } else {
      return `Missing Argument: "filesFound[]"`;
    }
  }
}
module.exports = getIdxofFilesFound;
