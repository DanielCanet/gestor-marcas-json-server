define([
    "angular",
    "directives/sexo/sexoDirective"
],function(
    angular,
    sexoDirective
){
    var module = angular.module("sexoDirectiveModule",[]);
    
    sexoDirective(module);

    return module;

});