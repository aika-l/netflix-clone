const API_KEY = "a29b908950d82f04f28320effb54f027";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests;