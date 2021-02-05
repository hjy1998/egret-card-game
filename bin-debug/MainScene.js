var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.mBtnGroup.touchEnabled = true;
        this.mBtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectButton, this);
    };
    MainScene.prototype.selectButton = function (e) {
        var theBtn = e.target;
        if (theBtn.selected && theBtn.selected !== undefined) {
            this.toggleBtn(theBtn);
        }
        else {
            theBtn.selected = true;
        }
    };
    MainScene.prototype.toggleBtn = function (btn) {
        /**
         * to set all the button to false;
         */
        for (var i = 0; i < this.mBtnGroup.numChildren; i++) {
            var theBtn = this.mBtnGroup.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            return;
        }
        /**
         * true the selected button
         */
        btn = btn;
        btn.selected = true;
        var index = this.mBtnGroup.getChildIndex(btn);
        switch (index) {
            case 0:
                Router.toPlayerScene();
                this.setChildIndex(this.mBtnGroup, this.numChildren);
                break;
            case 1:
                Router.toHeroScene();
                this.setChildIndex(this.mBtnGroup, this.numChildren);
                break;
            case 2:
                Router.toGoodsScene();
                this.setChildIndex(this.mBtnGroup, this.numChildren);
                break;
            case 3:
                Router.toAboutScene();
                // this.setChildIndex(this.mBtnGroup, this.numChildren);
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
