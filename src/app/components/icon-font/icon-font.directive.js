(function () {
    'use strict';

    angular.module('app')
        .directive('iconFont', iconFont);

    function iconFont($log, $timeout) {
        return {
            scope: {
                obj: '=',
                size: '='
            },
            templateUrl: 'components/icon-font/icon-font.html',
            link: link
        };

        function link(scope, element, attrs) {
            var $input = element[0].querySelector('.icon-input');

            scope.obj.input = 'sldsicon-' + scope.obj.category + '-' + scope.obj.name;

            scope.copyText = copyText;

            function copyText() {
                $input.select();

                if (typeof document.execCommand !== 'function') {
                    return;
                }

                document.execCommand('copy');
                popMessage();
            }

            function popMessage() {
                element.addClass('active');

                $timeout(function () {
                    element.removeClass('active');
                }, 1000);
            }
        }
    }
}());