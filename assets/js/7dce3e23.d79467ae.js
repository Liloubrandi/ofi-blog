"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:(e,t,n)=>{n.d(t,{x:()=>S,Z:()=>_});var r=n(67294);const a={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var i=n(86010),l=n(71217);const o=/--(?<klass>\w+)$/,s=e=>{let t,{value:n}=e,i=n;if(o.test(n)){const e=(e=>{if(o.test(e))return e.match(o).groups.klass})(n);t=a[e],i=""+n.replace(o,"")}return r.createElement("option",{value:n,className:t},i)};var d=n(92814),c=n(51436),u=n(68949),m=n(72389),p=n(21314),h=n(74322);const g=/--(?<klass>\w+)$/,f=e=>a[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],k=(0,l.Pi)((e=>{const t=(0,m.Z)(),[n,l]=r.useState("unchecked"),o=(0,p.oR)("documentStore").find(e.webKey),g=e=>{o.loaded&&(l("unchecked"),o.setData({value:e,type:"string"}))},k=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const n=e.sanitizer?e.sanitizer:e=>e;l(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((()=>(0,u.U5)((()=>o.loaded),(e=>{e&&k(o.value)}))),[o]),r.useEffect((()=>{o.loaded&&k(o.value)}),[o,t]),t?o.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:o.value,className:f(o.value),disabled:!o.loaded},e.select.map(((e,t)=>r.createElement(s,{value:e,key:t})))):r.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:o.value,disabled:!o.loaded||o.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:()=>k(o.value),className:(0,i.default)(a[n],a.checkButton)},r.createElement(d.G,{icon:(b=n,"correct"===b?c.f8k:"wrong"===b?c.nYk:c.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,v=e=>a[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],y=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);const r=[...t.data.value.slice(0,n),e,...t.data.value.slice(n+1)];t.setData({...t.data,value:r})};return t.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map(((a,i)=>e.select?r.createElement("select",{key:i,onChange:e=>n(e.target.value,i),value:a,className:v(a),disabled:!t.loaded},e.select.map(((e,t)=>r.createElement(s,{value:e,key:t})))):r.createElement("input",{key:i,type:"text",onChange:e=>n(e.target.value,i),value:a,disabled:!t.loaded||t.readonly})))):r.createElement(h.Z,null)}));var w=n(87462),N=n(75552);const E=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,w.Z)({model:t},e))):r.createElement(h.Z,null)}));var z=n(47271);const P=(0,l.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var x=n(97762);const S=e=>e.replace(/\s+/g,"").toUpperCase(),_=(0,l.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(z.Z,null),n.loggedIn&&r.createElement(P,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(k,e),"array"===e.type&&r.createElement(y,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},47271:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);const a="noLoginAlert_HRfh";var i=n(39960),l=n(71217),o=n(21314);const s=(0,l.Pi)((()=>(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))))},74322:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86010);const i="loader_FEpR",l="badge_oWqf";var o=n(71217),s=n(92814),d=n(51436);const c=(0,o.Pi)((()=>r.createElement("div",{className:(0,a.default)(i)},r.createElement(s.G,{icon:d.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))))},75552:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294);const a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP";var s=n(86010),d=n(71217),c=n(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){const n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){const n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){const n=[];e.ol&&n.push({list:"ordered"}),e.ul&&n.push({list:"bullet"}),t.push(n)}if(e.formula||e.image){const n=[];e.formula&&n.push("formula"),e.image&&n.push("image"),t.push(n)}return e.code&&t.push(["code-block"]),t},h=(0,d.Pi)((e=>{const[t,d]=r.useState(!1),[h,g]=r.useState(!1),f=r.useRef(null),{model:k}=e,b=e=>{e.preventDefault()};r.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const r=[Promise.all([n.e(7762),n.e(8446),n.e(324),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(532),n.e(1940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(1008).then(n.bind(n,41008)),Promise.all([n.e(532),n.e(37)]).then(n.bind(n,50037)))),Promise.all(r).then((t=>{u=t[a["react-quill"]].default;const n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){const e=t[a.katex].default;window.katex=e}n.register("modules/imageCompress",r),e()}))}((()=>{t&&(g(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&h&&k.loaded?r.createElement("div",{onFocus:()=>!t&&d(!0),className:(0,s.default)(a)},r.createElement(u,{ref:f,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,t?void 0:o),value:k.text||"",onChange:(t,n,r,a)=>{var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},38434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(82593);const l={title:"Authentifizierung"},o="Authentifizierung [^1]",s={unversionedId:"Kryptologie/Hashfunktionen/Authentifizierung",id:"Kryptologie/Hashfunktionen/Authentifizierung",title:"Authentifizierung",description:"Authentifizierung (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person authentisiert sich dabei.",source:"@site/docs/Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/Authentifizierung",permalink:"/Kryptologie/Hashfunktionen/Authentifizierung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",tags:[],version:"current",lastUpdatedAt:1637061762,formattedLastUpdatedAt:"16.11.2021",sidebarPosition:1,frontMatter:{title:"Authentifizierung"},sidebar:"sidebar",previous:{title:"Hashfunktionen",permalink:"/category/hashfunktionen"},next:{title:"Sichere Passw\xf6rter",permalink:"/Kryptologie/Hashfunktionen/passwords"}},d={},c=[{value:"Wissen",id:"wissen-1",level:2},{value:"Besitz",id:"besitz-1",level:2},{value:"Merkmal",id:"merkmal-1",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Figure"),p=u("SourceRef"),h={toc:c};function g(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentifizierung-"},"Authentifizierung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentifizierung")," (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person ",(0,a.kt)("strong",{parentName:"p"},"authentisiert")," sich dabei."),(0,a.kt)("p",null,"Es gibt drei verschiedene Wege, wie sich eine Person authentisieren kann:"),(0,a.kt)("div",{style:{},className:"flex flex-cards"},(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(6821).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(p,{parentName:"figcaption",bib:{author:"Gino Crescoli",source:"https://pixabay.com/images/id-2781614/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"wissen"},"Wissen"),(0,a.kt)("p",{parentName:"div"},"Die Person weiss etwas, z.B. ein Passwort oder eine Pin"))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(59339).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(p,{parentName:"figcaption",bib:{author:"Uwe Baumann",source:"https://pixabay.com/images/id-96233/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"besitz"},"Besitz"),(0,a.kt)("p",{parentName:"div"},"Die Person besitzt etwas, z.B. eine Kreditkarte oder einen Schl\xfcssel."))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(m,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(1853).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(p,{parentName:"figcaption",bib:{author:"Abdullah Boraik",source:"https://pixabay.com/images/id-3072296/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"merkmal"},"Merkmal"),(0,a.kt)("p",{parentName:"div"},"Die Person wird \xfcber k\xf6rperliches Merkmal identifiziert, z.B. einen Fingerabdruck oder die Iris.")))),(0,a.kt)("p",null,"Jede dieser drei Methoden hat Vor- und Nachteile. Um die Nachteile auszugleichen kann eine sogenannte ",(0,a.kt)("strong",{parentName:"p"},"Zwei-Faktor-Authentifizierung")," verwendet werden, welche sich gleichzeitig auf zwei der drei Methoden abst\xfctzt."),(0,a.kt)("h2",{id:"wissen-1"},"Wissen"),(0,a.kt)("p",null,"Mit dieser Methode authentisiert sich die Person, indem sie eine bestimmte Information ",(0,a.kt)("strong",{parentName:"p"},"weiss"),", beispielsweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ein Passwort,"),(0,a.kt)("li",{parentName:"ul"},"eine Zahlenkombination f\xfcr ein Fahrradschloss,"),(0,a.kt)("li",{parentName:"ul"},"ein pers\xf6nliche Identifikationsnummer (PIN) oder"),(0,a.kt)("li",{parentName:"ul"},"die Antwort auf eine Sicherheitsfrage.")),(0,a.kt)("p",null,"Die Information muss vor der Authentifizierung vereinbart worden sein. Wenn die Information erraten oder abgefangen worden ist, kann sie problemlos ge\xe4ndert werden."),(0,a.kt)("p",null,"Diese Authentifizierungsmethode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Information kann vergessen werden."),(0,a.kt)("li",{parentName:"ul"},"Sie kann erraten oder abgefangen werden.")),(0,a.kt)("h2",{id:"besitz-1"},"Besitz"),(0,a.kt)("p",null,"Diese Methode \xfcberpr\xfcft, ob die Person einen bestimmten Gegenstand ",(0,a.kt)("strong",{parentName:"p"},"besitzt"),". Typische Gegenst\xe4nde sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schl\xfcssel"),(0,a.kt)("li",{parentName:"ul"},"Chipkarten (z.B. Bankkarten)"),(0,a.kt)("li",{parentName:"ul"},"SIM-Karte"),(0,a.kt)("li",{parentName:"ul"},"Smartphone")),(0,a.kt)("p",null,"Solche Gegenst\xe4nde m\xfcssen ",(0,a.kt)("strong",{parentName:"p"},"eindeutig identifizierbar")," sein, deshalb ist die Erstellung oder das Ersetzen mit Kosten verbunden."),(0,a.kt)("p",null,"Diese Methode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Gegenstand kann verloren gehen oder gestohlen werden."),(0,a.kt)("li",{parentName:"ul"},"Er kann gef\xe4lscht werden.")),(0,a.kt)("h2",{id:"merkmal-1"},"Merkmal"),(0,a.kt)("p",null,"Die Person kann auch \xfcber ein k\xf6perliches oder biometrisches Merkmal identifiziert werden. Es werden viele unterschiedliche Merkmale verwendet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handschrift"),(0,a.kt)("li",{parentName:"ul"},"Fingerabdruck"),(0,a.kt)("li",{parentName:"ul"},"Gesichtsform"),(0,a.kt)("li",{parentName:"ul"},"Tippverhalten"),(0,a.kt)("li",{parentName:"ul"},"Stimme"),(0,a.kt)("li",{parentName:"ul"},"Iris"),(0,a.kt)("li",{parentName:"ul"},"Retina"),(0,a.kt)("li",{parentName:"ul"},"Venenmuster"),(0,a.kt)("li",{parentName:"ul"},"Erbinformation (DNS)")),(0,a.kt)("p",null,"Die biometrische Authentifizierung ist sehr bequem, da keine Gegenst\xe4nde mitgef\xfchrt und keine Informationen gemerkt werden m\xfcssen."),(0,a.kt)("p",null,"Viele biometrische Merkmale sind jedoch \xf6ffentlich zug\xe4nglich und einfach f\xe4lschbar. Dadurch sind Authentifizierungsmethoden wie Fingerabdruck- oder Gesichtserkennung sehr unsicher."),(0,a.kt)(i.Z,{type:"text",webKey:"16d7b0eb-9f50-4571-9edf-c7647ebfb53d",placeholder:"Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/2-authentication/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},1853:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eye-c0fed789d1f5582b4f95247ffd6a68cb.jpg"},59339:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/keys-0f24801bad086e1e23028d7fe6bcedce.jpg"},6821:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/password-a69419d8d9811db7fc00737a889a4ff7.jpg"}}]);