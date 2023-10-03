const { sortByRecentYear, sortByTitle } = require('./movieSort');
const data = require('./db.json');

test('sortByRecentYear sorts movies by most recent year first', () => {
  const sortedMovies = sortByRecentYear(data.movies).slice(0, 10);

  // Use Array.every() to check if each movie is in the correct order
  const isSorted = sortedMovies.every((movie, index, array) => {
    if (index === 0) {
      return true; // First movie, so it's always in the correct order
    }
    // Compare the current movie's year with the previous movie's year
    return movie.year >= array[index - 1].year;
  });

  // Assert that the movies are sorted correctly
  expect(isSorted).toBe(true);
});

test('sortByTitle sorts movies alphabetically by title', () => {
  const sortedMovies = sortByTitle(data.movies).slice(0, 10);

  // Use Array.every() to check if each movie is in alphabetical order
  const isSorted = sortedMovies.every((movie, index, array) => {
    if (index === 0) {
      return true; // First movie, so it's always in the correct order
    }
    // Compare the current movie's title with the previous movie's title
    return movie.title >= array[index - 1].title;
  });

  // Assert that the movies are sorted correctly
  expect(isSorted).toBe(true);
});
