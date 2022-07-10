"USE strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько Вы его оцениваете?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько Вы его оцениваете?', '');

peronalMovieDB.movies[a] = b;
peronalMovieDB.movies[c] = d;

console.log(peronalMovieDB);