const chkArrayofString = require("./chkArrayofString");

function fndFlsNotFound(allFiles, filesFound) {
  if (allFiles && filesFound && fndFlsNotFound.arguments.length === 2) {
    if (Array.isArray(allFiles) && Array.isArray(filesFound)) {
      if (chkArrayofString(allFiles) && chkArrayofString(filesFound)) {
        let filesNotFound = allFiles.filter(file => {
          return filesFound.indexOf(file) === -1;
        });
        return filesNotFound;
      } else {
        if (chkArrayofString(allFiles) || chkArrayofString(filesFound)) {
          return `Wrong Argument: function \"fndFlsNotFound\" only accepts array of strings as ${chkArrayofString(
            allFiles
          )
            ? "filesFound[]"
            : "allFiles[]"}`;
        } else {
          return `Wrong Arguments: function \"fndFlsNotFound\" only accepts both arguments \"allFiles[]\" , \"filesFound[]\" as array of strings`;
        }
      }
    } else {
      if (Array.isArray(allFiles) || Array.isArray(filesFound)) {
        return `Wrong Argument: Found ${Array.isArray(allFiles)
          ? typeof filesFound
          : typeof allFiles} instead of ${Array.isArray(allFiles)
          ? "array"
          : "array"} as \"${Array.isArray(allFiles)
          ? "filesFound[]"
          : "allFiles[]"}\"`;
      } else {
        return `Wrong Arguments: Found ${typeof allFiles} as \"allFiles[]\" , ${typeof filesFound} as \"filesFound[]\" instead of array and array`;
      }
    }
  } else {
    let missingArguments = [];
    if (!allFiles) {
      missingArguments.push("allFiles[]");
    }
    if (!filesFound) {
      missingArguments.push("filesFound[]");
    }
    return `Missing ${missingArguments.length > 1
      ? "Arguments"
      : "Argument"}: \"${missingArguments.length > 1
      ? missingArguments.toString().split(",").join('" , "')
      : missingArguments[0]}\"`;
  }
}
module.exports = fndFlsNotFound;
