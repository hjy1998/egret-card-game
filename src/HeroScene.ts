interface HeroData {
	image: string,
	name: string,
	value: string,
	isSelected: boolean;
}

class HeroScene extends eui.Component implements eui.UIComponent {

	public btnReturn: eui.Button;
	public btnOk: eui.Button;
	public scrollerHero: eui.Scroller;
	public listHero: eui.List;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		let heroArrayList: HeroData[] = [
			{ image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德1', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德2', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德3', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
			{ image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德4', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德5', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德6', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德7', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
		]

		let EUIHeroArray: eui.ArrayCollection = new eui.ArrayCollection(heroArrayList);

		this.listHero.dataProvider = EUIHeroArray;

		this.listHero.itemRenderer = heroItem;

		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);

		this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickOk, this)
	}

	private returnMain() {
		Router.toMainScene();
		Router.instance.mainScene.toggleBtn(0);
	}

	private onClickOk() {
		Router.toMainScene();
		let dataProvider = this.listHero.dataProvider;

		let selectedArr: string[] = [];

		for (let i = 0; i < dataProvider.length; i++) {
			let item = dataProvider.getItemAt(i)

			if (item.isSelected) {
				selectedArr.push(item.name);
			}
		}

		Router.showInfo(selectedArr)

	}


}