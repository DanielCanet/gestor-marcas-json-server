define(function(){

    return function (app){

        function service(){

			var calculoPorcentageCarrera = function (atleta, mejorMarca){
				var result = (parseInt(mejorMarca) * 100)/parseInt(atleta.marca);
				return result.toFixed(2); 
			}

			var calculoPorcentageConcurso = function (atleta, mejorMarca){
				var result = (parseInt(atleta.marca) * 100)/parseInt(mejorMarca);
				return result.toFixed(2); 
			}

            return {
                calculoPorcentageCarrera : calculoPorcentageCarrera,
                calculoPorcentageConcurso : calculoPorcentageConcurso
            }
        }
        app.factory("calculoMarcaService", service);
        service.$inject = ["$http", "$q"]

    }
});