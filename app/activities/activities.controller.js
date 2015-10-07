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
                access_token: 'd42410af98845708abcca32d208cc16addd184b4'
            }
        }).get().$promise.then(function (events) {
            $scope.activity = events.data;
        });

        $scope.config = {
            limit: 3
        }
    }

})();