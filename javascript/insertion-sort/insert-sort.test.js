const insertionSort = require('./insert-sort');

describe('Insertion Sort', () => {
  it('should correctly sort an empty array', () => {
    const input = [];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([]);
  });

  it('should correctly sort an array with one element', () => {
    const input = [42];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([42]);
  });

  it('should correctly sort an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort an array in descending order', () => {
    const input = [5, 4, 3, 2, 1];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a random unsorted array', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });
});
