interface GoodsDataArr {
	image: string,
	name: string,
	value: string,
};

class GoodsScene extends eui.Component implements eui.UIComponent {
	public btnReturn: eui.Button;
	public scrollerGoods: eui.Scroller;
	public listGoods: eui.List;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		let goodsArrayList: GoodsDataArr[] = [
			{ image: 'resource/art/heros_goods/goods01.png', name: '魔法石', value: '法力加成 +3' },
			{ image: 'resource/art/heros_goods/goods02.png', name: '诅咒娃娃', value: '咒术加成 +3' },
			{ image: 'resource/art/heros_goods/goods03.png', name: '万圣戒指', value: '敏捷加成 +3' },
			{ image: 'resource/art/heros_goods/goods04.png', name: '斗篷', value: '耐力加成 +3' },
			{ image: 'resource/art/heros_goods/goods05.png', name: '鹅毛笔', value: '精神加成 +3' },
			{ image: 'resource/art/heros_goods/goods06.png', name: '血滴子', value: '嗜血加成 +3' },
			{ image: 'resource/art/heros_goods/goods07.png', name: '屠龙刀', value: '力量加成 +5' },
		];

		let EUIGoodsArray: eui.ArrayCollection = new eui.ArrayCollection(goodsArrayList);

		this.listGoods.dataProvider = EUIGoodsArray;

		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);

	}

	private returnMain() {
		Router.toMainScene();
		Router.instance.mainScene.toggleBtn(0);

	}
}