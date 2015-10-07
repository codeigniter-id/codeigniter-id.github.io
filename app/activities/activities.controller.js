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
                callback: 'JSON_CALLBACK',
                access_token: '1980ee54a87d9613cc83a560ddcedcae79b95d26'
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