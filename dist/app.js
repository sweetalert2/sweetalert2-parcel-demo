// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/sweetalert2/src/utils/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = exports.callIfFunction = exports.warnOnce = exports.error = exports.warn = exports.formatInputOptions = exports.toArray = exports.uniqueArray = exports.consolePrefix = void 0;
const consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

exports.consolePrefix = consolePrefix;

const uniqueArray = arr => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */


exports.uniqueArray = uniqueArray;

const toArray = nodeList => Array.prototype.slice.call(nodeList);
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */


exports.toArray = toArray;

const formatInputOptions = inputOptions => {
  const result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(key => {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */


exports.formatInputOptions = formatInputOptions;

const warn = message => {
  console.warn(`${consolePrefix} ${message}`);
};
/**
 * Standardise console errors
 * @param message
 */


exports.warn = warn;

const error = message => {
  console.error(`${consolePrefix} ${message}`);
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */


exports.error = error;
const previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

const warnOnce = message => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */


exports.warnOnce = warnOnce;

const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

exports.callIfFunction = callIfFunction;

const isPromise = arg => arg && Promise.resolve(arg) === arg;

exports.isPromise = isPromise;
},{}],"node_modules/sweetalert2/src/utils/DismissReason.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DismissReason = void 0;
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});
exports.DismissReason = DismissReason;
},{}],"node_modules/sweetalert2/src/staticMethods/argsToParams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsToParams = void 0;

var _utils = require("../utils/utils.js");

const argsToParams = args => {
  const params = {};

  switch (typeof args[0]) {
    case 'object':
      Object.assign(params, args[0]);
      break;

    default:
      ['title', 'html', 'type'].forEach((name, index) => {
        switch (typeof args[index]) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            (0, _utils.error)(`Unexpected type of ${name}! Expected "string", got ${typeof args[index]}`);
        }
      });
  }

  return params;
};

exports.argsToParams = argsToParams;
},{"../utils/utils.js":"node_modules/sweetalert2/src/utils/utils.js"}],"node_modules/sweetalert2/src/utils/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconTypes = exports.swalClasses = exports.prefix = exports.swalPrefix = void 0;
const swalPrefix = 'swal2-';
exports.swalPrefix = swalPrefix;

const prefix = items => {
  const result = {};

  for (const i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};

exports.prefix = prefix;
const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
exports.swalClasses = swalClasses;
const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
exports.iconTypes = iconTypes;
},{}],"node_modules/sweetalert2/src/utils/dom/domUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contains = exports.isVisible = exports.hide = exports.show = exports.getChildByClass = exports.removeClass = exports.addClass = exports.focusInput = exports.hasClass = exports.states = void 0;

var _classes = require("../classes.js");

// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
};
exports.states = states;

const hasClass = (elem, className) => {
  return elem.classList.contains(className);
};

exports.hasClass = hasClass;

const focusInput = input => {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value;
    input.value = '';
    input.value = val;
  }
};

exports.focusInput = focusInput;

const addOrRemoveClass = (target, classList, add) => {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(className => {
    if (target.forEach) {
      target.forEach(elem => {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

const addClass = (target, classList) => {
  addOrRemoveClass(target, classList, true);
};

exports.addClass = addClass;

const removeClass = (target, classList) => {
  addOrRemoveClass(target, classList, false);
};

exports.removeClass = removeClass;

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

exports.getChildByClass = getChildByClass;

const show = elem => {
  elem.style.opacity = '';
  elem.style.display = elem.id === _classes.swalClasses.content ? 'block' : 'flex';
};

exports.show = show;

const hide = elem => {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation


exports.hide = hide;

const isVisible = elem => elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

exports.isVisible = isVisible;

const contains = (haystack, needle) => {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

exports.contains = contains;
},{"../classes.js":"node_modules/sweetalert2/src/utils/classes.js"}],"node_modules/sweetalert2/src/utils/dom/getters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoading = exports.isToast = exports.isModal = exports.getFocusableElements = exports.getCloseButton = exports.getFooter = exports.getActions = exports.getCancelButton = exports.getConfirmButton = exports.getValidationMessage = exports.getProgressSteps = exports.getImage = exports.getContent = exports.getTitle = exports.getIcons = exports.getPopup = exports.getContainer = void 0;

var _classes = require("../classes.js");

var _utils = require("../utils.js");

var _domUtils = require("./domUtils.js");

const getContainer = () => document.body.querySelector('.' + _classes.swalClasses.container);

exports.getContainer = getContainer;

const elementByClass = className => {
  const container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

const getPopup = () => elementByClass(_classes.swalClasses.popup);

exports.getPopup = getPopup;

const getIcons = () => {
  const popup = getPopup();
  return (0, _utils.toArray)(popup.querySelectorAll('.' + _classes.swalClasses.icon));
};

exports.getIcons = getIcons;

const getTitle = () => elementByClass(_classes.swalClasses.title);

exports.getTitle = getTitle;

const getContent = () => elementByClass(_classes.swalClasses.content);

exports.getContent = getContent;

const getImage = () => elementByClass(_classes.swalClasses.image);

exports.getImage = getImage;

const getProgressSteps = () => elementByClass(_classes.swalClasses.progresssteps);

exports.getProgressSteps = getProgressSteps;

const getValidationMessage = () => elementByClass(_classes.swalClasses['validation-message']);

exports.getValidationMessage = getValidationMessage;

const getConfirmButton = () => elementByClass(_classes.swalClasses.confirm);

exports.getConfirmButton = getConfirmButton;

const getCancelButton = () => elementByClass(_classes.swalClasses.cancel);

exports.getCancelButton = getCancelButton;

const getActions = () => elementByClass(_classes.swalClasses.actions);

exports.getActions = getActions;

const getFooter = () => elementByClass(_classes.swalClasses.footer);

exports.getFooter = getFooter;

const getCloseButton = () => elementByClass(_classes.swalClasses.close);

exports.getCloseButton = getCloseButton;

const getFocusableElements = () => {
  const focusableElementsWithTabindex = (0, _utils.toArray)(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort((a, b) => {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  const otherFocusableElements = (0, _utils.toArray)(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(el => el.getAttribute('tabindex') !== '-1');
  return (0, _utils.uniqueArray)(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => (0, _domUtils.isVisible)(el));
};

exports.getFocusableElements = getFocusableElements;

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes.swalClasses['no-backdrop']);
};

exports.isModal = isModal;

const isToast = () => {
  return document.body.classList.contains(_classes.swalClasses['toast-shown']);
};

exports.isToast = isToast;

const isLoading = () => {
  return getPopup().hasAttribute('data-loading');
};

exports.isLoading = isLoading;
},{"../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../utils.js":"node_modules/sweetalert2/src/utils/utils.js","./domUtils.js":"node_modules/sweetalert2/src/utils/dom/domUtils.js"}],"node_modules/sweetalert2/src/utils/isNodeEnv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodeEnv = void 0;

// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

exports.isNodeEnv = isNodeEnv;
},{}],"node_modules/sweetalert2/src/utils/dom/init.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _classes = require("../classes.js");

var _getters = require("./getters.js");

var _domUtils = require("./domUtils.js");

var _isNodeEnv = require("../isNodeEnv.js");

var _utils = require("../utils.js");

var _sweetalert = _interopRequireDefault(require("../../sweetalert2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sweetHTML = `
 <div aria-labelledby="${_classes.swalClasses.title}" aria-describedby="${_classes.swalClasses.content}" class="${_classes.swalClasses.popup}" tabindex="-1">
   <div class="${_classes.swalClasses.header}">
     <ul class="${_classes.swalClasses.progresssteps}"></ul>
     <div class="${_classes.swalClasses.icon} ${_classes.iconTypes.error}">
       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>
     </div>
     <div class="${_classes.swalClasses.icon} ${_classes.iconTypes.question}">
       <span class="${_classes.swalClasses['icon-text']}">?</span>
      </div>
     <div class="${_classes.swalClasses.icon} ${_classes.iconTypes.warning}">
       <span class="${_classes.swalClasses['icon-text']}">!</span>
      </div>
     <div class="${_classes.swalClasses.icon} ${_classes.iconTypes.info}">
       <span class="${_classes.swalClasses['icon-text']}">i</span>
      </div>
     <div class="${_classes.swalClasses.icon} ${_classes.iconTypes.success}">
       <div class="swal2-success-circular-line-left"></div>
       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
       <div class="swal2-success-circular-line-right"></div>
     </div>
     <img class="${_classes.swalClasses.image}" />
     <h2 class="${_classes.swalClasses.title}" id="${_classes.swalClasses.title}"></h2>
     <button type="button" class="${_classes.swalClasses.close}">×</button>
   </div>
   <div class="${_classes.swalClasses.content}">
     <div id="${_classes.swalClasses.content}"></div>
     <input class="${_classes.swalClasses.input}" />
     <input type="file" class="${_classes.swalClasses.file}" />
     <div class="${_classes.swalClasses.range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${_classes.swalClasses.select}"></select>
     <div class="${_classes.swalClasses.radio}"></div>
     <label for="${_classes.swalClasses.checkbox}" class="${_classes.swalClasses.checkbox}">
       <input type="checkbox" />
       <span class="${_classes.swalClasses.label}"></span>
     </label>
     <textarea class="${_classes.swalClasses.textarea}"></textarea>
     <div class="${_classes.swalClasses['validation-message']}" id="${_classes.swalClasses['validation-message']}"></div>
   </div>
   <div class="${_classes.swalClasses.actions}">
     <button type="button" class="${_classes.swalClasses.confirm}">OK</button>
     <button type="button" class="${_classes.swalClasses.cancel}">Cancel</button>
   </div>
   <div class="${_classes.swalClasses.footer}">
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

const init = params => {
  // Clean up the old popup if it exists
  const c = (0, _getters.getContainer)();

  if (c) {
    c.parentNode.removeChild(c);
    (0, _domUtils.removeClass)([document.documentElement, document.body], [_classes.swalClasses['no-backdrop'], _classes.swalClasses['toast-shown'], _classes.swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if ((0, _isNodeEnv.isNodeEnv)()) {
    (0, _utils.error)('SweetAlert2 requires document to initialize');
    return;
  }

  const container = document.createElement('div');
  container.className = _classes.swalClasses.container;
  container.innerHTML = sweetHTML;
  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  const popup = (0, _getters.getPopup)();
  const content = (0, _getters.getContent)();
  const input = (0, _domUtils.getChildByClass)(content, _classes.swalClasses.input);
  const file = (0, _domUtils.getChildByClass)(content, _classes.swalClasses.file);
  const range = content.querySelector(`.${_classes.swalClasses.range} input`);
  const rangeOutput = content.querySelector(`.${_classes.swalClasses.range} output`);
  const select = (0, _domUtils.getChildByClass)(content, _classes.swalClasses.select);
  const checkbox = content.querySelector(`.${_classes.swalClasses.checkbox} input`);
  const textarea = (0, _domUtils.getChildByClass)(content, _classes.swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    (0, _domUtils.addClass)((0, _getters.getContainer)(), _classes.swalClasses.rtl);
  }

  let oldInputVal; // IE11 workaround, see #1109 for details

  const resetValidationMessage = e => {
    if (_sweetalert.default.isVisible() && oldInputVal !== e.target.value) {
      _sweetalert.default.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = e => {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = e => {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

exports.init = init;
},{"../classes.js":"node_modules/sweetalert2/src/utils/classes.js","./getters.js":"node_modules/sweetalert2/src/utils/dom/getters.js","./domUtils.js":"node_modules/sweetalert2/src/utils/dom/domUtils.js","../isNodeEnv.js":"node_modules/sweetalert2/src/utils/isNodeEnv.js","../utils.js":"node_modules/sweetalert2/src/utils/utils.js","../../sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js"}],"node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHtmlToContainer = void 0;

var _domUtils = require("./domUtils.js");

const parseHtmlToContainer = (param, target) => {
  if (!param) {
    return (0, _domUtils.hide)(target);
  } // DOM element


  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (typeof param === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (let i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  (0, _domUtils.show)(target);
};

exports.parseHtmlToContainer = parseHtmlToContainer;
},{"./domUtils.js":"node_modules/sweetalert2/src/utils/dom/domUtils.js"}],"node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEndEvent = void 0;

var _isNodeEnv = require("../isNodeEnv.js");

const animationEndEvent = (() => {
  // Prevent run in Node env

  /* istanbul ignore if */
  if ((0, _isNodeEnv.isNodeEnv)()) {
    return false;
  }

  const testEl = document.createElement('div');
  const transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (const i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
})();

exports.animationEndEvent = animationEndEvent;
},{"../isNodeEnv.js":"node_modules/sweetalert2/src/utils/isNodeEnv.js"}],"node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureScrollbar = void 0;

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
const measureScrollbar = () => {
  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

exports.measureScrollbar = measureScrollbar;
},{}],"node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderActions = void 0;

var _classes = require("../../classes.js");

var dom = _interopRequireWildcard(require("../../dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderActions = params => {
  const actions = dom.getActions();
  const confirmButton = dom.getConfirmButton();
  const cancelButton = dom.getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    dom.hide(actions);
  } else {
    dom.show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    dom.hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    dom.hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = _classes.swalClasses.confirm;
  dom.addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = _classes.swalClasses.cancel;
  dom.addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    dom.addClass([confirmButton, cancelButton], _classes.swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    const confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    dom.removeClass([confirmButton, cancelButton], _classes.swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

exports.renderActions = renderActions;
},{"../../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderContent = void 0;

var _classes = require("../../classes.js");

var dom = _interopRequireWildcard(require("../../dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderContent = params => {
  const content = dom.getContent().querySelector('#' + _classes.swalClasses.content); // Content as HTML

  if (params.html) {
    dom.parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    dom.show(content);
  } else {
    dom.hide(content);
  }
};

exports.renderContent = renderContent;
},{"../../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIcon = void 0;

var _classes = require("../../classes.js");

var _utils = require("../../utils.js");

var dom = _interopRequireWildcard(require("../../dom/index.js"));

var _sweetalert = _interopRequireDefault(require("../../../sweetalert2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderIcon = params => {
  const icons = dom.getIcons();

  for (let i = 0; i < icons.length; i++) {
    dom.hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(_classes.iconTypes).indexOf(params.type) !== -1) {
      const icon = _sweetalert.default.getPopup().querySelector(`.${_classes.swalClasses.icon}.${_classes.iconTypes[params.type]}`);

      dom.show(icon); // Animate icon

      if (params.animation) {
        dom.addClass(icon, `swal2-animate-${params.type}-icon`);
      }
    } else {
      (0, _utils.error)(`Unknown type! Expected "success", "error", "warning", "info" or "question", got "${params.type}"`);
    }
  }
};

exports.renderIcon = renderIcon;
},{"../../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../../utils.js":"node_modules/sweetalert2/src/utils/utils.js","../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../../../sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderImage = void 0;

var _classes = require("../../classes.js");

var dom = _interopRequireWildcard(require("../../dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderImage = params => {
  const image = dom.getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    dom.show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = _classes.swalClasses.image;

    if (params.imageClass) {
      dom.addClass(image, params.imageClass);
    }
  } else {
    dom.hide(image);
  }
};

exports.renderImage = renderImage;
},{"../../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderProgressSteps = void 0;

var _classes = require("../../classes.js");

var _utils = require("../../utils.js");

var dom = _interopRequireWildcard(require("../../dom/index.js"));

var _sweetalert = _interopRequireDefault(require("../../../sweetalert2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderProgressSteps = params => {
  let progressStepsContainer = dom.getProgressSteps();
  let currentProgressStep = parseInt(params.currentProgressStep === null ? _sweetalert.default.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    dom.show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      (0, _utils.warn)('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      let circle = document.createElement('li');
      dom.addClass(circle, _classes.swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        dom.addClass(circle, _classes.swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        let line = document.createElement('li');
        dom.addClass(line, _classes.swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    dom.hide(progressStepsContainer);
  }
};

exports.renderProgressSteps = renderProgressSteps;
},{"../../classes.js":"node_modules/sweetalert2/src/utils/classes.js","../../utils.js":"node_modules/sweetalert2/src/utils/utils.js","../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../../../sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTitle = void 0;

var dom = _interopRequireWildcard(require("../../dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderTitle = params => {
  const title = dom.getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    dom.parseHtmlToContainer(params.title, title);
  }
};

exports.renderTitle = renderTitle;
},{"../../dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/dom/renderers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderActions = require("./renderActions.js");

Object.keys(_renderActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderActions[key];
    }
  });
});

var _renderContent = require("./renderContent.js");

Object.keys(_renderContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderContent[key];
    }
  });
});

var _renderIcon = require("./renderIcon.js");

Object.keys(_renderIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderIcon[key];
    }
  });
});

var _renderImage = require("./renderImage.js");

Object.keys(_renderImage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderImage[key];
    }
  });
});

var _renderProgressSteps = require("./renderProgressSteps.js");

Object.keys(_renderProgressSteps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderProgressSteps[key];
    }
  });
});

var _renderTitle = require("./renderTitle.js");

Object.keys(_renderTitle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderTitle[key];
    }
  });
});
},{"./renderActions.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js","./renderContent.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js","./renderIcon.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js","./renderImage.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js","./renderProgressSteps.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js","./renderTitle.js":"node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js"}],"node_modules/sweetalert2/src/utils/dom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domUtils = require("./domUtils.js");

Object.keys(_domUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _domUtils[key];
    }
  });
});

var _init = require("./init.js");

Object.keys(_init).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _init[key];
    }
  });
});

var _getters = require("./getters.js");

Object.keys(_getters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getters[key];
    }
  });
});

var _parseHtmlToContainer = require("./parseHtmlToContainer.js");

Object.keys(_parseHtmlToContainer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseHtmlToContainer[key];
    }
  });
});

var _animationEndEvent = require("./animationEndEvent.js");

Object.keys(_animationEndEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _animationEndEvent[key];
    }
  });
});

var _measureScrollbar = require("./measureScrollbar.js");

Object.keys(_measureScrollbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _measureScrollbar[key];
    }
  });
});

var _index = require("./renderers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});
},{"./domUtils.js":"node_modules/sweetalert2/src/utils/dom/domUtils.js","./init.js":"node_modules/sweetalert2/src/utils/dom/init.js","./getters.js":"node_modules/sweetalert2/src/utils/dom/getters.js","./parseHtmlToContainer.js":"node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js","./animationEndEvent.js":"node_modules/sweetalert2/src/utils/dom/animationEndEvent.js","./measureScrollbar.js":"node_modules/sweetalert2/src/utils/dom/measureScrollbar.js","./renderers/index.js":"node_modules/sweetalert2/src/utils/dom/renderers/index.js"}],"node_modules/sweetalert2/src/staticMethods/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getContainer", {
  enumerable: true,
  get: function () {
    return dom.getContainer;
  }
});
Object.defineProperty(exports, "getPopup", {
  enumerable: true,
  get: function () {
    return dom.getPopup;
  }
});
Object.defineProperty(exports, "getTitle", {
  enumerable: true,
  get: function () {
    return dom.getTitle;
  }
});
Object.defineProperty(exports, "getContent", {
  enumerable: true,
  get: function () {
    return dom.getContent;
  }
});
Object.defineProperty(exports, "getImage", {
  enumerable: true,
  get: function () {
    return dom.getImage;
  }
});
Object.defineProperty(exports, "getIcons", {
  enumerable: true,
  get: function () {
    return dom.getIcons;
  }
});
Object.defineProperty(exports, "getCloseButton", {
  enumerable: true,
  get: function () {
    return dom.getCloseButton;
  }
});
Object.defineProperty(exports, "getActions", {
  enumerable: true,
  get: function () {
    return dom.getActions;
  }
});
Object.defineProperty(exports, "getConfirmButton", {
  enumerable: true,
  get: function () {
    return dom.getConfirmButton;
  }
});
Object.defineProperty(exports, "getCancelButton", {
  enumerable: true,
  get: function () {
    return dom.getCancelButton;
  }
});
Object.defineProperty(exports, "getFooter", {
  enumerable: true,
  get: function () {
    return dom.getFooter;
  }
});
Object.defineProperty(exports, "getFocusableElements", {
  enumerable: true,
  get: function () {
    return dom.getFocusableElements;
  }
});
Object.defineProperty(exports, "getValidationMessage", {
  enumerable: true,
  get: function () {
    return dom.getValidationMessage;
  }
});
Object.defineProperty(exports, "isLoading", {
  enumerable: true,
  get: function () {
    return dom.isLoading;
  }
});
exports.clickCancel = exports.clickConfirm = exports.isVisible = void 0;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return !!dom.getPopup();
};
/*
 * Global function to click 'Confirm' button
 */


exports.isVisible = isVisible;

const clickConfirm = () => dom.getConfirmButton().click();
/*
 * Global function to click 'Cancel' button
 */


exports.clickConfirm = clickConfirm;

const clickCancel = () => dom.getCancelButton().click();

exports.clickCancel = clickCancel;
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/staticMethods/fire.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fire = fire;

function fire(...args) {
  const Swal = this;
  return new Swal(...args);
}
},{}],"node_modules/sweetalert2/src/staticMethods/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = mixin;

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  class MixinSwal extends this {
    _main(params) {
      return super._main(Object.assign({}, mixinParams, params));
    }

  }

  return MixinSwal;
}
},{}],"node_modules/sweetalert2/src/staticMethods/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteQueueStep = exports.insertQueueStep = exports.getQueueStep = exports.queue = void 0;
// private global state for the queue feature
let currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

const queue = function (steps) {
  const Swal = this;
  currentSteps = steps;

  const resetQueue = () => {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  let queueResult = [];
  return new Promise(resolve => {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(result => {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */


exports.queue = queue;

const getQueueStep = () => document.body.getAttribute('data-swal2-queue-step');
/*
 * Global function for inserting a popup to the queue
 */


exports.getQueueStep = getQueueStep;

const insertQueueStep = (step, index) => {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */


exports.insertQueueStep = insertQueueStep;

const deleteQueueStep = index => {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

exports.deleteQueueStep = deleteQueueStep;
},{}],"node_modules/sweetalert2/src/staticMethods/showLoading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableLoading = exports.showLoading = void 0;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _sweetalert = _interopRequireDefault(require("../sweetalert2.js"));

var _classes = require("../utils/classes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
const showLoading = () => {
  let popup = dom.getPopup();

  if (!popup) {
    _sweetalert.default.fire('');
  }

  popup = dom.getPopup();
  const actions = dom.getActions();
  const confirmButton = dom.getConfirmButton();
  const cancelButton = dom.getCancelButton();
  dom.show(actions);
  dom.show(confirmButton);
  dom.addClass([popup, actions], _classes.swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

exports.enableLoading = exports.showLoading = showLoading;
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js"}],"node_modules/sweetalert2/src/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESTORE_FOCUS_TIMEOUT = void 0;
const RESTORE_FOCUS_TIMEOUT = 100;
exports.RESTORE_FOCUS_TIMEOUT = RESTORE_FOCUS_TIMEOUT;
},{}],"node_modules/sweetalert2/src/globalState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreActiveElement = exports.default = void 0;

var _constants = require("./constants.js");

const globalState = {};
var _default = globalState; // Restore previous active (focused) element

exports.default = _default;

const restoreActiveElement = () => {
  return new Promise(resolve => {
    const x = window.scrollX;
    const y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(() => {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, _constants.RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

exports.restoreActiveElement = restoreActiveElement;
},{"./constants.js":"node_modules/sweetalert2/src/constants.js"}],"node_modules/sweetalert2/src/staticMethods/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTimerRunning = exports.increaseTimer = exports.toggleTimer = exports.resumeTimer = exports.stopTimer = exports.getTimerLeft = void 0;

var _globalState = _interopRequireDefault(require("../globalState.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState.default.timeout && _globalState.default.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */


exports.getTimerLeft = getTimerLeft;

const stopTimer = () => {
  return _globalState.default.timeout && _globalState.default.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */


exports.stopTimer = stopTimer;

const resumeTimer = () => {
  return _globalState.default.timeout && _globalState.default.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */


exports.resumeTimer = resumeTimer;

const toggleTimer = () => {
  const timer = _globalState.default.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */


exports.toggleTimer = toggleTimer;

const increaseTimer = n => {
  return _globalState.default.timeout && _globalState.default.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */


exports.increaseTimer = increaseTimer;

const isTimerRunning = () => {
  return _globalState.default.timeout && _globalState.default.timeout.isRunning();
};

exports.isTimerRunning = isTimerRunning;
},{"../globalState.js":"node_modules/sweetalert2/src/globalState.js"}],"node_modules/sweetalert2/src/utils/params.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.showWarningsForParams = exports.isDeprecatedParameter = exports.isUpdatableParameter = exports.isValidParameter = exports.deprecatedParams = void 0;

var _utils = require("../utils/utils.js");

const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null
};
const deprecatedParams = [];
exports.deprecatedParams = deprecatedParams;
const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

const isValidParameter = paramName => {
  return defaultParams.hasOwnProperty(paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */


exports.isValidParameter = isValidParameter;

const isUpdatableParameter = paramName => {
  return ['title', 'titleText', 'text', 'html', 'type', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'].indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */


exports.isUpdatableParameter = isUpdatableParameter;

const isDeprecatedParameter = paramName => {
  return deprecatedParams.includes(paramName);
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


exports.isDeprecatedParameter = isDeprecatedParameter;

const showWarningsForParams = params => {
  for (const param in params) {
    if (!isValidParameter(param)) {
      (0, _utils.warn)(`Unknown parameter "${param}"`);
    }

    if (params.toast && toastIncompatibleParams.includes(param)) {
      (0, _utils.warn)(`The parameter "${param}" is incompatible with toasts`);
    }

    if (isDeprecatedParameter(param)) {
      (0, _utils.warnOnce)(`The parameter "${param}" is deprecated and will be removed in the next major release.`);
    }
  }
};

exports.showWarningsForParams = showWarningsForParams;
var _default = defaultParams;
exports.default = _default;
},{"../utils/utils.js":"node_modules/sweetalert2/src/utils/utils.js"}],"node_modules/sweetalert2/src/staticMethods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isValidParameter: true,
  isUpdatableParameter: true,
  isDeprecatedParameter: true
};
Object.defineProperty(exports, "isValidParameter", {
  enumerable: true,
  get: function () {
    return _params.isValidParameter;
  }
});
Object.defineProperty(exports, "isUpdatableParameter", {
  enumerable: true,
  get: function () {
    return _params.isUpdatableParameter;
  }
});
Object.defineProperty(exports, "isDeprecatedParameter", {
  enumerable: true,
  get: function () {
    return _params.isDeprecatedParameter;
  }
});

var _argsToParams = require("./staticMethods/argsToParams.js");

Object.keys(_argsToParams).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _argsToParams[key];
    }
  });
});

var _dom = require("./staticMethods/dom.js");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _fire = require("./staticMethods/fire.js");

Object.keys(_fire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fire[key];
    }
  });
});

var _mixin = require("./staticMethods/mixin.js");

Object.keys(_mixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixin[key];
    }
  });
});

var _queue = require("./staticMethods/queue.js");

Object.keys(_queue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queue[key];
    }
  });
});

var _showLoading = require("./staticMethods/showLoading.js");

Object.keys(_showLoading).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _showLoading[key];
    }
  });
});

var _timer = require("./staticMethods/timer.js");

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _timer[key];
    }
  });
});

var _params = require("./utils/params.js");
},{"./staticMethods/argsToParams.js":"node_modules/sweetalert2/src/staticMethods/argsToParams.js","./staticMethods/dom.js":"node_modules/sweetalert2/src/staticMethods/dom.js","./staticMethods/fire.js":"node_modules/sweetalert2/src/staticMethods/fire.js","./staticMethods/mixin.js":"node_modules/sweetalert2/src/staticMethods/mixin.js","./staticMethods/queue.js":"node_modules/sweetalert2/src/staticMethods/queue.js","./staticMethods/showLoading.js":"node_modules/sweetalert2/src/staticMethods/showLoading.js","./staticMethods/timer.js":"node_modules/sweetalert2/src/staticMethods/timer.js","./utils/params.js":"node_modules/sweetalert2/src/utils/params.js"}],"node_modules/sweetalert2/src/privateProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var _default = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};
exports.default = _default;
},{}],"node_modules/sweetalert2/src/instanceMethods/hideLoading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableLoading = exports.hideLoading = hideLoading;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _classes = require("../utils/classes.js");

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Enables buttons and hide loader.
 */
function hideLoading() {
  const innerParams = _privateProps.default.innerParams.get(this);

  const domCache = _privateProps.default.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    dom.hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      dom.hide(domCache.actions);
    }
  }

  dom.removeClass([domCache.popup, domCache.actions], _classes.swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/instanceMethods/getInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInput = getInput;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _classes = require("../utils/classes.js");

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
  const innerParams = _privateProps.default.innerParams.get(this);

  const domCache = _privateProps.default.domCache.get(this);

  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return dom.getChildByClass(domCache.content, _classes.swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(`.${_classes.swalClasses.checkbox} input`);

    case 'radio':
      return domCache.popup.querySelector(`.${_classes.swalClasses.radio} input:checked`) || domCache.popup.querySelector(`.${_classes.swalClasses.radio} input:first-child`);

    case 'range':
      return domCache.popup.querySelector(`.${_classes.swalClasses.range} input`);

    default:
      return dom.getChildByClass(domCache.content, _classes.swalClasses.input);
  }
}
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/utils/scrollbarFix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undoScrollbar = exports.fixScrollbar = void 0;

var dom = _interopRequireWildcard(require("./dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (dom.states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    dom.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = dom.states.previousBodyPadding + dom.measureScrollbar() + 'px';
  }
};

exports.fixScrollbar = fixScrollbar;

const undoScrollbar = () => {
  if (dom.states.previousBodyPadding !== null) {
    document.body.style.paddingRight = dom.states.previousBodyPadding;
    dom.states.previousBodyPadding = null;
  }
};

exports.undoScrollbar = undoScrollbar;
},{"./dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/iosFix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undoIOSfix = exports.iOSfix = void 0;

var dom = _interopRequireWildcard(require("./dom/index.js"));

var _classes = require("../utils/classes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Fix iOS scrolling http://stackoverflow.com/q/39626302

/* istanbul ignore next */
const iOSfix = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !dom.hasClass(document.body, _classes.swalClasses.iosfix)) {
    const offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    dom.addClass(document.body, _classes.swalClasses.iosfix);
  }
};
/* istanbul ignore next */


exports.iOSfix = iOSfix;

const undoIOSfix = () => {
  if (dom.hasClass(document.body, _classes.swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10);
    dom.removeClass(document.body, _classes.swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

exports.undoIOSfix = undoIOSfix;
},{"./dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js"}],"node_modules/sweetalert2/src/utils/ieFix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undoIEfix = exports.IEfix = void 0;

var dom = _interopRequireWildcard(require("./dom/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// https://stackoverflow.com/a/21825207
const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


const fixVerticalPositionIE = () => {
  const container = dom.getContainer();
  const popup = dom.getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


const IEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */


exports.IEfix = IEfix;

const undoIEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

exports.undoIEfix = undoIEfix;
},{"./dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js"}],"node_modules/sweetalert2/src/utils/aria.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsetAriaHidden = exports.setAriaHidden = void 0;

var _getters = require("./dom/getters.js");

var _domUtils = require("./dom/domUtils.js");

var _utils = require("./utils.js");

// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
const setAriaHidden = () => {
  const bodyChildren = (0, _utils.toArray)(document.body.children);
  bodyChildren.forEach(el => {
    if (el === (0, _getters.getContainer)() || (0, _domUtils.contains)(el, (0, _getters.getContainer)())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};

exports.setAriaHidden = setAriaHidden;

const unsetAriaHidden = () => {
  const bodyChildren = (0, _utils.toArray)(document.body.children);
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

exports.unsetAriaHidden = unsetAriaHidden;
},{"./dom/getters.js":"node_modules/sweetalert2/src/utils/dom/getters.js","./dom/domUtils.js":"node_modules/sweetalert2/src/utils/dom/domUtils.js","./utils.js":"node_modules/sweetalert2/src/utils/utils.js"}],"node_modules/sweetalert2/src/privateMethods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var _default = {
  swalPromiseResolve: new WeakMap()
};
exports.default = _default;
},{}],"node_modules/sweetalert2/src/instanceMethods/close.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeToast = exports.closeModal = exports.closePopup = exports.close = close;

var _scrollbarFix = require("../utils/scrollbarFix.js");

var _iosFix = require("../utils/iosFix.js");

var _ieFix = require("../utils/ieFix.js");

var _aria = require("../utils/aria.js");

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _classes = require("../utils/classes.js");

var _globalState = _interopRequireWildcard(require("../globalState.js"));

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

var _privateMethods = _interopRequireDefault(require("../privateMethods.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Instance method to close sweetAlert
 */
function close(resolveValue) {
  const container = dom.getContainer();
  const popup = dom.getPopup();

  const innerParams = _privateProps.default.innerParams.get(this);

  const swalPromiseResolve = _privateMethods.default.swalPromiseResolve.get(this);

  const onClose = innerParams.onClose;
  const onAfterClose = innerParams.onAfterClose;

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  dom.removeClass(popup, _classes.swalClasses.show);
  dom.addClass(popup, _classes.swalClasses.hide);

  const removePopupAndResetState = () => {
    if (!dom.isToast()) {
      (0, _globalState.restoreActiveElement)().then(() => triggerOnAfterClose(onAfterClose));

      _globalState.default.keydownTarget.removeEventListener('keydown', _globalState.default.keydownHandler, {
        capture: _globalState.default.keydownListenerCapture
      });

      _globalState.default.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    dom.removeClass([document.documentElement, document.body], [_classes.swalClasses.shown, _classes.swalClasses['height-auto'], _classes.swalClasses['no-backdrop'], _classes.swalClasses['toast-shown'], _classes.swalClasses['toast-column']]);

    if (dom.isModal()) {
      (0, _scrollbarFix.undoScrollbar)();
      (0, _iosFix.undoIOSfix)();
      (0, _ieFix.undoIEfix)();
      (0, _aria.unsetAriaHidden)();
    }
  }; // If animation is supported, animate


  if (dom.animationEndEvent && !dom.hasClass(popup, _classes.swalClasses.noanimation)) {
    popup.addEventListener(dom.animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(dom.animationEndEvent, swalCloseEventFinished);

      if (dom.hasClass(popup, _classes.swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  } // Resolve Swal promise


  swalPromiseResolve(resolveValue || {});
}

const triggerOnAfterClose = onAfterClose => {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(() => {
      onAfterClose();
    });
  }
};
},{"../utils/scrollbarFix.js":"node_modules/sweetalert2/src/utils/scrollbarFix.js","../utils/iosFix.js":"node_modules/sweetalert2/src/utils/iosFix.js","../utils/ieFix.js":"node_modules/sweetalert2/src/utils/ieFix.js","../utils/aria.js":"node_modules/sweetalert2/src/utils/aria.js","../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js","../globalState.js":"node_modules/sweetalert2/src/globalState.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js","../privateMethods.js":"node_modules/sweetalert2/src/privateMethods.js"}],"node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableButtons = enableButtons;
exports.disableButtons = disableButtons;
exports.enableConfirmButton = enableConfirmButton;
exports.disableConfirmButton = disableConfirmButton;
exports.enableInput = enableInput;
exports.disableInput = disableInput;

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enableButtons() {
  const domCache = _privateProps.default.domCache.get(this);

  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function disableButtons() {
  const domCache = _privateProps.default.domCache.get(this);

  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}

function enableConfirmButton() {
  const domCache = _privateProps.default.domCache.get(this);

  domCache.confirmButton.disabled = false;
}

function disableConfirmButton() {
  const domCache = _privateProps.default.domCache.get(this);

  domCache.confirmButton.disabled = true;
}

function enableInput() {
  const input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode;
    const radios = radiosContainer.querySelectorAll('input');

    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}

function disableInput() {
  const input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode;
    const radios = radiosContainer.querySelectorAll('input');

    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}
},{"../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showValidationMessage = showValidationMessage;
exports.resetValidationMessage = resetValidationMessage;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _classes = require("../utils/classes.js");

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Show block with validation message
function showValidationMessage(error) {
  const domCache = _privateProps.default.domCache.get(this);

  domCache.validationMessage.innerHTML = error;
  const popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = `-${popupComputedStyle.getPropertyValue('padding-left')}`;
  domCache.validationMessage.style.marginRight = `-${popupComputedStyle.getPropertyValue('padding-right')}`;
  dom.show(domCache.validationMessage);
  const input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', _classes.swalClasses['validation-message']);
    dom.focusInput(input);
    dom.addClass(input, _classes.swalClasses.inputerror);
  }
} // Hide block with validation message


function resetValidationMessage() {
  const domCache = _privateProps.default.domCache.get(this);

  if (domCache.validationMessage) {
    dom.hide(domCache.validationMessage);
  }

  const input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    dom.removeClass(input, _classes.swalClasses.inputerror);
  }
}
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/instanceMethods/progress-steps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProgressSteps = getProgressSteps;
exports.setProgressSteps = setProgressSteps;
exports.showProgressSteps = showProgressSteps;
exports.hideProgressSteps = hideProgressSteps;

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function getProgressSteps() {
  const innerParams = _privateProps.default.innerParams.get(this);

  return innerParams.progressSteps;
}

function setProgressSteps(progressSteps) {
  const innerParams = _privateProps.default.innerParams.get(this);

  const updatedParams = Object.assign({}, innerParams, {
    progressSteps
  });

  _privateProps.default.innerParams.set(this, updatedParams);

  dom.renderProgressSteps(updatedParams);
}

function showProgressSteps() {
  const domCache = _privateProps.default.domCache.get(this);

  dom.show(domCache.progressSteps);
}

function hideProgressSteps() {
  const domCache = _privateProps.default.domCache.get(this);

  dom.hide(domCache.progressSteps);
}
},{"../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/utils/Timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Timer {
  constructor(callback, delay) {
    let id,
        started,
        remaining = delay;
    this.running = false;

    this.start = function () {
      if (!this.running) {
        this.running = true;
        started = new Date();
        id = setTimeout(callback, remaining);
      }

      return remaining;
    };

    this.stop = function () {
      if (this.running) {
        this.running = false;
        clearTimeout(id);
        remaining -= new Date() - started;
      }

      return remaining;
    };

    this.increase = function (n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      remaining += n;

      if (running) {
        this.start();
      }

      return remaining;
    };

    this.getTimerLeft = function () {
      if (this.running) {
        this.stop();
        this.start();
      }

      return remaining;
    };

    this.isRunning = function () {
      return this.running;
    };

    this.start();
  }

}

exports.default = Timer;
},{}],"node_modules/sweetalert2/src/utils/defaultInputValidators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid email address');
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid URL');
  }
};
exports.default = _default;
},{}],"node_modules/sweetalert2/src/utils/setParameters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setParameters;

var _classes = require("./classes.js");

var _utils = require("./utils.js");

var dom = _interopRequireWildcard(require("./dom/index.js"));

var _defaultInputValidators = _interopRequireDefault(require("./defaultInputValidators.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators.default).forEach(key => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators.default[key];
      }
    });
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    (0, _utils.warn)('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  let popup;
  const oldPopup = dom.getPopup();
  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = dom.init(params);
  } else {
    popup = oldPopup || dom.init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  const container = dom.getContainer();
  const closeButton = dom.getCloseButton();
  const footer = dom.getFooter(); // Title

  dom.renderTitle(params); // Content

  dom.renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    dom.getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    dom.addClass([document.documentElement, document.body], _classes.swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    (0, _utils.warn)('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in _classes.swalClasses) {
    dom.addClass(container, _classes.swalClasses[params.position]);
  } else {
    (0, _utils.warn)('The "position" parameter is not valid, defaulting to "center"');
    dom.addClass(container, _classes.swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    let growClass = 'grow-' + params.grow;

    if (growClass in _classes.swalClasses) {
      dom.addClass(container, _classes.swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    dom.show(closeButton);
  } else {
    dom.hide(closeButton);
  } // Default Class


  popup.className = _classes.swalClasses.popup;

  if (params.toast) {
    dom.addClass([document.documentElement, document.body], _classes.swalClasses['toast-shown']);
    dom.addClass(popup, _classes.swalClasses.toast);
  } else {
    dom.addClass(popup, _classes.swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    dom.addClass(popup, params.customClass);
  }

  if (params.customContainerClass) {
    dom.addClass(container, params.customContainerClass);
  } // Progress steps


  dom.renderProgressSteps(params); // Icon

  dom.renderIcon(params); // Image

  dom.renderImage(params); // Actions (buttons)

  dom.renderActions(params); // Footer

  dom.parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    dom.removeClass(popup, _classes.swalClasses.noanimation);
  } else {
    dom.addClass(popup, _classes.swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    (0, _utils.warn)('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}
},{"./classes.js":"node_modules/sweetalert2/src/utils/classes.js","./utils.js":"node_modules/sweetalert2/src/utils/utils.js","./dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","./defaultInputValidators.js":"node_modules/sweetalert2/src/utils/defaultInputValidators.js"}],"node_modules/sweetalert2/src/utils/openPopup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPopup = void 0;

var dom = _interopRequireWildcard(require("./dom/index.js"));

var _classes = require("./classes.js");

var _scrollbarFix = require("./scrollbarFix.js");

var _iosFix = require("./iosFix.js");

var _ieFix = require("./ieFix.js");

var _aria = require("./aria.js");

var _globalState = _interopRequireDefault(require("../globalState.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
const openPopup = params => {
  const container = dom.getContainer();
  const popup = dom.getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    dom.addClass(popup, _classes.swalClasses.show);
    dom.addClass(container, _classes.swalClasses.fade);
    dom.removeClass(popup, _classes.swalClasses.hide);
  } else {
    dom.removeClass(popup, _classes.swalClasses.fade);
  }

  dom.show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (dom.animationEndEvent && !dom.hasClass(popup, _classes.swalClasses.noanimation)) {
    popup.addEventListener(dom.animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(dom.animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  dom.addClass([document.documentElement, document.body, container], _classes.swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    dom.addClass([document.documentElement, document.body], _classes.swalClasses['height-auto']);
  }

  if (dom.isModal()) {
    (0, _scrollbarFix.fixScrollbar)();
    (0, _iosFix.iOSfix)();
    (0, _ieFix.IEfix)();
    (0, _aria.setAriaHidden)(); // sweetalert2/issues/1247

    setTimeout(() => {
      container.scrollTop = 0;
    });
  }

  if (!dom.isToast() && !_globalState.default.previousActiveElement) {
    _globalState.default.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(() => {
      params.onOpen(popup);
    });
  }
};

exports.openPopup = openPopup;
},{"./dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","./classes.js":"node_modules/sweetalert2/src/utils/classes.js","./scrollbarFix.js":"node_modules/sweetalert2/src/utils/scrollbarFix.js","./iosFix.js":"node_modules/sweetalert2/src/utils/iosFix.js","./ieFix.js":"node_modules/sweetalert2/src/utils/ieFix.js","./aria.js":"node_modules/sweetalert2/src/utils/aria.js","../globalState.js":"node_modules/sweetalert2/src/globalState.js"}],"node_modules/sweetalert2/src/instanceMethods/_main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._main = _main;

var _params = _interopRequireWildcard(require("../utils/params.js"));

var dom = _interopRequireWildcard(require("../utils/dom/index.js"));

var _classes = require("../utils/classes.js");

var _Timer = _interopRequireDefault(require("../utils/Timer.js"));

var _utils = require("../utils/utils.js");

var _setParameters = _interopRequireDefault(require("../utils/setParameters.js"));

var _globalState = _interopRequireDefault(require("../globalState.js"));

var _openPopup = require("../utils/openPopup.js");

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

var _privateMethods = _interopRequireDefault(require("../privateMethods.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _main(userParams) {
  (0, _params.showWarningsForParams)(userParams);
  const innerParams = Object.assign({}, _params.default, userParams);
  (0, _setParameters.default)(innerParams);
  Object.freeze(innerParams);

  _privateProps.default.innerParams.set(this, innerParams); // clear the previous timer


  if (_globalState.default.timeout) {
    _globalState.default.timeout.stop();

    delete _globalState.default.timeout;
  } // clear the restore focus timeout


  clearTimeout(_globalState.default.restoreFocusTimeout);
  const domCache = {
    popup: dom.getPopup(),
    container: dom.getContainer(),
    content: dom.getContent(),
    actions: dom.getActions(),
    confirmButton: dom.getConfirmButton(),
    cancelButton: dom.getCancelButton(),
    closeButton: dom.getCloseButton(),
    validationMessage: dom.getValidationMessage(),
    progressSteps: dom.getProgressSteps()
  };

  _privateProps.default.domCache.set(this, domCache);

  const constructor = this.constructor;
  return new Promise(resolve => {
    // functions to handle all closings/dismissals
    const succeedWith = value => {
      this.closePopup({
        value
      });
    };

    const dismissWith = dismiss => {
      this.closePopup({
        dismiss
      });
    };

    _privateMethods.default.swalPromiseResolve.set(this, resolve); // Close on timer


    if (innerParams.timer) {
      _globalState.default.timeout = new _Timer.default(() => {
        dismissWith('timer');
        delete _globalState.default.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    const getInputValue = () => {
      const input = this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(() => {
        const input = this.getInput();

        if (input) {
          dom.focusInput(input);
        }
      }, 0);
    }

    const confirm = value => {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        this.resetValidationMessage();
        const preConfirmPromise = Promise.resolve().then(() => innerParams.preConfirm(value, innerParams.validationMessage));
        preConfirmPromise.then(preConfirmValue => {
          if (dom.isVisible(domCache.validationMessage) || preConfirmValue === false) {
            this.hideLoading();
          } else {
            succeedWith(preConfirmValue || value);
          }
        });
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    const onButtonEvent = e => {
      const target = e.target;
      const {
        confirmButton,
        cancelButton
      } = domCache;
      const targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      const targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            this.disableButtons();

            if (innerParams.input) {
              const inputValue = getInputValue();

              if (innerParams.inputValidator) {
                this.disableInput();
                const validationPromise = Promise.resolve().then(() => innerParams.inputValidator(inputValue, innerParams.validationMessage));
                validationPromise.then(validationMessage => {
                  this.enableButtons();
                  this.enableInput();

                  if (validationMessage) {
                    this.showValidationMessage(validationMessage);
                  } else {
                    confirm(inputValue);
                  }
                });
              } else if (!this.getInput().checkValidity()) {
                this.enableButtons();
                this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            this.disableButtons();
            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    const buttons = domCache.popup.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = () => {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = () => {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      let ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = () => {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = () => {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = e => {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if ((0, _utils.callIfFunction)(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    const setFocus = (index, increment) => {
      const focusableElements = dom.getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (let i = 0; i < focusableElements.length; i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    const keydownHandler = (e, innerParams) => {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && this.getInput() && e.target.outerHTML === this.getInput().outerHTML) {
          if (['textarea', 'file'].includes(innerParams.input)) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        const targetElement = e.target;
        const focusableElements = dom.getFocusableElements(innerParams.focusCancel);
        let btnIndex = -1;

        for (let i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.includes(e.key)) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && dom.isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && dom.isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && (0, _utils.callIfFunction)(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (_globalState.default.keydownHandlerAdded) {
      _globalState.default.keydownTarget.removeEventListener('keydown', _globalState.default.keydownHandler, {
        capture: _globalState.default.keydownListenerCapture
      });

      _globalState.default.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      _globalState.default.keydownHandler = e => keydownHandler(e, innerParams);

      _globalState.default.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      _globalState.default.keydownListenerCapture = innerParams.keydownListenerCapture;

      _globalState.default.keydownTarget.addEventListener('keydown', _globalState.default.keydownHandler, {
        capture: _globalState.default.keydownListenerCapture
      });

      _globalState.default.keydownHandlerAdded = true;
    }

    this.enableButtons();
    this.hideLoading();
    this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      dom.addClass(document.body, _classes.swalClasses['toast-column']);
    } else {
      dom.removeClass(document.body, _classes.swalClasses['toast-column']);
    } // inputs


    const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    const setInputPlaceholder = input => {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    let input;

    for (let i = 0; i < inputTypes.length; i++) {
      const inputClass = _classes.swalClasses[inputTypes[i]];
      const inputContainer = dom.getChildByClass(domCache.content, inputClass);
      input = this.getInput(inputTypes[i]); // set attributes

      if (input) {
        for (let j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            const attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (let attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[i] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        dom.addClass(inputContainer, innerParams.inputClass);
      }

      dom.hide(inputContainer);
    }

    let populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = dom.getChildByClass(domCache.content, _classes.swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else if (!(0, _utils.isPromise)(innerParams.inputValue)) {
            (0, _utils.warn)(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof innerParams.inputValue}"`);
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          dom.show(input);
          break;
        }

      case 'file':
        {
          input = dom.getChildByClass(domCache.content, _classes.swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          dom.show(input);
          break;
        }

      case 'range':
        {
          const range = dom.getChildByClass(domCache.content, _classes.swalClasses.range);
          const rangeInput = range.querySelector('input');
          const rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          dom.show(range);
          break;
        }

      case 'select':
        {
          const select = dom.getChildByClass(domCache.content, _classes.swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            const placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = inputOptions => {
            inputOptions.forEach(inputOption => {
              const optionValue = inputOption[0];
              const optionLabel = inputOption[1];
              const option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            dom.show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          const radio = dom.getChildByClass(domCache.content, _classes.swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = inputOptions => {
            inputOptions.forEach(inputOption => {
              const radioValue = inputOption[0];
              const radioLabel = inputOption[1];
              const radioInput = document.createElement('input');
              const radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = _classes.swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              const label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = _classes.swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            dom.show(radio);
            const radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          const checkbox = dom.getChildByClass(domCache.content, _classes.swalClasses.checkbox);
          const checkboxInput = this.getInput('checkbox');
          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = _classes.swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          let label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          dom.show(checkbox);
          break;
        }

      case 'textarea':
        {
          const textarea = dom.getChildByClass(domCache.content, _classes.swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          dom.show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        (0, _utils.error)(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${innerParams.input}"`);
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      const processInputOptions = inputOptions => populateInputOptions((0, _utils.formatInputOptions)(inputOptions));

      if ((0, _utils.isPromise)(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(inputOptions => {
          this.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (typeof innerParams.inputOptions === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        (0, _utils.error)(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof innerParams.inputOptions}`);
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(innerParams.input) && (0, _utils.isPromise)(innerParams.inputValue)) {
      constructor.showLoading();
      dom.hide(input);
      innerParams.inputValue.then(inputValue => {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        dom.show(input);
        input.focus();
        this.hideLoading();
      }).catch(err => {
        (0, _utils.error)('Error in inputValue promise: ' + err);
        input.value = '';
        dom.show(input);
        input.focus();
        this.hideLoading();
      });
    }

    (0, _openPopup.openPopup)(innerParams);

    if (!innerParams.toast) {
      if (!(0, _utils.callIfFunction)(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && dom.isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && dom.isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}
},{"../utils/params.js":"node_modules/sweetalert2/src/utils/params.js","../utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../utils/classes.js":"node_modules/sweetalert2/src/utils/classes.js","../utils/Timer.js":"node_modules/sweetalert2/src/utils/Timer.js","../utils/utils.js":"node_modules/sweetalert2/src/utils/utils.js","../utils/setParameters.js":"node_modules/sweetalert2/src/utils/setParameters.js","../globalState.js":"node_modules/sweetalert2/src/globalState.js","../utils/openPopup.js":"node_modules/sweetalert2/src/utils/openPopup.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js","../privateMethods.js":"node_modules/sweetalert2/src/privateMethods.js"}],"node_modules/sweetalert2/src/instanceMethods/update.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

var dom = _interopRequireWildcard(require("../../src/utils/dom/index.js"));

var _utils = require("../../src/utils/utils.js");

var _sweetalert = _interopRequireDefault(require("../sweetalert2.js"));

var _privateProps = _interopRequireDefault(require("../privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Updates popup options.
 */
function update(params) {
  const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(param => {
    if (_sweetalert.default.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      (0, _utils.warn)(`Invalid parameter to update: "${param}". Updatable params are listed here: TODO (@limonte) add link`);
    }
  });

  const innerParams = _privateProps.default.innerParams.get(this);

  const updatedParams = Object.assign({}, innerParams, validUpdatableParams); // Actions

  dom.renderActions(updatedParams); // Content

  dom.renderContent(updatedParams); // Icon

  dom.renderIcon(updatedParams); // Image

  dom.renderImage(updatedParams); // Progress steps

  dom.renderProgressSteps(updatedParams); // Title

  dom.renderTitle(updatedParams);

  _privateProps.default.innerParams.set(this, updatedParams);
}
},{"../../src/utils/dom/index.js":"node_modules/sweetalert2/src/utils/dom/index.js","../../src/utils/utils.js":"node_modules/sweetalert2/src/utils/utils.js","../sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js","../privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/instanceMethods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hideLoading = require("./instanceMethods/hideLoading.js");

Object.keys(_hideLoading).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hideLoading[key];
    }
  });
});

var _getInput = require("./instanceMethods/getInput.js");

Object.keys(_getInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getInput[key];
    }
  });
});

var _close = require("./instanceMethods/close.js");

Object.keys(_close).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _close[key];
    }
  });
});

var _enableDisableElements = require("./instanceMethods/enable-disable-elements.js");

Object.keys(_enableDisableElements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enableDisableElements[key];
    }
  });
});

var _showResetValidationError = require("./instanceMethods/show-reset-validation-error.js");

Object.keys(_showResetValidationError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _showResetValidationError[key];
    }
  });
});

var _progressSteps = require("./instanceMethods/progress-steps.js");

Object.keys(_progressSteps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _progressSteps[key];
    }
  });
});

var _main = require("./instanceMethods/_main.js");

Object.keys(_main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _main[key];
    }
  });
});

var _update = require("./instanceMethods/update.js");

Object.keys(_update).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _update[key];
    }
  });
});
},{"./instanceMethods/hideLoading.js":"node_modules/sweetalert2/src/instanceMethods/hideLoading.js","./instanceMethods/getInput.js":"node_modules/sweetalert2/src/instanceMethods/getInput.js","./instanceMethods/close.js":"node_modules/sweetalert2/src/instanceMethods/close.js","./instanceMethods/enable-disable-elements.js":"node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js","./instanceMethods/show-reset-validation-error.js":"node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js","./instanceMethods/progress-steps.js":"node_modules/sweetalert2/src/instanceMethods/progress-steps.js","./instanceMethods/_main.js":"node_modules/sweetalert2/src/instanceMethods/_main.js","./instanceMethods/update.js":"node_modules/sweetalert2/src/instanceMethods/update.js"}],"node_modules/sweetalert2/src/SweetAlert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils/utils.js");

var _DismissReason = require("./utils/DismissReason.js");

var staticMethods = _interopRequireWildcard(require("./staticMethods.js"));

var instanceMethods = _interopRequireWildcard(require("./instanceMethods.js"));

var _privateProps = _interopRequireDefault(require("./privateProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let currentInstance; // SweetAlert constructor

function SweetAlert(...args) {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    (0, _utils.error)('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;
  const outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  const promise = this._main(this.params);

  _privateProps.default.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  const promise = _privateProps.default.promise.get(this);

  return promise.then(onFulfilled);
};

SweetAlert.prototype.finally = function (onFinally) {
  const promise = _privateProps.default.promise.get(this);

  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

Object.keys(instanceMethods).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args);
    }
  };
});
SweetAlert.DismissReason = _DismissReason.DismissReason;
SweetAlert.version = '8.0.5';
var _default = SweetAlert;
exports.default = _default;
},{"./utils/utils.js":"node_modules/sweetalert2/src/utils/utils.js","./utils/DismissReason.js":"node_modules/sweetalert2/src/utils/DismissReason.js","./staticMethods.js":"node_modules/sweetalert2/src/staticMethods.js","./instanceMethods.js":"node_modules/sweetalert2/src/instanceMethods.js","./privateProps.js":"node_modules/sweetalert2/src/privateProps.js"}],"node_modules/sweetalert2/src/sweetalert2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SweetAlert = _interopRequireDefault(require("./SweetAlert.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Swal = _SweetAlert.default;
Swal.default = Swal;
var _default = Swal;
exports.default = _default;
},{"./SweetAlert.js":"node_modules/sweetalert2/src/SweetAlert.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _sweetalert = _interopRequireDefault(require("sweetalert2/src/sweetalert2.js"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sweetalert.default.fire({
  title: 'Hello from parcel!',
  html: "SweetAlert2 version ".concat(_sweetalert.default.version)
});
},{"sweetalert2/src/sweetalert2.js":"node_modules/sweetalert2/src/sweetalert2.js","./styles.scss":"styles.scss"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64675" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.map