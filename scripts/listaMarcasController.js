define([
],function(){

	return function (app){
		
		function Controller(scope){
			
			vm=this;

			vm.nombre_listado = "Marcas M35 hombre";
			
				
		}
		
		app.controller("listaMarcasController", Controller);
		Controller.$inject=["$scope"];
		
	}

});