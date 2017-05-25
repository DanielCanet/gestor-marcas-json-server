define([
    'angular',
    'services/modelService',
    'services/apiService'
], function(angular, modelService, apiService) {
    var serviceModule = angular.module('serviceModule', []);

    modelService(serviceModule);
    apiService(serviceModule);

    return serviceModule;
});