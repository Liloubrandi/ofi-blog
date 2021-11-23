/*! For license information please see 20b6a18d.dc1bde85.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45824],{3239:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(67294),r="noLoginAlert_boZc",a=n(73727),o=n(71217),s=n(21314),l=(0,o.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:i.createElement("div",{className:r},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){"use strict";n.d(t,{x:function(){return D},Z:function(){return z}});var i=n(67294),r=n(26528),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},o=n(86010),s=n(71217),l=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(l.test(t)){var o=function(e){if(l.test(e))return e.match(l).groups.klass}(t);r=a[o],n=""+t.replace(l,"")}return i.createElement("option",{value:t,className:r},n)},u=n(92814),h=n(51436),d=n(68949),f=n(72389),p=n(21314),m=n(74322),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return a[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,n,r,s=(0,f.Z)(),l=i.useState("unchecked"),g=l[0],y=l[1],H=(0,p.oR)("documentStore").find(e.webKey),E=function(t){!e.isLegacy&&H.loaded&&(y("unchecked"),H.setData({value:t,type:"string"}))},_=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,d.U5)((function(){return H.loaded}),(function(e){e&&_(H.value)}))}),[H]),i.useEffect((function(){H.loaded&&_(H.value)}),[H,s]),s?H.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement("select",{onChange:function(e){return E(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=H.legacyData)?void 0:t.value:H.value,className:v(H.value),disabled:!H.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(c,{value:e,key:t})}))):i.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return E(e.target.value)},value:e.isLegacy?null==(n=H.legacyData)?void 0:n.value:H.value,disabled:!H.loaded||H.readonly||e.disabled}),(e.solution||e.checker)&&i.createElement("button",{onClick:function(){return _(H.value)},className:(0,o.default)(a[g],a.checkButton)},i.createElement(u.G,{icon:(r=g,"correct"===r?h.f8k:"wrong"===r?h.nYk:h.sph)}))):i.createElement(m.Z,null):i.createElement("div",null,"SSR")})),H=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return a[function(e){if(H.test(e))return e.match(H).groups.klass}(e)]},_=(0,s.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,i){if(void 0===i&&(i=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,i),[t],n.data.value.slice(i+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?i.createElement("select",{key:a,onChange:function(e){return r(e.target.value,a)},value:t,className:E(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(c,{value:e,key:t})}))):i.createElement("input",{key:a,type:"text",onChange:function(e){return r(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):i.createElement(m.Z,null)})),b=n(87462),k=n(75552),S=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",null,e.label&&i.createElement("h6",null,e.label),i.createElement(k.Z,(0,b.Z)({model:t},e))):i.createElement(m.Z,null)})),w=n(3239),A=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},R=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?i.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",i.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",i.createElement("div",null,"text"===t.type&&i.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&i.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&i.createElement(_,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),i.createElement("div",null,i.createElement("button",{className:"button button--primary",onClick:function(){return A("use_legacy",t)}},"Ja"),i.createElement("button",{className:"button button--info",onClick:function(){return A("use_current",t)}},"Nein (verwerfen)"))):null})),N=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),x=n(78982),X=n(97762),D=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,x.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,x.cl)(e.id,t)}}}:function(){}},z=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),a=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||X.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,O(e)),a?r?i.createElement("div",{"data--web-key":e.webKey},i.createElement(w.Z,null),n.loggedIn&&i.createElement(R,e),n.loggedIn&&i.createElement(N,{webKey:e.webKey}),"text"===e.type&&i.createElement(S,e),"string"===e.type&&i.createElement(y,e),"array"===e.type&&i.createElement(_,e)):i.createElement(m.Z,null):i.createElement("div",null,"SSR")}))},71656:function(e,t,n){"use strict";var i=n(86010),r=n(67294),a=n(96734),o=n(72023);t.Z=function(){var e=r.useState(""),t=e[0],n=e[1],s=r.useState(""),l=s[0],c=s[1];return r.useEffect((function(){c((0,o.sha256)(t))}),[t]),r.createElement("div",{className:(0,i.default)("hero","shadow--lw",a.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"SHA-2 Hash"),r.createElement("h4",null,"Input"),r.createElement("textarea",{className:(0,i.default)(a.Z.input),value:t,onChange:function(e){n(e.target.value)},rows:5,placeholder:"Text"}),r.createElement("h4",null,"SHA-2 Hash"),r.createElement("textarea",{className:(0,i.default)(a.Z.input),value:l,readOnly:!0,placeholder:"SHA2-Hash"})))}},74322:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(67294),r=n(86010),a="loader_2rVr",o=n(71217),s=n(92814),l=n(51436),c=(0,o.Pi)((function(){return i.createElement("div",{className:(0,r.default)(a)},i.createElement(s.G,{icon:l.IJ7,spin:!0}),i.createElement("span",{className:(0,r.default)("badge")},"Laden..."))}))},75552:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(67294),r="quillEditor_1XRF",a="quillAnswer_oQOS",o="monospace_3rFN",s="disableToolbar_gntN",l=n(86010),c=n(71217),u=n(74322),h=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var i=[];e.h1&&i.push(1),e.h2&&i.push(2),e.h3&&i.push(3),i.push(!1),t.push(i)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return t},p=(0,c.Pi)((function(e){var t=i.useState(!1),c=t[0],p=t[1],m=i.useState(!1),g=m[0],v=m[1],y=i.useRef(null),H=e.model,E=function(e){e.preventDefault()};i.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),h)return e();var i=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=i.length,i.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(i).then((function(t){h=t[r["react-quill"]].default;var n=t[r.quill].default,i=t[r["react-image-compress"]].default;if("katex"in r){var a=t[r.katex].default;window.katex=a}n.register("modules/imageCompress",i),e()}))}((function(){t&&(v(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",E))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",E)}}),[e]);return h&&g&&H.loaded?i.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,l.default)(r)},i.createElement(h,{ref:y,theme:"snow",readOnly:e.readonly||H.readonly,className:(0,l.default)(a,e.monospace&&o,c?void 0:s),value:H.text||"",onChange:function(t,n,i,r){var a,o;a=t,void 0===o&&(o=0),!e.readonly&&H.canUpdate&&g&&H.setText(a)},modules:{toolbar:e.toolbar?f(e.toolbar):d,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(u.Z,null)}))},21314:function(e,t,n){"use strict";n.d(t,{oR:function(){return o},ky:function(){return s},RN:function(){return l}});var i=n(68949),r=n(67294),a=n(52182),o=function(e){return r.useContext(a.Nx)[e]},s=function(e,t,n,o,s,l){var c=r.useState(!1),u=c[0],h=c[1];r.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,o,s,l).finally((function(){h(!0)}))}),[]),r.useEffect((function(){return(0,i.U5)((function(){return a.Ux.userStore.currentView}),(function(i){u&&i&&a.Ux.documentStore.provideDocument(e(),t,n,o,s,l,!0)}))}),[u]),r.useEffect((function(){return(0,i.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(i){u&&!i&&a.Ux.documentStore.provideDocument(e(),t,n,o,s,l,!0)}))}),[u])},l=function(e){var t=r.useState(!1),n=t[0],o=t[1];r.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){o(!0)}))}),[]),r.useEffect((function(){return(0,i.U5)((function(){return a.Ux.userStore.currentView}),(function(t,i){n&&t&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),r.useEffect((function(){return(0,i.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,i){n&&!t&&i&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])}},46858:function(e,t,n){"use strict";n.d(t,{Vx:function(){return r},Vj:function(){return i},ly:function(){return a}});var i=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){"use strict";n.d(t,{rV:function(){return a},cl:function(){return o}});var i=864e5,r=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>i&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var a=JSON.parse(r);if("object"==typeof a){var o=a[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(c){return n}},o=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(i){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},51077:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=n(84384),s=n(52084),l=n(71656),c=["components"],u={title:"Hash Funktionen"},h="Hashfunktionen [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/hash-funktionen",id:"version-24i/Kryptologie/Hashfunktionen/hash-funktionen",isDocsHomePage:!1,title:"Hash Funktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/versioned_docs/version-24i/06-Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/hash-funktionen",permalink:"/24i/Kryptologie/Hashfunktionen/hash-funktionen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"Hash Funktionen"},sidebar:"version-24i/sidebar",previous:{title:"Passw\xf6rter Speichern",permalink:"/24i/Kryptologie/Hashfunktionen/save-passwords"},next:{title:"Asymmetrie umkehren",permalink:"/24i/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"}},f=[{value:"Hashfunktion",id:"hashfunktion",children:[],level:2},{value:"Hashwert",id:"hashwert",children:[],level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",children:[],level:2}],p={toc:f};function m(e){var t=e.components,u=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hashfunktionen-"},"Hashfunktionen ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"))),(0,a.kt)("p",null,"Da eine ",(0,a.kt)("strong",{parentName:"p"},"Eingabe beliebiger L\xe4nge")," auf eine ",(0,a.kt)("strong",{parentName:"p"},"Ausgabe mit fester L\xe4nge")," abgebildet, ist Injektivit\xe4t unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Pr\xfcfsummen) eine fixe L\xe4nge haben."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashfunktion",options:{width:"600px"},isInline:!1,src:n(95402).Z,alt:"Hashfunktion --width=600px",mdxType:"Image"})),(0,a.kt)("h2",{id:"hashfunktion"},"Hashfunktion"),(0,a.kt)("p",null,"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"kollisionsresistenz"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Kollisionsresistenz")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."))),(0,a.kt)("h2",{id:"hashwert"},"Hashwert"),(0,a.kt)("div",{style:{},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("p",{parentName:"div"},"Die Ausgabe der Hashfunktion \u2013 also die Pr\xfcfsumme \u2013 wird ",(0,a.kt)("strong",{parentName:"p"},"Hashwert")," genannt."),(0,a.kt)("p",{parentName:"div"},"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen.")),(0,a.kt)("div",{parentName:"div",style:{alignSelf:"end",classes:[]},className:"item"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Ein Hashwert ist wie ein Fingerabdruck",options:{width:"100px"},isInline:!1,src:n(97573).Z,alt:"Ein Hashwert ist wie ein Fingerabdruck --width=100px",mdxType:"Image"})))),(0,a.kt)("h2",{id:"aktuelle-beispiele"},"Aktuelle Beispiele"),(0,a.kt)("p",null,"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."),(0,a.kt)(l.Z,{mdxType:"HashSHA2"}),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."),(0,a.kt)("li",{parentName:"ol"},"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen? ")),(0,a.kt)(s.Z,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0,mdxType:"Answer"}))),(0,a.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit ca. 50% der Hashwert-Bits \xe4ndern."))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=103784"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},72023:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(n){return new Sha256(t,!0).update(n)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];t[i]=createOutputMethod(i,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(n,i){return new HmacSha256(n,t,!0).update(i)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,n){return t.create(e).update(n)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];t[i]=createHmacOutputMethod(i,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,n){var i,r=typeof e;if("string"===r){var a,o=[],s=e.length,l=0;for(i=0;i<s;++i)(a=e.charCodeAt(i))<128?o[l++]=a:a<2048?(o[l++]=192|a>>6,o[l++]=128|63&a):a<55296||a>=57344?(o[l++]=224|a>>12,o[l++]=128|a>>6&63,o[l++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++i)),o[l++]=240|a>>18,o[l++]=128|a>>12&63,o[l++]=128|a>>6&63,o[l++]=128|63&a);e=o}else{if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var c=[],u=[];for(i=0;i<64;++i){var h=e[i]||0;c[i]=92^h,u[i]=54^h}Sha256.call(this,t,n),this.update(u),this.oKeyPad=c,this.inner=!0,this.sharedMemory=n}Sha256.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var i,r,a=0,o=e.length,s=this.blocks;a<o;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(r=this.start;a<o&&r<64;++a)s[r>>2]|=e[a]<<SHIFT[3&r++];else for(r=this.start;a<o&&r<64;++a)(i=e.charCodeAt(a))<128?s[r>>2]|=i<<SHIFT[3&r++]:i<2048?(s[r>>2]|=(192|i>>6)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]):i<55296||i>=57344?(s[r>>2]|=(224|i>>12)<<SHIFT[3&r++],s[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++a)),s[r>>2]|=(240|i>>18)<<SHIFT[3&r++],s[r>>2]|=(128|i>>12&63)<<SHIFT[3&r++],s[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=s[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,n,i,r,a,o,s,l,c=this.h0,u=this.h1,h=this.h2,d=this.h3,f=this.h4,p=this.h5,m=this.h6,g=this.h7,v=this.blocks;for(e=16;e<64;++e)t=((r=v[e-15])>>>7|r<<25)^(r>>>18|r<<14)^r>>>3,n=((r=v[e-2])>>>17|r<<15)^(r>>>19|r<<13)^r>>>10,v[e]=v[e-16]+t+v[e-7]+n<<0;for(l=u&h,e=0;e<64;e+=4)this.first?(this.is224?(a=300032,g=(r=v[0]-1413257819)-150054599<<0,d=r+24177077<<0):(a=704751109,g=(r=v[0]-210244248)-1521486534<<0,d=r+143694565<<0),this.first=!1):(t=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),i=(a=c&u)^c&h^l,g=d+(r=g+(n=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&p^~f&m)+K[e]+v[e])<<0,d=r+(t+i)<<0),t=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),i=(o=d&c)^d&u^a,m=h+(r=m+(n=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&f^~g&p)+K[e+1]+v[e+1])<<0,t=((h=r+(t+i)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),i=(s=h&d)^h&c^o,p=u+(r=p+(n=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&g^~m&f)+K[e+2]+v[e+2])<<0,t=((u=r+(t+i)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),i=(l=u&h)^u&d^s,f=c+(r=f+(n=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&m^~p&g)+K[e+3]+v[e+3])<<0,c=r+(t+i)<<0;this.h0=this.h0+c<<0,this.h1=this.h1+u<<0,this.h2=this.h2+h<<0,this.h3=this.h3+d<<0,this.h4=this.h4+f<<0,this.h5=this.h5+p<<0,this.h6=this.h6+m<<0,this.h7=this.h7+g<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,i=this.h3,r=this.h4,a=this.h5,o=this.h6,s=this.h7,l=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o];return this.is224||(l+=HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]),l},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,i=this.h3,r=this.h4,a=this.h5,o=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,i>>24&255,i>>16&255,i>>8&255,255&i,r>>24&255,r>>16&255,r>>8&255,255&r,a>>24&255,a>>16&255,a>>8&255,255&a,o>>24&255,o>>16&255,o>>8&255,255&o];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,255&s),l},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},96734:function(e,t){"use strict";t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},97573:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},95402:function(e,t,n){"use strict";t.Z=n.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);