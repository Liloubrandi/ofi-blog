"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[94799],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),c=n(21314),s=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return T}});var a=n(67294),r=n(28900),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),c=n(71217),s=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),f=n(68949),m=n(72389),h=n(21314),g=n(74322),p=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},b=(0,c.Pi)((function(e){var t,n,r,c=(0,m.Z)(),s=a.useState("unchecked"),p=s[0],b=s[1],y=(0,h.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&y.loaded&&(b("unchecked"),y.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return b(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};b(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return y.loaded}),(function(e){e&&w(y.value)}))}),[y]),a.useEffect((function(){y.loaded&&w(y.value)}),[y,c]),c?y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:v(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return w(y.value)},className:(0,l.default)(i[p],i.checkButton)},a.createElement(u.G,{icon:(r=p,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,c.Pi)((function(e){var t,n=(0,h.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),S=n(83117),E=n(75552),N=(0,c.Pi)((function(e){var t=(0,h.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,S.Z)({model:t},e))):a.createElement(g.Z,null)})),z=n(3239),Z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},x=(0,c.Pi)((function(e){var t=(0,h.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(N,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(b,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return Z("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return Z("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,h.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(46858),L=n(78982),A=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},M=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},T=(0,c.Pi)((function(e){var t=(0,h.oR)("documentStore"),n=(0,h.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return(0,h.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||A.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,M(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(z.Z,null),n.loggedIn&&a.createElement(x,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(N,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},61014:function(e,t,n){var a=n(72389),r=n(71217),i=n(67294),l=n(21314),c=n(74322),s=n(31173),o=n(86010),u=n(86720),d=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,r.Pi)((function(e){var t=(0,l.oR)("policyStore"),n=(0,a.Z)();if((0,l.aV)(e.webKey),!n)return i.createElement("div",null,"SSR");var r=t.find(e.webKey);return r?i.createElement("div",{"data--web-key":e.webKey,className:(0,o.default)(u.Z.wrapper,"solution-wrapper")},r.show?i.createElement(s.Z,{summary:i.createElement("summary",null,"L\xf6sung ",i.createElement(d,null)),className:(0,o.default)("alert alert--success",u.Z.solution)},e.children):i.createElement("div",{className:(0,o.default)("alert",u.Z.disabled)},"L\xf6sung (nicht freigeschaltet) ",i.createElement(d,null))):i.createElement(c.Z,null)}));t.Z=f},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_2rVr",l="badge_2s0E",c=n(71217),s=n(92814),o=n(51436),u=(0,c.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",c="disableToolbar_gntN",s=n(86010),o=n(71217),u=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},h=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],h=t[1],g=a.useState(!1),p=g[0],v=g[1],b=a.useRef(null),y=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&p&&y.loaded?a.createElement("div",{onFocus:function(){return!o&&h(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(i,e.monospace&&l,o?void 0:c),value:y.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&p&&y.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(o){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},31591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),c=n(52084),s=n(61014),o=["components"],u={title:"Zertifizierungsstellen"},d="Zertifizierungsstellen [^1]",f={unversionedId:"Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",id:"Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",title:"Zertifizierungsstellen",description:"\xdcbertragung \xf6ffentlicher Schl\xfcssel",source:"@site/docs/Kryptologie/06-Digitale-Signaturen/04-Zertifizierungsstellen.md",sourceDirName:"Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",permalink:"/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/06-Digitale-Signaturen/04-Zertifizierungsstellen.md",tags:[],version:"current",lastUpdatedAt:1638661206,formattedLastUpdatedAt:"12/4/2021",sidebarPosition:4,frontMatter:{title:"Zertifizierungsstellen"},sidebar:"sidebar",previous:{title:"Verfahren kombinieren",permalink:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"},next:{title:"Zusammenfassung",permalink:"/Kryptologie/Digitale-Signaturen/the-big-picture"}},m=[{value:"\xdcbertragung \xf6ffentlicher Schl\xfcssel",id:"\xfcbertragung-\xf6ffentlicher-schl\xfcssel",children:[],level:2},{value:"Schutz gegen Man-in-the-Middle-Attacken",id:"schutz-gegen-man-in-the-middle-attacken",children:[],level:2},{value:"Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?",id:"wieso-kann-sich-mallory-nicht-zwischen-trent-und-bob-einschleichen",children:[],level:2}],h={toc:m};function g(e){var t=e.components,u=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zertifizierungsstellen-"},"Zertifizierungsstellen ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"\xfcbertragung-\xf6ffentlicher-schl\xfcssel"},"\xdcbertragung \xf6ffentlicher Schl\xfcssel"),(0,i.kt)("p",null,"\xd6ffentliche Schl\xfcssel enthalten keine geheime Information, k\xf6nnen also problemlos \xfcber einen offenen Kanal \xfcbertragen werden. Oder?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Angriff auf den \xf6ffentlichen Schl\xfcssel",options:{},isInline:!1,src:n(80119).Z,alt:"Angriff auf den \xf6ffentlichen Schl\xfcssel",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-angriff-auf-den-\xf6ffentlichen-schl\xfcssel"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Angriff auf den \xf6ffentlichen Schl\xfcssel")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alice schickt ihren \xf6ffentlichen Schl\xfcssel (also ihr Vorh\xe4ngeschloss) per Post an Bob. \xdcberlege dir, was der b\xf6sartige Mallory anstellen k\xf6nnte, um Alice und Bob zu \xfcberlisten."),(0,i.kt)(c.Z,{type:"text",webKey:"5b4c5a94-b1fc-4dd6-9c99-65c907b258d4",mdxType:"Answer"}),(0,i.kt)(s.Z,{webKey:"c6892ee0-018c-498f-9bbd-185f0e3038d2",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Da der \xf6ffentliche Schl\xfcssel nur aus Zahlen besteht, ist es f\xfcr Bob nicht erkennbar, ob er den richtigen Schl\xfcssel erhalten hat."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Man-in-the-middle-Attacke",options:{},isInline:!1,src:n(14980).Z,alt:"Man-in-the-middle-Attacke",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"schutz-gegen-man-in-the-middle-attacken"},"Schutz gegen Man-in-the-Middle-Attacken"),(0,i.kt)("p",null,"Wie k\xf6nnen wir uns vor Man-in-the-Middle-Attacken sch\xfctzen? Kann uns Trent helfen?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=848484",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Die Rolle von Trent",options:{},isInline:!1,src:n(84140).Z,alt:"Die Rolle von Trent",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-zertifizierungsstellen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Zertifizierungsstellen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnte Trent daf\xfcr sorgen, dass die \xf6ffentlichen Schl\xfcssel besser \xfcberpr\xfcfbar sind?"),(0,i.kt)(c.Z,{type:"text",webKey:"a2ef63f4-8f01-4e78-8135-1eb43e4a09ed",mdxType:"Answer"}),(0,i.kt)(s.Z,{webKey:"c6892ee0-018c-498f-9bbd-185f0e3038d2",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Trent ist bekannt und akzeptiert als Zertifizierungsstelle, alle kennen seinen \xf6ffentlichen Schl\xfcssel. Wenn Trent die Kunden gut \xfcberpr\xfcft und deren ",(0,i.kt)("strong",{parentName:"p"},"\xf6ffentliche Schl\xfcssel")," (\u26a0\ufe0f die privaten Schl\xfcssel der Kunden kennt auch Trent nicht!) signiert, kann Bob sicher sein, den richtigen Schl\xfcssel zu verwenden. Er akzeptiert folglich keine unsignierten Schl\xfcssel mehr."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=848484",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Schutz vor Man-in-the-Middle-Attacken",options:{},isInline:!1,src:n(50998).Z,alt:"Schutz vor Man-in-the-Middle-Attacken",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"wieso-kann-sich-mallory-nicht-zwischen-trent-und-bob-einschleichen"},"Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?"),(0,i.kt)("p",null,"Da im Internet nicht offensichtlich ist, mit wem man kommuniziert, k\xf6nnte sich Mallory als Alice ausgeben. Trent wird nur ben\xf6tigt, um eine Absicherung zu erhalten, dass Alice's \xf6ffentlicher Schl\xfcssel auch wirklich ihr geh\xf6rt. Bei der \xdcbermittlung des \xf6ffentlichen Schl\xfcssels wird HTTPS verwendet, so dass sich Mallory nicht dazwischenschleichen kann. Auch Alice und Bob k\xf6nnten HTTPS verwenden, doch dann weiss Bob immer noch nicht, ob er nicht f\xe4lschlicherweise eine Verbindung mit Mallory statt Alice aufgebaut hat..."),(0,i.kt)("p",null,"Das Aufbauen einer HTTPS Verbindung verwendet \xfcbrigens auch die Integrit\xe4tspr\xfcfung. Durch eine signierte Nachricht wird die IP Adresse des Servers \xfcberpr\xfcft. Aufgrund der Signatur kann die Nachricht nicht von Mallory stammen. Anschliessend wird gem\xe4ss dem Farbmischprinzip ein gemeinsamer Sitzungsschl\xfcssel f\xfcr die Verschl\xfcsselung der Verbindung erzeugt. So ist es f\xfcr Mallory unm\xf6glich, sich zwischen Trent und Bob zu stellen - sofern Bob die richtige IP-Adresse zu Trent besitzt."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=848484"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_1t86",disabled:"disabled_1w22",hint:"hint_VeYI",solution:"solution_30mD"}},84140:function(e,t,n){t.Z=n.p+"assets/images/certificates-task-0f98ec55655f87372b247f51f581173e.svg"},50998:function(e,t,n){t.Z=n.p+"assets/images/certificates-ee9ae7c1d4b32ec3faccc1a793df47d2.svg"},80119:function(e,t,n){t.Z=n.p+"assets/images/public-key-attack-1-7777f417dfcb3c24fcc79955faa0e137.svg"},14980:function(e,t,n){t.Z=n.p+"assets/images/public-key-attack-2-61efaa9b75204b38683dfe36179924a0.svg"}}]);