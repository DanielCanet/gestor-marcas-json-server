define([
	"text!./templates/tipoPruebaTemplate.html"
], function (tipoPruebaTemplate) {

	return function (app) {

		var Component = {
			template: tipoPruebaTemplate,
			bindings: {
				tipo: "=",
				ngChange: "&change"
			},
			controller: 'tipoPruebaController',

		}

		app.component("tipoPrueba", Component);

	};

});