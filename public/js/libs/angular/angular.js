define(['console', 'libs/angular/angular_1_0_3'], function (console) {
    console.group("Entering Angular module.");
    console.info("Angular: ", angular);

    if (typeof _ != 'undefined') {
        _.noConflict() && console.debug("_.noConflict()");
    }

    if(typeof $ != 'undefined') {
        $.noConflict() && console.debug("$.noConflict()");
    }
    console.debug("Global names removed.");

    console.groupEnd();
    return angular;
});