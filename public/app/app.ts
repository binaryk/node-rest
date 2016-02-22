/// <reference path="../typings/angularjs/angular.d.ts" />
module app {
    var main = angular.module("productManagement",["ui.router","common.services"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
    function routeConfig($stateProvider, $urlRouterProvider):void{
        cats($stateProvider,$urlRouterProvider);
    }

    function cats($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('cats', {
                url: "/cats",
                templateUrl: "/app/cats/catsList.html",
                controller: "CatsCtrl as vm",
                resolve : {
                    action: function(){
                        return "list"
                    }
                }
            })
            .state('cats_add', {
                url: "/cats/add",
                templateUrl: "/app/cats/catsAdd.html",
                controller: "CatsCtrl as vm",
                resolve : {
                    action: function(){
                        return "add"
                    }
                }
            })
            .state('cat_edit', {
                url: "/cats/edit/:cat",
                templateUrl: "/app/cats/catsAdd.html",
                controller: "CatsCtrl as vm",
                resolve : {
                    action: function(){
                        return 'edit';
                    }
                }
            });
    }


}
