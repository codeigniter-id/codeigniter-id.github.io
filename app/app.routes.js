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
                        .state('categories', {
                            url: '/categories',
                            templateUrl: 'app/categories/categories.html'
                        });


                $stateProvider.state('projects', {
                    url: '/projects',
                    controller: 'ProjectsController',
                    views: {
                        main: {
                            templateUrl: 'app/projects/projects.html'
                        }
                    }
                });

                $stateProvider.state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    views: {
                        main: {
                            templateUrl: 'app/home/home.html'
                        }
                    }
                });

                $stateProvider.state('rules', {
                    url: '/rules',
                    controller: 'RulesController',
                    views: {
                        main: {
                            templateUrl: 'app/rules/rules.html'
                        }
                    }
                });

                $stateProvider.state('awesome-ci', {
                    url: '/awesome-ci',
                    views: {
                        main: {
                            templateUrl: 'app/awsci/awsci.html'
                        }
                    }
                });

                $stateProvider.state('article', {
                    url: '/article',
                    controller: 'ArticleController',
                    views: {
                        main: {
                            templateUrl: 'app/article/article.html'
                        }
                    }
                }).state('article-detail', {
                    url: '/article/detail',
                    views: {
                        main: {
                            templateUrl: 'app/article/article-detail.html'
                        }
                    }
                });
            });
})();
