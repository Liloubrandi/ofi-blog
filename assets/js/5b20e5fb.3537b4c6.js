"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8423],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return D},Z:function(){return L}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),c=n(71217),o=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=i[l],n=""+t.replace(o,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),g=n(74322),h=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},y=(0,c.Pi)((function(e){var t,n,a,c=(0,m.Z)(),o=r.useState("unchecked"),h=o[0],y=o[1],b=(0,p.oR)("documentStore").find(e.webKey),v=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},E=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&E(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&E(b.value)}),[b,c]),c?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:k(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return E(b.value)},className:(0,l.default)(i[h],i.checkButton)},r.createElement(s.G,{icon:(a=h,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},E=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:v(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),A=n(87462),N=n(75552),w=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,A.Z)({model:t},e))):r.createElement(g.Z,null)})),S=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},I=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(w,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(E,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),R=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=n(46858),q=n(78982),B=n(97762),D=function(e){return e.replace(/\s+/g,"").toUpperCase()},U=function(e){if(!e.id)return function(){};var t=function(){try{return(0,K.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,q.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,q.cl)(e.id,t)}}}:function(){}},L=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||B.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,U(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(S.Z,null),n.loggedIn&&r.createElement(I,e),n.loggedIn&&r.createElement(R,{webKey:e.webKey}),"text"===e.type&&r.createElement(w,e),"string"===e.type&&r.createElement(y,e),"array"===e.type&&r.createElement(E,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},67460:function(e,t,n){var r=n(51436),a=n(92814),i=n(86010),l=n(14842),c=n(67294),o={none:r.cNd,copied:r.E9T,error:r.nYk,spin:r.IJ7,ready:r.Yjj},u={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,r=c.useState(void 0),s=r[0],d=r[1],f=c.useState("none"),m=f[0],p=f[1],g=c.useRef(null);return c.useEffect((function(){if(!["none","spin","ready"].includes(m)){var e=setTimeout((function(){return p("copied"===m?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[m]),c.useEffect((function(){"none"!==m&&p("none")}),[t]),c.createElement(c.Fragment,null,c.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",u[m]),disabled:"spin"===m,onClick:function(){if(null!==g.current){if("none"===m)return p("spin"),(0,l.SE)(g.current,n).then((function(e){d(e),p("ready")}));if("ready"===m)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=s,e))]).then((function(){p("copied")})).catch((function(e){p("error"),console.warn(e)}))}catch(t){console.warn(t),p("error")}}}},c.createElement(a.G,{icon:o[m]})),c.createElement("div",{ref:g,className:"copy-container"},t))}},74311:function(e,t,n){var r=n(87462),a=n(86010),i=n(67294),l=n(96734),c=n(29009),o=n(94831),u=n(14195),s=n(3023),d=n(75358),f=n(87226),m=n(14888),p=n(59936),g=n(67460),h="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),k={width:35,height:18};t.Z=function(){var e=i.useState("Hallo"),t=e[0],n=e[1],y=i.useState(!0),b=y[0],v=y[1],E=i.useState(!1),A=E[0],N=E[1],w=i.useState(!0),S=w[0],x=w[1],I=i.useState([]),R=I[0],K=I[1];return i.useEffect((function(){var e={};S&&h.forEach((function(t){return e[t]=0}));var n=t.toUpperCase().replace(/\s/g," ");A&&(n=n.replace(/[^A-Z]/g,""));var r=n.length;if(n.split("").forEach((function(t){/\s/.test(t)||A&&!/[A-Z]/.test(t)||(e[t]=(e[t]||0)+1)})),0===r)return K([]);var a=Object.entries(e).map((function(e){return{char:e[0],count:100*e[1]/r}}));b?a.sort((function(e,t){return e.char>t.char?1:-1})):a.sort((function(e,t){return t.count-e.count})),K(a)}),[t,b,A,S]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",l.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"H\xe4ufigkeitsanalyse"),i.createElement("h4",null,"Klartext"),i.createElement("textarea",{className:(0,a.default)(l.Z.input),value:t,onChange:function(e){return n(e.target.value)},rows:5}),i.createElement("div",null,i.createElement(p.default,(0,r.Z)({id:"freq-sort-order",onChange:function(){return v(!b)},checked:b},k,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-sort-order"},b?"Sortiere alphabetisch":"Sortiere nach H\xe4ufigkeit")),i.createElement("div",null,i.createElement(p.default,(0,r.Z)({id:"freq-filter",onChange:function(){return N(!A)},checked:A},k,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-filter"},A?"Nur Buchstaben":"Alle Zeichen")),i.createElement("div",null,i.createElement(p.default,(0,r.Z)({id:"freq-indicate-unused",onChange:function(){return x(!S)},checked:S},k,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-indicate-unused"},S?"Platzhalter f\xfcr vorkommende Buchstaben":"Nur vorkommende Buchstaben")),i.createElement("div",{style:{maxWidth:"100%",overflow:"auto"}},i.createElement("div",{style:{width:"max(100%, 500px)"}},i.createElement(g.Z,{options:{backgroundColor:"white"}},i.createElement(c.h,{width:"100%",height:400},i.createElement(o.v,{data:R,width:500,height:300,margin:{top:5,right:30,left:0,bottom:5}},i.createElement(u.q,{strokeDasharray:"3 3"}),i.createElement(s.K,{dataKey:"char"}),i.createElement(d.B,{unit:"%",name:"foo"}),i.createElement(f.$,{dataKey:"count",fill:"#ffba00"}),i.createElement(m.u,{formatter:function(e,t,n){return[e+" %","H\xe4ufigkeit"]}}))))))))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_2rVr",l=n(71217),c=n(92814),o=n(51436),u=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:o.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge")},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",c="disableToolbar_gntN",o=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},p=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],p=t[1],g=r.useState(!1),h=g[0],k=g[1],y=r.useRef(null),b=e.model,v=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(k(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return d&&h&&b.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(a)},r.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,o.default)(i,e.monospace&&l,u?void 0:c),value:b.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&h&&b.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return c},RN:function(){return o}});var r=n(68949),a=n(67294),i=n(52182),l=function(e){return a.useContext(i.Nx)[e]},c=function(e,t,n,l,c,o){var u=a.useState(!1),s=u[0],d=u[1];a.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,c,o).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){s&&r&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[s]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[s])},o=function(e){var t=a.useState(!1),n=t[0],l=t[1];a.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},4279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(84384),c=n(74311),o=n(52084),u=["components"],s={title:"H\xe4ufigkeitsanalyse"},d="H\xe4ufigkeitsanalyse [^1]",f={unversionedId:"Kryptologie/Antike/frequency-analysis",id:"version-24o/Kryptologie/Antike/frequency-analysis",isDocsHomePage:!1,title:"H\xe4ufigkeitsanalyse",description:"Buchstabenh\xe4ufigkeit in der deutschen Sprache",source:"@site/versioned_docs/version-24o/06-Kryptologie/02-Antike/06-frequency-analysis.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/frequency-analysis",permalink:"/24o/Kryptologie/Antike/frequency-analysis",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/02-Antike/06-frequency-analysis.md",tags:[],version:"24o",sidebarPosition:6,frontMatter:{title:"H\xe4ufigkeitsanalyse"},sidebar:"version-24o/sidebar",previous:{title:"Begriffe",permalink:"/24o/Kryptologie/Antike/Begriff"},next:{title:"Vign\xe8re-Chiffre",permalink:"/24o/Kryptologie/Antike/Vignere"}},m=[{value:"Buchstabenh\xe4ufigkeit in der deutschen Sprache ",id:"buchstabenh\xe4ufigkeit-in-der-deutschen-sprache-",children:[],level:2},{value:"al-Kindi ",id:"al-kindi-",children:[],level:2},{value:"Entschl\xfcsselung durch H\xe4ufigkeitsanalyse",id:"entschl\xfcsselung-durch-h\xe4ufigkeitsanalyse",children:[],level:2}],p={toc:m};function g(e){var t=e.components,s=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"h\xe4ufigkeitsanalyse-"},"H\xe4ufigkeitsanalyse ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"buchstabenh\xe4ufigkeit-in-der-deutschen-sprache-"},"Buchstabenh\xe4ufigkeit in der deutschen Sprache ",(0,i.kt)("sup",{parentName:"h2",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("p",null,"Nicht alle Buchstaben kommen in der deutschen Sprache gleich h\xe4ufig vor. Nachfolgend findest du eine Auflistung der 10. h\xe4ufigsten Buchstaben der deutschen Sprache:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"1."),(0,i.kt)("th",{parentName:"tr",align:"center"},"2."),(0,i.kt)("th",{parentName:"tr",align:"center"},"3."),(0,i.kt)("th",{parentName:"tr",align:"center"},"4."),(0,i.kt)("th",{parentName:"tr",align:"center"},"5."),(0,i.kt)("th",{parentName:"tr",align:"center"},"6."),(0,i.kt)("th",{parentName:"tr",align:"center"},"7."),(0,i.kt)("th",{parentName:"tr",align:"center"},"8."),(0,i.kt)("th",{parentName:"tr",align:"center"},"9."),(0,i.kt)("th",{parentName:"tr",align:"center"},"10."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Buchstabe"),(0,i.kt)("td",{parentName:"tr",align:"center"},"E"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"I"),(0,i.kt)("td",{parentName:"tr",align:"center"},"S"),(0,i.kt)("td",{parentName:"tr",align:"center"},"R"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"D"),(0,i.kt)("td",{parentName:"tr",align:"center"},"H"),(0,i.kt)("td",{parentName:"tr",align:"center"},"U")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"H\xe4ufigkeit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"17,40 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9,78 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"7,55 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"7,27 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"7,00 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6,51 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6,15 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5,08 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4,76 %"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4,35 %"))))),(0,i.kt)("h2",{id:"al-kindi-"},"al-Kindi ",(0,i.kt)("sup",{parentName:"h2",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,i.kt)("div",{style:{justifyContent:"space-between"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("p",{parentName:"div"},"Im neunten Jahrhundert hat der arabische Gelehrte Ab\u016b Ya'q\u016bb ibn Ish\u0101q al-Kind\u012b (oder kurz al-Kindi) durch eine Analyse des Korans entdeckt, dass die einzelnen Zeichen der arabischen Schrift in bestimmten H\xe4ufigkeiten auftreten. In seiner Abhandlung \xfcber die Entzifferung kryptographischer Botschaften schrieb er Folgendes:")),(0,i.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Unknown",source:"https://commons.wikimedia.org/wiki/File:Al-kindi.jpeg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"",options:{noMargins:!0},isInline:!1,src:n(86825).Z,alt:"--no-margins",mdxType:"Image"})))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Eine M\xf6glichkeit, eine verschl\xfcsselte Botschaft zu entziffern, vorausgesetzt, wir kennen ihre Sprache, besteht darin, einen anderen Klartext in derselben Sprache zu finden, der lang genug ist, um ein oder zwei Bl\xe4tter zu f\xfcllen, und dann zu z\xe4hlen, wie oft jeder Buchstabe vorkommt. Wir nennen den h\xe4ufigsten Buchstaben den \xabersten\xbb, den zweith\xe4ufigsten den \xabzweiten\xbb, den folgenden den \xabdritten\xbb und so weiter, bis wir alle Buchstaben in der Klartextprobe durchgez\xe4hlt haben. Dann betrachten wir den Geheimtext, den wir entschl\xfcsseln wollen, und ordnen auch seine Symbole. Wir finden das h\xe4ufigste Symbol und geben ihm die Gestalt des \xabersten\xbb Buchstabens der Klartextprobe, das zweith\xe4ufigste Symbol wird zum \xabzweiten\xbb Buchstaben, das dritth\xe4ufigste zum \xabdritten\xbb Buchstaben und so weiter, bis wir alle Symbole des Kryptogramms, das wir entschl\xfcsseln wollen, auf diese Weise zugeordnet haben.")),(0,i.kt)("h2",{id:"entschl\xfcsselung-durch-h\xe4ufigkeitsanalyse"},"Entschl\xfcsselung durch H\xe4ufigkeitsanalyse"),(0,i.kt)("p",null,"Durch die H\xe4ufigkeitsanalyse werden Geheimtexte, die durch eine monoalphabetische Substitution verschl\xfcsselt worden sind, grunds\xe4tzlich entzifferbar. Das heisst, sie k\xf6nnen ohne Kenntnis des Schl\xfcssels decodiert werden, indem eine H\xe4ufigkeitsanalyse vorgenommen wird. F\xfcr die Entzifferung einer Caesar-Chiffre gen\xfcgt es, den h\xe4ufigsten Buchstaben zu suchen und anschliessend denjenigen Schl\xfcssel zu w\xe4hlen, der E auf diesen h\xe4ufigsten Buchstaben abbildet."),(0,i.kt)("h1",{id:"h\xe4ufigkeitsanalyse-durchf\xfchren"},"H\xe4ufigkeitsanalyse durchf\xfchren"),(0,i.kt)(c.Z,{mdxType:"FrequencyAnalysis"}),(0,i.kt)(o.Z,{type:"text",webKey:"1c1320de-991f-4b0f-9a4c-3a9c71073b66",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=151207"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Buchstabenh%C3%A4ufigkeit"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Al-Kind%C4%AB"},"Qikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},86825:function(e,t){t.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gAcU29mdHdhcmU6IE1pY3Jvc29mdCBPZmZpY2X/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADFAI8DASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUGBwACAwEI/8QAPRAAAgECBAQEBAQFBAEEAwAAAQIDBBEABRIhBhMxQSJRYXEHFDKBI0KRoRVSscHwM2LR4RYXJEPxU3KS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAKBEAAgICAgIBBAEFAAAAAAAAAQIAEQMhEjFBUSIEEzJxkUJhsfDx/90ABAAo/9oADAMBAAIRAxEAPwCDypNQzGukhkSikJMccrBioJO37W7YTSuZGZf9OLVsANyL3G2Nua87aJGkMGw0FrE+9+vvjrFEJ3NO0BDHT4k2Pob9N8TgV3Lmbl1OuhEDU9KIpIZQt5SCOWbfSWtt3GFLM4GkAjSSdsGvV1MNNJlwcmJn1EDuR6jrjgQYnVSrX313FsEuoDmHkxZdTxqaZZlnj1pKGt6f16jC2bUG3sNVhZTtjuKqeGKOJ3eROio4suBpbeYLMQQem3tjQILEVqcpdm07eHbbBEKM0RugaxFgex88DBruQAd+wxP+FeAsxzSkNZVBqWmXYAAF39gffGsQBuAgJOpHKSgmrqlKVIjLJJciNFuQb9AB/XEjovhVnlSokqIlo13J1m/7YuDh7I8r4VyxPloVE0ijVPLvI5P+W2w+WNmlR2DuoHQm1sTHIellAQdtPnLNOAcxyqmMzI8lhqug2t98RorNGAoAOlb6k8j54+rK6loauAUlRCk+rqjgNYeoxEc6+EOS18TPlEj0FZuwsxZGPkQeg9sEmQnTQXRe11KCWzBdFgSOh743YSvGUVFYIu5Re3W98F5tlFXkWaTZfmcBinjNiOx9Qe4wPFLJELwyFLra3c3w6KECC9j+mCFj1SFFXVqAAuLW2645g2N798H7RtKykSNqsSBf/L44mYogrwLEsZNizC9iO2Of4YsWsPYYJ+YUIjKCJg5YODta3S2BZNJcEXLWu1/PHC/M0geI8ropOZNBKIwrJqjntYaepUG29r4WUZjqMxgFQ+mAkCQ9rD+uPXqpswVPmZneOGwEa77eY9May8xxUKp0p4SNaeLbp0wCggVKcjBjcZzxJUzvlEVPFFUxy+CUMAhAH9f890TlEurEvIRpsexvgqTNJDDHHIvMMZJBPmQBe/XsMD8lgpBKhvq1Ag3PXr22wSAjuKdgep3NiNMqCMMg0MU67228u+BpIjHMIWDmXVtcdsdBVgh05QlMiBQSxupvfbHAM7VIlYgsST54ICotjfUmfwu4RXiTiEVNWAaKjYO6t0kPZf74veRnhqEiijQB3sLgDSB2sPtisPhXXjLKRaExNFNVnmiU2+m/rv8Apizs2mlo9NTFCZHTdRa+pibAFu3v9+2JsrFpVjThr2JyeHXm0SWJkhbWm9v6bYLr6zQixtJy3JuCtyTc9PTA8QklrJJGAQkDWkTarbfzfr098ZXRK1bHGiOzX1SG/Tbbf2GFjowqsie00LRxtMq6JW3ff6h7/pg6NwTGY3LWNm3P7nHgBaExf6gIG3RRt0xzp0Y0Fza6tbR5WxtVBJs3FHHPCFPxZlUsDCNK5EL009vpYdj5g9MfMLF43ZHBDKSCPIjH2KniKzi9gRswtt6DHzL8UMqXKfiBmccahYpmE6AG9gwufbe+KcR8SbL7kUiOqVFJ2J88G1s6GdlgsqXPTod8AwnTKjeTXxsou+qwte9m774YRu4tT8ZsOYEY267g+mPVYKH1DUO29rYySRQCBGoB6LcnT6Y5E3F97eWOq5t1JBXRBpByUkDRoBIEFtH5dj5YEmk/C5MbFpibah1sO2O1XXxShlpIBA8hBazbE9d741+WiAYROXkIDLc6Vtbe3c4SNdys76m8GWPDM8FVHPHPYsFCfUAL3ue3T7HAjVJVrRQR8wKU1W3Fzg2tzgz0lNHyIlqYiQ03V3FrAE+VsKxGBJqAL6QC3n/3glvswHK9CEGhh5RUyMavVblaCO17DzwHEChuV0kKwudr7YcrnDRyRVI8NSrg88ksw2t06bdsJ3EjmSVyzFlLkkWvc2vggSe4pgBsS8vhZkFHnPDVFXVUHNqKWRlVmJAt9uuLTraMVNBLB4R4fDYbAjofXFS/A3iGlXLKvKJpT8ysnMjjv9SHYkD0PXFxsxUAAAIbi7euEkVYMJ3JIP6kfihWOelmghGll0OWY2B9R3x0ZI5a55pbuqgKqW8N/QY0mlFFlMtQQ8ggkLX7nzt6Ygeb8bTZlmEkOWnlU7stqj/8luoA7f3wkHUoAJapYmtYrjnCwOog/l/zfG1NGl3CIbNc3O5+w8sUpV8UpQVusV9QtQw0MyuSv32w8TjuXJ6alrcxr/mIdQGkDdlJ7EddsaHutdzWxkA7lsQJeKWA/Uvlv1x87fGgoePW021CliD+K9zv+mPoMZlSJD88siinaLnM97DSBe+PlXjLOxxDxXmGZL/pSSWj/wD0GwxRjFGSZDrcTQIzygKLnr18t8boA23UkdvPHOL69zYWP9MbxWW57gX64cYpZoUKjxAi/pgikoZqtpBGU8AuSx649mEccKqwLTHxFw91t5e+B7tbqQD1xlkjUIBVbfUeTwQQxmSN4pQLc2Rd/EewB6Y05Dy00eh9F5Gsig6gBbfGjVkksb00Yk0ThSYybhiOhOPYknopI2RyroxRiDqItvcfbCaMqsTapoIaYRmmkWdmj1OdyVPcEdiLfvgHmFE1JLpc/lU22wwGY6Vm3leWVSGFz1LA7jAkMBiHzJYRi9gW3ucapNbguB/TNly6b5WapZQdJHhDDb188cquo54V3Y3WEIoBO2/T2/5w5painYLVuVkqIWuKcxAxOLWJJJv5G2FyqiUWYu7pzJUQgRrsLsDb0xyt7mOlDUZfD3PKfIOK6arqnMcdivMFvDcW7jH05FWS1lCslKitzo9aylrgDscfHqJdhtcW29MSDKuMOIsipzT0eZzRRL9MexVfa+NyIWNiLQ6oiXxxnmtNkXC0nNqBzHUxKIj4ncj8o98VZkG1KsBi0ywnS5l63O5v3HTAPCc1ZxNnzzZnUtVfLRmSIVDXCuT2A9cL48zmpOKap6hABJKRJErG1+mx64mdCQUHfcrx5ACHPUaZ1XiiqWpZaWaqDtdNEhUD9B9scM7aOgoqZY6TVEYPw7HZGJud7HDafMYkyqR0YLYFAQbsCew9cRj5zMIIhR1tNzQNQ0yKfqIG5PfbA4rNa6h5qBO+4XxHx3m2c5XTZYH5FPCojYRMbSiwFyf7Yib0skaMzgKVIFr4ZGBUKCR1D6fAgF9O5vfHlWjPRxTMdQkcjW3U/wD1/fFoNaEgZeWzFSDqDbp1xulha53727Y7Rqqc2/i8Fht7Y9jiBLFms97qB5+WCJghYO3i6izXtvj0LYFWOm+9zgiSJmqAjXEzyWa9rXv6YfTcLCGkdzUgyJa5Isu5wDZVSuR7jU+ndyeI6imqp3oqoRSOraDbVE1wL77EY3aSNFVadZGeXsX3v2tj2slWRhSU0muEkEF4whBtv09sC07R0VbFI6rOqnUUJ2I8jjBsbhHRhEkNVSqk8tmEniurAkEGxB++NjCeQzSFi6vp38zv33wZMI43ZKUxTCrVPEyEMrH8oueu/X0wLUmTKszPzciT1ELfSrBgGFup74wbmnXc3p6OanijqqiPTTS6gpC6wpHUeV8DyGMRyxIrNIWFjcbra+DUXiHii8NFSTSwcxnSCFLIGPW3qccK/IOIeHtNRXZZV0yE2EkkZ0k++CCnzALeppBkjmMtPIyto1CKNdb/AH7DHaLKYainmKSMJVj1qrDr6e/XBcWdCviiUmGnMe2lR1HTHNq4qxVFZmRrpJfoPL13/rgOT3uaAvif/9CvOFsygynOopKostNJ4JbEggedxviacd8OR10Qz/LZEdNAaXT/AFxCa+KKWBqi0cbOobR0J9vPDrgDNawT1dEJ4/l2iuVnJK+VrWPUYkdTf3F7EtRgB9tujI1DUywyAozELuNXS+CIMyqWkR5p2bltqXe9m++GfFvDMuTTRVMTGagn8SvHGdKent5YjvzKJIwRfwzexIF/f0wwAMLEUSVNEw+Eg1bSuO//AMnf7+ePcygjpYoAkvMMoL6Da6dv3wt5ySKiAHXewJxrLKxRAxBC9LdcbxNzuQozYDwMbm52ONgto3Y21gi+/XHkcjLSzNGCBqAPp5Y7Uqxs4aQB9/oH5j5Y06nLvUHHicP4tYOoW9MMqziKtrKEU0vL5ZOrZdz64XVRW5ZbIdR8IJOkX88POH+FJs4phVNKsMJJUEi529MC/AAM/iHjOSyieZIONarJxmBy7LaERx06sjSXA1sDcg9z0xDBed/AmqZ1uFjIsPt54LqaimlcEFnhUN+OdV3JPUjz7dfvjWGsoqeGcfLK8oN4pNdtAtsRbf7YFF4ioTNbWYIo+URxKkgqkYFQV8IHnicfD7gAcQVseYZ8zpRSX5Md7PORuT6AfrgfhPKxxBX07ZkZZoWfQ7hgeYABZR5ADr/1j6IgpoaGkiSOkg1QeGMLYaB5g9tscz1rzAI6nPKcjynJaFIsvgFPHHZVJ636fc9r49z1KWvySvoqkLLE9O+pOpIt1t748kqmmkaEJqWwNwNr39fscDZxVwUGTVs0mmMrA5BIt+U/8+eEFzNCG9z5Ipn0VKMALX2viQpOjojyEyE3DAHf1B8v+v0jZ3lsDq8XUd8SCBAaeZGKx3P4QJvo6bk/5/zVk9wMfkTjUj/2jXjVBFcDVud/X98GcDo5r6loiWkEduVvaQWN7+g64V5i4KHRdka29rAnv++JT8OaOkPzNVV2O2lFLAah3tuN+3lv+gnWMwqJyASZZe1bWZXSRlooKRkYSxxqlwPS5tbby74JzX4TZDmlLz8qmekm5fhRbNG22xt2+2OWSI1BlnIaGBRaSzytGbrfYBtO/p9t+mJrR1L8qk5emUPCFUja4Hcj+2J+RU6MeVDDcobPvhrxHkStK9KamnVdRlpwWCj1HUYiJv8AmBuNt8fWwlrGhCpphAuNdvpHYgd/Y4gPxF+HFHmWVz5tk8Ajr47yNEgssq9T9++KEzA6MQ+CtiUUG/C+rfUNsFvFLSIkqsQGGsNpsR7HAi6oX3AVlO4I3GC6aQylOYCwDDxtcgfbDGi1nOW7nWSfHvcjc4kXCvEkeUxSU1SsrRsbgoL6TiPqhd+WCSbHwk2AOOYBMhVjoUDoBgHRXXi0YjsjBlm8szFeWDyyp/0/y39vPDrhfhxuKax4KZ4Y5FGuTmvpAHmPPCKWzXcADU9wPTG9JUy0VZHJDO0TAkFlNtv+MHWtTD+W59GZTQ5JleQRUTVKLb8NNAUTBhcEjve9+mNKzNaejXkZfRV9eGVnsXIs1/zE9uv7emK6p+N8wNZRUFelO6MACKNbSF+zsLb9dwOu+GzyfxUyLSPUPHVKNCQy3VWHVj3t+nliRlPmUKR4k0o+J1jjgWapcPJGXEbxlio7BiD2t/fEW+JPG1JLwrNQUul56h1RmV7hB1OFXPly2sPMovl5qQEionJPT+UDue2FXGdFSZ2orcs1ipkBlkRrKJAB1t523B74xVAYcuprH4nj3K/o41eYGQkIOpGHgpUYfS6jlgtJKtrdwRbDXhPhiszfL5Gp4kjpgrc6ofcsR+RR57YDrsnmymiklqoJUc7xqJLEA7DX+nQeWHs4LVcQiELcR5lKrxoA12JJfT9J9Ri0eAIarK+GdUkahKjVIuuNma3muk/94qR15tQkSLuSFFje5Jxd9LVJHw3S0NHSsWenMfOqUjChlFgpvud7j74zLpQs3ELYtCaOZp4BVFqioEiFnaP/AE73PS7A2FhthPlWevl/GOV5fW1kywSQExWYt4iTs4O+O/DUlV/CxTTRRSypKdUaaAALkncjY9BivuPbUPGV4QytFFE2m+ym17L6e22ARQx4xjvxUGfQjFJyyxzWmuG3Pl6euC4JijqrONZ3C3uT64r/ACrO6epjo5YwahngVnJG63v3tv3/AExKKTM5pQByVhe+mM/UCo/tthFEGO0RK0+KfAPyzvxBlELchyTVwqP9M/zD0PfyxWVNCk0JUCSSS+ypfp+n+Wx9TVDpWxPQTIHSSMFhbwsD2xRHEnBtRw1mE0hdv4bNdoZIvFY/yN5EYrx5CRR7kmTGAbkZgyuWdZNMmgxqCUa4a/oLb42XJ5lkRXZ49V7MwYdL/wC3DYxVgy9M0VG+XY2M0kdgo6Bhvvv5DBXC+bZTJWzpxLLJNGV/BLDwDzvbe52wVt3OCpdSJSOBoRl3AA3wXlNNJX5nT0tLpNU8lo1ZbqTY9f0xwqtE9XMypoFywF77YZcPZBXZsebQyqk6yLHGuqzEna48gN98ESANzNk0JKmXJaPh+CnfLZ24oSUiwuHEgO5Nj0F9hjKHKKnIal6WvziloJ6qMFY4zznD3BGofl64CzfhOuyLN4aJat5qirju0k0dgW3uA++1rG+3XHCHIKihiqc1nzzLIp8ul0iMuZGlbtpNiDft7YTrq43eiRJJmXENKtQaXOKFFqJEAafWX5hH0n/b32t/2rGdZesr/ixgSctisbdwem/br+uIrUzS5rUy1dTHZ76jp328ySbnGlNGZ6lXMccIkAUXAAFh137477YqCchuW/wxXZXHlVeiyQUsJnLoJJAuk99r79MQjjbPIc5zQtTzo8EMO5STwsfb74V1tHFUJEQ5lle6k20gHpb72vhXmTGGl5BhMTBttXX1wGPEOfK4b5Dw41NuFKJsx4sy6ARGUc9XZdh4V3JP6YvfMKKqlp2IrJbI/MWGnUHwnoLgDe2+K0+EGWtPnVbWmOQrHA0cbBQV1N2ue+LFyuuikoI3eGmgYnQUZ1BuLixA6G+2O+ob5fqZ9OBxs+ZvksQGYV2uUkafEZZjrZio27AWtipOMKDm8WUqQstW0sIHL3BuCRb38vbFr5cDPm9cYogxSRZOa3YmxAA0+X+eUI47hReIctUUVOZRCWdgSoJ17nb3PXA4m+UPKvxizKM7/gOWigMz0s6O1uZGC/qPTvv/AGxNcgzmkra61KslVVSKdTiGyJ6Xv188VAqtmWdmngRX5suoA9R6XO9sXLktNy0SjhBihZRLH8psy2+oM3rt9sHlAG/MDGSdeI6rc/gyejaetl5axANIwXxMPIde+O1Lm2T8RUDzxtG8UgCDnJs29++xN79PLFcfE/O6YUVPlMUQErkSv/tAvt9z+mE9FJW0OSxGkzSFad1BeldWs3mCbWB9sYq/EH3CLbIm/Fz08dXU05jEUUK8ukgVbLGvUsPO579sQ2NltYyIgYAEkX/zpixzm5zDh+opswnyuBIqdghdtcjsbkAfyjt3xWuunWQsIyR2GKF2JO/cOjo6jMMxFNrJmka9xbv3xOf/AAXPaWno6qlih/hrrpd0qNGkX3Mne/fbC3I6DL8v/iFXnjCkkMGqniaMvzi38pHT29cLKiSWKkeKrrZRCx1R0iO2i/aw74UTZ1KAKHUa8QZhltJPPDlWayvBbQI4XJXYWJJfp4r9OoOEMMtMiq1QUkuCyIwOhD/tA6t0x41FLVussVLyI5PD4l9Og29MC11svIjjN5lOpX7gHtbGqB0ILsx76nCrrpJEWJ9SKosUAt3wTlFG1WTUyljGh0rbcg+2BqHLp8wqryrIVsXc23tbt54ciZIXijVjFEqhdMI8TC3Unt64NyAKEUoJNnqH1LRyK2nlwqwG5HiDAeh+2+Itm88csyBC/hQBtTFt8OppY6fL2Ii5oDfUPpIPS5/4xGJGM07MBuxvbA4V3c7K2ql3/Cmsymn4Lkpvm1NXJKzSQg2dCRsR9h1GD5ZalmhWChSojkjujzHxj38VyfW3bFISzfJSQzUbyxzKgs4NirelsNH414hky8LJmcuoNYSKBr6W3a1+mFthLHkPMauQIOJll0c7pPNLVrR05Zhr/FQXIW25JPextbEM4l4oo6/OIxQxRVENJG6JNJduYW/MLAdD0xBZp5pm/GleQ3/Ob4MymmkqGqpVAdYIua6EkFxe1gR3uQcMGELsmLOYseIEe8I0snzEtfdI21CJJJAbBiet/PE/kzSn4eyl61VZWmkLMZ2uQ47ADtfzwkSkpqDLY46iNI4URXkRn0tILX1WOx/XtiD8SZ7LnNaCTaCIBUC3sbbaredsLC/daGzDGo9wTMq+bN80mq5jeSVy1r3tfEgyziHNcqp5MvorAlfFzbHS3YgW8u3niJw3MyAEDxDc9sO+IqYUefTQvqLaFLHTpGogHbzGKGUaEQrEgtP/0a2zWvzKuUfNVMksRI1DYDVbrthVpBa0jb+eDedraKKSVNDC7eEgKfcf5vjnVU5hKzR35TCwPUnCxrUcRe5Mq35GszarMccpoqO4Tmk3dt/ER2I2FvTAsVK5qY6mZkS/ha1nCjtt0vjrmMUoqFkkZ3ieQPO1t4zfe/nvv5b4awxo9NUNBCqxRDU2oqdiet+1v74iZuM9BQT3ENRDM7PG09Q5I1HStmHv9sLEoC05GuSSV7kBrdR5k7XxJZA9TKifMjxmx03B27m+57i/+DQjVTNDFSSuFexBbSqk9/2ItglehAK3E8nzmlWlmjtH1VRa1+xYYEZpkaSOCJbbyaka4UAdLnrh9LR64pNZiVNmVf8AcOnhHU+/njSKJAiLHE4LdGYDYjqLdBcffBBoJWRavqdUYRZSxJBIAsOnliQ/Dfh1OIOIXWohElPDEXfxW36C3640q6CNljIcLFfwxquqS3qfPHLKM8q+Eswlqcs1DTdZEmW6ut+m3T3wzlyQhe4rhTBj1J7m/wAGpahi1DmllG1qhbfuPLbCb/0Zz5WANVl+huhLMTf9P8ti3shzlc74doMxl0wmpiDaR0DHaw++CfmqQVnJRxJURbMmvdfcdBhAyuuo77atuU5T/BirjaM5pm9PDqIBjiUsx9ATiU0vw1yfIJFmWpmkdnUCORwNW42IHX74kma8ZcOZfI4rsygR4zcBG1N5WsN8RrMvihwpUQDmUVTU6CWjLxFQSD1B/fHF8j/8nBET9x/xVw7QcQ5dIlVTuzoLq0P13HW36YqviT4TZnl6NV5M38RpLBgij8UD27/bDHN/ijLVQucroZ42Y+GRpvpPoB672OF8HxI4rjp1lo4IFaJSJGWO+on8zL2thmPmsXl4NK75bJIUZWDKSCpFiDiwq6mp+J+G8snq8y5VdDpp2eQ3Qg3IJbzsOmIkWqMyziSszBpElqS0mpVtzH6bdsTnhaAcRZXPwhUyHLxEQ6yogfmSX2vttt3v2OG5D0YnGvYkKqcsrKCVIp4XRXUyQyuhAkQG2oX7HGtOyoxjkVqhStwoANji76mj4cnhbhmrmzCdoyqmrYD8NhbZT2HcgXGKo4m4cj4azaeikr0qYw2qOWNfynsbd+u2ODXCK1JtnFHLT8R1jCqEqiobmBLEDUbi6+R/6wnqqR8vzQyZZCdEqtrgm2Vwf5fL2w9+JtKi14ioIVQ63lbw8sjf+YfULg7HEYphNXRRSfOVCSqo2e4ZfLScRMKNmekoJAA9TVa6KpjEZY08kZIaM2DHf/6/TBE1MJYZSVle9iZE8XXob/8AGBajhySRj+LqmH4gJbVqO2x8t8aRR18FQaf+MmOMRgEKtyCT9J6bX3wQArRi2BB3DhTj5pikPKEgsxLXKsN9XXbp5+eNGhjZUvIQSxBSn3Ovzv8Ap0644GapgkWniAdVbRrWxR/LBscsdL8w1TURpEVB1AbA2297E22x24NC4BLTVFLNzVRIkjk1HmNp9wT1PXEQzevkq6mQl1036KLDr29MGZ7nkuZzkanZBtvsD9sC5Hlz5tnlJRDpJIA5Ck2XvsMU41ocmkuVrPFZ9A8BwwZX8OcvqasBBFCZSxuLLcnfFUVXEk9RlnEuZx1EiPXViRoqsdl67H2AxZPxMziPh/hCHLKNQvNURKoB2UD/AIxRqVckeRz0t05csqyXtdlNu3vgEXkSYxm4AD9zvl8K1Kl5I11tcCZySb/rfBaUssUUS6xUxHV+ETbT79gDgfI5g0XLI16WJK9AQfM4cfxOF6gw1TciL6VCi39f1xrkg0IKAEAwQ0MkEbVNHpgYHeMtf9++CcvjeSugkWMqxG667K3nc+WOwudYp4g3huXkFlG/W/ftgmgpjPTkySJZTdhsLHuAMLLa3GBdzK1VrYG1NEkaS6TToQRudyD/AMY04YimXiWagiGuSpp5IVeS6b9R99uuGXLkE6U8FHBBGF1CSQeOTboTiNtl1RmOecqkeomkCNYwAs1+gvb9Dgk3qY4rcszLMzipc4paTiKFZJowI1zCIlEkJGkc0djbbyvhB8U5TT5jRZfAEjpoYd0U6Va5Ok2GxOHuX0S5lky5fnNPHR1eXxGBZ9XMvv8ASy9wRv8AviK8W0VUKqkyw5UaurRCURJGcqnXb/b3F/PGodiG+MUd1LezmppK7NZqb+EJWyRqyuykCwO2588RGp4aSKU1EtPPHSUcJZY0f8SW7Cyg4m+d5RM1bUPBzIzOtzLGuzN+VWHkPP1wpr48wkoqeGVYKR0Fi7gBTY306Rve/T3wrJYJuUYOJVeP+f8Af4kZ4dyUz5rV/wATEtK8RtGHkBA1bhfFe+x/rhTnfCQypmdcwlOsa3bRcyE9EXbrbfEsky6IZg0mYVi09dKQ78wkJJv0IOwO22Hq5HmFVTH5qalqICdcTH6kYd9Q2xijWhNdlDfIiVZmfD0+S0NNW16hlqdJvG1iD5aPPvtgKrq6TMqKGCumjRSArEnxrtbod+2JfxhmSQ00dBqSqrIi2mAASEqwsdx0wqysZPmGVUuUZtlSwTEkxVUgLlSTff198bY7Mw4z0sqzM6MUNdJThzIo+lh3GLp+GfA75HTjOapkaoqIlMS23jUi5v64Eg+D9PDmcUiyieEtqMQl6L2seuAq/M67gPink1TT8iQF921DTcdvTDnYkUJLjxDkSSBOnxRyPMqqd86cGajiiEaRqT+GSdyR6+eK4zTKK6iyanqJcsmp4S2kzSJa5xdD1c3FWXyyxQTmhZVcAEFpNJ3Cj18/Tpgfj+SGo4eSiV10VKXEjp9LDop8sCuSq1GPhB6O5SGT1KwV661DI3hYHpbDzNo5pUVlpFaBhZG1Bmt6d8e1nA/EGUQxz1GXhopTpRkbUDtcHbHaLh/O5EVpaMUyqRaSeTTZT3t1wbkWGicStRUiLaepqaRSI+ZJHt+HIn0/fp54cUecVEgaOhy9Q7EK0jeh7YZZZwrHmFQFrq2SWAi7cnwEf/11Fu4vjjFw+sdfl8cyyrSVkkixkqELhbWFzbr1wBKtGcHXfiGTmrzTLm5/LVATdVcNIxPXbsNsIaXOK7L680eXTLl6wo0TTpu29gWJHqPtgut4cFJnclGsspLE6Vgs5A7XIODMuyOPm11BltP87UB1eoldtljG+gd7k/sMaOIE4hmIoRhlEWa1MtRBliTyZjURaJq2qJG1+qgbnr9RwzzGtzoZ1T1uX0710lLCaeeogW4J8gO4B74LyCjz2rTOpKmdI8yqIQkBt/8AGPTt5Y8grzkdLDkdfN/D4qRdcsiElpS3TSR19fbCzsCPVaJ8GXO1gDcavfEZzTIoaWOpzPmtLMSGtILhd+3kfXGYzFWRQwNzzfp8jI4CnszhmuS0/EfD4lq1QkKCpZdRFj53GOsPBcT0i0tVmddPTqulIw4QKO3TGYzAoisBcN82RLCmtmRjjrLqLIKnKs0oaWJZhKYZLrvIrADc+Y7HCbPcqgzN6KOMtTTTWTnIbkEblrbAk3/bGYzCsmnAEvwfLDybuEcW5ZW5bwrBmCZrM0qFFBVdJsR5g4leU8EZU1FDUZkrZjVPEC0tQSQb2NgO3TGYzBKig6Ely5nK9yJ5u3/gnEUFJlItBXowjjckimbuV9PTEkyPh+AUM9Y8ry1MyFS8o1KoI3AU7DrjMZgR+cedYgR3qRI59mEmaLwdSvHTRWfXVhNchAve1zZT69saZiKQZrRUIgl5ENnbVNqaUrb6iRvjMZheQAAV6jLPM/3h+a5rbgqarmpopZ66X5YNpC8pegIsN7A4l+Y5VSDJ46WqiWsVF0qZ1BsQvXGYzHYzYiG/KpFckojW5XSVETQ0VPNIwkgpYQpkN7XZiSTttbbEhTIstizOm5NMkT8jwyILMD1v69P3xmMwQ/KESeP8yIST/K51NBp5lRqMgq3Y8wWPTytg+kyOCXjupqaiSSZ1jJIY+Ek27duuMxmO9RvZIM//2Q=="}}]);