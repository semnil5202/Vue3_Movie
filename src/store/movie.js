import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
    //module
    namespaced: true,
    //data
    state: () => ({
        movies: []
    }),
    //computed
    getters: {},
    //methods
    //data 변경
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    },
    //비동기 방식
    actions: {
        async searchMovies({state, commit}, payload) {
            const { title, type, number, year } = payload
            const OMDB_API_KEY = '74cd1a89' //1,000days left from 22.03.30

            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const { Search, totalResults } = res.data
            commit('updateState', {
                movies : _uniqBy(Search, 'imdbID')
            })

            const total = parseInt(totalResults, 10)
            const pageLength = Math.ceil(total / 10)

            if (pageLength > 1) {
                for (let page = 2; page <= pageLength; page++) {
                    if(page > number / 10) break
                    const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
                    const { Search } = res.data
                    commit('updateState', {
                        movies : [...state.movies, ..._uniqBy(Search, 'imdbID')]
                    })
                }
            }
        }
    }
}