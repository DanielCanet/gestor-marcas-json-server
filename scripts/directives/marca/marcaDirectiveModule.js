define([
    "angular",
    "directives/marca/marcaDirective"
],function(
    angular,
    marcaDirective
){
    var module = angular.module("marcaDirectiveModule",[]);
    
    marcaDirective(module);

    return module;

});