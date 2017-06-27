var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
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
            function EditMovieController() {
            }
            return EditMovieController;
        }());
        Controllers.EditMovieController = EditMovieController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
