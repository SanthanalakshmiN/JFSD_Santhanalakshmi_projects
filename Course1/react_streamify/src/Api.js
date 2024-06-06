let API_KEY = '&api_key=4c9856363822bdb39f9cd73df304edfa';

let SEARCH_URL = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

let BASE_URL = 'https://api.themoviedb.org/3';

let SEARCH_BY_GENERE = "/genre/movie/list?language=en";

const api =   { 
    api_search_url : BASE_URL + SEARCH_URL + API_KEY,

    api_genre_url : BASE_URL + SEARCH_BY_GENERE + API_KEY,


}

export default api