/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="./product" />
/// <reference path="../common/services/dataAccessService" />
module app.productDetail {
    interface IProductDetailModel {
        title : string;
        product: app.domain.IProduct;
    }

    interface IProductParams{
        productId : number;
    }

    class ProcuctDetailCtrl implements IProductDetailModel{
        title : string;
        product : app.domain.IProduct;

        static $inject = ["$routeParams","dataAccessService"];
        constructor(private $routeParams : IProductParams, private dataAccessService : app.common.DataAccessService){
            this.title = "Product detail";
            var productResource = dataAccessService.getProductResource();
            var id = $routeParams.productId;
            productResource.get({productId: id},(data: app.domain.IProduct) => {
                this.product = data;
            });
        }
    }

    angular.module("productManagement")
        .controller("ProductDetailCtrl", ProcuctDetailCtrl);
}