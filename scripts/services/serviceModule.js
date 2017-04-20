define([
    'angular',
    'services/modelService'
], function(angular, modelService) {
    var serviceModule = angular.module('serviceModule', []);

    modelService(serviceModule);

    return serviceModule;
});