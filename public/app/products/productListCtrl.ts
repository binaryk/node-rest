/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="./product" />
/// <reference path="../common/services/dataAccessService" />
module app.productList {

    interface IProductListModel{
        title : string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage() : void;
    }

    class ProductListController implements IProductListModel{
        title: string;
        showImage : boolean;
        products : app.domain.IProduct[];

        static $inject = ['dataAccessService'];
        constructor(private dataAccessService : app.common.DataAccessService){
            this.title = "Product list";
            this.showImage = false;
            this.products  = [];

            var productResource = dataAccessService.getProductResource();

            productResource.query(
                (data : app.domain.IProduct[]) => {
                    this.products = data;
                }
                //asa era sa fie daca implementam cu mocks
            );
        }

        toggleImage = () => {
            this.showImage = !this.showImage;
        }

    }

    angular.module("productManagement")
        .controller("ProductListCtrl", ProductListController);
}
