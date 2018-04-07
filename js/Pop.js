import {View} from 'gap-front-view';
import {gapMask} from './gapMask.js';

export class Pop extends View {
    static get tag() { return 'div'; }

    showPop() {
        if (!this._isPoped) {
            gapMask.addPop(this.id, this.ctn);
            this._isPoped = true;
        }

        gapMask.showPop(this.id);
    }

    hidePop() {
        gapMask.hidePop(this.id);
    }

    hideMask() {
        gapMask.hideMask();
    }
}
