class MainScene extends eui.Component implements eui.UIComponent {

	public mBtnGroup: eui.Group;
	public mBtnPlayer: eui.ToggleButton;
	public mBtnHero: eui.ToggleButton;
	public mBtnGoods: eui.ToggleButton;
	public mBtnAbout: eui.ToggleButton;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		this.mBtnGroup.touchEnabled = true;

		this.mBtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectButton, this)

	}

	private selectButton(e: egret.TouchEvent) {
		let theBtn = <eui.ToggleButton>e.target;

		if (theBtn.selected && theBtn.selected !== undefined) {
			this.toggleBtn(theBtn);
		} else {
			theBtn.selected = true;
		}
	}

	public toggleBtn(btn: eui.ToggleButton | number) {

		/**
		 * to set all the button to false;
		 */
		for (let i = 0; i < this.mBtnGroup.numChildren; i++) {
			let theBtn = <eui.ToggleButton>this.mBtnGroup.getChildAt(i);

			theBtn.selected = false;
		}

		if (btn === 0) {
			return;
		}

		/**
		 * true the selected button
		 */
		btn = <eui.ToggleButton>btn;

		btn.selected = true;

		let index = this.mBtnGroup.getChildIndex(<eui.ToggleButton>btn);

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
	}

}