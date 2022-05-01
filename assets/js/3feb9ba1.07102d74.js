"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78596],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,p=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(p,l(l({ref:t},d),{},{components:n})):a.createElement(p,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return G},Z:function(){return S}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),u=n(51436),m=n(68949),g=n(72389),p=n(21314),f=n(74322),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n=(0,g.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],v=(0,p.oR)("documentStore").find(e.webKey),k=function(e){v.loaded&&(c("unchecked"),v.setData({value:e,type:"string"}))},b=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&b(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&b(v.value)}),[v,n]),n?v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:v.value,className:h(v.value),disabled:!v.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(v.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(d.G,{icon:(t=o,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:w(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),y=n(83117),x=n(75552),E=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(x.Z,(0,y.Z)({model:t},e))):a.createElement(f.Z,null)})),I=n(47271),C=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(97762),G=function(e){return e.replace(/\s+/g,"").toUpperCase()},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||D.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(I.Z,null),n.loggedIn&&a.createElement(C,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(N,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),c=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],s=i[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),m&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&a.createElement(c,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),s=n(51436),d=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),s=n(71217),d=n(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],p=t[1],f=a.useState(!1),v=f[0],h=f[1],k=a.useRef(null),b=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return u&&v&&b.loaded?a.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,c.default)(r)},a.createElement(u,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&v&&b.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},73786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=(n(82593),["components"]),c={title:"5. Vektorgrafik",label:"5. Vektorgrafik"},s="5. Vektorgrafik [^1]",d={unversionedId:"Codes-and-Data/Grafikformate-v24/vector",id:"Codes-and-Data/Grafikformate-v24/vector",title:"5. Vektorgrafik",description:"Eine SVG-Datei ist eine Textdatei, welche \xabBefehle\xbb enth\xe4lt, wie Formen gezeichnet werden sollen.",source:"@site/docs/Codes-and-Data/02-Grafikformate-v24/05-vector.md",sourceDirName:"Codes-and-Data/02-Grafikformate-v24",slug:"/Codes-and-Data/Grafikformate-v24/vector",permalink:"/Codes-and-Data/Grafikformate-v24/vector",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/02-Grafikformate-v24/05-vector.md",tags:[],version:"current",lastUpdatedAt:1651402051,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:5,frontMatter:{title:"5. Vektorgrafik",label:"5. Vektorgrafik"},sidebar:"sidebar",previous:{title:"4. \xdcbung",permalink:"/Codes-and-Data/Grafikformate-v24/uebung"},next:{title:"1. Huffman-Codierung",permalink:"/Codes-and-Data/Compression/huffman"}},u={},m=[{value:"Grundstruktur",id:"grundstruktur",level:2},{value:"Rechtecke",id:"rechtecke",level:2},{value:"Grundformen",id:"grundformen",level:2}],g={toc:m};function p(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"5-vektorgrafik-"},"5. Vektorgrafik ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Eine SVG-Datei ist eine Textdatei, welche \xabBefehle\xbb enth\xe4lt, wie Formen gezeichnet werden sollen."),(0,i.kt)("h2",{id:"grundstruktur"},"Grundstruktur"),(0,i.kt)("p",null,"Eine SVG-Datei hat folgende Grundstruktur:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n></svg>\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Den hier verfassten Code kann auch in eine Datei mit der Dateiendung ",(0,i.kt)("inlineCode",{parentName:"p"},".svg")," geschrieben werden und anschliessend bspw. in einem Browser betrachtet werden."))),(0,i.kt)("h2",{id:"rechtecke"},"Rechtecke"),(0,i.kt)("p",null,"Das folgende Beispiel stellt die franz\xf6sische Flagge dar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live_jsx",live_jsx:!0},'<svg width="300" \n  height="200" xmlns="http://www.w3.org/2000/svg" \n  xmlns:xlink="http://www.w3.org/1999/xlink"\n>\n  <desc>Flagge Frankreichs</desc>\n  <rect x="0" y="0" width="100" height="200" fill="rgb(0, 85, 164)" />\n  <rect x="100" y="0" width="100" height="200" fill="rgb(255, 255, 255)" />\n  <rect x="200" y="0" width="100" height="200" fill="rgb(239, 69, 49)" />\n</svg>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'width="300"')," legt die Breite des Bildes auf 300 Pixel fest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'height="200"')," legt die H\xf6he des Bildes auf 200 Pixel fest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<rect ...>")," zeichnet ein Rechteck an den angegebenen Koordinaten mit der angegebenen Breite, H\xf6he und Farbe.")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"deutsche-flagge"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Deutsche Flagge")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine SVG-Datei, welche die Deutsche Flagge darstellt. Die Flagge ist 500 Pixel breit, jeder Streifen ist 100 Pixel hoch. Das Rot ist rein (d.h. 255 Rot, 0 Gr\xfcn und 0 Blau). Das Gelb hat einen Rotanteil von 255 und einen Gr\xfcnanteil von 204."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(60084).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Halten Sie den verwendeten Code separat im untenstehenden Textfeld fest. "),(0,i.kt)("div",{parentName:"div",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xc4nderungen im Live-Editor werden nicht gespeichert!"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-svg",metastring:"live_py persist noCompare id=642aff2d-c564-4f5a-a32d-09bb1ce461ed",live_py:!0,persist:!0,noCompare:!0,id:"642aff2d-c564-4f5a-a32d-09bb1ce461ed"},"")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live_jsx",live_jsx:!0},'<svg width="300" height="200" \n  xmlns="http://www.w3.org/2000/svg" \n  xmlns:xlink="http://www.w3.org/1999/xlink"\n>\n    <desc>Flagge Frankreichs</desc>\n    <rect x="0" y="0" width="100" height="200" fill="rgb(0, 85, 164)" />\n    <rect x="100" y="0" width="100" height="200" fill="rgb(255, 255, 255)" />\n    <rect x="200" y="0" width="100" height="200" fill="rgb(239, 69, 49)" />\n</svg>\n')))),(0,i.kt)("h2",{id:"grundformen"},"Grundformen"),(0,i.kt)("p",null,"Auf der folgenden Seite sind die Grundformen von SVG zusammengefasst:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.selfhtml.org/wiki/SVG/Elemente/Grundformen"},"SVG-Grundformen"))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"grundformen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Grundformen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine neue SVG-Datei und probieren Sie die Grundformen aus."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-svg",metastring:"live_py persist noCompare id=cc4d54db-764e-411e-8577-d1f6d58e76ec",live_py:!0,persist:!0,noCompare:!0,id:"cc4d54db-764e-411e-8577-d1f6d58e76ec"},"")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live_jsx",live_jsx:!0},'<svg width="300" height="200" \n  xmlns="http://www.w3.org/2000/svg" \n  xmlns:xlink="http://www.w3.org/1999/xlink"\n>\n  <desc>Grundformen</desc>\n</svg>\n')))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"eigene-zeichnung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Eigene Zeichnung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie mit SVG eine winterliche oder festliche Grafik."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-svg",metastring:"live_py persist noCompare id=4848dc26-9feb-4708-80bc-c17144d3a5e3",live_py:!0,persist:!0,noCompare:!0,id:"4848dc26-9feb-4708-80bc-c17144d3a5e3"},"")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live_jsx",live_jsx:!0},'<svg width="300" height="200" \n  xmlns="http://www.w3.org/2000/svg" \n  xmlns:xlink="http://www.w3.org/1999/xlink"\n>\n  <desc>Eigene Zeichnung</desc>\n</svg>\n')))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=860740"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},60084:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlc2M+RmxhZ2dlIERldXRzY2hsYW5kczwvZGVzYz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0icmdiKDAsIDAsIDApIiAvPgogIDxyZWN0IHg9IjAiIHk9IjEwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InJnYigyNTUsIDAsIDApIiAvPgogIDxyZWN0IHg9IjAiIHk9IjIwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InJnYigyNTUsIDIwNCwgMCkiIC8+ICAKPC9zdmc+Cg=="}}]);