// Create a resource factory to access products table from database 
define([

], function(){

    return function(app){
            
            function service($resource){
                return $resource('/api/marcas/:id', { id: '@_id' }, {
                    update: { // We need to define this method manually as it is not provided with ng-resource
                    method: 'PUT'
                    }
                });
            }

            app.factory("resourceService", service);
            service.$inject = ["$resource"];
    }


});