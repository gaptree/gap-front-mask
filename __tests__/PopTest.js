import {Mask, Pop} from '../index.js';

class TestPop extends Pop {
    template() {
        return this.html`
        test pop
        `;
    }
}

test('pop', () => {
    document.body.innerHTML = '';
    const testPop = new TestPop();
    testPop.show();
    expect(document.body.innerHTML)
        .toBe('<div class="gap-mask-outer" style=""><div class="gap-mask"><div class="pop animated pulse" style="">test pop</div></div></div>');

    testPop.hide();
    expect(document.body.innerHTML).toBe(
        '<div class="gap-mask-outer animated fadeOut" style=""><div class="gap-mask"><div class="pop" style="display: none;">test pop</div></div></div>'
    );

    testPop.mask.hideMask();
    expect(document.body.innerHTML).toBe(
        '<div class="gap-mask-outer animated fadeOut" style=""><div class="gap-mask"><div class="pop" style="display: none;">test pop</div></div></div>'
    );
});

test('mask+pop', () => {
    document.body.innerHTML = '';
    const mask = new Mask();
    const testPop = new TestPop(mask);

    testPop.show();
    expect(document.body.innerHTML)
        .toBe('<div class="gap-mask-outer" style=""><div class="gap-mask"><div class="pop animated pulse" style="">test pop</div></div></div>');

    mask.hideMask();
    expect(document.body.innerHTML).toBe(
        '<div class="gap-mask-outer animated fadeOut" style=""><div class="gap-mask"><div class="pop animated pulse" style="">test pop</div></div></div>'
    );
});
