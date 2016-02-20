var app;
(function (app) {
    var domain;
    (function (domain) {
        var Cat = (function () {
            function Cat(name, age, type) {
                this.name = name;
                this.age = age;
                this.type = type;
            }
            return Cat;
        })();
        domain.Cat = Cat;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=cat.js.map