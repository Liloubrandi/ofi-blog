(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[889],{82593:(e,t,n)=>{"use strict";n.d(t,{x:()=>S,Z:()=>R});var a=n(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=n(86010),o=n(71217);const i=/--(?<klass>\w+)$/,s=e=>{let t,{value:n}=e,l=n;if(i.test(n)){const e=(e=>{if(i.test(e))return e.match(i).groups.klass})(n);t=r[e],l=""+n.replace(i,"")}return a.createElement("option",{value:n,className:t},l)};var d=n(92814),c=n(51436),u=n(68949),m=n(72389),p=n(21314),f=n(74322);const g=/--(?<klass>\w+)$/,h=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],v=(0,o.Pi)((e=>{const t=(0,m.Z)(),[n,o]=a.useState("unchecked"),i=(0,p.oR)("documentStore").find(e.webKey),g=e=>{i.loaded&&(o("unchecked"),i.setData({value:e,type:"string"}))},v=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const n=e.sanitizer?e.sanitizer:e=>e;o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((()=>(0,u.U5)((()=>i.loaded),(e=>{e&&v(i.value)}))),[i]),a.useEffect((()=>{i.loaded&&v(i.value)}),[i,t]),t?i.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:i.value,className:h(i.value),disabled:!i.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:i.value,disabled:!i.loaded||i.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:()=>v(i.value),className:(0,l.default)(r[n],r.checkButton)},a.createElement(d.G,{icon:(b=n,"correct"===b?c.f8k:"wrong"===b?c.nYk:c.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,w=e=>r[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],k=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);const a=[...t.data.value.slice(0,n),e,...t.data.value.slice(n+1)];t.setData({...t.data,value:a})};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map(((r,l)=>e.select?a.createElement("select",{key:l,onChange:e=>n(e.target.value,l),value:r,className:w(r),disabled:!t.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{key:l,type:"text",onChange:e=>n(e.target.value,l),value:r,disabled:!t.loaded||t.readonly})))):a.createElement(f.Z,null)}));var E=n(87462),N=n(75552);const y=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(N.Z,(0,E.Z)({model:t},e))):a.createElement(f.Z,null)}));var C=n(47271);const _=(0,o.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var x=n(97762);const S=e=>e.replace(/\s+/g,"").toUpperCase(),R=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(_,{webKey:e.webKey}),"text"===e.type&&a.createElement(y,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(k,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},47271:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var l=n(39960),o=n(71217),i=n(21314);const s=(0,o.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.Z,{to:"/login"},"Login"))))},73830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(72389);const r={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",controls:"controls_xr2C"};var l=n(86010),o=n(67294),i=n(16187),s=n(92814),d=n(51436);const c=e=>{const[t,n]=(0,o.useState)(null),[c,u]=(0,o.useState)(-1),[m,p]=(0,o.useState)(e.width),[f,g]=(0,o.useState)(150),h=(0,a.Z)(),[v,b]=(0,o.useState)(!1);o.useEffect((()=>(window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)})),[]);const w=o.useRef(null),k=()=>{if(!w.current)return;const e=w.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;g(t)}},E=()=>{if(!w.current)return;const t=.98*w.current.getBoundingClientRect().width;k();let n=t,a=!1;e.width&&e.scale?n=Math.min(e.width*e.scale,t):e.width?n=Math.min(e.width,t):e.scale&&(n=e.scale*t),e.minWidth&&n<e.minWidth&&(n=e.minWidth,a=!0),a!==v&&b(a),p(n)},N=e=>{const{scrollX:n,scrollY:a}=window;u(c+e>t?1:c+e<1?t:c+e),setTimeout((()=>{window.scrollTo(n,a)}),0)};return h?o.createElement("div",{className:(0,l.default)(r.pdfWrapper,v&&r.overflowing,(t<=1||void 0!==e.page)&&r.singlepage),ref:w},o.createElement("div",{style:{height:f+8+"px"}},o.createElement(i.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:a}=t;n(a),c<0&&u(e.page||1),E()},className:(0,l.default)(r.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},c>0&&o.createElement(i.T3,{pageNumber:c,width:m,onLoadSuccess:k}),!e.noDownload&&o.createElement("a",{href:e.file,className:(0,l.default)(r.download,"button","button--secondary","button--sm"),download:e.name},o.createElement(s.G,{icon:d.q7m})))),o.createElement("div",{className:(0,l.default)(r.controls)},t>1&&void 0===e.page&&o.createElement("div",{className:(0,l.default)("button-group")},o.createElement("button",{className:(0,l.default)("button","button--secondary","button--sm"),onClick:()=>{N(-1)}},o.createElement(s.G,{icon:d.nP8})),o.createElement("button",{className:(0,l.default)("button","button--secondary","button--sm"),disabled:!0},c||(t?1:"--")," / ",t||"--"),o.createElement("button",{className:(0,l.default)("button","button--secondary","button--sm"),onClick:()=>{N(1)}},o.createElement(s.G,{icon:d.JYN}))))):o.createElement("div",null,"Loading...")}},74322:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(86010);const l="loader_FEpR",o="badge_oWqf";var i=n(71217),s=n(92814),d=n(51436);const c=(0,i.Pi)((()=>a.createElement("div",{className:(0,r.default)(l)},a.createElement(s.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",o)},"Laden..."))))},75552:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(67294);const r="quillEditor_NxYB",l="quillAnswer_J46I",o="monospace_usc_",i="disableToolbar_bRdP";var s=n(86010),d=n(71217),c=n(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){const n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){const n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){const n=[];e.ol&&n.push({list:"ordered"}),e.ul&&n.push({list:"bullet"}),t.push(n)}if(e.formula||e.image){const n=[];e.formula&&n.push("formula"),e.image&&n.push("image"),t.push(n)}return e.code&&t.push(["code-block"]),t},f=(0,d.Pi)((e=>{const[t,d]=a.useState(!1),[f,g]=a.useState(!1),h=a.useRef(null),{model:v}=e,b=e=>{e.preventDefault()};a.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const a=[Promise.all([n.e(7762),n.e(8446),n.e(324),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(532),n.e(1940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(1008).then(n.bind(n,41008)),Promise.all([n.e(532),n.e(37)]).then(n.bind(n,50037)))),Promise.all(a).then((t=>{u=t[r["react-quill"]].default;const n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}n.register("modules/imageCompress",a),e()}))}((()=>{t&&(g(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&f&&v.loaded?a.createElement("div",{onFocus:()=>!t&&d(!0),className:(0,s.default)(r)},a.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,s.default)(l,e.monospace&&o,t?void 0:i),value:v.text||"",onChange:(t,n,a,r)=>{var l,o;l=t,void 0===o&&(o=0),!e.readonly&&v.canUpdate&&f&&v.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},85011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(73830);n(82593);const o={title:"2. QR Code",label:"2. QR Code"},i=void 0,s={unversionedId:"Codierung/Anwendungen/qr-code",id:"version-25h/Codierung/Anwendungen/qr-code",title:"2. QR Code",description:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",source:"@site/versioned_docs/version-25h/05-Codierung/04-Anwendungen/02-qr-code.md",sourceDirName:"05-Codierung/04-Anwendungen",slug:"/Codierung/Anwendungen/qr-code",permalink:"/25h/Codierung/Anwendungen/qr-code",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/04-Anwendungen/02-qr-code.md",tags:[],version:"25h",sidebarPosition:2,frontMatter:{title:"2. QR Code",label:"2. QR Code"},sidebar:"version-25h/sidebar",previous:{title:"1. Morsecode",permalink:"/25h/Codierung/Anwendungen/morsecode"},next:{title:"3. Fehlerkorrektur",permalink:"/25h/Codierung/Anwendungen/fehlerkorrektur"}},d={},c=[],u=(m="Figure",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const p={toc:c};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",src:n(28810).Z,width:"245",height:"245"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"auftrag"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Auftrag")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Recherchieren Sie in einer 2er bis 3er Gruppe"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"wie ein QR-Code funktioniert"),(0,r.kt)("li",{parentName:"ul"},"welche Elemente darin vorkommen"),(0,r.kt)("li",{parentName:"ul"},"wie viele Zeichen darin codiert werden k\xf6nnen"),(0,r.kt)("li",{parentName:"ul"},"weshalb der Inhalt immer noch lesbar ist, auch wenn ein Teil des QR-Codes abgedeckt ist"),(0,r.kt)("li",{parentName:"ul"},"weitere spannende Fakten, denen Sie begegnen")),(0,r.kt)("p",{parentName:"div"},"Halten Sie Ihre Erkenntnisse auf einem A3-Plakat fest."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{file:n(86055).Z,name:"qr-script.pdf",page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,r.kt)("p",null,"PDF-Quelle ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://www.swisseduc.ch/informatik/theoretische_informatik/qr_codes/docs/unterlagen_lernende.pdf"},"swisseduc.ch"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},86055:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/files/qr-script-b2f2e38d40832d1b0eef66035920fef4.pdf"},28810:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/piraten-c774f7ffb4fc03b0467ad7c932e6faeb.svg"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);