"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45724],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_boZc",l=n(73727),i=n(71217),o=n(21314),c=(0,i.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return L}});var a=n(87462),r=n(67294),l=n(72389),i=n(71217),o=n(21314),c=n(78982),s=n(46858),d=r.createContext(void 0),u=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},m=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:u(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,c.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,c.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:u(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:u(t),type:t.type},n)},p=(0,i.Pi)((function(e){var t=(0,o.o)("documentStore"),n=r.useState(m(t,e))[0];return(0,l.Z)()?r.createElement(d.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),f=n(26528),k={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},g=n(86010),h=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){var t=e.value,n=t,a=void 0;if(h.test(t)){var l=function(e){if(h.test(e))return e.match(h).groups.klass}(t);a=k[l],n=""+t.replace(h,"")}return r.createElement("option",{value:t,className:a},n)},v=n(92814),b=n(51436),y=n(68949),w=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return k[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},x=(0,i.Pi)((function(e){var t,n=(0,l.Z)(),a=r.useState("unchecked"),i=a[0],o=a[1],c=r.useContext(d),s=function(e){o("unchecked"),c.setData({value:e,type:"string"})},u=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,y.U5)((function(){return c.loaded}),(function(e){e&&u(c.data.value)}))}),[]),r.useEffect((function(){c.loaded&&u(c.data.value)}),[n]),r.createElement("div",{className:k.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return s(e.target.value)},style:{width:e.width},value:c.data.value,className:E(c.data.value),disabled:!c.loaded},e.select.map((function(e,t){return r.createElement(N,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return s(e.target.value)},value:c.data.value,disabled:!c.loaded||c.isReadonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return u(c.data.value)},className:(0,g.default)(k[i],k.checkButton)},r.createElement(v.G,{icon:(t=i,"correct"===t?b.f8k:"wrong"===t?b.nYk:b.sph)})))})),S=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return k[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},B=(0,i.Pi)((function(e){var t=r.useContext(d),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return r.createElement("div",{className:k.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,l){return e.select?r.createElement("select",{key:l,onChange:function(e){return n(e.target.value,l)},value:a,className:C(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(N,{value:e,key:t})}))):r.createElement("input",{key:l,type:"text",onChange:function(e){return n(e.target.value,l)},value:a,disabled:!t.loaded||t.isReadonly})})))})),D=void 0,K=[["bold","italic","underline"]],z=[].concat(K,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),T=(0,i.Pi)((function(e){var t=r.useState(!1),a=t[0],l=t[1],i=r.useState(!1),o=i[0],c=i[1],s=r.useRef(null),u=r.useContext(d),m=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(D)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){D=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(c(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return D&&o?r.createElement("div",{onFocus:function(){return!a&&l(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(D,{ref:s,theme:"snow",readOnly:!u.loaded||u.isReadonly,className:(0,g.default)(k.quillAnswer,e.monospace&&k.monospace,a?void 0:"disable-toolbar"),value:u.loaded?u.data.value||"":"Laden...",onChange:function(e,t,n,a){var r,l;r=e,void 0===l&&(l=0),o&&u.setData({value:r,type:"text"})},modules:{toolbar:e.reduced?K:z,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),_=n(3239),P=n(79265),V=(0,i.Pi)((function(){var e=r.useContext(d),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(d.Provider,{value:new P.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(T,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(B,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),O=(0,i.Pi)((function(){return r.useContext(d).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,g.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=(0,i.Pi)((function(e){var t=(0,o.o)("msalStore");return r.createElement(p,(0,a.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),t.loggedIn&&r.createElement(V,null),t.loggedIn&&r.createElement(O,null),"text"===e.type&&r.createElement(T,e),"string"===e.type&&r.createElement(x,e),"array"===e.type&&r.createElement(B,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return l}});var a=n(67294),r=n(32930),l=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return l}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return l},cl:function(){return i}});var a=864e5,r=2592e6,l=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?n:i}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(s){return n}},i=function(e,t){try{if(t){var n=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=l(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},25089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(77960),o=["components"],c={title:"Blockchiffre"},s="Blockchiffre [^1]",d={unversionedId:"Kryptologie/Symmetrisch/blockchiffre",id:"version-24f/Kryptologie/Symmetrisch/blockchiffre",isDocsHomePage:!1,title:"Blockchiffre",description:"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden Blockchiffren erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in Bl\xf6cken verschl\xfcsselt wird.",source:"@site/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/blockchiffre",permalink:"/24f/Kryptologie/Symmetrisch/blockchiffre",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",tags:[],version:"24f",sidebarPosition:4,frontMatter:{title:"Blockchiffre"},sidebar:"version-24f/sidebar",previous:{title:"XOR-Verschl\xfcsselung",permalink:"/24f/Kryptologie/Symmetrisch/xor"},next:{title:"Verkettung von Bl\xf6cken",permalink:"/24f/Kryptologie/Symmetrisch/block-chaining"}},u=[{value:"Blockl\xe4nge",id:"blockl\xe4nge",children:[],level:2},{value:"Verschl\xfcsselung in Bl\xf6cken",id:"verschl\xfcsselung-in-bl\xf6cken",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchiffre-"},"Blockchiffre ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden ",(0,l.kt)("strong",{parentName:"p"},"Blockchiffren")," erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in ",(0,l.kt)("strong",{parentName:"p"},"Bl\xf6cken")," verschl\xfcsselt wird."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aktuelle-verschl\xfcsselungsverfahren"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aktuelle Verschl\xfcsselungsverfahren")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Aktuelle Verschl\xfcsselungsverfahren sind so komplex, dass wir sie unm\xf6glich verstehen k\xf6nnen. Daher werden wir viele der nachfolgend erw\xe4hnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen."),(0,l.kt)("p",{parentName:"div"},"Beim Thema Blockchiffren wollen wir aber kurz eintauchen und uns anhand einer einfachen Verschl\xfcsselung (XOR) anschauen, wie moderne Verschl\xfcsselung funktioniert."))),(0,l.kt)("h2",{id:"blockl\xe4nge"},"Blockl\xe4nge"),(0,l.kt)("p",null,"Da der Klartext dreimal so lange ist wie der Schl\xfcssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschl\xfcsseln. Die Blockl\xe4nge entspricht also der Schl\xfcssell\xe4nge:"),(0,l.kt)("div",{style:{},className:"flex flex-flex"},(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em",classes:["slim-table"]},className:"item"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Klartext"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEIMESTREFFEN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"00111 00101 01000 00101 01001 01101 00101 10011 10100 10010 00101 00110 00110 00101 01110")))))),(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em",classes:["slim-table"]},className:"item"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"10000 00101 01110 10100 00001"))))))),(0,l.kt)("h2",{id:"verschl\xfcsselung-in-bl\xf6cken"},"Verschl\xfcsselung in Bl\xf6cken"),(0,l.kt)("p",null,"Im folgenden Beispiel wird der oben bereits erw\xe4hnte Klartext mit dem Schl\xfcssel bitweise mit XOR verschl\xfcsselt:"),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEI")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00111 00101 01000 00101 01001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"W FQH")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10111 00000 00110 10001 01000"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"MESTR")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"01101 00101 10011 10100 10010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},". . S")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"11101 00000 11101 00000 10011"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EFFEN")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00101 00110 00110 00101 01110"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UCHQO")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10101 00011 01000 10001 01111")))))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-xor-blockchiffre"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Blockchiffre")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den folgenden Text mit der XOR-Blockchiffre:"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Text"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PAKET ZUGESTELLT")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Schl\xfcssel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BETA")),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Codieren Sie zuerst den Text mit Pentacode (verwenden Sie das ",(0,l.kt)("a",{parentName:"li",href:"/24f/Kryptologie/Symmetrisch/codierung#pentacode"},"interaktiven Tool"),")."),(0,l.kt)("li",{parentName:"ol"},"Codierenn Sie anschliessend den Schl\xfcssel mit Pentacode."),(0,l.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie den bin\xe4r dargestellten Text anschliessend mit dem bin\xe4r dargestellten Schl\xfcssel mittels XOR-Blockchiffre."),(0,l.kt)("li",{parentName:"ol"},"Decodieren Sie diesen wiederum mit Pentacode und \xfcberpr\xfcfen Sie die L\xf6sung.")),(0,l.kt)("h3",{parentName:"div",id:"vorgehenseweise"},"Vorgehenseweise"),(0,l.kt)(i.Z,{type:"text",webKey:"3bce79ec-5813-4d29-a7c5-3fec156bd472",monospace:!0,mdxType:"Answer"}),(0,l.kt)("h3",{parentName:"div",id:"l\xf6sung"},"L\xf6sung"),(0,l.kt)(i.Z,{type:"string",webKey:"773c8965-eecf-43fa-801f-d079fb81ad20",solution:"RD@DVENTE GUGIXU",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))),(0,l.kt)(i.Z,{type:"text",webKey:"bcdeeca1-2a54-4cf3-9187-849376053664",placeholder:"Notizen...",mdxType:"Answer"}),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=894637"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},26528:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return i}});var r=n(89611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function i(){i=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,a,l){var i=new RegExp(e,a);return t.set(i,l||t.get(e)),(0,r.Z)(i,n.prototype)}function o(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){return t[n]=e[a[n]],t}),Object.create(null))}return l(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var l=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+l[t]})))}if("function"==typeof r){var i=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==a(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,i)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},i.apply(this,arguments)}}}]);