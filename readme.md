<h1 style="text-align:center">Kitsune Utils</h1>
<p style="text-align:center">
    Some simple utils for kitsune material library
</p>

# Installation
Currently, for now - not available

## Importing
```js
import {
    clearEmptyObjects, 
    clearEmptyValuesFromArray,
    convertConstantToTitleString,
    isObject,
    findNestedObject,
} from "utils";
```

### Usage

clearEmptyObjects()
Recursive function to remove empty objects, values etc.
```js
// prepare values
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

const reducedObject = clearEmptyObjects(testObject);

```
clearEmptyValuesFromArray()
Simple function to remove empty values from array.
```js
// prepare values
var testArray = [1, 2, 3, 4, 5, '', undefined, null, 6, 7, 8];

const reducedArray = clearEmptyValuesFromArray(testArray);

```

convertConstantToTitleString()
Convert value "some_string_title" to "Some String Title".
```js
// prepare values
var testString = 'some_strange_string';

const title = convertConstantToTitleString(testString);

```

Test performance of functions you can use console.time() and console.timeEnd() functions.
```js
// prepare values
var testArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.time('startTime');
console.log(() => {
    forEach(testArray, (value) => {
        console.log(value);
    });
});
console.timeEnd('endTime');

```
