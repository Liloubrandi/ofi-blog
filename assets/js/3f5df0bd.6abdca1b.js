"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2949],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,p=m["".concat(d,".").concat(g)]||m[g]||s[g]||i;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return Z},Z:function(){return S}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),d=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(d.test(t)){var l=function(e){if(d.test(e))return e.match(d).groups.klass}(t);r=i[l],n=""+t.replace(d,"")}return a.createElement("option",{value:t,className:r},n)},c=n(92814),s=n(51436),m=n(68949),g=n(72389),p=n(21314),f=n(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,g.Z)(),r=a.useState("unchecked"),o=r[0],d=r[1],h=(0,p.oR)("documentStore").find(e.webKey),b=function(e){h.loaded&&(d("unchecked"),h.setData({value:e,type:"string"}))},N=function(t){if(e.checker)return d(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};d(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&N(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&N(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:h.value,className:k(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(h.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(c.G,{icon:(t=o,"correct"===t?s.f8k:"wrong"===t?s.nYk:s.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),N=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:v(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),E=n(83117),w=n(75552),C=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,E.Z)({model:t},e))):a.createElement(f.Z,null)})),x=n(47271),_=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),O=n(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||O.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(_,{webKey:e.webKey}),"text"===e.type&&a.createElement(C,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(y,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),d=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),d=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},s=function(e){if(e.isInline)return a.createElement(c,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],u=i[1],s=e.caption&&"undefined"!==e.caption,m=e.bib||s;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(c,e),m&&a.createElement("figcaption",null,s&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&a.createElement(d,e.bib)))}},7564:function(e,t,n){var a=n(86010),r=n(67294),i=n(97566),l=/[ENIR]/gi,o=/[BCDFGHJKLMOPQUVWXYZ]/gi,d=[{find:/\xe4/g,replace:"ae"},{find:/\xf6/g,replace:"oe"},{find:/\xfc/g,replace:"ue"},{find:/\xc4/g,replace:"Ae"},{find:/\xd6/g,replace:"Oe"},{find:/\xdc/g,replace:"Ue"},{find:/\s+/g,replace:" "},{find:/^\s/g,replace:""},{find:/\s$/g,replace:""}];t.Z=function(){var e=r.useState(""),t=e[0],n=e[1],u=r.useState("frequent"),c=u[0],s=u[1],m=r.useState(""),g=m[0],p=m[1];return r.useEffect((function(){if(0!==t.length){var e=function(e){return d.reduce((function(e,t){return e.replace(t.find,t.replace)}),e)}(t);switch(console.log(e,e.replace(l,""),e.replace(o,"")),c){case"frequent":p(e.replace(l,""));break;case"rare":p(e.replace(o,""))}}}),[t,c]),r.createElement("div",{className:(0,a.default)("hero","shadow--lw",i.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Buchstaben Redundanz"),r.createElement("h4",null,"Originaltext"),r.createElement("textarea",{className:(0,a.default)(i.Z.input),value:t,onChange:function(e){n(e.target.value)},rows:5,placeholder:"Originaltext"}),r.createElement("div",{className:(0,a.default)("buttongroup",i.Z.modes)},r.createElement("button",{className:(0,a.default)("button","button--sm","button--primary","button--outline","frequent"===c&&"button--active"),title:"H\xe4ufige: "+l.source.slice(1,-1).split("").join(", "),onClick:function(){return s("frequent")}},"H\xe4ufige Entfernen"),r.createElement("button",{className:(0,a.default)("button","button--sm","button--primary","button--outline","rare"===c&&"button--active"),onClick:function(){return s("rare")},title:"Seltene: "+o.source.slice(1,-1).split("").join(", ")},"Seltene entfernen")),r.createElement("h4",null,"Ausgabe"),r.createElement("p",null,"Ohne: ",("frequent"===c?l:o).source.slice(1,-1).split("").join(", ")),r.createElement("textarea",{className:(0,a.default)(i.Z.input),value:g,onChange:function(){},rows:5,placeholder:"Ausgabe"})))}},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),d=n(92814),u=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(d.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",d=n(86010),u=n(71217),c=n(74322),s=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],p=t[1],f=a.useState(!1),h=f[0],k=f[1],b=a.useRef(null),N=e.model,v=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),s)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){s=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(k(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return s&&h&&N.loaded?a.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,d.default)(r)},a.createElement(s,{ref:b,theme:"snow",readOnly:e.readonly||N.readonly,className:(0,d.default)(i,e.monospace&&l,u?void 0:o),value:N.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&N.canUpdate&&h&&N.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},13681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(7564),d=n(82593),u=["components"],c={title:"2. Informationsgehalt",label:"2. Informationsgehalt"},s="2. Informationsgehalt [^1]",m={unversionedId:"Codierung/Compression/redundancy",id:"version-25h/Codierung/Compression/redundancy",title:"2. Informationsgehalt",description:"Buchstabenh\xe4ufigkeit",source:"@site/versioned_docs/version-25h/05-Codierung/03-Compression/02-redundancy.md",sourceDirName:"05-Codierung/03-Compression",slug:"/Codierung/Compression/redundancy",permalink:"/25h/Codierung/Compression/redundancy",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/03-Compression/02-redundancy.md",tags:[],version:"25h",sidebarPosition:2,frontMatter:{title:"2. Informationsgehalt",label:"2. Informationsgehalt"},sidebar:"version-25h/sidebar",previous:{title:"1. Huffman-Codierung",permalink:"/25h/Codierung/Compression/huffman"},next:{title:"1. Morsecode",permalink:"/25h/Codierung/Anwendungen/morsecode"}},g={},p=[{value:"Buchstabenh\xe4ufigkeit",id:"buchstabenh\xe4ufigkeit",level:2},{value:"Informationsgehalt",id:"informationsgehalt",level:2}],f={toc:p};function h(e){var t=e.components,c=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-informationsgehalt-"},"2. Informationsgehalt ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"buchstabenh\xe4ufigkeit"},"Buchstabenh\xe4ufigkeit"),(0,i.kt)("p",null,"Die Buchstabenh\xe4ufigkeit gibt an, wie oft ein Buchstabe in einem Text vorkommen. Die H\xe4ufigkeit der einzelnen Buchstaben ist je nach Sprache unterschiedlich. Das folgende Diagramm zeigt die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(2489).Z,mdxType:"Image"})),(0,i.kt)("h2",{id:"informationsgehalt"},"Informationsgehalt"),(0,i.kt)("p",null,"Wir f\xfchren ein Experiment durch. Aus einem deutschen Text werden etwa 40% der Buchstaben entfernt. Zuerst werden die vier h\xe4ufigsten Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," entfernt. Danach werden diese Buchstaben sowie ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," beibehalten und die restlichen entfernt. Obschon etwa die gleiche Menge Buchstaben entfernt worden sind, bleibt der Text nach dem Entfernen der h\xe4ufigen Buchstaben verst\xe4ndlicher."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Notizen")),(0,i.kt)(o.Z,{mdxType:"Redundancy"}),(0,i.kt)("p",null,"Offenbar tragen die h\xe4ufigen Buchstaben weniger zum Inhalt des Textes bei. Sie haben einen kleineren ",(0,i.kt)("strong",{parentName:"p"},"Informationsgehalt"),"."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"take-home-message"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(d.Z,{type:"text",webKey:"18b21da1-1e49-4d1a-a7ea-1c930205abf1",mdxType:"Answer"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u2b50\ufe0f Huffman Codierung f\xfcr die deutsche Sprache"),(0,i.kt)("p",null,"Die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten kann der folgenden Tabelle entnommen werden:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},"15.99%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.34%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.40%"),(0,i.kt)("td",{parentName:"tr",align:null},"J"),(0,i.kt)("td",{parentName:"tr",align:null},"0.27 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"9.59%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.92%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.22%"),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:null},"0.24 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.71%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.11%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.71%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.06%"),(0,i.kt)("td",{parentName:"tr",align:null},"\xdf"),(0,i.kt)("td",{parentName:"tr",align:null},"0.15 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.60%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.21%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.94%"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"0.13 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.43%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.80%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.63%"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"0.07 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.41%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.02%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.50%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.54%"),(0,i.kt)("td",{parentName:"tr",align:null},"Q"),(0,i.kt)("td",{parentName:"tr",align:null},"0.04 %"))))),(0,i.kt)("p",null,"Daraus ergibt sich"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",options:{},isInline:!1,src:n(27062).Z,alt:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",mdxType:"Image"})),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"(leer)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0101"),(0,i.kt)("td",{parentName:"tr",align:"right"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Q"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11100110111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01111"),(0,i.kt)("td",{parentName:"tr",align:"right"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0011")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},"110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1110010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11100110110")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"J"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111001100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1110011010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000111"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10101101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111001110")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10101100")))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=195436"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},(0,i.kt)("a",{parentName:"li",href:"http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/german-letter-frequencies/"},"Practical Cryptography: German Letter Frequencies"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},97566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},27062:function(e,t,n){t.Z=n.p+"assets/images/huffman-german-e146d68a9775a0c649a0f99a6e760185.svg"},2489:function(e,t,n){t.Z=n.p+"assets/images/letter-frequency-de-589f8e0aa0703df3d1fd96ead993c13b.svg"}}]);