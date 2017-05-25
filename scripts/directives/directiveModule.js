define([
    'angular',
    'directives/sexoAtleta/sexoAtletaDirective',
    'directives/edadAtleta/edadAtletaDirective',
    'directives/marcaAtleta/marcaAtletaDirective'
], function(angular, sexoAtletaDirective, edadAtletaDirective, marcaAtletaDirective) {
    var directiveModule = angular.module('directiveModule', []);

    sexoAtletaDirective(directiveModule);
    edadAtletaDirective(directiveModule);
    marcaAtletaDirective(directiveModule);

    return directiveModule;
});