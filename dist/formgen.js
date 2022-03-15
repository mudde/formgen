(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MuddeFormgen"] = factory();
	else
		root["MuddeFormgen"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js ***!
  \**************************************************************************/
/***/ ((module, exports) => {

/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=108)}([function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));class n extends Error{constructor(e,t,i){super(`${e}${i?" "+JSON.stringify(i):""}${r(e)}`),this.name="CKEditorError",this.context=t,this.data=i}is(e){return"CKEditorError"===e}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const i=new n(e.message,t);throw i.stack=e.stack,i}}function o(e,t){console.warn(...s(e,t))}function r(e){return"\nRead more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-"+e}function s(e,t){const i=r(e);return t?[e,t,i]:[e,i]}},function(e,t,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function a(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=a(d),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:p(h,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var g=null,m=0;function p(e,t){var i,n,o;if(t.singleton){var r=m++;i=g||(g=l(t)),n=h.bind(null,i,r,!1),o=h.bind(null,i,r,!0)}else i=l(t),n=f.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);s[o].references--}for(var r=c(e,t),l=0;l<i.length;l++){var d=a(i[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=r}}}},,function(e,t,i){"use strict";var n=i(8),o="object"==typeof self&&self&&self.Object===Object&&self,r=n.a||o||Function("return this")();t.a=r},function(e,t,i){"use strict";(function(e){var n=i(3),o=i(13),r= true&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof e&&e&&!e.nodeType&&e,a=s&&s.exports===r?n.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;t.a=c}).call(this,i(10)(e))},function(e,t,i){"use strict";(function(e){var n=i(8),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=r&&r.exports===o&&n.a.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(e){}}();t.a=a}).call(this,i(10)(e))},function(e,t,i){"use strict";(function(e){var t=i(0);const n="object"==typeof window?window:e;if(n.CKEDITOR_VERSION)throw new t.a("ckeditor-duplicated-modules",null);n.CKEDITOR_VERSION="27.1.0"}).call(this,i(11))},function(e,t,i){var n=i(1),o=i(75);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.a=i}).call(this,i(11))},function(e,t,i){"use strict";(function(e){var n=i(3),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=r&&r.exports===o?n.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;t.a=function(e,t){if(t)return e.slice();var i=e.length,n=a?a(i):new e.constructor(i);return e.copy(n),n}}).call(this,i(10)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){var n=i(1),o=i(70);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";t.a=function(){return!1}},function(e,t,i){var n=i(1),o=i(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(e,t,i){var n=i(1),o=i(17);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(e,t,i){var n=i(1),o=i(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_sw{right:50%;left:auto}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{right:auto;left:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{right:auto;left:0;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:transparent;border-bottom-color:transparent;border-right-color:var(--ck-color-tooltip-background);border-top-color:transparent;border-left-width:0;border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_w{right:calc(100% + var(--ck-tooltip-arrow-size));left:auto;top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:var(--ck-color-tooltip-background);border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:0;border-top-width:var(--ck-tooltip-arrow-size)}'},function(e,t,i){var n=i(1),o=i(21);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(var(--ck-spacing-small)*-1);margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(e,t,i){var n=i(1),o=i(23);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*0.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var(--ck-switch-button-translation)*-1))}"},function(e,t,i){var n=i(1),o=i(25);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}"},function(e,t,i){var n=i(1),o=i(27);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}"},function(e,t,i){var n=i(1),o=i(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);max-width:var(--ck-dropdown-max-width);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}"},function(e,t,i){var n=i(1),o=i(31);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;background:var(--ck-color-toolbar-border);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}"},function(e,t,i){var n=i(1),o=i(33);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(e,t,i){var n=i(1),o=i(35);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{width:max-content;max-width:var(--ck-toolbar-dropdown-max-width)}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(e,t,i){var n=i(1),o=i(37);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(e,t,i){var n=i(1),o=i(39);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(e,t,i){var n=i(1),o=i(41);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(e,t,i){var n=i(1),o=i(43);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-form__header{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{padding:var(--ck-spacing-small) var(--ck-spacing-large);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-form__header .ck-form__header__label{font-weight:700}"},function(e,t,i){var n=i(1),o=i(45);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(e,t,i){var n=i(1),o=i(47);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{pointer-events:none;transform-origin:0 0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);background:var(--ck-color-labeled-field-label-background);padding:0 calc(var(--ck-font-size-tiny)*0.5);line-height:normal;font-weight:400;text-overflow:ellipsis;overflow:hidden;max-width:100%;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*0.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*0.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));background:transparent;padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}"},function(e,t,i){var n=i(1),o=i(49);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border);filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}'},function(e,t,i){var n=i(1),o=i(51);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"},function(e,t,i){var n=i(1),o=i(53);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"},function(e,t,i){var n=i(1),o=i(55);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(e,t,i){var n=i(1),o=i(57);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}"},function(e,t,i){var n=i(1),o=i(59);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-placeholder,.ck .ck-placeholder{position:relative}.ck.ck-placeholder:before,.ck .ck-placeholder:before{position:absolute;left:0;right:0;content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(e,t,i){var n=i(1),o=i(61);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(e,t,i){var n=i(1),o=i(63);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(var(--ck-widget-outline-thickness)*-0.5);left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-0.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}'},function(e,t,i){var n=i(1),o=i(65);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}"},function(e,t,i){var n=i(1),o=i(67);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;position:relative;pointer-events:none}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-left:-1px}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{content:"";width:0;height:0;display:block;position:absolute;left:50%;top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);transform:translateX(-50%);border-left:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-bottom:0 solid transparent;border-right:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-top:calc(var(--ck-clipboard-drop-target-dot-height)) solid var(--ck-clipboard-drop-target-color)}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}'},function(e,t,i){var n=i(1),o=i(69);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"},function(e,t){e.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(e,t,i){var n=i(1),o=i(72);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}"},function(e,t,i){var n=i(1),o=i(74);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}"},function(e,t){e.exports='.ck-vertical-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-text-width)*0.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-large);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}'},function(e,t,i){var n=i(1),o=i(77);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:50px}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{position:static}"},function(e,t,i){var n=i(1),o=i(79);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(e,t,i){var n=i(1),o=i(81);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(e,t,i){var n=i(1),o=i(83);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(e,t,i){var n=i(1),o=i(85);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(e,t,i){var n=i(1),o=i(87);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(e,t,i){var n=i(1),o=i(89);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}"},function(e,t,i){var n=i(1),o=i(91);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"},function(e,t,i){var n=i(1),o=i(93);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}"},function(e,t,i){var n=i(1),o=i(95);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(var(--ck-spacing-standard)*3);background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(e,t,i){var n=i(1),o=i(97);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}"},function(e,t,i){var n=i(1),o=i(99);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"},function(e,t,i){var n=i(1),o=i(101);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(e,t,i){var n=i(1),o=i(103);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}"},function(e,t,i){var n=i(1),o=i(105);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget_selected{outline:unset}'},function(e,t,i){var n=i(1),o=i(107);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}"},function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return _w}));var n=function(){return function e(){e.called=!0}};class o{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=n(),this.off=n()}}const r=new Array(256).fill().map((e,t)=>("0"+t.toString(16)).slice(-2));function s(){const e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+r[e>>0&255]+r[e>>8&255]+r[e>>16&255]+r[e>>24&255]+r[t>>0&255]+r[t>>8&255]+r[t>>16&255]+r[t>>24&255]+r[i>>0&255]+r[i>>8&255]+r[i>>16&255]+r[i>>24&255]+r[n>>0&255]+r[n>>8&255]+r[n>>16&255]+r[n>>24&255]}var a={get(e){return"number"!=typeof e?this[e]||this.normal:e},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5},c=(i(6),i(0));const l=Symbol("listeningTo"),d=Symbol("emitterId");var u={on(e,t,i={}){this.listenTo(this,e,t,i)},once(e,t,i){let n=!1;this.listenTo(this,e,(function(e,...i){n||(n=!0,e.off(),t.call(this,e,...i))}),i)},off(e,t){this.stopListening(this,e,t)},listenTo(e,t,i,n={}){let o,r;this[l]||(this[l]={});const s=this[l];f(e)||h(e);const a=f(e);(o=s[a])||(o=s[a]={emitter:e,callbacks:{}}),(r=o.callbacks[t])||(r=o.callbacks[t]=[]),r.push(i),function(e,t,i,n,o){t._addEventListener?t._addEventListener(i,n,o):e._addEventListener.call(t,i,n,o)}(this,e,t,i,n)},stopListening(e,t,i){const n=this[l];let o=e&&f(e);const r=n&&o&&n[o],s=r&&t&&r.callbacks[t];if(!(!n||e&&!r||t&&!s))if(i){b(this,e,t,i);-1!==s.indexOf(i)&&(1===s.length?delete r.callbacks[t]:b(this,e,t,i))}else if(s){for(;i=s.pop();)b(this,e,t,i);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(e,t);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[l]}},fire(e,...t){try{const i=e instanceof o?e:new o(this,e),n=i.name;let r=function e(t,i){let n;if(!t._events||!(n=t._events[i])||!n.callbacks.length)return i.indexOf(":")>-1?e(t,i.substr(0,i.lastIndexOf(":"))):null;return n.callbacks}(this,n);if(i.path.push(this),r){const e=[i,...t];r=Array.from(r);for(let t=0;t<r.length&&(r[t].callback.apply(this,e),i.off.called&&(delete i.off.called,this._removeEventListener(n,r[t].callback)),!i.stop.called);t++);}if(this._delegations){const e=this._delegations.get(n),o=this._delegations.get("*");e&&p(e,i,t),o&&p(o,i,t)}return i.return}catch(e){c.a.rethrowUnexpectedError(e,this)}},delegate(...e){return{to:(t,i)=>{this._delegations||(this._delegations=new Map),e.forEach(e=>{const n=this._delegations.get(e);n?n.set(t,i):this._delegations.set(e,new Map([[t,i]]))})}}},stopDelegating(e,t){if(this._delegations)if(e)if(t){const i=this._delegations.get(e);i&&i.delete(t)}else this._delegations.delete(e);else this._delegations.clear()},_addEventListener(e,t,i){!function(e,t){const i=g(e);if(i[t])return;let n=t,o=null;const r=[];for(;""!==n&&!i[n];)i[n]={callbacks:[],childEvents:[]},r.push(i[n]),o&&i[n].childEvents.push(o),o=n,n=n.substr(0,n.lastIndexOf(":"));if(""!==n){for(const e of r)e.callbacks=i[n].callbacks.slice();i[n].childEvents.push(o)}}(this,e);const n=m(this,e),o=a.get(i.priority),r={callback:t,priority:o};for(const e of n){let t=!1;for(let i=0;i<e.length;i++)if(e[i].priority<o){e.splice(i,0,r),t=!0;break}t||e.push(r)}},_removeEventListener(e,t){const i=m(this,e);for(const e of i)for(let i=0;i<e.length;i++)e[i].callback==t&&(e.splice(i,1),i--)}};function h(e,t){e[d]||(e[d]=t||s())}function f(e){return e[d]}function g(e){return e._events||Object.defineProperty(e,"_events",{value:{}}),e._events}function m(e,t){const i=g(e)[t];if(!i)return[];let n=[i.callbacks];for(let t=0;t<i.childEvents.length;t++){const o=m(e,i.childEvents[t]);n=n.concat(o)}return n}function p(e,t,i){for(let[n,r]of e){r?"function"==typeof r&&(r=r(t.name)):r=t.name;const e=new o(t.source,r);e.path=[...t.path],n.fire(e,...i)}}function b(e,t,i,n){t._removeEventListener?t._removeEventListener(i,n):e._removeEventListener.call(t,i,n)}var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k=i(3),_=k.a.Symbol,v=Object.prototype,y=v.hasOwnProperty,x=v.toString,A=_?_.toStringTag:void 0;var C=function(e){var t=y.call(e,A),i=e[A];try{e[A]=void 0;var n=!0}catch(e){}var o=x.call(e);return n&&(t?e[A]=i:delete e[A]),o},T=Object.prototype.toString;var E=function(e){return T.call(e)},P=_?_.toStringTag:void 0;var S=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":P&&P in Object(e)?C(e):E(e)};var M,I=function(e){if(!w(e))return!1;var t=S(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=k.a["__core-js_shared__"],R=(M=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var O=function(e){return!!R&&R in e},D=Function.prototype.toString;var L=function(e){if(null!=e){try{return D.call(e)}catch(e){}try{return e+""}catch(e){}}return""},z=/^\[object .+?Constructor\]$/,V=Function.prototype,j=Object.prototype,B=V.toString,F=j.hasOwnProperty,H=RegExp("^"+B.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var U=function(e){return!(!w(e)||O(e))&&(I(e)?H:z).test(L(e))};var W=function(e,t){return null==e?void 0:e[t]};var q=function(e,t){var i=W(e,t);return U(i)?i:void 0},$=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var Y=function(e,t,i){"__proto__"==t&&$?$(e,t,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[t]=i};var G=function(e,t){return e===t||e!=e&&t!=t},K=Object.prototype.hasOwnProperty;var Q=function(e,t,i){var n=e[t];K.call(e,t)&&G(n,i)&&(void 0!==i||t in e)||Y(e,t,i)};var J=function(e,t,i,n){var o=!i;i||(i={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(i[a],e[a],a,i,e):void 0;void 0===c&&(c=e[a]),o?Y(i,a,c):Q(i,a,c)}return i};var Z=function(e){return e};var X=function(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)},ee=Math.max;var te=function(e,t,i){return t=ee(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,r=ee(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=i(s),X(e,this,a)}};var ie=function(e){return function(){return e}},ne=$?function(e,t){return $(e,"toString",{configurable:!0,enumerable:!1,value:ie(t),writable:!0})}:Z,oe=Date.now;var re=function(e){var t=0,i=0;return function(){var n=oe(),o=16-(n-i);if(i=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(ne);var se=function(e,t){return re(te(e,t,Z),e+"")};var ae=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ce=function(e){return null!=e&&ae(e.length)&&!I(e)},le=/^(?:0|[1-9]\d*)$/;var de=function(e,t){var i=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==i||"symbol"!=i&&le.test(e))&&e>-1&&e%1==0&&e<t};var ue=function(e,t,i){if(!w(i))return!1;var n=typeof t;return!!("number"==n?ce(i)&&de(t,i.length):"string"==n&&t in i)&&G(i[t],e)};var he=function(e){return se((function(t,i){var n=-1,o=i.length,r=o>1?i[o-1]:void 0,s=o>2?i[2]:void 0;for(r=e.length>3&&"function"==typeof r?(o--,r):void 0,s&&ue(i[0],i[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=i[n];a&&e(t,a,n,r)}return t}))};var fe=function(e,t){for(var i=-1,n=Array(e);++i<e;)n[i]=t(i);return n};var ge=function(e){return null!=e&&"object"==typeof e};var me=function(e){return ge(e)&&"[object Arguments]"==S(e)},pe=Object.prototype,be=pe.hasOwnProperty,we=pe.propertyIsEnumerable,ke=me(function(){return arguments}())?me:function(e){return ge(e)&&be.call(e,"callee")&&!we.call(e,"callee")},_e=Array.isArray,ve=i(4),ye={};ye["[object Float32Array]"]=ye["[object Float64Array]"]=ye["[object Int8Array]"]=ye["[object Int16Array]"]=ye["[object Int32Array]"]=ye["[object Uint8Array]"]=ye["[object Uint8ClampedArray]"]=ye["[object Uint16Array]"]=ye["[object Uint32Array]"]=!0,ye["[object Arguments]"]=ye["[object Array]"]=ye["[object ArrayBuffer]"]=ye["[object Boolean]"]=ye["[object DataView]"]=ye["[object Date]"]=ye["[object Error]"]=ye["[object Function]"]=ye["[object Map]"]=ye["[object Number]"]=ye["[object Object]"]=ye["[object RegExp]"]=ye["[object Set]"]=ye["[object String]"]=ye["[object WeakMap]"]=!1;var xe=function(e){return ge(e)&&ae(e.length)&&!!ye[S(e)]};var Ae=function(e){return function(t){return e(t)}},Ce=i(5),Te=Ce.a&&Ce.a.isTypedArray,Ee=Te?Ae(Te):xe,Pe=Object.prototype.hasOwnProperty;var Se=function(e,t){var i=_e(e),n=!i&&ke(e),o=!i&&!n&&Object(ve.a)(e),r=!i&&!n&&!o&&Ee(e),s=i||n||o||r,a=s?fe(e.length,String):[],c=a.length;for(var l in e)!t&&!Pe.call(e,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||de(l,c))||a.push(l);return a},Me=Object.prototype;var Ie=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)};var Ne=function(e){var t=[];if(null!=e)for(var i in Object(e))t.push(i);return t},Re=Object.prototype.hasOwnProperty;var Oe=function(e){if(!w(e))return Ne(e);var t=Ie(e),i=[];for(var n in e)("constructor"!=n||!t&&Re.call(e,n))&&i.push(n);return i};var De=function(e){return ce(e)?Se(e,!0):Oe(e)},Le=he((function(e,t){J(t,De(t),e)}));const ze=Symbol("observableProperties"),Ve=Symbol("boundObservables"),je=Symbol("boundProperties"),Be=Symbol("decoratedMethods"),Fe=Symbol("decoratedOriginal"),He={set(e,t){if(w(e))return void Object.keys(e).forEach(t=>{this.set(t,e[t])},this);We(this);const i=this[ze];if(e in this&&!i.has(e))throw new c.a("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i.get(e),set(t){const n=i.get(e);let o=this.fire("set:"+e,e,t,n);void 0===o&&(o=t),n===o&&i.has(e)||(i.set(e,o),this.fire("change:"+e,e,o,n))}}),this[e]=t},bind(...e){if(!e.length||!Ye(e))throw new c.a("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new c.a("observable-bind-duplicate-properties",this);We(this);const t=this[je];e.forEach(e=>{if(t.has(e))throw new c.a("observable-bind-rebind",this)});const i=new Map;return e.forEach(e=>{const n={property:e,to:[]};t.set(e,n),i.set(e,n)}),{to:qe,toMany:$e,_observable:this,_bindProperties:e,_to:[],_bindings:i}},unbind(...e){if(!this[ze])return;const t=this[je],i=this[Ve];if(e.length){if(!Ye(e))throw new c.a("observable-unbind-wrong-properties",this);e.forEach(e=>{const n=t.get(e);if(!n)return;let o,r,s,a;n.to.forEach(e=>{o=e[0],r=e[1],s=i.get(o),a=s[r],a.delete(n),a.size||delete s[r],Object.keys(s).length||(i.delete(o),this.stopListening(o,"change"))}),t.delete(e)})}else i.forEach((e,t)=>{this.stopListening(t,"change")}),i.clear(),t.clear()},decorate(e){const t=this[e];if(!t)throw new c.a("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(e,i)=>{e.return=t.apply(this,i)}),this[e]=function(...t){return this.fire(e,t)},this[e][Fe]=t,this[Be]||(this[Be]=[]),this[Be].push(e)}};Le(He,u),He.stopListening=function(e,t,i){if(!e&&this[Be]){for(const e of this[Be])this[e]=this[e][Fe];delete this[Be]}u.stopListening.call(this,e,t,i)};var Ue=He;function We(e){e[ze]||(Object.defineProperty(e,ze,{value:new Map}),Object.defineProperty(e,Ve,{value:new Map}),Object.defineProperty(e,je,{value:new Map}))}function qe(...e){const t=function(...e){if(!e.length)throw new c.a("observable-bind-to-parse-error",null);const t={to:[]};let i;"function"==typeof e[e.length-1]&&(t.callback=e.pop());return e.forEach(e=>{if("string"==typeof e)i.properties.push(e);else{if("object"!=typeof e)throw new c.a("observable-bind-to-parse-error",null);i={observable:e,properties:[]},t.to.push(i)}}),t}(...e),i=Array.from(this._bindings.keys()),n=i.length;if(!t.callback&&t.to.length>1)throw new c.a("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new c.a("observable-bind-to-extra-callback",this);var o;t.to.forEach(e=>{if(e.properties.length&&e.properties.length!==n)throw new c.a("observable-bind-to-properties-length",this);e.properties.length||(e.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(i[0]).callback=t.callback),o=this._observable,this._to.forEach(e=>{const t=o[Ve];let i;t.get(e.observable)||o.listenTo(e.observable,"change",(n,r)=>{i=t.get(e.observable)[r],i&&i.forEach(e=>{Ge(o,e.property)})})}),function(e){let t;e._bindings.forEach((i,n)=>{e._to.forEach(o=>{t=o.properties[i.callback?0:e._bindProperties.indexOf(n)],i.to.push([o.observable,t]),function(e,t,i,n){const o=e[Ve],r=o.get(i),s=r||{};s[n]||(s[n]=new Set);s[n].add(t),r||o.set(i,s)}(e._observable,i,o.observable,t)})})}(this),this._bindProperties.forEach(e=>{Ge(this._observable,e)})}function $e(e,t,i){if(this._bindings.size>1)throw new c.a("observable-bind-to-many-not-one-binding",this);this.to(...function(e,t){const i=e.map(e=>[e,t]);return Array.prototype.concat.apply([],i)}(e,t),i)}function Ye(e){return e.every(e=>"string"==typeof e)}function Ge(e,t){const i=e[je].get(t);let n;i.callback?n=i.callback.apply(e,i.to.map(e=>e[0][e[1]])):(n=i.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(e,t)?e[t]=n:e.set(t,n)}function Ke(e,...t){t.forEach(t=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach(i=>{if(i in e.prototype)return;const n=Object.getOwnPropertyDescriptor(t,i);n.enumerable=!1,Object.defineProperty(e.prototype,i,n)})})}class Qe{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),1==this._disableStack.size&&(this.on("set:isEnabled",Je,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),0==this._disableStack.size&&(this.off("set:isEnabled",Je),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Je(e){e.return=!1,e.stop()}Ke(Qe,Ue);class Ze{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(e,t,i)=>{i?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),1==this._disableStack.size&&(this.on("set:isEnabled",Xe,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),0==this._disableStack.size&&(this.off("set:isEnabled",Xe),this.refresh())}execute(){}destroy(){this.stopListening()}}function Xe(e){e.return=!1,e.stop()}Ke(Ze,Ue);class et extends Ze{constructor(e){super(e),this._childCommands=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return null!=t&&t.execute(e)}registerChildCommand(e){this._childCommands.push(e),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(e=>e.isEnabled)}}var tt=function(e,t){return function(i){return e(t(i))}},it=tt(Object.getPrototypeOf,Object),nt=Function.prototype,ot=Object.prototype,rt=nt.toString,st=ot.hasOwnProperty,at=rt.call(Object);var ct=function(e){if(!ge(e)||"[object Object]"!=S(e))return!1;var t=it(e);if(null===t)return!0;var i=st.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&rt.call(i)==at};var lt=function(){this.__data__=[],this.size=0};var dt=function(e,t){for(var i=e.length;i--;)if(G(e[i][0],t))return i;return-1},ut=Array.prototype.splice;var ht=function(e){var t=this.__data__,i=dt(t,e);return!(i<0)&&(i==t.length-1?t.pop():ut.call(t,i,1),--this.size,!0)};var ft=function(e){var t=this.__data__,i=dt(t,e);return i<0?void 0:t[i][1]};var gt=function(e){return dt(this.__data__,e)>-1};var mt=function(e,t){var i=this.__data__,n=dt(i,e);return n<0?(++this.size,i.push([e,t])):i[n][1]=t,this};function pt(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=lt,pt.prototype.delete=ht,pt.prototype.get=ft,pt.prototype.has=gt,pt.prototype.set=mt;var bt=pt;var wt=function(){this.__data__=new bt,this.size=0};var kt=function(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i};var _t=function(e){return this.__data__.get(e)};var vt=function(e){return this.__data__.has(e)},yt=q(k.a,"Map"),xt=q(Object,"create");var At=function(){this.__data__=xt?xt(null):{},this.size=0};var Ct=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Tt=Object.prototype.hasOwnProperty;var Et=function(e){var t=this.__data__;if(xt){var i=t[e];return"__lodash_hash_undefined__"===i?void 0:i}return Tt.call(t,e)?t[e]:void 0},Pt=Object.prototype.hasOwnProperty;var St=function(e){var t=this.__data__;return xt?void 0!==t[e]:Pt.call(t,e)};var Mt=function(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=xt&&void 0===t?"__lodash_hash_undefined__":t,this};function It(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}It.prototype.clear=At,It.prototype.delete=Ct,It.prototype.get=Et,It.prototype.has=St,It.prototype.set=Mt;var Nt=It;var Rt=function(){this.size=0,this.__data__={hash:new Nt,map:new(yt||bt),string:new Nt}};var Ot=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dt=function(e,t){var i=e.__data__;return Ot(t)?i["string"==typeof t?"string":"hash"]:i.map};var Lt=function(e){var t=Dt(this,e).delete(e);return this.size-=t?1:0,t};var zt=function(e){return Dt(this,e).get(e)};var Vt=function(e){return Dt(this,e).has(e)};var jt=function(e,t){var i=Dt(this,e),n=i.size;return i.set(e,t),this.size+=i.size==n?0:1,this};function Bt(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}Bt.prototype.clear=Rt,Bt.prototype.delete=Lt,Bt.prototype.get=zt,Bt.prototype.has=Vt,Bt.prototype.set=jt;var Ft=Bt;var Ht=function(e,t){var i=this.__data__;if(i instanceof bt){var n=i.__data__;if(!yt||n.length<199)return n.push([e,t]),this.size=++i.size,this;i=this.__data__=new Ft(n)}return i.set(e,t),this.size=i.size,this};function Ut(e){var t=this.__data__=new bt(e);this.size=t.size}Ut.prototype.clear=wt,Ut.prototype.delete=kt,Ut.prototype.get=_t,Ut.prototype.has=vt,Ut.prototype.set=Ht;var Wt=Ut;var qt=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n&&!1!==t(e[i],i,e););return e},$t=tt(Object.keys,Object),Yt=Object.prototype.hasOwnProperty;var Gt=function(e){if(!Ie(e))return $t(e);var t=[];for(var i in Object(e))Yt.call(e,i)&&"constructor"!=i&&t.push(i);return t};var Kt=function(e){return ce(e)?Se(e):Gt(e)};var Qt=function(e,t){return e&&J(t,Kt(t),e)};var Jt=function(e,t){return e&&J(t,De(t),e)},Zt=i(9);var Xt=function(e,t){var i=-1,n=e.length;for(t||(t=Array(n));++i<n;)t[i]=e[i];return t};var ei=function(e,t){for(var i=-1,n=null==e?0:e.length,o=0,r=[];++i<n;){var s=e[i];t(s,i,e)&&(r[o++]=s)}return r};var ti=function(){return[]},ii=Object.prototype.propertyIsEnumerable,ni=Object.getOwnPropertySymbols,oi=ni?function(e){return null==e?[]:(e=Object(e),ei(ni(e),(function(t){return ii.call(e,t)})))}:ti;var ri=function(e,t){return J(e,oi(e),t)};var si=function(e,t){for(var i=-1,n=t.length,o=e.length;++i<n;)e[o+i]=t[i];return e},ai=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)si(t,oi(e)),e=it(e);return t}:ti;var ci=function(e,t){return J(e,ai(e),t)};var li=function(e,t,i){var n=t(e);return _e(e)?n:si(n,i(e))};var di=function(e){return li(e,Kt,oi)};var ui=function(e){return li(e,De,ai)},hi=q(k.a,"DataView"),fi=q(k.a,"Promise"),gi=q(k.a,"Set"),mi=q(k.a,"WeakMap"),pi=L(hi),bi=L(yt),wi=L(fi),ki=L(gi),_i=L(mi),vi=S;(hi&&"[object DataView]"!=vi(new hi(new ArrayBuffer(1)))||yt&&"[object Map]"!=vi(new yt)||fi&&"[object Promise]"!=vi(fi.resolve())||gi&&"[object Set]"!=vi(new gi)||mi&&"[object WeakMap]"!=vi(new mi))&&(vi=function(e){var t=S(e),i="[object Object]"==t?e.constructor:void 0,n=i?L(i):"";if(n)switch(n){case pi:return"[object DataView]";case bi:return"[object Map]";case wi:return"[object Promise]";case ki:return"[object Set]";case _i:return"[object WeakMap]"}return t});var yi=vi,xi=Object.prototype.hasOwnProperty;var Ai=function(e){var t=e.length,i=new e.constructor(t);return t&&"string"==typeof e[0]&&xi.call(e,"index")&&(i.index=e.index,i.input=e.input),i},Ci=k.a.Uint8Array;var Ti=function(e){var t=new e.constructor(e.byteLength);return new Ci(t).set(new Ci(e)),t};var Ei=function(e,t){var i=t?Ti(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)},Pi=/\w*$/;var Si=function(e){var t=new e.constructor(e.source,Pi.exec(e));return t.lastIndex=e.lastIndex,t},Mi=_?_.prototype:void 0,Ii=Mi?Mi.valueOf:void 0;var Ni=function(e){return Ii?Object(Ii.call(e)):{}};var Ri=function(e,t){var i=t?Ti(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)};var Oi=function(e,t,i){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return Ti(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return Ei(e,i);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ri(e,i);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return Si(e);case"[object Set]":return new n;case"[object Symbol]":return Ni(e)}},Di=Object.create,Li=function(){function e(){}return function(t){if(!w(t))return{};if(Di)return Di(t);e.prototype=t;var i=new e;return e.prototype=void 0,i}}();var zi=function(e){return"function"!=typeof e.constructor||Ie(e)?{}:Li(it(e))};var Vi=function(e){return ge(e)&&"[object Map]"==yi(e)},ji=Ce.a&&Ce.a.isMap,Bi=ji?Ae(ji):Vi;var Fi=function(e){return ge(e)&&"[object Set]"==yi(e)},Hi=Ce.a&&Ce.a.isSet,Ui=Hi?Ae(Hi):Fi,Wi={};Wi["[object Arguments]"]=Wi["[object Array]"]=Wi["[object ArrayBuffer]"]=Wi["[object DataView]"]=Wi["[object Boolean]"]=Wi["[object Date]"]=Wi["[object Float32Array]"]=Wi["[object Float64Array]"]=Wi["[object Int8Array]"]=Wi["[object Int16Array]"]=Wi["[object Int32Array]"]=Wi["[object Map]"]=Wi["[object Number]"]=Wi["[object Object]"]=Wi["[object RegExp]"]=Wi["[object Set]"]=Wi["[object String]"]=Wi["[object Symbol]"]=Wi["[object Uint8Array]"]=Wi["[object Uint8ClampedArray]"]=Wi["[object Uint16Array]"]=Wi["[object Uint32Array]"]=!0,Wi["[object Error]"]=Wi["[object Function]"]=Wi["[object WeakMap]"]=!1;var qi=function e(t,i,n,o,r,s){var a,c=1&i,l=2&i,d=4&i;if(n&&(a=r?n(t,o,r,s):n(t)),void 0!==a)return a;if(!w(t))return t;var u=_e(t);if(u){if(a=Ai(t),!c)return Xt(t,a)}else{var h=yi(t),f="[object Function]"==h||"[object GeneratorFunction]"==h;if(Object(ve.a)(t))return Object(Zt.a)(t,c);if("[object Object]"==h||"[object Arguments]"==h||f&&!r){if(a=l||f?{}:zi(t),!c)return l?ci(t,Jt(a,t)):ri(t,Qt(a,t))}else{if(!Wi[h])return r?t:{};a=Oi(t,h,c)}}s||(s=new Wt);var g=s.get(t);if(g)return g;s.set(t,a),Ui(t)?t.forEach((function(o){a.add(e(o,i,n,o,t,s))})):Bi(t)&&t.forEach((function(o,r){a.set(r,e(o,i,n,r,t,s))}));var m=u?void 0:(d?l?ui:di:l?De:Kt)(t);return qt(m||t,(function(o,r){m&&(o=t[r=o]),Q(a,r,e(o,i,n,r,t,s))})),a};var $i=function(e,t){return qi(e,5,t="function"==typeof t?t:void 0)};var Yi=function(e){return ge(e)&&1===e.nodeType&&!ct(e)};class Gi{constructor(e,t){this._config={},t&&this.define(Ki(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,i,n=!1){if(ct(t))return void this._setObjectToTarget(e,t,n);const o=t.split(".");t=o.pop();for(const t of o)ct(e[t])||(e[t]={}),e=e[t];if(ct(i))return ct(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,i,n);n&&void 0!==e[t]||(e[t]=i)}_getFromSource(e,t){const i=t.split(".");t=i.pop();for(const t of i){if(!ct(e[t])){e=null;break}e=e[t]}return e?Ki(e[t]):void 0}_setObjectToTarget(e,t,i){Object.keys(t).forEach(n=>{this._setToTarget(e,n,t[n],i)})}}function Ki(e){return $i(e,Qi)}function Qi(e){return Yi(e)?e:void 0}function Ji(e){return!(!e||!e[Symbol.iterator])}class Zi{constructor(e={},t={}){const i=Ji(e);if(i||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],i)for(const t of e)this._items.push(t),this._itemMap.set(this._getItemIdBeforeAdding(t),t)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(void 0===t)t=this._items.length;else if(t>this._items.length||t<0)throw new c.a("collection-add-item-invalid-index",this);for(let i=0;i<e.length;i++){const n=e[i],o=this._getItemIdBeforeAdding(n),r=t+i;this._items.splice(r,0,n),this._itemMap.set(o,n),this.fire("add",n,r)}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if("string"==typeof e)t=this._itemMap.get(e);else{if("number"!=typeof e)throw new c.a("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if("string"==typeof e)return this._itemMap.has(e);{const t=e[this._idProperty];return this._itemMap.has(t)}}getIndex(e){let t;return t="string"==typeof e?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){const[t,i]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:i}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new c.a("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:e=>{this._setUpBindToBinding(t=>new e(t))},using:e=>{"function"==typeof e?this._setUpBindToBinding(t=>e(t)):this._setUpBindToBinding(t=>t[e])}}}_setUpBindToBinding(e){const t=this._bindToCollection,i=(i,n,o)=>{const r=t._bindToCollection==this,s=t._bindToInternalToExternalMap.get(n);if(r&&s)this._bindToExternalToInternalMap.set(n,s),this._bindToInternalToExternalMap.set(s,n);else{const i=e(n);if(!i)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const e of this._skippedIndexesFromExternal)o>e&&r--;for(const e of t._skippedIndexesFromExternal)r>=e&&r++;this._bindToExternalToInternalMap.set(n,i),this._bindToInternalToExternalMap.set(i,n),this.add(i,r);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)r<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++}};for(const e of t)i(0,e,t.getIndex(e));this.listenTo(t,"add",i),this.listenTo(t,"remove",(e,t,i)=>{const n=this._bindToExternalToInternalMap.get(t);n&&this.remove(n),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((e,t)=>(i<t&&e.push(t-1),i>t&&e.push(t),e),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let i;if(t in e){if(i=e[t],"string"!=typeof i)throw new c.a("collection-add-invalid-id",this);if(this.get(i))throw new c.a("collection-add-item-already-exists",this)}else e[t]=i=s();return i}_remove(e){let t,i,n,o=!1;const r=this._idProperty;if("string"==typeof e?(i=e,n=this._itemMap.get(i),o=!n,n&&(t=this._items.indexOf(n))):"number"==typeof e?(t=e,n=this._items[t],o=!n,n&&(i=n[r])):(n=e,i=n[r],t=this._items.indexOf(n),o=-1==t||!this._itemMap.get(i)),o)throw new c.a("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(i);const s=this._bindToInternalToExternalMap.get(n);return this._bindToInternalToExternalMap.delete(n),this._bindToExternalToInternalMap.delete(s),this.fire("remove",n,t),[n,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}Ke(Zi,u);class Xi{constructor(e,t=[],i=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const e of t)e.pluginName&&this._availablePlugins.set(e.pluginName,e);this._contextPlugins=new Map;for(const[e,t]of i)this._contextPlugins.set(e,t),this._contextPlugins.set(t,e),e.pluginName&&this._availablePlugins.set(e.pluginName,e)}*[Symbol.iterator](){for(const e of this._plugins)"function"==typeof e[0]&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let t=e;throw"function"==typeof e&&(t=e.pluginName||e.name),new c.a("plugincollection-plugin-not-loaded",this._context,{plugin:t})}return t}has(e){return this._plugins.has(e)}init(e,t=[],i=[]){const n=this,o=this._context;!function e(t,i=new Set){t.forEach(t=>{a(t)&&(i.has(t)||(i.add(t),t.pluginName&&!n._availablePlugins.has(t.pluginName)&&n._availablePlugins.set(t.pluginName,t),t.requires&&e(t.requires,i)))})}(e),h(e);const r=[...function e(t,i=new Set){return t.map(e=>a(e)?e:n._availablePlugins.get(e)).reduce((t,n)=>i.has(n)?t:(i.add(n),n.requires&&(h(n.requires,n),e(n.requires,i).forEach(e=>t.add(e))),t.add(n)),new Set)}(e.filter(e=>!d(e,t)))];!function(e,t){for(const i of t){if("function"!=typeof i)throw new c.a("plugincollection-replace-plugin-invalid-type",null,{pluginItem:i});const t=i.pluginName;if(!t)throw new c.a("plugincollection-replace-plugin-missing-name",null,{pluginItem:i});if(i.requires&&i.requires.length)throw new c.a("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:t});const o=n._availablePlugins.get(t);if(!o)throw new c.a("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:t});const r=e.indexOf(o);if(-1===r){if(n._contextPlugins.has(o))return;throw new c.a("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:t})}if(o.requires&&o.requires.length)throw new c.a("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:t});e.splice(r,1,i),n._availablePlugins.set(t,i)}}(r,i);const s=function(e){return e.map(e=>{const t=n._contextPlugins.get(e)||new e(o);return n._add(e,t),t})}(r);return f(s,"init").then(()=>f(s,"afterInit")).then(()=>s);function a(e){return"function"==typeof e}function l(e){return a(e)&&e.isContextPlugin}function d(e,t){return t.some(t=>t===e||(u(e)===t||u(t)===e))}function u(e){return a(e)?e.pluginName||e.name:e}function h(e,i=null){e.map(e=>a(e)?e:n._availablePlugins.get(e)||e).forEach(e=>{!function(e,t){if(a(e))return;if(t)throw new c.a("plugincollection-soft-required",o,{missingPlugin:e,requiredBy:u(t)});throw new c.a("plugincollection-plugin-not-found",o,{plugin:e})}(e,i),function(e,t){if(!l(t))return;if(l(e))return;throw new c.a("plugincollection-context-required",o,{plugin:u(e),requiredBy:u(t)})}(e,i),function(e,i){if(!i)return;if(!d(e,t))return;throw new c.a("plugincollection-required",o,{plugin:u(e),requiredBy:u(i)})}(e,i)})}function f(e,t){return e.reduce((e,i)=>i[t]?n._contextPlugins.has(i)?e:e.then(i[t].bind(i)):e,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)"function"!=typeof t.destroy||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const i=e.pluginName;if(i){if(this._plugins.has(i))throw new c.a("plugincollection-plugin-name-conflict",null,{pluginName:i,plugin1:this._plugins.get(i).constructor,plugin2:e});this._plugins.set(i,t)}}}function en(e){return Array.isArray(e)?e:[e]}function tn(e,t,i=1){if("number"!=typeof i)throw new c.a("translation-service-quantity-not-a-number",null,{quantity:i});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;1===n&&(e=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=t.id||t.string;if(0===n||!function(e,t){return!!window.CKEDITOR_TRANSLATIONS[e]&&!!window.CKEDITOR_TRANSLATIONS[e].dictionary[t]}(e,o))return 1!==i?t.plural:t.string;const r=window.CKEDITOR_TRANSLATIONS[e].dictionary,s=window.CKEDITOR_TRANSLATIONS[e].getPluralForm||(e=>1===e?0:1);if("string"==typeof r[o])return r[o];const a=Number(s(i));return r[o][a]}Ke(Xi,u),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const nn=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function on(e){return nn.includes(e)?"rtl":"ltr"}class rn{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=on(this.uiLanguage),this.contentLanguageDirection=on(this.contentLanguage),this.t=(e,t)=>this._t(e,t)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=en(t),"string"==typeof e&&(e={string:e});const i=!!e.plural?t[0]:1;return function(e,t){return e.replace(/%(\d+)/g,(e,i)=>i<t.length?t[i]:e)}(tn(this.uiLanguage,e,i),t)}}class sn{constructor(e){this.config=new Gi(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Xi(this,t);const i=this.config.get("language")||{};this.locale=new rn({uiLanguage:"string"==typeof i?i:i.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Zi,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const i of e.concat(t)){if("function"!=typeof i)throw new c.a("context-initplugins-constructor-only",null,{Plugin:i});if(!0!==i.isContextPlugin)throw new c.a("context-initplugins-invalid-plugin",null,{Plugin:i})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new c.a("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const i=new this(e);t(i.initPlugins().then(()=>i))})}}class an{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function cn(e,t){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)if(e[n]!=t[n])return n;return e.length==t.length?"same":e.length<t.length?"prefix":"extension"}Ke(an,Ue);var ln=function(e){return qi(e,4)};class dn{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if(-1==(e=this.parent.getChildIndex(this)))throw new c.a("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}getCommonAncestor(e,t={}){const i=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;i[o]==n[o]&&i[o];)o++;return 0===o?null:i[o-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),i=e.getPath(),n=cn(t,i);switch(n){case"prefix":return!0;case"extension":return!1;default:return t[n]<i[n]}}isAfter(e){return this!=e&&(this.root===e.root&&!this.isBefore(e))}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=ln(this);return delete e.parent,e}is(e){return"node"===e||"view:node"===e}}Ke(dn,u);class un extends dn{constructor(e,t){super(e),this._textData=t}is(e){return"$text"===e||"view:$text"===e||"text"===e||"view:text"===e||"node"===e||"view:node"===e}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof un&&(this===e||this.data===e.data)}_clone(){return new un(this.document,this.data)}}class hn{constructor(e,t,i){if(this.textNode=e,t<0||t>e.data.length)throw new c.a("view-textproxy-wrong-offsetintext",this);if(i<0||t+i>e.data.length)throw new c.a("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+i),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return"$textProxy"===e||"view:$textProxy"===e||"textProxy"===e||"view:textProxy"===e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this.textNode:this.parent;for(;null!==i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}}function fn(e){return Ji(e)?new Map(e):function(e){const t=new Map;for(const i in e)t.set(i,e[i]);return t}(e)}class gn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)("string"==typeof t||t instanceof RegExp)&&(t={name:t}),t.classes&&("string"==typeof t.classes||t.classes instanceof RegExp)&&(t.classes=[t.classes]),this._patterns.push(t)}match(...e){for(const t of e)for(const e of this._patterns){const i=mn(t,e);if(i)return{element:t,pattern:e,match:i}}return null}matchAll(...e){const t=[];for(const i of e)for(const e of this._patterns){const n=mn(i,e);n&&t.push({element:i,pattern:e,match:n})}return t.length>0?t:null}getElementName(){if(1!==this._patterns.length)return null;const e=this._patterns[0],t=e.name;return"function"==typeof e||!t||t instanceof RegExp?null:t}}function mn(e,t){if("function"==typeof t)return t(e);const i={};return t.name&&(i.name=function(e,t){if(e instanceof RegExp)return e.test(t);return e===t}(t.name,e.name),!i.name)||t.attributes&&(i.attributes=function(e,t){const i=[];for(const n in e){const o=e[n];if(!t.hasAttribute(n))return null;{const e=t.getAttribute(n);if(!0===o)i.push(n);else if(o instanceof RegExp){if(!o.test(e))return null;i.push(n)}else{if(e!==o)return null;i.push(n)}}}return i}(t.attributes,e),!i.attributes)?null:!(t.classes&&(i.classes=function(e,t){const i=[];for(const n of e)if(n instanceof RegExp){const e=t.getClassNames();for(const t of e)n.test(t)&&i.push(t);if(0===i.length)return null}else{if(!t.hasClass(n))return null;i.push(n)}return i}(t.classes,e),!i.classes))&&(!(t.styles&&(i.styles=function(e,t){const i=[];for(const n in e){const o=e[n];if(!t.hasStyle(n))return null;{const e=t.getStyle(n);if(o instanceof RegExp){if(!o.test(e))return null;i.push(n)}else{if(e!==o)return null;i.push(n)}}}return i}(t.styles,e),!i.styles))&&i)}var pn=function(e){return"symbol"==typeof e||ge(e)&&"[object Symbol]"==S(e)},bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var kn=function(e,t){if(_e(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!pn(e))||(wn.test(e)||!bn.test(e)||null!=t&&e in Object(t))};function _n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var i=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=i.cache;if(r.has(o))return r.get(o);var s=e.apply(this,n);return i.cache=r.set(o,s)||r,s};return i.cache=new(_n.Cache||Ft),i}_n.Cache=Ft;var vn=_n;var yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xn=/\\(\\)?/g,An=function(e){var t=vn(e,(function(e){return 500===i.size&&i.clear(),e})),i=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(yn,(function(e,i,n,o){t.push(n?o.replace(xn,"$1"):i||e)})),t}));var Cn=function(e,t){for(var i=-1,n=null==e?0:e.length,o=Array(n);++i<n;)o[i]=t(e[i],i,e);return o},Tn=_?_.prototype:void 0,En=Tn?Tn.toString:void 0;var Pn=function e(t){if("string"==typeof t)return t;if(_e(t))return Cn(t,e)+"";if(pn(t))return En?En.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i};var Sn=function(e){return null==e?"":Pn(e)};var Mn=function(e,t){return _e(e)?e:kn(e,t)?[e]:An(Sn(e))};var In=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};var Nn=function(e){if("string"==typeof e||pn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Rn=function(e,t){for(var i=0,n=(t=Mn(t,e)).length;null!=e&&i<n;)e=e[Nn(t[i++])];return i&&i==n?e:void 0};var On=function(e,t,i){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(i=i>o?o:i)<0&&(i+=o),o=t>i?0:i-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=e[n+t];return r};var Dn=function(e,t){return t.length<2?e:Rn(e,On(t,0,-1))};var Ln=function(e,t){return t=Mn(t,e),null==(e=Dn(e,t))||delete e[Nn(In(t))]};var zn=function(e,t){return null==e||Ln(e,t)};var Vn=function(e,t,i){var n=null==e?void 0:Rn(e,t);return void 0===n?i:n};var jn=function(e,t,i){(void 0!==i&&!G(e[t],i)||void 0===i&&!(t in e))&&Y(e,t,i)};var Bn=function(e){return function(t,i,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[e?a:++o];if(!1===i(r[c],c,r))break}return t}}();var Fn=function(e){return ge(e)&&ce(e)};var Hn=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]};var Un=function(e){return J(e,De(e))};var Wn=function(e,t,i,n,o,r,s){var a=Hn(e,i),c=Hn(t,i),l=s.get(c);if(l)jn(e,i,l);else{var d=r?r(a,c,i+"",e,t,s):void 0,u=void 0===d;if(u){var h=_e(c),f=!h&&Object(ve.a)(c),g=!h&&!f&&Ee(c);d=c,h||f||g?_e(a)?d=a:Fn(a)?d=Xt(a):f?(u=!1,d=Object(Zt.a)(c,!0)):g?(u=!1,d=Ri(c,!0)):d=[]:ct(c)||ke(c)?(d=a,ke(a)?d=Un(a):w(a)&&!I(a)||(d=zi(c))):u=!1}u&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),jn(e,i,d)}};var qn=function e(t,i,n,o,r){t!==i&&Bn(i,(function(s,a){if(r||(r=new Wt),w(s))Wn(t,i,a,n,e,o,r);else{var c=o?o(Hn(t,a),s,a+"",t,i,r):void 0;void 0===c&&(c=s),jn(t,a,c)}}),De)},$n=he((function(e,t,i){qn(e,t,i)}));var Yn=function(e,t,i,n){if(!w(e))return e;for(var o=-1,r=(t=Mn(t,e)).length,s=r-1,a=e;null!=a&&++o<r;){var c=Nn(t[o]),l=i;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var d=a[c];void 0===(l=n?n(d,c,a):void 0)&&(l=w(d)?d:de(t[o+1])?[]:{})}Q(a,c,l),a=a[c]}return e};var Gn=function(e,t,i){return null==e?e:Yn(e,t,i)};class Kn{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(e){let t=null,i=0,n=0,o=null;const r=new Map;if(""===e)return r;";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===t)switch(a){case":":o||(o=e.substr(i,s-i),n=s+1);break;case'"':case"'":t=a;break;case";":{const t=e.substr(n,s-n);o&&r.set(o.trim(),t.trim()),o=null,i=s+1;break}}else a===t&&(t=null)}return r}(e).entries());for(const[e,i]of t)this._styleProcessor.toNormalizedForm(e,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([t])=>t===e);return Array.isArray(t)}set(e,t){if(w(e))for(const[t,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(t,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Jn(e);zn(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!w(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([t])=>t===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(){if(this.isEmpty)return[];return this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const i of t)e.push(...this._styleProcessor.getReducedForm(i,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const i=t.splice(0,t.length-1).join("."),n=Vn(this._styles,i);if(!n)return;!Array.from(Object.keys(n)).length&&this.remove(i)}}class Qn{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,i){if(w(t))Zn(i,Jn(e),t);else if(this._normalizers.has(e)){const n=this._normalizers.get(e),{path:o,value:r}=n(t);Zn(i,o,r)}else Zn(i,e,t)}getNormalized(e,t){if(!e)return $n({},t);if(void 0!==t[e])return t[e];if(this._extractors.has(e)){const i=this._extractors.get(e);if("string"==typeof i)return Vn(t,i);const n=i(e,t);if(n)return n}return Vn(t,Jn(e))}getReducedForm(e,t){const i=this.getNormalized(e,t);if(void 0===i)return[];if(this._reducers.has(e)){return this._reducers.get(e)(i)}return[[e,i]]}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const i of t)this._mapStyleNames(i,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Jn(e){return e.replace("-",".")}function Zn(e,t,i){let n=i;w(i)&&(n=$n({},Vn(e,t),i)),Gn(e,t,n)}class Xn extends dn{constructor(e,t,i,n){if(super(e),this.name=t,this._attrs=function(e){e=fn(e);for(const[t,i]of e)null===i?e.delete(t):"string"!=typeof i&&e.set(t,String(i));return e}(i),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const e=this._attrs.get("class");eo(this._classes,e),this._attrs.delete("class")}this._styles=new Kn(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._isAllowedInsideAttributeElement=!1}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}get isAllowedInsideAttributeElement(){return this._isAllowedInsideAttributeElement}is(e,t=null){return t?t===this.name&&("element"===e||"view:element"===e):"element"===e||"view:element"===e||"node"===e||"view:node"===e}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if("class"==e)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"==e){const e=this._styles.toString();return""==e?void 0:e}return this._attrs.get(e)}hasAttribute(e){return"class"==e?this._classes.size>0:"style"==e?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Xn))return!1;if(this===e)return!0;if(this.name!=e.name)return!1;if(this.isAllowedInsideAttributeElement!=e.isAllowedInsideAttributeElement)return!1;if(this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,i]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==i)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(){return this._styles.getStyleNames()}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new gn(...e);let i=this.parent;for(;i;){if(t.match(i))return i;i=i.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),i=Array.from(this._attrs).map(e=>`${e[0]}="${e[1]}"`).sort().join(" ");return this.name+(""==e?"":` class="${e}"`)+(t?` style="${t}"`:"")+(""==i?"":" "+i)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const i=new this.constructor(this.document,this.name,this._attrs,t);return i._classes=new Set(this._classes),i._styles.set(this._styles.getNormalized()),i._customProperties=new Map(this._customProperties),i.getFillerOffset=this.getFillerOffset,i._isAllowedInsideAttributeElement=this.isAllowedInsideAttributeElement,i}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let i=0;const n=function(e,t){if("string"==typeof t)return[new un(e,t)];Ji(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new un(e,t):t instanceof hn?new un(e,t.data):t)}(this.document,t);for(const t of n)null!==t.parent&&t._remove(),t.parent=this,t.document=this.document,this._children.splice(e,0,t),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),"class"==e?eo(this._classes,t):"style"==e?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),"class"==e?this._classes.size>0&&(this._classes.clear(),!0):"style"==e?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of en(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function eo(e,t){const i=t.split(/\s+/);e.clear(),i.forEach(t=>e.add(t))}class to extends Xn{constructor(e,t,i,n){super(e,t,i,n),this.getFillerOffset=io}is(e,t=null){return t?t===this.name&&("containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}}function io(){const e=[...this.getChildren()],t=e[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const t of e)if(!t.is("uiElement"))return null;return this.childCount}class no extends to{constructor(e,t,i,n){super(e,t,i,n),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",t=>t&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&("editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}destroy(){this.stopListening()}}Ke(no,Ue);const oo=Symbol("rootName");class ro extends no{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&("rootElement"===e||"view:rootElement"===e||"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"rootElement"===e||"view:rootElement"===e||"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}get rootName(){return this.getCustomProperty(oo)}set rootName(e){this._setCustomProperty(oo,e)}set _name(e){this.name=e}}class so{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new c.a("view-tree-walker-no-start-position",null);if(e.direction&&"forward"!=e.direction&&"backward"!=e.direction)throw new c.a("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=ao._createAt(e.startPosition):this.position=ao._createAt(e.boundaries["backward"==e.direction?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,i,n;do{n=this.position,({done:t,value:i}=this.next())}while(!t&&e(i));t||(this.position=n)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,i=e.parent;if(null===i.parent&&e.offset===i.childCount)return{done:!0};if(i===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let n;if(i instanceof un){if(e.isAtEnd)return this.position=ao._createAfter(i),this._next();n=i.data[e.offset]}else n=i.getChild(e.offset);if(n instanceof Xn)return this.shallow?e.offset++:e=new ao(n,0),this.position=e,this._formatReturnValue("elementStart",n,t,e,1);if(n instanceof un){if(this.singleCharacters)return e=new ao(n,0),this.position=e,this._next();{let i,o=n.data.length;return n==this._boundaryEndParent?(o=this.boundaries.end.offset,i=new hn(n,0,o),e=ao._createAfter(i)):(i=new hn(n,0,n.data.length),e.offset++),this.position=e,this._formatReturnValue("text",i,t,e,o)}}if("string"==typeof n){let n;if(this.singleCharacters)n=1;else{n=(i===this._boundaryEndParent?this.boundaries.end.offset:i.data.length)-e.offset}const o=new hn(i,e.offset,n);return e.offset+=n,this.position=e,this._formatReturnValue("text",o,t,e,n)}return e=ao._createAfter(i),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",i,t,e)}_previous(){let e=this.position.clone();const t=this.position,i=e.parent;if(null===i.parent&&0===e.offset)return{done:!0};if(i==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let n;if(i instanceof un){if(e.isAtStart)return this.position=ao._createBefore(i),this._previous();n=i.data[e.offset-1]}else n=i.getChild(e.offset-1);if(n instanceof Xn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",n,t,e,1)):(e=new ao(n,n.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",n,t,e));if(n instanceof un){if(this.singleCharacters)return e=new ao(n,n.data.length),this.position=e,this._previous();{let i,o=n.data.length;if(n==this._boundaryStartParent){const t=this.boundaries.start.offset;i=new hn(n,t,n.data.length-t),o=i.data.length,e=ao._createBefore(i)}else i=new hn(n,0,n.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",i,t,e,o)}}if("string"==typeof n){let n;if(this.singleCharacters)n=1;else{const t=i===this._boundaryStartParent?this.boundaries.start.offset:0;n=e.offset-t}e.offset-=n;const o=new hn(i,e.offset,n);return this.position=e,this._formatReturnValue("text",o,t,e,n)}return e=ao._createBefore(i),this.position=e,this._formatReturnValue("elementStart",i,t,e,1)}_formatReturnValue(e,t,i,n,o){return t instanceof hn&&(t.offsetInText+t.data.length==t.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?i=ao._createAfter(t.textNode):(n=ao._createAfter(t.textNode),this.position=n)),0===t.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?i=ao._createBefore(t.textNode):(n=ao._createBefore(t.textNode),this.position=n))),{done:!1,value:{type:e,item:t,previousPosition:i,nextPosition:n,length:o}}}}class ao{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof no);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ao._createAt(this),i=t.offset+e;return t.offset=i<0?0:i,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const i=new so(t);return i.skip(e),i.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),i=e.getAncestors();let n=0;for(;t[n]==i[n]&&t[n];)n++;return 0===n?null:t[n-1]}is(e){return"position"===e||"view:position"===e}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return"before"==this.compareWith(e)}isAfter(e){return"after"==this.compareWith(e)}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],i=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),i.push(e.offset);const n=cn(t,i);switch(n){case"prefix":return"before";case"extension":return"after";default:return t[n]<i[n]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new so(e)}clone(){return new ao(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ao)return new this(e.parent,e.offset);{const i=e;if("end"==t)t=i.is("$text")?i.data.length:i.childCount;else{if("before"==t)return this._createBefore(i);if("after"==t)return this._createAfter(i);if(0!==t&&!t)throw new c.a("view-createpositionat-offset-required",i)}return new ao(i,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ao(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new c.a("view-position-after-root",e,{root:e});return new ao(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ao(e.textNode,e.offsetInText);if(!e.parent)throw new c.a("view-position-before-root",e,{root:e});return new ao(e.parent,e.index)}}class co{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new so({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(lo,{direction:"backward"}),t=this.end.getLastMatchingPosition(lo);return e.parent.is("$text")&&e.isAtStart&&(e=ao._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ao._createAfter(t.parent)),new co(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(lo);if(e.isAfter(this.end)||e.isEqual(this.end))return new co(e,e);let t=this.end.getLastMatchingPosition(lo,{direction:"backward"});const i=e.nodeAfter,n=t.nodeBefore;return i&&i.is("$text")&&(e=new ao(i,0)),n&&n.is("$text")&&(t=new ao(n,n.data.length)),new co(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const i=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return i&&n}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new co(this.start,e.start)),this.containsPosition(e.end)&&t.push(new co(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,i=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(i=e.end),new co(t,i)}return null}getWalker(e={}){return e.boundaries=this,new so(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new co(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new so(e);for(const e of t)yield e.item}*getPositions(e={}){e.boundaries=this;const t=new so(e);yield t.position;for(const e of t)yield e.nextPosition}is(e){return"range"===e||"view:range"===e}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,i,n){return new this(new ao(e,t),new ao(i,n))}static _createFromPositionAndShift(e,t){const i=e,n=e.getShiftedBy(t);return t>0?new this(i,n):new this(n,i)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ao._createBefore(e),t)}}function lo(e){return!(!e.item.is("attributeElement")&&!e.item.is("uiElement"))}function uo(e){let t=0;for(const i of e)t++;return t}class ho{constructor(e=null,t,i){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,i)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel)return!1;if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let i=!1;for(const n of e._ranges)if(t.isEqual(n)){i=!0;break}if(!i)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=uo(this.getRanges());if(t!=uo(e.getRanges()))return!1;if(0==t)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let i=!1;for(let n of e.getRanges())if(n=n.getTrimmed(),t.start.isEqual(n.start)&&t.end.isEqual(n.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}setTo(e,t,i){if(null===e)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof ho||e instanceof fo)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof co)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof ao)this._setRanges([new co(e)]),this._setFakeOptions(t);else if(e instanceof dn){const n=!!i&&!!i.backward;let o;if(void 0===t)throw new c.a("view-selection-setto-required-second-parameter",this);o="in"==t?co._createIn(e):"on"==t?co._createOn(e):new co(ao._createAt(e,t)),this._setRanges([o],n),this._setFakeOptions(i)}else{if(!Ji(e))throw new c.a("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(null===this.anchor)throw new c.a("view-selection-setfocus-no-ranges",this);const i=ao._createAt(e,t);if("same"==i.compareWith(this.focus))return;const n=this.anchor;this._ranges.pop(),"before"==i.compareWith(n)?this._addRange(new co(i,n),!0):this._addRange(new co(n,i)),this.fire("change")}is(e){return"selection"===e||"view:selection"===e}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const t of e)this._addRange(t);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof co))throw new c.a("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new c.a("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new co(e.start,e.end))}}Ke(ho,u);class fo{constructor(e=null,t,i){this._selection=new ho,this._selection.delegate("change").to(this),this._selection.setTo(e,t,i)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return"selection"===e||"documentSelection"==e||"view:selection"==e||"view:documentSelection"==e}_setTo(e,t,i){this._selection.setTo(e,t,i)}_setFocus(e,t){this._selection.setFocus(e,t)}}Ke(fo,u);class go extends o{constructor(e,t,i){super(e,t),this.startRange=i,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const mo=Symbol("bubbling contexts");var po={fire(e,...t){try{const i=e instanceof o?e:new o(this,e),n=_o(this);if(!n.size)return;if(bo(i,"capturing",this),wo(n,"$capture",i,...t))return i.return;const r=i.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&Boolean(ko(n,s));let c=s||function(e){if(!e)return null;const t=e.start.parent,i=e.end.parent,n=t.getPath(),o=i.getPath();return n.length>o.length?t:i}(r);if(bo(i,"atTarget",c),!a){if(wo(n,"$text",i,...t))return i.return;bo(i,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(wo(n,"$root",i,...t))return i.return}else if(c.is("element")&&wo(n,c.name,i,...t))return i.return;if(wo(n,c,i,...t))return i.return;c=c.parent,bo(i,"bubbling",c)}return bo(i,"bubbling",this),wo(n,"$document",i,...t),i.return}catch(e){c.a.rethrowUnexpectedError(e,this)}},_addEventListener(e,t,i){const n=en(i.context||"$document"),o=_o(this);for(const r of n){let n=o.get(r);n||(n=Object.create(u),o.set(r,n)),this.listenTo(n,e,t,i)}},_removeEventListener(e,t){const i=_o(this);for(const n of i.values())this.stopListening(n,e,t)}};function bo(e,t,i){e instanceof go&&(e._eventPhase=t,e._currentTarget=i)}function wo(e,t,i,...n){const o="string"==typeof t?e.get(t):ko(e,t);return!!o&&(o.fire(i,...n),i.stop.called)}function ko(e,t){for(const[i,n]of e)if("function"==typeof i&&i(t))return n;return null}function _o(e){return e[mo]||(e[mo]=new Map),e[mo]}class vo{constructor(e){this.selection=new fo,this.roots=new Zi({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do{for(const i of this._postFixers)if(t=i(e),t)break}while(t)}}Ke(vo,po),Ke(vo,Ue);class yo extends Xn{constructor(e,t,i,n){super(e,t,i,n),this.getFillerOffset=xo,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new c.a("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&("attributeElement"===e||"view:attributeElement"===e||"element"===e||"view:element"===e):"attributeElement"===e||"view:attributeElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}isSimilar(e){return null!==this.id||null!==e.id?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function xo(){if(Ao(this))return null;let e=this.parent;for(;e&&e.is("attributeElement");){if(Ao(e)>1)return null;e=e.parent}return!e||Ao(e)>1?null:this.childCount}function Ao(e){return Array.from(e.getChildren()).filter(e=>!e.is("uiElement")).length}yo.DEFAULT_PRIORITY=10;class Co extends Xn{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=To}is(e,t=null){return t?t===this.name&&("emptyElement"===e||"view:emptyElement"===e||"element"===e||"view:element"===e):"emptyElement"===e||"view:emptyElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-emptyelement-cannot-add",[this,t])}}function To(){return null}const Eo=navigator.userAgent.toLowerCase();var Po={isMac:function(e){return e.indexOf("macintosh")>-1}(Eo),isGecko:function(e){return!!e.match(/gecko\/\d+/)}(Eo),isSafari:function(e){return e.indexOf(" applewebkit/")>-1&&-1===e.indexOf("chrome")}(Eo),isAndroid:function(e){return e.indexOf("android")>-1}(Eo),isBlink:function(e){return e.indexOf("chrome/")>-1&&e.indexOf("edge/")<0}(Eo),features:{isRegExpUnicodePropertySupported:function(){let e=!1;try{e=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(e){}return e}()}};const So={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Mo={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Io=function(){const e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){const i=String.fromCharCode(t);e[i.toLowerCase()]=t}for(let t=48;t<=57;t++)e[t-48]=t;for(let t=112;t<=123;t++)e["f"+(t-111)]=t;return e}(),No=Object.fromEntries(Object.entries(Io).map(([e,t])=>[t,e.charAt(0).toUpperCase()+e.slice(1)]));function Ro(e){let t;if("string"==typeof e){if(t=Io[e.toLowerCase()],!t)throw new c.a("keyboard-unknown-key",null,{key:e})}else t=e.keyCode+(e.altKey?Io.alt:0)+(e.ctrlKey?Io.ctrl:0)+(e.shiftKey?Io.shift:0)+(e.metaKey?Io.cmd:0);return t}function Oo(e){return"string"==typeof e&&(e=function(e){return e.split("+").map(e=>e.trim())}(e)),e.map(e=>"string"==typeof e?function(e){if(e.endsWith("!"))return Ro(e.slice(0,-1));const t=Ro(e);return Po.isMac&&t==Io.ctrl?Io.cmd:t}(e):e).reduce((e,t)=>t+e,0)}function Do(e){let t=Oo(e);return Object.entries(Po.isMac?So:Mo).reduce((e,[i,n])=>(0!=(t&Io[i])&&(t&=~Io[i],e+=n),e),"")+(t?No[t]:"")}function Lo(e,t){const i="ltr"===t;switch(e){case Io.arrowleft:return i?"left":"right";case Io.arrowright:return i?"right":"left";case Io.arrowup:return"up";case Io.arrowdown:return"down"}}function zo(e,t){const i=Lo(e,t);return"down"===i||"right"===i}class Vo extends Xn{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Bo}is(e,t=null){return t?t===this.name&&("uiElement"===e||"view:uiElement"===e||"element"===e||"view:element"===e):"uiElement"===e||"view:uiElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const e of this.getAttributeKeys())t.setAttribute(e,this.getAttribute(e));return t}}function jo(e){e.document.on("arrowKey",(t,i)=>function(e,t,i){if(t.keyCode==Io.arrowright){const e=t.domTarget.ownerDocument.defaultView.getSelection(),n=1==e.rangeCount&&e.getRangeAt(0).collapsed;if(n||t.shiftKey){const t=e.focusNode,o=e.focusOffset,r=i.domPositionToView(t,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(e=>(e.item.is("uiElement")&&(s=!0),!(!e.item.is("uiElement")&&!e.item.is("attributeElement"))));if(s){const t=i.viewPositionToDom(a);n?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset)}}}}(0,i,e.domConverter),{priority:"low"})}function Bo(){return null}class Fo extends Xn{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Ho}is(e,t=null){return t?t===this.name&&("rawElement"===e||"view:rawElement"===e||"element"===e||"view:element"===e):"rawElement"===e||"view:rawElement"===e||e===this.name||e==="view:"+this.name||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-rawelement-cannot-add",[this,t])}}function Ho(){return null}class Uo{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return"documentFragment"===e||"view:documentFragment"===e}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let i=0;const n=function(e,t){if("string"==typeof t)return[new un(e,t)];Ji(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new un(e,t):t instanceof hn?new un(e,t.data):t)}(this.document,t);for(const t of n)null!==t.parent&&t._remove(),t.parent=this,this._children.splice(e,0,t),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Ke(Uo,u);class Wo{constructor(e){this.document=e,this._cloneGroups=new Map}setSelection(e,t,i){this.document.selection._setTo(e,t,i)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Uo(this.document,e)}createText(e){return new un(this.document,e)}createAttributeElement(e,t,i={}){const n=new yo(this.document,e,t);return i.priority&&(n._priority=i.priority),i.id&&(n._id=i.id),n}createContainerElement(e,t,i={}){const n=new to(this.document,e,t);return void 0!==i.isAllowedInsideAttributeElement&&(n._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),n}createEditableElement(e,t){const i=new no(this.document,e,t);return i._document=this.document,i}createEmptyElement(e,t,i={}){const n=new Co(this.document,e,t);return void 0!==i.isAllowedInsideAttributeElement&&(n._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),n}createUIElement(e,t,i,n={}){const o=new Vo(this.document,e,t);return i&&(o.render=i),void 0!==n.isAllowedInsideAttributeElement&&(o._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),o}createRawElement(e,t,i,n={}){const o=new Fo(this.document,e,t);return o.render=i||(()=>{}),void 0!==n.isAllowedInsideAttributeElement&&(o._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),o}setAttribute(e,t,i){i._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,i){ct(e)&&void 0===i&&(i=t),i._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,i){i._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ao?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new c.a("view-writer-break-non-container-element",this.document);if(!t.parent)throw new c.a("view-writer-break-root",this.document);if(e.isAtStart)return ao._createBefore(t);if(!e.isAtEnd){const i=t._clone(!1);this.insert(ao._createAfter(t),i);const n=new co(e,ao._createAt(t,"end")),o=new ao(i,0);this.move(n,o)}return ao._createAfter(t)}mergeAttributes(e){const t=e.offset,i=e.parent;if(i.is("$text"))return e;if(i.is("attributeElement")&&0===i.childCount){const e=i.parent,t=i.index;return i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new ao(e,t))}const n=i.getChild(t-1),o=i.getChild(t);if(!n||!o)return e;if(n.is("$text")&&o.is("$text"))return Ko(n,o);if(n.is("attributeElement")&&o.is("attributeElement")&&n.isSimilar(o)){const e=n.childCount;return n._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new ao(n,e))}return e}mergeContainers(e){const t=e.nodeBefore,i=e.nodeAfter;if(!(t&&i&&t.is("containerElement")&&i.is("containerElement")))throw new c.a("view-writer-merge-containers-invalid-position",this.document);const n=t.getChild(t.childCount-1),o=n instanceof un?ao._createAt(n,"end"):ao._createAt(t,"end");return this.move(co._createIn(i),ao._createAt(t,"end")),this.remove(co._createOn(i)),o}insert(e,t){(function e(t,i){for(const n of t){if(!Qo.some(e=>n instanceof e))throw new c.a("view-writer-insert-invalid-node-type",i);n.is("$text")||e(n.getChildren(),i)}})(t=Ji(t)?[...t]:[t],this.document);const i=t.reduce((e,t)=>{const i=e[e.length-1],n=!(t.is("uiElement")&&t.isAllowedInsideAttributeElement);return i&&i.breakAttributes==n?i.nodes.push(t):e.push({breakAttributes:n,nodes:[t]}),e},[]);let n=null,o=e;for(const{nodes:e,breakAttributes:t}of i){const i=this._insertNodes(o,e,t);n||(n=i.start),o=i.end}return n?new co(n,o):new co(e)}remove(e){const t=e instanceof co?e:co._createOn(e);if(Zo(t,this.document),t.isCollapsed)return new Uo(this.document);const{start:i,end:n}=this._breakAttributesRange(t,!0),o=i.parent,r=n.offset-i.offset,s=o._removeChildren(i.offset,r);for(const e of s)this._removeFromClonedElementsGroup(e);const a=this.mergeAttributes(i);return t.start=a,t.end=a.clone(),new Uo(this.document,s)}clear(e,t){Zo(e,this.document);const i=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const n of i){const i=n.item;let o;if(i.is("element")&&t.isSimilar(i))o=co._createOn(i);else if(!n.nextPosition.isAfter(e.start)&&i.is("$textProxy")){const e=i.getAncestors().find(e=>e.is("element")&&t.isSimilar(e));e&&(o=co._createIn(e))}o&&(o.end.isAfter(e.end)&&(o.end=e.end),o.start.isBefore(e.start)&&(o.start=e.start),this.remove(o))}}move(e,t){let i;if(t.isAfter(e.end)){const n=(t=this._breakAttributes(t,!0)).parent,o=n.childCount;e=this._breakAttributesRange(e,!0),i=this.remove(e),t.offset+=n.childCount-o}else i=this.remove(e);return this.insert(t,i)}wrap(e,t){if(!(t instanceof yo))throw new c.a("view-writer-wrap-invalid-attribute",this.document);if(Zo(e,this.document),e.isCollapsed){let n=e.start;n.parent.is("element")&&(i=n.parent,!Array.from(i.getChildren()).some(e=>!e.is("uiElement")))&&(n=n.getLastMatchingPosition(e=>e.item.is("uiElement"))),n=this._wrapPosition(n,t);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(e.start)&&this.setSelection(n),new co(n)}return this._wrapRange(e,t);var i}unwrap(e,t){if(!(t instanceof yo))throw new c.a("view-writer-unwrap-invalid-attribute",this.document);if(Zo(e,this.document),e.isCollapsed)return e;const{start:i,end:n}=this._breakAttributesRange(e,!0),o=i.parent,r=this._unwrapChildren(o,i.offset,n.offset,t),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new co(s,a)}rename(e,t){const i=new to(this.document,e,t.getAttributes());return this.insert(ao._createAfter(t),i),this.move(co._createIn(t),ao._createAt(i,0)),this.remove(co._createOn(t)),i}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ao._createAt(e,t)}createPositionAfter(e){return ao._createAfter(e)}createPositionBefore(e){return ao._createBefore(e)}createRange(e,t){return new co(e,t)}createRangeOn(e){return co._createOn(e)}createRangeIn(e){return co._createIn(e)}createSelection(e,t,i){return new ho(e,t,i)}_insertNodes(e,t,i){let n,o;if(n=i?qo(e):e.parent.is("$text")?e.parent.parent:e.parent,!n)throw new c.a("view-writer-invalid-position-container",this.document);o=i?this._breakAttributes(e,!0):e.parent.is("$text")?Go(e):e;const r=n._insertChild(o.offset,t);for(const e of t)this._addToClonedElementsGroup(e);const s=o.getShiftedBy(r),a=this.mergeAttributes(o);a.isEqual(o)||s.offset--;const l=this.mergeAttributes(s);return new co(a,l)}_wrapChildren(e,t,i,n){let o=t;const r=[];for(;o<i;){const t=e.getChild(o),i=t.is("$text"),s=t.is("attributeElement"),a=t.isAllowedInsideAttributeElement;if(s&&this._wrapAttributeElement(n,t))r.push(new ao(e,o));else if(i||a||s&&$o(n,t)){const i=n._clone();t._remove(),i._appendChild(t),e._insertChild(o,i),this._addToClonedElementsGroup(i),r.push(new ao(e,o))}else s&&this._wrapChildren(t,0,t.childCount,n);o++}let s=0;for(const e of r){if(e.offset-=s,e.offset==t)continue;this.mergeAttributes(e).isEqual(e)||(s++,i--)}return co._createFromParentsAndOffsets(e,t,e,i)}_unwrapChildren(e,t,i,n){let o=t;const r=[];for(;o<i;){const t=e.getChild(o);if(t.is("attributeElement"))if(t.isSimilar(n)){const n=t.getChildren(),s=t.childCount;t._remove(),e._insertChild(o,n),this._removeFromClonedElementsGroup(t),r.push(new ao(e,o),new ao(e,o+s)),o+=s,i+=s-1}else this._unwrapAttributeElement(n,t)?(r.push(new ao(e,o),new ao(e,o+1)),o++):(this._unwrapChildren(t,0,t.childCount,n),o++);else o++}let s=0;for(const e of r){if(e.offset-=s,e.offset==t||e.offset==i)continue;this.mergeAttributes(e).isEqual(e)||(s++,i--)}return co._createFromParentsAndOffsets(e,t,e,i)}_wrapRange(e,t){const{start:i,end:n}=this._breakAttributesRange(e,!0),o=i.parent,r=this._wrapChildren(o,i.offset,n.offset,t),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new co(s,a)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Yo(e.clone());e.parent.is("$text")&&(e=Go(e));const i=this.createAttributeElement();i._priority=Number.POSITIVE_INFINITY,i.isSimilar=()=>!1,e.parent._insertChild(e.offset,i);const n=new co(e,e.getShiftedBy(1));this.wrap(n,t);const o=new ao(i.parent,i.index);i._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof un&&s instanceof un?Ko(r,s):Yo(o)}_wrapAttributeElement(e,t){if(!Xo(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if("class"!==i&&"style"!==i&&t.hasAttribute(i)&&t.getAttribute(i)!==e.getAttribute(i))return!1;for(const i of e.getStyleNames())if(t.hasStyle(i)&&t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())"class"!==i&&"style"!==i&&(t.hasAttribute(i)||this.setAttribute(i,e.getAttribute(i),t));for(const i of e.getStyleNames())t.hasStyle(i)||this.setStyle(i,e.getStyle(i),t);for(const i of e.getClassNames())t.hasClass(i)||this.addClass(i,t);return!0}_unwrapAttributeElement(e,t){if(!Xo(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if("class"!==i&&"style"!==i&&(!t.hasAttribute(i)||t.getAttribute(i)!==e.getAttribute(i)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const i of e.getStyleNames())if(!t.hasStyle(i)||t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())"class"!==i&&"style"!==i&&this.removeAttribute(i,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const i=e.start,n=e.end;if(Zo(e,this.document),e.isCollapsed){const i=this._breakAttributes(e.start,t);return new co(i,i)}const o=this._breakAttributes(n,t),r=o.parent.childCount,s=this._breakAttributes(i,t);return o.offset+=o.parent.childCount-r,new co(s,o)}_breakAttributes(e,t=!1){const i=e.offset,n=e.parent;if(e.parent.is("emptyElement"))throw new c.a("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new c.a("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new c.a("view-writer-cannot-break-raw-element",this.document);if(!t&&n.is("$text")&&Jo(n.parent))return e.clone();if(Jo(n))return e.clone();if(n.is("$text"))return this._breakAttributes(Go(e),t);if(i==n.childCount){const e=new ao(n.parent,n.index+1);return this._breakAttributes(e,t)}if(0===i){const e=new ao(n.parent,n.index);return this._breakAttributes(e,t)}{const e=n.index+1,o=n._clone();n.parent._insertChild(e,o),this._addToClonedElementsGroup(o);const r=n.childCount-i,s=n._removeChildren(i,r);o._appendChild(s);const a=new ao(n.parent,e);return this._breakAttributes(a,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const t of e.getChildren())this._addToClonedElementsGroup(t);const t=e.id;if(!t)return;let i=this._cloneGroups.get(t);i||(i=new Set,this._cloneGroups.set(t,i)),i.add(e),e._clonesGroup=i}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const t of e.getChildren())this._removeFromClonedElementsGroup(t);const t=e.id;if(!t)return;const i=this._cloneGroups.get(t);i&&i.delete(e)}}function qo(e){let t=e.parent;for(;!Jo(t);){if(!t)return;t=t.parent}return t}function $o(e,t){return e.priority<t.priority||!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function Yo(e){const t=e.nodeBefore;if(t&&t.is("$text"))return new ao(t,t.data.length);const i=e.nodeAfter;return i&&i.is("$text")?new ao(i,0):e}function Go(e){if(e.offset==e.parent.data.length)return new ao(e.parent.parent,e.parent.index+1);if(0===e.offset)return new ao(e.parent.parent,e.parent.index);const t=e.parent.data.slice(e.offset);return e.parent._data=e.parent.data.slice(0,e.offset),e.parent.parent._insertChild(e.parent.index+1,new un(e.root.document,t)),new ao(e.parent.parent,e.parent.index+1)}function Ko(e,t){const i=e.data.length;return e._data+=t.data,t._remove(),new ao(e,i)}const Qo=[un,yo,to,Co,Fo,Vo];function Jo(e){return e&&(e.is("containerElement")||e.is("documentFragment"))}function Zo(e,t){const i=qo(e.start),n=qo(e.end);if(!i||!n||i!==n)throw new c.a("view-writer-invalid-range-container",t)}function Xo(e,t){return null===e.id&&null===t.id}function er(e){return"[object Text]"==Object.prototype.toString.call(e)}const tr=e=>e.createTextNode(" "),ir=e=>{const t=e.createElement("span");return t.dataset.ckeFiller=!0,t.innerHTML=" ",t},nr=e=>{const t=e.createElement("br");return t.dataset.ckeFiller=!0,t},or="⁠".repeat(7);function rr(e){return er(e)&&e.data.substr(0,7)===or}function sr(e){return 7==e.data.length&&rr(e)}function ar(e){return rr(e)?e.data.slice(7):e.data}function cr(e,t){if(t.keyCode==Io.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(1==e.rangeCount&&e.getRangeAt(0).collapsed){const t=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;rr(t)&&i<=7&&e.collapse(t,0)}}}function lr(e,t,i,n=!1){i=i||function(e,t){return e===t},Array.isArray(e)||(e=Array.prototype.slice.call(e)),Array.isArray(t)||(t=Array.prototype.slice.call(t));const o=function(e,t,i){const n=dr(e,t,i);if(-1===n)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=ur(e,n),r=ur(t,n),s=dr(o,r,i),a=e.length-s,c=t.length-s;return{firstIndex:n,lastIndexOld:a,lastIndexNew:c}}(e,t,i);return n?function(e,t){const{firstIndex:i,lastIndexOld:n,lastIndexNew:o}=e;if(-1===i)return Array(t).fill("equal");let r=[];i>0&&(r=r.concat(Array(i).fill("equal")));o-i>0&&(r=r.concat(Array(o-i).fill("insert")));n-i>0&&(r=r.concat(Array(n-i).fill("delete")));o<t&&(r=r.concat(Array(t-o).fill("equal")));return r}(o,t.length):function(e,t){const i=[],{firstIndex:n,lastIndexOld:o,lastIndexNew:r}=t;r-n>0&&i.push({index:n,type:"insert",values:e.slice(n,r)});o-n>0&&i.push({index:n+(r-n),type:"delete",howMany:o-n});return i}(t,o)}function dr(e,t,i){for(let n=0;n<Math.max(e.length,t.length);n++)if(void 0===e[n]||void 0===t[n]||!i(e[n],t[n]))return n;return-1}function ur(e,t){return e.slice(t).reverse()}function hr(e,t,i){i=i||function(e,t){return e===t};const n=e.length,o=t.length;if(n>200||o>200||n+o>300)return hr.fastDiff(e,t,i,!0);let r,s;if(o<n){const i=e;e=t,t=i,r="delete",s="insert"}else r="insert",s="delete";const a=e.length,c=t.length,l=c-a,d={},u={};function h(n){const o=(void 0!==u[n-1]?u[n-1]:-1)+1,l=void 0!==u[n+1]?u[n+1]:-1,h=o>l?-1:1;d[n+h]&&(d[n]=d[n+h].slice(0)),d[n]||(d[n]=[]),d[n].push(o>l?r:s);let f=Math.max(o,l),g=f-n;for(;g<a&&f<c&&i(e[g],t[f]);)g++,f++,d[n].push("equal");return f}let f,g=0;do{for(f=-g;f<l;f++)u[f]=h(f);for(f=l+g;f>l;f--)u[f]=h(f);u[l]=h(l),g++}while(u[l]!==c);return d[l].slice(1)}function fr(e,t,i){e.insertBefore(i,e.childNodes[t]||null)}function gr(e){const t=e.parentNode;t&&t.removeChild(e)}function mr(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}hr.fastDiff=lr;class pr{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if("text"===e)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if("attributes"===e)this.markedAttributes.add(t);else{if("children"!==e)throw new c.a("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;for(const e of this.markedChildren)this._updateChildrenMappings(e);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent));for(const e of this.markedAttributes)this._updateAttrs(e);for(const t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});for(const t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});if(e){const t=this.domConverter.viewPositionToDom(e),i=t.parent.ownerDocument;rr(t.parent)?this._inlineFiller=t.parent:this._inlineFiller=br(i,t.parent,t.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=this.domConverter.mapViewToDom(e).childNodes,n=Array.from(this.domConverter.viewChildrenToDom(e,t.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(i,n),r=this._findReplaceActions(o,i,n);if(-1!==r.indexOf("replace")){const t={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=t.equal+t.insert,r=t.equal+t.delete,s=e.getChild(o);!s||s.is("uiElement")||s.is("rawElement")||this._updateElementMappings(s,i[r]),gr(n[o]),t.equal++}else t[o]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ao._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&er(t.parent)&&rr(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!rr(e))throw new c.a("view-renderer-filler-was-lost",this);sr(e)?e.parentNode.removeChild(e):e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,i=e.offset;if(!this.domConverter.mapViewToDom(t.root))return!1;if(!t.is("element"))return!1;if(!function(e){if("false"==e.getAttribute("contenteditable"))return!1;const t=e.findAncestor(e=>e.hasAttribute("contenteditable"));return!t||"true"==t.getAttribute("contenteditable")}(t))return!1;if(i===t.getFillerOffset())return!1;const n=e.nodeBefore,o=e.nodeAfter;return!(n instanceof un||o instanceof un)}_updateText(e,t){const i=this.domConverter.findCorrespondingDomText(e),n=this.domConverter.viewToDom(e,i.ownerDocument),o=i.data;let r=n.data;const s=t.inlineFillerPosition;if(s&&s.parent==e.parent&&s.offset==e.index&&(r=or+r),o!=r){const e=lr(o,r);for(const t of e)"insert"===t.type?i.insertData(t.index,t.values.join("")):i.deleteData(t.index,t.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=Array.from(t.attributes).map(e=>e.name),n=e.getAttributeKeys();for(const i of n)t.setAttribute(i,e.getAttribute(i));for(const n of i)e.hasAttribute(n)||t.removeAttribute(n)}_updateChildren(e,t){const i=this.domConverter.mapViewToDom(e);if(!i)return;const n=t.inlineFillerPosition,o=this.domConverter.mapViewToDom(e).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(e,i.ownerDocument,{bind:!0,inlineFillerPosition:n}));n&&n.parent===e&&br(i.ownerDocument,r,n.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const e of s)"delete"===e?(c.add(o[a]),gr(o[a])):"equal"===e&&a++;a=0;for(const e of s)"insert"===e?(fr(i,a,r[a]),a++):"equal"===e&&(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const e of c)e.parentNode||this.domConverter.unbindDomElement(e)}_diffNodeLists(e,t){return hr(e=function(e,t){const i=Array.from(e);if(0==i.length||!t)return i;i[i.length-1]==t&&i.pop();return i}(e,this._fakeSelectionContainer),t,kr.bind(null,this.domConverter))}_findReplaceActions(e,t,i){if(-1===e.indexOf("insert")||-1===e.indexOf("delete"))return e;let n=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of e)"insert"===a?r.push(i[s.equal+s.insert]):"delete"===a?o.push(t[s.equal+s.delete]):(n=n.concat(hr(o,r,wr).map(e=>"equal"===e?"replace":e)),n.push("equal"),o=[],r=[]),s[a]++;return n.concat(hr(o,r,wr).map(e=>"equal"===e?"replace":e))}_markDescendantTextToSync(e){if(e)if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(e){const t=e.createElement("div");return t.className="ck-fake-selection-container",Object.assign(t.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),t.textContent=" ",t}(t));const i=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(i,this.selection),!this._fakeSelectionNeedsUpdate(e))return;i.parentElement&&i.parentElement==e||e.appendChild(i),i.textContent=this.selection.fakeSelectionLabel||" ";const n=t.getSelection(),o=t.createRange();n.removeAllRanges(),o.selectNodeContents(i),n.addRange(o)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const i=this.domConverter.viewPositionToDom(this.selection.anchor),n=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(i.parent,i.offset),t.extend(n.parent,n.offset),Po.isGecko&&function(e,t){const i=e.parent;if(i.nodeType!=Node.ELEMENT_NODE||e.offset!=i.childNodes.length-1)return;const n=i.childNodes[e.offset];n&&"BR"==n.tagName&&t.addRange(t.getRangeAt(0))}(n,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,i=e.ownerDocument.getSelection();return!t||t.parentElement!==e||(i.anchorNode!==t&&!t.contains(i.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel)}_removeDomSelection(){for(const e of this.domDocuments){if(e.getSelection().rangeCount){const t=e.activeElement,i=this.domConverter.mapDomToView(t);t&&i&&e.getSelection().removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function br(e,t,i){const n=t instanceof Array?t:t.childNodes,o=n[i];if(er(o))return o.data=or+o.data,o;{const o=e.createTextNode(or);return Array.isArray(t)?n.splice(i,0,o):fr(t,i,o),o}}function wr(e,t){return mr(e)&&mr(t)&&!er(e)&&!er(t)&&e.nodeType!==Node.COMMENT_NODE&&t.nodeType!==Node.COMMENT_NODE&&e.tagName.toLowerCase()===t.tagName.toLowerCase()}function kr(e,t,i){return t===i||(er(t)&&er(i)?t.data===i.data:!(!e.isBlockFiller(t)||!e.isBlockFiller(i)))}Ke(pr,Ue);var _r={window:window,document:document};function vr(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function yr(e){const t=[];for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}const xr=nr(document),Ar=tr(document),Cr=ir(document);class Tr{constructor(e,t={}){this.document=e,this.blockFillerMode=t.blockFillerMode||"br",this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6","li","dd","dt","figcaption","td","th"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new gn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ho(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const t of e.childNodes)this.unbindDomElement(t)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}viewToDom(e,t,i={}){if(e.is("$text")){const i=this._processDataFromViewText(e);return t.createTextNode(i)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=t.createDocumentFragment(),i.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.render(t),i.bind&&this.bindElements(n,e),n;n=e.hasAttribute("xmlns")?t.createElementNS(e.getAttribute("xmlns"),e.name):t.createElement(e.name),e.is("rawElement")&&e.render(n),i.bind&&this.bindElements(n,e);for(const t of e.getAttributeKeys())n.setAttribute(t,e.getAttribute(t))}if(!1!==i.withChildren)for(const o of this.viewChildrenToDom(e,t,i))n.appendChild(o);return n}}*viewChildrenToDom(e,t,i={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren())n===o&&(yield this._getBlockFiller(t)),yield this.viewToDom(r,t,i),o++;n===o&&(yield this._getBlockFiller(t))}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),i=this.viewPositionToDom(e.end),n=document.createRange();return n.setStart(t.parent,t.offset),n.setEnd(i.parent,i.offset),n}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const i=this.findCorrespondingDomText(t);if(!i)return null;let n=e.offset;return rr(i)&&(n+=7),{parent:i,offset:n}}{let i,n,o;if(0===e.offset){if(i=this.mapViewToDom(t),!i)return null;o=i.childNodes[0]}else{const t=e.nodeBefore;if(n=t.is("$text")?this.findCorrespondingDomText(t):this.mapViewToDom(e.nodeBefore),!n)return null;i=n.parentNode,o=n.nextSibling}if(er(o)&&rr(o))return{parent:o,offset:7};return{parent:i,offset:n?vr(n)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(er(e)){if(sr(e))return null;{const t=this._processDataFromDomText(e);return""===t?null:new un(this.document,t)}}if(this.isComment(e))return null;{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new Uo(this.document),t.bind&&this.bindDocumentFragments(e,i);else{const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();i=new Xn(this.document,n),t.bind&&this.bindElements(e,i);const o=e.attributes;for(let e=o.length-1;e>=0;e--)i._setAttribute(o[e].name,o[e].value);if(!1!==t.withChildren&&this._rawContentElementMatcher.match(i))return i._setCustomProperty("$rawContent",e.innerHTML),this._encounteredRawContentDomNodes.add(e),i}if(!1!==t.withChildren)for(const n of this.domChildrenToView(e,t))i._appendChild(n);return i}}*domChildrenToView(e,t={}){for(let i=0;i<e.childNodes.length;i++){const n=e.childNodes[i],o=this.domToView(n,t);null!==o&&(yield o)}}domSelectionToView(e){if(1===e.rangeCount){let t=e.getRangeAt(0).startContainer;er(t)&&(t=t.parentNode);const i=this.fakeSelectionToView(t);if(i)return i}const t=this.isDomSelectionBackward(e),i=[];for(let t=0;t<e.rangeCount;t++){const n=e.getRangeAt(t),o=this.domRangeToView(n);o&&i.push(o)}return new ho(i,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),i=this.domPositionToView(e.endContainer,e.endOffset);return t&&i?new co(t,i):null}domPositionToView(e,t){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,vr(e));const i=this.mapDomToView(e);if(i&&(i.is("uiElement")||i.is("rawElement")))return ao._createBefore(i);if(er(e)){if(sr(e))return this.domPositionToView(e.parentNode,vr(e));const i=this.findCorrespondingViewText(e);let n=t;return i?(rr(e)&&(n-=7,n=n<0?0:n),new ao(i,n)):null}if(0===t){const t=this.mapDomToView(e);if(t)return new ao(t,0)}else{const i=e.childNodes[t-1],n=er(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(n&&n.parent)return new ao(n.parent,n.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(sr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const i=e.previousSibling;if(i){if(!this.isElement(i))return null;const e=this.mapDomToView(i);if(e){return e.nextSibling instanceof un?e.nextSibling:null}}else{const t=this.mapDomToView(e.parentNode);if(t){const e=t.getChild(0);return e instanceof un?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:e,scrollY:i}=_r.window,n=[];Pr(t,e=>{const{scrollLeft:t,scrollTop:i}=e;n.push([t,i])}),t.focus(),Pr(t,e=>{const[t,i]=n.shift();e.scrollLeft=t,e.scrollTop=i}),_r.window.scrollTo(e,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(e){return e&&e.nodeType==Node.COMMENT_NODE}isBlockFiller(e){return"br"==this.blockFillerMode?e.isEqualNode(xr):!("BR"!==e.tagName||!Sr(e,this.blockElements)||1!==e.parentNode.childNodes.length)||(e.isEqualNode(Cr)||function(e,t){return e.isEqualNode(Ar)&&Sr(e,t)&&1===e.parentNode.childNodes.length}(e,this.blockElements))}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const i=t.collapsed;return t.detach(),i}getHostViewElement(e){const t=yr(e);for(t.pop();t.length;){const e=t.pop(),i=this._domToViewMapping.get(e);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(e){switch(this.blockFillerMode){case"nbsp":return tr(e);case"markedNbsp":return ir(e);case"br":return nr(e)}}_isDomSelectionPositionCorrect(e,t){if(er(e)&&rr(e)&&t<7)return!1;if(this.isElement(e)&&rr(e.childNodes[t]))return!1;const i=this.mapDomToView(e);return!i||!i.is("uiElement")&&!i.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(e=>this.preElements.includes(e.name)))return t;if(" "==t.charAt(0)){const i=this._getTouchingViewTextNode(e,!1);!(i&&this._nodeEndsWithSpace(i))&&i||(t=" "+t.substr(1))}if(" "==t.charAt(t.length-1)){const i=this._getTouchingViewTextNode(e,!0);" "!=t.charAt(t.length-2)&&i&&" "!=i.data.charAt(0)||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(e=>this.preElements.includes(e.name)))return!1;const t=this._processDataFromViewText(e);return" "==t.charAt(t.length-1)}_processDataFromDomText(e){let t=e.data;if(Er(e,this.preElements))return ar(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const i=this._getTouchingInlineDomNode(e,!1),n=this._getTouchingInlineDomNode(e,!0),o=this._checkShouldLeftTrimDomText(e,i),r=this._checkShouldRightTrimDomText(e,n);return o&&(t=t.replace(/^ /,"")),r&&(t=t.replace(/ $/,"")),t=ar(new Text(t)),t=t.replace(/ \u00A0/g,"  "),(/( |\u00A0)\u00A0$/.test(t)||!n||n.data&&" "==n.data.charAt(0))&&(t=t.replace(/\u00A0$/," ")),o&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(!!Yi(t)||!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!rr(e)}_getTouchingViewTextNode(e,t){const i=new so({startPosition:t?ao._createAfter(e):ao._createBefore(e),direction:t?"forward":"backward"});for(const e of i){if(e.item.is("containerElement"))return null;if(e.item.is("element","br"))return null;if(e.item.is("$textProxy"))return e.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const i=t?"nextNode":"previousNode",n=e.ownerDocument,o=yr(e)[0],r=n.createTreeWalker(o,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>er(e)||"BR"==e.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=e;const s=r[i]();if(null!==s){const t=function(e,t){const i=yr(e),n=yr(t);let o=0;for(;i[o]==n[o]&&i[o];)o++;return 0===o?null:i[o-1]}(e,s);if(t&&!Er(e,this.blockElements,t)&&!Er(s,this.blockElements,t))return s}return null}}function Er(e,t,i){let n=yr(e);return i&&(n=n.slice(n.indexOf(i)+1)),n.some(e=>e.tagName&&t.includes(e.tagName.toLowerCase()))}function Pr(e,t){for(;e&&e!=_r.document;)t(e),e=e.parentNode}function Sr(e,t){const i=e.parentNode;return i&&i.tagName&&t.includes(i.tagName.toLowerCase())}function Mr(e){const t=Object.prototype.toString.apply(e);return"[object Window]"==t||"[object global]"==t}var Ir=Le({},u,{listenTo(e,...t){if(mr(e)||Mr(e)){const i=this._getProxyEmitter(e)||new Nr(e);i.attach(...t),e=i}u.listenTo.call(this,e,...t)},stopListening(e,t,i){if(mr(e)||Mr(e)){const t=this._getProxyEmitter(e);if(!t)return;e=t}u.stopListening.call(this,e,t,i),e instanceof Nr&&e.detach(t)},_getProxyEmitter(e){return t=this,i=Rr(e),t[l]&&t[l][i]?t[l][i].emitter:null;var t,i}});class Nr{constructor(e){h(this,Rr(e)),this._domNode=e}}function Rr(e){return e["data-ck-expando"]||(e["data-ck-expando"]=s())}Le(Nr.prototype,u,{attach(e,t,i={}){if(this._domListeners&&this._domListeners[e])return;const n={capture:!!i.useCapture,passive:!!i.usePassive},o=this._createDomListener(e,n);this._domNode.addEventListener(e,o,n),this._domListeners||(this._domListeners={}),this._domListeners[e]=o},detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()},_createDomListener(e,t){const i=t=>{this.fire(e,t)};return i.removeListener=()=>{this._domNode.removeEventListener(e,i,t),delete this._domListeners[e]},i}});class Or{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&3===e.nodeType&&(e=e.parentNode),!(!e||1!==e.nodeType)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}Ke(Or,Ir);var Dr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var Lr=function(e){return this.__data__.has(e)};function zr(e){var t=-1,i=null==e?0:e.length;for(this.__data__=new Ft;++t<i;)this.add(e[t])}zr.prototype.add=zr.prototype.push=Dr,zr.prototype.has=Lr;var Vr=zr;var jr=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n;)if(t(e[i],i,e))return!0;return!1};var Br=function(e,t){return e.has(t)};var Fr=function(e,t,i,n,o,r){var s=1&i,a=e.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(e),d=r.get(t);if(l&&d)return l==t&&d==e;var u=-1,h=!0,f=2&i?new Vr:void 0;for(r.set(e,t),r.set(t,e);++u<a;){var g=e[u],m=t[u];if(n)var p=s?n(m,g,u,t,e,r):n(g,m,u,e,t,r);if(void 0!==p){if(p)continue;h=!1;break}if(f){if(!jr(t,(function(e,t){if(!Br(f,t)&&(g===e||o(g,e,i,n,r)))return f.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,i,n,r)){h=!1;break}}return r.delete(e),r.delete(t),h};var Hr=function(e){var t=-1,i=Array(e.size);return e.forEach((function(e,n){i[++t]=[n,e]})),i};var Ur=function(e){var t=-1,i=Array(e.size);return e.forEach((function(e){i[++t]=e})),i},Wr=_?_.prototype:void 0,qr=Wr?Wr.valueOf:void 0;var $r=function(e,t,i,n,o,r,s){switch(i){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!r(new Ci(e),new Ci(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return G(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Hr;case"[object Set]":var c=1&n;if(a||(a=Ur),e.size!=t.size&&!c)return!1;var l=s.get(e);if(l)return l==t;n|=2,s.set(e,t);var d=Fr(a(e),a(t),n,o,r,s);return s.delete(e),d;case"[object Symbol]":if(qr)return qr.call(e)==qr.call(t)}return!1},Yr=Object.prototype.hasOwnProperty;var Gr=function(e,t,i,n,o,r){var s=1&i,a=di(e),c=a.length;if(c!=di(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:Yr.call(t,d)))return!1}var u=r.get(e),h=r.get(t);if(u&&h)return u==t&&h==e;var f=!0;r.set(e,t),r.set(t,e);for(var g=s;++l<c;){var m=e[d=a[l]],p=t[d];if(n)var b=s?n(p,m,d,t,e,r):n(m,p,d,e,t,r);if(!(void 0===b?m===p||o(m,p,i,n,r):b)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var w=e.constructor,k=t.constructor;w==k||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof k&&k instanceof k||(f=!1)}return r.delete(e),r.delete(t),f},Kr=Object.prototype.hasOwnProperty;var Qr=function(e,t,i,n,o,r){var s=_e(e),a=_e(t),c=s?"[object Array]":yi(e),l=a?"[object Array]":yi(t),d="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),u="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),h=c==l;if(h&&Object(ve.a)(e)){if(!Object(ve.a)(t))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new Wt),s||Ee(e)?Fr(e,t,i,n,o,r):$r(e,t,c,i,n,o,r);if(!(1&i)){var f=d&&Kr.call(e,"__wrapped__"),g=u&&Kr.call(t,"__wrapped__");if(f||g){var m=f?e.value():e,p=g?t.value():t;return r||(r=new Wt),o(m,p,i,n,r)}}return!!h&&(r||(r=new Wt),Gr(e,t,i,n,o,r))};var Jr=function e(t,i,n,o,r){return t===i||(null==t||null==i||!ge(t)&&!ge(i)?t!=t&&i!=i:Qr(t,i,n,o,e,r))};var Zr=function(e,t,i){var n=(i="function"==typeof i?i:void 0)?i(e,t):void 0;return void 0===n?Jr(e,t,void 0,i):!!n};class Xr extends Or{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(0===e.length)return;const t=this.domConverter,i=new Map,n=new Set;for(const i of e)if("childList"===i.type){const e=t.mapDomToView(i.target);if(e&&(e.is("uiElement")||e.is("rawElement")))continue;e&&!this._isBogusBrMutation(i)&&n.add(e)}for(const o of e){const e=t.mapDomToView(o.target);if((!e||!e.is("uiElement")&&!e.is("rawElement"))&&"characterData"===o.type){const e=t.findCorrespondingViewText(o.target);e&&!n.has(e.parent)?i.set(e,{type:"text",oldText:e.data,newText:ar(o.target),node:e}):!e&&rr(o.target)&&n.add(t.mapDomToView(o.target.parentNode))}}const o=[];for(const e of i.values())this.renderer.markToSync("text",e.node),o.push(e);for(const e of n){const i=t.mapViewToDom(e),n=Array.from(e.getChildren()),r=Array.from(t.domChildrenToView(i,{withChildren:!1}));Zr(n,r,a)||(this.renderer.markToSync("children",e),o.push({type:"children",oldChildren:n,newChildren:r,node:e}))}const r=e[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const e=t.domPositionToView(r.anchorNode,r.anchorOffset),i=t.domPositionToView(r.focusNode,r.focusOffset);e&&i&&(s=new ho(e),s.setFocus(i))}function a(e,t){if(!Array.isArray(e))return e===t||!(!e.is("$text")||!t.is("$text"))&&e.data===t.data}o.length&&(this.document.fire("mutations",o,s),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return null===e.nextSibling&&0===e.removedNodes.length&&1==e.addedNodes.length&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class es{constructor(e,t,i){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Le(this,i)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ts extends Or{constructor(e){super(e),this.useCapture=!1}observe(e){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(e,t)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(t.target)&&this.onDomEvent(t)},{useCapture:this.useCapture})})}fire(e,t,i){this.isEnabled&&this.document.fire(e,new es(this.view,t,i))}}class is extends ts{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ro(this)}})}}var ns=function(){return k.a.Date.now()},os=/\s/;var rs=function(e){for(var t=e.length;t--&&os.test(e.charAt(t)););return t},ss=/^\s+/;var as=function(e){return e?e.slice(0,rs(e)+1).replace(ss,""):e},cs=/^[-+]0x[0-9a-f]+$/i,ls=/^0b[01]+$/i,ds=/^0o[0-7]+$/i,us=parseInt;var hs=function(e){if("number"==typeof e)return e;if(pn(e))return NaN;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=as(e);var i=ls.test(e);return i||ds.test(e)?us(e.slice(2),i?2:8):cs.test(e)?NaN:+e},fs=Math.max,gs=Math.min;var ms=function(e,t,i){var n,o,r,s,a,c,l=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=n,r=o;return n=o=void 0,l=t,s=e.apply(r,i)}function g(e){return l=e,a=setTimeout(p,t),d?f(e):s}function m(e){var i=e-c;return void 0===c||i>=t||i<0||u&&e-l>=r}function p(){var e=ns();if(m(e))return b(e);a=setTimeout(p,function(e){var i=t-(e-c);return u?gs(i,r-(e-l)):i}(e))}function b(e){return a=void 0,h&&n?f(e):(n=o=void 0,s)}function k(){var e=ns(),i=m(e);if(n=arguments,o=this,c=e,i){if(void 0===a)return g(c);if(u)return clearTimeout(a),a=setTimeout(p,t),f(c)}return void 0===a&&(a=setTimeout(p,t)),s}return t=hs(t)||0,w(i)&&(d=!!i.leading,r=(u="maxWait"in i)?fs(hs(i.maxWait)||0,t):r,h="trailing"in i?!!i.trailing:h),k.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=o=a=void 0},k.flush=function(){return void 0===a?s:b(ns())},k};class ps extends Or{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ms(e=>this.document.fire("selectionChangeDone",e),200)}observe(){const e=this.document;e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&i.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(i.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,i=new ho(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Io.arrowleft&&e!=Io.arrowup||i.setTo(i.getFirstPosition()),e!=Io.arrowright&&e!=Io.arrowdown||i.setTo(i.getLastPosition());const n={oldSelection:t,newSelection:i,domSelection:null};this.document.fire("selectionChange",n),this._fireSelectionChangeDoneDebounced(n)}}class bs extends Or{constructor(e){super(e),this.mutationObserver=e.getObserver(Xr),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ms(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument;this._documents.has(t)||(this.listenTo(t,"selectionchange",(e,i)=>{this._handleSelectionChange(i,t)}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const i=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(i.anchorNode))return;this.mutationObserver.flush();const n=this.domConverter.domSelectionToView(i);if(0!=n.rangeCount){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(n)&&this.domConverter.isDomSelectionCorrect(i)||++this._loopbackCounter>60))if(this.selection.isSimilar(n))this.view.forceRender();else{const e={oldSelection:this.selection,newSelection:n,domSelection:i};this.document.fire("selectionChange",e),this._fireSelectionChangeDoneDebounced(e)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ws extends ts{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.forceRender(),50)}),t.on("blur",(i,n)=>{const o=t.selection.editableElement;null!==o&&o!==n.target||(t.isFocused=!1,e.forceRender())})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ks extends ts{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class _s extends ts{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class vs{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}var ys=function(e){return"string"==typeof e||!_e(e)&&ge(e)&&"[object String]"==S(e)};function xs(e){return"[object Range]"==Object.prototype.toString.apply(e)}function As(e){const t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const Cs=["top","right","bottom","left","width","height"];class Ts{constructor(e){const t=xs(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Yi(e)||t)if(t){const t=Ts.getDomRangeRects(e);Es(this,Ts.getBoundingRect(t))}else Es(this,e.getBoundingClientRect());else if(Mr(e)){const{innerWidth:t,innerHeight:i}=e;Es(this,{top:0,right:t,bottom:i,left:0,width:t,height:i})}else Es(this,e)}clone(){return new Ts(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Ts(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Ps(e)){let i=e.parentNode||e.commonAncestorContainer;for(;i&&!Ps(i);){const e=new Ts(i),n=t.getIntersection(e);if(!n)return null;n.getArea()<t.getArea()&&(t=n),i=i.parentNode}}return t}isEqual(e){for(const t of Cs)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,i,n;if(Mr(e))t=e.innerWidth-e.document.documentElement.clientWidth,i=e.innerHeight-e.document.documentElement.clientHeight,n=e.getComputedStyle(e.document.documentElement).direction;else{const o=As(this._source);t=e.offsetWidth-e.clientWidth-o.left-o.right,i=e.offsetHeight-e.clientHeight-o.top-o.bottom,n=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=o.left,this.top+=o.top,this.right-=o.right,this.bottom-=o.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,"ltr"===n?this.right-=t:this.left+=t,this.height-=i,this.bottom-=i,this}static getDomRangeRects(e){const t=[],i=Array.from(e.getClientRects());if(i.length)for(const e of i)t.push(new Ts(e));else{let i=e.startContainer;er(i)&&(i=i.parentNode);const n=new Ts(i.getBoundingClientRect());n.right=n.left,n.width=0,t.push(n)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY};let i=0;for(const n of e)i++,t.left=Math.min(t.left,n.left),t.top=Math.min(t.top,n.top),t.right=Math.max(t.right,n.right),t.bottom=Math.max(t.bottom,n.bottom);return 0==i?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ts(t))}}function Es(e,t){for(const i of Cs)e[i]=t[i]}function Ps(e){return!!Yi(e)&&e===e.ownerDocument.body}class Ss{constructor(e,t){Ss._observerInstance||Ss._createObserver(),this._element=e,this._callback=t,Ss._addElementCallback(e,t),Ss._observerInstance.observe(e)}destroy(){Ss._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Ss._elementCallbacks||(Ss._elementCallbacks=new Map);let i=Ss._elementCallbacks.get(e);i||(i=new Set,Ss._elementCallbacks.set(e,i)),i.add(t)}static _deleteElementCallback(e,t){const i=Ss._getElementCallbacks(e);i&&(i.delete(t),i.size||(Ss._elementCallbacks.delete(e),Ss._observerInstance.unobserve(e))),Ss._elementCallbacks&&!Ss._elementCallbacks.size&&(Ss._observerInstance=null,Ss._elementCallbacks=null)}static _getElementCallbacks(e){return Ss._elementCallbacks?Ss._elementCallbacks.get(e):null}static _createObserver(){let e;e="function"==typeof _r.window.ResizeObserver?_r.window.ResizeObserver:Ms,Ss._observerInstance=new e(e=>{for(const t of e){const e=Ss._getElementCallbacks(t.target);if(e)for(const i of e)i(t)}})}}Ss._observerInstance=null,Ss._elementCallbacks=null;class Ms{constructor(e){this._callback=e,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(e){this._elements.add(e),this._checkElementRectsAndExecuteCallback(),1===this._elements.size&&this._startPeriodicCheck()}unobserve(e){this._elements.delete(e),this._previousRects.delete(e),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const e=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(e,100)};this.listenTo(_r.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(e,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const e=[];for(const t of this._elements)this._hasRectChanged(t)&&e.push({target:t,contentRect:this._previousRects.get(t)});e.length&&this._callback(e)}_hasRectChanged(e){if(!e.ownerDocument.body.contains(e))return!1;const t=new Ts(e),i=this._previousRects.get(e),n=!i||!i.isEqual(t);return this._previousRects.set(e,t),n}}function Is(e){return t=>t+e}function Ns(e){const t=e.next();return t.done?null:t.value}Ke(Ms,Ir);class Rs{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new c.a("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}Ke(Rs,Ir),Ke(Rs,Ue);class Os{constructor(){this._listener=Object.create(Ir)}listenTo(e){this._listener.listenTo(e,"keydown",(e,t)=>{this._listener.fire("_keydown:"+Ro(t),t)})}set(e,t,i={}){const n=Oo(e),o=i.priority;this._listener.listenTo(this._listener,"_keydown:"+n,(e,i)=>{t(i,()=>{i.preventDefault(),i.stopPropagation(),e.stop()}),e.return=!0},{priority:o})}press(e){return!!this._listener.fire("_keydown:"+Ro(e),e)}destroy(){this._listener.stopListening()}}class Ds extends Or{constructor(e){super(e),this.document.on("keydown",(e,t)=>{if(this.isEnabled&&((i=t.keyCode)==Io.arrowright||i==Io.arrowleft||i==Io.arrowup||i==Io.arrowdown)){const i=new go(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(i,t),i.stop.called&&e.stop()}var i})}observe(){}}function Ls({target:e,viewportOffset:t=0}){const i=Us(e);let n=i,o=null;for(;n;){let r;r=Ws(n==i?e:o),Vs(r,()=>qs(e,n));const s=qs(e,n);if(zs(n,s,t),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function zs(e,t,i){const n=t.clone().moveBy(0,i),o=t.clone().moveBy(0,-i),r=new Ts(e).excludeScrollbarsAndBorders();if(![o,n].every(e=>r.contains(e))){let{scrollX:s,scrollY:a}=e;Bs(o,r)?a-=r.top-t.top+i:js(n,r)&&(a+=t.bottom-r.bottom+i),Fs(t,r)?s-=r.left-t.left+i:Hs(t,r)&&(s+=t.right-r.right+i),e.scrollTo(s,a)}}function Vs(e,t){const i=Us(e);let n,o;for(;e!=i.document.body;)o=t(),n=new Ts(e).excludeScrollbarsAndBorders(),n.contains(o)||(Bs(o,n)?e.scrollTop-=n.top-o.top:js(o,n)&&(e.scrollTop+=o.bottom-n.bottom),Fs(o,n)?e.scrollLeft-=n.left-o.left:Hs(o,n)&&(e.scrollLeft+=o.right-n.right)),e=e.parentNode}function js(e,t){return e.bottom>t.bottom}function Bs(e,t){return e.top<t.top}function Fs(e,t){return e.left<t.left}function Hs(e,t){return e.right>t.right}function Us(e){return xs(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function Ws(e){if(xs(e)){let t=e.commonAncestorContainer;return er(t)&&(t=t.parentNode),t}return e.parentNode}function qs(e,t){const i=Us(e),n=new Ts(e);if(i===t)return n;{let e=i;for(;e!=t;){const t=e.frameElement,i=new Ts(t).excludeScrollbarsAndBorders();n.moveBy(i.left,i.top),e=e.parent}}return n}Object.assign({},{scrollViewportToShowTarget:Ls,scrollAncestorsToShowTarget:function(e){Vs(Ws(e),()=>new Ts(e))}});class $s{constructor(e){this.document=new vo(e),this.domConverter=new Tr(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new pr(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Wo(this.document),this.addObserver(Xr),this.addObserver(bs),this.addObserver(ws),this.addObserver(is),this.addObserver(ps),this.addObserver(ks),this.addObserver(Ds),Po.isAndroid&&this.addObserver(_s),this.document.on("arrowKey",cr,{priority:"low"}),jo(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const i=this.document.getRoot(t);i._name=e.tagName.toLowerCase();const n={};for(const{name:t,value:o}of Array.from(e.attributes))n[t]=o,"class"===t?this._writer.addClass(o.split(" "),i):this._writer.setAttribute(t,o,i);this._initialDomRootAttributes.set(e,n);const o=()=>{this._writer.setAttribute("contenteditable",!i.isReadOnly,i),i.isReadOnly?this._writer.addClass("ck-read-only",i):this._writer.removeClass("ck-read-only",i)};o(),this.domRoots.set(t,e),this.domConverter.bindElements(e,i),this._renderer.markToSync("children",i),this._renderer.markToSync("attributes",i),this._renderer.domDocuments.add(e.ownerDocument),i.on("change:children",(e,t)=>this._renderer.markToSync("children",t)),i.on("change:attributes",(e,t)=>this._renderer.markToSync("attributes",t)),i.on("change:text",(e,t)=>this._renderer.markToSync("text",t)),i.on("change:isReadOnly",()=>this.change(o)),i.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const i of this._observers.values())i.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:e})=>t.removeAttribute(e));const i=this._initialDomRootAttributes.get(t);for(const e in i)t.setAttribute(e,i[e]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[e,i]of this.domRoots)t.observe(i,e);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&Ls({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new c.a("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(e){c.a.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return ao._createAt(e,t)}createPositionAfter(e){return ao._createAfter(e)}createPositionBefore(e){return ao._createBefore(e)}createRange(e,t){return new co(e,t)}createRangeOn(e){return co._createOn(e)}createRangeIn(e){return co._createIn(e)}createSelection(e,t,i){return new ho(e,t,i)}_disableRendering(e){this._renderingDisabled=e,0==e&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}Ke($s,Ue);class Ys{constructor(e){this.parent=null,this._attrs=fn(e)}get index(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildIndex(this)))throw new c.a("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildStartOffset(this)))throw new c.a("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}getCommonAncestor(e,t={}){const i=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;i[o]==n[o]&&i[o];)o++;return 0===o?null:i[o-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),i=e.getPath(),n=cn(t,i);switch(n){case"prefix":return!0;case"extension":return!1;default:return t[n]<i[n]}}isAfter(e){return this!=e&&(this.root===e.root&&!this.isBefore(e))}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((e,t)=>(e[t[0]]=t[1],e),{})),e}is(e){return"node"===e||"model:node"===e}_clone(){return new Ys(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=fn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class Gs extends Ys{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return"$text"===e||"model:$text"===e||"text"===e||"model:text"===e||"node"===e||"model:node"===e}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Gs(this.data,this.getAttributes())}static fromJSON(e){return new Gs(e.data,e.attributes)}}class Ks{constructor(e,t,i){if(this.textNode=e,t<0||t>e.offsetSize)throw new c.a("model-textproxy-wrong-offsetintext",this);if(i<0||t+i>e.offsetSize)throw new c.a("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+i),this.offsetInText=t}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return"$textProxy"===e||"model:$textProxy"===e||"textProxy"===e||"model:textProxy"===e}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Qs{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return-1==t?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return null===t?null:this._nodes.slice(0,t).reduce((e,t)=>e+t.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new c.a("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const i of this._nodes){if(e>=t&&e<t+i.offsetSize)return this.getNodeIndex(i);t+=i.offsetSize}if(t!=e)throw new c.a("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const e of t)if(!(e instanceof Ys))throw new c.a("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Js extends Ys{constructor(e,t,i){super(t),this.name=e,this._children=new Qs,i&&this._insertChild(0,i)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(e,t=null){return t?t===this.name&&("element"===e||"model:element"===e):"element"===e||"model:element"===e||"node"===e||"model:node"===e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const i of e)t=t.getChild(t.offsetToIndex(i));return t}findAncestor(e,t={includeSelf:!1}){let i=t.includeSelf?this:this.parent;for(;i;){if(i.name===e)return i;i=i.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(e=>e._clone(!0)):null;return new Js(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const i=function(e){if("string"==typeof e)return[new Gs(e)];Ji(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Gs(e):e instanceof Ks?new Gs(e.data,e.getAttributes()):e)}(t);for(const e of i)null!==e.parent&&e._remove(),e.parent=this;this._children._insertNodes(e,i)}_removeChildren(e,t=1){const i=this._children._removeNodes(e,t);for(const e of i)e.parent=null;return i}static fromJSON(e){let t=null;if(e.children){t=[];for(const i of e.children)i.name?t.push(Js.fromJSON(i)):t.push(Gs.fromJSON(i))}return new Js(e.name,e.attributes,t)}}class Zs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new c.a("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if("forward"!=t&&"backward"!=t)throw new c.a("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=ea._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,i,n,o;do{n=this.position,o=this._visitedParent,({done:t,value:i}=this.next())}while(!t&&e(i));t||(this.position=n,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),i=this._visitedParent;if(null===i.parent&&t.offset===i.maxOffset)return{done:!0};if(i===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const n=t.parent,o=ta(t,n),r=o||ia(t,n,o);if(r instanceof Js)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,Xs("elementStart",r,e,t,1);if(r instanceof Gs){let n;if(this.singleCharacters)n=1;else{let e=r.endOffset;this._boundaryEndParent==i&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),n=e-t.offset}const o=t.offset-r.startOffset,s=new Ks(r,o,n);return t.offset+=n,this.position=t,Xs("text",s,e,t,n)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=i.parent,this.ignoreElementEnd?this._next():Xs("elementEnd",i,e,t)}_previous(){const e=this.position,t=this.position.clone(),i=this._visitedParent;if(null===i.parent&&0===t.offset)return{done:!0};if(i==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const n=t.parent,o=ta(t,n),r=o||na(t,n,o);if(r instanceof Js)return t.offset--,this.shallow?(this.position=t,Xs("elementStart",r,e,t,1)):(t.path.push(r.maxOffset),this.position=t,this._visitedParent=r,this.ignoreElementEnd?this._previous():Xs("elementEnd",r,e,t));if(r instanceof Gs){let n;if(this.singleCharacters)n=1;else{let e=r.startOffset;this._boundaryStartParent==i&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),n=t.offset-e}const o=t.offset-r.startOffset,s=new Ks(r,o-n,n);return t.offset-=n,this.position=t,Xs("text",s,e,t,n)}return t.path.pop(),this.position=t,this._visitedParent=i.parent,Xs("elementStart",i,e,t,1)}}function Xs(e,t,i,n,o){return{done:!1,value:{type:e,item:t,previousPosition:i,nextPosition:n,length:o}}}class ea{constructor(e,t,i="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new c.a("model-position-root-invalid",e);if(!(t instanceof Array)||0===t.length)throw new c.a("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=i}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new c.a("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new c.a("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return ta(this,this.parent)}get nodeAfter(){const e=this.parent;return ia(this,e,ta(this,e))}get nodeBefore(){const e=this.parent;return na(this,e,ta(this,e))}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=cn(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const i=new Zs(t);return i.skip(e),i.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=cn(this.path,e.path),i="string"==typeof t?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,i)}getCommonAncestor(e){const t=this.getAncestors(),i=e.getAncestors();let n=0;for(;t[n]==i[n]&&t[n];)n++;return 0===n?null:t[n-1]}getShiftedBy(e){const t=this.clone(),i=t.offset+e;return t.offset=i<0?0:i,t}isAfter(e){return"after"==this.compareWith(e)}isBefore(e){return"before"==this.compareWith(e)}isEqual(e){return"same"==this.compareWith(e)}isTouching(e){let t=null,i=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=ea._createAt(this),i=ea._createAt(e);break;case"after":t=ea._createAt(e),i=ea._createAt(this);break;default:return!1}let n=t.parent;for(;t.path.length+i.path.length;){if(t.isEqual(i))return!0;if(t.path.length>i.path.length){if(t.offset!==n.maxOffset)return!1;t.path=t.path.slice(0,-1),n=n.parent,t.offset++}else{if(0!==i.offset)return!1;i.path=i.path.slice(0,-1)}}}is(e){return"position"===e||"model:position"===e}hasSameParentAs(e){if(this.root!==e.root)return!1;return"same"==cn(this.getParentPath(),e.getParentPath())}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=ea._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let i;return t.containsPosition(this)||t.start.isEqual(this)?(i=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(i=i._getTransformedByDeletion(e.deletionPosition,1))):i=this.isEqual(e.deletionPosition)?ea._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),i}_getTransformedByDeletion(e,t){const i=ea._createAt(this);if(this.root!=e.root)return i;if("same"==cn(e.getParentPath(),this.getParentPath())){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;i.offset-=t}}else if("prefix"==cn(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;if(e.offset<=this.path[n]){if(e.offset+t>this.path[n])return null;i.path[n]-=t}}return i}_getTransformedByInsertion(e,t){const i=ea._createAt(this);if(this.root!=e.root)return i;if("same"==cn(e.getParentPath(),this.getParentPath()))(e.offset<this.offset||e.offset==this.offset&&"toPrevious"!=this.stickiness)&&(i.offset+=t);else if("prefix"==cn(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;e.offset<=this.path[n]&&(i.path[n]+=t)}return i}_getTransformedByMove(e,t,i){if(t=t._getTransformedByDeletion(e,i),e.isEqual(t))return ea._createAt(this);const n=this._getTransformedByDeletion(e,i);return null===n||e.isEqual(this)&&"toNext"==this.stickiness||e.getShiftedBy(i).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(e,t):n._getTransformedByInsertion(t,i)}_getCombined(e,t){const i=e.path.length-1,n=ea._createAt(t);return n.stickiness=this.stickiness,n.offset=n.offset+this.path[i]-e.offset,n.path=[...n.path,...this.path.slice(i+1)],n}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,i="toNone"){if(e instanceof ea)return new ea(e.root,e.path,e.stickiness);{const n=e;if("end"==t)t=n.maxOffset;else{if("before"==t)return this._createBefore(n,i);if("after"==t)return this._createAfter(n,i);if(0!==t&&!t)throw new c.a("model-createpositionat-offset-required",[this,e])}if(!n.is("element")&&!n.is("documentFragment"))throw new c.a("model-position-parent-incorrect",[this,e]);const o=n.getPath();return o.push(t),new this(n.root,o,i)}}static _createAfter(e,t){if(!e.parent)throw new c.a("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new c.a("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if("$graveyard"===e.root){const i=new ea(t.graveyard,e.path);return i.stickiness=e.stickiness,i}if(!t.getRoot(e.root))throw new c.a("model-position-fromjson-no-root",t,{rootName:e.root});return new ea(t.getRoot(e.root),e.path,e.stickiness)}}function ta(e,t){const i=t.getChild(t.offsetToIndex(e.offset));return i&&i.is("$text")&&i.startOffset<e.offset?i:null}function ia(e,t,i){return null!==i?null:t.getChild(t.offsetToIndex(e.offset))}function na(e,t,i){return null!==i?null:t.getChild(t.offsetToIndex(e.offset)-1)}class oa{constructor(e,t=null){this.start=ea._createAt(e),this.end=t?ea._createAt(t):ea._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Zs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==cn(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const i=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return i&&n}containsItem(e){const t=ea._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return"range"===e||"model:range"===e}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new oa(this.start,e.start)),this.containsPosition(e.end)&&t.push(new oa(e.end,this.end))):t.push(new oa(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,i=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(i=e.end),new oa(t,i)}return null}getJoined(e,t=!1){let i=this.isIntersecting(e);if(i||(i=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!i)return null;let n=this.start,o=this.end;return e.start.isBefore(n)&&(n=e.start),e.end.isAfter(o)&&(o=e.end),new oa(n,o)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,i=ea._createAt(this.start);let n=i.parent;for(;i.path.length>t+1;){const t=n.maxOffset-i.offset;0!==t&&e.push(new oa(i,i.getShiftedBy(t))),i.path=i.path.slice(0,-1),i.offset++,n=n.parent}for(;i.path.length<=this.end.path.length;){const t=this.end.path[i.path.length-1],n=t-i.offset;0!==n&&e.push(new oa(i,i.getShiftedBy(n))),i.offset=t,i.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Zs(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Zs(e);for(const e of t)yield e.item}*getPositions(e={}){e.boundaries=this;const t=new Zs(e);yield t.position;for(const e of t)yield e.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new oa(this.start,this.end)]}getTransformedByOperations(e){const t=[new oa(this.start,this.end)];for(const i of e)for(let e=0;e<t.length;e++){const n=t[e].getTransformedByOperation(i);t.splice(e,1,...n),e+=n.length-1}for(let e=0;e<t.length;e++){const i=t[e];for(let n=e+1;n<t.length;n++){const e=t[n];(i.containsRange(e)||e.containsRange(i)||i.isEqual(e))&&t.splice(n,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const i=e.sourcePosition,n=e.howMany,o=e.targetPosition;return this._getTransformedByMove(i,o,n,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let i=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(i=this.end.getShiftedBy(1)),t.root!=i.root&&(i=this.end.getShiftedBy(-1)),new oa(t,i)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new oa(this.start);let t=this.start._getTransformedByMergeOperation(e),i=this.end._getTransformedByMergeOperation(e);return t.root!=i.root&&(i=this.end.getShiftedBy(-1)),t.isAfter(i)?(e.sourcePosition.isBefore(e.targetPosition)?(t=ea._createAt(i),t.offset=0):(e.deletionPosition.isEqual(t)||(i=e.deletionPosition),t=e.targetPosition),new oa(t,i)):new oa(t,i)}_getTransformedByInsertion(e,t,i=!1){if(i&&this.containsPosition(e))return[new oa(this.start,e),new oa(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new oa(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,i,n=!1){if(this.isCollapsed){const n=this.start._getTransformedByMove(e,t,i);return[new oa(n)]}const o=oa._createFromPositionAndShift(e,i),r=t._getTransformedByDeletion(e,i);if(this.containsPosition(t)&&!n&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const n=this.start._getTransformedByMove(e,t,i),o=this.end._getTransformedByMove(e,t,i);return[new oa(n,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new oa(a[0].start._getTransformedByDeletion(e,i),a[0].end._getTransformedByDeletion(e,i)):2==a.length&&(c=new oa(this.start,this.end._getTransformedByDeletion(e,i))),s=c?c._getTransformedByInsertion(r,i,null!==l||n):[],l){const e=new oa(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,e):s.push(e)}return s}_getTransformedByDeletion(e,t){let i=this.start._getTransformedByDeletion(e,t),n=this.end._getTransformedByDeletion(e,t);return null==i&&null==n?null:(null==i&&(i=e),null==n&&(n=e),new oa(i,n))}static _createFromPositionAndShift(e,t){const i=e,n=e.getShiftedBy(t);return t>0?new this(i,n):new this(n,i)}static _createIn(e){return new this(ea._createAt(e,0),ea._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(ea._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(0===e.length)throw new c.a("range-create-from-ranges-empty-array",null);if(1==e.length)return e[0].clone();const t=e[0];e.sort((e,t)=>e.start.isAfter(t.start)?1:-1);const i=e.indexOf(t),n=new this(t.start,t.end);if(i>0)for(let t=i-1;e[t].end.isEqual(n.start);t++)n.start=ea._createAt(e[t].start);for(let t=i+1;t<e.length&&e[t].start.isEqual(n.end);t++)n.end=ea._createAt(e[t].end);return n}static fromJSON(e,t){return new this(ea.fromJSON(e.start,t),ea.fromJSON(e.end,t))}}class ra{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const i=this._modelToViewMapping.get(t.modelPosition.parent);t.viewPosition=this.findPositionIn(i,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const i=this.findMappedViewAncestor(t.viewPosition),n=this._viewToModelMapping.get(i),o=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,i);t.modelPosition=ea._createAt(n,o)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e){const t=this.toModelElement(e);if(this._viewToModelMapping.delete(e),this._elementToMarkerNames.has(e))for(const t of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(t);this._modelToViewMapping.get(t)==e&&this._modelToViewMapping.delete(t)}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const i=this._markerNameToElements.get(t)||new Set;i.add(e);const n=this._elementToMarkerNames.get(e)||new Set;n.add(t),this._markerNameToElements.set(t,i),this._elementToMarkerNames.set(e,n)}unbindElementFromMarkerName(e,t){const i=this._markerNameToElements.get(t);i&&(i.delete(e),0==i.size&&this._markerNameToElements.delete(t));const n=this._elementToMarkerNames.get(e);n&&(n.delete(t),0==n.size&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new oa(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new co(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const i={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",i),i.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const i=new Set;for(const e of t)if(e.is("attributeElement"))for(const t of e.getElementsWithSameId())i.add(t);else i.add(e);return i}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,i){if(i!=e){return this._toModelOffset(e.parent,e.index,i)+this._toModelOffset(e,t,e)}if(e.is("$text"))return t;let n=0;for(let i=0;i<t;i++)n+=this.getModelLength(e.getChild(i));return n}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name)){return this._viewToModelLengthCallbacks.get(e.name)(e)}if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const i of e.getChildren())t+=this.getModelLength(i);return t}}findPositionIn(e,t){let i,n=0,o=0,r=0;if(e.is("$text"))return new ao(e,t);for(;o<t;)i=e.getChild(r),n=this.getModelLength(i),o+=n,r++;return o==t?this._moveViewPositionToTextNode(new ao(e,r)):this.findPositionIn(i,t-(o-n))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,i=e.nodeAfter;return t instanceof un?new ao(t,t.data.length):i instanceof un?new ao(i,0):e}}Ke(ra,u);class sa{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=aa(t),e instanceof Ks&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=aa(t),e instanceof Ks&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=aa(t),e instanceof Ks&&(e=this._getSymbolForTextProxy(e));const i=this._consumable.get(e);if(void 0===i)return null;const n=i.get(t);return void 0===n?null:n}revert(e,t){t=aa(t),e instanceof Ks&&(e=this._getSymbolForTextProxy(e));const i=this.test(e,t);return!1===i?(this._consumable.get(e).set(t,!0),!0):!0!==i&&null}_getSymbolForTextProxy(e){let t=null;const i=this._textProxyRegistry.get(e.startOffset);if(i){const n=i.get(e.endOffset);n&&(t=n.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e.startOffset,e.endOffset,e.parent)),t}_addSymbolForTextProxy(e,t,i){const n=Symbol("textProxySymbol");let o,r;return o=this._textProxyRegistry.get(e),o||(o=new Map,this._textProxyRegistry.set(e,o)),r=o.get(t),r||(r=new Map,o.set(t,r)),r.set(i,n),n}}function aa(e){const t=e.split(":");return t.length>1?t[0]+":"+t[1]:t[0]}class ca{constructor(e){this.conversionApi=Object.assign({dispatcher:this},e),this._reconversionEventsMapping=new Map}convertChanges(e,t,i){for(const t of e.getMarkersToRemove())this.convertMarkerRemove(t.name,t.range,i);const n=this._mapChangesWithAutomaticReconversion(e);for(const e of n)"insert"===e.type?this.convertInsert(oa._createFromPositionAndShift(e.position,e.length),i):"remove"===e.type?this.convertRemove(e.position,e.length,e.name,i):"reconvert"===e.type?this.reconvertElement(e.element,i):this.convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,i);for(const e of this.conversionApi.mapper.flushUnboundMarkerNames()){const n=t.get(e).getRange();this.convertMarkerRemove(e,n,i),this.convertMarkerAdd(e,n,i)}for(const t of e.getMarkersToAdd())this.convertMarkerAdd(t.name,t.range,i)}convertInsert(e,t){this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(e);for(const t of Array.from(e).map(da))this._convertInsertWithAttributes(t);this._clearConversionApi()}convertRemove(e,t,i,n){this.conversionApi.writer=n,this.fire("remove:"+i,{position:e,length:t},this.conversionApi),this._clearConversionApi()}convertAttribute(e,t,i,n,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(e,"attribute:"+t);for(const o of e){const e={item:o.item,range:oa._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:t,attributeOldValue:i,attributeNewValue:n};this._testAndFire("attribute:"+t,e)}this._clearConversionApi()}reconvertElement(e,t){const i=oa._createOn(e);this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(i);const n=this.conversionApi.mapper,o=n.toViewElement(e);t.remove(o),this._convertInsertWithAttributes({item:e,range:i});const r=n.toViewElement(e);for(const i of oa._createIn(e)){const{item:e}=i,o=ua(e,n);o?o.root!==r.root&&t.move(t.createRangeOn(o),n.toViewPosition(ea._createBefore(e))):this._convertInsertWithAttributes(da(i))}n.unbindViewElement(o),this._clearConversionApi()}convertSelection(e,t,i){const n=Array.from(t.getMarkersAtPosition(e.getFirstPosition()));if(this.conversionApi.writer=i,this.conversionApi.consumable=this._createSelectionConsumable(e,n),this.fire("selection",{selection:e},this.conversionApi),e.isCollapsed){for(const t of n){const i=t.getRange();if(!la(e.getFirstPosition(),t,this.conversionApi.mapper))continue;const n={item:e,markerName:t.name,markerRange:i};this.conversionApi.consumable.test(e,"addMarker:"+t.name)&&this.fire("addMarker:"+t.name,n,this.conversionApi)}for(const t of e.getAttributeKeys()){const i={item:e,range:e.getFirstRange(),attributeKey:t,attributeOldValue:null,attributeNewValue:e.getAttribute(t)};this.conversionApi.consumable.test(e,"attribute:"+i.attributeKey)&&this.fire("attribute:"+i.attributeKey+":$text",i,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(e,t,i){if("$graveyard"==t.root.rootName)return;this.conversionApi.writer=i;const n="addMarker:"+e,o=new sa;if(o.add(t,n),this.conversionApi.consumable=o,this.fire(n,{markerName:e,markerRange:t},this.conversionApi),o.test(t,n)){this.conversionApi.consumable=this._createConsumableForRange(t,n);for(const i of t.getItems()){if(!this.conversionApi.consumable.test(i,n))continue;const o={item:i,range:oa._createOn(i),markerName:e,markerRange:t};this.fire(n,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(e,t,i){"$graveyard"!=t.root.rootName&&(this.conversionApi.writer=i,this.fire("removeMarker:"+e,{markerName:e,markerRange:t},this.conversionApi),this._clearConversionApi())}_mapReconversionTriggerEvent(e,t){this._reconversionEventsMapping.set(t,e)}_createInsertConsumable(e){const t=new sa;for(const i of e){const e=i.item;t.add(e,"insert");for(const i of e.getAttributeKeys())t.add(e,"attribute:"+i)}return t}_createConsumableForRange(e,t){const i=new sa;for(const n of e.getItems())i.add(n,t);return i}_createSelectionConsumable(e,t){const i=new sa;i.add(e,"selection");for(const n of t)i.add(e,"addMarker:"+n.name);for(const t of e.getAttributeKeys())i.add(e,"attribute:"+t);return i}_testAndFire(e,t){this.conversionApi.consumable.test(t.item,e)&&this.fire(function(e,t){const i=t.item.name||"$text";return`${e}:${i}`}(e,t),t,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}_convertInsertWithAttributes(e){this._testAndFire("insert",e);for(const t of e.item.getAttributeKeys())e.attributeKey=t,e.attributeOldValue=null,e.attributeNewValue=e.item.getAttribute(t),this._testAndFire("attribute:"+t,e)}_mapChangesWithAutomaticReconversion(e){const t=new Set,i=[];for(const n of e.getChanges()){const e=n.position||n.range.start,o=e.parent;if(ta(e,o)){i.push(n);continue}const r="attribute"===n.type?ia(e,o,null):o;if(r.is("$text")){i.push(n);continue}let s;if(s="attribute"===n.type?`attribute:${n.attributeKey}:${r.name}`:`${n.type}:${n.name}`,this._isReconvertTriggerEvent(s,r.name)){if(t.has(r))continue;t.add(r),i.push({type:"reconvert",element:r})}else i.push(n)}return i}_isReconvertTriggerEvent(e,t){return this._reconversionEventsMapping.get(e)===t}}function la(e,t,i){const n=t.getRange(),o=Array.from(e.getAncestors());o.shift(),o.reverse();return!o.some(e=>{if(n.containsItem(e)){return!!i.toViewElement(e).getCustomProperty("addHighlight")}})}function da(e){return{item:e.item,range:oa._createFromPositionAndShift(e.previousPosition,e.length)}}function ua(e,t){if(e.is("textProxy")){const i=t.toViewPosition(ea._createBefore(e)).parent;return i.is("$text")?i:null}return t.toViewElement(e)}Ke(ca,u);class ha{constructor(e,t,i){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,i)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let i=!1;for(const n of e._ranges)if(t.isEqual(n)){i=!0;break}if(!i)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new oa(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new oa(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new oa(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,i){if(null===e)this._setRanges([]);else if(e instanceof ha)this._setRanges(e.getRanges(),e.isBackward);else if(e&&"function"==typeof e.getRanges)this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof oa)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof ea)this._setRanges([new oa(e)]);else if(e instanceof Ys){const n=!!i&&!!i.backward;let o;if("in"==t)o=oa._createIn(e);else if("on"==t)o=oa._createOn(e);else{if(void 0===t)throw new c.a("model-selection-setto-required-second-parameter",[this,e]);o=new oa(ea._createAt(e,t))}this._setRanges([o],n)}else{if(!Ji(e))throw new c.a("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const i=(e=Array.from(e)).some(t=>{if(!(t instanceof oa))throw new c.a("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(e=>!e.isEqual(t))});if(e.length!==this._ranges.length||i){this._removeAllRanges();for(const t of e)this._pushRange(t);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(null===this.anchor)throw new c.a("model-selection-setfocus-no-ranges",[this,e]);const i=ea._createAt(e,t);if("same"==i.compareWith(this.focus))return;const n=this.anchor;this._ranges.length&&this._popRange(),"before"==i.compareWith(n)?(this._pushRange(new oa(i,n)),this._lastRangeBackward=!0):(this._pushRange(new oa(n,i)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}is(e){return"selection"===e||"model:selection"===e}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const i=ma(t.start,e);i&&pa(i,t)&&(yield i);for(const i of t.getWalker()){const n=i.item;"elementEnd"==i.type&&ga(n,e,t)&&(yield n)}const n=ma(t.end,e);n&&!t.end.isTouching(ea._createAt(n,0))&&pa(n,t)&&(yield n)}}containsEntireContent(e=this.anchor.root){const t=ea._createAt(e,0),i=ea._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&i.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new oa(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new c.a("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function fa(e,t){return!t.has(e)&&(t.add(e),e.root.document.model.schema.isBlock(e)&&e.parent)}function ga(e,t,i){return fa(e,t)&&pa(e,i)}function ma(e,t){const i=e.parent.root.document.model.schema,n=e.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(e=>!o&&(o=i.isLimit(e),!o&&fa(e,t)));return n.forEach(e=>t.add(e)),r}function pa(e,t){const i=function(e){const t=e.root.document.model.schema;let i=e.parent;for(;i;){if(t.isBlock(i))return i;i=i.parent}}(e);if(!i)return!0;return!t.containsRange(oa._createOn(i),!0)}Ke(ha,u);class ba extends oa{constructor(e,t){super(e,t),wa.call(this)}detach(){this.stopListening()}is(e){return"liveRange"===e||"model:liveRange"===e||"range"==e||"model:range"===e}toRange(){return new oa(this.start,this.end)}static fromRange(e){return new ba(e.start,e.end)}}function wa(){this.listenTo(this.root.document.model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&ka.call(this,i)},{priority:"low"})}function ka(e){const t=this.getTransformedByOperation(e),i=oa._createFromRanges(t),n=!i.isEqual(this),o=function(e,t){switch(t.type){case"insert":return e.containsPosition(t.position);case"move":case"remove":case"reinsert":case"merge":return e.containsPosition(t.sourcePosition)||e.start.isEqual(t.sourcePosition)||e.containsPosition(t.targetPosition);case"split":return e.containsPosition(t.splitPosition)||e.containsPosition(t.insertionPosition)}return!1}(this,e);let r=null;if(n){"$graveyard"==i.root.rootName&&(r="remove"==e.type?e.sourcePosition:e.deletionPosition);const t=this.toRange();this.start=i.start,this.end=i.end,this.fire("change:range",t,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}Ke(ba,u);class _a{constructor(e){this._selection=new va(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return"selection"===e||"model:selection"==e||"documentSelection"==e||"model:documentSelection"==e}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,i){this._selection.setTo(e,t,i)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return"selection:"+e}static _isStoreAttributeKey(e){return e.startsWith("selection:")}}Ke(_a,u);class va extends ha{constructor(e){super(),this.markers=new Zi({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&"marker"!=i.type&&"rename"!=i.type&&"noop"!=i.type&&(0==this._ranges.length&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new c.a("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,t,i,n)=>{this._updateMarker(t,n)}),this.listenTo(this._document,"change",(e,t)=>{!function(e,t){const i=e.document.differ;for(const n of i.getChanges()){if("insert"!=n.type)continue;const i=n.position.parent;n.length===i.maxOffset&&e.enqueueChange(t,e=>{const t=Array.from(i.getAttributeKeys()).filter(e=>e.startsWith("selection:"));for(const n of t)e.removeAttribute(n,i)})}}(this._model,t)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,i){super.setTo(e,t,i),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=s();return this._overriddenGravityRegister.add(e),1===this._overriddenGravityRegister.size&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new c.a("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=ba.fromRange(e);return t.on("change:range",(e,i,n)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=n.deletionPosition;const e=this._ranges.indexOf(t);this._ranges.splice(e,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const t of this._model.markers){const i=t.name.split(":",1)[0];if(!this._observedMarkers.has(i))continue;const n=t.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&e.push(t)}const i=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:i,directChange:!1})}_updateMarker(e,t){const i=e.name.split(":",1)[0];if(!this._observedMarkers.has(i))return;let n=!1;const o=Array.from(this.markers),r=this.markers.has(e);if(t){let i=!1;for(const e of this.getRanges())if(t.containsRange(e,!e.isCollapsed)){i=!0;break}i&&!r?(this.markers.add(e),n=!0):!i&&r&&(this.markers.remove(e),n=!0)}else r&&(this.markers.remove(e),n=!0);n&&this.fire("change:marker",{oldMarkers:o,directChange:!1})}_updateAttributes(e){const t=fn(this._getSurroundingAttributes()),i=fn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[e,t]of this._attributePriority)"low"==t&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t);const n=[];for(const[e,t]of this.getAttributes())i.has(e)&&i.get(e)===t||n.push(e);for(const[e]of i)this.hasAttribute(e)||n.push(e);n.length>0&&this.fire("change:attribute",{attributeKeys:n,directChange:!1})}_setAttribute(e,t,i=!0){const n=i?"normal":"low";if("low"==n&&"normal"==this._attributePriority.get(e))return!1;return super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,n),!0)}_removeAttribute(e,t=!0){const i=t?"normal":"low";return("low"!=i||"normal"!=this._attributePriority.get(e))&&(this._attributePriority.set(e,i),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[t,i]of this.getAttributes())e.get(t)!==i&&this._removeAttribute(t,!1);for(const[i,n]of e){this._setAttribute(i,n,!1)&&t.add(i)}return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())if(t.startsWith("selection:")){const i=t.substr("selection:".length);yield[i,e.getAttribute(t)]}}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let i=null;if(this.isCollapsed){const n=e.textNode?e.textNode:e.nodeBefore,o=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(i=ya(n)),i||(i=ya(o)),!this.isGravityOverridden&&!i){let e=n;for(;e&&!t.isInline(e)&&!i;)e=e.previousSibling,i=ya(e)}if(!i){let e=o;for(;e&&!t.isInline(e)&&!i;)e=e.nextSibling,i=ya(e)}i||(i=this._getStoredAttributes())}else{const e=this.getFirstRange();for(const n of e){if(n.item.is("element")&&t.isObject(n.item))break;if("text"==n.type){i=n.item.getAttributes();break}}}return i}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function ya(e){return e instanceof Ks||e instanceof Gs?e.getAttributes():null}class xa{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}var Aa=function(e){return qi(e,5)};class Ca extends xa{elementToElement(e){return this.add(function(e){return(e=Aa(e)).view=Pa(e.view,"container"),t=>{var i;if(t.on("insert:"+e.model,(i=e.view,(e,t,n)=>{const o=i(t.item,n);if(!o)return;if(!n.consumable.consume(t.item,"insert"))return;const r=n.mapper.toViewPosition(t.range.start);n.mapper.bindElements(t.item,o),n.writer.insert(r,o)}),{priority:e.converterPriority||"normal"}),e.triggerBy){if(e.triggerBy.attributes)for(const i of e.triggerBy.attributes)t._mapReconversionTriggerEvent(e.model,`attribute:${i}:${e.model}`);if(e.triggerBy.children)for(const i of e.triggerBy.children)t._mapReconversionTriggerEvent(e.model,"insert:"+i),t._mapReconversionTriggerEvent(e.model,"remove:"+i)}}}(e))}attributeToElement(e){return this.add(function(e){e=Aa(e);let t="attribute:"+(e.model.key?e.model.key:e.model);e.model.name&&(t+=":"+e.model.name);if(e.model.values)for(const t of e.model.values)e.view[t]=Pa(e.view[t],"attribute");else e.view=Pa(e.view,"attribute");const i=Sa(e);return n=>{n.on(t,function(e){return(t,i,n)=>{const o=e(i.attributeOldValue,n),r=e(i.attributeNewValue,n);if(!o&&!r)return;if(!n.consumable.consume(i.item,t.name))return;const s=n.writer,a=s.document.selection;if(i.item instanceof ha||i.item instanceof _a)s.wrap(a.getFirstRange(),r);else{let e=n.mapper.toViewRange(i.range);null!==i.attributeOldValue&&o&&(e=s.unwrap(e,o)),null!==i.attributeNewValue&&r&&s.wrap(e,r)}}}(i),{priority:e.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(e){e=Aa(e);let t="attribute:"+(e.model.key?e.model.key:e.model);e.model.name&&(t+=":"+e.model.name);if(e.model.values)for(const t of e.model.values)e.view[t]=Ma(e.view[t]);else e.view=Ma(e.view);const i=Sa(e);return n=>{var o;n.on(t,(o=i,(e,t,i)=>{const n=o(t.attributeOldValue,i),r=o(t.attributeNewValue,i);if(!n&&!r)return;if(!i.consumable.consume(t.item,e.name))return;const s=i.mapper.toViewElement(t.item),a=i.writer;if(!s)throw new c.a("conversion-attribute-to-attribute-on-text",[t,i]);if(null!==t.attributeOldValue&&n)if("class"==n.key){const e=en(n.value);for(const t of e)a.removeClass(t,s)}else if("style"==n.key){const e=Object.keys(n.value);for(const t of e)a.removeStyle(t,s)}else a.removeAttribute(n.key,s);if(null!==t.attributeNewValue&&r)if("class"==r.key){const e=en(r.value);for(const t of e)a.addClass(t,s)}else if("style"==r.key){const e=Object.keys(r.value);for(const t of e)a.setStyle(t,r.value[t],s)}else a.setAttribute(r.key,r.value,s)}),{priority:e.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(e){return(e=Aa(e)).view=Pa(e.view,"ui"),t=>{var i;t.on("addMarker:"+e.model,(i=e.view,(e,t,n)=>{t.isOpening=!0;const o=i(t,n);t.isOpening=!1;const r=i(t,n);if(!o||!r)return;const s=t.markerRange;if(s.isCollapsed&&!n.consumable.consume(s,e.name))return;for(const t of s)if(!n.consumable.consume(t.item,e.name))return;const a=n.mapper,c=n.writer;c.insert(a.toViewPosition(s.start),o),n.mapper.bindElementToMarker(o,t.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),n.mapper.bindElementToMarker(r,t.markerName)),e.stop()}),{priority:e.converterPriority||"normal"}),t.on("removeMarker:"+e.model,(e.view,(e,t,i)=>{const n=i.mapper.markerNameToElements(t.markerName);if(n){for(const e of n)i.mapper.unbindElementFromMarkerName(e,t.markerName),i.writer.clear(i.writer.createRangeOn(e),e);i.writer.clearClonedElementsGroup(t.markerName),e.stop()}}),{priority:e.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(e){return t=>{var i;t.on("addMarker:"+e.model,(i=e.view,(e,t,n)=>{if(!t.item)return;if(!(t.item instanceof ha||t.item instanceof _a||t.item.is("$textProxy")))return;const o=Ia(i,t,n);if(!o)return;if(!n.consumable.consume(t.item,e.name))return;const r=n.writer,s=Ta(r,o),a=r.document.selection;if(t.item instanceof ha||t.item instanceof _a)r.wrap(a.getFirstRange(),s,a);else{const e=n.mapper.toViewRange(t.range),i=r.wrap(e,s);for(const e of i.getItems())if(e.is("attributeElement")&&e.isSimilar(s)){n.mapper.bindElementToMarker(e,t.markerName);break}}}),{priority:e.converterPriority||"normal"}),t.on("addMarker:"+e.model,function(e){return(t,i,n)=>{if(!i.item)return;if(!(i.item instanceof Js))return;const o=Ia(e,i,n);if(!o)return;if(!n.consumable.test(i.item,t.name))return;const r=n.mapper.toViewElement(i.item);if(r&&r.getCustomProperty("addHighlight")){n.consumable.consume(i.item,t.name);for(const e of oa._createIn(i.item))n.consumable.consume(e.item,t.name);r.getCustomProperty("addHighlight")(r,o,n.writer),n.mapper.bindElementToMarker(r,i.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),t.on("removeMarker:"+e.model,function(e){return(t,i,n)=>{if(i.markerRange.isCollapsed)return;const o=Ia(e,i,n);if(!o)return;const r=Ta(n.writer,o),s=n.mapper.markerNameToElements(i.markerName);if(s){for(const e of s)n.mapper.unbindElementFromMarkerName(e,i.markerName),e.is("attributeElement")?n.writer.unwrap(n.writer.createRangeOn(e),r):e.getCustomProperty("removeHighlight")(e,o.id,n.writer);n.writer.clearClonedElementsGroup(i.markerName),t.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(e){const t=(e=Aa(e)).model;e.view||(e.view=i=>({group:t,name:i.substr(e.model.length+1)}));return i=>{var n;i.on("addMarker:"+t,(n=e.view,(e,t,i)=>{const o=n(t.markerName,i);if(!o)return;const r=t.markerRange;i.consumable.consume(r,e.name)&&(Ea(r,!1,i,t,o),Ea(r,!0,i,t,o),e.stop())}),{priority:e.converterPriority||"normal"}),i.on("removeMarker:"+t,function(e){return(t,i,n)=>{const o=e(i.markerName,n);if(!o)return;const r=n.mapper.markerNameToElements(i.markerName);if(r){for(const e of r)n.mapper.unbindElementFromMarkerName(e,i.markerName),e.is("containerElement")?(s(`data-${o.group}-start-before`,e),s(`data-${o.group}-start-after`,e),s(`data-${o.group}-end-before`,e),s(`data-${o.group}-end-after`,e)):n.writer.clear(n.writer.createRangeOn(e),e);n.writer.clearClonedElementsGroup(i.markerName),t.stop()}function s(e,t){if(t.hasAttribute(e)){const i=new Set(t.getAttribute(e).split(","));i.delete(o.name),0==i.size?n.writer.removeAttribute(e,t):n.writer.setAttribute(e,Array.from(i).join(","),t)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(e))}}function Ta(e,t){const i=e.createAttributeElement("span",t.attributes);return t.classes&&i._addClass(t.classes),t.priority&&(i._priority=t.priority),i._id=t.id,i}function Ea(e,t,i,n,o){const r=t?e.start:e.end;if(i.schema.checkChild(r,"$text")){!function(e,t,i,n,o){const r=`${o.group}-${t?"start":"end"}`,s=o.name?{name:o.name}:null,a=i.writer.createUIElement(r,s);i.writer.insert(e,a),i.mapper.bindElementToMarker(a,n.markerName)}(i.mapper.toViewPosition(r),t,i,n,o)}else{let e,s;t&&r.nodeAfter||!t&&!r.nodeBefore?(e=r.nodeAfter,s=!0):(e=r.nodeBefore,s=!1);!function(e,t,i,n,o,r){const s=`data-${r.group}-${t?"start":"end"}-${i?"before":"after"}`,a=e.hasAttribute(s)?e.getAttribute(s).split(","):[];a.unshift(r.name),n.writer.setAttribute(s,a.join(","),e),n.mapper.bindElementToMarker(e,o.markerName)}(i.mapper.toViewElement(e),t,s,i,n,o)}}function Pa(e,t){return"function"==typeof e?e:(i,n)=>function(e,t,i){"string"==typeof e&&(e={name:e});let n;const o=t.writer,r=Object.assign({},e.attributes);if("container"==i)n=o.createContainerElement(e.name,r);else if("attribute"==i){const t={priority:e.priority||yo.DEFAULT_PRIORITY};n=o.createAttributeElement(e.name,r,t)}else n=o.createUIElement(e.name,r);if(e.styles){const t=Object.keys(e.styles);for(const i of t)o.setStyle(i,e.styles[i],n)}if(e.classes){const t=e.classes;if("string"==typeof t)o.addClass(t,n);else for(const e of t)o.addClass(e,n)}return n}(e,n,t)}function Sa(e){return e.model.values?(t,i)=>{const n=e.view[t];return n?n(t,i):null}:e.view}function Ma(e){return"string"==typeof e?t=>({key:e,value:t}):"object"==typeof e?e.value?()=>e:t=>({key:e.key,value:t}):e}function Ia(e,t,i){const n="function"==typeof e?e(t,i):e;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Na(e){const{schema:t,document:i}=e.model;for(const n of i.getRootNames()){const o=i.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return e.insertElement("paragraph",o),!0}return!1}function Ra(e,t,i){const n=i.createContext(e);return!!i.checkChild(n,"paragraph")&&!!i.checkChild(n.push("paragraph"),t)}function Oa(e,t){const i=t.createElement("paragraph");return t.insert(i,e),t.createPositionAt(i,0)}class Da extends xa{elementToElement(e){return this.add(La(e))}elementToAttribute(e){return this.add(function(e){ja(e=Aa(e));const t=Ba(e,!1),i=za(e.view),n=i?"element:"+i:"element";return i=>{i.on(n,t,{priority:e.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(e){e=Aa(e);let t=null;("string"==typeof e.view||e.view.key)&&(t=function(e){"string"==typeof e.view&&(e.view={key:e.view});const t=e.view.key;let i;if("class"==t||"style"==t){i={["class"==t?"classes":"styles"]:e.view.value}}else{const n=void 0===e.view.value?/[\s\S]*/:e.view.value;i={attributes:{[t]:n}}}e.view.name&&(i.name=e.view.name);return e.view=i,t}(e));ja(e,t);const i=Ba(e,!0);return t=>{t.on("element",i,{priority:e.converterPriority||"low"})}}(e))}elementToMarker(e){return Object(c.b)("upcast-helpers-element-to-marker-deprecated"),this.add(function(e){return function(e){const t=e.model;e.model=(e,i)=>{const n="string"==typeof t?t:t(e,i);return i.writer.createElement("$marker",{"data-name":n})}}(e=Aa(e)),La(e)}(e))}dataToMarker(e){return this.add(function(e){(e=Aa(e)).model||(e.model=t=>t?e.view+":"+t:e.view);const t=Va(Fa(e,"start")),i=Va(Fa(e,"end"));return n=>{n.on("element:"+e.view+"-start",t,{priority:e.converterPriority||"normal"}),n.on("element:"+e.view+"-end",i,{priority:e.converterPriority||"normal"});const o=a.get("low"),r=a.get("highest"),s=a.get(e.converterPriority)/r;n.on("element",function(e){return(t,i,n)=>{const o="data-"+e.view;function r(t,o){for(const r of o){const o=e.model(r,n),s=n.writer.createElement("$marker",{"data-name":o});n.writer.insert(s,t),i.modelCursor.isEqual(t)?i.modelCursor=i.modelCursor.getShiftedBy(1):i.modelCursor=i.modelCursor._getTransformedByInsertion(t,1),i.modelRange=i.modelRange._getTransformedByInsertion(t,1)[0]}}i.modelRange||(i=Object.assign(i,n.convertChildren(i.viewItem,i.modelCursor))),n.consumable.consume(i.viewItem,{attributes:o+"-end-after"})&&r(i.modelRange.end,i.viewItem.getAttribute(o+"-end-after").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-start-after"})&&r(i.modelRange.end,i.viewItem.getAttribute(o+"-start-after").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-end-before"})&&r(i.modelRange.start,i.viewItem.getAttribute(o+"-end-before").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-start-before"})&&r(i.modelRange.start,i.viewItem.getAttribute(o+"-start-before").split(","))}}(e),{priority:o+s})}}(e))}}function La(e){const t=Va(e=Aa(e)),i=za(e.view),n=i?"element:"+i:"element";return i=>{i.on(n,t,{priority:e.converterPriority||"normal"})}}function za(e){return"string"==typeof e?e:"object"==typeof e&&"string"==typeof e.name?e.name:null}function Va(e){const t=new gn(e.view);return(i,n,o)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const a=function(e,t,i){return e instanceof Function?e(t,i):i.writer.createElement(e)}(e.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function ja(e,t=null){const i=null===t||(e=>e.getAttribute(t)),n="object"!=typeof e.model?e.model:e.model.key,o="object"!=typeof e.model||void 0===e.model.value?i:e.model.value;e.model={key:n,value:o}}function Ba(e,t){const i=new gn(e.view);return(n,o,r)=>{const s=i.match(o.viewItem);if(!s)return;const a=e.model.key,c="function"==typeof e.model.value?e.model.value(o.viewItem,r):e.model.value;if(null===c)return;if(!function(e,t){const i="function"==typeof e?e(t):e;if("object"==typeof i&&!za(i))return!1;return!i.classes&&!i.attributes&&!i.styles}(e.view,o.viewItem)?delete s.match.name:s.match.name=!0,!r.consumable.test(o.viewItem,s.match))return;o.modelRange||(o=Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)));(function(e,t,i,n){let o=!1;for(const r of Array.from(e.getItems({shallow:i})))n.schema.checkAttribute(r,t.key)&&(o=!0,r.hasAttribute(t.key)||n.writer.setAttribute(t.key,t.value,r));return o})(o.modelRange,{key:a,value:c},t,r)&&r.consumable.consume(o.viewItem,s.match)}}function Fa(e,t){const i={};return i.view=e.view+"-"+t,i.model=(t,i)=>{const n=t.getAttribute("name"),o=e.model(n,i);return i.writer.createElement("$marker",{"data-name":o})},i}class Ha{constructor(e,t){this.model=e,this.view=new $s(t),this.mapper=new ra,this.downcastDispatcher=new ca({mapper:this.mapper,schema:e.schema});const i=this.model.document,n=i.selection,o=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(i,"change",()=>{this.view.change(e=>{this.downcastDispatcher.convertChanges(i.differ,o,e),this.downcastDispatcher.convertSelection(n,o,e)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(e,t){return(i,n)=>{const o=n.newSelection,r=[];for(const e of o.getRanges())r.push(t.toModelRange(e));const s=e.createSelection(r,{backward:o.isBackward});s.isEqual(e.document.selection)||e.change(e=>{e.setSelection(s)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(e,t,i)=>{if(!i.consumable.consume(t.item,"insert"))return;const n=i.writer,o=i.mapper.toViewPosition(t.range.start),r=n.createText(t.item.data);n.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(e,t,i)=>{const n=i.mapper.toViewPosition(t.position),o=t.position.getShiftedBy(t.length),r=i.mapper.toViewPosition(o,{isPhantom:!0}),s=i.writer.createRange(n,r),a=i.writer.remove(s.getTrimmed());for(const e of i.writer.createRangeIn(a).getItems())i.mapper.unbindViewElement(e)},{priority:"low"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=i.writer,o=n.document.selection;for(const e of o.getRanges())e.isCollapsed&&e.end.parent.isAttached()&&i.writer.mergeAttributes(e.start);n.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=t.selection;if(n.isCollapsed)return;if(!i.consumable.consume(n,"selection"))return;const o=[];for(const e of n.getRanges()){const t=i.mapper.toViewRange(e);o.push(t)}i.writer.setSelection(o,{backward:n.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=t.selection;if(!n.isCollapsed)return;if(!i.consumable.consume(n,"selection"))return;const o=i.writer,r=n.getFirstPosition(),s=i.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(e=>{if("$graveyard"==e.rootName)return null;const t=new ro(this.view.document,e.name);return t.rootName=e.rootName,this.mapper.bindElements(e,t),t})}destroy(){this.view.destroy(),this.stopListening()}}Ke(Ha,Ue);class Ua{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const i=this.get(e);if(!i)throw new c.a("commandcollection-command-not-found",this,{commandName:e});return i.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Wa{constructor(){this._consumables=new Map}add(e,t){let i;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?i=this._consumables.get(e):(i=new qa(e),this._consumables.set(e,i)),i.add(t))}test(e,t){const i=this._consumables.get(e);return void 0===i?null:e.is("$text")||e.is("documentFragment")?i:i.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const i=this._consumables.get(e);void 0!==i&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):i.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},i=e.getAttributeKeys();for(const e of i)"style"!=e&&"class"!=e&&t.attributes.push(e);const n=e.getClassNames();for(const e of n)t.classes.push(e);const o=e.getStyleNames();for(const e of o)t.styles.push(e);return t}static createFrom(e,t){if(t||(t=new Wa(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Wa.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const i of e.getChildren())t=Wa.createFrom(i,t);return t}}class qa{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const i=this._test(t,e[t]);if(!0!==i)return i}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i){if("attributes"===e&&("class"===t||"style"===t))throw new c.a("viewconsumable-invalid-attribute",this);if(n.set(t,!0),"styles"===e)for(const e of this.element.document.stylesProcessor.getRelatedStyles(t))n.set(e,!0)}}_test(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){const e=n.get(t);if(void 0===e)return null;if(!e)return!1}else{const e="class"==t?"classes":"styles",i=this._test(e,[...this._consumables[e].keys()]);if(!0!==i)return i}return!0}_consume(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){if(n.set(t,!1),"styles"==e)for(const e of this.element.document.stylesProcessor.getRelatedStyles(t))n.set(e,!1)}else{const e="class"==t?"classes":"styles";this._consume(e,[...this._consumables[e].keys()])}}_revert(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){!1===n.get(t)&&n.set(t,!0)}else{const e="class"==t?"classes":"styles";this._revert(e,[...this._consumables[e].keys()])}}}class $a{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Ya(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Ya(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new c.a("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new c.a("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t="string"==typeof e?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const i=this.getDefinition(e.last);return!!i&&i.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof ea){const t=e.nodeBefore,i=e.nodeAfter;if(!(t instanceof Js))throw new c.a("schema-check-merge-no-element-before",this);if(!(i instanceof Js))throw new c.a("schema-check-merge-no-element-after",this);return this.checkMerge(t,i)}for(const i of t.getChildren())if(!this.checkChild(e,i))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[i,n])=>{if(!n)return;const o=e(i,n);"boolean"==typeof o&&(t.stop(),t.return=o)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[i,n])=>{const o=e(i,n);"boolean"==typeof o&&(t.stop(),t.return=o)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;if(e instanceof ea)t=e.parent;else{t=(e instanceof oa?[e]:Array.from(e.getRanges())).reduce((e,t)=>{const i=t.getCommonAncestor();return e?e.getCommonAncestor(i,{includeSelf:!0}):i},null)}for(;!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const i=[...e.getFirstPosition().getAncestors(),new Gs("",e.getAttributes())];return this.checkAttribute(i,t)}{const i=e.getRanges();for(const e of i)for(const i of e)if(this.checkAttribute(i.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(e){for(const t of e)yield*t.getMinimalFlatRanges()}(e);for(const i of e)yield*this._getValidRangesForRange(i,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new oa(e);let i,n;const o=e.getAncestors().reverse().find(e=>this.isLimit(e))||e.root;"both"!=t&&"backward"!=t||(i=new Zs({boundaries:oa._createIn(o),startPosition:e,direction:"backward"})),"both"!=t&&"forward"!=t||(n=new Zs({boundaries:oa._createIn(o),startPosition:e}));for(const e of function*(e,t){let i=!1;for(;!i;){if(i=!0,e){const t=e.next();t.done||(i=!1,yield{walker:e,value:t.value})}if(t){const e=t.next();e.done||(i=!1,yield{walker:t,value:e.value})}}}(i,n)){const t=e.walker==i?"elementEnd":"elementStart",n=e.value;if(n.type==t&&this.isObject(n.item))return oa._createOn(n.item);if(this.checkChild(n.nextPosition,"$text"))return new oa(n.nextPosition)}return null}findAllowedParent(e,t){let i=e.parent;for(;i;){if(this.checkChild(i,t))return i;if(this.isLimit(i))return null;i=i.parent}return null}removeDisallowedAttributes(e,t){for(const i of e)if(i.is("$text"))oc(this,i,t);else{const e=oa._createIn(i).getPositions();for(const i of e){oc(this,i.nodeBefore||i.parent,t)}}}createContext(e){return new Ya(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,i=Object.keys(t);for(const n of i)e[n]=Ga(t[n],n);for(const t of i)Ka(e,t);for(const t of i)Qa(e,t);for(const t of i)Ja(e,t),Za(e,t);for(const t of i)Xa(e,t),ec(e,t);this._compiledDefinitions=e}_checkContextMatch(e,t,i=t.length-1){const n=t.getItem(i);if(e.allowIn.includes(n.name)){if(0==i)return!0;{const e=this.getDefinition(n);return this._checkContextMatch(e,t,i-1)}}return!1}*_getValidRangesForRange(e,t){let i=e.start,n=e.start;for(const o of e.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange(oa._createIn(o),t)),this.checkAttribute(o,t)||(i.isEqual(n)||(yield new oa(i,n)),i=ea._createAfter(o)),n=ea._createAfter(o);i.isEqual(n)||(yield new oa(i,n))}}Ke($a,Ue);class Ya{constructor(e){if(e instanceof Ya)return e;"string"==typeof e?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(nc)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Ya([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Ga(e,t){const i={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(e,t){for(const i of e){const e=Object.keys(i).filter(e=>e.startsWith("is"));for(const n of e)t[n]=i[n]}}(e,i),tc(e,i,"allowIn"),tc(e,i,"allowContentOf"),tc(e,i,"allowWhere"),tc(e,i,"allowAttributes"),tc(e,i,"allowAttributesOf"),tc(e,i,"inheritTypesFrom"),function(e,t){for(const i of e){const e=i.inheritAllFrom;e&&(t.allowContentOf.push(e),t.allowWhere.push(e),t.allowAttributesOf.push(e),t.inheritTypesFrom.push(e))}}(e,i),i}function Ka(e,t){for(const i of e[t].allowContentOf)if(e[i]){ic(e,i).forEach(e=>{e.allowIn.push(t)})}delete e[t].allowContentOf}function Qa(e,t){for(const i of e[t].allowWhere){const n=e[i];if(n){const i=n.allowIn;e[t].allowIn.push(...i)}}delete e[t].allowWhere}function Ja(e,t){for(const i of e[t].allowAttributesOf){const n=e[i];if(n){const i=n.allowAttributes;e[t].allowAttributes.push(...i)}}delete e[t].allowAttributesOf}function Za(e,t){const i=e[t];for(const t of i.inheritTypesFrom){const n=e[t];if(n){const e=Object.keys(n).filter(e=>e.startsWith("is"));for(const t of e)t in i||(i[t]=n[t])}}delete i.inheritTypesFrom}function Xa(e,t){const i=e[t],n=i.allowIn.filter(t=>e[t]);i.allowIn=Array.from(new Set(n))}function ec(e,t){const i=e[t];i.allowAttributes=Array.from(new Set(i.allowAttributes))}function tc(e,t,i){for(const n of e)"string"==typeof n[i]?t[i].push(n[i]):Array.isArray(n[i])&&t[i].push(...n[i])}function ic(e,t){const i=e[t];return(n=e,Object.keys(n).map(e=>n[e])).filter(e=>e.allowIn.includes(i.name));var n}function nc(e){return"string"==typeof e||e.is("documentFragment")?{name:"string"==typeof e?e:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:e.is("element")?e.name:"$text",*getAttributeKeys(){yield*e.getAttributeKeys()},getAttribute:t=>e.getAttribute(t)}}function oc(e,t,i){for(const n of t.getAttributeKeys())e.checkAttribute(t,n)||i.removeAttribute(n,t)}class rc{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(e,t,i=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(e,t){let i;for(const n of new Ya(e)){const e={};for(const t of n.getAttributeKeys())e[t]=n.getAttribute(t);const o=t.createElement(n.name,e);i&&t.append(o,i),i=ea._createAt(o,0)}return i}(i,t),this.conversionApi.writer=t,this.conversionApi.consumable=Wa.createFrom(e),this.conversionApi.store={};const{modelRange:n}=this._convertItem(e,this._modelCursor),o=t.createDocumentFragment();if(n){this._removeEmptyElements();for(const e of Array.from(this._modelCursor.parent.getChildren()))t.append(e,o);o.markers=function(e,t){const i=new Set,n=new Map,o=oa._createIn(e).getItems();for(const e of o)"$marker"==e.name&&i.add(e);for(const e of i){const i=e.getAttribute("data-name"),o=t.createPositionBefore(e);n.has(i)?n.get(i).end=o.clone():n.set(i,new oa(o.clone())),t.remove(e)}return n}(o,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(e,t){const i=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,i,this.conversionApi):e.is("$text")?this.fire("text",i,this.conversionApi):this.fire("documentFragment",i,this.conversionApi),i.modelRange&&!(i.modelRange instanceof oa))throw new c.a("view-conversion-dispatcher-incorrect-result",this);return{modelRange:i.modelRange,modelCursor:i.modelCursor}}_convertChildren(e,t){let i=t.is("position")?t:ea._createAt(t,0);const n=new oa(i);for(const t of Array.from(e.getChildren())){const e=this._convertItem(t,i);e.modelRange instanceof oa&&(n.end=e.modelRange.end,i=e.modelCursor)}return{modelRange:n,modelCursor:i}}_safeInsert(e,t){const i=this._splitToAllowedParent(e,t);return!!i&&(this.conversionApi.writer.insert(e,i.position),!0)}_updateConversionResult(e,t){const i=this._getSplitParts(e),n=this.conversionApi.writer;t.modelRange||(t.modelRange=n.createRange(n.createPositionBefore(e),n.createPositionAfter(i[i.length-1])));const o=this._cursorParents.get(e);t.modelCursor=o?n.createPositionAt(o,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:i,writer:n}=this.conversionApi;let o=i.findAllowedParent(t,e);if(o){if(o===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(o)&&(o=null)}if(!o)return Ra(t,e,i)?{position:Oa(t,n)}:null;const r=this.conversionApi.writer.split(t,o),s=[];for(const e of r.range.getWalker())if("elementEnd"==e.type)s.push(e.item);else{const t=s.pop(),i=e.item;this._registerSplitPair(t,i)}const a=r.range.end.parent;return this._cursorParents.set(e,a),{position:r.position,cursorParent:a}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const i=this._splitParts.get(e);this._splitParts.set(t,i),i.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}Ke(rc,u);class sc{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class ac{constructor(e){this._domParser=new DOMParser,this._domConverter=new Tr(e,{blockFillerMode:"nbsp"}),this._htmlWriter=new sc}toData(e){const t=this._domConverter.viewToDom(e,document);return this._htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this._domConverter.domToView(t)}registerRawContentMatcher(e){this._domConverter.registerRawContentMatcher(e)}useFillerType(e){this._domConverter.blockFillerMode="marked"==e?"markedNbsp":"nbsp"}_toDom(e){const t=this._domParser.parseFromString(e,"text/html"),i=t.createDocumentFragment(),n=t.body.childNodes;for(;n.length>0;)i.appendChild(n[0]);return i}}class cc{constructor(e,t){this.model=e,this.mapper=new ra,this.downcastDispatcher=new ca({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(e,t,i)=>{if(!i.consumable.consume(t.item,"insert"))return;const n=i.writer,o=i.mapper.toViewPosition(t.range.start),r=n.createText(t.item.data);n.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new rc({schema:e.schema}),this.viewDocument=new vo(t),this.stylesProcessor=t,this.htmlProcessor=new ac(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Wo(this.viewDocument),this.upcastDispatcher.on("text",(e,t,{schema:i,consumable:n,writer:o})=>{let r=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.checkChild(r,"$text")){if(!Ra(r,"$text",i))return;r=Oa(r,o)}n.consume(t.viewItem);const s=o.createText(t.viewItem.data);o.insert(s,r),t.modelRange=o.createRange(r,r.getShiftedBy(s.offsetSize)),t.modelCursor=t.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(e,t,i)=>{if(!t.modelRange&&i.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=i.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(e,t,i)=>{if(!t.modelRange&&i.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=i.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange("transparent",Na)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:i="empty"}=e;if(!this._checkIfRootsExists([t]))throw new c.a("datacontroller-get-non-existent-root",this);const n=this.model.document.getRoot(t);return"empty"!==i||this.model.hasContent(n,{ignoreWhitespaces:!0})?this.stringify(n,e):""}stringify(e,t={}){const i=this.toView(e,t);return this.processor.toData(i)}toView(e,t={}){const i=this.viewDocument,n=this._viewWriter;this.mapper.clearBindings();const o=oa._createIn(e),r=new Uo(i);this.mapper.bindElements(e,r),this.downcastDispatcher.conversionApi.options=t,this.downcastDispatcher.convertInsert(o,n);const s=e.is("documentFragment")?Array.from(e.markers):function(e){const t=[],i=e.root.document;if(!i)return[];const n=oa._createIn(e);for(const e of i.model.markers){const i=n.getIntersection(e.getRange());i&&t.push([e.name,i])}return t}(e);for(const[e,t]of s)this.downcastDispatcher.convertMarkerAdd(e,t,n);return delete this.downcastDispatcher.conversionApi.options,r}init(e){if(this.model.document.version)throw new c.a("datacontroller-init-document-not-empty",this);let t={};if("string"==typeof e?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new c.a("datacontroller-init-non-existent-root",this);return this.model.enqueueChange("transparent",e=>{for(const i of Object.keys(t)){const n=this.model.document.getRoot(i);e.insert(this.parse(t[i],n),n,0)}}),Promise.resolve()}set(e){let t={};if("string"==typeof e?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new c.a("datacontroller-set-non-existent-root",this);this.model.enqueueChange("transparent",e=>{e.setSelection(null),e.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const i of Object.keys(t)){const n=this.model.document.getRoot(i);e.remove(e.createRangeIn(n)),e.insert(this.parse(t[i],n),n,0)}})}parse(e,t="$root"){const i=this.processor.toView(e);return this.toModel(i,t)}toModel(e,t="$root"){return this.model.change(i=>this.upcastDispatcher.convert(e,i,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}Ke(cc,Ue);class lc{constructor(e,t){this._helpers=new Map,this._downcast=en(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=en(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const i=this._downcast.includes(t);if(!this._upcast.includes(t)&&!i)throw new c.a("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:i})}for(e){if(!this._helpers.has(e))throw new c.a("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:i}of dc(e))this.for("upcast").elementToElement({model:t,view:i,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:i}of dc(e))this.for("upcast").elementToAttribute({view:i,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:i}of dc(e))this.for("upcast").attributeToAttribute({view:i,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:i}){if(this._helpers.has(e))throw new c.a("conversion-group-exists",this);const n=i?new Ca(t):new Da(t);this._helpers.set(e,n)}}function*dc(e){if(e.model.values)for(const t of e.model.values){const i={key:e.model.key,value:t},n=e.view[t],o=e.upcastAlso?e.upcastAlso[t]:void 0;yield*uc(i,n,o)}else yield*uc(e.model,e.view,e.upcastAlso)}function*uc(e,t,i){if(yield{model:e,view:t},i)for(const t of en(i))yield{model:e,view:t}}class hc{constructor(e="default"){this.operations=[],this.type=e}get baseVersion(){for(const e of this.operations)if(null!==e.baseVersion)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class fc{constructor(e){this.baseVersion=e,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class gc{constructor(e){this.markers=new Map,this._children=new Qs,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return"documentFragment"===e||"model:documentFragment"===e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const i of e)t=t.getChild(t.offsetToIndex(i));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const i of e)i.name?t.push(Js.fromJSON(i)):t.push(Gs.fromJSON(i));return new gc(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const i=function(e){if("string"==typeof e)return[new Gs(e)];Ji(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Gs(e):e instanceof Ks?new Gs(e.data,e.getAttributes()):e)}(t);for(const e of i)null!==e.parent&&e._remove(),e.parent=this;this._children._insertNodes(e,i)}_removeChildren(e,t=1){const i=this._children._removeNodes(e,t);for(const e of i)e.parent=null;return i}}function mc(e,t){const i=(t=wc(t)).reduce((e,t)=>e+t.offsetSize,0),n=e.parent;_c(e);const o=e.index;return n._insertChild(o,t),kc(n,o+t.length),kc(n,o),new oa(e,e.getShiftedBy(i))}function pc(e){if(!e.isFlat)throw new c.a("operation-utils-remove-range-not-flat",this);const t=e.start.parent;_c(e.start),_c(e.end);const i=t._removeChildren(e.start.index,e.end.index-e.start.index);return kc(t,e.start.index),i}function bc(e,t){if(!e.isFlat)throw new c.a("operation-utils-move-range-not-flat",this);const i=pc(e);return mc(t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),i)}function wc(e){const t=[];e instanceof Array||(e=[e]);for(let i=0;i<e.length;i++)if("string"==typeof e[i])t.push(new Gs(e[i]));else if(e[i]instanceof Ks)t.push(new Gs(e[i].data,e[i].getAttributes()));else if(e[i]instanceof gc||e[i]instanceof Qs)for(const n of e[i])t.push(n);else e[i]instanceof Ys&&t.push(e[i]);for(let e=1;e<t.length;e++){const i=t[e],n=t[e-1];i instanceof Gs&&n instanceof Gs&&vc(i,n)&&(t.splice(e-1,2,new Gs(n.data+i.data,n.getAttributes())),e--)}return t}function kc(e,t){const i=e.getChild(t-1),n=e.getChild(t);if(i&&n&&i.is("$text")&&n.is("$text")&&vc(i,n)){const o=new Gs(i.data+n.data,i.getAttributes());e._removeChildren(t-1,2),e._insertChild(t-1,o)}}function _c(e){const t=e.textNode,i=e.parent;if(t){const n=e.offset-t.startOffset,o=t.index;i._removeChildren(o,1);const r=new Gs(t.data.substr(0,n),t.getAttributes()),s=new Gs(t.data.substr(n),t.getAttributes());i._insertChild(o,[r,s])}}function vc(e,t){const i=e.getAttributes(),n=t.getAttributes();for(const e of i){if(e[1]!==t.getAttribute(e[0]))return!1;n.next()}return n.next().done}var yc=function(e,t){return Jr(e,t)};class xc extends fc{constructor(e,t,i,n,o){super(o),this.range=e.clone(),this.key=t,this.oldValue=void 0===i?null:i,this.newValue=void 0===n?null:n}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new xc(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new xc(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new c.a("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!yc(e.getAttribute(this.key),this.oldValue))throw new c.a("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&e.hasAttribute(this.key))throw new c.a("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){yc(this.oldValue,this.newValue)||function(e,t,i){_c(e.start),_c(e.end);for(const n of e.getItems({shallow:!0})){const e=n.is("$textProxy")?n.textNode:n;null!==i?e._setAttribute(t,i):e._removeAttribute(t),kc(e.parent,e.index)}kc(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new xc(oa.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Ac extends fc{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new c.a("detach-operation-on-document-node",this)}_execute(){pc(oa._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Cc extends fc{constructor(e,t,i,n){super(n),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,i=this.sourcePosition.offset,n=this.targetPosition.offset;if(i+this.howMany>e.maxOffset)throw new c.a("move-operation-nodes-do-not-exist",this);if(e===t&&i<n&&n<i+this.howMany)throw new c.a("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==cn(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=i&&this.targetPosition.path[e]<i+this.howMany)throw new c.a("move-operation-node-into-itself",this)}}_execute(){bc(oa._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const i=ea.fromJSON(e.sourcePosition,t),n=ea.fromJSON(e.targetPosition,t);return new this(i,e.howMany,n,e.baseVersion)}}class Tc extends fc{constructor(e,t,i){super(i),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Qs(wc(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Qs([...this.nodes].map(e=>e._clone(!0))),t=new Tc(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new ea(e,[0]);return new Cc(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new c.a("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Qs([...e].map(e=>e._clone(!0))),mc(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const i=[];for(const t of e.nodes)t.name?i.push(Js.fromJSON(t)):i.push(Gs.fromJSON(t));const n=new Tc(ea.fromJSON(e.position,t),i,e.baseVersion);return n.shouldReceiveAttributes=e.shouldReceiveAttributes,n}}class Ec extends fc{constructor(e,t,i,n,o,r){super(r),this.name=e,this.oldRange=t?t.clone():null,this.newRange=i?i.clone():null,this.affectsData=o,this._markers=n}get type(){return"marker"}clone(){return new Ec(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Ec(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Ec(e.name,e.oldRange?oa.fromJSON(e.oldRange,t):null,e.newRange?oa.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class Pc extends fc{constructor(e,t,i,n){super(n),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=i}get type(){return"rename"}clone(){return new Pc(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Pc(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Js))throw new c.a("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new c.a("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Pc(ea.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Sc extends fc{constructor(e,t,i,n,o){super(o),this.root=e,this.key=t,this.oldValue=i,this.newValue=n}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new Sc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Sc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new c.a("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new c.a("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new c.a("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new c.a("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Sc(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Mc extends fc{constructor(e,t,i,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=n.clone()}get type(){return"merge"}get deletionPosition(){return new ea(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new oa(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),i=new ea(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Ic(e,this.howMany,i,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new c.a("merge-operation-source-position-invalid",this);if(!t.parent)throw new c.a("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new c.a("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;bc(oa._createIn(e),this.targetPosition),bc(oa._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const i=ea.fromJSON(e.sourcePosition,t),n=ea.fromJSON(e.targetPosition,t),o=ea.fromJSON(e.graveyardPosition,t);return new this(i,e.howMany,n,o,e.baseVersion)}}class Ic extends fc{constructor(e,t,i,n,o){super(o),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=i,this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new ea(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new oa(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new ea(e,[0]);return new Mc(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new c.a("split-operation-position-invalid",this);if(!e.parent)throw new c.a("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new c.a("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new c.a("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)bc(oa._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();mc(this.insertionPosition,t)}bc(new oa(ea._createAt(e,this.splitPosition.offset),ea._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new ea(e.root,t,"toPrevious")}static fromJSON(e,t){const i=ea.fromJSON(e.splitPosition,t),n=ea.fromJSON(e.insertionPosition,t),o=e.graveyardPosition?ea.fromJSON(e.graveyardPosition,t):null;return new this(i,e.howMany,n,o,e.baseVersion)}}class Nc extends Js{constructor(e,t,i="main"){super(t),this._document=e,this.rootName=i}get document(){return this._document}is(e,t){return t?t===this.name&&("rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e):"rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e||"node"===e||"model:node"===e}toJSON(){return this.rootName}}class Rc{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Gs(e,t)}createElement(e,t){return new Js(e,t)}createDocumentFragment(){return new gc}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,i=0){if(this._assertWriterUsedCorrectly(),e instanceof Gs&&""==e.data)return;const n=ea._createAt(t,i);if(e.parent){if(Vc(e.root,n.root))return void this.move(oa._createOn(e),n);if(e.root.document)throw new c.a("model-writer-insert-forbidden-move",this);this.remove(e)}const o=n.root.document?n.root.document.version:null,r=new Tc(n,e,o);if(e instanceof Gs&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),e instanceof gc)for(const[t,i]of e.markers){const e=ea._createAt(i.root,0),o={range:new oa(i.start._getCombined(e,n),i.end._getCombined(e,n)),usingOperation:!0,affectsData:!0};this.model.markers.has(t)?this.updateMarker(t,o):this.addMarker(t,o)}}insertText(e,t,i,n){t instanceof gc||t instanceof Js||t instanceof ea?this.insert(this.createText(e),t,i):this.insert(this.createText(e,t),i,n)}insertElement(e,t,i,n){t instanceof gc||t instanceof Js||t instanceof ea?this.insert(this.createElement(e),t,i):this.insert(this.createElement(e,t),i,n)}append(e,t){this.insert(e,t,"end")}appendText(e,t,i){t instanceof gc||t instanceof Js?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),i,"end")}appendElement(e,t,i){t instanceof gc||t instanceof Js?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),i,"end")}setAttribute(e,t,i){if(this._assertWriterUsedCorrectly(),i instanceof oa){const n=i.getMinimalFlatRanges();for(const i of n)Oc(this,e,t,i)}else Dc(this,e,t,i)}setAttributes(e,t){for(const[i,n]of fn(e))this.setAttribute(i,n,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof oa){const i=t.getMinimalFlatRanges();for(const t of i)Oc(this,e,null,t)}else Dc(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=e=>{for(const t of e.getAttributeKeys())this.removeAttribute(t,e)};if(e instanceof oa)for(const i of e.getItems())t(i);else t(e)}move(e,t,i){if(this._assertWriterUsedCorrectly(),!(e instanceof oa))throw new c.a("writer-move-invalid-range",this);if(!e.isFlat)throw new c.a("writer-move-range-not-flat",this);const n=ea._createAt(t,i);if(n.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Vc(e.root,n.root))throw new c.a("writer-move-different-document",this);const o=e.root.document?e.root.document.version:null,r=new Cc(e.start,e.end.offset-e.start.offset,n,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof oa?e:oa._createOn(e)).getMinimalFlatRanges().reverse();for(const e of t)this._addOperationForAffectedMarkers("move",e),zc(e.start,e.end.offset-e.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,i=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Js))throw new c.a("writer-merge-no-element-before",this);if(!(i instanceof Js))throw new c.a("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,i){return this.model.createPositionFromPath(e,t,i)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,i){return this.model.createSelection(e,t,i)}_mergeDetached(e){const t=e.nodeBefore,i=e.nodeAfter;this.move(oa._createIn(i),ea._createAt(t,"end")),this.remove(i)}_merge(e){const t=ea._createAt(e.nodeBefore,"end"),i=ea._createAt(e.nodeAfter,0),n=e.root.document.graveyard,o=new ea(n,[0]),r=e.root.document.version,s=new Mc(i,e.nodeAfter.maxOffset,t,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Js))throw new c.a("writer-rename-not-element-instance",this);const i=e.root.document?e.root.document.version:null,n=new Pc(ea._createBefore(e),e.name,t,i);this.batch.addOperation(n),this.model.applyOperation(n)}split(e,t){this._assertWriterUsedCorrectly();let i,n,o=e.parent;if(!o.parent)throw new c.a("writer-split-element-no-parent",this);if(t||(t=o.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new c.a("writer-split-invalid-limit-element",this);do{const t=o.root.document?o.root.document.version:null,r=o.maxOffset-e.offset,s=Ic.getInsertionPosition(e),a=new Ic(e,r,s,null,t);this.batch.addOperation(a),this.model.applyOperation(a),i||n||(i=o,n=e.parent.nextSibling),o=(e=this.createPositionAfter(e.parent)).parent}while(o!==t);return{position:e,range:new oa(ea._createAt(i,"end"),ea._createAt(n,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new c.a("writer-wrap-range-not-flat",this);const i=t instanceof Js?t:new Js(t);if(i.childCount>0)throw new c.a("writer-wrap-element-not-empty",this);if(null!==i.parent)throw new c.a("writer-wrap-element-attached",this);this.insert(i,e.start);const n=new oa(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(n,ea._createAt(i,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),null===e.parent)throw new c.a("writer-unwrap-element-no-parent",this);this.move(oa._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||"boolean"!=typeof t.usingOperation)throw new c.a("writer-addmarker-no-usingoperation",this);const i=t.usingOperation,n=t.range,o=void 0!==t.affectsData&&t.affectsData;if(this.model.markers.has(e))throw new c.a("writer-addmarker-marker-exists",this);if(!n)throw new c.a("writer-addmarker-no-range",this);return i?(Lc(this,e,null,n,o),this.model.markers.get(e)):this.model.markers._set(e,n,i,o)}updateMarker(e,t){this._assertWriterUsedCorrectly();const i="string"==typeof e?e:e.name,n=this.model.markers.get(i);if(!n)throw new c.a("writer-updatemarker-marker-not-exists",this);if(!t)return void this.model.markers._refresh(n);const o="boolean"==typeof t.usingOperation,r="boolean"==typeof t.affectsData,s=r?t.affectsData:n.affectsData;if(!o&&!t.range&&!r)throw new c.a("writer-updatemarker-wrong-options",this);const a=n.getRange(),l=t.range?t.range:a;o&&t.usingOperation!==n.managedUsingOperations?t.usingOperation?Lc(this,i,null,l,s):(Lc(this,i,a,null,s),this.model.markers._set(i,l,void 0,s)):n.managedUsingOperations?Lc(this,i,a,l,s):this.model.markers._set(i,l,void 0,s)}removeMarker(e){this._assertWriterUsedCorrectly();const t="string"==typeof e?e:e.name;if(!this.model.markers.has(t))throw new c.a("writer-removemarker-no-marker",this);const i=this.model.markers.get(t);if(!i.managedUsingOperations)return void this.model.markers._remove(t);Lc(this,t,i.getRange(),null,i.affectsData)}setSelection(e,t,i){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,i)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),"string"==typeof e)this._setSelectionAttribute(e,t);else for(const[t,i]of fn(e))this._setSelectionAttribute(t,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),"string"==typeof e)this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const i=this.model.document.selection;if(i.isCollapsed&&i.anchor.parent.isEmpty){const n=_a._getStoreAttributeKey(e);this.setAttribute(n,t,i.anchor.parent)}i._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const i=_a._getStoreAttributeKey(e);this.removeAttribute(i,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new c.a("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const i of this.model.markers){if(!i.managedUsingOperations)continue;const n=i.getRange();let o=!1;if("move"===e)o=t.containsPosition(n.start)||t.start.isEqual(n.start)||t.containsPosition(n.end)||t.end.isEqual(n.end);else{const e=t.nodeBefore,i=t.nodeAfter,r=n.start.parent==e&&n.start.isAtEnd,s=n.end.parent==i&&0==n.end.offset,a=n.end.nodeAfter==i,c=n.start.nodeAfter==i;o=r||s||a||c}o&&this.updateMarker(i.name,{range:n})}}}function Oc(e,t,i,n){const o=e.model,r=o.document;let s,a,c,l=n.start;for(const e of n.getWalker({shallow:!0}))c=e.item.getAttribute(t),s&&a!=c&&(a!=i&&d(),l=s),s=e.nextPosition,a=c;function d(){const n=new oa(l,s),c=n.root.document?r.version:null,d=new xc(n,t,a,i,c);e.batch.addOperation(d),o.applyOperation(d)}s instanceof ea&&s!=l&&a!=i&&d()}function Dc(e,t,i,n){const o=e.model,r=o.document,s=n.getAttribute(t);let a,c;if(s!=i){if(n.root===n){const e=n.document?r.version:null;c=new Sc(n,t,s,i,e)}else{a=new oa(ea._createBefore(n),e.createPositionAfter(n));const o=a.root.document?r.version:null;c=new xc(a,t,s,i,o)}e.batch.addOperation(c),o.applyOperation(c)}}function Lc(e,t,i,n,o){const r=e.model,s=r.document,a=new Ec(t,i,n,r.markers,o,s.version);e.batch.addOperation(a),r.applyOperation(a)}function zc(e,t,i,n){let o;if(e.root.document){const i=n.document,r=new ea(i.graveyard,[0]);o=new Cc(e,t,r,i.version)}else o=new Ac(e,t);i.addOperation(o),n.applyOperation(o)}function Vc(e,t){return e===t||e instanceof Nc&&t instanceof Nc}class jc{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize);const t=oa._createOn(e);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t,e.affectsData)}this._cachedChanges=null}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),i=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),i||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=oa._createFromPositionAndShift(e.position,1);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t,e.affectsData)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const i=e.graveyardPosition.parent;this._markInsert(i,e.graveyardPosition.offset,1);const n=e.targetPosition.parent;this._isInInsertedElement(n)||this._markInsert(n,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,i,n){const o=this._changedMarkers.get(e);o?(o.newRange=i,o.affectsData=n,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{oldRange:t,newRange:i,affectsData:n})}getMarkersToRemove(){const e=[];for(const[t,i]of this._changedMarkers)null!=i.oldRange&&e.push({name:t,range:i.oldRange});return e}getMarkersToAdd(){const e=[];for(const[t,i]of this._changedMarkers)null!=i.newRange&&e.push({name:t,range:i.newRange});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(e=>({name:e[0],data:{oldRange:e[1].oldRange,newRange:e[1].newRange}}))}hasDataChanges(){for(const[,e]of this._changedMarkers)if(e.affectsData)return!0;return this._changesInElement.size>0}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const e of this._changesInElement.keys()){const i=this._changesInElement.get(e).sort((e,t)=>e.offset===t.offset?e.type!=t.type?"remove"==e.type?-1:1:0:e.offset<t.offset?-1:1),n=this._elementSnapshots.get(e),o=Bc(e.getChildren()),r=Fc(n.length,i);let s=0,a=0;for(const i of r)if("i"===i)t.push(this._getInsertDiff(e,s,o[s].name)),s++;else if("r"===i)t.push(this._getRemoveDiff(e,s,n[a].name)),a++;else if("a"===i){const i=o[s].attributes,r=n[a].attributes;let c;if("$text"==o[s].name)c=new oa(ea._createAt(e,s),ea._createAt(e,s+1));else{const t=e.offsetToIndex(s);c=new oa(ea._createAt(e,s),ea._createAt(e.getChild(t),0))}t.push(...this._getAttributesDiff(c,r,i)),s++,a++}else s++,a++}t.sort((e,t)=>e.position.root!=t.position.root?e.position.root.rootName<t.position.root.rootName?-1:1:e.position.isEqual(t.position)?e.changeCount-t.changeCount:e.position.isBefore(t.position)?-1:1);for(let e=1,i=0;e<t.length;e++){const n=t[i],o=t[e],r="remove"==n.type&&"remove"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.isEqual(o.position),s="insert"==n.type&&"insert"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.parent==o.position.parent&&n.position.offset+n.length==o.position.offset,a="attribute"==n.type&&"attribute"==o.type&&n.position.parent==o.position.parent&&n.range.isFlat&&o.range.isFlat&&n.position.offset+n.length==o.position.offset&&n.attributeKey==o.attributeKey&&n.attributeOldValue==o.attributeOldValue&&n.attributeNewValue==o.attributeNewValue;r||s||a?(n.length++,a&&(n.range.end=n.range.end.getShiftedBy(1)),t[e]=null):i=e}t=t.filter(e=>e);for(const e of t)delete e.changeCount,"attribute"==e.type&&(delete e.position,delete e.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t.slice(),this._cachedChanges=t.filter(Hc),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(e,t,i){const n={type:"insert",offset:t,howMany:i,count:this._changeCount++};this._markChange(e,n)}_markRemove(e,t,i){const n={type:"remove",offset:t,howMany:i,count:this._changeCount++};this._markChange(e,n),this._removeAllNestedChanges(e,t,i)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const i=this._getChangesForElement(e);this._handleChange(t,i),i.push(t);for(let e=0;e<i.length;e++)i[e].howMany<1&&(i.splice(e,1),e--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Bc(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const i of t){const n=e.offset+e.howMany,o=i.offset+i.howMany;if("insert"==e.type&&("insert"==i.type&&(e.offset<=i.offset?i.offset+=e.howMany:e.offset<o&&(i.howMany+=e.nodesToHandle,e.nodesToHandle=0)),"remove"==i.type&&e.offset<i.offset&&(i.offset+=e.howMany),"attribute"==i.type))if(e.offset<=i.offset)i.offset+=e.howMany;else if(e.offset<o){const o=i.howMany;i.howMany=e.offset-i.offset,t.unshift({type:"attribute",offset:n,howMany:o-i.howMany,count:this._changeCount++})}if("remove"==e.type){if("insert"==i.type)if(n<=i.offset)i.offset-=e.howMany;else if(n<=o)if(e.offset<i.offset){const t=n-i.offset;i.offset=e.offset,i.howMany-=t,e.nodesToHandle-=t}else i.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=i.offset)e.nodesToHandle-=i.howMany,i.howMany=0;else if(e.offset<o){const t=o-e.offset;i.howMany-=t,e.nodesToHandle-=t}if("remove"==i.type&&(n<=i.offset?i.offset-=e.howMany:e.offset<i.offset&&(e.nodesToHandle+=i.howMany,i.howMany=0)),"attribute"==i.type)if(n<=i.offset)i.offset-=e.howMany;else if(e.offset<i.offset){const t=n-i.offset;i.offset=e.offset,i.howMany-=t}else if(e.offset<o)if(n<=o){const n=i.howMany;i.howMany=e.offset-i.offset;const o=n-i.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:o,count:this._changeCount++})}else i.howMany-=o-e.offset}if("attribute"==e.type){if("insert"==i.type)if(e.offset<i.offset&&n>i.offset){if(n>o){const e={type:"attribute",offset:o,howMany:n-o,count:this._changeCount++};this._handleChange(e,t),t.push(e)}e.nodesToHandle=i.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=i.offset&&e.offset<o&&(n>o?(e.nodesToHandle=n-o,e.offset=o):e.nodesToHandle=0);if("remove"==i.type&&e.offset<i.offset&&n>i.offset){const o={type:"attribute",offset:i.offset,howMany:n-i.offset,count:this._changeCount++};this._handleChange(o,t),t.push(o),e.nodesToHandle=i.offset-e.offset,e.howMany=e.nodesToHandle}"attribute"==i.type&&(e.offset>=i.offset&&n<=o?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=i.offset&&n>=o&&(i.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,i){return{type:"insert",position:ea._createAt(e,t),name:i,length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,i){return{type:"remove",position:ea._createAt(e,t),name:i,length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,i){const n=[];i=new Map(i);for(const[o,r]of t){const t=i.has(o)?i.get(o):null;t!==r&&n.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:t,changeCount:this._changeCount++}),i.delete(o)}for(const[t,o]of i)n.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:t,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return n}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const i=this._changesInElement.get(t),n=e.startOffset;if(i)for(const e of i)if("insert"==e.type&&n>=e.offset&&n<e.offset+e.howMany)return!0;return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,i){const n=new oa(ea._createAt(e,t),ea._createAt(e,t+i));for(const e of n.getItems({shallow:!0}))e.is("element")&&(this._elementSnapshots.delete(e),this._changesInElement.delete(e),this._removeAllNestedChanges(e,0,e.maxOffset))}}function Bc(e){const t=[];for(const i of e)if(i.is("$text"))for(let e=0;e<i.data.length;e++)t.push({name:"$text",attributes:new Map(i.getAttributes())});else t.push({name:i.name,attributes:new Map(i.getAttributes())});return t}function Fc(e,t){const i=[];let n=0,o=0;for(const e of t){if(e.offset>n){for(let t=0;t<e.offset-n;t++)i.push("e");o+=e.offset-n}if("insert"==e.type){for(let t=0;t<e.howMany;t++)i.push("i");n=e.offset+e.howMany}else if("remove"==e.type){for(let t=0;t<e.howMany;t++)i.push("r");n=e.offset,o+=e.howMany}else i.push(..."a".repeat(e.howMany).split("")),n=e.offset+e.howMany,o+=e.howMany}if(o<e)for(let t=0;t<e-o-n;t++)i.push("e");return i}function Hc(e){const t=e.position&&"$graveyard"==e.position.root.rootName,i=e.range&&"$graveyard"==e.range.root.rootName;return!t&&!i}class Uc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(e){this._operations.includes(e)||this._operations.push(e)}getOperations(e=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY){const i=[];for(const n of this._operations)n.baseVersion>=e&&n.baseVersion<t&&i.push(n);return i}getOperation(e){for(const t of this._operations)if(t.baseVersion==e)return t}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}}function Wc(e,t){return!!(i=e.charAt(t-1))&&1==i.length&&/[\ud800-\udbff]/.test(i)&&function(e){return!!e&&1==e.length&&/[\udc00-\udfff]/.test(e)}(e.charAt(t));var i}function qc(e,t){return!!(i=e.charAt(t))&&1==i.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(i);var i}class $c{constructor(e){this.model=e,this.version=0,this.history=new Uc(this),this.selection=new _a(this),this.roots=new Zi({idProperty:"rootName"}),this.differ=new jc(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root","$graveyard"),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];if(i.isDocumentOperation&&i.baseVersion!==this.version)throw new c.a("model-document-applyoperation-wrong-version",this,{operation:i})},{priority:"highest"}),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&(this.version++,this.history.addOperation(i))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(e,t,i,n)=>{this.differ.bufferMarkerChange(t.name,i,n,t.affectsData),null===i&&t.on("change",(e,i)=>{this.differ.bufferMarkerChange(t.name,i,t.getRange(),t.affectsData)})})}get graveyard(){return this.getRoot("$graveyard")}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new c.a("model-document-createroot-name-exists",this,{name:t});const i=new Nc(this,e,t);return this.roots.add(i),i}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>"$graveyard"!=e)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=ln(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,i=t.schema,n=t.createPositionFromPath(e,[0]);return i.getNearestSelectionRange(n)||t.createRange(n)}_validateSelectionRange(e){return Yc(e.start)&&Yc(e.end)}_callPostFixers(e){let t=!1;do{for(const i of this._postFixers)if(this.selection.refresh(),t=i(e),t)break}while(t)}}function Yc(e){const t=e.textNode;if(t){const i=t.data,n=e.offset-t.startOffset;return!Wc(i,n)&&!qc(i,n)}return!0}Ke($c,u);class Gc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){return this._markers.has(e)}get(e){return this._markers.get(e)||null}_set(e,t,i=!1,n=!1){const o=e instanceof Kc?e.name:e;if(o.includes(","))throw new c.a("markercollection-incorrect-marker-name",this);const r=this._markers.get(o);if(r){const e=r.getRange();let s=!1;return e.isEqual(t)||(r._attachLiveRange(ba.fromRange(t)),s=!0),i!=r.managedUsingOperations&&(r._managedUsingOperations=i,s=!0),"boolean"==typeof n&&n!=r.affectsData&&(r._affectsData=n,s=!0),s&&this.fire("update:"+o,r,e,t),r}const s=ba.fromRange(t),a=new Kc(o,s,i,n);return this._markers.set(o,a),this.fire("update:"+o,a,null,t),a}_remove(e){const t=e instanceof Kc?e.name:e,i=this._markers.get(t);return!!i&&(this._markers.delete(t),this.fire("update:"+t,i,i.getRange(),null),this._destroyMarker(i),!0)}_refresh(e){const t=e instanceof Kc?e.name:e,i=this._markers.get(t);if(!i)throw new c.a("markercollection-refresh-marker-not-exists",this);const n=i.getRange();this.fire("update:"+t,i,n,n,i.managedUsingOperations,i.affectsData)}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)null!==t.getRange().getIntersection(e)&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}Ke(Gc,u);class Kc{constructor(e,t,i,n){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=i,this._affectsData=n}get managedUsingOperations(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._affectsData}getStart(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.toRange()}is(e){return"marker"===e||"model:marker"===e}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Ke(Kc,u);class Qc extends fc{get type(){return"noop"}clone(){return new Qc(this.baseVersion)}getReversed(){return new Qc(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Jc={};Jc[xc.className]=xc,Jc[Tc.className]=Tc,Jc[Ec.className]=Ec,Jc[Cc.className]=Cc,Jc[Qc.className]=Qc,Jc[fc.className]=fc,Jc[Pc.className]=Pc,Jc[Sc.className]=Sc,Jc[Ic.className]=Ic,Jc[Mc.className]=Mc;class Zc extends ea{constructor(e,t,i="toNone"){if(super(e,t,i),!this.root.is("rootElement"))throw new c.a("model-liveposition-root-not-rootelement",e);Xc.call(this)}detach(){this.stopListening()}is(e){return"livePosition"===e||"model:livePosition"===e||"position"==e||"model:position"===e}toPosition(){return new ea(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function Xc(){this.listenTo(this.root.document.model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&el.call(this,i)},{priority:"low"})}function el(e){const t=this.getTransformedByOperation(e);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}Ke(Zc,u);class tl{constructor(e,t,i){this.model=e,this.writer=t,this.position=i,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),i=this.writer.createPositionAfter(e);if(i.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new c.a("insertcontent-invalid-insertion-position",this);this.position=i,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?oa._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new oa(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Zc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new c.a("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Zc.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Zc.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Js))return;if(!this._canMergeLeft(e))return;const t=Zc._createBefore(e);t.stickiness="toNext";const i=Zc.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Zc._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Zc._createAt(t.nodeBefore,"end","toNext")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Js))return;if(!this._canMergeRight(e))return;const t=Zc._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new c.a("insertcontent-invalid-insertion-position",this);this.position=ea._createAt(t.nodeBefore,"end");const i=Zc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Zc._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Zc._createAt(t.nodeBefore,0,"toPrevious")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Js&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Js&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(t,this.position.parent)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(e,this.position.parent);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const e=this.position.parent;this.position=this.writer.createPositionBefore(e),e.isEmpty&&e.parent===t&&this.writer.remove(e)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const e=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(e,t){return this.schema.checkChild(t,e)?t:t.parent?this._getAllowedIn(e,t.parent):null}}function il(e,t,i={}){if(t.isCollapsed)return;const n=t.getFirstRange();if("$graveyard"==n.root.rootName)return;const o=e.schema;e.change(e=>{if(!i.doNotResetEntireContent&&function(e,t){const i=e.getLimitElement(t);if(!t.containsEntireContent(i))return!1;const n=t.getFirstRange();if(n.start.parent==n.end.parent)return!1;return e.checkChild(i,"paragraph")}(o,t))return void function(e,t){const i=e.model.schema.getLimitElement(t);e.remove(e.createRangeIn(i)),ol(e,e.createPositionAt(i,0),t)}(e,t);const[r,s]=function(e){const t=e.root.document.model,i=e.start;let n=e.end;if(t.hasContent(e,{ignoreMarkers:!0})){const i=function(e){const t=e.parent,i=t.root.document.model.schema,n=t.getAncestors({parentFirst:!0,includeSelf:!0});for(const e of n){if(i.isLimit(e))return null;if(i.isBlock(e))return e}}(n);if(i&&n.isTouching(t.createPositionAt(i,0))){const i=t.createSelection(e);t.modifySelection(i,{direction:"backward"}),n=i.getLastPosition()}}return[Zc.fromPosition(i,"toPrevious"),Zc.fromPosition(n,"toNext")]}(n);r.isTouching(s)||e.remove(e.createRange(r,s)),i.leaveUnmerged||(!function(e,t,i){const n=e.model;if(!nl(e.model.schema,t,i))return;const[o,r]=function(e,t){const i=e.getAncestors(),n=t.getAncestors();let o=0;for(;i[o]&&i[o]==n[o];)o++;return[i[o],n[o]]}(t,i);if(!o||!r)return;!n.hasContent(o,{ignoreMarkers:!0})&&n.hasContent(r,{ignoreMarkers:!0})?function e(t,i,n,o){const r=i.parent,s=n.parent;if(r==o||s==o)return;i=t.createPositionAfter(r),(n=t.createPositionBefore(s)).isEqual(i)||t.insert(r,n);for(;i.parent.isEmpty;){const e=i.parent;i=t.createPositionBefore(e),t.remove(e)}if(n=t.createPositionBefore(s),function(e,t){const i=t.nodeBefore,n=t.nodeAfter;i.name!=n.name&&e.rename(i,n.name);e.clearAttributes(i),e.setAttributes(Object.fromEntries(n.getAttributes()),i),e.merge(t)}(t,n),!nl(t.model.schema,i,n))return;e(t,i,n,o)}(e,t,i,o.parent):function e(t,i,n,o){const r=i.parent,s=n.parent;if(r==o||s==o)return;i=t.createPositionAfter(r),(n=t.createPositionBefore(s)).isEqual(i)||t.insert(s,i);t.merge(i);for(;n.parent.isEmpty;){const e=n.parent;n=t.createPositionBefore(e),t.remove(e)}if(!nl(t.model.schema,i,n))return;e(t,i,n,o)}(e,t,i,o.parent)}(e,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),e)),rl(e,t,r),!i.doNotAutoparagraph&&function(e,t){const i=e.checkChild(t,"$text"),n=e.checkChild(t,"paragraph");return!i&&n}(o,r)&&ol(e,r,t),r.detach(),s.detach()})}function nl(e,t,i){const n=t.parent,o=i.parent;return n!=o&&(!e.isLimit(n)&&!e.isLimit(o)&&function(e,t,i){const n=new oa(e,t);for(const e of n.getWalker())if(i.isLimit(e.item))return!1;return!0}(t,i,e))}function ol(e,t,i){const n=e.createElement("paragraph");e.insert(n,t),rl(e,i,e.createPositionAt(n,0))}function rl(e,t,i){t instanceof _a?e.setSelection(i):t.setTo(i)}function sl(e,t){const{isForward:i,walker:n,unit:o,schema:r}=e,{type:s,item:a,nextPosition:c}=t;if("text"==s)return"word"===e.unit?function(e,t){let i=e.position.textNode;if(i){let n=e.position.offset-i.startOffset;for(;!cl(i.data,n,t)&&!ll(i,n,t);){e.next();const o=t?e.position.nodeAfter:e.position.nodeBefore;if(o&&o.is("$text")){const n=o.data.charAt(t?0:o.data.length-1);' ,.?!:;"-()'.includes(n)||(e.next(),i=e.position.textNode)}n=e.position.offset-i.startOffset}}return e.position}(n,i):function(e,t){const i=e.position.textNode;if(i){const n=i.data;let o=e.position.offset-i.startOffset;for(;Wc(n,o)||"character"==t&&qc(n,o);)e.next(),o=e.position.offset-i.startOffset}return e.position}(n,o);if(s==(i?"elementStart":"elementEnd")){if(r.isSelectable(a))return ea._createAt(a,i?"after":"before");if(r.checkChild(c,"$text"))return c}else{if(r.isLimit(a))return void n.skip(()=>!0);if(r.checkChild(c,"$text"))return c}}function al(e,t){const i=e.root,n=ea._createAt(i,t?"end":0);return t?new oa(e,n):new oa(n,e)}function cl(e,t,i){const n=t+(i?0:-1);return' ,.?!:;"-()'.includes(e.charAt(n))}function ll(e,t,i){return t===(i?e.endOffset:0)}function dl(e,t){const i=[];Array.from(e.getItems({direction:"backward"})).map(e=>t.createRangeOn(e)).filter(t=>(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end))).forEach(e=>{i.push(e.start.parent),t.remove(e)}),i.forEach(e=>{let i=e;for(;i.parent&&i.isEmpty;){const e=t.createRangeOn(i);i=i.parent,t.remove(e)}})}function ul(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.selection,n=t.schema,o=[];let r=!1;for(const e of i.getRanges()){const t=hl(e,n);t&&!t.isEqual(e)?(o.push(t),r=!0):o.push(e)}r&&e.setSelection(function(e){const t=[];t.push(e.shift());for(const i of e){const e=t.pop();if(i.isEqual(e))t.push(e);else if(i.isIntersecting(e)){const n=e.start.isAfter(i.start)?i.start:e.start,o=e.end.isAfter(i.end)?e.end:i.end,r=new oa(n,o);t.push(r)}else t.push(e),t.push(i)}return t}(o),{backward:i.isBackward})}(t,e))}function hl(e,t){return e.isCollapsed?function(e,t){const i=e.start,n=t.getNearestSelectionRange(i);if(!n)return null;if(!n.isCollapsed)return n;const o=n.start;if(i.isEqual(o))return null;return new oa(o)}(e,t):function(e,t){const{start:i,end:n}=e,o=t.checkChild(i,"$text"),r=t.checkChild(n,"$text"),s=t.getLimitElement(i),a=t.getLimitElement(n);if(s===a){if(o&&r)return null;if(function(e,t,i){const n=e.nodeAfter&&!i.isLimit(e.nodeAfter)||i.checkChild(e,"$text"),o=t.nodeBefore&&!i.isLimit(t.nodeBefore)||i.checkChild(t,"$text");return n||o}(i,n,t)){const e=i.nodeAfter&&t.isSelectable(i.nodeAfter)?null:t.getNearestSelectionRange(i,"forward"),o=n.nodeBefore&&t.isSelectable(n.nodeBefore)?null:t.getNearestSelectionRange(n,"backward"),r=e?e.start:i,s=o?o.end:n;return new oa(r,s)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const e=i.nodeAfter&&n.nodeBefore&&i.nodeAfter.parent===n.nodeBefore.parent,o=c&&(!e||!gl(i.nodeAfter,t)),r=l&&(!e||!gl(n.nodeBefore,t));let d=i,u=n;return o&&(d=ea._createBefore(fl(s,t))),r&&(u=ea._createAfter(fl(a,t))),new oa(d,u)}return null}(e,t)}function fl(e,t){let i=e,n=i;for(;t.isLimit(n)&&n.parent;)i=n,n=n.parent;return i}function gl(e,t){return e&&t.isSelectable(e)}class ml{constructor(){this.markers=new Gc,this.document=new $c(this),this.schema=new $a,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$documentFragment",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$documentFragment"}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if("$marker"===t.name)return!0}),ul(this),this.document.registerPostFixer(Na)}change(e){try{return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new hc,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(e){c.a.rethrowUnexpectedError(e,this)}}enqueueChange(e,t){try{"string"==typeof e?e=new hc(e):"function"==typeof e&&(t=e,e=new hc),this._pendingChanges.push({batch:e,callback:t}),1==this._pendingChanges.length&&this._runPendingChanges()}catch(e){c.a.rethrowUnexpectedError(e,this)}}applyOperation(e){e._execute()}insertContent(e,t,i){return function(e,t,i,n){return e.change(o=>{let r;r=i?i instanceof ha||i instanceof _a?i:o.createSelection(i,n):e.document.selection,r.isCollapsed||e.deleteContent(r,{doNotAutoparagraph:!0});const s=new tl(e,o,r.anchor);let a;a=t.is("documentFragment")?t.getChildren():[t],s.handleNodes(a);const c=s.getSelectionRange();c&&(r instanceof _a?o.setSelection(c):r.setTo(c));const l=s.getAffectedRange()||e.createRange(r.anchor);return s.destroy(),l})}(this,e,t,i)}deleteContent(e,t){il(this,e,t)}modifySelection(e,t){!function(e,t,i={}){const n=e.schema,o="backward"!=i.direction,r=i.unit?i.unit:"character",s=t.focus,a=new Zs({boundaries:al(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:n,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const i=sl(c,l.value);if(i)return void(t instanceof _a?e.change(e=>{e.setSelectionFocus(i)}):t.setFocus(i))}}(this,e,t)}getSelectedContent(e){return function(e,t){return e.change(e=>{const i=e.createDocumentFragment(),n=t.getFirstRange();if(!n||n.isCollapsed)return i;const o=n.start.root,r=n.start.getCommonPath(n.end),s=o.getNodeByPath(r);let a;a=n.start.parent==n.end.parent?n:e.createRange(e.createPositionAt(s,n.start.path[r.length]),e.createPositionAt(s,n.end.path[r.length]+1));const c=a.end.offset-a.start.offset;for(const t of a.getItems({shallow:!0}))t.is("$textProxy")?e.appendText(t.data,t.getAttributes(),i):e.append(e.cloneElement(t,!0),i);if(a!=n){const t=n._getTransformedByMove(a.start,e.createPositionAt(i,0),c)[0],o=e.createRange(e.createPositionAt(i,0),t.start);dl(e.createRange(t.end,e.createPositionAt(i,"end")),e),dl(o,e)}return i})}(this,e)}hasContent(e,t={}){const i=e instanceof Js?oa._createIn(e):e;if(i.isCollapsed)return!1;const{ignoreWhitespaces:n=!1,ignoreMarkers:o=!1}=t;if(!o)for(const e of this.markers.getMarkersIntersectingRange(i))if(e.affectsData)return!0;for(const e of i.getItems())if(this.schema.isContent(e)){if(!e.is("$textProxy"))return!0;if(!n)return!0;if(-1!==e.data.search(/\S/))return!0}return!1}createPositionFromPath(e,t,i){return new ea(e,t,i)}createPositionAt(e,t){return ea._createAt(e,t)}createPositionAfter(e){return ea._createAfter(e)}createPositionBefore(e){return ea._createBefore(e)}createRange(e,t){return new oa(e,t)}createRangeIn(e){return oa._createIn(e)}createRangeOn(e){return oa._createOn(e)}createSelection(e,t,i){return new ha(e,t,i)}createBatch(e){return new hc(e)}createOperationFromJSON(e){return class{static fromJSON(e,t){return Jc[e.__className].fromJSON(e,t)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Rc(this,t);const i=this._pendingChanges[0].callback(this._currentWriter);e.push(i),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}Ke(ml,Ue);class pl extends Os{constructor(e){super(),this.editor=e}set(e,t,i={}){if("string"==typeof t){const e=t;t=(t,i)=>{this.editor.execute(e),i()}}super.set(e,t,i)}}class bl{constructor(e={}){this._context=e.context||new sn({language:e.language}),this._context._addEditor(this,!e.context);const t=Array.from(this.constructor.builtinPlugins||[]);this.config=new Gi(e,this.constructor.defaultConfig),this.config.define("plugins",t),this.config.define(this._context._getEditorConfig()),this.plugins=new Xi(this,t,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this.commands=new Ua,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new ml;const i=new Qn;this.data=new cc(this.model,i),this.editing=new Ha(this.model,i),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new lc([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new pl(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const e=this.config,t=e.get("plugins"),i=e.get("removePlugins")||[],n=e.get("extraPlugins")||[],o=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(n),i,o)}destroy(){let e=Promise.resolve();return"initializing"==this.state&&(e=new Promise(e=>this.once("ready",e))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(e){c.a.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}Ke(bl,Ue);class wl{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(kl(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new c.a("componentfactory-item-missing",this,{name:e});return this._components.get(kl(e)).callback(this.editor.locale)}has(e){return this._components.has(kl(e))}}function kl(e){return String(e).toLowerCase()}class _l{constructor(e){this.editor=e,this.componentFactory=new wl(e),this.focusTracker=new Rs,this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}}Ke(_l,u);var vl={setData(e){this.data.set(e)},getData(e){return this.data.get(e)}};var yl={updateSourceElement(){if(!this.sourceElement)throw new c.a("editor-missing-sourceelement",this);var e,t;e=this.sourceElement,t=this.data.get(),e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}};class xl extends an{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Zi({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if("string"!=typeof e)throw new c.a("pendingactions-add-invalid-message",this);const t=Object.create(Ue);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Al='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',Cl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',Tl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',El='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',Pl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',Sl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',Ml='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>',Il='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',Nl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',Rl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',Ol='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>';function Dl({emitter:e,activator:t,callback:i,contextElements:n}){e.listenTo(document,"mousedown",(e,o)=>{if(!t())return;const r="function"==typeof o.composedPath?o.composedPath():[];for(const e of n)if(e.contains(o.target)||r.includes(e))return;i()})}function Ll(e){e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function zl({view:e}){e.listenTo(e.element,"submit",(t,i)=>{i.preventDefault(),e.fire("submit")},{useCapture:!0})}class Vl extends Zi{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(e,t,i)=>{this._renderViewIntoCollectionParent(t,i)}),this.on("remove",(e,t)=>{t.element&&this._parentElement&&t.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...e){if(!e.length||!e.every(e=>"string"==typeof e))throw new c.a("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const i of this)for(const n of e)i.delegate(n).to(t);this.on("add",(i,n)=>{for(const i of e)n.delegate(i).to(t)}),this.on("remove",(i,n)=>{for(const i of e)n.stopDelegating(i,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}i(14);class jl{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Zi,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,i)=>{i.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Bl.bind(this,this)}createCollection(e){const t=new Vl(e);return this._viewCollections.add(t),t}registerChild(e){Ji(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Ji(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Bl(e)}extendTemplate(e){Bl.extend(this.template,e)}render(){if(this.isRendered)throw new c.a("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}Ke(jl,Ir),Ke(jl,Ue);class Bl{constructor(e){Object.assign(this,Ql(Kl(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new c.a("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const i of t.children)td(i)?yield i:id(i)&&(yield*e(i))}(this)}static bind(e,t){return{to:(i,n)=>new Hl({eventNameOrFunction:i,attribute:i,observable:e,emitter:t,callback:n}),if:(i,n,o)=>new Ul({observable:e,emitter:t,attribute:i,valueIfTrue:n,callback:o})}}static extend(e,t){if(e._isRendered)throw new c.a("template-extend-render",[this,e]);!function e(t,i){i.attributes&&(t.attributes||(t.attributes={}),Xl(t.attributes,i.attributes));i.eventListeners&&(t.eventListeners||(t.eventListeners={}),Xl(t.eventListeners,i.eventListeners));i.text&&t.text.push(...i.text);if(i.children&&i.children.length){if(t.children.length!=i.children.length)throw new c.a("ui-template-extend-children-mismatch",t);let n=0;for(const o of i.children)e(t.children[n++],o)}}(e,Ql(Kl(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new c.a("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Wl(this.text)?this._bindToObservable({schema:this.text,updater:$l(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,i,n,o;if(!this.attributes)return;const r=e.node,s=e.revertData;for(t in this.attributes)if(n=r.getAttribute(t),i=this.attributes[t],s&&(s.attributes[t]=n),o=w(i[0])&&i[0].ns?i[0].ns:null,Wl(i)){const a=o?i[0].value:i;s&&od(t)&&a.unshift(n),this._bindToObservable({schema:a,updater:Yl(r,t,o),data:e})}else"style"==t&&"string"!=typeof i[0]?this._renderStyleAttribute(i[0],e):(s&&n&&od(t)&&i.unshift(n),i=i.map(e=>e&&e.value||e).reduce((e,t)=>e.concat(t),[]).reduce(Zl,""),ed(i)||r.setAttributeNS(o,t,i))}_renderStyleAttribute(e,t){const i=t.node;for(const n in e){const o=e[n];Wl(o)?this._bindToObservable({schema:[o],updater:Gl(i,n),data:t}):i.style[n]=o}}_renderElementChildren(e){const t=e.node,i=e.intoFragment?document.createDocumentFragment():t,n=e.isApplying;let o=0;for(const r of this.children)if(nd(r)){if(!n){r.setParent(t);for(const e of r)i.appendChild(e.element)}}else if(td(r))n||(r.isRendered||r.render(),i.appendChild(r.element));else if(mr(r))i.appendChild(r);else if(n){const t={children:[],bindings:[],attributes:{}};e.revertData.children.push(t),r._renderNode({node:i.childNodes[o++],isApplying:!0,revertData:t})}else i.appendChild(r.render());e.intoFragment&&t.appendChild(i)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const i=this.eventListeners[t].map(i=>{const[n,o]=t.split("@");return i.activateDomEventListener(n,o,e)});e.revertData&&e.revertData.bindings.push(i)}}_bindToObservable({schema:e,updater:t,data:i}){const n=i.revertData;ql(e,t,i);const o=e.filter(e=>!ed(e)).filter(e=>e.observable).map(n=>n.activateAttributeListener(e,t,i));n&&n.bindings.push(o)}_revertTemplateFromNode(e,t){for(const e of t.bindings)for(const t of e)t();if(t.text)e.textContent=t.text;else{for(const i in t.attributes){const n=t.attributes[i];null===n?e.removeAttribute(i):e.setAttribute(i,n)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(e.childNodes[i],t.children[i])}}}Ke(Bl,u);class Fl{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,i){const n=()=>ql(e,t,i);return this.emitter.listenTo(this.observable,"change:"+this.attribute,n),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,n)}}}class Hl extends Fl{activateDomEventListener(e,t,i){const n=(e,i)=>{t&&!i.target.matches(t)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(i):this.observable.fire(this.eventNameOrFunction,i))};return this.emitter.listenTo(i.node,e,n),()=>{this.emitter.stopListening(i.node,e,n)}}}class Ul extends Fl{getValue(e){return!ed(super.getValue(e))&&(this.valueIfTrue||!0)}}function Wl(e){return!!e&&(e.value&&(e=e.value),Array.isArray(e)?e.some(Wl):e instanceof Fl)}function ql(e,t,{node:i}){let n=function(e,t){return e.map(e=>e instanceof Fl?e.getValue(t):e)}(e,i);n=1==e.length&&e[0]instanceof Ul?n[0]:n.reduce(Zl,""),ed(n)?t.remove():t.set(n)}function $l(e){return{set(t){e.textContent=t},remove(){e.textContent=""}}}function Yl(e,t,i){return{set(n){e.setAttributeNS(i,t,n)},remove(){e.removeAttributeNS(i,t)}}}function Gl(e,t){return{set(i){e.style[t]=i},remove(){e.style[t]=null}}}function Kl(e){return $i(e,e=>{if(e&&(e instanceof Fl||id(e)||td(e)||nd(e)))return e})}function Ql(e){if("string"==typeof e?e=function(e){return{text:[e]}}(e):e.text&&function(e){e.text=en(e.text)}(e),e.on&&(e.eventListeners=function(e){for(const t in e)Jl(e,t);return e}(e.on),delete e.on),!e.text){e.attributes&&function(e){for(const t in e)e[t].value&&(e[t].value=en(e[t].value)),Jl(e,t)}(e.attributes);const t=[];if(e.children)if(nd(e.children))t.push(e.children);else for(const i of e.children)id(i)||td(i)||mr(i)?t.push(i):t.push(new Bl(i));e.children=t}return e}function Jl(e,t){e[t]=en(e[t])}function Zl(e,t){return ed(t)?e:ed(e)?t:`${e} ${t}`}function Xl(e,t){for(const i in t)e[i]?e[i].push(...t[i]):e[i]=t[i]}function ed(e){return!e&&0!==e}function td(e){return e instanceof jl}function id(e){return e instanceof Bl}function nd(e){return e instanceof Vl}function od(e){return"class"==e||"style"==e}class rd extends Vl{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Bl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=function(e,t,i={},n=[]){const o=i&&i.xmlns,r=o?e.createElementNS(o,t):e.createElement(t);for(const e in i)r.setAttribute(e,i[e]);!ys(n)&&Ji(n)||(n=[n]);for(let t of n)ys(t)&&(t=e.createTextNode(t)),r.appendChild(t);return r}(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&0==e.childElementCount&&e.remove()}}i(16);class sd extends jl{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}i(18);class ad extends jl{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",e=>"ck-tooltip_"+e),t.if("text","ck-hidden",e=>!e.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}i(20);class cd extends jl{constructor(e){super(e);const t=this.bindTemplate,i=s();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(i),this.iconView=new sd,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("isVisible","ck-hidden",e=>!e),t.to("isOn",e=>e?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",e=>e||"button"),tabindex:t.to("tabindex"),"aria-labelledby":"ck-editor__aria-label_"+i,"aria-disabled":t.if("isEnabled",!0,e=>!e),"aria-pressed":t.to("isOn",e=>!!this.isToggleable&&String(e))},children:this.children,on:{mousedown:t.to(e=>{e.preventDefault()}),click:t.to(e=>{this.isEnabled?this.fire("execute"):e.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new ad;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new jl,i=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:i.to("labelStyle"),id:"ck-editor__aria-label_"+e},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new jl;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Do(e))}]}),e}_getTooltipString(e,t,i){return e?"string"==typeof e?e:(i&&(i=Do(i)),e instanceof Function?e(t,i):`${t}${i?` (${i})`:""}`):""}}i(22);class ld extends cd{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new jl;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}class dd{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let i=e.actions[t];"string"==typeof i&&(i=[i]);for(const n of i)e.keystrokeHandler.set(n,(e,i)=>{this[t](),i()})}}get first(){return this.focusables.find(ud)||null}get last(){return this.focusables.filter(ud).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((t,i)=>{const n=t.element===this.focusTracker.focusedElement;return n&&(e=i),n}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,i=this.focusables.length;if(!i)return null;if(null===t)return this[1===e?"first":"last"];let n=(t+i+e)%i;do{const t=this.focusables.get(n);if(ud(t))return t;n=(n+i+e)%i}while(n!==t);return null}}function ud(e){return!(!e.focus||"none"==_r.window.getComputedStyle(e.element).display)}i(24);var hd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class fd extends cd{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new sd;return e.content=hd,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}i(26);class gd extends jl{constructor(e){super(e);const t=this.bindTemplate;this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Os,this.focusTracker=new Rs,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.if("isVisible","ck-hidden",e=>!e),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}focus(){this.actionView.focus()}_createActionView(){const e=new cd;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new cd,t=e.bindTemplate;return e.icon=hd,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",e=>String(e))}}),e.bind("isEnabled").to(this),e.delegate("execute").to(this,"open"),e}}class md extends jl{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",e=>"ck-dropdown__panel_"+e),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(e=>e.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const e=this.children.last;"function"==typeof e.focusLast?e.focusLast():e.focus()}}}i(28);function pd({element:e,target:t,positions:i,limiter:n,fitInViewport:o}){I(t)&&(t=t()),I(n)&&(n=n());const r=function(e){return e&&e.parentNode?e.offsetParent===_r.document.body?null:e.offsetParent:null}(e),s=new Ts(e),a=new Ts(t);let c,l;if(n||o){const e=function(e,t){const{elementRect:i,viewportRect:n}=t,o=i.getArea(),r=function(e,{targetRect:t,elementRect:i,limiterRect:n,viewportRect:o}){const r=[],s=i.getArea();for(const a of e){const e=bd(a,t,i);if(!e)continue;const[c,l]=e;let d=0,u=0;if(n)if(o){const e=n.getIntersection(o);e&&(d=e.getIntersectionArea(l))}else d=n.getIntersectionArea(l);o&&(u=o.getIntersectionArea(l));const h={positionName:c,positionRect:l,limiterIntersectArea:d,viewportIntersectArea:u};if(d===s)return[h];r.push(h)}return r}(e,t);if(n){const e=wd(r.filter(({viewportIntersectArea:e})=>e===o),o);if(e)return e}return wd(r,o)}(i,{targetRect:a,elementRect:s,limiterRect:n&&new Ts(n).getVisible(),viewportRect:o&&new Ts(_r.window)});[l,c]=e||bd(i[0],a,s)}else[l,c]=bd(i[0],a,s);let d=kd(c);return r&&(d=function({left:e,top:t},i){const n=kd(new Ts(i)),o=As(i);return e-=n.left,t-=n.top,e+=i.scrollLeft,t+=i.scrollTop,e-=o.left,t-=o.top,{left:e,top:t}}(d,r)),{left:d.left,top:d.top,name:l}}function bd(e,t,i){const n=e(t,i);if(!n)return null;const{left:o,top:r,name:s}=n;return[s,i.clone().moveTo(o,r)]}function wd(e,t){let i,n,o=0;for(const{positionName:r,positionRect:s,limiterIntersectArea:a,viewportIntersectArea:c}of e){if(a===t)return[r,s];const e=c**2+a**2;e>o&&(o=e,i=s,n=r)}return i?[n,i]:null}function kd({left:e,top:t}){const{scrollX:i,scrollY:n}=_r.window;return{left:e+i,top:t+n}}class _d extends jl{constructor(e,t,i){super(e);const n=this.bindTemplate;this.buttonView=t,this.panelView=i,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Os,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",e=>!e)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,i]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&("auto"===this.panelPosition?this.panelView.position=_d._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(e,t)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,t())};this.keystrokes.set("arrowdown",(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set("arrowright",(e,t)=>{this.isOpen&&t()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:i,southWest:n,northEast:o,northWest:r,southMiddleEast:s,southMiddleWest:a,northMiddleEast:c,northMiddleWest:l}=_d.defaultPanelPositions;return"rtl"!==this.locale.uiLanguageDirection?[i,n,s,a,e,o,r,c,l,t]:[n,i,a,s,e,r,o,l,c,t]}}_d.defaultPanelPositions={south:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/2,name:"s"}),southEast:e=>({top:e.bottom,left:e.left,name:"se"}),southWest:(e,t)=>({top:e.bottom,left:e.left-t.width+e.width,name:"sw"}),southMiddleEast:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/4,name:"sme"}),southMiddleWest:(e,t)=>({top:e.bottom,left:e.left-3*(t.width-e.width)/4,name:"smw"}),north:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/2,name:"n"}),northEast:(e,t)=>({top:e.top-t.height,left:e.left,name:"ne"}),northWest:(e,t)=>({top:e.top-t.height,left:e.left-t.width+e.width,name:"nw"}),northMiddleEast:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/4,name:"nme"}),northMiddleWest:(e,t)=>({top:e.top-t.height,left:e.left-3*(t.width-e.width)/4,name:"nmw"})},_d._getOptimalPosition=pd;class vd extends jl{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class yd extends jl{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function xd(e){return Array.isArray(e)?{items:e,removeItems:[]}:e?Object.assign({items:[],removeItems:[]},e):{items:[],removeItems:[]}}i(30);class Ad extends jl{constructor(e,t){super(e);const i=this.bindTemplate,n=this.t;this.options=t||{},this.set("ariaLabel",n("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Rs,this.keystrokes=new Os,this.set("class"),this.set("isCompact",!1),this.itemsView=new Cd(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection(),this._focusCycler=new dd({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}});const o=["ck","ck-toolbar",i.to("class"),i.if("isCompact","ck-toolbar_compact")];var r;this.options.shouldGroupWhenFull&&this.options.isFloating&&o.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:o,role:"toolbar","aria-label":i.to("ariaLabel"),style:{maxWidth:i.to("maxWidth")}},children:this.children,on:{mousedown:(r=this,r.bindTemplate.to(e=>{e.target===r.element&&e.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Ed(this):new Td(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const i=xd(e),n=i.items.filter((e,n,o)=>"|"===e||-1===i.removeItems.indexOf(e)&&("-"===e?!this.options.shouldGroupWhenFull||(Object(c.b)("toolbarview-line-break-ignored-when-grouping-items",o),!1):!!t.has(e)||(Object(c.b)("toolbarview-item-unavailable",{name:e}),!1))),o=this._cleanSeparators(n).map(e=>"|"===e?new vd:"-"===e?new yd:t.create(e));this.items.addMany(o)}_cleanSeparators(e){const t=e=>"-"!==e&&"|"!==e,i=e.length,n=e.findIndex(t),o=i-e.slice().reverse().findIndex(t);return e.slice(n,o).filter((e,i,n)=>{if(t(e))return!0;return!(i>0&&n[i-1]===e)})}}class Cd extends jl{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class Td{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(e=>e),e.focusables.bindTo(e.items).using(e=>e),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Ed{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(e,t)=>{const i=t.index;for(const e of t.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(e):this.ungroupedItems.remove(e);for(let e=i;e<i+t.added.length;e++){const n=t.added[e-i];e>this.ungroupedItems.length?this.groupedItems.add(n,e-this.ungroupedItems.length):this.ungroupedItems.add(n,e)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!this.viewElement.offsetParent)return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,i=new Ts(e.lastChild),n=new Ts(e);if(!this.cachedPadding){const i=_r.window.getComputedStyle(e),n="ltr"===t?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(i[n])}return"ltr"===t?i.right>n.right-this.cachedPadding:i.left<n.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new Ss(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new vd),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,i=Id(e);return i.class="ck-toolbar__grouped-dropdown",i.panelPosition="ltr"===e.uiLanguageDirection?"sw":"se",function(e,t){const i=e.locale,n=i.t,o=e.toolbarView=new Ad(i);o.set("ariaLabel",n("Dropdown toolbar")),e.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(e=>o.items.add(e)),e.panelView.children.add(o),o.items.delegate("execute").to(e)}(i,[]),i.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:"rtl"===e.uiLanguageDirection?"se":"sw",icon:Ol}),i.toolbarView.items.bindTo(this.groupedItems).using(e=>e),i}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}i(32);class Pd extends jl{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Rs,this.keystrokes=new Os,this._focusCycler=new dd({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Sd extends jl{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class Md extends jl{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}i(34),i(36);function Id(e,t=fd){const i=new t(e),n=new md(e),o=new _d(e,i,n);return i.bind("isEnabled").to(o),i instanceof fd?i.bind("isOn").to(o,"isOpen"):i.arrowView.bind("isOn").to(o,"isOpen"),function(e){(function(e){e.on("render",()=>{Dl({emitter:e,activator:()=>e.isOpen,callback:()=>{e.isOpen=!1},contextElements:[e.element]})})})(e),function(e){e.on("execute",t=>{t.source instanceof ld||(e.isOpen=!1)})}(e),function(e){e.keystrokes.set("arrowdown",(t,i)=>{e.isOpen&&(e.panelView.focus(),i())}),e.keystrokes.set("arrowup",(t,i)=>{e.isOpen&&(e.panelView.focusLast(),i())})}(e)}(o),o}function Nd(e,t){const i=e.locale,n=e.listView=new Pd(i);n.items.bindTo(t).using(({type:e,model:t})=>{if("separator"===e)return new Md(i);if("button"===e||"switchbutton"===e){const n=new Sd(i);let o;return o="button"===e?new cd(i):new ld(i),o.bind(...Object.keys(t)).to(t),o.delegate("execute").to(n),n.children.add(o),n}}),e.panelView.children.add(n),n.items.delegate("execute").to(e)}i(38);class Rd extends jl{constructor(e){super(e),this.body=new rd(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}i(40);class Od extends jl{constructor(e){super(e),this.set("text"),this.set("for"),this.id="ck-editor__label_"+s();const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class Dd extends Rd{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Od;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class Ld extends jl{constructor(e,t,i){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=i,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(t){e.change(i=>{const n=e.document.getRoot(t.name);i.addClass(t.isFocused?"ck-focused":"ck-blurred",n),i.removeClass(t.isFocused?"ck-blurred":"ck-focused",n)})}e.isRenderingInProgress?function i(n){e.once("change:isRenderingInProgress",(e,o,r)=>{r?i(n):t(n)})}(this):t(this)}}class zd extends Ld{constructor(e,t,i){super(e,t,i),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const e=this._editingView,t=this.t;e.change(i=>{const n=e.document.getRoot(this.name);i.setAttribute("aria-label",t("Rich Text Editor, %0",this.name),n)})}}i(42);i(44);class Vd extends jl{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Rs,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to("input"),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,i)=>{this._setDomElementValue(i),this._updateIsEmpty()})}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||0===e?e:""}}i(46);class jd extends jl{constructor(e,t){super(e);const i="ck-labeled-field-view-"+s(),n="ck-labeled-field-view-status-"+s();this.fieldView=t(this,i,n),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(i),this.statusView=this._createStatusView(n),this.bind("_statusText").to(this,"errorText",this,"infoText",(e,t)=>e||t);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",o.to("class"),o.if("isEnabled","ck-disabled",e=>!e),o.if("isEmpty","ck-labeled-field-view_empty"),o.if("isFocused","ck-labeled-field-view_focused"),o.if("placeholder","ck-labeled-field-view_placeholder"),o.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new Od(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new jl(this.locale),i=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",i.if("errorText","ck-labeled-field-view__status_error"),i.if("_statusText","ck-hidden",e=>!e)],id:e,role:i.if("errorText","alert")},children:[{text:i.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function Bd(e,t,i){const n=new Vd(e.locale);return n.set({id:t,ariaDescribedById:i}),n.bind("isReadOnly").to(e,"isEnabled",e=>!e),n.bind("hasError").to(e,"errorText",e=>!!e),n.on("input",()=>{e.errorText=null}),e.bind("isEmpty","isFocused","placeholder").to(n),n}class Fd extends an{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t="show:"+e.type+(e.namespace?":"+e.namespace:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Hd{constructor(e,t){t&&Le(this,t),e&&this.set(e)}}Ke(Hd,Ue);i(48);const Ud=Is("px"),Wd=_r.document.body;class qd extends jl{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",e=>"ck-balloon-panel_"+e),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Ud),left:t.to("left",Ud)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=qd.defaultPositions,i=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast],limiter:Wd,fitInViewport:!0},e),n=qd._getOptimalPosition(i),o=parseInt(n.left),r=parseInt(n.top),s=n.name;Object.assign(this,{top:r,left:o,position:s})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=$d(e.target),i=e.limiter?$d(e.limiter):Wd;this.listenTo(_r.document,"scroll",(n,o)=>{const r=o.target,s=t&&r.contains(t),a=i&&r.contains(i);!s&&!a&&t&&i||this.attachTo(e)},{useCapture:!0}),this.listenTo(_r.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(_r.document,"scroll"),this.stopListening(_r.window,"resize")}}function $d(e){return Yi(e)?e:xs(e)?e.commonAncestorContainer:"function"==typeof e?$d(e()):null}function Yd(e,t){return e.top-t.height-qd.arrowVerticalOffset}function Gd(e){return e.bottom+qd.arrowVerticalOffset}qd.arrowHorizontalOffset=25,qd.arrowVerticalOffset=10,qd._getOptimalPosition=pd,qd.defaultPositions={northWestArrowSouthWest:(e,t)=>({top:Yd(e,t),left:e.left-qd.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthMiddleWest:(e,t)=>({top:Yd(e,t),left:e.left-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_smw"}),northWestArrowSouth:(e,t)=>({top:Yd(e,t),left:e.left-t.width/2,name:"arrow_s"}),northWestArrowSouthMiddleEast:(e,t)=>({top:Yd(e,t),left:e.left-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_sme"}),northWestArrowSouthEast:(e,t)=>({top:Yd(e,t),left:e.left-t.width+qd.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(e,t)=>({top:Yd(e,t),left:e.left+e.width/2-qd.arrowHorizontalOffset,name:"arrow_sw"}),northArrowSouthMiddleWest:(e,t)=>({top:Yd(e,t),left:e.left+e.width/2-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_smw"}),northArrowSouth:(e,t)=>({top:Yd(e,t),left:e.left+e.width/2-t.width/2,name:"arrow_s"}),northArrowSouthMiddleEast:(e,t)=>({top:Yd(e,t),left:e.left+e.width/2-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_sme"}),northArrowSouthEast:(e,t)=>({top:Yd(e,t),left:e.left+e.width/2-t.width+qd.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(e,t)=>({top:Yd(e,t),left:e.right-qd.arrowHorizontalOffset,name:"arrow_sw"}),northEastArrowSouthMiddleWest:(e,t)=>({top:Yd(e,t),left:e.right-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_smw"}),northEastArrowSouth:(e,t)=>({top:Yd(e,t),left:e.right-t.width/2,name:"arrow_s"}),northEastArrowSouthMiddleEast:(e,t)=>({top:Yd(e,t),left:e.right-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_sme"}),northEastArrowSouthEast:(e,t)=>({top:Yd(e,t),left:e.right-t.width+qd.arrowHorizontalOffset,name:"arrow_se"}),southWestArrowNorthWest:(e,t)=>({top:Gd(e),left:e.left-qd.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthMiddleWest:(e,t)=>({top:Gd(e),left:e.left-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_nmw"}),southWestArrowNorth:(e,t)=>({top:Gd(e),left:e.left-t.width/2,name:"arrow_n"}),southWestArrowNorthMiddleEast:(e,t)=>({top:Gd(e),left:e.left-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_nme"}),southWestArrowNorthEast:(e,t)=>({top:Gd(e),left:e.left-t.width+qd.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(e,t)=>({top:Gd(e),left:e.left+e.width/2-qd.arrowHorizontalOffset,name:"arrow_nw"}),southArrowNorthMiddleWest:(e,t)=>({top:Gd(e),left:e.left+e.width/2-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_nmw"}),southArrowNorth:(e,t)=>({top:Gd(e),left:e.left+e.width/2-t.width/2,name:"arrow_n"}),southArrowNorthMiddleEast:(e,t)=>({top:Gd(e),left:e.left+e.width/2-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_nme"}),southArrowNorthEast:(e,t)=>({top:Gd(e),left:e.left+e.width/2-t.width+qd.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(e,t)=>({top:Gd(e),left:e.right-qd.arrowHorizontalOffset,name:"arrow_nw"}),southEastArrowNorthMiddleWest:(e,t)=>({top:Gd(e),left:e.right-.25*t.width-qd.arrowHorizontalOffset,name:"arrow_nmw"}),southEastArrowNorth:(e,t)=>({top:Gd(e),left:e.right-t.width/2,name:"arrow_n"}),southEastArrowNorthMiddleEast:(e,t)=>({top:Gd(e),left:e.right-.75*t.width+qd.arrowHorizontalOffset,name:"arrow_nme"}),southEastArrowNorthEast:(e,t)=>({top:Gd(e),left:e.right-t.width+qd.arrowHorizontalOffset,name:"arrow_ne"})};i(50),i(52);const Kd=Is("px");class Qd extends Qe{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const e=this.editor.editing.view,t=e.document.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},this.set("visibleView",null),this.view=new qd(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new c.a("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const i=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),i.set(e.view,e),this._viewToStack.set(e.view,i),i===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new c.a("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(1===t.size?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),1===t.size?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new c.a("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new Jd(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(e,t)=>!t&&e>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(e,i)=>{if(i<2)return"";const n=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[n,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new Zd(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,t)=>!t&&e>=2?Math.min(e-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:i=!0,singleViewMode:n=!1}){this.view.class=t,this.view.withArrow=i,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),n&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&!e.limiter&&(e=Object.assign({},e,{limiter:this.positionLimiter})),e}}class Jd extends jl{constructor(e){super(e);const t=e.t,i=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Rs,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",i.to("isNavigationVisible",e=>e?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:i.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const i=new cd(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i}}class Zd extends jl{constructor(e,t){super(e);const i=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",i.to("numberOfPanels",e=>e?"":"ck-hidden")],style:{top:i.to("top",Kd),left:i.to("left",Kd),width:i.to("width",Kd),height:i.to("height",Kd)}},children:this.content}),this.on("change:numberOfPanels",(e,t,i,n)=>{i>n?this._addPanels(i-n):this._removePanels(n-i),this.updatePosition()})}_addPanels(e){for(;e--;){const e=new jl;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(e){for(;e--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:i,height:n}=new Ts(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:i,height:n})}}}i(54);const Xd=Is("px");class eu extends jl{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Bl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",e=>e?"block":"none"),height:t.to("isSticky",e=>e?Xd(this._panelRect.height):null)}}}).render(),this._contentPanel=new Bl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",e=>e?Xd(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",e=>e?Xd(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",e=>e?Xd(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(_r.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Xd(-_r.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}Is("px");i(56);Is("px");Is("px");i(58);const tu=new WeakMap;function iu(e){const{view:t,element:i,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=e,s=t.document;tu.has(s)||(tu.set(s,new Map),s.registerPostFixer(e=>ou(s,e))),tu.get(s).set(i,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?i:null}),t.change(e=>ou(s,e))}function nu(e,t){return!!t.hasClass("ck-placeholder")&&(e.removeClass("ck-placeholder",t),!0)}function ou(e,t){const i=tu.get(e),n=[];let o=!1;for(const[e,r]of i)r.isDirectHost&&(n.push(e),ru(t,e,r)&&(o=!0));for(const[e,r]of i){if(r.isDirectHost)continue;const i=su(e);i&&(n.includes(i)||(r.hostElement=i,ru(t,e,r)&&(o=!0)))}return o}function ru(e,t,i){const{text:n,isDirectHost:o,hostElement:r}=i;let s=!1;r.getAttribute("data-placeholder")!==n&&(e.setAttribute("data-placeholder",n,r),s=!0);return(o||1==t.childCount)&&function(e,t){if(!e.isAttached())return!1;if(Array.from(e.getChildren()).some(e=>!e.is("uiElement")))return!1;if(t)return!0;const i=e.document;if(!i.isFocused)return!0;const n=i.selection.anchor;return n&&n.parent!==e}(r,i.keepOnFocus)?function(e,t){return!t.hasClass("ck-placeholder")&&(e.addClass("ck-placeholder",t),!0)}(e,r)&&(s=!0):nu(e,r)&&(s=!0),s}function su(e){if(e.childCount){const t=e.getChild(0);if(t.is("element")&&!t.is("uiElement"))return t}return null}const au=new Map;function cu(e,t,i){let n=au.get(e);n||(n=new Map,au.set(e,n)),n.set(t,i)}function lu(e){return[e]}function du(e,t,i={}){const n=function(e,t){const i=au.get(e);return i&&i.has(t)?i.get(t):lu}(e.constructor,t.constructor);try{return n(e=e.clone(),t,i)}catch(e){throw e}}function uu(e,t,i){e=e.slice(),t=t.slice();const n=new hu(i.document,i.useRelations,i.forceWeakRemove);n.setOriginalOperations(e),n.setOriginalOperations(t);const o=n.originalOperations;if(0==e.length||0==t.length)return{operationsA:e,operationsB:t,originalOperations:o};const r=new WeakMap;for(const t of e)r.set(t,0);const s={nextBaseVersionA:e[e.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:e.length,originalOperationsBCount:t.length};let a=0;for(;a<e.length;){const i=e[a],o=r.get(i);if(o==t.length){a++;continue}const s=t[o],c=du(i,s,n.getContext(i,s,!0)),l=du(s,i,n.getContext(s,i,!1));n.updateRelation(i,s),n.setOriginalOperations(c,i),n.setOriginalOperations(l,s);for(const e of c)r.set(e,o+l.length);e.splice(a,1,...c),t.splice(o,1,...l)}if(i.padWithNoOps){const i=e.length-s.originalOperationsACount,n=t.length-s.originalOperationsBCount;gu(e,n-i),gu(t,i-n)}return fu(e,s.nextBaseVersionB),fu(t,s.nextBaseVersionA),{operationsA:e,operationsB:t,originalOperations:o}}class hu{constructor(e,t,i=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!i,this._relations=new Map}setOriginalOperations(e,t=null){const i=t?this.originalOperations.get(t):null;for(const t of e)this.originalOperations.set(t,i||t)}updateRelation(e,t){switch(e.constructor){case Cc:switch(t.constructor){case Mc:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case Cc:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case Ic:switch(t.constructor){case Mc:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case Cc:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const i=oa._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.splitPosition)){const n=i.end.offset-e.splitPosition.offset,o=e.splitPosition.offset-i.start.offset;this._setRelation(e,t,{howMany:n,offset:o})}}}break;case Mc:switch(t.constructor){case Mc:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case Ic:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case Ec:{const i=e.newRange;if(!i)return;switch(t.constructor){case Cc:{const n=oa._createFromPositionAndShift(t.sourcePosition,t.howMany),o=n.containsPosition(i.start)||n.start.isEqual(i.start),r=n.containsPosition(i.end)||n.end.isEqual(i.end);!o&&!r||n.containsRange(i)||this._setRelation(e,t,{side:o?"left":"right",path:o?i.start.path.slice():i.end.path.slice()});break}case Mc:{const n=i.start.isEqual(t.targetPosition),o=i.start.isEqual(t.deletionPosition),r=i.end.isEqual(t.deletionPosition),s=i.end.isEqual(t.sourcePosition);(n||o||r||s)&&this._setRelation(e,t,{wasInLeftElement:n,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(e,t,i){return{aIsStrong:i,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const i=this.originalOperations.get(t),n=this._history.getUndoneOperation(i);if(!n)return null;const o=this.originalOperations.get(e),r=this._relations.get(o);return r&&r.get(n)||null}_setRelation(e,t,i){const n=this.originalOperations.get(e),o=this.originalOperations.get(t);let r=this._relations.get(n);r||(r=new Map,this._relations.set(n,r)),r.set(o,i)}}function fu(e,t){for(const i of e)i.baseVersion=t++}function gu(e,t){for(let i=0;i<t;i++)e.push(new Qc(0))}function mu(e,t,i){const n=e.nodes.getNode(0).getAttribute(t);if(n==i)return null;const o=new oa(e.position,e.position.getShiftedBy(e.howMany));return new xc(o,t,n,i,0)}function pu(e,t){return null===e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)}function bu(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n],r=new Cc(o.start,o.end.offset-o.start.offset,t,0);i.push(r);for(let t=n+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return i}cu(xc,xc,(e,t,i)=>{if(e.key===t.key&&e.range.start.hasSameParentAs(t.range.start)){const n=e.range.getDifference(t.range).map(t=>new xc(t,e.key,e.oldValue,e.newValue,0)),o=e.range.getIntersection(t.range);return o&&i.aIsStrong&&n.push(new xc(o,t.key,t.newValue,e.newValue,0)),0==n.length?[new Qc(0)]:n}return[e]}),cu(xc,Tc,(e,t)=>{if(e.range.start.hasSameParentAs(t.position)&&e.range.containsPosition(t.position)){const i=e.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(t=>new xc(t,e.key,e.oldValue,e.newValue,e.baseVersion));if(t.shouldReceiveAttributes){const n=mu(t,e.key,e.oldValue);n&&i.unshift(n)}return i}return e.range=e.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[e]}),cu(xc,Mc,(e,t)=>{const i=[];e.range.start.hasSameParentAs(t.deletionPosition)&&(e.range.containsPosition(t.deletionPosition)||e.range.start.isEqual(t.deletionPosition))&&i.push(oa._createFromPositionAndShift(t.graveyardPosition,1));const n=e.range._getTransformedByMergeOperation(t);return n.isCollapsed||i.push(n),i.map(t=>new xc(t,e.key,e.oldValue,e.newValue,e.baseVersion))}),cu(xc,Cc,(e,t)=>function(e,t){const i=oa._createFromPositionAndShift(t.sourcePosition,t.howMany);let n=null,o=[];i.containsRange(e,!0)?n=e:e.start.hasSameParentAs(i.start)?(o=e.getDifference(i),n=e.getIntersection(i)):o=[e];const r=[];for(let e of o){e=e._getTransformedByDeletion(t.sourcePosition,t.howMany);const i=t.getMovedRangeStart(),n=e.start.hasSameParentAs(i);e=e._getTransformedByInsertion(i,t.howMany,n),r.push(...e)}n&&r.push(n._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!1)[0]);return r}(e.range,t).map(t=>new xc(t,e.key,e.oldValue,e.newValue,e.baseVersion))),cu(xc,Ic,(e,t)=>{if(e.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.range.end.offset++,[e];if(e.range.start.hasSameParentAs(t.splitPosition)&&e.range.containsPosition(t.splitPosition)){const i=e.clone();return i.range=new oa(t.moveTargetPosition.clone(),e.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),e.range.end=t.splitPosition.clone(),e.range.end.stickiness="toPrevious",[e,i]}return e.range=e.range._getTransformedBySplitOperation(t),[e]}),cu(Tc,xc,(e,t)=>{const i=[e];if(e.shouldReceiveAttributes&&e.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(e.position)){const n=mu(e,t.key,t.newValue);n&&i.push(n)}return i}),cu(Tc,Tc,(e,t,i)=>(e.position.isEqual(t.position)&&i.aIsStrong||(e.position=e.position._getTransformedByInsertOperation(t)),[e])),cu(Tc,Cc,(e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e])),cu(Tc,Ic,(e,t)=>(e.position=e.position._getTransformedBySplitOperation(t),[e])),cu(Tc,Mc,(e,t)=>(e.position=e.position._getTransformedByMergeOperation(t),[e])),cu(Ec,Tc,(e,t)=>(e.oldRange&&(e.oldRange=e.oldRange._getTransformedByInsertOperation(t)[0]),e.newRange&&(e.newRange=e.newRange._getTransformedByInsertOperation(t)[0]),[e])),cu(Ec,Ec,(e,t,i)=>{if(e.name==t.name){if(!i.aIsStrong)return[new Qc(0)];e.oldRange=t.newRange?t.newRange.clone():null}return[e]}),cu(Ec,Mc,(e,t)=>(e.oldRange&&(e.oldRange=e.oldRange._getTransformedByMergeOperation(t)),e.newRange&&(e.newRange=e.newRange._getTransformedByMergeOperation(t)),[e])),cu(Ec,Cc,(e,t,i)=>{if(e.oldRange&&(e.oldRange=oa._createFromRanges(e.oldRange._getTransformedByMoveOperation(t))),e.newRange){if(i.abRelation){const n=oa._createFromRanges(e.newRange._getTransformedByMoveOperation(t));if("left"==i.abRelation.side&&t.targetPosition.isEqual(e.newRange.start))return e.newRange.start.path=i.abRelation.path,e.newRange.end=n.end,[e];if("right"==i.abRelation.side&&t.targetPosition.isEqual(e.newRange.end))return e.newRange.start=n.start,e.newRange.end.path=i.abRelation.path,[e]}e.newRange=oa._createFromRanges(e.newRange._getTransformedByMoveOperation(t))}return[e]}),cu(Ec,Ic,(e,t,i)=>{if(e.oldRange&&(e.oldRange=e.oldRange._getTransformedBySplitOperation(t)),e.newRange){if(i.abRelation){const n=e.newRange._getTransformedBySplitOperation(t);return e.newRange.start.isEqual(t.splitPosition)&&i.abRelation.wasStartBeforeMergedElement?e.newRange.start=ea._createAt(t.insertionPosition):e.newRange.start.isEqual(t.splitPosition)&&!i.abRelation.wasInLeftElement&&(e.newRange.start=ea._createAt(t.moveTargetPosition)),e.newRange.end.isEqual(t.splitPosition)&&i.abRelation.wasInRightElement?e.newRange.end=ea._createAt(t.moveTargetPosition):e.newRange.end.isEqual(t.splitPosition)&&i.abRelation.wasEndBeforeMergedElement?e.newRange.end=ea._createAt(t.insertionPosition):e.newRange.end=n.end,[e]}e.newRange=e.newRange._getTransformedBySplitOperation(t)}return[e]}),cu(Mc,Tc,(e,t)=>(e.sourcePosition.hasSameParentAs(t.position)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByInsertOperation(t),e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t),[e])),cu(Mc,Mc,(e,t,i)=>{if(e.sourcePosition.isEqual(t.sourcePosition)&&e.targetPosition.isEqual(t.targetPosition)){if(i.bWasUndone){const i=t.graveyardPosition.path.slice();return i.push(0),e.sourcePosition=new ea(t.graveyardPosition.root,i),e.howMany=0,[e]}return[new Qc(0)]}if(e.sourcePosition.isEqual(t.sourcePosition)&&!e.targetPosition.isEqual(t.targetPosition)&&!i.bWasUndone&&"splitAtSource"!=i.abRelation){const n="$graveyard"==e.targetPosition.root.rootName,o="$graveyard"==t.targetPosition.root.rootName,r=n&&!o;if(o&&!n||!r&&i.aIsStrong){const i=t.targetPosition._getTransformedByMergeOperation(t),n=e.targetPosition._getTransformedByMergeOperation(t);return[new Cc(i,e.howMany,n,0)]}return[new Qc(0)]}return e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMergeOperation(t),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),e.graveyardPosition.isEqual(t.graveyardPosition)&&i.aIsStrong||(e.graveyardPosition=e.graveyardPosition._getTransformedByMergeOperation(t)),[e]}),cu(Mc,Cc,(e,t,i)=>{const n=oa._createFromPositionAndShift(t.sourcePosition,t.howMany);return"remove"==t.type&&!i.bWasUndone&&!i.forceWeakRemove&&e.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.sourcePosition)?[new Qc(0)]:(e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition.hasSameParentAs(t.sourcePosition)&&(e.howMany-=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMoveOperation(t),e.targetPosition=e.targetPosition._getTransformedByMoveOperation(t),e.graveyardPosition.isEqual(t.targetPosition)||(e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)),[e])}),cu(Mc,Ic,(e,t,i)=>{if(t.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),e.deletionPosition.isEqual(t.graveyardPosition)&&(e.howMany=t.howMany)),e.targetPosition.isEqual(t.splitPosition)){const n=0!=t.howMany,o=t.graveyardPosition&&e.deletionPosition.isEqual(t.graveyardPosition);if(n||o||"mergeTargetNotMoved"==i.abRelation)return e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),[e]}if(e.sourcePosition.isEqual(t.splitPosition)){if("mergeSourceNotMoved"==i.abRelation)return e.howMany=0,e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e];if("mergeSameElement"==i.abRelation||e.sourcePosition.offset>0)return e.sourcePosition=t.moveTargetPosition.clone(),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]}return e.sourcePosition.hasSameParentAs(t.splitPosition)&&(e.howMany=t.splitPosition.offset),e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]}),cu(Cc,Tc,(e,t)=>{const i=oa._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByInsertOperation(t,!1)[0];return e.sourcePosition=i.start,e.howMany=i.end.offset-i.start.offset,e.targetPosition.isEqual(t.position)||(e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t)),[e]}),cu(Cc,Cc,(e,t,i)=>{const n=oa._createFromPositionAndShift(e.sourcePosition,e.howMany),o=oa._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=i.aIsStrong,a=!i.aIsStrong;if("insertBefore"==i.abRelation||"insertAfter"==i.baRelation?a=!0:"insertAfter"!=i.abRelation&&"insertBefore"!=i.baRelation||(a=!1),r=e.targetPosition.isEqual(t.targetPosition)&&a?e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),pu(e,t)&&pu(t,e))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),bu([n],r);if(o.containsPosition(e.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),bu([n],r);const c=cn(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),bu([n],r);"remove"!=e.type||"remove"==t.type||i.aWasUndone||i.forceWeakRemove?"remove"==e.type||"remove"!=t.type||i.bWasUndone||i.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(o);for(const e of d){e.start=e.start._getTransformedByDeletion(t.sourcePosition,t.howMany),e.end=e.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const i="same"==cn(e.start.getParentPath(),t.getMovedRangeStart().getParentPath()),n=e._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,i);l.push(...n)}const u=n.getIntersection(o);return null!==u&&s&&(u.start=u.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),u.end=u.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),0===l.length?l.push(u):1==l.length?o.start.isBefore(n.start)||o.start.isEqual(n.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),0===l.length?[new Qc(e.baseVersion)]:bu(l,r)}),cu(Cc,Ic,(e,t,i)=>{let n=e.targetPosition.clone();e.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&"moveTargetAfter"!=i.abRelation||(n=e.targetPosition._getTransformedBySplitOperation(t));const o=oa._createFromPositionAndShift(e.sourcePosition,e.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.howMany++,e.targetPosition=n,[e];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let e=new oa(t.splitPosition,o.end);e=e._getTransformedBySplitOperation(t);return bu([new oa(o.start,t.splitPosition),e],n)}e.targetPosition.isEqual(t.splitPosition)&&"insertAtSource"==i.abRelation&&(n=t.moveTargetPosition),e.targetPosition.isEqual(t.insertionPosition)&&"insertBetween"==i.abRelation&&(n=e.targetPosition);const r=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const n=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);e.howMany>1&&n&&!i.aWasUndone&&r.push(oa._createFromPositionAndShift(t.insertionPosition,1))}return bu(r,n)}),cu(Cc,Mc,(e,t,i)=>{const n=oa._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.sourcePosition))if("remove"!=e.type||i.forceWeakRemove){if(1==e.howMany)return i.bWasUndone?(e.sourcePosition=t.graveyardPosition.clone(),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]):[new Qc(0)]}else if(!i.aWasUndone){const i=[];let n=t.graveyardPosition.clone(),o=t.targetPosition._getTransformedByMergeOperation(t);e.howMany>1&&(i.push(new Cc(e.sourcePosition,e.howMany-1,e.targetPosition,0)),n=n._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1),o=o._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1));const r=t.deletionPosition._getCombined(e.sourcePosition,e.targetPosition),s=new Cc(n,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new ea(s.targetPosition.root,a);o=o._getTransformedByMove(n,r,1);const l=new Cc(o,t.howMany,c,0);return i.push(s),i.push(l),i}const o=oa._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByMergeOperation(t);return e.sourcePosition=o.start,e.howMany=o.end.offset-o.start.offset,e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]}),cu(Pc,Tc,(e,t)=>(e.position=e.position._getTransformedByInsertOperation(t),[e])),cu(Pc,Mc,(e,t)=>e.position.isEqual(t.deletionPosition)?(e.position=t.graveyardPosition.clone(),e.position.stickiness="toNext",[e]):(e.position=e.position._getTransformedByMergeOperation(t),[e])),cu(Pc,Cc,(e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e])),cu(Pc,Pc,(e,t,i)=>{if(e.position.isEqual(t.position)){if(!i.aIsStrong)return[new Qc(0)];e.oldName=t.newName}return[e]}),cu(Pc,Ic,(e,t)=>{if("same"==cn(e.position.path,t.splitPosition.getParentPath())&&!t.graveyardPosition){const t=new Pc(e.position.getShiftedBy(1),e.oldName,e.newName,0);return[e,t]}return e.position=e.position._getTransformedBySplitOperation(t),[e]}),cu(Sc,Sc,(e,t,i)=>{if(e.root===t.root&&e.key===t.key){if(!i.aIsStrong||e.newValue===t.newValue)return[new Qc(0)];e.oldValue=t.newValue}return[e]}),cu(Ic,Tc,(e,t)=>(e.splitPosition.hasSameParentAs(t.position)&&e.splitPosition.offset<t.position.offset&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByInsertOperation(t),e.insertionPosition=e.insertionPosition._getTransformedByInsertOperation(t),[e])),cu(Ic,Mc,(e,t,i)=>{if(!e.graveyardPosition&&!i.bWasUndone&&e.splitPosition.hasSameParentAs(t.sourcePosition)){const i=t.graveyardPosition.path.slice();i.push(0);const n=new ea(t.graveyardPosition.root,i),o=Ic.getInsertionPosition(new ea(t.graveyardPosition.root,i)),r=new Ic(n,0,o,null,0);return e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),e.graveyardPosition=r.insertionPosition.clone(),e.graveyardPosition.stickiness="toNext",[r,e]}return e.splitPosition.hasSameParentAs(t.deletionPosition)&&!e.splitPosition.isAfter(t.deletionPosition)&&e.howMany--,e.splitPosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),e.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedByMergeOperation(t)),[e]}),cu(Ic,Cc,(e,t,i)=>{const n=oa._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.graveyardPosition){const o=n.start.isEqual(e.graveyardPosition)||n.containsPosition(e.graveyardPosition);if(!i.bWasUndone&&o){const i=e.splitPosition._getTransformedByMoveOperation(t),n=e.graveyardPosition._getTransformedByMoveOperation(t),o=n.path.slice();o.push(0);const r=new ea(n.root,o);return[new Cc(i,e.howMany,r,0)]}e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)}const o=e.splitPosition.isEqual(t.targetPosition);if(o&&("insertAtSource"==i.baRelation||"splitBefore"==i.abRelation))return e.howMany+=t.howMany,e.splitPosition=e.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),[e];if(o&&i.abRelation&&i.abRelation.howMany){const{howMany:t,offset:n}=i.abRelation;return e.howMany+=t,e.splitPosition=e.splitPosition.getShiftedBy(n),[e]}if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=t.howMany-(e.splitPosition.offset-t.sourcePosition.offset);return e.howMany-=i,e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany),e.splitPosition=t.sourcePosition.clone(),e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),[e]}return t.sourcePosition.isEqual(t.targetPosition)||(e.splitPosition.hasSameParentAs(t.sourcePosition)&&e.splitPosition.offset<=t.sourcePosition.offset&&(e.howMany-=t.howMany),e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany)),e.splitPosition.stickiness="toNone",e.splitPosition=e.splitPosition._getTransformedByMoveOperation(t),e.splitPosition.stickiness="toNext",e.graveyardPosition?e.insertionPosition=e.insertionPosition._getTransformedByMoveOperation(t):e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),[e]}),cu(Ic,Ic,(e,t,i)=>{if(e.splitPosition.isEqual(t.splitPosition)){if(!e.graveyardPosition&&!t.graveyardPosition)return[new Qc(0)];if(e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition))return[new Qc(0)];if("splitBefore"==i.abRelation)return e.howMany=0,e.graveyardPosition=e.graveyardPosition._getTransformedBySplitOperation(t),[e]}if(e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition)){const n="$graveyard"==e.splitPosition.root.rootName,o="$graveyard"==t.splitPosition.root.rootName,r=n&&!o;if(o&&!n||!r&&i.aIsStrong){const i=[];return t.howMany&&i.push(new Cc(t.moveTargetPosition,t.howMany,t.splitPosition,0)),e.howMany&&i.push(new Cc(e.splitPosition,e.howMany,e.moveTargetPosition,0)),i}return[new Qc(0)]}if(e.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedBySplitOperation(t)),e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==i.abRelation)return e.howMany++,[e];if(t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==i.baRelation){const i=t.insertionPosition.path.slice();i.push(0);const n=new ea(t.insertionPosition.root,i);return[e,new Cc(e.insertionPosition,1,n,0)]}return e.splitPosition.hasSameParentAs(t.splitPosition)&&e.splitPosition.offset<t.splitPosition.offset&&(e.howMany-=t.howMany),e.splitPosition=e.splitPosition._getTransformedBySplitOperation(t),e.insertionPosition=Ic.getInsertionPosition(e.splitPosition),[e]});class wu extends ts{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class ku extends ts{constructor(e){super(e),this.domEventType=["mousedown","mouseup"]}onDomEvent(e){this.fire(e.type,e)}}class _u{constructor(e){this.document=e}createDocumentFragment(e){return new Uo(this.document,e)}createElement(e,t,i){return new Xn(this.document,e,t,i)}createText(e){return new un(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,i){return i._insertChild(e,t)}removeChildren(e,t,i){return i._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const i=e.parent;if(i){const n=i.getChildIndex(e);return this.removeChildren(n,1,i),this.insertChild(n,t,i),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const i=t.getChildIndex(e);this.remove(e),this.insertChild(i,e.getChildren(),t)}}rename(e,t){const i=new Xn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,i)?i:null}setAttribute(e,t,i){i._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,i){ct(e)&&void 0===i&&(i=t),i._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,i){i._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return ao._createAt(e,t)}createPositionAfter(e){return ao._createAfter(e)}createPositionBefore(e){return ao._createBefore(e)}createRange(e,t){return new co(e,t)}createRangeOn(e){return co._createOn(e)}createRangeIn(e){return co._createIn(e)}createSelection(e,t,i){return new ho(e,t,i)}}new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","rebeccapurple","currentcolor","transparent"]);class vu extends _l{constructor(e,t){super(e),this.view=t,this._toolbarConfig=xd(e.config.get("toolbar")),this._elementReplacer=new vs}get element(){return this.view.element}init(e){const t=this.editor,i=this.view,n=t.editing.view,o=i.editable,r=n.document.getRoot();o.name=r.rootName,i.render();const s=o.element;this.setEditableElement(o.name,s),this.focusTracker.add(s),i.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(s),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,i=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,this._toolbarConfig.viewportTopOffset&&(t.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:e,originKeystrokeHandler:t,originFocusTracker:i,toolbar:n,beforeFocus:o,afterBlur:r}){i.add(n.element),t.set("Alt+F10",(e,t)=>{i.isFocused&&!n.focusTracker.isFocused&&(o&&o(),n.focus(),t())}),n.keystrokes.set("Esc",(t,i)=>{n.focusTracker.isFocused&&(e.focus(),r&&r(),i())})}({origin:i,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,i=t.document.getRoot(),n=e.sourceElement,o=e.config.get("placeholder")||n&&"textarea"===n.tagName.toLowerCase()&&n.getAttribute("placeholder");o&&iu({view:t,element:i,text:o,isDirectHost:!1,keepOnFocus:!0})}}i(60);class yu extends Dd{constructor(e,t,i={}){super(e),this.stickyPanel=new eu(e),this.toolbar=new Ad(e,{shouldGroupWhenFull:i.shouldToolbarGroupWhenFull}),this.editable=new zd(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class xu extends bl{constructor(e,t){super(t),Yi(e)&&(this.sourceElement=e),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new yu(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:i});this.ui=new vu(this,n),function(e){if(!I(e.updateSourceElement))throw new c.a("attachtoform-missing-elementapi-interface",e);const t=e.sourceElement;if(t&&"textarea"===t.tagName.toLowerCase()&&t.form){let i;const n=t.form,o=()=>e.updateSourceElement();I(n.submit)&&(i=n.submit,n.submit=()=>{o(),i.apply(n)}),n.addEventListener("submit",o),e.on("destroy",()=>{n.removeEventListener("submit",o),i&&(n.submit=i)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(i=>{const n=new this(e,t);i(n.initPlugins().then(()=>n.ui.init(Yi(e)?e:null)).then(()=>{if(!Yi(e)&&t.initialData)throw new c.a("editor-create-initial-data",null);const i=void 0!==t.initialData?t.initialData:function(e){return Yi(e)?(t=e,t instanceof HTMLTextAreaElement?t.value:t.innerHTML):e;var t}(e);return n.data.init(i)}).then(()=>n.fire("ready")).then(()=>n))})}}Ke(xu,vl),Ke(xu,yl);class Au{constructor(e){this.files=function(e){const t=e.files?Array.from(e.files):[],i=e.items?Array.from(e.items):[];if(t.length)return t;return i.filter(e=>"file"===e.kind).map(e=>e.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return"none"==this._native.dropEffect||!!this._native.mozUserCancelled}}class Cu extends ts{constructor(e){super(e);const t=this.document;function i(e){return(i,n)=>{n.preventDefault();const r=n.dropRange?[n.dropRange]:null,s=new o(t,e);t.fire(s,{dataTransfer:n.dataTransfer,method:i.name,targetRanges:r,target:n.target}),s.stop.called&&n.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",i("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new Au(e.clipboardData?e.clipboardData:e.dataTransfer)};"drop"!=e.type&&"dragover"!=e.type||(t.dropRange=function(e,t){const i=t.target.ownerDocument,n=t.clientX,o=t.clientY;let r;i.caretRangeFromPoint&&i.caretRangeFromPoint(n,o)?r=i.caretRangeFromPoint(n,o):t.rangeParent&&(r=i.createRange(),r.setStart(t.rangeParent,t.rangeOffset),r.collapse(!0));if(r)return e.domConverter.domRangeToView(r);return null}(this.view,e)),this.fire(e.type,e,t)}}const Tu=["figcaption","li"];class Eu extends Qe{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(Cu),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){const e=this.editor,t=e.model,i=e.editing.view,n=i.document;this.listenTo(n,"clipboardInput",t=>{e.isReadOnly&&t.stop()},{priority:"highest"}),this.listenTo(n,"clipboardInput",(e,t)=>{const n=t.dataTransfer;let r=t.content||"";var s;r||(n.getData("text/html")?r=function(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1==t.length?" ":t)}(n.getData("text/html")):n.getData("text/plain")&&(((s=(s=n.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||s.includes("<br>"))&&(s=`<p>${s}</p>`),r=s),r=this.editor.data.htmlProcessor.toView(r));const a=new o(this,"inputTransformation");this.fire(a,{content:r,dataTransfer:n,targetRanges:t.targetRanges,method:t.method}),a.stop.called&&e.stop(),i.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(e,i)=>{if(i.content.isEmpty)return;const n=this.editor.data.toModel(i.content,"$clipboardHolder");0!=n.childCount&&(e.stop(),t.change(()=>{this.fire("contentInsertion",{content:n,method:i.method,dataTransfer:i.dataTransfer,targetRanges:i.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(e,i)=>{i.resultRange=t.insertContent(i.content)},{priority:"low"})}_setupCopyCut(){const e=this.editor,t=e.model.document,i=e.editing.view.document;function n(n,o){const r=o.dataTransfer;o.preventDefault();const s=e.data.toView(e.model.getSelectedContent(t.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this.listenTo(i,"copy",n,{priority:"low"}),this.listenTo(i,"cut",(t,i)=>{e.isReadOnly?i.preventDefault():n(t,i)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(i,n)=>{n.content.isEmpty||(n.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(n.content)),n.dataTransfer.setData("text/plain",function e(t){let i="";if(t.is("$text")||t.is("$textProxy"))i=t.data;else if(t.is("element","img")&&t.hasAttribute("alt"))i=t.getAttribute("alt");else if(t.is("element","br"))i="\n";else{let n=null;for(const o of t.getChildren()){const t=e(o);n&&(n.is("containerElement")||o.is("containerElement"))&&(Tu.includes(n.name)||Tu.includes(o.name)?i+="\n":i+="\n\n"),i+=t,n=o}}return i}(n.content))),"cut"==n.method&&e.model.deleteContent(t.selection)},{priority:"low"})}}function*Pu(e,t){for(const i of t)i&&e.getAttributeProperties(i[0]).copyOnEnter&&(yield i)}class Su extends Ze{execute(){const e=this.editor.model,t=e.document;e.change(i=>{!function(e,t,i,n){const o=i.isCollapsed,r=i.getFirstRange(),s=r.start.parent,a=r.end.parent;if(n.isLimit(s)||n.isLimit(a))return void(o||s!=a||e.deleteContent(i));if(o){const e=Pu(t.model.schema,i.getAttributes());Mu(t,r.start),t.setSelectionAttribute(e)}else{const n=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;e.deleteContent(i,{leaveUnmerged:n}),n&&(o?Mu(t,i.focus):t.setSelection(a,0))}}(this.editor.model,i,t.selection,e.schema),this.fire("afterExecute",{writer:i})})}}function Mu(e,t){e.split(t),e.setSelection(t.parent.nextSibling,0)}class Iu extends Or{constructor(e){super(e);const t=this.document;t.on("keydown",(e,i)=>{if(this.isEnabled&&i.keyCode==Io.enter){const n=new go(t,"enter",t.selection.getFirstRange());t.fire(n,new es(t,i.domEvent,{isSoft:i.shiftKey})),n.stop.called&&e.stop()}})}observe(){}}class Nu extends Qe{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,i=t.document;t.addObserver(Iu),e.commands.add("enter",new Su(e)),this.listenTo(i,"enter",(i,n)=>{n.preventDefault(),n.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class Ru{constructor(e,t=20){this.model=e,this.size=0,this.limit=t,this.isLocked=!1,this._changeCallback=(e,t)=>{"transparent"!=t.type&&t!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(e){this.size+=e,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e){this.isLocked&&!e||(this._batch=null,this.size=0)}}class Ou extends Ze{constructor(e,t){super(e),this.direction=t,this._buffer=new Ru(e.model,e.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,i=t.document;t.enqueueChange(this._buffer.batch,n=>{this._buffer.lock();const o=n.createSelection(e.selection||i.selection),r=e.sequence||1,s=o.isCollapsed;if(o.isCollapsed&&t.modifySelection(o,{direction:this.direction,unit:e.unit}),this._shouldEntireContentBeReplacedWithParagraph(r))return void this._replaceEntireContentWithParagraph(n);if(this._shouldReplaceFirstBlockWithParagraph(o,r))return void this.editor.execute("paragraph",{selection:o});if(o.isCollapsed)return;let a=0;o.getFirstRange().getMinimalFlatRanges().forEach(e=>{a+=uo(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(o,{doNotResetEntireContent:s,direction:this.direction}),this._buffer.input(a),n.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,i=t.document.selection,n=t.schema.getLimitElement(i);if(!(i.isCollapsed&&i.containsEntireContent(n)))return!1;if(!t.schema.checkChild(n,"paragraph"))return!1;const o=n.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(e){const t=this.editor.model,i=t.document.selection,n=t.schema.getLimitElement(i),o=e.createElement("paragraph");e.remove(e.createRangeIn(n)),e.insert(o,n),e.setSelection(o,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const i=this.editor.model;if(t>1||"backward"!=this.direction)return!1;if(!e.isCollapsed)return!1;const n=e.getFirstPosition(),o=i.schema.getLimitElement(n),r=o.getChild(0);return n.parent==r&&(!!e.containsEntireContent(r)&&(!!i.schema.checkChild(o,"paragraph")&&"paragraph"!=r.name))}}class Du extends Or{constructor(e){super(e);const t=e.document;let i=0;function n(e,i,n){const o=new go(t,"delete",t.selection.getFirstRange());t.fire(o,new es(t,i,n)),o.stop.called&&e.stop()}t.on("keyup",(e,t)=>{t.keyCode!=Io.delete&&t.keyCode!=Io.backspace||(i=0)}),t.on("keydown",(e,t)=>{const o={};if(t.keyCode==Io.delete)o.direction="forward",o.unit="character";else{if(t.keyCode!=Io.backspace)return;o.direction="backward",o.unit="codePoint"}const r=Po.isMac?t.altKey:t.ctrlKey;o.unit=r?"word":o.unit,o.sequence=++i,n(e,t.domEvent,o)}),Po.isAndroid&&t.on("beforeinput",(t,i)=>{if("deleteContentBackward"!=i.domEvent.inputType)return;const o={unit:"codepoint",direction:"backward",sequence:1},r=i.domTarget.ownerDocument.defaultView.getSelection();r.anchorNode==r.focusNode&&r.anchorOffset+1!=r.focusOffset&&(o.selectionToRemove=e.domConverter.domSelectionToView(r)),n(t,i.domEvent,o)})}observe(){}}class Lu extends Qe{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,i=t.document;t.addObserver(Du);const n=new Ou(e,"forward");if(e.commands.add("deleteForward",n),e.commands.add("forwardDelete",n),e.commands.add("delete",new Ou(e,"backward")),this.listenTo(i,"delete",(i,n)=>{const o={unit:n.unit,sequence:n.sequence};if(n.selectionToRemove){const t=e.model.createSelection(),i=[];for(const t of n.selectionToRemove.getRanges())i.push(e.editing.mapper.toModelRange(t));t.setTo(i),o.selection=t}e.execute("forward"==n.direction?"deleteForward":"delete",o),n.preventDefault(),t.scrollToTheSelection()},{priority:"low"}),Po.isAndroid){let e=null;this.listenTo(i,"delete",(t,i)=>{const n=i.domTarget.ownerDocument.defaultView.getSelection();e={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}},{priority:"lowest"}),this.listenTo(i,"keyup",(t,i)=>{if(e){const t=i.domTarget.ownerDocument.defaultView.getSelection();t.collapse(e.anchorNode,e.anchorOffset),t.extend(e.focusNode,e.focusOffset),e=null}})}}}class zu{constructor(){this._stack=[]}add(e,t){const i=this._stack,n=i[0];this._insertDescriptor(e);const o=i[0];n===o||Vu(n,o)||this.fire("change:top",{oldDescriptor:n,newDescriptor:o,writer:t})}remove(e,t){const i=this._stack,n=i[0];this._removeDescriptor(e);const o=i[0];n===o||Vu(n,o)||this.fire("change:top",{oldDescriptor:n,newDescriptor:o,writer:t})}_insertDescriptor(e){const t=this._stack,i=t.findIndex(t=>t.id===e.id);if(Vu(e,t[i]))return;i>-1&&t.splice(i,1);let n=0;for(;t[n]&&ju(t[n],e);)n++;t.splice(n,0,e)}_removeDescriptor(e){const t=this._stack,i=t.findIndex(t=>t.id===e);i>-1&&t.splice(i,1)}}function Vu(e,t){return e&&t&&e.priority==t.priority&&Bu(e.classes)==Bu(t.classes)}function ju(e,t){return e.priority>t.priority||!(e.priority<t.priority)&&Bu(e.classes)>Bu(t.classes)}function Bu(e){return Array.isArray(e)?e.sort().join(","):e}Ke(zu,u);function Fu(e){return!!e.is("element")&&!!e.getCustomProperty("widget")}function Hu(e,t,i={}){if(!e.is("containerElement"))throw new c.a("widget-to-widget-wrong-element-type",null,{element:e});return t.setAttribute("contenteditable","false",e),t.addClass("ck-widget",e),t.setCustomProperty("widget",!0,e),e.getFillerOffset=Ju,i.label&&function(e,t,i){i.setCustomProperty("widgetLabel",t,e)}(e,i.label,t),i.hasSelectionHandle&&function(e,t){const i=t.createUIElement("div",{class:"ck ck-widget__selection-handle"},(function(e){const t=this.toDomElement(e),i=new sd;return i.set("content",'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'),i.render(),t.appendChild(i.element),t}));t.insert(t.createPositionAt(e,0),i),t.addClass(["ck-widget_with-selection-handle"],e)}(e,t),qu(e,t,Uu,Wu),e}function Uu(e,t,i){if(t.classes&&i.addClass(en(t.classes),e),t.attributes)for(const n in t.attributes)i.setAttribute(n,t.attributes[n],e)}function Wu(e,t,i){if(t.classes&&i.removeClass(en(t.classes),e),t.attributes)for(const n in t.attributes)i.removeAttribute(n,e)}function qu(e,t,i,n){const o=new zu;o.on("change:top",(t,o)=>{o.oldDescriptor&&n(e,o.oldDescriptor,o.writer),o.newDescriptor&&i(e,o.newDescriptor,o.writer)}),t.setCustomProperty("addHighlight",(e,t,i)=>o.add(t,i),e),t.setCustomProperty("removeHighlight",(e,t,i)=>o.remove(t,i),e)}function $u(e){const t=e.getCustomProperty("widgetLabel");return t?"function"==typeof t?t():t:""}function Yu(e,t){return t.addClass(["ck-editor__editable","ck-editor__nested-editable"],e),t.setAttribute("contenteditable",e.isReadOnly?"false":"true",e),e.on("change:isReadOnly",(i,n,o)=>{t.setAttribute("contenteditable",o?"false":"true",e)}),e.on("change:isFocused",(i,n,o)=>{o?t.addClass("ck-editor__nested-editable_focused",e):t.removeClass("ck-editor__nested-editable_focused",e)}),e}function Gu(e,t){const i=e.getSelectedElement();if(i){const n=Xu(e);if(n)return t.createPositionAt(i,n);if(t.schema.isBlock(i))return t.createPositionAfter(i)}const n=e.getSelectedBlocks().next().value;if(n){if(n.isEmpty)return t.createPositionAt(n,0);const i=t.createPositionAfter(n);return e.focus.isTouching(i)?i:t.createPositionBefore(n)}return e.focus}function Ku(e,t){const i=e.getSelectedElement();return!!i&&t.isObject(i)}function Qu(e,t){const i=new Ts(_r.window),n=i.getIntersection(e),o=t.height+qd.arrowVerticalOffset;if(e.top-o>i.top||e.bottom+o<i.bottom)return null;const r=n||e,s=r.left+r.width/2-t.width/2;return{top:Math.max(e.top,0)+qd.arrowVerticalOffset,left:s,name:"arrow_n"}}function Ju(){return null}function Zu(e,t,i){return e&&Fu(e)&&!i.isInline(t)}function Xu(e){return e.getAttribute("widget-type-around")}const eh=[Ro("arrowUp"),Ro("arrowRight"),Ro("arrowDown"),Ro("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let e=112;e<=135;e++)eh.push(e);function th(e){return!(!e.ctrlKey&&!e.metaKey)||eh.includes(e.keyCode)}i(62);const ih=["before","after"],nh=(new DOMParser).parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild;class oh extends Qe{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Nu,Lu]}constructor(e){super(e),this._currentFakeCaretModelElement=null}init(){const e=this.editor,t=e.editing.view;this.on("change:isEnabled",(i,n,o)=>{t.change(e=>{for(const i of t.document.roots)o?e.removeClass("ck-widget__type-around_disabled",i):e.addClass("ck-widget__type-around_disabled",i)}),o||e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration()}destroy(){this._currentFakeCaretModelElement=null}_insertParagraph(e,t){const i=this.editor,n=i.editing.view;i.execute("insertParagraph",{position:i.model.createPositionAt(e,t)}),n.focus(),n.scrollToTheSelection()}_listenToIfEnabled(e,t,i,n){this.listenTo(e,t,(...e)=>{this.isEnabled&&i(...e)},n)}_insertParagraphAccordingToFakeCaretPosition(){const e=this.editor.model.document.selection,t=Xu(e);if(!t)return!1;const i=e.getSelectedElement();return this._insertParagraph(i,t),!0}_enableTypeAroundUIInjection(){const e=this.editor,t=e.model.schema,i=e.locale.t,n={before:i("Insert paragraph before block"),after:i("Insert paragraph after block")};e.editing.downcastDispatcher.on("insert",(e,i,o)=>{const r=o.mapper.toViewElement(i.item);Zu(r,i.item,t)&&function(e,t,i){const n=e.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},(function(e){const i=this.toDomElement(e);return function(e,t){for(const i of ih){const n=new Bl({tag:"div",attributes:{class:["ck","ck-widget__type-around__button","ck-widget__type-around__button_"+i],title:t[i]},children:[e.ownerDocument.importNode(nh,!0)]});e.appendChild(n.render())}}(i,t),function(e){const t=new Bl({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});e.appendChild(t.render())}(i),i}));e.insert(e.createPositionAt(i,"end"),n)}(o.writer,n,r)},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const e=this.editor,t=e.model,i=t.document.selection,n=t.schema,o=e.editing.view;function r(e){return"ck-widget_type-around_show-fake-caret_"+e}this._listenToIfEnabled(o.document,"arrowKey",(e,t)=>{this._handleArrowKeyPress(e,t)},{context:[Fu,"$text"],priority:"high"}),this._listenToIfEnabled(i,"change:range",(t,i)=>{i.directChange&&e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._listenToIfEnabled(t.document,"change:data",()=>{const t=i.getSelectedElement();if(t){if(Zu(e.editing.mapper.toViewElement(t),t,n))return}e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._listenToIfEnabled(e.editing.downcastDispatcher,"selection",(e,t,i)=>{const o=i.writer;if(this._currentFakeCaretModelElement){const e=i.mapper.toViewElement(this._currentFakeCaretModelElement);e&&(o.removeClass(ih.map(r),e),this._currentFakeCaretModelElement=null)}const s=t.selection.getSelectedElement();if(!s)return;const a=i.mapper.toViewElement(s);if(!Zu(a,s,n))return;const c=Xu(t.selection);c&&(o.addClass(r(c),a),this._currentFakeCaretModelElement=s)}),this._listenToIfEnabled(e.ui.focusTracker,"change:isFocused",(t,i,n)=>{n||e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})})}_handleArrowKeyPress(e,t){const i=this.editor,n=i.model,o=n.document.selection,r=n.schema,s=i.editing.view,a=zo(t.keyCode,i.locale.contentLanguageDirection),c=s.document.selection.getSelectedElement();let l;Zu(c,i.editing.mapper.toModelElement(c),r)?l=this._handleArrowKeyPressOnSelectedWidget(a):o.isCollapsed&&(l=this._handleArrowKeyPressWhenSelectionNextToAWidget(a)),l&&(t.preventDefault(),e.stop())}_handleArrowKeyPressOnSelectedWidget(e){const t=this.editor.model,i=Xu(t.document.selection);return t.change(t=>{if(!i)return t.setSelectionAttribute("widget-type-around",e?"after":"before"),!0;if(!(i===(e?"after":"before")))return t.removeSelectionAttribute("widget-type-around"),!0;return!1})}_handleArrowKeyPressWhenSelectionNextToAWidget(e){const t=this.editor,i=t.model,n=i.schema,o=t.plugins.get("Widget"),r=o._getObjectElementNextToSelection(e);return!!Zu(t.editing.mapper.toViewElement(r),r,n)&&(i.change(t=>{o._setSelectionOverElement(r),t.setSelectionAttribute("widget-type-around",e?"before":"after")}),!0)}_enableInsertingParagraphsOnButtonClick(){const e=this.editor,t=e.editing.view;this._listenToIfEnabled(t.document,"mousedown",(i,n)=>{const o=n.domTarget.closest(".ck-widget__type-around__button");if(!o)return;const r=function(e){return e.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(o),s=function(e,t){const i=e.closest(".ck-widget");return t.mapDomToView(i)}(o,t.domConverter),a=e.editing.mapper.toModelElement(s);this._insertParagraph(a,r),n.preventDefault(),i.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const e=this.editor,t=e.model.document.selection,i=e.editing.view;this._listenToIfEnabled(i.document,"enter",(i,n)=>{if("atTarget"!=i.eventPhase)return;const o=t.getSelectedElement(),r=e.editing.mapper.toViewElement(o),s=e.model.schema;let a;this._insertParagraphAccordingToFakeCaretPosition()?a=!0:Zu(r,o,s)&&(this._insertParagraph(o,n.isSoft?"before":"after"),a=!0),a&&(n.preventDefault(),i.stop())},{context:Fu})}_enableInsertingParagraphsOnTypingKeystroke(){const e=this.editor.editing.view,t=[Io.enter,Io.delete,Io.backspace];this._listenToIfEnabled(e.document,"keydown",(e,i)=>{t.includes(i.keyCode)||th(i)||this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){const e=this.editor,t=e.editing.view,i=e.model,n=i.schema;this._listenToIfEnabled(t.document,"delete",(t,o)=>{if("atTarget"!=t.eventPhase)return;const r=Xu(i.document.selection);if(!r)return;const s=o.direction,a=i.document.selection.getSelectedElement(),c="forward"==s;if("before"===r===c)e.execute("delete",{selection:i.createSelection(a,"on")});else{const t=n.getNearestSelectionRange(i.createPositionAt(a,r),s);if(t)if(t.isCollapsed){const o=i.createSelection(t.start);if(i.modifySelection(o,{direction:s}),o.focus.isEqual(t.start)){const e=function(e,t){let i=t;for(const n of t.getAncestors({parentFirst:!0})){if(n.childCount>1||e.isLimit(n))break;i=n}return i}(n,t.start.parent);i.deleteContent(i.createSelection(e,"on"),{doNotAutoparagraph:!0})}else i.change(i=>{i.setSelection(t),e.execute(c?"deleteForward":"delete")})}else i.change(i=>{i.setSelection(t),e.execute(c?"deleteForward":"delete")})}o.preventDefault(),t.stop()},{context:Fu})}_enableInsertContentIntegration(){const e=this.editor,t=this.editor.model,i=t.document.selection;this._listenToIfEnabled(e.model,"insertContent",(e,[n,o])=>{if(o&&!o.is("documentSelection"))return;const r=Xu(i);return r?(e.stop(),t.change(e=>{const o=i.getSelectedElement(),s=t.createPositionAt(o,r),a=e.createSelection(s),c=t.insertContent(n,a);return e.setSelection(a),c})):void 0},{priority:"high"})}}i(64);function rh(e){const t=e.model;return(i,n)=>{const o=n.keyCode==Io.arrowup,r=n.keyCode==Io.arrowdown,s=n.shiftKey,a=t.document.selection;if(!o&&!r)return;const c=r;if(s&&function(e,t){return!e.isCollapsed&&e.isBackward==t}(a,c))return;const l=function(e,t,i){const n=e.model;if(i){const e=t.isCollapsed?t.focus:t.getLastPosition(),i=sh(n,e,"forward");if(!i)return null;const o=n.createRange(e,i),r=ah(n.schema,o,"backward");return r&&e.isBefore(r)?n.createRange(e,r):null}{const e=t.isCollapsed?t.focus:t.getFirstPosition(),i=sh(n,e,"backward");if(!i)return null;const o=n.createRange(i,e),r=ah(n.schema,o,"forward");return r&&e.isAfter(r)?n.createRange(r,e):null}}(e,a,c);l&&!l.isCollapsed&&function(e,t,i){const n=e.model,o=e.view.domConverter;if(i){const e=n.createSelection(t.start);n.modifySelection(e),e.focus.isAtEnd||t.start.isEqual(e.focus)||(t=n.createRange(e.focus,t.end))}const r=e.mapper.toViewRange(t),s=o.viewRangeToDom(r),a=Ts.getDomRangeRects(s);let c;for(const e of a)if(void 0!==c){if(Math.round(e.top)>=c)return!1;c=Math.max(c,Math.round(e.bottom))}else c=Math.round(e.bottom);return!0}(e,l,c)&&(t.change(e=>{const i=c?l.end:l.start;if(s){const n=t.createSelection(a.anchor);n.setFocus(i),e.setSelection(n)}else e.setSelection(i)}),i.stop(),n.preventDefault(),n.stopPropagation())}}function sh(e,t,i){const n=e.schema,o=e.createRangeIn(t.root),r="forward"==i?"elementStart":"elementEnd";for(const{previousPosition:e,item:s,type:a}of o.getWalker({startPosition:t,direction:i})){if(n.isLimit(s)&&!n.isInline(s))return e;if(a==r&&n.isBlock(s))return null}return null}function ah(e,t,i){const n="backward"==i?t.end:t.start;if(e.checkChild(n,"$text"))return n;for(const{nextPosition:n}of t.getWalker({direction:i}))if(e.checkChild(n,"$text"))return n}class ch extends Qe{static get pluginName(){return"Widget"}static get requires(){return[oh,Lu]}init(){const e=this.editor.editing.view,t=e.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(e,t,i)=>{this._clearPreviouslySelectedWidgets(i.writer);const n=i.writer,o=n.document.selection,r=o.getSelectedElement();let s=null;for(const e of o.getRanges())for(const t of e){const e=t.item;Fu(e)&&!lh(e,s)&&(n.addClass("ck-widget_selected",e),this._previouslySelected.add(e),s=e,e==r&&n.setSelection(o.getRanges(),{fake:!0,label:$u(r)}))}},{priority:"low"}),e.addObserver(ku),this.listenTo(t,"mousedown",(...e)=>this._onMousedown(...e)),this.listenTo(t,"arrowKey",(...e)=>{this._handleSelectionChangeOnArrowKeyPress(...e)},{context:[Fu,"$text"]}),this.listenTo(t,"arrowKey",(...e)=>{this._preventDefaultOnArrowKeyPress(...e)},{context:"$root"}),this.listenTo(t,"arrowKey",rh(this.editor.editing),{context:"$text"}),this.listenTo(t,"delete",(e,t)=>{this._handleDelete("forward"==t.direction)&&(t.preventDefault(),e.stop())},{context:"$root"})}_onMousedown(e,t){const i=this.editor,n=i.editing.view,o=n.document;let r=t.target;if(function(e){for(;e;){if(e.is("editableElement")&&!e.is("rootElement"))return!0;if(Fu(e))return!1;e=e.parent}return!1}(r)){if((Po.isSafari||Po.isGecko)&&t.domEvent.detail>=3){const e=i.editing.mapper,n=r.is("attributeElement")?r.findAncestor(e=>!e.is("attributeElement")):r,o=e.toModelElement(n);t.preventDefault(),this.editor.model.change(e=>{e.setSelection(o,"in")})}return}if(!Fu(r)&&(r=r.findAncestor(Fu),!r))return;Po.isAndroid&&t.preventDefault(),o.isFocused||n.focus();const s=i.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_handleSelectionChangeOnArrowKeyPress(e,t){const i=t.keyCode,n=this.editor.model,o=n.schema,r=n.document.selection,s=r.getSelectedElement(),a=zo(i,this.editor.locale.contentLanguageDirection);if(s&&o.isObject(s)){const i=a?r.getLastPosition():r.getFirstPosition(),s=o.getNearestSelectionRange(i,a?"forward":"backward");return void(s&&(n.change(e=>{e.setSelection(s)}),t.preventDefault(),e.stop()))}if(!r.isCollapsed)return;const c=this._getObjectElementNextToSelection(a);c&&o.isObject(c)&&(this._setSelectionOverElement(c),t.preventDefault(),e.stop())}_preventDefaultOnArrowKeyPress(e,t){const i=this.editor.model,n=i.schema,o=i.document.selection.getSelectedElement();o&&n.isObject(o)&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;const t=this.editor.model.document.selection;if(!t.isCollapsed)return;const i=this._getObjectElementNextToSelection(e);return i?(this.editor.model.change(e=>{let n=t.anchor.parent;for(;n.isEmpty;){const t=n;n=t.parent,e.remove(t)}this._setSelectionOverElement(i)}),!0):void 0}_setSelectionOverElement(e){this.editor.model.change(t=>{t.setSelection(t.createRangeOn(e))})}_getObjectElementNextToSelection(e){const t=this.editor.model,i=t.schema,n=t.document.selection,o=t.createSelection(n);t.modifySelection(o,{direction:e?"forward":"backward"});const r=e?o.focus.nodeBefore:o.focus.nodeAfter;return r&&i.isObject(r)?r:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass("ck-widget_selected",t);this._previouslySelected.clear()}}function lh(e,t){return!!t&&Array.from(e.getAncestors()).includes(t)}var dh=function(e,t,i){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return w(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),ms(e,t,{leading:n,maxWait:t,trailing:o})};i(66);class uh extends Qe{static get pluginName(){return"DragDrop"}static get requires(){return[Eu,ch]}init(){const e=this.editor,t=e.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=dh(e=>this._updateDropMarker(e),40),this._removeDropMarkerDelayed=gh(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=gh(()=>this._clearDraggableAttributes(),40),t.addObserver(Cu),t.addObserver(ku),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(e,"change:isReadOnly",(e,t,i)=>{i?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(e,t,i)=>{i||this._finalizeDragging(!1)}),Po.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){const e=this.editor,t=e.model,i=t.document,n=e.editing.view,o=n.document;this.listenTo(o,"dragstart",(n,r)=>{const a=i.selection;if(r.target&&r.target.is("editableElement"))return void r.preventDefault();const c=r.target?mh(r.target):null;if(c){const i=e.editing.mapper.toModelElement(c);this._draggedRange=ba.fromRange(t.createRangeOn(i))}else if(!o.selection.isCollapsed){const e=o.selection.getSelectedElement();e&&Fu(e)||(this._draggedRange=ba.fromRange(a.getFirstRange()))}if(!this._draggedRange)return void r.preventDefault();this._draggingUid=s(),r.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",r.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);const l=t.createSelection(this._draggedRange.toRange()),d=e.data.toView(t.getSelectedContent(l));o.fire("clipboardOutput",{dataTransfer:r.dataTransfer,content:d,method:n.name}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(o,"dragend",(e,t)=>{this._finalizeDragging(!t.dataTransfer.isCanceled&&"move"==t.dataTransfer.dropEffect)},{priority:"low"}),this.listenTo(o,"dragenter",()=>{this.isEnabled&&n.focus()}),this.listenTo(o,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(o,"dragging",(t,i)=>{if(!this.isEnabled)return void(i.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();const n=hh(e,i.targetRanges,i.target);this._draggedRange||(i.dataTransfer.dropEffect="copy"),Po.isGecko||("copy"==i.dataTransfer.effectAllowed?i.dataTransfer.dropEffect="copy":["all","copyMove"].includes(i.dataTransfer.effectAllowed)&&(i.dataTransfer.dropEffect="move")),n&&this._updateDropMarkerThrottled(n)},{priority:"low"})}_setupClipboardInputIntegration(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"clipboardInput",(t,i)=>{if("drop"!=i.method)return;const n=hh(e,i.targetRanges,i.target);if(this._removeDropMarker(),!n)return this._finalizeDragging(!1),void t.stop();this._draggedRange&&this._draggingUid!=i.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="");if("move"==fh(i.dataTransfer)&&this._draggedRange&&this._draggedRange.containsRange(n,!0))return this._finalizeDragging(!1),void t.stop();i.targetRanges=[e.editing.mapper.toViewRange(n)]},{priority:"high"})}_setupContentInsertionIntegration(){const e=this.editor.plugins.get(Eu);e.on("contentInsertion",(e,t)=>{if(!this.isEnabled||"drop"!==t.method)return;const i=t.targetRanges.map(e=>this.editor.editing.mapper.toModelRange(e));this.editor.model.change(e=>e.setSelection(i))},{priority:"high"}),e.on("contentInsertion",(e,t)=>{if(!this.isEnabled||"drop"!==t.method)return;const i="move"==fh(t.dataTransfer),n=!t.resultRange||!t.resultRange.isCollapsed;this._finalizeDragging(n&&i)},{priority:"lowest"})}_setupDraggableAttributeHandling(){const e=this.editor,t=e.editing.view,i=t.document;this.listenTo(i,"mousedown",(n,o)=>{if(Po.isAndroid||!o)return;this._clearDraggableAttributesDelayed.cancel();let r=mh(o.target);if(Po.isBlink&&!e.isReadOnly&&!r&&!i.selection.isCollapsed){const e=i.selection.getSelectedElement();e&&Fu(e)||(r=i.selection.editableElement)}r&&(t.change(e=>{e.setAttribute("draggable","true",r)}),this._draggableElement=e.editing.mapper.toModelElement(r))}),this.listenTo(i,"mouseup",()=>{Po.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){const e=this.editor.editing;e.view.change(t=>{this._draggableElement&&"$graveyard"!=this._draggableElement.root.rootName&&t.removeAttribute("draggable",e.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){const e=this.editor;e.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),e.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(t,{writer:i})=>{if(e.model.schema.checkChild(t.markerRange.start,"$text"))return i.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},(function(e){const t=this.toDomElement(e);return t.innerHTML="&NoBreak;<span></span>&NoBreak;",t}))}})}_updateDropMarker(e){const t=this.editor,i=t.model.markers;t.model.change(t=>{i.has("drop-target")?i.get("drop-target").getRange().isEqual(e)||t.updateMarker("drop-target",{range:e}):t.addMarker("drop-target",{range:e,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){const e=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),e.markers.has("drop-target")&&e.change(e=>{e.removeMarker("drop-target")})}_finalizeDragging(e){const t=this.editor.model;this._removeDropMarker(),this._clearDraggableAttributes(),this._draggingUid="",this._draggedRange&&(e&&this.isEnabled&&t.deleteContent(t.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function hh(e,t,i){const n=e.model,o=e.editing.mapper;let r=null;const s=t?t[0].start:null;if(i.is("uiElement")&&(i=i.parent),r=function(e,t){const i=e.model,n=e.editing.mapper;if(Fu(t))return i.createRangeOn(n.toModelElement(t));if(!t.is("editableElement")){const e=t.findAncestor(e=>Fu(e)||e.is("editableElement"));if(Fu(e))return i.createRangeOn(n.toModelElement(e))}return null}(e,i),r)return r;const a=function(e,t){const i=e.editing.mapper,n=e.editing.view,o=i.toModelElement(t);if(o)return o;const r=n.createPositionBefore(t),s=i.findMappedViewAncestor(r);return i.toModelElement(s)}(e,i),c=s?o.toModelPosition(s):null;return c?(r=function(e,t,i){const n=e.model;if(!n.schema.checkChild(i,"$block"))return null;const o=n.createPositionAt(i,0),r=t.path.slice(0,o.path.length),s=n.createPositionFromPath(t.root,r).nodeAfter;if(s&&n.schema.isObject(s))return n.createRangeOn(s);return null}(e,c,a),r||(r=n.schema.getNearestSelectionRange(c,Po.isGecko?"forward":"backward"),r||function(e,t){const i=e.model;for(;t;){if(i.schema.isObject(t))return i.createRangeOn(t);t=t.parent}}(e,c.parent))):function(e,t){const i=e.model,n=i.schema,o=i.createPositionAt(t,0);return n.getNearestSelectionRange(o,"forward")}(e,a)}function fh(e){return Po.isGecko?e.dropEffect:["all","copyMove"].includes(e.effectAllowed)?"move":"copy"}function gh(e,t){let i;function n(...o){n.cancel(),i=setTimeout(()=>e(...o),t)}return n.cancel=()=>{clearTimeout(i)},n}function mh(e){if(e.is("editableElement"))return null;if(e.hasClass("ck-widget__selection-handle"))return e.findAncestor(Fu);if(Fu(e))return e;const t=e.findAncestor(e=>Fu(e)||e.is("editableElement"));return Fu(t)?t:null}class ph extends Qe{static get pluginName(){return"PastePlainText"}static get requires(){return[Eu]}init(){const e=this.editor,t=e.model,i=e.editing.view,n=i.document,o=t.document.selection;let r=!1;i.addObserver(Cu),this.listenTo(n,"keydown",(e,t)=>{r=t.shiftKey}),e.plugins.get(Eu).on("contentInsertion",(e,i)=>{(r||function(e,t){if(e.childCount>1)return!1;const i=e.getChild(0);if(t.isObject(i))return!1;return 0==[...i.getAttributeKeys()].length}(i.content,t.schema))&&t.change(e=>{const n=Array.from(o.getAttributes()).filter(([e])=>t.schema.getAttributeProperties(e).isFormatting);o.isCollapsed||t.deleteContent(o,{doNotAutoparagraph:!0}),n.push(...o.getAttributes());const r=e.createRangeIn(i.content);for(const t of r.getItems())t.is("$textProxy")&&e.setAttributes(n,t)})})}}class bh extends Qe{static get pluginName(){return"Clipboard"}static get requires(){return[Eu,uh,ph]}}class wh extends Ze{execute(){const e=this.editor.model,t=e.document;e.change(i=>{!function(e,t,i){const n=i.isCollapsed,o=i.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(n){const n=Pu(e.schema,i.getAttributes());kh(e,t,o.end),t.removeSelectionAttribute(i.getAttributeKeys()),t.setSelectionAttribute(n)}else{const n=!(o.start.isAtStart&&o.end.isAtEnd);e.deleteContent(i,{leaveUnmerged:n}),a?kh(e,t,i.focus):n&&t.setSelection(s,0)}}(e,i,t.selection),this.fire("afterExecute",{writer:i})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(e,t){if(t.rangeCount>1)return!1;const i=t.anchor;if(!i||!e.checkChild(i,"softBreak"))return!1;const n=t.getFirstRange(),o=n.start.parent,r=n.end.parent;if((_h(o,e)||_h(r,e))&&o!==r)return!1;return!0}(e.schema,t.selection)}}function kh(e,t,i){const n=t.createElement("softBreak");e.insertContent(n,i),t.setSelection(n,"after")}function _h(e,t){return!e.is("rootElement")&&(t.isLimit(e)||_h(e.parent,t))}class vh extends Qe{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,i=e.conversion,n=e.editing.view,o=n.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),i.for("upcast").elementToElement({model:"softBreak",view:"br"}),i.for("downcast").elementToElement({model:"softBreak",view:(e,{writer:t})=>t.createEmptyElement("br")}),n.addObserver(Iu),e.commands.add("shiftEnter",new wh(e)),this.listenTo(o,"enter",(t,i)=>{i.preventDefault(),i.isSoft&&(e.execute("shiftEnter"),n.scrollToTheSelection())},{priority:"low"})}}class yh extends Ze{execute(){const e=this.editor.model,t=e.document.selection;let i=e.schema.getLimitElement(t);if(t.containsEntireContent(i)||!xh(e.schema,i))do{if(i=i.parent,!i)return}while(!xh(e.schema,i));e.change(e=>{e.setSelection(i,"in")})}}function xh(e,t){return e.isLimit(t)&&(e.checkChild(t,"$text")||e.checkChild(t,"paragraph"))}const Ah=Oo("Ctrl+A");class Ch extends Qe{static get pluginName(){return"SelectAllEditing"}init(){const e=this.editor,t=e.editing.view.document;e.commands.add("selectAll",new yh(e)),this.listenTo(t,"keydown",(t,i)=>{Ro(i)===Ah&&(e.execute("selectAll"),i.preventDefault())})}}class Th extends Qe{static get pluginName(){return"SelectAllUI"}init(){const e=this.editor;e.ui.componentFactory.add("selectAll",t=>{const i=e.commands.get("selectAll"),n=new cd(t),o=t.t;return n.set({label:o("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),n.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(n,"execute",()=>{e.execute("selectAll"),e.editing.view.focus()}),n})}}class Eh extends Qe{static get requires(){return[Ch,Th]}static get pluginName(){return"SelectAll"}}class Ph extends Ze{constructor(e,t){super(e),this._buffer=new Ru(e.model,t),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,i=t.document,n=e.text||"",o=n.length,r=e.range?t.createSelection(e.range):i.selection,s=e.resultRange;t.enqueueChange(this._buffer.batch,e=>{this._buffer.lock(),this._batches.add(this._buffer.batch),t.deleteContent(r),n&&t.insertContent(e.createText(n,i.selection.getAttributes()),r),s?e.setSelection(s):r.is("documentSelection")||e.setSelection(r),this._buffer.unlock(),this._buffer.input(o)})}}function Sh(e){if(e.newChildren.length-e.oldChildren.length!=1)return;const t=function(e,t){const i=[];let n,o=0;return e.forEach(e=>{"equal"==e?(r(),o++):"insert"==e?(s("insert")?n.values.push(t[o]):(r(),n={type:"insert",index:o,values:[t[o]]}),o++):s("delete")?n.howMany++:(r(),n={type:"delete",index:o,howMany:1})}),r(),i;function r(){n&&(i.push(n),n=null)}function s(e){return n&&n.type==e}}(hr(e.oldChildren,e.newChildren,Mh),e.newChildren);if(t.length>1)return;const i=t[0];return i.values[0]&&i.values[0].is("$text")?i:void 0}function Mh(e,t){return e&&e.is("$text")&&t&&t.is("$text")?e.data===t.data:e===t}class Ih{constructor(e){this.editor=e,this.editing=this.editor.editing}handle(e,t){if(function(e){if(0==e.length)return!1;for(const t of e)if("children"===t.type&&!Sh(t))return!0;return!1}(e))this._handleContainerChildrenMutations(e,t);else for(const i of e)this._handleTextMutation(i,t),this._handleTextNodeInsertion(i)}_handleContainerChildrenMutations(e,t){const i=function(e){const t=e.map(e=>e.node).reduce((e,t)=>e.getCommonAncestor(t,{includeSelf:!0}));if(!t)return;return t.getAncestors({includeSelf:!0,parentFirst:!0}).find(e=>e.is("containerElement")||e.is("rootElement"))}(e);if(!i)return;const n=this.editor.editing.view.domConverter.mapViewToDom(i),o=new Tr(this.editor.editing.view.document),r=this.editor.data.toModel(o.domToView(n)).getChild(0),s=this.editor.editing.mapper.toModelElement(i);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1],u=l&&l.is("element","softBreak"),h=d&&!d.is("element","softBreak");u&&h&&a.pop();const f=this.editor.model.schema;if(!Nh(a,f)||!Nh(c,f))return;const g=a.map(e=>e.is("$text")?e.data:"@").join("").replace(/\u00A0/g," "),m=c.map(e=>e.is("$text")?e.data:"@").join("").replace(/\u00A0/g," ");if(m===g)return;const p=hr(m,g),{firstChangeAt:b,insertions:w,deletions:k}=Rh(p);let _=null;t&&(_=this.editing.mapper.toModelRange(t.getFirstRange()));const v=g.substr(b,w),y=this.editor.model.createRange(this.editor.model.createPositionAt(s,b),this.editor.model.createPositionAt(s,b+k));this.editor.execute("input",{text:v,range:y,resultRange:_})}_handleTextMutation(e,t){if("text"!=e.type)return;const i=e.newText.replace(/\u00A0/g," "),n=e.oldText.replace(/\u00A0/g," ");if(n===i)return;const o=hr(n,i),{firstChangeAt:r,insertions:s,deletions:a}=Rh(o);let c=null;t&&(c=this.editing.mapper.toModelRange(t.getFirstRange()));const l=this.editing.view.createPositionAt(e.node,r),d=this.editing.mapper.toModelPosition(l),u=this.editor.model.createRange(d,d.getShiftedBy(a)),h=i.substr(r,s);this.editor.execute("input",{text:h,range:u,resultRange:c})}_handleTextNodeInsertion(e){if("children"!=e.type)return;const t=Sh(e),i=this.editing.view.createPositionAt(e.node,t.index),n=this.editing.mapper.toModelPosition(i),o=t.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(n)})}}function Nh(e,t){return e.every(e=>t.isInline(e))}function Rh(e){let t=null,i=null;for(let n=0;n<e.length;n++){"equal"!=e[n]&&(t=null===t?n:t,i=n)}let n=0,o=0;for(let r=t;r<=i;r++)"insert"!=e[r]&&n++,"delete"!=e[r]&&o++;return{insertions:o,deletions:n,firstChangeAt:t}}class Oh extends Qe{static get pluginName(){return"Input"}init(){const e=this.editor,t=new Ph(e,e.config.get("typing.undoStep")||20);e.commands.add("input",t),function(e){let t=null;const i=e.model,n=e.editing.view,o=e.commands.get("input");function r(e){const r=i.document,a=n.document.isComposing,c=t&&t.isEqual(r.selection);t=null,o.isEnabled&&(th(e)||r.selection.isCollapsed||a&&229===e.keyCode||!a&&229===e.keyCode&&c||s())}function s(){const e=o.buffer;e.lock();const t=e.batch;o._batches.add(t),i.enqueueChange(t,()=>{i.deleteContent(i.document.selection)}),e.unlock()}Po.isAndroid?n.document.on("beforeinput",(e,t)=>r(t),{priority:"lowest"}):n.document.on("keydown",(e,t)=>r(t),{priority:"lowest"}),n.document.on("compositionstart",(function(){const e=i.document,t=1!==e.selection.rangeCount||e.selection.getFirstRange().isFlat;if(e.selection.isCollapsed||t)return;s()}),{priority:"lowest"}),n.document.on("compositionend",()=>{t=i.createSelection(i.document.selection)},{priority:"lowest"})}(e),function(e){e.editing.view.document.on("mutations",(t,i,n)=>{new Ih(e).handle(i,n)})}(e)}isInput(e){return this.editor.commands.get("input")._batches.has(e)}}class Dh extends Qe{static get requires(){return[Oh,Lu]}static get pluginName(){return"Typing"}}function Lh(e,t){let i=e.start;return{text:Array.from(e.getItems()).reduce((e,n)=>n.is("$text")||n.is("$textProxy")?e+n.data:(i=t.createPositionAfter(n),""),""),range:t.createRange(i,e.end)}}class zh{constructor(e,t){this.model=e,this.testCallback=t,this.hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:i})=>{i&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this.hasMatch=!1))}),this.listenTo(e,"change:data",(e,t)=>{"transparent"!=t.type&&this._evaluateTextBeforeSelection("data",{batch:t})})}_evaluateTextBeforeSelection(e,t={}){const i=this.model,n=i.document.selection,o=i.createRange(i.createPositionAt(n.focus.parent,0),n.focus),{text:r,range:s}=Lh(o,i),a=this.testCallback(r);if(!a&&this.hasMatch&&this.fire("unmatched"),this.hasMatch=!!a,a){const i=Object.assign(t,{text:r,range:s});"object"==typeof a&&Object.assign(i,a),this.fire("matched:"+e,i)}}}Ke(zh,Ue);class Vh extends Qe{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,i=e.editing.view,n=e.locale,o=t.document.selection;this.listenTo(i.document,"arrowKey",(e,t)=>{if(!o.isCollapsed)return;if(t.shiftKey||t.altKey||t.ctrlKey)return;const i=t.keyCode==Io.arrowright,r=t.keyCode==Io.arrowleft;if(!i&&!r)return;const s=n.contentLanguageDirection;let a=!1;a="ltr"===s&&i||"rtl"===s&&r?this._handleForwardMovement(t):this._handleBackwardMovement(t),!0===a&&e.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(o,"change:range",(e,t)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!t.directChange&&Hh(o.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,i=this.editor.model.document.selection,n=i.getFirstPosition();return!this._isGravityOverridden&&((!n.isAtStart||!jh(i,t))&&(Hh(n,t)?(Fh(e),this._overrideGravity(),!0):void 0))}_handleBackwardMovement(e){const t=this.attributes,i=this.editor.model,n=i.document.selection,o=n.getFirstPosition();return this._isGravityOverridden?(Fh(e),this._restoreGravity(),Bh(i,t,o),!0):o.isAtStart?!!jh(n,t)&&(Fh(e),Bh(i,t,o),!0):function(e,t){return Hh(e.getShiftedBy(-1),t)}(o,t)?o.isAtEnd&&!jh(n,t)&&Hh(o,t)?(Fh(e),Bh(i,t,o),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):void 0}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function jh(e,t){for(const i of t)if(e.hasAttribute(i))return!0;return!1}function Bh(e,t,i){const n=i.nodeBefore;e.change(e=>{n?e.setSelectionAttribute(n.getAttributes()):e.removeSelectionAttribute(t)})}function Fh(e){e.preventDefault()}function Hh(e,t){const{nodeBefore:i,nodeAfter:n}=e;for(const e of t){const t=i?i.getAttribute(e):void 0;if((n?n.getAttribute(e):void 0)!==t)return!0}return!1}var Uh=/[\\^$.*+?()[\]{}|]/g,Wh=RegExp(Uh.source);var qh=function(e){return(e=Sn(e))&&Wh.test(e)?e.replace(Uh,"\\$&"):e};const $h={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:"1/2",to:"½"},oneThird:{from:"1/3",to:"⅓"},twoThirds:{from:"2/3",to:"⅔"},oneForth:{from:"1/4",to:"¼"},threeQuarters:{from:"3/4",to:"¾"},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:Zh('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:Zh("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:Zh("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:Zh('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:Zh('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:Zh("'"),to:[null,"‚",null,"’"]}},Yh={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},Gh=["symbols","mathematical","typography","quotes"];function Kh(e){return"string"==typeof e?new RegExp(`(${qh(e)})$`):e}function Qh(e){return"string"==typeof e?()=>[e]:e instanceof Array?()=>e:e}function Jh(e){return(e.textNode?e.textNode:e.nodeAfter).getAttributes()}function Zh(e){return new RegExp(`(^|\\s)(${e})([^${e}]*)(${e})$`)}function Xh(e,t,i,n){return n.createRange(ef(e,t,i,!0,n),ef(e,t,i,!1,n))}function ef(e,t,i,n,o){let r=e.textNode||(n?e.nodeBefore:e.nodeAfter),s=null;for(;r&&r.getAttribute(t)==i;)s=r,r=n?r.previousSibling:r.nextSibling;return s?o.createPositionAt(s,n?"before":"after"):e}class tf extends Ze{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(e.data,"set",()=>this.clearStack())}refresh(){this.isEnabled=this._stack.length>0}addBatch(e){const t=this.editor.model.document.selection,i={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:i}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,i){const n=this.editor.model,o=n.document,r=[],s=e.map(e=>e.getTransformedByOperations(i)),a=s.flat();for(const e of s){const t=e.filter(e=>e.root!=o.graveyard).filter(e=>!of(e,a));t.length&&(nf(t),r.push(t[0]))}r.length&&n.change(e=>{e.setSelection(r,{backward:t})})}_undo(e,t){const i=this.editor.model,n=i.document;this._createdBatches.add(t);const o=e.operations.slice().filter(e=>e.isDocumentOperation);o.reverse();for(const e of o){const o=e.baseVersion+1,r=Array.from(n.history.getOperations(o)),s=uu([e.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)t.addOperation(o),i.applyOperation(o),n.history.setOperationAsUndone(e,o)}}}function nf(e){e.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let t=1;t<e.length;t++){const i=e[t-1].getJoined(e[t],!0);i&&(t--,e.splice(t,2,i))}}function of(e,t){return t.some(t=>t!==e&&t.containsRange(e,!0))}class rf extends tf{execute(e=null){const t=e?this._stack.findIndex(t=>t.batch==e):this._stack.length-1,i=this._stack.splice(t,1)[0],n=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(n,()=>{this._undo(i.batch,n);const e=this.editor.model.document.history.getOperations(i.batch.baseVersion);this._restoreSelection(i.selection.ranges,i.selection.isBackward,e),this.fire("revert",i.batch,n)}),this.refresh()}}class sf extends tf{execute(){const e=this._stack.pop(),t=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(t,()=>{const i=e.batch.operations[e.batch.operations.length-1].baseVersion+1,n=this.editor.model.document.history.getOperations(i);this._restoreSelection(e.selection.ranges,e.selection.isBackward,n),this._undo(e.batch,t)}),this.refresh()}}class af extends Qe{static get pluginName(){return"UndoEditing"}constructor(e){super(e),this._batchRegistry=new WeakSet}init(){const e=this.editor;this._undoCommand=new rf(e),this._redoCommand=new sf(e),e.commands.add("undo",this._undoCommand),e.commands.add("redo",this._redoCommand),this.listenTo(e.model,"applyOperation",(e,t)=>{const i=t[0];if(!i.isDocumentOperation)return;const n=i.batch,o=this._redoCommand._createdBatches.has(n),r=this._undoCommand._createdBatches.has(n);this._batchRegistry.has(n)||"transparent"==n.type&&!o&&!r||(o?this._undoCommand.addBatch(n):r||(this._undoCommand.addBatch(n),this._redoCommand.clearStack()),this._batchRegistry.add(n))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(e,t,i)=>{this._redoCommand.addBatch(i)}),e.keystrokes.set("CTRL+Z","undo"),e.keystrokes.set("CTRL+Y","redo"),e.keystrokes.set("CTRL+SHIFT+Z","redo")}}var cf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',lf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class df extends Qe{static get pluginName(){return"UndoUI"}init(){const e=this.editor,t=e.locale,i=e.t,n="ltr"==t.uiLanguageDirection?cf:lf,o="ltr"==t.uiLanguageDirection?lf:cf;this._addButton("undo",i("Undo"),"CTRL+Z",n),this._addButton("redo",i("Redo"),"CTRL+Y",o)}_addButton(e,t,i,n){const o=this.editor;o.ui.componentFactory.add(e,r=>{const s=o.commands.get(e),a=new cd(r);return a.set({label:t,icon:n,keystroke:i,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>{o.execute(e),o.editing.view.focus()}),a})}}class uf extends Qe{static get requires(){return[af,df]}static get pluginName(){return"Undo"}}class hf{constructor(){const e=new window.FileReader;this._reader=e,this._data=void 0,this.set("loaded",0),e.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){const t=this._reader;return this.total=e.size,new Promise((i,n)=>{t.onload=()=>{const e=t.result;this._data=e,i(e)},t.onerror=()=>{n("error")},t.onabort=()=>{n("aborted")},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}Ke(hf,Ue);class ff extends Qe{static get pluginName(){return"FileRepository"}static get requires(){return[xl]}init(){this.loaders=new Zi,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0)}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return Object(c.b)("filerepository-no-upload-adapter"),null;const t=new gf(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then(e=>{this._loadersMap.set(e,t)}).catch(()=>{}),t.on("change:uploaded",()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e}),t.on("change:uploadTotal",()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e}),t}destroyLoader(e){const t=e instanceof gf?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach((e,i)=>{e===t&&this._loadersMap.delete(i)})}_updatePendingAction(){const e=this.editor.plugins.get(xl);if(this.loaders.length){if(!this._pendingAction){const t=this.editor.t,i=e=>`${t("Upload in progress")} ${parseInt(e)}%.`;this._pendingAction=e.add(i(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",i)}}else e.remove(this._pendingAction),this._pendingAction=null}}Ke(ff,Ue);class gf{constructor(e,t){this.id=s(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new hf,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(e=>this._filePromiseWrapper?e:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new c.a("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(e=>this._reader.read(e)).then(e=>{if("reading"!==this.status)throw this.status;return this.status="idle",e}).catch(e=>{if("aborted"===e)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:e})}upload(){if("idle"!=this.status)throw new c.a("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(e=>(this.uploadResponse=e,this.status="idle",e)).catch(e=>{if("aborted"===this.status)throw"aborted";throw this.status="error",e})}abort(){const e=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==e?this._reader.abort():"uploading"==e&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){const t={};return t.promise=new Promise((i,n)=>{t.rejecter=n,t.isFulfilled=!1,e.then(e=>{t.isFulfilled=!0,i(e)}).catch(e=>{t.isFulfilled=!0,n(e)})}),t}}Ke(gf,Ue);class mf extends jl{constructor(e){super(e),this.buttonView=new cd(e),this._fileInputView=new pf(e),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class pf extends jl{constructor(e){super(e),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:t.to("acceptedType"),multiple:t.to("allowMultipleFiles")},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}function bf(){let e=function(e){e=e.toLowerCase();const t=document.cookie.split(";");for(const i of t){const t=i.split("=");if(decodeURIComponent(t[0].trim().toLowerCase())===e)return decodeURIComponent(t[1])}return null}("ckCsrfToken");var t,i;return e&&40==e.length||(e=function(e){let t="";const i=new Uint8Array(e);window.crypto.getRandomValues(i);for(let e=0;e<i.length;e++){const n="abcdefghijklmnopqrstuvwxyz0123456789".charAt(i[e]%"abcdefghijklmnopqrstuvwxyz0123456789".length);t+=Math.random()>.5?n.toUpperCase():n}return t}(40),t="ckCsrfToken",i=e,document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(i)+";path=/"),e}class wf{constructor(e,t,i){this.loader=e,this.url=t,this.t=i}upload(){return this.loader.file.then(e=>new Promise((t,i)=>{this._initRequest(),this._initListeners(t,i,e),this._sendRequest(e)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open("POST",this.url,!0),e.responseType="json"}_initListeners(e,t,i){const n=this.xhr,o=this.loader,r=(0,this.t)("Cannot upload file:")+` ${i.name}.`;n.addEventListener("error",()=>t(r)),n.addEventListener("abort",()=>t()),n.addEventListener("load",()=>{const i=n.response;if(!i||!i.uploaded)return t(i&&i.error&&i.error.message?i.error.message:r);e({default:i.url})}),n.upload&&n.upload.addEventListener("progress",e=>{e.lengthComputable&&(o.uploadTotal=e.total,o.uploaded=e.loaded)})}_sendRequest(e){const t=new FormData;t.append("upload",e),t.append("ckCsrfToken",bf()),this.xhr.send(t)}}function kf(e,t,i,n){let o,r=null;"function"==typeof n?o=n:(r=e.commands.get(n),o=()=>{e.execute(n)}),e.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!t.isEnabled)return;const c=Ns(e.model.document.selection.getRanges());if(!c.isCollapsed)return;if("transparent"==a.type)return;const l=Array.from(e.model.document.differ.getChanges()),d=l[0];if(1!=l.length||"insert"!==d.type||"$text"!=d.name||1!=d.length)return;const u=d.position.parent;if(u.is("element","codeBlock"))return;if(u.is("element","listItem")&&"function"!=typeof n&&!["numberedList","bulletedList","todoList"].includes(n))return;if(r&&!0===r.value)return;const h=u.getChild(0),f=e.model.createRangeOn(h);if(!f.containsRange(c)&&!c.end.isEqual(f.end))return;const g=i.exec(h.data.substr(0,c.end.offset));g&&e.model.enqueueChange(t=>{const i=t.createPositionAt(u,0),n=t.createPositionAt(u,g[0].length),r=new ba(i,n);if(!1!==o({match:g})){t.remove(r);const i=e.model.document.selection.getFirstRange(),n=t.createRangeIn(u);!u.isEmpty||n.isEqual(i)||n.containsRange(i,!0)||t.remove(u)}r.detach()})})}function _f(e,t,i,n){let o,r;i instanceof RegExp?o=i:r=i,r=r||(e=>{let t;const i=[],n=[];for(;null!==(t=o.exec(e))&&!(t&&t.length<4);){let{index:e,1:o,2:r,3:s}=t;const a=o+r+s;e+=t[0].length-a.length;const c=[e,e+o.length],l=[e+o.length+r.length,e+o.length+r.length+s.length];i.push(c),i.push(l),n.push([e+o.length,e+o.length+r.length])}return{remove:i,format:n}}),e.model.document.on("change:data",(i,o)=>{if("transparent"==o.type||!t.isEnabled)return;const s=e.model,a=s.document.selection;if(!a.isCollapsed)return;const c=Array.from(s.document.differ.getChanges()),l=c[0];if(1!=c.length||"insert"!==l.type||"$text"!=l.name||1!=l.length)return;const d=a.focus,u=d.parent,{text:h,range:f}=function(e,t){let i=e.start;return{text:Array.from(e.getItems()).reduce((e,n)=>!n.is("$text")&&!n.is("$textProxy")||n.getAttribute("code")?(i=t.createPositionAfter(n),""):e+n.data,""),range:t.createRange(i,e.end)}}(s.createRange(s.createPositionAt(u,0),d),s),g=r(h),m=vf(f.start,g.format,s),p=vf(f.start,g.remove,s);m.length&&p.length&&s.enqueueChange(e=>{if(!1!==n(e,m))for(const t of p.reverse())e.remove(t)})})}function vf(e,t,i){return t.filter(e=>void 0!==e[0]&&void 0!==e[1]).map(t=>i.createRange(e.getShiftedBy(t[0]),e.getShiftedBy(t[1])))}function yf(e,t){return(i,n)=>{if(!e.commands.get(t).isEnabled)return!1;const o=e.model.schema.getValidRanges(n,t);for(const e of o)i.setAttribute(t,!0,e);i.removeSelectionAttribute(t)}}class xf extends Ze{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,i=t.document.selection,n=void 0===e.forceValue?!this.value:e.forceValue;t.change(e=>{if(i.isCollapsed)n?e.setSelectionAttribute(this.attributeKey,!0):e.removeSelectionAttribute(this.attributeKey);else{const o=t.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const t of o)n?e.setAttribute(this.attributeKey,n,t):e.removeAttribute(this.attributeKey,t)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,i=e.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const e of i.getRanges())for(const i of e.getItems())if(t.checkAttribute(i,this.attributeKey))return i.hasAttribute(this.attributeKey);return!1}}class Af extends Qe{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"bold"}),e.model.schema.setAttributeProperties("bold",{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:"bold",view:"strong",upcastAlso:["b",e=>{const t=e.getStyle("font-weight");return t?"bold"==t||Number(t)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),e.commands.add("bold",new xf(e,"bold")),e.keystrokes.set("CTRL+B","bold")}}class Cf extends Qe{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("bold",i=>{const n=e.commands.get("bold"),o=new cd(i);return o.set({label:t("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("bold"),e.editing.view.focus()}),o})}}class Tf extends Qe{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"italic"}),e.model.schema.setAttributeProperties("italic",{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:"italic",view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add("italic",new xf(e,"italic")),e.keystrokes.set("CTRL+I","italic")}}class Ef extends Qe{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("italic",i=>{const n=e.commands.get("italic"),o=new cd(i);return o.set({label:t("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("italic"),e.editing.view.focus()}),o})}}class Pf extends Ze{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,i=t.schema,n=t.document.selection,o=Array.from(n.getSelectedBlocks()),r=void 0===e.forceValue?!this.value:e.forceValue;t.change(e=>{if(r){const t=o.filter(e=>Sf(e)||If(i,e));this._applyQuote(e,t)}else this._removeQuote(e,o.filter(Sf))})}_getValue(){const e=Ns(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!Sf(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,i=Ns(e.getSelectedBlocks());return!!i&&If(t,i)}_removeQuote(e,t){Mf(e,t).reverse().forEach(t=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const i=e.createPositionBefore(t.start.parent);return void e.move(t,i)}t.end.isAtEnd||e.split(t.end);const i=e.createPositionAfter(t.end.parent);e.move(t,i)})}_applyQuote(e,t){const i=[];Mf(e,t).reverse().forEach(t=>{let n=Sf(t.start);n||(n=e.createElement("blockQuote"),e.wrap(t,n)),i.push(n)}),i.reverse().reduce((t,i)=>t.nextSibling==i?(e.merge(e.createPositionAfter(t)),t):i)}}function Sf(e){return"blockQuote"==e.parent.name?e.parent:null}function Mf(e,t){let i,n=0;const o=[];for(;n<t.length;){const r=t[n],s=t[n+1];i||(i=e.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(e.createRange(i,e.createPositionAfter(r))),i=null),n++}return o}function If(e,t){const i=e.checkChild(t.parent,"blockQuote"),n=e.checkChild(["$root","blockQuote"],t);return i&&n}class Nf extends Qe{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Nu,Lu]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new Pf(e)),t.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(i=>{const n=e.model.document.differ.getChanges();for(const e of n)if("insert"==e.type){const n=e.position.nodeAfter;if(!n)continue;if(n.is("element","blockQuote")&&n.isEmpty)return i.remove(n),!0;if(n.is("element","blockQuote")&&!t.checkChild(e.position,n))return i.unwrap(n),!0;if(n.is("element")){const e=i.createRangeIn(n);for(const n of e.getItems())if(n.is("element","blockQuote")&&!t.checkChild(i.createPositionBefore(n),n))return i.unwrap(n),!0}}else if("remove"==e.type){const t=e.position.parent;if(t.is("element","blockQuote")&&t.isEmpty)return i.remove(t),!0}return!1});const i=this.editor.editing.view.document,n=e.model.document.selection,o=e.commands.get("blockQuote");this.listenTo(i,"enter",(t,i)=>{if(!n.isCollapsed||!o.value)return;n.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),i.preventDefault(),t.stop())},{context:"blockquote"}),this.listenTo(i,"delete",(t,i)=>{if("backward"!=i.direction||!n.isCollapsed||!o.value)return;const r=n.getLastPosition().parent;r.isEmpty&&!r.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),i.preventDefault(),t.stop())},{context:"blockquote"})}}i(68);class Rf extends Qe{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",i=>{const n=e.commands.get("blockQuote"),o=new cd(i);return o.set({label:t("Block quote"),icon:Rl,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),o})}}class Of extends Qe{static get pluginName(){return"CKFinderUI"}init(){const e=this.editor,t=e.ui.componentFactory,i=e.t;t.add("ckfinder",t=>{const n=e.commands.get("ckfinder"),o=new cd(t);return o.set({label:i("Insert image or file"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(n),o.on("execute",()=>{e.execute("ckfinder"),e.editing.view.focus()}),o})}}class Df extends Ze{constructor(e){super(e),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const e=this.editor.commands.get("insertImage"),t=this.editor.commands.get("link");this.isEnabled=e.isEnabled||t.isEnabled}execute(){const e=this.editor,t=this.editor.config.get("ckfinder.openerMethod")||"modal";if("popup"!=t&&"modal"!=t)throw new c.a("ckfinder-unknown-openermethod",e);const i=this.editor.config.get("ckfinder.options")||{};i.chooseFiles=!0;const n=i.onInit;i.language||(i.language=e.locale.uiLanguage),i.onInit=t=>{n&&n(t),t.on("files:choose",i=>{const n=i.data.files.toArray(),o=n.filter(e=>!e.isImage()),r=n.filter(e=>e.isImage());for(const t of o)e.execute("link",t.getUrl());const s=[];for(const e of r){const i=e.getUrl();s.push(i||t.request("file:getProxyUrl",{file:e}))}s.length&&Lf(e,s)}),t.on("file:choose:resizedImage",t=>{const i=t.data.resizedUrl;if(i)Lf(e,[i]);else{const t=e.plugins.get("Notification"),i=e.locale.t;t.showWarning(i("Could not obtain resized image URL."),{title:i("Selecting resized image failed"),namespace:"ckfinder"})}})},window.CKFinder[t](i)}}function Lf(e,t){if(e.commands.get("insertImage").isEnabled)e.execute("insertImage",{source:t});else{const t=e.plugins.get("Notification"),i=e.locale.t;t.showWarning(i("Could not insert image at the current position."),{title:i("Inserting image failed"),namespace:"ckfinder"})}}class zf extends Qe{static get pluginName(){return"CKFinderEditing"}static get requires(){return[Fd,"ImageEditing","LinkEditing"]}init(){const e=this.editor;e.commands.add("ckfinder",new Df(e))}}class Vf extends Qe{static get pluginName(){return"CloudServicesUploadAdapter"}static get requires(){return["CloudServices",ff]}init(){const e=this.editor,t=e.plugins.get("CloudServices"),i=t.token,n=t.uploadUrl;i&&(this._uploadGateway=e.plugins.get("CloudServicesCore").createUploadGateway(i,n),e.plugins.get(ff).createUploadAdapter=e=>new jf(this._uploadGateway,e))}}class jf{constructor(e,t){this.uploadGateway=e,this.loader=t}upload(){return this.loader.file.then(e=>(this.fileUploader=this.uploadGateway.upload(e),this.fileUploader.on("progress",(e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}class Bf extends Ze{refresh(){const e=this.editor.model,t=Ns(e.document.selection.getSelectedBlocks());this.value=!!t&&t.is("element","paragraph"),this.isEnabled=!!t&&Ff(t,e.schema)}execute(e={}){const t=this.editor.model,i=t.document;t.change(n=>{const o=(e.selection||i.selection).getSelectedBlocks();for(const e of o)!e.is("element","paragraph")&&Ff(e,t.schema)&&n.rename(e,"paragraph")})}}function Ff(e,t){return t.checkChild(e.parent,"paragraph")&&!t.isObject(e)}class Hf extends Ze{execute(e){const t=this.editor.model;let i=e.position;t.change(e=>{const n=e.createElement("paragraph");if(!t.schema.checkChild(i.parent,n)){const o=t.schema.findAllowedParent(i,n);if(!o)return;i=e.split(i,o).position}t.insertContent(n,i),e.setSelection(n,"in")})}}class Uf extends Qe{static get pluginName(){return"Paragraph"}init(){const e=this.editor,t=e.model;e.commands.add("paragraph",new Bf(e)),e.commands.add("insertParagraph",new Hf(e)),t.schema.register("paragraph",{inheritAllFrom:"$block"}),e.conversion.elementToElement({model:"paragraph",view:"p"}),e.conversion.for("upcast").elementToElement({model:(e,{writer:t})=>Uf.paragraphLikeElements.has(e.name)?e.isEmpty?null:t.createElement("paragraph"):null,view:/.+/,converterPriority:"low"})}}Uf.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);class Wf extends Ze{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=Ns(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some(t=>qf(e,t,this.editor.model.schema))}execute(e){const t=this.editor.model,i=t.document,n=e.value;t.change(e=>{const o=Array.from(i.selection.getSelectedBlocks()).filter(e=>qf(e,n,t.schema));for(const t of o)t.is("element",n)||e.rename(t,n)})}}function qf(e,t,i){return i.checkChild(e.parent,t)&&!i.isObject(e)}class $f extends Qe{static get pluginName(){return"HeadingEditing"}constructor(e){super(e),e.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Uf]}init(){const e=this.editor,t=e.config.get("heading.options"),i=[];for(const n of t)"paragraph"!==n.model&&(e.model.schema.register(n.model,{inheritAllFrom:"$block"}),e.conversion.elementToElement(n),i.push(n.model));this._addDefaultH1Conversion(e),e.commands.add("heading",new Wf(e,i))}afterInit(){const e=this.editor,t=e.commands.get("enter"),i=e.config.get("heading.options");t&&this.listenTo(t,"afterExecute",(t,n)=>{const o=e.model.document.selection.getFirstPosition().parent;i.some(e=>o.is("element",e.model))&&!o.is("element","paragraph")&&0===o.childCount&&n.writer.rename(o,"paragraph")})}_addDefaultH1Conversion(e){e.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:a.get("low")+1})}}i(12);class Yf extends Qe{static get pluginName(){return"HeadingUI"}init(){const e=this.editor,t=e.t,i=function(e){const t=e.t,i={Paragraph:t("Paragraph"),"Heading 1":t("Heading 1"),"Heading 2":t("Heading 2"),"Heading 3":t("Heading 3"),"Heading 4":t("Heading 4"),"Heading 5":t("Heading 5"),"Heading 6":t("Heading 6")};return e.config.get("heading.options").map(e=>{const t=i[e.title];return t&&t!=e.title&&(e.title=t),e})}(e),n=t("Choose heading"),o=t("Heading");e.ui.componentFactory.add("heading",t=>{const r={},s=new Zi,a=e.commands.get("heading"),c=e.commands.get("paragraph"),l=[a];for(const e of i){const t={type:"button",model:new Hd({label:e.title,class:e.class,withText:!0})};"paragraph"===e.model?(t.model.bind("isOn").to(c,"value"),t.model.set("commandName","paragraph"),l.push(c)):(t.model.bind("isOn").to(a,"value",t=>t===e.model),t.model.set({commandName:"heading",commandValue:e.model})),s.add(t),r[e.model]=e.title}const d=Id(t);return Nd(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...e)=>e.some(e=>e)),d.buttonView.bind("label").to(a,"value",c,"value",(e,t)=>{const i=e||t&&"paragraph";return r[i]?r[i]:n}),this.listenTo(d,"execute",t=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()}),d})}}class Gf extends Qe{static get requires(){return[Qd]}static get pluginName(){return"WidgetToolbarRepository"}init(){const e=this.editor;if(e.plugins.has("BalloonToolbar")){const t=e.plugins.get("BalloonToolbar");this.listenTo(t,"show",t=>{(function(e){const t=e.getSelectedElement();return!(!t||!Fu(t))})(e.editing.view.document.selection)&&t.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const e of this._toolbarDefinitions.values())e.view.destroy()}register(e,{ariaLabel:t,items:i,getRelatedElement:n,balloonClassName:o="ck-toolbar-container"}){if(!i.length)return void Object(c.b)("widget-toolbar-no-items",{toolbarId:e});const r=this.editor,s=r.t,a=new Ad(r.locale);if(a.ariaLabel=t||s("Widget toolbar"),this._toolbarDefinitions.has(e))throw new c.a("widget-toolbar-duplicated",this,{toolbarId:e});a.fillFromConfig(i,r.ui.componentFactory),this._toolbarDefinitions.set(e,{view:a,getRelatedElement:n,balloonClassName:o})}_updateToolbarsVisibility(){let e=0,t=null,i=null;for(const n of this._toolbarDefinitions.values()){const o=n.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&o)if(this.editor.ui.focusTracker.isFocused){const r=o.getAncestors().length;r>e&&(e=r,t=o,i=n)}else this._isToolbarVisible(n)&&this._hideToolbar(n);else this._isToolbarInBalloon(n)&&this._hideToolbar(n)}i&&this._showToolbar(i,t)}_hideToolbar(e){this._balloon.remove(e.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(e,t){this._isToolbarVisible(e)?Kf(this.editor,t):this._isToolbarInBalloon(e)||(this._balloon.add({view:e.view,position:Qf(this.editor,t),balloonClassName:e.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const e of this._toolbarDefinitions.values())if(this._isToolbarVisible(e)){const t=e.getRelatedElement(this.editor.editing.view.document.selection);Kf(this.editor,t)}}))}_isToolbarVisible(e){return this._balloon.visibleView===e.view}_isToolbarInBalloon(e){return this._balloon.hasView(e.view)}}function Kf(e,t){const i=e.plugins.get("ContextualBalloon"),n=Qf(e,t);i.updatePosition(n)}function Qf(e,t){const i=e.editing.view,n=qd.defaultPositions;return{target:i.domConverter.mapViewToDom(t),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,Qu]}}class Jf{constructor(e){this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=e,this._referenceCoordinates=null}begin(e,t,i){const n=new Ts(t);this.activeHandlePosition=function(e){const t=["top-left","top-right","bottom-right","bottom-left"];for(const i of t)if(e.classList.contains("ck-widget__resizer__handle-"+i))return i}(e),this._referenceCoordinates=function(e,t){const i=new Ts(e),n=t.split("-"),o={x:"right"==n[1]?i.right:i.left,y:"bottom"==n[0]?i.bottom:i.top};return o.x+=e.ownerDocument.defaultView.scrollX,o.y+=e.ownerDocument.defaultView.scrollY,o}(t,function(e){const t=e.split("-"),i={top:"bottom",bottom:"top",left:"right",right:"left"};return`${i[t[0]]}-${i[t[1]]}`}(this.activeHandlePosition)),this.originalWidth=n.width,this.originalHeight=n.height,this.aspectRatio=n.width/n.height;const o=i.style.width;o&&o.match(/^\d+(\.\d*)?%$/)?this.originalWidthPercents=parseFloat(o):this.originalWidthPercents=function(e,t){const i=e.parentElement,n=parseFloat(i.ownerDocument.defaultView.getComputedStyle(i).width);return t.width/n*100}(i,n)}update(e){this.proposedWidth=e.width,this.proposedHeight=e.height,this.proposedWidthPercents=e.widthPercents,this.proposedHandleHostWidth=e.handleHostWidth,this.proposedHandleHostHeight=e.handleHostHeight}}Ke(Jf,Ue);class Zf{constructor(e){this._options=e,this._domResizerWrapper=null,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",e=>{this.state.proposedWidth||this.state.proposedWidthPercents||(this._cleanup(),e.stop())},{priority:"high"}),this.on("change:isEnabled",()=>{this.isEnabled&&this.redraw()})}attach(){const e=this,t=this._options.viewElement;this._options.editor.editing.view.change(i=>{const n=i.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},(function(t){const i=this.toDomElement(t);return e._appendHandles(i),e._appendSizeUI(i),e._domResizerWrapper=i,e.on("change:isEnabled",(e,t,n)=>{i.style.display=n?"":"none"}),i.style.display=e.isEnabled?"":"none",i}));i.insert(i.createPositionAt(t,"end"),n),i.addClass("ck-widget_with-resizer",t),this._viewResizerWrapper=n})}begin(e){this.state=new Jf(this._options),this._sizeUI.bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(e,this._getHandleHost(),this._getResizeHost())}updateSize(e){const t=this._proposeNewSize(e);this._options.editor.editing.view.change(e=>{const i=this._options.unit||"%",n=("%"===i?t.widthPercents:t.width)+i;e.setStyle("width",n,this._options.viewElement)});const i=this._getHandleHost(),n=new Ts(i);t.handleHostWidth=Math.round(n.width),t.handleHostHeight=Math.round(n.height);const o=new Ts(i);t.width=Math.round(o.width),t.height=Math.round(o.height),this.redraw(n),this.state.update(t)}commit(){const e=this._options.unit||"%",t=("%"===e?this.state.proposedWidthPercents:this.state.proposedWidth)+e;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(t)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(e){const t=this._domResizerWrapper;if(!((i=t)&&i.ownerDocument&&i.ownerDocument.contains(i)))return;var i;const n=t.parentElement,o=this._getHandleHost(),r=this._viewResizerWrapper,s=[r.getStyle("width"),r.getStyle("height"),r.getStyle("left"),r.getStyle("top")];let a;if(n.isSameNode(o)){const t=e||new Ts(o);a=[t.width+"px",t.height+"px",void 0,void 0]}else a=[o.offsetWidth+"px",o.offsetHeight+"px",o.offsetLeft+"px",o.offsetTop+"px"];"same"!==cn(s,a)&&this._options.editor.editing.view.change(e=>{e.setStyle({width:a[0],height:a[1],left:a[2],top:a[3]},r)})}containsHandle(e){return this._domResizerWrapper.contains(e)}static isResizeHandle(e){return e.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeUI.dismiss(),this._sizeUI.isVisible=!1;this._options.editor.editing.view.change(e=>{e.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(e){const t=this.state,i={x:(n=e).pageX,y:n.pageY};var n;const o=!this._options.isCentered||this._options.isCentered(this),r={x:t._referenceCoordinates.x-(i.x+t.originalWidth),y:i.y-t.originalHeight-t._referenceCoordinates.y};o&&t.activeHandlePosition.endsWith("-right")&&(r.x=i.x-(t._referenceCoordinates.x+t.originalWidth)),o&&(r.x*=2);const s={width:Math.abs(t.originalWidth+r.x),height:Math.abs(t.originalHeight+r.y)};s.dominant=s.width/t.aspectRatio>s.height?"width":"height",s.max=s[s.dominant];const a={width:s.width,height:s.height};return"width"==s.dominant?a.height=a.width/t.aspectRatio:a.width=a.height*t.aspectRatio,{width:Math.round(a.width),height:Math.round(a.height),widthPercents:Math.min(Math.round(t.originalWidthPercents/t.originalWidth*a.width*100)/100,100)}}_getResizeHost(){const e=this._domResizerWrapper.parentElement;return this._options.getResizeHost(e)}_getHandleHost(){const e=this._domResizerWrapper.parentElement;return this._options.getHandleHost(e)}_appendHandles(e){const t=["top-left","top-right","bottom-right","bottom-left"];for(const n of t)e.appendChild(new Bl({tag:"div",attributes:{class:"ck-widget__resizer__handle "+(i=n,"ck-widget__resizer__handle-"+i)}}).render());var i}_appendSizeUI(e){const t=new Xf;t.render(),this._sizeUI=t,e.appendChild(t.element)}}Ke(Zf,Ue);class Xf extends jl{constructor(){super();const e=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-size-view",e.to("activeHandlePosition",e=>e?"ck-orientation-"+e:"")],style:{display:e.if("isVisible","none",e=>!e)}},children:[{text:e.to("label")}]})}bindToState(e,t){this.bind("isVisible").to(t,"proposedWidth",t,"proposedHeight",(e,t)=>null!==e&&null!==t),this.bind("label").to(t,"proposedHandleHostWidth",t,"proposedHandleHostHeight",t,"proposedWidthPercents",(t,i,n)=>"px"===e.unit?`${t}×${i}`:n+"%"),this.bind("activeHandlePosition").to(t)}dismiss(){this.unbind(),this.isVisible=!1}}i(71);Ke(class extends Qe{static get pluginName(){return"WidgetResize"}init(){this.set("visibleResizer",null),this.set("_activeResizer",null),this._resizers=new Map;const e=_r.window.document;this.editor.model.schema.setAttributeProperties("width",{isFormatting:!0}),this.editor.editing.view.addObserver(ku),this._observer=Object.create(Ir),this.listenTo(this.editor.editing.view.document,"mousedown",this._mouseDownListener.bind(this),{priority:"high"}),this._observer.listenTo(e,"mousemove",this._mouseMoveListener.bind(this)),this._observer.listenTo(e,"mouseup",this._mouseUpListener.bind(this));const t=()=>{this.visibleResizer&&this.visibleResizer.redraw()},i=dh(t,200);this.on("change:visibleResizer",t),this.editor.ui.on("update",i),this._observer.listenTo(_r.window,"resize",i);const n=this.editor.editing.view.document.selection;n.on("change",()=>{const e=n.getSelectedElement();this.visibleResizer=this.getResizerByViewElement(e)||null})}destroy(){this._observer.stopListening();for(const e of this._resizers.values())e.destroy()}attachTo(e){const t=new Zf(e),i=this.editor.plugins;if(t.attach(),i.has("WidgetToolbarRepository")){const e=i.get("WidgetToolbarRepository");t.on("begin",()=>{e.forceDisabled("resize")},{priority:"lowest"}),t.on("cancel",()=>{e.clearForceDisabled("resize")},{priority:"highest"}),t.on("commit",()=>{e.clearForceDisabled("resize")},{priority:"highest"})}this._resizers.set(e.viewElement,t);const n=this.editor.editing.view.document.selection.getSelectedElement();return this.getResizerByViewElement(n)==t&&(this.visibleResizer=t),t}getResizerByViewElement(e){return this._resizers.get(e)}_getResizerByHandle(e){for(const t of this._resizers.values())if(t.containsHandle(e))return t}_mouseDownListener(e,t){const i=t.domTarget;Zf.isResizeHandle(i)&&(this._activeResizer=this._getResizerByHandle(i),this._activeResizer&&(this._activeResizer.begin(i),e.stop(),t.preventDefault()))}_mouseMoveListener(e,t){this._activeResizer&&this._activeResizer.updateSize(t)}_mouseUpListener(){this._activeResizer&&(this._activeResizer.commit(),this._activeResizer=null)}},Ue);class eg extends Or{observe(e){this.listenTo(e,"load",(e,t)=>{const i=t.target;this.checkShouldIgnoreEventFromTarget(i)||"IMG"==i.tagName&&this._fireEvents(t)},{useCapture:!0})}_fireEvents(e){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",e))}}function tg(e){return!!e.getCustomProperty("image")&&Fu(e)}function ig(e){const t=e.getSelectedElement();return t&&tg(t)?t:null}function ng(e){return!!e&&e.is("element","image")}function og(e,t={},i=null){e.change(n=>{const o=n.createElement("image",t),r=i||Gu(e.document.selection,e);e.insertContent(o,r),o.parent&&n.setSelection(o,"on")})}function rg(e){const t=e.schema,i=e.document.selection;return function(e,t,i){const n=function(e,t){const i=Gu(e,t).parent;if(i.isEmpty&&!i.is("element","$root"))return i.parent;return i}(e,i);return t.checkChild(n,"image")}(i,t,e)&&!Ku(i,t)&&function(e){return[...e.focus.getAncestors()].every(e=>!e.is("element","image"))}(i)}function sg(e){const t=[];for(const i of e.getChildren())t.push(i),i.is("element")&&t.push(...i.getChildren());return t.find(e=>e.is("element","img"))}function ag(e){return i=>{i.on(`attribute:${e}:image`,t)};function t(e,t,i){if(!i.consumable.consume(t.item,e.name))return;const n=i.writer,o=sg(i.mapper.toViewElement(t.item));n.setAttribute(t.attributeKey,t.attributeNewValue||"",o)}}class cg extends Ze{refresh(){this.isEnabled=rg(this.editor.model)}execute(e){const t=this.editor.model;for(const i of en(e.source))og(t,{src:i})}}class lg extends Qe{static get pluginName(){return"ImageEditing"}init(){const e=this.editor,t=e.model.schema,i=e.t,n=e.conversion;e.editing.view.addObserver(eg),t.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),n.for("dataDowncast").elementToElement({model:"image",view:(e,{writer:t})=>dg(t)}),n.for("editingDowncast").elementToElement({model:"image",view:(e,{writer:t})=>function(e,t,i){return t.setCustomProperty("image",!0,e),Hu(e,t,{label:function(){const t=sg(e).getAttribute("alt");return t?`${t} ${i}`:i}})}(dg(t),t,i("image widget"))}),n.for("downcast").add(ag("src")).add(ag("alt")).add(function(){return t=>{t.on("attribute:srcset:image",e)};function e(e,t,i){if(!i.consumable.consume(t.item,e.name))return;const n=i.writer,o=sg(i.mapper.toViewElement(t.item));if(null===t.attributeNewValue){const e=t.attributeOldValue;e.data&&(n.removeAttribute("srcset",o),n.removeAttribute("sizes",o),e.width&&n.removeAttribute("width",o))}else{const e=t.attributeNewValue;e.data&&(n.setAttribute("srcset",e.data,o),n.setAttribute("sizes","100vw",o),e.width&&n.setAttribute("width",e.width,o))}}}()),n.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(e,{writer:t})=>t.createElement("image",{src:e.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:e=>{const t={data:e.getAttribute("srcset")};return e.hasAttribute("width")&&(t.width=e.getAttribute("width")),t}}}).add(function(){return t=>{t.on("element:figure",e)};function e(e,t,i){if(!i.consumable.test(t.viewItem,{name:!0,classes:"image"}))return;const n=sg(t.viewItem);if(!n||!n.hasAttribute("src")||!i.consumable.test(n,{name:!0}))return;const o=Ns(i.convertItem(n,t.modelCursor).modelRange.getItems());o&&(i.convertChildren(t.viewItem,o),i.updateConversionResult(o,t))}}());const o=new cg(e);e.commands.add("insertImage",o),e.commands.add("imageInsert",o)}}function dg(e){const t=e.createEmptyElement("img"),i=e.createContainerElement("figure",{class:"image"});return e.insert(e.createPositionAt(i,0),t),i}class ug extends Ze{refresh(){const e=this.editor.model.document.selection.getSelectedElement();this.isEnabled=ng(e),ng(e)&&e.hasAttribute("alt")?this.value=e.getAttribute("alt"):this.value=!1}execute(e){const t=this.editor.model,i=t.document.selection.getSelectedElement();t.change(t=>{t.setAttribute("alt",e.newValue,i)})}}class hg extends Qe{static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new ug(this.editor))}}i(73),i(7);class fg extends jl{constructor(e){super(e);const t=this.locale.t;this.focusTracker=new Rs,this.keystrokes=new Os,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(t("Save"),Cl,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(t("Cancel"),Al,"ck-button-cancel","cancel"),this._focusables=new Vl,this._focusCycler=new dd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form","ck-responsive-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),Ll(this)}render(){super.render(),this.keystrokes.listenTo(this.element),zl({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)})}_createButton(e,t,i,n){const o=new cd(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createLabeledInputView(){const e=this.locale.t,t=new jd(this.locale,Bd);return t.label=e("Text alternative"),t}}function gg(e){const t=e.editing.view,i=qd.defaultPositions;return{target:t.domConverter.viewToDom(t.document.selection.getSelectedElement()),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]}}class mg extends Qe{static get requires(){return[Qd]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const e=this.editor,t=e.t;e.ui.componentFactory.add("imageTextAlternative",i=>{const n=e.commands.get("imageTextAlternative"),o=new cd(i);return o.set({label:t("Change image text alternative"),icon:Tl,tooltip:!0}),o.bind("isEnabled").to(n,"isEnabled"),this.listenTo(o,"execute",()=>{this._showForm()}),o})}_createForm(){const e=this.editor,t=e.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new fg(e.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{e.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(e,t)=>{this._hideForm(!0),t()}),this.listenTo(e.ui,"update",()=>{ig(t.selection)?this._isVisible&&function(e){const t=e.plugins.get("ContextualBalloon");if(ig(e.editing.view.document.selection)){const i=gg(e);t.updatePosition(i)}}(e):this._hideForm(!0)}),Dl({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const e=this.editor,t=e.commands.get("imageTextAlternative"),i=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:gg(e)}),i.fieldView.value=i.fieldView.element.value=t.value||"",this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(e){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),e&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class pg extends Qe{static get requires(){return[hg,mg]}static get pluginName(){return"ImageTextAlternative"}}i(76);function bg(e){for(const t of e.getChildren())if(t&&t.is("element","caption"))return t;return null}function wg(e){const t=e.parent;return"figcaption"==e.name&&t&&"figure"==t.name&&t.hasClass("image")?{name:!0}:null}class kg extends Qe{static get pluginName(){return"ImageCaptionEditing"}init(){const e=this.editor,t=e.editing.view,i=e.model.schema,n=e.data,o=e.editing,r=e.t;i.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),e.model.document.registerPostFixer(e=>this._insertMissingModelCaptionElement(e)),e.conversion.for("upcast").elementToElement({view:wg,model:"caption"});n.downcastDispatcher.on("insert:caption",_g(e=>e.createContainerElement("figcaption"),!1));const s=function(e,t){return i=>{const n=i.createEditableElement("figcaption");return i.setCustomProperty("imageCaption",!0,n),iu({view:e,element:n,text:t}),Yu(n,i)}}(t,r("Enter image caption"));o.downcastDispatcher.on("insert:caption",_g(s)),o.downcastDispatcher.on("insert",this._fixCaptionVisibility(e=>e.item),{priority:"high"}),o.downcastDispatcher.on("remove",this._fixCaptionVisibility(e=>e.position.parent),{priority:"high"}),t.document.registerPostFixer(e=>this._updateCaptionVisibility(e))}_updateCaptionVisibility(e){const t=this.editor.editing.mapper,i=this._lastSelectedCaption;let n;const o=this.editor.model.document.selection,r=o.getSelectedElement();if(r&&r.is("element","image")){const e=bg(r);n=t.toViewElement(e)}const s=vg(o.getFirstPosition().parent);if(s&&(n=t.toViewElement(s)),n&&!this.editor.isReadOnly)return i?(i===n||(yg(i,e),this._lastSelectedCaption=n),xg(n,e)):(this._lastSelectedCaption=n,xg(n,e));if(i){const t=yg(i,e);return this._lastSelectedCaption=null,t}return!1}_fixCaptionVisibility(e){return(t,i,n)=>{const o=vg(e(i)),r=this.editor.editing.mapper,s=n.writer;if(o){const e=r.toViewElement(o);e&&(o.childCount?s.removeClass("ck-hidden",e):s.addClass("ck-hidden",e))}}}_insertMissingModelCaptionElement(e){const t=this.editor.model,i=t.document.differ.getChanges(),n=[];for(const e of i)if("insert"==e.type&&"$text"!=e.name){const i=e.position.nodeAfter;if(i.is("element","image")&&!bg(i)&&n.push(i),!i.is("element","image")&&i.childCount)for(const e of t.createRangeIn(i).getItems())e.is("element","image")&&!bg(e)&&n.push(e)}for(const t of n)e.appendElement("caption",t);return!!n.length}}function _g(e,t=!0){return(i,n,o)=>{const r=n.item;if((r.childCount||t)&&ng(r.parent)){if(!o.consumable.consume(n.item,"insert"))return;const t=o.mapper.toViewElement(n.range.start.parent),i=e(o.writer),s=o.writer;r.childCount||s.addClass("ck-hidden",i),function(e,t,i,n){const o=n.writer.createPositionAt(i,"end");n.writer.insert(o,e),n.mapper.bindElements(t,e)}(i,n.item,t,o)}}}function vg(e){const t=e.getAncestors({includeSelf:!0}).find(e=>"caption"==e.name);return t&&t.parent&&"image"==t.parent.name?t:null}function yg(e,t){return!e.childCount&&!e.hasClass("ck-hidden")&&(t.addClass("ck-hidden",e),!0)}function xg(e,t){return!!e.hasClass("ck-hidden")&&(t.removeClass("ck-hidden",e),!0)}i(78);class Ag extends Ze{constructor(e,t){super(e),this.defaultStyle=!1,this.styles=t.reduce((e,t)=>(e[t.name]=t,t.isDefault&&(this.defaultStyle=t.name),e),{})}refresh(){const e=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=ng(e),e)if(e.hasAttribute("imageStyle")){const t=e.getAttribute("imageStyle");this.value=!!this.styles[t]&&t}else this.value=this.defaultStyle;else this.value=!1}execute(e){const t=e.value,i=this.editor.model,n=i.document.selection.getSelectedElement();i.change(e=>{this.styles[t].isDefault?e.removeAttribute("imageStyle",n):e.setAttribute("imageStyle",t,n)})}}function Cg(e,t){for(const i of t)if(i.name===e)return i}const Tg={full:{name:"full",title:"Full size image",icon:Il,isDefault:!0},side:{name:"side",title:"Side image",icon:Ml,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:Pl,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:Sl,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:Ml,className:"image-style-align-right"}},Eg={full:Il,left:Pl,right:Ml,center:Sl};function Pg(e=[]){return e.map(Sg)}function Sg(e){if("string"==typeof e){const t=e;Tg[t]?e=Object.assign({},Tg[t]):(Object(c.b)("image-style-not-found",{name:t}),e={name:t})}else if(Tg[e.name]){const t=Tg[e.name],i=Object.assign({},e);for(const n in t)Object.prototype.hasOwnProperty.call(e,n)||(i[n]=t[n]);e=i}return"string"==typeof e.icon&&Eg[e.icon]&&(e.icon=Eg[e.icon]),e}class Mg extends Qe{static get pluginName(){return"ImageStyleEditing"}init(){const e=this.editor,t=e.model.schema,i=e.data,n=e.editing;e.config.define("image.styles",["full","side"]);const o=Pg(e.config.get("image.styles"));t.extend("image",{allowAttributes:"imageStyle"});const r=function(e){return(t,i,n)=>{if(!n.consumable.consume(i.item,t.name))return;const o=Cg(i.attributeNewValue,e),r=Cg(i.attributeOldValue,e),s=n.mapper.toViewElement(i.item),a=n.writer;r&&a.removeClass(r.className,s),o&&a.addClass(o.className,s)}}(o);n.downcastDispatcher.on("attribute:imageStyle:image",r),i.downcastDispatcher.on("attribute:imageStyle:image",r),i.upcastDispatcher.on("element:figure",function(e){const t=e.filter(e=>!e.isDefault);return(e,i,n)=>{if(!i.modelRange)return;const o=i.viewItem,r=Ns(i.modelRange.getItems());if(!r||n.schema.checkAttribute(r,"imageStyle"))for(const e of t)n.consumable.consume(o,{classes:e.className})&&n.writer.setAttribute("imageStyle",e.name,r)}}(o),{priority:"low"}),e.commands.add("imageStyle",new Ag(e,o))}}i(80);class Ig extends Qe{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const e=this.editor.t;return{"Full size image":e("Full size image"),"Side image":e("Side image"),"Left aligned image":e("Left aligned image"),"Centered image":e("Centered image"),"Right aligned image":e("Right aligned image")}}init(){const e=function(e,t){for(const i of e)t[i.title]&&(i.title=t[i.title]);return e}(Pg(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const t of e)this._createButton(t)}_createButton(e){const t=this.editor,i="imageStyle:"+e.name;t.ui.componentFactory.add(i,i=>{const n=t.commands.get("imageStyle"),o=new cd(i);return o.set({label:e.title,icon:e.icon,tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(n,"isEnabled"),o.bind("isOn").to(n,"value",t=>t===e.name),this.listenTo(o,"execute",()=>{t.execute("imageStyle",{value:e.name}),t.editing.view.focus()}),o})}}function Ng(e){const t=e.map(e=>e.replace("+","\\+"));return new RegExp(`^image\\/(${t.join("|")})$`)}function Rg(e){return new Promise((t,i)=>{const n=e.getAttribute("src");fetch(n).then(e=>e.blob()).then(e=>{const i=Og(e,n),o=i.replace("image/",""),r=new File([e],"image."+o,{type:i});t(r)}).catch(e=>e&&"TypeError"===e.name?function(e){return function(e){return new Promise((t,i)=>{const n=_r.document.createElement("img");n.addEventListener("load",()=>{const e=_r.document.createElement("canvas");e.width=n.width,e.height=n.height;e.getContext("2d").drawImage(n,0,0),e.toBlob(e=>e?t(e):i())}),n.addEventListener("error",()=>i()),n.src=e})}(e).then(t=>{const i=Og(t,e),n=i.replace("image/","");return new File([t],"image."+n,{type:i})})}(n).then(t).catch(i):i(e))})}function Og(e,t){return e.type?e.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}class Dg extends Qe{static get pluginName(){return"ImageUploadUI"}init(){const e=this.editor,t=e.t,i=i=>{const n=new mf(i),o=e.commands.get("uploadImage"),r=e.config.get("image.upload.types"),s=Ng(r);return n.set({acceptedType:r.map(e=>"image/"+e).join(","),allowMultipleFiles:!0}),n.buttonView.set({label:t("Insert image"),icon:El,tooltip:!0}),n.buttonView.bind("isEnabled").to(o),n.on("done",(t,i)=>{const n=Array.from(i).filter(e=>s.test(e.type));n.length&&e.execute("uploadImage",{file:n})}),n};e.ui.componentFactory.add("uploadImage",i),e.ui.componentFactory.add("imageUpload",i)}}i(82),i(84),i(86);class Lg extends Qe{static get pluginName(){return"ImageUploadProgress"}constructor(e){super(e),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>')}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(e,t,i){const n=this.editor,o=t.item,r=o.getAttribute("uploadId");if(!i.consumable.consume(t.item,e.name))return;const s=n.plugins.get(ff),a=r?t.attributeNewValue:null,c=this.placeholder,l=n.editing.mapper.toViewElement(o),d=i.writer;if("reading"==a)return zg(l,d),void Vg(c,l,d);if("uploading"==a){const e=s.loaders.get(r);return zg(l,d),void(e?(jg(l,d),function(e,t,i,n){const o=function(e){const t=e.createUIElement("div",{class:"ck-progress-bar"});return e.setCustomProperty("progressBar",!0,t),t}(t);t.insert(t.createPositionAt(e,"end"),o),i.on("change:uploadedPercent",(e,t,i)=>{n.change(e=>{e.setStyle("width",i+"%",o)})})}(l,d,e,n.editing.view),function(e,t,i){if(i.data){const n=sg(e);t.setAttribute("src",i.data,n)}}(l,d,e)):Vg(c,l,d))}"complete"==a&&s.loaders.get(r)&&function(e,t,i){const n=t.createUIElement("div",{class:"ck-image-upload-complete-icon"});t.insert(t.createPositionAt(e,"end"),n),setTimeout(()=>{i.change(e=>e.remove(e.createRangeOn(n)))},3e3)}(l,d,n.editing.view),function(e,t){Fg(e,t,"progressBar")}(l,d),jg(l,d),function(e,t){t.removeClass("ck-appear",e)}(l,d)}}function zg(e,t){e.hasClass("ck-appear")||t.addClass("ck-appear",e)}function Vg(e,t,i){t.hasClass("ck-image-upload-placeholder")||i.addClass("ck-image-upload-placeholder",t);const n=sg(t);n.getAttribute("src")!==e&&i.setAttribute("src",e,n),Bg(t,"placeholder")||i.insert(i.createPositionAfter(n),function(e){const t=e.createUIElement("div",{class:"ck-upload-placeholder-loader"});return e.setCustomProperty("placeholder",!0,t),t}(i))}function jg(e,t){e.hasClass("ck-image-upload-placeholder")&&t.removeClass("ck-image-upload-placeholder",e),Fg(e,t,"placeholder")}function Bg(e,t){for(const i of e.getChildren())if(i.getCustomProperty(t))return i}function Fg(e,t,i){const n=Bg(e,i);n&&t.remove(t.createRangeOn(n))}class Hg extends Ze{refresh(){const e=this.editor.model.document.selection.getSelectedElement(),t=e&&"image"===e.name||!1;this.isEnabled=rg(this.editor.model)||t}execute(e){const t=this.editor,i=t.model,n=t.plugins.get(ff);for(const t of en(e.file))Ug(i,n,t)}}function Ug(e,t,i){const n=t.createLoader(i);n&&og(e,{uploadId:n.id})}class Wg extends Qe{static get requires(){return[ff,Fd,Eu]}static get pluginName(){return"ImageUploadEditing"}constructor(e){super(e),e.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}})}init(){const e=this.editor,t=e.model.document,i=e.model.schema,n=e.conversion,o=e.plugins.get(ff),r=Ng(e.config.get("image.upload.types"));i.extend("image",{allowAttributes:["uploadId","uploadStatus"]});const s=new Hg(e);e.commands.add("uploadImage",s),e.commands.add("imageUpload",s),n.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(e.editing.view.document,"clipboardInput",(t,i)=>{if(n=i.dataTransfer,Array.from(n.types).includes("text/html")&&""!==n.getData("text/html"))return;var n;const o=Array.from(i.dataTransfer.files).filter(e=>!!e&&r.test(e.type));o.length&&(t.stop(),e.model.change(t=>{i.targetRanges&&t.setSelection(i.targetRanges.map(t=>e.editing.mapper.toModelRange(t))),e.model.enqueueChange("default",()=>{e.execute("uploadImage",{file:o})})}))}),this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",(t,i)=>{const n=Array.from(e.editing.view.createRangeIn(i.content)).filter(e=>{return!(!(t=e.item).is("element","img")||!t.getAttribute("src"))&&(t.getAttribute("src").match(/^data:image\/\w+;base64,/g)||t.getAttribute("src").match(/^blob:/g))&&!e.item.getAttribute("uploadProcessed");var t}).map(e=>({promise:Rg(e.item),imageElement:e.item}));if(!n.length)return;const r=new _u(e.editing.view.document);for(const e of n){r.setAttribute("uploadProcessed",!0,e.imageElement);const t=o.createLoader(e.promise);t&&(r.setAttribute("src","",e.imageElement),r.setAttribute("uploadId",t.id,e.imageElement))}}),e.editing.view.document.on("dragover",(e,t)=>{t.preventDefault()}),t.on("change",()=>{const i=t.differ.getChanges({includeChangesInGraveyard:!0});for(const t of i)if("insert"==t.type&&"$text"!=t.name){const i=t.position.nodeAfter,n="$graveyard"==t.position.root.rootName;for(const t of qg(e,i)){const e=t.getAttribute("uploadId");if(!e)continue;const i=o.loaders.get(e);i&&(n?i.abort():"idle"==i.status&&this._readAndUpload(i,t))}}}),this.on("uploadComplete",(e,{imageElement:t,data:i})=>{const n=i.urls?i.urls:i;this.editor.model.change(e=>{e.setAttribute("src",n.default,t),this._parseAndSetSrcsetAttributeOnImage(n,t,e)})},{priority:"low"})}_readAndUpload(e,t){const i=this.editor,n=i.model,o=i.locale.t,r=i.plugins.get(ff),s=i.plugins.get(Fd);return n.enqueueChange("transparent",e=>{e.setAttribute("uploadStatus","reading",t)}),e.read().then(()=>{const o=e.upload();if(Po.isSafari){const e=sg(i.editing.mapper.toViewElement(t));i.editing.view.once("render",()=>{if(!e.parent)return;const t=i.editing.view.domConverter.mapViewToDom(e.parent);if(!t)return;const n=t.style.display;t.style.display="none",t._ckHack=t.offsetHeight,t.style.display=n})}return n.enqueueChange("transparent",e=>{e.setAttribute("uploadStatus","uploading",t)}),o}).then(e=>{n.enqueueChange("transparent",i=>{i.setAttribute("uploadStatus","complete",t),this.fire("uploadComplete",{data:e,imageElement:t})}),a()}).catch(i=>{if("error"!==e.status&&"aborted"!==e.status)throw i;"error"==e.status&&i&&s.showWarning(i,{title:o("Upload failed"),namespace:"upload"}),a(),n.enqueueChange("transparent",e=>{e.remove(t)})});function a(){n.enqueueChange("transparent",e=>{e.removeAttribute("uploadId",t),e.removeAttribute("uploadStatus",t)}),r.destroyLoader(e)}}_parseAndSetSrcsetAttributeOnImage(e,t,i){let n=0;const o=Object.keys(e).filter(e=>{const t=parseInt(e,10);if(!isNaN(t))return n=Math.max(n,t),!0}).map(t=>`${e[t]} ${t}w`).join(", ");""!=o&&i.setAttribute("srcset",{data:o,width:n},t)}}function qg(e,t){return Array.from(e.model.createRangeOn(t)).filter(e=>e.item.is("element","image")).map(e=>e.item)}class $g extends Qe{static get pluginName(){return"IndentEditing"}init(){const e=this.editor;e.commands.add("indent",new et(e)),e.commands.add("outdent",new et(e))}}var Yg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',Gg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class Kg extends Qe{static get pluginName(){return"IndentUI"}init(){const e=this.editor,t=e.locale,i=e.t,n="ltr"==t.uiLanguageDirection?Yg:Gg,o="ltr"==t.uiLanguageDirection?Gg:Yg;this._defineButton("indent",i("Increase indent"),n),this._defineButton("outdent",i("Decrease indent"),o)}_defineButton(e,t,i){const n=this.editor;n.ui.componentFactory.add(e,o=>{const r=n.commands.get(e),s=new cd(o);return s.set({label:t,icon:i,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>{n.execute(e),n.editing.view.focus()}),s})}}class Qg{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(e){Array.isArray(e)?e.forEach(e=>this._definitions.add(e)):this._definitions.add(e)}getDispatcher(){return e=>{e.on("attribute:linkHref",(e,t,i)=>{if(!i.consumable.test(t.item,"attribute:linkHref"))return;const n=i.writer,o=n.document.selection;for(const e of this._definitions){const r=n.createAttributeElement("a",e.attributes,{priority:5});n.setCustomProperty("link",!0,r),e.callback(t.attributeNewValue)?t.item.is("selection")?n.wrap(o.getFirstRange(),r):n.wrap(i.mapper.toViewRange(t.range),r):n.unwrap(i.mapper.toViewRange(t.range),r)}},{priority:"high"})}}getDispatcherForLinkedImage(){return e=>{e.on("attribute:linkHref:image",(e,t,i)=>{const n=i.mapper.toViewElement(t.item),o=Array.from(n.getChildren()).find(e=>"a"===e.name);for(const e of this._definitions){const n=fn(e.attributes);if(e.callback(t.attributeNewValue))for(const[e,t]of n)"class"===e?i.writer.addClass(t,o):i.writer.setAttribute(e,t,o);else for(const[e,t]of n)"class"===e?i.writer.removeClass(t,o):i.writer.removeAttribute(e,o)}})}}}var Jg=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&i>=n?e:On(e,t,i)},Zg=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Xg=function(e){return Zg.test(e)};var em=function(e){return e.split("")},tm="[\\ud800-\\udfff]",im="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",nm="\\ud83c[\\udffb-\\udfff]",om="[^\\ud800-\\udfff]",rm="(?:\\ud83c[\\udde6-\\uddff]){2}",sm="[\\ud800-\\udbff][\\udc00-\\udfff]",am="(?:"+im+"|"+nm+")"+"?",cm="[\\ufe0e\\ufe0f]?"+am+("(?:\\u200d(?:"+[om,rm,sm].join("|")+")[\\ufe0e\\ufe0f]?"+am+")*"),lm="(?:"+[om+im+"?",im,rm,sm,tm].join("|")+")",dm=RegExp(nm+"(?="+nm+")|"+lm+cm,"g");var um=function(e){return e.match(dm)||[]};var hm=function(e){return Xg(e)?um(e):em(e)};var fm=function(e){return function(t){t=Sn(t);var i=Xg(t)?hm(t):void 0,n=i?i[0]:t.charAt(0),o=i?Jg(i,1).join(""):t.slice(1);return n[e]()+o}}("toUpperCase");const gm=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,mm=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,pm=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,bm=/^((\w+:(\/{2,})?)|(\W))/i;function wm(e,{writer:t}){const i=t.createAttributeElement("a",{href:e},{priority:5});return t.setCustomProperty("link",!0,i),i}function km(e){return function(e){return e.replace(gm,"").match(mm)}(e=String(e))?e:"#"}function _m(e,t){return!!e&&(e.is("element","image")&&t.checkAttribute("image","linkHref"))}function vm(e,t){const i=(n=e,pm.test(n)?"mailto:":t);var n;const o=!!i&&!bm.test(e);return e&&o?i+e:e}class ym extends Ze{constructor(e){super(e),this.manualDecorators=new Zi,this.automaticDecorators=new Qg}restoreManualDecoratorStates(){for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}refresh(){const e=this.editor.model,t=e.document,i=Ns(t.selection.getSelectedBlocks());_m(i,e.schema)?(this.value=i.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttribute(i,"linkHref")):(this.value=t.selection.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"linkHref"));for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}execute(e,t={}){const i=this.editor.model,n=i.document.selection,o=[],r=[];for(const e in t)t[e]?o.push(e):r.push(e);i.change(t=>{if(n.isCollapsed){const s=n.getFirstPosition();if(n.hasAttribute("linkHref")){const a=Xh(s,"linkHref",n.getAttribute("linkHref"),i);t.setAttribute("linkHref",e,a),o.forEach(e=>{t.setAttribute(e,!0,a)}),r.forEach(e=>{t.removeAttribute(e,a)}),t.setSelection(t.createPositionAfter(a.end.nodeBefore))}else if(""!==e){const r=fn(n.getAttributes());r.set("linkHref",e),o.forEach(e=>{r.set(e,!0)});const{end:a}=i.insertContent(t.createText(e,r),s);t.setSelection(a)}["linkHref",...o,...r].forEach(e=>{t.removeSelectionAttribute(e)})}else{const s=i.schema.getValidRanges(n.getRanges(),"linkHref"),a=[];for(const e of n.getSelectedBlocks())i.schema.checkAttribute(e,"linkHref")&&a.push(t.createRangeOn(e));const c=a.slice();for(const e of s)this._isRangeToUpdate(e,a)&&c.push(e);for(const i of c)t.setAttribute("linkHref",e,i),o.forEach(e=>{t.setAttribute(e,!0,i)}),r.forEach(e=>{t.removeAttribute(e,i)})}})}_getDecoratorStateFromModel(e){const t=this.editor.model,i=t.document,n=Ns(i.selection.getSelectedBlocks());return _m(n,t.schema)?n.getAttribute(e):i.selection.getAttribute(e)}_isRangeToUpdate(e,t){for(const i of t)if(i.containsRange(e))return!1;return!0}}class xm extends Ze{refresh(){const e=this.editor.model,t=e.document,i=Ns(t.selection.getSelectedBlocks());_m(i,e.schema)?this.isEnabled=e.schema.checkAttribute(i,"linkHref"):this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"linkHref")}execute(){const e=this.editor,t=this.editor.model,i=t.document.selection,n=e.commands.get("link");t.change(e=>{const o=i.isCollapsed?[Xh(i.getFirstPosition(),"linkHref",i.getAttribute("linkHref"),t)]:t.schema.getValidRanges(i.getRanges(),"linkHref");for(const t of o)if(e.removeAttribute("linkHref",t),n)for(const i of n.manualDecorators)e.removeAttribute(i.id,t)})}}class Am{constructor({id:e,label:t,attributes:i,defaultValue:n}){this.id=e,this.set("value"),this.defaultValue=n,this.label=t,this.attributes=i}}Ke(Am,Ue);i(88);const Cm=/^(https?:)?\/\//;class Tm extends Qe{static get pluginName(){return"LinkEditing"}static get requires(){return[Vh,Oh,Eu]}constructor(e){super(e),e.config.define("link",{addTargetToExternalLinks:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"linkHref"}),e.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:wm}),e.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(e,t)=>wm(km(e),t)}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:e=>e.getAttribute("href")}}),e.commands.add("link",new ym(e)),e.commands.add("unlink",new xm(e));const t=function(e,t){const i={"Open in a new tab":e("Open in a new tab"),Downloadable:e("Downloadable")};return t.forEach(e=>(e.label&&i[e.label]&&(e.label=i[e.label]),e)),t}(e.t,function(e){const t=[];if(e)for(const[i,n]of Object.entries(e)){const e=Object.assign({},n,{id:"link"+fm(i)});t.push(e)}return t}(e.config.get("link.decorators")));this._enableAutomaticDecorators(t.filter(e=>"automatic"===e.mode)),this._enableManualDecorators(t.filter(e=>"manual"===e.mode));e.plugins.get(Vh).registerAttribute("linkHref"),function(e,t,i,n){const o=e.editing.view,r=new Set;o.document.registerPostFixer(o=>{const s=e.model.document.selection;let a=!1;if(s.hasAttribute(t)){const c=Xh(s.getFirstPosition(),t,s.getAttribute(t),e.model),l=e.editing.mapper.toViewRange(c);for(const e of l.getItems())e.is("element",i)&&!e.hasClass(n)&&(o.addClass(n,e),r.add(e),a=!0)}return a}),e.conversion.for("editingDowncast").add(e=>{function t(){o.change(e=>{for(const t of r.values())e.removeClass(n,t),r.delete(t)})}e.on("insert",t,{priority:"highest"}),e.on("remove",t,{priority:"highest"}),e.on("attribute",t,{priority:"highest"}),e.on("selection",t,{priority:"highest"})})}(e,"linkHref","a","ck-link_selected"),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(e){const t=this.editor,i=t.commands.get("link").automaticDecorators;t.config.get("link.addTargetToExternalLinks")&&i.add({id:"linkIsExternal",mode:"automatic",callback:e=>Cm.test(e),attributes:{target:"_blank",rel:"noopener noreferrer"}}),i.add(e),i.length&&t.conversion.for("downcast").add(i.getDispatcher())}_enableManualDecorators(e){if(!e.length)return;const t=this.editor,i=t.commands.get("link").manualDecorators;e.forEach(e=>{t.model.schema.extend("$text",{allowAttributes:e.id}),i.add(new Am(e)),t.conversion.for("downcast").attributeToElement({model:e.id,view:(t,{writer:n})=>{if(t){const t=i.get(e.id).attributes,o=n.createAttributeElement("a",t,{priority:5});return n.setCustomProperty("link",!0,o),o}}}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:i.get(e.id).attributes},model:{key:e.id}})})}_enableInsertContentSelectionAttributesFixer(){const e=this.editor,t=e.model,i=t.document.selection,n=e.commands.get("link");this.listenTo(t,"insertContent",()=>{const e=i.anchor.nodeBefore,o=i.anchor.nodeAfter;i.hasAttribute("linkHref")&&e&&e.hasAttribute("linkHref")&&(o&&o.hasAttribute("linkHref")||t.change(e=>{Em(e,n.manualDecorators)}))},{priority:"low"})}_enableClickingAfterLink(){const e=this.editor,t=e.commands.get("link");e.editing.view.addObserver(ku);let i=!1;this.listenTo(e.editing.view.document,"mousedown",()=>{i=!0}),this.listenTo(e.editing.view.document,"selectionChange",()=>{if(!i)return;i=!1;const n=e.model.document.selection;if(!n.isCollapsed)return;if(!n.hasAttribute("linkHref"))return;const o=n.getFirstPosition(),r=Xh(o,"linkHref",n.getAttribute("linkHref"),e.model);(o.isTouching(r.start)||o.isTouching(r.end))&&e.model.change(e=>{Em(e,t.manualDecorators)})})}_enableTypingOverLink(){const e=this.editor,t=e.editing.view;let i,n;this.listenTo(t.document,"delete",()=>{n=!0},{priority:"high"}),this.listenTo(e.model,"deleteContent",()=>{const t=e.model.document.selection;t.isCollapsed||(n?n=!1:Pm(e)&&function(e){const t=e.document.selection,i=t.getFirstPosition(),n=t.getLastPosition(),o=i.nodeAfter;if(!o)return!1;if(!o.is("$text"))return!1;if(!o.hasAttribute("linkHref"))return!1;const r=n.textNode||n.nodeBefore;if(o===r)return!0;return Xh(i,"linkHref",o.getAttribute("linkHref"),e).containsRange(e.createRange(i,n),!0)}(e.model)&&(i=t.getAttributes()))},{priority:"high"}),this.listenTo(e.model,"insertContent",(t,[o])=>{n=!1,Pm(e)&&i&&(e.model.change(e=>{for(const[t,n]of i)e.setAttribute(t,n,o)}),i=null)},{priority:"high"})}_handleDeleteContentAfterLink(){const e=this.editor,t=e.model,i=t.document.selection,n=e.editing.view,o=e.commands.get("link");let r=!1,s=!1;this.listenTo(n.document,"delete",(e,t)=>{s=t.domEvent.keyCode===Io.backspace},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{r=!1;const e=i.getFirstPosition(),n=i.getAttribute("linkHref");if(!n)return;const o=Xh(e,"linkHref",n,t);r=o.containsPosition(e)||o.end.isEqual(e)},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{s&&(s=!1,r||e.model.enqueueChange(e=>{Em(e,o.manualDecorators)}))},{priority:"low"})}}function Em(e,t){e.removeSelectionAttribute("linkHref");for(const i of t)e.removeSelectionAttribute(i.id)}function Pm(e){return e.plugins.get("Input").isInput(e.model.change(e=>e.batch))}i(90);class Sm extends jl{constructor(e,t){super(e);const i=e.t;this.focusTracker=new Rs,this.keystrokes=new Os,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(i("Save"),Cl,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(i("Cancel"),Al,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(t),this.children=this._createFormChildren(t.manualDecorators),this._focusables=new Vl,this._focusCycler=new dd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const n=["ck","ck-link-form","ck-responsive-form"];t.manualDecorators.length&&n.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:n,tabindex:"-1"},children:this.children}),Ll(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((e,t)=>(e[t.name]=t.isOn,e),{})}render(){super.render(),zl({view:this});[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new jd(this.locale,Bd);return t.label=e("Link URL"),t}_createButton(e,t,i,n){const o=new cd(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createManualDecoratorSwitches(e){const t=this.createCollection();for(const i of e.manualDecorators){const n=new ld(this.locale);n.set({name:i.id,label:i.label,withText:!0}),n.bind("isOn").toMany([i,e],"value",(e,t)=>void 0===t&&void 0===e?i.defaultValue:e),n.on("execute",()=>{i.set("value",!n.isOn)}),t.add(n)}return t}_createFormChildren(e){const t=this.createCollection();if(t.add(this.urlInputView),e.length){const e=new jl;e.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(e=>({tag:"li",children:[e],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),t.add(e)}return t.add(this.saveButtonView),t.add(this.cancelButtonView),t}}i(92);class Mm extends jl{constructor(e){super(e);const t=e.t;this.focusTracker=new Rs,this.keystrokes=new Os,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(t("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(t("Edit link"),Nl,"edit"),this.set("href"),this._focusables=new Vl,this._focusCycler=new dd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(e,t,i){const n=new cd(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate("execute").to(this,i),n}_createPreviewButton(){const e=new cd(this.locale),t=this.bindTemplate,i=this.t;return e.set({withText:!0,tooltip:i("Open link in new tab")}),e.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:t.to("href",e=>e&&km(e)),target:"_blank",rel:"noopener noreferrer"}}),e.bind("label").to(this,"href",e=>e||i("This link has no URL")),e.bind("isEnabled").to(this,"href",e=>!!e),e.template.tag="a",e.template.eventListeners={},e}}class Im extends Qe{static get requires(){return[Qd]}static get pluginName(){return"LinkUI"}init(){const e=this.editor;e.editing.view.addObserver(wu),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(Qd),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),e.conversion.for("editingDowncast").markerToHighlight({model:"link-ui",view:{classes:["ck-fake-link-selection"]}}),e.conversion.for("editingDowncast").markerToElement({model:"link-ui",view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const e=this.editor,t=new Mm(e.locale),i=e.commands.get("link"),n=e.commands.get("unlink");return t.bind("href").to(i,"value"),t.editButtonView.bind("isEnabled").to(i),t.unlinkButtonView.bind("isEnabled").to(n),this.listenTo(t,"edit",()=>{this._addFormView()}),this.listenTo(t,"unlink",()=>{e.execute("unlink"),this._hideUI()}),t.keystrokes.set("Esc",(e,t)=>{this._hideUI(),t()}),t.keystrokes.set("Ctrl+K",(e,t)=>{this._addFormView(),t()}),t}_createFormView(){const e=this.editor,t=e.commands.get("link"),i=e.config.get("link.defaultProtocol"),n=new Sm(e.locale,t);return n.urlInputView.fieldView.bind("value").to(t,"value"),n.urlInputView.bind("isReadOnly").to(t,"isEnabled",e=>!e),n.saveButtonView.bind("isEnabled").to(t),this.listenTo(n,"submit",()=>{const{value:t}=n.urlInputView.fieldView.element,o=vm(t,i);e.execute("link",o,n.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(n,"cancel",()=>{this._closeFormView()}),n.keystrokes.set("Esc",(e,t)=>{this._closeFormView(),t()}),n}_createToolbarLinkButton(){const e=this.editor,t=e.commands.get("link"),i=e.t;e.keystrokes.set("Ctrl+K",(e,i)=>{i(),t.isEnabled&&this._showUI(!0)}),e.ui.componentFactory.add("link",e=>{const n=new cd(e);return n.isEnabled=!0,n.label=i("Link"),n.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',n.keystroke="Ctrl+K",n.tooltip=!0,n.isToggleable=!0,n.bind("isEnabled").to(t,"isEnabled"),n.bind("isOn").to(t,"value",e=>!!e),this.listenTo(n,"execute",()=>this._showUI(!0)),n})}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())},{priority:"high"}),this.editor.keystrokes.set("Esc",(e,t)=>{this._isUIVisible&&(this._hideUI(),t())}),Dl({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const e=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=e.value||""}_closeFormView(){const e=this.editor.commands.get("link");e.restoreManualDecoratorStates(),void 0!==e.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(e=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),e&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),e&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const e=this.editor;this.stopListening(e.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),e.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const e=this.editor,t=e.editing.view.document;let i=this._getSelectedLinkElement(),n=r();const o=()=>{const e=this._getSelectedLinkElement(),t=r();i&&!e||!i&&t!==n?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),i=e,n=t};function r(){return t.selection.focus.getAncestors().reverse().find(e=>e.is("element"))}this.listenTo(e.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=this.editor.model,i=e.document;let n=null;if(t.markers.has("link-ui")){const t=Array.from(this.editor.editing.mapper.markerNameToElements("link-ui")),i=e.createRange(e.createPositionBefore(t[0]),e.createPositionAfter(t[t.length-1]));n=e.domConverter.viewRangeToDom(i)}else{const t=this._getSelectedLinkElement(),o=i.selection.getFirstRange();n=t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(o)}return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view,t=e.document.selection;if(t.isCollapsed)return Nm(t.getFirstPosition());{const i=t.getFirstRange().getTrimmed(),n=Nm(i.start),o=Nm(i.end);return n&&n==o&&e.createRangeIn(n).getTrimmed().isEqual(i)?n:null}}_showFakeVisualSelection(){const e=this.editor.model;e.change(t=>{const i=e.document.selection.getFirstRange();if(e.markers.has("link-ui"))t.updateMarker("link-ui",{range:i});else if(i.start.isAtEnd){const n=i.start.getLastMatchingPosition(({item:t})=>!e.schema.isContent(t),{boundaries:i});t.addMarker("link-ui",{usingOperation:!1,affectsData:!1,range:t.createRange(n,i.end)})}else t.addMarker("link-ui",{usingOperation:!1,affectsData:!1,range:i})})}_hideFakeVisualSelection(){const e=this.editor.model;e.markers.has("link-ui")&&e.change(e=>{e.removeMarker("link-ui")})}}function Nm(e){return e.getAncestors().find(e=>{return(t=e).is("attributeElement")&&!!t.getCustomProperty("link");var t})}const Rm=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class Om extends Qe{static get pluginName(){return"AutoLink"}init(){const e=this.editor.model.document.selection;e.on("change:range",()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const e=this.editor,t=new zh(e.model,e=>{if(!function(e){return e.length>4&&" "===e[e.length-1]&&" "!==e[e.length-2]}(e))return;const t=Dm(e.substr(0,e.length-1));return t?{url:t}:void 0}),i=e.plugins.get("Input");t.on("matched:data",(t,n)=>{const{batch:o,range:r,url:s}=n;if(!i.isInput(o))return;const a=r.end.getShiftedBy(-1),c=a.getShiftedBy(-s.length),l=e.model.createRange(c,a);this._applyAutoLink(s,l)}),t.bind("isEnabled").to(this)}_enableEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("enter");i&&i.on("execute",()=>{const e=t.document.selection.getFirstPosition();if(!e.parent.previousSibling)return;const i=t.createRangeIn(e.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(i)})}_enableShiftEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("shiftEnter");i&&i.on("execute",()=>{const e=t.document.selection.getFirstPosition(),i=t.createRange(t.createPositionAt(e.parent,0),e.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(i)})}_checkAndApplyAutoLinkOnRange(e){const t=this.editor.model,{text:i,range:n}=Lh(e,t),o=Dm(i);if(o){const e=t.createRange(n.end.getShiftedBy(-o.length),n.end);this._applyAutoLink(o,e)}}_applyAutoLink(e,t){const i=this.editor.model;this.isEnabled&&function(e,t){return t.schema.checkAttributeInSelection(t.createSelection(e),"linkHref")}(t,i)&&i.enqueueChange(i=>{const n=this.editor.config.get("link.defaultProtocol"),o=vm(e,n);i.setAttribute("linkHref",o,t)})}}function Dm(e){const t=Rm.exec(e);return t?t[2]:null}class Lm extends Ze{constructor(e,t){super(e),this.type=t}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,i=t.document,n=Array.from(i.selection.getSelectedBlocks()).filter(e=>Vm(e,t.schema)),o=void 0!==e.forceValue?!e.forceValue:this.value;t.change(e=>{if(o){let t=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;t&&"listItem"==t.name&&0!==t.getAttribute("listIndent");){const e=t.getAttribute("listIndent");e<i&&(i=e);const n=e-i;o.push({element:t,listIndent:n}),t=t.nextSibling}o=o.reverse();for(const t of o)e.setAttribute("listIndent",t.listIndent,t.element)}if(!o){let e=Number.POSITIVE_INFINITY;for(const t of n)t.is("element","listItem")&&t.getAttribute("listIndent")<e&&(e=t.getAttribute("listIndent"));e=0===e?1:e,zm(n,!0,e),zm(n,!1,e)}for(const t of n.reverse())o&&"listItem"==t.name?e.rename(t,"paragraph"):o||"listItem"==t.name?o||"listItem"!=t.name||t.getAttribute("listType")==this.type||e.setAttribute("listType",this.type,t):(e.setAttributes({listType:this.type,listIndent:0},t),e.rename(t,"listItem"));this.fire("_executeCleanup",n)})}_getValue(){const e=Ns(this.editor.model.document.selection.getSelectedBlocks());return!!e&&e.is("element","listItem")&&e.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,i=Ns(e.getSelectedBlocks());return!!i&&Vm(i,t)}}function zm(e,t,i){const n=t?e[0]:e[e.length-1];if(n.is("element","listItem")){let o=n[t?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=i;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&e[t?"unshift":"push"](o),o=o[t?"previousSibling":"nextSibling"]}}function Vm(e,t){return t.checkChild(e.parent,"listItem")&&!t.isObject(e)}class jm extends Ze{constructor(e,t){super(e),this._indentBy="forward"==t?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model,t=e.document;let i=Array.from(t.selection.getSelectedBlocks());e.change(e=>{const t=i[i.length-1];let n=t.nextSibling;for(;n&&"listItem"==n.name&&n.getAttribute("listIndent")>t.getAttribute("listIndent");)i.push(n),n=n.nextSibling;this._indentBy<0&&(i=i.reverse());for(const t of i){const i=t.getAttribute("listIndent")+this._indentBy;i<0?e.rename(t,"paragraph"):e.setAttribute("listIndent",i,t)}this.fire("_executeCleanup",i)})}_checkEnabled(){const e=Ns(this.editor.model.document.selection.getSelectedBlocks());if(!e||!e.is("element","listItem"))return!1;if(this._indentBy>0){const t=e.getAttribute("listIndent"),i=e.getAttribute("listType");let n=e.previousSibling;for(;n&&n.is("element","listItem")&&n.getAttribute("listIndent")>=t;){if(n.getAttribute("listIndent")==t)return n.getAttribute("listType")==i;n=n.previousSibling}return!1}return!0}}function Bm(e,t){const i=t.mapper,n=t.writer,o="numbered"==e.getAttribute("listType")?"ol":"ul",r=function(e){const t=e.createContainerElement("li");return t.getFillerOffset=$m,t}(n),s=n.createContainerElement(o,null);return n.insert(n.createPositionAt(s,0),r),i.bindElements(e,r),r}function Fm(e,t,i,n){const o=t.parent,r=i.mapper,s=i.writer;let a=r.toViewPosition(n.createPositionBefore(e));const c=Wm(e.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:e.getAttribute("listIndent")}),l=e.previousSibling;if(c&&c.getAttribute("listIndent")==e.getAttribute("listIndent")){const e=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(e))}else if(l&&"listItem"==l.name){a=r.toViewPosition(n.createPositionAt(l,"end"));const e=r.findMappedViewAncestor(a),t=function(e){for(const t of e.getChildren())if("ul"==t.name||"ol"==t.name)return t;return null}(e);a=t?s.createPositionBefore(t):s.createPositionAt(e,"end")}else a=r.toViewPosition(n.createPositionBefore(e));if(a=Um(a),s.insert(a,o),l&&"listItem"==l.name){const e=r.toViewElement(l),i=s.createRange(s.createPositionAt(e,0),a).getWalker({ignoreElementEnd:!0});for(const e of i)if(e.item.is("element","li")){const n=s.breakContainer(s.createPositionBefore(e.item)),o=e.item.parent,r=s.createPositionAt(t,"end");Hm(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),i.position=n}}else{const i=o.nextSibling;if(i&&(i.is("element","ul")||i.is("element","ol"))){let n=null;for(const t of i.getChildren()){const i=r.toModelElement(t);if(!(i&&i.getAttribute("listIndent")>e.getAttribute("listIndent")))break;n=t}n&&(s.breakContainer(s.createPositionAfter(n)),s.move(s.createRangeOn(n.parent),s.createPositionAt(t,"end")))}}Hm(s,o,o.nextSibling),Hm(s,o.previousSibling,o)}function Hm(e,t,i){return!t||!i||"ul"!=t.name&&"ol"!=t.name||t.name!=i.name||t.getAttribute("class")!==i.getAttribute("class")?null:e.mergeContainers(e.createPositionAfter(t))}function Um(e){return e.getLastMatchingPosition(e=>e.item.is("uiElement"))}function Wm(e,t){const i=!!t.sameIndent,n=!!t.smallerIndent,o=t.listIndent;let r=e;for(;r&&"listItem"==r.name;){const e=r.getAttribute("listIndent");if(i&&o==e||n&&o>e)return r;r="forward"===t.direction?r.nextSibling:r.previousSibling}return null}function qm(e,t,i,n){e.ui.componentFactory.add(t,o=>{const r=e.commands.get(t),s=new cd(o);return s.set({label:i,icon:n,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{e.execute(t),e.editing.view.focus()}),s})}function $m(){const e=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||e?0:io.call(this)}function Ym(e){return(t,i,n)=>{const o=n.consumable;if(!o.test(i.item,"insert")||!o.test(i.item,"attribute:listType")||!o.test(i.item,"attribute:listIndent"))return;o.consume(i.item,"insert"),o.consume(i.item,"attribute:listType"),o.consume(i.item,"attribute:listIndent");const r=i.item;Fm(r,Bm(r,n),n,e)}}function Gm(e,t,i){if(!i.consumable.consume(t.item,"attribute:listType"))return;const n=i.mapper.toViewElement(t.item),o=i.writer;o.breakContainer(o.createPositionBefore(n)),o.breakContainer(o.createPositionAfter(n));const r=n.parent,s="numbered"==t.attributeNewValue?"ol":"ul";o.rename(s,r)}function Km(e,t,i){const n=i.mapper.toViewElement(t.item).parent,o=i.writer;Hm(o,n,n.nextSibling),Hm(o,n.previousSibling,n);for(const e of t.item.getChildren())i.consumable.consume(e,"insert")}function Qm(e,t,i){if("listItem"!=t.item.name){let e=i.mapper.toViewPosition(t.range.start);const n=i.writer,o=[];for(;("ul"==e.parent.name||"ol"==e.parent.name)&&(e=n.breakContainer(e),"li"==e.parent.name);){const t=e,i=n.createPositionAt(e.parent,"end");if(!t.isEqual(i)){const e=n.remove(n.createRange(t,i));o.push(e)}e=n.createPositionAfter(e.parent)}if(o.length>0){for(let t=0;t<o.length;t++){const i=e.nodeBefore;if(e=n.insert(e,o[t]).end,t>0){const t=Hm(n,i,i.nextSibling);t&&t.parent==i&&e.offset--}}Hm(n,e.nodeBefore,e.nodeAfter)}}}function Jm(e,t,i){const n=i.mapper.toViewPosition(t.position),o=n.nodeBefore,r=n.nodeAfter;Hm(i.writer,o,r)}function Zm(e,t,i){if(i.consumable.consume(t.viewItem,{name:!0})){const e=i.writer,n=e.createElement("listItem"),o=function(e){let t=0,i=e.parent;for(;i;){if(i.is("element","li"))t++;else{const e=i.previousSibling;e&&e.is("element","li")&&t++}i=i.parent}return t}(t.viewItem);e.setAttribute("listIndent",o,n);const r=t.viewItem.parent&&"ol"==t.viewItem.parent.name?"numbered":"bulleted";if(e.setAttribute("listType",r,n),!i.safeInsert(n,t.modelCursor))return;const s=function(e,t,i){const{writer:n,schema:o}=i;let r=n.createPositionAfter(e);for(const s of t)if("ul"==s.name||"ol"==s.name)r=i.convertItem(s,r).modelCursor;else{const t=i.convertItem(s,n.createPositionAt(e,"end")),a=t.modelRange.start.nodeAfter;a&&a.is("element")&&!o.checkChild(e,a.name)&&(e=t.modelCursor.parent.is("element","listItem")?t.modelCursor.parent:np(t.modelCursor),r=n.createPositionAfter(e))}return r}(n,t.viewItem.getChildren(),i);t.modelRange=e.createRange(t.modelCursor,s),i.updateConversionResult(n,t)}}function Xm(e,t,i){if(i.consumable.test(t.viewItem,{name:!0})){const e=Array.from(t.viewItem.getChildren());for(const t of e){!(t.is("element","li")||rp(t))&&t._remove()}}}function ep(e,t,i){if(i.consumable.test(t.viewItem,{name:!0})){if(0===t.viewItem.childCount)return;const e=[...t.viewItem.getChildren()];let i=!1,n=!0;for(const t of e)i&&!rp(t)&&t._remove(),t.is("$text")?(n&&(t._data=t.data.trimStart()),t.nextSibling&&!rp(t.nextSibling)||(t._data=t.data.trimEnd())):rp(t)&&(i=!0),n=!1}}function tp(e){return(t,i)=>{if(i.isPhantom)return;const n=i.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){const t=i.mapper.toViewElement(n),o=t.getAncestors().find(rp),r=e.createPositionAt(t,0).getWalker();for(const e of r){if("elementStart"==e.type&&e.item.is("element","li")){i.viewPosition=e.previousPosition;break}if("elementEnd"==e.type&&e.item==o){i.viewPosition=e.nextPosition;break}}}}}function ip(e,[t,i]){let n,o=t.is("documentFragment")?t.getChild(0):t;if(n=i?this.createSelection(i):this.document.selection,o&&o.is("element","listItem")){const e=n.getFirstPosition();let t=null;if(e.parent.is("element","listItem")?t=e.parent:e.nodeBefore&&e.nodeBefore.is("element","listItem")&&(t=e.nodeBefore),t){const e=t.getAttribute("listIndent");if(e>0)for(;o&&o.is("element","listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+e),o=o.nextSibling}}}function np(e){const t=new Zs({startPosition:e});let i;do{i=t.next()}while(!i.value.item.is("element","listItem"));return i.value.item}function op(e,t,i,n,o,r){const s=Wm(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:e,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==e){const e=a.toViewElement(s).parent;d=c.createPositionAfter(e)}else{const e=r.createPositionAt(s,"end");d=a.toViewPosition(e)}else d=i;d=Um(d);for(const e of[...n.getChildren()])rp(e)&&(d=c.move(c.createRangeOn(e),d).end,Hm(c,e,e.nextSibling),Hm(c,e.previousSibling,e))}function rp(e){return e.is("element","ol")||e.is("element","ul")}class sp extends Qe{static get pluginName(){return"ListEditing"}static get requires(){return[Nu,Lu]}init(){const e=this.editor;e.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const t=e.data,i=e.editing;var n;e.model.document.registerPostFixer(t=>function(e,t){const i=e.document.differ.getChanges(),n=new Map;let o=!1;for(const n of i)if("insert"==n.type&&"listItem"==n.name)r(n.position);else if("insert"==n.type&&"listItem"!=n.name){if("$text"!=n.name){const i=n.position.nodeAfter;i.hasAttribute("listIndent")&&(t.removeAttribute("listIndent",i),o=!0),i.hasAttribute("listType")&&(t.removeAttribute("listType",i),o=!0),i.hasAttribute("listStyle")&&(t.removeAttribute("listStyle",i),o=!0);for(const t of Array.from(e.createRangeIn(i)).filter(e=>e.item.is("element","listItem")))r(t.previousPosition)}r(n.position.getShiftedBy(n.length))}else"remove"==n.type&&"listItem"==n.name?r(n.position):("attribute"==n.type&&"listIndent"==n.attributeKey||"attribute"==n.type&&"listType"==n.attributeKey)&&r(n.range.start);for(const e of n.values())s(e),a(e);return o;function r(e){const t=e.nodeBefore;if(t&&t.is("element","listItem")){let e=t;if(n.has(e))return;for(let t=e.previousSibling;t&&t.is("element","listItem");t=e.previousSibling)if(e=t,n.has(e))return;n.set(t,e)}else{const t=e.nodeAfter;t&&t.is("element","listItem")&&n.set(t,t)}}function s(e){let i=0,n=null;for(;e&&e.is("element","listItem");){const r=e.getAttribute("listIndent");if(r>i){let s;null===n?(n=r-i,s=i):(n>r&&(n=r),s=r-n),t.setAttribute("listIndent",s,e),o=!0}else n=null,i=e.getAttribute("listIndent")+1;e=e.nextSibling}}function a(e){let i=[],n=null;for(;e&&e.is("element","listItem");){const r=e.getAttribute("listIndent");if(n&&n.getAttribute("listIndent")>r&&(i=i.slice(0,r+1)),0!=r)if(i[r]){const n=i[r];e.getAttribute("listType")!=n&&(t.setAttribute("listType",n,e),o=!0)}else i[r]=e.getAttribute("listType");n=e,e=e.nextSibling}}}(e.model,t)),i.mapper.registerViewToModelLength("li",ap),t.mapper.registerViewToModelLength("li",ap),i.mapper.on("modelToViewPosition",tp(i.view)),i.mapper.on("viewToModelPosition",(n=e.model,(e,t)=>{const i=t.viewPosition,o=i.parent,r=t.mapper;if("ul"==o.name||"ol"==o.name){if(i.isAtEnd){const e=r.toModelElement(i.nodeBefore),o=r.getModelLength(i.nodeBefore);t.modelPosition=n.createPositionBefore(e).getShiftedBy(o)}else{const e=r.toModelElement(i.nodeAfter);t.modelPosition=n.createPositionBefore(e)}e.stop()}else if("li"==o.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=i.nodeBefore;for(;c&&rp(c);)a+=r.getModelLength(c),c=c.previousSibling;t.modelPosition=n.createPositionBefore(s).getShiftedBy(a),e.stop()}})),t.mapper.on("modelToViewPosition",tp(i.view)),e.conversion.for("editingDowncast").add(t=>{t.on("insert",Qm,{priority:"high"}),t.on("insert:listItem",Ym(e.model)),t.on("attribute:listType:listItem",Gm,{priority:"high"}),t.on("attribute:listType:listItem",Km,{priority:"low"}),t.on("attribute:listIndent:listItem",function(e){return(t,i,n)=>{if(!n.consumable.consume(i.item,"attribute:listIndent"))return;const o=n.mapper.toViewElement(i.item),r=n.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&Hm(r,a,a.nextSibling),op(i.attributeOldValue+1,i.range.start,c.start,o,n,e),Fm(i.item,o,n,e);for(const e of i.item.getChildren())n.consumable.consume(e,"insert")}}(e.model)),t.on("remove:listItem",function(e){return(t,i,n)=>{const o=n.mapper.toViewPosition(i.position).getLastMatchingPosition(e=>!e.item.is("element","li")).nodeAfter,r=n.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&Hm(r,a,a.nextSibling);op(n.mapper.toModelElement(o).getAttribute("listIndent")+1,i.position,c.start,o,n,e);for(const e of r.createRangeIn(l).getItems())n.mapper.unbindViewElement(e);t.stop()}}(e.model)),t.on("remove",Jm,{priority:"low"})}),e.conversion.for("dataDowncast").add(t=>{t.on("insert",Qm,{priority:"high"}),t.on("insert:listItem",Ym(e.model))}),e.conversion.for("upcast").add(e=>{e.on("element:ul",Xm,{priority:"high"}),e.on("element:ol",Xm,{priority:"high"}),e.on("element:li",ep,{priority:"high"}),e.on("element:li",Zm)}),e.model.on("insertContent",ip,{priority:"high"}),e.commands.add("numberedList",new Lm(e,"numbered")),e.commands.add("bulletedList",new Lm(e,"bulleted")),e.commands.add("indentList",new jm(e,"forward")),e.commands.add("outdentList",new jm(e,"backward"));const o=i.view.document;this.listenTo(o,"enter",(e,t)=>{const i=this.editor.model.document,n=i.selection.getLastPosition().parent;i.selection.isCollapsed&&"listItem"==n.name&&n.isEmpty&&(this.editor.execute("outdentList"),t.preventDefault(),e.stop())},{context:"li"}),this.listenTo(o,"delete",(e,t)=>{if("backward"!==t.direction)return;const i=this.editor.model.document.selection;if(!i.isCollapsed)return;const n=i.getFirstPosition();if(!n.isAtStart)return;const o=n.parent;if("listItem"!==o.name)return;o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),t.preventDefault(),e.stop())},{context:"li"});const r=e=>(t,i)=>{this.editor.commands.get(e).isEnabled&&(this.editor.execute(e),i())};e.keystrokes.set("Tab",r("indentList")),e.keystrokes.set("Shift+Tab",r("outdentList"))}afterInit(){const e=this.editor.commands,t=e.get("indent"),i=e.get("outdent");t&&t.registerChildCommand(e.get("indentList")),i&&i.registerChildCommand(e.get("outdentList"))}}function ap(e){let t=1;for(const i of e.getChildren())if("ul"==i.name||"ol"==i.name)for(const e of i.getChildren())t+=ap(e);return t}class cp extends Qe{static get pluginName(){return"ListUI"}init(){const e=this.editor.t;qm(this.editor,"numberedList",e("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),qm(this.editor,"bulletedList",e("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function lp(e,t){return e=>{e.on("attribute:url:media",i)};function i(i,n,o){if(!o.consumable.consume(n.item,i.name))return;const r=n.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(n.item),c=[...a.getChildren()].find(e=>e.getCustomProperty("media-content"));s.remove(c);const l=e.getMediaViewElement(s,r,t);s.insert(s.createPositionAt(a,0),l)}}function dp(e,t,i,n){const o=e.createContainerElement("figure",{class:"media"});return e.insert(e.createPositionAt(o,0),t.getMediaViewElement(e,i,n)),o}function up(e){const t=e.getSelectedElement();return t&&t.is("element","media")?t:null}function hp(e,t,i){e.change(n=>{const o=n.createElement("media",{url:t});e.insertContent(o,i),n.setSelection(o,"on")})}class fp extends Ze{refresh(){const e=this.editor.model,t=e.document.selection,i=e.schema,n=up(t);this.value=n?n.getAttribute("url"):null,this.isEnabled=function(e){const t=e.getSelectedElement();return!!t&&"media"===t.name}(t)||function(e,t){let i=Gu(e,t).parent;i.isEmpty&&!t.schema.isLimit(i)&&(i=i.parent);return t.schema.checkChild(i,"media")}(t,e)&&!Ku(t,i)}execute(e){const t=this.editor.model,i=t.document.selection,n=up(i);if(n)t.change(t=>{t.setAttribute("url",e,n)});else{const n=Gu(i,t);hp(t,e,n)}}}class gp{constructor(e,t){const i=t.providers,n=t.extraProviders||[],o=new Set(t.removeProviders),r=i.concat(n).filter(e=>{const t=e.name;return t?!o.has(t):(Object(c.b)("media-embed-no-provider-name",{provider:e}),!1)});this.locale=e,this.providerDefinitions=r}hasMedia(e){return!!this._getMedia(e)}getMediaViewElement(e,t,i){return this._getMedia(t).getViewElement(e,i)}_getMedia(e){if(!e)return new mp(this.locale);e=e.trim();for(const t of this.providerDefinitions){const i=t.html,n=en(t.url);for(const t of n){const n=this._getUrlMatches(e,t);if(n)return new mp(this.locale,e,n,i)}}return null}_getUrlMatches(e,t){let i=e.match(t);if(i)return i;let n=e.replace(/^https?:\/\//,"");return i=n.match(t),i||(n=n.replace(/^www\./,""),i=n.match(t),i||null)}}class mp{constructor(e,t,i,n){this.url=this._getValidUrl(t),this._t=e.t,this._match=i,this._previewRenderer=n}getViewElement(e,t){const i={};let n;if(t.renderForEditingView||t.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(i["data-oembed-url"]=this.url),t.renderForEditingView&&(i.class="ck-media__wrapper");const o=this._getPreviewHtml(t);n=e.createRawElement("div",i,(function(e){e.innerHTML=o}))}else this.url&&(i.url=this.url),n=e.createEmptyElement(t.elementName,i);return e.setCustomProperty("media-content",!0,n),n}_getPreviewHtml(e){return this._previewRenderer?this._previewRenderer(this._match):this.url&&e.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const e=new ad,t=new sd;e.text=this._t("Open media in new tab"),t.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',t.viewBox="0 0 64 42";return new Bl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[t]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},e]}]}).render().outerHTML}_getValidUrl(e){return e?e.match(/^https?/)?e:"https://"+e:null}}i(94);class pp extends Qe{static get pluginName(){return"MediaEmbedEditing"}constructor(e){super(e),e.config.define("mediaEmbed",{elementName:"oembed",providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new gp(e.locale,e.config.get("mediaEmbed"))}init(){const e=this.editor,t=e.model.schema,i=e.t,n=e.conversion,o=e.config.get("mediaEmbed.previewsInData"),r=e.config.get("mediaEmbed.elementName"),s=this.registry;e.commands.add("mediaEmbed",new fp(e)),t.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),n.for("dataDowncast").elementToElement({model:"media",view:(e,{writer:t})=>{const i=e.getAttribute("url");return dp(t,s,i,{elementName:r,renderMediaPreview:i&&o})}}),n.for("dataDowncast").add(lp(s,{elementName:r,renderMediaPreview:o})),n.for("editingDowncast").elementToElement({model:"media",view:(e,{writer:t})=>{const n=e.getAttribute("url");return function(e,t,i){return t.setCustomProperty("media",!0,e),Hu(e,t,{label:i})}(dp(t,s,n,{elementName:r,renderForEditingView:!0}),t,i("media widget"))}}),n.for("editingDowncast").add(lp(s,{elementName:r,renderForEditingView:!0})),n.for("upcast").elementToElement({view:e=>["oembed",r].includes(e.name)&&e.getAttribute("url")?{name:!0}:null,model:(e,{writer:t})=>{const i=e.getAttribute("url");if(s.hasMedia(i))return t.createElement("media",{url:i})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(e,{writer:t})=>{const i=e.getAttribute("data-oembed-url");if(s.hasMedia(i))return t.createElement("media",{url:i})}})}}const bp=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class wp extends Qe{static get requires(){return[bh,uf]}static get pluginName(){return"AutoMediaEmbed"}constructor(e){super(e),this._timeoutId=null,this._positionToInsert=null}init(){const e=this.editor,t=e.model.document;this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{const e=t.selection.getFirstRange(),i=Zc.fromPosition(e.start);i.stickiness="toPrevious";const n=Zc.fromPosition(e.end);n.stickiness="toNext",t.once("change:data",()=>{this._embedMediaBetweenPositions(i,n),i.detach(),n.detach()},{priority:"high"})}),e.commands.get("undo").on("execute",()=>{this._timeoutId&&(_r.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(e,t){const i=this.editor,n=i.plugins.get(pp).registry,o=new ba(e,t),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const e of r)e.item.is("$textProxy")&&(s+=e.item.data);if(s=s.trim(),!s.match(bp))return void o.detach();if(!n.hasMedia(s))return void o.detach();i.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=Zc.fromPosition(e),this._timeoutId=_r.window.setTimeout(()=>{i.model.change(e=>{let t;this._timeoutId=null,e.remove(o),o.detach(),"$graveyard"!==this._positionToInsert.root.rootName&&(t=this._positionToInsert),hp(i.model,s,t),this._positionToInsert.detach(),this._positionToInsert=null})},100)):o.detach()}}i(96);class kp extends jl{constructor(e,t){super(t);const i=t.t;this.focusTracker=new Rs,this.keystrokes=new Os,this.set("mediaURLInputValue",""),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(i("Save"),Cl,"ck-button-save"),this.saveButtonView.type="submit",this.saveButtonView.bind("isEnabled").to(this,"mediaURLInputValue",e=>!!e),this.cancelButtonView=this._createButton(i("Cancel"),Al,"ck-button-cancel","cancel"),this._focusables=new Vl,this._focusCycler=new dd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=e,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form","ck-responsive-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),Ll(this)}render(){super.render(),zl({view:this});[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element);const e=e=>e.stopPropagation();this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e),this.listenTo(this.urlInputView.element,"selectstart",(e,t)=>{t.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(e){this.urlInputView.fieldView.element.value=e.trim()}isValid(){this.resetFormStatus();for(const e of this._validators){const t=e(this);if(t)return this.urlInputView.errorText=t,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const e=this.locale.t,t=new jd(this.locale,Bd),i=t.fieldView;return this._urlInputViewInfoDefault=e("Paste the media URL in the input."),this._urlInputViewInfoTip=e("Tip: Paste the URL into the content to embed faster."),t.label=e("Media URL"),t.infoText=this._urlInputViewInfoDefault,i.on("input",()=>{t.infoText=i.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=i.element.value.trim()}),t}_createButton(e,t,i,n){const o=new cd(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}}class _p extends Qe{static get requires(){return[pp]}static get pluginName(){return"MediaEmbedUI"}init(){const e=this.editor,t=e.commands.get("mediaEmbed"),i=e.plugins.get(pp).registry;e.ui.componentFactory.add("mediaEmbed",n=>{const o=Id(n),r=new kp(function(e,t){return[t=>{if(!t.url.length)return e("The URL must not be empty.")},i=>{if(!t.hasMedia(i.url))return e("This media URL is not supported.")}]}(e.t,i),e.locale);return this._setUpDropdown(o,r,t,e),this._setUpForm(o,r,t),o})}_setUpDropdown(e,t,i){const n=this.editor,o=n.t,r=e.buttonView;function s(){n.editing.view.focus(),e.isOpen=!1}e.bind("isEnabled").to(i),e.panelView.children.add(t),r.set({label:o("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>',tooltip:!0}),r.on("open",()=>{t.disableCssTransitions(),t.url=i.value||"",t.urlInputView.fieldView.select(),t.focus(),t.enableCssTransitions()},{priority:"low"}),e.on("submit",()=>{t.isValid()&&(n.execute("mediaEmbed",t.url),s())}),e.on("change:isOpen",()=>t.resetFormStatus()),e.on("cancel",()=>s())}_setUpForm(e,t,i){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(i,"value"),t.urlInputView.bind("isReadOnly").to(i,"isEnabled",e=>!e)}}i(98);function vp(e,t){if(!e.childCount)return;const i=new _u(e.document),n=function(e,t){const i=t.createRangeIn(e),n=new gn({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const e of i)if("elementStart"===e.type&&n.match(e.item)){const t=Ap(e.item);o.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return o}(e,i);if(!n.length)return;let o=null,r=1;n.forEach((e,s)=>{const a=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const i=t.element.previousSibling;if(!i)return!0;return n=i,!(n.is("element","ol")||n.is("element","ul"));var n}(n[s-1],e),c=a?null:n[s-1],l=(u=e,(d=c)?u.indent-d.indent:u.indent-1);var d,u;if(a&&(o=null,r=1),!o||0!==l){const n=function(e,t){const i=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),n=/mso-level-number-format:([^;]{0,100});/gi,o=i.exec(t);let r="decimal",s="ol";if(o&&o[1]){const t=n.exec(o[1]);if(t&&t[1]&&(r=t[1].trim(),s="bullet"!==r&&"image"!==r?"ol":"ul"),"bullet"===r){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;const t=e.getChild(0).getChild(0);if(t.is("$text"))return t;return t.getChild(0)}(e);if(!t)return null;const i=t._data;if("o"===i)return"circle";if("·"===i)return"disc";if("§"===i)return"square";return null}(e.element);t&&(r=t)}}return{type:s,style:yp(r)}}(e,t);if(o){if(e.indent>r){const e=o.getChild(o.childCount-1),t=e.getChild(e.childCount-1);o=xp(n,t,i),r+=1}else if(e.indent<r){const t=r-e.indent;o=function(e,t){const i=e.getAncestors({parentFirst:!0});let n=null,o=0;for(const e of i)if("ul"!==e.name&&"ol"!==e.name||o++,o===t){n=e;break}return n}(o,t),r=parseInt(e.indent)}}else o=xp(n,e.element,i);e.indent<=r&&(o.is("element",n.type)||(o=i.rename(n.type,o)))}const h=function(e,t){return function(e,t){const i=new gn({name:"span",styles:{"mso-list":"Ignore"}}),n=t.createRangeIn(e);for(const e of n)"elementStart"===e.type&&i.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,i);i.appendChild(h,o)})}function yp(e){switch(e){case"arabic-leading-zero":return"decimal-leading-zero";case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function xp(e,t,i){const n=t.parent,o=i.createElement(e.type),r=n.getChildIndex(t)+1;return i.insertChild(r,o,n),e.style&&i.setStyle("list-style-type",e.style,o),o}function Ap(e){const t={},i=e.getStyle("mso-list");if(i){const e=i.match(/(^|\s{1,100})l(\d+)/i),n=i.match(/\s{0,100}lfo(\d+)/i),o=i.match(/\s{0,100}level(\d+)/i);e&&n&&o&&(t.id=e[2],t.order=n[1],t.indent=o[1])}return t}const Cp=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class Tp{constructor(e){this.document=e}isActive(e){return Cp.test(e)}execute(e){const t=new _u(this.document);!function(e,t){for(const i of e.getChildren())if(i.is("element","b")&&"normal"===i.getStyle("font-weight")){const n=e.getChildIndex(i);t.remove(i),t.insertChild(n,i.getChildren(),e)}}(e.content,t),function(e,t){for(const i of t.createRangeIn(e)){const e=i.item;if(e.is("element","li")){const i=e.getChild(0);i&&i.is("element","p")&&t.unwrapElement(i)}}}(e.content,t)}}function Ep(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length))}function Pp(e,t){const i=new DOMParser,n=function(e){return Ep(Ep(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t=e.indexOf("</body>");if(t<0)return e;const i=e.indexOf("</html>",t+"</body>".length);return e.substring(0,t+"</body>".length)+(i>=0?e.substring(i):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),o=i.parseFromString(n,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach(e=>{const t=e.innerText.length||0;e.innerHTML=Array(t+1).join("  ").substr(0,t)})}(o);const r=o.body.innerHTML,s=function(e,t){const i=new vo(t),n=new Tr(i,{blockFillerMode:"nbsp"}),o=e.createDocumentFragment(),r=e.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);return n.domToView(o)}(o,t),a=function(e){const t=[],i=[],n=Array.from(e.getElementsByTagName("style"));for(const e of n)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),i.push(e.innerHTML));return{styles:t,stylesString:i.join(" ")}}(o);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function Sp(e,t){if(!e.childCount)return;const i=new _u;!function(e,t,i){const n=i.createRangeIn(t),o=new gn({name:"img"}),r=[];for(const t of n)if(o.match(t.item)){const i=t.item,n=i.getAttribute("v:shapes")?i.getAttribute("v:shapes").split(" "):[];n.length&&n.every(t=>e.indexOf(t)>-1)?r.push(i):i.getAttribute("src")||r.push(i)}for(const e of r)i.remove(e)}(function(e,t){const i=t.createRangeIn(e),n=new gn({name:/v:(.+)/}),o=[];for(const e of i){const t=e.item,i=t.previousSibling&&t.previousSibling.name||null;n.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==i&&o.push(e.item.getAttribute("id"))}return o}(e,i),e,i),function(e,t){const i=t.createRangeIn(e),n=new gn({name:/v:(.+)/}),o=[];for(const e of i)n.match(e.item)&&o.push(e.item);for(const e of o)t.remove(e)}(e,i);const n=function(e,t){const i=t.createRangeIn(e),n=new gn({name:"img"}),o=[];for(const e of i)n.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&o.push(e.item);return o}(e,i);n.length&&function(e,t,i){if(e.length===t.length)for(let o=0;o<e.length;o++){const r=`data:${t[o].type};base64,${n=t[o].hex,btoa(n.match(/\w{2}/g).map(e=>String.fromCharCode(parseInt(e,16))).join(""))}`;i.setAttribute("src",r,e[o])}var n}(n,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,i=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),n=e.match(i),o=[];if(n)for(const e of n){let i=!1;e.includes("\\pngblip")?i="image/png":e.includes("\\jpegblip")&&(i="image/jpeg"),i&&o.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:i})}return o}(t),i)}const Mp=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,Ip=/xmlns:o="urn:schemas-microsoft-com/i;class Np{constructor(e){this.document=e}isActive(e){return Mp.test(e)||Ip.test(e)}execute(e){const{body:t,stylesString:i}=Pp(e.dataTransfer.getData("text/html"),this.document.stylesProcessor);vp(t,i),Sp(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function Rp(e,t,i,n,o=1){t>o?n.setAttribute(e,t,i):n.removeAttribute(e,i)}function Op(e,t,i={}){const n=e.createElement("tableCell",i);return e.insertElement("paragraph",n),e.insert(n,t),n}function Dp(e,t){const i=t.parent.parent,n=parseInt(i.getAttribute("headingColumns")||0),{column:o}=e.getCellLocation(t);return!!n&&o<n}function Lp(){return e=>{e.on("element:table",(e,t,i)=>{const n=t.viewItem;if(!i.consumable.test(n,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(e){const t={headingRows:0,headingColumns:0},i=[],n=[];let o;for(const r of Array.from(e.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const e=Array.from(r.getChildren()).filter(e=>e.is("element","tr"));for(const r of e)if("thead"===r.parent.name&&r.parent===o)t.headingRows++,i.push(r);else{n.push(r);const e=Vp(r);e>t.headingColumns&&(t.headingColumns=e)}}return t.rows=[...i,...n],t}(n),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=i.writer.createElement("table",a);if(i.safeInsert(c,t.modelCursor)){if(i.consumable.consume(n,{name:!0}),o.forEach(e=>i.convertItem(e,i.writer.createPositionAt(c,"end"))),c.isEmpty){const e=i.writer.createElement("tableRow");i.writer.insert(e,i.writer.createPositionAt(c,"end")),Op(i.writer,i.writer.createPositionAt(e,"end"))}i.updateConversionResult(c,t)}})}}function zp(e){return t=>{t.on("element:"+e,(e,t,i)=>{if(t.modelRange&&t.viewItem.isEmpty){const e=t.modelRange.start.nodeAfter,n=i.writer.createPositionAt(e,0);i.writer.insertElement("paragraph",n)}},{priority:"low"})}}function Vp(e){let t=0,i=0;const n=Array.from(e.getChildren()).filter(e=>"th"===e.name||"td"===e.name);for(;i<n.length&&"th"===n[i].name;){const e=n[i];t+=parseInt(e.getAttribute("colspan")||1),i++}return t}class jp{constructor(e,t={}){this._table=e,this._startRow=void 0!==t.row?t.row:t.startRow||0,this._endRow=void 0!==t.row?t.row:t.endRow,this._startColumn=void 0!==t.column?t.column:t.startColumn||0,this._endColumn=void 0!==t.column?t.column:t.endColumn,this._includeAllSlots=!!t.includeAllSlots,this._skipRows=new Set,this._row=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const e=this._table.getChild(this._row);if(!e||this._isOverEndRow())return{done:!0};if(this._isOverEndColumn())return this._advanceToNextRow();let t=null;const i=this._getSpanned();if(i)this._includeAllSlots&&!this._shouldSkipSlot()&&(t=this._formatOutValue(i.cell,i.row,i.column));else{const i=e.getChild(this._cellIndex);if(!i)return this._advanceToNextRow();const n=parseInt(i.getAttribute("colspan")||1),o=parseInt(i.getAttribute("rowspan")||1);(n>1||o>1)&&this._recordSpans(i,o,n),this._shouldSkipSlot()||(t=this._formatOutValue(i)),this._nextCellAtColumn=this._column+n}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,t||this.next()}skipRow(e){this._skipRows.add(e)}_advanceToNextRow(){return this._row++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return void 0!==this._endRow&&this._row>this._endRow}_isOverEndColumn(){return void 0!==this._endColumn&&this._column>this._endColumn}_formatOutValue(e,t=this._row,i=this._column){return{done:!1,value:new Bp(this,e,t,i)}}_shouldSkipSlot(){const e=this._skipRows.has(this._row),t=this._row<this._startRow,i=this._column<this._startColumn,n=void 0!==this._endColumn&&this._column>this._endColumn;return e||t||i||n}_getSpanned(){const e=this._spannedCells.get(this._row);return e&&e.get(this._column)||null}_recordSpans(e,t,i){const n={cell:e,row:this._row,column:this._column};for(let e=this._row;e<this._row+t;e++)for(let t=this._column;t<this._column+i;t++)e==this._row&&t==this._column||this._markSpannedCell(e,t,n)}_markSpannedCell(e,t,i){this._spannedCells.has(e)||this._spannedCells.set(e,new Map);this._spannedCells.get(e).set(t,i)}}class Bp{constructor(e,t,i,n){this.cell=t,this.row=e._row,this.column=e._column,this.cellAnchorRow=i,this.cellAnchorColumn=n,this._cellIndex=e._cellIndex,this._table=e._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function Fp(e={}){return t=>t.on("insert:table",(t,i,n)=>{const o=i.item;if(!n.consumable.consume(o,"insert"))return;n.consumable.consume(o,"attribute:headingRows:table"),n.consumable.consume(o,"attribute:headingColumns:table");const r=e&&e.asWidget,s=n.writer.createContainerElement("figure",{class:"table"}),a=n.writer.createContainerElement("table");let c;var l,d;n.writer.insert(n.writer.createPositionAt(s,0),a),r&&(l=s,(d=n.writer).setCustomProperty("table",!0,l),c=Hu(l,d,{hasSelectionHandle:!0}));const u=new jp(o),h={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},f=new Map;for(const t of u){const{row:i,cell:r}=t,s=o.getChild(i),c=f.get(i)||$p(a,s,i,h,n);f.set(i,c),n.consumable.consume(r,"insert");qp(t,h,n.writer.createPositionAt(c,"end"),n,e)}for(const e of o.getChildren()){const t=e.index;f.has(t)||f.set(t,$p(a,e,t,h,n))}const g=n.mapper.toViewPosition(i.range.start);n.mapper.bindElements(o,r?c:s),n.writer.insert(g,r?c:s)})}function Hp(e,t){const{writer:i}=t;if(e.parent.is("element","tableCell"))return Up(e)?i.createContainerElement("span",{style:"display:inline-block"}):i.createContainerElement("p")}function Up(e){return 1===e.parent.childCount&&!Qp(e)}function Wp(e,t,i){const{cell:n}=e,o=Yp(e,t),r=i.mapper.toViewElement(n);r&&r.name!==o&&function(e,t,i){const n=i.writer,o=i.mapper.toViewElement(e),r=Yu(n.createEditableElement(t,o.getAttributes()),n);qu(r,n,(e,t,i)=>i.addClass(en(t.classes),e),(e,t,i)=>i.removeClass(en(t.classes),e)),n.insert(n.createPositionAfter(o),r),n.move(n.createRangeIn(o),n.createPositionAt(r,0)),n.remove(n.createRangeOn(o)),i.mapper.unbindViewElement(o),i.mapper.bindElements(e,r)}(n,o,i)}function qp(e,t,i,n,o){const r=o&&o.asWidget,s=Yp(e,t),a=r?Yu(n.writer.createEditableElement(s),n.writer):n.writer.createContainerElement(s);r&&qu(a,n.writer,(e,t,i)=>i.addClass(en(t.classes),e),(e,t,i)=>i.removeClass(en(t.classes),e));const c=e.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(n.writer.insert(i,a),n.mapper.bindElements(c,a),!r&&d&&!Qp(l)){const e=c.getChild(0);n.consumable.consume(e,"insert"),n.mapper.bindElements(e,a)}}function $p(e,t,i,n,o){o.consumable.consume(t,"insert");const r=t.isEmpty?o.writer.createEmptyElement("tr"):o.writer.createContainerElement("tr");o.mapper.bindElements(t,r);const s=n.headingRows,a=function(e,t,i){const n=Gp(e,t);return n||function(e,t,i){const n=i.writer.createContainerElement(e),o=i.writer.createPositionAt(t,"tbody"==e?"end":0);return i.writer.insert(o,n),n}(e,t,i)}(function(e,t){return e<t.headingRows?"thead":"tbody"}(i,n),e,o),c=s>0&&i>=s?i-s:i,l=o.writer.createPositionAt(a,c);return o.writer.insert(l,r),r}function Yp(e,t){const{row:i,column:n}=e,{headingColumns:o,headingRows:r}=t;if(r&&r>i)return"th";return o&&o>n?"th":"td"}function Gp(e,t){for(const i of t.getChildren())if(i.name==e)return i}function Kp(e,t,i){const n=Gp(e,t);n&&0===n.childCount&&i.writer.remove(i.writer.createRangeOn(n))}function Qp(e){return!![...e.getAttributeKeys()].length}class Jp extends Ze{refresh(){const e=this.editor.model,t=e.document.selection,i=e.schema;this.isEnabled=function(e,t){const i=e.getFirstPosition().parent,n=i===i.root?i:i.parent;return t.checkChild(n,"table")}(t,i)&&!Ku(t,i)}execute(e={}){const t=this.editor.model,i=t.document.selection,n=this.editor.plugins.get("TableUtils"),o=Gu(i,t);t.change(i=>{const r=n.createTable(i,e);t.insertContent(r,o),i.setSelection(i.createPositionAt(r.getNodeByPath([0,0,0]),0))})}}function Zp(e){const t=[];for(const i of ob(e.getRanges())){const e=i.getContainedElement();e&&e.is("element","tableCell")&&t.push(e)}return t}function Xp(e){const t=[];for(const i of e.getRanges()){const e=i.start.findAncestor("tableCell");e&&t.push(e)}return t}function eb(e){const t=Zp(e);return t.length?t:Xp(e)}function tb(e){return rb(e.map(e=>e.parent.index))}function ib(e){const t=e[0].findAncestor("table");return rb([...new jp(t)].filter(t=>e.includes(t.cell)).map(e=>e.column))}function nb(e,t){if(e.length<2||!function(e){const t=e[0].findAncestor("table"),i=tb(e),n=parseInt(t.getAttribute("headingRows")||0);if(!ab(i,n))return!1;const o=parseInt(t.getAttribute("headingColumns")||0);return ab(ib(e),o)}(e))return!1;const i=new Set,n=new Set;let o=0;for(const r of e){const{row:e,column:s}=t.getCellLocation(r),a=parseInt(r.getAttribute("rowspan")||1),c=parseInt(r.getAttribute("colspan")||1);i.add(e),n.add(s),a>1&&i.add(e+a-1),c>1&&n.add(s+c-1),o+=a*c}return function(e,t){const i=Array.from(e.values()),n=Array.from(t.values()),o=Math.max(...i),r=Math.min(...i),s=Math.max(...n),a=Math.min(...n);return(o-r+1)*(s-a+1)}(i,n)==o}function ob(e){return Array.from(e).sort(sb)}function rb(e){const t=e.sort((e,t)=>e-t);return{first:t[0],last:t[t.length-1]}}function sb(e,t){const i=e.start,n=t.start;return i.isBefore(n)?-1:1}function ab({first:e,last:t},i){return e<i===t<i}class cb extends Ze{constructor(e,t={}){super(e),this.order=t.order||"below"}refresh(){const e=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!e}execute(){const e=this.editor,t=e.model.document.selection,i=e.plugins.get("TableUtils"),n="above"===this.order,o=eb(t),r=tb(o),s=n?r.first:r.last,a=o[0].findAncestor("table");i.insertRows(a,{at:n?s:s+1,copyStructureFromAbove:!n})}}class lb extends Ze{constructor(e,t={}){super(e),this.order=t.order||"right"}refresh(){const e=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!e}execute(){const e=this.editor,t=e.model.document.selection,i=e.plugins.get("TableUtils"),n="left"===this.order,o=eb(t),r=ib(o),s=n?r.first:r.last,a=o[0].findAncestor("table");i.insertColumns(a,{columns:1,at:n?s:s+1})}}class db extends Ze{constructor(e,t={}){super(e),this.direction=t.direction||"horizontally"}refresh(){const e=eb(this.editor.model.document.selection);this.isEnabled=1===e.length}execute(){const e=eb(this.editor.model.document.selection)[0],t="horizontally"===this.direction,i=this.editor.plugins.get("TableUtils");t?i.splitCellHorizontally(e,2):i.splitCellVertically(e,2)}}function ub(e,t,i){const{startRow:n,startColumn:o,endRow:r,endColumn:s}=t,a=i.createElement("table"),c=r-n+1;for(let e=0;e<c;e++)i.insertElement("tableRow",a,"end");const l=[...new jp(e,{startRow:n,endRow:r,startColumn:o,endColumn:s,includeAllSlots:!0})];for(const{row:e,column:t,cell:c,isAnchor:d,cellAnchorRow:u,cellAnchorColumn:h}of l){const l=e-n,f=a.getChild(l);if(d){const n=i.cloneElement(c);i.append(n,f),pb(n,e,t,r,s,i)}else(u<n||h<o)&&Op(i,i.createPositionAt(f,"end"))}return function(e,t,i,n,o){const r=parseInt(t.getAttribute("headingRows")||0);if(r>0){Rp("headingRows",r-i,e,o,0)}const s=parseInt(t.getAttribute("headingColumns")||0);if(s>0){Rp("headingColumns",s-n,e,o,0)}}(a,e,n,o,i),a}function hb(e,t,i=0){const n=[],o=new jp(e,{startRow:i,endRow:t-1});for(const e of o){const{row:i,cellHeight:o}=e,r=i+o-1;i<t&&t<=r&&n.push(e)}return n}function fb(e,t,i){const n=e.parent,o=n.parent,r=n.index,s=t-r,a={},c=parseInt(e.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);const l=parseInt(e.getAttribute("colspan")||1);l>1&&(a.colspan=l);const d=r+s,u=[...new jp(o,{startRow:r,endRow:d,includeAllSlots:!0})];let h,f=null;for(const t of u){const{row:n,column:o,cell:r}=t;r===e&&void 0===h&&(h=o),void 0!==h&&h===o&&n===d&&(f=Op(i,t.getPositionBefore(),a))}return Rp("rowspan",s,e,i),f}function gb(e,t){const i=[],n=new jp(e);for(const e of n){const{column:n,cellWidth:o}=e,r=n+o-1;n<t&&t<=r&&i.push(e)}return i}function mb(e,t,i,n){const o=i-t,r={},s=parseInt(e.getAttribute("colspan"))-o;s>1&&(r.colspan=s);const a=parseInt(e.getAttribute("rowspan")||1);a>1&&(r.rowspan=a);const c=Op(n,n.createPositionAfter(e),r);return Rp("colspan",o,e,n),c}function pb(e,t,i,n,o,r){const s=parseInt(e.getAttribute("colspan")||1),a=parseInt(e.getAttribute("rowspan")||1);if(i+s-1>o){Rp("colspan",o-i+1,e,r,1)}if(t+a-1>n){Rp("rowspan",n-t+1,e,r,1)}}function bb(e,t){const i=t.getColumns(e),n=new Array(i).fill(0);for(const{column:t}of new jp(e))n[t]++;const o=n.reduce((e,t,i)=>t?e:[...e,i],[]);if(o.length>0){const i=o[o.length-1];return t.removeColumns(e,{at:i}),!0}return!1}function wb(e,t){const i=[];for(let t=0;t<e.childCount;t++){e.getChild(t).isEmpty&&i.push(t)}if(i.length>0){const n=i[i.length-1];return t.removeRows(e,{at:n}),!0}return!1}function kb(e,t){bb(e,t)||wb(e,t)}function _b(e,t){const i=Array.from(new jp(e,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(i.every(({cellHeight:e})=>1===e))return t.lastRow;const n=i[0].cellHeight-1;return t.lastRow+n}function vb(e,t){const i=Array.from(new jp(e,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(i.every(({cellWidth:e})=>1===e))return t.lastColumn;const n=i[0].cellWidth-1;return t.lastColumn+n}class yb extends Ze{constructor(e,t){super(e),this.direction=t.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const e=this._getMergeableCell();this.value=e,this.isEnabled=!!e}execute(){const e=this.editor.model,t=Xp(e.document.selection)[0],i=this.value,n=this.direction;e.change(e=>{const o="right"==n||"down"==n,r=o?t:i,s=o?i:t,a=s.parent;!function(e,t,i){xb(e)||(xb(t)&&i.remove(i.createRangeIn(t)),i.move(i.createRangeIn(e),i.createPositionAt(t,"end")));i.remove(e)}(s,r,e);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(t.getAttribute(c)||1),d=parseInt(i.getAttribute(c)||1);e.setAttribute(c,l+d,r),e.setSelection(e.createRangeIn(r));const u=this.editor.plugins.get("TableUtils");kb(a.findAncestor("table"),u)})}_getMergeableCell(){const e=Xp(this.editor.model.document.selection)[0];if(!e)return;const t=this.editor.plugins.get("TableUtils"),i=this.isHorizontal?function(e,t,i){const n=e.parent.parent,o="right"==t?e.nextSibling:e.previousSibling,r=(n.getAttribute("headingColumns")||0)>0;if(!o)return;const s="right"==t?e:o,a="right"==t?o:e,{column:c}=i.getCellLocation(s),{column:l}=i.getCellLocation(a),d=parseInt(s.getAttribute("colspan")||1),u=Dp(i,s),h=Dp(i,a);if(r&&u!=h)return;return c+d===l?o:void 0}(e,this.direction,t):function(e,t){const i=e.parent,n=i.parent,o=n.getChildIndex(i);if("down"==t&&o===n.childCount-1||"up"==t&&0===o)return;const r=parseInt(e.getAttribute("rowspan")||1),s=n.getAttribute("headingRows")||0,a="down"==t&&o+r===s,c="up"==t&&o===s;if(s&&(a||c))return;const l=parseInt(e.getAttribute("rowspan")||1),d="down"==t?o+l:o,u=[...new jp(n,{endRow:d})],h=u.find(t=>t.cell===e).column,f=u.find(({row:e,cellHeight:i,column:n})=>n===h&&("down"==t?e===d:d===e+i));return f&&f.cell}(e,this.direction);if(!i)return;const n=this.isHorizontal?"rowspan":"colspan",o=parseInt(e.getAttribute(n)||1);return parseInt(i.getAttribute(n)||1)===o?i:void 0}}function xb(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}class Ab extends Ze{refresh(){const e=eb(this.editor.model.document.selection),t=e[0];if(t){const i=t.findAncestor("table"),n=this.editor.plugins.get("TableUtils").getRows(i)-1,o=tb(e),r=0===o.first&&o.last===n;this.isEnabled=!r}else this.isEnabled=!1}execute(){const e=this.editor.model,t=eb(e.document.selection),i=tb(t),n=t[0],o=n.findAncestor("table"),r=this.editor.plugins.get("TableUtils").getCellLocation(n).column;e.change(e=>{const t=i.last-i.first+1;this.editor.plugins.get("TableUtils").removeRows(o,{at:i.first,rows:t});const n=function(e,t,i){const n=e.getChild(t)||e.getChild(e.childCount-1);let o=n.getChild(0),r=0;for(const e of n.getChildren()){if(r>i)return o;o=e,r+=parseInt(e.getAttribute("colspan")||1)}return o}(o,i.first,r);e.setSelection(e.createPositionAt(n,0))})}}class Cb extends Ze{refresh(){const e=eb(this.editor.model.document.selection),t=e[0];if(t){const i=t.findAncestor("table"),n=this.editor.plugins.get("TableUtils").getColumns(i),{first:o,last:r}=ib(e);this.isEnabled=r-o<n-1}else this.isEnabled=!1}execute(){const[e,t]=function(e){const t=eb(e),i=t[0],n=t.pop(),o=[i,n];return i.isBefore(n)?o:o.reverse()}(this.editor.model.document.selection),i=e.parent.parent,n=[...new jp(i)],o={first:n.find(t=>t.cell===e).column,last:n.find(e=>e.cell===t).column},r=function(e,t,i,n){return parseInt(i.getAttribute("colspan")||1)>1?i:t.previousSibling||i.nextSibling?i.nextSibling||t.previousSibling:n.first?e.reverse().find(({column:e})=>e<n.first).cell:e.reverse().find(({column:e})=>e>n.last).cell}(n,e,t,o);this.editor.model.change(e=>{const t=o.last-o.first+1;this.editor.plugins.get("TableUtils").removeColumns(i,{at:o.first,columns:t}),e.setSelection(e.createPositionAt(r,0))})}}class Tb extends Ze{refresh(){const e=eb(this.editor.model.document.selection),t=e.length>0;this.isEnabled=t,this.value=t&&e.every(e=>this._isInHeading(e,e.parent.parent))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.model,i=eb(t.document.selection),n=i[0].findAncestor("table"),{first:o,last:r}=tb(i),s=this.value?o:r+1,a=n.getAttribute("headingRows")||0;t.change(e=>{if(s){const t=hb(n,s,s>a?a:0);for(const{cell:i}of t)fb(i,s,e)}Rp("headingRows",s,n,e,0)})}_isInHeading(e,t){const i=parseInt(t.getAttribute("headingRows")||0);return!!i&&e.parent.index<i}}class Eb extends Ze{refresh(){const e=eb(this.editor.model.document.selection),t=this.editor.plugins.get("TableUtils"),i=e.length>0;this.isEnabled=i,this.value=i&&e.every(e=>Dp(t,e))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.model,i=eb(t.document.selection),n=i[0].findAncestor("table"),{first:o,last:r}=ib(i),s=this.value?o:r+1;t.change(e=>{if(s){const t=gb(n,s);for(const{cell:i,column:n}of t)mb(i,n,s,e)}Rp("headingColumns",s,n,e,0)})}}class Pb extends Qe{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(e){const t=e.parent,i=t.parent,n=i.getChildIndex(t),o=new jp(i,{row:n});for(const{cell:t,row:i,column:n}of o)if(t===e)return{row:i,column:n}}createTable(e,t){const i=e.createElement("table");return Sb(e,i,0,parseInt(t.rows)||2,parseInt(t.columns)||2),t.headingRows&&Rp("headingRows",t.headingRows,i,e,0),t.headingColumns&&Rp("headingColumns",t.headingColumns,i,e,0),i}insertRows(e,t={}){const i=this.editor.model,n=t.at||0,o=t.rows||1,r=void 0!==t.copyStructureFromAbove,s=t.copyStructureFromAbove?n-1:n,a=this.getRows(e),c=this.getColumns(e);i.change(t=>{const i=e.getAttribute("headingRows")||0;if(i>n&&Rp("headingRows",i+o,e,t,0),!r&&(0===n||n===a))return void Sb(t,e,n,o,c);const l=r?Math.max(n,s):n,d=new jp(e,{endRow:l}),u=new Array(c).fill(1);for(const{row:e,column:i,cellHeight:a,cellWidth:c,cell:l}of d){const d=e+a-1,h=e<=s&&s<=d;e<n&&n<=d?(t.setAttribute("rowspan",a+o,l),u[i]=-c):r&&h&&(u[i]=c)}for(let i=0;i<o;i++){const i=t.createElement("tableRow");t.insert(i,e,n);for(let e=0;e<u.length;e++){const n=u[e],o=t.createPositionAt(i,"end");n>0&&Op(t,o,n>1?{colspan:n}:null),e+=Math.abs(n)-1}}})}insertColumns(e,t={}){const i=this.editor.model,n=t.at||0,o=t.columns||1;i.change(t=>{const i=e.getAttribute("headingColumns");n<i&&t.setAttribute("headingColumns",i+o,e);const r=this.getColumns(e);if(0===n||r===n){for(const i of e.getChildren())Mb(o,t,t.createPositionAt(i,n?"end":0));return}const s=new jp(e,{column:n,includeAllSlots:!0});for(const e of s){const{row:i,cell:r,cellAnchorColumn:a,cellAnchorRow:c,cellWidth:l,cellHeight:d}=e;if(a<n){t.setAttribute("colspan",l+o,r);const e=c+d-1;for(let t=i;t<=e;t++)s.skipRow(t)}else Mb(o,t,e.getPositionBefore())}})}removeRows(e,t){const i=this.editor.model,n=t.rows||1,o=t.at,r=o+n-1;i.change(t=>{const{cellsToMove:i,cellsToTrim:n}=function(e,t,i){const n=new Map,o=[];for(const{row:r,column:s,cellHeight:a,cell:c}of new jp(e,{endRow:i})){const e=r+a-1;if(r>=t&&r<=i&&e>i){const e=a-(i-r+1);n.set(s,{cell:c,rowspan:e})}if(r<t&&e>=t){let n;n=e>=i?i-t+1:e-t+1,o.push({cell:c,rowspan:a-n})}}return{cellsToMove:n,cellsToTrim:o}}(e,o,r);if(i.size){!function(e,t,i,n){const o=[...new jp(e,{includeAllSlots:!0,row:t})],r=e.getChild(t);let s;for(const{column:e,cell:t,isAnchor:a}of o)if(i.has(e)){const{cell:t,rowspan:o}=i.get(e),a=s?n.createPositionAfter(s):n.createPositionAt(r,0);n.move(n.createRangeOn(t),a),Rp("rowspan",o,t,n),s=t}else a&&(s=t)}(e,r+1,i,t)}for(let i=r;i>=o;i--)t.remove(e.getChild(i));for(const{rowspan:e,cell:i}of n)Rp("rowspan",e,i,t);!function(e,t,i,n){const o=e.getAttribute("headingRows")||0;if(t<o){Rp("headingRows",i<o?o-(i-t+1):t,e,n,0)}}(e,o,r,t),bb(e,this)||wb(e,this)})}removeColumns(e,t){const i=this.editor.model,n=t.at,o=t.columns||1,r=t.at+o-1;i.change(t=>{!function(e,t,i){const n=e.getAttribute("headingColumns")||0;if(n&&t.first<n){const o=Math.min(n-1,t.last)-t.first+1;i.setAttribute("headingColumns",n-o,e)}}(e,{first:n,last:r},t);for(let i=r;i>=n;i--)for(const{cell:n,column:o,cellWidth:r}of[...new jp(e)])o<=i&&r>1&&o+r>i?Rp("colspan",r-1,n,t):o===i&&t.remove(n);wb(e,this)||bb(e,this)})}splitCellVertically(e,t=2){const i=this.editor.model,n=e.parent.parent,o=parseInt(e.getAttribute("rowspan")||1),r=parseInt(e.getAttribute("colspan")||1);i.change(i=>{if(r>1){const{newCellsSpan:n,updatedSpan:s}=Ib(r,t);Rp("colspan",s,e,i);const a={};n>1&&(a.colspan=n),o>1&&(a.rowspan=o);Mb(r>t?t-1:r-1,i,i.createPositionAfter(e),a)}if(r<t){const s=t-r,a=[...new jp(n)],{column:c}=a.find(({cell:t})=>t===e),l=a.filter(({cell:t,cellWidth:i,column:n})=>t!==e&&n===c||n<c&&n+i>c);for(const{cell:e,cellWidth:t}of l)i.setAttribute("colspan",t+s,e);const d={};o>1&&(d.rowspan=o),Mb(s,i,i.createPositionAfter(e),d);const u=n.getAttribute("headingColumns")||0;u>c&&Rp("headingColumns",u+s,n,i)}})}splitCellHorizontally(e,t=2){const i=this.editor.model,n=e.parent,o=n.parent,r=o.getChildIndex(n),s=parseInt(e.getAttribute("rowspan")||1),a=parseInt(e.getAttribute("colspan")||1);i.change(i=>{if(s>1){const n=[...new jp(o,{startRow:r,endRow:r+s-1,includeAllSlots:!0})],{newCellsSpan:c,updatedSpan:l}=Ib(s,t);Rp("rowspan",l,e,i);const{column:d}=n.find(({cell:t})=>t===e),u={};c>1&&(u.rowspan=c),a>1&&(u.colspan=a);for(const e of n){const{column:t,row:n}=e,o=t===d,s=(n+r+l)%c==0;n>=r+l&&o&&s&&Mb(1,i,e.getPositionBefore(),u)}}if(s<t){const n=t-s,c=[...new jp(o,{startRow:0,endRow:r})];for(const{cell:t,cellHeight:o,row:s}of c)if(t!==e&&s+o>r){const e=o+n;i.setAttribute("rowspan",e,t)}const l={};a>1&&(l.colspan=a),Sb(i,o,r+1,n,1,l);const d=o.getAttribute("headingRows")||0;d>r&&Rp("headingRows",d+n,o,i)}})}getColumns(e){return[...e.getChild(0).getChildren()].reduce((e,t)=>e+parseInt(t.getAttribute("colspan")||1),0)}getRows(e){return e.childCount}}function Sb(e,t,i,n,o,r={}){for(let s=0;s<n;s++){const n=e.createElement("tableRow");e.insert(n,t,i),Mb(o,e,e.createPositionAt(n,"end"),r)}}function Mb(e,t,i,n={}){for(let o=0;o<e;o++)Op(t,i,n)}function Ib(e,t){if(e<t)return{newCellsSpan:1,updatedSpan:1};const i=Math.floor(e/t);return{newCellsSpan:i,updatedSpan:e-i*t+i}}class Nb extends Ze{refresh(){const e=Zp(this.editor.model.document.selection);this.isEnabled=nb(e,this.editor.plugins.get(Pb))}execute(){const e=this.editor.model,t=this.editor.plugins.get(Pb);e.change(i=>{const n=Zp(e.document.selection),o=n.shift(),{mergeWidth:r,mergeHeight:s}=function(e,t,i){let n=0,o=0;for(const e of t){const{row:t,column:r}=i.getCellLocation(e);n=Db(e,r,n,"colspan"),o=Db(e,t,o,"rowspan")}const{row:r,column:s}=i.getCellLocation(e);return{mergeWidth:n-s,mergeHeight:o-r}}(o,n,t);Rp("colspan",r,o,i),Rp("rowspan",s,o,i);for(const e of n)Rb(e,o,i);kb(o.findAncestor("table"),t),i.setSelection(o,"in")})}}function Rb(e,t,i){Ob(e)||(Ob(t)&&i.remove(i.createRangeIn(t)),i.move(i.createRangeIn(e),i.createPositionAt(t,"end"))),i.remove(e)}function Ob(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}function Db(e,t,i,n){const o=parseInt(e.getAttribute(n)||1);return Math.max(i,t+o)}class Lb extends Ze{refresh(){const e=eb(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=eb(e.document.selection),i=tb(t),n=t[0].findAncestor("table"),o=[];for(let t=i.first;t<=i.last;t++)for(const i of n.getChild(t).getChildren())o.push(e.createRangeOn(i));e.change(e=>{e.setSelection(o)})}}class zb extends Ze{refresh(){const e=eb(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=eb(e.document.selection),i=t[0],n=t.pop(),o=i.findAncestor("table"),r=this.editor.plugins.get("TableUtils"),s=r.getCellLocation(i),a=r.getCellLocation(n),c=Math.min(s.column,a.column),l=Math.max(s.column,a.column),d=[];for(const t of new jp(o,{startColumn:c,endColumn:l}))d.push(e.createRangeOn(t.cell));e.change(e=>{e.setSelection(d)})}}function Vb(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.differ.getChanges();let n=!1;const o=new Set;for(const t of i){let i;"table"==t.name&&"insert"==t.type&&(i=t.position.nodeAfter),"tableRow"!=t.name&&"tableCell"!=t.name||(i=t.position.findAncestor("table")),Fb(t)&&(i=t.range.start.findAncestor("table")),i&&!o.has(i)&&(n=jb(i,e)||n,n=Bb(i,e)||n,o.add(i))}return n}(t,e))}function jb(e,t){let i=!1;const n=function(e){const t=parseInt(e.getAttribute("headingRows")||0),i=e.childCount,n=[];for(const{row:o,cell:r,cellHeight:s}of new jp(e)){if(s<2)continue;const e=o<t?t:i;if(o+s>e){const t=e-o;n.push({cell:r,rowspan:t})}}return n}(e);if(n.length){i=!0;for(const e of n)Rp("rowspan",e.rowspan,e.cell,t,1)}return i}function Bb(e,t){let i=!1;const n=function(e){const t=new Array(e.childCount).fill(0);for(const{row:i}of new jp(e,{includeAllSlots:!0}))t[i]++;return t}(e),o=[];for(const[e,t]of n.entries())t||o.push(e);if(o.length){i=!0;for(const i of o.reverse())t.remove(e.getChild(i)),n.splice(i,1)}const r=n[0];if(!n.every(e=>e===r)){const o=n.reduce((e,t)=>t>e?t:e,0);for(const[r,s]of n.entries()){const n=o-s;if(n){for(let i=0;i<n;i++)Op(t,t.createPositionAt(e.getChild(r),"end"));i=!0}}}return i}function Fb(e){const t="attribute"===e.type,i=e.attributeKey;return t&&("headingRows"===i||"colspan"===i||"rowspan"===i)}function Hb(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.differ.getChanges();let n=!1;for(const t of i)"insert"==t.type&&"table"==t.name&&(n=Ub(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableRow"==t.name&&(n=Wb(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableCell"==t.name&&(n=qb(t.position.nodeAfter,e)||n),$b(t)&&(n=qb(t.position.parent,e)||n);return n}(t,e))}function Ub(e,t){let i=!1;for(const n of e.getChildren())i=Wb(n,t)||i;return i}function Wb(e,t){let i=!1;for(const n of e.getChildren())i=qb(n,t)||i;return i}function qb(e,t){if(0==e.childCount)return t.insertElement("paragraph",e),!0;const i=Array.from(e.getChildren()).filter(e=>e.is("$text"));for(const e of i)t.wrap(t.createRangeOn(e),"paragraph");return!!i.length}function $b(e){return!(!e.position||!e.position.parent.is("element","tableCell"))&&("insert"==e.type&&"$text"==e.name||"remove"==e.type)}function Yb(e,t){e.document.registerPostFixer(()=>function(e,t){const i=new Set;for(const t of e.getChanges()){const e="attribute"==t.type?t.range.start.parent:t.position.parent;e.is("element","tableCell")&&i.add(e)}for(const n of i.values())for(const i of[...n.getChildren()].filter(e=>Gb(e,t)))e.refreshItem(i);return!1}(e.document.differ,t))}function Gb(e,t){if(!e.is("element","paragraph"))return!1;const i=t.toViewElement(e);return!!i&&Up(e)!==i.is("element","span")}function Kb(e){e.document.registerPostFixer(()=>function(e){const t=e.document.differ,i=new Set;for(const e of t.getChanges()){if("attribute"!=e.type)continue;const t=e.range.start.nodeAfter;t&&t.is("element","table")&&"headingRows"==e.attributeKey&&i.add(t)}if(i.size){for(const e of i.values())t.refreshItem(e);return!0}return!1}(e))}i(100);class Qb extends Qe{static get pluginName(){return"TableEditing"}init(){const e=this.editor,t=e.model,i=t.schema,n=e.conversion;i.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isObject:!0,isBlock:!0}),i.register("tableRow",{allowIn:"table",isLimit:!0}),i.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),i.extend("$block",{allowIn:"tableCell"}),n.for("upcast").add(Lp()),n.for("editingDowncast").add(Fp({asWidget:!0})),n.for("dataDowncast").add(Fp()),n.for("upcast").elementToElement({model:"tableRow",view:"tr"}),n.for("upcast").add(e=>{e.on("element:tr",(e,t)=>{t.viewItem.isEmpty&&0==t.modelCursor.index&&e.stop()},{priority:"high"})}),n.for("editingDowncast").add(e=>e.on("insert:tableRow",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(n,"insert"))return;const o=n.parent,r=function(e){for(const t of e.getChildren())if("table"===t.name)return t}(i.mapper.toViewElement(o)),s=o.getChildIndex(n),a=new jp(o,{row:s}),c={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},l=new Map;for(const e of a){const t=l.get(s)||$p(r,n,s,c,i);l.set(s,t),i.consumable.consume(e.cell,"insert"),qp(e,c,i.writer.createPositionAt(t,"end"),i,{asWidget:!0})}})),n.for("editingDowncast").add(e=>e.on("remove:tableRow",(e,t,i)=>{e.stop();const n=i.writer,o=i.mapper,r=o.toViewPosition(t.position).getLastMatchingPosition(e=>!e.item.is("element","tr")).nodeAfter,s=r.parent.parent,a=n.createRangeOn(r),c=n.remove(a);for(const e of n.createRangeIn(c).getItems())o.unbindViewElement(e);Kp("thead",s,i),Kp("tbody",s,i)},{priority:"higher"})),n.for("upcast").elementToElement({model:"tableCell",view:"td"}),n.for("upcast").elementToElement({model:"tableCell",view:"th"}),n.for("upcast").add(zp("td")),n.for("upcast").add(zp("th")),n.for("editingDowncast").add(e=>e.on("insert:tableCell",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(n,"insert"))return;const o=n.parent,r=o.parent,s=r.getChildIndex(o),a=new jp(r,{row:s}),c={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0};for(const e of a)if(e.cell===n){const t=i.mapper.toViewElement(o);return void qp(e,c,i.writer.createPositionAt(t,o.getChildIndex(n)),i,{asWidget:!0})}})),e.conversion.for("editingDowncast").elementToElement({model:"paragraph",view:Hp,converterPriority:"high"}),n.attributeToAttribute({model:"colspan",view:"colspan"}),n.attributeToAttribute({model:"rowspan",view:"rowspan"}),n.for("editingDowncast").add(e=>e.on("attribute:headingColumns:table",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(t.item,e.name))return;const o={headingRows:n.getAttribute("headingRows")||0,headingColumns:n.getAttribute("headingColumns")||0},r=t.attributeOldValue,s=t.attributeNewValue,a=(r>s?r:s)-1;for(const e of new jp(n,{endColumn:a}))Wp(e,o,i)})),e.commands.add("insertTable",new Jp(e)),e.commands.add("insertTableRowAbove",new cb(e,{order:"above"})),e.commands.add("insertTableRowBelow",new cb(e,{order:"below"})),e.commands.add("insertTableColumnLeft",new lb(e,{order:"left"})),e.commands.add("insertTableColumnRight",new lb(e,{order:"right"})),e.commands.add("removeTableRow",new Ab(e)),e.commands.add("removeTableColumn",new Cb(e)),e.commands.add("splitTableCellVertically",new db(e,{direction:"vertically"})),e.commands.add("splitTableCellHorizontally",new db(e,{direction:"horizontally"})),e.commands.add("mergeTableCells",new Nb(e)),e.commands.add("mergeTableCellRight",new yb(e,{direction:"right"})),e.commands.add("mergeTableCellLeft",new yb(e,{direction:"left"})),e.commands.add("mergeTableCellDown",new yb(e,{direction:"down"})),e.commands.add("mergeTableCellUp",new yb(e,{direction:"up"})),e.commands.add("setTableColumnHeader",new Eb(e)),e.commands.add("setTableRowHeader",new Tb(e)),e.commands.add("selectTableRow",new Lb(e)),e.commands.add("selectTableColumn",new zb(e)),Kb(t),Vb(t),Yb(t,e.editing.mapper),Hb(t)}static get requires(){return[Pb]}}i(102);class Jb extends jl{constructor(e){super(e);const t=this.bindTemplate;this.items=this._createGridCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(e,t)=>`${t} × ${e}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":t.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:t.to("label")}]}],on:{mousedown:t.to(e=>{e.preventDefault()}),click:t.to(()=>{this.fire("execute")})}}),this.on("boxover",(e,t)=>{const{row:i,column:n}=t.target.dataset;this.set({rows:parseInt(i),columns:parseInt(n)})}),this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const e=this.rows,t=this.columns;this.items.map((i,n)=>{const o=Math.floor(n/10)<e&&n%10<t;i.set("isOn",o)})}_createGridCollection(){const e=[];for(let t=0;t<100;t++){const i=Math.floor(t/10),n=t%10;e.push(new Zb(this.locale,i+1,n+1))}return this.createCollection(e)}}class Zb extends jl{constructor(e,t,i){super(e);const n=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",n.if("isOn","ck-on")],"data-row":t,"data-column":i}})}}class Xb extends Qe{static get pluginName(){return"TableUI"}init(){const e=this.editor,t=this.editor.t,i="ltr"===e.locale.contentLanguageDirection;e.ui.componentFactory.add("insertTable",i=>{const n=e.commands.get("insertTable"),o=Id(i);let r;return o.bind("isEnabled").to(n),o.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:t("Insert table"),tooltip:!0}),o.on("change:isOpen",()=>{r||(r=new Jb(i),o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{e.execute("insertTable",{rows:r.rows,columns:r.columns}),e.editing.view.focus()}))}),o}),e.ui.componentFactory.add("tableColumn",e=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:t("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:i?"insertTableColumnLeft":"insertTableColumnRight",label:t("Insert column left")}},{type:"button",model:{commandName:i?"insertTableColumnRight":"insertTableColumnLeft",label:t("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:t("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:t("Select column")}}];return this._prepareDropdown(t("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',n,e)}),e.ui.componentFactory.add("tableRow",e=>{const i=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:t("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:t("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:t("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:t("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:t("Select row")}}];return this._prepareDropdown(t("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',i,e)}),e.ui.componentFactory.add("mergeTableCells",e=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:t("Merge cell up")}},{type:"button",model:{commandName:i?"mergeTableCellRight":"mergeTableCellLeft",label:t("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:t("Merge cell down")}},{type:"button",model:{commandName:i?"mergeTableCellLeft":"mergeTableCellRight",label:t("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:t("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:t("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(t("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',n,e)})}_prepareDropdown(e,t,i,n){const o=this.editor,r=Id(n),s=this._fillDropdownWithListOptions(r,i);return r.buttonView.set({label:e,icon:t,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...e)=>e.some(e=>e)),this.listenTo(r,"execute",e=>{o.execute(e.source.commandName),o.editing.view.focus()}),r}_prepareMergeSplitButtonDropdown(e,t,i,n){const o=this.editor,r=Id(n,gd);return this._fillDropdownWithListOptions(r,i),r.buttonView.set({label:e,icon:t,tooltip:!0,isEnabled:!0}),this.listenTo(r.buttonView,"execute",()=>{o.execute("mergeTableCells"),o.editing.view.focus()}),this.listenTo(r,"execute",e=>{o.execute(e.source.commandName),o.editing.view.focus()}),r}_fillDropdownWithListOptions(e,t){const i=this.editor,n=[],o=new Zi;for(const e of t)ew(e,i,n,o);return Nd(e,o,i.ui.componentFactory),n}}function ew(e,t,i,n){const o=e.model=new Hd(e.model),{commandName:r,bindIsOn:s}=e.model;if("button"===e.type||"switchbutton"===e.type){const e=t.commands.get(r);i.push(e),o.set({commandName:r}),o.bind("isEnabled").to(e),s&&o.bind("isOn").to(e,"value")}o.set({withText:!0}),n.add(e)}i(104);class tw extends Qe{static get pluginName(){return"TableSelection"}static get requires(){return[Pb]}init(){const e=this.editor.model;this.listenTo(e,"deleteContent",(e,t)=>this._handleDeleteContent(e,t),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const e=Zp(this.editor.model.document.selection);return 0==e.length?null:e}getSelectionAsFragment(){const e=this.getSelectedTableCells();return e?this.editor.model.change(t=>{const i=t.createDocumentFragment(),n=this.editor.plugins.get("TableUtils"),{first:o,last:r}=ib(e),{first:s,last:a}=tb(e),c=e[0].findAncestor("table");let l=a,d=r;if(nb(e,n)){const e={firstColumn:o,lastColumn:r,firstRow:s,lastRow:a};l=_b(c,e),d=vb(c,e)}const u=ub(c,{startRow:s,startColumn:o,endRow:l,endColumn:d},t);return t.insert(u,i,0),i}):null}setCellSelection(e,t){const i=this._getCellsToSelect(e,t);this.editor.model.change(e=>{e.setSelection(i.cells.map(t=>e.createRangeOn(t)),{backward:i.backward})})}getFocusCell(){const e=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return e&&e.is("element","tableCell")?e:null}getAnchorCell(){const e=Ns(this.editor.model.document.selection.getRanges()).getContainedElement();return e&&e.is("element","tableCell")?e:null}_defineSelectionConverter(){const e=this.editor,t=new Set;e.conversion.for("editingDowncast").add(e=>e.on("selection",(e,i,n)=>{const o=n.writer;!function(e){for(const i of t)e.removeClass("ck-editor__editable_selected",i);t.clear()}(o);const r=this.getSelectedTableCells();if(!r)return;for(const e of r){const i=n.mapper.toViewElement(e);o.addClass("ck-editor__editable_selected",i),t.add(i)}const s=n.mapper.toViewElement(r[r.length-1]);o.setSelection(s,0)},{priority:"lowest"}))}_enablePluginDisabling(){const e=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){const t=this.getSelectedTableCells();if(!t)return;e.model.change(i=>{const n=i.createPositionAt(t[0],0),o=e.model.schema.getNearestSelectionRange(n);i.setSelection(o)})}})}_handleDeleteContent(e,t){const[i,n]=t,o=this.editor.model,r=!n||"backward"==n.direction,s=Zp(i);s.length&&(e.stop(),o.change(e=>{const t=s[r?s.length-1:0];o.change(e=>{for(const t of s)o.deleteContent(e.createSelection(t,"in"))});const n=o.schema.getNearestSelectionRange(e.createPositionAt(t,0));i.is("documentSelection")?e.setSelection(n):i.setTo(n)}))}_getCellsToSelect(e,t){const i=this.editor.plugins.get("TableUtils"),n=i.getCellLocation(e),o=i.getCellLocation(t),r=Math.min(n.row,o.row),s=Math.max(n.row,o.row),a=Math.min(n.column,o.column),c=Math.max(n.column,o.column),l=new Array(s-r+1).fill(null).map(()=>[]),d={startRow:r,endRow:s,startColumn:a,endColumn:c};for(const{row:t,cell:i}of new jp(e.findAncestor("table"),d))l[t-r].push(i);const u=o.row<n.row,h=o.column<n.column;return u&&l.reverse(),h&&l.forEach(e=>e.reverse()),{cells:l.flat(),backward:u||h}}}class iw extends Qe{static get pluginName(){return"TableClipboard"}static get requires(){return[tw,Pb]}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"copy",(e,t)=>this._onCopyCut(e,t)),this.listenTo(t,"cut",(e,t)=>this._onCopyCut(e,t)),this.listenTo(e.model,"insertContent",(e,t)=>this._onInsertContent(e,...t),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(e,t){const i=this.editor.plugins.get(tw);if(!i.getSelectedTableCells())return;if("cut"==e.name&&this.editor.isReadOnly)return;t.preventDefault(),e.stop();const n=this.editor.data,o=this.editor.editing.view.document,r=n.toView(i.getSelectionAsFragment());o.fire("clipboardOutput",{dataTransfer:t.dataTransfer,content:r,method:e.name})}_onInsertContent(e,t,i){if(i&&!i.is("documentSelection"))return;const n=this.editor.model,o=this.editor.plugins.get(Pb);let r=function(e,t){if(!e.is("documentFragment")&&!e.is("element"))return null;if(e.is("element","table"))return e;if(1==e.childCount&&e.getChild(0).is("element","table"))return e.getChild(0);const i=t.createRangeIn(e);for(const e of i.getItems())if(e.is("element","table")){const n=t.createRange(i.start,t.createPositionBefore(e));if(t.hasContent(n,{ignoreWhitespaces:!0}))return null;const o=t.createRange(t.createPositionAfter(e),i.end);return t.hasContent(o,{ignoreWhitespaces:!0})?null:e}return null}(t,n);if(!r)return;const s=eb(n.document.selection);s.length?(e.stop(),n.change(e=>{const t={width:o.getColumns(r),height:o.getRows(r)},i=function(e,t,i,n){const o=e[0].findAncestor("table"),r=ib(e),s=tb(e),a={firstColumn:r.first,lastColumn:r.last,firstRow:s.first,lastRow:s.last},c=1===e.length;c&&(a.lastRow+=t.height-1,a.lastColumn+=t.width-1,function(e,t,i,n){const o=n.getColumns(e),r=n.getRows(e);i>o&&n.insertColumns(e,{at:o,columns:i-o});t>r&&n.insertRows(e,{at:r,rows:t-r})}(o,a.lastRow+1,a.lastColumn+1,n));c||!nb(e,n)?function(e,t,i){const{firstRow:n,lastRow:o,firstColumn:r,lastColumn:s}=t,a={first:n,last:o},c={first:r,last:s};ow(e,r,a,i),ow(e,s+1,a,i),nw(e,n,c,i),nw(e,o+1,c,i,n)}(o,a,i):(a.lastRow=_b(o,a),a.lastColumn=vb(o,a));return a}(s,t,e,o),n=i.lastRow-i.firstRow+1,a=i.lastColumn-i.firstColumn+1,c={startRow:0,startColumn:0,endRow:Math.min(n,t.height)-1,endColumn:Math.min(a,t.width)-1};r=ub(r,c,e);const l=s[0].findAncestor("table"),d=this._replaceSelectedCellsWithPasted(r,t,l,i,e);if(this.editor.plugins.get("TableSelection").isEnabled){const t=ob(d.map(t=>e.createRangeOn(t)));e.setSelection(t)}else e.setSelection(d[0],0)})):kb(r,o)}_replaceSelectedCellsWithPasted(e,t,i,n,o){const{width:r,height:s}=t,a=function(e,t,i){const n=new Array(i).fill(null).map(()=>new Array(t).fill(null));for(const{column:t,row:i,cell:o}of new jp(e))n[i][t]=o;return n}(e,r,s),c=[...new jp(i,{startRow:n.firstRow,endRow:n.lastRow,startColumn:n.firstColumn,endColumn:n.lastColumn,includeAllSlots:!0})],l=[];let d;for(const e of c){const{row:t,column:i}=e;i===n.firstColumn&&(d=e.getPositionBefore());const c=t-n.firstRow,u=i-n.firstColumn,h=a[c%s][u%r],f=h?o.cloneElement(h):null,g=this._replaceTableSlotCell(e,f,d,o);g&&(pb(g,t,i,n.lastRow,n.lastColumn,o),l.push(g),d=o.createPositionAfter(g))}const u=parseInt(i.getAttribute("headingRows")||0),h=parseInt(i.getAttribute("headingColumns")||0),f=n.firstRow<u&&u<=n.lastRow,g=n.firstColumn<h&&h<=n.lastColumn;if(f){const e=nw(i,u,{first:n.firstColumn,last:n.lastColumn},o,n.firstRow);l.push(...e)}if(g){const e=ow(i,h,{first:n.firstRow,last:n.lastRow},o);l.push(...e)}return l}_replaceTableSlotCell(e,t,i,n){const{cell:o,isAnchor:r}=e;return r&&n.remove(o),t?(n.insert(t,i),t):null}}function nw(e,t,i,n,o=0){if(t<1)return;return hb(e,t,o).filter(({column:e,cellWidth:t})=>rw(e,t,i)).map(({cell:e})=>fb(e,t,n))}function ow(e,t,i,n){if(t<1)return;return gb(e,t).filter(({row:e,cellHeight:t})=>rw(e,t,i)).map(({cell:e,column:i})=>mb(e,i,t,n))}function rw(e,t,i){const n=e+t-1,{first:o,last:r}=i;return e>=o&&e<=r||e<o&&n>=o}class sw extends Qe{static get pluginName(){return"TableKeyboard"}static get requires(){return[tw]}init(){const e=this.editor.editing.view.document;this.editor.keystrokes.set("Tab",(...e)=>this._handleTabOnSelectedTable(...e),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"}),this.listenTo(e,"arrowKey",(...e)=>this._onArrowKey(...e),{context:"table"})}_handleTabOnSelectedTable(e,t){const i=this.editor,n=i.model.document.selection.getSelectedElement();n&&n.is("element","table")&&(t(),i.model.change(e=>{e.setSelection(e.createRangeIn(n.getChild(0).getChild(0)))}))}_getTabHandler(e){const t=this.editor;return(i,n)=>{let o=Xp(t.model.document.selection)[0];if(o||(o=this.editor.plugins.get("TableSelection").getFocusCell()),!o)return;n();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!e&&l&&0===a)return void t.model.change(e=>{e.setSelection(e.createRangeOn(s))});const d=c===r.childCount-1,u=a===s.childCount-1;if(e&&u&&d&&(t.execute("insertTableRowBelow"),a===s.childCount-1))return void t.model.change(e=>{e.setSelection(e.createRangeOn(s))});let h;if(e&&d){const e=s.getChild(a+1);h=e.getChild(0)}else if(!e&&l){const e=s.getChild(a-1);h=e.getChild(e.childCount-1)}else h=r.getChild(c+(e?1:-1));t.model.change(e=>{e.setSelection(e.createRangeIn(h))})}}_onArrowKey(e,t){const i=this.editor,n=Lo(t.keyCode,i.locale.contentLanguageDirection);this._handleArrowKeys(n,t.shiftKey)&&(t.preventDefault(),t.stopPropagation(),e.stop())}_handleArrowKeys(e,t){const i=this.editor.model.document.selection,n=["right","down"].includes(e),o=Zp(i);if(o.length){let i;return i=t?this.editor.plugins.get("TableSelection").getFocusCell():n?o[o.length-1]:o[0],this._navigateFromCellInDirection(i,e,t),!0}const r=i.focus.findAncestor("tableCell");return!!r&&(!(t&&!i.isCollapsed&&i.isBackward==n)&&(!!this._isSelectionAtCellEdge(i,r,n)&&(this._navigateFromCellInDirection(r,e,t),!0)))}_isSelectionAtCellEdge(e,t,i){const n=this.editor.model,o=this.editor.model.schema,r=i?e.getLastPosition():e.getFirstPosition();if(!o.getLimitElement(r).is("element","tableCell")){return n.createPositionAt(t,i?"end":0).isTouching(r)}const s=n.createSelection(r);return n.modifySelection(s,{direction:i?"forward":"backward"}),r.isEqual(s.focus)}_navigateFromCellInDirection(e,t,i=!1){const n=this.editor.model,o=e.findAncestor("table"),r=[...new jp(o,{includeAllSlots:!0})],{row:s,column:a}=r[r.length-1],c=r.find(({cell:t})=>t==e);let{row:l,column:d}=c;switch(t){case"left":d--;break;case"up":l--;break;case"right":d+=c.cellWidth;break;case"down":l+=c.cellHeight}if(l<0||l>s||d<0&&l<=0||d>a&&l>=s)return void n.change(e=>{e.setSelection(e.createRangeOn(o))});d<0?(d=i?0:a,l--):d>a&&(d=i?a:0,l++);const u=r.find(e=>e.row==l&&e.column==d).cell,h=["right","down"].includes(t),f=this.editor.plugins.get("TableSelection");if(i&&f.isEnabled){const t=f.getAnchorCell()||e;f.setCellSelection(t,u)}else{const e=n.createPositionAt(u,h?0:"end");n.change(t=>{t.setSelection(e)})}}}class aw extends ts{constructor(e){super(e),this.domEventType=["mousemove","mouseleave"]}onDomEvent(e){this.fire(e.type,e)}}class cw extends Qe{static get pluginName(){return"TableMouse"}static get requires(){return[tw]}init(){this.editor.editing.view.addObserver(aw),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const e=this.editor;let t=!1;const i=e.plugins.get(tw);this.listenTo(e.editing.view.document,"mousedown",(n,o)=>{if(!this.isEnabled||!i.isEnabled)return;if(!o.domEvent.shiftKey)return;const r=i.getAnchorCell()||Xp(e.model.document.selection)[0];if(!r)return;const s=this._getModelTableCellFromDomEvent(o);s&&lw(r,s)&&(t=!0,i.setCellSelection(r,s),o.preventDefault())}),this.listenTo(e.editing.view.document,"mouseup",()=>{t=!1}),this.listenTo(e.editing.view.document,"selectionChange",e=>{t&&e.stop()},{priority:"highest"})}_enableMouseDragSelection(){const e=this.editor;let t,i,n=!1,o=!1;const r=e.plugins.get(tw);this.listenTo(e.editing.view.document,"mousedown",(e,i)=>{this.isEnabled&&r.isEnabled&&(i.domEvent.shiftKey||i.domEvent.ctrlKey||i.domEvent.altKey||(t=this._getModelTableCellFromDomEvent(i)))}),this.listenTo(e.editing.view.document,"mousemove",(e,s)=>{if(!s.domEvent.buttons)return;if(!t)return;const a=this._getModelTableCellFromDomEvent(s);a&&lw(t,a)&&(i=a,n||i==t||(n=!0)),n&&(o=!0,r.setCellSelection(t,i),s.preventDefault())}),this.listenTo(e.editing.view.document,"mouseup",()=>{n=!1,o=!1,t=null,i=null}),this.listenTo(e.editing.view.document,"selectionChange",e=>{o&&e.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(e){const t=e.target,i=this.editor.editing.view.createPositionAt(t,0);return this.editor.editing.mapper.toModelPosition(i).parent.findAncestor("tableCell",{includeSelf:!0})}}function lw(e,t){return e.parent.parent==t.parent.parent}i(106);function dw(e){const t=e.getSelectedElement();return t&&hw(t)?t:null}function uw(e){const t=function(e,t){let i=t.parent;for(;i;){if(i.name===e)return i;i=i.parent}}("table",e.getFirstPosition());return t&&hw(t.parent)?t.parent:null}function hw(e){return!!e.getCustomProperty("table")&&Fu(e)}const fw={autoRefresh:!0};class gw{constructor(e,t=fw){if(!e)throw new c.a("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),this._refresh="function"==typeof e?e:()=>{return t=e,new Promise((e,i)=>{const n=new XMLHttpRequest;n.open("GET",t),n.addEventListener("load",()=>{const t=n.status,o=n.response;return t<200||t>299?i(new c.a("token-cannot-download-new-token",null)):e(o)}),n.addEventListener("error",()=>i(new Error("Network Error"))),n.addEventListener("abort",()=>i(new Error("Abort"))),n.send()});var t},this._options=Object.assign({},fw,t)}init(){return new Promise((e,t)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)):this.refreshToken().then(e).catch(t)})}refreshToken(){return this._refresh().then(e=>{this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t="string"==typeof e,i=!/^".*"$/.test(e),n=t&&3===e.split(".").length;if(!i||!n)throw new c.a("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));if(!t)return 36e5;return Math.floor((1e3*t-Date.now())/2)}catch(e){return 36e5}}static create(e,t=fw){return new gw(e,t).init()}}Ke(gw,Ue);var mw=gw;const pw=/^data:(\S*?);base64,/;class bw{constructor(e,t,i){if(!e)throw new c.a("fileuploader-missing-file",null);if(!t)throw new c.a("fileuploader-missing-token",null);if(!i)throw new c.a("fileuploader-missing-api-address",null);this.file=function(e){if("string"!=typeof e)return!1;const t=e.match(pw);return!(!t||!t.length)}(e)?function(e,t=512){try{const i=e.match(pw)[1],n=atob(e.replace(pw,"")),o=[];for(let e=0;e<n.length;e+=t){const i=n.slice(e,e+t),r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i.charCodeAt(e);o.push(new Uint8Array(r))}return new Blob(o,{type:i})}catch(e){throw new c.a("fileuploader-decoding-image-data-error",null)}}(e):e,this._token=t,this._apiAddress=i}onProgress(e){return this.on("progress",(t,i)=>e(i)),this}onError(e){return this.once("error",(t,i)=>e(i)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this,t=this.xhr;function i(t){return()=>e.fire("error",t)}t.addEventListener("error",i("Network Error")),t.addEventListener("abort",i("Abort")),t.upload&&t.upload.addEventListener("progress",e=>{e.lengthComputable&&this.fire("progress",{total:e.total,uploaded:e.loaded})}),t.addEventListener("load",()=>{const e=t.status,i=t.response;if(e<200||e>299)return this.fire("error",i.message||i.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((i,n)=>{t.addEventListener("load",()=>{const e=t.status,o=t.response;return e<200||e>299?o.message?n(new c.a("fileuploader-uploading-data-failed",this,{message:o.message})):n(o.error):i(o)}),t.addEventListener("error",()=>n(new Error("Network Error"))),t.addEventListener("abort",()=>n(new Error("Abort"))),t.send(e)})}}Ke(bw,u);class ww{constructor(e,t){if(!e)throw new c.a("uploadgateway-missing-token",null);if(!t)throw new c.a("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new bw(e,this._token,this._apiAddress)}}class kw extends an{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new mw(e,t)}createUploadGateway(e,t){return new ww(e,t)}}class _w extends xu{}_w.builtinPlugins=[class extends Qe{static get requires(){return[bh,Nu,Eh,vh,Dh,uf]}static get pluginName(){return"Essentials"}},class extends Qe{static get requires(){return[ff]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const e=this.editor.config.get("ckfinder.uploadUrl");e&&(this.editor.plugins.get(ff).createUploadAdapter=t=>new wf(t,e,this.editor.t))}},class extends Qe{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get("bulletedList")&&kf(this.editor,this,/^[*-]\s$/,"bulletedList"),e.get("numberedList")&&kf(this.editor,this,/^1[.|)]\s$/,"numberedList"),e.get("todoList")&&kf(this.editor,this,/^\[\s?\]\s$/,"todoList"),e.get("checkTodoList")&&kf(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const e=this.editor.commands;if(e.get("bold")){const e=yf(this.editor,"bold");_f(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,e),_f(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,e)}if(e.get("italic")){const e=yf(this.editor,"italic");_f(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,e),_f(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,e)}if(e.get("code")){const e=yf(this.editor,"code");_f(this.editor,this,/(`)([^`]+)(`)$/g,e)}if(e.get("strikethrough")){const e=yf(this.editor,"strikethrough");_f(this.editor,this,/(~~)([^~]+)(~~)$/g,e)}}_addHeadingAutoformats(){const e=this.editor.commands.get("heading");e&&e.modelElements.filter(e=>e.match(/^heading[1-6]$/)).forEach(t=>{const i=t[7],n=new RegExp(`^(#{${i}})\\s$`);kf(this.editor,this,n,()=>{if(!e.isEnabled||e.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&kf(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){this.editor.commands.get("codeBlock")&&kf(this.editor,this,/^```$/,"codeBlock")}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&kf(this.editor,this,/^---$/,"horizontalLine")}},class extends Qe{static get requires(){return[Af,Cf]}static get pluginName(){return"Bold"}},class extends Qe{static get requires(){return[Tf,Ef]}static get pluginName(){return"Italic"}},class extends Qe{static get requires(){return[Nf,Rf]}static get pluginName(){return"BlockQuote"}},class extends Qe{static get pluginName(){return"CKFinder"}static get requires(){return["Image","Link","CKFinderUploadAdapter",zf,Of]}},class extends an{static get pluginName(){return"CloudServices"}static get requires(){return[kw]}init(){const e=this.context.config.get("cloudServices")||{};for(const t in e)this[t]=e[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(e){if(this._tokens.has(e))return Promise.resolve(this.getTokenFor(e));const t=this.context.plugins.get("CloudServicesCore").createToken(e);return this._tokens.set(e,t),t.init()}getTokenFor(e){const t=this._tokens.get(e);if(!t)throw new c.a("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(const e of this._tokens.values())e.destroy()}},class extends Qe{static get requires(){return[Vf,"Image","ImageUpload"]}static get pluginName(){return"EasyImage"}},class extends Qe{static get requires(){return[$f,Yf]}static get pluginName(){return"Heading"}},class extends Qe{static get requires(){return[lg,ch,pg]}static get pluginName(){return"Image"}isImageWidget(e){return tg(e)}},class extends Qe{static get requires(){return[kg]}static get pluginName(){return"ImageCaption"}},class extends Qe{static get requires(){return[Mg,Ig]}static get pluginName(){return"ImageStyle"}},class extends Qe{static get requires(){return[Gf]}static get pluginName(){return"ImageToolbar"}afterInit(){const e=this.editor,t=e.t;e.plugins.get(Gf).register("image",{ariaLabel:t("Image toolbar"),items:e.config.get("image.toolbar")||[],getRelatedElement:ig})}},class extends Qe{static get pluginName(){return"ImageUpload"}static get requires(){return[Wg,Dg,Lg]}},class extends Qe{static get pluginName(){return"Indent"}static get requires(){return[$g,Kg]}},class extends Qe{static get requires(){return[Tm,Im,Om]}static get pluginName(){return"Link"}},class extends Qe{static get requires(){return[sp,cp]}static get pluginName(){return"List"}},class extends Qe{static get requires(){return[pp,_p,wp,ch]}static get pluginName(){return"MediaEmbed"}},Uf,class extends Qe{static get pluginName(){return"PasteFromOffice"}static get requires(){return[Eu]}init(){const e=this.editor,t=e.editing.view.document,i=[];i.push(new Np(t)),i.push(new Tp(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",(e,t)=>{if(t.isTransformedWithPasteFromOffice)return;const n=t.dataTransfer.getData("text/html"),o=i.find(e=>e.isActive(n));o&&(o.execute(t),t.isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends Qe{static get requires(){return[Qb,Xb,tw,cw,sw,iw,ch]}static get pluginName(){return"Table"}},class extends Qe{static get requires(){return[Gf]}static get pluginName(){return"TableToolbar"}afterInit(){const e=this.editor,t=e.t,i=e.plugins.get(Gf),n=e.config.get("table.contentToolbar"),o=e.config.get("table.tableToolbar");n&&i.register("tableContent",{ariaLabel:t("Table toolbar"),items:n,getRelatedElement:uw}),o&&i.register("table",{ariaLabel:t("Table toolbar"),items:o,getRelatedElement:dw})}},class extends Qe{static get pluginName(){return"TextTransformation"}constructor(e){super(e),e.config.define("typing",{transformations:{include:Gh}})}init(){const e=this.editor.model.document.selection;e.on("change:range",()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const e=this.editor,t=e.model,i=e.plugins.get("Input"),n=function(e){const t=e.extra||[],i=e.remove||[],n=e=>!i.includes(e);return function(e){const t=new Set;for(const i of e)if(Yh[i])for(const e of Yh[i])t.add(e);else t.add(i);return Array.from(t)}(e.include.concat(t).filter(n)).filter(n).map(e=>$h[e]||e).map(e=>({from:Kh(e.from),to:Qh(e.to)}))}(e.config.get("typing.transformations")),o=new zh(e.model,e=>{for(const t of n){if(t.from.test(e))return{normalizedTransformation:t}}});o.on("matched:data",(e,n)=>{if(!i.isInput(n.batch))return;const{from:o,to:r}=n.normalizedTransformation,s=o.exec(n.text),a=r(s.slice(1)),c=n.range;let l=s.index;t.enqueueChange(e=>{for(let i=1;i<s.length;i++){const n=s[i],o=a[i-1];if(null==o){l+=n.length;continue}const r=c.start.getShiftedBy(l),d=t.createRange(r,r.getShiftedBy(n.length)),u=Jh(r);t.insertContent(e.createText(o,u),d),l+=o.length}})}),o.bind("isEnabled").to(this)}}],_w.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","outdent","indent","|","uploadImage","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ChainOfResponsibility/BaseHandler.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ChainOfResponsibility/BaseHandler.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseHandler = void 0;
var BaseHandler = /** @class */ (function () {
    function BaseHandler() {
    }
    BaseHandler.prototype.setNext = function (event) {
        this._nextEvent = event;
        return event;
    };
    BaseHandler.prototype.handle = function (data) {
        this.handler(data);
        if (this._nextEvent) {
            this._nextEvent.handle(data);
        }
        return data;
    };
    Object.defineProperty(BaseHandler.prototype, "nextEvent", {
        get: function () {
            return this._nextEvent;
        },
        enumerable: false,
        configurable: true
    });
    return BaseHandler;
}());
exports.BaseHandler = BaseHandler;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts":
/*!******************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurableAbstract = void 0;
/**
 * This will automatically configure your object
 *
 * example
 * ---------------
 * import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
 *
 * export class Form extends ConfigurableAbstract {
 *
 *    private _id: string = ''                   //  <-- empty init
 *    private _languages: string[] = []
 *
 *    constructor(config: any) {
 *       super()
 *
 *       this.configuring(config)
 *    }
 *
 *    getDefaultConfig(): any {                 //  <-- set the default values of all
 *       return {                               //      the fields you want to configure
 *          id: GuidHelper.raw(),
 *          languages: ['nl'],
 *       }
 *    }
 *
 *    private configureLanguages(rawFields: Object[]): void {     //  <-- if you want some extra checks
 *       .. your code here                                        //      or create a new object create
 *    }                                                           //      a method with the following signature
 *                                                                //      configure<property name>(rawFields: Object[]): void
 *  }
 *
 * @author        Olaf Mudde <olaf.mudde@xs4all.nl>
 * @copyright     (c) 2021
 * @license       MIT
 */
var StringHelper_1 = __webpack_require__(/*! ../Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var ConfigurableAbstract = /** @class */ (function () {
    function ConfigurableAbstract() {
    }
    ConfigurableAbstract.prototype.configuring = function (config) {
        var defaultConfig = this.getDefaultConfig();
        for (var key in defaultConfig) {
            var methodName = 'configure' + StringHelper_1.StringHelper.ucFirst(key);
            var hasMethod = this[methodName] !== undefined;
            var value = config[key] ? config[key] : defaultConfig[key];
            if (hasMethod) {
                this[methodName](value);
            }
            else {
                this[key] = value;
            }
        }
    };
    return ConfigurableAbstract;
}());
exports.ConfigurableAbstract = ConfigurableAbstract;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/NodeCore.ts":
/*!******************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/NodeCore.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeCore = void 0;
/**
 * Generate and maniputate HTMLElements more easy
 *
 * example
 * ---------------
 * let node = new NodeCore('div', {class:'container'})
 * node.appendElement_('div', {class:'row'})
 *        .appendElement_('div', {class:'col'})
 *           .appendElement('a', {href:'#', class:'btn btn-default'}, 'Click Me!')
 *        ._()
 *        .appendElement_('div', {class:'col'})
 *           .appendElement('img', {src:'#', class:'photo'})
 *        ._()
 * -------
 * OUTPUTS
 * -------
 * <div class='container'>
 *    <div class='row'>
 *       <div class='col'>
 *          <a href='#' class='btn btn-default'>
 *       </div>
 *       <div class='col'>
 *          <img src='#' class='photo'>
 *       </div>
 *    </div>
 * </div>
 *
 * @author        Olaf Mudde <olaf.mudde@xs4all.nl>
 * @copyright     (c) copyright 2021 - Olaf Mudde
 * @license       MIT
 */
var NodeCore = /** @class */ (function () {
    function NodeCore(tagName, attributes, text, documentX) {
        this._idSearch = [];
        this._click = ['click'];
        this._change = ['keydown', 'keypress', 'keyup', 'mousedown', 'mouseup', 'change'];
        this._document = documentX !== null && documentX !== void 0 ? documentX : document;
        this._root = this._current = tagName[0] === '#'
            ? this.getNodeById(tagName.substring(1))
            : this.createNode(tagName, attributes, text);
    }
    NodeCore.prototype.getNodeById = function (nodeId) {
        var document = this.document;
        var element = document.getElementById(nodeId);
        if (!element)
            throw new Error('Element not found by id!');
        return element;
    };
    NodeCore.prototype.createNode = function (tagName, attributes, text) {
        var document = this.document;
        var node = document.createElement(tagName);
        if (attributes) {
            for (var key in attributes) {
                var value = attributes[key];
                if (key === 'id') {
                    this._idSearch[value] = node;
                }
                node.setAttribute(key, value);
            }
        }
        if (text) {
            node.innerText = text;
        }
        return node;
    };
    NodeCore.prototype.click = function (callable) {
        var current = this.current;
        this._click.forEach(function (name) {
            current.addEventListener(name, callable);
        });
        return this;
    };
    NodeCore.prototype.change = function (callable) {
        var current = this.current;
        this._change.forEach(function (name) {
            current.addEventListener(name, callable);
        });
        return this;
    };
    NodeCore.prototype.moveInNode = function (callable) {
        var current = this.current;
        var tmpNode = this.document.createElement('div');
        current.replaceWith(tmpNode);
        var newNodeRaw = callable(current);
        var newNode = this.importElement(newNodeRaw);
        tmpNode.replaceWith(newNode);
        return this;
    };
    NodeCore.prototype.removeChildren = function () {
        var current = this.current;
        current.childNodes.forEach(function (child) {
            current.removeChild(child);
        });
        return this;
    };
    NodeCore.prototype.removeChild = function (node) {
        var nodeX = node instanceof NodeCore ? node.root : node;
        this.current.removeChild(nodeX);
        return this;
    };
    NodeCore.prototype.addSibling_ = function (tagName, attributes, text) {
        return this.addSibling(tagName, attributes, text, true);
    };
    NodeCore.prototype.addSibling = function (tagName, attributes, text, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.createNode(tagName, attributes, text);
        var parent = this.current.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(newNode, this.current);
        if (setCurrent) {
            this._current = newNode;
        }
        return this;
    };
    NodeCore.prototype.addSiblingNode_ = function (node) {
        return this.addSiblingNode(node, true);
    };
    NodeCore.prototype.addSiblingNode = function (node, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.importElement(node);
        var current = this.current;
        var parent = current.parentElement;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(newNode, current);
        if (setCurrent) {
            this._current = newNode;
        }
        return this;
    };
    NodeCore.prototype.addClass = function (className) {
        var currentClass = this.current.className;
        this.current.setAttribute('class', "".concat(currentClass, " ").concat(className).trimLeft());
        return this;
    };
    NodeCore.prototype.removeClass = function (className) {
        var currentClass = ' ' + this.current.className + ' ';
        this.current.setAttribute('class', currentClass.replace(' ' + className + ' ', ' ').trim());
        return this;
    };
    NodeCore.prototype.clear = function () {
        var root = this._current = this.root;
        root.innerHTML = '';
    };
    NodeCore.prototype.getAttribute = function (name) {
        return this.current.getAttribute(name);
    };
    NodeCore.prototype.getElementById = function (id) {
        if (id in this._idSearch) {
            this._current = this._idSearch[id];
        }
        return this;
    };
    NodeCore.prototype.getElementByTagName = function (tagName) {
        var element = this.root.getElementsByTagName(tagName);
        return element;
    };
    NodeCore.prototype.getElementByClass = function (className) {
        var element = this.root.getElementsByClassName(className);
        return element;
    };
    NodeCore.prototype.hasAttribute = function (name) {
        return this.current.hasAttribute(name);
    };
    NodeCore.prototype.hasElementById = function (id) {
        return id in this._idSearch;
    };
    NodeCore.prototype.hasElementByClass = function (className) {
        return this.root.getElementsByClassName(className).length !== 0;
    };
    NodeCore.prototype.a = function (tagName, attributes, text, setCurrent) {
        return this.appendNode(tagName, attributes, text, setCurrent);
    };
    NodeCore.prototype.prependNode_ = function (tagName, attributes, text) {
        return this.prependNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.prependNode = function (tagName, attributes, text, setCurrent) {
        var firstChild = this.current.firstChild;
        if (firstChild) {
            var HTMLElement_1 = this.current.insertBefore(this.createNode(tagName, attributes, text), firstChild);
            if (setCurrent === true) {
                this._current = HTMLElement_1;
            }
        }
        return this;
    };
    NodeCore.prototype.appendNode = function (tagName, attributes, text, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.createNode(tagName, attributes, text);
        var HTMLElement = this.current.appendChild(newNode);
        HTMLElement.innerText = text ? text : '';
        if (setCurrent === true) {
            this._current = HTMLElement;
        }
        return this;
    };
    NodeCore.prototype.a_ = function (tagName, attributes, text) {
        return this.appendNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.appendNode_ = function (tagName, attributes, text) {
        return this.appendNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.toHTML = function (outerHTML) {
        if (outerHTML === void 0) { outerHTML = true; }
        var root = this.root;
        return outerHTML ? root.outerHTML : root.innerHTML;
    };
    NodeCore.prototype.setAttributes = function (attributes) {
        var node = this.current;
        for (var key in attributes) {
            var value = attributes[key];
            if (key === 'id') {
                this._idSearch[value] = node;
            }
            node.setAttribute(key, value);
        }
        return this;
    };
    NodeCore.prototype.parent = function () {
        var parent = this.current.parentElement;
        this._current = parent === null ? this.current : parent;
        return this;
    };
    NodeCore.prototype._ = function () {
        return this.parent();
    };
    NodeCore.prototype.prependElement = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        var firstChild = this.current.firstChild;
        if (firstChild) {
            this.current.insertBefore(childNode, firstChild);
        }
        this._current = childNode;
        return this;
    };
    NodeCore.prototype.prependElement_ = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        var firstChild = this.current.firstChild;
        if (firstChild) {
            this.current.insertBefore(childNode, firstChild);
        }
        return this;
    };
    NodeCore.prototype.appendElement = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        this._current = this.current.appendChild(childNode);
        return this;
    };
    NodeCore.prototype.importElement = function (node) {
        if (!(node instanceof NodeCore)) {
            return node;
        }
        var childIdNodes = node._idSearch;
        for (var key in childIdNodes) {
            this._idSearch[key] = childIdNodes[key];
        }
        return node.root;
    };
    NodeCore.prototype.appendElement_ = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        this.current.appendChild(childNode);
        return this;
    };
    NodeCore.prototype.gotoRoot = function () {
        this._current = this.root;
        return this;
    };
    Object.defineProperty(NodeCore.prototype, "root", {
        get: function () {
            if (this._root === undefined)
                throw new Error('Root node not defined!');
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "id", {
        get: function () {
            return this.current.getAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "innerHTML", {
        set: function (html) {
            this.current.innerHTML = html;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "idSearch", {
        get: function () {
            return this._idSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "current", {
        get: function () {
            if (this._current === undefined)
                throw new Error('Current not set!');
            return this._current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "document", {
        get: function () {
            if (this._document === undefined)
                throw new Error('Document not set!');
            return this._document;
        },
        enumerable: false,
        configurable: true
    });
    return NodeCore;
}());
exports.NodeCore = NodeCore;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ObserverPattern/Event.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ObserverPattern/Event.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Event = void 0;
/**
 * Event for Observer pattern
 *
 * @author        Olaf Mudde <olaf.mudde@xs4all.nl>
 * @copyright     (c) 2021
 * @license       MIT
 */
var Event = /** @class */ (function () {
    function Event(source, eventNumber) {
        this._source = source;
        this._eventNumber = eventNumber;
    }
    Object.defineProperty(Event.prototype, "source", {
        get: function () {
            if (this._source === undefined)
                throw new Error('Source not set!');
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "eventNumber", {
        get: function () {
            if (this._eventNumber === undefined)
                throw new Error('Event number not set!');
            return this._eventNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Event;
}());
exports.Event = Event;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ObserverPattern/ObserverAbstract.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ObserverPattern/ObserverAbstract.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObserverAbstract = void 0;
var ObserverAbstract = /** @class */ (function () {
    function ObserverAbstract() {
    }
    return ObserverAbstract;
}());
exports.ObserverAbstract = ObserverAbstract;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ObserverPattern/SubjectAbstract.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ObserverPattern/SubjectAbstract.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectAbstract = void 0;
var Event_1 = __webpack_require__(/*! ./Event */ "./node_modules/mudde-core/src/Core/ObserverPattern/Event.ts");
/**
 * Subject for Observer pattern
 *
 * @author        Olaf Mudde <olaf.mudde@xs4all.nl>
 * @copyright     (c) 2021
 * @license       MIT
 */
var SubjectAbstract = /** @class */ (function () {
    function SubjectAbstract() {
        this._observers = [];
        this._pause = [];
    }
    SubjectAbstract.prototype.attach = function (eventNumber, observer) {
        var _a;
        this._observers[eventNumber] = (_a = this._observers[eventNumber]) !== null && _a !== void 0 ? _a : [];
        this._observers[eventNumber].push(observer);
    };
    SubjectAbstract.prototype.detach = function (observer) {
        this._observers.forEach(function (observerList) {
            observerList.flatten(function (item) { return item !== observer; });
        });
    };
    SubjectAbstract.prototype.notify = function (source, eventNumber) {
        if (eventNumber === void 0) { eventNumber = null; }
        var event = source instanceof Event_1.Event ? source : new Event_1.Event(source, eventNumber);
        var pause = this._pause;
        if (this._observers[eventNumber]) {
            this._observers[eventNumber].forEach(function (element) {
                pause.indexOf(element) != -1 || typeof element === 'function'
                    ? element(event)
                    : element.update(event);
            });
        }
    };
    SubjectAbstract.prototype.pauseAttach = function (observer) {
        var pause = this._pause;
        if (pause.indexOf(observer) == -1) {
            this._pause.push(observer);
        }
    };
    SubjectAbstract.prototype.pauseDetach = function (observer) {
        var pause = this._pause;
        var indexOf = pause.indexOf(observer);
        if (indexOf !== -1) {
            this._pause = __spreadArray(__spreadArray([], pause.slice(0, indexOf), true), pause.slice(indexOf + 1), true);
        }
    };
    return SubjectAbstract;
}());
exports.SubjectAbstract = SubjectAbstract;


/***/ }),

/***/ "./node_modules/mudde-core/src/Helper/GuidHelper.ts":
/*!**********************************************************!*\
  !*** ./node_modules/mudde-core/src/Helper/GuidHelper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuidHelper = void 0;
/**
 * GuidHelper
 *
 * @source        https://raw.githubusercontent.com/NicolasDeveloper/guid-typescript/master/lib/guid.ts
 */
// 
var GuidHelper = /** @class */ (function () {
    function GuidHelper(guid) {
        if (!guid) {
            throw new TypeError("Invalid argument; `value` has no value.");
        }
        this.value = GuidHelper.EMPTY;
        if (guid && GuidHelper.isGuid(guid)) {
            this.value = guid;
        }
    }
    GuidHelper.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof GuidHelper || GuidHelper.validator.test(value));
    };
    GuidHelper.create = function () {
        return new GuidHelper([GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-"));
    };
    GuidHelper.createEmpty = function () {
        return new GuidHelper("emptyGuid");
    };
    GuidHelper.parse = function (guid) {
        return new GuidHelper(guid);
    };
    GuidHelper.raw = function () {
        return [GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-");
    };
    GuidHelper.gen = function (count) {
        var out = "";
        for (var i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    GuidHelper.prototype.equals = function (other) {
        return GuidHelper.isGuid(other) && this.value === other.toString();
    };
    GuidHelper.prototype.isEmpty = function () {
        return this.value === GuidHelper.EMPTY;
    };
    GuidHelper.prototype.toString = function () {
        return this.value;
    };
    GuidHelper.prototype.toJSON = function () {
        return {
            value: this.value,
        };
    };
    GuidHelper.validator = new RegExp("^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$", "i");
    GuidHelper.EMPTY = "00000000-0000-0000-0000-000000000000";
    return GuidHelper;
}());
exports.GuidHelper = GuidHelper;


/***/ }),

/***/ "./node_modules/mudde-core/src/Helper/StringHelper.ts":
/*!************************************************************!*\
  !*** ./node_modules/mudde-core/src/Helper/StringHelper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringHelper = void 0;
/**
 * StringHelper for common string mainpulations
 *
 * @author        Olaf Mudde <olaf.mudde@xs4all.nl>
 * @copyright     (c) 2021
 * @license       MIT
 */
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.ucFirst = function (value) {
        if (value === undefined)
            return;
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;


/***/ }),

/***/ "./src/Builder/GeneralBuilder.ts":
/*!***************************************!*\
  !*** ./src/Builder/GeneralBuilder.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralBuilder = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ../BuilderAbstract */ "./src/BuilderAbstract.ts");
var GeneralBuilder = /** @class */ (function (_super) {
    __extends(GeneralBuilder, _super);
    function GeneralBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralBuilder.prototype.handler = function (output) {
    };
    return GeneralBuilder;
}(BuilderAbstract_1.BuilderAbstract));
exports.GeneralBuilder = GeneralBuilder;


/***/ }),

/***/ "./src/Builder/TabsBuilder.ts":
/*!************************************!*\
  !*** ./src/Builder/TabsBuilder.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TabsBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var FormBuilderAbstract_1 = __webpack_require__(/*! ../FormBuilderAbstract */ "./src/FormBuilderAbstract.ts");
var TabsBuilder = /** @class */ (function (_super) {
    __extends(TabsBuilder, _super);
    function TabsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsBuilder.prototype.handler = function (output) {
        var htmlForm = output.root;
        var panels = htmlForm.getElementsByClassName('panel');
        var tabs = new NodeCore_1.NodeCore('ul', { class: "nav nav-tabs" });
        for (var key = 0; key < panels.length; key++) {
            var x = panels.item(key);
            var panelId = x.id;
            var panelLabel = x.getAttribute('data-formgen-name');
            var javascript = "javascript:var panelName='".concat(panelId, "'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })");
            tabs
                .appendElement(new NodeCore_1.NodeCore('li', { class: 'nav-item' }))
                .appendElement(new NodeCore_1.NodeCore('a', { class: 'nav-link ', href: javascript }, panelLabel));
            if (key === 0) {
                tabs.addClass('active');
            }
            else {
                panels[key].setAttribute('hidden', '');
            }
        }
        output
            .gotoRoot()
            .prependElement_(tabs);
    };
    return TabsBuilder;
}(FormBuilderAbstract_1.FormBuilderAbstract));
exports.TabsBuilder = TabsBuilder;


/***/ }),

/***/ "./src/Builder/index.ts":
/*!******************************!*\
  !*** ./src/Builder/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./GeneralBuilder */ "./src/Builder/GeneralBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./TabsBuilder */ "./src/Builder/TabsBuilder.ts"), exports);


/***/ }),

/***/ "./src/BuilderAbstract.ts":
/*!********************************!*\
  !*** ./src/BuilderAbstract.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuilderAbstract = void 0;
var BaseHandler_1 = __webpack_require__(/*! mudde-core/src/Core/ChainOfResponsibility/BaseHandler */ "./node_modules/mudde-core/src/Core/ChainOfResponsibility/BaseHandler.ts");
var BuilderAbstract = /** @class */ (function (_super) {
    __extends(BuilderAbstract, _super);
    function BuilderAbstract(input) {
        var _this = _super.call(this) || this;
        _this._input = input;
        return _this;
    }
    Object.defineProperty(BuilderAbstract.prototype, "input", {
        get: function () {
            if (this._input === undefined)
                throw new Error('Input not set!');
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    return BuilderAbstract;
}(BaseHandler_1.BaseHandler));
exports.BuilderAbstract = BuilderAbstract;


/***/ }),

/***/ "./src/Button/Submit.ts":
/*!******************************!*\
  !*** ./src/Button/Submit.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Submit = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var ButtonAbstract_1 = __webpack_require__(/*! ../ButtonAbstract */ "./src/ButtonAbstract.ts");
var Submit = /** @class */ (function (_super) {
    __extends(Submit, _super);
    function Submit(config, form) {
        var _this = _super.call(this, form) || this;
        _this.configuring(config);
        return _this;
    }
    Submit.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Submit.prototype.click = function (event) {
        event.preventDefault();
        var form = jQuery(this.form).data('creator');
        if (!form.validate()) {
            form.showValidationErrors();
            return;
        }
        form
            .post()
            .then(function (data) {
            alert('saved!');
        })
            .catch(function (error) {
            console.debug(error);
            alert('error');
        });
    };
    Submit.prototype.coreHTMLInput = function (id, name, language) {
        var formId = this.form.id;
        //  todo  Onclick to just a submit button onclick="Form.save()"  Gr.O.M.
        var attributes = {
            type: 'button',
            name: "submit-".concat(formId),
            class: 'btn btn-primary',
            value: this.label
        };
        var element = new NodeCore_1.NodeCore('input', attributes);
        element.root.addEventListener('click', this.click);
        return element;
    };
    return Submit;
}(ButtonAbstract_1.ButtonAbstract));
exports.Submit = Submit;


/***/ }),

/***/ "./src/Button/SubmitModal.ts":
/*!***********************************!*\
  !*** ./src/Button/SubmitModal.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmitModal = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var ButtonAbstract_1 = __webpack_require__(/*! ../ButtonAbstract */ "./src/ButtonAbstract.ts");
var SubmitModal = /** @class */ (function (_super) {
    __extends(SubmitModal, _super);
    function SubmitModal(config, form) {
        var _this = _super.call(this, form) || this;
        _this.configuring(config);
        return _this;
    }
    SubmitModal.prototype.getDefaultConfig = function () {
        return __assign({ originalForm: null, uri: '', fieldId: '' }, _super.prototype.getDefaultConfig.call(this));
    };
    SubmitModal.prototype.click = function (event) {
        event.preventDefault();
        var form = this.form;
        var parentForm = this.parentForm;
        var parentFieldId = this.fieldId;
        if (form.validate()) {
            form.showValidationErrors();
            return;
        }
        form.post().then(function (data) {
            parentForm.getFieldById(parentFieldId).addValue(data['id'], data['name']);
        });
    };
    SubmitModal.prototype.x = function (event) {
        //  todo  Form.save  Gr.O.M.
        var form = this.form;
        var htmlForm = document.forms[form.id];
        var data = {};
        Array.from(htmlForm.elements).forEach(function (element) {
            var elementName = element.name.substring(element.name.lastIndexOf('_') + 1);
            if (elementName && elementName == "id")
                return;
            if (element.type && element.type == "button")
                return;
            data[elementName] = element.type === 'file'
                ? Array.from(element.files).flatMap(function (file) { return file.name; })
                : element.type === 'select-multiple'
                    ? Array.from(element.selectedOptions).flatMap(function (x) { return x.value; })
                    : data[elementName] = element.value;
        });
        var fieldId = this.fieldId;
        var mainForm = this.parentForm;
        var uri = this.uri;
        //  todo  Form.save()  Gr.O.M.
        jQuery
            .ajax({
            url: uri,
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        })
            .then(function (data2) {
            $('#model_' + fieldId).modal("hide");
            $('form#' + fieldId).trigger('reset');
            var mainField = mainForm.fields[fieldId];
            if (!mainField)
                throw new Error('Original field not found!');
            mainField.addValue(data2['id'], data2['name']);
            mainField.setValue(data2['id']);
        }, function (error) {
            throw new Error(error.statusText);
        });
        return false;
    };
    SubmitModal.prototype.coreHTMLInput = function (id, name, language) {
        var main = this;
        var form = this.form;
        var formId = form.id;
        var attributes = {
            id: id,
            type: 'button',
            class: 'btn btn-default',
            name: "submit-".concat(formId),
            value: this.label
        };
        var element = new NodeCore_1.NodeCore('input', attributes);
        element.click(function (event) { event.preventDefault(); main.click(event); });
        return element;
    };
    return SubmitModal;
}(ButtonAbstract_1.ButtonAbstract));
exports.SubmitModal = SubmitModal;


/***/ }),

/***/ "./src/Button/index.ts":
/*!*****************************!*\
  !*** ./src/Button/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Submit */ "./src/Button/Submit.ts"), exports);
__exportStar(__webpack_require__(/*! ./SubmitModal */ "./src/Button/SubmitModal.ts"), exports);


/***/ }),

/***/ "./src/ButtonAbstract.ts":
/*!*******************************!*\
  !*** ./src/ButtonAbstract.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var GuidHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var ButtonAbstract = /** @class */ (function (_super) {
    __extends(ButtonAbstract, _super);
    function ButtonAbstract(form) {
        var _this = _super.call(this) || this;
        _this.__type = '';
        _this._label = '';
        _this._form = form;
        return _this;
    }
    ButtonAbstract.prototype.getDefaultConfig = function () {
        return {
            label: '',
        };
    };
    ButtonAbstract.prototype.render = function () {
        var output = this.coreHTMLInput(GuidHelper_1.GuidHelper.create().toString(), 'x', 'nl');
        return output;
    };
    Object.defineProperty(ButtonAbstract.prototype, "_type", {
        get: function () {
            return this.__type;
        },
        set: function (value) {
            this.__type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonAbstract.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonAbstract.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Input not properly initialized!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    return ButtonAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.ButtonAbstract = ButtonAbstract;


/***/ }),

/***/ "./src/CoreBuildInterface.ts":
/*!***********************************!*\
  !*** ./src/CoreBuildInterface.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Data/Api.ts":
/*!*************************!*\
  !*** ./src/Data/Api.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Api = void 0;
var DataAbstract_1 = __webpack_require__(/*! ../DataAbstract */ "./src/DataAbstract.ts");
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api(config) {
        var _this = _super.call(this) || this;
        _this._url = '';
        _this._type = '';
        _this._contentType = '';
        _this._charset = '';
        _this._id = '';
        _this.configuring(config);
        return _this;
    }
    Api.prototype.getDefaultConfig = function () {
        var _this = this;
        return __assign({ url: '', type: 'get', contentType: 'application/json', charset: 'utf-8', processItem: function (data) { _this._data = data; }, errorItem: function (error) { throw new Error(error.statusText); }, finishedItem: function () { } }, _super.prototype.getDefaultConfig.call(this));
    };
    Api.prototype.ajaxSettings = function (method) {
        if (method === void 0) { method = 'get'; }
        var settings = {
            url: this.url,
            method: method,
            type: this.type,
            contentType: this.contentType + (this.charset ? '; charset=' + this.charset : ''),
            data: method !== 'get' ? this.data : null
        };
        return settings;
    };
    Api.prototype.post = function () {
        var settings = this.ajaxSettings('post');
        return new Promise(function (resolve, reject) {
            jQuery.ajax(settings).done(resolve).fail(reject);
        });
    };
    Api.prototype.put = function () {
        var settings = this.ajaxSettings('put');
        return new Promise(function (resolve, reject) {
            jQuery.ajax(settings).done(resolve).fail(reject);
        });
    };
    Api.prototype.delete = function () {
        var settings = this.ajaxSettings('delete');
        return new Promise(function (resolve, reject) {
            jQuery.ajax(settings).done(resolve).fail(reject);
        });
    };
    Api.prototype.init = function () {
        var main = this;
        var settings = {
            url: main.url,
            type: main.type,
            contentType: main.contentType + (main.charset ? '; charset=' + main.charset : ''),
        };
        return new Promise(function (resolve, reject) {
            jQuery.ajax(settings).done(resolve).fail(reject);
        });
    };
    Api.prototype.process = function (data) {
        this._originalData = data;
        !this.processItem || this.processItem(data);
    };
    Api.prototype.error = function (error) {
        this._originalData = null;
        !this.errorItem || this.errorItem(error);
    };
    Api.prototype.finished = function () {
        !this.finishedItem || this.finishedItem();
    };
    Object.defineProperty(Api.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "contentType", {
        get: function () {
            return this._contentType;
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "charset", {
        get: function () {
            return this._charset;
        },
        set: function (value) {
            this._charset = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "processItem", {
        get: function () {
            return this._processItem;
        },
        set: function (value) {
            this._processItem = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "errorItem", {
        get: function () {
            return this._errorItem;
        },
        set: function (value) {
            this._errorItem = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "finishedItem", {
        get: function () {
            return this._finishedItem;
        },
        set: function (value) {
            this._finishedItem = value;
        },
        enumerable: false,
        configurable: true
    });
    return Api;
}(DataAbstract_1.DataAbstract));
exports.Api = Api;


/***/ }),

/***/ "./src/Data/Array.ts":
/*!***************************!*\
  !*** ./src/Data/Array.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Array = void 0;
var DataAbstract_1 = __webpack_require__(/*! ../DataAbstract */ "./src/DataAbstract.ts");
var Array = /** @class */ (function (_super) {
    __extends(Array, _super);
    function Array(config) {
        var _this = _super.call(this) || this;
        _this.configuring(config);
        return _this;
    }
    Array.prototype.post = function () {
        return new Promise(function (resolve, reject) {
            resolve;
        });
    };
    Array.prototype.put = function () {
        return new Promise(function (resolve, reject) {
            resolve;
        });
    };
    Array.prototype.delete = function () {
        var main = this;
        return new Promise(function (resolve, reject) {
            main.data = [];
            resolve;
        });
    };
    return Array;
}(DataAbstract_1.DataAbstract));
exports.Array = Array;


/***/ }),

/***/ "./src/Data/index.ts":
/*!***************************!*\
  !*** ./src/Data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Array */ "./src/Data/Array.ts"), exports);
__exportStar(__webpack_require__(/*! ./Api */ "./src/Data/Api.ts"), exports);


/***/ }),

/***/ "./src/DataAbstract.ts":
/*!*****************************!*\
  !*** ./src/DataAbstract.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataAbstract = void 0;
var ts_mixer_1 = __webpack_require__(/*! ts-mixer */ "./node_modules/ts-mixer/dist/esm/index.js");
var ConfigurableAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var SubjectAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/SubjectAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/SubjectAbstract.ts");
var ObserverAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/ObserverAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/ObserverAbstract.ts");
var DataEvent_1 = __webpack_require__(/*! ./DataEvent */ "./src/DataEvent.ts");
var DataAbstract = /** @class */ (function (_super) {
    __extends(DataAbstract, _super);
    function DataAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = [];
        _this._originalData = [];
        return _this;
    }
    DataAbstract.prototype.getDefaultConfig = function () {
        return {
            data: [],
            originalData: []
        };
    };
    DataAbstract.prototype.configuring = function (config) {
        var _this = this;
        _super.prototype.configuring.call(this, config);
        this.init().then(function (data) {
            _this.notify(new DataEvent_1.DataEvent(_this, DataAbstract.DATA_POST_GET, null));
            _this.process(data);
            _this.notify(new DataEvent_1.DataEvent(_this, DataAbstract.DATA_POST_SET, null));
        }).catch(function (error) {
            _this.notify(new DataEvent_1.DataEvent(_this, DataAbstract.DATA_ERROR, null));
            _this.error(error);
        }).finally(function () {
            _this.notify(new DataEvent_1.DataEvent(_this, DataAbstract.DATA_FINALLY, null));
            _this.finished();
        });
    };
    /** @override */
    DataAbstract.prototype.init = function () {
        return new Promise(function (resolve, reject) {
            resolve;
        });
    };
    /** @override */
    DataAbstract.prototype.process = function (data) {
        this._originalData = data;
    };
    /** @override */
    DataAbstract.prototype.error = function (error) {
        this._originalData = null;
        throw new Error(error);
    };
    /** @override */
    DataAbstract.prototype.finished = function () {
    };
    /** @override */
    DataAbstract.prototype.update = function (event) {
    };
    DataAbstract.prototype.get = function (id) {
        this.notify(new DataEvent_1.DataEvent(this, DataAbstract.DATA_PRE_GET, id));
        var value = this._data[id];
        this.notify(new DataEvent_1.DataEvent(this, DataAbstract.DATA_POST_GET, id));
        return value;
    };
    DataAbstract.prototype.set = function (id, value) {
        this.notify(new DataEvent_1.DataEvent(this, DataAbstract.DATA_PRE_SET, id));
        this._data[id] = value;
        this.notify(new DataEvent_1.DataEvent(this, DataAbstract.DATA_POST_SET, id));
        this.notify(new DataEvent_1.DataEvent(this, DataAbstract.DATA_FINALLY, id));
    };
    DataAbstract.prototype.restore = function (id) {
        if (!this._originalData[id])
            throw new Error('Id not found to restore!');
        this._data[id] = this._originalData[id];
    };
    DataAbstract.prototype.forEach = function (callable) {
        this._data.forEach(callable);
        return this;
    };
    Object.defineProperty(DataAbstract.prototype, "data", {
        get: function () {
            if (this._data === undefined)
                throw new Error('Data not set!');
            return this._data;
        },
        set: function (value) {
            this._data = this._originalData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAbstract.prototype, "originalData", {
        get: function () {
            if (this._originalData === undefined)
                throw new Error('Original data not set!');
            return this._originalData;
        },
        set: function (value) {
            this._originalData = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAbstract.DATA_PRE_SET = 1;
    DataAbstract.DATA_POST_SET = 2;
    DataAbstract.DATA_PRE_GET = 4;
    DataAbstract.DATA_POST_GET = 8;
    DataAbstract.DATA_FINALLY = 16;
    DataAbstract.DATA_ERROR = 32;
    return DataAbstract;
}((0, ts_mixer_1.Mixin)(ConfigurableAbstract_1.ConfigurableAbstract, SubjectAbstract_1.SubjectAbstract, ObserverAbstract_1.ObserverAbstract)));
exports.DataAbstract = DataAbstract;


/***/ }),

/***/ "./src/DataEvent.ts":
/*!**************************!*\
  !*** ./src/DataEvent.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEvent = void 0;
var Event_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/Event */ "./node_modules/mudde-core/src/Core/ObserverPattern/Event.ts");
var DataEvent = /** @class */ (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent(source, event, id) {
        var _this = _super.call(this, source, event) || this;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(DataEvent.prototype, "id", {
        get: function () {
            if (this._id === undefined)
                throw new Error('Id not set!');
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return DataEvent;
}(Event_1.Event));
exports.DataEvent = DataEvent;


/***/ }),

/***/ "./src/Form.ts":
/*!*********************!*\
  !*** ./src/Form.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
var ts_mixer_1 = __webpack_require__(/*! ts-mixer */ "./node_modules/ts-mixer/dist/esm/index.js");
var ConfigurableAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GuidHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var StringHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var ObserverAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/ObserverAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/ObserverAbstract.ts");
var SubjectAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/SubjectAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/SubjectAbstract.ts");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(config) {
        var _this = 
        //  todo  var a='olaf'; var b='test ${a}'; let tpl = eval('`'+b+'`'); console.debug(tpl)  Gr.O.M.
        _super.call(this) || this;
        _this._id = '';
        _this._languages = [];
        _this._fields = {};
        _this._buttons = [];
        _this._rootForm = null; //  For pop-up forms  Gr.O.M.
        _this._panels = {};
        _this._additionalJs = [];
        _this._validations = {};
        _this._method = '';
        _this._action = '';
        _this.notify(_this, Form.EVENT_FORM_PRE_CONFIGURE);
        _this.form = new NodeCore_1.NodeCore('form');
        !jQuery.isEmptyObject(Form._forms) || $.validator.setDefaults(Form._validatorDefaults);
        _this.configuring(config);
        _this.updateForm();
        _this.notify(_this, Form.EVENT_FORM_POST_CONFIGURE);
        return _this;
    }
    Form.prototype.updateForm = function () {
        var form = this.form;
        Form._forms[this.id] = this;
        form.setAttributes({ method: this.method, action: this.action, id: this.id });
        jQuery(form.root).data('creator', this);
    };
    Form.prototype.getDefaultConfig = function () {
        return {
            id: GuidHelper_1.GuidHelper.raw(),
            data: {},
            languages: ['nl'],
            fields: {},
            buttons: [],
            layout: [],
            builder: [],
            panels: {},
            method: 'POST',
            action: '.'
        };
    };
    Form.prototype.configureFields = function (rawFields) {
        var main = this;
        var fields = this.fields = {};
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Input[type];
            var object = new className(config, main);
            fields[object.id] = object;
        });
    };
    Form.prototype.configureButtons = function (rawFields) {
        var main = this;
        var buttons = this.buttons = [];
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Button[type];
            var object = new className(config, main);
            buttons.push(object);
        });
    };
    Form.prototype.configureBuilder = function (rawFields) {
        var _this = this;
        !(rawFields.indexOf('GeneralBuilder') === -1) || rawFields.unshift('GeneralBuilder');
        rawFields.forEach(function (builder) {
            var className = window['MuddeFormgen'].Builder[builder];
            var handler = new className(_this);
            if (!_this._builder) {
                _this._builder = handler;
            }
            else {
                _this._builder.setNext(handler);
            }
        });
    };
    Form.prototype.configureData = function (config) {
        var object = null;
        var type = StringHelper_1.StringHelper.ucFirst(config['_type']);
        if (type) {
            var className = window['MuddeFormgen'].Data[type];
            object = new className(config, this);
            !object.init() || object.process();
        }
        this._data = object;
    };
    Form.getFormById = function (id) {
        var form = Form._forms[id];
        return form;
    };
    Form.prototype.getFieldById = function (id) {
        return this.fields[id];
    };
    Form.prototype.showValidationErrors = function () {
        var formValidation = this._formValidation;
        formValidation.checkForm();
        formValidation.showErrors(formValidation.errorMap);
        return formValidation.errorMap;
    };
    Form.prototype.validate = function () {
        return this._formValidation.checkForm();
    };
    Form.prototype.post = function () {
        return this.data.post();
    };
    Form.prototype.put = function () {
        return this.data.put();
    };
    Form.prototype.delete = function () {
        return this.data.delete();
    };
    Form.prototype.render = function () {
        if (this._form === undefined)
            throw new Error('Form not set!');
        this.notify(this, Form.EVENT_FORM_PRE_RENDER);
        var main = this;
        var form = this._form;
        return new Promise(function (resolve, reject) {
            var promises = main.addFields();
            form.clear();
            Promise
                .all(promises)
                .then(function (inputs) {
                var _a;
                inputs.forEach(function (input) {
                    form.appendElement_(input);
                });
                (_a = main._builder) === null || _a === void 0 ? void 0 : _a.handle(form);
            })
                .catch(function (error) {
                reject(error);
            })
                .finally(function () {
                main.addButtons();
                main.handleXtraJs();
            });
            main.notify(main, Form.EVENT_FORM_POST_RENDER);
            resolve(form);
            main.notify(main, Form.EVENT_FORM_FINISHED);
        });
    };
    Form.prototype.handleXtraJs = function () {
        var additionalJs = this._additionalJs;
        additionalJs.push(this.formExtraJS());
        Promise.all(additionalJs);
    };
    Form.prototype.formExtraJS = function () {
        var main = this;
        var rules = main._validations;
        return new Promise(function (resolve, reject) {
            var formgenValidator = $('#' + main.id).validate({ rules: rules });
            if (!formgenValidator) {
                return reject;
            }
            main._formValidation = formgenValidator;
            formgenValidator.checkForm();
            resolve;
        });
    };
    Form.prototype.initPanel = function (panelId, panelLabel) {
        var form = this._form;
        if (!(form === null || form === void 0 ? void 0 : form.hasElementById(panelId))) {
            form
                .gotoRoot()
                .appendNode_('div', { id: panelId, class: 'panel', 'data-formgen-name': panelLabel });
        }
    };
    Form.prototype.addButtons = function () {
        var form = this._form;
        form.gotoRoot();
        this.buttons.forEach(function (element) {
            form === null || form === void 0 ? void 0 : form.appendElement_(element.render());
        });
    };
    Form.prototype.addFields = function () {
        var main = this;
        var promises = [];
        var fields = this.fields;
        var _loop_1 = function (key) {
            var field = fields[key];
            var promise = new Promise(function (resolve, reject) {
                var _a, _b;
                var panelId = 'panel_' + field.panel;
                var panelLabel = (_a = main._panels[field.panel]) !== null && _a !== void 0 ? _a : panelId;
                var renderedElement = field.render();
                var rules = (_b = field.validations) === null || _b === void 0 ? void 0 : _b.handle();
                main.initPanel(panelId, panelLabel);
                !field.extraJs || main._additionalJs.push(new Promise(function (resolve, reject) { field.extraJs(); resolve; }));
                !field.hasValidations || (main._validations = __assign(__assign({}, main._validations), rules));
                resolve(renderedElement);
            });
            promises.push(promise);
        };
        for (var key in fields) {
            _loop_1(key);
        }
        return promises;
    };
    Form.prototype.update = function (event) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Form.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "panels", {
        get: function () {
            return this._panels;
        },
        set: function (value) {
            this._panels = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        set: function (value) {
            this._languages = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        set: function (value) {
            this._buttons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Form not set!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "rootForm", {
        get: function () {
            if (this._rootForm === undefined)
                throw new Error('Form not set!');
            return this._rootForm;
        },
        set: function (value) {
            this._rootForm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "builder", {
        get: function () {
            if (this._builder === undefined)
                throw new Error('Handler not set!');
            return this._builder;
        },
        set: function (value) {
            this._builder = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "additionalJs", {
        get: function () {
            return this._additionalJs;
        },
        set: function (value) {
            this._additionalJs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "method", {
        get: function () {
            return this._method;
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Form.EVENT_FORM_PRE_CONFIGURE = 1;
    Form.EVENT_FORM_POST_CONFIGURE = 2;
    Form.EVENT_FORM_PRE_RENDER = 4;
    Form.EVENT_FORM_POST_RENDER = 8;
    Form.EVENT_FORM_FINISHED = 16;
    Form._validatorDefaults = {
        dynamic: {
            settings: {
                trigger: [
                    "focusout", "keydown",
                    "keypress", "keyup"
                ]
            }
        },
        showErrors: function (errorMap) {
            for (var key in errorMap) {
                var item = $("#".concat(key, "-error"));
                var currentText = item.text();
                var errorText = errorMap[key] ? (errorMap[key] ? errorMap[key] : currentText) : '';
                item.text(errorText);
            }
        },
        debug: true,
        ignore: [".ck-hidden", ".ck, .select2-search__field", ".btn"]
    };
    Form._forms = {};
    return Form;
}((0, ts_mixer_1.Mixin)(ConfigurableAbstract_1.ConfigurableAbstract, SubjectAbstract_1.SubjectAbstract, ObserverAbstract_1.ObserverAbstract)));
exports.Form = Form;


/***/ }),

/***/ "./src/FormBuilderAbstract.ts":
/*!************************************!*\
  !*** ./src/FormBuilderAbstract.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormBuilderAbstract = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts");
var FormBuilderAbstract = /** @class */ (function (_super) {
    __extends(FormBuilderAbstract, _super);
    function FormBuilderAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormBuilderAbstract;
}(BuilderAbstract_1.BuilderAbstract));
exports.FormBuilderAbstract = FormBuilderAbstract;


/***/ }),

/***/ "./src/GroupInputAbstract.ts":
/*!***********************************!*\
  !*** ./src/GroupInputAbstract.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupInputAbstract = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var StringHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var Array_1 = __webpack_require__(/*! ./Data/Array */ "./src/Data/Array.ts");
var InputAbstract_1 = __webpack_require__(/*! ./InputAbstract */ "./src/InputAbstract.ts");
var GroupInputAbstract = /** @class */ (function (_super) {
    __extends(GroupInputAbstract, _super);
    function GroupInputAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buildData = new Array_1.Array({ data: [] });
        _this._currentData = {};
        return _this;
    }
    GroupInputAbstract.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { data: new Array_1.Array({ data: [] }) });
    };
    GroupInputAbstract.prototype.configureData = function (config) {
        var type = StringHelper_1.StringHelper.ucFirst(config['_type']);
        var className = window['MuddeFormgen'].Data[type];
        var object = new className(config, this);
        this._buildData = object;
    };
    GroupInputAbstract.prototype.render = function () {
        var _this = this;
        var _a;
        var mainId = this.id;
        var isMultilingual = this.isMultilingual;
        var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
        var output = new NodeCore_1.NodeCore('div', {});
        var ids = this.coreHTMLElements = [];
        output.appendElement(this.preCoreHTMLInput());
        this._buildData.forEach(function (data) {
            _this.currentData = data;
            languages.forEach(function (language) {
                var id = isMultilingual ? "".concat(mainId, "_").concat(language) : mainId;
                var name = isMultilingual ? "".concat(mainId, "[").concat(language, "]") : mainId;
                var object = _this.coreHTMLInput(id, name, language);
                ids.push(object);
                output.appendElement_(object);
            });
            output.appendElement(_this.postCoreHTMLInput());
        });
        output
            .prependElement(this.preHTMLInput())
            .appendElement(this.postHTMLInput());
        (_a = this.handler) === null || _a === void 0 ? void 0 : _a.handle(output);
        return output;
    };
    Object.defineProperty(GroupInputAbstract.prototype, "buildData", {
        get: function () {
            return this._buildData;
        },
        set: function (value) {
            this._buildData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupInputAbstract.prototype, "currentData", {
        get: function () {
            return this._currentData;
        },
        set: function (value) {
            this._currentData = value;
        },
        enumerable: false,
        configurable: true
    });
    return GroupInputAbstract;
}(InputAbstract_1.InputAbstract));
exports.GroupInputAbstract = GroupInputAbstract;


/***/ }),

/***/ "./src/Helper/BootstrapHelper.ts":
/*!***************************************!*\
  !*** ./src/Helper/BootstrapHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapHelper = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var BootstrapHelper = /** @class */ (function () {
    function BootstrapHelper() {
    }
    BootstrapHelper.modal = function (id) {
        var modelId = 'model_' + id;
        var modelLabelId = 'model_label_' + id;
        var modelBodyId = 'model_body_' + id;
        return new NodeCore_1.NodeCore('div', { class: 'width-100' })
            .appendNode_('div', { class: "modal fade", id: modelId, tabindex: "-1", "aria-labelledby": modelLabelId, "aria-hidden": "true" })
            .appendNode_('div', { class: "modal-dialog" })
            .appendNode_('div', { class: "modal-content" })
            .appendNode_('div', { class: "modal-header" })
            .appendNode('h5', { id: modelLabelId, class: "modal-title" }, 'Form')
            .appendNode('button', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
            ._()
            .appendNode_('div', { class: "modal-body", id: modelBodyId });
    };
    return BootstrapHelper;
}());
exports.BootstrapHelper = BootstrapHelper;


/***/ }),

/***/ "./src/Helper/IconHelper.ts":
/*!**********************************!*\
  !*** ./src/Helper/IconHelper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconHelper = void 0;
var IconHelper = /** @class */ (function () {
    function IconHelper() {
    }
    IconHelper.suitHeart = function (size) {
        if (size === void 0) { size = '1em'; }
        return "<svg width=\"".concat(size, "\" height=\"").concat(size, "\" viewBox=\"0 0 16 16\" class=\"bi bi-suit-heart ml-1\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" d=\"M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z\"/>\n      </svg>");
    };
    IconHelper.starFill = function (size) {
        if (size === void 0) { size = '1em'; }
        return "<svg width=\"".concat(size, "\" height=\"").concat(size, "\" viewBox=\"0 0 16 16\" class=\"bi bi-star-fill ml-1 mb-2\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n    </svg>");
    };
    return IconHelper;
}());
exports.IconHelper = IconHelper;


/***/ }),

/***/ "./src/Helper/index.ts":
/*!*****************************!*\
  !*** ./src/Helper/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IconHelper */ "./src/Helper/IconHelper.ts"), exports);
__exportStar(__webpack_require__(/*! ./BootstrapHelper */ "./src/Helper/BootstrapHelper.ts"), exports);


/***/ }),

/***/ "./src/Input/Builder/BootstrapBuilder.ts":
/*!***********************************************!*\
  !*** ./src/Input/Builder/BootstrapBuilder.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputBuilderAbstract_1 = __webpack_require__(/*! ../../InputBuilderAbstract */ "./src/InputBuilderAbstract.ts");
var BootstrapBuilder = /** @class */ (function (_super) {
    __extends(BootstrapBuilder, _super);
    function BootstrapBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootstrapBuilder.prototype.handler = function (output) {
        var input = this.input;
        var label = output.getElementByTagName('label').item(0);
        label === null || label === void 0 ? void 0 : label.classList.add('form-label');
        var help = output.getElementByClass('help').item(0);
        if (help) {
            help.classList.add('form-text');
            help.innerHTML = input.help;
        }
        input.coreHTMLElements.forEach(function (item) {
            var classes = '' + item.getAttribute('class');
            if (classes.indexOf('form-check') === -1) {
                item.gotoRoot().addClass('form-control');
            }
        });
        if (input.isMultilingual) {
            input.form.languages.forEach(function (language) {
                var id = input.id + '_' + language;
                output
                    .getElementById(id)
                    .moveInNode(function (oldNode) {
                    return new NodeCore_1.NodeCore('div', { class: 'input-group mb-1' })
                        .appendNode_('span', { class: 'input-group-text' })
                        .appendNode('i', { class: "".concat(language, " flag mr-0") })
                        ._()
                        .appendElement_(oldNode);
                });
            });
        }
    };
    return BootstrapBuilder;
}(InputBuilderAbstract_1.InputBuilderAbstract));
exports.BootstrapBuilder = BootstrapBuilder;


/***/ }),

/***/ "./src/Input/Builder/GeneralBuilder.ts":
/*!*********************************************!*\
  !*** ./src/Input/Builder/GeneralBuilder.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var IconHelper_1 = __webpack_require__(/*! ../../Helper/IconHelper */ "./src/Helper/IconHelper.ts");
var InputBuilderAbstract_1 = __webpack_require__(/*! ../../InputBuilderAbstract */ "./src/InputBuilderAbstract.ts");
var GeneralBuilder = /** @class */ (function (_super) {
    __extends(GeneralBuilder, _super);
    function GeneralBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralBuilder.prototype.handler = function (output) {
        var input = this.input;
        var panelId = 'panel_' + input.panel;
        var elements = input.coreHTMLElements;
        var labelText = input.label + (input.require ? IconHelper_1.IconHelper.starFill('9px') : '');
        var label = new NodeCore_1.NodeCore('label', { for: elements[0].id, class: 'myLabel' });
        var help = new NodeCore_1.NodeCore('span', { class: 'help', id: 'help_' + input.id });
        var error = new NodeCore_1.NodeCore('label', { class: 'error', id: input.id + '-error', for: input.id });
        label.innerHTML = labelText;
        input.coreHTMLElements.forEach(function (item) {
            item.setAttributes({
                panelId: panelId,
            });
        });
        output
            .gotoRoot()
            .prependElement_(label)
            .appendElement_(help)
            .appendElement_(error);
    };
    return GeneralBuilder;
}(InputBuilderAbstract_1.InputBuilderAbstract));
exports.GeneralBuilder = GeneralBuilder;


/***/ }),

/***/ "./src/Input/Builder/index.ts":
/*!************************************!*\
  !*** ./src/Input/Builder/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BootstrapBuilder */ "./src/Input/Builder/BootstrapBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./GeneralBuilder */ "./src/Input/Builder/GeneralBuilder.ts"), exports);


/***/ }),

/***/ "./src/Input/Checkbox.ts":
/*!*******************************!*\
  !*** ./src/Input/Checkbox.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Checkbox = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GroupInputAbstract_1 = __webpack_require__(/*! ../GroupInputAbstract */ "./src/GroupInputAbstract.ts");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this.configuring(config);
        return _this;
    }
    Checkbox.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Checkbox.prototype.coreHTMLInput = function (id, name, language) {
        var currentData = this.currentData;
        var element = new NodeCore_1.NodeCore('div', { 'class': 'form-check table-cell' });
        var newId = id + '_' + currentData.id;
        element
            .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'checkbox',
            value: currentData.id
        })
            .appendNode_('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    };
    Checkbox.prototype.setValue = function (value) {
        throw new Error('No value to manipulate!');
    };
    Checkbox.prototype.getValue = function () {
        throw new Error('No value to manipulate!');
    };
    Checkbox.prototype.addValue = function (key, value) {
        throw new Error('No value to manipulate!');
    };
    return Checkbox;
}(GroupInputAbstract_1.GroupInputAbstract));
exports.Checkbox = Checkbox;


/***/ }),

/***/ "./src/Input/Ckeditor.ts":
/*!*******************************!*\
  !*** ./src/Input/Ckeditor.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ckeditor = void 0;
var ckeditor5_build_classic_1 = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
var Textarea_1 = __webpack_require__(/*! ./Textarea */ "./src/Input/Textarea.ts");
var Ckeditor = /** @class */ (function (_super) {
    __extends(Ckeditor, _super);
    function Ckeditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ckeditor.prototype.coreHTMLInput = function (id, name, language) {
        var element = _super.prototype.coreHTMLInput.call(this, id, name, language);
        this.extraJs = function () { ckeditor5_build_classic_1.ClassicEditor.create(" + name + "); };
        return element;
    };
    return Ckeditor;
}(Textarea_1.Textarea));
exports.Ckeditor = Ckeditor;


/***/ }),

/***/ "./src/Input/Combobox.ts":
/*!*******************************!*\
  !*** ./src/Input/Combobox.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Combobox = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var DataAbstract_1 = __webpack_require__(/*! ../DataAbstract */ "./src/DataAbstract.ts");
var Array_1 = __webpack_require__(/*! ../Data/Array */ "./src/Data/Array.ts");
var StringHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._multiple = false;
        _this._buildData = new Array_1.Array({ data: [] });
        _this.configuring(config);
        return _this;
    }
    Combobox.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { multiple: false, data: new Array_1.Array({ data: [] }) });
    };
    Combobox.prototype.configureData = function (config) {
        var type = StringHelper_1.StringHelper.ucFirst(config['_type']);
        var className = window['MuddeFormgen'].Data[type];
        var object = this._buildData = new className(config, this);
        object.attach(DataAbstract_1.DataAbstract.DATA_FINALLY, this);
    };
    Combobox.prototype.update = function (event) {
        console.debug(event);
    };
    Combobox.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('select', __assign(__assign({ id: id, name: name }, this.placeholder ? { placeholder: this.placeholder } : {}), this.multiple === true ? { 'multiple': '' } : {}));
        if (this.multiple !== true) {
            element.appendNode('option', { value: '' }, '');
        }
        return element;
    };
    Combobox.prototype.setValue = function (values) {
        var setValueFunction = (typeof values == 'string' || typeof values == 'number')
            ? function (element) {
                $('#' + element.id).val(values);
            }
            : function (element) {
                element.removeChildren();
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var _a = values_1[_i], key = _a[0], value = _a[1];
                    element.appendNode('option', { value: key }, value);
                }
            };
        this.coreHTMLElements.forEach(setValueFunction);
    };
    Combobox.prototype.getValue = function () {
        var values = {};
        var lastValue = null;
        this.coreHTMLElements.forEach(function (value) {
            lastValue = values[value.id] = value;
        });
        return this.multiple ? values : lastValue;
    };
    Combobox.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (element) {
            element.appendNode('option', { value: key }, value);
        });
    };
    Object.defineProperty(Combobox.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Combobox.prototype, "buildData", {
        get: function () {
            return this._buildData;
        },
        set: function (value) {
            this._buildData = value;
        },
        enumerable: false,
        configurable: true
    });
    return Combobox;
}(InputAbstract_1.InputAbstract));
exports.Combobox = Combobox;


/***/ }),

/***/ "./src/Input/Email.ts":
/*!****************************!*\
  !*** ./src/Input/Email.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Email = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this.configuring(config);
        return _this;
    }
    Email.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Email.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'email',
            'aria-label': this.label,
            'data-language': language
        });
        return element;
    };
    Email.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (item) {
            item.setAttributes({ value: value });
        });
    };
    Email.prototype.getValue = function () {
        return this.coreHTMLElements.every(function (item) {
            return item.getAttribute('value');
        });
    };
    Email.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (item) {
            var newValue = item.getAttribute('value') + value;
            item.setAttributes({ value: newValue });
        });
    };
    return Email;
}(InputAbstract_1.InputAbstract));
exports.Email = Email;


/***/ }),

/***/ "./src/Input/Number.ts":
/*!*****************************!*\
  !*** ./src/Input/Number.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Number = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._mask = '';
        _this._format = '';
        _this._prefix = '';
        _this._suffix = '';
        _this.configuring(config);
        return _this;
    }
    Number.prototype.canBeMultilingual = function () { return true; };
    Number.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { mask: '', format: '', prefix: '', suffix: '' });
    };
    Number.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'number',
            placeholder: this.placeholder,
        });
        if (this.readonly) {
            element.setAttributes({ readonly: true });
        }
        return element;
    };
    Number.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (item) {
            item.setAttributes({ value: value });
        });
    };
    Number.prototype.getValue = function () {
        return this.coreHTMLElements.every(function (item) {
            return item.getAttribute('value');
        });
    };
    Number.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (item) {
            var newValue = item.getAttribute('value') + value;
            item.setAttributes({ value: newValue });
        });
    };
    Object.defineProperty(Number.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (value) {
            this._mask = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Number.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Number.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Number.prototype, "suffix", {
        get: function () {
            return this._suffix;
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    return Number;
}(InputAbstract_1.InputAbstract));
exports.Number = Number;


/***/ }),

/***/ "./src/Input/Radio.ts":
/*!****************************!*\
  !*** ./src/Input/Radio.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Radio = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GroupInputAbstract_1 = __webpack_require__(/*! ../GroupInputAbstract */ "./src/GroupInputAbstract.ts");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this.configuring(config);
        return _this;
    }
    Radio.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Radio.prototype.coreHTMLInput = function (id, name, language) {
        var currentData = this.currentData;
        var element = new NodeCore_1.NodeCore('div', { 'class': 'form-check table-cell' });
        var newId = id + '_' + currentData.id;
        element
            .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'radio',
            value: currentData.id
        })
            .appendNode('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    };
    Radio.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (element) {
            var root = element.root; //  todo  HTMLInputElement  Gr.O.M.
            if (root.value != value) {
                element.root.childNodes.forEach(function (item) {
                    if (item.value == value) {
                        item.setAttribute('selected', null);
                    }
                    else {
                        item.removeAttribute('selected');
                    }
                });
            }
        });
    };
    Radio.prototype.getValue = function () {
        var output = {};
        var coreHTMLElements = this.coreHTMLElements;
        var lastRootValue = null;
        coreHTMLElements.forEach(function (element) {
            var root = element.root; //  todo  HTMLInputElement  Gr.O.M.
            var value = root.value;
            output[root.id] = lastRootValue = value;
        });
        return coreHTMLElements.length == 1 ? lastRootValue : output;
    };
    Radio.prototype.addValue = function (key, value) {
        var id = this.id;
        var newId = id + '_' + key;
        this.coreHTMLElements.forEach(function (element) {
            element.appendNode('input', {
                id: newId,
                name: id,
                class: 'form-check-input',
                type: 'radio',
                value: key
            })
                .appendNode('label', {
                'for': newId,
                'class': 'form-check-label'
            }, value);
        });
    };
    return Radio;
}(GroupInputAbstract_1.GroupInputAbstract));
exports.Radio = Radio;


/***/ }),

/***/ "./src/Input/RadioOrElse.ts":
/*!**********************************!*\
  !*** ./src/Input/RadioOrElse.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RadioOrElse = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GroupInputAbstract_1 = __webpack_require__(/*! ../GroupInputAbstract */ "./src/GroupInputAbstract.ts");
var RadioOrElse = /** @class */ (function (_super) {
    __extends(RadioOrElse, _super);
    function RadioOrElse(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this.configuring(config);
        return _this;
    }
    RadioOrElse.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    RadioOrElse.prototype.coreHTMLInput = function (id, name, language) {
        var currentData = this.currentData;
        var element = new NodeCore_1.NodeCore('div', { 'class': 'form-check table-cell' });
        this.addValue(currentData.id, currentData.value);
        return element;
    };
    RadioOrElse.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (element) {
            var root = element.root; //  todo  HTMLInputElement  Gr.O.M.
            if (root.value != value) {
                element.root.childNodes.forEach(function (item) {
                    if (item.value == value) {
                        item.setAttribute('selected', null);
                    }
                    else {
                        item.removeAttribute('selected');
                    }
                });
            }
        });
    };
    RadioOrElse.prototype.getValue = function () {
        var output = {};
        var coreHTMLElements = this.coreHTMLElements;
        var lastRootValue = null;
        coreHTMLElements.forEach(function (element) {
            var root = element.root; //  todo  HTMLInputElement  Gr.O.M.
            var value = root.value;
            output[root.id] = lastRootValue = value;
        });
        return coreHTMLElements.length == 1 ? lastRootValue : output;
    };
    RadioOrElse.prototype.addValue = function (key, value) {
        var id = this.id;
        var newId = id + '_' + key;
        this.coreHTMLElements.forEach(function (element) {
            element.appendNode('input', {
                id: newId,
                name: id,
                class: 'form-check-input',
                type: 'radio',
                value: key
            })
                .appendNode('label', {
                'for': newId,
                'class': 'form-check-label'
            }, value);
        });
    };
    return RadioOrElse;
}(GroupInputAbstract_1.GroupInputAbstract));
exports.RadioOrElse = RadioOrElse;


/***/ }),

/***/ "./src/Input/Select2.ts":
/*!******************************!*\
  !*** ./src/Input/Select2.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Select2 = void 0;
var Combobox_1 = __webpack_require__(/*! ./Combobox */ "./src/Input/Combobox.ts");
var Select2 = /** @class */ (function (_super) {
    __extends(Select2, _super);
    function Select2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select2.prototype.coreHTMLInput = function (id, name, language) {
        var element = _super.prototype.coreHTMLInput.call(this, id, name, language);
        return element;
    };
    Select2.prototype.update = function (event) {
        var source = event.source;
        var id = source.id;
        this.extraJs = function () {
            $('#' + id).select2();
        };
    };
    return Select2;
}(Combobox_1.Combobox));
exports.Select2 = Select2;


/***/ }),

/***/ "./src/Input/Select2Relation.ts":
/*!**************************************!*\
  !*** ./src/Input/Select2Relation.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Select2Relation = void 0;
var MuddeFormgen = __webpack_require__(/*! ../index */ "./src/index.ts");
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var Combobox_1 = __webpack_require__(/*! ./Combobox */ "./src/Input/Combobox.ts");
var Helper_1 = __webpack_require__(/*! ../Helper */ "./src/Helper/index.ts");
var Select2Relation = /** @class */ (function (_super) {
    __extends(Select2Relation, _super);
    function Select2Relation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select2Relation.prototype.coreHTMLInput = function (id, name, language) {
        var element = _super.prototype.coreHTMLInput.call(this, id, name, language);
        element.setAttributes({ 'style': 'width: 90%;' });
        return element;
    };
    Select2Relation.prototype.update = function (event) {
        var main = this;
        var id = this.coreHTMLElements[0].id;
        var formId = this.form.id;
        var element = document.getElementById(id);
        var source = event.source;
        var data = source.data;
        var uri = source.url + '/form';
        var modal = Helper_1.BootstrapHelper.modal(id);
        var addButton = new NodeCore_1.NodeCore('button', { type: "button", class: "btn btn-primary btn-self", "data-bs-toggle": "modal", "data-bs-target": "#model_" + id }, '+');
        data.forEach(function (item) {
            var itemNode = new NodeCore_1.NodeCore('option', { value: item.id }, item.name);
            element.appendChild(itemNode.root);
        });
        $("#" + id).select2();
        $(addButton.root).insertBefore('#' + id + '-error');
        $(modal.root).insertAfter('#' + formId);
        jQuery
            .ajax({ url: uri })
            .then(function (config) {
            var replaceButton = config.buttons[0];
            replaceButton._type = 'SubmitModal';
            replaceButton.originalForm = main.form;
            replaceButton.uri = source.url;
            replaceButton.fieldId = id;
            var form = new MuddeFormgen.Form(config);
            form.render().then(function (value) {
                $(value.root).appendTo('#model_body_' + id);
            });
        }, function (error) {
            throw new Error(error.statusText);
        });
    };
    return Select2Relation;
}(Combobox_1.Combobox));
exports.Select2Relation = Select2Relation;


/***/ }),

/***/ "./src/Input/Text.ts":
/*!***************************!*\
  !*** ./src/Input/Text.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Text = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._mask = '';
        _this._format = '';
        _this._prefix = '';
        _this._suffix = '';
        _this._multiple = false;
        _this._spellcheck = false;
        _this.configuring(config);
        return _this;
    }
    Text.prototype.canBeMultilingual = function () { return true; };
    Text.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
    };
    Text.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'text',
            placeholder: this.placeholder,
            spellcheck: this.spellcheck
        });
        !this.readonly || element.setAttributes({ readonly: null });
        return element;
    };
    Text.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (item) {
            item.setAttributes({ value: value });
        });
    };
    Text.prototype.getValue = function () {
        return this.coreHTMLElements.every(function (item) {
            return item.getAttribute('value');
        });
    };
    Text.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (item) {
            var newValue = item.getAttribute('value') + value;
            item.setAttributes({ value: newValue });
        });
    };
    Object.defineProperty(Text.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (value) {
            this._mask = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "suffix", {
        get: function () {
            return this._suffix;
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "spellcheck", {
        get: function () {
            return this._spellcheck;
        },
        set: function (value) {
            this._spellcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(InputAbstract_1.InputAbstract));
exports.Text = Text;


/***/ }),

/***/ "./src/Input/TextRead.ts":
/*!*******************************!*\
  !*** ./src/Input/TextRead.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextRead = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var TextRead = /** @class */ (function (_super) {
    __extends(TextRead, _super);
    function TextRead(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._mask = '';
        _this._format = '';
        _this._prefix = '';
        _this._suffix = '';
        _this._multiple = false;
        _this._spellcheck = false;
        _this.configuring(config);
        return _this;
    }
    TextRead.prototype.canBeMultilingual = function () { return true; };
    TextRead.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
    };
    TextRead.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'text',
            placeholder: this.placeholder,
            spellcheck: this.spellcheck,
            readonly: ''
        });
        return element;
    };
    TextRead.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (item) {
            item.innerHTML = value;
        });
    };
    TextRead.prototype.getValue = function () {
        return this.coreHTMLElements.every(function (item) {
            return item.innerHTML;
        });
    };
    TextRead.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (item) {
            var newValue = item.innerHTML + value;
            item.setAttributes({ value: newValue });
        });
    };
    Object.defineProperty(TextRead.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (value) {
            this._mask = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRead.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRead.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRead.prototype, "suffix", {
        get: function () {
            return this._suffix;
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRead.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRead.prototype, "spellcheck", {
        get: function () {
            return this._spellcheck;
        },
        set: function (value) {
            this._spellcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    return TextRead;
}(InputAbstract_1.InputAbstract));
exports.TextRead = TextRead;


/***/ }),

/***/ "./src/Input/Textarea.ts":
/*!*******************************!*\
  !*** ./src/Input/Textarea.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Textarea = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._spellcheck = false;
        _this.configuring(config);
        return _this;
    }
    Textarea.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { spellcheck: false });
    };
    Textarea.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('textarea', {
            id: id,
            name: name,
            spellcheck: this.spellcheck
        });
        return element;
    };
    Textarea.prototype.setValue = function (value) {
        this.coreHTMLElements.forEach(function (item) {
            item.innerHTML = value;
        });
    };
    Textarea.prototype.getValue = function () {
        return this.coreHTMLElements.every(function (item) {
            return item.innerHTML;
        });
    };
    Textarea.prototype.addValue = function (key, value) {
        this.coreHTMLElements.forEach(function (item) {
            item.root.append(value);
        });
    };
    Object.defineProperty(Textarea.prototype, "spellcheck", {
        get: function () {
            return this._spellcheck;
        },
        set: function (value) {
            this._spellcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    return Textarea;
}(InputAbstract_1.InputAbstract));
exports.Textarea = Textarea;


/***/ }),

/***/ "./src/Input/UploadFile.ts":
/*!*********************************!*\
  !*** ./src/Input/UploadFile.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadFile = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var UploadFile = /** @class */ (function (_super) {
    __extends(UploadFile, _super);
    function UploadFile(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._multiple = false;
        _this.configuring(config);
        return _this;
    }
    UploadFile.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { multiple: false });
    };
    UploadFile.prototype.coreHTMLInput = function (id, name, language) {
        var attributes = __assign({ id: id, name: name, type: 'file' }, this.multiple ? { multiple: '' } : {});
        var element = new NodeCore_1.NodeCore('input', attributes);
        return element;
    };
    UploadFile.prototype.setValue = function (value) {
    };
    UploadFile.prototype.getValue = function () {
    };
    UploadFile.prototype.addValue = function (key, value) {
    };
    Object.defineProperty(UploadFile.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    return UploadFile;
}(InputAbstract_1.InputAbstract));
exports.UploadFile = UploadFile;


/***/ }),

/***/ "./src/Input/UploadImage.ts":
/*!**********************************!*\
  !*** ./src/Input/UploadImage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadImage = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var UploadImage = /** @class */ (function (_super) {
    __extends(UploadImage, _super);
    function UploadImage(config, form, data) {
        var _this = _super.call(this, form, data) || this;
        _this._multiple = false;
        _this._accept = '';
        _this.configuring(config);
        return _this;
    }
    UploadImage.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { accept: 'image/x-png, image/gif, image/jpeg', multiple: false });
    };
    UploadImage.prototype.postCoreHTMLInput = function () {
        return new NodeCore_1.NodeCore('b', {}, 'Hello');
    };
    UploadImage.prototype.coreHTMLInput = function (id, name, language) {
        var attributes = __assign({ id: id, name: name, type: 'file', accept: this.accept }, this.multiple ? { multiple: '' } : {});
        // todo  Add JS to show and edit images!  Gr.O.M.
        //  var img = document.createElement('img'); 
        //  img.setAttribute('src', URL.createObjectURL(temp1.files[0])); 
        //  document.getElementById('fileimage').parentNode.appendChild(img)
        var element = new NodeCore_1.NodeCore('input', attributes);
        return element;
    };
    UploadImage.prototype.setValue = function (value) {
    };
    UploadImage.prototype.getValue = function () {
    };
    UploadImage.prototype.addValue = function (key, value) {
    };
    Object.defineProperty(UploadImage.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadImage.prototype, "accept", {
        get: function () {
            return this._accept;
        },
        set: function (value) {
            this._accept = value;
        },
        enumerable: false,
        configurable: true
    });
    return UploadImage;
}(InputAbstract_1.InputAbstract));
exports.UploadImage = UploadImage;


/***/ }),

/***/ "./src/Input/index.ts":
/*!****************************!*\
  !*** ./src/Input/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Builder = void 0;
// created from 'create-ts-index'
var BuilderImport = __webpack_require__(/*! ./Builder */ "./src/Input/Builder/index.ts");
exports.Builder = BuilderImport;
__exportStar(__webpack_require__(/*! ./Checkbox */ "./src/Input/Checkbox.ts"), exports);
__exportStar(__webpack_require__(/*! ./Ckeditor */ "./src/Input/Ckeditor.ts"), exports);
__exportStar(__webpack_require__(/*! ./Combobox */ "./src/Input/Combobox.ts"), exports);
__exportStar(__webpack_require__(/*! ./Email */ "./src/Input/Email.ts"), exports);
__exportStar(__webpack_require__(/*! ./Number */ "./src/Input/Number.ts"), exports);
__exportStar(__webpack_require__(/*! ./Radio */ "./src/Input/Radio.ts"), exports);
__exportStar(__webpack_require__(/*! ./RadioOrElse */ "./src/Input/RadioOrElse.ts"), exports);
__exportStar(__webpack_require__(/*! ./Select2 */ "./src/Input/Select2.ts"), exports);
__exportStar(__webpack_require__(/*! ./Select2Relation */ "./src/Input/Select2Relation.ts"), exports);
__exportStar(__webpack_require__(/*! ./Text */ "./src/Input/Text.ts"), exports);
__exportStar(__webpack_require__(/*! ./Textarea */ "./src/Input/Textarea.ts"), exports);
__exportStar(__webpack_require__(/*! ./TextRead */ "./src/Input/TextRead.ts"), exports);
__exportStar(__webpack_require__(/*! ./UploadFile */ "./src/Input/UploadFile.ts"), exports);
__exportStar(__webpack_require__(/*! ./UploadImage */ "./src/Input/UploadImage.ts"), exports);


/***/ }),

/***/ "./src/InputAbstract.ts":
/*!******************************!*\
  !*** ./src/InputAbstract.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputAbstract = void 0;
var ts_mixer_1 = __webpack_require__(/*! ts-mixer */ "./node_modules/ts-mixer/dist/esm/index.js");
var ConfigurableAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var SubjectAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/SubjectAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/SubjectAbstract.ts");
var ObserverAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ObserverPattern/ObserverAbstract */ "./node_modules/mudde-core/src/Core/ObserverPattern/ObserverAbstract.ts");
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GuidHelper_1 = __webpack_require__(/*! mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var DataAbstract_1 = __webpack_require__(/*! ./DataAbstract */ "./src/DataAbstract.ts");
var InputAbstract = /** @class */ (function (_super) {
    __extends(InputAbstract, _super);
    function InputAbstract(form, data) {
        var _this = _super.call(this) || this;
        _this.__type = '';
        _this._id = '';
        _this._label = '';
        _this._help = '';
        _this._placeholder = '';
        _this._panel = '';
        _this._unique = false;
        _this._input = false;
        _this._autofocus = false;
        _this._hidden = false;
        _this._require = false;
        _this._readonly = false;
        _this._multilingual = false;
        _this._coreHTMLElements = [];
        _this.notify(_this, InputAbstract.EVENT_INPUT_PRE_CONFIGURE);
        _this._form = form;
        _this._data = data;
        return _this;
    }
    InputAbstract.prototype.configuring = function (config) {
        _super.prototype.configuring.call(this, config);
        this.init();
    };
    InputAbstract.prototype.handleDataEvent = function (event) {
        var id = this.id;
        if (event.id !== id)
            return;
        var dataSource = event.source;
        this.setValue(dataSource.get(id));
    };
    InputAbstract.prototype.updateDataEvent = function (event) {
        var input = event.source;
        var dataSource = input._data;
        dataSource.pauseAttach(this.handleDataEvent);
        dataSource.set(input.id, input.getValue());
        dataSource.pauseDetach(this.handleDataEvent);
    };
    InputAbstract.prototype.init = function () {
        var main = this;
        var mainId = this.id;
        var isMultilingual = this.isMultilingual;
        var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
        var coreHTMLElements = this.coreHTMLElements = [];
        var formData = this._data;
        var data = formData.get(mainId);
        formData.attach(DataAbstract_1.DataAbstract.DATA_POST_SET, main.handleDataEvent);
        main.attach(InputAbstract.EVENT_INPUT_POST_CHANGE, main.updateDataEvent);
        for (var key in languages) {
            var language = languages[key];
            var id = isMultilingual ? "".concat(mainId, "_").concat(language) : mainId;
            var name_1 = isMultilingual ? "".concat(mainId, "[").concat(language, "]") : mainId;
            var object = this.coreHTMLInput(id, name_1, language);
            coreHTMLElements.push(object);
        }
        this.setValue(data);
    };
    InputAbstract.prototype.preCoreHTMLInput = function () { return null; };
    InputAbstract.prototype.preHTMLInput = function () { return null; };
    InputAbstract.prototype.postCoreHTMLInput = function () { return null; };
    InputAbstract.prototype.postHTMLInput = function () { return null; };
    InputAbstract.prototype.javascript = function () { return ''; };
    InputAbstract.prototype.canBeMultilingual = function () { return false; };
    InputAbstract.prototype.update = function (event) { };
    InputAbstract.prototype.getDefaultConfig = function () {
        return {
            _type: 'Text',
            id: GuidHelper_1.GuidHelper.raw(),
            input: true,
            label: '',
            help: '',
            unique: false,
            validations: [],
            placeholder: '',
            panel: null,
            autofocus: false,
            require: false,
            readonly: false,
            hidden: false,
            multilingual: false,
            builders: []
        };
    };
    InputAbstract.prototype.configureId = function (rawFields) {
        var formId = this.form.id;
        var id = formId + '_' + rawFields;
        this.id = id;
    };
    InputAbstract.prototype.configureBuilders = function (rawFields) {
        var main = this;
        rawFields.unshift('GeneralBuilder');
        rawFields.forEach(function (builder) {
            var className = window['MuddeFormgen'].Input.Builder[builder];
            var handler = new className(main);
            if (!main._handlerBuilders) {
                main._handlerBuilders = handler;
            }
            else {
                main._handlerBuilders.setNext(handler);
            }
        });
    };
    InputAbstract.prototype.configureValidations = function (rawFields) {
        var _this = this;
        var main = this;
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Validation[type];
            var handler = new className(main, config);
            if (!_this._handlerValidations) {
                main._handlerValidations = handler;
            }
            else {
                main._handlerValidations.setNext(handler);
            }
        });
    };
    InputAbstract.prototype.render = function () {
        var _a;
        var coreElements = this.coreHTMLElements;
        var output = new NodeCore_1.NodeCore('div', {});
        output.appendElement(this.preCoreHTMLInput());
        for (var key in coreElements) {
            var element = coreElements[key];
            output.appendElement_(element);
        }
        output
            .appendElement_(this.postCoreHTMLInput())
            .prependElement_(this.preHTMLInput())
            .appendElement_(this.postHTMLInput());
        (_a = this._handlerBuilders) === null || _a === void 0 ? void 0 : _a.handle(output);
        return output;
    };
    Object.defineProperty(InputAbstract.prototype, "isMultilingual", {
        get: function () {
            var _a, _b;
            var isMultilingualRequested = ((_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.languages) === null || _b === void 0 ? void 0 : _b.length) > 1 && this.multilingual;
            return this.canBeMultilingual() && isMultilingualRequested;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "extraJs", {
        get: function () {
            return this._extraJs;
        },
        set: function (extraJs) {
            var currentJs = this._extraJs;
            this._extraJs = function () {
                !currentJs || currentJs();
                extraJs();
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "_type", {
        get: function () {
            return this.__type;
        },
        set: function (value) {
            this.__type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "help", {
        get: function () {
            return this._help;
        },
        set: function (value) {
            this._help = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "unique", {
        get: function () {
            return this._unique;
        },
        set: function (value) {
            this._unique = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "handler", {
        get: function () {
            if (this._handlerBuilders === undefined)
                throw new Error('Handler not set!');
            return this._handlerBuilders;
        },
        set: function (value) {
            this._handlerBuilders = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "autofocus", {
        get: function () {
            return this._autofocus;
        },
        set: function (value) {
            this._autofocus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "require", {
        get: function () {
            return this._require;
        },
        set: function (value) {
            this._require = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (value) {
            this._readonly = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "multilingual", {
        get: function () {
            return this._multilingual;
        },
        set: function (value) {
            this._multilingual = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Input not properly initialized!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "panel", {
        get: function () {
            return this._panel;
        },
        set: function (value) {
            this._panel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "coreHTMLElements", {
        get: function () {
            return this._coreHTMLElements;
        },
        set: function (value) {
            this._coreHTMLElements = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "hasValidations", {
        get: function () {
            return this._handlerValidations !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "validations", {
        get: function () {
            return this._handlerValidations;
        },
        enumerable: false,
        configurable: true
    });
    InputAbstract.EVENT_INPUT_PRE_CONFIGURE = 1;
    InputAbstract.EVENT_INPUT_POST_CONFIGURE = 2;
    InputAbstract.EVENT_INPUT_FINISHED = 3;
    InputAbstract.EVENT_INPUT_PRE_CHANGE = 4;
    InputAbstract.EVENT_INPUT_POST_CHANGE = 5;
    return InputAbstract;
}((0, ts_mixer_1.Mixin)(ConfigurableAbstract_1.ConfigurableAbstract, SubjectAbstract_1.SubjectAbstract, ObserverAbstract_1.ObserverAbstract)));
exports.InputAbstract = InputAbstract;


/***/ }),

/***/ "./src/InputBuilderAbstract.ts":
/*!*************************************!*\
  !*** ./src/InputBuilderAbstract.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputBuilderAbstract = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts");
var InputBuilderAbstract = /** @class */ (function (_super) {
    __extends(InputBuilderAbstract, _super);
    function InputBuilderAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InputBuilderAbstract;
}(BuilderAbstract_1.BuilderAbstract));
exports.InputBuilderAbstract = InputBuilderAbstract;


/***/ }),

/***/ "./src/StorableInterface.ts":
/*!**********************************!*\
  !*** ./src/StorableInterface.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Validation/Length.ts":
/*!**********************************!*\
  !*** ./src/Validation/Length.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Length = void 0;
var ValidationAbstract_1 = __webpack_require__(/*! ../ValidationAbstract */ "./src/ValidationAbstract.ts");
var Length = /** @class */ (function (_super) {
    __extends(Length, _super);
    function Length(input, config) {
        var _this = _super.call(this, input, config) || this;
        _this._min = 0;
        _this._max = 0;
        _this.configuring(config);
        return _this;
    }
    Length.prototype.getDefaultConfig = function () {
        return {
            min: 0,
            max: 0
        };
    };
    Length.prototype.handler = function (output) {
        var id = this._input.id;
        var attributes = __assign(__assign({}, this.min > 0 ? { minlength: this.min } : {}), this.max > 0 ? { maxlength: this.max } : {});
        output[id] = __assign(__assign({}, output[id]), attributes);
        return output;
    };
    Object.defineProperty(Length.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Length.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: false,
        configurable: true
    });
    return Length;
}(ValidationAbstract_1.ValidationAbstract));
exports.Length = Length;


/***/ }),

/***/ "./src/Validation/NotEmpty.ts":
/*!************************************!*\
  !*** ./src/Validation/NotEmpty.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotEmpty = void 0;
var ValidationAbstract_1 = __webpack_require__(/*! ../ValidationAbstract */ "./src/ValidationAbstract.ts");
var NotEmpty = /** @class */ (function (_super) {
    __extends(NotEmpty, _super);
    function NotEmpty(input, config) {
        var _this = _super.call(this, input, config) || this;
        _this.configuring(config);
        return _this;
    }
    NotEmpty.prototype.getDefaultConfig = function () {
        return {};
    };
    NotEmpty.prototype.handler = function (output) {
        var id = this._input.id;
        var attributes = {
            required: true
        };
        output[id] = __assign(__assign({}, output[id]), attributes);
        return output;
    };
    return NotEmpty;
}(ValidationAbstract_1.ValidationAbstract));
exports.NotEmpty = NotEmpty;


/***/ }),

/***/ "./src/Validation/index.ts":
/*!*********************************!*\
  !*** ./src/Validation/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Length */ "./src/Validation/Length.ts"), exports);
__exportStar(__webpack_require__(/*! ./NotEmpty */ "./src/Validation/NotEmpty.ts"), exports);


/***/ }),

/***/ "./src/ValidationAbstract.ts":
/*!***********************************!*\
  !*** ./src/ValidationAbstract.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var ValidationAbstract = /** @class */ (function (_super) {
    __extends(ValidationAbstract, _super);
    function ValidationAbstract(input, config) {
        var _this = _super.call(this) || this;
        _this._input = input;
        return _this;
    }
    ValidationAbstract.prototype.setNext = function (event) {
        if (this._handler) {
            this._handler.setNext(event);
        }
        else {
            this._handler = event;
        }
        return this._handler;
    };
    ValidationAbstract.prototype.handle = function (data) {
        if (data === void 0) { data = {}; }
        this.handler(data);
        if (this._handler) {
            this._handler.handle(data);
        }
        return data;
    };
    return ValidationAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.ValidationAbstract = ValidationAbstract;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Validation = exports.Input = exports.Helper = exports.Data = exports.Button = exports.Builder = void 0;
// created from 'create-ts-index'
var BuilderImport = __webpack_require__(/*! ./Builder */ "./src/Builder/index.ts");
var ButtonImport = __webpack_require__(/*! ./Button */ "./src/Button/index.ts");
var DataImport = __webpack_require__(/*! ./Data */ "./src/Data/index.ts");
var HelperImport = __webpack_require__(/*! ./Helper */ "./src/Helper/index.ts");
var InputImport = __webpack_require__(/*! ./Input */ "./src/Input/index.ts");
var ValidationImport = __webpack_require__(/*! ./Validation */ "./src/Validation/index.ts");
exports.Builder = BuilderImport;
exports.Button = ButtonImport;
exports.Data = DataImport;
exports.Helper = HelperImport;
exports.Input = InputImport;
exports.Validation = ValidationImport;
__exportStar(__webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./ButtonAbstract */ "./src/ButtonAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./CoreBuildInterface */ "./src/CoreBuildInterface.ts"), exports);
__exportStar(__webpack_require__(/*! ./DataAbstract */ "./src/DataAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./DataEvent */ "./src/DataEvent.ts"), exports);
__exportStar(__webpack_require__(/*! ./Form */ "./src/Form.ts"), exports);
__exportStar(__webpack_require__(/*! ./FormBuilderAbstract */ "./src/FormBuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./GroupInputAbstract */ "./src/GroupInputAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./InputAbstract */ "./src/InputAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./InputBuilderAbstract */ "./src/InputBuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./StorableInterface */ "./src/StorableInterface.ts"), exports);
__exportStar(__webpack_require__(/*! ./ValidationAbstract */ "./src/ValidationAbstract.ts"), exports);


/***/ }),

/***/ "./node_modules/ts-mixer/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ts-mixer/dist/esm/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mixin": () => (/* binding */ Mixin),
/* harmony export */   "decorate": () => (/* binding */ decorate),
/* harmony export */   "hasMixin": () => (/* binding */ hasMixin),
/* harmony export */   "mix": () => (/* binding */ mix),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Utility function that works like `Object.apply`, but copies getters and setters properly as well.  Additionally gives
 * the option to exclude properties by name.
 */
const copyProps = (dest, src, exclude = []) => {
    const props = Object.getOwnPropertyDescriptors(src);
    for (let prop of exclude)
        delete props[prop];
    Object.defineProperties(dest, props);
};
/**
 * Returns the full chain of prototypes up until Object.prototype given a starting object.  The order of prototypes will
 * be closest to farthest in the chain.
 */
const protoChain = (obj, currentChain = [obj]) => {
    const proto = Object.getPrototypeOf(obj);
    if (proto === null)
        return currentChain;
    return protoChain(proto, [...currentChain, proto]);
};
/**
 * Identifies the nearest ancestor common to all the given objects in their prototype chains.  For most unrelated
 * objects, this function should return Object.prototype.
 */
const nearestCommonProto = (...objs) => {
    if (objs.length === 0)
        return undefined;
    let commonProto = undefined;
    const protoChains = objs.map(obj => protoChain(obj));
    while (protoChains.every(protoChain => protoChain.length > 0)) {
        const protos = protoChains.map(protoChain => protoChain.pop());
        const potentialCommonProto = protos[0];
        if (protos.every(proto => proto === potentialCommonProto))
            commonProto = potentialCommonProto;
        else
            break;
    }
    return commonProto;
};
/**
 * Creates a new prototype object that is a mixture of the given prototypes.  The mixing is achieved by first
 * identifying the nearest common ancestor and using it as the prototype for a new object.  Then all properties/methods
 * downstream of this prototype (ONLY downstream) are copied into the new object.
 *
 * The resulting prototype is more performant than softMixProtos(...), as well as ES5 compatible.  However, it's not as
 * flexible as updates to the source prototypes aren't captured by the mixed result.  See softMixProtos for why you may
 * want to use that instead.
 */
const hardMixProtos = (ingredients, constructor, exclude = []) => {
    var _a;
    const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
    const mixedProto = Object.create(base);
    // Keeps track of prototypes we've already visited to avoid copying the same properties multiple times.  We init the
    // list with the proto chain below the nearest common ancestor because we don't want any of those methods mixed in
    // when they will already be accessible via prototype access.
    const visitedProtos = protoChain(base);
    for (let prototype of ingredients) {
        let protos = protoChain(prototype);
        // Apply the prototype chain in reverse order so that old methods don't override newer ones.
        for (let i = protos.length - 1; i >= 0; i--) {
            let newProto = protos[i];
            if (visitedProtos.indexOf(newProto) === -1) {
                copyProps(mixedProto, newProto, ['constructor', ...exclude]);
                visitedProtos.push(newProto);
            }
        }
    }
    mixedProto.constructor = constructor;
    return mixedProto;
};
const unique = (arr) => arr.filter((e, i) => arr.indexOf(e) == i);

/**
 * Finds the ingredient with the given prop, searching in reverse order and breadth-first if searching ingredient
 * prototypes is required.
 */
const getIngredientWithProp = (prop, ingredients) => {
    const protoChains = ingredients.map(ingredient => protoChain(ingredient));
    // since we search breadth-first, we need to keep track of our depth in the prototype chains
    let protoDepth = 0;
    // not all prototype chains are the same depth, so this remains true as long as at least one of the ingredients'
    // prototype chains has an object at this depth
    let protosAreLeftToSearch = true;
    while (protosAreLeftToSearch) {
        // with the start of each horizontal slice, we assume this is the one that's deeper than any of the proto chains
        protosAreLeftToSearch = false;
        // scan through the ingredients right to left
        for (let i = ingredients.length - 1; i >= 0; i--) {
            const searchTarget = protoChains[i][protoDepth];
            if (searchTarget !== undefined && searchTarget !== null) {
                // if we find something, this is proof that this horizontal slice potentially more objects to search
                protosAreLeftToSearch = true;
                // eureka, we found it
                if (Object.getOwnPropertyDescriptor(searchTarget, prop) != undefined) {
                    return protoChains[i][0];
                }
            }
        }
        protoDepth++;
    }
    return undefined;
};
/**
 * "Mixes" ingredients by wrapping them in a Proxy.  The optional prototype argument allows the mixed object to sit
 * downstream of an existing prototype chain.  Note that "properties" cannot be added, deleted, or modified.
 */
const proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
    getPrototypeOf() {
        return prototype;
    },
    setPrototypeOf() {
        throw Error('Cannot set prototype of Proxies created by ts-mixer');
    },
    getOwnPropertyDescriptor(_, prop) {
        return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
    },
    defineProperty() {
        throw new Error('Cannot define new properties on Proxies created by ts-mixer');
    },
    has(_, prop) {
        return getIngredientWithProp(prop, ingredients) !== undefined || prototype[prop] !== undefined;
    },
    get(_, prop) {
        return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
    },
    set(_, prop, val) {
        const ingredientWithProp = getIngredientWithProp(prop, ingredients);
        if (ingredientWithProp === undefined)
            throw new Error('Cannot set new properties on Proxies created by ts-mixer');
        ingredientWithProp[prop] = val;
        return true;
    },
    deleteProperty() {
        throw new Error('Cannot delete properties on Proxies created by ts-mixer');
    },
    ownKeys() {
        return ingredients
            .map(Object.getOwnPropertyNames)
            .reduce((prev, curr) => curr.concat(prev.filter(key => curr.indexOf(key) < 0)));
    },
});
/**
 * Creates a new proxy-prototype object that is a "soft" mixture of the given prototypes.  The mixing is achieved by
 * proxying all property access to the ingredients.  This is not ES5 compatible and less performant.  However, any
 * changes made to the source prototypes will be reflected in the proxy-prototype, which may be desirable.
 */
const softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);

const settings = {
    initFunction: null,
    staticsStrategy: 'copy',
    prototypeStrategy: 'copy',
    decoratorInheritance: 'deep',
};

// Keeps track of constituent classes for every mixin class created by ts-mixer.
const mixins = new Map();
const getMixinsForClass = (clazz) => mixins.get(clazz);
const registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
const hasMixin = (instance, mixin) => {
    if (instance instanceof mixin)
        return true;
    const constructor = instance.constructor;
    const visited = new Set();
    let frontier = new Set();
    frontier.add(constructor);
    while (frontier.size > 0) {
        // check if the frontier has the mixin we're looking for.  if not, we can say we visited every item in the frontier
        if (frontier.has(mixin))
            return true;
        frontier.forEach(item => visited.add(item));
        // build a new frontier based on the associated mixin classes and prototype chains of each frontier item
        const newFrontier = new Set();
        frontier.forEach(item => {
            var _a;
            const itemConstituents = (_a = mixins.get(item)) !== null && _a !== void 0 ? _a : protoChain(item.prototype).map(proto => proto.constructor).filter(item => item !== null);
            if (itemConstituents)
                itemConstituents.forEach(constituent => {
                    if (!visited.has(constituent) && !frontier.has(constituent))
                        newFrontier.add(constituent);
                });
        });
        // we have a new frontier, now search again
        frontier = newFrontier;
    }
    // if we get here, we couldn't find the mixin anywhere in the prototype chain or associated mixin classes
    return false;
};

const mergeObjectsOfDecorators = (o1, o2) => {
    var _a, _b;
    const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
    const mergedObject = {};
    for (let key of allKeys)
        mergedObject[key] = unique([...((_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : []), ...((_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : [])]);
    return mergedObject;
};
const mergePropertyAndMethodDecorators = (d1, d2) => {
    var _a, _b, _c, _d;
    return ({
        property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
        method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {}),
    });
};
const mergeDecorators = (d1, d2) => {
    var _a, _b, _c, _d, _e, _f;
    return ({
        class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
        static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
        instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {}),
    });
};
const decorators = new Map();
const findAllConstituentClasses = (...classes) => {
    var _a;
    const allClasses = new Set();
    const frontier = new Set([...classes]);
    while (frontier.size > 0) {
        for (let clazz of frontier) {
            const protoChainClasses = protoChain(clazz.prototype).map(proto => proto.constructor);
            const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
            const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
            const newClasses = potentiallyNewClasses.filter(c => !allClasses.has(c));
            for (let newClass of newClasses)
                frontier.add(newClass);
            allClasses.add(clazz);
            frontier.delete(clazz);
        }
    }
    return [...allClasses];
};
const deepDecoratorSearch = (...classes) => {
    const decoratorsForClassChain = findAllConstituentClasses(...classes)
        .map(clazz => decorators.get(clazz))
        .filter(decorators => !!decorators);
    if (decoratorsForClassChain.length == 0)
        return {};
    if (decoratorsForClassChain.length == 1)
        return decoratorsForClassChain[0];
    return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const directDecoratorSearch = (...classes) => {
    const classDecorators = classes.map(clazz => getDecoratorsForClass(clazz));
    if (classDecorators.length === 0)
        return {};
    if (classDecorators.length === 1)
        return classDecorators[1];
    return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const getDecoratorsForClass = (clazz) => {
    let decoratorsForClass = decorators.get(clazz);
    if (!decoratorsForClass) {
        decoratorsForClass = {};
        decorators.set(clazz, decoratorsForClass);
    }
    return decoratorsForClass;
};
const decorateClass = (decorator) => ((clazz) => {
    const decoratorsForClass = getDecoratorsForClass(clazz);
    let classDecorators = decoratorsForClass.class;
    if (!classDecorators) {
        classDecorators = [];
        decoratorsForClass.class = classDecorators;
    }
    classDecorators.push(decorator);
    return decorator(clazz);
});
const decorateMember = (decorator) => ((object, key, ...otherArgs) => {
    const decoratorTargetType = typeof object === 'function' ? 'static' : 'instance';
    const decoratorType = typeof object[key] === 'function' ? 'method' : 'property';
    const clazz = decoratorTargetType === 'static' ? object : object.constructor;
    const decoratorsForClass = getDecoratorsForClass(clazz);
    let decoratorsForTargetType = decoratorsForClass === null || decoratorsForClass === void 0 ? void 0 : decoratorsForClass[decoratorTargetType];
    if (!decoratorsForTargetType) {
        decoratorsForTargetType = {};
        decoratorsForClass[decoratorTargetType] = decoratorsForTargetType;
    }
    let decoratorsForType = decoratorsForTargetType === null || decoratorsForTargetType === void 0 ? void 0 : decoratorsForTargetType[decoratorType];
    if (!decoratorsForType) {
        decoratorsForType = {};
        decoratorsForTargetType[decoratorType] = decoratorsForType;
    }
    let decoratorsForKey = decoratorsForType === null || decoratorsForType === void 0 ? void 0 : decoratorsForType[key];
    if (!decoratorsForKey) {
        decoratorsForKey = [];
        decoratorsForType[key] = decoratorsForKey;
    }
    decoratorsForKey.push(decorator);
    // @ts-ignore
    return decorator(object, key, ...otherArgs);
});
const decorate = (decorator) => ((...args) => {
    if (args.length === 1)
        return decorateClass(decorator)(args[0]);
    return decorateMember(decorator)(...args);
});

function Mixin(...constructors) {
    var _a, _b, _c;
    const prototypes = constructors.map(constructor => constructor.prototype);
    // Here we gather up the init functions of the ingredient prototypes, combine them into one init function, and
    // attach it to the mixed class prototype.  The reason we do this is because we want the init functions to mix
    // similarly to constructors -- not methods, which simply override each other.
    const initFunctionName = settings.initFunction;
    if (initFunctionName !== null) {
        const initFunctions = prototypes
            .map(proto => proto[initFunctionName])
            .filter(func => typeof func === 'function');
        const combinedInitFunction = function (...args) {
            for (let initFunction of initFunctions)
                initFunction.apply(this, args);
        };
        const extraProto = { [initFunctionName]: combinedInitFunction };
        prototypes.push(extraProto);
    }
    function MixedClass(...args) {
        for (const constructor of constructors)
            // @ts-ignore: potentially abstract class
            copyProps(this, new constructor(...args));
        if (initFunctionName !== null && typeof this[initFunctionName] === 'function')
            this[initFunctionName].apply(this, args);
    }
    MixedClass.prototype = settings.prototypeStrategy === 'copy'
        ? hardMixProtos(prototypes, MixedClass)
        : softMixProtos(prototypes, MixedClass);
    Object.setPrototypeOf(MixedClass, settings.staticsStrategy === 'copy'
        ? hardMixProtos(constructors, null, ['prototype'])
        : proxyMix(constructors, Function.prototype));
    let DecoratedMixedClass = MixedClass;
    if (settings.decoratorInheritance !== 'none') {
        const classDecorators = settings.decoratorInheritance === 'deep'
            ? deepDecoratorSearch(...constructors)
            : directDecoratorSearch(...constructors);
        for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : [])
            DecoratedMixedClass = decorator(DecoratedMixedClass);
        applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
        applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
    }
    registerMixins(DecoratedMixedClass, constructors);
    return DecoratedMixedClass;
}
const applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
    const propDecorators = propAndMethodDecorators.property;
    const methodDecorators = propAndMethodDecorators.method;
    if (propDecorators)
        for (let key in propDecorators)
            for (let decorator of propDecorators[key])
                decorator(target, key);
    if (methodDecorators)
        for (let key in methodDecorators)
            for (let decorator of methodDecorators[key])
                decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
};
/**
 * A decorator version of the `Mixin` function.  You'll want to use this instead of `Mixin` for mixing generic classes.
 */
const mix = (...ingredients) => decoratedClass => {
    // @ts-ignore
    const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
    Object.defineProperty(mixedClass, 'name', {
        value: decoratedClass.name,
        writable: false,
    });
    return mixedClass;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=formgen.js.map