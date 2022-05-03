"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[91912],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(c,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return P}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),m=n(68949),f=n(72389),g=n(21314),p=n(74322),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,f.Z)(),a=r.useState("unchecked"),o=a[0],c=a[1],b=(0,g.oR)("documentStore").find(e.webKey),v=function(e){b.loaded&&(c("unchecked"),b.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&y(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&y(b.value)}),[b,n]),n?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:b.value,className:h(b.value),disabled:!b.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(b.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(s.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(p.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),E=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:E(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(p.Z,null)})),k=n(83117),x=n(75552),O=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(x.Z,(0,k.Z)({model:t},e))):r.createElement(p.Z,null)})),_=n(47271),C=(0,o.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),N=n(97762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),a=t.find(e.webKey),i=(0,f.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||N.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),n.loggedIn&&r.createElement(C,{webKey:e.webKey}),"text"===e.type&&r.createElement(O,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(w,e)):r.createElement(p.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(s,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],u=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(s,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&r.createElement(c,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),u=n(51436),s=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),u=n(71217),s=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],g=t[1],p=r.useState(!1),b=p[0],h=p[1],v=r.useRef(null),y=e.model,E=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(h(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",E))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",E)}}),[e]);return d&&b&&y.loaded?r.createElement("div",{onFocus:function(){return!u&&g(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&b&&y.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},19483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(82593),c=["components"],u={title:"2. Logische Gatter"},s="2. Logische Gatter",d={unversionedId:"Computer/gates/index",id:"Computer/gates/index",title:"2. Logische Gatter",description:"Die logischen Gatter (logic gates) sind die Grundbausteine der digitalen Logik. Sie werden durch die Verkn\xfcpfung von Transistoren gebaut.",source:"@site/docs/Computer/02-gates/index.md",sourceDirName:"Computer/02-gates",slug:"/Computer/gates/",permalink:"/Computer/gates/",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/02-gates/index.md",tags:[],version:"current",lastUpdatedAt:1642364241,formattedLastUpdatedAt:"1/16/2022",frontMatter:{title:"2. Logische Gatter"},sidebar:"sidebar",previous:{title:"9. Ebenen",permalink:"/Computer/basics/Ebenen"},next:{title:"Auftrag",permalink:"/Computer/gates/Auftrag"}},m={},f=[],g={toc:f};function p(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-logische-gatter"},"2. Logische Gatter"),(0,i.kt)("p",null,"Die logischen Gatter (",(0,i.kt)("em",{parentName:"p"},"logic gates"),") sind die Grundbausteine der digitalen Logik. Sie werden durch die Verkn\xfcpfung von Transistoren gebaut."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Transistoren"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5wIRJN3DN_8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)(o.Z,{type:"text",webKey:"77218889-54e7-4ff2-ac32-10a2de6cb927",mdxType:"Answer"})),(0,i.kt)("p",null,"Durch die logischen Gatter lassen sich ganze Schaltungen zusammenbauen, die dann bspw. eine bin\xe4re Addition durchf\xfchren."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"HereToHelp",source:"https://commons.wikimedia.org/wiki/File:Logic_Gates.svg",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-sa/4.0/",edited:!1},caption:"Diagramme logischer Gatter",options:{},isInline:!1,src:n(26193).Z,alt:"Diagramme logischer Gatter",mdxType:"Image"})))}p.isMDXComponent=!0},26193:function(e,t,n){t.Z=n.p+"assets/images/00-logic_gates-4174467280704d500d7d5cc6b3299c90.svg"}}]);