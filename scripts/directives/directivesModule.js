define([
    "angular",
    "directives/edad/edadDirectiveModule",
    "directives/edadBind/edadDirectiveBindModule",
    "directives/sexo/sexoDirectiveModule",
    "directives/tipoPrueba/tipoPruebaDirectiveModule",
    "directives/prueba/pruebaDirectiveModule",
    "directives/marca/marcaDirectiveModule"
    
],function(
    angular,
    edadDirectiveModule,
    edadDirectiveBindModule,
    sexoDirectiveModule,
    tipoPruebaDirectiveModule,
    pruebaDirectiveModule,
    marcaDirectiveModule
){
    var app = angular.module("directivesModule",
    [edadDirectiveModule.name,
     edadDirectiveBindModule.name,
     sexoDirectiveModule.name,
     tipoPruebaDirectiveModule.name,
     pruebaDirectiveModule.name,
     marcaDirectiveModule.name]);
    
    return app;
});