const eqArrays = require('./eqArrays');

const eqObjects = function(objA, objB) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  const lenA = keysA.length;
  const lenB = keysB.length;
  // number of keys
  if (lenA !== lenB) {
    return false;
  }
  // has same keys
  for (const keyA of keysA) {
    let found = false;
    for (const keyB of keysB) {
      if (!found) {
        if (keyA === keyB) {
          found = true;
        }
      }
    }
    if (!found) {
      return false;
    }
  }
  // has the same values
  for (const key of keysA) {
    const valueA = objA[key];
    const valueB = objB[key];
    if (valueA !== valueB) {
      return false;
    }
  }
  return true;
};
