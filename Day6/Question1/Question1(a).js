/*
Write a constructor for the class Movie, which takes a String representing the title of the movie, 
a String representing the studio, and a String representing the rating as its arguments, and sets the respective 
class properties to these values.
*/

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movies = [];
movies.push(new Movie("The Matrix", "Warner Bros.", "R"));
movies.push(new Movie("Inception", "Warner Bros.", "PG-13"));
movies.push(new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R"));

movies.forEach(movie => {
    console.log("Title:", movie.title);
    console.log("Studio:", movie.studio);
    console.log("Rating:", movie.rating);
    console.log("-----------------------------");
});
