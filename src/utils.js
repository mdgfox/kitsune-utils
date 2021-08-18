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

  var testObject = {
      someValue1: {
          someValue2: {},
          someValue3: {
              foo: 1,
          },
      },
      someValue4: [
          {
              foo: 2,
          },
          {
              bar: 3,
          },
          {},
      ],
      someValue5: [
          {}, 
          {},
      ],
  }

  var testArray = [1, 2, 3, 4, 5, '', undefined, null, 6, 7, 8];

  console.log('Before: ');
  console.log(testObject);
  console.log('After: ');
  console.log(clearEmptyObjects(testObject));

  console.time('clearArrayFunction');
  console.log(clearEmptyValuesFromArray(testArray));
  console.timeEnd('clearArrayFunction');
