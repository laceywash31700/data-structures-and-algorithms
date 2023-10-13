const repeatedWords = require('./repeated-words');

test('finds the first repeated word in a sentence without punctuation', () => {
    expect(repeatedWords("This is a test sentence. This is a test.")).toBe('this');
    expect(repeatedWords("No repeated words here.")).toBe(null);
    expect(repeatedWords("Word word.")).toBe('word');
    expect(repeatedWords("One one two two three three.")).toBe('one');
    expect(repeatedWords("Word! word! Word.")).toBe('word');
});

test('handles punctuations properly', () => {
    expect(repeatedWords("This, is a test sentence.")).toBe('this');
    expect(repeatedWords("No repeated words here!")).toBe(null);
    expect(repeatedWords("Word word?")).toBe('word');
    expect(repeatedWords("One one two! two! three, three.")).toBe('one');
    expect(repeatedWords("Word! word! Word, word.")).toBe('word');
});
