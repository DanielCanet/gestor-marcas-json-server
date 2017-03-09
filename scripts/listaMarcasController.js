define([
],function(){

	return function (app){
		
		function Controller(scope, modeloService){
			
			vm=this;

			vm.getMejorMarcaPorEdad = function(){
				var listaMarcas = modeloService.getMarcas();
				var edadSeleccionada = modeloService.getEdad();

				var listaMarcasEdadSeleccionada = List.filter(function(listaMarcas, edadSeleccionada){
					return listaMarcas.age === edadSeleccionada;
				});				
			}

			vm.nombre_listado = "Marcas M35 hombre";

			vm.getMejorMarcaPorEdad();
			
				
		}
		
		app.controller("listaMarcasController", Controller);
		Controller.$inject=["$scope", "modeloService"];
		
	}

});