"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[32274],{7488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),a=n(67294),i=n(86010),l=n(36162),s="details_BAp3";function c(e){var t=Object.assign({},e);return a.createElement(l.PO,(0,r.Z)({},t,{className:(0,i.default)("alert alert--info",s,t.className)}))}},3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HSVn",i=n(39960),l=n(71217),s=n(21314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return L}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),s=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),m=n(51436),d=n(68949),h=n(72389),f=n(21314),p=n(74322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n,a,s=(0,h.Z)(),c=r.useState("unchecked"),g=c[0],v=c[1],b=(0,f.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(v("unchecked"),b.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,d.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&w(b.value)}),[b,s]),s?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:y(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(b.value)},className:(0,l.default)(i[g],i.checkButton)},r.createElement(u.G,{icon:(a=g,"correct"===a?m.f8k:"wrong"===a?m.nYk:m.sph)}))):r.createElement(p.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},w=(0,s.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(p.Z,null)})),N=n(83117),E=n(75552),S=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,N.Z)({model:t},e))):r.createElement(p.Z,null)})),V=n(3239),z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},x=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return z("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return z("use_current",t)}},"Nein (verwerfen)"))):null})),Z=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),_=n(78982),D=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},L=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),a=t.find(e.webKey),i=(0,h.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||D.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,P(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(V.Z,null),n.loggedIn&&r.createElement(x,e),n.loggedIn&&r.createElement(Z,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(w,e)):r.createElement(p.Z,null):r.createElement("div",null,"SSR")}))},61014:function(e,t,n){var r=n(72389),a=n(71217),i=n(67294),l=n(21314),s=n(74322),c=n(7488),o=n(86010),u=n(86720),m=n(92814),d=n(51436),h=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,a.Pi)((function(e){return i.createElement("span",{className:(0,o.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(m.G,{icon:d.nYk,onClick:e.onRemove}))})),p=(0,a.Pi)((function(e){var t=i.useState(""),n=t[0],r=t[1],a=i.useState(""),s=a[0],c=a[1],h=i.useState(""),p=h[0],g=h[1],y=(0,l.oR)("policyStore"),v=(0,l.oR)("userStore"),b=y.findPolicy(e.webKey);return b?i.createElement("div",{className:(0,o.default)(u.Z.configContainer)},i.createElement("div",{className:(0,o.default)(u.Z.showControl)},i.createElement(m.G,{icon:b.isConfigOpen?d.nYk:d.cNd,onClick:function(){b.showConfig(!b.isConfigOpen)}})),b.isConfigOpen&&i.createElement("div",{className:(0,o.default)(u.Z.config)},i.createElement("div",{className:(0,o.default)(u.Z.permissions)},Array.from(b.klasses).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"class")},color:"success"})})),Array.from(b.groups).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"group")},color:"danger"})})),Array.from(b.users).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,o.default)(u.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return r(e.target.value)},disabled:b.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},v.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(n,"class"),r("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:s,onChange:function(e){return c(e.target.value)},disabled:b.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(v.groups,y.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(s,"group"),c("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:p,onChange:function(e){return g(e.target.value)},disabled:b.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},v.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(p,"user"),g("")}},"Add")))):null})),g=(0,a.Pi)((function(e){var t,n,a=(0,l.oR)("policyStore"),m=(0,l.oR)("userStore"),d=(0,r.Z)();if((0,l.aV)(e.webKey),!d)return i.createElement("div",null,"SSR");var f=a.find(e.webKey);return f?i.createElement("div",{"data--web-key":e.webKey,className:(0,o.default)(u.Z.wrapper,"solution-wrapper")},f.show||null!=(t=m.current)&&t.admin?i.createElement(c.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(h,null),!f.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,o.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=m.current)?void 0:n.admin)&&i.createElement(p,{webKey:f.webKey}),e.children):i.createElement("div",{className:(0,o.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(h,null))):i.createElement(s.Z,null)}));t.Z=g},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",s=n(71217),c=n(92814),o=n(51436),u=(0,s.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:o.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",c=n(86010),o=n(71217),u=n(74322),m=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,o.Pi)((function(e){var t=r.useState(!1),o=t[0],f=t[1],p=r.useState(!1),g=p[0],y=p[1],v=r.useRef(null),b=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){m=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(y(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return m&&g&&b.loaded?r.createElement("div",{onFocus:function(){return!o&&f(!0)},className:(0,c.default)(a)},r.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&l,o?void 0:s),value:b.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&g&&b.setText(i)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(d,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return r},Vx:function(){return a},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&s()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(o){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},52589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),s=n(52084),c=n(61014),o=["components"],u={title:"Kombinierte Verfahren"},m="Kombinierte Verfahren [^1]",d={unversionedId:"Kryptologie/Asymmetrisch/kombiniert",id:"version-24i/Kryptologie/Asymmetrisch/kombiniert",title:"Kombinierte Verfahren",description:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/kombiniert",permalink:"/24i/Kryptologie/Asymmetrisch/kombiniert",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",tags:[],version:"24i",sidebarPosition:5,frontMatter:{title:"Kombinierte Verfahren"},sidebar:"version-24i/sidebar",previous:{title:"Asymm. Verschl\xfcsselung",permalink:"/24i/Kryptologie/Asymmetrisch/asymm-encryption"},next:{title:"Hashfunktionen",permalink:"/24i/category/hashfunktionen"}},h={},f=[{value:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung",level:2},{value:"Beide Verfahren kombinieren",id:"beide-verfahren-kombinieren",level:2},{value:"Symmetrische Verfahren zur Verschl\xfcsselung der Daten",id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten",level:2},{value:"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung",id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung",level:2},{value:"Zus\xe4tzlicher Vorteil",id:"zus\xe4tzlicher-vorteil",level:2}],p={toc:f};function g(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kombinierte-verfahren-"},"Kombinierte Verfahren ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung"},"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung"),(0,i.kt)("p",null,"Wir haben in der letzten Aufgabe gesehen, dass asymmetrische Verschl\xfcsselung auch Nachteile hat. Wir wollen die Vor- und Nachteile einander gegen\xfcberstellen."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Symmetrische Verschl\xfcsselung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Asymmetrische Verschl\xfcsselung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 sehr schnell"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 ~ 1'000x langsamer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 1 Nachricht f\xfcr alle"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 1 Nachricht pro Person")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 geheimen Schl\xfcssel austauschen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 Public Key ist \xf6ffentlich")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2192 nur 1 gemeinsamer Schl\xfcssel"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2192 1 Schl\xfcsselpaar pro Person")))),(0,i.kt)("h2",{id:"beide-verfahren-kombinieren"},"Beide Verfahren kombinieren"),(0,i.kt)("p",null,"In kryptographischen Verfahren, die heutzutage eingesetzt werden, ist das Ziel, die Vorteile beider Verfahren zu nutzen und die Nachteile zu eliminieren. Daher werden zur Verschl\xfcsselung von Daten beide Verfahren eingesetzt:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(10814).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,i.kt)("h2",{id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten"},"Symmetrische Verfahren zur Verschl\xfcsselung der Daten"),(0,i.kt)("p",null,"Da asymmetrische Verfahren ca. 1'000x langsamer sind als symmetrische Verfahren, werden zur Verschl\xfcsselung der Daten symmetrische Verfahren eingesetzt. Denn kryptographische Verfahren werden nicht nur zur Verschl\xfcsselung kurzer Nachrichten (wie z.B. Textnachrichten) eingesetzt, h\xe4ufig m\xfcssen auch grosse Datenmengen (z.B. hochaufl\xf6sende Bilder, Tondokumente, Videos, ...) verschl\xfcsselt werden, folglich spielt die Geschwindigkeit eine zentrale Rolle."),(0,i.kt)("p",null,"Zudem ist bei symmetrischer Verschl\xfcsselung praktisch, dass die Daten f\xfcr s\xe4mtliche Empf\xe4nger gleich verschl\xfcsselt sind und somit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nicht mehrmals verschl\xfcsselt werden m\xfcssen (Zeitbedarf) und"),(0,i.kt)("li",{parentName:"ul"},"in derselben Nachricht an alle Empf\xe4nger verschickt werden k\xf6nnen, ohne dass die Nachricht unn\xf6tig ein Mehrfaches ihrer urspr\xfcnglichen L\xe4nge erreicht (Platzbedarf).")),(0,i.kt)("h2",{id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung"},"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung"),(0,i.kt)("p",null,"Asymmetrische Verfahren sind langsamer, aber zur ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung des symmetrischen Schl\xfcssels")," perfekt geeignet, da dieser sehr kurz ist und im Vergleich zu den Daten Geschwindigkeit keine Rolle spielt."),(0,i.kt)("p",null,"Zudem ist auch der verschl\xfcsselte symmetrische Schl\xfcssel sehr kurz, so dass die Nachricht nur unwesentlich l\xe4nger wird, wenn diese f\xfcr mehrere Personen verfasst wird."),(0,i.kt)("h2",{id:"zus\xe4tzlicher-vorteil"},"Zus\xe4tzlicher Vorteil"),(0,i.kt)("p",null,"Der symmetrische Schl\xfcssel kann so vom Computer gew\xe4hlt werden. Dies hat zwei Vorteile:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Schl\xfcssel ist wirklich zuf\xe4llig und gleichverteilt im gesamten Schl\xfcsselraum (ein Passwort, das von einer Person gew\xe4hlt wird, schafft dies nicht)."),(0,i.kt)("li",{parentName:"ol"},"Der Schl\xfcssel kann f\xfcr jede Nachricht neu gew\xe4hlt werden. Somit erh\xe4lt jede Nachricht einen eigenen Schl\xfcssel.")),(0,i.kt)("p",null,"Man spricht daher von einem ",(0,i.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel")," (engl. session key) f\xfcr die symmetrische Verschl\xfcsselung. Die folgende \xdcbersicht stellt prinzipiell dasselbe dar wie die Abbildung oben, allerdings mit einem anderem Fokus."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(5660).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"auch-symmetrische-verfahren-sind-sicher"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Auch symmetrische Verfahren sind sicher!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Asymmetrische Verfahren sind also nicht besser als symmetrische! Sie erf\xfcllen einen anderen Zweck und werden gleichzeitig mit symmetrischen Verfahren eingesetzt. Symmetrische Verfahren sind also nicht unsicher, einzig die Erstellung des Schl\xfcssels und der Schl\xfcsselaustausch sind ein Problem."))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"kombinierte-entschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kombinierte Entschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Stellen Sie dar, wie die Umkehrung \u2013 also die Entschl\xfcsselung \u2013 funktioniert, wenn symmetrische und asymmetrische Verfahren kombiniert verwendet werden."),(0,i.kt)(s.Z,{type:"text",webKey:"4a33b602-eb5f-427d-ba5e-725756b5f112",mdxType:"Answer"}),(0,i.kt)(c.Z,{webKey:"1f2cf2b5-9a49-48e7-9b45-6bca55560abf",mdxType:"Solution"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Symmetrische und asymmetrische Entschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(50313).Z,alt:"Symmetrische und asymmetrische Entschl\xfcsselung kombiniert",mdxType:"Image"}))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559732"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",hint:"hint_hU43",solution:"solution_JCku",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},50313:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-decryption-binary-cee23aa478157464604c7652a1c6b61f.svg"},5660:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-binary-ba7dbdb6e184e37b434e13bebe3a3687.svg"},10814:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-ca8b9f6a8855055369b66ca053a9e97c.svg"}}]);