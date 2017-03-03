define([
    "angular",
    "services/modeloService",
    "services/apiService",
    "services/calculoMarcaService"
],function(
    angular,
    modeloService,
    apiService,
    calculoMarcaService
){
    var app = angular.module("servicesModule",[]);

    modeloService(app);
    apiService(app);
    calculoMarcaService(app);
    
    return app;
});