"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[15240],{3239:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),c=n(21314),l=(0,o.Pi)((function(){return(0,c.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return q},Z:function(){return B}});var r=n(87462),a=n(67294),i=n(72389),o=n(71217),c=n(21314),l=n(78982),s=n(46858),u=a.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,l.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,l.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},f=(0,o.Pi)((function(e){var t=(0,c.o)("documentStore"),n=a.useState(p(t,e))[0];return(0,i.Z)()?a.createElement(u.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),m=n(26528),h={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},g=n(86010),v=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,n=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=h[i],n=""+t.replace(v,"")}return a.createElement("option",{value:t,className:r},n)},k=n(92814),b=n(51436),w=n(68949),S=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){return h[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t,n=(0,i.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],l=a.useContext(u),s=function(e){c("unchecked"),l.setData({value:e,type:"string"})},d=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,w.U5)((function(){return l.loaded}),(function(e){e&&d(l.data.value)}))}),[]),a.useEffect((function(){l.loaded&&d(l.data.value)}),[n]),a.createElement("div",{className:h.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return s(e.target.value)},style:{width:e.width},value:l.data.value,className:N(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return s(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return d(l.data.value)},className:(0,g.default)(h[o],h.checkButton)},a.createElement(k.G,{icon:(t=o,"correct"===t?b.f8k:"wrong"===t?b.nYk:b.sph)})))})),x=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return h[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},_=(0,o.Pi)((function(e){var t=a.useContext(u),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return a.createElement("div",{className:h.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:C(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),D=void 0,K=[["bold","italic","underline"]],z=[].concat(K,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),P=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],o=a.useState(!1),c=o[0],l=o[1],s=a.useRef(null),d=a.useContext(u),p=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(D)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){D=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(l(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return D&&c?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(D,{ref:s,theme:"snow",readOnly:!d.loaded||d.isReadonly,className:(0,g.default)(h.quillAnswer,e.monospace&&h.monospace,r?void 0:"disable-toolbar"),value:d.loaded?d.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),c&&d.setData({value:a,type:"text"})},modules:{toolbar:e.reduced?K:z,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),Z=n(3239),j=n(79265),A=(0,o.Pi)((function(){var e=a.useContext(u),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(u.Provider,{value:new j.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(P,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(E,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(_,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),I=(0,o.Pi)((function(){return a.useContext(u).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,g.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),q=function(e){return e.replace(/\s+/g,"").toUpperCase()},B=(0,o.Pi)((function(e){var t=(0,c.o)("msalStore");return a.createElement(f,(0,r.Z)({},e,{childNodes:e.children}),a.createElement("div",{"data--web-key":e.webKey},a.createElement(Z.Z,null),t.loggedIn&&a.createElement(A,null),t.loggedIn&&a.createElement(I,null),"text"===e.type&&a.createElement(P,e),"string"===e.type&&a.createElement(E,e),"array"===e.type&&a.createElement(_,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(s){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},55994:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(84384),c=n(77960),l=["components"],s={title:"Kerckhoffs' Prinzip"},u="Kerckhoffs' Prinzip",d={unversionedId:"Kryptologie/Symmetrisch/kerckhoffs",id:"version-24f/Kryptologie/Symmetrisch/kerckhoffs",isDocsHomePage:!1,title:"Kerckhoffs' Prinzip",description:"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden.",source:"@site/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/kerckhoffs",permalink:"/24f/Kryptologie/Symmetrisch/kerckhoffs",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",tags:[],version:"24f",sidebarPosition:8,frontMatter:{title:"Kerckhoffs' Prinzip"},sidebar:"version-24f/sidebar",previous:{title:"Krypto-Familie",permalink:"/24f/Kryptologie/Symmetrisch/krypto-family"}},p=[{value:"Das Prinzip von Kerckhoffs",id:"das-prinzip-von-kerckhoffs",children:[],level:2},{value:"Formulierung von Claude Shannon",id:"formulierung-von-claude-shannon",children:[],level:2},{value:"Erkl\xe4rung von Bruce Schneier",id:"erkl\xe4rung-von-bruce-schneier",children:[],level:2}],f={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kerckhoffs-prinzip"},"Kerckhoffs' Prinzip"),(0,i.kt)("p",null,"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden."),(0,i.kt)("h2",{id:"das-prinzip-von-kerckhoffs"},"Das Prinzip von Kerckhoffs"),(0,i.kt)("p",null,"Eines der wichtigsten Prinzipien in der Kryptologie stammt von August Kerckhoffs:"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabDie Sicherheit eines Kryptosystems darf nicht von der Geheimhaltung des Algorithmus abh\xe4ngen."),(0,i.kt)("p",{parentName:"blockquote"},"Die Sicherheit gr\xfcndet sich nur auf die Geheimhaltung des Schl\xfcssels.\xbb\n\u2013 Auguste Kerckhoffs (1835 - 1903)"))),(0,i.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:Auguste_Kerckhoffs.jpg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"Auguste Kerckhoffs",options:{width:"10em",noMargins:!0},isInline:!1,src:n(92157).Z,alt:"Auguste Kerckhoffs --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)("h2",{id:"formulierung-von-claude-shannon"},"Formulierung von Claude Shannon"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("p",{parentName:"div"},"Claude Shannon hat dasselbe kurz und pr\xe4gnant ausgedr\xfcckt:"),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabThe enemy knows the system!\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Claude Shannon (1916 - 2001)"))),(0,i.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg",licence:"CC-SA 2.0",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",edited:!1},caption:"Claude Shannon",options:{width:"10em",noMargins:!0},isInline:!1,src:n(28311).Z,alt:"Claude Shannon --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)("h2",{id:"erkl\xe4rung-von-bruce-schneier"},"Erkl\xe4rung von Bruce Schneier"),(0,i.kt)("p",null,"Der renommierte Kryptologe Bruce Schneier erkl\xe4rt das Prinzip von Kerckhoffs' mit einer kurzen Geschichte ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabMan unterscheidet zwei Arten von Verschl\xfcsselung: Verschl\xfcsselung, die deine kleine Schwester daran hindert, deine Dateien zu lesen, und die Verschl\xfcsselung, die bedeutende Regierungen daran hindert, sie zu lesen.\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier")),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabWenn ich einen Brief in einen Safe einschliesse, diesen irgendwo in New York verstecke und dir dann sage, du sollst den Brief lesen, hat dies nichts mit Sicherheit zu tun."),(0,i.kt)("p",{parentName:"blockquote"},"Das ist ",(0,i.kt)("strong",{parentName:"p"},"Verschleierung"),"."),(0,i.kt)("p",{parentName:"blockquote"},"Angenommen, ich schliesse einen Brief in einen Safe ein, \xfcbergebe dir den Safe mitsamt Bauplan, hundert weiteren, identischen Safes und deren geheimer Kombination, so dass du und die besten Codeknacker den Schliessmechanismus studieren k\xf6nnen."),(0,i.kt)("p",{parentName:"blockquote"},"Wenn du den Brief trotzdem nicht lesen kannst, ",(0,i.kt)("strong",{parentName:"p"},"dann spricht man von Sicherheit"),".\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier"))),(0,i.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Rama",source:"https://commons.wikimedia.org/wiki/File:Bruce_Schneier_at_CoPS2013-IMG_9055.jpg",licence:"CC-BY-SA",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",edited:!1},caption:"Bruce Schneier",options:{width:"10em",noMargins:!0},isInline:!1,src:n(46847).Z,alt:"Bruce Schneier --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)(c.Z,{type:"text",webKey:"8db592e4-1a5c-44eb-8974-cccda9dd2af1",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.schneier.com/books/applied-cryptography-2preface/"},"Applied Cryptography"),", Bruce Schneier, Vorwort",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},92157:function(e,t,n){t.Z=n.p+"assets/images/auguste_kerckhoffs-ae48ee0de6e8bbbee1e3bb1cd86bc4f0.jpg"},46847:function(e,t,n){t.Z=n.p+"assets/images/bruce_schneier-6f0cabe3a5af1dc7e571a7986ba25c85.jpg"},28311:function(e,t,n){t.Z=n.p+"assets/images/claude_shannon-06065251902711206036fb35df664804.jpg"},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return o}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function c(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=c(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(c(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}}}]);