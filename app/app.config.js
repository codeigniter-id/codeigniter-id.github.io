
(function () {
    'use strict';
    angular
            .module('codeigniterIdApp')
            .config('$compileProvider', function ($compileProvider) {
                $compileProvider.debugInfoEnabled(true);
            });

});