/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="./product" />
/// <reference path="../common/services/dataAccessService" />
var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProcuctDetailCtrl = (function () {
            function ProcuctDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product detail";
                var productResource = dataAccessService.getProductResource();
                var id = $routeParams.productId;
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            ProcuctDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProcuctDetailCtrl;
        })();
        angular.module("productManagement").controller("ProductDetailCtrl", ProcuctDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=productDetailCtrl.js.map