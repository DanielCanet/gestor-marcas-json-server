define(function () {

    return function (app) {

        function Controller() {

            this.$onInit = function () {
                this.changeTipoPrueba = this.ngChange();
            };

        }

        Controller.$inject = [];
        app.controller('tipoPruebaController', Controller);

    };

});