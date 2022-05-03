"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11400],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var i=n(667294);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,I=function(e,t){if(null==e)return{};var n,i,I={},g=Object.keys(e);for(i=0;i<g.length;i++)n=g[i],t.indexOf(n)>=0||(I[n]=e[n]);return I}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(i=0;i<g.length;i++)n=g[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(I[n]=e[n])}return I}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,I=e.mdxType,g=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(n),s=I,C=m["".concat(l,".").concat(s)]||m[s]||o[s]||g;return n?i.createElement(C,r(r({ref:t},d),{},{components:n})):i.createElement(C,r({ref:t},d))}));function s(e,t){var n=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var g=n.length,r=new Array(g);r[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:I,r[1]=a;for(var c=2;c<g;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(667294),I={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},g=n(592814),r=n(51436),a=n(386010),l=function(e){return i.createElement("span",{className:I.details},i.createElement("span",{className:(0,a.default)("badge badge--secondary",I.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:I.badgeItem},i.createElement("span",{className:(0,a.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,a.default)("badge badge--secondary",I.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:I.badgeItem},i.createElement("span",{className:(0,a.default)("badge badge--secondary")},i.createElement(g.G,{icon:r.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),i.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},o=function(e){if(e.isInline)return i.createElement(d,e);var t=i.useState(!1),n=(t[0],t[1]),g=i.useState(!1),r=g[0],c=g[1],o=e.caption&&"undefined"!==e.caption,m=e.bib||o;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,a.default)(I.container,e.options.noMargins&&I.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,i,I,g,r;t=e.currentTarget.getBoundingClientRect(),i=e.clientX,I=e.clientY,g=t.left<=i&&t.right>=i,r=t.top<=I&&t.bottom>=I,g&&r||n(!1)}},i.createElement(d,e),m&&i.createElement("figcaption",null,o&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,a.default)(I.bib,r?I.visible:void 0),onClick:function(){return c(!r)}},"@"),r&&i.createElement(l,e.bib)))}},548714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return C},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var i=n(583117),I=n(480102),g=(n(667294),n(603905)),r=n(884384),a=["components"],l={title:"1. Von-Neumann-Architektur"},c="1 Von-Neumann-Architektur",d={unversionedId:"Computer/Rechnerarchitektur/von-neumann",id:"version-24K/Computer/Rechnerarchitektur/von-neumann",title:"1. Von-Neumann-Architektur",description:"Die Rechnerarchitektur beschreibt die interne Organisation eines Computers. Es gibt zwei verbreitete Architekturen. Beide sind gegen Ende des zweiten Weltkriegs entstanden, als die ersten elektronischen Computer entwickelt worden sind:",source:"@site/versioned_docs/version-24K/07-Computer/07-Rechnerarchitektur/01-von-neumann.md",sourceDirName:"07-Computer/07-Rechnerarchitektur",slug:"/Computer/Rechnerarchitektur/von-neumann",permalink:"/24K/Computer/Rechnerarchitektur/von-neumann",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/07-Computer/07-Rechnerarchitektur/01-von-neumann.md",tags:[],version:"24K",sidebarPosition:1,frontMatter:{title:"1. Von-Neumann-Architektur"},sidebar:"version-24K/sidebar",previous:{title:"3. Rechnerarchitektur",permalink:"/24K/category/3-rechnerarchitektur"},next:{title:"2. Bussystem",permalink:"/24K/Computer/Rechnerarchitektur/bus"}},o={},m=[{value:"Von Neumann-Architektur",id:"von-neumann-architektur",level:2},{value:"\u2b50 Harvard-Architektur",id:"-harvard-architektur",level:2}],s={toc:m};function C(e){var t=e.components,l=(0,I.Z)(e,a);return(0,g.kt)("wrapper",(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"1-von-neumann-architektur"},"1 Von-Neumann-Architektur"),(0,g.kt)("p",null,"Die ",(0,g.kt)("strong",{parentName:"p"},"Rechnerarchitektur")," beschreibt die interne Organisation eines Computers. Es gibt zwei verbreitete Architekturen. Beide sind gegen Ende des zweiten Weltkriegs entstanden, als die ersten elektronischen Computer entwickelt worden sind:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Von Neumann-Architektur"),(0,g.kt)("li",{parentName:"ul"},"Harvard-Architeketur")),(0,g.kt)("h2",{id:"von-neumann-architektur"},"Von Neumann-Architektur"),(0,g.kt)("p",null,"Der Mathematiker John von Neumann hat 1945 eine Modellarchitektur f\xfcr Computer vorgestellt, welche bis heute als Grundlage f\xfcr die Entwicklung von Computern dient."),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)(r.Z,{bib:{author:"United States Department of Energy",licence:"USGOV",licence_url:"https://commons.wikimedia.org/wiki/File:JohnvonNeumann-LosAlamos.jpg"},caption:"John von Neumann",options:{},isInline:!1,src:n(76220).Z,alt:"John von Neumann",mdxType:"Image"})),(0,g.kt)("p",null,"Die ",(0,g.kt)("strong",{parentName:"p"},"Von-Neumann-Architektur")," hat folgende Eigenschaften:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Die Maschine ist nicht auf eine bestimmte Aufgabe zugeschnitten."),(0,g.kt)("li",{parentName:"ul"},"Zur L\xf6sung einer Aufgabe dient ein austauschbares Programm."),(0,g.kt)("li",{parentName:"ul"},"Programme und Daten werden im Speicher abgelegt."),(0,g.kt)("li",{parentName:"ul"},"Ein Programm besteht aus einer Abfolge von einfachen Befehlen."),(0,g.kt)("li",{parentName:"ul"},"Zu jedem Zeitpunkt wird genau ein Befehl ausgef\xfchrt, der ",(0,g.kt)("strong",{parentName:"li"},"genau einen Datenwert \xe4ndern")," kann.")),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)(r.Z,{bib:void 0,caption:"Von-Neumann-Architektur",options:{},isInline:!1,src:n(409806).Z,alt:"Von-Neumann-Architektur",mdxType:"Image"})),(0,g.kt)("p",null,"Ein Von-Neumann-Computer besteht aus folgenden Komponenten:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Das ",(0,g.kt)("strong",{parentName:"li"},"Rechenwerk")," f\xfchrt numerische und logische Berechnungen durch (bspw. eine bin\xe4re Addition)."),(0,g.kt)("li",{parentName:"ul"},"Das ",(0,g.kt)("strong",{parentName:"li"},"Steuerwerk")," steuert die Befehlsverarbeitung im Computer."),(0,g.kt)("li",{parentName:"ul"},"Das ",(0,g.kt)("strong",{parentName:"li"},"Speicher")," speichert Befehle und Daten."),(0,g.kt)("li",{parentName:"ul"},"Das ",(0,g.kt)("strong",{parentName:"li"},"Ein- und Ausgabewerk")," dient der Kommunikation mit der Aussenwelt.")),(0,g.kt)("p",null,"Heute sind das Rechenwerk und das Steuerwerk normalerweise im ",(0,g.kt)("strong",{parentName:"p"},"Prozessor")," (engl. ",(0,g.kt)("em",{parentName:"p"},"central processing unit, CPU"),") zusammengefasst. Alle Komponenten sind \xfcber ein ",(0,g.kt)("strong",{parentName:"p"},"Bussystem")," miteinander verbunden."),(0,g.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,g.kt)("div",{parentName:"div",className:"admonition-heading"},(0,g.kt)("h5",{parentName:"div",id:"weit-verbreitet"},(0,g.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,g.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,g.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Weit verbreitet")),(0,g.kt)("div",{parentName:"div",className:"admonition-content"},(0,g.kt)("p",{parentName:"div"},"Die ",(0,g.kt)("strong",{parentName:"p"},"Von-Neumann-Architektur")," ist heute in den meisten Computern Standard \u2013 insbesondere bei Personalcomputern und Servern."))),(0,g.kt)("h2",{id:"-harvard-architektur"},"\u2b50 Harvard-Architektur"),(0,g.kt)("p",null,"Der Name \xabHarvard-Architektur\xbb hat seinen Ursprung im elektromechanischen Computer ",(0,g.kt)("em",{parentName:"p"},"Mark I"),", der in Kooperation zwischen IBM und der Harvard-Universit\xe4t entwickelt und 1944 in Betrieb genommen wurde."),(0,g.kt)("p",null,"Im Unterschied zur Von-Neumann-Architektur sind bei der Harvard-Architektur Daten und Befehle getrennt. Dies f\xfchrt zu zwei Vorteilen:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Daten k\xf6nnen schneller verarbeitet werden. Bei der Von-Neumann-Architektur wird der Bus durch das Laden von Befehlen aus dem Speicher blockiert."),(0,g.kt)("li",{parentName:"ul"},"Programme sind besser vor Manipulationen und Fehlern gesch\xfctzt.")),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)(r.Z,{bib:void 0,caption:"Harvard-Architektur",options:{},isInline:!1,src:n(811552).Z,alt:"Harvard-Architektur",mdxType:"Image"})),(0,g.kt)("p",null,"Als Nachteil ist zu erw\xe4hnen, dass im Vergleich zur Von-Neumann-Architektur die Hardwarekosten h\xf6her sind."))}C.isMDXComponent=!0},811552:function(e,t,n){t.Z=n.p+"assets/images/01-harvard-architecture-aac9015a356a9eab8ed476818211fa07.svg"},76220:function(e,t,n){t.Z=n.p+"assets/images/01-john-von-neumann-affe497ae340702f3cdfdf1f9b15eb81.jpg"},409806:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9Ijk0NHB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iODAwIiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iODI0LjgxMXB4IiB5PSIyMzYuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkF1c2dhYmU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3BlaWNoZXJ3ZXJrIj4KICAgICAgICA8cmVjdCB4PSIxNDQiIHk9IjMwNCIgd2lkdGg9IjY1NSIgaGVpZ2h0PSI5NiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MTAuNDc1cHgiIHk9IjM4OC43MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ3ZXJrPC90ZXh0PgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLW4iIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIG4iPgogICAgICAgICAgICA8cmVjdCB4PSI2NTYiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjY2NS4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIG48L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxjaXJjbGUgY3g9IjU5MiIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwOCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYyNCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjY0MCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTMiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDMiPgogICAgICAgICAgICA8cmVjdCB4PSI0NDgiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjQ1Ny4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDM8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTIiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDIiPgogICAgICAgICAgICA8cmVjdCB4PSIzMDQiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjMxMy4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDI8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTEiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDEiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE3MC41MzFweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9IlByb3plc3NvciI+CiAgICAgICAgPHJlY3QgeD0iMTQ0IiB5PSIxNiIgd2lkdGg9IjY1NiIgaGVpZ2h0PSIxNzYiIHN0eWxlPSJmaWxsOnJnYigyMDAsMjMwLDIwMSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDI2LjI0OHB4IiB5PSIzNi4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29yPC90ZXh0PgogICAgICAgIDxnIGlkPSJSZWNoZW53ZXJrIj4KICAgICAgICAgICAgPHJlY3QgeD0iNDgwIiB5PSI0OC41IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNTkyLjkxNnB4IiB5PSI2OC44OTVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UmVjaGVud2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTIiIHNlcmlmOmlkPSJSZWdpc3RlciAyIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjY0MCIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNjY3LjE2OHB4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTEiIHNlcmlmOmlkPSJSZWdpc3RlciAxIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ5NiIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNTI0LjQ1M3B4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDE8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlN0ZXVlcndlcmsiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjQ4LjUiIHdpZHRoPSIzMDQiIGhlaWdodD0iMTI4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIyNjAuOThweCIgeT0iNjkuMDhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3RldWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IkJlZmVobHNyZWdpc3RlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjMzMC4xNDVweCIgeT0iMTQ4LjU1MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5CZWZlaGxzcmVnaXN0ZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMzIyLjEwMXB4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkRla29kaWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlByb2dyYW1tesOkaGxlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIxNzYiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE4MC4yODFweCIgeT0iMTQ4LjQ4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5Qcm9ncmFtbXrDpGhsZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMTk5LjI0M3B4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlrDpGhsd2VyazwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3lzdGVtYnVzIj4KICAgICAgICA8cmVjdCB4PSIxOTIiIHk9IjIwOCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE3NiwxOTAsMTk3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MjMuMDExcHgiIHk9IjIzNi45MzdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnVzc3lzdGVtPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IkVpbmdhYmUiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDIuODgxcHgiIHk9IjIzNi45ODVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+RWluZ2FiZTwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xODAsMjI2TDE5MiwyMzJMMTgwLDIzOEMxODMsMjM1IDE4MywyMjkgMTgwLDIyNloiLz4KICAgIDxwYXRoIGQ9Ik0xNDQsMjMyTDE4Mi40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTIzNCwxOTYuNUwyNDAsMjA4LjVMMjQ2LDE5Ni41QzI0MywxOTkuNSAyMzcsMTk5LjUgMjM0LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTIzNCwxNzIuNUwyNDAsMTYwLjVMMjQ2LDE3Mi41QzI0MywxNjkuNSAyMzcsMTY5LjUgMjM0LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTI0MCwxOTguOUwyNDAsMTcwLjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03ODgsMjI2TDgwMCwyMzJMNzg4LDIzOEM3OTEsMjM1IDc5MSwyMjkgNzg4LDIyNloiLz4KICAgIDxwYXRoIGQ9Ik03NTIsMjMyTDc5MC40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTU2NiwxNzIuNUw1NjAsMTYwLjVMNTU0LDE3Mi41QzU1NywxNjkuNSA1NjMsMTY5LjUgNTY2LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTU2NiwxOTYuNUw1NjAsMjA4LjVMNTU0LDE5Ni41QzU1NywxOTkuNSA1NjMsMTk5LjUgNTY2LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTU2MCwxNzAuMUw1NjAsMTk4LjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTcyLjVMNzA0LDE2MC41TDY5OCwxNzIuNUM3MDEsMTY5LjUgNzA3LDE2OS41IDcxMCwxNzIuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTk2LjVMNzA0LDIwOC41TDY5OCwxOTYuNUM3MDEsMTk5LjUgNzA3LDE5OS41IDcxMCwxOTYuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MDQsMTcwLjFMNzA0LDE5OC45IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8cGF0aCBkPSJNMzkwLDE3Mi41TDM4NCwxNjAuNUwzNzgsMTcyLjVDMzgxLDE2OS41IDM4NywxNjkuNSAzOTAsMTcyLjVaIi8+CiAgICA8cGF0aCBkPSJNMzkwLDE5Ni41TDM4NCwyMDguNUwzNzgsMTk2LjVDMzgxLDE5OS41IDM4NywxOTkuNSAzOTAsMTk2LjVaIi8+CiAgICA8cGF0aCBkPSJNMzg0LDE3MC4xTDM4NCwxOTguOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI2OEw0NzEuNSwyNTZMNDY1LjUsMjY4QzQ2OC41LDI2NSA0NzQuNSwyNjUgNDc3LjUsMjY4WiIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI5Mkw0NzEuNSwzMDRMNDY1LjUsMjkyQzQ2OC41LDI5NSA0NzQuNSwyOTUgNDc3LjUsMjkyWiIvPgogICAgPHBhdGggZD0iTTQ3MS41LDI2NS42TDQ3MS41LDI5NC40IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+Cjwvc3ZnPgo="}}]);