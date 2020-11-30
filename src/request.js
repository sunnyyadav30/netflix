//tmdb api key
const APIKEY = "19f84e11932abbc79e6d83f82d6d1045"
const requests = {
    fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchHorrorMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchComedyMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests