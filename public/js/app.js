define([
    "angular",
    "jquery",

    "routConfig",
    "lazyAngular",

    "bootstrap"
], function (angular, jquery, routeConfig, lazyAngular) {

    'use strict';

    var module = angular.module("myApp", [], function ($compileProvider, $controllerProvider, $filterProvider, $provide) {
        // lazyAngular allows us to use requirejs to load data lazily
        lazyAngular.setCompileProvider($compileProvider);
        lazyAngular.setFactoryProvider($provide);
        lazyAngular.setControllerProvider($controllerProvider);
        lazyAngular.setFilterProvider($filterProvider);
    });

    module.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/view1", routeConfig.config("/partials/view1.html", "/js/controllers/Todo.js"));
        $routeProvider.when("/view2", routeConfig.config("/partials/view2.html", "/js/controllers/User.js", ["/js/directives/reverseDirective.js"]));

        $routeProvider.otherwise({redirectTo : "/view1"});
    }]);

    return module;
});
