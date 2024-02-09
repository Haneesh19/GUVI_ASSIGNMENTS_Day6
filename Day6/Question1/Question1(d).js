/*
Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”
*/

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(movie);

