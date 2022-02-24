"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[13481],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HSVn",i=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return Z},Z:function(){return A}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),f=n(21314),g=n(74322),h=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n,a,o=(0,p.Z)(),c=r.useState("unchecked"),h=c[0],b=c[1],k=(0,f.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&k.loaded&&(b("unchecked"),k.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return b(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};b(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&w(k.value)}))}),[k]),r.useEffect((function(){k.loaded&&w(k.value)}),[k,o]),o?k.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:v(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(k.value)},className:(0,l.default)(i[h],i.checkButton)},r.createElement(u.G,{icon:(a=h,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),k=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),N=n(83117),E=n(75552),z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,N.Z)({model:t},e))):r.createElement(g.Z,null)})),x=n(3239),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},P=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(z,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(b,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),_=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=n(46858),D=n(78982),K=n(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var t=function(){try{return(0,S.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},A=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,L(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(P,e),n.loggedIn&&r.createElement(_,{webKey:e.webKey}),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(b,e),"array"===e.type&&r.createElement(w,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),s=n(51436),u=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),s=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],f=t[1],g=r.useState(!1),h=g[0],v=g[1],b=r.useRef(null),k=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&k.loaded?r.createElement("div",{onFocus:function(){return!s&&f(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:k.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},52790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),c=["components"],s={title:"3. Prozessor"},u="3. Prozessor",d={unversionedId:"Computer/basics/cpu",id:"version-24K/Computer/basics/cpu",title:"3. Prozessor",description:"---",source:"@site/versioned_docs/version-24K/07-Computer/01-basics/03-cpu.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/cpu",permalink:"/24K/Computer/basics/cpu",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/07-Computer/01-basics/03-cpu.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"3. Prozessor"},sidebar:"version-24K/sidebar",previous:{title:"2. EVAS-Prinzip",permalink:"/24K/Computer/basics/EVAS"},next:{title:"4. Speicher",permalink:"/24K/Computer/basics/Speicher"}},m=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",children:[],level:2},{value:"Aufgaben",id:"aufgaben",children:[],level:2},{value:"Weitere Funktionen",id:"weitere-funktionen",children:[],level:2}],p={toc:m};function f(e){var t=e.components,s=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-prozessor"},"3. Prozessor"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Der Prozessor ist f\xfcr die ",(0,i.kt)("strong",{parentName:"p"},"Verarbeitung")," von Daten im Computer zust\xe4ndig. Ausserdem \xfcberwacht und steuert er den Ablauf von Programmen."),(0,i.kt)("p",null,"Moderne Prozessoren enthalten mehrere ",(0,i.kt)("strong",{parentName:"p"},"Kerne"),", welche unabh\xe4ngig voneinander Programme ausf\xfchren und Berechnungen vornehmen k\xf6nnen."),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr den Prozessor gibt es folgende wichtige Kenngr\xf6ssen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Anzahl ",(0,i.kt)("strong",{parentName:"li"},"Kerne")," gibt an, wie viele Berechnungen ein Prozessor gleichzeitig, also parallel, ausf\xfchren kann."),(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Taktfrequenz")," gibt an, wie schnell der Prozessor Berechnungen durchf\xfchren kann. Sie wird in der Einheit ",(0,i.kt)("strong",{parentName:"li"},"Hertz")," angegeben, was \xabpro Sekunde\xbb bedeutet. ",(0,i.kt)("inlineCode",{parentName:"li"},"2.1 GHz"),' sind "2.1 Gigahertz", also ',(0,i.kt)("inlineCode",{parentName:"li"},"2'100'000'000 Hz")," und somit 2.1 Milliarden Operationen, die pro Sekunden berechnet werden k\xf6nnen. ")),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Fritzchens Fritz",author_uri:"https://www.flickr.com/photos/130561288@N04/",licence:"CC0",licence_url:"https://flic.kr/p/23HyxTx"},caption:"AMD Ryzen-Prozessor",options:{},isInline:!1,src:n(99933).Z,alt:"AMD Ryzen-Prozessor",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"ElasticComputeFarm",author_uri:"https://pixabay.com/de/users/elasticcomputefarm-1865639/",licence:"CC0",licence_url:"https://pixabay.com/images/id-1310766/"},caption:"Pins auf Unterseite",options:{},isInline:!1,src:n(88381).Z,alt:"Pins auf Unterseite",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Fritzchens Fritz",author_uri:"https://www.flickr.com/photos/130561288@N04/",licence:"CC0",licence_url:"https://flic.kr/p/Xfcggh"},caption:"ge\xf6ffneter Prozessor",options:{},isInline:!1,src:n(49584).Z,alt:"ge\xf6ffneter Prozessor",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,i.kt)("p",null,"Der Prozessor hat zwei Hauptaufgaben. Einerseits ",(0,i.kt)("strong",{parentName:"p"},"kontrolliert")," er die Ausf\xfchrung der Programmanweisungen. Dabei ",(0,i.kt)("strong",{parentName:"p"},"steuert")," er alle anderen Komponenten des Computers."),(0,i.kt)("p",null,"Andererseits ",(0,i.kt)("strong",{parentName:"p"},"verarbeitet")," der Prozessor Daten. Das heisst, er f\xfchrt mathematische oder logische Operationen mit bin\xe4ren Zahlen aus, beispielsweise:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vergleichen"),(0,i.kt)("li",{parentName:"ul"},"Addieren"),(0,i.kt)("li",{parentName:"ul"},"Multiplizieren"),(0,i.kt)("li",{parentName:"ul"},"Bits um eine Stelle nach links schieben")),(0,i.kt)("p",null,"Im Kapitel Rechnerarchitektur wird die Funktionsweise des Prozessors genauer erkl\xe4rt."),(0,i.kt)("h2",{id:"weitere-funktionen"},"Weitere Funktionen"),(0,i.kt)("p",null,"In moderne Prozessor-Chips werden auch weitere Funktionen integriert, welche fr\xfcher von separaten Bauteilen \xfcbernommen wurden."),(0,i.kt)("p",null,"Moderne Desktop-Prozessoren enthalten normalerweise eine Grafikeinheit, welche die Darstellung von Text, Bild und Video auf einem Bildschirm \xfcbernimmt."),(0,i.kt)("p",null,"Bei Prozessoren f\xfcr Mobiltelefone werden \xfcblicherweise spezialisierte Funktionen f\xfcr GPS, W-LAN, Mobilfunk und Bluetooth auf dem Chip integriert. Dabei spricht man von einem Ein-Chip-System oder SoC (engl. ",(0,i.kt)("em",{parentName:"p"},"system on a chip"),")."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"meine-cpu"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Meine CPU")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Welche Merkmale weist der Prozessor Ihres Laptops auf?"),(0,i.kt)("li",{parentName:"ol"},"Vergleichen Sie Ihre Werte mit herk\xf6mmlichen Prozessoren f\xfcr Desktop-Computer auf Digitec. Beschr\xe4nken Sie sich dabei auf Prozessoren von den beiden gr\xf6ssten CPU-Herstellern ",(0,i.kt)("strong",{parentName:"li"},"AMD")," und ",(0,i.kt)("strong",{parentName:"li"},"Intel"),". ",(0,i.kt)("a",{parentName:"li",href:"https://www.digitec.ch/de/s1/producttype/prozessor-83"},"https://www.digitec.ch"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Welche Taktrate hat die g\xfcnstigste/teuerste CPU, wenn die CPU dieselbe Anzahl Kerne hat wie Ihr Ger\xe4t?"),(0,i.kt)("li",{parentName:"ol"},"Worin k\xf6nnte der grosse Unterschied bei den Taktraten zwischen Laptop- und Desktop-Computer liegen?",(0,i.kt)(o.Z,{type:"text",webKey:"bd480f52-a373-40fc-8666-33b977b4bc1f",mdxType:"Answer"}))))))))}f.isMDXComponent=!0},88381:function(e,t,n){t.Z=n.p+"assets/images/03-cpu-bottom-9588c61e2d9d9ce2661e03c963870432.png"},49584:function(e,t,n){t.Z=n.p+"assets/images/03-cpu-open-389440f2b7ddbc5800a1f97d4f5fe482.png"},99933:function(e,t,n){t.Z=n.p+"assets/images/03-cpu-top-923f03d76cf40ed18147809a173f8a6c.png"}}]);