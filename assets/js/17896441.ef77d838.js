"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[27918],{47271:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a="noLoginAlert_HRfh",o=n(39960),i=n(71217),l=n(21314),s=(0,i.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(o.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(86010),o="loader_FEpR",i="badge_oWqf",l=n(71217),s=n(92814),c=n(51436),d=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(o)},r.createElement(s.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",i)},"Laden..."))}))},64320:function(e,t,n){n.d(t,{Z:function(){return de}});var r=n(83117),a=n(3435),o=n(67294),i=n(30254),l=n(10412),s=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},c=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},d=function(e,t){void 0===t&&(t=0);for(var n,r=3735928559^t,a=1103547991^t,o=0;o<e.length;o++)n=e.charCodeAt(o),r=Math.imul(r^n,2654435761),a=Math.imul(a^n,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),((a=Math.imul(a^a>>>16,2246822507)^Math.imul(r^r>>>13,3266489909))>>>0).toString(16).padStart(8,"0")+(r>>>0).toString(16).padStart(8,"0")},u={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",brythonTurtleResult:"brythonTurtleResult_xUV1",brythonTurtleResultHead:"brythonTurtleResultHead_r_q_",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"},m=n(86010),f=n(52616),p=n(71217),y=n(21314),b=n(63818),h=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey);return o.createElement("script",{id:f.h5.scriptSource(t.codeId),type:"text/py_disabled",className:"brython-script"},b+'\nrun("""'+((t.code||"").replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")+'""", \'')+t.codeId+"')")})),g=void 0,v=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey);return o.createElement("pre",null,o.createElement("code",null,t.data.code))})),_=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey),r=o.useState(!1),a=r[0],i=r[1];o.useEffect((function(){var e=!0;return function(e){if(g)return e();n.e(74981).then(n.bind(n,74981)).then((function(t){return Promise.all([n.e(56604).then(n.t.bind(n,56604,23)),n.e(4007).then(n.t.bind(n,4007,23)),n.e(44077).then(n.t.bind(n,16366,23)),n.e(57787).then(n.t.bind(n,57787,23)),n.e(82679).then(n.t.bind(n,82679,23)),n.e(66245).then(n.t.bind(n,66245,23))]).then((function(n){g=t.default,e()}))}))}((function(){e&&i(!0)})),function(){e=!1}}),[]);var l=o.useCallback((function(n){return null!==n&&n.editor&&("python"===e.lang&&n.editor.commands.addCommand({name:"execute",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:function(){return t.execScript(document)}}),n.editor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-s",mac:"Command-s"},exec:function(){t.saveService.saveNow()}})),function(){if(n&&n.editor){var e=n.editor.commands.commands.execute;e&&n.editor.commands.removeCommand(e,!0);var t=n.editor.commands.commands.save;t&&n.editor.commands.removeCommand(t,!0)}}}),[t]);return o.createElement("div",{className:(0,m.default)(u.brythonCodeBlock,u.editor)},a?o.createElement(g,{className:u.brythonEditor,style:{width:"100%"},onPaste:function(e){t.versioned&&(t.setPastedEdit(!0),t.saveService.saveNow())},maxLines:25,ref:l,mode:e.lang,theme:"dracula",keyBindings:"VSCode",onChange:function(e){t.setData({code:e})},readOnly:t.showRaw||!t.loaded,value:t.showRaw?t.rawScript:t.data.code,defaultValue:t.code,name:f.h5.aceEditor(t.codeId),editorProps:{$blockScrolling:!0},setOptions:{displayIndentGuides:!0,vScrollBarAlwaysVisible:!1,highlightGutterLine:!1},showPrintMargin:!1,highlightActiveLine:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!1,enableSnippets:!1,showGutter:!0}):o.createElement(v,{webKey:e.webKey,lang:e.lang}),"python"===e.lang&&o.createElement(h,{webKey:e.webKey}))})),w=n(61193),E=n.n(w),S=function(e){if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((function(){return t.click()}),1)}}},N=n(61212),x=function(e){return Object.entries(e||{}).map((function(e){return e[0]+'="'+e[1]+'"'})).join(" ")},C=function e(t,n){"root"===t.type?t.children.forEach((function(t){e(t,n)})):"element"===t.type&&"svg"===t.tagName&&"properties"in t&&(t.properties=Object.assign({},t.properties,n))},R=function e(t){var n=[],r=t.properties,a=t.tagName,o=t.type,i=t.children;switch("root"===o&&i.forEach((function(t){n.push.apply(n,e(t))})),a){case"svg":t.metadata&&n.push(t.metadata),n.push("<svg "+x(r)+">"),i.forEach((function(t){n.push.apply(n,e(t))})),n.push("</svg>");break;case"rect":i.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to}})),n.push("<rect "+x(r)+"></rect>");break;case"g":if(0===(i||[]).length)return n;n.push("<g "+x(r)+">"),i.forEach((function(t){n.push.apply(n,e(t))})),n.push("</g>");break;case"line":i.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;r[t.attributeName]=t.to}})),n.push("<line "+x(r)+"></line>");break;case"circle":i.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),r.style&&/\s*display:\s*none;\s*/.test(r.style)&&(r.style=r.style.replace(/\s*display:\s*none;\s*/g,"")),n.push("<circle "+x(r)+"></circle>");break;case"text":var l="";i.forEach((function(e){switch(e.type){case"text":l=e.value;break;case"element":var t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to}})),n.push("<text "+x(r)+">"+l+"</text>");break;case"polygon":var s="0,0,0",c="0,0";i.forEach((function(e){var t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(c=e.properties.to)}})),n.push("<polygon "+x(r)+' transform="translate('+c+") rotate("+s+')"></polygon>')}return n},B=function(e,t){var n=(0,N.Q)(e);return t&&C(n,t),R(n).join("\n")},T=function(e){var t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},k=function(e,t,n,r){e.setAttribute("xmlns","http://www.w3.org/2000/svg");var a=e.getBBox(),o={viewBox:a.x-5+","+(a.y-5)+","+(a.width+10)+","+(a.height+10),width:a.width+10,height:a.height+10},i=e.outerHTML,l='<?xml version="1.0" standalone="no"?>',s=document.createElement("div"),c=0;if(r||window.__KEEP_TURTLE_ANIMATIONS__){var d=e.cloneNode(!0),u=d.querySelectorAll("animate"),m=Array.from(u).map((function(e){return(e.id.match(/\d+/)||[])[0]})).filter((function(e){return e})).map((function(e){return Number.parseInt(e)})).sort((function(e,t){return e>t?1:-1}));if(m.length>0){var f=m[m.length-1],p=d.getElementById("animation_frame0");if(p){var y=document.createElement("rect");y.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+f+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',p.parentElement.insertBefore(y,p),p.setAttribute("begin","looper_animation.end"),p.setAttribute("width",""+o.width)}}d.querySelectorAll('animate[attributeName="width"]').forEach((function(e){e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+o.width),e.setAttribute("to",""+o.width)})),d.setAttribute("viewBox",o.viewBox),d.setAttribute("height",""+o.height),d.setAttribute("width",""+o.width),s.innerHTML=l+"\r\n"+d.outerHTML,c=Array.from(d.querySelectorAll("animate")).map(T).reduce((function(e,t){return e+t}),0)}else{var b=B(""+l+i,o);s.innerHTML=b}if(!window.__DISABLE_TURTLE_METADATA__){var h=s.querySelector("svg"),g=document.createElement("metadata"),v=document.createElement("raw");v.innerHTML=n||"",g.appendChild(v),h.appendChild(g)}var _=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),w=URL.createObjectURL(_),E=document.createElement("a");E.href=w,E.download=c>0?t+"__"+(Math.round(10*c)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(E),E.click(),document.body.removeChild(E)},L=n(92814),K=n(51436),M=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey),n=(0,y.oR)("documentStore");return o.createElement(E(),{onStop:S,positionOffset:{x:0,y:"-50%"}},o.createElement("div",{className:u.brythonTurtleResult},o.createElement("div",{className:u.brythonTurtleResultHead},o.createElement("span",null,"Output"),o.createElement("span",{className:u.spacer}),o.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:u.slimStrippedButton,style:{zIndex:1e3},onClick:function(){var e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&k(e,""+t.codeId,t.executedScriptSource,!0)}},o.createElement("span",{"aria-hidden":"true"},o.createElement(L.G,{icon:K.Bxq}))),o.createElement("button",{"aria-label":"Download SVG",type:"button",className:u.slimStrippedButton,style:{zIndex:1e3},onClick:function(){var e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&k(e,""+t.codeId,t.executedScriptSource)}},o.createElement("span",{"aria-hidden":"true"},o.createElement(L.G,{icon:K.q7m}))),o.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:u.slimStrippedButton,onClick:function(){return n.setOpendTurtleModal(void 0)}},o.createElement("span",{"aria-hidden":"true"},o.createElement(L.G,{icon:K.NBC})))),o.createElement("div",{id:f.h5.turtleResult(t.codeId),className:"brython-turtle-result"})))})),A=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey);return 0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((function(e){return e.output})).join(""))?null:o.createElement("div",{className:u.brythonOut},t.logMessages.length>0&&o.createElement("pre",{style:{overflowX:"auto"}},t.logMessages.map((function(e,t){return o.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.output)}))))})),I=n(51417),P=n(68949),D=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore").find(e.webKey);return o.createElement("button",{onClick:function(){return t.execScript(document)},className:(0,m.default)(u.playButton,u.headerButton),title:"Code Ausf\xfchren"},o.createElement(L.G,{icon:t.executing?I.Bmx:K.zc,spin:t.executing}))})),H=(0,p.Pi)((function(e){var t=e.slim,n=e.title,r=e.resettable,a=e.webKey,i=e.lang,l=e.noCompare,s=e.download,c=o.useState(!1),d=c[0],f=c[1],p=(0,y.oR)("documentStore").find(a);if(!p)return null;return o.useEffect((function(){var e,t=(0,P.U5)((function(){return p.saveService.state}),(function(t,n){"save"===n&&"done"===t&&(f(!0),e=setTimeout((function(){f(!1),e=void 0}),1500))}));return function(){e&&clearTimeout(e),t()}}),[p]),o.createElement("div",{className:(0,m.default)(u.brythonCodeBlockHeader,u.brythonCodeBlockHeader,u.controls)},!t&&o.createElement(o.Fragment,null,o.createElement("div",{className:u.title},n),!p.loaded&&o.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&o.createElement("span",{className:(0,m.default)("badge","badge--danger",u.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),o.createElement("div",{className:u.spacer}),o.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&o.createElement(L.G,{icon:K.UO1,style:{color:"#3578e5"},spin:!0}),d&&o.createElement(L.G,{icon:K.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&r&&o.createElement("button",{onClick:function(){r&&(p.readonly?p.setData({code:p.pristine.code}):window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript}))},className:u.headerButton,title:"\xc4nderungen Verwerfen"},o.createElement(L.G,{icon:K.X7o})),s&&!p.showRaw&&o.createElement("button",{className:(0,m.default)(u.headerButton),onClick:function(){var e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);var r="python"===i?".py":"."+i,a=n===i?p.webKey:n,o=a.endsWith(r)?a:""+a+r;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},o.createElement(L.G,{icon:K.q7m})),p.hasEdits&&!l&&o.createElement("button",{className:(0,m.default)(u.showRawButton,u.headerButton,p.showRaw?u.showRawButtonDisabled:void 0),onClick:(0,P.aD)((function(){return p.showRaw=!p.showRaw})),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?o.createElement(L.G,{icon:K.w49}):o.createElement(L.G,{icon:K.rxY}))),"python"===i&&o.createElement(D,{webKey:a}))})),O=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore"),n=t.find(e.webKey);return o.useEffect((function(){return(0,P.U5)((function(){return n.execCounter}),(function(t){"python"===e.lang&&t>0&&(n.clearLogMessages(),window&&window.umami&&window.umami.trackEvent(""+(n.isDummy?"py":n.webKey),"exec-script-"+(n.isDummy?"temp":"persisted")),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))}),[n]),o.createElement(o.Fragment,null,o.createElement(H,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),o.createElement(_,{webKey:e.webKey,lang:e.lang}),"python"===e.lang&&o.createElement("div",{className:(0,m.default)(u.result)},o.createElement(A,{webKey:e.webKey}),t.opendTurtleModalWebKey===n.webKey&&o.createElement(M,{webKey:e.webKey}),o.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),U=(0,p.Pi)((function(e){var t,n,r,a=(0,y.oR)("documentStore").find(e.webKey),i=o.useCallback((function(e){if(e.detail){var t=e.detail;if("done"===t.type)return(0,P.z)((function(){return a.executing=!1}));a.addLogMessage(t)}}),[a]),l=(t=function(e){e.addEventListener(f.jS,i)},n=function(e){e.removeEventListener(f.jS,i)},r=o.useRef(null),o.useCallback((function(e){r.current&&n(r.current),r.current=e,r.current&&t(r.current)}),[t,n]));return o.createElement("div",{id:f.h5.component(a.codeId),ref:l})})),Z=n(47271),V=n(72389),G=n(74322),j=n(80102),z=n(4817),W=n.n(z),q=n(87410),F=n(12624),$=n(40922),Y=["value","dragging","index"],J=function(e){if(e)return o.createElement("span",{dangerouslySetInnerHTML:{__html:q.Z.highlight(e,q.Z.languages.python,"python")}})},X=function(e){var t=e.value,n=e.dragging,a=e.index,i=(0,j.Z)(e,Y);return o.createElement($.Rl,{prefixCls:"rc-slider-tooltip",overlay:"V"+t,visible:n,placement:"top",key:a},o.createElement($.HH,(0,r.Z)({value:t},i)))},Q=(0,p.Pi)((function(e){var t,n=(0,y.oR)("documentStore"),r=(0,y.oR)("userStore"),a=n.find(e.webKey),i=o.useState(1),l=i[0],s=i[1],c=o.useState(!1),d=c[0],f=c[1];return o.useEffect((function(){return(0,P.U5)((function(){var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(function(t){var r;t&&t>0&&(s(1),d&&(null==(r=n.find(e.webKey))||r.loadVersions()))}))}),[]),a.versioned?o.createElement("div",{className:(0,m.default)(u.codeHistory)},o.createElement("details",{open:d,onClick:function(e){e.preventDefault(),e.stopPropagation(),d||a.loadVersions(),f(!d)},className:(0,m.default)("alert alert--info",u.historyDetails)},o.createElement("summary",null,o.createElement("span",{className:"badge badge--secondary"},a.versionsLoaded?a.versions.length+" Versions":"Load Versions"),o.createElement(L.G,{className:(0,m.default)(u.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:K.UO1,onClick:function(e){e.preventDefault(),e.stopPropagation(),a.loadVersions()}})),o.createElement("div",{className:(0,m.default)(u.content),onClick:function(e){e.preventDefault(),e.stopPropagation()}},o.createElement("div",{className:(0,m.default)(u.versionControl)},o.createElement(F.Z,{value:l,handle:X,onChange:function(e){s(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50})),o.createElement("div",{className:(0,m.default)(u.diffViewer)},a.versions.length>1&&o.createElement(W(),{leftTitle:a.versions[l-1].version,rightTitle:o.createElement("div",null,a.versions[l].version,a.versions[l].pasted&&(null==(t=r.current)?void 0:t.admin)&&o.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:a.versions[l-1].data.code,newValue:a.versions[l].data.code,renderContent:J}))))):null})),ee=(0,p.Pi)((function(e){var t=(0,y.oR)("documentStore");(0,y.ky)((function(){return function(e){var t=(e.code||"").trim();return t.length>0&&(t+=" "),{code:t}}(e)}),"code",e.webKey,!e.slim,e.readonly,e.versioned);var n=t.find(e.webKey);return(0,V.Z)()?n?o.createElement("div",{className:(0,m.default)(u.wrapper)},!e.slim&&o.createElement(Z.Z,null),o.createElement("div",{className:(0,m.default)(u.playgroundContainer,e.slim?u.containerSlim:u.containerBig,"live_py")},"python"===e.lang&&o.createElement(U,{webKey:e.webKey}),o.createElement(O,e),o.createElement(Q,{webKey:e.webKey}))):o.createElement(G.Z,null):o.createElement("div",null,"SSR")})),te=n(25934),ne=n(83911),re="playgroundWrapper_ADS_",ae="playgroundContainer_J_zN";function oe(e){return o.createElement("div",{className:re},o.createElement("div",{className:ae},o.createElement(ne.Z,e)))}var ie=n(38985);var le,se={},ce=function(e,t){var n=function(){try{return c(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();se[n]||(se[n]={});var r=d(t);return se[n][r]||(se[n][r]=Object.keys(se[n]).length+1),e?c(e):""+se[n][r]},de=(le=i.Z,function(e){var t,n,i,c=(e.className||"").match((0,a.Z)(/language\x2D(\w*)/,{lang:1})),d=null!=(t=null==c||null==(n=c.groups)||null==(i=n.lang)?void 0:i.toLocaleLowerCase())?t:"";if("py"===d&&(d="python"),e.live_jsx)return o.createElement(oe,(0,r.Z)({scope:ie.Z},e));if(e.live_py&&l.Z.canUseDOM){if(!e.id&&!e.slim)return o.createElement(le,e);var u=e.children.replace(/\n$/,""),m=ce(e.title,u),f=o.useState(e.id||(0,te.Z)())[0];return o.createElement(ee,(0,r.Z)({},e,{webKey:f,code:u,codeId:m,readonly:!!e.readonly,lang:d,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,versioned:!!e.versioned,noCompare:!!e.noCompare,title:s(e.title)||d}))}return o.createElement(le,e)})},63818:function(e){e.exports="from browser import document, window\nimport re\nimport sys\nimport time\n\nhas_turtle_import = False\nlog_line_number_shift = 0\n\ndef notify(node_id, data):\n    event = window.CustomEvent.new('bry_notify', {'detail': data})\n    document[f'py_{node_id}'].dispatchEvent(event)\n\nclass EventOutput:\n    encoding = 'utf-8'\n\n    def __init__(self, node_id, out_type):\n        self.node_id = node_id\n        self.out_type = out_type\n        self.buf = ''\n\n    def write(self, data):\n        self.buf += str(data)\n        self.flush()\n\n    def flush(self):\n        if len(self.buf) > 0:\n            notify(self.node_id, {'type': self.out_type, 'output': self.buf})\n        self.buf = ''\n\n    def __len__(self):\n        return len(self.buf)\n\nclass Trace:\n    def __init__(self):\n        self.buf = \"\"\n\n    def write(self, *data):\n        self.buf += \" \".join([str(x) for x in data])\n\n    def format(self):\n        \"\"\"Remove calls to function in this script from the traceback.\"\"\"\n        return self.buf\n\ndef syntax_error(args):\n    trace = Trace()\n    info, [filename, lineno, offset, line] = args\n    line_nr = lineno - log_line_number_shift if lineno > 0 else 0\n\n    trace.write(f\"  File {filename}, line {line_nr}\\n\")\n    trace.write(\"    \" + line + \"\\n\")\n    trace.write(\"    \" + offset * \" \" + \"^\\n\")\n    trace.write(\"SyntaxError:\", info, \"\\n\")\n    return trace.buf\n\ndef format_exc():\n    trace = Trace()\n    exc_info = sys.exc_info()\n    exc_class = exc_info[0].__name__\n    exc_msg = str(exc_info[1])\n    tb = exc_info[2].tb_next\n    if exc_info[0] is SyntaxError:\n        return syntax_error(exc_info[1].args)\n    trace.write(\"Traceback (most recent call last):\\n\")\n    while tb is not None:\n        frame = tb.tb_frame\n        code = frame.f_code\n        name = code.co_name\n        filename = code.co_filename\n        line_nr = tb.tb_lineno - log_line_number_shift if tb.tb_lineno > 0 else 0\n        trace.write(f\"  File {filename}, line {line_nr}, in {name}\\n\")\n        if not filename.startswith(\"<\"):\n            trace.write(f\"    {tb.tb_lasti}\\n\")\n        tb = tb.tb_next\n    trace.write(f\"{exc_class}: {exc_msg}\\n\")\n    return trace.format()\n\ndef print_exc(file=None):\n    if file is None:\n        file = sys.stderr\n    trace = format_exc()\n    file.write(trace)\n    return trace\n\nTURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)', re.M)\nTURTLE_TEMPLATE = '''from browser import document\nimport turtle\nturtle.restart()\nturtle.set_defaults(\n  turtle_canvas_wrapper = document['{node_id}_turtle_result'],\n  turtle_canvas_id = '{node_id}_svg'\n)\n{py_script}\nturtle.done()\n'''\n\n\ndef run(code, node_id):\n    global has_turtle_import, log_line_number_shift\n    has_turtle_import = len(TURTLE_IMPORTS.findall(code)) > 0\n    log_line_number_shift = 7 if has_turtle_import else 0\n    py_script = TURTLE_TEMPLATE.format(node_id=node_id, py_script=code) if has_turtle_import else code\n\n    sys.stdout = EventOutput(node_id, 'stdout')\n    sys.stderr = EventOutput(node_id, 'stderr')\n    notify(node_id, {'type': 'start', 'time': time.time()})\n    try:\n        res_div = f'{node_id}_brython_result'\n        document[res_div].clear()\n        ns = {'__name__': node_id, 'RESULT_DIV': document[res_div]}\n        loc = {}\n        exec(py_script, ns, loc)\n        # if len(code.splitlines()) < 10:\n        #    print('  --', '\\n'.join([f'{x}: {loc[x]}' for x in loc.keys() if not x.startswith('__')]))\n    except Exception as exc:\n        print_exc(file=sys.stderr)\n    finally:\n        notify(node_id, {'type': 'done', 'time': time.time()})\n    \n    sys.stdout.flush()\n    sys.stderr.flush()\n"}}]);