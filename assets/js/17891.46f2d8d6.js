(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[17891],{17891:function(t){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=6)}([function(t,e,r){t.exports=r(7)},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,s,"next",t)}function s(t){r(a,o,i,u,s,"throw",t)}u(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){"use strict";r.r(e),r.d(e,"file2b64",(function(){return u}));var n=r(1),o=r.n(n),i=r(0),a=r.n(i);function u(t){return s.apply(this,arguments)}function s(){return(s=o()(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new FileReader,n=new Promise((function(t){r.addEventListener("load",(function(){var e=r.result;t(e)}),!1)})),r.readAsDataURL(e),t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},function(t,e,r){var n=r(10),o=r(11),i=r(12),a=r(14);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){"use strict";r.r(e),r.d(e,"imageCompressor",(function(){return v}));var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=r(3),s=r.n(u),l=r(0),c=r.n(l),f=!0,h=!1,p={prefixString:function(){return"</> quill-image-compress: "},get log(){return f?console.log.bind(console,this.prefixString()):function(){}},get error(){return h?function(){}:console.error.bind(console,this.prefixString())},get warn(){return h?function(){}:console.warn.bind(console,this.prefixString())}},d=r(8).ImageDrop,g=r(4).file2b64,m=r(9).downscaleImage,v=function(){function t(e,r){var n=this;a()(this,t),this.quill=e,this.range=null,this.options=r,f=r&&r.debug,h=r&&r.suppressErrorLogging;var i=function(){var t=o()(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.log("onImageDrop",{dataUrl:e}),t.next=3,n.downscaleImageFromUrl(e);case 3:r=t.sent,n.insertToEditor(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();this.imageDrop=new d(e,i,p),function(t){t.maxWidth=t.maxWidth||1e3,t.maxHeight=t.maxHeight||1e3,t.maxWidth&&"number"!=typeof t.maxWidth&&(p.warn("[config error] 'maxWidth' is required to be a \"number\" (in pixels), \nrecieved: ".concat(t.maxWidth,"\n-> using default 1000")),t.maxWidth=1e3),t.maxHeight&&"number"!=typeof t.maxHeight&&(p.warn("[config error] 'maxHeight' is required to be a \"number\" (in pixels), \nrecieved: ".concat(t.maxHeight,"\n-> using default 1000")),t.maxHeight=1e3),t.quality&&"number"!=typeof t.quality&&(p.warn("quill.imageCompressor: [config error] 'quality' is required to be a \"number\", \nrecieved: ".concat(t.quality,"\n-> using default 0.7")),t.quality=.7),!t.imageType||"string"==typeof t.imageType&&t.imageType.startsWith("image/")||(p.warn('quill.imageCompressor: [config error] \'imageType\' is required be in the form of "image/png" or "image/jpeg" etc ..., \nrecieved: '.concat(t.imageType,"\n-> using default image/jpeg")),t.imageType="image/jpeg")}(r),p.log("fileChanged",{options:r,quill:e,debug:f});var u=this.quill.getModule("toolbar");u?u.addHandler("image",(function(){return n.selectLocalImage()})):p.error("Quill toolbar module not found! need { toolbar: // options } in Quill.modules for image icon to sit in")}var e,r;return s()(t,[{key:"selectLocalImage",value:function(){var t=this;this.range=this.quill.getSelection(),this.fileHolder=document.createElement("input"),this.fileHolder.setAttribute("type","file"),this.fileHolder.setAttribute("accept","image/*"),this.fileHolder.setAttribute("style","visibility:hidden"),this.fileHolder.onchange=function(){return t.fileChanged()},document.body.appendChild(this.fileHolder),this.fileHolder.click(),window.requestAnimationFrame((function(){document.body.removeChild(t.fileHolder)}))}},{key:"fileChanged",value:(r=o()(c.a.mark((function t(){var e,r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.fileHolder.files[0],p.log("fileChanged",{file:e}),e){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,g(e);case 6:return r=t.sent,t.next=9,this.downscaleImageFromUrl(r);case 9:n=t.sent,this.insertToEditor(n);case 11:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"downscaleImageFromUrl",value:(e=o()(c.a.mark((function t(e){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=p,t.next=3,m(e,this.options.maxWidth,this.options.maxHeight,this.options.imageType,this.options.quality,r);case 3:return n=t.sent,p.log("downscaleImageFromUrl",{dataUrl:e,dataUrlCompressed:n}),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"insertToEditor",value:function(t){p.log("insertToEditor",{url:t}),this.range=this.quill.getSelection();var e=this.range;this.logFileSize(t),this.quill.insertEmbed(e.index,"image","".concat(t),"user"),e.index++,this.quill.setSelection(e,"api")}},{key:"logFileSize",value:function(t){var e=(Math.round(3*(t.length-"data:image/png;base64,".length)/4)/1024).toFixed(0);p.log("estimated img size: "+e+" kb")}}]),t}();window.imageCompressor=v,e.default=v},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===c)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function f(){}function h(){}function p(){}var d={};u(d,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&r.call(m,o)&&(d=m);var v=p.prototype=f.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var s=l(t[o],t,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,u(v,"constructor",p),u(p,"constructor",h),h.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(v),u(v,a,"Generator"),u(v,o,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e),r.d(e,"ImageDrop",(function(){return h}));var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=r(3),s=r.n(u),l=r(0),c=r.n(l),f=r(4).file2b64,h=function(){function t(e,r,n){var o=this;a()(this,t),this.logger=n,this.quill=e,this.onNewDataUrl=r,this.quill.root.addEventListener("drop",(function(t){return o.handleDrop(t)}),!1),this.quill.root.addEventListener("paste",(function(t){return o.handlePaste(t)}),!1)}var e;return s()(t,[{key:"handleNewImageFiles",value:(e=o()(c.a.mark((function t(e){var r,n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Array.isArray(e)){t.next=2;break}return t.abrupt("return");case 2:if(r=e.pop()){t.next=5;break}return t.abrupt("return");case 5:return n=r.getAsFile?r.getAsFile():r,t.next=8,f(n);case 8:o=t.sent,this.logger.log("handlePaste",{base64ImageSrc:o}),this.onNewDataUrl(o);case 11:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"handleDrop",value:function(t){t.preventDefault();var e=t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length;if(this.logger.log("handleDrop",{hasFiles:e}),e){if(document.caretRangeFromPoint){var r=document.getSelection(),n=document.caretRangeFromPoint(t.clientX,t.clientY);r&&n&&r.setBaseAndExtent(n.startContainer,n.startOffset,n.startContainer,n.startOffset)}var o=this.getImageFiles(t.dataTransfer.files);this.handleNewImageFiles(o)}}},{key:"handlePaste",value:function(t){var e=t.clipboardData&&t.clipboardData.items&&!!t.clipboardData.items.length;if(this.logger.log("handlePaste",{hasItems:e}),e){var r=this.getImageFiles(t.clipboardData.items);0!==r.length&&(Array.from(t.clipboardData.items).some((function(t){return"text/html"===t.type}))?this.logger.log("detected html, not handling"):(t.preventDefault(),this.handleNewImageFiles(r)))}}},{key:"getImageFiles",value:function(t){var e=Array.from(t);return this.logger.log("readFiles",{files:e}),e.filter((function(t){return!!t.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)}))||[]}}]),t}()},function(t,e,r){"use strict";r.r(e),r.d(e,"downscaleImage",(function(){return l}));var n=r(5),o=r.n(n),i=r(1),a=r.n(i),u=r(0),s=r.n(u);function l(t,e,r,n,o,i){return c.apply(this,arguments)}function c(){return(c=a()(s.a.mark((function t(e,r,n,i,a,u){var l,c,h,p,d,g,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=i||"image/jpeg",a=a||.7,(l=new Image).src=e,t.next=6,new Promise((function(t){l.onload=function(){t()}}));case 6:return c=f(l.width,l.height,r,n),h=o()(c,2),p=h[0],d=h[1],(g=document.createElement("canvas")).width=p,g.height=d,g.getContext("2d").drawImage(l,0,0,p,d),m=g.toDataURL(i,a),u.log("downscaling image...",{args:{dataUrl:e,maxWidth:r,maxHeight:n,imageType:i,imageQuality:a},newHeight:d,newWidth:p}),t.abrupt("return",m);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e,r,n){if(t<=r&&e<=n)return[t,e];if(t>r){var o=r,i=Math.floor(e/t*o);if(i>n){var a=n;return[Math.floor(t/e*a),a]}return[o,i]}if(e>n){var u=n;return[Math.floor(t/e*u),u]}}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){var n=r(13);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0}])}}]);