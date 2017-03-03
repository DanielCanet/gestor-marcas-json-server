define([
"text!./templates/sexoTemplate.html"
], function(sexoTemplate){

	return function(app){

		function Directive(){
			return {
				template: sexoTemplate,
				scope: {
					sexo: "="
				}
			}			
		}
		
		app.directive("sexoAtleta", Directive);
		
	
	};

});