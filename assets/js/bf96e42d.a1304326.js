"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[33706],{3239:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(67294),r="noLoginAlert_boZc",l=n(73727),a=n(71217),c=n(21314),g=(0,a.Pi)((function(){return(0,c.o)("msalStore").loggedIn?null:i.createElement("div",{className:r},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(l.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return E},Z:function(){return O}});var i=n(87462),r=n(67294),l=n(72389),a=n(71217),c=n(21314),g=n(78982),s=n(46858),I=r.createContext(void 0),o=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},d=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:o(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,g.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,g.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:o(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:o(t),type:t.type},n)},u=(0,a.Pi)((function(e){var t=(0,c.o)("documentStore"),n=r.useState(d(t,e))[0];return(0,l.Z)()?r.createElement(I.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),m=n(26528),C={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},h=n(86010),N=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),A=function(e){var t=e.value,n=t,i=void 0;if(N.test(t)){var l=function(e){if(N.test(e))return e.match(N).groups.klass}(t);i=C[l],n=""+t.replace(N,"")}return r.createElement("option",{value:t,className:i},n)},y=n(92814),p=n(51436),b=n(68949),M=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return C[function(e){if(M.test(e))return e.match(M).groups.klass}(e)]},w=(0,a.Pi)((function(e){var t,n=(0,l.Z)(),i=r.useState("unchecked"),a=i[0],c=i[1],g=r.useContext(I),s=function(e){c("unchecked"),g.setData({value:e,type:"string"})},o=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,b.U5)((function(){return g.loaded}),(function(e){e&&o(g.data.value)}))}),[]),r.useEffect((function(){g.loaded&&o(g.data.value)}),[n]),r.createElement("div",{className:C.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return s(e.target.value)},style:{width:e.width},value:g.data.value,className:v(g.data.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(A,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return s(e.target.value)},value:g.data.value,disabled:!g.loaded||g.isReadonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return o(g.data.value)},className:(0,h.default)(C[a],C.checkButton)},r.createElement(y.G,{icon:(t=a,"correct"===t?p.f8k:"wrong"===t?p.nYk:p.sph)})))})),Z=(0,m.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),f=function(e){return C[function(e){if(Z.test(e))return e.match(Z).groups.klass}(e)]},D=(0,a.Pi)((function(e){var t=r.useContext(I),n=function(e,n){void 0===n&&(n=0);var i=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:i}))};return r.createElement("div",{className:C.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(i,l){return e.select?r.createElement("select",{key:l,onChange:function(e){return n(e.target.value,l)},value:i,className:f(i),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(A,{value:e,key:t})}))):r.createElement("input",{key:l,type:"text",onChange:function(e){return n(e.target.value,l)},value:i,disabled:!t.loaded||t.isReadonly})})))})),k=void 0,z=[["bold","italic","underline"]],T=[].concat(z,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),j=(0,a.Pi)((function(e){var t=r.useState(!1),i=t[0],l=t[1],a=r.useState(!1),c=a[0],g=a[1],s=r.useRef(null),o=r.useContext(I),d=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(k)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){k=t[0].default;var n=t[1].default,i=t[2].default;n.register("modules/imageCompress",i),e()}))}((function(){e&&(g(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",d))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",d)}}),[]);return k&&c?r.createElement("div",{onFocus:function(){return!i&&l(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(k,{ref:s,theme:"snow",readOnly:!o.loaded||o.isReadonly,className:(0,h.default)(C.quillAnswer,e.monospace&&C.monospace,i?void 0:"disable-toolbar"),value:o.loaded?o.data.value||"":"Laden...",onChange:function(e,t,n,i){var r,l;r=e,void 0===l&&(l=0),c&&o.setData({value:r,type:"text"})},modules:{toolbar:e.reduced?z:T,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),x=n(3239),H=n(79265),L=(0,a.Pi)((function(){var e=r.useContext(I),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(I.Provider,{value:new H.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(j,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(w,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(D,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),J=(0,a.Pi)((function(){return r.useContext(I).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),E=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=(0,a.Pi)((function(e){var t=(0,c.o)("msalStore");return r.createElement(u,(0,i.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),t.loggedIn&&r.createElement(L,null),t.loggedIn&&r.createElement(J,null),"text"===e.type&&r.createElement(j,e),"string"===e.type&&r.createElement(w,e),"array"===e.type&&r.createElement(D,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return l}});var i=n(67294),r=n(32930),l=function(e){return i.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return i},ly:function(){return l}});var i=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return l},cl:function(){return a}});var i=864e5,r=2592e6,l=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>i&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var a=l[e];return void 0===a?n:a}return n}}var g=localStorage.getItem(e);return g?JSON.parse(g):n}catch(s){return n}},a=function(e,t){try{if(t){var n=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(i){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=l(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},50870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return I},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),a=n(84384),c=n(77960),g=["components"],s={title:"Kombinierte Verfahren"},I="Kombinierte Verfahren [^1]",o={unversionedId:"Kryptologie/Asymmetrisch/kombiniert",id:"Kryptologie/Asymmetrisch/kombiniert",isDocsHomePage:!1,title:"Kombinierte Verfahren",description:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",source:"@site/docs/Kryptologie/04-Asymmetrisch/05-kombiniert.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/kombiniert",permalink:"/Kryptologie/Asymmetrisch/kombiniert",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/05-kombiniert.md",tags:[],version:"current",lastUpdatedAt:1636395344,formattedLastUpdatedAt:"11/8/2021",sidebarPosition:5,frontMatter:{title:"Kombinierte Verfahren"},sidebar:"sidebar",previous:{title:"Asymm. Verschl\xfcsselung",permalink:"/Kryptologie/Asymmetrisch/asymm-encryption"},next:{title:"Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0a-Schichtenmodell"}},d=[{value:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung",children:[],level:2},{value:"Beide Verfahren kombinieren",id:"beide-verfahren-kombinieren",children:[],level:2},{value:"Symmetrische Verfahren zur Verschl\xfcsselung der Daten",id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten",children:[],level:2},{value:"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung",id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung",children:[],level:2},{value:"Zus\xe4tzlicher Vorteil",id:"zus\xe4tzlicher-vorteil",children:[],level:2}],u={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kombinierte-verfahren-"},"Kombinierte Verfahren ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("h2",{id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung"},"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung"),(0,l.kt)("p",null,"Wir haben in der letzten Aufgabe gesehen, dass asymmetrische Verschl\xfcsselung auch Nachteile hat. Wir wollen die Vor- und Nachteile einander gegen\xfcberstellen."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Symmetrische Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Asymmetrische Verschl\xfcsselung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2714 sehr schnell"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2718 ~ 1'000x langsamer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2714 1 Nachricht f\xfcr alle"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2718 1 Nachricht pro Person")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2718 geheimen Schl\xfcssel austauschen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2714 Public Key ist \xf6ffentlich")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2192 nur 1 gemeinsamer Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2192 1 Schl\xfcsselpaar pro Person")))),(0,l.kt)("h2",{id:"beide-verfahren-kombinieren"},"Beide Verfahren kombinieren"),(0,l.kt)("p",null,"In kryptographischen Verfahren, die heutzutage eingesetzt werden, ist das Ziel, die Vorteile beider Verfahren zu nutzen und die Nachteile zu eliminieren. Daher werden zur Verschl\xfcsselung von Daten beide Verfahren eingesetzt:"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(a.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(61639).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,l.kt)("h2",{id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten"},"Symmetrische Verfahren zur Verschl\xfcsselung der Daten"),(0,l.kt)("p",null,"Da asymmetrische Verfahren ca. 1'000x langsamer sind als symmetrische Verfahren, werden zur Verschl\xfcsselung der Daten symmetrische Verfahren eingesetzt. Denn kryptographische Verfahren werden nicht nur zur Verschl\xfcsselung kurzer Nachrichten (wie z.B. Textnachrichten) eingesetzt, h\xe4ufig m\xfcssen auch grosse Datenmengen (z.B. hochaufl\xf6sende Bilder, Tondokumente, Videos, ...) verschl\xfcsselt werden, folglich spielt die Geschwindigkeit eine zentrale Rolle."),(0,l.kt)("p",null,"Zudem ist bei symmetrischer Verschl\xfcsselung praktisch, dass die Daten f\xfcr s\xe4mtliche Empf\xe4nger gleich verschl\xfcsselt sind und somit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nicht mehrmals verschl\xfcsselt werden m\xfcssen (Zeitbedarf) und"),(0,l.kt)("li",{parentName:"ul"},"in derselben Nachricht an alle Empf\xe4nger verschickt werden k\xf6nnen, ohne dass die Nachricht unn\xf6tig ein Mehrfaches ihrer urspr\xfcnglichen L\xe4nge erreicht (Platzbedarf).")),(0,l.kt)("h2",{id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung"},"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung"),(0,l.kt)("p",null,"Asymmetrische Verfahren sind langsamer, aber zur ",(0,l.kt)("strong",{parentName:"p"},"Verschl\xfcsselung des symmetrischen Schl\xfcssels")," perfekt geeignet, da dieser sehr kurz ist und im Vergleich zu den Daten Geschwindigkeit keine Rolle spielt."),(0,l.kt)("p",null,"Zudem ist auch der verschl\xfcsselte symmetrische Schl\xfcssel sehr kurz, so dass die Nachricht nur unwesentlich l\xe4nger wird, wenn diese f\xfcr mehrere Personen verfasst wird."),(0,l.kt)("h2",{id:"zus\xe4tzlicher-vorteil"},"Zus\xe4tzlicher Vorteil"),(0,l.kt)("p",null,"Der symmetrische Schl\xfcssel kann so vom Computer gew\xe4hlt werden. Dies hat zwei Vorteile:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Der Schl\xfcssel ist wirklich zuf\xe4llig und gleichverteilt im gesamten Schl\xfcsselraum (ein Passwort, das von einer Person gew\xe4hlt wird, schafft dies nicht)."),(0,l.kt)("li",{parentName:"ol"},"Der Schl\xfcssel kann f\xfcr jede Nachricht neu gew\xe4hlt werden. Somit erh\xe4lt jede Nachricht einen eigenen Schl\xfcssel.")),(0,l.kt)("p",null,"Man spricht daher von einem ",(0,l.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel")," (engl. session key) f\xfcr die symmetrische Verschl\xfcsselung. Die folgende \xdcbersicht stellt prinzipiell dasselbe dar wie die Abbildung oben, allerdings mit einem anderem Fokus."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(a.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(98368).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,l.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"auch-symmetrische-verfahren-sind-sicher"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Auch symmetrische Verfahren sind sicher!")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Asymmetrische Verfahren sind also nicht besser als symmetrische! Sie erf\xfcllen einen anderen Zweck und werden gleichzeitig mit symmetrischen Verfahren eingesetzt. Symmetrische Verfahren sind also nicht unsicher, einzig die Erstellung des Schl\xfcssels und der Schl\xfcsselaustausch sind ein Problem."))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"kombinierte-entschl\xfcsselung"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kombinierte Entschl\xfcsselung")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Stellen Sie dar, wie die Umkehrung \u2013 also die Entschl\xfcsselung \u2013 funktioniert, wenn symmetrische und asymmetrische Verfahren kombiniert verwendet werden."),(0,l.kt)(c.Z,{type:"text",webKey:"4a33b602-eb5f-427d-ba5e-725756b5f112",mdxType:"Answer"}))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559732"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},98368:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQ4MHB4IiBoZWlnaHQ9IjI4MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQ2FscXVlLTEiIHNlcmlmOmlkPSJDYWxxdWUgMSI+CiAgICAgICAgPGcgaWQ9IktsYXJ0ZXh0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMjkuNjQ5IiB5PSIzNi4yNiIgd2lkdGg9Ijg1Ljk4NiIgaGVpZ2h0PSIxMzQuMTI3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC01OS45ODQ0LC01MC4yODM3KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxMTguNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMDAxMDAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEzNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTExMTA8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxNjYuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMTAxMTAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE4Mi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAxMTE8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIyMTQuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjEwMTAwMTAxPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IHg9IjUxLjkwNXB4IiB5PSIyNi4wNTJweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDsiPktsYXJ0ZXh0PC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iU2l0enVuZ3NzY2hsw7xzc2VsIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTkyLjEwNCIgeT0iMTEwLjgwMiIgd2lkdGg9Ijg1Ljk4NiIgaGVpZ2h0PSIyMi43MDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE5Ni42OTRweCIgeT0iMTI2Ljc2OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MTEwMTAxMTA8L3RleHQ+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE4Ny4zNnB4IiB5PSIxNDYuNTk0cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5TaXR6dW5nc3NjaGzDvHNzZWw8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTaXR6dW5nc3NjaGzDvHNzZWwxIiBzZXJpZjppZD0iU2l0enVuZ3NzY2hsw7xzc2VsIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTkxLjA0NSIgeT0iMjIxLjMxMSIgd2lkdGg9Ijg1Ljk4NiIgaGVpZ2h0PSIyMi43MDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE5NS42MzZweCIgeT0iMjM3LjU2NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDAwMDEwMTE8L3RleHQ+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE3Ny4zMDJweCIgeT0iMjYyLjM5MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+w7bvrIBlbnRsaWNoZXIgU2NobMO8c3NlbDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdlaGVpbXRleHQiPgogICAgICAgICAgICA8ZyBpZD0ic3ltbS4tR2VoZWltdGV4dCIgc2VyaWY6aWQ9InN5bW0uIEdlaGVpbXRleHQiPgogICAgICAgICAgICAgICAgPHJlY3QgeD0iMzU5LjQ3NCIgeT0iMzYuMjYiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMTM0LjEyNyIgc3R5bGU9ImZpbGw6cmdiKDY1LDE2NywyMDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwyNjkuODQxLC01MC4yODM3KSI+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEwMi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAwMTA8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjExOC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MTEwMDEwMDE8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEzNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTExMTA8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE1MC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MTAwMDEwMTA8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE2Ni41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MTExMDExMDE8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE4Mi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAxMTE8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE5OC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTEwMTA8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjIxNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MTAxMDAxMDE8L3RleHQ+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIzNzEuMDA1cHgiIHk9IjI2LjE5OXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+R2VoZWltdGV4dDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iYXN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIzNTkuNDc0IiB5PSIxNzMuNzM3IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjIyLjcwNCIgc3R5bGU9ImZpbGw6cmdiKDExNiwxOTEsNjEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iMzY0LjA2NXB4IiB5PSIxODkuNzAzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAxMDExMDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCB4PSIzNTQuNTgzIiB5PSIzMC45OTMiIHdpZHRoPSI5NS43NjgiIGhlaWdodD0iMTcxLjAyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTM0Ny40NzQsNjguMjI1TDM1OS40NzQsNzQuMjI1TDM0Ny40NzQsODAuMjI1QzM1MC40NzQsNzcuMjI1IDM1MC40NzQsNzEuMjI1IDM0Ny40NzQsNjguMjI1WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yODMuMzQ2LDc0LjIyNUwzNDkuODc0LDc0LjIyNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNMzQ3LjQ3NCwxNzguNzM0TDM1OS40NzQsMTg0LjczNEwzNDcuNDc0LDE5MC43MzRDMzUwLjQ3NCwxODcuNzM0IDM1MC40NzQsMTgxLjczNCAzNDcuNDc0LDE3OC43MzRaIi8+CiAgICAgICAgPHBhdGggZD0iTTI4My4zNDYsMTg0LjczNEwzNDkuODc0LDE4NC43MzQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTE3NC40NDgsNjguMjI1TDE4Ni40NDgsNzQuMjI1TDE3NC40NDgsODAuMjI1QzE3Ny40NDgsNzcuMjI1IDE3Ny40NDgsNzEuMjI1IDE3NC40NDgsNjguMjI1WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTUuNjM0LDc0LjIyNUwxNzYuODQ4LDc0LjIyNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNMjI3LjY0NiwxMDEuNTFMMjMzLjY0Niw4OS41MUwyMzkuNjQ2LDEwMS41MUMyMzYuNjQ2LDk4LjUxIDIzMC42NDYsOTguNTEgMjI3LjY0NiwxMDEuNTFaIi8+CiAgICAgICAgPHBhdGggZD0iTTIzMy42NDYsMTEwLjgwMkwyMzMuNjQ2LDk5LjExIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjcuNjQ2LDIxMi4wMTlMMjMzLjY0NiwyMDAuMDE5TDIzOS42NDYsMjEyLjAxOUMyMzYuNjQ2LDIwOS4wMTkgMjMwLjY0NiwyMDkuMDE5IDIyNy42NDYsMjEyLjAxOVoiLz4KICAgICAgICA8cGF0aCBkPSJNMjMzLjY0NiwyMjEuMzExTDIzMy42NDYsMjA5LjYxOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNMjI3LjY0NiwxNTcuNDQ5TDIzMy42NDYsMTY5LjQ0OUwyMzkuNjQ2LDE1Ny40NDlDMjM2LjY0NiwxNjAuNDQ5IDIzMC42NDYsMTYwLjQ0OSAyMjcuNjQ2LDE1Ny40NDlaIi8+CiAgICAgICAgPHBhdGggZD0iTTIzMy42NDYsMTU5Ljg0OUwyMzMuNjQ2LDE0OC4xNTciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPGcgaWQ9InN5bW0uLVZlcnNjaGzDvHNzZWx1bmciIHNlcmlmOmlkPSJzeW1tLiBWZXJzY2hsw7xzc2VsdW5nIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTg2LjQ0OCIgeT0iNTguOTQiIHdpZHRoPSI5Ni44OTgiIGhlaWdodD0iMzAuNTciIHN0eWxlPSJmaWxsOnJnYig2NSwxNjcsMjA5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNzMuNzQ0MSwtMzEuNDQ4OSkiPgogICAgICAgICAgICAgICAgPHRleHQgeD0iMjcyLjAxMXB4IiB5PSIxMDIuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDsiPnN5bW1ldHJpc2NoZTwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI2NS4zMjNweCIgeT0iMTE0LjkwM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+Vjx0c3BhbiB4PSIyNzIuNjY1cHggMjc5LjMzOXB4ICIgeT0iMTE0LjkwM3B4IDExNC45MDNweCAiPmVyPC90c3Bhbj5zY2hsw7xzc2VsdW5nPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJhc3ltbS4tVmVyc2NobMO8c3NlbHVuZyIgc2VyaWY6aWQ9ImFzeW1tLiBWZXJzY2hsw7xzc2VsdW5nIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTg1LjE5NyIgeT0iMTY5LjQ0OSIgd2lkdGg9Ijk2Ljg5OCIgaGVpZ2h0PSIzMC41NyIgc3R5bGU9ImZpbGw6cmdiKDExNiwxOTEsNjEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC03NC45OTU2LDc5LjA2KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIyNjguNjc0cHgiIHk9IjEwMi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+YXN5bW1ldHJpc2NoZTwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI2NS4zMjNweCIgeT0iMTE0LjkwM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+Vjx0c3BhbiB4PSIyNzIuNjY1cHggMjc5LjMzOXB4ICIgeT0iMTE0LjkwM3B4IDExNC45MDNweCAiPmVyPC90c3Bhbj5zY2hsw7xzc2VsdW5nPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9ImxheWVyMSI+CiAgICA8L2c+Cjwvc3ZnPgo="},61639:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-ca8b9f6a8855055369b66ca053a9e97c.svg"},26528:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}n.d(t,{Z:function(){return a}});var r=n(89611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function a(){a=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,i,l){var a=new RegExp(e,i);return t.set(a,l||t.get(e)),(0,r.Z)(a,n.prototype)}function c(e,n){var i=t.get(n);return Object.keys(i).reduce((function(t,n){return t[n]=e[i[n]],t}),Object.create(null))}return l(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=c(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var l=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+l[t]})))}if("function"==typeof r){var a=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==i(e[e.length-1])&&(e=[].slice.call(e)).push(c(e,a)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},a.apply(this,arguments)}}}]);