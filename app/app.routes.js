/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
	'use strict';
	angular
	.module('codeigniterIdApp')
	.config(function($stateProvider, $urlRouterProvider) {

			// Redirect to the auth state if any other states
			// are requested other than users
			$urlRouterProvider.otherwise('/home');
			
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'app/categories/categories.html'
				})
				.state('project', {
					url: '/project',
					templateUrl: 'app/project/project.html'
				})
				.state('categories', {
					url: '/categories',
					templateUrl: 'app/categories/categories.html'
				});
		});
})();
