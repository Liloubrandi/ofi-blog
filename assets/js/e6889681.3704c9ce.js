"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[15870],{3239:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l="noLoginAlert_HSVn",r=a(73727),i=a(71217),d=a(21314),c=(0,i.Pi)((function(){return(0,d.oR)("msalStore").loggedIn?null:n.createElement("div",{className:l},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return z},Z:function(){return G}});var n=a(67294),l=a(3435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=a(86010),d=a(71217),c=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,a=t,l=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);l=r[i],a=""+t.replace(c,"")}return n.createElement("option",{value:t,className:l},a)},m=a(92814),u=a(51436),s=a(68949),p=a(72389),N=a(21314),k=a(74322),g=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return r[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},f=(0,d.Pi)((function(e){var t,a,l,d=(0,p.Z)(),c=n.useState("unchecked"),g=c[0],f=c[1],b=(0,N.oR)("documentStore").find(e.webKey),V=function(t){!e.isLegacy&&b.loaded&&(f("unchecked"),b.setData({value:t,type:"string"}))},Z=function(t){if(e.checker)return f(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};f(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,s.U5)((function(){return b.loaded}),(function(e){e&&Z(b.value)}))}),[b]),n.useEffect((function(){b.loaded&&Z(b.value)}),[b,d]),d?b.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return V(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:h(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(o,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return V(e.target.value)},value:e.isLegacy?null==(a=b.legacyData)?void 0:a.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return Z(b.value)},className:(0,i.default)(r[g],r.checkButton)},n.createElement(m.G,{icon:(l=g,"correct"===l?u.f8k:"wrong"===l?u.nYk:u.sph)}))):n.createElement(k.Z,null):n.createElement("div",null,"SSR")})),b=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),V=function(e){return r[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},Z=(0,d.Pi)((function(e){var t,a=(0,N.oR)("documentStore").find(e.webKey),l=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var l=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:l}))}};return a.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,r){return e.select?n.createElement("select",{key:r,onChange:function(e){return l(e.target.value,r)},value:t,className:V(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(o,{value:e,key:t})}))):n.createElement("input",{key:r,type:"text",onChange:function(e){return l(e.target.value,r)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(k.Z,null)})),U=a(83117),R=a(75552),v=(0,d.Pi)((function(e){var t=(0,N.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(R.Z,(0,U.Z)({model:t},e))):n.createElement(k.Z,null)})),T=a(3239),W=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},E=(0,d.Pi)((function(e){var t=(0,N.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(v,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(f,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(Z,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return W("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return W("use_current",t)}},"Nein (verwerfen)"))):null})),y=(0,d.Pi)((function(e){return(0,N.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),F=a(46858),S=a(78982),M=a(97762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,F.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,S.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,S.cl)(e.id,t)}}}:function(){}},G=(0,d.Pi)((function(e){var t=(0,N.oR)("documentStore"),a=(0,N.oR)("msalStore"),l=t.find(e.webKey),r=(0,p.Z)();return(0,N.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||M.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),r?l?n.createElement("div",{"data--web-key":e.webKey},n.createElement(T.Z,null),a.loggedIn&&n.createElement(E,e),a.loggedIn&&n.createElement(y,{webKey:e.webKey}),"text"===e.type&&n.createElement(v,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(Z,e)):n.createElement(k.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r="loader_FEpR",i="badge_oWqf",d=a(71217),c=a(92814),o=a(51436),m=(0,d.Pi)((function(){return n.createElement("div",{className:(0,l.default)(r)},n.createElement(c.G,{icon:o.IJ7,spin:!0}),n.createElement("span",{className:(0,l.default)("badge",i)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),l="quillEditor_NxYB",r="quillAnswer_J46I",i="monospace_usc_",d="disableToolbar_bRdP",c=a(86010),o=a(71217),m=a(74322),u=void 0,s=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var l=[];e.color&&l.push({color:[]}),e.background&&l.push({background:[]}),t.push(l)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},N=(0,o.Pi)((function(e){var t=n.useState(!1),o=t[0],N=t[1],k=n.useState(!1),g=k[0],h=k[1],f=n.useRef(null),b=e.model,V=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],l={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(l.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,49115)))),Promise.all(n).then((function(t){u=t[l["react-quill"]].default;var a=t[l.quill].default,n=t[l["react-image-compress"]].default;if("katex"in l){var r=t[l.katex].default;window.katex=r}a.register("modules/imageCompress",n),e()}))}((function(){t&&(h(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",V))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",V)}}),[e]);return u&&g&&b.loaded?n.createElement("div",{onFocus:function(){return!o&&N(!0)},className:(0,c.default)(l)},n.createElement(u,{ref:f,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(r,e.monospace&&i,o?void 0:d),value:b.text||"",onChange:function(t,a,n,l){var r,i;r=t,void 0===i&&(i=0),!e.readonly&&b.canUpdate&&g&&b.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(s,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(m.Z,null)}))},46858:function(e,t,a){a.d(t,{Vx:function(){return l},Vj:function(){return n},ly:function(){return r}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},l=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return r},cl:function(){return i}});var n=864e5,l=2592e6,r=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&d()}catch(t){return}}(),t){var l=localStorage.getItem(t);if(l){var r=JSON.parse(l);if("object"==typeof r){var i=r[e];return void 0===i?a:i}return a}}var c=localStorage.getItem(e);return c?JSON.parse(c):a}catch(o){return a}},i=function(e,t){try{if(t){var a=r(t,void 0,{expiry:Date.now()+l});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},d=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=r(t,void 0,{expiry:e+l});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},78038:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return s},default:function(){return N}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),i=a(84384),d=a(52084),c=["components"],o={title:"4. \xdcbung",label:"4. \xdcbung"},m="Rastergrafik praktisch [^1]",u={unversionedId:"Codierung/Grafikformate/uebung",id:"version-25h/Codierung/Grafikformate/uebung",title:"4. \xdcbung",description:"Das folgende Foto hat im Original eine Aufl\xf6sung von 6016\xd74016 Pixel mit einer Farbtiefe von 3 Byte.",source:"@site/versioned_docs/version-25h/05-Codierung/02-Grafikformate/04-uebung.md",sourceDirName:"05-Codierung/02-Grafikformate",slug:"/Codierung/Grafikformate/uebung",permalink:"/25h/Codierung/Grafikformate/uebung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/02-Grafikformate/04-uebung.md",tags:[],version:"25h",sidebarPosition:4,frontMatter:{title:"4. \xdcbung",label:"4. \xdcbung"},sidebar:"version-25h/sidebar",previous:{title:"3. Rastergrafik",permalink:"/25h/Codierung/Grafikformate/raster"},next:{title:"5. Vektorgrafik",permalink:"/25h/Codierung/Grafikformate/vector"}},s=[{value:"TGA-Grafikformat",id:"tga-grafikformat",children:[],level:2}],p={toc:s};function N(e){var t=e.components,o=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rastergrafik-praktisch-"},"Rastergrafik praktisch ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"1-jpeg-format"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. JPEG-Format")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Das folgende Foto hat im Original eine Aufl\xf6sung von ",(0,r.kt)("inlineCode",{parentName:"p"},"6016\xd74016")," Pixel mit einer Farbtiefe von 3 Byte."),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Berechnen Sie die theoretische Speichergr\xf6sse in Megabyte."),(0,r.kt)("li",{parentName:"ol"},"Laden Sie das Originalbild unter dem folgenden Link herunter:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(50638).Z},"Originalbild")))),(0,r.kt)("li",{parentName:"ol"},"Finden Sie heraus, wie gross der tats\xe4chliche Speicherplatz des Bildes in Megabyte ist. Notieren Sie diese Zahl."),(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie das Bild in der Foto-App."),(0,r.kt)("li",{parentName:"ol"},"\xc4ndern Sie die Gr\xf6sse des Bildes auf 20%."),(0,r.kt)("li",{parentName:"ol"},"Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualit\xe4ten 100%, 75%, 50% und 0%. Vergleichen Sie die Bilder und die Dateigr\xf6ssen. Was stellen Sie fest?")),(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author_name:"Nico Gr\xfctter",author_uri:"https://pixabay.com/de/users/nicos_fotowelt-2354795/",licence:"Pixabay",source_name:"Pixabay",source_uri:"https://pixabay.com/images/id-5104370/"},caption:"Island",options:{},isInline:!1,src:a(23544).Z,alt:"Island",mdxType:"Image"})),(0,r.kt)(d.Z,{type:"text",webKey:"2e1c4773-da2e-42da-b506-f158fa968916",mdxType:"Answer"}))),(0,r.kt)("h2",{id:"tga-grafikformat"},"TGA-Grafikformat"),(0,r.kt)("p",null,"Das ",(0,r.kt)("em",{parentName:"p"},"Targa Image File")," ist ein veraltetes Dateiformat, welches Pixeldaten unkomprimiert speichert. Deshalb k\xf6nnen TGA-Dateien mit dem ",(0,r.kt)("a",{parentName:"p",href:"https://hexed.it"},"HexEd.it")," betrachtet und bearbeitet werden."),(0,r.kt)("p",null,"Der Dateikopf einer TGA-Datei enth\xe4lt Informationen dazu, wie die Datei aufgebaut ist."),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Byte(s)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beispiel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"L\xe4nge der Bild-ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Farbpalette vorhanden?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bildtyp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4 - 8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Farbpalette"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0 0 0 "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9 - 12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Koordinaten"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0 0 0 "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"13 - 14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Breite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10 00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"15 - 16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"H\xf6he"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10 00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Farbaufl\xf6sung"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"18"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphakanal"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"20")))))),(0,r.kt)("p",null,"Am wichtigsten sind die Felder \xabBreite\xbb und \xabH\xf6he\xbb, welche die Dimension des Bildes angeben. Dabei sind die beiden Bytes vertauscht. Um die korrekte Zahl zu erhalten, m\xfcssen sie vertauscht und dann als Bin\xe4rzahl interpretiert werden."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"tga-datei"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"TGA-Datei")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Laden Sie die folgende TGA-Datei herunter:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(476).Z},"Vorlage")))),(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie die Datei in ",(0,r.kt)("em",{parentName:"li"},"HexEd.it"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hexed.it"},"HexEd.it")))),(0,r.kt)("li",{parentName:"ol"},"Erstellen Sie ein Bild, indem Sie die Farben f\xfcr die einzelnen Pixel \xe4ndern.\n",(0,r.kt)(i.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:a(62104).Z,mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Laden Sie die ge\xe4nderte Datei auf den Computer und \xf6ffnen Sie es.")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=922802"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},50638:function(e,t,a){t.Z=a.p+"assets/files/iceland-0647a0c203282b3fd2b30061efda42d8.jpg"},476:function(e,t,a){t.Z=a.p+"assets/files/vorlage-7251be5746d08db7bc7f90469944f83b.tga"},23544:function(e,t,a){t.Z=a.p+"assets/images/iceland-9ba07fe6a39fe5bbe88a2d922f434b48.jpg"},62104:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjYyMHB4IiBoZWlnaHQ9IjEwMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8dGV4dCB4PSIzNDUuMTQ1cHgiIHk9IjIwLjYzN3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij5CcmVpdGU8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTYuMTE1cHgiIHk9IjIwLjYzN3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij5Iw7ZoZTwvdGV4dD4KICAgIDx1c2UgaWQ9InZvcmxhZ2UtdGdhLWhleGVkaXQucG5nIiB4bGluazpocmVmPSIjX0ltYWdlMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMHB4IiBoZWlnaHQ9IjQ1cHgiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwyNC4wMjkzKSIvPgogICAgPHJlY3QgeD0iMzM2IiB5PSIyOC4wMjkiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxOC41IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjIwLDAsMCk7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxyZWN0IHg9IjM4OSIgeT0iMjguMDI5IiB3aWR0aD0iNTAiIGhlaWdodD0iMTguNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDIyMCwwLDApO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8cmVjdCB4PSI2NiIgeT0iNDguMDI5IiB3aWR0aD0iNzkiIGhlaWdodD0iMTguNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDIyMCwwLDApO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8dGV4dCB4PSI4NS42NTRweCIgeT0iNzkuNjM3cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjEuIFBpeGVsPC90ZXh0PgogICAgPGRlZnM+CiAgICAgICAgPGltYWdlIGlkPSJfSW1hZ2UxIiB3aWR0aD0iNjIwcHgiIGhlaWdodD0iNDVweCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFtd0FBQUF0Q0FZQUFBQVREamZGQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUx5MGxFUVZSNG5PM2RiMHhUOXg0RzhLZXovSk82MjY1aUc0b1RFbE53eUFyV2hUOXVpYkprTjhIRWJTOGtHcGJKTWpkemsyMFI1NVM1Tjc2d3pySmw0ZFdDTnpjc1kzTWo4bUxtM3FpVFJFTzJjREZtWGRubFFqTXJReEFCYldxQlFTblk5dHdYWnVSV0tQdWRGdUVVbjg4YjZPSGhuUE1rRGVkTHp6bXRTcElrQ1JRWGg4T3gzTHRBUkVSRUs5Z1R5NzBEUkVSRVJMUXdEbXhFUkVSRUNxZnllcjNTVTA4OUpSU3UvUHZTbmZvNys3WjF5YlpGdE53Y0RnZXNWajduaVpSSTVOakhZeFk5YW55RmpZaUlpRWpoT0xBUkVSRVJLUndITmlJaUlpS0Y0OEJHUkVSRXBIRHF4VmpKT2sweWRsa01NRHlaZ2p2ajAvam5MM2R3ZDJKR2RrYkV2WHYzY09IQ0JZeU1qTUJvTktLaW9nSVAzelFoa2hGeDkrNWR0TFMwNE5hdFcxaS9majEyNzk2TmRldld6ZjQ4SEE2anJhME5QLy84TTZhbXByQnQyellVRnhjalBUMDlvWHVKWnRpTHZkaHJMa21TME5mWGg3YTJOaFFYRnlNL1AzOU9ocjJVMDRzb1VjVDlDdHZhOUNTY2ZEVVBrNEVnenYvbkxpWURRWng4TlE5cjA1TmtaVVQ0UmtkUlcxc0xqVWFEblR0M1FxUFJvTGEyRnI3UlVWa1pFVjZ2RjlYVjFWaXpaZzMyN05tRE5XdldvTHE2R2w2dmR6YlQyTmlJN3U1dWxKV1ZZZnYyN2ZqaGh4OVFYVjJOUUNDUTBMMUVNdXpGWHV3MXY2YW1KalEzTitPYmI3NUJiMjl2VE4zWmErbDZFU1dLVlVlUEhqMmVscFltRkc1eERNOVp0bWRySmtiOTkvR1BmdzlpNVBkcC9IZDRBam42Tk9Ub1Y4TTVPQzZjZWRodWErYWNaZWUrK3c1NnZSNnZ2ZllhTWpJeWtKZVhoNkdoSWR5NmRRc0ZCUVhDR1JGTlRVMVl0MjRkM25ubkhSaU5SbGdzRmd3TURPQzMzMzdEMXExYkFRQmJ0bXhCY1hFeDFxOWZqdzBiTnFDc3JBeWZmLzQ1U2t0TFlUQVloTGVsdEY0aUdmWmEzRjdEdzhQSXpKejduRS8wWHRHczFGNEFVRmhZaUJkZWVBRlhybHpCcGsyYmtKdWJLN3M3ZXkxZEx4SHpIZnNlTnQ4eGkyZ3h4ZjBLbTltZ3dTK0Q0MUNwQUhQR2FxaFV3QytENHpBYk5MSXlJbHd1Rnl3V0N5UkpRbjkvUHlSSmdzVmlnY3Zsa3BVUjRYUTZVVkpTZ25BNERMZmJqWEE0akpLU0VqaWR6cWkvTXprNWlhbXBLWmhNcG9UdUZVdDM5bUl2OWhMRFhndFRXaThpcFloN1lOTnBrdUh6QjFHV284V0pWemVoTEVjTG56OEluU1paVmthRXgrT0JWcXVGMCtuRTRjT0g0WFE2b2RWcTRmRjRaR1ZFREEwTlFhZlRvYU9qQTN2MzdrVkhSd2QwT2gyR2hvYWkvazV6Y3pPMmI5OHUrem9LcGZXS3BUdDdzUmQ3aVdHdmhTbXRGNUZTeEQyd2hjSmhxSjhBK3J3QjlBei9qajV2QU9vbkhpeVhreEdoVnFzUkRBWmhNcGxRVkZRRWs4bUVZREFJdFZvdEt5TWlPVGtab1ZBSU9UazVlUDc1NTVHVGs0TlFLSVRrNVBtSHpNN09UclMwdE9EUW9VT3l0cVBFWG5LN3N4ZDdzWmM0OWxxWTBub1JLVVhjQTl2b1pCQzZ0Q1FNalFWdy9GL1hNVFFXZ0M0dENhT1RRVmtaRVhxOUhtTmpZekFZRERoMjdCZ01CZ1BHeHNhZzErdGxaVVFZREFiNGZENWtabWFpdnI0ZW1abVo4UGw4ODE2YjF0dmJpL2ZmZng4blQ1NmM5enFrUk9zbHB6dDdzUmQ3eWNOZUMxTmFMeUtsaUh0Z3UrR1p4T2FzSnlPV2JjNTZFamM4azdJeUlzeG1NN3E2dWlLV2RYVjF3V3cyeThxSUtDZ293TFZyMXlLV1hidDJiYzRGclRkdjNzUzc3NzZMUTRjT29hU2tSTlkyNU96elV2WVM3ZjVuMkl1OW9sbXB2VVN3MThLVTF1dGhxNU5YWVlkWmo5WEpxNkptWm1abTBOdmJpNW1aNkc5ZHhjemptWWxIM0FOYmE0OEgxbXd0OG8wUGJpRElOMnBnemRhaXRjY2pLeU9pdkx3YzdlM3RjTHZkQUFDMzI0MzI5bmFVbDVmTHlvall0V3NYV2x0YjBkM2REUURvN3U1R2Eyc3JkdTNhTlp2cDdlM0ZnUU1IOE5aYmIySEhqaDJZbUpqQXhNUUUvSDUvUXZjU3liQVhlN0hYWE9Gd0dLRlFDS0ZRS09MN1VDakVYZ3JzRll1cTV6THh0KzNacUhvdSt0a1VoOE9CeTVjdncrR0kvcUh4ekR5ZW1YakVmY0ovY0RTQWhyWStIUDdyUmt3SFEwaFJyMEpEV3g4R1J3T3lNaUtNUmlOcWFtcHc2dFFwcEthbUloQUlvS2FtQmthalVWWkdoTWxrZ3MxbXc4R0RCNkhSYURBeE1RR2J6Ulp4QitpUkkwZmc5WHBoczlsZ3M5bG1sK2ZtNXVMTW1UTUoyMHNrdzE3c3hWNXpOVFkyb3FHaFlmWnhUMDhQYkRZYjlIbzlMbDI2eEY0SzZ4V0xlNVAzSTc3TzU0ODNUMS9vVGRTWmVUd3o4VkI1dlY1SjlLN0d5cjlIbnhwVkFESTB5ZkJNekVDS0kvT0hzMjliby81TWtpVDRmRDdvZERxb1ZLcVlNeUlrU1lMSDQwRkdSa1pjNnhIZGxwSjZMVlozOXZyelhnNkhBMWJyd3MvNVJPd2xzcTJWMkV0MGY5aHI0ZlVvcGRmRHg3Ni9wS294Rm9pOEJ2dmhZMVlnRUVCcWF1cUM2MlhtOGN6RWF0RUd0c1cyME1CR3ROTDgyY0JHUk10SDVOakhZeFk5YXZ6d2R5SWlJaUtGNDhCR1JFUkVwSEFjMklpSWlJZ1VUdFkxYkVUMGFQQWFOaUlpV2doZllTTWlJaUpTT0E1c1JFUkVSQXJIZ1kySWlJaEk0VGl3RVJFUkVTbGMzQjlOQlR4NHQrbSt2ajYwdGJXaHVMZ1krZm41Y3pJakl5Tm9iMjlIWjJjbjh2THlzRzNiTm1Sblo4dmV6dFdyVitGeXVSQUlCRkJVVkFTTHhZTFZxMWRINU83ZHU0Y0xGeTVnWkdRRVJxTVJGUlVWaU9YR2l0ZGZmeDMzNzgvOStKRXZ2L3dTeWNuSndoa1JSNDhlblhjOWRyc2RTVWxKd2hrUjdNVmUwYkFYZTBXelVuc1JKWXBGR2RpYW1wcHcrL1p0WExseUJXdlhycDB6c0EwUEQ2T3FxZ3J2dmZjZXFxcXFNREF3Z0FNSERzQnV0Nk93c0ZCNE95MHRMUWdFQWlnc0xFUW9GTUxWcTFmUjNOeU11cm82cEtTa0FBQjhvNk9vcmExRlJVVUZkdTdjaVY5Ly9SVzF0Yld3MTlWQnA5WEs2blhqeGczVTF0YmltV2VlaVZpdVZxdGxaVVFNREF4Zy8vNzkyTGh4WTlUMWlHUkVzQmQ3UmNOZTdCWE5TdTFGbENnVzVabTliOTgrQU1EMTY5Zm4vZm5RMEJDTVJpTmVlZVVWQUVCZVhoNDZPenR4L2ZwMVdRTmJaV1ZseE9QQ3drSzg4Y1lidUhuekpuSnpjd0VBMzErOENLdlZPcnV0VFpzMjRjNmRPL2orNGtYczNidFhkcmVzckt3NWZ4Qml5WWd3R28zWXNHRkQzQmtSN01WZTBiQVhlMFd6VW5zUkpZSWx1WWJ0MldlZnhmajRPTDc5OWx2Y3YzOGZmcjhmUC8zMEU4ckt5dUphcjkvdngvVDBOQXdHdyt3eWw4c0ZpOFVDU1pMUTM5OFBTWkpnc1ZqZ2NybmlyVUZFUkVTMExKYmt0ZU9rcENUVTE5ZWpxcW9LWjg2Y1FVWkdCdDU4ODAxa1pXWEZ0ZDd6NTg5ajY5YXQwUDdmcVU2UHh3T3RWZ3VuMDRtUFAvNFlIMzc0SWJSYUxUd2VUMHpiT0hIaVJNUTFjaDk4OEFFc0ZvdnNqSWlHaGdha3BxYk9QdDYvZi8vc0s0ZHlNaUxZaTcyaVlTLzJpbWFsOWlKS0JFc3lzTjIrZlJ0MnV4MzE5Zlh3Ky8wNGUvWXN2dnJxS3hRVUZDQXpNek9tZGJwY0xyUzJ0c0p1dDBjc1Y2dlZDQWFETUpsTUtDb3Fnc2xrZ3NmamlmbTZocGRmZmhsbXMzbjI4ZE5QUHgxVFJrUjVlWG5FalJoR296R21qQWoyWXE5bzJHdmhqQWoyU3F4ZVJJbGdTUWEycHFZbVZGUlVvTFMwRkFEdzRvc3Y0clBQUHNNWFgzeUJqejc2U1BiNit2djdVVmRYaDRNSEQwYWNEZ1VBdlY2UHNiRXhiTjY4R2NlT0hRUHc0RUpZdlY0ZjA3NFhGQlJneTVZdGNXZEVtTTNtZWUrd2xac1J3VjdzRlExN3NWYzBLN1VYVVNKWWttdllmdnp4eHpuL1paV1dscUtqbzBQMnVnWUhCMkd6MmJCdjM3NTViMWd3bTgzbzZ1cUtXTmJWMVJYeEh4OFJFVkVzWm1abTBOdmJpNW1abWVYZUZYck14RDJ3aGNOaGhFSWhoRUtoaU85RG9kQnNwckN3RUY5Ly9UWEd4OGNCQUZOVFV6aDM3cHpzLzR6NisvdHgvUGh4VkZaV29yaTRHSDYvSDM2L0gxTlRVN09aOHZKeXRMZTN3KzEyQXdEY2JqZmEyOXRSWGw0ZWIxVWlJbnJNT1J3T1hMNThHUTZIWTdsM2hSNHpjWjhTYld4c1JFTkR3K3pqbnA0ZTJHdzI2UFY2WExwMENRQnc1TWdSMk8xMnZQVFNTOGpMeTRQYjdVWnBhZW5zS1V0Um4zNzZLY2JHeG5ENjlHbWNQbjE2ZG5sMmRqWSsrZVFUQUErdVlhaXBxY0dwVTZlUW1wcUtRQ0NBbXBvYVh0dEFSRVJ4UzA5UGovaEt0RlJVWHE5WGl1VlRBR0l4UFQwTnI5Y0xuVTZIdExTMFI3b3RTWkxnOC9tZzArbWdVcWtlNmJhSTR1VndPR0MxV3BkN040aElRQ0FRaUxnN2xXZ3BMT2xiUXFla3BNUjhWNmhjS3BVcXBvK2pJaUlpV2dpSE5Wb08vUEIzSWlJaUlvWGp3RVpFUkVTa2NCellpSWlJaUJTT0F4c1JFUkdSd25GZ0l5SWlJbEs0L3dFcjhmMWlsWHcvV3dBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="}}]);