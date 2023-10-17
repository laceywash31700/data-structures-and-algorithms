function repeatedWords(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    let words = str.split(' ');

    let firstRepeatedWord = null;
    let wordSet = new Set();

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        if (wordSet.has(word)) {
            if (words.indexOf(word) < firstRepeatedWord || firstRepeatedWord === null) {
                firstRepeatedWord = words.indexOf(word);
            }
        } else {
            wordSet.add(word);
        }
    }

    return firstRepeatedWord !== null ? words[firstRepeatedWord] : null;
}

module.exports = repeatedWords;
