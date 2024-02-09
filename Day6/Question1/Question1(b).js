/*
The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
*/

class Movie {
    constructor(title, studio, rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movies = [];
movies.push(new Movie("The Matrix", "Warner Bros."));
movies.push(new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R"));
movies.forEach(movie => {
    console.log("Title:", movie.title);
    console.log("Studio:", movie.studio);
    console.log("Rating:", movie.rating);
    console.log("-----------------------------");
});
