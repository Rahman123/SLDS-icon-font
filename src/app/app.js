(function () {
    'use strict';

    angular.module('app', [])
        .controller('AppController', AppController);

    function AppController($log, $scope, $timeout, IconFactory) {
        var vm = this;

        $scope.isLoading = true;
        $scope.iconGroup = [];
        $scope.sizes = [
            {
                label: '1x',
                value: 1
            },
            {
                label: '2x',
                value: 2
            },
            {
                label: '3x',
                value: 3
            },
            {
                label: '4x',
                value: 4
            }
        ];
        $scope.size = $scope.sizes[2];

        IconFactory.getIconFonts()
        .then(function (response) {
            $scope.iconGroup = response;

            $timeout(function () {
                $scope.isLoading = false;
            }, 1000);
        });
    }
}());