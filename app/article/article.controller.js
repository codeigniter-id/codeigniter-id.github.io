(function () {

    'use strict';

    angular
            .module('codeigniterIdApp')
            .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$http', 'Loki'];

    function ArticleController($scope, $http, Loki) {
        createArticleTable($scope, Loki);
        getArticles($scope, $http);
    }


    function getArticles($scope, $http) {
        console.log($scope.posts.data);
        //$scope.posts = db.getCollection('posts') || db.addCollection('posts');
        return $scope.postData = $scope.posts.data;
        /**
         $http({method: 'GET', url: 'app/article/article.json'}).success(function (data) {
         $scope.posts = data; // response data 
         console.log($scope.posts);
         }).error(function (data) {
         });
         */
    }


    function createArticleTable($scope, Loki) {
        var db;

        db = new Loki('CodeigniterId.json');



        $scope.posts = db.getCollection('posts') || db.addCollection('posts');
        $scope.posts.insert({
            title: 'welcome to codeigniter indonesia',
            "url": "codeigniter-id.github.id/article/welcome-to-ci",
            "description": "Some Tesxt",
            "time": "Tuesday, August 6, 2015",
            "author": "Putera kahfi"
        });

        $scope.posts.insert({
            title: 'welcome to codeigniter indonesia again',
            "url": "codeigniter-id.github.id/article/welcome-to-ci",
            "description": "Some Tesxt",
            "time": "Tuesday, August 6, 2015",
            "author": "Putera kahfi"
        });

        $scope.posts.insert({
            title: 'welcome to codeigniter indonesia more',
            "url": "codeigniter-id.github.id/article/welcome-to-ci",
            "description": "Some Tesxt",
            "time": "Tuesday, August 6, 2015",
            "author": "Putera kahfi"
        });

        $scope.posts.insert({
            title: 'welcome to codeigniter indonesia more',
            "url": "codeigniter-id.github.id/article/welcome-to-ci",
            "description": "Some Tesxt",
            "time": "Tuesday, August 6, 2015",
            "author": "Putera kahfi"
        });



        db.loadDatabase({}, function () {
            $scope.collections = db.listCollections();
            //console.log($scope.collections);

        });





    }
})();
