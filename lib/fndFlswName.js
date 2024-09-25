const path = require("path");
const chkArrayofString = require("./chkArrayofString");

function fndFlswName(allFiles, fileName) {
  // * findFilesWithName
  if (allFiles && fileName && fndFlswName.arguments.length === 2) {
    if (Array.isArray(allFiles) && typeof fileName === "string") {
      if (chkArrayofString(allFiles)) {
        let filesFound = [];
        for (let i = 0; i < allFiles.length; i++) {
          for (let j = 0; j < allFiles.length; j++) {
            if (
              allFiles[i] === `${fileName} ${j + 1}${path.extname(allFiles[i])}`
            ) {
              filesFound.push(allFiles[i]);
            }
          }
        }
        return filesFound;
      } else {
        return `Wrong Argument: function \"fndFlswName\" only accepts array of strings as \"allFiles\"`;
      }
    } else {
      if (Array.isArray(allFiles) || typeof fileName === "string") {
        return `Wrong Argument: Found ${typeof fileName === "string"
          ? typeof allFiles
          : typeof fileName} instead of ${typeof fileName === "string"
          ? "array"
          : "string"} as \"${typeof fileName === "string"
          ? "allFiles[]"
          : "fileName"}\"`;
      } else {
        return `Wrong Arguments: Found ${typeof allFiles} as \"allFiles[]\" , ${typeof fileName} as \"fileName\" instead of array and string`;
      }
    }
  } else {
    if (fndFlswName.arguments.length > 2) {
      return `"fndFlswName" ${typeof fndFlswName} accepts only 2 arguments "allFiles[]" , "fileName"`;
    } else {
      let missingArguments = [];
      if (!allFiles) {
        missingArguments.push("allFiles[]");
      }
      if (!fileName) {
        missingArguments.push("fileName");
      }
      return `Missing ${missingArguments.length > 1
        ? "Arguments"
        : "Argument"}: \"${missingArguments.length > 1
        ? missingArguments.toString().split(",").join('" , "')
        : missingArguments[0]}\"`;
    }
  }
}
module.exports = fndFlswName;
