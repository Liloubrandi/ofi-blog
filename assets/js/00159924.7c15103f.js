"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[44768],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return Z}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},o=n(86010),l=n(71217),c=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var o=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[o],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),p=n(72389),m=n(21314),g=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,l.Pi)((function(e){var t,n,a,l=(0,p.Z)(),c=r.useState("unchecked"),g=c[0],v=c[1],b=(0,m.oR)("documentStore").find(e.webKey),h=function(t){!e.isLegacy&&b.loaded&&(v("unchecked"),b.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&k(b.data.value)}))}),[]),r.useEffect((function(){b.loaded&&k(b.data.value)}),[l]),r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.data.value,className:y(b.data.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.data.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(b.data.value)},className:(0,o.default)(i[g],i.checkButton)},r.createElement(s.G,{icon:(a=g,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)})))})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:h(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})})))})),w=void 0,E=[["bold","italic","underline"]],C=[].concat(E,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),N=(0,l.Pi)((function(e){var t=r.useState(!1),a=t[0],l=t[1],c=r.useState(!1),u=c[0],s=c[1],d=r.useRef(null),p=(0,m.oR)("documentStore").find(e.webKey),g=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){w=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(s(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",g))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",g)}}),[]);return w&&u?r.createElement("div",{onFocus:function(){return!a&&l(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||!p.loaded||p.readonly,className:(0,o.default)(i.quillAnswer,e.monospace&&i.monospace,a?void 0:"disable-toolbar"),value:e.isLegacy?p.legacyData.value:p.value||"",onChange:function(t,n,r,a){var i,o;i=t,void 0===o&&(o=0),!e.isLegacy&&p.loaded&&u&&(0,f.z)((function(){p.value=i}))},modules:{toolbar:e.reduced?E:C,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:p.loaded?e.placeholder||"\u270d\ufe0f Antwort...":"Laden..."})):r.createElement("div",null,"Loading...")})),_=n(3239),x=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(N,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,l.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(46858),K=n(78982),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,P.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,K.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,K.cl)(e.id,t)}}}:function(){}},Z=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,m.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||"",type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,A(e)),a&&i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),n.loggedIn&&r.createElement(S,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(N,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement("div",null,"Loading...")}))},91033:function(e,t,n){var r=n(86010),a=n(67294),i=n(96734),o=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,l=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "];t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],c=a.useState(""),u=c[0],s=c[1],d=a.useState("text"),f=d[0],p=d[1];return a.useEffect((function(){if("text"===f&&0!==t.length){var e=t.split("").map((function(e){var t=l.indexOf(e),n=t%5;return""+(Math.floor(t/5)+1)+(n+1)}));s(e.join(" "))}}),[t]),a.useEffect((function(){if("cipher"===f&&0!==u.length){var e=u.split(" ").map((function(e){var t=e.split("").map((function(e){return Number.parseInt(e,10)-1})),n=t[0],r=t[1];return l[5*n+r]}));n(e.join(""))}}),[u]),a.createElement("div",{className:(0,r.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("text"),n(function(e){return e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(o,"")}(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:u,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("cipher"),s(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))}},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return l}});var r=n(68949),a=n(67294),i=n(93812),o=function(e){return a.useContext(i.Nx)[e]},l=function(e,t,n,o,l,c){a.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,o,l,c)}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){r&&i.Ux.documentStore.provideDocument(e,t,n,o,l,c)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){r||i.Ux.documentStore.provideDocument(e,t,n,o,l,c)}))}),[])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},18556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(84384),l=n(91033),c=(n(52084),["components"]),u={title:"Polybios-Chiffre"},s="Polybios-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Polybios",id:"Kryptologie/Antike/Polybios",isDocsHomePage:!1,title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/docs/Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/Kryptologie/Antike/Polybios",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"current",lastUpdatedAt:1635104316,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"sidebar",previous:{title:"Skytale",permalink:"/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/Kryptologie/Antike/Caesar"}},f=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",children:[],level:2}],p={toc:f};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(72151).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)("p",null,"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(l.Z,{mdxType:"Polybios"}),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},72151:function(e,t,n){t.Z=n.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);