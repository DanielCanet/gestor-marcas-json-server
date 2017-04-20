define([
    'text!./edadTemplate.html'
], function(edadTemplate) {
    return function(app) {
        function directive() {
            return {
                template: edadTemplate,
                scope: {
                    edad: "="
                }
            }
        };
        app.directive('edadAtleta', directive);
    }

});