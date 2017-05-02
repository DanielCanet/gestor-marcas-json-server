// define([

// ], function() {
//     return function(app) {
//         function controller($scope, modelService) {
//             var vm = this;
//             vm.saludo = "Gestor de marcas";
//             vm.sexo = "M";
//             vm.edad = "25";

//             modelService.initialize();
//         };

//         controller.$inject = ["$scope", "modelService"];
//         app.controller('calculoController', controller);
//     };
// });

export interface ICalculoController{
activate: () => void;
}

export class CalculoController implements ICalculoController{
    saludo: string;
    sexo: string;
    edad: string;
    static $inject = ["modelService"];

    constructor(private modelService: any){
        this.init();
    }

    private init(){
        var vm = this;
        vm.saludo = "Gestor de marcas";
        vm.sexo = "M";
        vm.edad = "25";
        this.activate();
    }

    activate(): void {
        this.modelService.initialize();
    }

}