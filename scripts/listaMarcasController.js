define([

], function() {
    return function(app) {
        function controller($scope, modelService) {
            var vm = this;

            vm.marcasByEdad = [];
            vm.helloWorld = "Hello World!";

            function getMarcasByEdad() {
                var edad = modelService.getEdad();
                var marcas = modelService.getMarcas();

                var marcasByEdad = marcas.data.filter(function(x) {
                    return x.age === edad;
                });
                return marcasByEdad;
            }

            function initialize() {
                vm.marcasByEdad = getMarcasByEdad();
            }

            (function() {
                initialize();
            })();
        };

        controller.$inject = ["$scope", "modelService"];

        app.controller('listaMarcasController', controller);
    };
});