class heroItem extends eui.ItemRenderer {

	public cBoxSelect: eui.CheckBox;

	public constructor() {
		super();

		this.addEventListener(
			eui.UIEvent.CREATION_COMPLETE,
			this.onChangeSelected,
			this,
		)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private onChangeSelected() {
		this.cBoxSelect.addEventListener(
			eui.UIEvent.CHANGE,
			() => {
				this.data.isSelected = this.cBoxSelect.selected;
			},
			this,
		);
	}

	protected dataChanged() {
		this.cBoxSelect.selected = this.data.isSelected
	}

}