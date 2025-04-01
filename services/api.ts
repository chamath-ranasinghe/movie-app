import axios from 'axios';

export const TMBD_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchMovies = async ({query}:{query: string}) => {
    const endpoint = '/discover/movie?sort_by=popularity.desc'

    // const response = await axios.fetch(endpoint, )
}
