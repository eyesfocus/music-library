/* globals angular */
;(function(A){
    A.module('MusicLibrary')
        .controller('ArtistListController', function($http){
            var controller = this;

            $http({method: 'GET', url: '../private/data/artists.json'}).
                success(function(data){
                    controller.artists = data;
                });
        });
})(angular);