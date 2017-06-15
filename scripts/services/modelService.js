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
                        { tipo: "concurso", nombre: "altura", value: "hightJump" },
                        { tipo: "concurso", nombre: "martillo", value: "hammer" },
                        { tipo: "concurso", nombre: "javalina", value: "javelin" },
                        { tipo: "carrera", nombre: "100ll", value: "m100ll" },
                        { tipo: "carrera", nombre: "400ll", value: "m400ll" }
                    ],
                    prueba: "",
                    marca: "",
                    mejorMarca: "",
                    porcentajeMarca: "",
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

            var setPrueba = function(prueba) {
                model.prueba = prueba;
            }

            var getPrueba = function() {
                return model.prueba;
            }

            var setMejorMarca = function(mejorMarca) {
                model.mejorMarca = mejorMarca;
            }
            var setPorcentajeMarca = function(porcentajeMarca) {
                model.porcentajeMarca = porcentajeMarca;
            }

            return {
                initialize: initialize,
                setMarcas: setMarcas,
                getMarcas: getMarcas,
                get: get,
                getSexo: getSexo,
                getEdad: getEdad,
                getTipoPrueba: getTipoPrueba,
                setPrueba: setPrueba,
                getPrueba: getPrueba,
                setMejorMarca: setMejorMarca,
                setPorcentajeMarca: setPorcentajeMarca
            };
        };

        app.factory('modelService', service);
    };
});