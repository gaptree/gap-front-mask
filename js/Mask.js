import {oneElem} from 'gap-front-web';

export class Mask {
    constructor(ctn) {
        if (typeof ctn === 'string') {
            ctn = oneElem(ctn);
        }

        if (!(ctn instanceof HTMLElement)) {
            throw new Error('ctn is not HTMLElement');
        }

        this.outer = oneElem('#gap-mask-outer');

        this.ctn = ctn;
        this.ctn.addClass('gap-mask');
        this.ctn.removeClass('hide');

        this.outer = this.getOuter();
        this.outer.appendChild(this.ctn);

        this.reg();
    }

    reg() {
        if (this.ctn.getAttribute('data-hidemode') === 'auto') {
            this.ctn.on('click', e => {
                if (e.target == this.ctn) {
                    this.outer.hide();
                }
            });
        }
    }

    hide() {
        // require https://daneden.github.io/animate.css/
        this.getOuter().fadeOut();
    }

    getOuter() {
        if (this.outer) {
            return this.outer;
        }

        this.outer = document.createElement('div');
        this.outer.id = 'gap-mask-outer';
        this.outer.className = 'gap-mask-outer';

        document.body.appendChild(this.outer);
        this.outer.hide();

        return this.outer;
    }

    pop(query) {
        this.getOuter().show();
        this.ctn.allElem('.pop').map(elem => elem.hide());
        this.ctn.allElem((query || '') + '.pop')
            .map(elem => {
                elem.show();
                elem.animateCss('pulse');
            });
    }
}
