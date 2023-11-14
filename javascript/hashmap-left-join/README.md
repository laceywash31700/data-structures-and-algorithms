# Hash map Left Join

Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
  Arguments: two hash maps

- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency
 I decided to redo it because I relized that my first attempt took the two hashmaps as a array instead of a map. I used a for loop because I wanted to get all the entries of the opposite hashmap and dynamically push the object in a results array instead of a new map which might have been prefered. but I can refactor later 

## Solution

```javascript
function leftJoin(synonyms, antonyms) {
    let result = [];

    // Iterate through the keys in the synonyms map
    for (let [word, synonym] of synonyms.entries()) {
        // Check if the word exists in the antonyms map
        if (antonyms.has(word)) {
            // If the word exists in both synonyms and antonyms maps, add an object to the result array
            result.push({
                word: word,
                synonym: synonym,
                antonym: antonyms.get(word),
            });
        } else {
            // If the word doesn't have an antonym, add an object to the result array with null for antonym
            result.push({
                word: word,
                synonym: synonym,
                antonym: null,
            });
        }
    }

    return result;
}

```

### Whiteboard

![my whiteboard for hashmap-left join](./Untitled%20(6).png)