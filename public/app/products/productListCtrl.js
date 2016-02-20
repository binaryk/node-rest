/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="./product" />
/// <reference path="../common/services/dataAccessService" />
var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListController = (function () {
            function ProductListController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.toggleImage = function () {
                    _this.showImage = !_this.showImage;
                };
                this.title = "Product list";
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListController.$inject = ['dataAccessService'];
            return ProductListController;
        })();
        angular.module("productManagement").controller("ProductListCtrl", ProductListController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
//# sourceMappingURL=productListCtrl.js.map