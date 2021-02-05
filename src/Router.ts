class Router {
    private _stage: egret.DisplayObjectContainer

    public mainScene: MainScene;
    public playerScene: PlayerScene;
    public heroScene: HeroScene;
    public goodsScene: GoodsScene;
    public aboutScene: AboutScene;

    constructor() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.goodsScene = new GoodsScene();
        this.aboutScene = new AboutScene();
    };

    static router: Router;

    static get instance() {
        if (!this.router) {
            this.router = new Router();
        }

        return this.router;
    }

    public setStage = (s: egret.DisplayObjectContainer) => {
        this._stage = s;
    }

    static showInfo(selectItemArr: string[]) {
        let renderText = "你选择了: ";

        if (selectItemArr.length === 0) {
            renderText = "厉害了什么都不选";
        } else {
            renderText += selectItemArr.toString();
        }

        let img: egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("toast-bg_png");
        Router.instance.mainScene.addChild(img);
        img.x = Router.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;

        let label: egret.TextField = new egret.TextField();
        label.text = renderText;
        label.size = 20;
        Router.instance.mainScene.addChild(label);
        label.x = Router.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;

        let timer: egret.Timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(
            egret.TimerEvent.TIMER_COMPLETE,
            (e) => {
                Router.instance.mainScene.removeChild(img);
                Router.instance.mainScene.removeChild(label);
            },
            this
        )
    }

    static toMainScene() {
        let stage: egret.DisplayObjectContainer = this.instance._stage;

        let mainScene = Router.instance.mainScene;

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
    }

    static toPlayerScene() {
        this.instance.mainScene.addChild(this.instance.playerScene);
    }

    static toHeroScene() {
        this.instance.mainScene.addChild(this.instance.heroScene);
    }

    static toGoodsScene() {
        this.instance.mainScene.addChild(this.instance.goodsScene);
    }

    static toAboutScene() {
        this.instance.mainScene.addChild(this.instance.aboutScene)
    }
}