"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[84174],{37133:function(e,t,n){var a=n(86010),i=n(67294),r=n(96734),l="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),d=function(e){return e.toUpperCase().replace(/\s+/g," ")};t.Z=function(){var e=i.useState(""),t=e[0],n=e[1],o=i.useState("D"),s=o[0],p=o[1],m=i.useState(""),k=m[0],c=m[1],u=i.useState("text"),N=u[0],h=u[1];return i.useEffect((function(){if("text"===N&&0!==t.length){var e=l.indexOf(s),n=t.split("").map((function(t){return l.includes(t)?l[(l.indexOf(t)+e)%l.length]:t}));return c(n.join(""))}}),[t,s]),i.useEffect((function(){var e=l.indexOf(s);if("cipher"===N&&0!==k.length){var t=k.split("").map((function(t){return l.includes(t)?l[(l.length+l.indexOf(t)-e)%l.length]:t}));return n(t.join(""))}}),[k,s]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Caesar-Chiffre"),i.createElement("h4",null,"Klartext"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);h("text"),n(d(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),i.createElement("h4",null,"Schl\xfcssel: ",i.createElement("span",{className:"badge badge--primary"},s)),i.createElement("div",{className:r.Z.caesarKey},i.createElement("ul",{className:(0,a.default)("pills",r.Z.pills)},l.map((function(e,t){return i.createElement("li",{className:(0,a.default)("pills__item",s===e&&"pills__item--active"),onClick:function(){return p(e)},key:e},e)})))),i.createElement("h4",null,"Geheimtext"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:k,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);h("cipher"),c(d(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Caesar Verschl\xfcsselter Geheimtext"})))}},98462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return k},toc:function(){return c},default:function(){return N}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=n(84384),d=n(37133),o=["components"],s={title:"Caesar-Chiffre"},p="Caesar-Chiffre [^1]",m={unversionedId:"Kryptologie/Antike/Caesar",id:"Kryptologie/Antike/Caesar",title:"Caesar-Chiffre",description:"Der r\xf6mische Feldherr Gaius Julius Caesar hat seine milit\xe4rischen Nachrichten verschl\xfcsselt. Der r\xf6mische Schriftsteller Sueton hat Folgendes \xfcberliefert:",source:"@site/docs/Kryptologie/02-Antike/03-Caesar.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Caesar",permalink:"/Kryptologie/Antike/Caesar",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/03-Caesar.md",tags:[],version:"current",lastUpdatedAt:1635000914,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:3,frontMatter:{title:"Caesar-Chiffre"},sidebar:"sidebar",previous:{title:"Polybios-Chiffre",permalink:"/Kryptologie/Antike/Polybios"},next:{title:"Substitution",permalink:"/Kryptologie/Antike/substitution"}},k={},c=[{value:"ROT13",id:"rot13",level:2},{value:"Caesar-Chiffre ausprobieren",id:"caesar-chiffre-ausprobieren",level:2}],u={toc:c};function N(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"caesar-chiffre-"},"Caesar-Chiffre ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Der r\xf6mische Feldherr ",(0,r.kt)("em",{parentName:"p"},"Gaius Julius Caesar")," hat seine milit\xe4rischen Nachrichten verschl\xfcsselt. Der r\xf6mische Schriftsteller Sueton hat Folgendes \xfcberliefert:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2026 si qua occultius perferenda erant, per notas scripsit, id est sic structo litterarum ordine, ut nullum verbum effici posset: quae si qui investigare et persequi velit, quartam elementorum litteram, id est D pro A et perinde reliquas commutet.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\xdcbersetzt...")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2026 wenn etwas Geheimes zu \xfcberbringen war, schrieb er in Zeichen, das heisst, er ordnete die Buchstaben so, dass kein Wort gelesen werden konnte: Um diese zu lesen, tauscht man den vierten Buchstaben, also D f\xfcr A aus, und ebenso mit den restlichen.")),(0,r.kt)("p",null,"Caesar hat also jeden Buchstaben seiner Nachrichten durch den Buchstaben ersetzt, welcher im Alphabet drei Stellen weiter hinten steht. Der Buchstabe ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),", welcher f\xfcr ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," eingesetzt wird, wird ",(0,r.kt)("strong",{parentName:"p"},"Schl\xfcssel")," genannt. Er muss bekannt sein, um die Nachricht wieder ",(0,r.kt)("strong",{parentName:"p"},"entschl\xfcsseln")," zu k\xf6nnen."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Matt Crypto",source:"https://commons.wikimedia.org/wiki/File:Caesar_substition_cipher.png",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/en:public_domain",edited:!1},caption:"Schema der Caesar-Verschl\xfcsselung",options:{},isInline:!1,src:n(47728).Z,alt:"Schema der Caesar-Verschl\xfcsselung",mdxType:"Image"})),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," erfolgt, indem man in der folgenden Tabelle einen Klartextbuchstaben im Klartextalphabet sucht und durch den Buchstaben des Geheimtextalphabets ersetzt, der genau unterhalb steht. Die ",(0,r.kt)("strong",{parentName:"p"},"Entschl\xfcsselung")," erfolgt in umgekehrter Richtung:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Caesar-Chiffre"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Klartextalphabet"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")," ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," ",(0,r.kt)("inlineCode",{parentName:"td"},"C")," ",(0,r.kt)("inlineCode",{parentName:"td"},"D")," ",(0,r.kt)("inlineCode",{parentName:"td"},"E")," ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," ",(0,r.kt)("inlineCode",{parentName:"td"},"G")," ",(0,r.kt)("inlineCode",{parentName:"td"},"H")," ",(0,r.kt)("inlineCode",{parentName:"td"},"I")," ",(0,r.kt)("inlineCode",{parentName:"td"},"J")," ",(0,r.kt)("inlineCode",{parentName:"td"},"K")," ",(0,r.kt)("inlineCode",{parentName:"td"},"L")," ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," ",(0,r.kt)("inlineCode",{parentName:"td"},"N")," ",(0,r.kt)("inlineCode",{parentName:"td"},"O")," ",(0,r.kt)("inlineCode",{parentName:"td"},"P")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,r.kt)("inlineCode",{parentName:"td"},"R")," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," ",(0,r.kt)("inlineCode",{parentName:"td"},"U")," ",(0,r.kt)("inlineCode",{parentName:"td"},"V")," ",(0,r.kt)("inlineCode",{parentName:"td"},"W")," ",(0,r.kt)("inlineCode",{parentName:"td"},"X")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Z"),"\x1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Geheimtextalphabet"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"D")," ",(0,r.kt)("inlineCode",{parentName:"td"},"E")," ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," ",(0,r.kt)("inlineCode",{parentName:"td"},"G")," ",(0,r.kt)("inlineCode",{parentName:"td"},"H")," ",(0,r.kt)("inlineCode",{parentName:"td"},"I")," ",(0,r.kt)("inlineCode",{parentName:"td"},"J")," ",(0,r.kt)("inlineCode",{parentName:"td"},"K")," ",(0,r.kt)("inlineCode",{parentName:"td"},"L")," ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," ",(0,r.kt)("inlineCode",{parentName:"td"},"N")," ",(0,r.kt)("inlineCode",{parentName:"td"},"O")," ",(0,r.kt)("inlineCode",{parentName:"td"},"P")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,r.kt)("inlineCode",{parentName:"td"},"R")," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," ",(0,r.kt)("inlineCode",{parentName:"td"},"U")," ",(0,r.kt)("inlineCode",{parentName:"td"},"V")," ",(0,r.kt)("inlineCode",{parentName:"td"},"W")," ",(0,r.kt)("inlineCode",{parentName:"td"},"X")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Z")," ",(0,r.kt)("inlineCode",{parentName:"td"},"A")," ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," ",(0,r.kt)("inlineCode",{parentName:"td"},"C"),"\x1b")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"merke"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Merke")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Heute wird jede Verschl\xfcsselung, die auf einer Verschiebung des Alphabets beruht, eine ",(0,r.kt)("strong",{parentName:"p"},"Casear-Verschl\xfcsselung")," genannt."))),(0,r.kt)("p",null,"Die Nachricht ",(0,r.kt)("inlineCode",{parentName:"p"},"MORGEN UM ZEHN")," wird verschl\xfcsselt zu ",(0,r.kt)("inlineCode",{parentName:"p"},"PRUJHQ XP CHKQ"),"."),(0,r.kt)("h2",{id:"rot13"},"ROT13"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ROT13")," ist eine Caesar-Verschl\xfcsselung, bei welcher die Buchstaben um ",(0,r.kt)("inlineCode",{parentName:"p"},"13")," Stellen \u2013 also exakt um die H\xe4lfte des Alphabets \u2013 verschoben werden. Der Buchstabe ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," wird folglich auf ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," abgebildet. Das Spezielle an dieser Verschl\xfcsselung ist, dass man durch eine erneute Verschl\xfcsselung wieder den Klartext erh\xe4lt. Oder anders formuliert: Es spielt keine Rolle, ob man ver- oder entschl\xfcsselt. Sie k\xf6nnen dies in der folgenden Tabelle einfach nachvollziehen:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ROT-13"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Klartextalphabet"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")," ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," ",(0,r.kt)("inlineCode",{parentName:"td"},"C")," ",(0,r.kt)("inlineCode",{parentName:"td"},"D")," ",(0,r.kt)("inlineCode",{parentName:"td"},"E")," ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," ",(0,r.kt)("inlineCode",{parentName:"td"},"G")," ",(0,r.kt)("inlineCode",{parentName:"td"},"H")," ",(0,r.kt)("inlineCode",{parentName:"td"},"I")," ",(0,r.kt)("inlineCode",{parentName:"td"},"J")," ",(0,r.kt)("inlineCode",{parentName:"td"},"K")," ",(0,r.kt)("inlineCode",{parentName:"td"},"L")," ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," ",(0,r.kt)("inlineCode",{parentName:"td"},"N")," ",(0,r.kt)("inlineCode",{parentName:"td"},"O")," ",(0,r.kt)("inlineCode",{parentName:"td"},"P")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,r.kt)("inlineCode",{parentName:"td"},"R")," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," ",(0,r.kt)("inlineCode",{parentName:"td"},"U")," ",(0,r.kt)("inlineCode",{parentName:"td"},"V")," ",(0,r.kt)("inlineCode",{parentName:"td"},"W")," ",(0,r.kt)("inlineCode",{parentName:"td"},"X")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Z"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Geheimtextalphabet"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"N")," ",(0,r.kt)("inlineCode",{parentName:"td"},"O")," ",(0,r.kt)("inlineCode",{parentName:"td"},"P")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,r.kt)("inlineCode",{parentName:"td"},"R")," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," ",(0,r.kt)("inlineCode",{parentName:"td"},"U")," ",(0,r.kt)("inlineCode",{parentName:"td"},"V")," ",(0,r.kt)("inlineCode",{parentName:"td"},"W")," ",(0,r.kt)("inlineCode",{parentName:"td"},"X")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Z")," ",(0,r.kt)("inlineCode",{parentName:"td"},"A")," ",(0,r.kt)("inlineCode",{parentName:"td"},"B")," ",(0,r.kt)("inlineCode",{parentName:"td"},"C")," ",(0,r.kt)("inlineCode",{parentName:"td"},"D")," ",(0,r.kt)("inlineCode",{parentName:"td"},"E")," ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," ",(0,r.kt)("inlineCode",{parentName:"td"},"G")," ",(0,r.kt)("inlineCode",{parentName:"td"},"H")," ",(0,r.kt)("inlineCode",{parentName:"td"},"I")," ",(0,r.kt)("inlineCode",{parentName:"td"},"J")," ",(0,r.kt)("inlineCode",{parentName:"td"},"K")," ",(0,r.kt)("inlineCode",{parentName:"td"},"L")," ",(0,r.kt)("inlineCode",{parentName:"td"},"M"))))),(0,r.kt)("p",null,"Eigentlich braucht man bei ROT13 nur die halbe Tabelle:"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Benjamin D. Esham",source:"https://commons.wikimedia.org/wiki/File:ROT13_table_with_example.svg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"ROT13",options:{},isInline:!1,src:n(69307).Z,alt:"ROT13",mdxType:"Image"})),(0,r.kt)("p",null,"Die Nachricht ",(0,r.kt)("inlineCode",{parentName:"p"},"KOMM ALLEINE")," wird verschl\xfcsselt zu ",(0,r.kt)("inlineCode",{parentName:"p"},"XBZZ NYYRVAR"),"."),(0,r.kt)("h2",{id:"caesar-chiffre-ausprobieren"},"Caesar-Chiffre ausprobieren"),(0,r.kt)(d.Z,{mdxType:"Caesar"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=544692"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},47728:function(e,t,n){t.Z=n.p+"assets/images/caesar-365e6fc4e73061a56f928f36eba90296.png"},69307:function(e,t,n){t.Z=n.p+"assets/images/rot13-b14022e1ec3d397506911bee718b657e.svg"}}]);