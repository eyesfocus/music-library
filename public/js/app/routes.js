/*globals angular*/
;(function(){
    angular.module('MusicLibrary')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/cds', {
                    templateUrl: 'templates/pages/cds/cd-list.html',
                    controller: 'CdListController',
                    controllerAs: 'cdlistCtrl'
                }).
                when('/cds/:id', {
                    templateUrl: 'templates/pages/cds/cd-detail.html',
                    controller: 'CdDetailController',
                    controllerAs: 'cdDetailCtrl'
                }).
                when('/artists', {
                    templateUrl: 'templates/pages/artists/artist-list.html',
                    controller: 'ArtistListController',
                    controllerAs: 'artistListCtrl'
                }).
                when('/artists/:id', {
                    templateUrl: 'templates/pages/artists/artist-detail.html',
                    controller: 'ArtistDetailController',
                    controllerAs: 'artistDetailCtrl'
                });
        }]);

})();