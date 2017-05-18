define([
    'angular',
    'appModule',
    'directives/directiveModule',
    'services/serviceModule',
    'filters/filtersModule'
], function(angular, appModule, directiveModule, serviceModule, filtersModule) {
    'use strict';

    angular.bootstrap($("#contenedor"), [appModule.name, directiveModule.name, serviceModule.name, filtersModule.name]);
});