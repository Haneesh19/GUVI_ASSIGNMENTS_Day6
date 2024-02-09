/*
Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.
*/

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const movies = [
    new Movie("The Matrix", "Warner Bros.", "R"),
    new Movie("Inception", "Warner Bros.", "PG-13"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "PG"),
    new Movie("Toy Story", "Pixar Animation Studios", "G"),
    new Movie("Harry Potter", "Warner Bros.", "PG"),
    new Movie("Aladdin", " Disney Pictures", "PG"),
    new Movie("Casino Royale", "Eon Productions", "PG-13")
];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
