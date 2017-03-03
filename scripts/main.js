define([
"angular",
"appModule",
"directives/directivesModule",
"services/servicesModule",
], 
function(
angular, 
appModule,
directivesModule,
servicesModule){
	'use strict';
	console.log('arranque');

	angular.bootstrap($("#contenedor"),[appModule.name, directivesModule.name, servicesModule.name]);
});