"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[80491],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_HSVn",i=n(39960),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return T},Z:function(){return K}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),c=n(71217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},s=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),g=n(74322),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},b=(0,c.Pi)((function(e){var t,n,r,c=(0,m.Z)(),o=a.useState("unchecked"),v=o[0],b=o[1],y=(0,p.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&y.loaded&&(b("unchecked"),y.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return b(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};b(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return y.loaded}),(function(e){e&&N(y.value)}))}),[y]),a.useEffect((function(){y.loaded&&N(y.value)}),[y,c]),c?y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:h(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(y.value)},className:(0,l.default)(i[v],i.checkButton)},a.createElement(s.G,{icon:(r=v,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},N=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),E=n(83117),w=n(75552),_=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,E.Z)({model:t},e))):a.createElement(g.Z,null)})),S=n(3239),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},x=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(_,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(b,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),Z=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(46858),L=n(78982),D=n(97762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},K=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||D.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,O(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(x,e),n.loggedIn&&a.createElement(Z,{webKey:e.webKey}),"text"===e.type&&a.createElement(_,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(N,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},69014:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3435),r=n(86010),i=n(67294),l={bit:"bit_TKsr",on:"on_Gc1_",charHistory:"charHistory__gY3",cable:"cable_RfeZ",off:"off_hKYl",bitContainer:"bitContainer_bA2H",svgContainer:"svgContainer_ZfG3",out:"out_fofC",sentBits:"sentBits_FAYg",first:"first_VPza",processed:"processed_up44",octet:"octet_Y1qi"},c=n(97566),o=n(76030),u=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=function(e){var t=e.title,n=e.titleId,a=d(e,u);return i.createElement("svg",s({viewBox:"0 0 500 450",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,i.createElement("path",{style:{fill:"transparent",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:4,stroke:"#000",paintOrder:"fill"},d:"M434.055 80.455c.339.059-152.586-1.51-196.471-.273-82.386 2.322-89.439 22.004-100.53 42.758-14.311 26.781 5.825 58.009 47.186 65.986 59.245 11.426.375.639 58.91 10.895 109.13 19.12.575.236 109.833 18.975 68.99 11.833 77.441 107.219 35.431 144.445-33.505 29.691-69.634 58.914-191.461 59.425-.349.001-88.743-.963-89.26-1.683"}))},m=function(e){e&&e.forEach((function(e){e&&o.Z.remove(e)}))},p=function(e){e.forEach((function(e){e&&e.pause()}))},g=function(e){e.forEach((function(e){e&&e.play()}))},v=["button","button--sm","button--primary","button--outline"],h=function(e){var t=e.match((0,a.Z)(/(1{0,4}0)/,{control:1}));return t?t.groups.control.length:0},b=function(){var e=i.useState("idle"),t=e[0],n=e[1],a=i.useRef(null),u=i.useState("latin1"),s=u[0],d=u[1],b=i.useRef([]),y=i.useRef(null),k=i.useState([]),N=k[0],E=k[1],w=i.useState("01010010 01100101 01110100 01101111"),_=w[0],S=w[1],C=i.useState([]),x=C[0],Z=C[1],z=i.useState({top:0,left:0}),L=z[0],D=z[1],T=i.useState(""),O=T[0],K=T[1],P=i.useState([]),U=P[0],V=P[1],j=i.useState(-1),B=j[0],R=j[1],F=i.useState(null),I=F[0],M=F[1],H=i.useState(!1),q=H[0],A=H[1];return i.useEffect((function(){S("latin1"===s?"01010010 01100101 01110100 01101111":"11100010 10101101 10010000")}),[s]),i.useEffect((function(){if(a.current!==t)switch(a.current=t,I&&"running"!==t&&clearTimeout(I),t){case"pause":p(N);break;case"continue":g(N),n("running");break;case"running":q&&(A(!1),V([]));break;case"stop":m(b.current),Z([]),K(""),V([]),n("idle");break;case"start":m(b.current);var e=function(e){var t=[],n=e.replace(/\s+/g,"");for(n.length%8!=0&&(n=n.padStart(n.length+n.length%8,"0"));n.length>0;)t.push(n.slice(0,8)),n=n.slice(8);return t}(_);S(e.join(" ")),Z([]),K(""),V([]),setTimeout((function(){K(e.join(""))}),0),n("running")}}),[t,I,q]),i.useEffect((function(){if(y.current){var e=y.current.querySelector("svg>circle.cable_svg__binDecoderOut");if(e){var t=e.getBoundingClientRect(),n=y.current.getBoundingClientRect();D({left:t.left-n.left,top:t.top-n.top})}}}),[]),i.useEffect((function(){p(N),m(b.current),Z([]),K(""),V([]),n("idle"),I&&clearTimeout(I)}),[s]),i.useEffect((function(){if(b.current&&y.current){var e=y.current.querySelector("svg>path"),t=o.Z.path(e);R(-1);var n=b.current.map((function(e,n){if(e)return(0,o.Z)({targets:[e],translateX:t("x"),translateY:t("y"),rotate:t("angle"),easing:"linear",duration:4e3,delay:90*n+100*Math.floor(n/8),loop:!1,complete:function(e){R(n)}})}));E(n)}}),[b,y,O]),i.useEffect((function(){var e=O.substr(B,1);if(e){var t=[].concat(U);b.current&&b.current[B]&&(b.current[B].style.display="none");var a=U.length>0&&(B+1)%8==0,r=a;if("latin1"===s)t.push(e);else{var i=8*Math.floor(B/8),l=h(O.substr(i,8)),c=h(O.substr(i+8,8));r=r&&(1===l||2!==c),B%8>=l&&t.push(e)}if(V(t),r){p(N);var o=t.join(""),u=parseInt(o,2),d={bin:o,ord:u,char:String.fromCodePoint(u)};Z([].concat(x,[d])),A(!0),M(setTimeout((function(){V([]),g(N.slice(B)),A(!1)}),1e3))}else a&&(p(N),M(setTimeout((function(){g(N.slice(B))}),1e3)));B===N.length-1&&n("idle")}}),[B,s]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",c.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin Decoder"),i.createElement("h4",null,"Modus"),i.createElement("div",{className:(0,r.default)("buttongroup",l.modes)},i.createElement("button",{className:r.default.apply(void 0,v.concat(["latin1"===s&&"button--active"])),onClick:function(){return d("latin1")}},"Latin1"),i.createElement("button",{className:r.default.apply(void 0,v.concat(["utf8"===s&&"button--active"])),onClick:function(){return d("utf8")}},"UTF-8")),i.createElement("div",{className:l.inputContainer},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,r.default)(c.Z.input),value:_,onChange:function(e){return S(e.target.value.replace(/[^01\s]/g,"1"))},rows:3}),i.createElement("div",{className:(0,r.default)("buttongroup",l.modes)},["start","idle"].includes(t)?i.createElement("button",{className:r.default.apply(void 0,v),onClick:function(){return n("start")}},"Start"):i.createElement(i.Fragment,null,i.createElement("button",{className:r.default.apply(void 0,v),onClick:function(){return n("running"===t?"pause":"continue")}},"running"===t?"Pause":"Fortsetzen"),i.createElement("button",{className:r.default.apply(void 0,v),onClick:function(){return n("stop")}},"Stop"))),i.createElement("div",{className:(0,r.default)(l.sentBits)},O.split("").map((function(e,t){var n=t>0&&t%8==0;return i.createElement("div",{className:(0,r.default)(l.bit,B>=t&&l.processed,n&&l.first,"1"===e?l.on:l.off),key:t},e)}))),i.createElement("div",null,O.split("").map((function(e,t){return i.createElement("div",{key:t,ref:function(e){return b.current[t]=e},className:(0,r.default)(l.bitContainer)},i.createElement("div",{className:(0,r.default)(l.bit,"1"===e?l.on:l.off)},i.createElement("span",{className:(0,r.default)(l.text)},e)))})),i.createElement("div",{ref:y,className:(0,r.default)(l.svgContainer)},i.createElement(f,{className:(0,r.default)(l.cable)}),i.createElement("div",{className:(0,r.default)(l.out),style:{top:L.top,left:L.left}},i.createElement("textarea",{value:x.map((function(e){return e.char})).join(""),disabled:!0}),i.createElement("div",{className:(0,r.default)(l.octet)},U.map((function(e,t){return i.createElement("div",{className:(0,r.default)(l.bit,"1"===e&&l.on,"0"===e&&l.off),key:t},e)}))),i.createElement("div",{className:(0,r.default)(l.charHistory)},i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Chr"),i.createElement("th",null,"Dec"),i.createElement("th",null,"Bin"))),i.createElement("tbody",null,x.slice().reverse().map((function(e,t){return i.createElement("tr",{key:t},i.createElement("td",null,e.char),i.createElement("td",null,e.ord),i.createElement("td",null,e.bin))})))))))))))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",c=n(71217),o=n(92814),u=n(51436),s=(0,c.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",o=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],p=t[1],g=a.useState(!1),v=g[0],h=g[1],b=a.useRef(null),y=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&v&&y.loaded?a.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(r)},a.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,o.default)(i,e.monospace&&l,u?void 0:c),value:y.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&v&&y.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(f,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},16977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return f},toc:function(){return m},default:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(52084),c=n(69014),o=["components"],u={title:"6. \xdcbungen"},s="\xdcbungen UTF-8",d={unversionedId:"Codierung/Zeichencodierung/Uebungen",id:"version-25h/Codierung/Zeichencodierung/Uebungen",title:"6. \xdcbungen",description:"Wie viele Zeichen sind in folgender bit-Squenz codiert?",source:"@site/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/06-Uebungen.md",sourceDirName:"05-Codierung/01-Zeichencodierung",slug:"/Codierung/Zeichencodierung/Uebungen",permalink:"/25h/Codierung/Zeichencodierung/Uebungen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/06-Uebungen.md",tags:[],version:"25h",sidebarPosition:6,frontMatter:{title:"6. \xdcbungen"},sidebar:"version-25h/sidebar",previous:{title:"5. UTF-8",permalink:"/25h/Codierung/Zeichencodierung/UTF8"},next:{title:"7. Textcodierung",permalink:"/25h/Codierung/Zeichencodierung/Textcodierung"}},f={},m=[],p={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfcbungen-utf-8"},"\xdcbungen UTF-8"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"1-wie-viele-zeichen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Wie viele Zeichen?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie viele Zeichen sind in folgender bit-Squenz codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11100010 10011101 10000000 01000110 11010011 10111111 11110110 10011010 10101010 10001111 00010010\n")),(0,i.kt)(l.Z,{type:"string",webKey:"e2835c91-5519-4aaa-b28f-08d83e37c5e6",solution:"5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"2-utf-8-decodieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. UTF-8 Decodieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11000010 10011001\n")),(0,i.kt)(l.Z,{type:"string",webKey:"4ced8d67-dfd8-4d8b-98c8-691303bc8b34",solution:"153",mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11100001 10000000 10001111\n")),(0,i.kt)(l.Z,{type:"string",webKey:"a5def7c0-be31-442a-ad2b-b48acc9fce13",solution:"4111",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"3-utf-8-codieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. UTF-8 Codieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie folgende bit-Sequenz zu UTF-8:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100 10010101 10010110\n")),(0,i.kt)(l.Z,{type:"string",webKey:"5d40fc8e-0755-4e83-b76d-dc8c975c6b18",solution:"11110011 10001001 10010110 10010110",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"Codieren Sie die Zahl ",(0,i.kt)("inlineCode",{parentName:"p"},"260")," zu UTF-8:"),(0,i.kt)(l.Z,{type:"string",webKey:"c324c22e-e5bc-4da4-b474-f7d78b49fa75",solution:"11000100 10000100",sanitizer:function(e){return e.replaceAll(/[^\d]/g,"")},mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"4-utf-8-emojis"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. UTF-8 Emojis")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie drei Weihnachts-Emojis zu UTF-8:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Verwenden Sie Python, um die Ordnungszahl der Emojis herauszufinden."),(0,i.kt)("li",{parentName:"ol"},"Wandeln Sie die Ordnungszahlen ins Bin\xe4re um (auch hier darf Python verwendet werden)"),(0,i.kt)("li",{parentName:"ol"},"Codieren Sie die Bin\xe4rzeichen-Kette zu UTF-8 und halten Sie das Resultat fest."),(0,i.kt)("li",{parentName:"ol"},"Probieren Sie Ihre L\xf6sung im UTF-8 Decodier-Modus")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=fdc14c44-1f31-4860-a5aa-45d6f388e74b",live_py:!0,id:"fdc14c44-1f31-4860-a5aa-45d6f388e74b"},"")),(0,i.kt)(l.Z,{type:"text",webKey:"96fc016d-d9d2-4956-919b-ecbc2c31d1f2",default:"\ud83c\udf32",mdxType:"Answer"}),(0,i.kt)(c.Z,{mdxType:"BinDecoder"}))))}g.isMDXComponent=!0},97566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}}}]);