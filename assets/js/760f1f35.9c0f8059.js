"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Integrit\xe4t"},s="Integrit\xe4t [^1]",o={unversionedId:"Kryptologie/Digitale-Signaturen/Integritaet",id:"Kryptologie/Digitale-Signaturen/Integritaet",title:"Integrit\xe4t",description:"Lesbarkeit und Signatur",source:"@site/docs/Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",sourceDirName:"Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Integritaet",permalink:"/Kryptologie/Digitale-Signaturen/Integritaet",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",tags:[],version:"current",lastUpdatedAt:1637606630,formattedLastUpdatedAt:"22.11.2021",sidebarPosition:2,frontMatter:{title:"Integrit\xe4t"},sidebar:"sidebar",previous:{title:"Asymmetrie umkehren",permalink:"/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"},next:{title:"Verfahren kombinieren",permalink:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"}},l={},c=[{value:"Lesbarkeit und Signatur",id:"lesbarkeit-und-signatur",level:2},{value:"Manipulationen erkennen",id:"manipulationen-erkennen",level:2},{value:"Hashwerte",id:"hashwerte",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=d("Figure"),u=d("SourceRef"),g={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrit\xe4t-"},"Integrit\xe4t ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"lesbarkeit-und-signatur"},"Lesbarkeit und Signatur"),(0,i.kt)("p",null,"Das im letzten Kapitel beschriebene Verfahren hat den grossen Nachteil, dass ein Dokument erst lesbar ist, wenn es \xabentschl\xfcsselt\xbb \u2013 oder anders ausgedr\xfcckt: wenn die ",(0,i.kt)("strong",{parentName:"p"},"Signatur entfernt")," \u2013 wurde. Das ist unpraktisch, schliesslich sind s\xe4mtliche deine von Hand unterschriebenen Dokumente trotzdem stets lesbar. Sobald das Dokument entschl\xfcsselt (also lesbar) ist, ist aber auch die Signatur verschwunden \u2013 und somit auch die \xdcberpr\xfcfbarkeit, welche Person was unterschrieben hat."),(0,i.kt)("p",null,"Wir suchen folglich eine L\xf6sung, die das gleichzeitige Betrachten des Dokuments und der Signatur erm\xf6glicht."),(0,i.kt)("h2",{id:"manipulationen-erkennen"},"Manipulationen erkennen"),(0,i.kt)("p",null,"Ist der Klartext stets sichtbar, so m\xfcssen wir sicherstellen, dass er nicht manipuliert werden kann. Schliesslich wollen wir nicht, dass ein Vertrag nach dem Signieren noch unentdeckt ver\xe4ndert werden kann."),(0,i.kt)("h2",{id:"hashwerte"},"Hashwerte"),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"150px"},className:"item"},(0,i.kt)("p",{parentName:"div"},"Hashwerte kennen wir bisher nur zur sicheren Speicherung von Passw\xf6rtern. Hashfunktionen k\xf6nnen allerdings nicht nur Passw\xf6rter in Hashwerte umwandeln, sondern irgendwelche Daten."),(0,i.kt)("p",{parentName:"div"},"Wir haben gesehen, dass Hashwerte eine Art digitale ",(0,i.kt)("strong",{parentName:"p"},"Fingerabdr\xfccke")," sind. Es ist extrem schwierig (resp. in vern\xfcnftiger Zeit nicht m\xf6glich), zu einem bestehenden Text einen anderen zu finden, der denselben Hashwert erzeugt.")),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"150px",alignSelf:"center"},className:"item"},(0,i.kt)(p,{parentName:"div",options:{width:"100px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hashwerte sind digitale Fingerabdr\xfccke --width=100px",src:n(84506).Z,width:"150",height:"223"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashwerte sind digitale Fingerabdr\xfccke",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(u,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))))),(0,i.kt)("p",null,"Auch wenn verschiedene Personen den Hashwert desselben Textes berechnen, ergibt sich stets derselbe Hashwert \u2013 aber nat\xfcrlich nur, wenn dieselbe Hashfunktion verwendet wird. Ist ein Text auch nur ein wenig anders (wie im untenstehenden Beispiel gezeigt), so ergibt sich sofort ein v\xf6llig anderer Hashwert, womit leicht zu erkennen ist, dass die Texte ",(0,i.kt)("strong",{parentName:"p"},"nicht")," \xfcbereinstimmen."),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hashwerte von verschiedenen Mitteilungen",src:n(85612).Z,width:"700",height:"280"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashwerte von verschiedenen Mitteilungen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(u,{parentName:"figcaption",bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=713066",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=713066"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},84506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},85612:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hash-3b89054e07b7223d4b0698d320e68c27.svg"}}]);