"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[88832],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(n),f=a,p=h["".concat(c,".").concat(f)]||h[f]||d[f]||i;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),s=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:s.Xjp}))))},l=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+l(n.size)+")",t.maxHeight=l(n.size),delete n.size),n.height&&(t.maxHeight=l(n.height),t.height=l(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+l(n.width)+")",t.width=l(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),s=i[0],l=i[1],d=e.caption&&"undefined"!==e.caption,h=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,s=t.top<=a&&t.bottom>=a,i&&s||n(!1)}},r.createElement(u,e),h&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,s?a.visible:void 0),onClick:function(){return l(!s)}},"@"),s&&r.createElement(c,e.bib)))}},78863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(84384),o=["components"],c={title:"Datenverlust"},l="Datenverlust [^1]",u={unversionedId:"byod-basics/v25/ICT/Sicherheit/Datenverlust",id:"byod-basics/v25/ICT/Sicherheit/Datenverlust",title:"Datenverlust",description:"Eine oft untersch\xe4tzte Gefahr ist der Verlust von Daten.",source:"@site/docs/byod-basics/v25/002-ICT/2-Sicherheit/1-Datenverlust.md",sourceDirName:"byod-basics/v25/002-ICT/2-Sicherheit",slug:"/byod-basics/v25/ICT/Sicherheit/Datenverlust",permalink:"/byod-basics/v25/ICT/Sicherheit/Datenverlust",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/002-ICT/2-Sicherheit/1-Datenverlust.md",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:1,frontMatter:{title:"Datenverlust"},sidebar:"sidebar",previous:{title:"Sicherheit",permalink:"/category/sicherheit-1"},next:{title:"Authentifizierung",permalink:"/byod-basics/v25/ICT/Sicherheit/Authentifizierung"}},d={},h=[{value:"Ursachen",id:"ursachen",level:2},{value:"Massnahmen",id:"massnahmen",level:2},{value:"Cloudspeicher verwenden",id:"cloudspeicher-verwenden",level:3},{value:"Schutz vor Schadsoftware",id:"schutz-vor-schadsoftware",level:3}],f={toc:h};function p(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datenverlust-"},"Datenverlust ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Eine oft untersch\xe4tzte Gefahr ist der Verlust von Daten."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"nate bolt",source:"https://flic.kr/p/6PtmyY",licence:"Creative Commons CC2",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(97166).Z,mdxType:"Image"})),(0,i.kt)("h2",{id:"ursachen"},"Ursachen"),(0,i.kt)("p",null,"F\xfcr den Verlust von Daten gibt es verschiedene Ursachen, beispielsweise:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defekt des Ger\xe4ts, auf welchem die Daten gespeichert sind,"),(0,i.kt)("li",{parentName:"ul"},"Verlust des Ger\xe4ts, auf welchem die Daten gespeichert sind,"),(0,i.kt)("li",{parentName:"ul"},"Zerst\xf6rung der Daten durch Schadsoftware,"),(0,i.kt)("li",{parentName:"ul"},"Verschl\xfcsselung der Daten durch Schadsoftware.")),(0,i.kt)("h2",{id:"massnahmen"},"Massnahmen"),(0,i.kt)("h3",{id:"cloudspeicher-verwenden"},"Cloudspeicher verwenden"),(0,i.kt)("p",null,"Daten sollten nie auf nur einem Ger\xe4t gespeichert werden. Mit Cloud-L\xf6sung werden Daten automatisch zwischen mehreren Ger\xe4ten und einem Cloudspeicher synchronisiert. Damit stehen die Daten auch noch zu Verf\xfcgung, wenn ein Ger\xe4t verloren geht oder einen Defekt hat."),(0,i.kt)("h3",{id:"schutz-vor-schadsoftware"},"Schutz vor Schadsoftware"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/byod-basics/v25/ICT/Sicherheit/Schadsoftware"},"Kapitel Schadsoftware")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/1-data-loss/"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},97166:function(e,t,n){t.Z=n.p+"assets/images/crashed_laptop-cf0d7574c797e184cbb712547eec94e0.jpg"}}]);