/* globals angular */
;(function(A){
    A.module('MusicLibrary')
        .controller('ArtistDetailController', function($http, $routeParams){

            var controller = this;
            $http({method: 'GET', url: '../private/data/artists.json'}).
                success(function(data){
                    // this logic should actually be handled in backend
                    var key;

                    for (key in data) {
                        if (data[key].id === $routeParams.id) {
                            controller.artist = data[key];
                        }
                    }
                });
        });
})(angular);