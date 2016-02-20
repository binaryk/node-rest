/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../common/services/cats/catsAccessService" />
/// <reference path="./cat" />
/// <reference path="../../bower_components/js-validation/Validation" />
var app;
(function (app) {
    var productList;
    (function (productList) {
        var CatsController = (function () {
            function CatsController(catsAccessService, $location, $state) {
                var _this = this;
                this.catsAccessService = catsAccessService;
                this.$location = $location;
                this.$state = $state;
                this.save = function () {
                    var _that = _this;
                    var validation = new App.Forms.Validate();
                    validation.addRule("name", {
                        rule: "require",
                        message: "Camp obligatoriu"
                    });
                    validation.addRule("age", {
                        rule: "require",
                        message: "Camp obligatoriu"
                    });
                    validation.addRule("type", {
                        rule: "require",
                        message: "Camp obligatoriu"
                    });
                    if (validation.validate()) {
                        _this.catsAccessService.store(_this.form).then(function (data) {
                            _that.form = new Object;
                            _that.$state.go("cats");
                            console.log(data);
                        });
                    }
                };
                this.cats = [];
                this.form = new Object;
                var _that = this;
                this.title = "List of Cats from nodejs";
                catsAccessService.getCats().then(function (data) {
                    _that.cats = data.data.data;
                });
            }
            CatsController.$inject = ['catsAccessService', '$location', '$state'];
            return CatsController;
        })();
        angular.module("productManagement").controller("CatsCtrl", CatsController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
//# sourceMappingURL=catsCtrl.js.map