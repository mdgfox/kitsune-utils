<h1 align="center">Kitsune Utils</h1>
<p align="center">
    Some simple utils for kitsune material library
</p>

# Installation
Currently for now not available

## Usage

clearEmptyObjects()
Recursive function to remove empty objects, values etc.
```js
// import the function
import clearEmptyValuesFromArray from "utils";

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

clearEmptyObjects(testObject);

```
clearEmptyValuesFromArray()
Simple function to remove empty values from array.
```js
// import the function
import clearEmptyValuesFromArray from "utils";

// prepare values
var testArray = [1, 2, 3, 4, 5, '', undefined, null, 6, 7, 8];

clearEmptyValuesFromArray(testArray);

```

convertConstantToTitleString()
Convert value "some_string_title" to "Some String Title".
```js
// import the function
import convertConstantToTitleString from "utils";

// prepare values
var testString = 'some_strange_string';

convertConstantToTitleString(testString);

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