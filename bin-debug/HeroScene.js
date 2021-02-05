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
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        return _super.call(this) || this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var heroArrayList = [
            { image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德1', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德2', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德3', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德4', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德5', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德6', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德7', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
        ];
        var EUIHeroArray = new eui.ArrayCollection(heroArrayList);
        this.listHero.dataProvider = EUIHeroArray;
        this.listHero.itemRenderer = heroItem;
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
        this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickOk, this);
    };
    HeroScene.prototype.returnMain = function () {
        Router.toMainScene();
        Router.instance.mainScene.toggleBtn(0);
    };
    HeroScene.prototype.onClickOk = function () {
        Router.toMainScene();
        var dataProvider = this.listHero.dataProvider;
        var selectedArr = [];
        for (var i = 0; i < dataProvider.length; i++) {
            var item = dataProvider.getItemAt(i);
            if (item.isSelected) {
                selectedArr.push(item.name);
            }
        }
        Router.showInfo(selectedArr);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
