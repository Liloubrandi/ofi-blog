"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=i,p=g["".concat(d,".").concat(u)]||g[u]||m[u]||a;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const a={title:"9. Ebenen"},o="9. Ebenen",l={unversionedId:"Computer/basics/Ebenen",id:"Computer/basics/Ebenen",title:"9. Ebenen",description:"Wie die Netzwerke kann auch der Computer selber auf verschiedenen Ebenen betrachtet werden.",source:"@site/docs/Computer/01-basics/09-Ebenen.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Ebenen",permalink:"/Computer/basics/Ebenen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/09-Ebenen.md",tags:[],version:"current",lastUpdatedAt:1659430238,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:9,frontMatter:{title:"9. Ebenen"},sidebar:"sidebar",previous:{title:"8. Stromversorgung",permalink:"/Computer/basics/Stromversorgung"},next:{title:"2. Logische Gatter",permalink:"/Computer/gates/"}},d={},c=[{value:"Elektronik",id:"elektronik",level:2},{value:"Digitale Logik",id:"digitale-logik",level:2},{value:"Rechnerarchitektur",id:"rechnerarchitektur",level:2},{value:"Betriebssystem",id:"betriebssystem",level:2},{value:"Anwendungen",id:"anwendungen",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=s("Figure"),g=s("SourceRef"),u=s("Answer"),p={toc:c};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"9-ebenen"},"9. Ebenen"),(0,i.kt)("p",null,"Wie die Netzwerke kann auch der Computer selber auf verschiedenen ",(0,i.kt)("strong",{parentName:"p"},"Ebenen")," betrachtet werden."),(0,i.kt)(m,{options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hardware-Ebenen",src:n(60666).Z,width:"528",height:"272"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hardware-Ebenen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(g,{parentName:"figcaption",bib:{author:"Thomas Jampen",source:"https://gitlab.gymkirchenfeld.ch/teach/computer/-/blob/main/1-basics/9-layers/layers.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)("h2",{id:"elektronik"},"Elektronik"),(0,i.kt)("p",null,"Auf der Ebene der ",(0,i.kt)("strong",{parentName:"p"},"Elektronik")," werden die Zust\xe4nde 0 und 1 durch unterschiedliche Spannungen dargestellt. Das grundlegende Bauelement f\xfcr digitale Schaltungen ist der ",(0,i.kt)("strong",{parentName:"p"},"Transistor"),"."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5wIRJN3DN_8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"transistoren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Transistoren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sehen Sie sich das obige Video an. Und beschreiben Sie in eigenen Worten:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"welche Analogie aus dem Alltag passt zum Transistor?"),(0,i.kt)("li",{parentName:"ul"},"wozu wird ein Transistor bei Computern eingesetzt?")),(0,i.kt)(u,{type:"text",webKey:"77218889-54e7-4ff2-ac32-10a2de6cb927",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"digitale-logik"},"Digitale Logik"),(0,i.kt)("p",null,"In der ",(0,i.kt)("strong",{parentName:"p"},"digitalen Logik")," werden aus den Grundelementen (",(0,i.kt)("strong",{parentName:"p"},"logische Gatter"),") komplexe Schaltungen aufgebaut, welche z.B. Zahlen addieren oder Werte speichern k\xf6nnen."),(0,i.kt)("h2",{id:"rechnerarchitektur"},"Rechnerarchitektur"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Rechnerarchitektur")," legt fest, wie verschiedene Bauelemente (wie z.B. Rechenwerk und Speicher) miteinander verkn\xfcpft werden und in welcher zeitlichen Abfolge Daten untereinander ausgetauscht werden. Daraus ergeben sich die grundlegenden Befehle (",(0,i.kt)("strong",{parentName:"p"},"Maschinencode"),"), welche der Computer versteht."),(0,i.kt)("h2",{id:"betriebssystem"},"Betriebssystem"),(0,i.kt)("p",null,"Das ",(0,i.kt)("strong",{parentName:"p"},"Betriebssystem")," kontrolliert und koordiniert den Zugriff auf die Hardware f\xfcr die verschiedenen Anwendungen, welche auf dem Computer ausgef\xfchrt werden. Es stellt grundlegende Funktionen wie die Dateiverwaltung und Netzwerkkommunikation zu Verf\xfcgung. Das Betriebssystem enth\xe4lt viel Programmcode, der speziell f\xfcr die eingesetzte Rechnerarchitektur und -hardware geschrieben ist."),(0,i.kt)("h2",{id:"anwendungen"},"Anwendungen"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Anwendungen")," unterst\xfctzen den/die Benutzer/in in der t\xe4glichen Arbeit. Sie werden in ",(0,i.kt)("strong",{parentName:"p"},"h\xf6heren Programmiersprachen")," geschrieben, d.h. sie brauchen sich dank des Betriebssystems nicht um die eingesetzte Hardware zu k\xfcmmern. Solche Programme k\xf6nnen vom Prozessor nicht direkt ausgef\xfchrt, sondern m\xfcssen zuerst noch von einem Compiler in Maschinencode \xfcbersetzt werden. Dies erleichtert uns Menschen die Arbeit beim Programmieren, da der Programmcode nicht an bestimmte Hardware und Architektur gebunden und damit allgemeing\xfcltiger und einfacher ist."))}b.isMDXComponent=!0},60666:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjUyOHB4IiBoZWlnaHQ9IjI3MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMjA4IiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjI0LDIyNCwyMjQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEzMi4zOThweCIgeT0iMjM3LjE3NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+RWxla3Ryb25payAoU3Bhbm51bmcsIFN0cm9tKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNjAiIHdpZHRoPSI0OTYiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTc3LjQ0N3B4IiB5PSIxODkuMTc2cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5EaWdpdGFsZSBMb2dpayAoQml0cyk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjM5LDE1NCwxNTQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9Ijk5LjYxcHgiIHk9IjE0MS4xNzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPlJlY2huZXJhcmNoaXRla3R1ciAoTWFzY2hpbmVuY29kZSk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTIiIHdpZHRoPSI0OTYiIGhlaWdodD0iMTAwIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEyMi42MzNweCIgeT0iNDUuNTYxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5BbndlbmR1bmdlbiAoUHJvZ3JhbW1jb2RlKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE5MiIgeT0iNjQiIHdpZHRoPSIzMjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjI0LDEzMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjgzLjU1OHB4IiB5PSI5My4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkJldHJpZWJzc3lzdGVtPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K"}}]);