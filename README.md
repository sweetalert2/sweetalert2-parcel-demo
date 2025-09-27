# Demonstration of using [SweetAlert2](https://github.com/sweetalert2/sweetalert2) with [parcel](https://parceljs.org/)

## Live demo: https://sweetalert2.github.io/sweetalert2-parcel-demo/

### app.js

```js
import Swal from 'sweetalert2/dist/sweetalert2.js'

import './styles.scss'

Swal.fire('Hello from parcel!')
```

### styles.scss

```scss
@use 'sweetalert2/src/sweetalert2.scss' with (
  $swal2-font-size: 2rem
);
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
