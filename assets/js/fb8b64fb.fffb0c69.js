"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[47461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(a),k=i,g=s["".concat(d,".").concat(k)]||s[k]||c[k]||r;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:i,l[1]=m;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30592:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(67294);const i={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=a(86010);const l=e=>n.createElement("div",{className:i.step},e.code),m=e=>n.createElement("div",{className:(0,r.default)(i.call,i.step,i.bordered)},e.code),d=e=>n.createElement("div",{className:(0,r.default)(i.step,i.statement)},e.code),p=e=>n.createElement("div",{className:(0,r.default)(i.repeat,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),o=e=>n.createElement("div",{className:(0,r.default)(i.def,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),c=e=>n.createElement("div",{className:(0,r.default)(i.input,i.step)},e.code),s=e=>n.createElement("div",{className:(0,r.default)(i.if,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),k=e=>n.createElement("div",{className:(0,r.default)(i.else,i.step)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),g=e=>n.createElement("div",{className:i.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return n.createElement(m,{key:t,code:e.code});case"def":return n.createElement(o,{key:t,code:e.code,block:e.block});case"repeat":return n.createElement(p,{key:t,code:e.code,block:e.block});case"step":return n.createElement(l,{key:t,code:e.code});case"statement":return n.createElement(d,{key:t,code:e.code});case"input":return n.createElement(c,{key:t,code:e.code});case"if":return n.createElement(s,{key:t,code:e.code,block:e.block});case"elif":case"else":return n.createElement(k,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),I=g},56689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),r=a(30592);const l={sidebar_label:"Repetitionsfragen",sidebar_custom_props:{id:"b4d081fd-943b-42de-a587-a91321b06fa3"}},m="10. Repetitionsfragen",d={unversionedId:"Programmieren-1/Turtlegrafik/repetition",id:"version-25h/Programmieren-1/Turtlegrafik/repetition",title:"10. Repetitionsfragen",description:"Algorithmus",source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/050-repetition.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/repetition",permalink:"/25h/Programmieren-1/Turtlegrafik/repetition",draft:!1,tags:[],version:"25h",sidebarPosition:50,frontMatter:{sidebar_label:"Repetitionsfragen",sidebar_custom_props:{id:"b4d081fd-943b-42de-a587-a91321b06fa3"}},sidebar:"version-25h/sidebar",previous:{title:"10. \u2b50 Rekursion",permalink:"/25h/Programmieren-1/Turtlegrafik/koch"},next:{title:"Mini-Projekte",permalink:"/25h/Programmieren-1/Turtlegrafik/art"}},p={},o=[{value:"Algorithmus",id:"algorithmus",level:2},{value:"Code Lesen",id:"code-lesen",level:2},{value:"Code Ausf\xfchren",id:"code-ausf\xfchren",level:2},{value:"Struktogramm",id:"struktogramm",level:2},{value:"Programmieren (am PC)",id:"programmieren-am-pc",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},s=c("Comment"),k=c("Answer"),g=c("Figure"),I=c("Solution"),T={toc:o};function N(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},T,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"10-repetitionsfragen"},"10. Repetitionsfragen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"algorithmus"},"Algorithmus"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Was ist ein Algorithmus?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Welche 5. Strukturelemente enth\xe4lt ein Algorithmus?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie einen Algorithmus f\xfcr das Zusammenfalten eines T-Shirts."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)(k,{type:"text",webKey:"fc3fa312-7e89-421d-96eb-a799f502d1e1",mdxType:"Answer"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"code-lesen"},"Code Lesen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In welchem Code-Teil wird das Viereck mit der Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," gezeichnet."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Welche Seitenl\xe4nge hat das Dreieck mit Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bei welchen Koordinaten wird das F\xfcnfeck mit Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," gezeichnet?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"F\xfcgen Sie ein Quadrat mit der Seitenl\xe4nge ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," bei der Koordinate ",(0,i.kt)("inlineCode",{parentName:"p"},"(20, 10)")," und der Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," hinzu."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unterstreichen Sie in den Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," alle ",(0,i.kt)("strong",{parentName:"p"},"Parameter")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Markieren Sie in den Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," alle ",(0,i.kt)("strong",{parentName:"p"},"Befehlsnamen")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Turtle Ausgabe",src:a(49302).Z,width:"256",height:"187"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Turtle Ausgabe",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(s,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\npensize(2)\nfor i in range(3):\n    forward(18)\n    left(120)\nmove(-20, 30)\n\npensize(5)\nfor i in range(4):\n    forward(27)\n    left(90)\n\nmove(30, 10)\nfor i in range(5):\n    forward(13)\n    left(72)\n\nmove(80, 80)\npensize(3)\nfor i in range(4):\n    forward(77)\n    left(90)\n\nmove(-40, -20)\nfor i in range(5):\n    forward(23)\n    left(72)\n\nmove(-80, 80)\npensize(7)\nfor i in range(3):\n    forward(44)\n    left(120)\n")),(0,i.kt)(k,{type:"text",webKey:"9a817631-40e8-4f41-8dc7-2285b9c1e8f1",toolbar:{code:1,color:1,background:1,bold:1,italic:1,underline:1},mdxType:"Answer"}),(0,i.kt)(I,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"15-17")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"44")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"(-40, -20)")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"move(20, 10)\npensize(3)\nfor i in range(4):\n    forward(20)\n    left(90)\n"))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"code-ausf\xfchren"},"Code Ausf\xfchren"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeichnen Sie die Ausgabe des folgenden Programms"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\n\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\n\nleft(90)\nsquare()\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(99432).Z,width:"453",height:"183"})),(0,i.kt)(s,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)(I,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\nleft(90)\nsquare()\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"struktogramm"},"Struktogramm"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeichnen Sie f\xfcr folgende Ausgangslage ein Struktogramm:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)("blockquote",null,(0,i.kt)("div",{parentName:"blockquote",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Benutzer:in wird nach ihrer Lieblingszahl gefragt. Die eingegebene Zahl wird verdoppelt und mit 3 addiert. So oft zeichnet man nun 55 Schritte vorw\xe4rts mit einer Drehung um 113\xb0 am Ende."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zusatz:\nAnstatt ",(0,i.kt)("inlineCode",{parentName:"p"},"113\xb0")," soll soviel gedreht werden, dass eine geschlossene Figur entsteht. "),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,i.kt)(I,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)(r.Z,{program:[{type:"input",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"zahl")," = Geben Sie Ihre Lieblingszahl ein")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"zahl")," mal 2 und plus 3 rechnen")},{type:"repeat",code:(0,i.kt)("span",null,(0,i.kt)("u",null,(0,i.kt)("span",{className:"var"},"zahl"))," mal wiederholen:"),block:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"55")," Schritte vorw\xe4rts gehen")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"113"),"\xb0 nach rechts drehen")}]}],mdxType:"Strukto"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nzahl = input('Geben Sie Ihre Lieblingszahl ein')\nzahl = int(zahl)\nzahl = zahl * 2 + 3\n\nfor i in range(zahl):\n    forward(15)\n    right(113)\n    # right(360 / zahl)\n\n"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"programmieren-am-pc"},"Programmieren (am PC)"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"text-vervielfachen"},"Text vervielfachen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Python kann Text verfielf\xe4ltigt werden, indem er mit der gew\xfcnschten Anzahl wiederholungen multipliziert wird:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('Hallo' * 3)\nprint('\ud83c\udf32 ' * 24)\n")))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie einen Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"dreieck"),", der ein Dreieck in Textform ausgibt. Die Gr\xf6sse des Dreiecks soll als Parameter \xfcbergeben werden k\xf6nnen."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=dreieck.py versioned id=7fa89fa8-b8ae-4939-94de-df8e00ae57d4",live_py:!0,title:"dreieck.py",versioned:!0,id:"7fa89fa8-b8ae-4939-94de-df8e00ae57d4"},"")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Pr\xfcfen Sie ihr Programm mit folgendem Code:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"dreieck(1)\ndreieck(3)\ndreieck(5)\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"sollte die folgende Ausgabe erzeugen:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*\n* \n* *\n* * *\n* \n* *\n* * *\n* * * *\n* * * * *\n")),(0,i.kt)(I,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"\ndef dreieck(gr\xf6sse):\n    # gr\xf6sse mal wiederholen\n    for i in range(gr\xf6sse):\n        # i beginnt bei 0, deswegen +1 rechnen\n        print('*' * (i + 1))\n\ndreieck(1)\ndreieck(3)\ndreieck(5)\n"))))}N.isMDXComponent=!0},49302:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9iYmE2YWM2MF9hMmMwXzRhYjBfYjZmOF9hNGU1MDdhN2Y0MGVfc3ZnIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIxNTYsODgsMjU2LDE4NyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjE4IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjE4IiB5MT0iMCIgeDI9IjkuMDAwMDAwMDAwMDAwMDA0IiB5Mj0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjkuMDAwMDAwMDAwMDAwMDA0IiB5MT0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgeDI9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNSIgeTE9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHgyPSItMjAiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTIwIiB5MT0iLTMwIiB4Mj0iNyIgeTI9Ii0yOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjciIHkxPSItMjkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNy4wMDAwMDAwMDAwMDAwMDgiIHkyPSItNTYuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjcuMDAwMDAwMDAwMDAwMDA4IiB5MT0iLTU2Ljk5OTk5OTk5OTk5OTk5IiB4Mj0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTI9Ii01NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTE9Ii01NyIgeDI9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSItMzAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkxPSItMzAiIHgyPSIzMCIgeTI9Ii0zMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwIiB4Mj0iNDMiIHkyPSItOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjQzIiB5MT0iLTkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNDcuMDE3MjIwOTI2ODc0MzIiIHkyPSItMjIuMzYzNzM0NzExODM2OTg3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI0Ny4wMTcyMjA5MjY4NzQzMiIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzY5ODciIHgyPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkyPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkxPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiB4Mj0iMjUuOTgyNzc5MDczMTI1NjkiIHkyPSItMjIuMzYzNzM0NzExODM3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIyNS45ODI3NzkwNzMxMjU2OSIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzciIHgyPSIzMCIgeTI9Ii0xMC4wMDAwMDAwMDAwMDAwMDIiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgeDI9IjgwIiB5Mj0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjgwIiB5MT0iLTgwIiB4Mj0iMTU3IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTciIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkxPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiB4Mj0iNzkuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI3OS45OTk5OTk5OTk5OTk5MSIgeTE9Ii0xNTciIHgyPSI3OS45OTk5OTk5OTk5OTk5OSIgeTI9Ii04MCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iNzkuOTk5OTk5OTk5OTk5OTkiIHkxPSItODAiIHgyPSItNDAiIHkyPSItODAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7Ij48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii0xNyIgeTI9IjIwLjAwMDAwMDAwMDAwMDAyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMTciIHkxPSIyMC4wMDAwMDAwMDAwMDAwMiIgeDI9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTI9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTE9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHgyPSItMjguNDk5OTk5OTk5OTk5OTYiIHkyPSItMTUuMzkzMzYwNjc3NTE1NDA1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMjguNDk5OTk5OTk5OTk5OTYiIHkxPSItMTUuMzkzMzYwNjc3NTE1NDA1IiB4Mj0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5Mj0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5MT0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgeDI9Ii00MCIgeTI9IjIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii04MCIgeTI9IjIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyI+PC9saW5lPgo8bGluZSB4MT0iLTgwIiB5MT0iLTgwIiB4Mj0iLTM2IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMzYiIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkyPSItMTE4LjEwNTExNzc2NjUxNTMyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkxPSItMTE4LjEwNTExNzc2NjUxNTMyIiB4Mj0iLTc5Ljk5OTk5OTk5OTk5OTgzIiB5Mj0iLTgwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkuOTk5OTk5OTk5OTk5ODMsLTgwLjApIHJvdGF0ZSgtMjI1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+ZnJvbSB0dXJ0bGUgaW1wb3J0ICoKCmRlZiBtb3ZlKHgsIHkpOgogICAgcGVudXAoKQogICAgZ290byh4LCB5KQogICAgcGVuZG93bigpCgpwZW5zaXplKDIpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCgxOCkKICAgIGxlZnQoMTIwKQptb3ZlKC0yMCwgMzApCgpwZW5zaXplKDUpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCgyNykKICAgIGxlZnQoOTApCgptb3ZlKDMwLCAxMCkKZm9yIGkgaW4gcmFuZ2UoNSk6CiAgICBmb3J3YXJkKDEzKQogICAgbGVmdCg3MikKCm1vdmUoODAsIDgwKQpwZW5zaXplKDMpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCg3NykKICAgIGxlZnQoOTApCgptb3ZlKC00MCwgLTIwKQpmb3IgaSBpbiByYW5nZSg1KToKICAgIGZvcndhcmQoMjMpCiAgICBsZWZ0KDcyKQoKbW92ZSgtODAsIDgwKQpwZW5zaXplKDcpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg0NCkKICAgIGxlZnQoMTIwKSA8L3Jhdz48L21ldGFkYXRhPjwvc3ZnPg=="},99432:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/09-coord-07deb3712930d10252b769c94b4e20fe.svg"}}]);