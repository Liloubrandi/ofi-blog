"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4339],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),s=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],c=i[1],d=e.caption&&"undefined"!==e.caption,p=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),p&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&r.createElement(s,e.bib)))}},5892:function(e,t,n){var r=n(86010),a=n(67294),i=n(96734);t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],l=a.useState(""),o=l[0],s=l[1],c=a.useState(2),u=c[0],d=c[1],p=a.useState("text"),m=p[0],f=p[1],g=a.useState(0);g[0],g[1];return a.useEffect((function(){if(u&&"text"===m){var e=Array(u).fill("");t.split("").forEach((function(t,n){e[n%u]+=t})),s(e.join("\n").trim())}}),[t,u]),a.useEffect((function(){if(u&&"cipher"===m)if(0!==o.length){var e=o.split("\n"),r=(e=e.map((function(t){return t.padEnd(Math.max.apply(Math,e.map((function(e){return e.length})))," ")}))).join("").replace(/\t+/g," "),a=Math.ceil(r.length/u);r=r.padEnd(a*u," ");for(var i="",l=0;l<a;l++)for(var s=0;s<u;s++)i+=r.charAt(l+s*a);n(i)}else""!==t&&n("")}),[o,u]),a.createElement("div",{className:(0,r.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Skytale"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:t,onChange:function(e){f("text");var t=Math.max(e.target.selectionStart,e.target.selectionEnd);n(e.target.value.replace(/\n/g," ")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("div",{className:i.Z.stringInputContainer},a.createElement("h4",null,a.createElement("label",{htmlFor:"skytale-key"},"Schl\xfcssel")),a.createElement("input",{id:"skytale-key",type:"number",min:1,max:26,placeholder:"Schl\xfcssel",value:u||"",onChange:function(e){d(Number.parseInt(e.target.value,10))}})),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:o,onChange:function(e){f("cipher"),s(e.target.value)},rows:5,placeholder:"Skytale Verschl\xfcsselter Geheimtext"})))}},72550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(5892),s=["components"],c={title:"Skytale"},u="Skytale [^1]",d={unversionedId:"Kryptologie/Antike/Skytale",id:"Kryptologie/Antike/Skytale",title:"Skytale",description:'Um ca. 500 v. Chr. nutzten die Spartaner eine Skytale (griechisch f\xfcr "Stock" oder "Stab"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.',source:"@site/docs/Kryptologie/02-Antike/01-Skytale.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Skytale",permalink:"/Kryptologie/Antike/Skytale",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/01-Skytale.md",tags:[],version:"current",lastUpdatedAt:1634988183,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:1,frontMatter:{title:"Skytale"},sidebar:"sidebar",previous:{title:"Antike",permalink:"/category/antike"},next:{title:"Polybios-Chiffre",permalink:"/Kryptologie/Antike/Polybios"}},p={},m=[{value:"Transposition",id:"transposition",level:2},{value:"Skytale ausprobieren",id:"skytale-ausprobieren",level:2}],f={toc:m};function g(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"skytale-"},"Skytale ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Um ca. 500 v. Chr. nutzten die Spartaner eine ",(0,i.kt)("strong",{parentName:"p"},"Skytale"),' (griechisch f\xfcr "',(0,i.kt)("em",{parentName:"p"},"Stock"),'" oder "',(0,i.kt)("em",{parentName:"p"},"Stab"),'"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.'),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Unbekannt",source:"https://commons.wikimedia.org/wiki/File:Skytale.png",licence:"CC 3.0",licence_url:"Attribution-Share Alike 3.0 Unported",edited:!1},caption:"Nachbildung einer Skytale",options:{width:"300px"},isInline:!1,src:n(73042).Z,alt:"Nachbildung einer Skytale --width=300px",mdxType:"Image"})),(0,i.kt)("h2",{id:"transposition"},"Transposition"),(0,i.kt)("p",null,"Die Skytale ist ein Beispiel einer Verschl\xfcsselung durch Transposition. Das heisst, dass die Zeichen des Geheimtextes nicht ersetzt, sondern nur umgestellt (",(0,i.kt)("em",{parentName:"p"},"transponiert"),") werden."),(0,i.kt)("h2",{id:"skytale-ausprobieren"},"Skytale ausprobieren"),(0,i.kt)(o.Z,{mdxType:"Skytale"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=818731"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},73042:function(e,t,n){t.Z=n.p+"assets/images/skytale-1e4ee9dd8e81ee7c5cfd12777f92a033.png"}}]);