"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[38491],{52084:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return k}});var i=n(67294),g=n(3435),a={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},I=n(86010),c=n(71217),l=(0,g.Z)(/\x2D\x2D(\w+)$/,{klass:1}),r=function(e){var t=e.value,n=t,g=void 0;if(l.test(t)){var I=function(e){if(l.test(e))return e.match(l).groups.klass}(t);g=a[I],n=""+t.replace(l,"")}return i.createElement("option",{value:t,className:g},n)},s=n(92814),u=n(51436),C=n(68949),M=n(72389),o=n(21314),d=n(74322),N=(0,g.Z)(/\x2D\x2D(\w+)$/,{klass:1}),m=function(e){return a[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},A=(0,c.Pi)((function(e){var t,n,g,c=(0,M.Z)(),l=i.useState("unchecked"),N=l[0],A=l[1],D=(0,o.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&D.loaded&&(A("unchecked"),D.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return A(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};A(n(t)===n(e.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,C.U5)((function(){return D.loaded}),(function(e){e&&w(D.value)}))}),[D]),i.useEffect((function(){D.loaded&&w(D.value)}),[D,c]),c?D.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=D.legacyData)?void 0:t.value:D.value,className:m(D.value),disabled:!D.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(r,{value:e,key:t})}))):i.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=D.legacyData)?void 0:n.value:D.value,disabled:!D.loaded||D.readonly||e.disabled}),(e.solution||e.checker)&&i.createElement("button",{onClick:function(){return w(D.value)},className:(0,I.default)(a[N],a.checkButton)},i.createElement(s.G,{icon:(g=N,"correct"===g?u.f8k:"wrong"===g?u.nYk:u.sph)}))):i.createElement(d.Z,null):i.createElement("div",null,"SSR")})),D=(0,g.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return a[function(e){if(D.test(e))return e.match(D).groups.klass}(e)]},w=(0,c.Pi)((function(e){var t,n=(0,o.oR)("documentStore").find(e.webKey),g=function(t,i){if(void 0===i&&(i=0),!e.isLegacy&&n.loaded){var g=[].concat(n.data.value.slice(0,i),[t],n.data.value.slice(i+1));n.setData(Object.assign({},n.data,{value:g}))}};return n.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?i.createElement("select",{key:a,onChange:function(e){return g(e.target.value,a)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(r,{value:e,key:t})}))):i.createElement("input",{key:a,type:"text",onChange:function(e){return g(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):i.createElement(d.Z,null)})),L=n(83117),T=n(75552),j=(0,c.Pi)((function(e){var t=(0,o.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",null,e.label&&i.createElement("h6",null,e.label),i.createElement(T.Z,(0,L.Z)({model:t},e))):i.createElement(d.Z,null)})),b=n(47271),p=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,C.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,C.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,c.Pi)((function(e){var t=(0,o.oR)("documentStore").find(e.webKey);return t.legacyData?i.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",i.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",i.createElement("div",null,"text"===t.type&&i.createElement(j,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&i.createElement(A,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&i.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),i.createElement("div",null,i.createElement("button",{className:"button button--primary",onClick:function(){return p("use_legacy",t)}},"Ja"),i.createElement("button",{className:"button button--info",onClick:function(){return p("use_current",t)}},"Nein (verwerfen)"))):null})),x=(0,c.Pi)((function(e){return(0,o.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,I.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(46858),E=n(78982),v=n(97762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},h=function(e){if(!e.id)return function(){};var t=function(){try{return(0,Z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,E.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,E.cl)(e.id,t)}}}:function(){}},k=(0,c.Pi)((function(e){var t=(0,o.oR)("documentStore"),n=(0,o.oR)("msalStore"),g=t.find(e.webKey),a=(0,M.Z)();return(0,o.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||v.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,h(e)),a?g?i.createElement("div",{"data--web-key":e.webKey},i.createElement(b.Z,null),n.loggedIn&&i.createElement(z,e),n.loggedIn&&i.createElement(x,{webKey:e.webKey}),"text"===e.type&&i.createElement(j,e),"string"===e.type&&i.createElement(A,e),"array"===e.type&&i.createElement(w,e)):i.createElement(d.Z,null):i.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(67294),g="noLoginAlert_HRfh",a=n(39960),I=n(71217),c=n(21314),l=(0,I.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:i.createElement("div",{className:g},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(a.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(67294),g=n(86010),a="loader_FEpR",I="badge_oWqf",c=n(71217),l=n(92814),r=n(51436),s=(0,c.Pi)((function(){return i.createElement("div",{className:(0,g.default)(a)},i.createElement(l.G,{icon:r.IJ7,spin:!0}),i.createElement("span",{className:(0,g.default)("badge",I)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),g="quillEditor_NxYB",a="quillAnswer_J46I",I="monospace_usc_",c="disableToolbar_bRdP",l=n(86010),r=n(71217),s=n(74322),u=void 0,C=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),M=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var i=[];e.h1&&i.push(1),e.h2&&i.push(2),e.h3&&i.push(3),i.push(!1),t.push(i)}if(e.color||e.background){var g=[];e.color&&g.push({color:[]}),e.background&&g.push({background:[]}),t.push(g)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var I=[];e.formula&&I.push("formula"),e.image&&I.push("image"),t.push(I)}return e.code&&t.push(["code-block"]),t},o=(0,r.Pi)((function(e){var t=i.useState(!1),r=t[0],o=t[1],d=i.useState(!1),N=d[0],m=d[1],A=i.useRef(null),D=e.model,y=function(e){e.preventDefault()};i.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var i=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],g={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(g.katex=i.length,i.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(i).then((function(t){u=t[g["react-quill"]].default;var n=t[g.quill].default,i=t[g["react-image-compress"]].default;if("katex"in g){var a=t[g.katex].default;window.katex=a}n.register("modules/imageCompress",i),e()}))}((function(){t&&(m(!0),A&&A.current&&A.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,A&&A.current&&A.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return u&&N&&D.loaded?i.createElement("div",{onFocus:function(){return!r&&o(!0)},className:(0,l.default)(g)},i.createElement(u,{ref:A,theme:"snow",readOnly:e.readonly||D.readonly,className:(0,l.default)(a,e.monospace&&I,r?void 0:c),value:D.text||"",onChange:function(t,n,i,g){var a,I;a=t,void 0===I&&(I=0),!e.readonly&&D.canUpdate&&N&&D.setText(a)},modules:{toolbar:e.toolbar?M(e.toolbar):[].concat(C,M(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return i},Vx:function(){return g},ly:function(){return a}});var i=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},g=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return I},rV:function(){return a}});var i=864e5,g=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>i&&c()}catch(t){return}}(),t){var g=localStorage.getItem(t);if(g){var a=JSON.parse(g);if("object"==typeof a){var I=a[e];return void 0===I?n:I}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(r){return n}},I=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+g});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(i){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+g});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},11602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return C},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return M}});var i=n(83117),g=n(80102),a=(n(67294),n(3905)),I=n(84384),c=n(52084),l=["components"],r={title:"2. Bussystem"},s="2. Bussystem",u={unversionedId:"Computer/architecture/bus",id:"Computer/architecture/bus",title:"2. Bussystem",description:"Witz des Tages by 24i --width=350px",source:"@site/docs/Computer/03-architecture/02-bus.md",sourceDirName:"Computer/03-architecture",slug:"/Computer/architecture/bus",permalink:"/Computer/architecture/bus",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/03-architecture/02-bus.md",tags:[],version:"current",lastUpdatedAt:1647858935,formattedLastUpdatedAt:"3/21/2022",sidebarPosition:2,frontMatter:{title:"2. Bussystem"},sidebar:"sidebar",previous:{title:"1. Von-Neumann-Architektur",permalink:"/Computer/architecture/von-neumann"},next:{title:"3. Prozessor",permalink:"/Computer/architecture/cpu"}},C={},M=[{value:"Beispiele",id:"beispiele",level:2}],o={toc:M};function d(e){var t=e.components,r=(0,g.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-bussystem"},"2. Bussystem"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(I.Z,{bib:{author:"Yael, Sujina, Denise",source:"https://ofi.gbsl.website/24i",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Witz des Tages by 24i",options:{width:"350px"},isInline:!1,src:n(63636).Z,alt:"Witz des Tages by 24i --width=350px",mdxType:"Image"})),(0,a.kt)("p",null,"In der Informatik ist ein ",(0,a.kt)("em",{parentName:"p"},"Bus")," ein System zur Daten\xfcbertragung zwischen mehreren Komponenten \xfcber einen gemeinsamen \xdcbertragungsweg. Findet eine Daten\xfcbertragung zwischen zwei Komponenten statt, so m\xfcssen die \xfcbrigen Komponenten schweigen, da sie sich sonst gegenseitig st\xf6ren w\xfcrden.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("div",{style:{},className:"flex flex-cards"},(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(I.Z,{bib:void 0,caption:"Daten\xfcbertragung mit Bus",options:{},isInline:!1,src:n(20661).Z,alt:"Daten\xfcbertragung mit Bus",mdxType:"Image"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(I.Z,{bib:void 0,caption:"Daten\xfcbertragung ohne Bus",options:{},isInline:!1,src:n(91924).Z,alt:"Daten\xfcbertragung ohne Bus",mdxType:"Image"}))))),(0,a.kt)("p",null,"Busse werden verwendet, um die Komplexit\xe4t der Hardware zu reduzieren."),(0,a.kt)("p",null,"Wenn alle Komponenten direkt miteinander kommunizieren, muss zwischen allen Komponenten eine Datenleitung vorhanden sein. Wenn im Bild oben rechts eine f\xfcnfte Komponente hinzukommt, m\xfcssen f\xfcnf neue Datenleitungen gezogen werden. Wenn ein Bus verwendet wird, muss eine neue Komponente nur am Bus angeschlossen werden."),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Systembus in einem Computer"),(0,a.kt)("li",{parentName:"ul"},"Serial AT Attachment (SATA, f\xfcr Computerfestplatten)"),(0,a.kt)("li",{parentName:"ul"},"Universal Serial Bus (USB)")),(0,a.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"take-home-message-aus-cpu-rollenspiel"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message aus CPU-Rollenspiel")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(c.Z,{type:"text",webKey:"2ac55d18-cd29-4ad2-b378-36a5210e19a2",mdxType:"Answer"}))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Bus_(Datenverarbeitung)"},"Wikipedia: Bus (Datenverarbeitung)"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},20661:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDY3MiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjU7Ij4KICAgIDxnIGlkPSJEIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LDE5MC4yMDIsMTU1Ljg3MikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDMuMTMyMTVlLTE3LC0wLjUxMTUxOSwwLjcxODQyMyw0LjM5OTA3ZS0xNywxMjcuODk5LDg2LjkxMzYpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE1MCw1My45MDlMMTUwLDU5TDEzOSw1MS4xNjhMMTUwLDQzLjMzNkwxNTAsNDguNDI3TDE3Miw0OC40MjdMMTcyLDQzLjMzNkwxODMsNTEuMTY4TDE3Miw1OUwxNzIsNTMuOTA5TDE1MCw1My45MDlaIiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MC43MnB4OyIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUwMDQ2LDAsMCwxLjMxNjA3LC05My40MTkyLC0xNS43NzMzKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzguMjg2NiwtMi42NzQ0OSkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+RDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQyIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ5Ljc5OCwxNTUuODcyKSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMy4xMzIxNWUtMTcsLTAuNTExNTE5LDAuNzE4NDIzLDQuMzk5MDdlLTE3LDEyNy44OTksODYuOTEzNikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUwLDUzLjkwOUwxNTAsNTlMMTM5LDUxLjE2OEwxNTAsNDMuMzM2TDE1MCw0OC40MjdMMTcyLDQ4LjQyN0wxNzIsNDMuMzM2TDE4Myw1MS4xNjhMMTcyLDU5TDE3Miw1My45MDlMMTUwLDUzLjkwOVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjcycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjQxOTIsLTE1Ljc3MzMpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4zNjA0LC0yLjY3NDQ5KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjgyLjM0M3B4IiB5PSIzMy42MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTAuODAzcHg7Ij5DPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJCIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMDY0LDE4OS4yMDIsLTE5LjExMzcpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgzLjEzMzQzZS0xNywtMC41MTE3MjcsMC43MTg0MjMsNC4zOTkwN2UtMTcsMTI4LjM0OSwxMzEuOTc0KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTAsNTMuOTA5TDE1MCw1OUwxMzksNTEuMTY4TDE1MCw0My4zMzZMMTUwLDQ4LjQyN0wxNzIsNDguNDI3TDE3Miw0My4zMzZMMTgzLDUxLjE2OEwxNzIsNTlMMTcyLDUzLjkwOUwxNTAsNTMuOTA5WiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuNzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTY2LC05Mi45NjkxLC0xNS43ODYxKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzkuMDU0NCwtMi42NjgzNCkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwOHB4OyI+QjwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQSIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ4Ljc5OCwtMzAuMTI4KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMy4xMzIxNWUtMTcsLTAuNTExNTE5LDAuNzE4NDIzLDQuMzk5MDdlLTE3LDEyNy40NDksMTM2Ljg3OSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUwLDUzLjkwOUwxNTAsNTlMMTM5LDUxLjE2OEwxNTAsNDMuMzM2TDE1MCw0OC40MjdMMTcyLDQ4LjQyN0wxNzIsNDMuMzM2TDE4Myw1MS4xNjhMMTcyLDU5TDE3Miw1My45MDlMMTUwLDUzLjkwOVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjcycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjg2OTQsLTEwLjgyMTgpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4yNjM3LDIuMjc3MDIpIj4KICAgICAgICAgICAgPHRleHQgeD0iODIuMzQzcHgiIHk9IjMzLjYwN3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMC44MDNweDsiPkE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMTAuNjY2NywwLDAsMS40NjE4NSwtMTQ5OC42Nyw4MC45MTU1KSI+CiAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMTNweDsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE0OC4xNTUsMTgwLjc3TDE1My4zNTEsMTkxLjI5N0wxNTguNjU1LDE4MC44MjRMMTQ4LjE1NSwxODAuNzdaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTUxOS43NjQsNzYuNUw1MjUuMDE0LDY2TDUzMC4yNjQsNzYuNUw1MTkuNzY0LDc2LjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE1My4zOTQsMTgyLjg5N0MxNTMuNDgzLDE2NS43ODcgMTUzLjY3NiwxMjguNSAxNTMuNjc2LDEyOC41TDUyNS4wMTQsMTI4LjVMNTI1LjAxNCw3NC40IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMTgzLDI4LDI4KTtzdHJva2Utd2lkdGg6My41cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},91924:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgdmlld0JveD0iMCAwIDY3MiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjU7Ij4KICAgIDxnIGlkPSJEIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LDE5MC4yMDIsMTU1Ljg3MikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjQxOTIsLTE1Ljc3MzMpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4yODY2LC0yLjY3NDQ5KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjgyLjM0M3B4IiB5PSIzMy42MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTAuODAzcHg7Ij5EPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJDIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0yNDkuNzk4LDE1NS44NzIpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUwMDQ2LDAsMCwxLjMxNjA3LC05My40MTkyLC0xNS43NzMzKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzguMzYwNCwtMi42NzQ0OSkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+QzwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQiIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjA2NCwxODkuMjAyLC0xOS4xMTM3KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTY2LC05Mi45NjkxLC0xNS43ODYxKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzkuMDU0NCwtMi42NjgzNCkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwOHB4OyI+QjwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQSIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ4Ljc5OCwtMzAuMTI4KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTYwNywtOTMuODY5NCwtMTAuODIxOCkiPgogICAgICAgICAgICA8cmVjdCB4PSIxNDIiIHk9IjI0IiB3aWR0aD0iNjAiIGhlaWdodD0iMTcuMTAyIiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MC4zMnB4OyIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDc4LjI2MzcsMi4yNzcwMikiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+QTwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0xNS40ODY1LC0xNS40ODY1KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC40NTAxMzcsLTAsLTAsMC40NTAxMzcsNi45NzEwMyw2Ljk3MTAzKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjEuNjc1LDE3OS4xNjVMMjE2LDE5MUwyMjguOTUsMTkzLjEzNEwyMjEuNjc1LDE3OS4xNjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ0My4wNSw2My44NjZMNDU2LDY2TDQ1MC4zMjUsNzcuODM1TDQ0My4wNSw2My44NjZaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyMy40NSwxODcuMTJDMjU5LjE5LDE2OC41MDUgNDEyLjgxLDg4LjQ5NSA0NDguNTUsNjkuODgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIyOC45NSw2My44NjZMMjE2LDY2TDIyMS42NzUsNzcuODM1TDIyOC45NSw2My44NjZaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ1MC4zMjUsMTc5LjE2NUw0NTYsMTkxTDQ0My4wNSwxOTMuMTM0TDQ1MC4zMjUsMTc5LjE2NVoiIHN0eWxlPSJmaWxsOnJnYigxODMsMjgsMjgpOyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjIzLjQ1LDY5Ljg4QzI1OS4xOSw4OC40OTUgNDEyLjgxLDE2OC41MDUgNDQ4LjU1LDE4Ny4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDE4MywyOCwyOCk7c3Ryb2tlLXdpZHRoOjMuNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMTUuNDg2NSwtMTUuNDg2NSkiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNDUwMTM3LC0wLC0wLDAuNDUwMTM3LDYuOTcxMDMsNi45NzEwMykiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjI2LjUsMzMuMTI1TDIxNiw0MUwyMjYuNSw0OC44NzVMMjI2LjUsMzMuMTI1WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NDUuNSwzMy4xMjVMNDU2LDQxTDQ0NS41LDQ4Ljg3NUw0NDUuNSwzMy4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNC40LDQxTDQ0Ny42LDQxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMTgzLDI4LDI4KTtzdHJva2Utd2lkdGg6My41cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0xNS40ODY1LC0xNS40ODY1KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC40NTAxMzcsLTAsLTAsMC40NTAxMzcsNi45NzEwMyw2Ljk3MTAzKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDguMTI1LDE4MC41TDExNiwxOTFMMTIzLjg3NSwxODAuNUwxMDguMTI1LDE4MC41WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDguMTI1LDc2LjVMMTE2LDY2TDEyMy44NzUsNzYuNUwxMDguMTI1LDc2LjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTExNiwxODIuNkwxMTYsNzQuNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDE4MywyOCwyOCk7c3Ryb2tlLXdpZHRoOjMuNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMTUuNDg2NSwtMTUuNDg2NSkiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNDUwMTM3LC0wLC0wLDAuNDUwMTM3LDYuOTcxMDMsNi45NzEwMykiPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQ4LjEyNSwxODAuNUw1NTYsMTkxTDU2My44NzUsMTgwLjVMNTQ4LjEyNSwxODAuNVoiIHN0eWxlPSJmaWxsOnJnYigxODMsMjgsMjgpOyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQ4LjEyNSw3Ni41TDU1Niw2Nkw1NjMuODc1LDc2LjVMNTQ4LjEyNSw3Ni41WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NTYsMTgyLjZMNTU2LDc0LjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNi41LDIwOC4xMjVMMjE2LDIxNkwyMjYuNSwyMjMuODc1TDIyNi41LDIwOC4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ0NS41LDIwOC4xMjVMNDU2LDIxNkw0NDUuNSwyMjMuODc1TDQ0NS41LDIwOC4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNC40LDIxNkw0NDcuNiwyMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},63636:function(e,t,n){t.Z=n.p+"assets/images/02-bus_joke-11f5f6cad8971e2c85e149f6bad572ff.jpg"}}]);