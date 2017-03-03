define([
"angular",
"appController",
"angular-material"
],function(
	angular, 
	appController
	){

	var app = angular.module("appDemo", ['ngMaterial']);
	appController(app);
	
	return app;
});