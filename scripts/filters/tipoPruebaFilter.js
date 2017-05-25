define([], function() {
    return function(app) {

        function filtro() {
            return function(pruebas, tipoPrueba) {
                var result = [];
                angular.forEach(pruebas, function(prueba) {
                    if (prueba.tipo === tipoPrueba) {
                        result.push(prueba)
                    }
                })
                return result;
            }
        }

        app.filter('tipoPruebaFilter', filtro);

    }
});