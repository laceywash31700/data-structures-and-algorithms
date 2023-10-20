function leftJoin(synonyms, antonyms) {
    let result = new Map();

    // Iterate through the keys in the synonyms map
    for (let [word, synonym] of synonyms.entries()) {
        // Check if the word exists in the antonyms map
        if (antonyms.has(word)) {
            // If the word exists in both synonyms and antonyms maps, set the value in the result map
            result.set(word, [synonym, antonyms.get(word)]);
        } else {
            // If the word doesn't have an antonym, set the value in the result map with null
            result.set(word, [synonym, null]);
        }
    }

    return result;
}

module.exports = leftJoin