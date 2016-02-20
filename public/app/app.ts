/// <reference path="../typings/angularjs/angular.d.ts" />
module app {
    var main = angular.module("productManagement",["ui.router","common.services"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
    function routeConfig($stateProvider, $urlRouterProvider):void{

        $stateProvider
            .state('cats', {
                url: "/cats",
                templateUrl: "/app/cats/catsList.html",
                controller: "CatsCtrl as vm"
            })
            .state('cats_add', {
                url: "/cats/add",
                templateUrl: "/app/cats/catsAdd.html",
                controller: "CatsCtrl as vm"
            })
    }
}
