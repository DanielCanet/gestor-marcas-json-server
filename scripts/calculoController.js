define([

], function() {
    return function(app) {
        function controller($scope, modelService, apiService) {
            var vm = this;
            vm.saludo = "Gestor de marcas";

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

        controller.$inject = ["$scope", "modelService", "apiService"];
        app.controller('calculoController', controller);
    };
});