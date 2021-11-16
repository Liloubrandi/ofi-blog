"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87296],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return Z}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),o=n(71217),s=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n,r,o=(0,m.Z)(),s=a.useState("unchecked"),g=s[0],v=s[1],k=(0,p.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&k.loaded&&(v("unchecked"),k.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return k.loaded}),(function(e){e&&y(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&y(k.value)}),[k,o]),k.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:h(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(k.value)},className:(0,l.default)(i[g],i.checkButton)},a.createElement(u.G,{icon:(r=g,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement("div",null,"Loading...")})),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),N=void 0,w=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),E=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},x=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],o=t[1],s=a.useState(!1),c=s[0],u=s[1],d=a.useRef(null),m=(0,p.oR)("documentStore").find(e.webKey),g=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(N)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){N=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(u(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",g))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",g)}}),[]);return N&&c&&m.loaded?a.createElement("div",{onFocus:function(){return!r&&o(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(N,{ref:d,theme:"snow",readOnly:e.isLegacy||m.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?m.legacyData.value:m.value||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.isLegacy&&m.loaded&&c&&(0,f.z)((function(){m.value=i}))},modules:{toolbar:e.toolbar?E(e.toolbar):w,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),H=n(3239),S=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},D=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),_=n(78982),L=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},Z=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,A(e)),r&&i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(H.Z,null),n.loggedIn&&a.createElement(D,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o}});var a=n(68949),r=n(67294),i=n(93812),l=function(e){return r.useContext(i.Nx)[e]},o=function(e,t,n,l,o,s){var c=r.useState(!1),u=c[0],d=c[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,o,s).finally((function(){d(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){u&&a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,s,!0)}))}),[u]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){u&&!a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,s,!0)}))}),[u])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},41276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(84384),o=n(52084),s=["components"],c={title:"Hash Funktionen"},u="Hashfunktionen [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/hash-funktionen",id:"Kryptologie/Hashfunktionen/hash-funktionen",isDocsHomePage:!1,title:"Hash Funktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/hash-funktionen",permalink:"/Kryptologie/Hashfunktionen/hash-funktionen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",tags:[],version:"current",lastUpdatedAt:1637061762,formattedLastUpdatedAt:"11/16/2021",sidebarPosition:4,frontMatter:{title:"Hash Funktionen"},sidebar:"sidebar",previous:{title:"Passw\xf6rter Speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"},next:{title:"Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0a-Schichtenmodell"}},f=[{value:"Hashfunktion",id:"hashfunktion",children:[],level:2},{value:"Hashwert",id:"hashwert",children:[],level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",children:[],level:2}],m={toc:f};function p(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hashfunktionen-"},"Hashfunktionen ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"))),(0,i.kt)("p",null,"Da eine ",(0,i.kt)("strong",{parentName:"p"},"Eingabe beliebiger L\xe4nge")," auf eine ",(0,i.kt)("strong",{parentName:"p"},"Ausgabe mit fester L\xe4nge")," abgebildet, ist Injektivit\xe4t unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Pr\xfcfsummen) eine fixe L\xe4nge haben."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashfunktion",options:{width:"600px"},isInline:!1,src:n(59008).Z,alt:"Hashfunktion --width=600px",mdxType:"Image"})),(0,i.kt)("h2",{id:"hashfunktion"},"Hashfunktion"),(0,i.kt)("p",null,"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"kollisionsresistenz"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Kollisionsresistenz")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."))),(0,i.kt)("h2",{id:"hashwert"},"Hashwert"),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("p",{parentName:"div"},"Die Ausgabe der Hashfunktion \u2013 also die Pr\xfcfsumme \u2013 wird ",(0,i.kt)("strong",{parentName:"p"},"Hashwert")," genannt."),(0,i.kt)("p",{parentName:"div"},"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen.")),(0,i.kt)("div",{parentName:"div",style:{alignSelf:"end",classes:[]},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Ein Hashwert ist wie ein Fingerabdruck",options:{width:"100px"},isInline:!1,src:n(59874).Z,alt:"Ein Hashwert ist wie ein Fingerabdruck --width=100px",mdxType:"Image"})))),(0,i.kt)("h2",{id:"aktuelle-beispiele"},"Aktuelle Beispiele"),(0,i.kt)("p",null,"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend einige mit SHA-1 (Secure Hash Algorithm) berechnete Hashwerte:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Passwort"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Hashwert"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1234567"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"20eabe5d64b0e216796e834f52d61fd0b70332fc"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"qwerty"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"b1b3773a05c0ed0176787a4f1574ff0075f7521e"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"abc123"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"6367c48dd193d56ea7b0baad25b19455e529f5ee"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"000000"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"c984aed014aec7623a54f0591da07a85fd4b762d"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"iloveyou"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ee8d8728f435fd550f83852aabab5234ce1da528"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"password1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e38ad214943daad1d64c102faec29de4afe9da3d"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"password2"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2aa60a8ff7fcd473d321e0146afd9e26df395147")))))),(0,i.kt)("p",null,"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit ca. 50% der Hashwert-Bits \xe4ndern."),(0,i.kt)(o.Z,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=103784"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},59874:function(e,t,n){t.Z=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},59008:function(e,t,n){t.Z=n.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);