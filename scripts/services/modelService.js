define([

], function() {
    return function(app) {

        function service(apiService) {

            var model = {};

            var initialize = function() {
                model = {
                    edad: "35",
                    sexo: "M",
                    tipoPrueba: "concurso",
                    pruebas: [
                        { tipo: "concurso", nombre: "longitud" },
                        { tipo: "concurso", nombre: "martillo" },
                        { tipo: "carrera", nombre: "100ll" },
                        { tipo: "carrera", nombre: "400ll" }
                    ],
                    prueba: "",
                    marca: "",
                    marcas: []
                };
            };

            function setMarcas(listMarcas) {
                model.marcas = listMarcas;
            }

            var get = function() {
                return model;
            };

            var getEdad = function() {
                return model.edad;
            }

            var getMarcas = function() {
                return model.marcas;
            }

            return {
                initialize: initialize,
                get: get,
                getEdad: getEdad,
                getMarcas: getMarcas,
                setMarcas: setMarcas
            };
        };

        app.factory('modelService', service);
    };
});