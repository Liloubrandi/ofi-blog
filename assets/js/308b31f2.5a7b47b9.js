/*! For license information please see 308b31f2.5a7b47b9.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87296],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=i.createContext({}),p=function(e){var t=i.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(h.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,h=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(h,".").concat(m)]||d[m]||l[m]||r;return a?i.createElement(u,s(s({ref:t},c),{},{components:a})):i.createElement(u,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var h in t)hasOwnProperty.call(t,h)&&(o[h]=t[h]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20907:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=a(83117),n=a(67294),r=a(3905),s=a(86010),o=a(96734),h=a(72023);const p=()=>{const[e,t]=n.useState(""),[a,i]=n.useState("");return n.useEffect((()=>{i((0,h.sha256)(e))}),[e]),n.createElement("div",{className:(0,s.default)("hero","shadow--lw",o.Z.container)},n.createElement("div",{className:"container"},n.createElement("p",{className:"hero__subtitle"},"SHA-2 Hash"),n.createElement("h4",null,"Input"),n.createElement("textarea",{className:(0,s.default)(o.Z.input),value:e,onChange:e=>{t(e.target.value)},rows:5,placeholder:"Text"}),n.createElement("h4",null,"SHA-2 Hash"),n.createElement("textarea",{className:(0,s.default)(o.Z.input),value:a,readOnly:!0,placeholder:"SHA2-Hash"})))},c={sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},l="Hashfunktionen",d={unversionedId:"Kryptologie/Hashfunktionen/hash-funktionen",id:"Kryptologie/Hashfunktionen/hash-funktionen",title:"Hashfunktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/hash-funktionen",permalink:"/Kryptologie/Hashfunktionen/hash-funktionen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:4,frontMatter:{sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},sidebar:"sidebar",previous:{title:"Passw\xf6rter speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"},next:{title:"Digitale-Signaturen",permalink:"/category/digitale-signaturen"}},m={},u=[{value:"Hashfunktion",id:"hashfunktion",level:2},{value:"Hashwert",id:"hashwert",level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},H=f("Comment"),g=f("Figure"),v=f("SourceRef"),k=f("Answer"),_={toc:u};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"hashfunktionen"},"Hashfunktionen"),(0,r.kt)(H,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Da eine ",(0,r.kt)("strong",{parentName:"p"},"Eingabe beliebiger L\xe4nge")," auf eine ",(0,r.kt)("strong",{parentName:"p"},"Ausgabe mit fester L\xe4nge")," abgebildet, ist Injektivit\xe4t unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Pr\xfcfsummen) eine fixe L\xe4nge haben."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{width:"600px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Hashfunktion --width=600px",src:a(53768).Z,width:"1172",height:"509"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashfunktion",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(H,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"hashfunktion"},"Hashfunktion"),(0,r.kt)(H,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"kollisionsresistenz"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Kollisionsresistenz"),(0,r.kt)(H,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"hashwert"},"Hashwert"),(0,r.kt)(H,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Ausgabe der Hashfunktion \u2013 also die Pr\xfcfsumme \u2013 wird ",(0,r.kt)("strong",{parentName:"p"},"Hashwert")," genannt."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",style:{alignSelf:"end"},className:"item"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{width:"100px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Ein Hashwert ist wie ein Fingerabdruck --width=100px",src:a(84506).Z,width:"150",height:"223"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ein Hashwert ist wie ein Fingerabdruck",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(H,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"aktuelle-beispiele"},"Aktuelle Beispiele"),(0,r.kt)(H,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)(p,{mdxType:"HashSHA2"}),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen? "),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,r.kt)(k,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0,mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit ca. 50% der Hashwert-Bits \xe4ndern."),(0,r.kt)(H,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))))}y.isMDXComponent=!0},72023:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(a){return new Sha256(t,!0).update(a)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var a=0;a<OUTPUT_TYPES.length;++a){var i=OUTPUT_TYPES[a];t[i]=createOutputMethod(i,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(a,i){return new HmacSha256(a,t,!0).update(i)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,a){return t.create(e).update(a)};for(var a=0;a<OUTPUT_TYPES.length;++a){var i=OUTPUT_TYPES[a];t[i]=createHmacOutputMethod(i,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,a){var i,n=typeof e;if("string"===n){var r,s=[],o=e.length,h=0;for(i=0;i<o;++i)(r=e.charCodeAt(i))<128?s[h++]=r:r<2048?(s[h++]=192|r>>6,s[h++]=128|63&r):r<55296||r>=57344?(s[h++]=224|r>>12,s[h++]=128|r>>6&63,s[h++]=128|63&r):(r=65536+((1023&r)<<10|1023&e.charCodeAt(++i)),s[h++]=240|r>>18,s[h++]=128|r>>12&63,s[h++]=128|r>>6&63,s[h++]=128|63&r);e=s}else{if("object"!==n)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var p=[],c=[];for(i=0;i<64;++i){var l=e[i]||0;p[i]=92^l,c[i]=54^l}Sha256.call(this,t,a),this.update(c),this.oKeyPad=p,this.inner=!0,this.sharedMemory=a}Sha256.prototype.update=function(e){if(!this.finalized){var t,a=typeof e;if("string"!==a){if("object"!==a)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var i,n,r=0,s=e.length,o=this.blocks;r<s;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),t)for(n=this.start;r<s&&n<64;++r)o[n>>2]|=e[r]<<SHIFT[3&n++];else for(n=this.start;r<s&&n<64;++r)(i=e.charCodeAt(r))<128?o[n>>2]|=i<<SHIFT[3&n++]:i<2048?(o[n>>2]|=(192|i>>6)<<SHIFT[3&n++],o[n>>2]|=(128|63&i)<<SHIFT[3&n++]):i<55296||i>=57344?(o[n>>2]|=(224|i>>12)<<SHIFT[3&n++],o[n>>2]|=(128|i>>6&63)<<SHIFT[3&n++],o[n>>2]|=(128|63&i)<<SHIFT[3&n++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++r)),o[n>>2]|=(240|i>>18)<<SHIFT[3&n++],o[n>>2]|=(128|i>>12&63)<<SHIFT[3&n++],o[n>>2]|=(128|i>>6&63)<<SHIFT[3&n++],o[n>>2]|=(128|63&i)<<SHIFT[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.block=o[16],this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,a,i,n,r,s,o,h,p=this.h0,c=this.h1,l=this.h2,d=this.h3,m=this.h4,u=this.h5,f=this.h6,H=this.h7,g=this.blocks;for(e=16;e<64;++e)t=((n=g[e-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,a=((n=g[e-2])>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,g[e]=g[e-16]+t+g[e-7]+a<<0;for(h=c&l,e=0;e<64;e+=4)this.first?(this.is224?(r=300032,H=(n=g[0]-1413257819)-150054599<<0,d=n+24177077<<0):(r=704751109,H=(n=g[0]-210244248)-1521486534<<0,d=n+143694565<<0),this.first=!1):(t=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),i=(r=p&c)^p&l^h,H=d+(n=H+(a=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&u^~m&f)+K[e]+g[e])<<0,d=n+(t+i)<<0),t=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),i=(s=d&p)^d&c^r,f=l+(n=f+(a=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&m^~H&u)+K[e+1]+g[e+1])<<0,t=((l=n+(t+i)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),i=(o=l&d)^l&p^s,u=c+(n=u+(a=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&H^~f&m)+K[e+2]+g[e+2])<<0,t=((c=n+(t+i)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),i=(h=c&l)^c&d^o,m=p+(n=m+(a=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&f^~u&H)+K[e+3]+g[e+3])<<0,p=n+(t+i)<<0;this.h0=this.h0+p<<0,this.h1=this.h1+c<<0,this.h2=this.h2+l<<0,this.h3=this.h3+d<<0,this.h4=this.h4+m<<0,this.h5=this.h5+u<<0,this.h6=this.h6+f<<0,this.h7=this.h7+H<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,a=this.h2,i=this.h3,n=this.h4,r=this.h5,s=this.h6,o=this.h7,h=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s];return this.is224||(h+=HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]),h},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,a=this.h2,i=this.h3,n=this.h4,r=this.h5,s=this.h6,o=this.h7,h=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24&255,a>>16&255,a>>8&255,255&a,i>>24&255,i>>16&255,i>>8&255,255&i,n>>24&255,n>>16&255,n>>8&255,255&n,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||h.push(o>>24&255,o>>16&255,o>>8&255,255&o),h},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},96734:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const i={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},84506:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const i=a.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},53768:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const i=a.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);