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
        this.heroScene = new HeroScene();
        this.goodsScene = new GoodsScene();
        this.aboutScene = new AboutScene();
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
    Router.showInfo = function (selectItemArr) {
        var renderText = "你选择了: ";
        if (selectItemArr.length === 0) {
            renderText = "厉害了什么都不选";
        }
        else {
            renderText += selectItemArr.toString();
        }
        var img = new egret.Bitmap();
        img.texture = RES.getRes("toast-bg_png");
        Router.instance.mainScene.addChild(img);
        img.x = Router.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        var label = new egret.TextField();
        label.text = renderText;
        label.size = 20;
        Router.instance.mainScene.addChild(label);
        label.x = Router.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            Router.instance.mainScene.removeChild(img);
            Router.instance.mainScene.removeChild(label);
        }, this);
    };
    Router.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = Router.instance.mainScene;
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        if (Router.instance.playerScene.parent) {
            mainScene.removeChild(Router.instance.playerScene);
        }
        if (Router.instance.heroScene.parent) {
            mainScene.removeChild(Router.instance.heroScene);
        }
        if (Router.instance.goodsScene.parent) {
            mainScene.removeChild(Router.instance.goodsScene);
        }
    };
    Router.toPlayerScene = function () {
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    Router.toHeroScene = function () {
        this.instance.mainScene.addChild(this.instance.heroScene);
    };
    Router.toGoodsScene = function () {
        this.instance.mainScene.addChild(this.instance.goodsScene);
    };
    Router.toAboutScene = function () {
        this.instance.mainScene.addChild(this.instance.aboutScene);
    };
    return Router;
}());
__reflect(Router.prototype, "Router");
