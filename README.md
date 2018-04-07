# Gap front mask

## install

```shell
$ yarn add gap-front-mask
```

## Usage

```javascript
import {Pop, gapMask} from 'gap-front-mask';

class TestPop extends Pop {
    render() {
        this.ctn.html`test pop`;
    }
}

gapMask.setAutoHide();

const testPop = new TestPop();
testPop.showPop();
testPop.hidePop();
testPop.hideMask();
```
