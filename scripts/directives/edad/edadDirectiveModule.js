define([
    "angular",
    "directives/edad/edadDirective"
],function(
    angular,
    edadDirective
){
    var module = angular.module("edadDirectiveModule",[]);
    
    edadDirective(module);

    return module;

});