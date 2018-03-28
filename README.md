# Gap front mask

## install

```shell
$ yarn add gap-front-mask
```

## Usage

```html
<div class="mask" data-hidemode="auto">
    <div class="pop1 pop">pop1</div>
    <div class="pop2 pop">pop2</div>
    <div class="pop3 pop">pop3</div>
</div>
```

```javascript
import {Mask} from 'gap-front-mask';

const mask = new Mask('.mask');

mask.pop('.pop1');
mask.pop('.pop2');
mask.pop('.pop3');

mask.hide();
```
