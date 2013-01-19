'use strict';

define(['lazyAngular', '/js/factory/save.js'], function (lazyAngular, save) {

    "use strict";

    lazyAngular.registerFactory(save);

    return ['MyController', function ($scope, save) {
        $scope.user = {
            name   : "Michael Jackson",
            age    : 13,
            gender : "male"
        };
        $scope.save = function (user) {
            save.run(angular.toJson(user));
        }
    }];
});
