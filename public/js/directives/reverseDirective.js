/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:04
 */

'use strict';

define([], function () {




    return ['reverseDirective', function () {

        return {
            template : "<span></span>", // templateUri
            link     : function ($scope, elm, $attrs) {
                var update = function() {
                    elm.find('span').text($scope.user.name.split('').reverse().join(''));
                };
                $scope.$watch('user.name', update);
                update();
            }
        }
    }];
});