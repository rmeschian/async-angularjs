/**
 * Used to register lazy loaded angular controllers, directives, factories and filters.
 *
 * @license MIT
 * @author Rouben Meschian
 *
 */

define([], function () {

    var factoryProvider,
        filterProvider,
        compileProvider,
        controllerProvider;

    return {
        // init methods
        setFactoryProvider: function(val) {
            factoryProvider = val;
        },
        setFilterProvider: function(val) {
            filterProvider = val;
        },
        setCompileProvider: function(val) {
            compileProvider = val;
        },
        setControllerProvider: function(val) {
            controllerProvider = val;
        },

        // These registrations can be called anytime, so lazy load to your heart's content :-)
        registerFactory : function (factory) {
            factoryProvider.factory.apply(null, factory);
        },
        registerFilter  : function (filter) {
            filterProvider.register.apply(null, filter);
        },
        registerDirective       : function (directive) {
            compileProvider.directive.apply(null, directive);
        },
        registerController      : function (controller) {
            controllerProvider.register.apply(null, controller);
        }
    }
});
