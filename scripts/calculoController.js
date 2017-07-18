define([

], function() {
    return function(app) {
        function controller($scope, modelService, calculoMarcaService, apiService) {
            var vm = this;
            vm.saludo = "Gestor de marcas";

            vm.getMejorMarca = function() {
                var mejorMarca = calculoMarcaService.getMejorMarca();
                modelService.setMejorMarca(mejorMarca);
            }

            function getMarcas() {
                apiService.getMarcas().then(function(response) {
                    modelService.setMarcas(response);
                }, function() {
                    modelService.setMarcas([]);
                });
            }

            vm.getPorcentajeMarca = function() {
                var marca = vm.model.marca;
                var mejorMarca = calculoMarcaService.getMejorMarca();
                var porcentajeMarca = calculoMarcaService.getPorcentajeMarca(marca, mejorMarca);
                if (porcentajeMarca !== "NaN") {
                    modelService.setPorcentajeMarca(porcentajeMarca);
                }
            }

            $scope.$watch("ctrl.model.tipoPrueba", function(newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }

                if (newValue === "") {
                    modelService.setMejorMarca("");
                }
                vm.getMejorMarca();
            });

            $scope.$watch("ctrl.model.edad", function(newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }

                modelService.setPrueba("");
                modelService.setPorcentajeMarca("");
            });

            $scope.$watch("ctrl.model.prueba", function(newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (newValue === "") {
                    modelService.setMejorMarca("");
                }
                vm.getMejorMarca();
            });

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