define([
    'angular',
    'directives/sexoAtleta/sexoAtletaDirective',
    'directives/edadAtleta/edadAtletaDirective'
], function(angular, sexoAtletaDirective, edadAtletaDirective) {
    var directiveModule = angular.module('directiveModule', []);

    sexoAtletaDirective(directiveModule);
    edadAtletaDirective(directiveModule);

    return directiveModule;
});