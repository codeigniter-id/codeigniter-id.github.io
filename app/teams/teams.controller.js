// awards.controller.js
(function () {
    'use strict';
    var app = angular.module('codeigniterIdApp');

/**
* ups!, sorry john papa we don''t follow your guide this time. :)
**/
app.controller('TeamsController', ['$scope','$http', function($scope, $http) {

    $scope.getContributors = getContributors($scope, $http);
    $scope.http = $http;



    $scope.getDetailContributor = function getDetailContributor(username){
       $http({method: 'GET', url: 'https://api.github.com/users/'+ username}).success(function (data) {
            $scope.details = data; // response data 
        }).error(function (data) {
        });
    }


}]);


function getContributors($scope, $http) {
    $http({method: 'GET', url: 'https://api.github.com/repos/codeigniter-id/codeigniter-id.github.io/contributors'}).success(function (data) {
            $scope.contributors = data; // response data 
        }).error(function (data) {
        });
    }


})();