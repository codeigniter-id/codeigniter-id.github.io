/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('codeigniterIdApp')
            .config(function ($stateProvider, $urlRouterProvider) {

                // Redirect to home
                $urlRouterProvider.otherwise('/home');

                $stateProvider
                        .state('home', {
                            url: '/home',
                            templateUrl: 'app/home/home.html'
                        })
                        .state('project', {
                            url: '/project',
                            templateUrl: 'app/projects/projects.html'
                        })
                        .state('categories', {
                            url: '/categories',
                            templateUrl: 'app/categories/categories.html'
                        });
            });
})();
