/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../cats/cat" />
module app.common {
    interface ICatsAccessService {
        getCats() : Array<app.domain.ICat>;
    }

    export class catsAccessService implements ICatsAccessService{
        static $inject = ["$http",'$resource'];
        constructor(private $http, private $resource : ng.resource.IResourceService){}

        getCats = ():any =>{
            var promise = this.$http.get('http://localhost:3000/cat').then(function(data){
                return data;
            });
            return promise;

        }

        store = (form:Object) => {
            var promise = this.$http.post('http://localhost:3000/cat', form).then(function(data){
                return data;
            });
            return promise;
        }

        put = (form:Object, cat_id?) => {
            var promise = this.$http.post('http://localhost:3000/cat/'+cat_id, form).then(function(data){
                return data;
            });
            return promise;
        }

        find = (cat_id) => {
            var promise = this.$http.get('http://localhost:3000/cat/' + cat_id).then(function(data){
                console.log(data);
                return data;
            });
            return promise;
        }

    }

    angular.module("common.services")
        .service("catsAccessService", catsAccessService);
}