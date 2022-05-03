"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12770],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(t),m=i,p=h["".concat(o,".").concat(m)]||h[m]||u[m]||s;return t?r.createElement(p,a(a({ref:n},d),{},{components:t})):r.createElement(p,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=h;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},84384:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},s=t(92814),a=t(51436),c=t(86010),o=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},r.createElement(s.G,{icon:a.Xjp}))))},l=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},d=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+l(t.size)+")",n.maxHeight=l(t.size),delete t.size),t.height&&(n.maxHeight=l(t.height),n.height=l(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+l(t.width)+")",n.width=l(t.width),delete t.width),n=Object.assign({},n,t),r.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var n=r.useState(!1),t=(n[0],n[1]),s=r.useState(!1),a=s[0],l=s[1],u=e.caption&&"undefined"!==e.caption,h=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,c.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,r,i,s,a;n=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,s=n.left<=r&&n.right>=r,a=n.top<=i&&n.bottom>=i,s&&a||t(!1)}},r.createElement(d,e),h&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,c.default)(i.bib,a?i.visible:void 0),onClick:function(){return l(!a)}},"@"),a&&r.createElement(o,e.bib)))}},41675:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var r=t(83117),i=t(80102),s=(t(67294),t(3905)),a=t(84384),c=["components"],o={sidebar_label:"Schichten und Adressen",sidebar_position:7},l="Schichten und Adressen [^1]",d={unversionedId:"Netzwerke/Schichtenmodell/Schichten-und-Adressen",id:"version-24K/Netzwerke/Schichtenmodell/Schichten-und-Adressen",title:"Schichten und Adressen [^1]",description:"Was bedeuten die Adressen auf den verschiedenen Schichten?",source:"@site/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/Schichten-und-Adressen.md",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/Schichten-und-Adressen",permalink:"/24K/Netzwerke/Schichtenmodell/Schichten-und-Adressen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/Schichten-und-Adressen.md",tags:[],version:"24K",sidebarPosition:7,frontMatter:{sidebar_label:"Schichten und Adressen",sidebar_position:7},sidebar:"version-24K/sidebar",previous:{title:"1. Physikalische Schicht",permalink:"/24K/Netzwerke/Schichtenmodell/Physikalische-Schicht"},next:{title:"Codierung",permalink:"/24K/category/codierung"}},u={},h=[],m={toc:h};function p(e){var n=e.components,o=(0,i.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schichten-und-adressen-"},"Schichten und Adressen ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"Was bedeuten die Adressen auf den verschiedenen Schichten?\nDamit wir uns besser vorstellen k\xf6nnen, was die einzelnen Adressen bedeuten, arbeiten wir mit folgender Analogie:"),(0,s.kt)("p",null,"Wir m\xf6chten in einem bestimmten Gesch\xe4ft innerhalb eines Einkaufszentrums einkaufen gehen."),(0,s.kt)("p",null,"Zuerst m\xfcssen wir \xfcberhaupt zum Einkaufszentrum gelangen. Daf\xfcr sind die ersten beiden Schichten zust\xe4ndig:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"physikalische Schicht"),(0,s.kt)("li",{parentName:"ul"},"Vermittlungsschicht")),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(a.Z,{bib:{author:"Hans",source:"https://pixabay.com/de/photos/einkaufszentrum-shopping-1061641/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/"},caption:"Zugang zum Einkaufzentrum: die ersten beiden Schichten",options:{},isInline:!1,src:t(17538).Z,alt:"Zugang zum Einkaufzentrum: die ersten beiden Schichten",mdxType:"Image"})),(0,s.kt)("p",null,"Dass es \xfcberhaupt ",(0,s.kt)("strong",{parentName:"p"},"Strassen")," gibt, die die Grundst\xfccke miteinander verbinden, verdanken wir der ",(0,s.kt)("strong",{parentName:"p"},"physikalischen Schicht"),". Auf dieser Schicht gibt es im Netzwerkmodell die ",(0,s.kt)("strong",{parentName:"p"},"MAC-Adressen"),". In unserer Analogie w\xfcrde dies wohl den ",(0,s.kt)("strong",{parentName:"p"},"Grundst\xfccksnummer")," entsprechen, die im Grundbuch eingetragen sind \u2013 allerdings sind diese Nummern (und Grundb\xfccher) weltweit nicht eindeutig, daher hinkt dieser Vergleich ein wenig."),(0,s.kt)("p",null,"Auf der ",(0,s.kt)("strong",{parentName:"p"},"Vermittlungsschicht")," werden die ",(0,s.kt)("strong",{parentName:"p"},"IP-Adressen")," verwendet, um einen Host zu kontaktieren. In unserer Analogie w\xfcrde dies der Postadresse (also Strassenname und Hausnummer) entsprechen."),(0,s.kt)("p",null,"Es braucht also Strassen und Postadressen, damit wir das Einkaufszentrum finden. Sind wir jedoch bereits im Einkaufszentrum drin, m\xfcssen wir noch das richtige Gesch\xe4ft aufst\xf6bern. Nun dringen wir zu den n\xe4chsten zwei Schichten vor:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Transportschicht"),(0,s.kt)("li",{parentName:"ul"},"Anwendungsschicht")),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(a.Z,{bib:{author:"PhotoMIX-Company",source:"https://pixabay.com/de/photos/unter-dem-dach-einkaufen-innen-3175884/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/"},caption:"Ein bestimmtes Gesch\xe4ft im Einkaufszentrum: die beiden oberen Schichten",options:{},isInline:!1,src:t(67347).Z,alt:"Ein bestimmtes Gesch\xe4ft im Einkaufszentrum: die beiden oberen Schichten",mdxType:"Image"})),(0,s.kt)("p",null,"Analog muss auch ein Computer wissen, an welches Programm er eine eingehende Anfrage weitergeben muss: Will der Client eine Webseite abrufen oder vielleicht eine DNS-Abfrage starten? F\xfcr beides kann auf dem gleichen Server eine Software auf Anfragen warten. Die Programme, die solche Anfragen beantworten lauschen auf einem bestimmten ",(0,s.kt)("strong",{parentName:"p"},"Port")," und warten, bis sich ein Client meldet (Schicht 3: ",(0,s.kt)("a",{parentName:"p",href:"/24K/Netzwerke/Schichtenmodell/Transportschicht"},(0,s.kt)("strong",{parentName:"a"},"Transportschicht")),"). Genau gleich warten die Angestellten in jedem Gesch\xe4ft des Einkaufszentrums auf Kunden. Auch die R\xe4ume, in denen die Gesch\xe4fte untergebracht sind sind nummeriert, \xe4hnlich wie die Ports im Netzwerkmodell. Die Port-Nummern entsprechen also den ",(0,s.kt)("strong",{parentName:"p"},"Raumnummern"),"."),(0,s.kt)("p",null,"Das einzige, was diese Angestellten dem Kunden anbieten k\xf6nnen, ist die ",(0,s.kt)("strong",{parentName:"p"},"Dienstleistung"),", auf welche sich dieses Gesch\xe4ft spezialisiert hat. Dass der Ablauf f\xfcr einen Dienstleistungsbezug in jedem Gesch\xe4ft anders abl\xe4uft, ist klar \u2013 schliesslich muss sich im Coiffeurgesch\xe4ft auf einen Stuhl setzen und bekommt einen Mantel und den Hals gebunden, w\xe4hrend man in der B\xe4ckerei die gew\xfcnschten Brote bestellt. Dies entspricht den Protokollen auf der ",(0,s.kt)("a",{parentName:"p",href:"/24K/Netzwerke/Schichtenmodell/Anwendungsschicht"},(0,s.kt)("strong",{parentName:"a"},"Anwendungsschicht (DNS, HTTP, ...)")),"."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=783655"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},67347:function(e,n,t){n.Z=t.p+"assets/images/shopping-center-inside-be3651e61158e325ae0496bb30deeda7.jpg"},17538:function(e,n,t){n.Z=t.p+"assets/images/shopping-center-outside-fc67d9688259e950be299209d36d7f83.jpg"}}]);