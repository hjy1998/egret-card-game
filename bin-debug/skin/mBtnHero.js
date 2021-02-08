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
var mBtnHero = (function (_super) {
    __extends(mBtnHero, _super);
    function mBtnHero() {
        return _super.call(this) || this;
    }
    mBtnHero.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    mBtnHero.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return mBtnHero;
}(eui.Component));
__reflect(mBtnHero.prototype, "mBtnHero", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=mBtnHero.js.map