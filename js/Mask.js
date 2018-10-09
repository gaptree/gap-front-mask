import {createElem, oneElem} from 'gap-front-web';

let MaskContainer;

export const setMaskContainer = (ctn) => {
    if (ctn instanceof HTMLElement) {
        MaskContainer = ctn;
    }
};

export class Mask {
    constructor() {
        if (!oneElem('.gap-mask-outer')) {
            this.initMask();
        }

        this.outerElem = this.outerElem || oneElem('.gap-mask-outer');
        this.maskElem = this.maskElem || oneElem('.gap-mask');
        this.popDict = {};
    }

    getContainer() {
        if (!MaskContainer) {
            MaskContainer = document.body;
        }
        return MaskContainer;
    }

    initMask() {
        const maskElem = createElem('div');
        const outerElem = createElem('div');

        maskElem.addClass('gap-mask');
        outerElem.addClass('gap-mask-outer');
        outerElem.hide();
        outerElem.appendChild(maskElem);
        this.getContainer().appendChild(outerElem);

        this.maskElem = maskElem;
        this.outerElem = outerElem;
    }
    
    hide() {
        this.hideMask();
    }

    hideMask() {
        // require https://daneden.github.io/animate.css/
        this.outerElem.fadeOut();
    }

    setAutoHide() {
        this.maskElem.on('click', e => {
            if (e.target == this.maskElem) {
                this.outerElem.hide();
            }
        });
    }

    addPop(key, elem) {
        if (this.popDict.hasOwnProperty(key)) {
            throw new Error(key + ' duplicated');
        }

        elem.addClass('pop');
        elem.hide();
        this.maskElem.appendChild(elem);

        this.popDict[key] = elem;
    }

    showPop(key) {
        this.hideCurrentPop();
        this._currentPop = this.popDict[key];
        this.showCurrentPop();
    }

    hidePop(key) {
        this._currentPop = this.popDict[key];
        this.hideCurrentPop();
    }

    hideCurrentPop() {
        if (this._currentPop) {
            this._currentPop.hide();
            this._currentPop.removeClass('animated pulse');
        }
    }

    showCurrentPop() {
        if (this._currentPop) {
            this.outerElem.show();
            this._currentPop.show();
            this._currentPop.animateCss('pulse');
        }
    }
}
