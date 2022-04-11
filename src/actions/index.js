export const addMovieFavorite = (payload) => {
    return {
        type: 'ADD_MOVIE_FAVOURITE',
        payload: payload
    };
}

const apikey = '20dac387';

export function getMovies(titulo){
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${titulo}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GET_MOVIES', payload: json});
            })
    }
}

export function getMovieDetail(id){
    return function (dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
            .then(response => response.json())
            .then(json =>{
                dispatch({type: 'GET_MOVIE_DETAIL', payload: json})
            })
    }
}

export function removeMovieFavorite (payload) {
    return {
        type: 'REMOVE_MOVIE_FAVOURITE',
        payload: payload
    };
}