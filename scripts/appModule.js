define([
    'angular',
    'calculoController',
    'angular-material'
], function(angular, calculoController) {
    var app = angular.module("appModule", ['ngMaterial']);

    calculoController(app);

    return app;
});