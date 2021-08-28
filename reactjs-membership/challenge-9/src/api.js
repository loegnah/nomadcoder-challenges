import axios from "axios";

export const getMovies = (page = 1) =>
  axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=50`);
