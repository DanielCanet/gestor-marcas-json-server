define([
],function(){

	return function (app){
		
		/*opcion 2*/

		
		function Controller(scope, $timeout, modeloService, apiService){
			
			vm=this;

			vm.ganadores = [
				{posicion: 1, nombre: "Daniel Amattulo"},
				{posicion: 2, nombre: "Pedro Marmol"},
				{posicion: 3, nombre: "Josmar"}
			];
			
			vm.refresh = function(){
				apiService.getMarcas()
					.then(function(response){
						modeloService.setMarcas(response);
						vm.marcas = modeloService.getMarcas();
					}, function(error){
						console.log("Error: " + error);
					});
			}

			vm.refresh();

			vm.name = "gestor marcas prueba";
			vm.model = modeloService.getModel();
			vm.lista = modeloService.getLista();
			

			vm.changeTipoPrueba = function(){
				$timeout(function () {
					vm.lista = modeloService.getLista();
				}, 1000);
			}

			function getPorcentage(elemento){
				return "86%"
			};

			vm.getMarca = function(){		

				function findMarca(elemento){					
					return elemento.age == vm.model.edad && elemento.sex === vm.model.sexo;
				}

				var marcas = modeloService.getMarcas();

				var elemento = marcas.find(findMarca);

				modeloService.setPorcentage(elemento);

				vm.marcas = [elemento];
				
			}

			vm.add = function(marca) {
				vm.marcasResource.save(marca,function(marca){
					refresh();
				});
			};				
		}
		
		app.controller("appController", Controller);
		Controller.$inject=["$scope", "$timeout", "modeloService", "apiService"];

		
	}

});