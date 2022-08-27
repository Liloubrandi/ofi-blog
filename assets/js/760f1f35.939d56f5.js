"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||l[u]||i;return n?r.createElement(g,s(s({ref:t},m),{},{components:n})):r.createElement(g,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_custom_props:{id:"8d2ca844-98be-499a-9ac1-24a4d93b01b5",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=713066"}}},s="Integrit\xe4t",o={unversionedId:"Kryptologie/Digitale-Signaturen/Integritaet",id:"Kryptologie/Digitale-Signaturen/Integritaet",title:"Integrit\xe4t",description:"Lesbarkeit und Signatur",source:"@site/docs/Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",sourceDirName:"Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Integritaet",permalink:"/Kryptologie/Digitale-Signaturen/Integritaet",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"8d2ca844-98be-499a-9ac1-24a4d93b01b5",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=713066"}}},sidebar:"sidebar",previous:{title:"Asymmetrie umkehren",permalink:"/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"},next:{title:"Verfahren kombinieren",permalink:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"}},p={},d=[{value:"Lesbarkeit und Signatur",id:"lesbarkeit-und-signatur",level:2},{value:"Manipulationen erkennen",id:"manipulationen-erkennen",level:2},{value:"Hashwerte",id:"hashwerte",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=m("Comment"),c=m("Figure"),u=m("SourceRef"),g={toc:d};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"integrit\xe4t"},"Integrit\xe4t"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"lesbarkeit-und-signatur"},"Lesbarkeit und Signatur"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Das im letzten Kapitel beschriebene Verfahren hat den grossen Nachteil, dass ein Dokument erst lesbar ist, wenn es \xabentschl\xfcsselt\xbb \u2013 oder anders ausgedr\xfcckt: wenn die ",(0,a.kt)("strong",{parentName:"p"},"Signatur entfernt")," \u2013 wurde. Das ist unpraktisch, schliesslich sind s\xe4mtliche deine von Hand unterschriebenen Dokumente trotzdem stets lesbar. Sobald das Dokument entschl\xfcsselt (also lesbar) ist, ist aber auch die Signatur verschwunden \u2013 und somit auch die \xdcberpr\xfcfbarkeit, welche Person was unterschrieben hat."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Wir suchen folglich eine L\xf6sung, die das gleichzeitige Betrachten des Dokuments und der Signatur erm\xf6glicht."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"manipulationen-erkennen"},"Manipulationen erkennen"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Ist der Klartext stets sichtbar, so m\xfcssen wir sicherstellen, dass er nicht manipuliert werden kann. Schliesslich wollen wir nicht, dass ein Vertrag nach dem Signieren noch unentdeckt ver\xe4ndert werden kann."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"hashwerte"},"Hashwerte"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{style:{},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{flexBasis:"150px"},className:"item"},(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Hashwerte kennen wir bisher nur zur sicheren Speicherung von Passw\xf6rtern. Hashfunktionen k\xf6nnen allerdings nicht nur Passw\xf6rter in Hashwerte umwandeln, sondern irgendwelche Daten."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Wir haben gesehen, dass Hashwerte eine Art digitale ",(0,a.kt)("strong",{parentName:"p"},"Fingerabdr\xfccke")," sind. Es ist extrem schwierig (resp. in vern\xfcnftiger Zeit nicht m\xf6glich), zu einem bestehenden Text einen anderen zu finden, der denselben Hashwert erzeugt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,a.kt)("div",{parentName:"div",style:{flexBasis:"150px",alignSelf:"center"},className:"item"},(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{width:"100px"},mdxType:"Figure"},(0,a.kt)("img",{alt:"Hashwerte sind digitale Fingerabdr\xfccke --width=100px",src:n(84506).Z,width:"150",height:"223"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashwerte sind digitale Fingerabdr\xfccke",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,a.kt)(u,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Auch wenn verschiedene Personen den Hashwert desselben Textes berechnen, ergibt sich stets derselbe Hashwert \u2013 aber nat\xfcrlich nur, wenn dieselbe Hashfunktion verwendet wird. Ist ein Text auch nur ein wenig anders (wie im untenstehenden Beispiel gezeigt), so ergibt sich sofort ein v\xf6llig anderer Hashwert, womit leicht zu erkennen ist, dass die Texte ",(0,a.kt)("strong",{parentName:"p"},"nicht")," \xfcbereinstimmen."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Hashwerte von verschiedenen Mitteilungen",src:n(85612).Z,width:"700",height:"280"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashwerte von verschiedenen Mitteilungen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,a.kt)(u,{parentName:"figcaption",bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=713066",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))}h.isMDXComponent=!0},84506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},85612:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hash-3b89054e07b7223d4b0698d320e68c27.svg"}}]);