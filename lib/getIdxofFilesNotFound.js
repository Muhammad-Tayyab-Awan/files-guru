const chkArrayofString = require("./chkArrayofString");
const chkArrayofNumber = require("./chkArrayofNumber");

function getIdxofFilesNotFound(allFiles, idxofFilesFound) {
  if (
    allFiles &&
    idxofFilesFound &&
    getIdxofFilesNotFound.arguments.length === 2
  ) {
    if (Array.isArray(allFiles) && Array.isArray(idxofFilesFound)) {
      if (chkArrayofString(allFiles) && chkArrayofNumber(idxofFilesFound)) {
        let indexOfFilesNotFound = [];
        for (let i = 0; i < allFiles.length; i++) {
          if (!idxofFilesFound.includes(i + 1)) {
            indexOfFilesNotFound.push(i + 1);
          }
        }
        return indexOfFilesNotFound;
      } else {
        if (chkArrayofString(allFiles) || chkArrayofNumber(idxofFilesFound)) {
          return `Wrong Argument: function \"getIdxofFilesNotFound\" only accepts array of ${chkArrayofString(
            allFiles
          )
            ? "numbers"
            : "strings"} as ${chkArrayofString(allFiles)
            ? "idxofFilesFound[]"
            : "allFiles[]"}`;
        } else {
          return `Wrong Arguments: function \"getIdxofFilesNotFound\" only accepts arguments \"allFiles[]\" , \"idxofFilesFound[]\" as array of strings and array of numbers`;
        }
      }
    } else {
      if (Array.isArray(allFiles) || Array.isArray(idxofFilesFound)) {
        return `Wrong Argument: Found ${Array.isArray(allFiles)
          ? typeof idxofFilesFound
          : typeof allFiles} instead of ${Array.isArray(allFiles)
          ? "array"
          : "array"} as \"${Array.isArray(allFiles)
          ? "idxofFilesFound[]"
          : "allFiles[]"}\"`;
      } else {
        return `Wrong Arguments: Found ${typeof allFiles} as \"allFiles[]\" , ${typeof idxofFilesFound} as \"idxofFilesFound[]\" instead of array and array`;
      }
    }
  } else {
    if (getIdxofFilesNotFound.arguments.length > 2) {
      return `Wrong Arguments: function \"getIdxofFilesNotFound\" only accepts 2 arguments`;
    } else {
      let missingArguments = [];
      if (!allFiles) {
        missingArguments.push("allFiles[]");
      }
      if (!idxofFilesFound) {
        missingArguments.push("idxofFilesFound[]");
      }
      return `Missing ${missingArguments.length > 1
        ? "Arguments"
        : "Argument"}: \"${missingArguments.length > 1
        ? missingArguments.toString().split(",").join('" , "')
        : missingArguments[0]}\"`;
    }
  }
}
module.exports = getIdxofFilesNotFound;
