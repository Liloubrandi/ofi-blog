"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[33854],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return O},Z:function(){return j}});var r=n(87462),a=n(67294),i=n(72389),l=n(71217),o=n(21314),c=n(78982),u=n(46858),s=a.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},f=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,u.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,c.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,c.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},p=(0,l.Pi)((function(e){var t=(0,o.o)("documentStore"),n=a.useState(f(t,e))[0];return(0,i.Z)()?a.createElement(s.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),m=n(26528),g={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},h=n(86010),v=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,n=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=g[i],n=""+t.replace(v,"")}return a.createElement("option",{value:t,className:r},n)},b=n(92814),w=n(51436),k=n(68949),E=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){return g[function(e){if(E.test(e))return e.match(E).groups.klass}(e)]},C=(0,l.Pi)((function(e){var t,n=(0,i.Z)(),r=a.useState("unchecked"),l=r[0],o=r[1],c=a.useContext(s),u=function(e){o("unchecked"),c.setData({value:e,type:"string"})},d=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,k.U5)((function(){return c.loaded}),(function(e){e&&d(c.data.value)}))}),[]),a.useEffect((function(){c.loaded&&d(c.data.value)}),[n]),a.createElement("div",{className:g.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return u(e.target.value)},style:{width:e.width},value:c.data.value,className:N(c.data.value),disabled:!c.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return u(e.target.value)},value:c.data.value,disabled:!c.loaded||c.isReadonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return d(c.data.value)},className:(0,h.default)(g[l],g.checkButton)},a.createElement(b.G,{icon:(t=l,"correct"===t?w.f8k:"wrong"===t?w.nYk:w.sph)})))})),x=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),S=function(e){return g[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},V=(0,l.Pi)((function(e){var t=a.useContext(s),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return a.createElement("div",{className:g.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:S(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),D=void 0,_=[["bold","italic","underline"]],A=[].concat(_,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),z=(0,l.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],l=a.useState(!1),o=l[0],c=l[1],u=a.useRef(null),d=a.useContext(s),f=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(D)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){D=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[]);return D&&o?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(D,{ref:u,theme:"snow",readOnly:!d.loaded||d.isReadonly,className:(0,h.default)(g.quillAnswer,e.monospace&&g.monospace,r?void 0:"disable-toolbar"),value:d.loaded?d.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),o&&d.setData({value:a,type:"text"})},modules:{toolbar:e.reduced?_:A,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),K=n(3239),L=n(79265),Z=(0,l.Pi)((function(){var e=a.useContext(s),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(s.Provider,{value:new L.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(C,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(V,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),P=(0,l.Pi)((function(){return a.useContext(s).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=(0,l.Pi)((function(e){var t=(0,o.o)("msalStore");return a.createElement(p,(0,r.Z)({},e,{childNodes:e.children}),a.createElement("div",{"data--web-key":e.webKey},a.createElement(K.Z,null),t.loggedIn&&a.createElement(Z,null),t.loggedIn&&a.createElement(P,null),"text"===e.type&&a.createElement(z,e),"string"===e.type&&a.createElement(C,e),"array"===e.type&&a.createElement(V,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},88805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(84384),o=n(77960),c=["components"],u={title:"Vign\xe8re-Chiffre"},s="Vign\xe8re-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Vignere",id:"version-24f/Kryptologie/Antike/Vignere",isDocsHomePage:!1,title:"Vign\xe8re-Chiffre",description:"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt.",source:"@site/versioned_docs/version-24f/06-Kryptologie/02-Antike/07-Vignere.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Vignere",permalink:"/24f/Kryptologie/Antike/Vignere",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/02-Antike/07-Vignere.md",tags:[],version:"24f",sidebarPosition:7,frontMatter:{title:"Vign\xe8re-Chiffre"},sidebar:"version-24f/sidebar",previous:{title:"H\xe4ufigkeitsanalyse",permalink:"/24f/Kryptologie/Antike/frequency-analysis"},next:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",permalink:"/24f/Kryptologie/Antike/python-tools"}},f=[],p={toc:f};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vign\xe8re-chiffre-"},"Vign\xe8re-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Log(z)equalsY",source:"https://commons.wikimedia.org/wiki/File:Vigenere-Beispiel.png",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/deed.en",edited:!1},caption:"Vign\xe8re-Verschl\xfcsselung",options:{},isInline:!1,src:n(17856).Z,alt:"Vign\xe8re-Verschl\xfcsselung",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"RUDERN AUF DEM SEE")," mit der Vigen\xe8re-Chiffre. Verwenden Sie dazu den Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"GBSL"),"."),(0,i.kt)(o.Z,{type:"string",webKey:"f0ae0e40-3e5d-40b2-9e3d-fd0607990eb4",sanitizer:function(e){return e.toUpperCase().trim()},solution:"XVVPXO SFL EWX YFW",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=254616"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},17856:function(e,t,n){t.Z=n.p+"assets/images/vignere-e7f10a144cd531ce1dde401f3264dfcc.png"},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return l}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function l(){l=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var l=new RegExp(e,r);return t.set(l,i||t.get(e)),(0,a.Z)(l,n.prototype)}function o(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},l.apply(this,arguments)}}}]);