"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9974],{3239:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),o=n(71217),c=n(21314),l=(0,o.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return Z}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},o=n(86010),c=n(71217),l=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(l.test(t)){var o=function(e){if(l.test(e))return e.match(l).groups.klass}(t);r=i[o],n=""+t.replace(l,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),s=n(51436),m=n(68949),f=n(72389),g=n(21314),p=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},y=(0,c.Pi)((function(e){var t,n,r,c=(0,f.Z)(),l=a.useState("unchecked"),p=l[0],y=l[1],b=(0,g.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},h=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&h(b.data.value)}))}),[]),a.useEffect((function(){b.loaded&&h(b.data.value)}),[c]),a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.data.value,className:v(b.data.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.data.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return h(b.data.value)},className:(0,o.default)(i[p],i.checkButton)},a.createElement(d.G,{icon:(r=p,"correct"===r?s.f8k:"wrong"===r?s.nYk:s.sph)})))})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},h=(0,c.Pi)((function(e){var t,n=(0,g.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})})))})),k=void 0,N=[["bold","italic","underline"]],E=[].concat(N,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),z=(0,c.Pi)((function(e){var t=a.useState(!1),r=t[0],c=t[1],l=a.useState(!1),u=l[0],d=l[1],s=a.useRef(null),f=(0,g.oR)("documentStore").find(e.webKey),p=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(k)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){k=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(d(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return k&&u?a.createElement("div",{onFocus:function(){return!r&&c(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(k,{ref:s,theme:"snow",readOnly:e.isLegacy||!f.loaded||f.readonly,className:(0,o.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?f.legacyData.value:f.value||"",onChange:function(t,n,a,r){var i,o;i=t,void 0===o&&(o=0),!e.isLegacy&&f.loaded&&u&&(0,m.z)((function(){f.value=i}))},modules:{toolbar:e.reduced?N:E,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:f.loaded?e.placeholder||"\u270d\ufe0f Antwort...":"Laden..."})):a.createElement("div",null,"Loading...")})),x=n(3239),S=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},L=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(z,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(h,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),C=(0,c.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),_=n(78982),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},U=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},Z=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,g.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||"",type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,U(e)),r&&i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(L,e),n.loggedIn&&a.createElement(C,{webKey:e.webKey}),"text"===e.type&&a.createElement(z,e),"string"===e.type&&a.createElement(y,e),"array"===e.type&&a.createElement(h,e)):a.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return c}});var a=n(68949),r=n(67294),i=n(93812),o=function(e){return r.useContext(i.Nx)[e]},c=function(e,t,n,o,c,l){r.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,o,c,l)}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){a&&i.Ux.documentStore.provideDocument(e,t,n,o,c,l)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){a||i.Ux.documentStore.provideDocument(e,t,n,o,c,l)}))}),[])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},18681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(52084),c=["components"],l={title:"\xdcbungen"},u="\xdcbungen UTF-8",d={unversionedId:"Netzwerke/Codierung/Uebungen",id:"version-24K/Netzwerke/Codierung/Uebungen",isDocsHomePage:!1,title:"\xdcbungen",description:"Wie viele Zeichen sind in folgender bit-Squenz codiert?",source:"@site/versioned_docs/version-24K/05-Netzwerke/003-Codierung/04-Uebungen.md",sourceDirName:"05-Netzwerke/003-Codierung",slug:"/Netzwerke/Codierung/Uebungen",permalink:"/24K/Netzwerke/Codierung/Uebungen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/003-Codierung/04-Uebungen.md",tags:[],version:"24K",sidebarPosition:4,frontMatter:{title:"\xdcbungen"},sidebar:"version-24K/sidebar",previous:{title:"Zeichencodierung",permalink:"/24K/Netzwerke/Codierung/Zeichencodierung"},next:{title:"Routing im Alltag",permalink:"/24K/Netzwerke/Routing/routing-alltag"}},s=[],m={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfcbungen-utf-8"},"\xdcbungen UTF-8"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"1-wie-viele-zeichen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Wie viele Zeichen?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie viele Zeichen sind in folgender bit-Squenz codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1110'0010 1001'1101 1000'0000 0100'0110 1101'0011 1011'1111 1111'0110 1001'1010 1010'1010 1000'1111 0001'0010\n")),(0,i.kt)(o.Z,{type:"string",webKey:"e2835c91-5519-4aaa-b28f-08d83e37c5e6",id:"q1",solution:"5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"2-utf-8-decodieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. UTF-8 Decodieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100'0010 1001'1001\n")),(0,i.kt)(o.Z,{type:"string",webKey:"4ced8d67-dfd8-4d8b-98c8-691303bc8b34",id:"q2",solution:"153",mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1110'0001 1000'0000 1000'1111\n")),(0,i.kt)(o.Z,{type:"string",webKey:"a5def7c0-be31-442a-ad2b-b48acc9fce13",id:"q3",solution:"4111",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"3-utf-8-codieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. UTF-8 Codieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie folgende bit-Sequenz zu UTF-8:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100'1001'0101'1001'0110\n")),(0,i.kt)(o.Z,{type:"string",id:"q4",webKey:"5d40fc8e-0755-4e83-b76d-dc8c975c6b18",solution:"11110011 10001001 10010110 10010110",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"Codieren Sie die Zahl ",(0,i.kt)("inlineCode",{parentName:"p"},"260")," zu UTF-8:"),(0,i.kt)(o.Z,{type:"string",id:"q5",webKey:"c324c22e-e5bc-4da4-b474-f7d78b49fa75",solution:"11000100 10000100",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}))))}f.isMDXComponent=!0}}]);