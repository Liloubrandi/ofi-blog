"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[36576],{52084:function(e,t,a){a.d(t,{x:function(){return L},Z:function(){return O}});var n=a(67294),r=a(3435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=a(86010),o=a(71217),d=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,a=t,r=void 0;if(d.test(t)){var i=function(e){if(d.test(e))return e.match(d).groups.klass}(t);r=l[i],a=""+t.replace(d,"")}return n.createElement("option",{value:t,className:r},a)},c=a(92814),s=a(51436),m=a(68949),g=a(72389),p=a(21314),f=a(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,a,r,o=(0,g.Z)(),d=n.useState("unchecked"),h=d[0],N=d[1],b=(0,p.oR)("documentStore").find(e.webKey),v=function(t){!e.isLegacy&&b.loaded&&(N("unchecked"),b.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};N(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&y(b.value)}))}),[b]),n.useEffect((function(){b.loaded&&y(b.value)}),[b,o]),o?b.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:k(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(u,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:e.isLegacy?null==(a=b.legacyData)?void 0:a.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return y(b.value)},className:(0,i.default)(l[h],l.checkButton)},n.createElement(c.G,{icon:(r=h,"correct"===r?s.f8k:"wrong"===r?s.nYk:s.sph)}))):n.createElement(f.Z,null):n.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return l[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,a=(0,p.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,l){return e.select?n.createElement("select",{key:l,onChange:function(e){return r(e.target.value,l)},value:t,className:v(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(u,{value:e,key:t})}))):n.createElement("input",{key:l,type:"text",onChange:function(e){return r(e.target.value,l)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(f.Z,null)})),E=a(83117),w=a(75552),C=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,E.Z)({model:t},e))):n.createElement(f.Z,null)})),x=a(47271),_=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(C,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return _("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return _("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=a(46858),I=a(78982),B=a(97762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},R=function(e){if(!e.id)return function(){};var t=function(){try{return(0,Z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,I.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,I.cl)(e.id,t)}}}:function(){}},O=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||B.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,R(e)),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(x.Z,null),a.loggedIn&&n.createElement(S,e),a.loggedIn&&n.createElement(D,{webKey:e.webKey}),"text"===e.type&&n.createElement(C,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(y,e)):n.createElement(f.Z,null):n.createElement("div",null,"SSR")}))},47271:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r="noLoginAlert_HRfh",l=a(39960),i=a(71217),o=a(21314),d=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))}))},7564:function(e,t,a){var n=a(86010),r=a(67294),l=a(97566),i=/[ENIR]/gi,o=/[BCDFGHJKLMOPQUVWXYZ]/gi,d=[{find:/\xe4/g,replace:"ae"},{find:/\xf6/g,replace:"oe"},{find:/\xfc/g,replace:"ue"},{find:/\xc4/g,replace:"Ae"},{find:/\xd6/g,replace:"Oe"},{find:/\xdc/g,replace:"Ue"},{find:/\s+/g,replace:" "},{find:/^\s/g,replace:""},{find:/\s$/g,replace:""}];t.Z=function(){var e=r.useState(""),t=e[0],a=e[1],u=r.useState("frequent"),c=u[0],s=u[1],m=r.useState(""),g=m[0],p=m[1];return r.useEffect((function(){if(0!==t.length){var e=function(e){return d.reduce((function(e,t){return e.replace(t.find,t.replace)}),e)}(t);switch(console.log(e,e.replace(i,""),e.replace(o,"")),c){case"frequent":p(e.replace(i,""));break;case"rare":p(e.replace(o,""))}}}),[t,c]),r.createElement("div",{className:(0,n.default)("hero","shadow--lw",l.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Buchstaben Redundanz"),r.createElement("h4",null,"Originaltext"),r.createElement("textarea",{className:(0,n.default)(l.Z.input),value:t,onChange:function(e){a(e.target.value)},rows:5,placeholder:"Originaltext"}),r.createElement("div",{className:(0,n.default)("buttongroup",l.Z.modes)},r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","frequent"===c&&"button--active"),title:"H\xe4ufige: "+i.source.slice(1,-1).split("").join(", "),onClick:function(){return s("frequent")}},"H\xe4ufige Entfernen"),r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","rare"===c&&"button--active"),onClick:function(){return s("rare")},title:"Seltene: "+o.source.slice(1,-1).split("").join(", ")},"Seltene entfernen")),r.createElement("h4",null,"Ausgabe"),r.createElement("p",null,"Ohne: ",("frequent"===c?i:o).source.slice(1,-1).split("").join(", ")),r.createElement("textarea",{className:(0,n.default)(l.Z.input),value:g,onChange:function(){},rows:5,placeholder:"Ausgabe"})))}},74322:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l="loader_FEpR",i="badge_oWqf",o=a(71217),d=a(92814),u=a(51436),c=(0,o.Pi)((function(){return n.createElement("div",{className:(0,r.default)(l)},n.createElement(d.G,{icon:u.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",o="disableToolbar_bRdP",d=a(86010),u=a(71217),c=a(74322),s=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=n.useState(!1),u=t[0],p=t[1],f=n.useState(!1),h=f[0],k=f[1],N=n.useRef(null),b=e.model,v=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),s)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){s=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}a.register("modules/imageCompress",n),e()}))}((function(){t&&(k(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return s&&h&&b.loaded?n.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,d.default)(r)},n.createElement(s,{ref:N,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,d.default)(l,e.monospace&&i,u?void 0:o),value:b.text||"",onChange:function(t,a,n,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&b.canUpdate&&h&&b.setText(l)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(c.Z,null)}))},46858:function(e,t,a){a.d(t,{Vj:function(){return n},Vx:function(){return r},ly:function(){return l}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{cl:function(){return i},rV:function(){return l}});var n=864e5,r=2592e6,l=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?a:i}return a}}var d=localStorage.getItem(e);return d?JSON.parse(d):a}catch(u){return a}},i=function(e,t){try{if(t){var a=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=l(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},31433:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(84384),o=a(7564),d=a(52084),u=["components"],c={title:"2. Informationsgehalt",label:"2. Informationsgehalt"},s="2. Informationsgehalt [^1]",m={unversionedId:"Codes-and-Data/Compression/redundancy",id:"Codes-and-Data/Compression/redundancy",title:"2. Informationsgehalt",description:"Buchstabenh\xe4ufigkeit",source:"@site/docs/Codes-and-Data/03-Compression/02-redundancy.md",sourceDirName:"Codes-and-Data/03-Compression",slug:"/Codes-and-Data/Compression/redundancy",permalink:"/Codes-and-Data/Compression/redundancy",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/03-Compression/02-redundancy.md",tags:[],version:"current",lastUpdatedAt:1646394747,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:2,frontMatter:{title:"2. Informationsgehalt",label:"2. Informationsgehalt"},sidebar:"sidebar",previous:{title:"1. Huffman-Codierung",permalink:"/Codes-and-Data/Compression/huffman"},next:{title:"Kompression",permalink:"/Codes-and-Data/Compression-v24/"}},g={},p=[{value:"Buchstabenh\xe4ufigkeit",id:"buchstabenh\xe4ufigkeit",level:2},{value:"Informationsgehalt",id:"informationsgehalt",level:2}],f={toc:p};function h(e){var t=e.components,c=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-informationsgehalt-"},"2. Informationsgehalt ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("h2",{id:"buchstabenh\xe4ufigkeit"},"Buchstabenh\xe4ufigkeit"),(0,l.kt)("p",null,"Die Buchstabenh\xe4ufigkeit gibt an, wie oft ein Buchstabe in einem Text vorkommen. Die H\xe4ufigkeit der einzelnen Buchstaben ist je nach Sprache unterschiedlich. Das folgende Diagramm zeigt die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten",(0,l.kt)("sup",{parentName:"p",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(i.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(43365).Z,mdxType:"Image"})),(0,l.kt)("h2",{id:"informationsgehalt"},"Informationsgehalt"),(0,l.kt)("p",null,"Wir f\xfchren ein Experiment durch. Aus einem deutschen Text werden etwa 40% der Buchstaben entfernt. Zuerst werden die vier h\xe4ufigsten Buchstaben ",(0,l.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"R")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"I")," entfernt. Danach werden diese Buchstaben sowie ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," beibehalten und die restlichen entfernt. Obschon etwa die gleiche Menge Buchstaben entfernt worden sind, bleibt der Text nach dem Entfernen der h\xe4ufigen Buchstaben verst\xe4ndlicher."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Notizen")),(0,l.kt)(o.Z,{mdxType:"Redundancy"}),(0,l.kt)("p",null,"Offenbar tragen die h\xe4ufigen Buchstaben weniger zum Inhalt des Textes bei. Sie haben einen kleineren ",(0,l.kt)("strong",{parentName:"p"},"Informationsgehalt"),"."),(0,l.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"take-home-message"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(d.Z,{type:"text",webKey:"18b21da1-1e49-4d1a-a7ea-1c930205abf1",mdxType:"Answer"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u2b50\ufe0f Huffman Codierung f\xfcr die deutsche Sprache"),(0,l.kt)("p",null,"Die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten kann der folgenden Tabelle entnommen werden:"),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"E"),(0,l.kt)("td",{parentName:"tr",align:"left"},"15.99%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"A"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6.34%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"O"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"W"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.40%"),(0,l.kt)("td",{parentName:"tr",align:null},"J"),(0,l.kt)("td",{parentName:"tr",align:null},"0.27 %")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9.59%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"D"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4.92%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"M"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.22%"),(0,l.kt)("td",{parentName:"tr",align:null},"\xd6"),(0,l.kt)("td",{parentName:"tr",align:null},"0.24 %")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"R"),(0,l.kt)("td",{parentName:"tr",align:"left"},"7.71%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"H"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4.11%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"C"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.71%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"P"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.06%"),(0,l.kt)("td",{parentName:"tr",align:null},"\xdf"),(0,l.kt)("td",{parentName:"tr",align:null},"0.15 %")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"I"),(0,l.kt)("td",{parentName:"tr",align:"left"},"7.60%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"U"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"B"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.21%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"V"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.94%"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"0.13 %")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6.43%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"L"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.80%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.63%"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"0.07 %")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"S"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6.41%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"G"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3.02%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"K"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.50%"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.54%"),(0,l.kt)("td",{parentName:"tr",align:null},"Q"),(0,l.kt)("td",{parentName:"tr",align:null},"0.04 %"))))),(0,l.kt)("p",null,"Daraus ergibt sich"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(i.Z,{bib:void 0,caption:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",options:{},isInline:!1,src:a(88616).Z,alt:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",mdxType:"Image"})),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"(leer)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100"),(0,l.kt)("td",{parentName:"tr",align:"right"},"O"),(0,l.kt)("td",{parentName:"tr",align:"left"},"01001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"A"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0101"),(0,l.kt)("td",{parentName:"tr",align:"right"},"P"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1010111")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"B"),(0,l.kt)("td",{parentName:"tr",align:"left"},"111000"),(0,l.kt)("td",{parentName:"tr",align:"right"},"Q"),(0,l.kt)("td",{parentName:"tr",align:"left"},"11100110111")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"C"),(0,l.kt)("td",{parentName:"tr",align:"left"},"01111"),(0,l.kt)("td",{parentName:"tr",align:"right"},"R"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1111")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"D"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0110"),(0,l.kt)("td",{parentName:"tr",align:"right"},"S"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"E"),(0,l.kt)("td",{parentName:"tr",align:"left"},"110"),(0,l.kt)("td",{parentName:"tr",align:"right"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"000110"),(0,l.kt)("td",{parentName:"tr",align:"right"},"U"),(0,l.kt)("td",{parentName:"tr",align:"left"},"11101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"G"),(0,l.kt)("td",{parentName:"tr",align:"left"},"01000"),(0,l.kt)("td",{parentName:"tr",align:"right"},"V"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1110010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"H"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10100"),(0,l.kt)("td",{parentName:"tr",align:"right"},"W"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1010100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"I"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0000"),(0,l.kt)("td",{parentName:"tr",align:"right"},"X"),(0,l.kt)("td",{parentName:"tr",align:"left"},"11100110110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"J"),(0,l.kt)("td",{parentName:"tr",align:"left"},"111001100"),(0,l.kt)("td",{parentName:"tr",align:"right"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1110011010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"K"),(0,l.kt)("td",{parentName:"tr",align:"left"},"000111"),(0,l.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"L"),(0,l.kt)("td",{parentName:"tr",align:"left"},"000100"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10101101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"M"),(0,l.kt)("td",{parentName:"tr",align:"left"},"01110"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\xd6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"111001110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10101100")))))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},(0,l.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=195436"},"S. Rothe, T. Jampen, R. Meyer"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2"},(0,l.kt)("a",{parentName:"li",href:"http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/german-letter-frequencies/"},"Practical Cryptography: German Letter Frequencies"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},97566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},88616:function(e,t,a){t.Z=a.p+"assets/images/huffman-german-e146d68a9775a0c649a0f99a6e760185.svg"},43365:function(e,t,a){t.Z=a.p+"assets/images/letter-frequency-de-589f8e0aa0703df3d1fd96ead993c13b.svg"}}]);