"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,u=p["".concat(o,".").concat(g)]||p[g]||c[g]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},82593:(e,t,a)=>{a.d(t,{x:()=>_,Z:()=>Z});var n=a(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=a(86010),i=a(71217);const d=/--(?<klass>\w+)$/,o=e=>{let t,{value:a}=e,l=a;if(d.test(a)){const e=(e=>{if(d.test(e))return e.match(d).groups.klass})(a);t=r[e],l=""+a.replace(d,"")}return n.createElement("option",{value:a,className:t},l)};var s=a(92814),m=a(51436),c=a(68949),p=a(72389),g=a(21314),u=a(74322);const h=/--(?<klass>\w+)$/,f=e=>r[(e=>{if(h.test(e))return e.match(h).groups.klass})(e)],k=(0,i.Pi)((e=>{const t=(0,p.Z)(),[a,i]=n.useState("unchecked"),d=(0,g.oR)("documentStore").find(e.webKey),h=e=>{d.loaded&&(i("unchecked"),d.setData({value:e,type:"string"}))},k=t=>{if(e.checker)return i(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;i(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,c.U5)((()=>d.loaded),(e=>{e&&k(d.value)}))),[d]),n.useEffect((()=>{d.loaded&&k(d.value)}),[d,t]),t?d.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>h(e.target.value),style:{width:e.width},value:d.value,className:f(d.value),disabled:!d.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>h(e.target.value),value:d.value,disabled:!d.loaded||d.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>k(d.value),className:(0,l.default)(r[a],r.checkButton)},n.createElement(s.G,{icon:(N=a,"correct"===N?m.f8k:"wrong"===N?m.nYk:m.sph)}))):n.createElement(u.Z,null):n.createElement("div",null,"SSR");var N})),N=/--(?<klass>\w+)$/,b=e=>r[(e=>{if(N.test(e))return e.match(N).groups.klass})(e)],v=(0,i.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((r,l)=>e.select?n.createElement("select",{key:l,onChange:e=>a(e.target.value,l),value:r,className:b(r),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{key:l,type:"text",onChange:e=>a(e.target.value,l),value:r,disabled:!t.loaded||t.readonly})))):n.createElement(u.Z,null)}));var y=a(87462),w=a(75552);const E=(0,i.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,y.Z)({model:t},e))):n.createElement(u.Z,null)}));var C=a(47271);const x=(0,i.Pi)((e=>(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var O=a(97762);const _=e=>e.replace(/\s+/g,"").toUpperCase(),Z=(0,i.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=(0,g.oR)("msalStore"),r=t.find(e.webKey),l=(0,p.Z)();return(0,g.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||O.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(C.Z,null),a.loggedIn&&n.createElement(x,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(k,e),"array"===e.type&&n.createElement(v,e)):n.createElement(u.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const r="noLoginAlert_HRfh";var l=a(39960),i=a(71217),d=a(21314);const o=(0,i.Pi)((()=>(0,d.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},7564:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(86010),r=a(67294),l=a(97566);const i=/[ENIR]/gi,d=/[BCDFGHJKLMOPQUVWXYZ]/gi,o=[{find:/\xe4/g,replace:"ae"},{find:/\xf6/g,replace:"oe"},{find:/\xfc/g,replace:"ue"},{find:/\xc4/g,replace:"Ae"},{find:/\xd6/g,replace:"Oe"},{find:/\xdc/g,replace:"Ue"},{find:/\s+/g,replace:" "},{find:/^\s/g,replace:""},{find:/\s$/g,replace:""}],s=()=>{const[e,t]=r.useState(""),[a,s]=r.useState("frequent"),[m,c]=r.useState("");return r.useEffect((()=>{if(0===e.length)return;const t=(e=>o.reduce(((e,t)=>e.replace(t.find,t.replace)),e))(e);switch(a){case"frequent":c(t.replace(i,""));break;case"rare":c(t.replace(d,""))}}),[e,a]),r.createElement("div",{className:(0,n.default)("hero","shadow--lw",l.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Buchstaben Redundanz"),r.createElement("h4",null,"Originaltext"),r.createElement("textarea",{className:(0,n.default)(l.Z.input),value:e,onChange:e=>{t(e.target.value)},rows:5,placeholder:"Originaltext"}),r.createElement("div",{className:(0,n.default)("buttongroup",l.Z.modes)},r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","frequent"===a&&"button--active"),title:"H\xe4ufige: "+i.source.slice(1,-1).split("").join(", "),onClick:()=>s("frequent")},"H\xe4ufige Entfernen"),r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","rare"===a&&"button--active"),onClick:()=>s("rare"),title:"Seltene: "+d.source.slice(1,-1).split("").join(", ")},"Seltene entfernen")),r.createElement("h4",null,"Ausgabe"),r.createElement("p",null,"Ohne: ",("frequent"===a?i:d).source.slice(1,-1).split("").join(", ")),r.createElement("textarea",{className:(0,n.default)(l.Z.input),value:m,onChange:()=>{},rows:5,placeholder:"Ausgabe"})))}},74322:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),r=a(86010);const l="loader_FEpR",i="badge_oWqf";var d=a(71217),o=a(92814),s=a(51436);const m=(0,d.Pi)((()=>n.createElement("div",{className:(0,r.default)(l)},n.createElement(o.G,{icon:s.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294);const r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",d="disableToolbar_bRdP";var o=a(86010),s=a(71217),m=a(74322),c=void 0;const p=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],g=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},u=(0,s.Pi)((e=>{const[t,s]=n.useState(!1),[u,h]=n.useState(!1),f=n.useRef(null),{model:k}=e,N=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),c)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{c=t[r["react-quill"]].default;const a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(h(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return c&&u&&k.loaded?n.createElement("div",{onFocus:()=>!t&&s(!0),className:(0,o.default)(r)},n.createElement(c,{ref:f,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,o.default)(l,e.monospace&&i,t?void 0:d),value:k.text||"",onChange:(t,a,n,r)=>{var l,i;l=t,void 0===i&&(i=0),!e.readonly&&k.canUpdate&&u&&k.setText(l)},modules:{toolbar:e.toolbar?g(e.toolbar):[...p,...g(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(m.Z,null)}))},49264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(7564),i=a(82593);const d={title:"2. Informationsgehalt",label:"2. Informationsgehalt"},o="2. Informationsgehalt [^1]",s={unversionedId:"Codes-and-Data/Compression-v24/redundancy",id:"Codes-and-Data/Compression-v24/redundancy",title:"2. Informationsgehalt",description:"Buchstabenh\xe4ufigkeit",source:"@site/docs/Codes-and-Data/03-Compression-v24/02-redundancy.md",sourceDirName:"Codes-and-Data/03-Compression-v24",slug:"/Codes-and-Data/Compression-v24/redundancy",permalink:"/Codes-and-Data/Compression-v24/redundancy",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/03-Compression-v24/02-redundancy.md",tags:[],version:"current",lastUpdatedAt:1650723637,formattedLastUpdatedAt:"23.4.2022",sidebarPosition:2,frontMatter:{title:"2. Informationsgehalt",label:"2. Informationsgehalt"},sidebar:"sidebar",previous:{title:"1. Huffman-Codierung",permalink:"/Codes-and-Data/Compression-v24/huffman"},next:{title:"1. Morsecode",permalink:"/Codes-and-Data/Anwendungen/morsecode"}},m={},c=[{value:"Buchstabenh\xe4ufigkeit",id:"buchstabenh\xe4ufigkeit",level:2},{value:"Informationsgehalt",id:"informationsgehalt",level:2}],p=(g="Figure",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var g;const u={toc:c};function h(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-informationsgehalt-"},"2. Informationsgehalt ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("h2",{id:"buchstabenh\xe4ufigkeit"},"Buchstabenh\xe4ufigkeit"),(0,r.kt)("p",null,"Die Buchstabenh\xe4ufigkeit gibt an, wie oft ein Buchstabe in einem Text vorkommen. Die H\xe4ufigkeit der einzelnen Buchstaben ist je nach Sprache unterschiedlich. Das folgende Diagramm zeigt die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,r.kt)(p,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(26714).Z,width:"901",height:"361"})),(0,r.kt)("h2",{id:"informationsgehalt"},"Informationsgehalt"),(0,r.kt)("p",null,"Wir f\xfchren ein Experiment durch. Aus einem deutschen Text werden etwa 40% der Buchstaben entfernt. Zuerst werden die vier h\xe4ufigsten Buchstaben ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," entfernt. Danach werden diese Buchstaben sowie ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," beibehalten und die restlichen entfernt. Obschon etwa die gleiche Menge Buchstaben entfernt worden sind, bleibt der Text nach dem Entfernen der h\xe4ufigen Buchstaben verst\xe4ndlicher."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notizen")),(0,r.kt)(l.Z,{mdxType:"Redundancy"}),(0,r.kt)("p",null,"Offenbar tragen die h\xe4ufigen Buchstaben weniger zum Inhalt des Textes bei. Sie haben einen kleineren ",(0,r.kt)("strong",{parentName:"p"},"Informationsgehalt"),"."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"take-home-message"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(i.Z,{type:"text",webKey:"18b21da1-1e49-4d1a-a7ea-1c930205abf1",mdxType:"Answer"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2b50\ufe0f Huffman Codierung f\xfcr die deutsche Sprache"),(0,r.kt)("p",null,"Die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten kann der folgenden Tabelle entnommen werden:"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"E"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15.99%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.34%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"W"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.40%"),(0,r.kt)("td",{parentName:"tr",align:null},"J"),(0,r.kt)("td",{parentName:"tr",align:null},"0.27 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9.59%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"D"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.92%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.22%"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.24 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"R"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.71%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.11%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"C"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.71%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"P"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.06%"),(0,r.kt)("td",{parentName:"tr",align:null},"\xdf"),(0,r.kt)("td",{parentName:"tr",align:null},"0.15 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"I"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.60%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"U"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.21%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"V"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.94%"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"0.13 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.43%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"L"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.80%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.63%"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"0.07 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"S"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.41%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"G"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.02%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"K"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.50%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.54%"),(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"0.04 %"))))),(0,r.kt)("p",null,"Daraus ergibt sich"),(0,r.kt)(p,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",src:a(64411).Z,width:"1003",height:"824"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"(leer)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0101"),(0,r.kt)("td",{parentName:"tr",align:"right"},"P"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Q"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11100110111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"C"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01111"),(0,r.kt)("td",{parentName:"tr",align:"right"},"R"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"D"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"S"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"E"),(0,r.kt)("td",{parentName:"tr",align:"left"},"110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"U"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"G"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"V"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1110010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"W"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"I"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11100110110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"J"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111001100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1110011010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"K"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000111"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"L"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10101101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xd6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111001110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10101100")))))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"verlustbehaftete-kompression"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Verlustbehaftete Kompression")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"W\xfcrden bei Textdokumenten Algorithmen eingesetzt, welche Zeichen mit tiefem Informationsgehalt weglassen, so w\xfcrde man von verlustbehafteter Kompression sprechen, da der Originaltext ggf. nicht wieder hergestellt werden kann. "))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=195436"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/german-letter-frequencies/"},"Practical Cryptography: German Letter Frequencies"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},97566:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},64411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/huffman-german-e146d68a9775a0c649a0f99a6e760185.svg"},26714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/letter-frequency-de-589f8e0aa0703df3d1fd96ead993c13b.svg"}}]);