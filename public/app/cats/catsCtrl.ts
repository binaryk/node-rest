/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../common/services/cats/catsAccessService" />
/// <reference path="./cat" />
/// <reference path="../../bower_components/js-validation/Validation" />
module app.productList {

    interface ICatController{
        cats: any;
    }

    class CatsController implements ICatController{
        cats : any;
        title: string;
        form : Object;
        static $inject = ['catsAccessService','$location','$state'];
        constructor(private catsAccessService : app.common.catsAccessService, private $location, private $state){
            this.cats = [];
            this.form = new Object;
            var _that = this;
            this.title = "List of Cats from nodejs";
            catsAccessService.getCats().then(function(data){
                _that.cats = data.data.data;
            })
        }

        save = () => {
            var _that = this;

            var validation = new App.Forms.Validate();

            validation.addRule("name",{
                rule: "require",
                message: "Camp obligatoriu"
            })

            validation.addRule("age",{
                rule: "require",
                message: "Camp obligatoriu"
            })

            validation.addRule("type",{
                rule: "require",
                message: "Camp obligatoriu"
            })
            if(validation.validate()){
                this.catsAccessService.store(this.form).then(function(data){
                    _that.form = new Object;
                    _that.$state.go("cats");
                    console.log(data);
                })
            }
        }



    }

    angular.module("productManagement")
        .controller("CatsCtrl", CatsController);
}
