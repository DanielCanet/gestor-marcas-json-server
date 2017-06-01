define([

], function() {
    return function(app) {
        function controller($scope, modelService, calculoMarcaService, apiService) {
            var vm = this;
            vm.saludo = "Gestor de marcas";

            vm.getMejorMarca = function() {
                var marca = vm.model.marca;
                var mejorMarca = calculoMarcaService.getMejorMarca();
                modelService.setMejorMarca(mejorMarca);

                var porcentajeMarca = calculoMarcaService.getPorcentajeMarca(marca, mejorMarca);
                modelService.setPorcentajeMarca(porcentajeMarca);
            }

            function getMarcas() {
                apiService.getMarcas().then(function(response) {
                    modelService.setMarcas(response);
                }, function() {
                    modelService.setMarcas([]);
                });
            }

            function initialize() {
                modelService.initialize();
                getMarcas();
                vm.model = modelService.get();
            }

            (function() {
                initialize();
            })();
        };

        controller.$inject = ["$scope", "modelService", "calculoMarcaService", "apiService"];
        app.controller('calculoController', controller);
    };
});