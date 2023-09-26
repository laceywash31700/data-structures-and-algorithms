'use strict';

function insertionSort(input) {
    for (let i = 1; i < input.length; i++) {
      let currentElement = input[i];
      let j = i - 1;
  
      while (j >= 0 && input[j] > currentElement) {
        input[j + 1] = input[j];
        j--;
      }
  
      input[j + 1] = currentElement;
    }
  
    return input;
  }
  
module.exports = insertionSort;