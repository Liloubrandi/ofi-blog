"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[34429],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),o=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,k=p["".concat(m,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30592:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},i=n(86010),l=function(e){return r.createElement("div",{className:a.step},e.code)},s=function(e){return r.createElement("div",{className:(0,i.default)(a.call,a.step,a.bordered)},e.code)},m=function(e){return r.createElement("div",{className:(0,i.default)(a.step,a.statement)},e.code)},o=function(e){return r.createElement("div",{className:(0,i.default)(a.repeat,a.step,a.indent)},r.createElement("div",{className:a.header},e.code),r.createElement("div",{className:a.body},e.block&&r.createElement(k,{program:e.block})))},c=function(e){return r.createElement("div",{className:(0,i.default)(a.def,a.step,a.indent)},r.createElement("div",{className:a.header},e.code),r.createElement("div",{className:a.body},e.block&&r.createElement(k,{program:e.block})))},d=function(e){return r.createElement("div",{className:(0,i.default)(a.input,a.step)},e.code)},p=function(e){return r.createElement("div",{className:(0,i.default)(a.if,a.step,a.indent)},r.createElement("div",{className:a.header},e.code),r.createElement("div",{className:a.body},e.block&&r.createElement(k,{program:e.block})))},u=function(e){return r.createElement("div",{className:(0,i.default)(a.else,a.step)},r.createElement("div",{className:a.header},e.code),r.createElement("div",{className:a.body},e.block&&r.createElement(k,{program:e.block})))},k=function(e){return r.createElement("div",{className:a.strukto},e.program.map((function(e,t){switch(e.type){case"call":return r.createElement(s,{key:t,code:e.code});case"def":return r.createElement(c,{key:t,code:e.code,block:e.block});case"repeat":return r.createElement(o,{key:t,code:e.code,block:e.block});case"step":return r.createElement(l,{key:t,code:e.code});case"statement":return r.createElement(m,{key:t,code:e.code});case"input":return r.createElement(d,{key:t,code:e.code});case"if":return r.createElement(p,{key:t,code:e.code,block:e.block});case"elif":case"else":return r.createElement(u,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},g=k},69818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(30592),s=["components"],m={title:"Struktogramme"},o="Struktogramme",c={unversionedId:"Programmieren-1/Algorithmen/Struktogramme",id:"Programmieren-1/Algorithmen/Struktogramme",title:"Struktogramme",description:"Struktogramme sind eine M\xf6glichkeit, Programme und Algorithmen grafisch darzustellen. Diese Dartstellungsform wurde 1973 von Isaac Nassi und Ben Shneiderman vorgeschlagen und heisst deshalb auch Nassi-Shneiderman-Diagramm.",source:"@site/docs/Programmieren-1/01-Algorithmen/06-Struktogramme.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Struktogramme",permalink:"/Programmieren-1/Algorithmen/Struktogramme",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/06-Struktogramme.md",tags:[],version:"current",lastUpdatedAt:1641740591,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:6,frontMatter:{title:"Struktogramme"},sidebar:"sidebar",previous:{title:"Flussdiagramm",permalink:"/Programmieren-1/Algorithmen/Flussdiagramm"},next:{title:"Uebungen",permalink:"/category/uebungen"}},d={},p=[{value:"Sequenz \ud83d\udc63",id:"sequenz-",level:2},{value:"Wiederholung \ud83d\udd01",id:"wiederholung-",level:2},{value:"Unterprogramm \ud83c\udff7",id:"unterprogramm-",level:2},{value:"Parameter \u2295 \u2296",id:"parameter--",level:2},{value:"Variablen",id:"variablen",level:3}],u={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"struktogramme"},"Struktogramme"),(0,i.kt)("p",null,"Struktogramme sind eine M\xf6glichkeit, Programme und Algorithmen grafisch darzustellen. Diese Dartstellungsform wurde 1973 von Isaac Nassi und Ben Shneiderman vorgeschlagen und heisst deshalb auch Nassi-Shneiderman-Diagramm.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"sequenz-"},"Sequenz \ud83d\udc63"),(0,i.kt)("p",null,"In einem Struktogramm wird jeder Befehl in einen rechteckigen Kasten geschrieben. Befehle m\xfcssen nicht in einer Programmiersprache geschrieben werden, ",(0,i.kt)("em",{parentName:"p"},"Parameter")," werden ",(0,i.kt)("u",null,"unterstrichen"),"."),(0,i.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(100)\nleft(90)\nforward(50) \n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)(l.Z,{program:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"90"),"\xb0 nach links")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"50")," Schritte vorw\xe4rts")}],mdxType:"Strukto"}))),(0,i.kt)("h2",{id:"wiederholung-"},"Wiederholung \ud83d\udd01"),(0,i.kt)("p",null,"Eine Wiederholung wird wie folgt dargestellt."),(0,i.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nfor i in range(4):\n    forward(100)\n    left(90)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)(l.Z,{program:[{type:"repeat",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"4")," mal wiederholen:"),block:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"90"),"\xb0 nach links")}]}],mdxType:"Strukto"}))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"bemerke"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bemerke")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Beim Struktogramm wird der wiederholte Teil durch die ",(0,i.kt)("strong",{parentName:"li"},"Einr\xfcckung")," ersichtlich. Auch in Python werden wiederholte Sequenzen (Zeilen 4-5) visuell mit einem Tabulator einger\xfcckt."),(0,i.kt)("li",{parentName:"ul"},"Der Doppelpunkt am Zeilenende zeigt an, dass eine einger\xfcckte Sequenz (beim Programmieren spricht man von einem ",(0,i.kt)("em",{parentName:"li"},"Codeblock"),") folgt.")))),(0,i.kt)("h2",{id:"unterprogramm-"},"Unterprogramm \ud83c\udff7"),(0,i.kt)("p",null,"Eine Sequenz kann mit einem Namen versehen werden. Anstatt immer die ganze Sequenz aufzuschreiben, gen\xfcgt es den Namen aufzuschreiben."),(0,i.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ndef zick_zack():\n    left(60)\n    forward(30)\n    right(120)\n    forward(30)\n    left(60)\n\n\n\nforward(100)\nzick_zack()\nzick_zack()\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)(l.Z,{program:[{type:"def",code:"zick_zack:",block:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"60"),"\xb0 nach links")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"30")," Schritte vorw\xe4rts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"120"),"\xb0 nach rechts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"30")," Schritte vorw\xe4rts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"60"),"\xb0 nach links")}]},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"call",code:(0,i.kt)("span",null,"zick_zack")},{type:"call",code:(0,i.kt)("span",null,"zick_zack")}],mdxType:"Strukto"}))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"bemerke-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bemerke")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Um ein Unterprogramm aufzurufen, wird beim Struktogramm der Kasten mit doppelten Seitenstrichen markiert, bei Python werden runde Klammern am Ende des Namens angegeben."),(0,i.kt)("li",{parentName:"ul"},"Den Namen f\xfcr Unterprogramm kann beliebig gew\xe4hlt werden, sofern er nicht mit einer Zahl beginnt und keine Sonderzeichen enth\xe4lt. ",(0,i.kt)("strong",{parentName:"li"},"Leerschl\xe4ge")," und ",(0,i.kt)("strong",{parentName:"li"},"Bindestriche")," sind nicht erlaubt - stattdessen werden Unterstriche ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," verwendet: Statt ",(0,i.kt)("inlineCode",{parentName:"li"},"zick zack")," wird der Name ",(0,i.kt)("inlineCode",{parentName:"li"},"zick_zack")," verwendet. ")))),(0,i.kt)("h2",{id:"parameter--"},"Parameter \u2295 \u2296"),(0,i.kt)("p",null,"Ein Unterprogramm kann mit ",(0,i.kt)("strong",{parentName:"p"},"Parametern")," aufgerufen werden."),(0,i.kt)("p",null,"Parameter werden jeweils ",(0,i.kt)("u",null,"unterstrichen"),", so dass klar ist, welche Werte sich \xe4ndern k\xf6nnen."),(0,i.kt)("h3",{id:"variablen"},"Variablen"),(0,i.kt)("p",null,"Bei Programmen wird zwischen Parametern und Variablen unterschieden. Genau wie Paramter k\xf6nnen diese das Ergebnis eines Algorithmus \xe4ndern. Sie werden in einem Struktogramm speziell als markiert, damit klar ist, dass eigentlich der in der Variable gespeicherte Wert gemeint ist."),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"gr\xf6sse = input('Wie gross bist du [cm]?')\nprint(f'Ich bin {gr\xf6sse} cm gross')\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)(l.Z,{program:[{type:"input",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"gr\xf6sse")," = Wie gross bist du [cm]?")},{type:"step",code:(0,i.kt)("span",null,"Ausgabe: Ich bin ",(0,i.kt)("span",{className:"var"},"gr\xf6sse")," cm gross.")}],mdxType:"Strukto"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=prog1&p=905106"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);