define([
    'text!./sexoTemplate.html'
], function(sexoTemplate) {
    return function(app) {
        function directive() {
            return {
                template: sexoTemplate,
                scope: {
                    sexo: "="
                }
            }
        };
        app.directive('sexoAtleta', directive);
    };
});