"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82593:(e,t,r)=>{r.d(t,{x:()=>C,Z:()=>z});var a=r(67294);const n={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var i=r(86010),l=r(71217);const o=/--(?<klass>\w+)$/,s=e=>{let t,{value:r}=e,i=r;if(o.test(r)){const e=(e=>{if(o.test(e))return e.match(o).groups.klass})(r);t=n[e],i=""+r.replace(o,"")}return a.createElement("option",{value:r,className:t},i)};var c=r(92814),d=r(51436),u=r(68949),m=r(72389),p=r(21314),g=r(74322);const f=/--(?<klass>\w+)$/,b=e=>n[(e=>{if(f.test(e))return e.match(f).groups.klass})(e)],h=(0,l.Pi)((e=>{const t=(0,m.Z)(),[r,l]=a.useState("unchecked"),o=(0,p.oR)("documentStore").find(e.webKey),f=e=>{o.loaded&&(l("unchecked"),o.setData({value:e,type:"string"}))},h=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const r=e.sanitizer?e.sanitizer:e=>e;l(r(t)===r(e.solution)?"correct":"wrong")};return a.useEffect((()=>(0,u.U5)((()=>o.loaded),(e=>{e&&h(o.value)}))),[o]),a.useEffect((()=>{o.loaded&&h(o.value)}),[o,t]),t?o.loaded?a.createElement("div",{className:n.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:e=>f(e.target.value),style:{width:e.width},value:o.value,className:b(o.value),disabled:!o.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{type:"text",style:{width:e.width},onChange:e=>f(e.target.value),value:o.value,disabled:!o.loaded||o.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:()=>h(o.value),className:(0,i.default)(n[r],n.checkButton)},a.createElement(c.G,{icon:(k=r,"correct"===k?d.f8k:"wrong"===k?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR");var k})),k=/--(?<klass>\w+)$/,v=e=>n[(e=>{if(k.test(e))return e.match(k).groups.klass})(e)],y=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),r=function(e,r){void 0===r&&(r=0);const a=[...t.data.value.slice(0,r),e,...t.data.value.slice(r+1)];t.setData({...t.data,value:a})};return t.loaded?a.createElement("div",{className:n.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map(((n,i)=>e.select?a.createElement("select",{key:i,onChange:e=>r(e.target.value,i),value:n,className:v(n),disabled:!t.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{key:i,type:"text",onChange:e=>r(e.target.value,i),value:n,disabled:!t.loaded||t.readonly})))):a.createElement(g.Z,null)}));var N=r(87462),w=r(75552);const x=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)}));var E=r(47271);const S=(0,l.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var _=r(97762);const C=e=>e.replace(/\s+/g,"").toUpperCase(),z=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore"),r=(0,p.oR)("msalStore"),n=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),i?n?a.createElement("div",{"data--web-key":e.webKey},a.createElement(E.Z,null),r.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},47271:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294);const n="noLoginAlert_HRfh";var i=r(39960),l=r(71217),o=r(21314);const s=(0,l.Pi)((()=>(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:n},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))))},74322:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(67294),n=r(86010);const i="loader_FEpR",l="badge_oWqf";var o=r(71217),s=r(92814),c=r(51436);const d=(0,o.Pi)((()=>a.createElement("div",{className:(0,n.default)(i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,n.default)("badge",l)},"Laden..."))))},75552:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(67294);const n="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP";var s=r(86010),c=r(71217),d=r(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const r=[];e.bold&&r.push("bold"),e.italic&&r.push("italic"),e.underline&&r.push("underline"),t.push(r)}if(e.h1||e.h2||e.h3){const r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){const r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){const r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){const r=[];e.formula&&r.push("formula"),e.image&&r.push("image"),t.push(r)}return e.code&&t.push(["code-block"]),t},g=(0,c.Pi)((e=>{const[t,c]=a.useState(!1),[g,f]=a.useState(!1),b=a.useRef(null),{model:h}=e,k=e=>{e.preventDefault()};a.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const a=[Promise.all([r.e(7762),r.e(8446),r.e(324),r.e(6095),r.e(1167)]).then(r.t.bind(r,44290,23)),r.e(6095).then(r.t.bind(r,76095,23)),r.e(7891).then(r.t.bind(r,17891,23)),Promise.all([r.e(532),r.e(1940)]).then(r.bind(r,11940))],n={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(n.katex=a.length,a.push(r.e(1008).then(r.bind(r,41008)),Promise.all([r.e(532),r.e(37)]).then(r.bind(r,50037)))),Promise.all(a).then((t=>{u=t[n["react-quill"]].default;const r=t[n.quill].default,a=t[n["react-image-compress"]].default;if("katex"in n){const e=t[n.katex].default;window.katex=e}r.register("modules/imageCompress",a),e()}))}((()=>{t&&(f(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return u&&g&&h.loaded?a.createElement("div",{onFocus:()=>!t&&c(!0),className:(0,s.default)(n)},a.createElement(u,{ref:b,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,s.default)(i,e.monospace&&l,t?void 0:o),value:h.text||"",onChange:(t,r,a,n)=>{var i,l;i=t,void 0===l&&(l=0),!e.readonly&&h.canUpdate&&g&&h.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},12628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(82593);const l={title:"8. Stromversorgung"},o="8. Stromversorgung",s={unversionedId:"Computer/basics/Stromversorgung",id:"Computer/basics/Stromversorgung",title:"8. Stromversorgung",description:"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil.",source:"@site/docs/Computer/01-basics/08-Stromversorgung.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Stromversorgung",permalink:"/Computer/basics/Stromversorgung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/08-Stromversorgung.md",tags:[],version:"current",lastUpdatedAt:1641728387,formattedLastUpdatedAt:"9.1.2022",sidebarPosition:8,frontMatter:{title:"8. Stromversorgung"},sidebar:"sidebar",previous:{title:"7. Hauptplatine",permalink:"/Computer/basics/Mainboard"},next:{title:"9. Ebenen",permalink:"/Computer/basics/Ebenen"}},c={},d=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Leistung und W\xe4rme",id:"leistung-und-w\xe4rme",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=u("Figure"),p=u("SourceRef"),g={toc:d};function f(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"8-stromversorgung"},"8. Stromversorgung"),(0,n.kt)("p",null,"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil."),(0,n.kt)("p",null,"Das Netzteil eines Desktop-Computers ist stets eingebaut. Bei einem Notebook hingegen \xfcbernimmt ein externes Netzteil die Stromtransformation, da im Innern des Notebooks nicht gen\xfcgend Platz daf\xfcr vorhanden ist."),(0,n.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,n.kt)("p",null,"F\xfcr das Netzteil gibt es die folgende wichtige Kenngr\xf6sse:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Die ",(0,n.kt)("strong",{parentName:"li"},"Leistung")," gibt an, wie viel Energie das Netzteil in einer bestimmten Zeit den Komponenten maximal zur Verf\xfcgung stellen kann. Die Leistung wird gemessen in ",(0,n.kt)("strong",{parentName:"li"},"Watt"),".")),(0,n.kt)("div",{style:{},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,n.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"ATX-Netzteil",src:r(83551).Z,width:"1171",height:"859"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"ATX-Netzteil",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(p,{parentName:"figcaption",bib:{author:"Smial",author_uri:"https://de.wikipedia.org/wiki/User:Smial",licence:"CC-BY-SA-2.0",licence_url:"https://commons.wikimedia.org/wiki/File:ATX-Netzteil.jpg"},mdxType:"SourceRef"}))))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,n.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Notebook-Netzteil",src:r(35185).Z,width:"1620",height:"1188"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Notebook-Netzteil",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(p,{parentName:"figcaption",bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/en/photo/1136740"},mdxType:"SourceRef"})))))),(0,n.kt)("h2",{id:"leistung-und-w\xe4rme"},"Leistung und W\xe4rme"),(0,n.kt)("p",null,"Die meiste Leistung verpufft als Abw\xe4rme, darum brauchen Desktop-PCs (und leistungsf\xe4hige Grafikkarten) eine aktive Prozessork\xfchlung, d.h. einen K\xfchlk\xf6rper mit grosser Oberfl\xe4che und dar\xfcber einen starken L\xfcfter, um die W\xe4rme vom Prozessor wegzubringen."),(0,n.kt)("p",null,"Notebooks verwenden stromsparendere Prozessoren, daher reicht dort ein kleinerer L\xfcfter aus, oder sie haben gar nur eine passive K\xfchlung ohne aktiven L\xfcfter."),(0,n.kt)("div",{style:{},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,n.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"K\xfchlk\xf6rper und Ventilator",src:r(86024).Z,width:"1024",height:"1024"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"K\xfchlk\xf6rper und Ventilator",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(p,{parentName:"figcaption",bib:{author:"Qurren",author_uri:"https://commons.wikimedia.org/wiki/User:Qurren",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:AMD_Athlon_II_X4_630_heatsink-fan.jpg"},mdxType:"SourceRef"}))))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,n.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Notebook-Mainboard mit Prozessork\xfchler",src:r(39188).Z,width:"1024",height:"1024"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Notebook-Mainboard mit Prozessork\xfchler",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(p,{parentName:"figcaption",bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Acer_TravelMate_P253-M-32344G50Maks_-_motherboard_Q5WV1_LA-7912P_-0219.jpg"},mdxType:"SourceRef"})))))),(0,n.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div",id:"stromversorgung"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,n.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Stromversorgung")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol"},"Recherchieren Sie im Internet und finden Sie heraus, wie viel Leistung (Watt) folgende Ger\xe4te typischerweise im Betrieb beziehen:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Staubsauger"),(0,n.kt)("li",{parentName:"ul"},"Desktop-PC-Netzteil"),(0,n.kt)("li",{parentName:"ul"},"Notebook-Netzteil"),(0,n.kt)("li",{parentName:"ul"},"Smartphone-Ladeger\xe4t"),(0,n.kt)("li",{parentName:"ul"},"LED-Lampe")))),(0,n.kt)(i.Z,{type:"text",webKey:"3a105b6b-5da9-455a-a654-ef1d86be9d0d",mdxType:"Answer"}),(0,n.kt)("ol",{parentName:"div",start:2},(0,n.kt)("li",{parentName:"ol"},"Wie beurteilen Sie folgende Aussagen? Ist das erw\xe4hnte Ger\xe4t neu oder alt?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ein Notebook verbraucht zum Bearbeiten eines Textdokuments oder Surfen im Internet ca. 7W."),(0,n.kt)("li",{parentName:"ul"},"Ein Desktopcomputer braucht ein 1500W-Netzteil."),(0,n.kt)("li",{parentName:"ul"},"Eine Stereoanlage verbraucht im Standbyzustand knapp 15W."),(0,n.kt)("li",{parentName:"ul"},"Ein Beamer hat einen Standbystromverbrauch von ca. 0.5W.")))),(0,n.kt)(i.Z,{type:"text",webKey:"99af8549-e30f-4fbf-b52a-084c320e5c53",mdxType:"Answer"}))))}f.isMDXComponent=!0},83551:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/08-atx-39957fdb29b464ceafc88c0f7b75a0d0.jpg"},86024:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/08-heatsink-fan-8d9a30bf8d816020a88b9956fef5fc70.jpg"},39188:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/08-notebook-cooling-458f71ca55bc193cdd4f154fdd45b063.jpg"},35185:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/08-power-supply-a130edca0a9da97bee5848c9b6d46e4f.jpg"}}]);