// every request has a starting url

import axios from "axios";

// base url which is used to make requests to the movie database.

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// example:

// instance.get('/foo-bar'):

//https://api.themovidedb.org/3foo-bar

export default instance;
