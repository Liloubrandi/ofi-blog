"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86388],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,p=m["".concat(o,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(667294),i=n(386010),r="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(r,l),hidden:n},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(583117),i=n(667294),r=n(972389),l=n(867392),s=n(707094),o=n(212466),u=n(386010),c="tabList_uSqn",d="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,h=e.block,p=e.defaultValue,f=e.values,g=e.groupId,b=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),E=N.tabGroupChoices,x=N.setTabGroupChoices,S=(0,i.useState)(y),z=S[0],j=S[1],P=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=E[g];null!=A&&A!==z&&k.some((function(e){return e.value===A}))&&j(A)}var M=function(e){var t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==z&&(_(t),j(a),null!=g&&x(g,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var i=P.indexOf(e.currentTarget)-1;n=P[i]||P[P.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,u.default)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":h},b)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:M,onClick:M},r,{className:(0,u.default)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),m?(0,i.cloneElement)(v.filter((function(e){return e.props.value===z}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==z})}))))}function h(e){var t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},682593:function(e,t,n){n.d(t,{x:function(){return P},Z:function(){return _}});var a=n(667294),i=n(403435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),o=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,i=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);i=r[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:i},n)},c=n(592814),d=n(51436),m=n(168949),h=n(972389),p=n(121314),f=n(274322),g=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return r[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,h.Z)(),i=a.useState("unchecked"),s=i[0],o=i[1],g=(0,p.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(o("unchecked"),g.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&k(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&k(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(g.value)},className:(0,l.default)(r[s],r.checkButton)},a.createElement(c.G,{icon:(t=s,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),k=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(i,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return n(e.target.value,r)},value:i,className:w(i),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return n(e.target.value,r)},value:i,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),N=n(583117),E=n(575552),x=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(f.Z,null)})),S=n(647271),z=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),j=n(697762),P=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),r=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||j.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(667294),i="noLoginAlert_HRfh",r=n(239960),l=n(471217),s=n(121314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(592814),l=n(51436),s=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(r.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(c,e);var t=a.useState(!1),n=(t[0],t[1]),r=a.useState(!1),l=r[0],u=r[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,r,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=t.left<=a&&t.right>=a,l=t.top<=i&&t.bottom>=i,r&&l||n(!1)}},a.createElement(c,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,l?i.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&a.createElement(o,e.bib)))}},285107:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(21073),i=n(667294),r=n(409877),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},274322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),i=n(386010),r="loader_FEpR",l="badge_oWqf",s=n(471217),o=n(592814),u=n(51436),c=(0,s.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(o.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(667294),i="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(386010),u=n(471217),c=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],p=t[1],f=a.useState(!1),g=f[0],b=f[1],v=a.useRef(null),k=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&g&&k.loaded?a.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(i)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,o.default)(r,e.monospace&&l,u?void 0:s),value:k.text||"",onChange:function(t,n,a,i){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&g&&k.setText(r)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(m,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},1622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var a=n(583117),i=n(480102),r=(n(667294),n(603905)),l=n(884384),s=(n(285107),n(72360),n(682593)),o=["components"],u={title:"Projekt"},c="Projekt: Partnerpraktikum",d={unversionedId:"Abschlussprojekt/projekt",id:"version-24L/Abschlussprojekt/projekt",title:"Projekt",description:"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert.",source:"@site/versioned_docs/version-24L/09-Abschlussprojekt/01-projekt.md",sourceDirName:"09-Abschlussprojekt",slug:"/Abschlussprojekt/projekt",permalink:"/24L/Abschlussprojekt/projekt",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/09-Abschlussprojekt/01-projekt.md",tags:[],version:"24L",sidebarPosition:1,frontMatter:{title:"Projekt"},sidebar:"version-24L/sidebar",previous:{title:"5. Vektorgrafik",permalink:"/24L/Codes und Daten/Grafikformate/vector"},next:{title:"Podcast",permalink:"/24L/Abschlussprojekt/podcast"}},m={},h=[{value:"Ablauf",id:"ablauf",level:2},{value:"Beurteilung",id:"beurteilung",level:2},{value:"1. Themenwahl und Ideensuche",id:"1-themenwahl-und-ideensuche",level:3},{value:"2. Umsetzung des Projekts starten",id:"2-umsetzung-des-projekts-starten",level:3},{value:"3. Woche",id:"3-woche",level:3},{value:"4. Woche",id:"4-woche",level:3},{value:"5. Letzte Woche(n)",id:"5-letzte-wochen",level:3},{value:"Ideensammlung",id:"ideensammlung",level:2},{value:"Algorithmen",id:"algorithmen",level:3},{value:"Programmieren von zuf\xe4lligen Labyrinthen",id:"programmieren-von-zuf\xe4lligen-labyrinthen",level:4},{value:"Wie funktionieren Bitcoins?",id:"wie-funktionieren-bitcoins",level:4},{value:"Big Data / Data Mining",id:"big-data--data-mining",level:3},{value:"Was ist Big Data und wie beeinflusst es unser Leben?",id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben",level:4},{value:"Simulation",id:"simulation",level:3},{value:"Insightmaker",id:"insightmaker",level:4},{value:"Sensoren",id:"sensoren",level:3},{value:"Feuchtigkeits- und Temperaturanzeige",id:"feuchtigkeits--und-temperaturanzeige",level:4},{value:"Machine Learning",id:"machine-learning",level:3},{value:"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?",id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe",level:4},{value:"Wie funktionieren Suchvorschl\xe4ge auf Google?",id:"wie-funktionieren-suchvorschl\xe4ge-auf-google",level:4}],p={toc:h};function f(e){var t=e.components,u=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"projekt-partnerpraktikum"},"Projekt: Partnerpraktikum"),(0,r.kt)("p",null,"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert."),(0,r.kt)("h2",{id:"ablauf"},"Ablauf"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gruppengr\xf6sse"),": max. 2 Personen"),(0,r.kt)("p",null,"Suchen Sie sich ein Thema, in welches Sie sich innerhalb von 5 Doppellektionen einarbeiten k\xf6nnen. Ihr Projekt darf auch einen praktischen Teil beinhalten (muss aber nicht)."),(0,r.kt)("p",null,"Das Endprodukt ihres Projekts ist ein ",(0,r.kt)("strong",{parentName:"p"},"Podcast")," oder wenn Visualisierungen zwingend sind ein Videobeitrag. Zudem wird eine schriftliche Reflexion zum Arbeitsprozess und dem Projekt verfasst, der in die Beurteilung einfliesst."),(0,r.kt)("h2",{id:"beurteilung"},"Beurteilung"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(710786).Z,mdxType:"Image"})),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(366700).Z,mdxType:"Image"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"verf\xfcgbare-hardware-an-der-schule"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Verf\xfcgbare Hardware an der Schule")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Die Schule bietet begrenzte Hardware-St\xfcckzahlen, um sich z.B. im Rahmen eines Hardware-Projekts mit den M\xf6glichkeiten der folgenden Ger\xe4te","*"," auseinanderzusetzen."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Micro:Bit Platine"),(0,r.kt)("li",{parentName:"ul"},"Maqueen Roboter (Gesteuert \xfcber Micro:Bit)"),(0,r.kt)("li",{parentName:"ul"},"3D Drucker"),(0,r.kt)("li",{parentName:"ul"},"EV3 Roboter (k\xf6nnen nur an der Schule gebraucht werden)"),(0,r.kt)("li",{parentName:"ul"},"Arduinos inkl. mehrerer Sensoren, WLAN-Kompatibel"),(0,r.kt)("li",{parentName:"ul"},"Raspberry PI 3 (ohne WIFI)"),(0,r.kt)("li",{parentName:"ul"},"LoRaWan Modul (LILYGO\xae TTGO Meshtastic T-Beam V1.1 ESP32 LoRa 433/868/915/923Mhz Wireless Module WiFi GPS NEO-6M With OLED Display for Arduino)")),(0,r.kt)("p",{parentName:"div"},"*"," ",(0,r.kt)("em",{parentName:"p"},"Erfordert die R\xfccksprache mit Herrn Hofer, um die Verf\xfcgbarkeiten zu organisieren")))),(0,r.kt)("h3",{id:"1-themenwahl-und-ideensuche"},"1. Themenwahl und Ideensuche"),(0,r.kt)("p",null,"Informieren Sie sich \xfcber Themen, die Sie spannend finden. Tauschen Sie sich anschliessend mit den Klassenkamerad:innen aus und finden Sie eine Projektpartner:in, welche Ihre Interessen teilt. Entscheiden Sie sich f\xfcr ein Thema und schreiben Sie einen Projektantrag in folgender Vorlage:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:w:/g/personal/balthasar_hofer_gbsl_ch/EcKlfnWD2TtLspneUsiwOsMBQR7xaockSJxd3gWfmRBeXQ?e=rs2BeS",className:"button button--warning"},"Vorlage Herunterladen")),(0,r.kt)("p",null,"F\xfcllen Sie den Projektantrag aus und laden Sie den Antrag bis am Mittwoch, 11.05.2022 um 22:00 Uhr hoch:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/EngM_xyRiRtJrKMFIdUqLZYBBbeRRRhusbCxkwRb-x5PqA",className:"button button--success"},"Projektantrag Hochladen")),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-1"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 1")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"333ae706-c77e-465f-9273-bef1881c0f7a",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"2-umsetzung-des-projekts-starten"},"2. Umsetzung des Projekts starten"),(0,r.kt)("p",null,"Projektantrag gem\xe4ss R\xfcckmeldung anpassen und mit der Umsetzung starten."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-2"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 2")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"ea52e8bd-853a-4485-9bf5-47975c622d95",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"3-woche"},"3. Woche"),(0,r.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-3"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 3")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"0955d986-daef-4df3-aa2b-c9f47dcde123",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"4-woche"},"4. Woche"),(0,r.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-4"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 4")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"0881427c-f098-4059-8727-813cebef5315",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"5-letzte-wochen"},"5. Letzte Woche(n)"),(0,r.kt)("p",null,"Vorbereitung und Aufnehmen der Podcasts"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-5"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 5")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"52a1172b-ae18-464d-8772-0a4d419b9bf8",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-6"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"(Arbeitstagebuch Woche 6)")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{type:"text",webKey:"55889af3-43f7-47cf-84fb-35c01fdcf28a",mdxType:"Answer"}))),(0,r.kt)("h2",{id:"ideensammlung"},"Ideensammlung"),(0,r.kt)("p",null,"M\xf6gliche Ideen - Sie d\xfcrfen aber auch einen eigenen Projektvorschlag ausarbeiten."),(0,r.kt)("h3",{id:"algorithmen"},"Algorithmen"),(0,r.kt)("h4",{id:"programmieren-von-zuf\xe4lligen-labyrinthen"},"Programmieren von zuf\xe4lligen Labyrinthen"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/zRuVhq0Kgnw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("h4",{id:"wie-funktionieren-bitcoins"},"Wie funktionieren Bitcoins?"),(0,r.kt)("p",null,"Sie setzen sich mit dem Thema Blockchain und Bitcoins auseinander. "),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{parentName:"div",src:"https://www.leparisien.fr/resizer/pgNoLN8LeaWEP6mjBtM5JTPYJhE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/J5WMRGQC4NEZXAPJERTHG7MXBA.jpg",alt:null})),(0,r.kt)("h3",{id:"big-data--data-mining"},"Big Data / Data Mining"),(0,r.kt)("h4",{id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben"},"Was ist Big Data und wie beeinflusst es unser Leben?"),(0,r.kt)("p",null,"Sie lesen zum Beispiel das Buch von Hannah Fry",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," und beleuchten den kritisch den Einfluss der permanenten Datensammlung auf unsere Gesellschaft."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Hannah Fry",source:"https://www.chbeck.de/fry-hello-world/product/26909221",licence:"C.H. Beck",licence_url:"",edited:!1},caption:"",options:{width:"300px"},isInline:!1,src:n(49874).Z,alt:"--width=300px",mdxType:"Image"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ef6zr_CP9kdNlGNj5ABP_DUBMkbxk7ptsspnIhkqVhNgtg?e=xIIKE2",className:"button button--warning"},"Herunterladen")),(0,r.kt)("h3",{id:"simulation"},"Simulation"),(0,r.kt)("p",null,"Mit Simulationen l\xe4sst sich die Wirklichkeit modellhaft abbilden und darin k\xf6nnen Theorien \xfcberpr\xfcft und getestet werden."),(0,r.kt)("h4",{id:"insightmaker"},"Insightmaker"),(0,r.kt)("p",null,"Sie arbeiten sich in ein Simulationsprogramm, bspw. ins kostenlose ",(0,r.kt)("a",{parentName:"p",href:"https://insightmaker.com"},"Insightmaker"),", ein und modellieren damit ein Ph\xe4nomen wie etwa eine R\xe4uber-Beute-Beziehung, eine Monte-Carlos Simulation oder das Game of Life."),(0,r.kt)("p",null,"Die beiden Seiten ",(0,r.kt)("a",{parentName:"p",href:"https://oinf.ch/kurs/simulationen"},"https://oinf.ch/kurs/simulationen")," und ",(0,r.kt)("a",{parentName:"p",href:"https://craft.dos/bwNrfufaSrdE3V"},"https://craft.dos/bwNrfufaSrdE3V")," geben einen guten \xdcberblick und Hilfestellungen f\xfcr das Vorgehen und entsprechende Simulationen."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{parentName:"div",src:"https://insightmaker.com/images/diagram_slide.png",alt:null})),(0,r.kt)("h3",{id:"sensoren"},"Sensoren"),(0,r.kt)("h4",{id:"feuchtigkeits--und-temperaturanzeige"},"Feuchtigkeits- und Temperaturanzeige"),(0,r.kt)("p",null,"Sie schliessen einen Feuchtigkeitssensor sowie einen Temperatursensor an einen Arduino an. \xdcber die Arduino IDE werden die Sensorwerte eingelesen und auf einem Ausgabeger\xe4t angezeigt."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{parentName:"div",src:"https://www.circuitbasics.com/wp-content/uploads/2015/12/Arduino-DHT11-Humidity-and-Temperature-Sensor-With-LCD-Output.png",alt:null})),(0,r.kt)("h3",{id:"machine-learning"},"Machine Learning"),(0,r.kt)("h4",{id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe"},"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?"),(0,r.kt)("p",null,"Sie recherchieren \xfcber die Bedeutung der Modew\xf6rter AI, ML und DL und setzen diese in einen Kontext."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/"},"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/")),(0,r.kt)("h4",{id:"wie-funktionieren-suchvorschl\xe4ge-auf-google"},"Wie funktionieren Suchvorschl\xe4ge auf Google?"),(0,r.kt)("p",null,"Sie lesen sich ins Buch von Tommaso Teofili, ",(0,r.kt)("a",{parentName:"p",href:"https://www.manning.com/books/deep-learning-for-search"},"Deep Learning for Search_2019"),(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ein und berichten \xfcber die Funktionsweise von Suchalgorithmen."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A practical approach that shows you the state of the art in using neural networks, AI, and deep learning in the development of search engines.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{parentName:"div",src:"https://human-centered.ai/wordpress/wp-content/uploads/2017/11/Deep-Learning-subset-of-Machine-Learning-subset-of-Artificial-Intelligence.jpg",alt:"--width=300px"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ec6EDPPeV8ZFuZ137SimNOwBtbqfQDqe6nWwlzjNVWKkcQ?e=qjlZVW",className:"button button--warning"},"Herunterladen")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("em",{parentName:"li"},"Die Buchausschnitte sind urheberrechtlich gesch\xfctzt und d\xfcrfen ausschliesslich f\xfcr den schulischen Gebrauch verwendet werden. Die Weitergabe ist verboten."),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},366700:function(e,t,n){t.Z=n.p+"assets/images/beurteilung_praktisch-03fc9811d3886fec00c0692b989b3fdc.png"},710786:function(e,t,n){t.Z=n.p+"assets/images/beurteilung_theorie-1b0dc0d820dbbec1f4710cce714b25d2.png"},49874:function(e,t,n){t.Z=n.p+"assets/images/book-cover_hannah-fry_hello-world-3f56445da0da4cd38e7c41fad1383c3c.jpeg"}}]);