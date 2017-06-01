define([
    'angular',
    'services/modelService',
    'services/apiService',
    'services/calculoMarcaService'
], function(angular, modelService, apiService, calculoMarcaService) {
    var serviceModule = angular.module('serviceModule', []);

    modelService(serviceModule);
    apiService(serviceModule);
    calculoMarcaService(serviceModule);

    return serviceModule;
});