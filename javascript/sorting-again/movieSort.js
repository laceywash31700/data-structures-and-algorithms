'use strict';

const data = require('./db.json');


function sortByRecentYear(movies) {
    return movies.sort((a, b) => a.year - b.year);
}

function sortByTitle(movies) {
    return movies.sort((a, b) => {
        const titleA = a.title.replace(/^(a|an|the) /i, '');
        const titleB = b.title.replace(/^(a|an|the) /i, '');
        return titleA.localeCompare(titleB);
    });
}

let sortedByYear = sortByRecentYear(data.movies).slice(0, 10);
let sortedByTitle = sortByTitle(data.movies).slice(0, 10);


module.exports = {
    sortByRecentYear,
    sortByTitle,
    sortedByTitle,
    sortedByYear
};
