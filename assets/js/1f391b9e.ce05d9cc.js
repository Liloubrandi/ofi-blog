"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3085],{30772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(38684),l=a(67294),r=a(86010),o=a(1944),s=a(35281),c=a(95124),i=a(45042),d=a(39407);const u="mdxPageWrapper_j9I6";function m(e){const{content:t}=e,{metadata:{title:a,description:n,frontMatter:m}}=t,{wrapperClassName:p,hide_table_of_contents:g}=m;return l.createElement(o.FG,{className:(0,r.default)(null!=p?p:s.k.wrapper.mdxPages,s.k.page.mdxPage)},l.createElement(o.d,{title:a,description:n}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,r.default)("row",u)},l.createElement("div",{className:(0,r.default)("col",!g&&"col--8")},l.createElement("article",null,l.createElement(i.Z,null,l.createElement(t,null)))),!g&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(d.Z,{toc:t.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level}))))))}function p(e){return l.createElement(n._.Provider,{value:e.content.frontMatter},l.createElement(m,{...e}))}},24229:(e,t,a)=>{a.d(t,{x:()=>D,Z:()=>H});var n=a(67294);const l={answer:"answer_rKAQ",option:"option_CENc",empty:"empty_rgdf",arrayAnswer:"arrayAnswer_LBzS",active:"active_Vst5",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",dropdownMenu:"dropdownMenu_UYca",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var r=a(86010),o=a(71217);const s=/--(?<klass>\w+)$/,c=e=>{let t,{value:a}=e,r=a;if(s.test(a)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(a);t=l[e],r=""+a.replace(s,"")}return n.createElement("option",{value:a,className:t},r)};var i=a(92814),d=a(51436),u=a(68949),m=a(72389),p=a(21314),g=a(74322);const v=/--(?<klass>\w+)$/,h=e=>l[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],y=(0,o.Pi)((e=>{const t=(0,m.Z)(),[a,o]=n.useState("unchecked"),s=(0,p.oR)("documentStore").find(e.webKey),v=e=>{s.loaded&&(o("unchecked"),s.setData({value:e,type:"string"}))},y=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;o(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,u.U5)((()=>s.loaded),(e=>{e&&y(s.value)}))),[s]),n.useEffect((()=>{s.loaded&&y(s.value)}),[s,t]),t?s.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>v(e.target.value),style:{width:e.width},value:s.value,className:h(s.value),disabled:!s.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>v(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>y(s.value),className:(0,r.default)(l[a],l.checkButton)},n.createElement(i.G,{icon:(f=a,"correct"===f?d.f8k:"wrong"===f?d.nYk:d.Fuz)}))):n.createElement(g.Z,null):n.createElement("div",null,"SSR");var f})),f=/--(?<klass>\w+)$/,E=e=>l[(e=>{if(f.test(e))return e.match(f).groups.klass})(e)],b=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),n.createElement("div",{className:l.arrayAnswer},t.data.value.map(((o,s)=>e.select?n.createElement("div",{className:(0,r.default)("dropdown"),key:s},n.createElement("div",{className:(0,r.default)(l.option,!o&&l.empty,E(o)),"data-toggle":"dropdown",onClick:e=>{const t=e.currentTarget,a=t.parentElement;function n(){t.classList.remove("button--active"),a.classList.remove("dropdown--show"),document.removeEventListener("click",n)}a.classList.contains("dropdown--show")||(t.classList.add("button--active"),a.classList.add("dropdown--show"),setTimeout((()=>{document.addEventListener("click",n)}),0))}},o.replace(f,"")),n.createElement("div",{className:(0,r.default)(l.dropdownMenu,"dropdown__menu")},e.select.map(((e,t)=>{const c=E(e),i=e.replace(f,"");return n.createElement("div",{key:t,onClick:()=>a(e,s),className:(0,r.default)(l.option,c,!i&&l.empty,e===o&&l.active)},n.createElement("span",null,i))})))):n.createElement("input",{key:s,type:"text",onChange:e=>a(e.target.value,s),value:o,disabled:!t.loaded||t.readonly}))))):n.createElement(g.Z,null)}));var w=a(83117),_=a(31288);const N=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",{className:"notranslate"},e.label&&n.createElement("h6",null,e.label),n.createElement(_.Z,(0,w.Z)({model:t},e))):n.createElement(g.Z,null)}));var k=a(47271);const S=(0,o.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var C=a(97762);const Z="state_xAV3",R="checkbox_HXMO",x="admin_yhn5",L="box_nEnD",B="nameWrapper_q6u9",A="name_FE1M";var P=a(38684);const K={checked:"mdi-checkbox-marked-outline",unset:"mdi-checkbox-blank-outline",question:"mdi-account-question-outline"},M={checked:"--ifm-color-success",unset:"--ifm-color-secondary",question:"--ifm-color-warning"},T={checked:"white",unset:"black",question:"white"},I=(0,o.Pi)((e=>{const{sidebar_custom_props:t}=(0,P.Z)(),a=(0,p.oR)("adminStore"),[l]=n.useState(window.location.pathname.replace("/","").split("/")[0]),o=(0,p.oR)("documentStore").find(e.webKey);return o.loaded?n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.default)(Z,"state-component",(e.noHeader||e.children)&&"no-header")},n.createElement("div",{className:(0,r.default)("button","button--"+o.viewClass,R),onClick:()=>{switch(o.value){case"checked":return e.noQuestion?o.setValue("unset"):o.setValue("question");case"question":return o.setValue("unset");case"unset":return o.setValue("checked")}}},n.createElement("i",{className:(0,r.default)("mdi",K[o.value])})),n.createElement("div",null,e.children)),a.isAdmin&&a.showTaskStates&&n.createElement("div",{className:(0,r.default)(x)},a.findByWebKey(l,t.id,e.webKey).map(((e,t)=>{var l;return n.createElement("div",{className:(0,r.default)(L),key:t},n.createElement("div",{className:(0,r.default)(Z),style:{backgroundColor:"var("+M[e.data.value]+")"}},n.createElement("i",{className:(0,r.default)("mdi",K[e.data.value]),style:{color:""+T[e.data.value]}})),n.createElement("div",{className:(0,r.default)(B)},n.createElement("div",{className:(0,r.default)(A)},(null==(l=a.getUser(e.user_id))?void 0:l.name)||"Name")))})))):n.createElement(g.Z,null)})),D=e=>e.replace(/\s+/g,"").toUpperCase(),H=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),l=t.find(e.webKey),o=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size};case"state":return{type:"state",value:"unset"}}})(e)),e.type,e.webKey,!0),o?l?n.createElement("div",{"data--web-key":e.webKey,className:(0,r.default)("answer",e.type)},n.createElement(k.Z,null),a.loggedIn&&n.createElement(S,{webKey:e.webKey}),"text"===e.type&&n.createElement(N,e),"string"===e.type&&n.createElement(y,e),"array"===e.type&&n.createElement(b,e),"state"===e.type&&n.createElement(I,e)):n.createElement(g.Z,null):n.createElement("div",{style:{height:"1em"}})}))},47271:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294);const l="noLoginAlert_HRfh";var r=a(39960),o=a(71217),s=a(21314);const c=(0,o.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:l},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.Z,{to:"/login"},"Login"))))},27883:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(86010);const r="label_htSN",o="icon_Nz7l";var s=a(65488),c=a(85162);const i=e=>"s-"+e,d=e=>n.createElement(s.Z,{defaultValue:i(0),values:e.children.map(((t,a)=>{const s=(e.highlighted||[]).includes(a),c=n.createElement("span",{className:(0,l.default)(r)},s&&n.createElement("span",{className:(0,l.default)(o)},e.hilightIcon||"\u26a0\ufe0f"),e.getLabel(a));return{value:i(a),label:c}}))},e.children.map(((e,t)=>n.createElement(c.Z,{value:i(t),key:t},e))))},74322:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(86010);const r="loader_FEpR",o="badge_oWqf",s="overlay_cqDg";var c=a(92814),i=a(51436);const d=e=>n.createElement("div",{className:(0,l.default)(r,e.overlay&&s)},n.createElement(c.G,{icon:i.IJ7,spin:!0}),n.createElement("span",{className:(0,l.default)("badge",o)},e.caption||"Laden..."))},31288:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(72389),l=a(71217),r=a(67294);const o=(0,l.Pi)((e=>{const[t,l]=r.useState();return r.useEffect((()=>{Promise.all([a.e(532),a.e(3160),a.e(1897),a.e(4729)]).then(a.bind(a,84729)).then((e=>{l(e)}))}),[]),(0,n.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement("div",null,e.model.text)}))},9874:(e,t,a)=>{a.d(t,{Z:()=>ee});var n=a(83117),l=a(67294),r=a(98299),o=a(10412),s=a(46858);const c=function(e,t){void 0===t&&(t=0);let a=3735928559^t,n=1103547991^t;for(let l,r=0;r<e.length;r++)l=e.charCodeAt(r),a=Math.imul(a^l,2654435761),n=Math.imul(n^l,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var i=a(28137),d=a(86010),u=a(71217),m=a(21314),p=a(72389);const g=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return l.createElement("pre",null,l.createElement("code",null,t.data.code))})),v=(0,u.Pi)((e=>{const[t,n]=l.useState();return l.useEffect((()=>{Promise.all([a.e(6606),a.e(8558)]).then(a.bind(a,78558)).then((e=>{n(e)}))}),[]),(0,p.Z)()?t?l.createElement(t.default,e):l.createElement("div",null):l.createElement(g,e)}));var h=a(52616),y=a(61193),f=a.n(y);const E=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}};var b=a(61212);const w=e=>Object.entries(e||{}).map((e=>e[0]+'="'+e[1]+'"')).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},N=e=>{const t=[],{properties:a,tagName:n,type:l,children:r}=e;switch("root"===l&&r.forEach((e=>{t.push(...N(e))})),n){case"svg":e.metadata&&t.push(e.metadata),t.push("<svg "+w(a)+">"),r.forEach((e=>{t.push(...N(e))})),t.push("</svg>");break;case"rect":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<rect "+w(a)+"></rect>");break;case"g":if(0===(r||[]).length)return t;t.push("<g "+w(a)+">"),r.forEach((e=>{t.push(...N(e))})),t.push("</g>");break;case"line":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push("<line "+w(a)+"></line>");break;case"circle":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push("<circle "+w(a)+"></circle>");break;case"text":var o="";r.forEach((e=>{switch(e.type){case"text":o=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<text "+w(a)+">"+o+"</text>");break;case"polygon":var s="0,0,0",c="0,0";r.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(c=e.properties.to)}})),t.push("<polygon "+w(a)+' transform="translate('+c+") rotate("+s+')"></polygon>')}return t},k=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},S=(e,t,a,n)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const l=e.getBBox(),r={viewBox:l.x-5+","+(l.y-5)+","+(l.width+10)+","+(l.height+10),width:l.width+10,height:l.height+10};var o=e.outerHTML,s='<?xml version="1.0" standalone="no"?>';const c=document.createElement("div");let i=0;if(n||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),n=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(n.length>0){const e=n[n.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+e+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",""+r.width)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+r.width),e.setAttribute("to",""+r.width)})),t.setAttribute("viewBox",r.viewBox),t.setAttribute("height",""+r.height),t.setAttribute("width",""+r.width),c.innerHTML=s+"\r\n"+t.outerHTML,i=Array.from(t.querySelectorAll("animate")).map(k).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,b.Q)(e);return t&&_(a,t),N(a).join("\n")})(""+s+o,r);c.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=c.querySelector("svg"),t=document.createElement("metadata"),n=document.createElement("raw");n.innerHTML=a||"",t.appendChild(n),e.appendChild(t)}var d=new Blob([c.innerHTML],{type:"image/svg+xml;charset=utf-8"}),u=URL.createObjectURL(d),m=document.createElement("a");m.href=u,m.download=i>0?t+"__"+(Math.round(10*i)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(m),m.click(),document.body.removeChild(m)};var C=a(92814),Z=a(51436);const R=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey),a=(0,m.oR)("documentStore");return l.createElement(f(),{onStop:E,positionOffset:{x:0,y:"-50%"}},l.createElement("div",{className:i.Z.brythonTurtleResult},l.createElement("div",{className:i.Z.brythonTurtleResultHead},l.createElement("span",null,"Output"),l.createElement("span",{className:i.Z.spacer}),l.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:i.Z.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(h.h5.turtleSvgContainer(t.codeId));e&&S(e,""+t.codeId,t.executedScriptSource,!0)}},l.createElement("span",{"aria-hidden":"true"},l.createElement(C.G,{icon:Z.Bxq}))),l.createElement("button",{"aria-label":"Download SVG",type:"button",className:i.Z.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(h.h5.turtleSvgContainer(t.codeId));e&&S(e,""+t.codeId,t.executedScriptSource)}},l.createElement("span",{"aria-hidden":"true"},l.createElement(C.G,{icon:Z.q7m}))),l.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:i.Z.slimStrippedButton,onClick:()=>a.setOpendTurtleModal(void 0)},l.createElement("span",{"aria-hidden":"true"},l.createElement(C.G,{icon:Z.NBC})))),l.createElement("div",{id:h.h5.turtleResult(t.codeId),className:"brython-turtle-result"})))})),x=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return 0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join(""))?null:l.createElement("div",{className:i.Z.brythonOut},t.logMessages.length>0&&l.createElement("pre",{style:{overflowX:"auto"}},t.logMessages.map(((e,t)=>l.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.output)))))}));var L=a(51417),B=a(68949);const A=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return l.createElement("button",{onClick:()=>t.execScript(document),className:(0,d.default)(i.Z.playButton,i.Z.headerButton),title:"Code Ausf\xfchren"},l.createElement(C.G,{icon:t.executing?L.Bmx:Z.zc,spin:t.executing}))})),P=(0,u.Pi)((e=>{let{slim:t,title:a,resettable:n,webKey:r,lang:o,noCompare:s,download:c}=e;const[u,p]=l.useState(!1),g=(0,m.oR)("documentStore").find(r);if(!g)return null;return l.useEffect((()=>{let e;const t=(0,B.U5)((()=>g.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(p(!0),e=setTimeout((()=>{p(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[g]),l.createElement("div",{className:(0,d.default)(i.Z.brythonCodeBlockHeader,i.Z.brythonCodeBlockHeader,i.Z.controls)},!t&&l.createElement(l.Fragment,null,l.createElement("div",{className:i.Z.title},a),!g.loaded&&l.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),g.saveService.isOffline&&l.createElement("span",{className:(0,d.default)("badge","badge--danger",i.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),l.createElement("div",{className:i.Z.spacer}),l.createElement("span",{style:{minWidth:"1em"}},"save"===g.saveService.state&&l.createElement(C.G,{icon:Z.UO1,style:{color:"#3578e5"},spin:!0}),u&&l.createElement(C.G,{icon:Z.f8k,style:{color:"var(--ifm-color-success)"}})),g.hasEdits&&!g.showRaw&&n&&l.createElement("button",{onClick:()=>{if(!n)return;if(g.readonly)return void g.setData({code:g.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&g.setData({code:g.rawScript})},className:i.Z.headerButton,title:"\xc4nderungen Verwerfen"},l.createElement(C.G,{icon:Z.X7o})),c&&!g.showRaw&&l.createElement("button",{className:(0,d.default)(i.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([g.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const n="python"===o?".py":"."+o,l=a===o?g.webKey:a,r=l.endsWith(n)?l:""+l+n;e.download=r,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},l.createElement(C.G,{icon:Z.q7m})),g.hasEdits&&!s&&l.createElement("button",{className:(0,d.default)(i.Z.showRawButton,i.Z.headerButton,g.showRaw?i.Z.showRawButtonDisabled:void 0),onClick:(0,B.aD)((()=>g.showRaw=!g.showRaw)),title:g.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},g.showRaw?l.createElement(C.G,{icon:Z.w49}):l.createElement(C.G,{icon:Z.rxY}))),"python"===o&&l.createElement(A,{webKey:r}))}));var K=a(56771);const M=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore"),a=t.find(e.webKey);return l.useEffect((()=>(0,B.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,K.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[h.h5.scriptSource(a.codeId)]}))}))),[a]),l.createElement(l.Fragment,null,l.createElement(P,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),l.createElement(v,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers}),"python"===e.lang&&l.createElement("div",{className:(0,d.default)(i.Z.result)},l.createElement(x,{webKey:e.webKey}),t.opendTurtleModalWebKey===a.webKey&&l.createElement(R,{webKey:e.webKey}),l.createElement("div",{id:h.h5.outputDiv(a.codeId)})))})),T=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey),a=l.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,B.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),n=((e,t)=>{const a=l.useRef(null);return l.useCallback((n=>{a.current&&t(a.current),a.current=n,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(h.jS,a)}),(e=>{e.removeEventListener(h.jS,a)}));return l.createElement("div",{id:h.h5.component(t.codeId),ref:n})}));var I=a(47271),D=a(74322),H=a(4817),z=a.n(H),V=a(87410),O=a(35926);const G=e=>{if(e)return l.createElement("span",{dangerouslySetInnerHTML:{__html:V.Z.highlight(e,V.Z.languages.python,"python")}})},U=(0,u.Pi)((e=>{var t;const a=(0,m.oR)("documentStore"),n=(0,m.oR)("userStore"),r=a.find(e.webKey),[o,s]=l.useState(1),[c,u]=l.useState(!1);return l.useEffect((()=>(0,B.U5)((()=>{var t;return null==(t=a.find(e.webKey))?void 0:t.id}),(t=>{var n;t&&t>0&&(s(1),c&&(null==(n=a.find(e.webKey))||n.loadVersions()))}))),[]),r.versioned?l.createElement("div",{className:(0,d.default)(i.Z.codeHistory)},l.createElement("details",{open:c,onClick:e=>{e.preventDefault(),e.stopPropagation(),c||r.loadVersions(),u(!c)},className:(0,d.default)("alert alert--info",i.Z.historyDetails)},l.createElement("summary",null,l.createElement("span",{className:"badge badge--secondary"},r.versionsLoaded?r.versions.length+" Versions":"Load Versions"),l.createElement(C.G,{className:(0,d.default)(i.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===r.versionsLoaded,icon:Z.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),r.loadVersions()}})),l.createElement("div",{className:(0,d.default)(i.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},l.createElement("div",{className:(0,d.default)(i.Z.versionControl)},l.createElement(O.Z,{value:o,onChange:e=>{s(e)},min:1,max:r.versions.length-1,dots:r.versions.length<50}),l.createElement("span",{className:"badge badge--primary"},"V",o)),l.createElement("div",{className:(0,d.default)(i.Z.diffViewer)},r.versions.length>1&&l.createElement(z(),{leftTitle:r.versions[o-1].version,rightTitle:l.createElement("div",null,r.versions[o].version,r.versions[o].pasted&&(null==(t=n.current)?void 0:t.admin)&&l.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:r.versions[o-1].data.code,newValue:r.versions[o].data.code,renderContent:G}))))):null})),q=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore");(0,m.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey);return(0,p.Z)()?a?l.createElement("div",{className:(0,d.default)(i.Z.wrapper,"notranslate")},!e.slim&&l.createElement(I.Z,null),l.createElement("div",{className:(0,d.default)(i.Z.playgroundContainer,e.slim?i.Z.containerSlim:i.Z.containerBig,"live_py")},"python"===e.lang&&l.createElement(T,{webKey:e.webKey}),l.createElement(M,e),l.createElement(U,{webKey:e.webKey}))):l.createElement(D.Z,null):l.createElement("div",null,"SSR")}));var W=a(25934),F=a(10345);const j="playgroundWrapper_ADS_",Y="playgroundContainer_J_zN";function $(e){return l.createElement("div",{className:j},l.createElement("div",{className:Y},l.createElement(F.Z,e)))}var J=a(38985);const Q={},X=(e,t)=>{const a=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();Q[a]||(Q[a]={});const n=c(t);Q[a][n]||(Q[a][n]=Object.keys(Q[a]).length+1);return e?(0,s.Vx)(e):""+Q[a][n]},ee=(te=r.Z,function(e){var t,a,r;const c=(e.className||"").match(/language-(?<lang>\w*)/);let i=null!=(t=null==c||null==(a=c.groups)||null==(r=a.lang)?void 0:r.toLocaleLowerCase())?t:"";if("py"===i&&(i="python"),e.live_jsx)return l.createElement($,(0,n.Z)({scope:J.Z},e));if(e.live_py&&o.Z.canUseDOM){if(!e.id&&!e.slim)return l.createElement(te,e);const t=e.children.replace(/\s*\n$/,""),a=X(e.title,t),[r]=l.useState(e.id||(0,W.Z)());return l.createElement(q,(0,n.Z)({},e,{webKey:r,code:t,codeId:a,readonly:!!e.readonly,lang:i,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,showLineNumbers:!(e.slim&&!/\n/.test(t)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,s.Vj)(e.title)||i}))}return l.createElement(te,e)});var te},22968:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(30109),l=a(67294),r=a(86010);const o="figure_mAmF",s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(""+e)?""+e+t:""+e},c=["maxWidth","maxHeight","height","width"];const i="bib_Qjs2",d="visible_fInC",u="refItem_Eo4g";var m=a(92814),p=a(51436);const g=e=>{const{bib:t}=e,[a,n]=l.useState(!1);return l.createElement(l.Fragment,null,l.createElement("span",{className:(0,r.default)(i,a?d:void 0),onClick:()=>n(!a)},"@"),a&&l.createElement(l.Fragment,null,l.createElement("span",{className:(0,r.default)("badge badge--secondary",u)},"Autor: ",t.author),l.createElement("a",{href:t.licence_url,target:"_blank",className:u},l.createElement("span",{className:(0,r.default)("badge badge--secondary")},"Lizenz: ",t.licence)),t.edited&&l.createElement("span",{className:(0,r.default)("badge badge--secondary",u)},"Bearbeitet"),l.createElement("a",{href:t.source,target:"_blank",className:u},l.createElement("span",{className:(0,r.default)("badge badge--secondary")},l.createElement(m.G,{icon:p.Xjp})))))},v="dl_tOps";var h=a(24229),y=a(72389),f=a(71217),E=a(21314),b=a(74322),w=a(34673),_=a(86720);const N=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},l.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})),k=(0,f.Pi)((e=>l.createElement("span",{className:(0,r.default)(_.Z.policy,"badge","badge--"+e.color)},e.name," ",l.createElement(m.G,{icon:p.nYk,onClick:e.onRemove})))),S=(0,f.Pi)((e=>{const[t,a]=l.useState(""),[n,o]=l.useState(""),[s,c]=l.useState(""),i=(0,E.oR)("policyStore"),d=(0,E.oR)("adminStore"),u=(0,E.oR)("userStore"),g=i.findPolicy(e.webKey);return g?l.createElement("div",{className:(0,r.default)(_.Z.configContainer)},l.createElement("div",{className:(0,r.default)(_.Z.showControl)},l.createElement(m.G,{icon:d.showAdminElement("policy_opts")?p.nYk:p.cNd,onClick:()=>{d.toggleAdminElements("policy_opts")}})),d.showAdminElement("policy_opts")&&l.createElement("div",{className:(0,r.default)(_.Z.config)},l.createElement("div",{className:(0,r.default)(_.Z.permissions)},Array.from(g.klasses).map(((e,t)=>l.createElement(k,{key:t,name:e,onRemove:()=>g.removePermission(e,"class"),color:"success"}))),Array.from(g.groups).map(((e,t)=>l.createElement(k,{key:t,name:e,onRemove:()=>g.removePermission(e,"group"),color:"danger"}))),Array.from(g.users).map(((e,t)=>l.createElement(k,{key:t,name:e,onRemove:()=>g.removePermission(e,"user"),color:"primary"})))),l.createElement("div",{className:(0,r.default)(_.Z.update)},l.createElement("input",{type:"text",placeholder:"Klasse",value:t,onChange:e=>a(e.target.value),disabled:g.locked,list:"solution-policy-for-classes"}),l.createElement("datalist",{id:"solution-policy-for-classes"},u.klasses.map(((e,t)=>l.createElement("option",{key:t,value:e})))),l.createElement("button",{disabled:g.locked,onClick:()=>{g.addPermission(t,"class"),a("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:n,onChange:e=>o(e.target.value),disabled:g.locked,list:"solution-policy-for-groups"}),l.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([...u.groups,...i.groups])).map(((e,t)=>l.createElement("option",{key:t,value:e})))),l.createElement("button",{disabled:g.locked,onClick:()=>{g.addPermission(n,"group"),o("")}},"Add"),l.createElement("input",{type:"email",placeholder:"User",value:s,onChange:e=>c(e.target.value),disabled:g.locked,list:"solution-policy-for-users"}),l.createElement("datalist",{id:"solution-policy-for-users"},u.users.map(((e,t)=>l.createElement("option",{key:t,value:e.email})))),l.createElement("button",{disabled:g.locked,onClick:()=>{g.addPermission(s,"user"),c("")}},"Add")))):null})),C=(0,f.Pi)((e=>{var t,a;const n=(0,E.oR)("policyStore"),o=(0,E.oR)("userStore"),s=(0,E.oR)("adminStore"),c=(0,y.Z)();if((0,E.aV)(e.webKey),!c)return l.createElement("div",null,"SSR");const i=n.find(e.webKey);return i?(console.log(e.open||s.showPolicyOptions),l.createElement("div",{"data--web-key":e.webKey,className:(0,r.default)(_.Z.wrapper,"solution-wrapper")},i.show||null!=(t=o.current)&&t.admin?l.createElement(w.Z,{summary:l.createElement("summary",null,e.title||"L\xf6sung"," ",l.createElement(N,null),!i.show&&l.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,r.default)("alert alert--success",_.Z.solution),open:e.open||s.showSolutions,key:"poly-"+(e.open||s.showSolutions)},(null==(a=o.current)?void 0:a.admin)&&l.createElement(S,{webKey:i.webKey}),e.children):l.createElement("div",{className:(0,r.default)("alert",_.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",l.createElement(N,null)))):l.createElement(b.Z,null)})),Z={commentIcon:"commentIcon_BLFl",loaded:"loaded_rJ0e",controls:"controls_YZcg",delete:"delete_LrA6",button:"button_AaeX",colorPicker:"colorPicker_dFwr",color:"color_qBbq",red:"red_Tgca",orange:"orange_bnkZ",green:"green_BksA",yellow:"yellow_WdQp",blue:"blue_xZJ3",active:"active_oQHf",comments:"comments_O1_l",comment:"comment_jrM2"};var R=a(38684),x=a(31288),L=a(68949);const B=e=>"tabpanel"===e.getAttribute("role")||e.classList.contains("markdown")||!e.parentElement?e:B(e.parentElement),A=e=>{if(e.classList.contains("table"))return void(e.style.right="2px");const t=B(e.parentElement);if(t){if("tabpanel"===t.getAttribute("role"))return void(e.style.right="2px");const a=t.getBoundingClientRect().right,n=e.parentElement.getBoundingClientRect().right-a-10;e.style.right=n+"px"}},P=(e,t)=>{if(e)return(0,L.aD)((a=>{a.preventDefault(),a.stopPropagation(),e.color=t}))},K=(0,f.Pi)((e=>{var t,a,n,o,s,c,i,d,u,m,p;const g=(0,E.oR)("commentStore"),{sidebar_custom_props:v}=(0,R.Z)(),h=l.useRef(null),[y,f]=l.useState(!1),b=g.find(v.id,e.type,e.nr),w=b.length>0;return l.useEffect((()=>{if(h.current){A(h.current);const e=()=>A(h.current);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}}),[h]),l.useEffect((()=>{g.notifyPresence(v.id,e.type,e.nr)}),[g]),l.createElement(l.Fragment,null,l.createElement("div",{className:(0,r.default)("notranslate",Z.commentIcon,e.type,w&&Z.loaded,(null==(t=b[0])?void 0:t.open)&&Z.open),ref:h,onClick:()=>{w?b.forEach((e=>e.toggleOpen())):g.isLoggedIn?g.openComment(v.id,e.type,e.nr):window.alert("Melden Sie sich an, um Kommentare zu erfassen")},style:{"--comment-color":null==(a=b[0])?void 0:a.cssColor}},l.createElement("div",{className:(0,r.default)(Z.controls,(null==(n=b[0])?void 0:n.showMenu)&&Z.active),onMouseLeave:()=>{var e;null==(e=b[0])||e.setShowMenu(!1),f(!1)}},(null==(o=b[0])?void 0:o.showMenu)&&g.isMyView&&l.createElement(l.Fragment,null,l.createElement("span",{className:(0,r.default)(Z.delete)},l.createElement("i",{className:(0,r.default)("mdi","mdi-trash-can",Z.icon),style:{color:"var(--ifm-color-danger"},"data-toggle":"dropdown",onClick:e=>{e.stopPropagation(),e.preventDefault(),f(!0)}}),y&&l.createElement("div",{className:(0,r.default)(Z.button,"button","button--danger"),onClick:e=>{e.stopPropagation(),e.preventDefault(),b[b.length-1].delete()}},"Ja, L\xf6schen!")),l.createElement("div",{className:(0,r.default)(Z.colorPicker,"dropdown","dropdown--hoverable")},l.createElement("span",{className:(0,r.default)(Z.color),onClick:e=>{e.preventDefault(),e.stopPropagation()}}),l.createElement("div",{className:"dropdown__menu"},l.createElement("span",{onClick:P(b[0],"red"),className:(0,r.default)("dropdown__link",Z.color,Z.red,"red"===(null==(s=b[0])?void 0:s.color)&&Z.active)}),l.createElement("span",{onClick:P(b[0],"orange"),className:(0,r.default)("dropdown__link",Z.color,Z.orange,"orange"===(null==(c=b[0])?void 0:c.color)&&Z.active)}),l.createElement("span",{onClick:P(b[0],"green"),className:(0,r.default)("dropdown__link",Z.color,Z.green,"green"===(null==(i=b[0])?void 0:i.color)&&Z.active)}),l.createElement("span",{onClick:P(b[0],"blue"),className:(0,r.default)("dropdown__link",Z.color,Z.blue,"blue"===(null==(d=b[0])?void 0:d.color)&&Z.active)}),l.createElement("span",{onClick:P(b[0],"yellow"),className:(0,r.default)("dropdown__link",Z.color,Z.yellow,"yellow"===(null==(u=b[0])?void 0:u.color)&&Z.active)})))),l.createElement("i",{onMouseEnter:()=>{var e;return null==(e=b[0])?void 0:e.setShowMenu(!0)},className:(0,r.default)("mdi","mdi-comment-text-outline",Z.icon)}))),(null==(m=b[0])?void 0:m.open)&&l.createElement("div",{className:Z.comments,style:{"--comment-color":null==(p=b[0])?void 0:p.cssColor}},b.map(((e,t)=>l.createElement("div",{key:t+"@"+e.initializedAt,className:(0,r.default)(Z.comment),onClick:e=>{e.preventDefault(),e.stopPropagation()}},l.createElement(x.Z,{model:e,theme:"bubble",placeholder:"\ud83d\udcac ..."}))))))}));var M=a(27883),T=a(65488),I=a(85162);const D={...n.Z,Comment:K,Figure:function(e){const t=l.useRef(null),a=e.options;return a&&("size"in a&&(a.maxWidth="min(90vw, "+s(a.size)+", 100%)",a.maxHeight=s(a.size),delete a.size),a.height&&(a.maxWidth="min(90vw, 100%)",a.height=s(a.height),delete a.height),a.width&&(a.maxWidth="min(90vw, "+s(a.width)+", 100%)",a.width=s(a.width),delete a.width)),l.useEffect((()=>{if(!t.current)return;const e=t.current.firstChild;e&&a&&c.forEach((t=>{t in a&&(e.style[t]=a[t])}))}),[t]),l.createElement("figure",{className:(0,r.default)(o,"figure"),style:a,ref:t},e.children)},SourceRef:g,dl:function(e){return l.createElement("dl",{className:(0,r.default)(v)},e.children)},Answer:h.Z,Solution:C,Tabs:T.Z,GTabs:M.Z,TabItem:I.Z}},46858:(e,t,a)=>{a.d(t,{Vj:()=>n,Vx:()=>l,ly:()=>r});const n=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},l=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=e=>e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")},28137:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonTurtleResult:"brythonTurtleResult_xUV1",brythonTurtleResultHead:"brythonTurtleResultHead_r_q_",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},86720:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);