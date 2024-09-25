function chkArrayofNumber(array) {
  if (array) {
    if (Array.isArray(array)) {
      return array.every(value => {
        return typeof value == "number";
      });
    } else {
      return `Wrong Argument: Found ${typeof array} instead of array`;
    }
  } else {
    return `Missing Argument: \"array\"`;
  }
}
module.exports = chkArrayofNumber;
