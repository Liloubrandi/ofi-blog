"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[99309],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),s=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:s.Xjp}))))},l=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+l(n.size)+")",t.maxHeight=l(n.size),delete n.size),n.height&&(t.maxHeight=l(n.height),t.height=l(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+l(n.width)+")",t.width=l(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),s=a[0],l=a[1],u=e.caption&&"undefined"!==e.caption,h=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,s=t.top<=i&&t.bottom>=i,a&&s||n(!1)}},r.createElement(d,e),h&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,s?i.visible:void 0),onClick:function(){return l(!s)}},"@"),s&&r.createElement(c,e.bib)))}},35349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=n(84384),o=["components"],c={sidebar_label:"3. Transportschicht",sidebar_position:3},l="Schicht 3: Transportschicht [^1]",d={unversionedId:"Netzwerke-of/Schichtenmodell/Transportschicht",id:"Netzwerke-of/Schichtenmodell/Transportschicht",title:"Schicht 3: Transportschicht [^1]",description:"Die Transportschicht stellt sicher, dass der Transport korrekt abl\xe4uft. Die zu transportierenden Dinge oder Daten m\xfcssen zerlegt werden, damit sie in Pakete passen. Die Pakete m\xfcssen nummeriert werden, damit die Dinge/Daten am Zielort wieder richtig zusammengesetzt werden k\xf6nnen.",source:"@site/docs/Netzwerke-of/001-Schichtenmodell/3-Transportschicht.md",sourceDirName:"Netzwerke-of/001-Schichtenmodell",slug:"/Netzwerke-of/Schichtenmodell/Transportschicht",permalink:"/Netzwerke-of/Schichtenmodell/Transportschicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/001-Schichtenmodell/3-Transportschicht.md",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:3,frontMatter:{sidebar_label:"3. Transportschicht",sidebar_position:3},sidebar:"sidebar",previous:{title:"4. Anwendungsschicht",permalink:"/Netzwerke-of/Schichtenmodell/Anwendungsschicht"},next:{title:"2. Vermittlungsschicht",permalink:"/Netzwerke-of/Schichtenmodell/Vermittlungsschicht"}},u={},h=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-schule",level:2},{value:"Internet",id:"internet",level:2},{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",level:3}],m={toc:h};function p(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schicht-3-transportschicht-"},"Schicht 3: Transportschicht ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Die Transportschicht stellt sicher, dass der Transport korrekt abl\xe4uft. Die zu transportierenden Dinge oder Daten m\xfcssen zerlegt werden, damit sie in Pakete passen. Die Pakete m\xfcssen nummeriert werden, damit die Dinge/Daten am Zielort wieder richtig zusammengesetzt werden k\xf6nnen."),(0,a.kt)("h2",{id:"beispiel-schule"},"Beispiel \xabSchule\xbb"),(0,a.kt)("p",null,"Im Beispiel \xabSchule\xbb zerlegt der Hauswart die einzelnen Pulte. Er muss die Einzelteile der Pulte beschriften, damit sie in der Madretsch-Schule wieder richtig zusammengebaut werden k\xf6nnen. Er verpackt die Einzelteile in Pakete und beschriftet diese mit der Post-Adresse. Schliesslich schickt er dem Hauswart der Madretsch-Schule einen Brief (Lieferschein), in welchem auflistet, wie viele Pakete und Pulte verschickt werden."),(0,a.kt)("p",null,"Der Hauswart der Madretsch-Schule kontrolliert anhand des Lieferscheins, ob alle Pakete angekommen sind. Dann setzt er die Pulte aus den Einzelteilen gem\xe4ss Beschriftung wieder zusammen."),(0,a.kt)("p",null,"M\xf6glicherweise fehlt eine Schraube. In dem Fall schickt er dem GBSL-Hauswart einen Brief und bittet ihn, diese Schraube nachzuschicken."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/2-transport/layer-3.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(65242).Z,mdxType:"Image"})),(0,a.kt)("h2",{id:"internet"},"Internet"),(0,a.kt)("p",null,"Die zwei wichtigsten Protokolle der Transportschicht sind TCP und UDP. Hier werden die Daten der Anwendungsschicht in TCP- oder UDP-Pakete verpackt. Dabei muss nat\xfcrlich notiert werden, worum es sich bei den Daten der Anwendungsschicht handelt (HTTP, SMTP, ...). Das Protokoll der Anwendungsschicht wird in Form einer Nummer, Port genannt, im TCP- oder UDP-Paket gespeichert (siehe Begriff Ports)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TCP"),": Das Transmission Control Protocol ist verbindungsorientiert und wird bei unserer t\xe4glichen Arbeit im Internet in den allermeisten F\xe4llen verwendet. Es garantiert, dass keine Pakete verlorengehen oder fehlerhaft ankommen \u2013 resp. falls Pakete nicht ankommen, dass diese nochmals angefordert werden. Dies ist in der Regel (z.B. beim \xdcbertragen von Webseiten oder E-Mails) sinnvoll und erw\xfcnscht \u2013 schliesslich m\xf6chten wir nicht, dass einige Passagen auf Webseiten oder in E-Mails fehlen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UDP"),": Das User Datagram Protocol hingegen ist verbindungslos, d.h. es findet keine Kontrolle statt, ob s\xe4mtliche Pakete (fehlerfrei) ankommen. Dies ist insbesondere dann hilfreich, wenn wir Audio- oder Videostreams konsumieren. Wir m\xf6chten nicht lange auf ein verlorenes Paket warten, sondern nehmen eher ein kurzes Stocken in Kauf und sind froh, dass das Abspielen anschliessend direkt weitergeht."),(0,a.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/AYdF7b3nMto",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=463589"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},65242:function(e,t,n){t.Z=n.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"}}]);