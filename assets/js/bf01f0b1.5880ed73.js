"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[33583],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,y=m["".concat(o,".").concat(g)]||m[g]||d[g]||r;return n?i.createElement(y,s(s({ref:t},u),{},{components:n})):i.createElement(y,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7488:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(83117),a=n(67294),r=n(86010),s=n(36162),l="details_BAp3";function o(e){var t=Object.assign({},e);return a.createElement(s.PO,(0,i.Z)({},t,{className:(0,r.default)("alert alert--info",l,t.className)}))}},82593:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return D}});var i=n(67294),a=n(3435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},s=n(86010),l=n(71217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var s=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=r[s],n=""+t.replace(o,"")}return i.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),m=n(68949),g=n(72389),y=n(21314),M=n(74322),p=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return r[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},b=(0,l.Pi)((function(e){var t,n=(0,g.Z)(),a=i.useState("unchecked"),l=a[0],o=a[1],p=(0,y.oR)("documentStore").find(e.webKey),b=function(e){p.loaded&&(o("unchecked"),p.setData({value:e,type:"string"}))},I=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,m.U5)((function(){return p.loaded}),(function(e){e&&I(p.value)}))}),[p]),i.useEffect((function(){p.loaded&&I(p.value)}),[p,n]),n?p.loaded?i.createElement("div",{className:r.answer},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:p.value,className:N(p.value),disabled:!p.loaded},e.select.map((function(e,t){return i.createElement(c,{value:e,key:t})}))):i.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:p.value,disabled:!p.loaded||p.readonly||e.disabled}),(e.solution||e.checker)&&i.createElement("button",{onClick:function(){return I(p.value)},className:(0,s.default)(r[l],r.checkButton)},i.createElement(u.G,{icon:(t=l,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):i.createElement(M.Z,null):i.createElement("div",null,"SSR")})),I=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),f=function(e){return r[function(e){if(I.test(e))return e.match(I).groups.klass}(e)]},L=(0,l.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var i=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:i}))};return t.loaded?i.createElement("div",{className:r.answer},e.label&&i.createElement("label",null,e.label),t.data.value.map((function(a,r){return e.select?i.createElement("select",{key:r,onChange:function(e){return n(e.target.value,r)},value:a,className:f(a),disabled:!t.loaded},e.select.map((function(e,t){return i.createElement(c,{value:e,key:t})}))):i.createElement("input",{key:r,type:"text",onChange:function(e){return n(e.target.value,r)},value:a,disabled:!t.loaded||t.readonly})}))):i.createElement(M.Z,null)})),j=n(83117),v=n(75552),h=(0,l.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",null,e.label&&i.createElement("h6",null,e.label),i.createElement(v.Z,(0,j.Z)({model:t},e))):i.createElement(M.Z,null)})),k=n(47271),w=(0,l.Pi)((function(e){return(0,y.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,s.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},D=(0,l.Pi)((function(e){var t=(0,y.oR)("documentStore"),n=(0,y.oR)("msalStore"),a=t.find(e.webKey),r=(0,g.Z)();return(0,y.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?a?i.createElement("div",{"data--web-key":e.webKey},i.createElement(k.Z,null),n.loggedIn&&i.createElement(w,{webKey:e.webKey}),"text"===e.type&&i.createElement(h,e),"string"===e.type&&i.createElement(b,e),"array"===e.type&&i.createElement(L,e)):i.createElement(M.Z,null):i.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),a="noLoginAlert_HRfh",r=n(39960),s=n(71217),l=n(21314),o=(0,s.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:i.createElement("div",{className:a},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(r.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(92814),s=n(51436),l=n(86010),o=function(e){return i.createElement("span",{className:a.details},i.createElement("span",{className:(0,l.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,l.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},i.createElement(r.G,{icon:s.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),i.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return i.createElement(u,e);var t=i.useState(!1),n=(t[0],t[1]),r=i.useState(!1),s=r[0],c=r[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,l.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,i,a,r,s;t=e.currentTarget.getBoundingClientRect(),i=e.clientX,a=e.clientY,r=t.left<=i&&t.right>=i,s=t.top<=a&&t.bottom>=a,r&&s||n(!1)}},i.createElement(u,e),m&&i.createElement("figcaption",null,d&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,l.default)(a.bib,s?a.visible:void 0),onClick:function(){return c(!s)}},"@"),s&&i.createElement(o,e.bib)))}},61014:function(e,t,n){var i=n(72389),a=n(71217),r=n(67294),s=n(21314),l=n(74322),o=n(7488),c=n(86010),u=n(86720),d=n(92814),m=n(51436),g=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},r.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},y=(0,a.Pi)((function(e){return r.createElement("span",{className:(0,c.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",r.createElement(d.G,{icon:m.nYk,onClick:e.onRemove}))})),M=(0,a.Pi)((function(e){var t=r.useState(""),n=t[0],i=t[1],a=r.useState(""),l=a[0],o=a[1],g=r.useState(""),M=g[0],p=g[1],N=(0,s.oR)("policyStore"),b=(0,s.oR)("userStore"),I=N.findPolicy(e.webKey);return I?r.createElement("div",{className:(0,c.default)(u.Z.configContainer)},r.createElement("div",{className:(0,c.default)(u.Z.showControl)},r.createElement(d.G,{icon:I.isConfigOpen?m.nYk:m.cNd,onClick:function(){I.showConfig(!I.isConfigOpen)}})),I.isConfigOpen&&r.createElement("div",{className:(0,c.default)(u.Z.config)},r.createElement("div",{className:(0,c.default)(u.Z.permissions)},Array.from(I.klasses).map((function(e,t){return r.createElement(y,{key:t,name:e,onRemove:function(){return I.removePermission(e,"class")},color:"success"})})),Array.from(I.groups).map((function(e,t){return r.createElement(y,{key:t,name:e,onRemove:function(){return I.removePermission(e,"group")},color:"danger"})})),Array.from(I.users).map((function(e,t){return r.createElement(y,{key:t,name:e,onRemove:function(){return I.removePermission(e,"user")},color:"primary"})}))),r.createElement("div",{className:(0,c.default)(u.Z.update)},r.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return i(e.target.value)},disabled:I.locked,list:"solution-policy-for-classes"}),r.createElement("datalist",{id:"solution-policy-for-classes"},b.klasses.map((function(e,t){return r.createElement("option",{key:t,value:e})}))),r.createElement("button",{disabled:I.locked,onClick:function(){I.addPermission(n,"class"),i("")}},"Add"),r.createElement("input",{type:"text",placeholder:"Gruppe",value:l,onChange:function(e){return o(e.target.value)},disabled:I.locked,list:"solution-policy-for-groups"}),r.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(b.groups,N.groups))).map((function(e,t){return r.createElement("option",{key:t,value:e})}))),r.createElement("button",{disabled:I.locked,onClick:function(){I.addPermission(l,"group"),o("")}},"Add"),r.createElement("input",{type:"email",placeholder:"User",value:M,onChange:function(e){return p(e.target.value)},disabled:I.locked,list:"solution-policy-for-users"}),r.createElement("datalist",{id:"solution-policy-for-users"},b.users.map((function(e,t){return r.createElement("option",{key:t,value:e.email})}))),r.createElement("button",{disabled:I.locked,onClick:function(){I.addPermission(M,"user"),p("")}},"Add")))):null})),p=(0,a.Pi)((function(e){var t,n,a=(0,s.oR)("policyStore"),d=(0,s.oR)("userStore"),m=(0,i.Z)();if((0,s.aV)(e.webKey),!m)return r.createElement("div",null,"SSR");var y=a.find(e.webKey);return y?r.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(u.Z.wrapper,"solution-wrapper")},y.show||null!=(t=d.current)&&t.admin?r.createElement(o.Z,{summary:r.createElement("summary",null,e.title||"L\xf6sung"," ",r.createElement(g,null),!y.show&&r.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=d.current)?void 0:n.admin)&&r.createElement(M,{webKey:y.webKey}),e.children):r.createElement("div",{className:(0,c.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",r.createElement(g,null))):r.createElement(l.Z,null)}));t.Z=p},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),a=n(86010),r="loader_FEpR",s="badge_oWqf",l=n(71217),o=n(92814),c=n(51436),u=(0,l.Pi)((function(){return i.createElement("div",{className:(0,a.default)(r)},i.createElement(o.G,{icon:c.IJ7,spin:!0}),i.createElement("span",{className:(0,a.default)("badge",s)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(67294),a="quillEditor_NxYB",r="quillAnswer_J46I",s="monospace_usc_",l="disableToolbar_bRdP",o=n(86010),c=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var i=[];e.h1&&i.push(1),e.h2&&i.push(2),e.h3&&i.push(3),i.push(!1),t.push(i)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var s=[];e.formula&&s.push("formula"),e.image&&s.push("image"),t.push(s)}return e.code&&t.push(["code-block"]),t},y=(0,c.Pi)((function(e){var t=i.useState(!1),c=t[0],y=t[1],M=i.useState(!1),p=M[0],N=M[1],b=i.useRef(null),I=e.model,f=function(e){e.preventDefault()};i.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var i=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=i.length,i.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(i).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,i=t[a["react-image-compress"]].default;if("katex"in a){var r=t[a.katex].default;window.katex=r}n.register("modules/imageCompress",i),e()}))}((function(){t&&(N(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[e]);return d&&p&&I.loaded?i.createElement("div",{onFocus:function(){return!c&&y(!0)},className:(0,o.default)(a)},i.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||I.readonly,className:(0,o.default)(r,e.monospace&&s,c?void 0:l),value:I.text||"",onChange:function(t,n,i,a){var r,s;r=t,void 0===s&&(s=0),!e.readonly&&I.canUpdate&&p&&I.setText(r)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(u.Z,null)}))},81551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return y}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),s=n(84384),l=n(82593),o=n(61014),c=["components"],u={title:"2. Betriebssysteme"},d="2. Betriebssysteme",m={unversionedId:"Computer/Betriebssystem/betriesbssysteme",id:"version-24o/Computer/Betriebssystem/betriesbssysteme",title:"2. Betriebssysteme",description:"Bekannte Betriebssysteme",source:"@site/versioned_docs/version-24o/07-Computer/08-Betriebssystem/02-betriesbssysteme.md",sourceDirName:"07-Computer/08-Betriebssystem",slug:"/Computer/Betriebssystem/betriesbssysteme",permalink:"/24o/Computer/Betriebssystem/betriesbssysteme",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/07-Computer/08-Betriebssystem/02-betriesbssysteme.md",tags:[],version:"24o",sidebarPosition:2,frontMatter:{title:"2. Betriebssysteme"},sidebar:"version-24o/sidebar",previous:{title:"1. Aufgaben eines Betriebssystems",permalink:"/24o/Computer/Betriebssystem/aufgaben"},next:{title:"3. Freie Open Source Software",permalink:"/24o/Computer/Betriebssystem/foss"}},g={},y=[{value:"Bekannte Betriebssysteme",id:"bekannte-betriebssysteme",level:2},{value:"Betriebssysteme in meiner Umgebung",id:"betriebssysteme-in-meiner-umgebung",level:2}],M={toc:y};function p(e){var t=e.components,u=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},M,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-betriebssysteme"},"2. Betriebssysteme"),(0,r.kt)("h2",{id:"bekannte-betriebssysteme"},"Bekannte Betriebssysteme"),(0,r.kt)("p",null,"Die Liste s\xe4mtlicher Betriebssysteme ist zu lange und zu un\xfcberschaubar, um sie hier alle einzeln aufzuf\xfchren. Wir beschr\xe4nken uns auf einige wichtige Betriebssysteme, die wir im Alltag h\xe4ufig antreffen."),(0,r.kt)("p",null,"Hier die wichtigsten Betriebssysteme f\xfcr Desktopcomputer oder Notebooks:"),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"microsoft-windows"},"Microsoft Windows"),(0,r.kt)("p",{parentName:"div"},"Microsoft Windows gibt es seit 1985 in fast 30 verschiedenen Versionen (z.B. Windows 3.1, Windows 95, Windows 2000, Windows XP). Windows l\xe4uft momentan auf drei verschiedenen Prozessor-Architekturen: x86, amd64 und ARM.")),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:"AkshayAnand",author_uri:"https://commons.wikimedia.org/w/index.php?title=User:AkshayAnand&action=edit&redlink=1",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:Windows_logo_%E2%80%93_2012_(dark_blue).svg"},caption:"Windows 10 Logo",options:{},isInline:!1,src:n(50471).Z,alt:"Windows 10 Logo",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"macos-von-apple"},"macOS von Apple"),(0,r.kt)("p",{parentName:"div"},"macOS ist ein Betriebssystem, das seit 1982 von Apple f\xfcr Desktop- und Notebookcomputer entwickelt wird. Es l\xe4uft allerdings ausschliesslich auf der Mac-Hardware, die von Apple produziert wird. Zuerst erschien es als ",(0,r.kt)("strong",{parentName:"p"},"Mac OS")," (Classic) als komplett eigenst\xe4ndiges System, seit ",(0,r.kt)("strong",{parentName:"p"},"Mac OS X")," ist es UNIX-basiert.")),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:" Totie",author_uri:"https://commons.wikimedia.org/wiki/User:Totie",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:MacOS_wordmark.svg"},caption:"macOS Logo",options:{},isInline:!1,src:n(78463).Z,alt:"macOS Logo",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"linux"},"Linux"),(0,r.kt)("p",{parentName:"div"},"\xdcber das ",(0,r.kt)("strong",{parentName:"p"},"freie")," Betriebssystem Linux findest du viele weitere Informationen in einem eigenen ",(0,r.kt)("a",{parentName:"p",href:"?page=%2Fcomputer%2F5-os%2F4-linux%2FREADME"},"Kapitel"),". Linux gibt es seit 1991, es l\xe4uft inzwischen auf \xfcber 20 verschiedenen Prozessor-Architekturen.")),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:"Garrett LeSage",author_uri:"https://github.com/garrett",licence:"CC0",licence_url:"https://github.com/garrett/Tux/blob/master/tux.svg"},caption:"Linux Maskottchen",options:{},isInline:!1,src:n(5730).Z,alt:"Linux Maskottchen",mdxType:"Image"}))))),(0,r.kt)("p",null,"Nachfolgend wichtige mobile Betriebssysteme, d.h. Betriebssysteme, die auf mobilen Ger\xe4ten (wie z.B. Smartphones und Tablets) zum Einsatz kommen."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"windows-mobile"},"Windows Mobile"),(0,r.kt)("p",{parentName:"div"},"Microsoft Windows Mobile oder Windows Phone waren zwei Betriebssysteme f\xfcr Smartphones und Tablets. F\xfcr Windows 10 Mobile gibt es seit Januar 2020 keine Updates mehr, f\xfcr Windows Phone ist der Support bereits Mitte 2017 abgelaufen."),(0,r.kt)("p",{parentName:"div"},"Somit entwickelt Microsoft zurzeit kein eigenes Betriebssystem f\xfcr mobile Ger\xe4te mehr. Allerdings entwickelt Microsoft eine f\xfcr Windows-Dienste optimierte Android-Version, welche auf ihren eigenen Smartphones der Surface Reihe eingesetzt werden."),(0,r.kt)("p",{parentName:"div"},"Mit dem ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.microsoft.launcher&hl=de_CH&gl=US"},"Microsoft Launcher")," gibt es zudem die M\xf6glichkeit f\xfcr Android-Benutzer:innen, die Microsoft-Dienste st\xe4rker ins Android-System einzu\ngliedern."))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"ios-von-apple"},"iOS von Apple"),(0,r.kt)("p",{parentName:"div"},"iOS ist ein Betriebssystem f\xfcr die iPhone-Smartphones und iPad-Tablets von Apple. Es l\xe4uft ausschliesslich auf den Ger\xe4ten, die von Apple produziert werden."))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h3",{parentName:"div",id:"android"},"Android"),(0,r.kt)("p",{parentName:"div"},"Android ist ein freies Betriebssystem auf Basis des Linux-Kernels. Entwickelt wird Android von der Open Handset Alliance unter der Leitung von Google. Android l\xe4uft auf Smartphones und Tablets etlicher Hersteller und kommt daneben auch auf vielen weiteren Ger\xe4ten (z.B. Fernsehern) zum Einsatz.")),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:"Google inc.",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Android_robot.svg"},caption:"Android Roboter",options:{},isInline:!1,src:n(66265).Z,alt:"Android Roboter",mdxType:"Image"}))))),(0,r.kt)("h2",{id:"betriebssysteme-in-meiner-umgebung"},"Betriebssysteme in meiner Umgebung"),(0,r.kt)("p",null,"Neben den offensichtlichen Ger\xe4ten wie Desktopcomputer oder Smarthones resp. Tablets setzen aber viele weitere Ger\xe4te ein Betriebssystem ein."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-betriebssysteme-in-meiner-umgebung"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Betriebssysteme in meiner Umgebung")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\xdcberlegen Sie sich, welche Ger\xe4te bei Ihnen zu Hause ein Betriebssystem brauchen/haben."),(0,r.kt)("li",{parentName:"ol"},"Wieso gibt es \xfcberhaupt verschiedene Betriebssysteme?")),(0,r.kt)(l.Z,{type:"text",webKey:"9baf3813-eba5-453f-bd08-90ac8e54855f",mdxType:"Answer"}),(0,r.kt)(o.Z,{webKey:"5cb1df26-cf3e-427b-ac68-f1303c74ef2a",mdxType:"Solution"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hier eine sicher nicht vollst\xe4ndige Liste:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in Smartwatches und Smartglasses"),(0,r.kt)("li",{parentName:"ul"},"in Fernsehern"),(0,r.kt)("li",{parentName:"ul"},"in Set-Top-Boxen"),(0,r.kt)("li",{parentName:"ul"},"in Mediaplayern und Smartspeakern"),(0,r.kt)("li",{parentName:"ul"},"in Spielkonsolen"),(0,r.kt)("li",{parentName:"ul"},"in Digitalkameras"),(0,r.kt)("li",{parentName:"ul"},"in Access Points und WLAN-Routern"),(0,r.kt)("li",{parentName:"ul"},"in Autos"),(0,r.kt)("li",{parentName:"ul"},"und nat\xfcrlich in Smarthome-Ger\xe4ten (d.h. in mit dem Netzwerk verbundenen K\xfchlschr\xe4nken, Heizungen etc.)"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",{parentName:"li"},"Besonders prominent ist da das freie Betriebssystem Android zu nennen.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Es gibt so viele, unterschiedliche Ger\xe4te (von Kleinst- bis Supercomputern), welche jeweils eigene Anforderungen haben. Es gibt kein Betriebssystem, das alle Bed\xfcrfnisse perfekt abdeckt. Hier nur einige, sich z.T. widersprechende Anforderungen:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fl\xfcssig bedienbar auf langsamer Hardware"),(0,r.kt)("li",{parentName:"ul"},"nutzt die neusten Hardware-Features"),(0,r.kt)("li",{parentName:"ul"},"zielgerichtet f\xfcr einige wenige Spezialaufgaben (z.B. Digitalkameras, Set-Top-Boxen)"),(0,r.kt)("li",{parentName:"ul"},"Betriebssystem f\xfcr PCs und Notebooks"),(0,r.kt)("li",{parentName:"ul"},"Lizenzbedingungen des Herstellers"),(0,r.kt)("li",{parentName:"ul"},"freie Software"),(0,r.kt)("li",{parentName:"ul"},"..."))))))))}p.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},66265:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iLTE0NyAtNzAgMjk0IDM0NSI+CjxnIGZpbGw9IiNhNGM2MzkiPgo8dXNlIHN0cm9rZS13aWR0aD0iMTQuNCIgeGxpbms6aHJlZj0iI2IiIHN0cm9rZT0iI0ZGRiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIi8+CjxnIGlkPSJhIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iNy4yIj4KPHJlY3Qgcng9IjYuNSIgdHJhbnNmb3JtPSJyb3RhdGUoMjkpIiBoZWlnaHQ9Ijg2IiB3aWR0aD0iMTMiIHk9Ii04NiIgeD0iMTQiLz4KPHJlY3QgaWQ9ImMiIHJ4PSIyNCIgaGVpZ2h0PSIxMzMiIHdpZHRoPSI0OCIgeT0iNDEiIHg9Ii0xNDMiLz4KPHVzZSB5PSI5NyIgeD0iODUiIHhsaW5rOmhyZWY9IiNjIi8+CjwvZz4KPGcgaWQ9ImIiPgo8ZWxsaXBzZSBjeT0iNDEiIHJ4PSI5MSIgcnk9Ijg0Ii8+CjxyZWN0IHJ4PSIyMiIgaGVpZ2h0PSIxODIiIHdpZHRoPSIxODIiIHk9IjIwIiB4PSItOTEiLz4KPC9nPgo8L2c+CjxnIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI3LjIiIGZpbGw9IiNGRkYiPgo8cGF0aCBkPSJtLTk1IDQ0LjVoMTkwIi8+PGNpcmNsZSBjeD0iLTQyIiByPSI0Ii8+PGNpcmNsZSBjeD0iNDIiIHI9IjQiLz4KPC9nPgo8L3N2Zz4="},5730:function(e,t,n){t.Z=n.p+"assets/images/02-logo-linux-96a8d2d69ce8b170b4733241dd02bea2.svg"},78463:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTZweCIgd2lkdGg9IjIxNnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMTYgNTYiPjxwYXRoIGQ9Im0wLjMyIDI2LjY4YzAtMy42MjctMC4xMDY2Ny03LjEyLTAuMzItMTAuNDhoNi4wOGwwLjMyIDYuMTZoMC4xNmMyLjgyNjctNC42NCA2LjgyNy02Ljk2IDEyLTYuOTYgMi41MDcgMCA0LjcyIDAuNjkzIDYuNjQgMi4wOHMzLjI4IDMuMjI3IDQuMDggNS41MmgwLjE2YzEuMzMzLTIuMzQ3IDMuMDgtNC4yIDUuMjQtNS41NnM0LjYyNy0yLjA0IDcuNC0yLjA0YzMuNzMzIDAgNi43NiAxLjM3MyA5LjA4IDQuMTJzMy40OCA2Ljg5MyAzLjQ4IDEyLjQ0djIzLjA0aC02Ljh2LTIyLjA4YzAtNy44OTMtMi43NDctMTEuODQtOC4yNC0xMS44NC0yLjAyNyAwLTMuNzYgMC42NC01LjIgMS45MnMtMi40OCAyLjk2LTMuMTIgNS4wNGMtMC4yNjcgMC45Ni0wLjQgMS45NzMtMC40IDMuMDR2MjMuOTJoLTYuOHYtMjMuNDRjMC0zLjItMC42OC01Ljc0Ny0yLjA0LTcuNjRzLTMuMjkzLTIuODQtNS44LTIuODRjLTIuMDI3IDAtMy44MjcgMC42OTMtNS40IDIuMDgtMS41NzMzIDEuMzg3LTIuNjggMy4xMi0zLjMyIDUuMi0wLjI2NjcgMC44NTMtMC40IDEuODkzLTAuNCAzLjEydjIzLjUyaC02Ljh2LTI4LjMyem02NCAyNi4wOGMtMi4xODctMi4wMjctMy4yOC00LjY5My0zLjI4LTggMC00LjY5MyAxLjk3My04LjI4IDUuOTItMTAuNzZzOS41NzMtMy42OTMgMTYuODgtMy42NHYtMC44YzAtNi4wMjctMi44OC05LjA0LTguNjQtOS4wNC0zLjczMyAwLTcuMDEzIDAuOTMzLTkuODQgMi44bC0xLjYtNC42NGMzLjQ2Ny0yLjE4NyA3LjY1My0zLjI4IDEyLjU2LTMuMjggOS42IDAgMTQuNCA1LjI1MyAxNC40IDE1Ljc2djE0LjY0YzAgMy42OCAwLjIxMyA2Ljc0NyAwLjY0IDkuMmgtNi4zMmwtMC42NC00LjhoLTAuMTZjLTIuNjEzIDMuNzMzLTYuNDggNS42LTExLjYgNS42LTMuMzYgMC02LjEzMy0xLjAxMy04LjMyLTMuMDR6bTEzLjcyLTIuNjhjMS4wNC0wLjQgMi4wNjctMS4wNTMgMy4wOC0xLjk2IDEuODY3LTEuNzA3IDIuOC0zLjczMyAyLjgtNi4wOHYtNi44Yy0xMC42MTMtMC4yMTMtMTUuOTIgMi42OTMtMTUuOTIgOC43MiAwIDIuMTMzIDAuNiAzLjc4NyAxLjggNC45NnMyLjc2IDEuNzYgNC42OCAxLjc2YzEuMzMzIDAgMi41Mi0wLjIgMy41Ni0wLjZ6bTI4LjIgMy4yYy0yLjg4LTEuNjI3LTUuMDktMy45Mi02LjY0LTYuODgtMS41NDctMi45Ni0yLjMyLTYuNDEzLTIuMzItMTAuMzYgMC00IDAuODQtNy41NiAyLjUyLTEwLjY4czQuMDctNS41NiA3LjE2LTcuMzIgNi42Ny0yLjY0IDEwLjcyLTIuNjRjMy44NCAwIDYuOTkgMC42NjcgOS40NCAybC0xLjUyIDUuMzZjLTIuMjktMS4yMjctNC45My0xLjg0LTcuOTItMS44NC00LjE2IDAtNy40MyAxLjM4Ny05LjggNC4xNnMtMy41NiA2LjMyLTMuNTYgMTAuNjQgMS4yMyA3LjgxMyAzLjY4IDEwLjQ4IDUuNjMgNCA5LjUyIDRjMi42NyAwIDUuNDQtMC42MTMgOC4zMi0xLjg0bDEuMTIgNS4yOGMtMy4wNCAxLjM4Ny02LjYxIDIuMDgtMTAuNzIgMi4wOC0zLjc5IDAtNy4xMi0wLjgxMy0xMC0yLjQ0em0zNi40LTAuODhjLTMuNTctMi4zMi02LjMzLTUuNTYtOC4yOC05Ljcycy0yLjkyLTguODgtMi45Mi0xNC4xNmMwLTUuNDkzIDEuMDMtMTAuMzg3IDMuMDgtMTQuNjggMi4wNS00LjI5MzQgNC45Mi03LjY0IDguNi0xMC4wNHM3LjkyLTMuNiAxMi43Mi0zLjZjNC42NCAwIDguNzUgMS4xNDY3IDEyLjMyIDMuNDRzNi4zNSA1LjUyIDguMzIgOS42OCAyLjk2IDguOTA3IDIuOTYgMTQuMjRjMCA1LjYtMSAxMC41MzMtMyAxNC44cy00Ljg0IDcuNTg3LTguNTIgOS45Ni03Ljk3IDMuNTYtMTIuODggMy41NmMtNC42OSAwLTguODMtMS4xNi0xMi40LTMuNDh6bTIxLjUyLTVjMi41Ni0xLjkyIDQuNTMtNC41ODcgNS45Mi04czIuMDgtNy4yNTMgMi4wOC0xMS41MmMwLTQuMjEzLTAuNzEtOC0yLjEyLTExLjM2cy0zLjM5LTUuOTg3LTUuOTItNy44OGMtMi41My0xLjg5MzMtNS40My0yLjg0LTguNjgtMi44NC0zLjMxIDAtNi4yMyAwLjk3MzMtOC43NiAyLjkyLTIuNTMgMS45NDctNC40OSA0LjYyNy01Ljg4IDguMDRzLTIuMDggNy4yOC0yLjA4IDExLjZjMCA0LjE2IDAuNjkgNy45MDcgMi4wOCAxMS4yNHMzLjM1IDUuOTQ3IDUuODggNy44NCA1LjQzIDIuODQgOC42OCAyLjg0YzMuMzEgMCA2LjI0LTAuOTYgOC44LTIuODh6bTE5LjUyIDUuMDRsMS43Ni01Ljc2YzMuNTcgMi4yOTMgNy42MyAzLjQ0IDEyLjE2IDMuNDQgMy4zNiAwIDYuMDgtMC44NCA4LjE2LTIuNTJzMy4xMi0zLjkwNyAzLjEyLTYuNjhjMC0yLjUwNy0wLjgtNC42LTIuNC02LjI4cy00LjE5LTMuMTg3LTcuNzYtNC41MmMtOS4zMy0zLjUyLTE0LTguNjQtMTQtMTUuMzYgMC0yLjc3MyAwLjczLTUuMjY2NyAyLjItNy40OHMzLjUyLTMuOTQ2NyA2LjE2LTUuMiA1LjYxLTEuODggOC45Mi0xLjg4YzQuNzUgMCA4LjYxIDAuODUzMyAxMS42IDIuNTZsLTEuOTIgNS42OGMtMi44My0xLjcwNjctNi4xMy0yLjU2LTkuOTItMi41Ni0yLjkzIDAtNS4zNiAwLjc0NjctNy4yOCAyLjI0cy0yLjg4IDMuNDQtMi44OCA1Ljg0YzAgMi4zNDcgMC43NiA0LjI2NyAyLjI4IDUuNzZzNC4zMSAzLjA2NyA4LjM2IDQuNzJjNC42OSAxLjkyIDguMTIgNC4xMiAxMC4yOCA2LjZzMy4yNCA1LjU4NyAzLjI0IDkuMzJjMCAzLjA5My0wLjc2IDUuOC0yLjI4IDguMTJzLTMuNjggNC4xMi02LjQ4IDUuNC02LjA5IDEuOTItOS44OCAxLjkyYy01LjYgMC0xMC4wOC0xLjEyLTEzLjQ0LTMuMzZ6Ii8+PC9zdmc+"},50471:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9Ijg4IiB3aWR0aD0iODgiIGlkPSJzdmcyIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIgc29kaXBvZGk6ZG9jbmFtZT0iV2luZG93c19sb2dvXy1fMjAxMi5zdmciPgogIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExMCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMgaWQ9ImRlZnM4Ii8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldyBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MDkiIGlkPSJuYW1lZHZpZXc2IiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOnpvb209IjIuNjgxODE4MiIgaW5rc2NhcGU6Y3g9IjM3LjQ3NDU3NiIgaW5rc2NhcGU6Y3k9IjQ0IiBpbmtzY2FwZTp3aW5kb3cteD0iLTgiIGlua3NjYXBlOndpbmRvdy15PSItOCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiMwMDc4ZDY7ZmlsbC1vcGFjaXR5OjEiIGQ9Im0wLDEyLjQwMiwzNS42ODctNC44NjAyLDAuMDE1NiwzNC40MjMtMzUuNjcsMC4yMDMxM3ptMzUuNjcsMzMuNTI5LDAuMDI3NywzNC40NTMtMzUuNjctNC45MDQxLTAuMDAyLTI5Ljc4em00LjMyNjEtMzkuMDI1LDQ3LjMxOC02LjkwNiwwLDQxLjUyNy00Ny4zMTgsMC4zNzU2NXptNDcuMzI5LDM5LjM0OS0wLjAxMTEsNDEuMzQtNDcuMzE4LTYuNjc4NC0wLjA2NjMtMzQuNzM5eiIgaWQ9InBhdGg0Ii8+Cjwvc3ZnPg=="}}]);