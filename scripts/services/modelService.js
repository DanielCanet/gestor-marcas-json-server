define([

], function() {
    return function(app) {

        function service() {

            var model = {};

            var initialize = function() {
                model = {
                    edad: "35",
                    serxo: "M"
                };
            };

            return {
                initialize: initialize
            };
        };

        app.factory('modelService', service);
    };
});