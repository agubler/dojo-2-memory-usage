import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

class Div extends WidgetBase<any> {
	render() {
		return v('div', { key: this.properties.key }, [ `Div Element number ${this.properties.key}` ]);
	}
}

class App extends WidgetBase {

	private _showRows = true;

	private _renderCount = 1;

	constructor() {
		super();
		setInterval(() => {
			this._showRows = !this._showRows;
			if (this._showRows) {
				this._renderCount++;
			}
			this.invalidate();
		}, 5000);
	}

	protected render() {
		const rows: any[] = [];

		if (this._showRows) {
			for (let i = 0; i < 1000; i++) {
				rows.push(w(Div, { key: i }));
			}
		}

		return v('div', [
			v('h2', [ `Render ${this._renderCount}. Rendered ${this._renderCount * 1000} Div widgets since startup.` ]),
			v('div', rows)
		]);
	}
}

export default App;
