define([
"angular",
"calculoController",
"listaMarcasController",
"angular-material",
"angular-route"
],function(
	angular,
	calculoController,
	listaMarcasController
	){

	var app = angular.module("appDemo", ['ngMaterial', 'ngRoute']);

	calculoController(app);
	listaMarcasController(app);	

	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/',{
				templateUrl: 'scripts/pages/calculoPorcentage.html',
				controller: 'calculoController'			
			}).
			when('/calculo', {
				templateUrl: 'scripts/pages/calculoPorcentage.html',
				controller: 'calculoController'
			}).
			when('/listaMarcas', {
				templateUrl: 'scripts/pages/listaMarcas.html',
				controller: 'listaMarcasController'
			}).
			otherwise({
				redirectTo: '/'
			});
		}]);
	
	return app;
});