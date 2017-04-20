define([

], function(){

	return function(app){
		
		function service(calculoMarcaService){
			var atleta = {
				edad: "35",
				sexo: "M",
				tipoPrueba: "concurso",
				prueba: "",
				marca:"",
				porcentage: ""
			};

			var marcas = [];

			var listaCarreras = [
				{id: "m60ll", name: "60m.ll"},
				{id: "m100ll", name: "100m.ll"},
				{id: "m200ll", name: "200m.ll"},
				{id: "m400ll", name: "400m.ll"}
			]

			var listaConcursos = [
				{id: "longJump", name: "longitud"},
				{id: "tripleJump", name: "triple"},
				{id: "hightJump", name: "altura"},
				{id: "poleVount", name: "pértiga"}
			]			
			
			var setEdad = function(edad){
				atleta.edad = edad;
			}		

			var setMarcas = function(m){
				marcas = m;
			};			

			var setPorcentage = function(elemento){

				var mejorMarcaPorEdad = getMejorMarcaPorEdad(elemento);

				if (atleta.tipoPrueba === "concurso"){
					var result = calculoMarcaService.calculoPorcentageConcurso(atleta, mejorMarcaPorEdad.mark);
				}else{
					var result = calculoMarcaService.calculoPorcentageCarrera(atleta, mejorMarcaPorEdad.mark);
				}
				
				atleta.porcentage = result.toString() + "%";

			};

			var getEdad = function(){
				return atleta.edad;
			}

			var getSexo = function(){
				return atleta.sexo;
			}				

			var getMarcas = function(){
				return marcas;
			};

			var getMejorMarcaPorEdad = function(elemento){
				function findEvento(evento){					
					return evento.name == vm.model.prueba;
				}
				var evento = elemento.eventos.find(findEvento);

				if (evento){
					return evento;
				}
				return {};
			}

			function getModel(){

				return atleta;

			}

			function getLista(){

				if(atleta.tipoPrueba === "carrera"){
					return listaCarreras;
				}else{
					return listaConcursos;
				}			

			}

			
			return {
				setEdad: setEdad,
				setMarcas: setMarcas,
				setPorcentage: setPorcentage,
				getEdad: getEdad,
				getModel:getModel,
				getLista: getLista,
				getMarcas: getMarcas
				
			}
		}	
	
		app.factory("modeloService", service);
		service.$inject=["calculoMarcaService"];
	};

});