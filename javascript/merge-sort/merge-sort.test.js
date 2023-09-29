const { mergeSort, merge } = require('./merge-sort');

describe('Merge Sort', () => {
    it('should sort an array in ascending order', () => {
        const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
        const sortedArray = mergeSort(unsortedArray);
        expect(sortedArray).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    it('should merge two sorted arrays correctly', () => {
        const left = [2, 4, 6];
        const right = [1, 3, 5];
        const mergedArray = merge(left, right);
        expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle an empty array', () => {
        const emptyArray = [];
        const sortedArray = mergeSort(emptyArray);
        expect(sortedArray).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const singleElementArray = [42];
        const sortedArray = mergeSort(singleElementArray);
        expect(sortedArray).toEqual([42]);
    });
});
