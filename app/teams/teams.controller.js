// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['$scope', '$http'];

    function TeamsController($scope, $http) {

        $scope.getContributors = getContributors($scope, $http);
    }


    function getContributors($scope, $http) {
        $http({method: 'GET', url: 'https://api.github.com/repos/codeigniter-id/codeigniter-id.github.io/contributors'}).success(function (data) {
            $scope.contributors = data; // response data 
            console.log($scope.contributors);
        }).error(function (data) {
        });
    }

})();