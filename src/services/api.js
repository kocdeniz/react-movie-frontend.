//API from themoviedb.org 

// It's usually a good practive to create a separate file that contains all of your API calls so that you can keep
// all the networking operations or stuff related to the API in separate file and find it easily



const API_KEY = "49a5e25fed84b3381704db3b2936d1c7";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};