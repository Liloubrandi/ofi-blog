"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>D,kt:()=>s});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),w=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):M(M({},t),e)),a},D=function(e){var t=w(e.components);return i.createElement(c.Provider,{value:t},e.children)},I={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,D=r(e,["components","mdxType","originalType","parentName"]),d=w(a),s=n,o=d["".concat(c,".").concat(s)]||d[s]||I[s]||l;return a?i.createElement(o,M(M({ref:t},D),{},{components:a})):i.createElement(o,M({ref:t},D))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,M=new Array(l);M[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,M[1]=r;for(var w=2;w<l;w++)M[w]=a[w];return i.createElement.apply(null,M)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30592:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var l=a(86010);const M=e=>i.createElement("div",{className:n.step},e.code),r=e=>i.createElement("div",{className:(0,l.default)(n.call,n.step,n.bordered)},e.code),c=e=>i.createElement("div",{className:(0,l.default)(n.step,n.statement)},e.code),w=e=>i.createElement("div",{className:(0,l.default)(n.repeat,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),D=e=>i.createElement("div",{className:(0,l.default)(n.def,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),I=e=>i.createElement("div",{className:(0,l.default)(n.input,n.step)},e.code),d=e=>i.createElement("div",{className:(0,l.default)(n.if,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),s=e=>i.createElement("div",{className:(0,l.default)(n.else,n.step)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),o=e=>i.createElement("div",{className:n.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return i.createElement(r,{key:t,code:e.code});case"def":return i.createElement(D,{key:t,code:e.code,block:e.block});case"repeat":return i.createElement(w,{key:t,code:e.code,block:e.block});case"step":return i.createElement(M,{key:t,code:e.code});case"statement":return i.createElement(c,{key:t,code:e.code});case"input":return i.createElement(I,{key:t,code:e.code});case"if":return i.createElement(d,{key:t,code:e.code,block:e.block});case"elif":case"else":return i.createElement(s,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),g=o},82816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>r,default:()=>g,frontMatter:()=>M,metadata:()=>c,toc:()=>D});var i=a(83117),n=(a(67294),a(3905)),l=a(30592);const M={},r="Test 25h",c={unversionedId:"Programmieren-1/Testumgebung/25h-test/Probe",id:"Programmieren-1/Testumgebung/25h-test/Probe",title:"Test 25h",description:"Aufgabe 1",source:"@site/docs/Programmieren-1/04-Testumgebung/25h-test/Probe.md",sourceDirName:"Programmieren-1/04-Testumgebung/25h-test",slug:"/Programmieren-1/Testumgebung/25h-test/Probe",permalink:"/Programmieren-1/Testumgebung/25h-test/Probe",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/04-Testumgebung/25h-test/Probe.md",tags:[],version:"current",lastUpdatedAt:1659430495,formattedLastUpdatedAt:"2. Aug. 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Textverarbeitung",permalink:"/Programmieren-1/Python/strings"},next:{title:"v24",permalink:"/category/v24"}},w={},D=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"Zusatzaufgabe",id:"zusatzaufgabe",level:2}],I=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=I("Solution"),s=I("Figure"),o={toc:D};function g(e){let{components:t,...M}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,M,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"test-25h"},"Test 25h"),(0,n.kt)(d,{webKey:"9b210a53-d07e-4847-a355-65dd210192e6",title:"Testfragen",open:!0,mdxType:"Solution"},(0,n.kt)("h2",{id:"aufgabe-1"},"Aufgabe 1"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"Das Programm zeichnet einen 5er Stern."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\xc4ndern Sie das Programm so ab, dass es nun einen 7er Stern zeichnet."),(0,n.kt)("li",{parentName:"ol"},"F\xfcllen Sie den Stern mit Ihrer Lieblingsfarbe.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe1.py id=91bd2392-e7fc-40b4-945f-fce6e24e4daf versioned readonly",live_py:!0,title:"aufgabe1.py",id:"91bd2392-e7fc-40b4-945f-fce6e24e4daf",versioned:!0,readonly:!0},"from turtle import *\nspeed(0)\n\nfor i in range(5):\n    forward(80)\n    left(3 * 360 / 5)\n")),(0,n.kt)("h2",{id:"aufgabe-2"},"Aufgabe 2"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"\xdcbersetzen Sie das untenstehende Struktogramm in Python Code"),(0,n.kt)("div",{style:{maxWidth:"400px"},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,n.kt)(l.Z,{program:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"150")," Schritte vorw\xe4rts")},{type:"def",code:(0,n.kt)("span",null,"linie"),block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 rechts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 links")}]},{type:"def",code:(0,n.kt)("span",null,"dreieck"),block:[{type:"repeat",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"3")," mal wiederholen"),block:[{type:"call",code:"linie zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 links")}]}]},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"}],mdxType:"Strukto"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe2.py versioned id=4b72a23e-4835-42da-bc65-4142b8aa59fa readonly",live_py:!0,title:"aufgabe2.py",versioned:!0,id:"4b72a23e-4835-42da-bc65-4142b8aa59fa",readonly:!0},"from turtle import * \n")),(0,n.kt)("h2",{id:"aufgabe-3"},"Aufgabe 3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(3 Punkte)")),(0,n.kt)("p",null,"Finden und korrigieren Sie alle Fehler, so dass die folgende Ausgabe entsteht. Es gibt sowohl Syntaxfehler wie auch Logikfehler."),(0,n.kt)(s,{options:{},mdxType:"Figure"},(0,n.kt)("img",{src:a(27630).Z,width:"190",height:"115"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe3.py id=ed0a9530-ec45-49be-9c50-eb612e4ee8f3 versioned readonly",live_py:!0,title:"aufgabe3.py",id:"ed0a9530-ec45-49be-9c50-eb612e4ee8f3",versioned:!0,readonly:!0},"from turtle import *\n\ndef streifen(farbe):\n    color('farbe')\n    beginn_fill()\n    for i in() range(2)\n        forward(60)\n        left(90)\n        forward(100)\n        left(90)\n    forward(100)\n    end_fill\n\nstreifen('Gr\xfcn')\n streiffn('white')\nstreifen('red')\n\nhide_turtle()\n")),(0,n.kt)("h2",{id:"aufgabe-4"},"Aufgabe 4"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(4 Punkte)")),(0,n.kt)("p",null,"Schreiben Sie ein Programm, welches folgende Zeichnung erzeugt. Die Seitenl\xe4nge eines Zick-Zacks ist ",(0,n.kt)("inlineCode",{parentName:"p"},"20")," Einheiten gross, der Innenwinkel beim Zick-Zack betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"60\xb0"),". ",(0,n.kt)("em",{parentName:"p"},"(2.5 Punkte)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verwenden Sie Wiederholungen (",(0,n.kt)("em",{parentName:"li"},"0.5 Punkte"),")"),(0,n.kt)("li",{parentName:"ul"},"Schreiben Sie f\xfcr das Zeichnen einer einzelnen Zacke einen (selber definierten) Befehl ",(0,n.kt)("inlineCode",{parentName:"li"},"zickzack")," (",(0,n.kt)("em",{parentName:"li"},"1 Punkt"),").")),(0,n.kt)(s,{options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"resultat Aufgabe 4 --width=200px",src:a(86334).Z,width:"114",height:"38"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"resultat Aufgabe 4",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(s,{options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"Ein zickzack --width=200px",src:a(42554).Z,width:"676",height:"564"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ein zickzack",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe4.py versioned id=c6d2731d-bbd8-42cc-971a-bc8ee6303f21 readonly",live_py:!0,title:"aufgabe4.py",versioned:!0,id:"c6d2731d-bbd8-42cc-971a-bc8ee6303f21",readonly:!0},"from turtle import *\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"zusatzaufgabe"},"Zusatzaufgabe"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Wird f\xfcr das Erreichen der Note 6 nicht ben\xf6tigt, 2 Punkte)")),(0,n.kt)("p",null,"Auf ",(0,n.kt)("a",{parentName:"p",href:"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/"},"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/")," finden Sie Python-Code, welcher ein Herz zeichnet."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"R\xe4umen Sie den Code auf"),(0,n.kt)("li",{parentName:"ul"},"Schreiben Sie Ihren eigenen Namen in das Herz"),(0,n.kt)("li",{parentName:"ul"},"Machen Sie den Rand einen Stift der Breite ",(0,n.kt)("inlineCode",{parentName:"li"},"10")," ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zusatzaufgabe.py id=400ec5b0-ac1b-47b9-96c0-0f37ad8c7731 versioned readonly",live_py:!0,title:"zusatzaufgabe.py",id:"400ec5b0-ac1b-47b9-96c0-0f37ad8c7731",versioned:!0,readonly:!0},""))))}g.isMDXComponent=!0},27630:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jYmQ0MTNkZF9lNTM4XzQ0YTNfYjZiZF9mNzg3ZGE4MjdiZDJfc3ZnIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjExNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMTQ1LDE5MCwxMTUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI2MCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MCIgeTE9IjAiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xMDAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xMDAiIHgyPSI3LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNy4xMDU0MjczNTc2MDEwMDJlLTE1IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9Ii0xLjEyNjQyNzQ2Mjk2MDkyOTZlLTE0IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMS4xMjY0Mjc0NjI5NjA5Mjk2ZS0xNCIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5Mj0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAuMCwtMC4wIDYwLjAsLTAuMCA2MC4wMDAwMDAwMDAwMDAwMSwtMTAwLjAgNy4xMDU0MjczNTc2MDEwMDJlLTE1LC0xMDAuMDAwMDAwMDAwMDAwMDEgLTEuMTI2NDI3NDYyOTYwOTI5NmUtMTQsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgNTkuOTk5OTk5OTk5OTk5OTg2LDQuODQ5MDY4NzQ1NjYyMzYxZS0xNiIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiBncmVlbjsgc3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5MT0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk5IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5OSIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkxPSItOTkuOTk5OTk5OTk5OTk5OTkiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMTQiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNjAuMDAwMDAwMDAwMDAwMDE0IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9IjU5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI1OS45OTk5OTk5OTk5OTk5NyIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1OS45OTk5OTk5OTk5OTk5ODYsNC44NDkwNjg3NDU2NjIzNjFlLTE2IDExOS45OTk5OTk5OTk5OTk5OSwxLjUxODA2Njg0NjQzMzQ0NzZlLTE0IDEyMC4wMDAwMDAwMDAwMDAwMSwtOTkuOTk5OTk5OTk5OTk5OTkgNjAuMDAwMDAwMDAwMDAwMDE0LC0xMDAuMDAwMDAwMDAwMDAwMDEgNTkuOTk5OTk5OTk5OTk5OTcsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgMTE5Ljk5OTk5OTk5OTk5OTk3LDEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogd2hpdGU7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5NyIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxNzkuOTk5OTk5OTk5OTk5OTciIHkyPSI0LjQ1NzIxOTE2NDM4NzA5NTZlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjE3OS45OTk5OTk5OTk5OTk5NyIgeTE9IjQuNDU3MjE5MTY0Mzg3MDk1NmUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMDMiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTYiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTgwLjAwMDAwMDAwMDAwMDAzIiB5MT0iLTk5Ljk5OTk5OTk5OTk5OTk2IiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iLTEwMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHkxPSItMTAwIiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMTQiIHkxPSIwIiB4Mj0iMTgwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iNC40MDg3Mjg0NzY5MzA0NzFlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSIxMTkuOTk5OTk5OTk5OTk5OTcsMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCAxNzkuOTk5OTk5OTk5OTk5OTcsNC40NTcyMTkxNjQzODcwOTU2ZS0xNCAxODAuMDAwMDAwMDAwMDAwMDMsLTk5Ljk5OTk5OTk5OTk5OTk2IDEyMC4wMDAwMDAwMDAwMDAwMywtMTAwLjAgMTIwLjAwMDAwMDAwMDAwMDE0LC0wLjAgMTgwLjAwMDAwMDAwMDAwMDE0LDQuNDA4NzI4NDc2OTMwNDcxZS0xNCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiByZWQ7IHN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkxPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkyPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJyZWQiIGZpbGw9InJlZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwMDAwMDAwMTQsNC40MDg3Mjg0NzY5MzA0NzFlLTE0KSByb3RhdGUoLTExNzAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},42554:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/triangle-15c1e1c28811b5a297b20d164a52d982.png"},86334:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jNmQyNzMxZF9iYmQ4XzQyY2NfOTcxYV9iYzhlZTYzMDNmMjFfc3ZnIiB3aWR0aD0iMTE0LjMzMDEwODY0MjU3ODEyIiBoZWlnaHQ9IjM3LjYxNDczMDgzNDk2MDk0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0NSwyMjcuNjc5NDg5MTM1NzQyMiwxMTQuMzMwMTA4NjQyNTc4MTIsMzcuNjE0NzMwODM0OTYwOTQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSIyMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjAuMDAwMDAwMDAwMDAwMDA0IiB5MT0iMCIgeDI9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjQwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjQwLjAwMDAwMDAwMDAwMDAxIiB5MT0iMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iLTE3LjMyMDUwODA3NTY4ODc3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAuMDAwMDAwMDAwMDAwMDEiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9IjAiIHgyPSI3MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjcwLjAwMDAwMDAwMDAwMDAxIiB5MT0iLTE3LjMyMDUwODA3NTY4ODc3IiB4Mj0iODAuMDAwMDAwMDAwMDAwMDEiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iODAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iOTAuMDAwMDAwMDAwMDAwMDEiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI5MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjEwMC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMDAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iMTAwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC4wMDAwMDAwMDAwMDAwMSwtMC4wKSByb3RhdGUoLTE1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+PC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="}}]);