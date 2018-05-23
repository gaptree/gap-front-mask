import {View} from 'gap-front-view';
import {Mask} from './Mask';

export class Pop extends View {
    static get tag() { return 'div'; }

    get mask() {
        this._mask = this._mask || new Mask();
        return this._mask;
    }

    showPop() {
        if (!this._isPoped) {
            this.mask.addPop(this.id, this.ctn);
            this._isPoped = true;
        }

        this.mask.showPop(this.id);
    }

    hidePop() {
        this.mask.hidePop(this.id);
    }

    hideMask() {
        this.mask.hideMask();
    }
}
