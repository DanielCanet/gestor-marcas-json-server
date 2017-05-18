define([

], function() {
    return function(app) {

        function service() {

            var model = {};

            var initialize = function() {
                model = {
                    edad: "35",
                    sexo: "M",
                    tipoPrueba: "concurso",
                    pruebas: [
                        {tipo:"concurso", nombre:"longitud"},
                        {tipo:"concurso", nombre:"martillo"},
                        {tipo:"carrera", nombre:"100ll"},
                        {tipo:"carrera", nombre:"400ll"}
                    ],
                    prueba: ""
                };
            };

            var get = function(){
                return model;
            };

            return {
                initialize: initialize,
                get: get
            };
        };

        app.factory('modelService', service);
    };
});