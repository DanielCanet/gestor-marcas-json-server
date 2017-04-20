define([
    'angular',
    'appModule',
    'directives/directiveModule',
    'services/serviceModule'
], function(angular, appModule, directiveModule, serviceModule) {
    'use strict';

    angular.bootstrap($("#contenedor2"), [appModule.name, directiveModule.name, serviceModule.name]);
});