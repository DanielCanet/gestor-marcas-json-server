define([

], function() {
    return function(app) {
        function controller($scope, modelService) {
            var vm = this;
            vm.saludo = "Gestor de marcas";         

            function initialize(){
                modelService.initialize();
                vm.model = modelService.get();
            }

            (function () {
                initialize();
            })();

        };

        controller.$inject = ["$scope", "modelService"];
        app.controller('calculoController', controller);

        // function filtro() {
        //     return function(pruebas, tipoPrueba) {
        //         var result = [];
        //         angular.forEach(pruebas, function(prueba) {
        //             if (prueba.tipo === tipoPrueba) {
        //             result.push(prueba)
        //             }
        //         })
        //         return result;
        //     }
        // }

        // app.filter('tipoPruebaFiltro', filtro);        

    };
});