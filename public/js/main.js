/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 18:58
 */

"use strict";

require.config({
    paths : {
        text        : "libs/require/text",
        console     : "libs/console/console",
        jquery      : "libs/jquery/jquery",
        underscore  : "libs/underscore/underscore",
        angular     : "libs/angular/angular",
        bootstrap   : "libs/bootstrap",
        lazyAngular : "utils/lazy-angular",
        routConfig  : "utils/route-config"
    },
    shim  : {
        "angular"   : {
            exports : "angular"
        },
        "bootstrap" : {
            deps : ["jquery"]
        }
    }
});

require([
    "console",
    "angular",
    "jquery",
    "text",
    "app"
], function (console, angular, $) {

    $(document).ready(function () {
        angular.bootstrap(document, ["myApp"]);
    });

});