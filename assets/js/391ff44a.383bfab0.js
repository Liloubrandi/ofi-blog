"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5757],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),c=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,b=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return t?n.createElement(b,i(i({ref:a},s),{},{components:t})):n.createElement(b,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},82593:(e,a,t)=>{t.d(a,{x:()=>L,Z:()=>E});var n=t(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=t(86010),i=t(71217);const o=/--(?<klass>\w+)$/,d=e=>{let a,{value:t}=e,l=t;if(o.test(t)){const e=(e=>{if(o.test(e))return e.match(o).groups.klass})(t);a=r[e],l=""+t.replace(o,"")}return n.createElement("option",{value:t,className:a},l)};var c=t(92814),s=t(51436),m=t(68949),p=t(72389),u=t(21314),b=t(74322);const g=/--(?<klass>\w+)$/,f=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],h=(0,i.Pi)((e=>{const a=(0,p.Z)(),[t,i]=n.useState("unchecked"),o=(0,u.oR)("documentStore").find(e.webKey),g=e=>{o.loaded&&(i("unchecked"),o.setData({value:e,type:"string"}))},h=a=>{if(e.checker)return i(e.checker(a)?"correct":"wrong");const t=e.sanitizer?e.sanitizer:e=>e;i(t(a)===t(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,m.U5)((()=>o.loaded),(e=>{e&&h(o.value)}))),[o]),n.useEffect((()=>{o.loaded&&h(o.value)}),[o,a]),a?o.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:o.value,className:f(o.value),disabled:!o.loaded},e.select.map(((e,a)=>n.createElement(d,{value:e,key:a})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:o.value,disabled:!o.loaded||o.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>h(o.value),className:(0,l.default)(r[t],r.checkButton)},n.createElement(c.G,{icon:(v=t,"correct"===v?s.f8k:"wrong"===v?s.nYk:s.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR");var v})),v=/--(?<klass>\w+)$/,w=e=>r[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],k=(0,i.Pi)((e=>{const a=(0,u.oR)("documentStore").find(e.webKey),t=function(e,t){void 0===t&&(t=0);const n=[...a.data.value.slice(0,t),e,...a.data.value.slice(t+1)];a.setData({...a.data,value:n})};return a.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),a.data.value.map(((r,l)=>e.select?n.createElement("select",{key:l,onChange:e=>t(e.target.value,l),value:r,className:w(r),disabled:!a.loaded},e.select.map(((e,a)=>n.createElement(d,{value:e,key:a})))):n.createElement("input",{key:l,type:"text",onChange:e=>t(e.target.value,l),value:r,disabled:!a.loaded||a.readonly})))):n.createElement(b.Z,null)}));var N=t(87462),z=t(75552);const y=(0,i.Pi)((e=>{const a=(0,u.oR)("documentStore").find(e.webKey);return a.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(z.Z,(0,N.Z)({model:a},e))):n.createElement(b.Z,null)}));var x=t(47271);const F=(0,i.Pi)((e=>(0,u.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var Z=t(97762);const L=e=>e.replace(/\s+/g,"").toUpperCase(),E=(0,i.Pi)((e=>{const a=(0,u.oR)("documentStore"),t=(0,u.oR)("msalStore"),r=a.find(e.webKey),l=(0,p.Z)();return(0,u.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(x.Z,null),t.loggedIn&&n.createElement(F,{webKey:e.webKey}),"text"===e.type&&n.createElement(y,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(k,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(67294);const r="noLoginAlert_HRfh";var l=t(39960),i=t(71217),o=t(21314);const d=(0,i.Pi)((()=>(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},74322:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const l="loader_FEpR",i="badge_oWqf";var o=t(71217),d=t(92814),c=t(51436);const s=(0,o.Pi)((()=>n.createElement("div",{className:(0,r.default)(l)},n.createElement(d.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))))},75552:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(67294);const r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",o="disableToolbar_bRdP";var d=t(86010),c=t(71217),s=t(74322),m=void 0;const p=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],u=e=>{const a=[];if(e.bold||e.italic||e.underline){const t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),a.push(t)}if(e.h1||e.h2||e.h3){const t=[];e.h1&&t.push(1),e.h2&&t.push(2),e.h3&&t.push(3),t.push(!1),a.push(t)}if(e.color||e.background){const t=[];e.color&&t.push({color:[]}),e.background&&t.push({background:[]}),a.push(t)}if(e.ul||e.ol){const t=[];e.ol&&t.push({list:"ordered"}),e.ul&&t.push({list:"bullet"}),a.push(t)}if(e.formula||e.image){const t=[];e.formula&&t.push("formula"),e.image&&t.push("image"),a.push(t)}return e.code&&a.push(["code-block"]),a},b=(0,c.Pi)((e=>{const[a,c]=n.useState(!1),[b,g]=n.useState(!1),f=n.useRef(null),{model:h}=e,v=e=>{e.preventDefault()};n.useEffect((()=>{let a=!0;return function(e,a){if(void 0===a&&(a={}),m)return e();const n=[Promise.all([t.e(7762),t.e(8446),t.e(324),t.e(6095),t.e(1167)]).then(t.t.bind(t,44290,23)),t.e(6095).then(t.t.bind(t,76095,23)),t.e(7891).then(t.t.bind(t,17891,23)),Promise.all([t.e(532),t.e(1940)]).then(t.bind(t,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};a.formula&&!window.katex&&(r.katex=n.length,n.push(t.e(1008).then(t.bind(t,41008)),Promise.all([t.e(532),t.e(37)]).then(t.bind(t,50037)))),Promise.all(n).then((a=>{m=a[r["react-quill"]].default;const t=a[r.quill].default,n=a[r["react-image-compress"]].default;if("katex"in r){const e=a[r.katex].default;window.katex=e}t.register("modules/imageCompress",n),e()}))}((()=>{a&&(g(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{a=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return m&&b&&h.loaded?n.createElement("div",{onFocus:()=>!a&&c(!0),className:(0,d.default)(r)},n.createElement(m,{ref:f,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,d.default)(l,e.monospace&&i,a?void 0:o),value:h.text||"",onChange:(a,t,n,r)=>{var l,i;l=a,void 0===i&&(i=0),!e.readonly&&h.canUpdate&&b&&h.setText(l)},modules:{toolbar:e.toolbar?u(e.toolbar):[...p,...u(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(s.Z,null)}))},25149:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(87462),r=(t(67294),t(3905)),l=t(82593);const i={title:"RoboZZle"},o="RoboZZle",d={unversionedId:"Programmieren-1/Algorithmen/Uebungen/robozzle",id:"version-25h/Programmieren-1/Algorithmen/Uebungen/robozzle",title:"RoboZZle",description:"Puzzle 1",source:"@site/versioned_docs/version-25h/04-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",sourceDirName:"04-Programmieren-1/01-Algorithmen/100-Uebungen",slug:"/Programmieren-1/Algorithmen/Uebungen/robozzle",permalink:"/25h/Programmieren-1/Algorithmen/Uebungen/robozzle",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",tags:[],version:"25h",sidebarPosition:1,frontMatter:{title:"RoboZZle"},sidebar:"version-25h/sidebar",previous:{title:"Uebungen",permalink:"/25h/category/uebungen"},next:{title:"Turtlegrafik",permalink:"/25h/category/turtlegrafik"}},c={},s=[],m=(p="Figure",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const u={toc:s};function b(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"robozzle"},"RoboZZle"),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/MmqBVWi_Pc0?start=21",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-1"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12419"},"Puzzle 1")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(97044).Z,width:"268",height:"183"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a1",webKey:"49f55f64-13b9-4f15-b138-1335c09281b5",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-2"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2741"},"Puzzle 2")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(50568).Z,width:"247",height:"244"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a2",webKey:"2b9029cf-9593-4ab8-a49a-eec034c27b0c",label:"L\xf6sung F1",size:3,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-3"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 3")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10858"},"Puzzle 3")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(83208).Z,width:"241",height:"241"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a3",webKey:"f8f87665-1d2b-4559-b3ba-fbd604061d2a",label:"L\xf6sung F1",size:7,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-4"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 4")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12511"},"Puzzle 4")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(60929).Z,width:"308",height:"281"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a4",webKey:"d3b5b747-6a4d-4658-a05f-0026e20ce326",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-5"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 5")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10895"},"Puzzle 5")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(16430).Z,width:"412",height:"213"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a5",webKey:"13b53721-50de-4630-abe7-7f1cd5f4ea8e",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-6"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 6.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10048"},"Puzzle 6")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(84585).Z,width:"412",height:"265"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a6a",webKey:"ef5632a1-8885-415d-a1dc-50b810b19ba2",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a6b",webKey:"49c1b7a8-b457-437a-a147-a5ad75c7f2fe",label:"L\xf6sung F2",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-7"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 7.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2748"},"Puzzle 7")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(71777).Z,width:"165",height:"317"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a7",webKey:"1f50b198-7ef4-48b6-bbdc-68452baa7952",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-8"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 8.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=140"},"Puzzle 8")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(59897).Z,width:"840",height:"67"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a8",webKey:"59c65a0b-5ae1-4287-b25f-567b598a67a4",label:"L\xf6sung F1",size:6,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-9"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 9.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=1040"},"Puzzle 9")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(49646).Z,width:"281",height:"284"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a9",webKey:"a290e5cd-caae-4dc5-acfb-e435f072645c",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-10"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 10.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=87"},"Puzzle 10")),(0,r.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(57333).Z,width:"461",height:"372"})),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a10a",webKey:"2d443973-fd5e-4432-90a3-45dd0c6932fd",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,r.kt)(l.Z,{type:"array",id:"robozzle_a10b",webKey:"14b2fdbd-cb85-4175-9016-bf43e252fcf0",label:"L\xf6sung F2",size:3,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))))}b.isMDXComponent=!0},97044:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a1-9f88e1913a1251d499bdfb0a2c7fb2b7.png"},57333:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a10-c715bd3fb509c1d38ff2f9fd71177302.png"},50568:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a2-b543492edbe8b6375cf700f5988d3ee5.png"},83208:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a3-161aca72f309f94bd52b0b113745717b.png"},60929:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a4-4409a04081e5d33f9e8a364227172666.png"},16430:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a5-152d08fb7bcd5be8b0342534e1465859.png"},84585:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a6-874c825cfa7a6ce99aec0506367ab2c3.png"},71777:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a7-04e86296810da925b2665cd89167c460.png"},59897:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a8-02d9e336651d2befe3b2f5178908c732.png"},49646:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/RoboZZle_a9-12892684d0b832904433762ae750c699.png"}}]);