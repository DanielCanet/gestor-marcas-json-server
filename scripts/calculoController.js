define([

        ], function() {
            return function(app) {
                function controller($scope, modelService) {
                    var vm = this;
                    vm.saludo = "hola mundo";
                    vm.sexo = "M";
                    vm.edad = "25";

                    modelService.initialize();
                };

                controller.$inject = ["$scope", "modelService
                    app.controller('calculoController', controller);
                };
            });