"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[75570],{3256:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return p}});var i=n(83117),r=n(80102),s=(n(67294),n(3905)),a=n(84384),l=["components"],o={title:"Integrit\xe4t"},d="Integrit\xe4t [^1]",c={unversionedId:"Kryptologie/Digitale-Signaturen/Integritaet",id:"version-24f/Kryptologie/Digitale-Signaturen/Integritaet",title:"Integrit\xe4t",description:"Lesbarkeit und Signatur",source:"@site/versioned_docs/version-24f/06-Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Integritaet",permalink:"/24f/Kryptologie/Digitale-Signaturen/Integritaet",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/06-Digitale-Signaturen/02-Integritaet.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{title:"Integrit\xe4t"},sidebar:"version-24f/sidebar",previous:{title:"Asymmetrie umkehren",permalink:"/24f/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"},next:{title:"Verfahren kombinieren",permalink:"/24f/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"}},u={},h=[{value:"Lesbarkeit und Signatur",id:"lesbarkeit-und-signatur",level:2},{value:"Manipulationen erkennen",id:"manipulationen-erkennen",level:2},{value:"Hashwerte",id:"hashwerte",level:2}],g={toc:h};function p(e){var t=e.components,o=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,i.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"integrit\xe4t-"},"Integrit\xe4t ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("h2",{id:"lesbarkeit-und-signatur"},"Lesbarkeit und Signatur"),(0,s.kt)("p",null,"Das im letzten Kapitel beschriebene Verfahren hat den grossen Nachteil, dass ein Dokument erst lesbar ist, wenn es \xabentschl\xfcsselt\xbb \u2013 oder anders ausgedr\xfcckt: wenn die ",(0,s.kt)("strong",{parentName:"p"},"Signatur entfernt")," \u2013 wurde. Das ist unpraktisch, schliesslich sind s\xe4mtliche deine von Hand unterschriebenen Dokumente trotzdem stets lesbar. Sobald das Dokument entschl\xfcsselt (also lesbar) ist, ist aber auch die Signatur verschwunden \u2013 und somit auch die \xdcberpr\xfcfbarkeit, welche Person was unterschrieben hat."),(0,s.kt)("p",null,"Wir suchen folglich eine L\xf6sung, die das gleichzeitige Betrachten des Dokuments und der Signatur erm\xf6glicht."),(0,s.kt)("h2",{id:"manipulationen-erkennen"},"Manipulationen erkennen"),(0,s.kt)("p",null,"Ist der Klartext stets sichtbar, so m\xfcssen wir sicherstellen, dass er nicht manipuliert werden kann. Schliesslich wollen wir nicht, dass ein Vertrag nach dem Signieren noch unentdeckt ver\xe4ndert werden kann."),(0,s.kt)("h2",{id:"hashwerte"},"Hashwerte"),(0,s.kt)("div",{style:{},className:"flex flex-flex"},(0,s.kt)("div",{parentName:"div",style:{flexBasis:"150px"},className:"item"},(0,s.kt)("p",{parentName:"div"},"Hashwerte kennen wir bisher nur zur sicheren Speicherung von Passw\xf6rtern. Hashfunktionen k\xf6nnen allerdings nicht nur Passw\xf6rter in Hashwerte umwandeln, sondern irgendwelche Daten."),(0,s.kt)("p",{parentName:"div"},"Wir haben gesehen, dass Hashwerte eine Art digitale ",(0,s.kt)("strong",{parentName:"p"},"Fingerabdr\xfccke")," sind. Es ist extrem schwierig (resp. in vern\xfcnftiger Zeit nicht m\xf6glich), zu einem bestehenden Text einen anderen zu finden, der denselben Hashwert erzeugt.")),(0,s.kt)("div",{parentName:"div",style:{flexBasis:"150px",alignSelf:"center"},className:"item"},(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(a.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashwerte sind digitale Fingerabdr\xfccke",options:{width:"100px"},isInline:!1,src:n(31789).Z,alt:"Hashwerte sind digitale Fingerabdr\xfccke --width=100px",mdxType:"Image"})))),(0,s.kt)("p",null,"Auch wenn verschiedene Personen den Hashwert desselben Textes berechnen, ergibt sich stets derselbe Hashwert \u2013 aber nat\xfcrlich nur, wenn dieselbe Hashfunktion verwendet wird. Ist ein Text auch nur ein wenig anders (wie im untenstehenden Beispiel gezeigt), so ergibt sich sofort ein v\xf6llig anderer Hashwert, womit leicht zu erkennen ist, dass die Texte ",(0,s.kt)("strong",{parentName:"p"},"nicht")," \xfcbereinstimmen."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(a.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=713066",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashwerte von verschiedenen Mitteilungen",options:{},isInline:!1,src:n(88393).Z,alt:"Hashwerte von verschiedenen Mitteilungen",mdxType:"Image"})),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=713066"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},31789:function(e,t,n){t.Z=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},88393:function(e,t,n){t.Z=n.p+"assets/images/hash-3b89054e07b7223d4b0698d320e68c27.svg"}}]);