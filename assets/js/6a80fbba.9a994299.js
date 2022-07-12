"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,u=m["".concat(s,".").concat(c)]||m[c]||f[c]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Ports"},o="Ports [^1]",l={unversionedId:"Netzwerke-of/Begriffe/ports",id:"Netzwerke-of/Begriffe/ports",title:"Ports",description:"Wozu ben\xf6tigt man Ports?",source:"@site/docs/Netzwerke-of/010-Begriffe/3-ports.md",sourceDirName:"Netzwerke-of/010-Begriffe",slug:"/Netzwerke-of/Begriffe/ports",permalink:"/Netzwerke-of/Begriffe/ports",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/010-Begriffe/3-ports.md",tags:[],version:"current",lastUpdatedAt:1630272912,formattedLastUpdatedAt:"29.8.2021",sidebarPosition:3,frontMatter:{title:"Ports"},sidebar:"sidebar",previous:{title:"MAC-Adresse",permalink:"/Netzwerke-of/Begriffe/mac-adresse"},next:{title:"Pr\xfcfung",permalink:"/Netzwerke-of/Pruefung"}},s={},p=[{value:"Wozu ben\xf6tigt man Ports?",id:"wozu-ben\xf6tigt-man-ports",level:2},{value:"Well-known Ports",id:"well-known-ports",level:2}],d={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ports-"},"Ports ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"wozu-ben\xf6tigt-man-ports"},"Wozu ben\xf6tigt man Ports?"),(0,a.kt)("p",null,"Ein Computer, der sich in einem Netzwerk befindet, hat meist etliche Verbindungen gleichzeitig zu vielen anderen Computern ge\xf6ffnet. Sogar zwei Computer untereinander verwenden h\xe4ufig mehrere Verbindungen gleichzeitig:"),(0,a.kt)("p",null,"So k\xf6nnte ein Benutzer auf seinem Computer im Browser eine Webseite besuchen, w\xe4hrend das Betriebssystem gerade den Update-Server kontaktiert \u2013 beides ben\xf6tigt eine DNS-Abfrage, d.h. Verbindungen zum DNS-Server."),(0,a.kt)("p",null,"Auf der Vermittlungsschicht kontaktiert derselbe Client mit seiner IP-Adresse f\xfcr beide Verbindungen die IP-Adresse desselben (DNS-)Servers. Eine Stufe h\xf6her \u2013 auf der Transportschicht \u2013 m\xfcssen die Verbindungen unterschieden werden k\xf6nnen. Schliesslich sollen die beiden Antworten ja nicht vertauscht werden. Daher verwendet man Ports \u2013 eine 16-bit Zahl (sprich: Werte von 0 - 65'535)."),(0,a.kt)("h2",{id:"well-known-ports"},"Well-known Ports"),(0,a.kt)("p",null,"Auf der Serverseite werden in der Regel stets dieselben Ports eingesetzt \u2013 schliesslich muss ein Client wissen, auf welchem Port er den gew\xfcnschten Dienst erreichen kann."),(0,a.kt)("p",null,"Einige bekannte Ports sind:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Portnummer"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Dienst"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"25")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol (SMTP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"53")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Domain Name System (DNS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"80")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol (HTTP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"143")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol (IMAP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"465")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (SMTPS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"443")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (HTTPS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"993")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (IMAPS)")))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=240119"},"rothe.io Ports"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);