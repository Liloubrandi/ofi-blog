"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[31845],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="noLoginAlert_HSVn",i=n(73727),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return H},Z:function(){return W}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),c=n(71217),o=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=i[l],n=""+t.replace(o,"")}return r.createElement("option",{value:t,className:a},n)},d=n(92814),s=n(51436),m=n(68949),g=n(72389),p=n(21314),b=n(74322),h=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),f=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n,a,c=(0,g.Z)(),o=r.useState("unchecked"),h=o[0],v=o[1],y=(0,p.oR)("documentStore").find(e.webKey),I=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&k(y.value)}))}),[y]),r.useEffect((function(){y.loaded&&k(y.value)}),[y,c]),c?y.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return I(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:f(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return I(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(y.value)},className:(0,l.default)(i[h],i.checkButton)},r.createElement(d.G,{icon:(a=h,"correct"===a?s.f8k:"wrong"===a?s.nYk:s.sph)}))):r.createElement(b.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),I=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:I(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(b.Z,null)})),w=n(83117),N=n(75552),C=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,w.Z)({model:t},e))):r.createElement(b.Z,null)})),E=n(3239),Z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(C,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return Z("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return Z("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),x=n(46858),S=n(78982),A=n(97762),H=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var t=function(){try{return(0,x.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,S.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,S.cl)(e.id,t)}}}:function(){}},W=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||A.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,L(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(E.Z,null),n.loggedIn&&r.createElement(z,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(C,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement(b.Z,null):r.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",c=n(71217),o=n(92814),u=n(51436),d=(0,c.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",o=n(86010),u=n(71217),d=n(74322),s=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],p=t[1],b=r.useState(!1),h=b[0],f=b[1],v=r.useRef(null),y=e.model,I=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),s)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(r).then((function(t){s=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(f(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",I))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",I)}}),[e]);return s&&h&&y.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(a)},r.createElement(s,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,o.default)(i,e.monospace&&l,u?void 0:c),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&h&&y.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(d.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},81892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),c=n(52084),o=["components"],u={title:"9. Ebenen"},d="9. Ebenen",s={unversionedId:"Computer/basics/Ebenen",id:"version-24o/Computer/basics/Ebenen",title:"9. Ebenen",description:"Wie die Netzwerke kann auch der Computer selber auf verschiedenen Ebenen betrachtet werden.",source:"@site/versioned_docs/version-24o/07-Computer/01-basics/09-Ebenen.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/Ebenen",permalink:"/24o/Computer/basics/Ebenen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/07-Computer/01-basics/09-Ebenen.md",tags:[],version:"24o",sidebarPosition:9,frontMatter:{title:"9. Ebenen"},sidebar:"version-24o/sidebar",previous:{title:"8. Stromversorgung",permalink:"/24o/Computer/basics/Stromversorgung"},next:{title:"2. Logische Gatter",permalink:"/24o/Computer/gates/"}},m=[{value:"Elektronik",id:"elektronik",children:[],level:2},{value:"Digitale Logik",id:"digitale-logik",children:[],level:2},{value:"Rechnerarchitektur",id:"rechnerarchitektur",children:[],level:2},{value:"Betriebssystem",id:"betriebssystem",children:[],level:2},{value:"Anwendungen",id:"anwendungen",children:[],level:2}],g={toc:m};function p(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"9-ebenen"},"9. Ebenen"),(0,i.kt)("p",null,"Wie die Netzwerke kann auch der Computer selber auf verschiedenen ",(0,i.kt)("strong",{parentName:"p"},"Ebenen")," betrachtet werden."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Thomas Jampen",source:"https://gitlab.gymkirchenfeld.ch/teach/computer/-/blob/main/1-basics/9-layers/layers.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hardware-Ebenen",options:{},isInline:!1,src:n(36224).Z,alt:"Hardware-Ebenen",mdxType:"Image"})),(0,i.kt)("h2",{id:"elektronik"},"Elektronik"),(0,i.kt)("p",null,"Auf der Ebene der ",(0,i.kt)("strong",{parentName:"p"},"Elektronik")," werden die Zust\xe4nde 0 und 1 durch unterschiedliche Spannungen dargestellt. Das grundlegende Bauelement f\xfcr digitale Schaltungen ist der ",(0,i.kt)("strong",{parentName:"p"},"Transistor"),"."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5wIRJN3DN_8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"transistoren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Transistoren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sehen Sie sich das obige Video an. Und beschreiben Sie in eigenen Worten:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"welche Analogie aus dem Alltag passt zum Transistor?"),(0,i.kt)("li",{parentName:"ul"},"wozu wird ein Transistor bei Computern eingesetzt?")),(0,i.kt)(c.Z,{type:"text",webKey:"77218889-54e7-4ff2-ac32-10a2de6cb927",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"digitale-logik"},"Digitale Logik"),(0,i.kt)("p",null,"In der ",(0,i.kt)("strong",{parentName:"p"},"digitalen Logik")," werden aus den Grundelementen (",(0,i.kt)("strong",{parentName:"p"},"logische Gatter"),") komplexe Schaltungen aufgebaut, welche z.B. Zahlen addieren oder Werte speichern k\xf6nnen."),(0,i.kt)("h2",{id:"rechnerarchitektur"},"Rechnerarchitektur"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Rechnerarchitektur")," legt fest, wie verschiedene Bauelemente (wie z.B. Rechenwerk und Speicher) miteinander verkn\xfcpft werden und in welcher zeitlichen Abfolge Daten untereinander ausgetauscht werden. Daraus ergeben sich die grundlegenden Befehle (",(0,i.kt)("strong",{parentName:"p"},"Maschinencode"),"), welche der Computer versteht."),(0,i.kt)("h2",{id:"betriebssystem"},"Betriebssystem"),(0,i.kt)("p",null,"Das ",(0,i.kt)("strong",{parentName:"p"},"Betriebssystem")," kontrolliert und koordiniert den Zugriff auf die Hardware f\xfcr die verschiedenen Anwendungen, welche auf dem Computer ausgef\xfchrt werden. Es stellt grundlegende Funktionen wie die Dateiverwaltung und Netzwerkkommunikation zu Verf\xfcgung. Das Betriebssystem enth\xe4lt viel Programmcode, der speziell f\xfcr die eingesetzte Rechnerarchitektur und -hardware geschrieben ist."),(0,i.kt)("h2",{id:"anwendungen"},"Anwendungen"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Anwendungen")," unterst\xfctzen den/die Benutzer/in in der t\xe4glichen Arbeit. Sie werden in ",(0,i.kt)("strong",{parentName:"p"},"h\xf6heren Programmiersprachen")," geschrieben, d.h. sie brauchen sich dank des Betriebssystems nicht um die eingesetzte Hardware zu k\xfcmmern. Solche Programme k\xf6nnen vom Prozessor nicht direkt ausgef\xfchrt, sondern m\xfcssen zuerst noch von einem Compiler in Maschinencode \xfcbersetzt werden. Dies erleichtert uns Menschen die Arbeit beim Programmieren, da der Programmcode nicht an bestimmte Hardware und Architektur gebunden und damit allgemeing\xfcltiger und einfacher ist."))}p.isMDXComponent=!0},36224:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjUyOHB4IiBoZWlnaHQ9IjI3MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMjA4IiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjI0LDIyNCwyMjQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEzMi4zOThweCIgeT0iMjM3LjE3NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+RWxla3Ryb25payAoU3Bhbm51bmcsIFN0cm9tKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNjAiIHdpZHRoPSI0OTYiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTc3LjQ0N3B4IiB5PSIxODkuMTc2cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5EaWdpdGFsZSBMb2dpayAoQml0cyk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjM5LDE1NCwxNTQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9Ijk5LjYxcHgiIHk9IjE0MS4xNzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPlJlY2huZXJhcmNoaXRla3R1ciAoTWFzY2hpbmVuY29kZSk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTIiIHdpZHRoPSI0OTYiIGhlaWdodD0iMTAwIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEyMi42MzNweCIgeT0iNDUuNTYxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5BbndlbmR1bmdlbiAoUHJvZ3JhbW1jb2RlKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE5MiIgeT0iNjQiIHdpZHRoPSIzMjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjI0LDEzMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjgzLjU1OHB4IiB5PSI5My4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkJldHJpZWJzc3lzdGVtPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K"}}]);