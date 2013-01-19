define([
    // Standard Libs
    "console",
    "angular",
    "jquery",
    "underscore"
], function (console, angular, $, _) {

    "use strict";

    return ['save', function () {
        return {
            run : function (data) {
                alert("Saving: " + JSON.stringify(data));
            }
        }
    }];
});