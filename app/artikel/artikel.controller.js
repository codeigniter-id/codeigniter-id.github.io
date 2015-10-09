// article.controller.js
(function() {
  'use strict';
  angular.module('codeigniterIdApp')
    .controller('ArtikelController', function($scope, $http) {
      $scope.getAll = function() {
        $http.get("data/artikel.json")
          .then(function(articles) {
            $scope.articles = articles.data;            
          })
      }
    });
})();
