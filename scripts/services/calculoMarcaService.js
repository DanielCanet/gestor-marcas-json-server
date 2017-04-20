define(function(){

    return function (app){

        function service(){

            var cambioComaPorPunto = function(marca){
                return marca.replace(",", ".")
            }

			var calculoPorcentageCarrera = function (atleta, mejorMarca){
                var m = parseFloat(cambioComaPorPunto(mejorMarca));
                var a = parseFloat(cambioComaPorPunto(atleta.marca));
				var result = (m * 100)/a;
				return result.toFixed(2); 
			}

			var calculoPorcentageConcurso = function (atleta, mejorMarca){
                var m = parseFloat(cambioComaPorPunto(mejorMarca));
                var a = parseFloat(cambioComaPorPunto(atleta.marca));                
				var result = (a * 100)/m;
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