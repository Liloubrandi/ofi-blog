"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[74334],{3239:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),d=(0,l.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return I},Z:function(){return O}});var a=n(87462),r=n(67294),i=n(72389),l=n(71217),o=n(21314),d=n(78982),c=n(46858),u=r.createContext(void 0),m=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:m(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,d.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,d.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:m(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:m(t),type:t.type},n)},s=(0,l.Pi)((function(e){var t=(0,o.o)("documentStore"),n=r.useState(p(t,e))[0];return(0,i.Z)()?r.createElement(u.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),g=n(26528),k={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},N=n(86010),f=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){var t=e.value,n=t,a=void 0;if(f.test(t)){var i=function(e){if(f.test(e))return e.match(f).groups.klass}(t);a=k[i],n=""+t.replace(f,"")}return r.createElement("option",{value:t,className:a},n)},b=n(92814),v=n(51436),y=n(68949),C=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return k[function(e){if(C.test(e))return e.match(C).groups.klass}(e)]},w=(0,l.Pi)((function(e){var t,n=(0,i.Z)(),a=r.useState("unchecked"),l=a[0],o=a[1],d=r.useContext(u),c=function(e){o("unchecked"),d.setData({value:e,type:"string"})},m=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,y.U5)((function(){return d.loaded}),(function(e){e&&m(d.data.value)}))}),[]),r.useEffect((function(){d.loaded&&m(d.data.value)}),[n]),r.createElement("div",{className:k.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return c(e.target.value)},style:{width:e.width},value:d.data.value,className:E(d.data.value),disabled:!d.loaded},e.select.map((function(e,t){return r.createElement(h,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return c(e.target.value)},value:d.data.value,disabled:!d.loaded||d.isReadonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return m(d.data.value)},className:(0,N.default)(k[l],k.checkButton)},r.createElement(b.G,{icon:(t=l,"correct"===t?v.f8k:"wrong"===t?v.nYk:v.sph)})))})),x=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),S=function(e){return k[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},_=(0,l.Pi)((function(e){var t=r.useContext(u),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return r.createElement("div",{className:k.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:S(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(h,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.isReadonly})})))})),D=void 0,P=[["bold","italic","underline"]],K=[].concat(P,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),z=(0,l.Pi)((function(e){var t=r.useState(!1),a=t[0],i=t[1],l=r.useState(!1),o=l[0],d=l[1],c=r.useRef(null),m=r.useContext(u),p=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(D)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){D=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(d(!0),c&&c.current&&c.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,c&&c.current&&c.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return D&&o?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(D,{ref:c,theme:"snow",readOnly:!m.loaded||m.isReadonly,className:(0,N.default)(k.quillAnswer,e.monospace&&k.monospace,a?void 0:"disable-toolbar"),value:m.loaded?m.data.value||"":"Laden...",onChange:function(e,t,n,a){var r,i;r=e,void 0===i&&(i=0),o&&m.setData({value:r,type:"text"})},modules:{toolbar:e.reduced?P:K,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),Z=n(3239),B=n(79265),L=(0,l.Pi)((function(){var e=r.useContext(u),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(u.Provider,{value:new B.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(w,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(_,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),A=(0,l.Pi)((function(){return r.useContext(u).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,N.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),I=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=(0,l.Pi)((function(e){var t=(0,o.o)("msalStore");return r.createElement(s,(0,a.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(Z.Z,null),t.loggedIn&&r.createElement(L,null),t.loggedIn&&r.createElement(A,null),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(w,e),"array"===e.type&&r.createElement(_,e)))}))},67460:function(e,t,n){var a=n(51436),r=n(92814),i=n(86010),l=n(14842),o=n(67294),d={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},c={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=o.useState(void 0),u=a[0],m=a[1],p=o.useState("none"),s=p[0],g=p[1],k=o.useRef(null);return o.useEffect((function(){if(!["none","spin","ready"].includes(s)){var e=setTimeout((function(){return g("copied"===s?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[s]),o.useEffect((function(){"none"!==s&&g("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",c[s]),disabled:"spin"===s,onClick:function(){if(null!==k.current){if("none"===s)return g("spin"),(0,l.SE)(k.current,n).then((function(e){m(e),g("ready")}));if("ready"===s)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=u,e))]).then((function(){g("copied")})).catch((function(e){g("error"),console.warn(e)}))}catch(t){console.warn(t),g("error")}}}},o.createElement(r.G,{icon:d[s]})),o.createElement("div",{ref:k,className:"copy-container"},t))}},54416:function(e,t,n){n.d(t,{Vc:function(){return b},bF:function(){return C},H4:function(){return y},g7:function(){return h}});var a,r=n(86010),i=n(67294),l=n(67460),o="container_KevJ",d="input_1x8s",c="inputContainer_5LHV",u="active_3I31",m="interactive_RFFA",p="pixelEditor_2B_Y",s="row_1-gl",g="cell_JXwZ",k="off_2s44",N="on_1Vxn",f="actions_1bhD",h=function(e){return e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,"")},b=((a={})[" "]="00000",a.A="00001",a.B="00010",a.C="00011",a.D="00100",a.E="00101",a.F="00110",a.G="00111",a.H="01000",a.I="01001",a.J="01010",a.K="01011",a.L="01100",a.M="01101",a.N="01110",a.O="01111",a.P="10000",a.Q="10001",a.R="10010",a.S="10011",a.T="10100",a.U="10101",a.V="10110",a.W="10111",a.X="11000",a.Y="11001",a.Z="11010",a[","]="11011",a["-"]="11100",a["."]="11101",a["?"]="11110",a["@"]="11111",a["00000"]=" ",a["00001"]="A",a["00010"]="B",a["00011"]="C",a["00100"]="D",a["00101"]="E",a["00110"]="F",a["00111"]="G",a["01000"]="H",a["01001"]="I",a["01010"]="J",a["01011"]="K",a["01100"]="L",a["01101"]="M",a["01110"]="N",a["01111"]="O",a[1e4]="P",a[10001]="Q",a[10010]="R",a[10011]="S",a[10100]="T",a[10101]="U",a[10110]="V",a[10111]="W",a[11e3]="X",a[11001]="Y",a[11010]="Z",a[11011]=",",a[11100]="-",a[11101]=".",a[11110]="?",a[11111]="@",a),v=function(e,t){void 0===t&&(t=!0);for(var n=[],a=e.replace(/\s/g,"");a.length>0&&(!(a.length<5)||t);)n.push(a.slice(0,5)),a=a.slice(5);return n},y=function(){var e=i.useState(""),t=e[0],n=e[1],a=i.useState(""),l=a[0],m=a[1],p=i.useState("text"),s=p[0],g=p[1];return i.useEffect((function(){"text"===s&&m(function(e){return e.toUpperCase().split("").map((function(e){return b[e]||e}))}(t).join(" "))}),[t]),i.useEffect((function(){"penta"===s&&n(function(e){return v(e).map((function(e){return b[e]||e}))}(l).join(""))}),[l]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",o)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pentacode"),i.createElement("h4",null,"Klartext"),i.createElement("div",{className:c},i.createElement("textarea",{onFocus:function(){return g("text")},placeholder:"Klartext eingeben",className:(0,r.default)(d),value:t,onChange:function(e){return n(e.target.value.toUpperCase())},rows:5}),"text"===s&&i.createElement("div",{className:u})),i.createElement("h4",null,"Pentacode"),i.createElement("div",{className:c},i.createElement("textarea",{onFocus:function(){return g("penta")},placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(d),value:l,onChange:function(e){return m(e.target.value.replace(/[^01\s]/g,""))},rows:5}),"penta"===s&&i.createElement("div",{className:u}))))},C=function(){var e=i.useState("00000 00000 00000 00000 00000"),t=e[0],n=e[1],a=i.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),c=a[0],u=a[1],h=i.useState(""),b=h[0],y=h[1];return i.useEffect((function(){"cell"!==b?(y("editor"),u(v(t,!1).map((function(e){return e.split("").map((function(e){return Number.parseInt(e,2)}))})))):y("")}),[t]),i.useEffect((function(){"editor"!==b?(y("cell"),n(c.map((function(e){return e.join("")})).join(" "))):y("")}),[c]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",o)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),i.createElement("div",{className:m},i.createElement("div",{className:(0,r.default)(p)},i.createElement(l.Z,{options:{backgroundColor:"white",canvasWidth:50,canvasHeight:10*c.length}},i.createElement(i.Fragment,null,c.map((function(e,t){return i.createElement("div",{className:(0,r.default)(s),key:t},e.map((function(e,n){return i.createElement("span",{className:(0,r.default)(g,0===e?k:N),key:n,onClick:function(){var e,a=(e=[],c.forEach((function(t){var n=[];e.push(n),t.forEach((function(e){n.push(e)}))})),e);a[t][n]=1-a[t][n],u(a)}})})))})))),i.createElement("div",{className:f},i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return u([].concat(c,[[0,0,0,0,0]]))}},"+"),i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return u([].concat(c.slice(0,-1)))}},"\uff0d"))),i.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(d),value:t,onChange:function(e){return n(e.target.value.replace(/[^01\s]/g,""))},rows:c.length}))))}},21314:function(e,t,n){n.d(t,{o:function(){return i}});var a=n(67294),r=n(32930),i=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var d=localStorage.getItem(e);return d?JSON.parse(d):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},24916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(77960),o=n(54416),d=["components"],c={title:"Codierung"},u="Codierung",m={unversionedId:"Kryptologie/Symmetrisch/codierung",id:"version-24f/Kryptologie/Symmetrisch/codierung",isDocsHomePage:!1,title:"Codierung",description:"Pentacode",source:"@site/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/02-codierung.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/codierung",permalink:"/24f/Kryptologie/Symmetrisch/codierung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/02-codierung.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{title:"Codierung"},sidebar:"version-24f/sidebar",previous:{title:"Umwandlung ins Bin\xe4rsystem",permalink:"/24f/Kryptologie/Symmetrisch/binaer"},next:{title:"XOR-Verschl\xfcsselung",permalink:"/24f/Kryptologie/Symmetrisch/xor"}},p=[{value:"Pentacode",id:"pentacode",children:[],level:2},{value:"Albhabet",id:"albhabet",children:[],level:2},{value:"Editor",id:"editor",children:[],level:2},{value:"Schwarzweiss-Bild",id:"schwarzweiss-bild",children:[],level:2}],s={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"codierung"},"Codierung"),(0,i.kt)("h2",{id:"pentacode"},"Pentacode"),(0,i.kt)("p",null,"Der Pentacode ist keine offizielle Codierung. Sie wurde von ",(0,i.kt)("a",{parentName:"p",href:"https://rothe.io/?b=crypto&p=1349"},"Stefan Rothe und Tom Jampen")," f\xfcr den Unterricht entwickelt, um erstens ein kurzes Alphabet ohne unn\xf6tige Zeichen zu verwenden und zweitens einen m\xf6glichst kurzen Bin\xe4rcode zu erhalten."),(0,i.kt)("h2",{id:"albhabet"},"Albhabet"),(0,i.kt)("div",{style:{gap:"2em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 2em))",className:"slim-table",classes:["slim-table"]},className:"item"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zahl"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bin\xe4r"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Leerschlag")),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"B")),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"D")),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E")),(0,i.kt)("td",{parentName:"tr",align:"right"},"5"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"F")),(0,i.kt)("td",{parentName:"tr",align:"right"},"6"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"G")),(0,i.kt)("td",{parentName:"tr",align:"right"},"7"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00111"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"H")),(0,i.kt)("td",{parentName:"tr",align:"right"},"8"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"I")),(0,i.kt)("td",{parentName:"tr",align:"right"},"9"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"J")),(0,i.kt)("td",{parentName:"tr",align:"right"},"10"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"right"},"11"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"L")),(0,i.kt)("td",{parentName:"tr",align:"right"},"12"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"M")),(0,i.kt)("td",{parentName:"tr",align:"right"},"13"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N")),(0,i.kt)("td",{parentName:"tr",align:"right"},"14"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O")),(0,i.kt)("td",{parentName:"tr",align:"right"},"15"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01111")))))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 2em))",className:"slim-table",classes:["slim-table"]},className:"item"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zahl"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bin\xe4r"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"right"},"16"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Q")),(0,i.kt)("td",{parentName:"tr",align:"right"},"17"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"right"},"18"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"right"},"19"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"right"},"20"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"U")),(0,i.kt)("td",{parentName:"tr",align:"right"},"21"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"V")),(0,i.kt)("td",{parentName:"tr",align:"right"},"22"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"W")),(0,i.kt)("td",{parentName:"tr",align:"right"},"23"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10111"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"X")),(0,i.kt)("td",{parentName:"tr",align:"right"},"24"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Y")),(0,i.kt)("td",{parentName:"tr",align:"right"},"25"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Z")),(0,i.kt)("td",{parentName:"tr",align:"right"},"26"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},",")),(0,i.kt)("td",{parentName:"tr",align:"right"},"27"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"right"},"28"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".")),(0,i.kt)("td",{parentName:"tr",align:"right"},"29"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"?")),(0,i.kt)("td",{parentName:"tr",align:"right"},"30"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@")),(0,i.kt)("td",{parentName:"tr",align:"right"},"31"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11111"))))))),(0,i.kt)(l.Z,{type:"text",webKey:"fc6f5120-4883-4ac2-b7c4-528919c0ff87",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)(o.H4,{mdxType:"TextEditor"}),(0,i.kt)("h2",{id:"schwarzweiss-bild"},"Schwarzweiss-Bild"),(0,i.kt)(o.bF,{mdxType:"PixelEditor"}),(0,i.kt)(l.Z,{type:"text",webKey:"7bd8c2e9-3ae4-4601-814f-2d2128040cdd",mdxType:"Answer"}))}g.isMDXComponent=!0}}]);