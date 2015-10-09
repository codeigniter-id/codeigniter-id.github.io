(function() {

	'use strict';

	angular
		.module('codeigniterIdApp')
		.controller('ArticleController', ArticleController);

	function ArticleController($scope, $http) {
		$http({method: 'POST', url: 'app/article.json'}).success(function(data) {
			$scope.posts = data; // response data 
			console.log($scope.posts);
		}).
			error(function(data) {
		});
	}
})();