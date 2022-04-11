const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case 'ADD_MOVIE_FAVOURITE': {
            return {
                ... state,
                moviesFavourites: state.moviesFavourites.concat(action.playload)
            };
        }
        case 'GET_MOVIES': {
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        }
        case 'GET_MOVIE_DETAIL': {
            return {
                ...state,
                movieDetail: action.payload
            };
        }
        case 'REMOVE_MOVIE_FAVOURITE': {
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => action.playload !== movie.id)
            };
        }
        default:
            return state;
    }
}

