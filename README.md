# Demonstration of using [SweetAlert2](https://github.com/sweetalert2/sweetalert2) with [parcel](https://parceljs.org/)

## Live demo: https://sweetalert2.github.io/sweetalert2-parcel-demo/

### app.js

```js
import swal from 'sweetalert2/dist/sweetalert2.js'

import './styles.scss'

swal('Hello from parcel!')
```

### styles.scss

```scss
$swal2-font-size: 1.2rem;

@import './node_modules/sweetalert2/src/sweetalert2.scss';
```

### index.html

```html
<script src="./dist/app.js"></script>
<link href="./dist/app.css" rel="stylesheet">
```

### Compile

```sh
$ parcel build app.js
```
