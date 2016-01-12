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
        $scope.selectedTab = 0;

        // methods
        $scope.selectTab        = selectTab;
        $scope.getSizeClassName = getSizeClassName;
        $scope.clearSearch      = clearSearch;

        IconFactory.getIconFonts()
        .then(function (response) {
            $scope.iconGroup = response;

            $timeout(function () {
                $scope.isLoading = false;
            }, 1000);
        });

        function selectTab(tab) {
            $scope.selectedTab = tab;
        }

        function getSizeClassName() {
            if ($scope.size.value === 2) {
                return 'icon-layout--medium';
            }

            if ($scope.size.value === 3) {
                return 'icon-layout--large';
            }

            if ($scope.size.value === 4) {
                return 'icon-layout--xx-large';
            }

            return 'icon-layout--default';
        }

        function clearSearch() {
            $scope.isLoading = true;
            $scope.keywords = '';

            $timeout(function () {
                $scope.isLoading = false;
            }, 1000);
        }
    }
}());