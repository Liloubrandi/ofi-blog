"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[47321],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>v});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=o(t),v=r,k=c["".concat(d,".").concat(v)]||c[v]||p[v]||i;return t?n.createElement(k,l(l({ref:a},s),{},{components:t})):n.createElement(k,l({ref:a},s))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var m={};for(var d in a)hasOwnProperty.call(a,d)&&(m[d]=a[d]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30592:(e,a,t)=>{t.d(a,{Z:()=>f});var n=t(67294);const r={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var i=t(86010);const l=e=>n.createElement("div",{className:r.step},e.code),m=e=>n.createElement("div",{className:(0,i.default)(r.call,r.step,r.bordered)},e.code),d=e=>n.createElement("div",{className:(0,i.default)(r.step,r.statement)},e.code),o=e=>n.createElement("div",{className:(0,i.default)(r.repeat,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(k,{program:e.block}))),s=e=>n.createElement("div",{className:(0,i.default)(r.def,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(k,{program:e.block}))),p=e=>n.createElement("div",{className:(0,i.default)(r.input,r.step)},e.code),c=e=>n.createElement("div",{className:(0,i.default)(r.if,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(k,{program:e.block}))),v=e=>n.createElement("div",{className:(0,i.default)(r.else,r.step)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(k,{program:e.block}))),k=e=>n.createElement("div",{className:r.strukto},e.program.map(((e,a)=>{switch(e.type){case"call":return n.createElement(m,{key:a,code:e.code});case"def":return n.createElement(s,{key:a,code:e.code,block:e.block});case"repeat":return n.createElement(o,{key:a,code:e.code,block:e.block});case"step":return n.createElement(l,{key:a,code:e.code});case"statement":return n.createElement(d,{key:a,code:e.code});case"input":return n.createElement(p,{key:a,code:e.code});case"if":return n.createElement(c,{key:a,code:e.code,block:e.block});case"elif":case"else":return n.createElement(v,{key:a,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),f=k},32824:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=t(83117),r=(t(67294),t(3905)),i=t(30592);const l={sidebar_custom_props:{id:"80be419e-835c-48e6-9aef-33cc91af5d3d"}},m="9. \u2b50\ufe0f While",d={unversionedId:"Programmieren/Turtle-Repetition/while",id:"version-24ef/Programmieren/Turtle-Repetition/while",title:"9. \u2b50\ufe0f While",description:'Wiederholen, solange die Frage mit "Ja"  beantwortet wird',source:"@site/versioned_docs/version-24ef/01-Programmieren/03-Turtle-Repetition/009-while.md",sourceDirName:"01-Programmieren/03-Turtle-Repetition",slug:"/Programmieren/Turtle-Repetition/while",permalink:"/24ef/Programmieren/Turtle-Repetition/while",draft:!1,tags:[],version:"24ef",sidebarPosition:9,frontMatter:{sidebar_custom_props:{id:"80be419e-835c-48e6-9aef-33cc91af5d3d"}},sidebar:"version-24ef/sidebar",previous:{title:"8. Verzweigungen",permalink:"/24ef/Programmieren/Turtle-Repetition/verzweigung"},next:{title:"10. \u2b50 Rekursion",permalink:"/24ef/Programmieren/Turtle-Repetition/koch"}},o={},s=[{value:"Wiederholen, solange die Frage mit &quot;Ja&quot;  beantwortet wird",id:"wiederholen-solange-die-frage-mit-ja--beantwortet-wird",level:2},{value:"Wiederholungen mit der <code>while</code>-Schleife",id:"wiederholungen-mit-der-while-schleife",level:2},{value:"Anwendung",id:"anwendung",level:2}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=p("Comment"),v=p("Answer"),k=p("Solution"),f={toc:s};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"9-\ufe0f-while"},"9. \u2b50\ufe0f While"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"wiederholen-solange-die-frage-mit-ja--beantwortet-wird"},'Wiederholen, solange die Frage mit "Ja"  beantwortet wird'),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Eine Wiederholung mit einer Frage f\xfchrt einen Codeblock so lange aus, bis die Frage nicht mehr mit "Ja" beantwortet wird.\nIm folgenden Beispiel wird solange eine Spirale gezeichnet, bis die Distanz der Turtle vom Zentrum mehr als ',(0,r.kt)("inlineCode",{parentName:"p"},"200px")," betr\xe4gt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"unendliche-schleife"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Unendliche Schleife"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Diese Art von Wiederholung kann dazu f\xfchren, dass eine Frage immer mit "Ja" beantwortet wird und das Programm also nie endet.'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Oft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das Programm zu Dies gelingt:\nOft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das laufende Programm zu stoppen, muss:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"der ganze Tab geschlossen und die Seite in einem neuen Tab ge\xf6ffnet werden. (",(0,r.kt)("em",{parentName:"p"},"Tipp"),": Die URL zuerst kopieren...)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"(den ganzen Browser \xfcber den Taskmanager schliessen)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,r.kt)(i.Z,{program:[{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"winkel")," = 20 setzen")},{type:"repeat",code:(0,r.kt)("span",null,"Ist der Abstand zum Zentrum kleiner als 200px?"),block:[{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"5")," Schritte vorw\xe4rts")},{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"winkel"),"\xb0 nach links")},{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"winkel")," auf 99% des aktuellen Werts setzen")}]}],mdxType:"Strukto"})),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nwinkel = 20\nwhile distance(0, 0) < 200:\n    forward(5)\n    left(winkel)\n    winkel = winkel * 0.99\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Oft k\xf6nnte man dies auch mit einer for-Schleife erreichen. Jedoch m\xfcsste man dann zuerst berechnen, wie viele Schritte n\xf6tig sind, bis dies der Fall ist. Im obigen Beispiel kann etwa der Schrumpf-Faktor (",(0,r.kt)("inlineCode",{parentName:"p"},"0.99"),") ver\xe4ndern, ohne die Frage (weniger als ",(0,r.kt)("inlineCode",{parentName:"p"},"200px")," Abstand zum Zentrum?) zu \xe4ndern."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(v,{type:"state",webKey:"8ca0706a-e5a3-4437-b23a-4537e550f774",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Probieren Sie es aus und spielen Sie mit dem Schrumpf-Faktor ",(0,r.kt)("inlineCode",{parentName:"p"},"0.99")," im obigen Bispiel."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Spirale.py id=a9d06428-a918-450e-accc-99c81b5d07c7",live_py:!0,title:"Spirale.py",id:"a9d06428-a918-450e-accc-99c81b5d07c7"},"from turtle import *\n\nwinkel = 20\nwhile distance(0, 0) < 200:\n    forward(5)\n    left(winkel)\n    winkel = winkel * 0.99\n")),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wann gibt es mehr/weniger Windungen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wann entsteht eine unendliche Schleife?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,r.kt)(v,{type:"text",webKey:"e1247ee5-d13f-495b-b340-7a425b71d08d",toolbarAdd:{code:1},mdxType:"Answer"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"wiederholungen-mit-der-while-schleife"},"Wiederholungen mit der ",(0,r.kt)("inlineCode",{parentName:"h2"},"while"),"-Schleife"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit der ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife k\xf6nnen alle Wiederholungen, die mit der ",(0,r.kt)("inlineCode",{parentName:"p"},"for i in range(...):")," Syntax erzeugt wurden, ebenfalls erzeugt werden. Dabei muss aber jeweils eine Variable, z.B. ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", verwendet werden, welche sich die Anzahl Wiederholungen merkt. Nat\xfcrlich muss diese Variable dann bei jeder Wiederholung um eins hochgez\xe4hlt werden. Eine solche Variable, die bei jeder Wiederholung erh\xf6ht wird, wird ",(0,r.kt)("strong",{parentName:"p"},"Schleifenz\xe4hler")," oder ",(0,r.kt)("strong",{parentName:"p"},"Laufvariable")," genannt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ni = 0\nwhile i < 4:\n    forward(100)\n    left(90)\n    i = i + 1\n")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"for-zu-while"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"for")," zu ",(0,r.kt)("inlineCode",{parentName:"h5"},"while")),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(v,{type:"state",webKey:"5c7d2980-3842-4b79-b1af-69ddad459b21",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie das untenstehende Programm so um, dass nur noch ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," Schleifen verwendet werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(30)\nleft(60)\n\nfor i in range(5):\n    forward(100)\n    left(72)\n    backward(20) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to-while.py id=2f288418-a751-4955-91e6-44ef58a2844b",live_py:!0,title:"to-while.py",id:"2f288418-a751-4955-91e6-44ef58a2844b"},"from turtle import *\n")))),(0,r.kt)(k,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(30)\nleft(60)\ni = 0\nwhile i < 5:\n    forward(100)\n    left(72)\n    backward(20)\n    i = i + 1\n"))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"while-zu-for"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"while")," zu ",(0,r.kt)("inlineCode",{parentName:"h5"},"for")),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(v,{type:"state",webKey:"2c3ce7d3-264f-4607-b789-20e8ab1985d8",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie das untenstehende Programm so um, dass nur noch ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," Schleifen verwendet werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nspeed(10)\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\ndef quadrat():\n    i = 0\n    while i < 4:\n        forward(20)\n        left(90)\n        i = i + 1\n\nzeile = 0\nwhile zeile < 5:\n    spalte = 0\n    while spalte < 3:\n        move(zeile * 20, spalte * 20)\n        quadrat()\n        spalte = spalte + 1\n    zeile = zeile + 1\n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to-while.py id=729af77c-0c3b-46f9-b95a-35d86be96cde",live_py:!0,title:"to-while.py",id:"729af77c-0c3b-46f9-b95a-35d86be96cde"},"from turtle import *\n")))),(0,r.kt)(k,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nspeed(10)\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\ndef quadrat():\n    for i in range(4):\n        forward(20)\n        left(90)\n\nfor zeile in range(5):\n    for spalte in range(3):\n        move(zeile * 20, spalte * 20)\n        quadrat()\n"))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"anwendung"},"Anwendung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife kommt oft bei Benutzerinteraktionen, Simulationen oder bei sich dynamisch \xe4ndernden Daten vor. Sonstige Wiederholungen lassen sich normalerweise einfacher mit einer ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife umsetzen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"ratespiel"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Ratespiel"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(v,{type:"state",webKey:"f5a8546d-ad02-47c9-a35a-9f680cffe497",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie das Ratespiel aus dem Kapitel ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/verzweigung#ratespiel"},"Verzweigungen")," so ab, dass die Spieler:in unendlich viele Versuche hat um die Zahl zu finden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wurde die gesuchte Zahl gefunden, soll die Anzahl Versuche zur\xfcckgemeldet werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)(k,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nfrom random import randint \n\nzahl = randint(0, 100)\ngeraten = -1\ni = 0\nwhile geraten != zahl:\n    i = i + 1\n    geraten = input(f'{i} Versuch: Gib eine ganze Zahl zwischen 0 und 100 ein.')\n    geraten = int(geraten)\n    \n    if geraten == zahl:\n        break\n    elif geraten > zahl:\n        alert(f'Die eingegebene Zahl {geraten} ist zu gross')\n    else:\n        alert(f'Die eingegebene Zahl {geraten} ist zu klein')\n\nalert(f'Du hast insgesamt {i} Versuche gebraucht um die Zahl {zahl} zu finden.')\n"))))))}u.isMDXComponent=!0}}]);