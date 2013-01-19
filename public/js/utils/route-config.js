/**
 * Based on angularjs-requirejs-lazy-controllers:
 * https://github.com/matys84pl/angularjs-requirejs-lazy-controllers
 *
 * by Mateusz Bilski
 */

define(["angular", "lazyAngular"], function (angular, lazyAngular) {

    function config(templateUrl, controllerName, directives) {

        if (!lazyAngular) {
            throw new Error("lazyAngular is not set!");
        }

        var defer,
            html,
            routeDefinition = {};

        routeDefinition.template = function () {
            return html;
        };
        routeDefinition.controller = controllerName;
        routeDefinition.resolve = {
            delay : function ($q, $rootScope) {
                defer = $q.defer();
                if (!html) {
                    var dependencies = [controllerName, "text!" + templateUrl];
                    if (directives) {
                        dependencies = dependencies.concat(directives);
                    }
                    require(dependencies, function () {
                        var controller = arguments[0],
                            template = arguments[1];

                        for (var i = 2; i < arguments.length; i++) {
                            lazyAngular.registerDirective(arguments[i]);
                        }

                        lazyAngular.registerController([controllerName, controller[1]]);
                        html = template;
                        defer.resolve();
                        $rootScope.$apply();
                    })

                } else {
                    defer.resolve();
                }

                return defer.promise;
            }
        }

        return routeDefinition;
    }

    return {
        config : config
    }
})

