"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[71064],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return Z}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},s=n(92814),d=n(51436),f=n(68949),p=n(72389),m=n(21314),g=n(74322),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),c=a.useState("unchecked"),v=c[0],y=c[1],b=(0,m.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&w(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:h(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return w(b.value)},className:(0,l.default)(i[v],i.checkButton)},a.createElement(s.G,{icon:(r=v,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),N=n(87462),E=n(75552),S=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),x=n(3239),z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return z("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return z("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),L=n(78982),K=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},V=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},Z=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,m.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,V(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(_,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(y,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_2rVr",l=n(71217),o=n(92814),c=n(51436),u=(0,l.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge")},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",c=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},m=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],m=t[1],g=a.useState(!1),v=g[0],h=g[1],y=a.useRef(null),b=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&v&&b.loaded?a.createElement("div",{onFocus:function(){return!u&&m(!0)},className:(0,c.default)(r)},a.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&v&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o},RN:function(){return c}});var a=n(68949),r=n(67294),i=n(52182),l=function(e){return r.useContext(i.Nx)[e]},o=function(e,t,n,l,o,c){var u=r.useState(!1),s=u[0],d=u[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,o,c).finally((function(){d(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){s&&a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,c,!0)}))}),[s]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){s&&!a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,c,!0)}))}),[s])},c=function(e){var t=r.useState(!1),n=t[0],l=t[1];r.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(t,a){n&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,a){n&&!t&&a&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},34786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(52084),o=["components"],c={title:"WhatsApp-Verschl\xfcsselung"},u="WhatsApp-Verschl\xfcsselung [^1]",s={unversionedId:"Kryptologie/Alltag/whatsapp",id:"version-24i/Kryptologie/Alltag/whatsapp",isDocsHomePage:!1,title:"WhatsApp-Verschl\xfcsselung",description:"Gem\xe4ss WhatsApp sind s\xe4mtliche WhatsApp-Nachrichten Ende-zu-Ende verschl\xfcsselt.",source:"@site/versioned_docs/version-24i/06-Kryptologie/07-Alltag/03-whatsapp.md",sourceDirName:"06-Kryptologie/07-Alltag",slug:"/Kryptologie/Alltag/whatsapp",permalink:"/24i/Kryptologie/Alltag/whatsapp",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/07-Alltag/03-whatsapp.md",tags:[],version:"24i",sidebarPosition:3,frontMatter:{title:"WhatsApp-Verschl\xfcsselung"},sidebar:"version-24i/sidebar",previous:{title:"Browserzertifikate",permalink:"/24i/Kryptologie/Alltag/browser-zertifikate"}},d=[],f={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"whatsapp-verschl\xfcsselung-"},"WhatsApp-Verschl\xfcsselung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Gem\xe4ss WhatsApp sind s\xe4mtliche WhatsApp-Nachrichten Ende-zu-Ende verschl\xfcsselt.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"whatsapp-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"WhatsApp-Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Was meint WhatsApp mit \xabEnde-zu-Ende-Verschl\xfcsselung\xbb?"),(0,i.kt)("li",{parentName:"ol"},"Diskutieren Sie zu zweit, wie die WhatsApp-Verschl\xfcsselung funktionieren k\xf6nnte.")),(0,i.kt)(l.Z,{type:"text",webKey:"be104161-251e-43e3-841d-23861b4c79de",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"sicherheitsnummer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Sicherheitsnummer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"WhatsApp bietet die M\xf6glichkeit, eine Sicherheitsnummer anzuzeigen und zu \xfcberpr\xfcfen."),(0,i.kt)("p",{parentName:"div"},"Ende-zu-Ende-Verschl\xfcsselung eines Chats verifizieren:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\xd6ffnen Sie Ihren gemeinsamen Chat."),(0,i.kt)("li",{parentName:"ol"},"Tippen Sie auf den Namen des Kontakts, um den Kontaktinfo-Bildschirm zu \xf6ffnen."),(0,i.kt)("li",{parentName:"ol"},"Tippen Sie auf Verschl\xfcsselung, um den QR-Code und die 60-stellige Sicherheitsnummer anzuzeigen.")),(0,i.kt)("p",{parentName:"div"},"Sie k\xf6nnen den angezeigten QR-Code gegenseitig scannen, um nicht die 60-stellige Zahl kontrollieren zu m\xfcssen."),(0,i.kt)("p",{parentName:"div"},"Probieren Sie es zu zweit aus und diskutieren Sie, wie diese Nummer zustande kommt und was sie bedeutet."),(0,i.kt)(l.Z,{type:"text",webKey:"71db4003-b108-4c34-bedd-ba6c182805cd",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=549311"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://faq.whatsapp.com/general/security-and-privacy/end-to-end-encryption/?lang=de"},"whatsapp.com"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);