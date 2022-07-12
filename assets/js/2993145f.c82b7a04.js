"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,f=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82593:(e,t,a)=>{a.d(t,{x:()=>P,Z:()=>O});var n=a(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var i=a(86010),l=a(71217);const d=/--(?<klass>\w+)$/,o=e=>{let t,{value:a}=e,i=a;if(d.test(a)){const e=(e=>{if(d.test(e))return e.match(d).groups.klass})(a);t=r[e],i=""+a.replace(d,"")}return n.createElement("option",{value:a,className:t},i)};var m=a(92814),s=a(51436),p=a(68949),c=a(72389),u=a(21314),f=a(74322);const g=/--(?<klass>\w+)$/,k=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],h=(0,l.Pi)((e=>{const t=(0,c.Z)(),[a,l]=n.useState("unchecked"),d=(0,u.oR)("documentStore").find(e.webKey),g=e=>{d.loaded&&(l("unchecked"),d.setData({value:e,type:"string"}))},h=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;l(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,p.U5)((()=>d.loaded),(e=>{e&&h(d.value)}))),[d]),n.useEffect((()=>{d.loaded&&h(d.value)}),[d,t]),t?d.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:d.value,className:k(d.value),disabled:!d.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:d.value,disabled:!d.loaded||d.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>h(d.value),className:(0,i.default)(r[a],r.checkButton)},n.createElement(m.G,{icon:(b=a,"correct"===b?s.f8k:"wrong"===b?s.nYk:s.sph)}))):n.createElement(f.Z,null):n.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,N=e=>r[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],v=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((r,i)=>e.select?n.createElement("select",{key:i,onChange:e=>a(e.target.value,i),value:r,className:N(r),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{key:i,type:"text",onChange:e=>a(e.target.value,i),value:r,disabled:!t.loaded||t.readonly})))):n.createElement(f.Z,null)}));var y=a(87462),w=a(75552);const D=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,y.Z)({model:t},e))):n.createElement(f.Z,null)}));var E=a(47271);const C=(0,l.Pi)((e=>(0,u.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var x=a(97762);const P=e=>e.replace(/\s+/g,"").toUpperCase(),O=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore"),a=(0,u.oR)("msalStore"),r=t.find(e.webKey),i=(0,c.Z)();return(0,u.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(E.Z,null),a.loggedIn&&n.createElement(C,{webKey:e.webKey}),"text"===e.type&&n.createElement(D,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(v,e)):n.createElement(f.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const r="noLoginAlert_HRfh";var i=a(39960),l=a(71217),d=a(21314);const o=(0,l.Pi)((()=>(0,d.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.Z,{to:"/login"},"Login"))))},74322:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const i="loader_FEpR",l="badge_oWqf";var d=a(71217),o=a(92814),m=a(51436);const s=(0,d.Pi)((()=>n.createElement("div",{className:(0,r.default)(i)},n.createElement(o.G,{icon:m.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294);const r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",d="disableToolbar_bRdP";var o=a(86010),m=a(71217),s=a(74322),p=void 0;const c=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],u=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},f=(0,m.Pi)((e=>{const[t,m]=n.useState(!1),[f,g]=n.useState(!1),k=n.useRef(null),{model:h}=e,b=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),p)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{p=t[r["react-quill"]].default;const a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(g(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return p&&f&&h.loaded?n.createElement("div",{onFocus:()=>!t&&m(!0),className:(0,o.default)(r)},n.createElement(p,{ref:k,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,o.default)(i,e.monospace&&l,t?void 0:d),value:h.text||"",onChange:(t,a,n,r)=>{var i,l;i=t,void 0===l&&(l=0),!e.readonly&&h.canUpdate&&f&&h.setText(i)},modules:{toolbar:e.toolbar?u(e.toolbar):[...c,...u(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(s.Z,null)}))},50118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),i=a(82593);const l={title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},d="6. Dateiformate erkennen [^1]",o={unversionedId:"Codierung/Grafikformate/files",id:"version-25h/Codierung/Grafikformate/files",title:"6. Dateiformate erkennen",description:"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:",source:"@site/versioned_docs/version-25h/05-Codierung/02-Grafikformate/06-files.md",sourceDirName:"05-Codierung/02-Grafikformate",slug:"/Codierung/Grafikformate/files",permalink:"/25h/Codierung/Grafikformate/files",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/02-Grafikformate/06-files.md",tags:[],version:"25h",sidebarPosition:6,frontMatter:{title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},sidebar:"version-25h/sidebar",previous:{title:"5. Vektorgrafik",permalink:"/25h/Codierung/Grafikformate/vector"},next:{title:"1. Huffman-Codierung",permalink:"/25h/Codierung/Compression/huffman"}},m={},s=[{value:"Dateiformat",id:"dateiformat",level:2},{value:"Dateiendung",id:"dateiendung",level:2},{value:"Magische Bytes",id:"magische-bytes",level:2},{value:"<em>Internet Media Type</em>",id:"internet-media-type",level:2},{value:"Wichtige Dateiformate",id:"wichtige-dateiformate",level:2}],p={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-dateiformate-erkennen-"},"6. Dateiformate erkennen ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00100011 00100000 01000100 01100001 01110100 01100101 01101001 01100101 01101110 00001010 00101101 00101101 00101101 00001010 00001010 01000101 01101001 01101110 01100101 00100000 01000100 01100001 01110100 01100101 \u2026")),(0,r.kt)("h2",{id:"dateiformat"},"Dateiformat"),(0,r.kt)("p",null,"Die f\xfcr eine Datei verwendete Codierung wird auch ",(0,r.kt)("strong",{parentName:"p"},"Dateiformat")," genannt. Anhand der bin\xe4ren Daten alleine ist nicht erkennbar, was f\xfcr eine Codierung f\xfcr eine Datei verwendet wurde."),(0,r.kt)("p",null,"Ohne diese zus\xe4tzliche Information k\xf6nnen die Daten aber nicht decodiert werden. Bei jeder Datei muss also zus\xe4tzlich angegeben werden, welche Codierung f\xfcr diese Datei verwendet wurde."),(0,r.kt)("p",null,"Es gibt drei Ans\xe4tze, das Dateiformat (also die Codierung) einer Datei zu erkennen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dateiendung"),(0,r.kt)("li",{parentName:"ul"},"Magische Bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Internet Media Type"))),(0,r.kt)("h2",{id:"dateiendung"},"Dateiendung"),(0,r.kt)("p",null,"Eine Dateiendung wie ",(0,r.kt)("em",{parentName:"p"},".docx")," oder ",(0,r.kt)("em",{parentName:"p"},".jpg")," wird an den Dateinamen angeh\xe4ngt. Eine Dateiendung beginnt immer mit einem Punkt. So wird sie vom Dateinamen abgetrennt. Ein Betriebssystem wie Windows oder macOS verwendet die Dateiendung, um zu ermitteln, mit welcher Anwendung eine Datei ge\xf6ffnet werden soll."),(0,r.kt)("h2",{id:"magische-bytes"},"Magische Bytes"),(0,r.kt)("p",null,"Viele Dateiformate verwenden magische Bytes am Dateianfang zur Kennzeichnung, wie die enthaltenen Informationen codiert sind."),(0,r.kt)("p",null,"Beispielsweise beginnt jede ",(0,r.kt)("em",{parentName:"p"},".jpg"),"-Datei mit der Bitfolge ",(0,r.kt)("inlineCode",{parentName:"p"},"11111111 11011000 11111111"),". Diese Darstellung ist etwas lang und umst\xe4ndlich, daher wird h\xe4ufig das Hexadezimalsystem (16-er System) verwendet."),(0,r.kt)("h2",{id:"internet-media-type"},(0,r.kt)("em",{parentName:"h2"},"Internet Media Type")),(0,r.kt)("p",null,"Der ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," oder ",(0,r.kt)("em",{parentName:"p"},"MIME-Type")," ist ein Standard, mit welchem Codierungen f\xfcr die \xdcbermittlung von Daten im Internet angegeben werden. So teilt ein Webserver einem Browser per ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," mit, ob er einen Text, ein Bild oder ein Video \xfcbermittelt. Auch bei der \xdcbermittlung von E-Mails wird dieses System verwendet."),(0,r.kt)("p",null,"Ein ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," besteht immer aus einem Haupt- und einem Untertype. Es gibt folgende Haupttypen:"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Typ"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application")),(0,r.kt)("td",{parentName:"tr",align:"left"},"anwendungsspezifische Codierungen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"audio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Audiodaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Grafiken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"video")),(0,r.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Videomaterial"))))),(0,r.kt)("h2",{id:"wichtige-dateiformate"},"Wichtige Dateiformate"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Bezeichnung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Dateiendung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Internet Media Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Magische Bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPEG-Bild"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".jpg")," / ",(0,r.kt)("em",{parentName:"td"},".jpeg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image/jpeg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FF D8 FF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Portable Network Graphics"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".png")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image/png")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"89 50 4E 47 0D 0A 1A 0A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ZIP-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Word-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".docx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,r.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Excel-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".xlsx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,r.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Portable Document Format"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".pdf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/pdf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"25 50 44 46 2D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Textdatei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".txt")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Webseite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".html")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/html")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python-Programm"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".py")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/python")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)"))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"verlorene-dateiendungen"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Verlorene Dateiendungen")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bei den folgenden Dateien ging die Dateiendung verloren. Finden Sie mit ",(0,r.kt)("a",{parentName:"p",href:"https://hexed.it/"},"https://hexed.it/")," heraus, welche Dateiendung die jeweilige Datei hat, f\xfcgen Sie die Dateiendung hinzu und \xf6ffnen Sie diese."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{target:"_blank",href:a(78220).Z},"download")),(0,r.kt)(i.Z,{type:"text",webKey:"56a24e71-16af-409b-9e36-9049e30413b3",mdxType:"Answer"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"file1: "),(0,r.kt)("li",{parentName:"ul"},"file2: "),(0,r.kt)("li",{parentName:"ul"},"file3:"))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=206603"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},78220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/files-59607b7e760dc4a5aade4a9bbcc441ae.zip"}}]);