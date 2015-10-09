/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// awards.controller.js
(function () {
    'use strict';
    angular.module('codeigniterIdApp')
            .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {


        $scope.speed = 500;

        $scope.mainViewStyle = 'anim-fade';

        $scope.page1Style = 'anim-zoom-out';

        $scope.page2Style = 'anim-slide-below-fade';
        
        $scope.$on('animIn', function () {
            console.log('Page1Ctrl: animIn');
        });

        $scope.$on('animOut', function () {
            console.log('Page1Ctrl: animOut');
        });

    }

})();

