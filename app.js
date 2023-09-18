(()=>{let e;function t(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function o(e,t){return Object.keys(t).forEach(function(o){"default"===o||"__esModule"===o||e.hasOwnProperty(o)||Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[o]}})}),e}var n={};t(n,"handleConfirmButtonClick",()=>tY),t(n,"handleDenyButtonClick",()=>tZ),t(n,"handleCancelButtonClick",()=>tJ);var i={};t(i,"close",()=>tx),t(i,"handleAwaitingPromise",()=>tS),t(i,"rejectPromise",()=>tL),t(i,"closePopup",()=>tx),t(i,"closeModal",()=>tx),t(i,"closeToast",()=>tx);/** @type {GlobalState} */let r={},a=()=>{r.previousActiveElement instanceof HTMLElement?(r.previousActiveElement.focus(),r.previousActiveElement=null):document.body&&document.body.focus()},l=e=>new Promise(t=>{if(!e)return t();let o=window.scrollX,n=window.scrollY;r.restoreFocusTimeout=setTimeout(()=>{a(),t()},100)// issues/900
    ,window.scrollTo(o,n)});var s={};t(s,"isVisible",()=>e8),t(s,"clickConfirm",()=>e7),t(s,"clickDeny",()=>te),t(s,"clickCancel",()=>tt),t(s,"getContainer",()=>k),t(s,"getPopup",()=>E),t(s,"getTitle",()=>T),t(s,"getHtmlContainer",()=>L),t(s,"getImage",()=>S),t(s,"getIcon",()=>P),t(s,"getIconContent",()=>x),t(s,"getInputLabel",()=>D),t(s,"getCloseButton",()=>R),t(s,"getActions",()=>q),t(s,"getConfirmButton",()=>j),t(s,"getDenyButton",()=>H),t(s,"getCancelButton",()=>I),t(s,"getLoader",()=>V),t(s,"getFooter",()=>N),t(s,"getTimerProgressBar",()=>F),t(s,"getFocusableElements",()=>_),t(s,"getValidationMessage",()=>M),t(s,"getProgressSteps",()=>O),t(s,"isLoading",()=>W);let u="swal2-",c=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((e,t)=>(e[t]=u+t,e),/** @type {SwalClasses} */{}),d=["success","warning","info","question","error"].reduce((e,t)=>(e[t]=u+t,e),/** @type {SwalIcons} */{}),p="SweetAlert2:",m=e=>e.charAt(0).toUpperCase()+e.slice(1),g=e=>{console.warn(`${p} ${"object"==typeof e?e.join(" "):e}`)},h=e=>{console.error(`${p} ${e}`)},f=[],b=e=>{f.includes(e)||(f.push(e),g(e))},y=(e,t)=>{b(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},w=e=>"function"==typeof e?e():e,v=e=>e&&"function"==typeof e.toPromise,C=e=>v(e)?e.toPromise():Promise.resolve(e),A=e=>e&&Promise.resolve(e)===e,k=()=>document.body.querySelector(`.${c.container}`),B=e=>{let t=k();return t?t.querySelector(e):null},$=e=>B(`.${e}`),E=()=>$(c.popup),P=()=>$(c.icon),x=()=>$(c["icon-content"]),T=()=>$(c.title),L=()=>$(c["html-container"]),S=()=>$(c.image),O=()=>$(c["progress-steps"]),M=()=>$(c["validation-message"]),j=()=>/** @type {HTMLButtonElement} */B(`.${c.actions} .${c.confirm}`),I=()=>/** @type {HTMLButtonElement} */B(`.${c.actions} .${c.cancel}`),H=()=>/** @type {HTMLButtonElement} */B(`.${c.actions} .${c.deny}`),D=()=>$(c["input-label"]),V=()=>B(`.${c.loader}`),q=()=>$(c.actions),N=()=>$(c.footer),F=()=>$(c["timer-progress-bar"]),R=()=>$(c.close),U=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,_=()=>{let e=E();if(!e)return[];/** @type {NodeListOf<HTMLElement>} */let t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(t)// sort according to tabindex
.sort((e,t)=>{let o=parseInt(e.getAttribute("tabindex")||"0"),n=parseInt(t.getAttribute("tabindex")||"0");return o>n?1:o<n?-1:0}),n=e.querySelectorAll(U),i=Array.from(n).filter(e=>"-1"!==e.getAttribute("tabindex"));return[...new Set(o.concat(i))].filter(e=>eu(e))},z=()=>Z(document.body,c.shown)&&!Z(document.body,c["toast-shown"])&&!Z(document.body,c["no-backdrop"]),K=()=>{let e=E();return!!e&&Z(e,c.toast)},W=()=>{let e=E();return!!e&&e.hasAttribute("data-loading")},Y=(e,t)=>{if(e.textContent="",t){let o=new DOMParser,n=o.parseFromString(t,"text/html"),i=n.querySelector("head");i&&Array.from(i.childNodes).forEach(t=>{e.appendChild(t)});let r=n.querySelector("body");r&&Array.from(r.childNodes).forEach(t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0))// https://github.com/sweetalert2/sweetalert2/issues/2507
:e.appendChild(t)})}},Z=(e,t)=>{if(!t)return!1;let o=t.split(/\s+/);for(let t=0;t<o.length;t++)if(!e.classList.contains(o[t]))return!1;return!0},J=(e,t)=>{Array.from(e.classList).forEach(o=>{Object.values(c).includes(o)||Object.values(d).includes(o)||Object.values(t.showClass||{}).includes(o)||e.classList.remove(o)})},X=(e,t,o)=>{if(J(e,t),t.customClass&&t.customClass[o]){if("string"!=typeof t.customClass[o]&&!t.customClass[o].forEach){g(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof t.customClass[o]}"`);return}et(e,t.customClass[o])}},G=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${c.popup} > .${c[t]}`);case"checkbox":return e.querySelector(`.${c.popup} > .${c.checkbox} input`);case"radio":return e.querySelector(`.${c.popup} > .${c.radio} input:checked`)||e.querySelector(`.${c.popup} > .${c.radio} input:first-child`);case"range":return e.querySelector(`.${c.popup} > .${c.range} input`);default:return e.querySelector(`.${c.popup} > .${c.input}`)}},Q=e=>{// place cursor at end of text in text input
if(e.focus(),"file"!==e.type){// http://stackoverflow.com/a/2345915
let t=e.value;e.value="",e.value=t}},ee=(e,t,o)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(t=>{Array.isArray(e)?e.forEach(e=>{o?e.classList.add(t):e.classList.remove(t)}):o?e.classList.add(t):e.classList.remove(t)}))},et=(e,t)=>{ee(e,t,!0)},eo=(e,t)=>{ee(e,t,!1)},en=(e,t)=>{let o=Array.from(e.children);for(let e=0;e<o.length;e++){let n=o[e];if(n instanceof HTMLElement&&Z(n,t))return n}},ei=(e,t,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||0===parseInt(o)?e.style[t]="number"==typeof o?`${o}px`:o:e.style.removeProperty(t)},er=(e,t="flex")=>{e&&(e.style.display=t)},ea=e=>{e&&(e.style.display="none")},el=(e,t,o,n)=>{/** @type {HTMLElement} */let i=e.querySelector(t);i&&(i.style[o]=n)},es=(e,t,o="flex")=>{t?er(e,o):ea(e)},eu=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),ec=()=>!eu(j())&&!eu(H())&&!eu(I()),ed=e=>e.scrollHeight>e.clientHeight,ep=e=>{let t=window.getComputedStyle(e),o=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return o>0||n>0},em=(e,t=!1)=>{let o=F();o&&eu(o)&&(t&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${e/1e3}s linear`,o.style.width="0%"},10))},eg=()=>{let e=F();if(!e)return;let t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";let o=parseInt(window.getComputedStyle(e).width);e.style.width=`${t/o*100}%`},eh=()=>"undefined"==typeof window||"undefined"==typeof document,ef=`
 <div aria-labelledby="${c.title}" aria-describedby="${c["html-container"]}" class="${c.popup}" tabindex="-1">
   <button type="button" class="${c.close}"></button>
   <ul class="${c["progress-steps"]}"></ul>
   <div class="${c.icon}"></div>
   <img class="${c.image}" />
   <h2 class="${c.title}" id="${c.title}"></h2>
   <div class="${c["html-container"]}" id="${c["html-container"]}"></div>
   <input class="${c.input}" id="${c.input}" />
   <input type="file" class="${c.file}" />
   <div class="${c.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${c.select}" id="${c.select}"></select>
   <div class="${c.radio}"></div>
   <label class="${c.checkbox}">
     <input type="checkbox" id="${c.checkbox}" />
     <span class="${c.label}"></span>
   </label>
   <textarea class="${c.textarea}" id="${c.textarea}"></textarea>
   <div class="${c["validation-message"]}" id="${c["validation-message"]}"></div>
   <div class="${c.actions}">
     <div class="${c.loader}"></div>
     <button type="button" class="${c.confirm}"></button>
     <button type="button" class="${c.deny}"></button>
     <button type="button" class="${c.cancel}"></button>
   </div>
   <div class="${c.footer}"></div>
   <div class="${c["timer-progress-bar-container"]}">
     <div class="${c["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),eb=()=>{let e=k();return!!e&&(e.remove(),eo([document.documentElement,document.body],[c["no-backdrop"],c["toast-shown"],c["has-column"]]),!0)},ey=()=>{r.currentInstance.resetValidationMessage()},ew=()=>{let e=E(),t=en(e,c.input),o=en(e,c.file),n=e.querySelector(`.${c.range} input`),i=e.querySelector(`.${c.range} output`),r=en(e,c.select),a=e.querySelector(`.${c.checkbox} input`),l=en(e,c.textarea);t.oninput=ey,o.onchange=ey,r.onchange=ey,a.onchange=ey,l.oninput=ey,n.oninput=()=>{ey(),i.value=n.value},n.onchange=()=>{ey(),i.value=n.value}},ev=e=>"string"==typeof e?document.querySelector(e):e,eC=e=>{let t=E();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},eA=e=>{"rtl"===window.getComputedStyle(e).direction&&et(k(),c.rtl)},ek=e=>{// Clean up the old popup container if it exists
let t=eb();if(eh()){h("SweetAlert2 requires document to initialize");return}let o=document.createElement("div");o.className=c.container,t&&et(o,c["no-transition"]),Y(o,ef);let n=ev(e.target);n.appendChild(o),eC(e),eA(n),ew()},eB=(e,t)=>{// DOM element
e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?e$(e,t):e&&Y(t,e)},e$=(e,t)=>{// JQuery element(s)
e.jquery?eE(t,e):Y(t,e.toString())},eE=(e,t)=>{if(e.textContent="",0 in t)for(let o=0;(o in t);o++)e.appendChild(t[o].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},eP=(()=>{// Prevent run in Node env
if(eh())return!1;let e=document.createElement("div");return(// Chrome, Safari and Opera
void 0!==e.style.webkitAnimation?"webkitAnimationEnd":void 0!==e.style.animation&&"animationend")})(),ex=(e,t)=>{let o=q(),n=V();o&&n&&(t.showConfirmButton||t.showDenyButton||t.showCancelButton?er(o):ea(o),// Custom class
X(o,t,"actions"),// Render all the buttons
/**
 * @param {HTMLElement} actions
 * @param {HTMLElement} loader
 * @param {SweetAlertOptions} params
 */function(e,t,o){let n=j(),i=H(),r=I();n&&i&&r&&(// Render buttons
eT(n,"confirm",o),eT(i,"deny",o),eT(r,"cancel",o),/**
 * @param {HTMLElement} confirmButton
 * @param {HTMLElement} denyButton
 * @param {HTMLElement} cancelButton
 * @param {SweetAlertOptions} params
 */function(e,t,o,n){if(!n.buttonsStyling){eo([e,t,o],c.styled);return}et([e,t,o],c.styled),n.confirmButtonColor&&(e.style.backgroundColor=n.confirmButtonColor,et(e,c["default-outline"])),n.denyButtonColor&&(t.style.backgroundColor=n.denyButtonColor,et(t,c["default-outline"])),n.cancelButtonColor&&(o.style.backgroundColor=n.cancelButtonColor,et(o,c["default-outline"]))}(n,i,r,o),o.reverseButtons&&(o.toast?(e.insertBefore(r,n),e.insertBefore(i,n)):(e.insertBefore(r,t),e.insertBefore(i,t),e.insertBefore(n,t))))}(o,n,t),// Loader
Y(n,t.loaderHtml||""),X(n,t,"loader"))};/**
 * @param {HTMLElement} button
 * @param {'confirm' | 'deny' | 'cancel'} buttonType
 * @param {SweetAlertOptions} params
 */function eT(e,t,o){let n=m(t);es(e,o[`show${n}Button`],"inline-block"),Y(e,o[`${t}ButtonText`]||"")// Set caption text
,e.setAttribute("aria-label",o[`${t}ButtonAriaLabel`]||"")// ARIA label
,// Add buttons custom classes
e.className=c[t],X(e,o,`${t}Button`)}let eL=(e,t)=>{let o=R();o&&(Y(o,t.closeButtonHtml||""),// Custom class
X(o,t,"closeButton"),es(o,t.showCloseButton),o.setAttribute("aria-label",t.closeButtonAriaLabel||""))},eS=(e,t)=>{var o,n,i;let r=k();r&&("string"==typeof(o=t.backdrop)?r.style.background=o:o||et([document.documentElement,document.body],c["no-backdrop"]),(n=t.position)&&(n in c?et(r,c[n]):(g('The "position" parameter is not valid, defaulting to "center"'),et(r,c.center))),(i=t.grow)&&et(r,c[`grow-${i}`]),// Custom class
X(r,t,"container"))};/// <reference path="../../../../sweetalert2.d.ts"/>
/**
 * @typedef { HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement } Input
 * @typedef { 'input' | 'file' | 'range' | 'select' | 'radio' | 'checkbox' | 'textarea' } InputClass
 *//**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */var eO={innerParams:new WeakMap,domCache:new WeakMap};/** @type {InputClass[]} */let eM=["input","file","range","select","radio","checkbox","textarea"],ej=(e,t)=>{let o=E();if(!o)return;let n=eO.innerParams.get(e),i=!n||t.input!==n.input;eM.forEach(e=>{let n=en(o,c[e]);n&&(// set attributes
eD(e,t.inputAttributes),// set class
n.className=c[e],i&&ea(n))}),t.input&&(i&&eI(t),// set custom class
eV(t))},eI=e=>{if(!e.input)return;if(!eU[e.input]){h(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);return}let t=eF(e.input),o=eU[e.input](t,e);er(t),e.inputAutoFocus&&setTimeout(()=>{Q(o)})},eH=e=>{for(let t=0;t<e.attributes.length;t++){let o=e.attributes[t].name;["id","type","value","style"].includes(o)||e.removeAttribute(o)}},eD=(e,t)=>{let o=G(E(),e);if(o)for(let e in eH(o),t)o.setAttribute(e,t[e])},eV=e=>{let t=eF(e.input);"object"==typeof e.customClass&&et(t,e.customClass.input)},eq=(e,t)=>{(!e.placeholder||t.inputPlaceholder)&&(e.placeholder=t.inputPlaceholder)},eN=(e,t,o)=>{if(o.inputLabel){let n=document.createElement("label"),i=c["input-label"];n.setAttribute("for",e.id),n.className=i,"object"==typeof o.customClass&&et(n,o.customClass.inputLabel),n.innerText=o.inputLabel,t.insertAdjacentElement("beforebegin",n)}},eF=e=>en(E(),c[e]||c.input),eR=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:A(t)||g(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},eU={};/**
 * @param {HTMLInputElement} input
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */eU.text=eU.email=eU.password=eU.number=eU.tel=eU.url=(e,t)=>(eR(e,t.inputValue),eN(e,e,t),eq(e,t),e.type=t.input,e),/**
 * @param {HTMLInputElement} input
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */eU.file=(e,t)=>(eN(e,e,t),eq(e,t),e),/**
 * @param {HTMLInputElement} range
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */eU.range=(e,t)=>{let o=e.querySelector("input"),n=e.querySelector("output");return eR(o,t.inputValue),o.type=t.input,eR(n,t.inputValue),eN(o,e,t),e},/**
 * @param {HTMLSelectElement} select
 * @param {SweetAlertOptions} params
 * @returns {HTMLSelectElement}
 */eU.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){let o=document.createElement("option");Y(o,t.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,e.appendChild(o)}return eN(e,e,t),e},/**
 * @param {HTMLInputElement} radio
 * @returns {HTMLInputElement}
 */eU.radio=e=>(e.textContent="",e),/**
 * @param {HTMLLabelElement} checkboxContainer
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */eU.checkbox=(e,t)=>{let o=G(E(),"checkbox");o.value="1",o.checked=!!t.inputValue;let n=e.querySelector("span");return Y(n,t.inputPlaceholder),o},/**
 * @param {HTMLTextAreaElement} textarea
 * @param {SweetAlertOptions} params
 * @returns {HTMLTextAreaElement}
 */eU.textarea=(e,t)=>{eR(e,t.inputValue),eq(e,t),eN(e,e,t);/**
   * @param {HTMLElement} el
   * @returns {number}
   */let o=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return(// https://github.com/sweetalert2/sweetalert2/issues/2291
setTimeout(()=>{// https://github.com/sweetalert2/sweetalert2/issues/1699
if("MutationObserver"in window){let n=parseInt(window.getComputedStyle(E()).width);new MutationObserver(()=>{// check if texarea is still in document (i.e. popup wasn't closed in the meantime)
if(!document.body.contains(e))return;let i=e.offsetWidth+o(e);i>n?E().style.width=`${i}px`:ei(E(),"width",t.width)}).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e)};let e_=(e,t)=>{let o=L();o&&(X(o,t,"htmlContainer"),t.html?(eB(t.html,o),er(o,"block")):t.text?(o.textContent=t.text,er(o,"block")):ea(o),ej(e,t))},ez=(e,t)=>{let o=N();o&&(es(o,t.footer,"block"),t.footer&&eB(t.footer,o),// Custom class
X(o,t,"footer"))},eK=(e,t)=>{let o=eO.innerParams.get(e),n=P();if(n){// if the given icon already rendered, apply the styling without re-rendering the icon
if(o&&t.icon===o.icon){// Custom or default content
eX(n,t),eW(n,t);return}if(!t.icon&&!t.iconHtml){ea(n);return}if(t.icon&&-1===Object.keys(d).indexOf(t.icon)){h(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),ea(n);return}er(n),// Custom or default content
eX(n,t),eW(n,t),// Animate icon
et(n,t.showClass&&t.showClass.icon)}},eW=(e,t)=>{for(let[o,n]of Object.entries(d))t.icon!==o&&eo(e,n);et(e,t.icon&&d[t.icon]),// Icon color
eG(e,t),// Success icon background color
eY(),// Custom class
X(e,t,"icon")},eY=()=>{let e=E();if(!e)return;let t=window.getComputedStyle(e).getPropertyValue("background-color"),o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<o.length;e++)o[e].style.backgroundColor=t},eZ=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,eJ=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,eX=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let o=e.innerHTML,n="";t.iconHtml?n=eQ(t.iconHtml):"success"===t.icon?(n=eZ,o=o.replace(/ style=".*?"/g,"")// undo adjustSuccessIconBackgroundColor()
):"error"===t.icon?n=eJ:t.icon&&(n=eQ({question:"?",warning:"!",info:"i"}[t.icon])),o.trim()!==n.trim()&&Y(e,n)},eG=(e,t)=>{if(t.iconColor){for(let o of(e.style.color=t.iconColor,e.style.borderColor=t.iconColor,[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"]))el(e,o,"backgroundColor",t.iconColor);el(e,".swal2-success-ring","borderColor",t.iconColor)}},eQ=e=>`<div class="${c["icon-content"]}">${e}</div>`,e0=(e,t)=>{let o=S();if(o){if(!t.imageUrl){ea(o);return}er(o,""),// Src, alt
o.setAttribute("src",t.imageUrl),o.setAttribute("alt",t.imageAlt||""),// Width, height
ei(o,"width",t.imageWidth),ei(o,"height",t.imageHeight),// Class
o.className=c.image,X(o,t,"image")}},e1=(e,t)=>{let o=k(),n=E();if(o&&n){// Width
// https://github.com/sweetalert2/sweetalert2/issues/2170
if(t.toast){ei(o,"width",t.width),n.style.width="100%";let e=V();e&&n.insertBefore(e,P())}else ei(n,"width",t.width);// Padding
ei(n,"padding",t.padding),t.color&&(n.style.color=t.color),t.background&&(n.style.background=t.background),ea(M()),// Classes
e2(n,t)}},e2=(e,t)=>{let o=t.showClass||{};// Default Class + showClass when updating Swal.update({})
e.className=`${c.popup} ${eu(e)?o.popup:""}`,t.toast?(et([document.documentElement,document.body],c["toast-shown"]),et(e,c.toast)):et(e,c.modal),// Custom class
X(e,t,"popup"),"string"==typeof t.customClass&&et(e,t.customClass),t.icon&&et(e,c[`icon-${t.icon}`])},e9=(e,t)=>{let o=O();if(!o)return;let{progressSteps:n,currentProgressStep:i}=t;if(!n||0===n.length||void 0===i){ea(o);return}er(o),o.textContent="",i>=n.length&&g("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),n.forEach((e,r)=>{let a=e3(e);if(o.appendChild(a),r===i&&et(a,c["active-progress-step"]),r!==n.length-1){let e=e5(t);o.appendChild(e)}})},e3=e=>{let t=document.createElement("li");return et(t,c["progress-step"]),Y(t,e),t},e5=e=>{let t=document.createElement("li");return et(t,c["progress-step-line"]),e.progressStepsDistance&&ei(t,"width",e.progressStepsDistance),t},e6=(e,t)=>{let o=T();o&&(es(o,t.title||t.titleText,"block"),t.title&&eB(t.title,o),t.titleText&&(o.innerText=t.titleText),// Custom class
X(o,t,"title"))},e4=(e,t)=>{e1(e,t),eS(e,t),e9(e,t),eK(e,t),e0(e,t),e6(e,t),eL(e,t),e_(e,t),ex(e,t),ez(e,t);let o=E();"function"==typeof t.didRender&&o&&t.didRender(o)},e8=()=>eu(E()),e7=()=>j()?.click(),te=()=>H()?.click(),tt=()=>I()?.click(),to=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),tn=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},ti=(e,t,o)=>{tn(e),t.toast||(e.keydownHandler=e=>ts(t,e,o),e.keydownTarget=t.keydownListenerCapture?window:E(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},tr=(e,t)=>{let o=_();// search for visible elements and select the next possible match
if(o.length){(e+=t)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();return}// no visible focusable elements, focus the popup
E()?.focus()},ta=["ArrowRight","ArrowDown"],tl=["ArrowLeft","ArrowUp"],ts=(e,t,o)=>{e&&(t.isComposing||229===t.keyCode||(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?tu(t,e):"Tab"===t.key?tc(t):[...ta,...tl].includes(t.key)?td(t.key):"Escape"===t.key&&tp(t,e,o)));// This instance has already been destroyed
},tu=(e,t)=>{// https://github.com/sweetalert2/sweetalert2/issues/2386
if(!w(t.allowEnterKey))return;let o=G(E(),t.input);if(e.target&&o&&e.target instanceof HTMLElement&&e.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(t.input))return;// do not submit
e7(),e.preventDefault()}},tc=e=>{let t=e.target,o=_(),n=-1;for(let e=0;e<o.length;e++)if(t===o[e]){n=e;break}e.shiftKey?tr(n,-1):tr(n,1),e.stopPropagation(),e.preventDefault()},td=e=>{let t=q(),o=j(),n=H(),i=I();if(!t||!o||!n||!i||document.activeElement instanceof HTMLElement&&![o,n,i].includes(document.activeElement))return;let r=ta.includes(e)?"nextElementSibling":"previousElementSibling",a=document.activeElement;if(a){for(let e=0;e<t.children.length;e++){if(!(a=a[r]))return;if(a instanceof HTMLButtonElement&&eu(a))break}a instanceof HTMLButtonElement&&a.focus()}},tp=(e,t,o)=>{w(t.allowEscapeKey)&&(e.preventDefault(),o(to.esc))};/**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */var tm={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};let tg=()=>{let e=Array.from(document.body.children);e.forEach(e=>{e===k()||e.contains(k())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")||""),e.setAttribute("aria-hidden","true"))})},th=()=>{let e=Array.from(document.body.children);e.forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},tf="undefined"!=typeof window&&!!window.GestureEvent// true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394
,tb=()=>{if(tf&&!Z(document.body,c.iosfix)){let e=document.body.scrollTop;document.body.style.top=`${-1*e}px`,et(document.body,c.iosfix),ty()}},ty=()=>{let e;let t=k();t&&(/**
   * @param {TouchEvent} event
   */t.ontouchstart=t=>{e=tw(t)},/**
   * @param {TouchEvent} event
   */t.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())})},tw=e=>{let t=e.target,o=k(),n=L();return!(!o||!n||tv(e)||tC(e))&&!!(t===o||!ed(o)&&t instanceof HTMLElement&&"INPUT"!==t.tagName&&// #1603
"TEXTAREA"!==t.tagName&&// #2266
!(ed(n)&&// #1944
n.contains(t)))},tv=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,tC=e=>e.touches&&e.touches.length>1,tA=()=>{if(Z(document.body,c.iosfix)){let e=parseInt(document.body.style.top,10);eo(document.body,c.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},tk=()=>{let e=document.createElement("div");e.className=c["scrollbar-measure"],document.body.appendChild(e);let t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},tB=null,t$=e=>{// for queues, do not do this more than once
null===tB&&(document.body.scrollHeight>window.innerHeight||"scroll"// https://github.com/sweetalert2/sweetalert2/issues/2663
===e)&&(// add padding so the content doesn't shift after removal of scrollbar
tB=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${tB+tk()}px`)},tE=()=>{null!==tB&&(document.body.style.paddingRight=`${tB}px`,tB=null)};/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} container
 * @param {boolean} returnFocus
 * @param {Function} didClose
 */function tP(e,t,o,n){K()?tI(e,n):(l(o).then(()=>tI(e,n)),tn(r)),tf?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),z()&&(tE(),tA(),th()),eo([document.documentElement,document.body],[c.shown,c["height-auto"],c["no-backdrop"],c["toast-shown"]])}function tx(e){e=tO(e);let t=tm.swalPromiseResolve.get(this),o=tT(this);this.isAwaitingPromise?e.isDismissed||(tS(this),t(e)):o&&t(e)}let tT=e=>{let t=E();if(!t)return!1;let o=eO.innerParams.get(e);if(!o||Z(t,o.hideClass.popup))return!1;eo(t,o.showClass.popup),et(t,o.hideClass.popup);let n=k();return eo(n,o.showClass.backdrop),et(n,o.hideClass.backdrop),tM(e,t,o),!0};function tL(e){let t=tm.swalPromiseReject.get(this);tS(this),t&&t(e)}let tS=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,eO.innerParams.get(e)||e._destroy())},tO=e=>// When user calls Swal.close()
    void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),tM=(e,t,o)=>{let n=k(),i=eP&&ep(t);"function"==typeof o.willClose&&o.willClose(t),i?tj(e,t,n,o.returnFocus,o.didClose):tP(e,n,o.returnFocus,o.didClose)},tj=(e,t,o,n,i)=>{eP&&(r.swalCloseEventFinishedCallback=tP.bind(null,e,o,n,i),t.addEventListener(eP,function(e){e.target===t&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback)}))},tI=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy&&e._destroy()})};var tH={};t(tH,"showLoading",()=>tD),t(tH,"enableLoading",()=>tD);/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 *
 * @param {HTMLButtonElement | null} [buttonToReplace]
 */let tD=e=>{let t=E();if(t||new ny// eslint-disable-line no-new
,!(t=E()))return;let o=V();K()?ea(P()):tV(t,e),er(o),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},tV=(e,t)=>{let o=q(),n=V();o&&n&&(!t&&eu(j())&&(t=j()),er(o),t&&(ea(t),n.setAttribute("data-button-to-replace",t.className),o.insertBefore(n,t)),et([e,o],c.loading))},tq=(e,t)=>{"select"===t.input||"radio"===t.input?t_(e,t):["text","email","number","tel","textarea"].some(e=>e===t.input)&&(v(t.inputValue)||A(t.inputValue))&&(tD(j()),tz(e,t))},tN=(e,t)=>{let o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return tF(o);case"radio":return tR(o);case"file":return tU(o);default:return t.inputAutoTrim?o.value.trim():o.value}},tF=e=>e.checked?1:0,tR=e=>e.checked?e.value:null,tU=e=>e.files&&e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,t_=(e,t)=>{let o=E();if(!o)return;/**
   * @param {Record<string, any>} inputOptions
   */let n=e=>{"select"===t.input?/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */function(e,t,o){let n=en(e,c.select);if(!n)return;/**
   * @param {HTMLElement} parent
   * @param {string} optionLabel
   * @param {string} optionValue
   */let i=(e,t,n)=>{let i=document.createElement("option");i.value=n,Y(i,t),i.selected=tW(n,o.inputValue),e.appendChild(i)};t.forEach(e=>{let t=e[0],o=e[1];// <optgroup> spec:
// https://www.w3.org/TR/html401/interact/forms.html#h-17.6
// "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
// check whether this is a <optgroup>
if(Array.isArray(o)){// if it is an array, then it is an <optgroup>
let e=document.createElement("optgroup");e.label=t,e.disabled=!1// not configurable for now
,n.appendChild(e),o.forEach(t=>i(e,t[1],t[0]))}else i(n,o,t)}),n.focus()}(o,tK(e),t):"radio"===t.input&&/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */function(e,t,o){let n=en(e,c.radio);if(!n)return;t.forEach(e=>{let t=e[0],i=e[1],r=document.createElement("input"),a=document.createElement("label");r.type="radio",r.name=c.radio,r.value=t,tW(t,o.inputValue)&&(r.checked=!0);let l=document.createElement("span");Y(l,i),l.className=c.label,a.appendChild(r),a.appendChild(l),n.appendChild(a)});let i=n.querySelectorAll("input");i.length&&i[0].focus()}(o,tK(e),t)};v(t.inputOptions)||A(t.inputOptions)?(tD(j()),C(t.inputOptions).then(t=>{e.hideLoading(),n(t)})):"object"==typeof t.inputOptions?n(t.inputOptions):h(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},tz=(e,t)=>{let o=e.getInput();o&&(ea(o),C(t.inputValue).then(n=>{o.value="number"===t.input?`${parseFloat(n)||0}`:`${n}`,er(o),o.focus(),e.hideLoading()}).catch(t=>{h(`Error in inputValue promise: ${t}`),o.value="",er(o),o.focus(),e.hideLoading()}))},tK=e=>{/** @type {InputOptionFlattened[]} */let t=[];return e instanceof Map?e.forEach((e,o)=>{let n=e;"object"==typeof n&&(n=tK(n)),t.push([o,n])}):Object.keys(e).forEach(o=>{let n=e[o];"object"==typeof n&&(n=tK(n)),t.push([o,n])}),t},tW=(e,t)=>!!t&&t.toString()===e.toString(),tY=e=>{let t=eO.innerParams.get(e);e.disableButtons(),t.input?tX(e,"confirm"):t2(e,!0)},tZ=e=>{let t=eO.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?tX(e,"deny"):tQ(e,!1)},tJ=(e,t)=>{e.disableButtons(),t(to.cancel)},tX=(e,t)=>{let o=eO.innerParams.get(e);if(!o.input){h(`The "input" parameter is needed to be set when using returnInputValueOn${m(t)}`);return}let n=e.getInput(),i=tN(e,o);o.inputValidator?tG(e,i,t):n&&!n.checkValidity()?(e.enableButtons(),e.showValidationMessage(o.validationMessage)):"deny"===t?tQ(e,i):t2(e,i)},tG=(e,t,o)=>{let n=eO.innerParams.get(e);e.disableInput();let i=Promise.resolve().then(()=>C(n.inputValidator(t,n.validationMessage)));i.then(n=>{e.enableButtons(),e.enableInput(),n?e.showValidationMessage(n):"deny"===o?tQ(e,t):t2(e,t)})},tQ=(e,t)=>{let o=eO.innerParams.get(e||void 0);if(o.showLoaderOnDeny&&tD(H()),o.preDeny){e.isAwaitingPromise=!0// Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
;let n=Promise.resolve().then(()=>C(o.preDeny(t,o.validationMessage)));n.then(o=>{!1===o?(e.hideLoading(),tS(e)):e.close({isDenied:!0,value:void 0===o?t:o})}).catch(t=>t1(e||void 0,t))}else e.close({isDenied:!0,value:t})},t0=(e,t)=>{e.close({isConfirmed:!0,value:t})},t1=(e,t)=>{e.rejectPromise(t)},t2=(e,t)=>{let o=eO.innerParams.get(e||void 0);if(o.showLoaderOnConfirm&&tD(),o.preConfirm){e.resetValidationMessage(),e.isAwaitingPromise=!0// Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
;let n=Promise.resolve().then(()=>C(o.preConfirm(t,o.validationMessage)));n.then(o=>{eu(M())||!1===o?(e.hideLoading(),tS(e)):t0(e,void 0===o?t:o)}).catch(t=>t1(e||void 0,t))}else t0(e,t)};var t9={},t3={};/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */function t5(){// do nothing if popup is closed
let e=eO.innerParams.get(this);if(!e)return;let t=eO.domCache.get(this);ea(t.loader),K()?e.icon&&er(P()):t6(t),eo([t.popup,t.actions],c.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}t(t3,"hideLoading",()=>t5),t(t3,"disableLoading",()=>t5);let t6=e=>{let t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?er(t[0],"inline-block"):ec()&&ea(e.actions)};var t4={};function t8(){let e=eO.innerParams.get(this),t=eO.domCache.get(this);return t?G(t.popup,e.input):null}t(t4,"getInput",()=>t8);var t7={};/**
 * @param {SweetAlert} instance
 * @param {string[]} buttons
 * @param {boolean} disabled
 */function oe(e,t,o){let n=eO.domCache.get(e);t.forEach(e=>{n[e].disabled=o})}/**
 * @param {HTMLInputElement | null} input
 * @param {boolean} disabled
 */function ot(e,t){let o=E();if(o&&e){if("radio"===e.type){/** @type {NodeListOf<HTMLInputElement>} */let e=o.querySelectorAll(`[name="${c.radio}"]`);for(let o=0;o<e.length;o++)e[o].disabled=t}else e.disabled=t}}function oo(){oe(this,["confirmButton","denyButton","cancelButton"],!1)}function on(){oe(this,["confirmButton","denyButton","cancelButton"],!0)}function oi(){ot(this.getInput(),!1)}function or(){ot(this.getInput(),!0)}t(t7,"enableButtons",()=>oo),t(t7,"disableButtons",()=>on),t(t7,"enableInput",()=>oi),t(t7,"disableInput",()=>or);var oa={};function ol(e){let t=eO.domCache.get(this),o=eO.innerParams.get(this);Y(t.validationMessage,e),t.validationMessage.className=c["validation-message"],o.customClass&&o.customClass.validationMessage&&et(t.validationMessage,o.customClass.validationMessage),er(t.validationMessage);let n=this.getInput();n&&(n.setAttribute("aria-invalid","true"),n.setAttribute("aria-describedby",c["validation-message"]),Q(n),et(n,c.inputerror))}function os(){let e=eO.domCache.get(this);e.validationMessage&&ea(e.validationMessage);let t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),eo(t,c.inputerror))}t(oa,"showValidationMessage",()=>ol),t(oa,"resetValidationMessage",()=>os);var ou={};t(ou,"update",()=>oC);let oc={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},od=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],op={},om=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],og=e=>Object.prototype.hasOwnProperty.call(oc,e),oh=e=>-1!==od.indexOf(e),of=e=>op[e],ob=e=>{og(e)||g(`Unknown parameter "${e}"`)},oy=e=>{om.includes(e)&&g(`The parameter "${e}" is incompatible with toasts`)},ow=e=>{let t=of(e);t&&y(e,t)},ov=e=>{for(let t in!1===e.backdrop&&e.allowOutsideClick&&g('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e)ob(t),e.toast&&oy(t),ow(t)};function oC(e){let t=E(),o=eO.innerParams.get(this);if(!t||Z(t,o.hideClass.popup)){g("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}let n=oA(e),i=Object.assign({},o,n);e4(this,i),eO.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}/**
 * @param {SweetAlertOptions} params
 * @returns {SweetAlertOptions}
 */let oA=e=>{let t={};return Object.keys(e).forEach(o=>{oh(o)?t[o]=e[o]:g(`Invalid parameter to update: ${o}`)}),t};var ok={};function oB(){let e=eO.domCache.get(this),t=eO.innerParams.get(this);if(!t){oE(this)// The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
;return;// This instance has already been destroyed
}e.popup&&r.swalCloseEventFinishedCallback&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback),"function"==typeof t.didDestroy&&t.didDestroy(),o$(this)}t(ok,"_destroy",()=>oB);/**
 * @param {SweetAlert} instance
 */let o$=e=>{oE(e),// Unset this.params so GC will dispose it (#1569)
delete e.params,// Unset globalState props so GC will dispose globalState (#1569)
delete r.keydownHandler,delete r.keydownTarget,// Unset currentInstance
delete r.currentInstance},oE=e=>{// If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
e.isAwaitingPromise?(oP(eO,e),e.isAwaitingPromise=!0):(oP(tm,e),oP(eO,e),delete e.isAwaitingPromise,// Unset instance methods
delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},oP=(e,t)=>{for(let o in e)e[o].delete(t)};o(t9,t3),o(t9,t4),o(t9,i),o(t9,t7),o(t9,oa),o(t9,ou),o(t9,ok);let ox=(e,t,o)=>{e.toast?oT(e,t,o):(// Ignore click events that had mousedown on the popup but mouseup on the container
// This can happen when the user drags a slider
oO(t),// Ignore click events that had mousedown on the container but mouseup on the popup
oM(t),oj(e,t,o))},oT=(e,t,o)=>{// Closing toast by internal click
t.popup.onclick=()=>{e&&(oL(e)||e.timer||e.input)||o(to.close)}},oL=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton,oS=!1,oO=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(oS=!0)}}},oM=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(oS=!0)}}},oj=(e,t,o)=>{t.container.onclick=n=>{if(oS){oS=!1;return}n.target===t.container&&w(e.allowOutsideClick)&&o(to.backdrop)}};var oI={};t(oI,"isValidParameter",()=>og),t(oI,"isUpdatableParameter",()=>oh),t(oI,"isDeprecatedParameter",()=>of);var oH={};t(oH,"argsToParams",()=>oq);let oD=e=>"object"==typeof e&&e.jquery,oV=e=>e instanceof Element||oD(e),oq=e=>{let t={};return"object"!=typeof e[0]||oV(e[0])?["title","html","icon"].forEach((o,n)=>{let i=e[n];"string"==typeof i||oV(i)?t[o]=i:void 0!==i&&h(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof i}`)}):Object.assign(t,e[0]),t};var oN={};/**
 * Main method to create a new SweetAlert2 popup
 *
 * @param  {...SweetAlertOptions} args
 * @returns {Promise<SweetAlertResult>}
 */function oF(...e){return new this// eslint-disable-line @typescript-eslint/no-this-alias
(...e)}t(oN,"fire",()=>oF);var oR={};/**
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
 * @param {SweetAlertOptions} mixinParams
 * @returns {SweetAlert}
 */function oU(e){// @ts-ignore
return class extends this{_main(t,o){return super._main(t,Object.assign({},e,o))}}}t(oR,"mixin",()=>oU);var o_={};t(o_,"getTimerLeft",()=>oz),t(o_,"stopTimer",()=>oK),t(o_,"resumeTimer",()=>oW),t(o_,"toggleTimer",()=>oY),t(o_,"increaseTimer",()=>oZ),t(o_,"isTimerRunning",()=>oJ);let oz=()=>r.timeout&&r.timeout.getTimerLeft(),oK=()=>{if(r.timeout)return eg(),r.timeout.stop()},oW=()=>{if(r.timeout){let e=r.timeout.start();return em(e),e}},oY=()=>{let e=r.timeout;return e&&(e.running?oK():oW())},oZ=e=>{if(r.timeout){let t=r.timeout.increase(e);return em(t,!0),t}},oJ=()=>!!(r.timeout&&r.timeout.isRunning());var oX={};t(oX,"bindClickHandler",()=>o0);let oG=!1,oQ={};function o0(e="data-swal-template"){oQ[e]=this,oG||(document.body.addEventListener("click",o1),oG=!0)}let o1=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(let e in oQ){let o=t.getAttribute(e);if(o){oQ[e].fire({template:o});return}}};o(oI,oH),o(oI,s),o(oI,oN),o(oI,oR),o(oI,tH),o(oI,o_),o(oI,oX);class o2{/**
   * @param {Function} callback
   * @param {number} delay
   */constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}/**
   * @returns {number}
   */start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}/**
   * @returns {number}
   */stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}/**
   * @param {number} n
   * @returns {number}
   */increase(e){let t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}/**
   * @returns {number}
   */getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}/**
   * @returns {boolean}
   */isRunning(){return this.running}}let o9=["swal-title","swal-html","swal-footer"],o3=e=>{/** @type {HTMLTemplateElement} */let t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};/** @type {DocumentFragment} */let o=t.content;no(o);let n=Object.assign(o5(o),o6(o),o4(o),o8(o),o7(o),ne(o),nt(o,o9));return n},o5=e=>{let t={},o=Array.from(e.querySelectorAll("swal-param"));return o.forEach(e=>{nn(e,["name","value"]);let o=e.getAttribute("name"),n=e.getAttribute("value");"boolean"==typeof oc[o]?t[o]="false"!==n:"object"==typeof oc[o]?t[o]=JSON.parse(n):t[o]=n}),t},o6=e=>{let t={},o=Array.from(e.querySelectorAll("swal-function-param"));return o.forEach(e=>{let o=e.getAttribute("name"),n=e.getAttribute("value");t[o]=Function(`return ${n}`)()}),t},o4=e=>{let t={},o=Array.from(e.querySelectorAll("swal-button"));return o.forEach(e=>{nn(e,["type","color","aria-label"]);let o=e.getAttribute("type");t[`${o}ButtonText`]=e.innerHTML,t[`show${m(o)}Button`]=!0,e.hasAttribute("color")&&(t[`${o}ButtonColor`]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t[`${o}ButtonAriaLabel`]=e.getAttribute("aria-label"))}),t},o8=e=>{let t={},o=e.querySelector("swal-image");return o&&(nn(o,["src","width","height","alt"]),o.hasAttribute("src")&&(t.imageUrl=o.getAttribute("src")),o.hasAttribute("width")&&(t.imageWidth=o.getAttribute("width")),o.hasAttribute("height")&&(t.imageHeight=o.getAttribute("height")),o.hasAttribute("alt")&&(t.imageAlt=o.getAttribute("alt"))),t},o7=e=>{let t={},o=e.querySelector("swal-icon");return o&&(nn(o,["type","color"]),o.hasAttribute("type")&&/** @type {SweetAlertIcon} */(t.icon=o.getAttribute("type")),o.hasAttribute("color")&&(t.iconColor=o.getAttribute("color")),t.iconHtml=o.innerHTML),t},ne=e=>{let t={},o=e.querySelector("swal-input");o&&(nn(o,["type","label","placeholder","value"]),/** @type {SweetAlertInput} */// @ts-ignore
t.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(t.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(t.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(t.inputValue=o.getAttribute("value")));/** @type {HTMLElement[]} */let n=Array.from(e.querySelectorAll("swal-input-option"));return n.length&&(t.inputOptions={},n.forEach(e=>{nn(e,["value"]);let o=e.getAttribute("value"),n=e.innerHTML;t.inputOptions[o]=n})),t},nt=(e,t)=>{let o={};for(let n in t){let i=t[n],r=e.querySelector(i);r&&(nn(r,[]),o[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return o},no=e=>{let t=o9.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(e=>{let o=e.tagName.toLowerCase();t.includes(o)||g(`Unrecognized element <${o}>`)})},nn=(e,t)=>{Array.from(e.attributes).forEach(o=>{-1===t.indexOf(o.name)&&g([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},ni=e=>{let t=k(),o=E();"function"==typeof e.willOpen&&e.willOpen(o);let n=window.getComputedStyle(document.body),i=n.overflowY;ns(t,o,e),// scrolling is 'hidden' until animation is done, after that 'auto'
setTimeout(()=>{na(t,o)},10),z()&&(nl(t,e.scrollbarPadding,i),tg()),K()||r.previousActiveElement||(r.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout(()=>e.didOpen(o)),eo(t,c["no-transition"])},nr=e=>{let t=E();if(e.target!==t||!eP)return;let o=k();t.removeEventListener(eP,nr),o.style.overflowY="auto"},na=(e,t)=>{eP&&ep(t)?(e.style.overflowY="hidden",t.addEventListener(eP,nr)):e.style.overflowY="auto"},nl=(e,t,o)=>{tb(),t&&"hidden"!==o&&t$(o),// sweetalert2/issues/1247
setTimeout(()=>{e.scrollTop=0})},ns=(e,t,o)=>{et(e,o.showClass.backdrop),// this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
t.style.setProperty("opacity","0","important"),er(t,"grid"),setTimeout(()=>{// Animate popup right after showing it
et(t,o.showClass.popup),// and remove the opacity workaround
t.style.removeProperty("opacity")},10)// 10ms in order to fix #2062
,et([document.documentElement,document.body],c.shown),o.heightAuto&&o.backdrop&&!o.toast&&et([document.documentElement,document.body],c["height-auto"])};var nu={/**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),/**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};class nc{/**
   * @type {Promise<SweetAlertResult>}
   */#e;/**
   * @param {...any} args
   * @this {SweetAlert}
   */constructor(...t){// Prevent run in Node env
if("undefined"==typeof window)return;e=this;// @ts-ignore
let o=Object.freeze(this.constructor.argsToParams(t));/** @type {Readonly<SweetAlertOptions>} */this.params=o,/** @type {boolean} */this.isAwaitingPromise=!1,this.#e=this._main(e.params)}_main(t,o={}){ov(Object.assign({},o,t)),r.currentInstance&&(r.currentInstance._destroy(),z()&&th()),r.currentInstance=e;let n=np(t,o);n.inputValidator||("email"===n.input&&(n.inputValidator=nu.email),"url"!==n.input||(n.inputValidator=nu.url)),n.showLoaderOnConfirm&&!n.preConfirm&&g("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),n.target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(g('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof n.title&&(n.title=n.title.split("\n").join("<br />")),ek(n),Object.freeze(n),r.timeout&&(r.timeout.stop(),delete r.timeout),// clear the restore focus timeout
clearTimeout(r.restoreFocusTimeout);let i=nm(e);return e4(e,n),eO.innerParams.set(e,n),nd(e,i,n)}// `catch` cannot be the name of a module export, so we define our thenable methods here instead
then(e){return this.#e.then(e)}finally(e){return this.#e.finally(e)}}/**
 * @param {SweetAlert} instance
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 * @returns {Promise}
 */let nd=(e,t,o)=>new Promise((i,a)=>{// functions to handle all closings/dismissals
    /**
     * @param {DismissReason} dismiss
     */let l=t=>{e.close({isDismissed:!0,dismiss:t})};tm.swalPromiseResolve.set(e,i),tm.swalPromiseReject.set(e,a),t.confirmButton.onclick=()=>{(0,n.handleConfirmButtonClick)(e)},t.denyButton.onclick=()=>{(0,n.handleDenyButtonClick)(e)},t.cancelButton.onclick=()=>{(0,n.handleCancelButtonClick)(e,l)},t.closeButton.onclick=()=>{l(to.close)},ox(o,t,l),ti(r,o,l),tq(e,o),ni(o),ng(r,o,l),nh(t,o),// Scroll container to top on open (#1247, #1946)
    setTimeout(()=>{t.container.scrollTop=0})}),np=(e,t)=>{let o=o3(e),n=Object.assign({},oc,t,o,e)// precedence is described in #2131
;return n.showClass=Object.assign({},oc.showClass,n.showClass),n.hideClass=Object.assign({},oc.hideClass,n.hideClass),n},nm=e=>{let t={popup:E(),container:k(),actions:q(),confirmButton:j(),denyButton:H(),cancelButton:I(),loader:V(),closeButton:R(),validationMessage:M(),progressSteps:O()};return eO.domCache.set(e,t),t},ng=(e,t,o)=>{let n=F();ea(n),t.timer&&(e.timeout=new o2(()=>{o("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(er(n),X(n,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&em(t.timer)})))},nh=(e,t)=>{if(!t.toast){if(!w(t.allowEnterKey)){nb();return}nf(e,t)||tr(-1,1)}},nf=(e,t)=>t.focusDeny&&eu(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&eu(e.cancelButton)?(e.cancelButton.focus(),!0):!!(t.focusConfirm&&eu(e.confirmButton))&&(e.confirmButton.focus(),!0),nb=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};// Dear russian users visiting russian sites. Let's have fun.
if("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){let e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout(()=>{document.body.style.pointerEvents="none";let e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout(()=>{e.play().catch(()=>{// ignore
})},2500)},500):localStorage.setItem("swal-initiation",`${e}`)}// Assign instance methods from src/instanceMethods/*.js to prototype
nc.prototype.disableButtons=t9.disableButtons,nc.prototype.enableButtons=t9.enableButtons,nc.prototype.getInput=t9.getInput,nc.prototype.disableInput=t9.disableInput,nc.prototype.enableInput=t9.enableInput,nc.prototype.hideLoading=t9.hideLoading,nc.prototype.disableLoading=t9.disableLoading,nc.prototype.showValidationMessage=t9.showValidationMessage,nc.prototype.resetValidationMessage=t9.resetValidationMessage,nc.prototype.close=t9.close,nc.prototype.closePopup=t9.closePopup,nc.prototype.closeModal=t9.closeModal,nc.prototype.closeToast=t9.closeToast,nc.prototype.rejectPromise=t9.rejectPromise,nc.prototype.update=t9.update,nc.prototype._destroy=t9._destroy,// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(nc,oI),// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(t9).forEach(t=>{/**
   * @param {...any} args
   * @returns {any | undefined}
   */nc[t]=function(...o){return e&&e[t]?e[t](...o):null}}),nc.DismissReason=to,nc.version="11.7.28",// @ts-ignore
nc.default=nc;var ny=nc;ny.fire({title:"Hello from parcel!",html:`SweetAlert2 version ${ny.version}`})})();