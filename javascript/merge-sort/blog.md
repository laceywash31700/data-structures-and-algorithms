## Mergesort(arr) Function: divide and conquer

> - The function takes an array arr as input.
> - If the length of the array is greater than 1, it proceeds with sorting.
> - It calculates the middle index of the array.
> - It divides the array into two parts: left (from index 0 to mid) and right (from mid to n).
> - Recursively, it calls Mergesort on the left and right parts to sort them.
> - After the left and right parts are sorted, it calls the Merge function to merge them back into the original array.

## Merge(left, right, arr) Function: then join them up again
> -  The function takes three parameters: two sorted arrays (left and right) and the original array (arr) where the merged result will be stored.
> - It initializes three pointers: i for the left array, j for the right array, and k for the merged array.
> - It compares elements at indices i and j in the left and right arrays respectively.
> - The smaller element among left[i] and right[j] is placed into the arr at index k.
> - The respective pointer (i or j) and the merged array pointer k are incremented.
> - This process continues until either the left or right array is completely processed.
> - If there are remaining elements in either the left or right array, they are added to the end of the merged array.