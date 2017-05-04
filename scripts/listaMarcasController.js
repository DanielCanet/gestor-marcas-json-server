define([

], function() {
    return function(app) {
        function controller($scope) {
            var vm = this;

            vm.helloWorld = "Hello World!"
        };

        controller.$inject = ["$scope"];

        app.controller('listaMarcasController', controller);
    };
});