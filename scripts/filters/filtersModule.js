define([
    'angular',
    'filters/tipoPruebaFilter'
], function(angular, tipoPruebaFilter) {
    var filtersModule = angular.module('filtersModule', []);

    tipoPruebaFilter(filtersModule);

    return filtersModule;
});