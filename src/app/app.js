(function () {
    'use strict';

    angular.module('app', [])
        .controller('AppController', AppController);

    function AppController($log, $scope, IconService) {
        var vm = this;

        $scope.iconGroup = IconService;


    }
}());