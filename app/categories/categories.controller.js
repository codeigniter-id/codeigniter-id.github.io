// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('CategoriesController', CategoriesController)
            .directive('removeOnClick', removeOnClick);
    CategoriesController.$inject = ['$scope', '$state'];
    function CategoriesController($scope, $state) {

    }

    function removeOnClick() {
        return {
            restrict: "A",
            link: function ($scope, elem, attrs) {
                $scope.remove = function () {
                    // not working yet
                    //$(elem).modal("remove");
                }
            }}
    }
})();