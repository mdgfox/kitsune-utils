export const clearEmptyObjects = (obj) => {
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

export const clearEmptyValuesFromArray = (array) => {
    return array.filter(Boolean);
}

export const convertConstantToTitleString = (constant) => {
    return constant.split('_').join(' ').replace(/(^w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
}

export const isObject = (value) => {
    return !!(value && typeof value === "object" && !Array.isArray(value));
};

export const findNestedObject = (object = {}, keyToMatch = "", valueToMatch = "") => {
    if (isObject(object)) {
        const entries = Object.entries(object);

        for (let i = 0; i < entries.length; i += 1) {
            const [objectKey, objectValue] = entries[i];

            if (objectKey === keyToMatch && objectValue === valueToMatch) {
                return object;
            }

            if (isObject(objectValue)) {
                const child = findNestedObject(objectValue, keyToMatch, valueToMatch);

                if (child !== null) {
                    return child;
                }
            }
        }
    }

    return null;
};
