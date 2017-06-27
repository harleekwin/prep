namespace myapp.Controllers {

    export class HomeController {
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
    }
}
