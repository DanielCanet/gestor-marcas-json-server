define([

], function() {
    return function(app) {

        function service($http, modelService) {

            var getMejorMarca = function(marcas) {

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

            var getPorcentajeMarca = function(marca, mejorMarca) {
                var porcentajeMarca = 0;
                if (parseInt(mejorMarca) !== 0) {
                    porcentajeMarca = (((parseInt(marca) / parseInt(mejorMarca)) * 100));
                }
                return porcentajeMarca;
            }

            return {
                getMejorMarca: getMejorMarca,
                getPorcentajeMarca: getPorcentajeMarca
            };
        };

        app.$inject = ['modelService'];
        app.factory('calculoMarcaService', service);
    };
});