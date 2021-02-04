var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Router = (function () {
    function Router() {
        var _this = this;
        this.setStage = function (s) {
            _this._stage = s;
        };
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
    }
    ;
    Object.defineProperty(Router, "instance", {
        get: function () {
            if (!this.router) {
                this.router = new Router();
            }
            return this.router;
        },
        enumerable: true,
        configurable: true
    });
    Router.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = Router.instance.mainScene;
        mainScene.toggleBtn(0);
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        if (Router.instance.playerScene.parent) {
            mainScene.removeChild(Router.instance.playerScene);
        }
    };
    Router.toPlayerScene = function () {
        var stage = this.instance._stage;
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    return Router;
}());
__reflect(Router.prototype, "Router");
//# sourceMappingURL=Router.js.map