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
			{ image: 'resource/art/heros_goods/heros01.png', name: '伊文捷琳', value: '评价：樱桃小丸子', isSelected: false },
			{ image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德', value: '评价：离了我你不行的', isSelected: false },
			{ image: 'resource/art/heros_goods/heros03.png', name: '伊妮德', value: '评价：猴子请来的逗比', isSelected: true },
			{ image: 'resource/art/heros_goods/heros04.png', name: '鲁宾', value: '评价：我勒个去', isSelected: false },
			{ image: 'resource/art/heros_goods/heros05.png', name: '威弗列德', value: '评价：这货碉堡了', isSelected: false },
			{ image: 'resource/art/heros_goods/heros06.png', name: '史帝文', value: '评价：咖啡不加糖', isSelected: false },
			{ image: 'resource/art/heros_goods/heros07.png', name: '哈瑞斯', value: '评价：猪一样的队友', isSelected: false },
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