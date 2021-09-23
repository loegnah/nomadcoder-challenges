import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
  addMovie,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("home", { pageTitle: "Movies", movies });
};

export const movieDetail = (req, res) => {
  const movie = getMovieById(req.params.id);
  if (movie) {
    res.render("movieDetail", {
      pageTitle: movie.title,
      movie,
    });
  } else {
    res.send(`Cannot find movie id : ${req.params.id}`);
  }
};
export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  let pageTitle = "";
  let movies;
  if (year) {
    movies = getMovieByMinimumYear(year);
    pageTitle = `Searching by year: ${year}`;
  } else if (rating) {
    movies = getMovieByMinimumRating(rating);
    pageTitle = `Searching by rating: ${rating}`;
  } else {
    res.redirect("/");
    return;
  }
  res.render("filter", { pageTitle, movies });
};

export const getAddMovie = (req, res) => {
  res.render("addMovie", { pageTitle: "Add Movie" });
};
export const postAddMovie = (req, res) => {
  const { title, synopsis, genres } = req.body;
  addMovie({ title, synopsis, genres });
  res.redirect("/");
};
