"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7518],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),N=r,k=c["".concat(o,".").concat(N)]||c[N]||s[N]||i;return a?n.createElement(k,m(m({ref:t},d),{},{components:a})):n.createElement(k,m({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var l=2;l<i;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(83117),r=a(67294),i=a(86010),m=a(72389),p=a(86043);const o="details_lb9f",l="isBrowser_bmU9",d="collapsibleContent_i85q";function s(e){return!!e&&("SUMMARY"===e.tagName||s(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function N(e){let{summary:t,children:a,...N}=e;const k=(0,m.Z)(),g=(0,r.useRef)(null),{collapsed:v,setCollapsed:h}=(0,p.u)({initialState:!N.open}),[f,u]=(0,r.useState)(N.open);return r.createElement("details",(0,n.Z)({},N,{ref:g,open:f,"data-collapsed":v,className:(0,i.default)(o,k&&l,N.className),onMouseDown:e=>{s(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;s(t)&&c(t,g.current)&&(e.preventDefault(),v?(h(!1),u(!0)):h(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{h(e),u(!e)}},r.createElement("div",{className:d},a)))}const k="details_b_Ee";function g(e){let{...t}=e;return r.createElement(N,(0,n.Z)({},t,{className:(0,i.default)("alert alert--info",k,t.className)}))}},13155:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(71217),r=a(67294),i=a(34673),m=a(86010),p=a(86720);const o=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",style:{marginTop:"5px"}},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=(0,n.Pi)((e=>{let{title:t}=e;return r.createElement("div",{className:(0,m.default)(p.Z.wrapper,"hint-wrapper")},r.createElement(i.Z,{summary:r.createElement("summary",null,t||"Hinweis"," ",r.createElement(o,null)),className:(0,m.default)("alert alert--warning",p.Z.hint)},e.children))}))},6971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>v,frontMatter:()=>m,metadata:()=>o,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),i=a(13155);const m={sidebar_custom_props:{id:"827d30dc-6c33-465e-b49d-4b0b4e506939"}},p="Powerpoint",o={unversionedId:"Big-Data/powerpoint",id:"version-25h/Big-Data/powerpoint",title:"Powerpoint",description:"Zeit: 15 Minuten",source:"@site/versioned_docs/version-25h/06-Big-Data/02-powerpoint.md",sourceDirName:"06-Big-Data",slug:"/Big-Data/powerpoint",permalink:"/25h/Big-Data/powerpoint",draft:!1,tags:[],version:"25h",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"827d30dc-6c33-465e-b49d-4b0b4e506939"}},sidebar:"version-25h/sidebar",previous:{title:"Gesellschaft",permalink:"/25h/Big-Data/intro"},next:{title:"Cookies",permalink:"/25h/Big-Data/cookies"}},l={},d=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=s("Comment"),N=s("Answer"),k=s("Figure"),g={toc:d};function v(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"powerpoint"},"Powerpoint"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"pr\xe4sentieren"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Pr\xe4sentieren"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Zeit"),": ",(0,r.kt)("strong",{parentName:"p"},"15 Minuten")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen Sie die folgenden Kapitel auf ict.mygymer.ch:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"URL"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Leseart"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/praesentieren"},"https://ict.mygymer.ch/praesentation/praesentieren")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/allgemein/bilder"},"https://ict.mygymer.ch/praesentation/allgemein/bilder")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/powerpoint/animation"},"https://ict.mygymer.ch/praesentation/powerpoint/animation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/powerpoint/videos"},"https://ict.mygymer.ch/praesentation/powerpoint/videos")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/powerpoint/master"},"https://ict.mygymer.ch/praesentation/powerpoint/master")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/powerpoint/referentenansicht"},"https://ict.mygymer.ch/praesentation/powerpoint/referentenansicht")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://ict.mygymer.ch/praesentation/powerpoint/notizen"},"https://ict.mygymer.ch/praesentation/powerpoint/notizen")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2b50\ufe0f")))),(0,r.kt)(c,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie einige Take-Home Messages fest:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)(N,{type:"text",webKey:"88bb0a0e-427c-47c4-81dd-90a7437bd500",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine Powerpoint Pr\xe4sentation, welche folgende Kriterien erf\xfcllt:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im ",(0,r.kt)("strong",{parentName:"p"},"Folienmaster")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wird ein Logo in der Kopfzeile eingef\xfcgt"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wird die pers\xf6nliche Mail-Adresse unten rechts eingef\xfcgt"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die ",(0,r.kt)("strong",{parentName:"p"},"Titelseite")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"hat ein Hintergrundbild"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"einen gut lesbaren Titel"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"zeigt das heutige Datum"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die zweite Folie"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"zeigt eine animierte Auflistung mit min. 5 Eintr\xe4gen (bei jedem Klick wird ein Bullet-Point hinzugef\xfcgt)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"hat zus\xe4tzliche Notizen f\xfcr die Referent:in."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die dritte Folie"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"zeigt die folgende, selber nachgebaute Animation:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(k,{parentName:"div",options:{width:"100%"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=100%",src:a(59154).Z,width:"600",height:"375"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))))),(0,r.kt)(i.Z,{mdxType:"Hint"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verwenden Sie eine benutzerdefinierte Pfadanimation (",(0,r.kt)("inlineCode",{parentName:"p"},"Kurve Zeichnen"),'). Lassen Sie die Animationen unendlich lange wiederholen, wobei die "Animations Dauer" bei einem Objekt bspw. ',(0,r.kt)("inlineCode",{parentName:"p"},"6 s")," und beim anderen Objekt ",(0,r.kt)("inlineCode",{parentName:"p"},"5 s")," dauert."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(49219).Z,width:"1496",height:"848"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Achten Sie zudem darauf, bei den Effektoptionen die Haken bei ",(0,r.kt)("strong",{parentName:"p"},"Sanft Starten")," und ",(0,r.kt)("strong",{parentName:"p"},"Sanfte Enden")," zu entfernen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie die fertige Pr\xe4sentation hier hoch:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/El8QzXZCEYdBv-DFYqtC6pYB4AltsnxLcxHdLY7w4maX4g",className:"button button--success"},"Upload")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))))}v.isMDXComponent=!0},86720:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},49219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-path-hint-b8fd190b27c79ff3a2767a777f1f6985.png"},59154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-ppt-animation-b048038e89460b703d826bf39bc01b1d.gif"}}]);