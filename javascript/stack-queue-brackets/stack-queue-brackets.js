'use strict';

function validateBrackets(str) {
  const output = [];
  const bracketPairs = { ')': '(', ']': '[', '}': '{' };
  const openingBrackets = '[({';
  const closingBrackets = '])}';

  str.split('').forEach((char) => {
    if (openingBrackets.includes(char)) {
      output.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = output.pop();
      if (lastOpeningBracket !== bracketPairs[char]) {
        output.push(lastOpeningBracket);
      }
    }
  });

  return output.length === 0;
}

module.exports = validateBrackets;
