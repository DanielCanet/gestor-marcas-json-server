define([
    'angular',
    'appModule',
    'directives/directiveModule',
    'services/serviceModule'
], function(angular, appModule, directiveModule, serviceModule) {
    'use strict';

    angular.bootstrap($("#contenedor"), [appModule.name, directiveModule.name, serviceModule.name]);
});