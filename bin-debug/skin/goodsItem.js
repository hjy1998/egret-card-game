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
var goodsItem = (function (_super) {
    __extends(goodsItem, _super);
    function goodsItem() {
        return _super.call(this) || this;
    }
    goodsItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    goodsItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return goodsItem;
}(eui.Component));
__reflect(goodsItem.prototype, "goodsItem", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=goodsItem.js.map