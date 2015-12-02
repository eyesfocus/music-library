/* globals angular */
;(function(A){
    A.module('MusicLibrary')
        .controller('CdListController', function($http){

            var controller = this;
            $http({method: 'GET', url: '../private/data/cds.json'}).
                success(function(data){
                    controller.cds = data;
                });
        });
})(angular);