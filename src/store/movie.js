export default {
    //module
    namespaced: true,
    //data
    state: () => ({
        movies: []
    }),
    //computed
    getters: {
        movieIds(state) {
            return state.movies.map(m => m.imdbID)
        }
    },
    //methods
    //data 변경
    mutations: {
        resetMovies(state) {
            state.movies = []
        }
    },
    //비동기 방식
    actions: {
        searchMovies() {
            
        }
    }
}