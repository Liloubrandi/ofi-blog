"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>M,kt:()=>m});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),o=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},M=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},w=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,M=c(e,["components","mdxType","originalType","parentName"]),w=o(a),m=n,u=w["".concat(s,".").concat(m)]||w[m]||d[m]||i;return a?l.createElement(u,r(r({ref:t},M),{},{components:a})):l.createElement(u,r({ref:t},M))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=w;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<i;o++)r[o]=a[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}w.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>D});var l=a(87462),n=a(67294),i=a(86010),r=a(72389),c=a(86043);const s="details_lb9f",o="isBrowser_bmU9",M="collapsibleContent_i85q";function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function w(e,t){return!!e&&(e===t||w(e.parentElement,t))}function m(e){let{summary:t,children:a,...m}=e;const u=(0,r.Z)(),D=(0,n.useRef)(null),{collapsed:I,setCollapsed:p}=(0,c.u)({initialState:!m.open}),[g,k]=(0,n.useState)(m.open);return n.createElement("details",(0,l.Z)({},m,{ref:D,open:g,"data-collapsed":I,className:(0,i.default)(s,u&&o,m.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&w(t,D.current)&&(e.preventDefault(),I?(p(!1),k(!0)):p(!0))}}),null!=t?t:n.createElement("summary",null,"Details"),n.createElement(c.z,{lazy:!1,collapsed:I,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),k(!e)}},n.createElement("div",{className:M},a)))}const u="details_b_Ee";function D(e){let{...t}=e;return n.createElement(m,(0,l.Z)({},t,{className:(0,i.default)("alert alert--info",u,t.className)}))}},61014:(e,t,a)=>{a.d(t,{Z:()=>I});var l=a(72389),n=a(71217),i=a(67294),r=a(21314),c=a(74322),s=a(34673),o=a(86010),M=a(86720),d=a(92814),w=a(51436);const m=()=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})),u=(0,n.Pi)((e=>i.createElement("span",{className:(0,o.default)(M.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(d.G,{icon:w.nYk,onClick:e.onRemove})))),D=(0,n.Pi)((e=>{const[t,a]=i.useState(""),[l,n]=i.useState(""),[c,s]=i.useState(""),m=(0,r.oR)("policyStore"),D=(0,r.oR)("userStore"),I=m.findPolicy(e.webKey);return I?i.createElement("div",{className:(0,o.default)(M.Z.configContainer)},i.createElement("div",{className:(0,o.default)(M.Z.showControl)},i.createElement(d.G,{icon:I.isConfigOpen?w.nYk:w.cNd,onClick:()=>{I.showConfig(!I.isConfigOpen)}})),I.isConfigOpen&&i.createElement("div",{className:(0,o.default)(M.Z.config)},i.createElement("div",{className:(0,o.default)(M.Z.permissions)},Array.from(I.klasses).map(((e,t)=>i.createElement(u,{key:t,name:e,onRemove:()=>I.removePermission(e,"class"),color:"success"}))),Array.from(I.groups).map(((e,t)=>i.createElement(u,{key:t,name:e,onRemove:()=>I.removePermission(e,"group"),color:"danger"}))),Array.from(I.users).map(((e,t)=>i.createElement(u,{key:t,name:e,onRemove:()=>I.removePermission(e,"user"),color:"primary"})))),i.createElement("div",{className:(0,o.default)(M.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:t,onChange:e=>a(e.target.value),disabled:I.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},D.klasses.map(((e,t)=>i.createElement("option",{key:t,value:e})))),i.createElement("button",{disabled:I.locked,onClick:()=>{I.addPermission(t,"class"),a("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:l,onChange:e=>n(e.target.value),disabled:I.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([...D.groups,...m.groups])).map(((e,t)=>i.createElement("option",{key:t,value:e})))),i.createElement("button",{disabled:I.locked,onClick:()=>{I.addPermission(l,"group"),n("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:c,onChange:e=>s(e.target.value),disabled:I.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},D.users.map(((e,t)=>i.createElement("option",{key:t,value:e.email})))),i.createElement("button",{disabled:I.locked,onClick:()=>{I.addPermission(c,"user"),s("")}},"Add")))):null})),I=(0,n.Pi)((e=>{var t,a;const n=(0,r.oR)("policyStore"),d=(0,r.oR)("userStore"),w=(0,l.Z)();if((0,r.aV)(e.webKey),!w)return i.createElement("div",null,"SSR");const u=n.find(e.webKey);return u?i.createElement("div",{"data--web-key":e.webKey,className:(0,o.default)(M.Z.wrapper,"solution-wrapper")},u.show||null!=(t=d.current)&&t.admin?i.createElement(s.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(m,null),!u.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,o.default)("alert alert--success",M.Z.solution),open:e.open},(null==(a=d.current)?void 0:a.admin)&&i.createElement(D,{webKey:u.webKey}),e.children):i.createElement("div",{className:(0,o.default)("alert",M.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(m,null))):i.createElement(c.Z,null)}))},74322:(e,t,a)=>{a.d(t,{Z:()=>M});var l=a(67294),n=a(86010);const i="loader_FEpR",r="badge_oWqf";var c=a(71217),s=a(92814),o=a(51436);const M=(0,c.Pi)((()=>l.createElement("div",{className:(0,n.default)(i)},l.createElement(s.G,{icon:o.IJ7,spin:!0}),l.createElement("span",{className:(0,n.default)("badge",r)},"Laden..."))))},30592:(e,t,a)=>{a.d(t,{Z:()=>D});var l=a(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var i=a(86010);const r=e=>l.createElement("div",{className:n.step},e.code),c=e=>l.createElement("div",{className:(0,i.default)(n.call,n.step,n.bordered)},e.code),s=e=>l.createElement("div",{className:(0,i.default)(n.step,n.statement)},e.code),o=e=>l.createElement("div",{className:(0,i.default)(n.repeat,n.step,n.indent)},l.createElement("div",{className:n.header},e.code),l.createElement("div",{className:n.body},e.block&&l.createElement(u,{program:e.block}))),M=e=>l.createElement("div",{className:(0,i.default)(n.def,n.step,n.indent)},l.createElement("div",{className:n.header},e.code),l.createElement("div",{className:n.body},e.block&&l.createElement(u,{program:e.block}))),d=e=>l.createElement("div",{className:(0,i.default)(n.input,n.step)},e.code),w=e=>l.createElement("div",{className:(0,i.default)(n.if,n.step,n.indent)},l.createElement("div",{className:n.header},e.code),l.createElement("div",{className:n.body},e.block&&l.createElement(u,{program:e.block}))),m=e=>l.createElement("div",{className:(0,i.default)(n.else,n.step)},l.createElement("div",{className:n.header},e.code),l.createElement("div",{className:n.body},e.block&&l.createElement(u,{program:e.block}))),u=e=>l.createElement("div",{className:n.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return l.createElement(c,{key:t,code:e.code});case"def":return l.createElement(M,{key:t,code:e.code,block:e.block});case"repeat":return l.createElement(o,{key:t,code:e.code,block:e.block});case"step":return l.createElement(r,{key:t,code:e.code});case"statement":return l.createElement(s,{key:t,code:e.code});case"input":return l.createElement(d,{key:t,code:e.code});case"if":return l.createElement(w,{key:t,code:e.code,block:e.block});case"elif":case"else":return l.createElement(m,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),D=u},70428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>s,default:()=>D,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var l=a(87462),n=(a(67294),a(3905)),i=a(61014),r=a(30592);const c={},s="Test 25h",o={unversionedId:"Programmieren-1/Test/Probe",id:"version-25h/Programmieren-1/Test/Probe",title:"Test 25h",description:"Aufgabe 1",source:"@site/versioned_docs/version-25h/04-Programmieren-1/04-Test/Probe.md",sourceDirName:"04-Programmieren-1/04-Test",slug:"/Programmieren-1/Test/Probe",permalink:"/25h/Programmieren-1/Test/Probe",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/04-Test/Probe.md",tags:[],version:"25h",frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"Textverarbeitung",permalink:"/25h/Programmieren-1/Python/strings"},next:{title:"Lernziele Codes und Daten",permalink:"/25h/Codierung/Lernziele"}},M={},d=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"Zusatzaufgabe",id:"zusatzaufgabe",level:2}],w=(m="Figure",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const u={toc:d};function D(e){let{components:t,...c}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"test-25h"},"Test 25h"),(0,n.kt)(i.Z,{webKey:"9b210a53-d07e-4847-a355-65dd210192e6",title:"Testfragen",open:!0,mdxType:"Solution"},(0,n.kt)("h2",{id:"aufgabe-1"},"Aufgabe 1"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"Das Programm zeichnet einen 5er Stern."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\xc4ndern Sie das Programm so ab, dass es nun einen 7er Stern zeichnet."),(0,n.kt)("li",{parentName:"ol"},"F\xfcllen Sie den Stern mit Ihrer Lieblingsfarbe.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe1.py id=91bd2392-e7fc-40b4-945f-fce6e24e4daf versioned readonly",live_py:!0,title:"aufgabe1.py",id:"91bd2392-e7fc-40b4-945f-fce6e24e4daf",versioned:!0,readonly:!0},"from turtle import *\nspeed(0)\n\nfor i in range(5):\n    forward(80)\n    left(3 * 360 / 5)\n")),(0,n.kt)("h2",{id:"aufgabe-2"},"Aufgabe 2"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"\xdcbersetzen Sie das untenstehende Struktogramm in Python Code"),(0,n.kt)("div",{style:{maxWidth:"400px"},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,n.kt)(r.Z,{program:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"150")," Schritte vorw\xe4rts")},{type:"def",code:(0,n.kt)("span",null,"linie"),block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 rechts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 links")}]},{type:"def",code:(0,n.kt)("span",null,"dreieck"),block:[{type:"repeat",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"3")," mal wiederholen"),block:[{type:"call",code:"linie zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 links")}]}]},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"}],mdxType:"Strukto"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe2.py versioned id=4b72a23e-4835-42da-bc65-4142b8aa59fa readonly",live_py:!0,title:"aufgabe2.py",versioned:!0,id:"4b72a23e-4835-42da-bc65-4142b8aa59fa",readonly:!0},"from turtle import * \n")),(0,n.kt)("h2",{id:"aufgabe-3"},"Aufgabe 3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"Finden und korrigieren Sie alle Fehler, so dass die folgende Ausgabe entsteht. Es gibt sowohl Syntaxfehler wie auch Logikfehler."),(0,n.kt)(w,{options:{},mdxType:"Figure"},(0,n.kt)("img",{src:a(79867).Z,width:"190",height:"115"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe3.py id=ed0a9530-ec45-49be-9c50-eb612e4ee8f3 versioned readonly",live_py:!0,title:"aufgabe3.py",id:"ed0a9530-ec45-49be-9c50-eb612e4ee8f3",versioned:!0,readonly:!0},"from turtle import *\n\ndef streifen(farbe):\n    color('farbe')\n    beginn_fill()\n    for i in() range(2)\n        forward(60)\n        left(90)\n        forward(100)\n        left(90)\n    forward(100)\n    end_fill\n\nstreifen('Gr\xfcn')\n streiffn('white')\nstreifen('red')\n\nhide_turtle()\n")),(0,n.kt)("h2",{id:"aufgabe-4"},"Aufgabe 4"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(4 Punkte)")),(0,n.kt)("p",null,"Schreiben Sie ein Programm, welches folgende Zeichnung erzeugt. Die Seitenl\xe4nge eines Zick-Zacks ist ",(0,n.kt)("inlineCode",{parentName:"p"},"20")," Einheiten gross, der Innenwinkel beim Zick-Zack betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"60\xb0"),". ",(0,n.kt)("em",{parentName:"p"},"(2.5 Punkte)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verwenden Sie Wiederholungen (",(0,n.kt)("em",{parentName:"li"},"0.5 Punkte"),")"),(0,n.kt)("li",{parentName:"ul"},"Schreiben Sie f\xfcr das Zeichnen einer einzelnen Zacke einen (selber definierten) Befehl ",(0,n.kt)("inlineCode",{parentName:"li"},"zickzack")," (",(0,n.kt)("em",{parentName:"li"},"1 Punkt"),").")),(0,n.kt)(w,{options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"resultat Aufgabe 4 --width=200px",src:a(85591).Z,width:"114",height:"38"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"resultat Aufgabe 4",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(w,{options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"Ein zickzack --width=200px",src:a(14962).Z,width:"676",height:"564"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ein zickzack",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe4.py versioned id=c6d2731d-bbd8-42cc-971a-bc8ee6303f21 readonly",live_py:!0,title:"aufgabe4.py",versioned:!0,id:"c6d2731d-bbd8-42cc-971a-bc8ee6303f21",readonly:!0},"from turtle import *\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"zusatzaufgabe"},"Zusatzaufgabe"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Wird f\xfcr das Erreichen der Note 6 nicht ben\xf6tigt, 2 Punkte)")),(0,n.kt)("p",null,"Auf ",(0,n.kt)("a",{parentName:"p",href:"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/"},"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/")," finden Sie Python-Code, welcher ein Herz zeichnet."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"R\xe4umen Sie den Code auf"),(0,n.kt)("li",{parentName:"ul"},"Schreiben Sie Ihren eigenen Namen in das Herz"),(0,n.kt)("li",{parentName:"ul"},"Machen Sie den Rand einen Stift der Breite ",(0,n.kt)("inlineCode",{parentName:"li"},"10")," ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zusatzaufgabe.py id=400ec5b0-ac1b-47b9-96c0-0f37ad8c7731 versioned readonly",live_py:!0,title:"zusatzaufgabe.py",id:"400ec5b0-ac1b-47b9-96c0-0f37ad8c7731",versioned:!0,readonly:!0},""))))}D.isMDXComponent=!0},86720:(e,t,a)=>{a.d(t,{Z:()=>l});const l={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},79867:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jYmQ0MTNkZF9lNTM4XzQ0YTNfYjZiZF9mNzg3ZGE4MjdiZDJfc3ZnIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjExNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMTQ1LDE5MCwxMTUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI2MCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MCIgeTE9IjAiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xMDAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xMDAiIHgyPSI3LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNy4xMDU0MjczNTc2MDEwMDJlLTE1IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9Ii0xLjEyNjQyNzQ2Mjk2MDkyOTZlLTE0IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMS4xMjY0Mjc0NjI5NjA5Mjk2ZS0xNCIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5Mj0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAuMCwtMC4wIDYwLjAsLTAuMCA2MC4wMDAwMDAwMDAwMDAwMSwtMTAwLjAgNy4xMDU0MjczNTc2MDEwMDJlLTE1LC0xMDAuMDAwMDAwMDAwMDAwMDEgLTEuMTI2NDI3NDYyOTYwOTI5NmUtMTQsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgNTkuOTk5OTk5OTk5OTk5OTg2LDQuODQ5MDY4NzQ1NjYyMzYxZS0xNiIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiBncmVlbjsgc3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5MT0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk5IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5OSIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkxPSItOTkuOTk5OTk5OTk5OTk5OTkiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMTQiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNjAuMDAwMDAwMDAwMDAwMDE0IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9IjU5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI1OS45OTk5OTk5OTk5OTk5NyIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1OS45OTk5OTk5OTk5OTk5ODYsNC44NDkwNjg3NDU2NjIzNjFlLTE2IDExOS45OTk5OTk5OTk5OTk5OSwxLjUxODA2Njg0NjQzMzQ0NzZlLTE0IDEyMC4wMDAwMDAwMDAwMDAwMSwtOTkuOTk5OTk5OTk5OTk5OTkgNjAuMDAwMDAwMDAwMDAwMDE0LC0xMDAuMDAwMDAwMDAwMDAwMDEgNTkuOTk5OTk5OTk5OTk5OTcsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgMTE5Ljk5OTk5OTk5OTk5OTk3LDEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogd2hpdGU7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5NyIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxNzkuOTk5OTk5OTk5OTk5OTciIHkyPSI0LjQ1NzIxOTE2NDM4NzA5NTZlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjE3OS45OTk5OTk5OTk5OTk5NyIgeTE9IjQuNDU3MjE5MTY0Mzg3MDk1NmUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMDMiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTYiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTgwLjAwMDAwMDAwMDAwMDAzIiB5MT0iLTk5Ljk5OTk5OTk5OTk5OTk2IiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iLTEwMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHkxPSItMTAwIiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMTQiIHkxPSIwIiB4Mj0iMTgwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iNC40MDg3Mjg0NzY5MzA0NzFlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSIxMTkuOTk5OTk5OTk5OTk5OTcsMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCAxNzkuOTk5OTk5OTk5OTk5OTcsNC40NTcyMTkxNjQzODcwOTU2ZS0xNCAxODAuMDAwMDAwMDAwMDAwMDMsLTk5Ljk5OTk5OTk5OTk5OTk2IDEyMC4wMDAwMDAwMDAwMDAwMywtMTAwLjAgMTIwLjAwMDAwMDAwMDAwMDE0LC0wLjAgMTgwLjAwMDAwMDAwMDAwMDE0LDQuNDA4NzI4NDc2OTMwNDcxZS0xNCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiByZWQ7IHN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkxPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkyPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJyZWQiIGZpbGw9InJlZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwMDAwMDAwMTQsNC40MDg3Mjg0NzY5MzA0NzFlLTE0KSByb3RhdGUoLTExNzAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},14962:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/triangle-15c1e1c28811b5a297b20d164a52d982.png"},85591:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jNmQyNzMxZF9iYmQ4XzQyY2NfOTcxYV9iYzhlZTYzMDNmMjFfc3ZnIiB3aWR0aD0iMTE0LjMzMDEwODY0MjU3ODEyIiBoZWlnaHQ9IjM3LjYxNDczMDgzNDk2MDk0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0NSwyMjcuNjc5NDg5MTM1NzQyMiwxMTQuMzMwMTA4NjQyNTc4MTIsMzcuNjE0NzMwODM0OTYwOTQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSIyMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjAuMDAwMDAwMDAwMDAwMDA0IiB5MT0iMCIgeDI9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjQwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjQwLjAwMDAwMDAwMDAwMDAxIiB5MT0iMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iLTE3LjMyMDUwODA3NTY4ODc3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAuMDAwMDAwMDAwMDAwMDEiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9IjAiIHgyPSI3MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjcwLjAwMDAwMDAwMDAwMDAxIiB5MT0iLTE3LjMyMDUwODA3NTY4ODc3IiB4Mj0iODAuMDAwMDAwMDAwMDAwMDEiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iODAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iOTAuMDAwMDAwMDAwMDAwMDEiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI5MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjEwMC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMDAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iMTAwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC4wMDAwMDAwMDAwMDAwMSwtMC4wKSByb3RhdGUoLTE1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+PC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="}}]);