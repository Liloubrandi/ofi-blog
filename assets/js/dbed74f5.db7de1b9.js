"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1459],{3239:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),u=(0,l.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(87462),a=n(67294),i=n(72389),l=n(71217),o=n(21314),u=n(78982),s=n(46858),c=a.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},m=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,u.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,u.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},p=(0,l.Pi)((function(e){var t=(0,o.o)("documentStore"),n=a.useState(m(t,e))[0];return(0,i.Z)()?a.createElement(c.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),g=n(26528),f={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},h=n(86010),v=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,n=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=f[i],n=""+t.replace(v,"")}return a.createElement("option",{value:t,className:r},n)},b=n(92814),k=n(51436),w=n(68949),N=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return f[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},x=(0,l.Pi)((function(e){var t,n=a.useState("unchecked"),r=n[0],i=n[1],l=a.useContext(c),o=function(e){i("unchecked"),l.setData({value:e,type:"string"})},u=function(t){var n=e.sanitizer?e.sanitizer:function(e){return e};i(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,w.U5)((function(){return l.loaded}),(function(e){e&&u(l.data.value)}))}),[]),a.createElement("div",{className:f.answer},e.label&&a.createElement("label",null,e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return o(e.target.value)},value:l.data.value,className:E(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&a.createElement("button",{onClick:function(){return u(l.data.value)},className:(0,h.default)(f[r],f.checkButton)},a.createElement(b.G,{icon:(t=r,"correct"===t?k.f8k:"wrong"===t?k.nYk:k.sph)})))})),S=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return f[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},D=(0,l.Pi)((function(e){var t=a.useContext(c),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return a.createElement("div",{className:f.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:C(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(y,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),z=void 0,Z=(0,l.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],l=a.useState(!1),o=l[0],u=l[1],s=a.useRef(null),d=a.useContext(c),m=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(z)return e();Promise.all([Promise.all([n.e(2930),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(3312),n.e(1940)]).then(n.bind(n,11940)),Promise.all([n.e(3312),n.e(7617)]).then(n.bind(n,37617))]).then((function(t){z=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(u(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return z&&o?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(z,{ref:s,theme:"snow",readOnly:!d.loaded||d.isReadonly,className:(0,h.default)(f.quillAnswer,r?void 0:"disable-toolbar"),value:d.loaded?d.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),o&&d.setData({value:a,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),K=n(3239),_=n(79265),V=(0,l.Pi)((function(){var e=a.useContext(c),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(c.Provider,{value:new _.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(Z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(D,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),A=(0,l.Pi)((function(){return a.useContext(c).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=(0,l.Pi)((function(e){var t=(0,o.o)("msalStore");return a.createElement(p,(0,r.Z)({},e,{childNodes:e.children}),a.createElement("div",{"data--web-key":e.webKey},a.createElement(K.Z,null),t.loggedIn&&a.createElement(V,null),t.loggedIn&&a.createElement(A,null),"text"===e.type&&a.createElement(Z,e),"string"===e.type&&a.createElement(x,e),"array"===e.type&&a.createElement(D,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},54745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(77960),o=["components"],u={title:"Umwandlung ins Bin\xe4rsystem"},s="Umwandlung ins Bin\xe4rsystem [^1]",c={unversionedId:"Kryptologie/Symmetrisch/binaer",id:"Kryptologie/Symmetrisch/binaer",isDocsHomePage:!1,title:"Umwandlung ins Bin\xe4rsystem",description:"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden.",source:"@site/docs/Kryptologie/03-Symmetrisch/01-binaer.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/binaer",permalink:"/Kryptologie/Symmetrisch/binaer",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/01-binaer.md",tags:[],version:"current",lastUpdatedAt:1635717936,formattedLastUpdatedAt:"10/31/2021",sidebarPosition:1,frontMatter:{title:"Umwandlung ins Bin\xe4rsystem"},sidebar:"sidebar",previous:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",permalink:"/Kryptologie/Antike/python-tools"},next:{title:"Codierung",permalink:"/Kryptologie/Symmetrisch/codierung"}},d=[{value:"Prozess der Verschl\xfcsselung",id:"prozess-der-verschl\xfcsselung",children:[],level:2},{value:"Ein grosser Vorteil",id:"ein-grosser-vorteil",children:[],level:2},{value:"Codierung",id:"codierung",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umwandlung-ins-bin\xe4rsystem-"},"Umwandlung ins Bin\xe4rsystem ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden."),(0,i.kt)("h2",{id:"prozess-der-verschl\xfcsselung"},"Prozess der Verschl\xfcsselung"),(0,i.kt)("p",null,"Das Verfahren wird etwas umst\xe4ndlicher, da jeweils in die bin\xe4re Computersprache \xfcbersetzt werden muss:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Geheimtext wird in eine Folge von bin\xe4ren Zahlen codiert (Klartext \u2192 bin\xe4rer Klartext)"),(0,i.kt)("li",{parentName:"ol"},"Verschl\xfcsselung dieser Zahlenfolge (bin\xe4rer Klartext \u2192 bin\xe4rer Geheimtext)"),(0,i.kt)("li",{parentName:"ol"},"... (Versand, Abspeichern, ...)"),(0,i.kt)("li",{parentName:"ol"},"Decodierung des bin\xe4ren Geheimtextes (bin\xe4rer Geheimtext \u2192 Geheimtext)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"unterschied-codierung-und-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Unterschied \xabCodierung\xbb und \xabVerschl\xfcsselung\xbb")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es ist wichtig, dass die Begriffe ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," und ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," unterschieden werden:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," ist eine Umwandlung in eine andere Darstellungsform (z.B. Text \u2192 Zahlen, Bild \u2192 Text, Zahlen \u2192 bin\xe4re Zahlen, ...). Eine Codierung hat das ",(0,i.kt)("strong",{parentName:"p"},"Ziel"),", eine Information in ein bestimmtes ",(0,i.kt)("strong",{parentName:"p"},"Datenformat umzuwandeln"),", sie bietet keine Sicherheit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," oder ",(0,i.kt)("em",{parentName:"p"},"Chiffre")," hat das Ziel zu ",(0,i.kt)("strong",{parentName:"p"},"verhindern"),", dass Aussenstehende an eine bestimmte ",(0,i.kt)("strong",{parentName:"p"},"Information gelangen"),", indem Daten mithilfe eines Schl\xfcssels so ver\xe4ndert werden, dass ohne Kenntnis des Schl\xfcssels nicht mehr auf die urspr\xfcngliche Form geschlossen werden kann."))))),(0,i.kt)("h2",{id:"ein-grosser-vorteil"},"Ein grosser Vorteil"),(0,i.kt)("p",null,"Die vorg\xe4ngige Codierung bedeutet zwar beim Erarbeiten einen Mehraufwand, bietet jedoch einen erheblichen Vorteil: Alles, was sich in bin\xe4rer Form darstellen l\xe4sst, kann ohne weitere Anpassung des Verfahrens verschl\xfcsselt werden!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Texte (unabh\xe4ngig von der Sprache resp. den verwendeten Schriftzeichen)"),(0,i.kt)("li",{parentName:"ul"},"Bilder"),(0,i.kt)("li",{parentName:"ul"},"Ton"),(0,i.kt)("li",{parentName:"ul"},"Videos")),(0,i.kt)("p",null,"Dies war in der Antike nicht n\xf6tig, heute ist es allerdings unumg\xe4nglich."),(0,i.kt)("h2",{id:"codierung"},"Codierung"),(0,i.kt)("p",null,"Wie im Kapitel \xabCodes und Daten\xbb besprochen, gibt es dazu eine Vielzahl von Codierungen. Beispielsweise k\xf6nnte dazu die ASCII-Codierung verwendet werden."),(0,i.kt)("p",null,"F\xfcr die folgenden Beispiele verwenden wir den etwas k\xfcrzeren Pentacode."),(0,i.kt)(l.Z,{type:"text",webKey:"e1cd3339-5234-42b3-90cd-9e777d74a88e",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=4464"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return l}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function l(){l=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var l=new RegExp(e,r);return t.set(l,i||t.get(e)),(0,a.Z)(l,n.prototype)}function o(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},l.apply(this,arguments)}}}]);