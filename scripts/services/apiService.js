define(function(){

    return function (app){

        function service($http, $q){

            var getMarcas = function(){

                return $http({ method: "GET", url: 'http://localhost:3000/Marcas' })
                   .then(function(response){ return response.data })
                   .catch(function(responseError){ return responseError} );                

            };

            return {
                getMarcas : getMarcas
            }
        }
        app.factory("apiService", service);
        service.$inject = ["$http", "$q"]

    }
});