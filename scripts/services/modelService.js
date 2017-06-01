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
                        { tipo: "concurso", nombre: "longitud", value: "longJump" },
                        { tipo: "concurso", nombre: "martillo", value: "hammer" },
                        { tipo: "carrera", nombre: "100ll", value: "m100ll" },
                        { tipo: "carrera", nombre: "400ll", value: "m400ll" }
                    ],
                    prueba: "",
                    marca: "",
                    mejorMarca: "",
                    marcas: []
                };
            };

            function setMarcas(listMarcas) {
                model.marcas = listMarcas;
            }

            var getMarcas = function() {
                return model.marcas;
            }

            var get = function() {
                return model;
            };

            var getSexo = function() {
                return model.sexo;
            }

            var getEdad = function() {
                return model.edad;
            }

            var getTipoPrueba = function() {
                return model.tipoPrueba;
            }

            var getPrueba = function() {
                return model.prueba;
            }

            var setMejorMarca = function(mejorMarca) {
                model.mejorMarca = mejorMarca;
            }

            return {
                initialize: initialize,
                setMarcas: setMarcas,
                getMarcas: getMarcas,
                get: get,
                getSexo: getSexo,
                getEdad: getEdad,
                getTipoPrueba: getTipoPrueba,
                getPrueba: getPrueba,
                setMejorMarca: setMejorMarca
            };
        };

        app.factory('modelService', service);
    };
});