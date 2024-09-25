function whichTypeArrayIs(arr) {
    if (arr.length === 0) {
        return 'emptyArray';
    }
    const getType = (element) => {
        if (Array.isArray(element)) {
            return 'Array';
        } else if (element === null) {
            return 'Null';
        } else if (element instanceof Date) {
            return 'Date';
        } else if (element instanceof RegExp) {
            return 'Regexp';
        } else if (typeof element === 'object' && !(Array.isArray(element) && element !== null)) {
            return 'Object';
        } else {
            return typeof element;
        }
    };
    const firstType = getType(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (getType(arr[i]) !== firstType) {
            return 'mixedArray';
        }
    }
    return `arrayOf${firstType.toUpperCase()}`;
}
module.exports = whichTypeArrayIs;