define([
    'text!./marcaTemplate.html'
], function(marcaTemplate) {
    return function(app) {
        function directive() {
            return {
                template: marcaTemplate,
                scope: {
                    marca: "="
                }
            }
        };
        app.directive('marcaAtleta', directive);
    }

});