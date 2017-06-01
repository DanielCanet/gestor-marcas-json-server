define([

], function() {
    return function(app) {

        function service($http, modelService) {

            var getMejorMarca = function getMejorMarca(marcas) {

                var sexo = modelService.getSexo();
                var edad = modelService.getEdad();
                var tipoPrueba = modelService.getTipoPrueba();
                var prueba = modelService.getPrueba();

                var marcas = modelService.getMarcas().data.filter(function(x) {
                    return (x.sex === sexo && x.age === edad);
                });
                var events = marcas[0].eventos.filter(function(x) {
                    return (x.name === prueba);
                });

                return events[0].mark;
            }

            return {
                getMejorMarca: getMejorMarca
            };
        };

        app.$inject = ['modelService'];
        app.factory('calculoMarcaService', service);
    };
});