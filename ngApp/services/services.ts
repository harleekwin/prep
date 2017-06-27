namespace myapp.Services {
  export class MovieService {
    public MovieResource

    public saveMovie(movie) {
      this.MovieResource.save(movie);
    }

    public getMovies() {
      return this.MovieResource.query();
    }

    public constructor(
      public $resource
    ) {
      this.MovieResource = $resource('/movies');
    }
  }

  angular.module('myapp').service('movieService', MovieService);
}
