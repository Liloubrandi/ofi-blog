"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8422],{3239:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r="noLoginAlert_boZc",s=a(73727),l=a(71217),i=a(21314),m=(0,l.Pi)((function(){return(0,i.o)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(s.rU,{to:"/login"},"Login"))}))},77960:function(e,t,a){a.d(t,{Z:function(){return O}});var n=a(87462),r=a(67294),s=a(72389),l=a(71217),i=a(21314),m=a(78982),c=a(46858),o=r.createContext(void 0),p=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},u=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:p(t),type:t.type,size:"array"===t.type?t.size:void 0});var a=function(){if(t.id){var e=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,m.rV)(t.id,e);if(a&&a.value)return{data:{value:a.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,m.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:p(t),type:t.type,size:t.size},a):e.getOrCreateDocument(t.webKey,t.type,{value:p(t),type:t.type},a)},d=(0,l.Pi)((function(e){var t=(0,i.o)("documentStore"),a=r.useState(u(t,e))[0];return(0,s.Z)()?r.createElement(o.Provider,{value:a},e.children):r.createElement("div",null,"Loading")})),g=a(26528),h={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},N=a(86010),k=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,a=t,n=void 0;if(k.test(t)){var s=function(e){if(k.test(e))return e.match(k).groups.klass}(t);n=h[s],a=""+t.replace(k,"")}return r.createElement("option",{value:t,className:n},a)},f=a(92814),b=a(51436),v=a(68949),M=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return h[function(e){if(M.test(e))return e.match(M).groups.klass}(e)]},x=(0,l.Pi)((function(e){var t,a=r.useState("unchecked"),n=a[0],s=a[1],l=r.useContext(o),i=function(e){s("unchecked"),l.setData({value:e,type:"string"})},m=function(t){var a=e.sanitizer?e.sanitizer:function(e){return e};s(a(t)===a(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,v.U5)((function(){return l.loaded}),(function(e){e&&m(l.data.value)}))}),[]),r.createElement("div",{className:h.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return i(e.target.value)},value:l.data.value,className:w(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return r.createElement(y,{value:e,key:t})}))):r.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&r.createElement("button",{onClick:function(){return m(l.data.value)},className:(0,N.default)(h[n],h.checkButton)},r.createElement(f.G,{icon:(t=n,"correct"===t?b.f8k:"wrong"===t?b.nYk:b.sph)})))})),E=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),D=function(e){return h[function(e){if(E.test(e))return e.match(E).groups.klass}(e)]},L=(0,l.Pi)((function(e){var t=r.useContext(o),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return r.createElement("div",{className:h.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(n,s){return e.select?r.createElement("select",{key:s,onChange:function(e){return a(e.target.value,s)},value:n,className:D(n),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(y,{value:e,key:t})}))):r.createElement("input",{key:s,type:"text",onChange:function(e){return a(e.target.value,s)},value:n,disabled:!t.loaded||t.isReadonly})})))})),I=void 0,z=(0,l.Pi)((function(e){var t=r.useState(!1),n=t[0],s=t[1],l=r.useState(!1),i=l[0],m=l[1],c=r.useRef(null),p=r.useContext(o),u=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(I)return e();Promise.all([Promise.all([a.e(2930),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(3312),a.e(1940)]).then(a.bind(a,11940)),Promise.all([a.e(3312),a.e(7617)]).then(a.bind(a,37617))]).then((function(t){I=t[0].default;var a=t[1].default,n=t[2].default;a.register("modules/imageCompress",n),e()}))}((function(){e&&(m(!0),c&&c.current&&c.current.editor.getModule("toolbar").container.addEventListener("mousedown",u))})),function(){e=!1,c&&c.current&&c.current.editor.getModule("toolbar").container.removeEventListener("mousedown",u)}}),[]);return I&&i?r.createElement("div",{onFocus:function(){return!n&&s(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(I,{ref:c,theme:"snow",readOnly:!p.loaded||p.isReadonly,className:(0,N.default)(h.quillAnswer,n?void 0:"disable-toolbar"),value:p.loaded?p.data.value||"":"Laden...",onChange:function(e,t,a,n){var r,s;r=e,void 0===s&&(s=0),i&&p.setData({value:r,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),S=a(3239),T=a(79265),j=(0,l.Pi)((function(){var e=r.useContext(o),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(o.Provider,{value:new T.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(L,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),C=(0,l.Pi)((function(){return r.useContext(o).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,N.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),O=(0,l.Pi)((function(e){var t=(0,i.o)("msalStore");return r.createElement(d,(0,n.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(S.Z,null),t.loggedIn&&r.createElement(j,null),t.loggedIn&&r.createElement(C,null),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(x,e),"array"===e.type&&r.createElement(L,e)))}))},21314:function(e,t,a){a.d(t,{o:function(){return s}});var n=a(67294),r=a(32930),s=function(e){return n.useContext(r.Nx)[e]}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return s}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},s=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return s},cl:function(){return l}});var n=864e5,r=2592e6,s=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&i()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var s=JSON.parse(r);if("object"==typeof s){var l=s[e];return void 0===l?a:l}return a}}var m=localStorage.getItem(e);return m?JSON.parse(m):a}catch(c){return a}},l=function(e,t){try{if(t){var a=s(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},i=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=s(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},13030:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=a(84384),i=a(77960),m=["components"],c={title:"Begriffe"},o="Begriffe",p={unversionedId:"Kryptologie/Antike/Begriff",id:"version-24o/Kryptologie/Antike/Begriff",isDocsHomePage:!1,title:"Begriffe",description:"Kryptologie",source:"@site/versioned_docs/version-24o/06-Kryptologie/02-Antike/05-Begriff.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Begriff",permalink:"/24o/Kryptologie/Antike/Begriff",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/02-Antike/05-Begriff.md",tags:[],version:"24o",sidebarPosition:5,frontMatter:{title:"Begriffe"},sidebar:"version-24o/sidebar",previous:{title:"Substitution",permalink:"/24o/Kryptologie/Antike/substitution"},next:{title:"H\xe4ufigkeitsanalyse",permalink:"/24o/Kryptologie/Antike/frequency-analysis"}},u=[{value:"Kryptologie",id:"kryptologie",children:[],level:2},{value:"Kryptographie und Kryptoanalyse",id:"kryptographie-und-kryptoanalyse",children:[],level:2},{value:"Klartext, Geheimtext und Schl\xfcssel",id:"klartext-geheimtext-und-schl\xfcssel",children:[],level:2},{value:"Verschl\xfcsselungsverfahren",id:"verschl\xfcsselungsverfahren",children:[],level:2},{value:"Schl\xfcsselraum",id:"schl\xfcsselraum",children:[],level:2}],d={toc:u};function g(e){var t=e.components,c=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"begriffe"},"Begriffe"),(0,s.kt)("h2",{id:"kryptologie"},"Kryptologie"),(0,s.kt)("p",null,"Der Begriff ",(0,s.kt)("strong",{parentName:"p"},"Kryptologie")," setzt sich zusammen aus dem altgriechischen ",(0,s.kt)("em",{parentName:"p"},"\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2")," (also ",(0,s.kt)("em",{parentName:"p"},"krypt\xf3s"),"), was ",(0,s.kt)("strong",{parentName:"p"},"verborgen")," bedeutet, und ",(0,s.kt)("em",{parentName:"p"},"\u03bb\u03cc\u03b3\u03bf\u03c2")," (also ",(0,s.kt)("em",{parentName:"p"},"l\xf3gos"),"), was ",(0,s.kt)("strong",{parentName:"p"},"Lehre"),", ",(0,s.kt)("strong",{parentName:"p"},"Kunde")," bedeutet. Kryptologie bezeichnet die Wissenschaft, die sich mit der Ver- und Entschl\xfcsselung von Informationen (also mit ",(0,s.kt)("strong",{parentName:"p"},"Informationssicherheit"),") besch\xe4ftigt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Kryptologie, Kryptographie und Kryptoanalyse",options:{},isInline:!1,src:a(29992).Z,alt:"Kryptologie, Kryptographie und Kryptoanalyse",mdxType:"Image"})),(0,s.kt)("h2",{id:"kryptographie-und-kryptoanalyse"},"Kryptographie und Kryptoanalyse"),(0,s.kt)("p",null,"Die Kryptologie kann grob in zwei Teilbereiche unterteilt werden:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"die Kryptographie (",(0,s.kt)("em",{parentName:"li"},"\u03b3\u03c1\u03ac\u03c6\u03b5\u03b9\u03bd"),", also ",(0,s.kt)("em",{parentName:"li"},"gr\xe1phein"),", was ",(0,s.kt)("strong",{parentName:"li"},"schreiben")," bedeutet) und"),(0,s.kt)("li",{parentName:"ul"},"die ",(0,s.kt)("strong",{parentName:"li"},"Kryptoanalyse"),".")),(0,s.kt)("p",null,"W\xe4hrend sich die Kryptographie mit dem Finden von sicheren Verschl\xfcsselungsverfahren besch\xe4ftigt, liegt der Fokus der Kryptoanalyse beim \xabBrechen\xbb oder \xabKnacken\xbb solcher Verfahren."),(0,s.kt)("h2",{id:"klartext-geheimtext-und-schl\xfcssel"},"Klartext, Geheimtext und Schl\xfcssel"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Symbol"),(0,s.kt)("th",{parentName:"tr",align:"left"},"deutscher Begriff"),(0,s.kt)("th",{parentName:"tr",align:"left"},"englischer Begriff"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Klartext")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"plaintext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"unverschl\xfcsselte Nachricht")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Geheimtext")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"ciphertext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"verschl\xfcsselte Nachricht")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Schl\xfcssel")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"key")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Information, welche ben\xf6tigt wird, um den Klartext zu ver- bzw. den Geheimtext zu entschl\xfcsseln")))),(0,s.kt)("h2",{id:"verschl\xfcsselungsverfahren"},"Verschl\xfcsselungsverfahren"),(0,s.kt)("p",null,"Ein ",(0,s.kt)("strong",{parentName:"p"},"Verschl\xfcsselungsverfahren")," ist ein Algorithmus, welcher einen Klartext unter Verwendung eines Schl\xfcssels in einen Geheimtext \xfcberf\xfchrt oder umgekehrt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0  ",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",options:{},isInline:!1,src:a(52907).Z,alt:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",mdxType:"Image"})),(0,s.kt)("h2",{id:"schl\xfcsselraum"},"Schl\xfcsselraum"),(0,s.kt)("p",null,"Der Begriff ",(0,s.kt)("em",{parentName:"p"},"Schl\xfcsselraum")," bezeichnet die Anzahl m\xf6glicher Schl\xfcssel f\xfcr ein bestimmtes Verschl\xfcsselungsverfahren. Die Sicherheit eines Verschl\xfcsselungsverfahrens h\xe4ngt stark von der Gr\xf6sse des Schl\xfcsselraums ab."),(0,s.kt)("p",null,"Die Gr\xf6sse des Schl\xfcsselraums wird in bit (d.h. als bin\xe4rer Logarithmus) angegeben. Bei zwei m\xf6glichen Schl\xfcsseln (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"1"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))))))),") spricht man von 1 bit, bei 1024 m\xf6glichen Schl\xfcsseln (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))))))))))),") von 10 bit."),(0,s.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"schl\xfcsselr\xe4ume"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,s.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselr\xe4ume")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Geben Sie die Gr\xf6sse des Schl\xfcsselraumes f\xfcr die folgenden Verschl\xfcsselungsverfahren an:"),(0,s.kt)("h4",{parentName:"div",id:"skytale"},"Skytale"),(0,s.kt)(i.Z,{type:"text",id:"q1",webKey:"0b1ab3e2-40ff-4209-8451-b53acf3ff24f",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"caesar"},"Caesar"),(0,s.kt)(i.Z,{type:"text",id:"q2",webKey:"fa51f7d3-35fa-4d7f-beb9-b089012eeec2",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"rot13"},"ROT13"),(0,s.kt)(i.Z,{type:"text",id:"q3",webKey:"e10e6d11-13d4-47b3-b940-7bb7860fdaf6",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"substitution"},"Substitution"),(0,s.kt)("p",{parentName:"div"},"allgemeine monoalphabetische Substitution"),(0,s.kt)(i.Z,{type:"text",id:"q4",webKey:"87f42c57-7331-42b6-a77c-e7aa23d4cebe",mdxType:"Answer"}))),(0,s.kt)("hr",null))}g.isMDXComponent=!0},29992:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQwMHB4IiBoZWlnaHQ9IjE1MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNMjY0LDIzLjg4QzI2NCwxOS40NjUgMjYwLjQxNSwxNS44OCAyNTYsMTUuODhMMTQ0LDE1Ljg4QzEzOS41ODUsMTUuODggMTM2LDE5LjQ2NSAxMzYsMjMuODhMMTM2LDM5Ljg4QzEzNiw0NC4yOTYgMTM5LjU4NSw0Ny44OCAxNDQsNDcuODhMMjU2LDQ3Ljg4QzI2MC40MTUsNDcuODggMjY0LDQ0LjI5NiAyNjQsMzkuODhMMjY0LDIzLjg4WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjE2OS43OTJweCIgeT0iMzQuOTEzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9sb2dpZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0xNDUuODA5LDExMC4xMkMxNDUuODA5LDEwNS43MDQgMTQyLjIyNCwxMDIuMTIgMTM3LjgwOSwxMDIuMTJMMjUuODA5LDEwMi4xMkMyMS4zOTMsMTAyLjEyIDE3LjgwOSwxMDUuNzA0IDE3LjgwOSwxMTAuMTJMMTcuODA5LDEyNi4xMkMxNy44MDksMTMwLjUzNSAyMS4zOTMsMTM0LjEyIDI1LjgwOSwxMzQuMTJMMTM3LjgwOSwxMzQuMTJDMTQyLjIyNCwxMzQuMTIgMTQ1LjgwOSwxMzAuNTM1IDE0NS44MDksMTI2LjEyTDE0NS44MDksMTEwLjEyWiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjQ0LjI2MnB4IiB5PSIxMjEuMTUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9ncmFwaGllPC90ZXh0PgogICAgPHBhdGggZD0iTTM4Mi4xOTEsMTEwLjEyQzM4Mi4xOTEsMTA1LjcwNCAzNzguNjA3LDEwMi4xMiAzNzQuMTkxLDEwMi4xMkwyNjIuMTkxLDEwMi4xMkMyNTcuNzc2LDEwMi4xMiAyNTQuMTkxLDEwNS43MDQgMjU0LjE5MSwxMTAuMTJMMjU0LjE5MSwxMjYuMTJDMjU0LjE5MSwxMzAuNTM1IDI1Ny43NzYsMTM0LjEyIDI2Mi4xOTEsMTM0LjEyTDM3NC4xOTEsMTM0LjEyQzM3OC42MDcsMTM0LjEyIDM4Mi4xOTEsMTMwLjUzNSAzODIuMTkxLDEyNi4xMkwzODIuMTkxLDExMC4xMloiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIyNzkuOThweCIgeT0iMTIxLjE1MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+S3J5cHRvYW5hbHlzZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0yMDAsNDcuODhMODEuODA5LDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgogICAgPHBhdGggZD0iTTIwMCw0Ny44OEwzMTguMTkxLDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgo8L3N2Zz4K"},52907:function(e,t,a){t.Z=a.p+"assets/images/symmetric-cryptosystem-c7b53ba8f9d7e2e0c03614b4dacdcf54.svg"},26528:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}a.d(t,{Z:function(){return l}});var r=a(89611);function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function l(){l=function(e,t){return new a(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function a(e,n,s){var l=new RegExp(e,n);return t.set(l,s||t.get(e)),(0,r.Z)(l,a.prototype)}function i(e,a){var n=t.get(a);return Object.keys(n).reduce((function(t,a){return t[a]=e[n[a]],t}),Object.create(null))}return s(a,RegExp),a.prototype.exec=function(t){var a=e.exec.call(this,t);return a&&(a.groups=i(a,this)),a},a.prototype[Symbol.replace]=function(a,r){if("string"==typeof r){var s=t.get(this);return e[Symbol.replace].call(this,a,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+s[t]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,a,(function(){var e=arguments;return"object"!==n(e[e.length-1])&&(e=[].slice.call(e)).push(i(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,a,r)},l.apply(this,arguments)}}}]);