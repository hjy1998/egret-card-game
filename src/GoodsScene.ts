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
			{ image: 'resource/art/heros_goods/goods01.png', name: '亚特伍德1', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods02.png', name: '亚特伍德2', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods03.png', name: '亚特伍德3', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods04.png', name: '亚特伍德4', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods05.png', name: '亚特伍德5', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods06.png', name: '亚特伍德6', value: '评价: 力量+100, 智力 -500' },
			{ image: 'resource/art/heros_goods/goods07.png', name: '亚特伍德7', value: '评价: 力量+100, 智力 -500' }
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