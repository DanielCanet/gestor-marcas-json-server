define([
    "angular",
    "directives/edadBind/edadDirectiveBind"
],function(
    angular,
    edadDirectiveBind
){
    var module = angular.module("edadDirectiveBindModule",[]);
    
    edadDirectiveBind(module);

    return module;

});