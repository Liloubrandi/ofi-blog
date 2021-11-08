"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[34964],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return B}});var r=n(87462),a=n(67294),i=n(72389),o=n(71217),l=n(21314),c=n(78982),u=n(46858),s=a.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,u.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,c.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,c.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},f=(0,o.Pi)((function(e){var t=(0,l.o)("documentStore"),n=a.useState(p(t,e))[0];return(0,i.Z)()?a.createElement(s.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),m=n(26528),g={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},y=n(86010),v=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){var t=e.value,n=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=g[i],n=""+t.replace(v,"")}return a.createElement("option",{value:t,className:r},n)},h=n(92814),k=n(51436),w=n(68949),E=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return g[function(e){if(E.test(e))return e.match(E).groups.klass}(e)]},x=(0,o.Pi)((function(e){var t,n=(0,i.Z)(),r=a.useState("unchecked"),o=r[0],l=r[1],c=a.useContext(s),u=function(e){l("unchecked"),c.setData({value:e,type:"string"})},d=function(t){if(e.checker)return l(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};l(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,w.U5)((function(){return c.loaded}),(function(e){e&&d(c.data.value)}))}),[]),a.useEffect((function(){c.loaded&&d(c.data.value)}),[n]),a.createElement("div",{className:g.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return u(e.target.value)},style:{width:e.width},value:c.data.value,className:C(c.data.value),disabled:!c.loaded},e.select.map((function(e,t){return a.createElement(b,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return u(e.target.value)},value:c.data.value,disabled:!c.loaded||c.isReadonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return d(c.data.value)},className:(0,y.default)(g[o],g.checkButton)},a.createElement(h.G,{icon:(t=o,"correct"===t?k.f8k:"wrong"===t?k.nYk:k.sph)})))})),N=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),_=function(e){return g[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},S=(0,o.Pi)((function(e){var t=a.useContext(s),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return a.createElement("div",{className:g.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:_(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(b,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),P=void 0,D=[["bold","italic","underline"]],Z=[].concat(D,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),K=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],o=a.useState(!1),l=o[0],c=o[1],u=a.useRef(null),d=a.useContext(s),p=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(P)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){P=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return P&&l?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(P,{ref:u,theme:"snow",readOnly:!d.loaded||d.isReadonly,className:(0,y.default)(g.quillAnswer,e.monospace&&g.monospace,r?void 0:"disable-toolbar"),value:d.loaded?d.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),l&&d.setData({value:a,type:"text"})},modules:{toolbar:e.reduced?D:Z,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),A=n(3239),z=n(79265),O=(0,o.Pi)((function(){var e=a.useContext(s),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(s.Provider,{value:new z.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(K,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(S,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),I=(0,o.Pi)((function(){return a.useContext(s).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,y.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},B=(0,o.Pi)((function(e){var t=(0,l.o)("msalStore");return a.createElement(f,(0,r.Z)({},e,{childNodes:e.children}),a.createElement("div",{"data--web-key":e.webKey},a.createElement(A.Z,null),t.loggedIn&&a.createElement(O,null),t.loggedIn&&a.createElement(I,null),"text"===e.type&&a.createElement(K,e),"string"===e.type&&a.createElement(x,e),"array"===e.type&&a.createElement(S,e)))}))},91033:function(e,t,n){var r=n(86010),a=n(67294),i=n(96734),o=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,l=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "];t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],c=a.useState(""),u=c[0],s=c[1],d=a.useState("text"),p=d[0],f=d[1];return a.useEffect((function(){if("text"===p&&0!==t.length){var e=t.split("").map((function(e){var t=l.indexOf(e),n=t%5;return""+(Math.floor(t/5)+1)+(n+1)}));s(e.join(" "))}}),[t]),a.useEffect((function(){if("cipher"===p&&0!==u.length){var e=u.split(" ").map((function(e){var t=e.split("").map((function(e){return Number.parseInt(e,10)-1})),n=t[0],r=t[1];return l[5*n+r]}));n(e.join(""))}}),[u]),a.createElement("div",{className:(0,r.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);f("text"),n(function(e){return e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(o,"")}(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:u,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);f("cipher"),s(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))}},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},10676:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(84384),l=n(91033),c=(n(77960),["components"]),u={title:"Polybios-Chiffre"},s="Polybios-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Polybios",id:"version-24i/Kryptologie/Antike/Polybios",isDocsHomePage:!1,title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/versioned_docs/version-24i/06-Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/24i/Kryptologie/Antike/Polybios",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"24i",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"version-24i/sidebar",previous:{title:"Skytale",permalink:"/24i/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/24i/Kryptologie/Antike/Caesar"}},p=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",children:[],level:2}],f={toc:p};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(97475).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)("p",null,"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(l.Z,{mdxType:"Polybios"}),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},97475:function(e,t,n){t.Z=n.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return o}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function l(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=l(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}}}]);