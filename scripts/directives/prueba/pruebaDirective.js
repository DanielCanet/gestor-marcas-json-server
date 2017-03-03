define([
"text!./templates/pruebaTemplate.html"
], function(pruebaTemplate){

	return function(app){

		function Directive(){

			return {
				template: pruebaTemplate,
				scope: {
					selPrueba: "=prueba",
					lista: "="
				}
			}			
		}
		
		app.directive("selectPrueba", Directive);
		
	
	};

});