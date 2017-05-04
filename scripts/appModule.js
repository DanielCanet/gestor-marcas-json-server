define([
    'angular',
    'calculoController',
    'listaMarcasController',
    'angular-material',
    'angular-route'
], function(angular, calculoController, listaMarcasController) {
    var app = angular.module("appModule", ['ngMaterial', 'ngRoute']);

    calculoController(app);
    listaMarcasController(app);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: './calculo.html',
            controller: 'calculoController'
        }).
        when('/calculo', {
            templateUrl: './calculo.html',
            controller: 'calculoController'
        }).
        when('/lista', {
            templateUrl: './lista.html',
            controller: 'listaMarcasController'
        }).otherwise('', {
            templateUrl: './lista.html',
            controller: 'listaMarcasController'
        });
    }]);

    return app;
});