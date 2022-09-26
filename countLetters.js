const countLetters = function(str) {
  const results = {};

  for (const letter of str) {
    if (letter === ' ') {
      continue;
    }

    if (!results[letter]) {
      results[letter] = 0;
    }


    results[letter]++;
  }

  return results;
};

console.log(countLetters("Lighthouse in the house"));

module.exports = countLetters;