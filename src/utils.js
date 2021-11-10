function clearEmptyObjects(obj) {
    for (const key in obj) {
        if (!obj[key] || typeof obj[key] !== 'object') {
            continue;
        }
        obj[key] = clearEmptyObjects(obj[key]);
        if (Object.keys(obj[key]).length === 0) {
            delete obj[key];
        }
    }
    return obj;
  }

function clearEmptyValuesFromArray(array) {
    return array.filter(Boolean);
}

function convertConstantToTitleString(constant) {
    return constant.split('_').join(' ').replace(/(^w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
}
  