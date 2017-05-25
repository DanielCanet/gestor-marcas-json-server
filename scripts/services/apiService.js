define([

], function() {
    return function(app) {

        function service($http) {

            var apiUrl = 'http://localhost:3000/Marcas';

            function getMarcas() {
                return $http({
                    method: 'GET',
                    url: apiUrl
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(responseError) {
                    return responseError;
                }).catch(function responseError(responseError) {
                    return responseError;
                });
            }

            return {
                getMarcas: getMarcas
            }
        }

        service.$inject = ['$http'];
        app.factory('apiService', service);
    };
});