const chkArrayofString = require("./chkArrayofString");
const whichTypeArrayIs = require("./whichTypeArrayIs");

function funcCallAuthenticator(noOfArgs, arguments, allArgs) {
  if (noOfArgs && arguments && allArgs && funcCallAuthenticator.arguments.length === 3) {
    if (
      typeof noOfArgs === "number" &&
      typeof arguments === "object" &&
      !Array.isArray(arguments) &&
      arguments !== null &&
      Array.isArray(allArgs)
    ) {
      let keys = ["nameOfArgs", "typeOfArgs"]
      if (Object.keys(arguments).length === 2 && keys.every((key) => { return key in arguments })) {
        let allArray = 0;
        for (const key in arguments) {
          if (Array.isArray(arguments[key])) {
            allArray++;
          }
        }
        if (allArray === 2) {
          if (chkArrayofString(arguments.nameOfArgs) && chkArrayofString(arguments.typeOfArgs)) {
            if (noOfArgs >= 1 && arguments.nameOfArgs.length === noOfArgs && arguments.typeOfArgs.length === noOfArgs && allArgs.length === noOfArgs) {
              console.log("in")
              for (let i = 0; i < noOfArgs; i++) {
                if (typeof allArgs[i] !== "object") {
                  if (!(typeof allArgs[i] === arguments.typeOfArgs[i])) {
                    return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as ${typeof allArgs[i]} instead of ${arguments.typeOfArgs[i]}`;
                  }
                } else {
                  if (allArgs[i] === null) {
                    if (!("null" === arguments.typeOfArgs[i])) {
                      return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as null instead of ${arguments.typeOfArgs[i]}`;
                    };
                  } else if (Array.isArray(allArgs[i])) {
                    if (!(whichTypeArrayIs(allArgs[i]) === arguments.typeOfArgs[i])) {
                      return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as ${whichTypeArrayIs(allArgs[i])} instead of ${arguments.typeOfArgs[i]}`;
                    };
                  } else {
                    if (!("object" === arguments.typeOfArgs[i])) {
                      return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as object instead of ${arguments.typeOfArgs[i]}`;
                    };
                  }
                }
              }
              return true;
            } else if (noOfArgs > 1 && arguments.nameOfArgs.length === noOfArgs && allArgs.length === noOfArgs && arguments.typeOfArgs.length === 1) {
              console.log("in2");
              for (let i = 0; i < noOfArgs; i++) {
                if (arguments.typeOfArgs[0] === "number" || arguments.typeOfArgs[0] === "string" || arguments.typeOfArgs[0] === "function" || arguments.typeOfArgs[0] === "boolean" || arguments.typeOfArgs[0] === "bigint" || arguments.typeOfArgs[0] === "symbol" || arguments.typeOfArgs[0] === "undefined" || arguments.typeOfArgs[0] === "object" || arguments.typeOfArgs[0] === "null" || arguments.typeOfArgs[0] === "emptyArray" || arguments.typeOfArgs[0] === "mixedArray" || arguments.typeOfArgs[0] === "arrayOfNUMBER" || arguments.typeOfArgs[0] === "arrayOfSTRING" || arguments.typeOfArgs[0] === "arrayOfOBJECT" || arguments.typeOfArgs[0] === "arrayOfBOOLEAN" || arguments.typeOfArgs[0] === "arrayOfNULL" || arguments.typeOfArgs[0] === "arrayOfARRAY" || arguments.typeOfArgs[0] === "arrayOfDATE" || arguments.typeOfArgs[0] === "arrayOfBIGINT" || arguments.typeOfArgs[0] === "arrayOfUNDEFINED" || arguments.typeOfArgs[0] === "arrayOfREGEXP" || arguments.typeOfArgs[0] === "arrayOfSYMBOl" || arguments.typeOfArgs[0] === "arrayOfFUNCTION") {
                  if (typeof allArgs[i] !== "object") {
                    if (!(typeof allArgs[i] === arguments.typeOfArgs[0])) {
                      return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as ${typeof allArgs[i]} instead of ${arguments.typeOfArgs[0]}`;
                    };
                  } else {
                    if (!(Array.isArray(allArgs[i])) && allArgs[i] !== null) {
                      if (!("object" === arguments.typeOfArgs[0])) {
                        return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as object instead of ${arguments.typeOfArgs[0]}`;
                      }
                    } else if (allArgs[i] === null) {
                      if (!("null" === arguments.typeOfArgs[0])) {
                        return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as null instead of ${arguments.typeOfArgs[0]}`;
                      };
                    } else {
                      if (!(whichTypeArrayIs(allArgs[i]) === arguments.typeOfArgs[0])) {
                        return `Wrong Argument: in Function ${arguments.nameOfArgs[i]} recieved as ${whichTypeArrayIs(allArgs[i])} instead of ${arguments.typeOfArgs[0]}`;
                      }
                    }
                  }
                }
              }
              return true;
            } else {
              if (allArgs.length < noOfArgs) {
                return `Wrong Arguments: ${noOfArgs - allArgs.length} argument(s) are missing`;
              } else if (allArgs.length > noOfArgs) {
                return `Wrong Arguments: Function only accepts ${noOfArgs} argument(s)`;
              } else if (arguments.nameOfArgs.length !== noOfArgs) {
                return `Wrong Arguments: nameOfArgs of ${noOfArgs - arguments.nameOfArgs.length} are Missing`;
              } else if (arguments.typeOfArgs.length !== noOfArgs) {
                return `Wrong Arguments: typeOfArgs of ${noOfArgs - arguments.typeOfArgs.length} arguments are Missing`;
              } else {
                return `Wrong Call`;
              }
            }
          } else {
            return `function \"funcCallAuthenticator\" only accepts object consisting of two key value pairs \"${keys[0]}\" and \"${keys[1]}\" of both of array of strings type as \"arguments\"`
          }
        } else {
          return `function \"funcCallAuthenticator\" only accepts object consisting of two key value pairs \"${keys[0]}\" and \"${keys[1]}\" of both of array type as \"arguments\"`;
        }
      } else {
        return `function \"funcCallAuthenticator\" only accepts object consisting of two key value pairs \"${keys[0]}\" and \"${keys[1]}\" as \"arguments\"`;
      }
    } else {
      if (
        typeof noOfArgs === "number" ||
        (typeof arguments === "object" &&
          !Array.isArray(arguments) &&
          arguments !== null) || Array.isArray(allArgs)
      ) {
        let wrongArgsFound = [], wrongArgsType = [], wrongArgs = [];
        if (!(typeof noOfArgs === "number")) {
          wrongArgsFound.push(!(typeof noOfArgs === "object") ? typeof noOfArgs : Array.isArray(noOfArgs) ? "array" : noOfArgs === null ? "null" : "object");
          wrongArgsType.push("number");
          wrongArgs.push("noOfArgs")
        }
        if (!(typeof arguments === "object" &&
          !Array.isArray(arguments) &&
          arguments !== null)) {
          wrongArgsFound.push(!(typeof arguments === "object") ? typeof arguments : Array.isArray(arguments) ? "array" : arguments === null ? "null" : "object");
          wrongArgsType.push("object");
          wrongArgs.push("arguments[]")
        }
        if (!(Array.isArray(allArgs))) {
          wrongArgsFound.push(!(typeof allArgs === "object") ? typeof allArgs : Array.isArray(allArgs) ? "array" : allArgs === null ? "null" : "object");
          wrongArgsType.push("array");
          wrongArgs.push("allArgs[]")
        }
        return `Wrong ${wrongArgs.length > 1 ? "Arguments" : "Argument"}: Found \"${wrongArgsFound.length > 1 ? wrongArgsFound.toString().split(",").join("\" , \"") : wrongArgsFound[0]}\" instead of \"${wrongArgsType.length > 1 ? wrongArgsType.toString().split(",").join("\" , \"") : wrongArgsType[0]}\" as \"${wrongArgs.length > 1 ? wrongArgs.toString().split(",").join("\" , \"") : wrongArgs[0]}\"`
      } else {
        return `Wrong Arguments: Found ${!(typeof noOfArgs === "object") ? typeof noOfArgs : Array.isArray(noOfArgs) ? "array" : noOfArgs === null ? "null" : "object"} instead of number as \"noOfArgs\" , ${!(
          typeof arguments === "object"
        )
          ? typeof arguments
          : Array.isArray(arguments)
            ? "array"
            : arguments === null
              ? "null"
              : "object"} instead of object as \"arguments{}\" and ${!(typeof allArgs === "object") ? typeof allArgs : Array.isArray(allArgs) ? "array" : allArgs === null ? "null" : "object"} instead of array as \"allArgs[]\"`;
      }
    }
  } else {
    if (funcCallAuthenticator.arguments.length > 3) {
      return 'function "funcCallAuthenticator" only accepts 3 arguments';
    } else {
      let missingArguments = [];
      if (!noOfArgs) {
        missingArguments.push("noOfArgs");
      }
      if (!arguments) {
        missingArguments.push("arguments{}");
      }
      if (!allArgs) {
        missingArguments.push("allArgs[]");
      }
      return `Missing ${missingArguments.length > 1
        ? "Arguments"
        : "Argument"}: \"${missingArguments.length > 1
          ? missingArguments.toString().split(",").join('" , "')
          : missingArguments[0]}\"`;
    }
  }
}
module.exports = funcCallAuthenticator;
