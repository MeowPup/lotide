const middle = function(array) {
  let midEven = Math.floor((array.length + 1) / 2);
  let midOdd = Math.ceil((array.length + 1) / 2);
  return array.slice(midEven - 1, midOdd);
};

module.exports = middle;