"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(a),p=r,b=m["".concat(s,".").concat(p)]||m[p]||u[p]||l;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82593:(e,t,a)=>{a.d(t,{x:()=>O,Z:()=>T});var n=a(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=a(86010),o=a(71217);const c=/--(?<klass>\w+)$/,s=e=>{let t,{value:a}=e,l=a;if(c.test(a)){const e=(e=>{if(c.test(e))return e.match(c).groups.klass})(a);t=r[e],l=""+a.replace(c,"")}return n.createElement("option",{value:a,className:t},l)};var i=a(92814),d=a(51436),u=a(68949),m=a(72389),p=a(21314),b=a(74322);const f=/--(?<klass>\w+)$/,h=e=>r[(e=>{if(f.test(e))return e.match(f).groups.klass})(e)],y=(0,o.Pi)((e=>{const t=(0,m.Z)(),[a,o]=n.useState("unchecked"),c=(0,p.oR)("documentStore").find(e.webKey),f=e=>{c.loaded&&(o("unchecked"),c.setData({value:e,type:"string"}))},y=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;o(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,u.U5)((()=>c.loaded),(e=>{e&&y(c.value)}))),[c]),n.useEffect((()=>{c.loaded&&y(c.value)}),[c,t]),t?c.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>f(e.target.value),style:{width:e.width},value:c.value,className:h(c.value),disabled:!c.loaded},e.select.map(((e,t)=>n.createElement(s,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>f(e.target.value),value:c.value,disabled:!c.loaded||c.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>y(c.value),className:(0,l.default)(r[a],r.checkButton)},n.createElement(i.G,{icon:(v=a,"correct"===v?d.f8k:"wrong"===v?d.nYk:d.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR");var v})),v=/--(?<klass>\w+)$/,g=e=>r[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],k=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((r,l)=>e.select?n.createElement("select",{key:l,onChange:e=>a(e.target.value,l),value:r,className:g(r),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(s,{value:e,key:t})))):n.createElement("input",{key:l,type:"text",onChange:e=>a(e.target.value,l),value:r,disabled:!t.loaded||t.readonly})))):n.createElement(b.Z,null)}));var x=a(87462),w=a(75552);const E=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,x.Z)({model:t},e))):n.createElement(b.Z,null)}));var B=a(47271);const N=(0,o.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var Z=a(97762);const O=e=>e.replace(/\s+/g,"").toUpperCase(),T=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(B.Z,null),a.loggedIn&&n.createElement(N,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(y,e),"array"===e.type&&n.createElement(k,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const r="noLoginAlert_HRfh";var l=a(39960),o=a(71217),c=a(21314);const s=(0,o.Pi)((()=>(0,c.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},25554:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const r={blackBox:"blackBox_ttgZ",box:"box_m7EE"};var l=a(86010),o=a(92814),c=a(51436);const s=e=>{const[t,a]=n.useState(!1),[s,i]=n.useState(),[d,u]=n.useState(0),[m,p]=n.useState(0);return n.useEffect((()=>{a(!0),u(Number.NaN),clearTimeout(s);const t=setTimeout((()=>{u(e.func(m)),a(!1)}),1e3);return i(t),()=>clearTimeout(t)}),[m]),n.createElement("div",{className:(0,l.default)(r.blackBox)},n.createElement("input",{type:"number",value:m,onChange:e=>{let t=m;try{t=Number.parseFloat(e.target.value)}catch{console.log("not valid number",e.target.value)}p(t)}}),n.createElement("div",{className:r.box},n.createElement(o.G,{icon:c.b7W,spin:t})),n.createElement("div",{className:r.out},n.createElement("span",null,Number.isNaN(d)||!Number.isFinite(d)?"-":d)))}},74322:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const l="loader_FEpR",o="badge_oWqf";var c=a(71217),s=a(92814),i=a(51436);const d=(0,c.Pi)((()=>n.createElement("div",{className:(0,r.default)(l)},n.createElement(s.G,{icon:i.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",o)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294);const r="quillEditor_NxYB",l="quillAnswer_J46I",o="monospace_usc_",c="disableToolbar_bRdP";var s=a(86010),i=a(71217),d=a(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},b=(0,i.Pi)((e=>{const[t,i]=n.useState(!1),[b,f]=n.useState(!1),h=n.useRef(null),{model:y}=e,v=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{u=t[r["react-quill"]].default;const a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(f(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return u&&b&&y.loaded?n.createElement("div",{onFocus:()=>!t&&i(!0),className:(0,s.default)(r)},n.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(l,e.monospace&&o,t?void 0:c),value:y.text||"",onChange:(t,a,n,r)=>{var l,o;l=t,void 0===o&&(o=0),!e.readonly&&y.canUpdate&&b&&y.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(d.Z,null)}))},30609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(25554),o=a(82593);const c={title:"Black Box",label:"Black Box"},s="Black Box",i={unversionedId:"Math/BlackBox/index",id:"version-25h/Math/BlackBox/index",title:"Black Box",description:"1.",source:"@site/versioned_docs/version-25h/Math/BlackBox/index.md",sourceDirName:"Math/BlackBox",slug:"/Math/BlackBox/",permalink:"/25h/Math/BlackBox/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/Math/BlackBox/index.md",tags:[],version:"25h",frontMatter:{title:"Black Box",label:"Black Box"},sidebar:"version-25h/sidebar",previous:{title:"Cookies",permalink:"/25h/Big-Data/cookies"},next:{title:"Taschenrechner",permalink:"/25h/Math/Taschenrechner/"}},d={},u=[],m={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"black-box"},"Black Box"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>e+2,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"0516f97b-ab1f-4c0d-9ff9-80d56bc913d2",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>1,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"01abf63a-29cb-4dde-aa65-1ec777a536d2",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>2*e+3,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"e8d3e834-cc62-4eec-99a8-74ef143ff8e8",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>1/e,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"3dde5599-b474-41f8-a884-be4dcd763318",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>3*e/4,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"e9e0f4e8-6a9a-4511-a5d4-2103e5d70cb9",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>e*e,mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"8cdeb200-2a29-499b-95b1-7deba5afe285",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(l.Z,{func:e=>2*(e+2),mdxType:"BlackBox"}),(0,r.kt)(o.Z,{type:"text",webKey:"4da7d5b8-bea5-4a86-bd43-c4d6b477fc0c",mdxType:"Answer"}))))}p.isMDXComponent=!0}}]);