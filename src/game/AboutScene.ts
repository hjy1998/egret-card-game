class AboutScene extends eui.Component implements eui.UIComponent {
	public btnClose: eui.Button;
	public labelAbout: eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.labelAbout.text = `关于我们
		关于我们`;

		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAbout, this)
	}

	private closeAbout() {
		if (Router.instance.aboutScene.parent) {
			Router.instance.mainScene.removeChild(Router.instance.aboutScene);
		}
		Router.instance.mainScene.toggleBtn(0);

	}

}