"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[491],{82593:(e,t,a)=>{a.d(t,{x:()=>Z,Z:()=>x});var n=a(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=a(86010),i=a(71217);const o=/--(?<klass>\w+)$/,c=e=>{let t,{value:a}=e,l=a;if(o.test(a)){const e=(e=>{if(o.test(e))return e.match(o).groups.klass})(a);t=r[e],l=""+a.replace(o,"")}return n.createElement("option",{value:a,className:t},l)};var s=a(92814),d=a(51436),u=a(68949),m=a(72389),p=a(21314),f=a(74322);const g=/--(?<klass>\w+)$/,h=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],v=(0,i.Pi)((e=>{const t=(0,m.Z)(),[a,i]=n.useState("unchecked"),o=(0,p.oR)("documentStore").find(e.webKey),g=e=>{o.loaded&&(i("unchecked"),o.setData({value:e,type:"string"}))},v=t=>{if(e.checker)return i(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;i(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,u.U5)((()=>o.loaded),(e=>{e&&v(o.value)}))),[o]),n.useEffect((()=>{o.loaded&&v(o.value)}),[o,t]),t?o.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:o.value,className:h(o.value),disabled:!o.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:o.value,disabled:!o.loaded||o.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>v(o.value),className:(0,l.default)(r[a],r.checkButton)},n.createElement(s.G,{icon:(b=a,"correct"===b?d.f8k:"wrong"===b?d.nYk:d.sph)}))):n.createElement(f.Z,null):n.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,k=e=>r[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],N=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((r,l)=>e.select?n.createElement("select",{key:l,onChange:e=>a(e.target.value,l),value:r,className:k(r),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{key:l,type:"text",onChange:e=>a(e.target.value,l),value:r,disabled:!t.loaded||t.readonly})))):n.createElement(f.Z,null)}));var E=a(87462),y=a(75552);const w=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(y.Z,(0,E.Z)({model:t},e))):n.createElement(f.Z,null)}));var _=a(47271);const C=(0,i.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var S=a(97762);const Z=e=>e.replace(/\s+/g,"").toUpperCase(),x=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(_.Z,null),a.loggedIn&&n.createElement(C,{webKey:e.webKey}),"text"===e.type&&n.createElement(w,e),"string"===e.type&&n.createElement(v,e),"array"===e.type&&n.createElement(N,e)):n.createElement(f.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294);const r="noLoginAlert_HRfh";var l=a(39960),i=a(71217),o=a(21314);const c=(0,i.Pi)((()=>(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},69014:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(86010),r=a(67294);const l={bit:"bit_TKsr",on:"on_Gc1_",charHistory:"charHistory__gY3",cable:"cable_RfeZ",off:"off_hKYl",bitContainer:"bitContainer_bA2H",svgContainer:"svgContainer_ZfG3",out:"out_fofC",sentBits:"sentBits_FAYg",first:"first_VPza",processed:"processed_up44",octet:"octet_Y1qi"};var i=a(97566),o=a(76030);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const s=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",c({viewBox:"0 0 500 450",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,r.createElement("path",{style:{fill:"transparent",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:4,stroke:"#000",paintOrder:"fill"},d:"M434.055 80.455c.339.059-152.586-1.51-196.471-.273-82.386 2.322-89.439 22.004-100.53 42.758-14.311 26.781 5.825 58.009 47.186 65.986 59.245 11.426.375.639 58.91 10.895 109.13 19.12.575.236 109.833 18.975 68.99 11.833 77.441 107.219 35.431 144.445-33.505 29.691-69.634 58.914-191.461 59.425-.349.001-88.743-.963-89.26-1.683"}))},d=e=>{e&&e.forEach((e=>{e&&o.Z.remove(e)}))},u=e=>{e.forEach((e=>{e&&e.pause()}))},m=e=>{e.forEach((e=>{e&&e.play()}))},p=["button","button--sm","button--primary","button--outline"],f=e=>{const t=e.match(/(?<control>1{0,4}0)/);return t?t.groups.control.length:0},g=()=>{const[e,t]=r.useState("idle"),a=r.useRef(null),[c,g]=r.useState("latin1"),h=r.useRef([]),v=r.useRef(null),[b,k]=r.useState([]),[N,E]=r.useState("01010010 01100101 01110100 01101111"),[y,w]=r.useState([]),[_,C]=r.useState({top:0,left:0}),[S,Z]=r.useState(""),[x,z]=r.useState([]),[L,T]=r.useState(-1),[U,B]=r.useState(null),[F,P]=r.useState(!1);return r.useEffect((()=>{E("latin1"===c?"01010010 01100101 01110100 01101111":"11100010 10101101 10010000")}),[c]),r.useEffect((()=>{if(a.current!==e)switch(a.current=e,U&&"running"!==e&&clearTimeout(U),e){case"pause":u(b);break;case"continue":m(b),t("running");break;case"running":F&&(P(!1),z([]));break;case"stop":d(h.current),w([]),Z(""),z([]),t("idle");break;case"start":d(h.current);const e=(e=>{const t=[];let a=e.replace(/\s+/g,"");for(a.length%8!=0&&(a=a.padStart(a.length+a.length%8,"0"));a.length>0;)t.push(a.slice(0,8)),a=a.slice(8);return t})(N);E(e.join(" ")),w([]),Z(""),z([]),setTimeout((()=>{Z(e.join(""))}),0),t("running")}}),[e,U,F]),r.useEffect((()=>{if(v.current){const e=v.current.querySelector("svg>circle.cable_svg__binDecoderOut");if(e){const t=e.getBoundingClientRect(),a=v.current.getBoundingClientRect();C({left:t.left-a.left,top:t.top-a.top})}}}),[]),r.useEffect((()=>{u(b),d(h.current),w([]),Z(""),z([]),t("idle"),U&&clearTimeout(U)}),[c]),r.useEffect((()=>{if(h.current&&v.current){const e=v.current.querySelector("svg>path"),t=o.Z.path(e);T(-1);const a=h.current.map(((e,a)=>{if(!e)return;return(0,o.Z)({targets:[e],translateX:t("x"),translateY:t("y"),rotate:t("angle"),easing:"linear",duration:4e3,delay:90*a+100*Math.floor(a/8),loop:!1,complete:e=>{T(a)}})}));k(a)}}),[h,v,S]),r.useEffect((()=>{const e=S.substr(L,1);if(!e)return;const a=[...x];h.current&&h.current[L]&&(h.current[L].style.display="none");const n=x.length>0&&(L+1)%8==0;let r=n;if("latin1"===c)a.push(e);else{const t=8*Math.floor(L/8),n=f(S.substr(t,8)),l=f(S.substr(t+8,8));r=r&&(1===n||2!==l),L%8>=n&&a.push(e)}if(z(a),r){u(b);const e=a.join(""),t=parseInt(e,2),n={bin:e,ord:t,char:String.fromCodePoint(t)};w([...y,n]),P(!0),B(setTimeout((()=>{z([]),m(b.slice(L)),P(!1)}),1e3))}else n&&(u(b),B(setTimeout((()=>{m(b.slice(L))}),1e3)));L===b.length-1&&t("idle")}),[L,c]),r.createElement("div",{className:(0,n.default)("hero","shadow--lw",i.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Bin Decoder"),r.createElement("h4",null,"Modus"),r.createElement("div",{className:(0,n.default)("buttongroup",l.modes)},r.createElement("button",{className:(0,n.default)(...p,"latin1"===c&&"button--active"),onClick:()=>g("latin1")},"Latin1"),r.createElement("button",{className:(0,n.default)(...p,"utf8"===c&&"button--active"),onClick:()=>g("utf8")},"UTF-8")),r.createElement("div",{className:l.inputContainer},r.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,n.default)(i.Z.input),value:N,onChange:e=>E(e.target.value.replace(/[^01\s]/g,"1")),rows:3}),r.createElement("div",{className:(0,n.default)("buttongroup",l.modes)},["start","idle"].includes(e)?r.createElement("button",{className:(0,n.default)(...p),onClick:()=>t("start")},"Start"):r.createElement(r.Fragment,null,r.createElement("button",{className:(0,n.default)(...p),onClick:()=>t("running"===e?"pause":"continue")},"running"===e?"Pause":"Fortsetzen"),r.createElement("button",{className:(0,n.default)(...p),onClick:()=>t("stop")},"Stop"))),r.createElement("div",{className:(0,n.default)(l.sentBits)},S.split("").map(((e,t)=>{const a=t>0&&t%8==0;return r.createElement("div",{className:(0,n.default)(l.bit,L>=t&&l.processed,a&&l.first,"1"===e?l.on:l.off),key:t},e)}))),r.createElement("div",null,S.split("").map(((e,t)=>r.createElement("div",{key:t,ref:e=>h.current[t]=e,className:(0,n.default)(l.bitContainer)},r.createElement("div",{className:(0,n.default)(l.bit,"1"===e?l.on:l.off)},r.createElement("span",{className:(0,n.default)(l.text)},e))))),r.createElement("div",{ref:v,className:(0,n.default)(l.svgContainer)},r.createElement(s,{className:(0,n.default)(l.cable)}),r.createElement("div",{className:(0,n.default)(l.out),style:{top:_.top,left:_.left}},r.createElement("textarea",{value:y.map((e=>e.char)).join(""),disabled:!0}),r.createElement("div",{className:(0,n.default)(l.octet)},x.map(((e,t)=>r.createElement("div",{className:(0,n.default)(l.bit,"1"===e&&l.on,"0"===e&&l.off),key:t},e)))),r.createElement("div",{className:(0,n.default)(l.charHistory)},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Chr"),r.createElement("th",null,"Dec"),r.createElement("th",null,"Bin"))),r.createElement("tbody",null,y.slice().reverse().map(((e,t)=>r.createElement("tr",{key:t},r.createElement("td",null,e.char),r.createElement("td",null,e.ord),r.createElement("td",null,e.bin)))))))))))))}},74322:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const l="loader_FEpR",i="badge_oWqf";var o=a(71217),c=a(92814),s=a(51436);const d=(0,o.Pi)((()=>n.createElement("div",{className:(0,r.default)(l)},n.createElement(c.G,{icon:s.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294);const r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",o="disableToolbar_bRdP";var c=a(86010),s=a(71217),d=a(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((e=>{const[t,s]=n.useState(!1),[f,g]=n.useState(!1),h=n.useRef(null),{model:v}=e,b=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{u=t[r["react-quill"]].default;const a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(g(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&f&&v.loaded?n.createElement("div",{onFocus:()=>!t&&s(!0),className:(0,c.default)(r)},n.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,c.default)(l,e.monospace&&i,t?void 0:o),value:v.text||"",onChange:(t,a,n,r)=>{var l,i;l=t,void 0===i&&(i=0),!e.readonly&&v.canUpdate&&f&&v.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(d.Z,null)}))},16977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(82593),i=a(69014);const o={title:"6. \xdcbungen"},c="\xdcbungen UTF-8",s={unversionedId:"Codierung/Zeichencodierung/Uebungen",id:"version-25h/Codierung/Zeichencodierung/Uebungen",title:"6. \xdcbungen",description:"Wie viele Zeichen sind in folgender bit-Squenz codiert?",source:"@site/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/06-Uebungen.md",sourceDirName:"05-Codierung/01-Zeichencodierung",slug:"/Codierung/Zeichencodierung/Uebungen",permalink:"/25h/Codierung/Zeichencodierung/Uebungen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/06-Uebungen.md",tags:[],version:"25h",sidebarPosition:6,frontMatter:{title:"6. \xdcbungen"},sidebar:"version-25h/sidebar",previous:{title:"5. UTF-8",permalink:"/25h/Codierung/Zeichencodierung/UTF8"},next:{title:"7. Textcodierung",permalink:"/25h/Codierung/Zeichencodierung/Textcodierung"}},d={},u=[],m={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\xfcbungen-utf-8"},"\xdcbungen UTF-8"),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"1-wie-viele-zeichen"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Wie viele Zeichen?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wie viele Zeichen sind in folgender bit-Squenz codiert?"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"11100010 10011101 10000000 01000110 11010011 10111111 11110110 10011010 10101010 10001111 00010010\n")),(0,r.kt)(l.Z,{type:"string",webKey:"e2835c91-5519-4aaa-b28f-08d83e37c5e6",solution:"5",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"2-utf-8-decodieren"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. UTF-8 Decodieren")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"11000010 10011001\n")),(0,r.kt)(l.Z,{type:"string",webKey:"4ced8d67-dfd8-4d8b-98c8-691303bc8b34",solution:"153",mdxType:"Answer"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"11100001 10000000 10001111\n")),(0,r.kt)(l.Z,{type:"string",webKey:"a5def7c0-be31-442a-ad2b-b48acc9fce13",solution:"4111",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"3-utf-8-codieren"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. UTF-8 Codieren")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Codieren Sie folgende bit-Sequenz zu UTF-8:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"1100 10010101 10010110\n")),(0,r.kt)(l.Z,{type:"string",webKey:"5d40fc8e-0755-4e83-b76d-dc8c975c6b18",solution:"11110011 10001001 10010110 10010110",sanitizer:e=>e.replaceAll(/[^\d]/g,""),mdxType:"Answer"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"Codieren Sie die Zahl ",(0,r.kt)("inlineCode",{parentName:"p"},"260")," zu UTF-8:"),(0,r.kt)(l.Z,{type:"string",webKey:"c324c22e-e5bc-4da4-b474-f7d78b49fa75",solution:"11000100 10000100",sanitizer:e=>e.replaceAll(/[^\d]/g,""),mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"4-utf-8-emojis"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. UTF-8 Emojis")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Codieren Sie drei Weihnachts-Emojis zu UTF-8:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Verwenden Sie Python, um die Ordnungszahl der Emojis herauszufinden."),(0,r.kt)("li",{parentName:"ol"},"Wandeln Sie die Ordnungszahlen ins Bin\xe4re um (auch hier darf Python verwendet werden)"),(0,r.kt)("li",{parentName:"ol"},"Codieren Sie die Bin\xe4rzeichen-Kette zu UTF-8 und halten Sie das Resultat fest."),(0,r.kt)("li",{parentName:"ol"},"Probieren Sie Ihre L\xf6sung im UTF-8 Decodier-Modus")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=fdc14c44-1f31-4860-a5aa-45d6f388e74b",live_py:!0,id:"fdc14c44-1f31-4860-a5aa-45d6f388e74b"},"")),(0,r.kt)(l.Z,{type:"text",webKey:"96fc016d-d9d2-4956-919b-ecbc2c31d1f2",default:"\ud83c\udf32",mdxType:"Answer"}),(0,r.kt)(i.Z,{mdxType:"BinDecoder"}))))}p.isMDXComponent=!0},97566:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}}}]);