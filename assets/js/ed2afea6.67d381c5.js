"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59706],{3239:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(67294),n="noLoginAlert_HSVn",r=i(73727),l=i(71217),s=i(21314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:n},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,t,i){i.d(t,{x:function(){return M},Z:function(){return L}});var a=i(67294),n=i(3435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=i(86010),s=i(71217),c=(0,n.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),d=function(e){var t=e.value,i=t,n=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);n=r[l],i=""+t.replace(c,"")}return a.createElement("option",{value:t,className:n},i)},o=i(92814),m=i(51436),u=i(68949),p=i(72389),g=i(21314),h=i(74322),f=(0,n.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),I=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,i,n,s=(0,p.Z)(),c=a.useState("unchecked"),f=c[0],v=c[1],k=(0,g.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&k.loaded&&(v("unchecked"),k.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var i=e.sanitizer?e.sanitizer:function(e){return e};v(i(t)===i(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,u.U5)((function(){return k.loaded}),(function(e){e&&N(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&N(k.value)}),[k,s]),s?k.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:I(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(i=k.legacyData)?void 0:i.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(k.value)},className:(0,l.default)(r[f],r.checkButton)},a.createElement(o.G,{icon:(n=f,"correct"===n?m.f8k:"wrong"===n?m.nYk:m.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),k=(0,n.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,i=(0,g.oR)("documentStore").find(e.webKey),n=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&i.loaded){var n=[].concat(i.data.value.slice(0,a),[t],i.data.value.slice(a+1));i.setData(Object.assign({},i.data,{value:n}))}};return i.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=i.legacyData)?void 0:t.value)||[]:i.data.value).map((function(t,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return n(e.target.value,r)},value:t,className:b(t),disabled:!i.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return n(e.target.value,r)},value:t,disabled:!i.loaded||i.readonly})}))):a.createElement(h.Z,null)})),y=i(83117),D=i(75552),w=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(D.Z,(0,y.Z)({model:t},e))):a.createElement(h.Z,null)})),C=i(3239),S=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,u.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,u.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},Z=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(w,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),A=(0,s.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=i(46858),x=i(78982),H=i(97762),M=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),i=(0,x.rV)(e.id,t);return i&&i.value?function(){return{data:{value:i.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,x.cl)(e.id,t)}}}:function(){}},L=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore"),i=(0,g.oR)("msalStore"),n=t.find(e.webKey),r=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||H.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,j(e)),r?n?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),i.loggedIn&&a.createElement(Z,e),i.loggedIn&&a.createElement(A,{webKey:e.webKey}),"text"===e.type&&a.createElement(w,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,i){i.d(t,{Z:function(){return o}});var a=i(67294),n=i(86010),r="loader_FEpR",l="badge_oWqf",s=i(71217),c=i(92814),d=i(51436),o=(0,s.Pi)((function(){return a.createElement("div",{className:(0,n.default)(r)},a.createElement(c.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,n.default)("badge",l)},"Laden..."))}))},75552:function(e,t,i){i.d(t,{Z:function(){return g}});var a=i(67294),n="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",c=i(86010),d=i(71217),o=i(74322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var i=[];e.bold&&i.push("bold"),e.italic&&i.push("italic"),e.underline&&i.push("underline"),t.push(i)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,d.Pi)((function(e){var t=a.useState(!1),d=t[0],g=t[1],h=a.useState(!1),f=h[0],I=h[1],v=a.useRef(null),k=e.model,b=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([i.e(97762),i.e(18446),i.e(80324),i.e(76095),i.e(71167)]).then(i.t.bind(i,44290,23)),i.e(76095).then(i.t.bind(i,76095,23)),i.e(17891).then(i.t.bind(i,17891,23)),Promise.all([i.e(40532),i.e(11940)]).then(i.bind(i,11940))],n={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(n.katex=a.length,a.push(i.e(41008).then(i.bind(i,41008)),Promise.all([i.e(40532),i.e(50037)]).then(i.bind(i,49115)))),Promise.all(a).then((function(t){m=t[n["react-quill"]].default;var i=t[n.quill].default,a=t[n["react-image-compress"]].default;if("katex"in n){var r=t[n.katex].default;window.katex=r}i.register("modules/imageCompress",a),e()}))}((function(){t&&(I(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return m&&f&&k.loaded?a.createElement("div",{onFocus:function(){return!d&&g(!0)},className:(0,c.default)(n)},a.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,c.default)(r,e.monospace&&l,d?void 0:s),value:k.text||"",onChange:function(t,i,a,n){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&f&&k.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(u,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(o.Z,null)}))},46858:function(e,t,i){i.d(t,{Vx:function(){return n},Vj:function(){return a},ly:function(){return r}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},n=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,i){i.d(t,{rV:function(){return r},cl:function(){return l}});var a=864e5,n=2592e6,r=function(e,t,i){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(t){return}}(),t){var n=localStorage.getItem(t);if(n){var r=JSON.parse(n);if("object"==typeof r){var l=r[e];return void 0===l?i:l}return i}}var c=localStorage.getItem(e);return c?JSON.parse(c):i}catch(d){return i}},l=function(e,t){try{if(t){var i=r(t,void 0,{expiry:Date.now()+n});return"object"!=typeof i&&(i={expiry:0}),e in i&&delete i[e],void localStorage.setItem(t,JSON.stringify(i))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var i=r(t,void 0,{expiry:e+n});i.expiry&&i.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},44393:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=i(83117),n=i(80102),r=(i(67294),i(3905)),l=i(84384),s=i(52084),c=["components"],d={title:"4. Speicher"},o="4. Speicher",m={unversionedId:"Computer/basics/Speicher",id:"version-24i/Computer/basics/Speicher",title:"4. Speicher",description:"Datenspeicher speichern Daten \xfcblicherweise in bin\xe4rer Form. Ein Datenspeicher besteht aus einem Speichermedium, auf welchem die Bits physikalisch repr\xe4sentiert werden.",source:"@site/versioned_docs/version-24i/07-Computer/01-basics/04-Speicher.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/Speicher",permalink:"/24i/Computer/basics/Speicher",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/01-basics/04-Speicher.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"4. Speicher"},sidebar:"version-24i/sidebar",previous:{title:"3. Prozessor",permalink:"/24i/Computer/basics/cpu"},next:{title:"5. Grafikkarte",permalink:"/24i/Computer/basics/Grafikkarte"}},u=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",children:[],level:2},{value:"Arbeitsspeicher (RAM)",id:"arbeitsspeicher-ram",children:[],level:2},{value:"Festplatten",id:"festplatten",children:[{value:"Harddisk (HDD)",id:"harddisk-hdd",children:[],level:3},{value:"Solid State Disk (SSD)",id:"solid-state-disk-ssd",children:[],level:3},{value:"Anschlusskabel",id:"anschlusskabel",children:[],level:3}],level:2},{value:"Speicherhierarchie",id:"speicherhierarchie",children:[],level:2}],p={toc:u};function g(e){var t=e.components,d=(0,n.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-speicher"},"4. Speicher"),(0,r.kt)("p",null,"Datenspeicher speichern Daten \xfcblicherweise in bin\xe4rer Form. Ein Datenspeicher besteht aus einem Speichermedium, auf welchem die Bits physikalisch repr\xe4sentiert werden."),(0,r.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,r.kt)("p",null,"F\xfcr Speicher gibt es drei wichtige Kenngr\xf6ssen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Speicherkapazit\xe4t")," ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben."),(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Zugriffszeit")," ist die Zeit, die ben\xf6tigt wird, um eine Dateneinheit (z.B. ein Byte) aus dem Speicher auszulesen. Die Zugriffszeit f\xfcr das Speichern von Daten ist oft gr\xf6sser als die Zugriffszeit f\xfcr das Laden."),(0,r.kt)("li",{parentName:"ul"},"Aus der Zugriffszeit kann die ",(0,r.kt)("strong",{parentName:"li"},"Daten\xfcbertragungsrate")," berechnet werden, also die Datenmenge, die innerhalb einer bestimmten Zeit geladen oder gespeichert werden kann. Die Daten\xfcbertragungsrate wird in Byte pro Sekunde angegeben.")),(0,r.kt)("h2",{id:"arbeitsspeicher-ram"},"Arbeitsspeicher (RAM)"),(0,r.kt)("p",null,"Der Arbeitsspeicher oder das RAM (engl. ",(0,r.kt)("em",{parentName:"p"},"random access memory"),") enth\xe4lt die Befehle und Daten der aktuell ge\xf6ffneten Programme oder Apps. Der Prozessor muss m\xf6glichst schnell auf diese Daten zugreifen k\xf6nnen. Der Arbeitsspeicher muss also eine m\xf6glichst kleine Zugriffszeit haben."),(0,r.kt)("p",null,"Daf\xfcr werden Nachteile in Kauf genommen. So ist die Speicherkapazit\xe4t von Arbeitsspeicher eher klein. Ausserdem ist Arbeitsspeicher ",(0,r.kt)("strong",{parentName:"p"},"fl\xfcchtig"),". Dies bedeutet, dass die Daten verloren gehen, sobald der Speicher nicht mehr mit Strom versorgt wird."),(0,r.kt)("p",null,"Heute wird in Computern normalerweise sogenanntes DDR-SDRAM",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," eingesetzt. Es zeichnet sich dadurch aus, dass die Daten alle paar Millisekunden wieder neu geschrieben werden m\xfcssen (",(0,r.kt)("em",{parentName:"p"},"Refresh"),")."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"W-sky",author_uri:"https://en.wikipedia.org/wiki/de:User:W-sky",licence:"CC-BY-SA-2.0",licence_url:"https://commons.wikimedia.org/wiki/File:DDR-SDRAM-Module.jpg"},caption:"DDR SDRAM",options:{},isInline:!1,src:i(55741).Z,alt:"DDR SDRAM",mdxType:"Image"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"ram-in-meinem-smartphonelaptop"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"RAM in meinem Smartphone/Laptop")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wie viel Arbeitsspeicher besitzt Ihr Smartphone, ihr Laptop?"),(0,r.kt)(s.Z,{type:"text",webKey:"98675ca4-1e32-4d92-99fc-2fef6b5faefc",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"hinweis"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hinweis")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dies kann in den Systemeinstellungen oder im (unter Windows) im Taskmanager nachgeschaut werden. "))))),(0,r.kt)("h2",{id:"festplatten"},"Festplatten"),(0,r.kt)("p",null,"Der Festplatten- oder ",(0,r.kt)("strong",{parentName:"p"},"Massenspeicher")," erf\xfcllt ganz andere Anforderungen als der Arbeitsspeicher. Wichtig ist hier, dass Daten in grossen Mengen permanent gespeichert k\xf6nnen, ohne dass eine durchgehende Stromzufuhr n\xf6tig ist. Dass die Daten\xfcbertragungsrate deutlich langsamer als beim Arbeitsspeicher ist, spielt deshalb eine untergeordnete Rolle. Er wird \u2013 im Gegensatz zum Arbeitsspeicher \u2013 nicht direkt auf das Mainboard gesteckt, sondern mittels Strom- und Datenkabel angeschlossen."),(0,r.kt)("p",null,"Heute gibt des den Festplattenspeicher in zwei Ausf\xfchrungen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"herk\xf6mmliche Harddisks oder HDD (engl. ",(0,r.kt)("em",{parentName:"li"},"hard disk drive"),")"),(0,r.kt)("li",{parentName:"ul"},"SSDs (engl. ",(0,r.kt)("em",{parentName:"li"},"solid state disk"),")")),(0,r.kt)("h3",{id:"harddisk-hdd"},"Harddisk (HDD)"),(0,r.kt)("p",null,"Der Aufbau einer ",(0,r.kt)("strong",{parentName:"p"},"herk\xf6mmlichen Harddisk")," gleicht einem Plattenspieler. Im Innern der Harddisk drehen sich mehrere Platten, auf denen durch ",(0,r.kt)("strong",{parentName:"p"},"Magnetisierung")," einzelner Bereiche Daten gespeichert werden. Auf dem nachfolgenden Bild (rechts) sieht man den Arm zum Auslesen resp. Schreiben der Daten (er befindet sich momentan in der Parkposition neben den Scheiben). Dieser Speicher wird heute noch eingesetzt, um grosse Datenmengen g\xfcnstig zu speichern. Er ist relativ langsam und anf\xe4llig auf Transportsch\xe4den, da es sich um einen mechanischen Speicher mit beweglichen Teilen handelt. Die Drehgeschwindigkeit der Platten ist beschr\xe4nkt, sie bestimmt Lese-/Schreibgeschwindigkeit. Zudem muss vor dem effektiven Zugriff stets noch gewartet werden, bis sich der Arm an der richtigen Position befindet."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/de/photo/1136478"},caption:"Harddisk",options:{},isInline:!1,src:i(2332).Z,alt:"Harddisk",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/de/photo/1387054"},caption:"ge\xf6fffnete Harddisk",options:{},isInline:!1,src:i(21214).Z,alt:"ge\xf6fffnete Harddisk",mdxType:"Image"}))))),(0,r.kt)("h3",{id:"solid-state-disk-ssd"},"Solid State Disk (SSD)"),(0,r.kt)("p",null,"Der Aufbau einer ",(0,r.kt)("strong",{parentName:"p"},"SSD")," gleicht in keiner Weise demjenigen einer HDD. Wie der Name schon sagt, enth\xe4lt sie keine beweglichen Teile und ist daher robuster, schneller, leichter und verbraucht weniger Strom. Allerdings gibt es zwei gewichtige Nachteile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSDs kosten ein Mehrfaches im Vergleich zu herk\xf6mmlichen HDDs."),(0,r.kt)("li",{parentName:"ul"},"Auf dem Markt sind nicht so grosse (in Bezug auf die Speicherkapazit\xe4t) SSDs erh\xe4ltlich wie HDDs.")),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Arshane88",author_uri:"https://commons.wikimedia.org/w/index.php?title=User:Arshane88&action=edit&redlink=1",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Samsung_860_SATA_III.jpg"},caption:"SSD",options:{},isInline:!1,src:i(17725).Z,alt:"SSD",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"MatteX",author_uri:"https://commons.wikimedia.org/w/index.php?title=User:MatteX&action=edit&redlink=1",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:Samsung_SSD_840_120GB_MZ-7TD120--3_BOTTOM_LID_REMOVED.JPG"},caption:"ge\xf6fffnete SSD",options:{},isInline:!1,src:i(85683).Z,alt:"ge\xf6fffnete SSD",mdxType:"Image"}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"hddssd-in-meinem-smartphonelaptop"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"HDD/SSD in meinem Smartphone/Laptop")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Wie viel Speicherplatz besitzt Ihr Smartphone, ihr Laptop?"),(0,r.kt)("li",{parentName:"ul"},"Wie viel davon ist noch frei?"),(0,r.kt)("li",{parentName:"ul"},"Speicher erweitern: Besitzt Ihr Laptop/Smartphone einen Kartenslot f\xfcr SD/microSD Karten?")),(0,r.kt)(s.Z,{type:"text",webKey:"27d447fa-82af-4969-9564-edc896e5bdde",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"anschlusskabel"},"Anschlusskabel"),(0,r.kt)("p",null,"Festplatten werden mit sogenannten SATA-Kabeln angeschlossen. Die Abk\xfcrzung SATA steht f\xfcr ",(0,r.kt)("em",{parentName:"p"},"serial at attachment"),". Das schmalere Kabel dient zur Daten\xfcbertragung, das breitere f\xfcr die Stromzufuhr."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Berkut",author_uri:"https://en.wikipedia.org/wiki/User:Berkut",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:SATA_ports.jpg"},caption:"SATA-Kabel ",options:{},isInline:!1,src:i(11402).Z,alt:"SATA-Kabel ",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Afrank99",author_uri:"https://commons.wikimedia.org/wiki/User:Afrank99",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:SATA_Power_Plug.jpg"},caption:"SATA-Stromanschluss ",options:{},isInline:!1,src:i(64042).Z,alt:"SATA-Stromanschluss ",mdxType:"Image"}))))),(0,r.kt)("h2",{id:"speicherhierarchie"},"Speicherhierarchie"),(0,r.kt)("p",null,"Aus technischen Gr\xfcnden sind schnelle Speicher viel teurer als langsame Speicher. Ausserdem sind schnelle Speicher ",(0,r.kt)("strong",{parentName:"p"},"fl\xfcchtig"),", sie ben\xf6tigen eine Stromzufuhr, um den Speicherinhalt bewahren zu k\xf6nnen."),(0,r.kt)("p",null,"Das f\xfchrt dazu, dass schneller Speicher in viel kleineren Mengen und nur wo unbedingt n\xf6tig eingesetzt wird. Es ergibt sich in Computersystemen eine Hierarchie von verschiedenen Speichern. Je n\xe4her der Speicher beim Prozessor ist, desto schneller muss er sein."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Speicherhierarchie",options:{},isInline:!1,src:i(64920).Z,alt:"Speicherhierarchie",mdxType:"Image"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"speicher"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Speicher")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Wieso enth\xe4lt ein Computer so viele verschiedene Speicherarten?"),(0,r.kt)("li",{parentName:"ol"},"\xdcberlegen Sie sich, welche Daten auf den einzelnen Ebenen der oben abgebildeten Speicherhierarchie gespeichert werden."),(0,r.kt)("li",{parentName:"ol"},"Wieso kann eine Datei auf einer Festplatte viel schneller gel\xf6scht als gespeichert werden?")),(0,r.kt)(s.Z,{type:"text",webKey:"074b934c-5b70-45c6-8034-4e99e77d850b",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"speicherkosten-und-datendurchsatz"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Speicherkosten und Datendurchsatz")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"F\xfchren Sie auf ",(0,r.kt)("a",{parentName:"p",href:"https://digitec.ch"},"Digitec")," eine Recherche zu den Speicherpreisen und dem Datendurchsatz durch. Bestimmen Sie jeweils"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"den ",(0,r.kt)("strong",{parentName:"li"},"Preis pro GB")," (selber berechnen) und"),(0,r.kt)("li",{parentName:"ul"},"den ",(0,r.kt)("strong",{parentName:"li"},"Datendurchsatz")," f\xfcrs ",(0,r.kt)("em",{parentName:"li"},"Schreiben")," und ",(0,r.kt)("em",{parentName:"li"},"Lesen"),".\nf\xfcr ein Modell im mittleren Preissegment.")),(0,r.kt)("p",{parentName:"div"},"SSD, Mobile SSD, HDD, Externe HDD, USB-Stick, SD/microSD Karte "),(0,r.kt)(s.Z,{type:"text",webKey:"1e665ad1-531f-4d31-a9b5-a3a4c4dc80ff",mdxType:"Answer"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"DDR-SDRAM: engl. ",(0,r.kt)("em",{parentName:"li"},"Double Data Rate Synchronous Dynamic Random Access Memory"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},55741:function(e,t,i){t.Z=i.p+"assets/images/04-ddr-sdram-524985ba1c1c53c0f7115a5195bdf778.jpg"},21214:function(e,t,i){t.Z=i.p+"assets/images/04-harddisk-open-a98de5dfdb040f1199ed165887bba311.jpg"},2332:function(e,t,i){t.Z=i.p+"assets/images/04-harddisk-607a6e250e30b57d8dc88f211180fb7c.jpg"},64042:function(e,t,i){t.Z=i.p+"assets/images/04-sata-power-f51a200377294d419beaa2009659075d.jpg"},11402:function(e,t,i){t.Z=i.p+"assets/images/04-sata-05bd057c3c64541defbacc636ff64942.jpg"},85683:function(e,t,i){t.Z=i.p+"assets/images/04-ssd-open-12a2f8c087afc3fe39556ecb1dd58461.jpg"},17725:function(e,t,i){t.Z=i.p+"assets/images/04-ssd-117a29c057a63d24443a27dc8f1032f4.jpg"},64920:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjM2MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iZXh0ZXJuIj4KICAgICAgICA8cmVjdCB4PSI0MDAiIHk9IjIwOCIgd2lkdGg9IjM4NCIgaGVpZ2h0PSI5NiIgc3R5bGU9ImZpbGw6cmdiKDE4NywyMjIsMjUxKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDYzMy4yNDQsMjE1LjcxNykiPgogICAgICAgICAgICA8dGV4dCB4PSIzNi43NDJweCIgeT0iMzcuMjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+YXVzc2VyaGFsYjwvdGV4dD4KICAgICAgICAgICAgPHRleHQgeD0iMzYuNzQycHgiIHk9IjU3LjI4cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPmRlcyBHZXLDpHRzPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJHZXLDpHQiPgogICAgICAgIDxyZWN0IHg9IjQwMCIgeT0iMTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9Ijk2IiBzdHlsZT0iZmlsbDpyZ2IoMjAwLDIzMCwyMDEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjcxNy41MzVweCIgeT0iMTY3LjE2OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5HZXLDpHQ8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29yIj4KICAgICAgICA8cmVjdCB4PSI0MDAiIHk9IjE2IiB3aWR0aD0iMzg0IiBoZWlnaHQ9Ijk2IiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxNzgpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjY3Ny4yOTFweCIgeT0iNzAuOTczcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlByb3plc3NvcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJwZXJzaXN0ZW50Ij4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTYwIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE0NCIgc3R5bGU9ImZpbGw6cmdiKDE4OSwxODksMTg5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMC44NDhweCIgeT0iMjM3LjA4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5wZXJzaXN0ZW50PC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9ImZsw7xjaHRpZyI+CiAgICAgICAgPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE0NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDUsMjEwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMS43MjdweCIgeT0iOTMuMDYzcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPu+sgsO8Y2h0aWc8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQ2xvdWRzcGVpY2hlciI+CiAgICAgICAgPHJlY3QgeD0iMTQ0IiB5PSIyNTYiIHdpZHRoPSI1MTIiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzM1Ljc1MnB4IiB5PSIyODUuMjgzcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkNsb3Vkc3BlaWNoZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iV2VjaHNlbGRhdGVudHLDpGdlciI+CiAgICAgICAgPHJlY3QgeD0iMTc2IiB5PSIyMDgiIHdpZHRoPSI0NDgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzEwLjQ0NHB4IiB5PSIyMzYuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPldlY2hzZWxkYXRlbnRyw6RnZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iTWFzc2Vuc3BlaWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjIwOCIgeT0iMTYwIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjMyNi41NjdweCIgeT0iMTg5LjExMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5NYXNzZW5zcGVpY2hlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJBcmJlaXRzc3BlaWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjI0MCIgeT0iMTEyIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjMzMi44MDNweCIgeT0iMTQxLjExMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcmJlaXRzc3BlaWNoZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29yY2FjaGUiPgogICAgICAgIDxyZWN0IHg9IjI3MiIgeT0iNjQiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzI3Ljg4MXB4IiB5PSI5NC45OTdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29yY2FjaGU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29ycmVnaXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjMwNCIgeT0iMTYiIHdpZHRoPSIxOTIiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzIwLjkwM3B4IiB5PSI0NC45NjFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29ycmVnaXN0ZXI8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);