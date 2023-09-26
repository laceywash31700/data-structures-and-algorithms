Insert(int[] sorted, int value): This is a function that takes two arguments, an array sorted that is assumed to be already sorted in ascending order, and an integer value that needs to be inserted into the sorted array while maintaining its sorted order.

It initializes a variable i to 0.
Then, it enters a loop that continues as long as value is greater than the element at index i in the sorted array.
Inside the loop, it increments i by 1 until it finds the correct position for value.
After this loop, it performs the actual insertion:

It temporarily stores the element at index i in a variable called temp.
It replaces the element at index i with value.
It replaces value with the original temp value (essentially swapping value and the element at index i).
Finally, it increments i by 1.
This loop ensures that value is correctly inserted into the sorted array while maintaining the sorted order.

After the loop, it appends value to the end of the sorted array, as the largest element.

InsertionSort(int[] input): This is the main sorting function that takes an unsorted array input as its argument.

It initializes an empty array sorted.
It assumes that the first element of input is already sorted and assigns it to sorted[0].
Then, it enters a loop that iterates from the second element (input[1]) to the last element of input. For each element:

It calls the Insert function to insert the element into the sorted array while maintaining the sorted order.
This loop effectively builds the sorted array by inserting each element from input into its correct position.
Finally, the sorted array, which now contains all elements from input sorted in ascending order, is returned as the result of the sorting process.

![visulization of insert sort](./insert%20sort.png)
