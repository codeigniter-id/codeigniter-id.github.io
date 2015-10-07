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
                access_token: '23b691e2885a5eb404ce13dcf3f7fccc2b1744f6'
            }
        }).get().$promise.then(function (events) {
            $scope.activity = events.data;
        });

        $scope.config = {
            limit: 3
        }
    }

})();