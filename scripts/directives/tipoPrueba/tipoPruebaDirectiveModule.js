define([
    "angular",
    "directives/tipoPrueba/tipoPruebaDirective",
    "directives/tipoPrueba/tipoPruebaController"  
],function(
    angular,
    tipoPruebaDirective,
    tipoPruebaController
){
    var module = angular.module("tipoPruebaDirectiveModule",[]);
    
    tipoPruebaDirective(module);
    tipoPruebaController(module);

    return module;

});