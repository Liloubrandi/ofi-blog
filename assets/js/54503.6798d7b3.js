"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[54503],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},a=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,p=f["".concat(u,".").concat(d)]||f[d]||h[d]||i;return n?r.createElement(p,c(c({ref:t},a),{},{components:n})):r.createElement(p,c({ref:t},a))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14842:function(e,t,n){n.d(t,{SE:function(){return q}});var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const o="application/font-woff",i="image/jpeg",c={woff:o,woff2:o,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:i,jpeg:i,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function s(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return c[t]||""}function u(e){return-1!==e.search(/^(data:)/)}function l(e,t){return`data:${t};base64,${e}`}const a=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function h(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function f(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function d(e){return e.toBlob?new Promise((t=>e.toBlob(t))):new Promise((t=>{const n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r);for(let e=0;e<r;e+=1)o[e]=n.charCodeAt(e);t(new Blob([o],{type:"image/png"}))}))}function p(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e}))}function m(e,t,n){return r(this,void 0,void 0,(function*(){const o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),c=document.createElementNS(o,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),i.appendChild(c),c.appendChild(e),function(e){return r(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}))}(i)}))}const g={};function v(e,t){const n=function(e){let t=e.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(t)&&(t=t.replace(/.*\//,"")),t}(e);if(null!=g[n])return g[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const r=window.fetch(e).then((e=>e.blob().then((t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>{return{contentType:t,blob:(n=e,n.split(/,/)[1])};var n})).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),{blob:r,contentType:""}}));return g[n]=r,r}function y(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return h(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}function w(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=a();try{t.className=`${t.className} ${i}`}catch(s){return}const c=document.createElement("style");c.appendChild(y(i,n,r)),t.appendChild(c)}var b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function P(e,t){return b(this,void 0,void 0,(function*(){return e instanceof HTMLCanvasElement?function(e){return b(this,void 0,void 0,(function*(){const t=e.toDataURL();return"data:,"===t?Promise.resolve(e.cloneNode(!1)):p(t)}))}(e):e instanceof HTMLVideoElement&&e.poster?function(e,t){return b(this,void 0,void 0,(function*(){return Promise.resolve(e.poster).then((e=>v(e,t))).then((t=>l(t.blob,s(e.poster)||t.contentType))).then((e=>p(e)))}))}(e,t):Promise.resolve(e.cloneNode(!1))}))}function x(e,t){return b(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),r=t.style;r&&(n.cssText?r.cssText=n.cssText:h(n).forEach((e=>{r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))})))}(e,t))).then((()=>function(e,t){w(e,t,":before"),w(e,t,":after")}(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):Promise.resolve(t)}))}function E(e,t,n){return b(this,void 0,void 0,(function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>P(e,t))).then((n=>function(e,t,n){var r;return b(this,void 0,void 0,(function*(){const o=null!=(i=e).tagName&&"SLOT"===i.tagName.toUpperCase()&&e.assignedNodes?h(e.assignedNodes()):h((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);var i;return 0===o.length||e instanceof HTMLVideoElement?Promise.resolve(t):o.reduce(((e,r)=>e.then((()=>E(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>x(e,t))):Promise.resolve(null)}))}var S=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const T=/url\((['"]?)([^'"]+?)\1\)/g,C=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,$=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function O(e){const t=[];return e.replace(T,((e,n,r)=>(t.push(r),e))),t.filter((e=>!u(e)))}function R(e,t,n,r,o){const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}(t,n):t;return Promise.resolve(i).then((e=>o?o(e):v(e,r))).then((e=>"string"==typeof e?l(e,s(t)):l(e.blob,s(t)||e.contentType))).then((n=>e.replace(function(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>i))}function j(e){return-1!==e.search(T)}function N(e,t,n){return S(this,void 0,void 0,(function*(){if(!j(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace($,(e=>{for(;;){const[n,,r]=C.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(O).then((e=>e.reduce(((e,r)=>e.then((e=>R(e,r,t,n)))),Promise.resolve(r))))}))}var k=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function L(e,t){return k(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return k(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>N(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){return k(this,void 0,void 0,(function*(){if((!(e instanceof HTMLImageElement)||u(e.src))&&(!(e instanceof SVGImageElement)||u(e.href.baseVal)))return Promise.resolve(e);const n=e instanceof HTMLImageElement?e.src:e.href.baseVal;return Promise.resolve(n).then((e=>v(e,t))).then((e=>l(e.blob,s(n)||e.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e instanceof HTMLImageElement?(e.srcset="",e.src=t):e.href.baseVal=t})))).then((()=>e),(()=>e))}))}(e,t))).then((e=>function(e,t){return k(this,void 0,void 0,(function*(){const n=h(e.childNodes).map((e=>L(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}var A=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const I={};function M(e){const t=I[e];if(null!=t)return t;const n=window.fetch(e).then((t=>({url:e,cssText:t.text()})));return I[e]=n,n}function D(e){return A(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),window.fetch(o).then((e=>e.blob())).then((e=>new Promise(((r,o)=>{const i=new FileReader;i.onloadend=()=>{n=n.replace(t,`url(${i.result})`),r([t,i.result])},i.onerror=o,i.readAsDataURL(e)}))))}));return Promise.all(o).then((()=>n))}))}))}function V(e){if(null==e)return[];const t=[];let n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(e=i.exec(n),null===e)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}function H(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>j(e.style.getPropertyValue("src"))))}function U(e){return A(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{null==e.ownerDocument&&n(new Error("Provided element is not within a Document")),t(h(e.ownerDocument.styleSheets))})).then((e=>function(e){return A(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{h(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;const i=M(e.href).then((e=>e?D(e):"")).then((e=>V(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(n){console.error("Error inserting rule from remote css",{rule:e,error:n})}})))).catch((e=>{console.error("Error loading remote css",e.toString())}));n.push(i)}}))}catch(r){const o=e.find((e=>null==e.href))||document.styleSheets[0];null!=t.href&&n.push(M(t.href).then((e=>e?D(e):"")).then((e=>V(e).forEach((e=>{o.insertRule(e,t.cssRules.length)})))).catch((e=>{console.error("Error loading remote stylesheet",e.toString())}))),console.error("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{h(e.cssRules).forEach((e=>{t.push(e)}))}catch(n){console.error(`Error while reading CSS rules from ${e.href}`,n.toString())}})),t)))}))}(e))).then(H)}))}function F(e,t){return A(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCSS?Promise.resolve(t.fontEmbedCSS):function(e,t){return A(this,void 0,void 0,(function*(){return U(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return N(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}var _=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function B(e,t={}){const n=t.width||function(e){const t=f(e,"border-left-width"),n=f(e,"border-right-width");return e.clientWidth+t+n}(e),r=t.height||function(e){const t=f(e,"border-top-width"),n=f(e,"border-bottom-width");return e.clientHeight+t+n}(e);return{width:n,height:r}}function z(e,t={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=B(e,t);return Promise.resolve(e).then((e=>E(e,t,!0))).then((e=>F(e,t))).then((e=>L(e,t))).then((e=>function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}(e,t))).then((e=>m(e,n,r)))}))}const W=16384;function X(e,t={}){return _(this,void 0,void 0,(function*(){return z(e,t).then(p).then((n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),i=t.pixelRatio||function(){let e,t;try{t=process}catch(r){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}(),{width:c,height:s}=B(e,t),u=t.canvasWidth||c,l=t.canvasHeight||s;return r.width=u*i,r.height=l*i,t.skipAutoScale||function(e){(e.width>W||e.height>W)&&(e.width>W&&e.height>W?e.width>e.height?(e.height*=W/e.width,e.width=W):(e.width*=W/e.height,e.height=W):e.width>W?(e.height*=W/e.width,e.width=W):(e.width*=W/e.height,e.height=W))}(r),r.style.width=`${u}`,r.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r}))}))}function q(e,t={}){return _(this,void 0,void 0,(function*(){return X(e,t).then(d)}))}}}]);