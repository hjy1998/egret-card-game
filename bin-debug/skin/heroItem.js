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
var heroItem = (function (_super) {
    __extends(heroItem, _super);
    function heroItem() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onChangeSelected, _this);
        return _this;
    }
    heroItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    heroItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    heroItem.prototype.onChangeSelected = function () {
        var _this = this;
        this.cBoxSelect.addEventListener(eui.UIEvent.CHANGE, function () {
            _this.data.isSelected = _this.cBoxSelect.selected;
        }, this);
    };
    heroItem.prototype.dataChanged = function () {
        this.cBoxSelect.selected = this.data.isSelected;
    };
    return heroItem;
}(eui.ItemRenderer));
__reflect(heroItem.prototype, "heroItem");
//# sourceMappingURL=heroItem.js.map