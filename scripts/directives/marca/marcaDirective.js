define([
"text!./templates/marcaTemplate.html"
], function(marcaTemplate){

	return function(app){

		function Directive(){
			return {
				template: marcaTemplate,
				scope: {
					marca: "="
				}
			}			
		}
		
		app.directive("marcaAtleta", Directive);
		
	
	};

});