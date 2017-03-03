define([
"text!./templates/edadTemplateBind.html"
], function(edadTemplate){

	return function(app){

        function appControllerBind(){}

		function Directive(){
			return {
				template: edadTemplate,
                controller: "appControllerBind",
                controllerAs: "vm",
                bindToController: {
                    edad: "="
                }
/*				scope: {
					edad: "="
				}*/
			}			
		}
		
		app.directive("edadAtletaBind", Directive);
        app.controller("appControllerBind", appControllerBind);
		
	
	};

});