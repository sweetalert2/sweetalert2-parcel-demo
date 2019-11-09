# Demonstration of using [SweetAlert2](https://github.com/sweetalert2/sweetalert2) with [parcel](https://parceljs.org/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/927ca2ab-bbf2-464e-a0b0-c7d0f4bf1015/deploy-status)](https://app.netlify.com/sites/sweetalert2-parcel-demo/deploys)

## Live demo: https://sweetalert2-parcel-demo.netlify.com/

### app.js

```js
import swal from 'sweetalert2/dist/sweetalert2.js'

import './styles.scss'

swal('Hello from parcel!')
```

### styles.scss

```scss
$swal2-font-size: 1.2rem;

// default SweetAlert2 styles
// @import '~sweetalert2/src/sweetalert2.scss';

// Dark theme
@import '~@sweetalert2/themes/dark/dark.scss';
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
