"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[29197],{3239:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r="noLoginAlert_HSVn",i=n(73727),l=n(71217),o=n(21314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return K}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),u=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);r=i[l],n=""+t.replace(u,"")}return a.createElement("option",{value:t,className:r},n)},c=n(92814),d=n(51436),m=n(68949),f=n(72389),p=n(21314),g=n(74322),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n,r,o=(0,f.Z)(),u=a.useState("unchecked"),h=u[0],k=u[1],b=(0,p.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&b.loaded&&(k("unchecked"),b.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return k(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};k(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&N(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&N(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(b.value)},className:(0,l.default)(i[h],i.checkButton)},a.createElement(c.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),w=n(83117),E=n(75552),z=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),_=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(z,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(k,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),Z=n(78982),P=n(97762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,Z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},K=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(_.Z,null),n.loggedIn&&a.createElement(S,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(z,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(N,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),u=n(92814),s=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(u.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",u=n(86010),s=n(71217),c=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],p=t[1],g=a.useState(!1),h=g[0],v=g[1],k=a.useRef(null),b=e.model,y=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&b.loaded?a.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,u.default)(r)},a.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,u.default)(i,e.monospace&&l,s?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&h&&b.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},62238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),u=["components"],s={title:"Authentifizierung"},c="Authentifizierung [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/Authentifizierung",id:"version-24L/Kryptologie/Hashfunktionen/Authentifizierung",title:"Authentifizierung",description:"Authentifizierung (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person authentisiert sich dabei.",source:"@site/versioned_docs/version-24L/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/Authentifizierung",permalink:"/24L/Kryptologie/Hashfunktionen/Authentifizierung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",tags:[],version:"24L",sidebarPosition:1,frontMatter:{title:"Authentifizierung"},sidebar:"version-24L/sidebar",previous:{title:"Hashfunktionen",permalink:"/24L/category/hashfunktionen"},next:{title:"Sichere Passw\xf6rter",permalink:"/24L/Kryptologie/Hashfunktionen/passwords"}},m=[{value:"Wissen",id:"wissen-1",children:[],level:2},{value:"Besitz",id:"besitz-1",children:[],level:2},{value:"Merkmal",id:"merkmal-1",children:[],level:2}],f={toc:m};function p(e){var t=e.components,s=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentifizierung-"},"Authentifizierung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authentifizierung")," (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person ",(0,i.kt)("strong",{parentName:"p"},"authentisiert")," sich dabei."),(0,i.kt)("p",null,"Es gibt drei verschiedene Wege, wie sich eine Person authentisieren kann:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Gino Crescoli",source:"https://pixabay.com/images/id-2781614/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(27715).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"wissen"},"Wissen"),(0,i.kt)("p",{parentName:"div"},"Die Person weiss etwas, z.B. ein Passwort oder eine Pin"))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Uwe Baumann",source:"https://pixabay.com/images/id-96233/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(61822).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"besitz"},"Besitz"),(0,i.kt)("p",{parentName:"div"},"Die Person besitzt etwas, z.B. eine Kreditkarte oder einen Schl\xfcssel."))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Abdullah Boraik",source:"https://pixabay.com/images/id-3072296/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(74979).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"merkmal"},"Merkmal"),(0,i.kt)("p",{parentName:"div"},"Die Person wird \xfcber k\xf6rperliches Merkmal identifiziert, z.B. einen Fingerabdruck oder die Iris.")))),(0,i.kt)("p",null,"Jede dieser drei Methoden hat Vor- und Nachteile. Um die Nachteile auszugleichen kann eine sogenannte ",(0,i.kt)("strong",{parentName:"p"},"Zwei-Faktor-Authentifizierung")," verwendet werden, welche sich gleichzeitig auf zwei der drei Methoden abst\xfctzt."),(0,i.kt)("h2",{id:"wissen-1"},"Wissen"),(0,i.kt)("p",null,"Mit dieser Methode authentisiert sich die Person, indem sie eine bestimmte Information ",(0,i.kt)("strong",{parentName:"p"},"weiss"),", beispielsweise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ein Passwort,"),(0,i.kt)("li",{parentName:"ul"},"eine Zahlenkombination f\xfcr ein Fahrradschloss,"),(0,i.kt)("li",{parentName:"ul"},"ein pers\xf6nliche Identifikationsnummer (PIN) oder"),(0,i.kt)("li",{parentName:"ul"},"die Antwort auf eine Sicherheitsfrage.")),(0,i.kt)("p",null,"Die Information muss vor der Authentifizierung vereinbart worden sein. Wenn die Information erraten oder abgefangen worden ist, kann sie problemlos ge\xe4ndert werden."),(0,i.kt)("p",null,"Diese Authentifizierungsmethode hat folgende Schwachpunkte:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Information kann vergessen werden."),(0,i.kt)("li",{parentName:"ul"},"Sie kann erraten oder abgefangen werden.")),(0,i.kt)("h2",{id:"besitz-1"},"Besitz"),(0,i.kt)("p",null,"Diese Methode \xfcberpr\xfcft, ob die Person einen bestimmten Gegenstand ",(0,i.kt)("strong",{parentName:"p"},"besitzt"),". Typische Gegenst\xe4nde sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schl\xfcssel"),(0,i.kt)("li",{parentName:"ul"},"Chipkarten (z.B. Bankkarten)"),(0,i.kt)("li",{parentName:"ul"},"SIM-Karte"),(0,i.kt)("li",{parentName:"ul"},"Smartphone")),(0,i.kt)("p",null,"Solche Gegenst\xe4nde m\xfcssen ",(0,i.kt)("strong",{parentName:"p"},"eindeutig identifizierbar")," sein, deshalb ist die Erstellung oder das Ersetzen mit Kosten verbunden."),(0,i.kt)("p",null,"Diese Methode hat folgende Schwachpunkte:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der Gegenstand kann verloren gehen oder gestohlen werden."),(0,i.kt)("li",{parentName:"ul"},"Er kann gef\xe4lscht werden.")),(0,i.kt)("h2",{id:"merkmal-1"},"Merkmal"),(0,i.kt)("p",null,"Die Person kann auch \xfcber ein k\xf6perliches oder biometrisches Merkmal identifiziert werden. Es werden viele unterschiedliche Merkmale verwendet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handschrift"),(0,i.kt)("li",{parentName:"ul"},"Fingerabdruck"),(0,i.kt)("li",{parentName:"ul"},"Gesichtsform"),(0,i.kt)("li",{parentName:"ul"},"Tippverhalten"),(0,i.kt)("li",{parentName:"ul"},"Stimme"),(0,i.kt)("li",{parentName:"ul"},"Iris"),(0,i.kt)("li",{parentName:"ul"},"Retina"),(0,i.kt)("li",{parentName:"ul"},"Venenmuster"),(0,i.kt)("li",{parentName:"ul"},"Erbinformation (DNS)")),(0,i.kt)("p",null,"Die biometrische Authentifizierung ist sehr bequem, da keine Gegenst\xe4nde mitgef\xfchrt und keine Informationen gemerkt werden m\xfcssen."),(0,i.kt)("p",null,"Viele biometrische Merkmale sind jedoch \xf6ffentlich zug\xe4nglich und einfach f\xe4lschbar. Dadurch sind Authentifizierungsmethoden wie Fingerabdruck- oder Gesichtserkennung sehr unsicher."),(0,i.kt)(o.Z,{type:"text",webKey:"16d7b0eb-9f50-4571-9edf-c7647ebfb53d",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/2-authentication/"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},74979:function(e,t,n){t.Z=n.p+"assets/images/eye-c0fed789d1f5582b4f95247ffd6a68cb.jpg"},61822:function(e,t,n){t.Z=n.p+"assets/images/keys-0f24801bad086e1e23028d7fe6bcedce.jpg"},27715:function(e,t,n){t.Z=n.p+"assets/images/password-a69419d8d9811db7fc00737a889a4ff7.jpg"}}]);