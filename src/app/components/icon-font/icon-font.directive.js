(function () {
    'use strict';

    angular.module('app')
        .directive('iconFont', iconFont);

    function iconFont($log, $timeout) {
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

            scope.copyText = function () {
                $input.select();
                document.execCommand('copy');
                popMessage();
            };

            function popMessage() {
                element.addClass('active');

                $timeout(function () {
                    element.removeClass('active');
                }, 1000);
            }
        }
    }
}());