var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.MovieResource = $resource('/movies');
            }
            MovieService.prototype.saveMovie = function (movie) {
                this.MovieResource.save(movie);
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('myapp').service('movieService', MovieService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
