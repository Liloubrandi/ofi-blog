"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),c=r,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),l=n(72389),s=n(67392),u=n(7094),o=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:c,values:h,groupId:g,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===c?c:null!=(t=null!=c?c:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,u.U)(),[z,S]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:B}=(0,o.o5)();if(null!=g){const e=N[g];null!=e&&e!==z&&b.some((t=>t.value===e))&&S(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==z&&(B(t),S(a),null!=g&&y(g,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":p},k)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>E.push(e),onKeyDown:A,onFocus:P,onClick:P},l,{className:(0,i.default)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function c(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},82593:(e,t,n)=>{n.d(t,{x:()=>P,Z:()=>A});var a=n(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var i=n(86010),l=n(71217);const s=/--(?<klass>\w+)$/,u=e=>{let t,{value:n}=e,i=n;if(s.test(n)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(n);t=r[e],i=""+n.replace(s,"")}return a.createElement("option",{value:n,className:t},i)};var o=n(92814),d=n(51436),m=n(68949),p=n(72389),c=n(21314),h=n(74322);const g=/--(?<klass>\w+)$/,k=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],f=(0,l.Pi)((e=>{const t=(0,p.Z)(),[n,l]=a.useState("unchecked"),s=(0,c.oR)("documentStore").find(e.webKey),g=e=>{s.loaded&&(l("unchecked"),s.setData({value:e,type:"string"}))},f=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const n=e.sanitizer?e.sanitizer:e=>e;l(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((()=>(0,m.U5)((()=>s.loaded),(e=>{e&&f(s.value)}))),[s]),a.useEffect((()=>{s.loaded&&f(s.value)}),[s,t]),t?s.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:s.value,className:k(s.value),disabled:!s.loaded},e.select.map(((e,t)=>a.createElement(u,{value:e,key:t})))):a.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:()=>f(s.value),className:(0,i.default)(r[n],r.checkButton)},a.createElement(o.G,{icon:(b=n,"correct"===b?d.f8k:"wrong"===b?d.nYk:d.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,v=e=>r[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],w=(0,l.Pi)((e=>{const t=(0,c.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);const a=[...t.data.value.slice(0,n),e,...t.data.value.slice(n+1)];t.setData({...t.data,value:a})};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map(((r,i)=>e.select?a.createElement("select",{key:i,onChange:e=>n(e.target.value,i),value:r,className:v(r),disabled:!t.loaded},e.select.map(((e,t)=>a.createElement(u,{value:e,key:t})))):a.createElement("input",{key:i,type:"text",onChange:e=>n(e.target.value,i),value:r,disabled:!t.loaded||t.readonly})))):a.createElement(h.Z,null)}));var N=n(87462),y=n(75552);const z=(0,l.Pi)((e=>{const t=(0,c.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(y.Z,(0,N.Z)({model:t},e))):a.createElement(h.Z,null)}));var S=n(47271);const E=(0,l.Pi)((e=>(0,c.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var B=n(97762);const P=e=>e.replace(/\s+/g,"").toUpperCase(),A=(0,l.Pi)((e=>{const t=(0,c.oR)("documentStore"),n=(0,c.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,c.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||B.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(E,{webKey:e.webKey}),"text"===e.type&&a.createElement(z,e),"string"===e.type&&a.createElement(f,e),"array"===e.type&&a.createElement(w,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},47271:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294);const r="noLoginAlert_HRfh";var i=n(39960),l=n(71217),s=n(21314);const u=(0,l.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))))},74322:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const i="loader_FEpR",l="badge_oWqf";var s=n(71217),u=n(92814),o=n(51436);const d=(0,s.Pi)((()=>a.createElement("div",{className:(0,r.default)(i)},a.createElement(u.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))))},75552:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294);const r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP";var u=n(86010),o=n(71217),d=n(74322),m=void 0;const p=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],c=e=>{const t=[];if(e.bold||e.italic||e.underline){const n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){const n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){const n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){const n=[];e.ol&&n.push({list:"ordered"}),e.ul&&n.push({list:"bullet"}),t.push(n)}if(e.formula||e.image){const n=[];e.formula&&n.push("formula"),e.image&&n.push("image"),t.push(n)}return e.code&&t.push(["code-block"]),t},h=(0,o.Pi)((e=>{const[t,o]=a.useState(!1),[h,g]=a.useState(!1),k=a.useRef(null),{model:f}=e,b=e=>{e.preventDefault()};a.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();const a=[Promise.all([n.e(7762),n.e(8446),n.e(324),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(532),n.e(1940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(1008).then(n.bind(n,41008)),Promise.all([n.e(532),n.e(37)]).then(n.bind(n,50037)))),Promise.all(a).then((t=>{m=t[r["react-quill"]].default;const n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}n.register("modules/imageCompress",a),e()}))}((()=>{t&&(g(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return m&&h&&f.loaded?a.createElement("div",{onFocus:()=>!t&&o(!0),className:(0,u.default)(r)},a.createElement(m,{ref:k,theme:"snow",readOnly:e.readonly||f.readonly,className:(0,u.default)(i,e.monospace&&l,t?void 0:s),value:f.text||"",onChange:(t,n,a,r)=>{var i,l;i=t,void 0===l&&(l=0),!e.readonly&&f.canUpdate&&h&&f.setText(i)},modules:{toolbar:e.toolbar?c(e.toolbar):[...p,...c(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},8658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),l=n(85162),s=n(82593);const u={title:"1. Aufgaben eines Betriebssystems"},o="1. Aufgaben eines Betriebssystems",d={unversionedId:"Computer/os/aufgaben",id:"Computer/os/aufgaben",title:"1. Aufgaben eines Betriebssystems",description:"Was ist ein Betriebssystem?",source:"@site/docs/Computer/04-os/01-aufgaben.md",sourceDirName:"Computer/04-os",slug:"/Computer/os/aufgaben",permalink:"/Computer/os/aufgaben",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/04-os/01-aufgaben.md",tags:[],version:"current",lastUpdatedAt:1647334399,formattedLastUpdatedAt:"15.3.2022",sidebarPosition:1,frontMatter:{title:"1. Aufgaben eines Betriebssystems"},sidebar:"sidebar",previous:{title:"4. Betriebssystem",permalink:"/Computer/os/"},next:{title:"2. Betriebssysteme",permalink:"/Computer/os/betriesbssysteme"}},m={},p=[{value:"Was ist ein Betriebssystem?",id:"was-ist-ein-betriebssystem",level:2},{value:"Aufgaben eines Betriebssystems",id:"aufgaben-eines-betriebssystems",level:2},{value:"Aufstarten des Computers ",id:"aufstarten-des-computers-",level:2},{value:"Betriebssysteme, Puzzle",id:"betriebssysteme-puzzle",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=c("Figure"),g=c("SourceRef"),k={toc:p};function f(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-aufgaben-eines-betriebssystems"},"1. Aufgaben eines Betriebssystems"),(0,r.kt)("h2",{id:"was-ist-ein-betriebssystem"},"Was ist ein Betriebssystem?"),(0,r.kt)("p",null,"Ein ",(0,r.kt)("strong",{parentName:"p"},"Betriebssystem")," (engl. ",(0,r.kt)("em",{parentName:"p"},"operating system"),", kurz ",(0,r.kt)("em",{parentName:"p"},"OS"),") ist eine Sammlung von Softwarekomponenten, die das Nutzen von Anwenderprogrammen erst m\xf6glich macht."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/GjNp0bBrjmU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("h2",{id:"aufgaben-eines-betriebssystems"},"Aufgaben eines Betriebssystems"),(0,r.kt)("p",null,"Ein Betriebssystem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"erm\xf6glicht ",(0,r.kt)("strong",{parentName:"li"},"Benutzerinteraktion")," und \xfcbernimmt die ",(0,r.kt)("strong",{parentName:"li"},"Benutzerverwaltung"),","),(0,r.kt)("li",{parentName:"ul"},"verwaltet die ",(0,r.kt)("strong",{parentName:"li"},"Ressourcen")," (also die Hardware) und den Zugriff darauf,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Arbeits- und Festplatten",(0,r.kt)("strong",{parentName:"li"},"speicher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prozessorzeit")," (welches Programm zu welchem Zeitpunkt wie lange ausgef\xfchrt wird)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"angeschlossene Ger\xe4te")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startet")," und ",(0,r.kt)("strong",{parentName:"li"},"unterbricht")," Anwendungsprogramme und"),(0,r.kt)("li",{parentName:"ul"},"stellt ",(0,r.kt)("strong",{parentName:"li"},"Dienstprogramme")," zur Verf\xfcgung (z.B. zur Benutzer- oder Dateiverwaltung).")),(0,r.kt)("p",null,"Dies ist auch n\xf6tig, denn damit mehrere Programme gleichzeitig verwendet werden k\xf6nnen, muss jedes Programm immer wieder an die Reihe kommen und ein St\xfcckchen weiterarbeiten d\xfcrfen. Das Betriebssystem sorgt daf\xfcr, dass dies fair geschieht."),(0,r.kt)(h,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Zusammenhang Benutzer, Software, Hardware",src:n(86464).Z,width:"250",height:"370"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Zusammenhang Benutzer, Software, Hardware",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(g,{parentName:"figcaption",bib:{author:"Golftheman",author_uri:"",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Operating_system_placement-de.svg"},mdxType:"SourceRef"}))),(0,r.kt)("h2",{id:"aufstarten-des-computers-"},"Aufstarten des Computers ",(0,r.kt)("sup",{parentName:"h2",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("p",null,"Wenn der Computer eingeschaltet wird, so m\xfcssen zuerst die Treiberprogramme und das Betriebssystem von der Harddisk oder der SSD in den Arbeitsspeicher geladen werden. Das heisst, die Programmcodes werden von der Harddisk in den Arbeitsspeicher kopiert. Erst dann k\xf6nnen diese vom Prozessor ausgef\xfchrt werden und der Computer ist bereit, um weitere Applikationen zu starten. Dazu dient das ",(0,r.kt)("strong",{parentName:"p"},"BIOS")," (Basic Input Output System) oder ",(0,r.kt)("strong",{parentName:"p"},"UEFI")," (Universal Extendable Firmware Interface). Beides sind auch wieder Programme. Sie geh\xf6ren aber nicht zum Betriebssystem, sondern sind selber ein eigenes, vom Hersteller des Computers auf die Hardware abgestimmtes Betriebssystem. Den Vorgang des Aufstartens wird im Fachjargon als ",(0,r.kt)("strong",{parentName:"p"},"booten")," bezeichnet."),(0,r.kt)(h,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Pull Yourself Up By Your Bootstraps",src:n(84004).Z,width:"1434",height:"718"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Pull Yourself Up By Your Bootstraps",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(g,{parentName:"figcaption",bib:{author:"Isabella Carapella",source:"https://www.huffpost.com/entry/pull-yourself-up-by-your-bootstraps-nonsense_n_5b1ed024e4b0bbb7a0e037d4",licence:"Unknown",licence_url:"https://www.huffpost.com/",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Der Begriff kommt von der englischen Redewendung ",(0,r.kt)("em",{parentName:"p"},"\xabsich an den eigenen Stiefelriemen (bootstraps) \xfcber den Zaun ziehen\xbb")," und meint einfach, dass man sich selbst auf (scheinbar) unm\xf6gliche Art aus einer Zwickm\xfchle heraushilft.\nDie Zwickm\xfchle beim Start des Computers besteht darin \xabwie bringe ich die Programme in den Arbeitsspeicher, wenn ich dazu ein Programm brauche, dass bereits im Arbeitsspeicher sein muss?\xbb Beim Computer hilft man sich so, dass ein Teil des Arbeitsspeichers aus speziellen Speicherzellen besteht, welche Ihren Inhalt auch nach dem Ausschalten des Computers nicht verlieren. In diesem Teil des Arbeitsspeichers liegt dann das Programm, welches der Computer nach dem Einschalten als erstes ausf\xfchrt. Dieses Programm l\xe4dt das BIOS / UEFI in den Arbeitsspeicher, welches seinerseits das Betriebssystem l\xe4dt und startet."),(0,r.kt)("h2",{id:"betriebssysteme-puzzle"},"Betriebssysteme, Puzzle"),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"puzzle"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Puzzle")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Jede Expertin und jeder Experte ist nach der Expertenrunde bereit, das zugeteilte Thema selbst\xe4ndig in der Unterrichtsrunde einer Gruppe von vier bis f\xfcnf Mitsch\xfcler:innen w\xe4hrend 10 Minuten zu vermitteln."),(0,r.kt)("h3",{parentName:"div",id:"auftrag"},"Auftrag"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Lesen und Bearbeiten")," Sie die Texte und Inhalte gem\xe4ss den Angaben zu Ihrem Thema."),(0,r.kt)("li",{parentName:"ol"},"Diskutieren Sie in der Gruppe, welches Lernziel sp\xe4ter in der Unterrichtsrunde erreicht werden soll. Was sollen Ihre Kolleginnen/Kollegen wissen, k\xf6nnen, verstehen?"),(0,r.kt)("li",{parentName:"ol"},"Erstellen Sie in der Expertenrunde eine ",(0,r.kt)("strong",{parentName:"li"},"kleine Pr\xe4sentation")," (2 bis 3 Folien maximal), welche Sie dann in der Unterrichtsrunde benutzen, um Ihren Kolleginnen und Kollegen Ihr Thema zu vermitteln."),(0,r.kt)("li",{parentName:"ol"},"Formulieren Sie eine ",(0,r.kt)("strong",{parentName:"li"},"Testfrage"),", um in der Unterrichtsrunde zu \xfcberpr\xfcfen, ob das Lernziel erreicht wurde."),(0,r.kt)("li",{parentName:"ol"},"Bereiten Sie sich darauf vor, in der Unterrichtsrunde Ihren Kolleg:innen direkt auf dem Notebook das ",(0,r.kt)("strong",{parentName:"li"},"Verwaltungsprogramm"),", welches zu Ihrem Thema geh\xf6rt, zu demonstrieren. Im Idealfall werden Ihre Kolleg:innen unter Ihrer Anleitung das Programm auf den eigenen Notebooks \xf6ffnen.")),(0,r.kt)(i.Z,{defaultValue:"p-1",values:[{label:"Gruppe 1",value:"p-1"},{label:"Gruppe 2",value:"p-2"},{label:"Gruppe 3",value:"p-3"},{label:"Gruppe 4",value:"p-4"},{label:"Gruppe 5",value:"p-5"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"p-1",mdxType:"TabItem"},(0,r.kt)("h3",{parentName:"div",id:"aufgabe"},"Aufgabe"),(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,r.kt)("strong",{parentName:"p"},"Dateisystem"),"."),(0,r.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(12886).Z},"Dateisystem.pdf"),", Abschnitte 5.1 und 5.3 (bis und mit erster Absatz nach Abbildung)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/HDD-oder-SSD-Was-ist-besser-4121739.html"},"HDD oder SSD"),", Abschnitte ",(0,r.kt)("em",{parentName:"li"},"HDD")," und ",(0,r.kt)("em",{parentName:"li"},"SSD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Computerverwaltung-in-Windows-10-oeffnen-so-geht-s-4243814.html"},"Computerverwaltung Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/de-ch/guide/disk-utility/dskutl1029/mac"},"Computerverwaltung Mac"))),(0,r.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Laufwerk?"),(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Block in Zusammenhang mit Laufwerken?"),(0,r.kt)("li",{parentName:"ul"},"Welche Unterschiede gibt es zwischen Harddisks und Solid-State-Disks?"),(0,r.kt)("li",{parentName:"ul"},"Was ist schliesslich die Aufgabe des Dateisystems?")),(0,r.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme (siehe auch Links unten):"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Windows: Computerverwaltung, Datentr\xe4gerverwaltung"),(0,r.kt)("li",{parentName:"ul"},"Mac: Festplattendienstprogramm")),(0,r.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,r.kt)(s.Z,{type:"text",webKey:"eacf059b-8b7f-4e89-9f47-2a8ff8772104",mdxType:"Answer"})),(0,r.kt)(l.Z,{value:"p-2",mdxType:"TabItem"},(0,r.kt)("h3",{parentName:"div",id:"aufgabe-1"},"Aufgabe"),(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,r.kt)("strong",{parentName:"p"},"Prozess- und Speicherverwaltung"),"."),(0,r.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(57817).Z},"Grundbegriffe.pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(71475).Z},"Multizser-Multitasking.pdf")," Abschnitt 1.4.3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sachsen.schule/~gdb/daten_verarbeiten/BS/Multitasking.html"},"Multitasking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/server/konfiguration/task-manager-aufrufen/"},"Taskmanager - Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/de-de/guide/activity-monitor/actmntr1001/mac"},"Aktivit\xe4tsanzeige - Mac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li"},(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:n(91589).Z,type:"audio/mpeg",style:{}}))))),(0,r.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Prozess?"),(0,r.kt)("li",{parentName:"ul"},"Welche Ressourcen braucht ein Prozess zu seiner Ausf\xfchrung?"),(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter Singletasking und unter Multitasking?"),(0,r.kt)("li",{parentName:"ul"},"Was ist der Unterschied zwischen kooperativem und pr\xe4emptivem Multitasking? Vielleicht suchen Sie nach einer eigenen Metapher?"),(0,r.kt)("li",{parentName:"ul"},"Was ist schliesslich die Aufgabe der Prozess- und Speicherverwaltung auf einen Punkt gebracht?")),(0,r.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Windows: Taskmanager"),(0,r.kt)("li",{parentName:"ul"},"Mac: Aktivit\xe4tsanzeige")),(0,r.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,r.kt)(s.Z,{type:"text",webKey:"02c5ed5b-fd34-45ba-9232-7315bbdbf757",mdxType:"Answer"})),(0,r.kt)(l.Z,{value:"p-3",mdxType:"TabItem"},(0,r.kt)("h3",{parentName:"div",id:"aufgabe-2"},"Aufgabe"),(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,r.kt)("strong",{parentName:"p"},"Benutzerverwaltung"),"."),(0,r.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(64104).Z},"Multiuser.pdf")," 1.4.1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./Material/benutzerverwaltung"},"Benutzerverwaltung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Computerverwaltung-in-Windows-10-oeffnen-so-geht-s-4243814.html"},"Windows: Computerverwaltung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Windows-10-Neuen-Benutzer-anlegen-4058638.html#benutzer_anlegen_passwort"},"Windows: Benutzer:in Anlegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.maclife.de/ratgeber/benutzer-gruppen-unter-macos-sierra-einrichten-konfigurieren-gehts-10088133.html"},"Mac: Benutzerverwaltung"))),(0,r.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Multiuser-System?"),(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Benutzerkonto auf einem Computer?"),(0,r.kt)("li",{parentName:"ul"},"Wie h\xe4ngen Benutzerkonten und Dateisystem zusammen?"),(0,r.kt)("li",{parentName:"ul"},"Was ist der Unterschied zwischen einem Adminstratorkonto und einem normalen Benutzerkonto?")),(0,r.kt)("p",{parentName:"div"},"Erkl\xe4ren Sie dann m\xf6glichst anschaulich die Aufgabe der Benutzerverwaltung."),(0,r.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Windows: Computerverwaltung, Lokale Benutzer und Gruppen, Benutzer einrichten"),(0,r.kt)("li",{parentName:"ul"},"Mac: Benutzerverwaltung")),(0,r.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,r.kt)(s.Z,{type:"text",webKey:"0e0f3b69-29e6-4519-8f7f-d2ba1a86515c",mdxType:"Answer"})),(0,r.kt)(l.Z,{value:"p-4",mdxType:"TabItem"},(0,r.kt)("h3",{parentName:"div",id:"aufgabe-3"},"Aufgabe"),(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema Ger\xe4teverwaltung und Treiber."),(0,r.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen (Jeweils nur die Erkl\xe4rungen und Diagramme ohne die Aufgaben):"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Rolle_der_Ger%C3%A4teverwaltung"},"Rolle der Ger\xe4teverwaltung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Abh%C3%A4ngig_und_gleichzeitig_unabh%C3%A4ngig"},"Aufteilung der Ger\xe4teverwaltung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Ger%C3%A4tetreiber"},"Ger\xe4tetreiber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Ger%C3%A4teklassen"},"Ger\xe4teklasse und Ger\xe4te")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Geraetemanager-in-Windows-10-starten-4567818.html"},"Windows: Ger\xe4temanager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/de-de/HT203001"},"Mac: Systeminformationen"))),(0,r.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Ger\xe4t in Zusammenhang mit Betriebssystemen?"),(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Treiber?"),(0,r.kt)("li",{parentName:"ul"},"Was muss ich tun, wenn ich eine neue Grafikkarte in meinen Computer einbauen, damit diese auch gebraucht werden kann?"),(0,r.kt)("li",{parentName:"ul"},"Was ist also die Aufgabe der Ger\xe4teverwaltung und der Treiber auf den Punkt gebracht?")),(0,r.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme (siehe auch Links unten):"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Windows: Ger\xe4temanager"),(0,r.kt)("li",{parentName:"ul"},"Mac: Systeminformationen")),(0,r.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen? "),(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,r.kt)(s.Z,{type:"text",webKey:"f6dffe1e-3365-4df5-b89b-8df26e1b482f",mdxType:"Answer"})),(0,r.kt)(l.Z,{value:"p-5",mdxType:"TabItem"},(0,r.kt)("h3",{parentName:"div",id:"aufgabe-4"},"Aufgabe"),(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema Benutzeroberfl\xe4che."),(0,r.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/websites/webdesign/grafische-benutzeroberflaeche-alles-fuer-ein-gutes-ui/"},"Arten der Benutzeroberfl\xe4che")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Terminal_(Computer)"},"Terminal, Konsole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Shell_(Betriebssystem)"},"Shell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/websites/web-entwicklung/was-ist-ein-gui/"},"Was ist ein GUI?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Grafische_Benutzeroberfl%C3%A4che"},"GUI Entwicklung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/timapplecodes/linux-commands-that-work-in-powershell-by-default-17gd"},"Supported Linux-Commands"))),(0,r.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Was versteht man unter einem Command Line Interface (CLI), einer Konsole, einem Terminal, einer Shell?"),(0,r.kt)("li",{parentName:"ul"},"Wie kommuniziert man mit einem Computer \xfcber eine Konsole oder ein Terminal?"),(0,r.kt)("li",{parentName:"ul"},"Wann, wo und vom wem wurden die ersten grafischen Benutzeroberfl\xe4chen entwickelt?"),(0,r.kt)("li",{parentName:"ul"},"Wie haben fr\xfchere grafischen Benutzeroberfl\xe4chen ausgesehen?")),(0,r.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Windows: Powershell und Explorer"),(0,r.kt)("li",{parentName:"ul"},"Mac: Terminal und Finder")),(0,r.kt)("p",{parentName:"div"},"Probieren Sie die Befehle ",(0,r.kt)("inlineCode",{parentName:"p"},"pwd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cd <Ordnername>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tree")," aus (siehe auch letzer Link oben)."),(0,r.kt)("p",{parentName:"div"},"Zeigen Sie, wie man den Inhalt eines Ordners sowohl in der grafischen Benutzeroberfl\xe4che, als auch via Shell anzeigen kann."),(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,r.kt)(s.Z,{type:"text",webKey:"e043e6ef-09c3-42ac-911b-47061c72c993",mdxType:"Answer"}))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: A. Scheidegger",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},12886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Dateisystem-bb148290f93da9cabb1e240d2dfe1397.pdf"},57817:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Grundbegriffe-7f6c98008e55a2d9138ae39ad20bd192.pdf"},71475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Multiuser-Multitasking-a960d251c5ee9e35feb902a3df61b9e3.pdf"},64104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Multiuser-a960d251c5ee9e35feb902a3df61b9e3.pdf"},91589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/record-scheidegger-8532d7e71057ee49fb7e2e71e9b1e39a.m4a"},84004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-bootstrapping-a425a3381cc43598779892d65ba2569f.png"},86464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-os-layers-38881451e2815eda07a093157c093a5d.svg"}}]);