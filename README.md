# Demonstration of using [SweetAlert2](https://github.com/sweetalert2/sweetalert2) with [parcel](https://parceljs.org/)

#### index.html:
```html
<script src="./app.js"></script>
```

#### app.js:
```js
import swal from 'sweetalert2/src/sweetalert2.js'

import './styles.scss'

swal('Hello from parcel!')
```

#### styles.scss:
```scss
$swal2-font-size: 1.2rem;

@import './node_modules/sweetalert2/src/sweetalert2.scss';
```

#### Compile:
```sh
$ parcel build index.html --public-url ./
```

---

Live result: https://sweetalert2.github.io/sweetalert2-parcel-demo/dist/
