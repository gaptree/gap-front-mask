import {Pop} from '../index.js';

class TestPop extends Pop {
    render() {
        this.ctn.html`test pop`;
    }
}

test('pop', () => {
    const testPop = new TestPop();
    testPop.showPop();
    expect(document.body.innerHTML)
        .toBe('<div class="gap-mask-outer" style=""><div class="gap-mask"><div class="pop animated pulse" style="">test pop</div></div></div>');

    testPop.hidePop();
    expect(document.body.innerHTML).toBe(
        '<div class="gap-mask-outer" style=""><div class="gap-mask"><div class="pop" style="display: none;">test pop</div></div></div>'
    );

    testPop.hideMask();
    expect(document.body.innerHTML).toBe(
        '<div class="gap-mask-outer animated fadeOut" style=""><div class="gap-mask"><div class="pop" style="display: none;">test pop</div></div></div>'
    );
});
