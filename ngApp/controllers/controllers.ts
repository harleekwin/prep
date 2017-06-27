namespace myapp.Controllers {

    export class HomeController {
      public movies

      constructor(
        private movieService
      ) {
        this.movies = movieService.getMovies();
      }
    }

    export class AddMovieController {
      public movie

      public addMovie() {
        this.movieService.saveMovie(this.movie);
      }

      constructor(
        private movieService
      ){

      }
    }

    export class EditMovieController {
      public movie
      public id

      public editMovie() {
        this.movie._id = this.id;
        this.movieService.saveMovie(this.movie);
      }

      constructor(
        public $stateParams,
        private movieService
      ) {
        this.id = $stateParams['id'];
      }
    }
}
