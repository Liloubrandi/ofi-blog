"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[25753],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return K}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),g=n(72389),m=n(21314),p=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n,a,o=(0,g.Z)(),c=r.useState("unchecked"),p=c[0],h=c[1],y=(0,m.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(h("unchecked"),y.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return y.loaded}),(function(e){e&&w(y.data.value)}))}),[]),r.useEffect((function(){y.loaded&&w(y.data.value)}),[o]),r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.data.value,className:v(y.data.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.data.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(y.data.value)},className:(0,l.default)(i[p],i.checkButton)},r.createElement(s.G,{icon:(a=p,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)})))})),y=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})})))})),k=void 0,E=[["bold","italic","underline"]],N=[].concat(E,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),S=(0,o.Pi)((function(e){var t=r.useState(!1),a=t[0],o=t[1],c=r.useState(!1),u=c[0],s=c[1],d=r.useRef(null),g=(0,m.oR)("documentStore").find(e.webKey),p=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(k)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){k=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(s(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return k&&u?r.createElement("div",{onFocus:function(){return!a&&o(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(k,{ref:d,theme:"snow",readOnly:e.isLegacy||!g.loaded||g.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,a?void 0:"disable-toolbar"),value:e.isLegacy?g.legacyData.value:g.value||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.isLegacy&&g.loaded&&u&&(0,f.z)((function(){g.value=i}))},modules:{toolbar:e.reduced?E:N,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:g.loaded?e.placeholder||"\u270d\ufe0f Antwort...":"Laden..."})):r.createElement("div",null,"Loading...")})),C=n(3239),x=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},D=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),V=(0,o.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(46858),L=n(78982),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},K=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),a=t.find(e.webKey),i=(0,g.Z)();return(0,m.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||"",type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,z(e)),a&&i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),n.loggedIn&&r.createElement(D,e),n.loggedIn&&r.createElement(V,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(w,e)):r.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o}});var r=n(68949),a=n(67294),i=n(93812),l=function(e){return a.useContext(i.Nx)[e]},o=function(e,t,n,l,o,c){a.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,l,o,c)}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){r&&i.Ux.documentStore.provideDocument(e,t,n,l,o,c)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){r||i.Ux.documentStore.provideDocument(e,t,n,l,o,c)}))}),[])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},90791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(84384),o=n(52084),c=["components"],u={title:"Vign\xe8re-Chiffre"},s="Vign\xe8re-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Vignere",id:"version-24i/Kryptologie/Antike/Vignere",isDocsHomePage:!1,title:"Vign\xe8re-Chiffre",description:"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt.",source:"@site/versioned_docs/version-24i/06-Kryptologie/02-Antike/07-Vignere.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Vignere",permalink:"/24i/Kryptologie/Antike/Vignere",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/02-Antike/07-Vignere.md",tags:[],version:"24i",sidebarPosition:7,frontMatter:{title:"Vign\xe8re-Chiffre"},sidebar:"version-24i/sidebar",previous:{title:"H\xe4ufigkeitsanalyse",permalink:"/24i/Kryptologie/Antike/frequency-analysis"},next:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",permalink:"/24i/Kryptologie/Antike/python-tools"}},f=[],g={toc:f};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vign\xe8re-chiffre-"},"Vign\xe8re-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Log(z)equalsY",source:"https://commons.wikimedia.org/wiki/File:Vigenere-Beispiel.png",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/deed.en",edited:!1},caption:"Vign\xe8re-Verschl\xfcsselung",options:{},isInline:!1,src:n(84233).Z,alt:"Vign\xe8re-Verschl\xfcsselung",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"RUDERN AUF DEM SEE")," mit der Vigen\xe8re-Chiffre. Verwenden Sie dazu den Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"GBSL"),"."),(0,i.kt)(o.Z,{type:"string",webKey:"f0ae0e40-3e5d-40b2-9e3d-fd0607990eb4",sanitizer:function(e){return e.toUpperCase().trim()},solution:"XVVPXO SFL EWX YFW",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=254616"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},84233:function(e,t,n){t.Z=n.p+"assets/images/vignere-e7f10a144cd531ce1dde401f3264dfcc.png"}}]);