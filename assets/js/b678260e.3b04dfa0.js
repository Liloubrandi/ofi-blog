"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[88671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30575:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(86010),r=t(71217),i=t(67294);const s="pwContainer_eQcZ",o="achievement_al8G",l="notice_akVE",m="warning_kDn7",p="insecure_Zw0i",d="note_QSD2",c="zeros_lAEQ";var u=t(97566);const h={achievement:0,notice:1,warning:2,insecure:3},g={instantly:"sofort",forever:"nie"},k=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],f={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},b={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},v={0:o,1:l,2:m,3:p},w={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},y=(0,r.Pi)((()=>{const e=i.useRef(null),[n,t]=i.useState(!1),[r,o]=i.useState(1),[l,m]=i.useState(""),[p,y]=i.useState(""),[N,P]=i.useState([]),[C,S]=i.useState("");return i.useEffect((()=>{var e;(e="/js/hsimp.min.js",new Promise(((n,t)=>{const a=document.createElement("script");document.body.appendChild(a),a.async=!0,a.onload=n,a.onerror=t,a.src=e}))).then((()=>{const e=window.hsimp;e.setDictionary(g),e.setPeriodDictionary(k),e.setNamedNumberDictionary(f),e.setCheckerDictionary(b),t(!0)}))}),[]),i.useEffect((()=>{if(!n||!e.current||!C)return void y("");const t={outputTime:(e,n)=>{y(e)},outputChecks:(e,n)=>{let t=0;e.forEach((e=>{t=Math.max(t,h[e.level])})),n||(t=1),o(t),P(e)}};window.hsimp(t,e.current)}),[C,n,e]),i.useEffect((()=>{if(!p)return m("");const e=p.split(" "),n=e[e.length-1],t=e[e.length-2],a=e[e.length-3],r=f[t];if(void 0===a||void 0===r||r<10)m("");else{const e=a.padEnd(r+a.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");m(e+" "+n)}}),[p]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",u.Z.container,s,v[r])},i.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),i.createElement("h4",null,"Wie sicher ist mein Passwort?"),i.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:e=>S(e.target.value)}),p&&i.createElement("span",{className:(0,a.default)("badge",w[r])},p),p&&i.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",i.createElement("b",null,(e=>e&&"sofort"!==e&&"nie"!==e?"in "+e:e)(p))," erraten."),l&&i.createElement("div",{className:(0,a.default)(c)},"(in ",l,".)"),i.createElement("div",null,i.createElement("ul",null,N.map(((e,n)=>i.createElement("li",{key:n},i.createElement("b",null,e.name),": ",e.message))))),i.createElement("div",{className:(0,a.default)(d)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))}))},16258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(83117),r=(t(67294),t(3905)),i=t(30575);const s={sidebar_custom_props:{id:"96d93258-8ba5-459f-be30-772aa5bd2895"}},o="Sichere Passw\xf6rter",l={unversionedId:"Kryptologie/Hashfunktionen/passwords",id:"Kryptologie/Hashfunktionen/passwords",title:"Sichere Passw\xf6rter",description:"--width=500px",source:"@site/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/passwords",permalink:"/Kryptologie/Hashfunktionen/passwords",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"96d93258-8ba5-459f-be30-772aa5bd2895"}},sidebar:"sidebar",previous:{title:"Authentifizierung",permalink:"/Kryptologie/Hashfunktionen/Authentifizierung"},next:{title:"Passw\xf6rter speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"}},m={},p=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",level:2},{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",level:3},{value:"3. Passwortmanager \ud83c\udfc5",id:"3-passwortmanager-",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},c=d("Comment"),u=d("Figure"),h=d("SourceRef"),g=d("Answer"),k={toc:p};function f(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"sichere-passw\xf6rter"},"Sichere Passw\xf6rter"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{width:"500px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=500px",src:t(51892).Z,width:"740",height:"601"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(h,{parentName:"figcaption",bib:{author:"XKCD",source:"https://xkcd.com/936/",licence:"Creative Commons 2",licence_url:"https://creativecommons.org/licenses/by-nc/2.5/",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"PasswordChecker"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,r.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wahrscheinlich, Utopisch, Futurlos, Propeller"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"3-passwortmanager-"},"3. Passwortmanager \ud83c\udfc5"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://bitwarden.com/"},"BitWarden")," (\ud83c\udfc5 Empfehlung) - gute Basis-Funktionen und einfaches Handling, zudem Open Source (Kerckhoffs Prinzip \ud83d\ude09)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://keepass.info/"},"KeePass")," - auch Open Source"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.lastpass.com/"},"LastPass")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)(g,{type:"text",webKey:"9568cbe5-e9dc-4471-9e5e-03ebf92aa10a",placeholder:"Notizen...",mdxType:"Answer"}))}f.isMDXComponent=!0},97566:(e,n,t)=>{t.d(n,{Z:()=>a});const a={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},51892:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/xkcd_password_strength-eb683b06e819cdf273fffc96247a5775.png"}}]);