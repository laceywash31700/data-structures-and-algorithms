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


module.exports = leftJoin