const fs = require("fs");
const path = require("path");
const chkArrayofString = require("./chkArrayofString");
const chkArrayofNumber = require("./chkArrayofNumber");
function rnFlsNFndwNameAIdx(
  filesNotFound,
  idxofFilesNotFound,
  fileName,
  dirPath
) {
  if (
    filesNotFound &&
    idxofFilesNotFound &&
    fileName &&
    dirPath &&
    rnFlsNFndwNameAIdx.arguments.length === 4
  ) {
    if (
      Array.isArray(filesNotFound) &&
      Array.isArray(idxofFilesNotFound) &&
      typeof fileName === "string" &&
      typeof dirPath === "string"
    ) {
      if (fs.existsSync(dirPath)) {
        if (
          chkArrayofString(filesNotFound) &&
          chkArrayofNumber(idxofFilesNotFound)
        ) {
          let renamedFiles = filesNotFound.map((item, index) => {
            fs.renameSync(
              `${dirPath}\\${item}`,
              `${dirPath}\\${fileName} ${idxofFilesNotFound[
                index
              ]}${path.extname(item)}`
            );
            return `${dirPath}\\${fileName} ${idxofFilesNotFound[
              index
            ]}${path.extname(item)}`;
          });
          return renamedFiles;
        } else {
          if (
            chkArrayofString(filesNotFound) ||
            chkArrayofNumber(idxofFilesNotFound)
          ) {
            return `Wrong Argument: function \"rnFlsNFndwNameAIdx\" only accepts array of ${chkArrayofString(
              filesNotFound
            )
              ? "numbers"
              : "strings"} as ${chkArrayofString(filesNotFound)
              ? "idxofFilesNotFound[]"
              : "filesNotFound[]"}`;
          } else {
            return `Wrong Arguments: function \"rnFlsNFndwNameAIdx\" only accepts arguments \"filesNotFound[]\" , \"idxofFilesNotFound[]\" as array of strings and array of numbers`;
          }
        }
      } else {
        return "Path You provided is not found";
      }
    } else {
      if (
        Array.isArray(filesNotFound) ||
        Array.isArray(idxofFilesNotFound) ||
        typeof fileName === "string" ||
        typeof dirPath === "string"
      ) {
        let wrongArguments = [];
        let wrongArgumentsTypes = [];
        let wrongArgumentsArgs = [];
        if (!Array.isArray(filesNotFound)) {
          wrongArguments.push(typeof filesNotFound);
          wrongArgumentsArgs.push("filesNotFound[]");
          wrongArgumentsTypes.push("array");
        }

        if (!Array.isArray(idxofFilesNotFound)) {
          wrongArguments.push(typeof idxofFilesNotFound);
          wrongArgumentsArgs.push("idxofFilesNotFound[]");
          wrongArgumentsTypes.push("array");
        }

        if (!(typeof fileName === "string")) {
          console.log("test");
          wrongArguments.push(typeof fileName);
          wrongArgumentsArgs.push("fileName");
          wrongArgumentsTypes.push("string");
        }

        if (!(typeof dirPath === "string")) {
          console.log("test");
          wrongArguments.push(typeof dirPath);
          wrongArgumentsArgs.push("dirPath");
          wrongArgumentsTypes.push("string");
        }

        console.log(wrongArguments);
        return `Wrong ${wrongArguments.length > 1
          ? "Arguments"
          : "Argument"}: Found \"${wrongArguments.length > 1
          ? wrongArguments.toString().split(",").join('" , "')
          : wrongArguments[0]}\" instead of \"${wrongArgumentsTypes.length > 1
          ? wrongArgumentsTypes.toString().split(",").join('" , "')
          : wrongArgumentsTypes[0]}\" as \"${wrongArgumentsArgs.length > 1
          ? wrongArgumentsArgs.toString().split(",").join('" , "')
          : wrongArgumentsArgs[0]}\"`;
      } else {
        return `Wrong Arguments: Found ${typeof filesNotFound} as \"filesNotFound[]\", ${typeof idxofFilesNotFound} as \"idxofFilesNotFound[]\", ${typeof fileName} as \"fileName\" and ${typeof dirPath} as \"dirPath\" instead of array, array, string and string`;
      }
    }
  } else {
    if (rnFlsNFndwNameAIdx.arguments.length > 4) {
      return `Wrong Arguments: function \"rnFlsNFndwNameAIdx\" only accepts 4 arguments`;
    } else {
      let missingArguments = [];
      if (!filesNotFound) {
        missingArguments.push("filesNotFound[]");
      }
      if (!idxofFilesNotFound) {
        missingArguments.push("idxofFilesNotFound[]");
      }
      if (!fileName) {
        missingArguments.push("fileName");
      }
      if (!dirPath) {
        missingArguments.push("dirPath");
      }
      return `Missing ${missingArguments.length > 1
        ? "Arguments"
        : "Argument"}: \"${missingArguments.length > 1
        ? missingArguments.toString().split(",").join('" , "')
        : missingArguments[0]}\"`;
    }
  }
}
module.exports = rnFlsNFndwNameAIdx;
