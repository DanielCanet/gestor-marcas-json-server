define([
    "angular",
    "directives/prueba/pruebaDirective"
],function(
    angular,
    pruebaDirective
){
    var module = angular.module("pruebaDirectiveModule",[]);
    
    pruebaDirective(module);

    return module;

});