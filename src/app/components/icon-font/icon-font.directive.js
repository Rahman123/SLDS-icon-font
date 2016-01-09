(function () {
    'use strict';

    angular.module('app')
        .directive('iconFont', iconFont);

    function iconFont($log) {
        return {
            scope: {
                obj: '='
            },
            templateUrl: 'components/icon-font/icon-font.html',
            link: link
        };

        function link(scope, element, attrs) {
            var $input = element[0].querySelector('.icon-input');

            scope.obj.input = 'sldsicon-' + scope.obj.category + '-' + scope.obj.name;

            scope.selectText = function () {
                $input.select();
            }
        }
    }
}());