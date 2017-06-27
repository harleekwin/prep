var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.movieService = movieService;
                this.movies = movieService.getMovies();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddMovieController = (function () {
            function AddMovieController(movieService) {
                this.movieService = movieService;
            }
            AddMovieController.prototype.addMovie = function () {
                this.movieService.saveMovie(this.movie);
            };
            return AddMovieController;
        }());
        Controllers.AddMovieController = AddMovieController;
        var EditMovieController = (function () {
            function EditMovieController($stateParams, movieService) {
                this.$stateParams = $stateParams;
                this.movieService = movieService;
                this.id = $stateParams['id'];
            }
            EditMovieController.prototype.editMovie = function () {
                this.movie._id = this.id;
                this.movieService.saveMovie(this.movie);
            };
            return EditMovieController;
        }());
        Controllers.EditMovieController = EditMovieController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
