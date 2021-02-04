class Router {
    private _stage: egret.DisplayObjectContainer

    private mainScene: MainScene;

    private playerScene: PlayerScene;

    constructor() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
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

    static toMainScene() {
        let stage: egret.DisplayObjectContainer = this.instance._stage;

        let mainScene = Router.instance.mainScene;

        /**
         * TODO: Cause problem: unable to render main scene
         */
        // mainScene.toggleBtn(0);

        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }

        if (Router.instance.playerScene.parent) {
            mainScene.removeChild(Router.instance.playerScene);
        }
    }

    static toPlayerScene() {
        let stage: egret.DisplayObjectContainer = this.instance._stage;

        this.instance.mainScene.addChild(this.instance.playerScene);
    }
}