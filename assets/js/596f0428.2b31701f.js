"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[18896],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(t),g=i,p=u["".concat(d,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(p,l(l({ref:n},c),{},{components:t})):a.createElement(p,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},682593:function(e,n,t){t.d(n,{x:function(){return D},Z:function(){return A}});var a=t(667294),i=t(403435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=t(386010),s=t(471217),d=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var n=e.value,t=n,i=void 0;if(d.test(n)){var l=function(e){if(d.test(e))return e.match(d).groups.klass}(n);i=r[l],t=""+n.replace(d,"")}return a.createElement("option",{value:n,className:i},t)},c=t(592814),m=t(51436),u=t(168949),g=t(972389),p=t(121314),h=t(274322),f=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,s.Pi)((function(e){var n,t=(0,g.Z)(),i=a.useState("unchecked"),s=i[0],d=i[1],f=(0,p.oR)("documentStore").find(e.webKey),v=function(e){f.loaded&&(d("unchecked"),f.setData({value:e,type:"string"}))},k=function(n){if(e.checker)return d(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};d(t(n)===t(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,u.U5)((function(){return f.loaded}),(function(e){e&&k(f.value)}))}),[f]),a.useEffect((function(){f.loaded&&k(f.value)}),[f,t]),t?f.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:f.value,className:b(f.value),disabled:!f.loaded},e.select.map((function(e,n){return a.createElement(o,{value:e,key:n})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(f.value)},className:(0,l.default)(r[s],r.checkButton)},a.createElement(c.G,{icon:(n=s,"correct"===n?m.f8k:"wrong"===n?m.nYk:m.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),k=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey),t=function(e,t){void 0===t&&(t=0);var a=[].concat(n.data.value.slice(0,t),[e],n.data.value.slice(t+1));n.setData(Object.assign({},n.data,{value:a}))};return n.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),n.data.value.map((function(i,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return t(e.target.value,r)},value:i,className:w(i),disabled:!n.loaded},e.select.map((function(e,n){return a.createElement(o,{value:e,key:n})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return t(e.target.value,r)},value:i,disabled:!n.loaded||n.readonly})}))):a.createElement(h.Z,null)})),N=t(583117),E=t(575552),x=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:n},e))):a.createElement(h.Z,null)})),z=t(647271),S=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=t(697762),D=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore"),t=(0,p.oR)("msalStore"),i=n.find(e.webKey),r=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(z.Z,null),t.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(667294),i="noLoginAlert_HRfh",r=t(239960),l=t(471217),s=t(121314),d=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.Z,{to:"/login"},"Login"))}))},884384:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(592814),l=t(51436),s=t(386010),d=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(r.G,{icon:l.Xjp}))))},o=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},c=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+o(t.size)+")",n.maxHeight=o(t.size),delete t.size),t.height&&(n.maxHeight=o(t.height),n.height=o(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+o(t.width)+")",n.width=o(t.width),delete t.width),n=Object.assign({},n,t),a.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return a.createElement(c,e);var n=a.useState(!1),t=(n[0],n[1]),r=a.useState(!1),l=r[0],o=r[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,a,i,r,l;n=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=n.left<=a&&n.right>=a,l=n.top<=i&&n.bottom>=i,r&&l||t(!1)}},a.createElement(c,e),u&&a.createElement("figcaption",null,m&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,l?i.visible:void 0),onClick:function(){return o(!l)}},"@"),l&&a.createElement(d,e.bib)))}},274322:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(667294),i=t(386010),r="loader_FEpR",l="badge_oWqf",s=t(471217),d=t(592814),o=t(51436),c=(0,s.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(d.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},575552:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(667294),i="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",d=t(386010),o=t(471217),c=t(274322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var n=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),n.push(t)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),n.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),n.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),n.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),n.push(l)}return e.code&&n.push(["code-block"]),n},p=(0,o.Pi)((function(e){var n=a.useState(!1),o=n[0],p=n[1],h=a.useState(!1),f=h[0],b=h[1],v=a.useRef(null),k=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var n=!0;return function(e,n){if(void 0===n&&(n={}),m)return e();var a=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,771167,23)),t.e(76095).then(t.t.bind(t,676095,23)),t.e(17891).then(t.t.bind(t,817891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};n.formula&&!window.katex&&(i.katex=a.length,a.push(t.e(41008).then(t.bind(t,541008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,250037)))),Promise.all(a).then((function(n){m=n[i["react-quill"]].default;var t=n[i.quill].default,a=n[i["react-image-compress"]].default;if("katex"in i){var r=n[i.katex].default;window.katex=r}t.register("modules/imageCompress",a),e()}))}((function(){n&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){n=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return m&&f&&k.loaded?a.createElement("div",{onFocus:function(){return!o&&p(!0)},className:(0,d.default)(i)},a.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,d.default)(r,e.monospace&&l,o?void 0:s),value:k.text||"",onChange:function(n,t,a,i){var r,l;r=n,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&f&&k.setText(r)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(u,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},24818:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return g}});var a=t(583117),i=t(480102),r=(t(667294),t(603905)),l=t(884384),s=t(682593),d=["components"],o={title:"Diagramme"},c="Excel Diagramme",m={unversionedId:"Excel/diagramme",id:"version-24w/Excel/diagramme",title:"Diagramme",description:"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder quantitativ (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder qualitativ (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann).",source:"@site/versioned_docs/version-24w/02-Excel/01-diagramme.md",sourceDirName:"02-Excel",slug:"/Excel/diagramme",permalink:"/24w/Excel/diagramme",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24w/02-Excel/01-diagramme.md",tags:[],version:"24w",sidebarPosition:1,frontMatter:{title:"Diagramme"},sidebar:"version-24w/sidebar",previous:{title:"Home 24w",permalink:"/24w/home"},next:{title:"Statsistische Kenngr\xf6ssen",permalink:"/24w/Excel/Lageparameter"}},u={},g=[{value:"Kreisdiagramm",id:"kreisdiagramm",level:2},{value:"Vorgehen",id:"vorgehen",level:3},{value:"Liniendiagramm",id:"liniendiagramm",level:2},{value:"S\xe4ulendiaramm",id:"s\xe4ulendiaramm",level:2},{value:"Balkendiagramm",id:"balkendiagramm",level:2}],p={toc:g};function h(e){var n=e.components,o=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"excel-diagramme"},"Excel Diagramme"),(0,r.kt)("p",null,"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder ",(0,r.kt)("strong",{parentName:"p"},"quantitativ")," (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder ",(0,r.kt)("strong",{parentName:"p"},"qualitativ")," (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann). "),(0,r.kt)("h2",{id:"kreisdiagramm"},"Kreisdiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"350px"},isInline:!1,src:t(532565).Z,alt:"--width=350px",mdxType:"Image"})),(0,r.kt)("p",null,"Kreisdiagramme eignen sich dann besonders gut, wenn es um eine einfache Aufschl\xfcsselung in genau einer Dimension geht. Anders gesagt: Verwenden Sie Kreisdiagramme, wenn Sie anhand einer Variable die Unterschiede zwischen den einzelnen Gruppen aufzeigen m\xf6chten. ",(0,r.kt)("strong",{parentName:"p"},"Denken Sie immer daran, dass Kreisdiagramme nur dann eingesetzt werden sollten, wenn die Kategorien zusammengesetzt ein Ganzes ergeben."),(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Kreisdiagramme werden f\xfcr die Darstellung verschiedener Anteile an einem Ganzen verwendet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prozentuale Anteile der Augenfarben in der Klasse"),(0,r.kt)("li",{parentName:"ul"},"prozentualer Anteil der Haarfarben in der Bev\xf6lkerung"),(0,r.kt)("li",{parentName:"ul"},"prozentuale Anteile verschiedener Altersgruppen in der Gesellschaft")),(0,r.kt)("h3",{id:"vorgehen"},"Vorgehen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eine Tabelle mit der Kategorie und der effektiven Anzahl erzeugen. ",(0,r.kt)("strong",{parentName:"li"},"Die Summe aller Kategorien muss der Stichprobengr\xf6sse ",(0,r.kt)("em",{parentName:"strong"},"n")," entsprechen!"),(0,r.kt)("br",{parentName:"li"}),"Hilfreiche Feldfunktionen:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENN(A1:A12;"Schwarz")'),' -> Z\xe4hlt, wie oft der Wert "Schwarz" im Bereich ',(0,r.kt)("inlineCode",{parentName:"li"},"A1:A12")," vorkommt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENNS(A1:A12; ">=10"; A1:A12; "<20")')," -> Z\xe4hlt, wie viele Werte im Bereich ",(0,r.kt)("inlineCode",{parentName:"li"},"A1:A12")," zwischen 10 und 20 liegen. Bemerke, dass der Bereich zweimal angegeben werden muss.")))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"300px"},isInline:!1,src:t(685449).Z,alt:"--width=300px",mdxType:"Image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die ganze Tabelle ausw\xe4hlen und \xfcber ",(0,r.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>2D-Kreis")," ein Kreisdiagramm einf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"\xdcber ",(0,r.kt)("inlineCode",{parentName:"li"},"Diagrammentwurf>Diagrammelemente hinzuf\xfcgen")," die Datenbeschriftung hinzuf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"Mit einem Textfeld (",(0,r.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>Formen>Textfeld"),") ein Textfeld f\xfcr die Anzahl Datens\xe4tze (",(0,r.kt)("strong",{parentName:"li"},"n"),") hinzuf\xfcgen."),(0,r.kt)("li",{parentName:"ul"},"Rechtsklick auf eine weisse Fl\xe4che des Diagramms > ",(0,r.kt)("inlineCode",{parentName:"li"},"Als Bild speichern...")," ")),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Die Stichprobengr\xf6sse ",(0,r.kt)("strong",{parentName:"li"},"n")," muss angegeben werden (=Anzahl der Datenpunkte)"),(0,r.kt)("li",{parentName:"ul"},"Die Prozentwerte der einzelnen Kreissegmente m\xfcssen bei Diagrammen mit weniger als 10 Segmenten beschriftet werden."),(0,r.kt)("li",{parentName:"ul"},"Entweder in einer Legende oder direkt im Segment muss die Kategorie ersichtlich sein.")))),(0,r.kt)(s.Z,{type:"text",webKey:"0eaed76e-2add-4cba-8383-8ab0ad514565",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"liniendiagramm"},"Liniendiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"surveymonkey",source:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/",licence:"Public Domain",licence_url:"",edited:!1},caption:"",options:{width:"550px"},isInline:!1,src:t(243977).Z,alt:"--width=550px",mdxType:"Image"})),(0,r.kt)("p",null,"Liniendiagramme werden f\xfcr die Visualisierung von Entwicklungen im zeitlichen Verlauf verwendet. Sie werden daher vor allem dann eingesetzt, wenn die ",(0,r.kt)("strong",{parentName:"p"},"langfristige Entwicklung")," von Ums\xe4tzen oder anderen Gr\xf6ssen, die f\xfcr Unternehmen oder Organisationen wichtig sind, gemessen werden sollen. Sie k\xf6nnen auch f\xfcr den ",(0,r.kt)("strong",{parentName:"p"},"Vergleich")," zweier Variablen \xfcber die Zeit genutzt werden. Im Beispiel wird gezeigt, wie die h\xf6here staatliche Unterst\xfctzung f\xfcr gesunde Lebensf\xfchrung sich \xfcber einen Zeitraum von f\xfcnf Jahren auf die Ums\xe4tze bei den S\xfcsswaren ausgewirkt hat."),(0,r.kt)(s.Z,{type:"text",webKey:"a6602f15-8ea2-4c83-bd65-244ae1af5e3c",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"s\xe4ulendiaramm"},"S\xe4ulendiaramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(73709).Z,alt:"--width=400px",mdxType:"Image"})),(0,r.kt)("p",null,"S\xe4ulendiagramme kommen bei der Darstellung von Gr\xf6ssenvergleichen innerhalb eines Zeitraums vor.\nDas S\xe4ulendiagramm eignet sich besonders, um wenige Auspr\xe4gungen (bis ca. 15) zu veranschaulichen. Bei mehr Kategorien leidet die Anschaulichkeit und es sind Liniendiagramme zu bevorzugen. Auch im Falle von metrisch stetigen Daten eignet sich das S\xe4ulendiagramm nicht, es ist ein Histogramm zu bevorzugen."),(0,r.kt)(s.Z,{type:"text",webKey:"c4e2959c-ebd0-4635-b53c-60fa4ef7e301",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("h2",{id:"balkendiagramm"},"Balkendiagramm"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(620499).Z,alt:"--width=400px",mdxType:"Image"})),(0,r.kt)("p",null,"Das Balkendiagramm ist dem S\xe4ulendiagramm sehr \xe4hnlich. Es entspricht einem S\xe4ulendiagramm mit vertauschten Achsen. So werden aus den vertikalen S\xe4ulen horizontale Balken und es w\xe4chst bei zunehmender Stichprobengr\xf6sse in die L\xe4nge und nicht in die Breite. Besonders gut sind Balkendiagramme f\xfcr die Darstellung von Rangfolgen geeignet."),(0,r.kt)(s.Z,{type:"text",webKey:"6cdbdad0-872b-4590-ad80-fb83182a36d7",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"geeignetes-diagramm"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geeignetes Diagramm")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bestimmen Sie das geeignete Diagramm f\xfcr die gegebene Ausgangslage."),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie m\xf6chten die Ausgaben Ihres letzten Monatslohnes graphisch so darstellen, dass man sieht, wie gross die prozentualen Anteile der verschiedenen Ausgabeposten waren."),(0,r.kt)(s.Z,{type:"string",webKey:"4c6640db-f04d-4049-8e94-944d3359f5ba",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen die Preise verschiedene Smartphones vergleichen."),(0,r.kt)(s.Z,{type:"string",webKey:"8fb7cc30-2565-415f-b227-60f35b5dcd95",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen in einem Diagramm die Tagesh\xf6chst- und -tiefsttemperaturen des letzten Monats aufzeigen."),(0,r.kt)(s.Z,{type:"string",webKey:"71077fa7-e0de-4eef-b71b-7d9d05661fac",solution:"Liniendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie wollen grafisch darstellen, wie hoch der TV-Konsum jedes Lernenden in Ihrer Klasse w\xe4hrend einer Woche ist."),(0,r.kt)(s.Z,{type:"string",webKey:"4a081b61-f7f6-4bc3-995c-9d9d14b101d9",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie haben den Durchschnitt des t\xe4glichen TV-Konsums Ihrer Klasse ermittelt, und zwar w\xe4hrend den letzten sieben Tagen. Nun visualisieren Sie das Resultat."),(0,r.kt)(s.Z,{type:"string",webKey:"ae5eb985-4e04-413b-a55c-8570387ef199",solution:"S\xe4ulendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sie haben bei einer Klassenumfrage die Meinungen Ihrer Mitlernenden \xfcber das Angebot der Schulmensa eingeholt. Sie wollen das Resultat in einem Diagramm darstellen."),(0,r.kt)(s.Z,{type:"string",webKey:"2309e16e-9d86-42a7-8e3b-2267dc4ef94a",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"}))),(0,r.kt)(s.Z,{type:"text",webKey:"b11e0a1f-bfdb-4133-add6-5b756f481625",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/"},"www.surveymonkey.de"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},620499:function(e,n,t){n.Z=t.p+"assets/images/diagramm-balken-e59a1ee571540a71edec88ac6d5079b3.png"},532565:function(e,n,t){n.Z=t.p+"assets/images/diagramm-kreis-b1d599cee820977265f1d591e7cb48d6.png"},243977:function(e,n,t){n.Z=t.p+"assets/images/diagramm-linie-a51eda3237ad2aebf6e866f2e4d6ce01.png"},73709:function(e,n,t){n.Z=t.p+"assets/images/diagramm-saeulen-b3fe26d0a43799bb309c14b7bb2fd78f.png"},685449:function(e,n,t){n.Z=t.p+"assets/images/diagramme-kreis-tabelle-8de08a868585808b82f9d89f89720a1c.png"}}]);