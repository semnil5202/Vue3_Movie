<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie" /> <!-- props -->
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
    components : {
        MovieItem
    },
    computed: {
      movies() {
        return this.$store.state.movie.movies
      }
    }
}
</script>