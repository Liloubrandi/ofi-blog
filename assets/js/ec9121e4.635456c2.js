"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45165],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_HSVn",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return I},Z:function(){return A}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),k=n(21314),f=n(74322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),c=a.useState("unchecked"),g=c[0],h=c[1],b=(0,k.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&b.loaded&&(h("unchecked"),b.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&y(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&y(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(b.value)},className:(0,l.default)(i[g],i.checkButton)},a.createElement(u.G,{icon:(r=g,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,k.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(f.Z,null)})),N=n(83117),E=n(75552),x=(0,o.Pi)((function(e){var t=(0,k.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(f.Z,null)})),_=n(3239),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,o.Pi)((function(e){var t=(0,k.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,k.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),Z=n(78982),L=n(97762),I=function(e){return e.replace(/\s+/g,"").toUpperCase()},R=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,Z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},A=(0,o.Pi)((function(e){var t=(0,k.oR)("documentStore"),n=(0,k.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,k.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,R(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(_.Z,null),n.loggedIn&&a.createElement(S,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(y,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),s=n(51436),u=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),s=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},k=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],k=t[1],f=a.useState(!1),g=f[0],v=f[1],h=a.useRef(null),b=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&g&&b.loaded?a.createElement("div",{onFocus:function(){return!s&&k(!0)},className:(0,c.default)(r)},a.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&g&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},97230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},assets:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),c=["components"],s={title:"6. Netzwerkkarte"},u="6. Netzwerkkarte",d={unversionedId:"Computer/basics/Netzwerkkarte",id:"Computer/basics/Netzwerkkarte",title:"6. Netzwerkkarte",description:"Ein Computer ohne M\xf6glichkeiten zur Kommunikation ist nicht mehr vorstellbar. Damit ein Computer sich in ein LAN einbinden kann, ben\xf6tigt er eine Netzwerkkarte \u2013 sei es eine mit Kabelanschluss oder eine drahtlose f\xfcr die Teilnahme in einem WLAN.",source:"@site/docs/Computer/01-basics/06-Netzwerkkarte.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Netzwerkkarte",permalink:"/Computer/basics/Netzwerkkarte",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/06-Netzwerkkarte.md",tags:[],version:"current",lastUpdatedAt:1641751110,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:6,frontMatter:{title:"6. Netzwerkkarte"},sidebar:"sidebar",previous:{title:"5. Grafikkarte",permalink:"/Computer/basics/Grafikkarte"},next:{title:"7. Hauptplatine",permalink:"/Computer/basics/Mainboard"}},m={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Netzwerkkarte",id:"netzwerkkarte",level:2},{value:"Drahtlose Netzwerkkarte",id:"drahtlose-netzwerkkarte",level:2}],k={toc:p};function f(e){var t=e.components,s=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6-netzwerkkarte"},"6. Netzwerkkarte"),(0,i.kt)("p",null,"Ein Computer ohne M\xf6glichkeiten zur Kommunikation ist nicht mehr vorstellbar. Damit ein Computer sich in ein LAN einbinden kann, ben\xf6tigt er eine Netzwerkkarte \u2013 sei es eine mit Kabelanschluss oder eine drahtlose f\xfcr die Teilnahme in einem WLAN."),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr die Netzwerkkarte gibt es folgende wichtige Kenngr\xf6sse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die maximale ",(0,i.kt)("strong",{parentName:"li"},"\xdcbertragungsrate")," gibt an, wie viele Daten pro Sekunde (im Idealfall) \xfcbertragen werden k\xf6nnen. Sie wird in der Einheit ",(0,i.kt)("strong",{parentName:"li"},"Mbps")," oder ",(0,i.kt)("strong",{parentName:"li"},"Gbps")," angegeben, was \xabMega- resp. Gigabit pro Sekunde\xbb bedeutet. Gemessen wird hier also nicht in Byte sondern in Bit, was etwas ungew\xf6hnlich ist.")),(0,i.kt)("h2",{id:"netzwerkkarte"},"Netzwerkkarte"),(0,i.kt)("p",null,"Heute ist die Netzwerkkarte meist direkt auf dem Mainboard integriert und muss nicht als Steckkarte hinzugef\xfcgt werden. Allerdings kann ein Computer (insbesondere Server) so immer noch aufger\xfcstet und mit mehreren Netzwerkkarten ausger\xfcstet werden."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:SMC_UE1211D-TXR01-92856.jpg"},caption:"Netzwerkkarte mit RJ45-Buchse",options:{},isInline:!1,src:n(6950).Z,alt:"Netzwerkkarte mit RJ45-Buchse",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raysonho @ Open Grid Scheduler / Grid Engine",author_uri:"https://commons.wikimedia.org/wiki/User:Raysonho",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:EthernetCableYellow3.jpg"},caption:"Netzwerkkabel mit RJ45-Stecker",options:{},isInline:!1,src:n(6081).Z,alt:"Netzwerkkabel mit RJ45-Stecker",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"drahtlose-netzwerkkarte"},"Drahtlose Netzwerkkarte"),(0,i.kt)("p",null,"Netzwerkkarten zur Verbindung mit einem drahtlosen Netzwerk (WLAN) gibt es in etlichen Ausf\xfchrungen. Einerseits kann sie in PCs und Server wie andere Steckkarten eingebaut werden, andererseits gibt es sie in kleineren Ausf\xfchrungen f\xfcr Notebooks oder sogar als USB-Stecker im Miniformat."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Zephyris",author_uri:"https://en.wikipedia.org/wiki/User:Zephyris",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:WLAN_PCI_Card_cleaned.png"},caption:"Drahtlose Netzwerkkarte mit Antenne f\xfcr PCs",options:{},isInline:!1,src:n(54786).Z,alt:"Drahtlose Netzwerkkarte mit Antenne f\xfcr PCs",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Gemtek_WiFi_Mini_PCI_Card_WMIR-103G-7783.jpg"},caption:"Drahtlose Netzwerkkarte f\xfcr Notebooks",options:{},isInline:!1,src:n(39402).Z,alt:"Drahtlose Netzwerkkarte f\xfcr Notebooks",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Pece",author_uri:"https://commons.wikimedia.org/wiki/User:Pece",licence:"CC-BY-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Karta_WiFi_USB_(02)_-_DSC05152_v1.jpg"},caption:"Drahtlose Netzwerkkarte f\xfcr USB-Anschluss",options:{},isInline:!1,src:n(45245).Z,alt:"Drahtlose Netzwerkkarte f\xfcr USB-Anschluss",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"netzwerkkarte"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Netzwerkkarte")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sie wollen f\xfcr die Ferien einige Filme von Netflix offline verf\xfcgbar machen und m\xfcssen insgesamt ",(0,i.kt)("inlineCode",{parentName:"p"},"10 GB")," Daten herunterladen. Ihr WLAN kann in ihr Zimmer maximal ",(0,i.kt)("inlineCode",{parentName:"p"},"150 Mbps")," \xfcbertragen. Wie viel Zeit gewinnen Sie, wenn Sie aufstehen um das Ger\xe4t per Ethernet an Ihren Glasfaser-Router mit ",(0,i.kt)("inlineCode",{parentName:"p"},"1 Gbps")," anschliessen?","*"),(0,i.kt)("p",{parentName:"div"},"Berechnen Sie:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Download Dauer per WLAN"),(0,i.kt)("li",{parentName:"ul"},"die Download Dauer per Ethernet"),(0,i.kt)("li",{parentName:"ul"},"den Zeitgewinn")),(0,i.kt)(o.Z,{type:"text",webKey:"f1c25b7d-6186-4cbf-9b8d-ca2728017b0c",mdxType:"Answer"}),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"*"," Die Voraussetzung f\xfcr diesen Vergleich w\xe4re nat\xfcrlich, dass die Netflix-Server die Filme auch effektiv mit 1Gbps bereitstellen w\xfcrden.")))))}f.isMDXComponent=!0},6081:function(e,t,n){t.Z=n.p+"assets/images/06-network-cable-0ae7c0da8cab9af403564976f891b281.jpg"},6950:function(e,t,n){t.Z=n.p+"assets/images/06-nic-2ade54c7414c1a33484e3753fc9fd156.jpg"},39402:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-notebook-1ab40ac4baac7607479e6a930d5db4d0.jpg"},54786:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-pc-c7fab4c602f414750c878aa354cc66ad.png"},45245:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-usb-2f5f85d85f1b71c97d97c5818da576d8.jpg"}}]);