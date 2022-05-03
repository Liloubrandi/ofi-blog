"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[71674],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(n),p=i,h=g["".concat(l,".").concat(p)]||g[p]||u[p]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),s=n(51436),o=n(86010),l=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:s.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),s=a[0],c=a[1],u=e.caption&&"undefined"!==e.caption,g=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,s=t.top<=i&&t.bottom>=i,a&&s||n(!1)}},r.createElement(d,e),g&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,s?i.visible:void 0),onClick:function(){return c(!s)}},"@"),s&&r.createElement(l,e.bib)))}},77567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return g}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=n(84384),o=["components"],l={title:"Integrit\xe4t"},c="Integrit\xe4t [^1]",d={unversionedId:"Kryptologie/Digitale-Signaturen/Integritaet",id:"version-24L/Kryptologie/Digitale-Signaturen/Integritaet",title:"Integrit\xe4t",description:"Lesbarkeit und Signatur",source:"@site/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Integritaet",permalink:"/24L/Kryptologie/Digitale-Signaturen/Integritaet",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"Integrit\xe4t"},sidebar:"version-24L/sidebar",previous:{title:"Asymmetrie umkehren",permalink:"/24L/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"},next:{title:"Verfahren kombinieren",permalink:"/24L/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"}},u={},g=[{value:"Lesbarkeit und Signatur",id:"lesbarkeit-und-signatur",level:2},{value:"Manipulationen erkennen",id:"manipulationen-erkennen",level:2},{value:"Hashwerte",id:"hashwerte",level:2}],p={toc:g};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrit\xe4t-"},"Integrit\xe4t ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"lesbarkeit-und-signatur"},"Lesbarkeit und Signatur"),(0,a.kt)("p",null,"Das im letzten Kapitel beschriebene Verfahren hat den grossen Nachteil, dass ein Dokument erst lesbar ist, wenn es \xabentschl\xfcsselt\xbb \u2013 oder anders ausgedr\xfcckt: wenn die ",(0,a.kt)("strong",{parentName:"p"},"Signatur entfernt")," \u2013 wurde. Das ist unpraktisch, schliesslich sind s\xe4mtliche deine von Hand unterschriebenen Dokumente trotzdem stets lesbar. Sobald das Dokument entschl\xfcsselt (also lesbar) ist, ist aber auch die Signatur verschwunden \u2013 und somit auch die \xdcberpr\xfcfbarkeit, welche Person was unterschrieben hat."),(0,a.kt)("p",null,"Wir suchen folglich eine L\xf6sung, die das gleichzeitige Betrachten des Dokuments und der Signatur erm\xf6glicht."),(0,a.kt)("h2",{id:"manipulationen-erkennen"},"Manipulationen erkennen"),(0,a.kt)("p",null,"Ist der Klartext stets sichtbar, so m\xfcssen wir sicherstellen, dass er nicht manipuliert werden kann. Schliesslich wollen wir nicht, dass ein Vertrag nach dem Signieren noch unentdeckt ver\xe4ndert werden kann."),(0,a.kt)("h2",{id:"hashwerte"},"Hashwerte"),(0,a.kt)("div",{style:{},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{flexBasis:"150px"},className:"item"},(0,a.kt)("p",{parentName:"div"},"Hashwerte kennen wir bisher nur zur sicheren Speicherung von Passw\xf6rtern. Hashfunktionen k\xf6nnen allerdings nicht nur Passw\xf6rter in Hashwerte umwandeln, sondern irgendwelche Daten."),(0,a.kt)("p",{parentName:"div"},"Wir haben gesehen, dass Hashwerte eine Art digitale ",(0,a.kt)("strong",{parentName:"p"},"Fingerabdr\xfccke")," sind. Es ist extrem schwierig (resp. in vern\xfcnftiger Zeit nicht m\xf6glich), zu einem bestehenden Text einen anderen zu finden, der denselben Hashwert erzeugt.")),(0,a.kt)("div",{parentName:"div",style:{flexBasis:"150px",alignSelf:"center"},className:"item"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashwerte sind digitale Fingerabdr\xfccke",options:{width:"100px"},isInline:!1,src:n(85290).Z,alt:"Hashwerte sind digitale Fingerabdr\xfccke --width=100px",mdxType:"Image"})))),(0,a.kt)("p",null,"Auch wenn verschiedene Personen den Hashwert desselben Textes berechnen, ergibt sich stets derselbe Hashwert \u2013 aber nat\xfcrlich nur, wenn dieselbe Hashfunktion verwendet wird. Ist ein Text auch nur ein wenig anders (wie im untenstehenden Beispiel gezeigt), so ergibt sich sofort ein v\xf6llig anderer Hashwert, womit leicht zu erkennen ist, dass die Texte ",(0,a.kt)("strong",{parentName:"p"},"nicht")," \xfcbereinstimmen."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=713066",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashwerte von verschiedenen Mitteilungen",options:{},isInline:!1,src:n(41742).Z,alt:"Hashwerte von verschiedenen Mitteilungen",mdxType:"Image"})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=713066"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},85290:function(e,t,n){t.Z=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},41742:function(e,t,n){t.Z=n.p+"assets/images/hash-3b89054e07b7223d4b0698d320e68c27.svg"}}]);