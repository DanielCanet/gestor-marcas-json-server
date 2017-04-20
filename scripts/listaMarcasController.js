define([
],function(){

	return function (app){
		
		function Controller(scope, modeloService){
			
			vm=this;

			vm.edadSeleccionada = modeloService.getEdad();

			vm.getMejorMarcaPorEdad = function(){
				var listaMarcas = modeloService.getMarcas();
								

				vm.listaMarcasEdadSeleccionada = listaMarcas.filter(function(el){					
					return el.age === vm.edadSeleccionada;
				});				
			}

			vm.nombre_listado = "Marcas M" + vm.edadSeleccionada + " hombre";

			vm.getMejorMarcaPorEdad();
			
				
		}
		
		app.controller("listaMarcasController", Controller);
		Controller.$inject=["$scope", "modeloService"];
		
	}

});