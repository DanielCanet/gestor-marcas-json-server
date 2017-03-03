define([
"text!./templates/edadTemplate.html"
], function(edadTemplate){

	return function(app){

		function Directive(){
			return {
				template: edadTemplate,
				scope: {
					edad: "="
				}
			}			
		}
		
		app.directive("edadAtleta", Directive);
		
	
	};

});