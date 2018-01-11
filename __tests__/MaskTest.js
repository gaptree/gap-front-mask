import {Mask} from '../index.js';
import {oneElem} from 'gap-front-s';

test('mask', () => {
    document.body.innerHTML = `
        <div class="mask" data-hidemode="auto">
            <div class="p1 pop">1</div>
        </div>
    `;
    const mask = new Mask('.mask');

    const p1Elem = oneElem('.p1');
    const outerElem = oneElem('#gap-mask-outer');
    const maskElem = oneElem('.gap-mask');

    expect(outerElem.style.display).toBe('none');

    mask.pop('.p1');
    expect(outerElem.style.display).toBe('block');
    p1Elem.hasClass('pulse');

    maskElem.click();
    expect(outerElem.style.display).toBe('none');
});
