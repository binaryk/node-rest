/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../common/services/cats/catsAccessService" />
/// <reference path="./cat" />
/// <reference path="../../bower_components/js-validation/Validation" />
var app;
(function (app) {
    var productList;
    (function (productList) {
        var CatsController = (function () {
            function CatsController(catsAccessService, $location, $state, action, $stateParams) {
                var _this = this;
                this.catsAccessService = catsAccessService;
                this.$location = $location;
                this.$state = $state;
                this.action = action;
                this.$stateParams = $stateParams;
                this.save = function () {
                    console.log(_this.action);
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
                    validation.validate();
                    if (validation.validate()) {
                        if (_that.action === 'edit') {
                            _this.catsAccessService.put(_this.form, _that.$stateParams.cat).then(function (data) {
                                _that.$state.go("cats");
                                console.log(data);
                            });
                        }
                        else {
                            _this.catsAccessService.store(_this.form).then(function (data) {
                                _that.form = new Object;
                                _that.$state.go("cats");
                                console.log(data);
                            });
                        }
                    }
                };
                this.cats = [];
                this.form = new Object;
                var _that = this;
                this.title = "List of Cats from nodejs";
                catsAccessService.getCats().then(function (data) {
                    _that.cats = data.data.data;
                });
                if (action === 'edit') {
                    catsAccessService.find($stateParams.cat).then(function (data) {
                        _that.form = data.data.data;
                    });
                }
            }
            CatsController.$inject = ['catsAccessService', '$location', '$state', 'action', '$stateParams'];
            return CatsController;
        })();
        angular.module("productManagement").controller("CatsCtrl", CatsController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
//# sourceMappingURL=catsCtrl.js.map