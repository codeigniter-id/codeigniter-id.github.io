// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('ActivitiesController', ActivitiesController);

    ActivitiesController.$inject = ['$scope', 'GithubActivityService'];

    function ActivitiesController($scope, GithubActivityService) {

        GithubActivityService.events({
            user: 'codeigniter-id',
            params: {
                callback: 'JSON_CALLBACK'
            }
        }).get().$promise.then(function (events) {
            $scope.activity = events.data;
        });

        $scope.config = {
            limit: 8
        }
    }

})();