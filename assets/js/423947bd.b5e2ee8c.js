"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45250],{3239:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(67294),i="noLoginAlert_boZc",r=t(73727),l=t(71217),s=t(21314),d=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,n,t){t.d(n,{x:function(){return C},Z:function(){return T}});var a=t(67294),i=t(3435),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=t(86010),s=t(71217),d=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var n=e.value,t=n,i=void 0;if(d.test(n)){var l=function(e){if(d.test(e))return e.match(d).groups.klass}(n);i=r[l],t=""+n.replace(d,"")}return a.createElement("option",{value:n,className:i},t)},c=t(92814),u=t(51436),m=t(68949),g=t(72389),p=t(21314),f=t(74322),h=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return r[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,s.Pi)((function(e){var n,t,i,s=(0,g.Z)(),d=a.useState("unchecked"),h=d[0],v=d[1],k=(0,p.oR)("documentStore").find(e.webKey),w=function(n){!e.isLegacy&&k.loaded&&(v("unchecked"),k.setData({value:n,type:"string"}))},y=function(n){if(e.checker)return v(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};v(t(n)===t(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&y(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&y(k.value)}),[k,s]),s?k.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,className:b(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,n){return a.createElement(o,{value:e,key:n})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(k.value)},className:(0,l.default)(r[h],r.checkButton)},a.createElement(c.G,{icon:(i=h,"correct"===i?u.f8k:"wrong"===i?u.nYk:u.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),k=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,s.Pi)((function(e){var n,t=(0,p.oR)("documentStore").find(e.webKey),i=function(n,a){if(void 0===a&&(a=0),!e.isLegacy&&t.loaded){var i=[].concat(t.data.value.slice(0,a),[n],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:i}))}};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(n=t.legacyData)?void 0:n.value)||[]:t.data.value).map((function(n,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return i(e.target.value,r)},value:n,className:w(n),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,n){return a.createElement(o,{value:e,key:n})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return i(e.target.value,r)},value:n,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),N=t(83117),E=t(75552),S=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:n},e))):a.createElement(f.Z,null)})),x=t(3239),z=function(e,n){"code"!==n.type&&("use_legacy"===e?(n.setData(n.legacyData),n.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()}))}))):(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()})))},D=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===n.type&&a.createElement(S,{type:"text",webKey:n.webKey,isLegacy:!0}),"string"===n.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===n.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:n.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return z("use_legacy",n)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return z("use_current",n)}},"Nein (verwerfen)"))):null})),Z=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=t(46858),A=t(78982),L=t(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=function(e){if(!e.id)return function(){};var n=function(){try{return(0,K.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,A.rV)(e.id,n);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,A.cl)(e.id,n)}}}:function(){}},T=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore"),t=(0,p.oR)("msalStore"),i=n.find(e.webKey),r=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,_(e)),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),t.loggedIn&&a.createElement(D,e),t.loggedIn&&a.createElement(Z,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(67294),i=t(86010),r="loader_2rVr",l="badge_2s0E",s=t(71217),d=t(92814),o=t(51436),c=(0,s.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(d.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},75552:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(67294),i="quillEditor_1XRF",r="quillAnswer_oQOS",l="monospace_3rFN",s="disableToolbar_gntN",d=t(86010),o=t(71217),c=t(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),g=function(e){var n=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),n.push(t)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),n.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),n.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),n.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),n.push(l)}return e.code&&n.push(["code-block"]),n},p=(0,o.Pi)((function(e){var n=a.useState(!1),o=n[0],p=n[1],f=a.useState(!1),h=f[0],b=f[1],v=a.useRef(null),k=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var n=!0;return function(e,n){if(void 0===n&&(n={}),u)return e();var a=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};n.formula&&!window.katex&&(i.katex=a.length,a.push(t.e(41008).then(t.bind(t,41008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,49115)))),Promise.all(a).then((function(n){u=n[i["react-quill"]].default;var t=n[i.quill].default,a=n[i["react-image-compress"]].default;if("katex"in i){var r=n[i.katex].default;window.katex=r}t.register("modules/imageCompress",a),e()}))}((function(){n&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){n=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return u&&h&&k.loaded?a.createElement("div",{onFocus:function(){return!o&&p(!0)},className:(0,d.default)(i)},a.createElement(u,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,d.default)(r,e.monospace&&l,o?void 0:s),value:k.text||"",onChange:function(n,t,a,i){var r,l;r=n,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(r)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},46858:function(e,n,t){t.d(n,{Vx:function(){return i},Vj:function(){return a},ly:function(){return r}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,n,t){t.d(n,{rV:function(){return r},cl:function(){return l}});var a=864e5,i=2592e6,r=function(e,n,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(n){return}}(),n){var i=localStorage.getItem(n);if(i){var r=JSON.parse(i);if("object"==typeof r){var l=r[e];return void 0===l?t:l}return t}}var d=localStorage.getItem(e);return d?JSON.parse(d):t}catch(o){return t}},l=function(e,n){try{if(n){var t=r(n,void 0,{expiry:Date.now()+i});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(n,JSON.stringify(t))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(n){var t=r(n,void 0,{expiry:e+i});t.expiry&&t.expiry>e&&localStorage.removeItem(n)})),localStorage.setItem("last_cleanup",""+e)}catch(n){return}}},83120:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),l=t(84384),s=t(52084),d=["components"],o={title:"Diagramme"},c="Excel Diagramme",u={unversionedId:"Excel-WMS/diagramme",id:"Excel-WMS/diagramme",title:"Diagramme",description:"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder quantitativ (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder qualitativ (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann).",source:"@site/docs/Excel-WMS/01-diagramme.md",sourceDirName:"Excel-WMS",slug:"/Excel-WMS/diagramme",permalink:"/Excel-WMS/diagramme",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Excel-WMS/01-diagramme.md",tags:[],version:"current",lastUpdatedAt:1636095568,formattedLastUpdatedAt:"11/5/2021",sidebarPosition:1,frontMatter:{title:"Diagramme"},sidebar:"sidebar",previous:{title:"3. Freie Open Source Software",permalink:"/Computer/os/foss"},next:{title:"Statsistische Kenngr\xf6ssen",permalink:"/Excel-WMS/Lageparameter"}},m=[{value:"Kreisdiagramm",id:"kreisdiagramm",children:[{value:"Vorgehen",id:"vorgehen",children:[],level:3}],level:2},{value:"Liniendiagramm",id:"liniendiagramm",children:[],level:2},{value:"S\xe4ulendiaramm",id:"s\xe4ulendiaramm",children:[],level:2},{value:"Balkendiagramm",id:"balkendiagramm",children:[],level:2}],g={toc:m};function p(e){var n=e.components,o=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"excel-diagramme"},"Excel Diagramme"),(0,r.kt)("p",null,"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder ",(0,r.kt)("strong",{parentName:"p"},"quantitativ")," (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder ",(0,r.kt)("strong",{parentName:"p"},"qualitativ")," (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann). "),(0,r.kt)("h2",{id:"kreisdiagramm"},"Kreisdiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"350px"},isInline:!1,src:t(17993).Z,alt:"--width=350px",mdxType:"Image"})),(0,r.kt)("p",null,"Kreisdiagramme eignen sich dann besonders gut, wenn es um eine einfache Aufschl\xfcsselung in genau einer Dimension geht. Anders gesagt: Verwenden Sie Kreisdiagramme, wenn Sie anhand einer Variable die Unterschiede zwischen den einzelnen Gruppen aufzeigen m\xf6chten. ",(0,r.kt)("strong",{parentName:"p"},"Denken Sie immer daran, dass Kreisdiagramme nur dann eingesetzt werden sollten, wenn die Kategorien zusammengesetzt ein Ganzes ergeben."),(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Kreisdiagramme werden f\xfcr die Darstellung verschiedener Anteile an einem Ganzen verwendet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prozentuale Anteile der Augenfarben in der Klasse"),(0,r.kt)("li",{parentName:"ul"},"prozentualer Anteil der Haarfarben in der Bev\xf6lkerung"),(0,r.kt)("li",{parentName:"ul"},"prozentuale Anteile verschiedener Altersgruppen in der Gesellschaft")),(0,r.kt)("h3",{id:"vorgehen"},"Vorgehen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eine Tabelle mit der Kategorie und der effektiven Anzahl erzeugen. ",(0,r.kt)("strong",{parentName:"li"},"Die Summe aller Kategorien muss der Stichprobengr\xf6sse ",(0,r.kt)("em",{parentName:"strong"},"n")," entsprechen!"),(0,r.kt)("br",{parentName:"li"}),"Hilfreiche Feldfunktionen:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENN(A1:A12;"Schwarz")'),' -> Z\xe4hlt, wie oft der Wert "Schwarz" im Bereich ',(0,r.kt)("inlineCode",{parentName:"li"},"A1:A12")," vorkommt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENNS(A1:A12; ">=10"; A1:A12; "<20")')," -> Z\xe4hlt, wie viele Werte im Bereich ",(0,r.kt)("inlineCode",{parentName:"li"},"A1:A12")," zwischen 10 und 20 liegen. Bemerke, dass der Bereich zweimal angegeben werden muss.")))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"300px"},isInline:!1,src:t(74315).Z,alt:"--width=300px",mdxType:"Image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die ganze Tabelle ausw\xe4hlen und \xfcber ",(0,r.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>2D-Kreis")," ein Kreisdiagramm einf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"\xdcber ",(0,r.kt)("inlineCode",{parentName:"li"},"Diagrammentwurf>Diagrammelemente hinzuf\xfcgen")," die Datenbeschriftung hinzuf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"Mit einem Textfeld (",(0,r.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>Formen>Textfeld"),") ein Textfeld f\xfcr die Anzahl Datens\xe4tze (",(0,r.kt)("strong",{parentName:"li"},"n"),") hinzuf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"Rechtsklick auf eine weisse Fl\xe4che des Diagramms > ",(0,r.kt)("inlineCode",{parentName:"li"},"Als Bild speichern...")," ")),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Die Stichprobengr\xf6sse ",(0,r.kt)("strong",{parentName:"li"},"n")," muss angegeben werden (=Anzahl der Datenpunkte)"),(0,r.kt)("li",{parentName:"ul"},"Die Prozentwerte der einzelnen Kreissegmente m\xfcssen bei Diagrammen mit weniger als 10 Segmenten beschriftet werden."),(0,r.kt)("li",{parentName:"ul"},"Entweder in einer Legende oder direkt im Segment muss die Kategorie ersichtlich sein.")))),(0,r.kt)(s.Z,{type:"text",webKey:"0eaed76e-2add-4cba-8383-8ab0ad514565",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"liniendiagramm"},"Liniendiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"surveymonkey",source:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/",licence:"Public Domain",licence_url:"",edited:!1},caption:"",options:{width:"550px"},isInline:!1,src:t(54851).Z,alt:"--width=550px",mdxType:"Image"})),(0,r.kt)("p",null,"Liniendiagramme werden f\xfcr die Visualisierung von Entwicklungen im zeitlichen Verlauf verwendet. Sie werden daher vor allem dann eingesetzt, wenn die ",(0,r.kt)("strong",{parentName:"p"},"langfristige Entwicklung")," von Ums\xe4tzen oder anderen Gr\xf6ssen, die f\xfcr Unternehmen oder Organisationen wichtig sind, gemessen werden sollen. Sie k\xf6nnen auch f\xfcr den ",(0,r.kt)("strong",{parentName:"p"},"Vergleich")," zweier Variablen \xfcber die Zeit genutzt werden. Im Beispiel wird gezeigt, wie die h\xf6here staatliche Unterst\xfctzung f\xfcr gesunde Lebensf\xfchrung sich \xfcber einen Zeitraum von f\xfcnf Jahren auf die Ums\xe4tze bei den S\xfcsswaren ausgewirkt hat."),(0,r.kt)(s.Z,{type:"text",webKey:"a6602f15-8ea2-4c83-bd65-244ae1af5e3c",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"s\xe4ulendiaramm"},"S\xe4ulendiaramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(6375).Z,alt:"--width=400px",mdxType:"Image"})),(0,r.kt)("p",null,"S\xe4ulendiagramme kommen bei der Darstellung von Gr\xf6ssenvergleichen innerhalb eines Zeitraums vor.\nDas S\xe4ulendiagramm eignet sich besonders, um wenige Auspr\xe4gungen (bis ca. 15) zu veranschaulichen. Bei mehr Kategorien leidet die Anschaulichkeit und es sind Liniendiagramme zu bevorzugen. Auch im Falle von metrisch stetigen Daten eignet sich das S\xe4ulendiagramm nicht, es ist ein Histogramm zu bevorzugen."),(0,r.kt)(s.Z,{type:"text",webKey:"c4e2959c-ebd0-4635-b53c-60fa4ef7e301",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"balkendiagramm"},"Balkendiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(33032).Z,alt:"--width=400px",mdxType:"Image"})),(0,r.kt)("p",null,"Das Balkendiagramm ist dem S\xe4ulendiagramm sehr \xe4hnlich. Es entspricht einem S\xe4ulendiagramm mit vertauschten Achsen. So werden aus den vertikalen S\xe4ulen horizontale Balken und es w\xe4chst bei zunehmender Stichprobengr\xf6sse in die L\xe4nge und nicht in die Breite. Besonders gut sind Balkendiagramme f\xfcr die Darstellung von Rangfolgen geeignet."),(0,r.kt)(s.Z,{type:"text",webKey:"6cdbdad0-872b-4590-ad80-fb83182a36d7",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"geeignetes-diagramm"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geeignetes Diagramm")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bestimmen Sie das geeignete Diagramm f\xfcr die gegebene Ausgangslage."),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie m\xf6chten die Ausgaben Ihres letzten Monatslohnes graphisch so darstellen, dass man sieht, wie gross die prozentualen Anteile der verschiedenen Ausgabeposten waren."),(0,r.kt)(s.Z,{type:"string",webKey:"4c6640db-f04d-4049-8e94-944d3359f5ba",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen die Preise verschiedene Smartphones vergleichen."),(0,r.kt)(s.Z,{type:"string",webKey:"8fb7cc30-2565-415f-b227-60f35b5dcd95",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen in einem Diagramm die Tagesh\xf6chst- und -tiefsttemperaturen des letzten Monats aufzeigen."),(0,r.kt)(s.Z,{type:"string",webKey:"71077fa7-e0de-4eef-b71b-7d9d05661fac",solution:"Liniendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen grafisch darstellen, wie hoch der TV-Konsum jedes Lernenden in Ihrer Klasse w\xe4hrend einer Woche ist."),(0,r.kt)(s.Z,{type:"string",webKey:"4a081b61-f7f6-4bc3-995c-9d9d14b101d9",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie haben den Durchschnitt des t\xe4glichen TV-Konsums Ihrer Klasse ermittelt, und zwar w\xe4hrend den letzten sieben Tagen. Nun visualisieren Sie das Resultat."),(0,r.kt)(s.Z,{type:"string",webKey:"ae5eb985-4e04-413b-a55c-8570387ef199",solution:"S\xe4ulendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie haben bei einer Klassenumfrage die Meinungen Ihrer Mitlernenden \xfcber das Angebot der Schulmensa eingeholt. Sie wollen das Resultat in einem Diagramm darstellen."),(0,r.kt)(s.Z,{type:"string",webKey:"2309e16e-9d86-42a7-8e3b-2267dc4ef94a",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"}))),(0,r.kt)(s.Z,{type:"text",webKey:"b11e0a1f-bfdb-4133-add6-5b756f481625",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/"},"www.surveymonkey.de"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},33032:function(e,n,t){n.Z=t.p+"assets/images/diagramm-balken-e59a1ee571540a71edec88ac6d5079b3.png"},17993:function(e,n,t){n.Z=t.p+"assets/images/diagramm-kreis-b1d599cee820977265f1d591e7cb48d6.png"},54851:function(e,n,t){n.Z=t.p+"assets/images/diagramm-linie-a51eda3237ad2aebf6e866f2e4d6ce01.png"},6375:function(e,n,t){n.Z=t.p+"assets/images/diagramm-saeulen-b3fe26d0a43799bb309c14b7bb2fd78f.png"},74315:function(e,n,t){n.Z=t.p+"assets/images/diagramme-kreis-tabelle-8de08a868585808b82f9d89f89720a1c.png"}}]);