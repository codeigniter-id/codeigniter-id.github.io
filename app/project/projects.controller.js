// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$scope'];

    function ProjectsController($scope) {

        GithubActivityService.events({
            user: 'codeigniter-id',
            params: {
                callback: 'JSON_CALLBACK'
            }
        }).get().$promise.then(function (events) {
            $scope.activity = events.data;
            console.log($scope.activity);
        });

        $scope.config = {
            limit: 8
        }
    }

})();