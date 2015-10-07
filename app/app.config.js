
(function () {
    'use strict';
    angular
            .module('codeigniterIdApp')
            .config('config', loadConfig)

    function loadConfig() {
        return {'testing': 'dsdsds'};
    }
});