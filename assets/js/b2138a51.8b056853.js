"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[39603],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return T}});var r=n(87462),a=n(67294),i=n(72389),o=n(71217),l=n(21314),c=n(78982),u=n(46858),d=a.createContext(void 0),s=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:s(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,u.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,c.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,c.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:s(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:s(t),type:t.type},n)},m=(0,o.Pi)((function(e){var t=(0,l.o)("documentStore"),n=a.useState(p(t,e))[0];return(0,i.Z)()?a.createElement(d.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),f=n(26528),g={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},v=n(86010),b=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,n=t,r=void 0;if(b.test(t)){var i=function(e){if(b.test(e))return e.match(b).groups.klass}(t);r=g[i],n=""+t.replace(b,"")}return a.createElement("option",{value:t,className:r},n)},h=n(92814),w=n(51436),k=n(68949),N=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return g[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},x=(0,o.Pi)((function(e){var t,n=(0,i.Z)(),r=a.useState("unchecked"),o=r[0],l=r[1],c=a.useContext(d),u=function(e){l("unchecked"),c.setData({value:e,type:"string"})},s=function(t){if(e.checker)return l(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};l(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,k.U5)((function(){return c.loaded}),(function(e){e&&s(c.data.value)}))}),[]),a.useEffect((function(){c.loaded&&s(c.data.value)}),[n]),a.createElement("div",{className:g.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return u(e.target.value)},style:{width:e.width},value:c.data.value,className:E(c.data.value),disabled:!c.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return u(e.target.value)},value:c.data.value,disabled:!c.loaded||c.isReadonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return s(c.data.value)},className:(0,v.default)(g[o],g.checkButton)},a.createElement(h.G,{icon:(t=o,"correct"===t?w.f8k:"wrong"===t?w.nYk:w.sph)})))})),z=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return g[function(e){if(z.test(e))return e.match(z).groups.klass}(e)]},S=(0,o.Pi)((function(e){var t=a.useContext(d),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return a.createElement("div",{className:g.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:C(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),D=void 0,_=[["bold","italic","underline"]],L=[].concat(_,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),Z=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],o=a.useState(!1),l=o[0],c=o[1],u=a.useRef(null),s=a.useContext(d),p=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(D)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){D=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return D&&l?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(D,{ref:u,theme:"snow",readOnly:!s.loaded||s.isReadonly,className:(0,v.default)(g.quillAnswer,e.monospace&&g.monospace,r?void 0:"disable-toolbar"),value:s.loaded?s.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),l&&s.setData({value:a,type:"text"})},modules:{toolbar:e.reduced?_:L,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),U=n(3239),A=n(79265),O=(0,o.Pi)((function(){var e=a.useContext(d),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(d.Provider,{value:new A.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(Z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(S,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),P=(0,o.Pi)((function(){return a.useContext(d).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,v.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},T=(0,o.Pi)((function(e){var t=(0,l.o)("msalStore");return a.createElement(m,(0,r.Z)({},e,{childNodes:e.children}),a.createElement("div",{"data--web-key":e.webKey},a.createElement(U.Z,null),t.loggedIn&&a.createElement(O,null),t.loggedIn&&a.createElement(P,null),"text"===e.type&&a.createElement(Z,e),"string"===e.type&&a.createElement(x,e),"array"===e.type&&a.createElement(S,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},15637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(77960),l=["components"],c={title:"\xdcbungen"},u="\xdcbungen UTF-8",d={unversionedId:"Netzwerke/Codierung/Uebungen",id:"version-24i/Netzwerke/Codierung/Uebungen",isDocsHomePage:!1,title:"\xdcbungen",description:"Wie viele Zeichen sind in folgender bit-Squenz codiert?",source:"@site/versioned_docs/version-24i/05-Netzwerke/003-Codierung/04-Uebungen.md",sourceDirName:"05-Netzwerke/003-Codierung",slug:"/Netzwerke/Codierung/Uebungen",permalink:"/24i/Netzwerke/Codierung/Uebungen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/05-Netzwerke/003-Codierung/04-Uebungen.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"\xdcbungen"},sidebar:"version-24i/sidebar",previous:{title:"Zeichencodierung",permalink:"/24i/Netzwerke/Codierung/Zeichencodierung"},next:{title:"Routing im Alltag",permalink:"/24i/Netzwerke/Routing/routing-alltag"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfcbungen-utf-8"},"\xdcbungen UTF-8"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"1-wie-viele-zeichen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Wie viele Zeichen?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie viele Zeichen sind in folgender bit-Squenz codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1110'0010 1001'1101 1000'0000 0100'0110 1101'0011 1011'1111 1111'0110 1001'1010 1010'1010 1000'1111 0001'0010\n")),(0,i.kt)(o.Z,{type:"string",webKey:"e2835c91-5519-4aaa-b28f-08d83e37c5e6",id:"q1",solution:"5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"2-utf-8-decodieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. UTF-8 Decodieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100'0010 1001'1001\n")),(0,i.kt)(o.Z,{type:"string",webKey:"4ced8d67-dfd8-4d8b-98c8-691303bc8b34",id:"q2",solution:"153",mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1110'0001 1000'0000 1000'1111\n")),(0,i.kt)(o.Z,{type:"string",webKey:"a5def7c0-be31-442a-ad2b-b48acc9fce13",id:"q3",solution:"4111",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"3-utf-8-codieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. UTF-8 Codieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie folgende bit-Sequenz zu UTF-8:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100'1001'0101'1001'0110\n")),(0,i.kt)(o.Z,{type:"string",id:"q4",webKey:"5d40fc8e-0755-4e83-b76d-dc8c975c6b18",solution:"11110011 10001001 10010110 10010110",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"Codieren Sie die Zahl ",(0,i.kt)("inlineCode",{parentName:"p"},"260")," zu UTF-8:"),(0,i.kt)(o.Z,{type:"string",id:"q5",webKey:"c324c22e-e5bc-4da4-b474-f7d78b49fa75",solution:"11000100 10000100",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}))))}m.isMDXComponent=!0},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return o}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function l(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=l(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}}}]);