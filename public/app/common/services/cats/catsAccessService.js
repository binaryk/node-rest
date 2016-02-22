/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../cats/cat" />
var app;
(function (app) {
    var common;
    (function (common) {
        var catsAccessService = (function () {
            function catsAccessService($http, $resource) {
                var _this = this;
                this.$http = $http;
                this.$resource = $resource;
                this.getCats = function () {
                    var promise = _this.$http.get('http://localhost:3000/cat').then(function (data) {
                        return data;
                    });
                    return promise;
                };
                this.store = function (form) {
                    var promise = _this.$http.post('http://localhost:3000/cat', form).then(function (data) {
                        return data;
                    });
                    return promise;
                };
                this.put = function (form, cat_id) {
                    var promise = _this.$http.post('http://localhost:3000/cat/' + cat_id, form).then(function (data) {
                        return data;
                    });
                    return promise;
                };
                this.find = function (cat_id) {
                    var promise = _this.$http.get('http://localhost:3000/cat/' + cat_id).then(function (data) {
                        console.log(data);
                        return data;
                    });
                    return promise;
                };
            }
            catsAccessService.$inject = ["$http", '$resource'];
            return catsAccessService;
        })();
        common.catsAccessService = catsAccessService;
        angular.module("common.services").service("catsAccessService", catsAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=catsAccessService.js.map