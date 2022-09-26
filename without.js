const without = function(source, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    const elementInQuestion = source[i];
    if (itemsToRemove.includes(elementInQuestion)) {
      console.log("This is the item to remove", elementInQuestion);
    } else {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = without;