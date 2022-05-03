"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[37918],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,p=m["".concat(d,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(p,s(s({ref:t},l),{},{components:n})):r.createElement(p,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),s=n(51436),o=n(86010),d=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:s.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},l=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(l,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),s=a[0],c=a[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,s=t.top<=i&&t.bottom>=i,a&&s||n(!1)}},r.createElement(l,e),m&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,s?i.visible:void 0),onClick:function(){return c(!s)}},"@"),s&&r.createElement(d,e.bib)))}},94544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=n(84384),o=["components"],d={title:"MAC-Adresse"},c="MAC-Adresse",l={unversionedId:"Netzwerke/Begriffe/mac-adresse",id:"version-24f/Netzwerke/Begriffe/mac-adresse",title:"MAC-Adresse",description:"Die physikalische Adresse, auch Hardware-Adresse eines Computers \u2013 genauer gesagt 486A59:3D. Jede MAC-Adresse muss weltweit eindeutig sein, damit die Zustellung von Paketen, und somit auch die Transportsicherheit, garantiert werden kann. Die MAC-Adresse wird bei der Herstellung der Netzwerkkarte fix vergeben und kann nicht mehr ver\xe4ndert werden.",source:"@site/versioned_docs/version-24f/05-Netzwerke/010-Begriffe/2-mac-adresse.md",sourceDirName:"05-Netzwerke/010-Begriffe",slug:"/Netzwerke/Begriffe/mac-adresse",permalink:"/24f/Netzwerke/Begriffe/mac-adresse",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/05-Netzwerke/010-Begriffe/2-mac-adresse.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{title:"MAC-Adresse"},sidebar:"version-24f/sidebar",previous:{title:"IP-Adresse",permalink:"/24f/Netzwerke/Begriffe/ip-adresse"},next:{title:"Ports",permalink:"/24f/Netzwerke/Begriffe/ports"}},u={},m=[{value:"Router-Einstellungen",id:"router-einstellungen",level:2}],f={toc:m};function p(e){var t=e.components,d=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mac-adresse"},"MAC-Adresse"),(0,a.kt)("p",null,"Die physikalische Adresse, auch Hardware-Adresse eines Computers \u2013 genauer gesagt: seiner Netzwerkschnittstelle \u2013 nennt man ",(0,a.kt)("strong",{parentName:"p"},"MAC-Adresse")," (",(0,a.kt)("em",{parentName:"p"},"MAC")," steht f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"Media Access Control")," und hat entsprechen nichts mit Apple zu tun). Sie besteht aus 48 Bit oder 6 Bytes, so dass sie \xfcblicherweise als Hexadezimalzahl mit ",(0,a.kt)("inlineCode",{parentName:"p"},"6\xd72")," Stellen angegeben wird, beispielsweise: ",(0,a.kt)("inlineCode",{parentName:"p"},"48:2C:6A:1E:59:3D"),". Jede MAC-Adresse muss ",(0,a.kt)("strong",{parentName:"p"},"weltweit eindeutig")," sein, damit die Zustellung von Paketen, und somit auch die Transportsicherheit, garantiert werden kann. Die MAC-Adresse wird bei der Herstellung der Netzwerkkarte fix vergeben und kann nicht mehr ver\xe4ndert werden."),(0,a.kt)("h2",{id:"router-einstellungen"},"Router-Einstellungen"),(0,a.kt)("p",null,"Der Router ist der Eintrittspunkt zum WWW. Er besitzt zwei Netzwerkkarten (und somit auch zwei MAC-Adressen) - eine f\xfcr die Verbindung mit Ihrem Ger\xe4t, die andere f\xfcr die Verbindung mit dem ISP (Internet Service Provider). Da die MAC-Adressen nicht ge\xe4ndert werden k\xf6nnen, kann der Datenverkehr auch auf Basis der MAC-Adresse gefiltert werden. Bezahlen Sie etwa Ihre Internet-Rechnung nicht, sperrt Ihr Anbieter die Kommunikation mit Ihrem Router - \xfcber die MAC Adresse. Dasselbe Prinzip kann aber auch auf die Andere Seite angewandt werden. Wenn Sie pl\xf6tzlich feststellen, dass sich Ihr Nachbar Ihr WLAN-Passwort erhascht hat, k\xf6nnen Sie bei den Router-Einstellungen seine MAC-Adresse ausfindig machen und diese ggf. sperren."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Router Einstellungen: MAC-Adressen sperren",options:{},isInline:!1,src:n(47482).Z,alt:"Router Einstellungen: MAC-Adressen sperren",mdxType:"Image"})),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"mac-adresse-herausfinden"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"MAC-Adresse herausfinden")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'Finden Sie die MAC-Adresse Ihres ger\xe4tes. Googeln Sie z.b. nach *Wie finde ich meine MAC adresse?"'))))}p.isMDXComponent=!0},47482:function(e,t,n){t.Z=n.p+"assets/images/mac-address-config-5b034ade180a5741a8604d6465a0b7df.png"}}]);