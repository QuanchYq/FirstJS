let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies did you see?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies did you see?','')
    }
}
start()





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies did you see?','');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies did you see?','')
        }
    }
};
function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('One of your last watched movies?',''),
            b = prompt('How would you rate this film','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms()




