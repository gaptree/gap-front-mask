import {View} from 'gap-front-view';
import {Mask} from './Mask';

export class Pop extends View {
    static get tag() { return 'div'; }

    constructor(props = {}) {
        super(props);
        this._mask = this.props['mask'] || null;
    }

    get mask() {
        this._mask = this._mask || new Mask();
        return this._mask;
    }

    show() {
        if (!this._isPoped) {
            this.mask.addPop(this.vid, this.ctn);
            this._isPoped = true;
        }

        this.mask.showPop(this.vid);
    }

    hidePop() {
        this.mask.hidePop(this.vid);
    }

    hide() {
        this.mask.hidePop(this.vid);
        this.mask.hideMask();
    }
}
