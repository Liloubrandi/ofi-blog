"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[29514],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_2rVr",o="badge_2s0E",l=n(71217),c=n(92814),s=n(51436),u=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",o)},"Laden..."))}))},76437:function(e,t,n){n.d(t,{Z:function(){return oe}});var r=n(83117),a=n(67294),i=n(19055),o=n(10412),l=n(46858),c=function(e,t){void 0===t&&(t=0);for(var n,r=3735928559^t,a=1103547991^t,i=0;i<e.length;i++)n=e.charCodeAt(i),r=Math.imul(r^n,2654435761),a=Math.imul(a^n,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),((a=Math.imul(a^a>>>16,2246822507)^Math.imul(r^r>>>13,3266489909))>>>0).toString(16).padStart(8,"0")+(r>>>0).toString(16).padStart(8,"0")},s={wrapper:"wrapper_iPLC",containerBig:"containerBig_q1Yw",controls:"controls_3oPq",editor:"editor_2kyI",result:"result_1ZnG",containerSlim:"containerSlim_1fGY",playgroundContainer:"playgroundContainer_2rG1",brythonCodeBlock:"brythonCodeBlock_1SNe",brythonTurtleResult:"brythonTurtleResult_fj4X",brythonTurtleResultHead:"brythonTurtleResultHead_1CmA",slimStrippedButton:"slimStrippedButton_udr7",brythonEditor:"brythonEditor_3N-q",brythonOut:"brythonOut_U3EG",brythonCodeBlockHeader:"brythonCodeBlockHeader_1uie",spacer:"spacer_1YoZ",playgroundHeader:"playgroundHeader_3hdU",badge:"badge_2ZL9",playButton:"playButton_2RVN",headerButton:"headerButton_kZrP",title:"title_1byT",showRawButton:"showRawButton_GrCU",showRawButtonDisabled:"showRawButtonDisabled_2t4t",codeHistory:"codeHistory_2ycS",historyDetails:"historyDetails_2snP",versionControl:"versionControl_N5qa",faButton:"faButton_28_E",diffViewer:"diffViewer_3twf"},u=n(86010),d=n(23950),m=n(71217),f=n(21314),p=n(80106),y=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return a.createElement("script",{id:d.h5.scriptSource(t.codeId),type:"text/py_disabled",className:"brython-script"},p+'\nrun("""'+(0,l.ly)(t.code||"")+'""", \''+t.codeId+"')")})),b=void 0,v=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return a.createElement("pre",null,a.createElement("code",null,t.data.code))})),h=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),r=a.useState(!1),i=r[0],o=r[1];a.useEffect((function(){var e=!0;return function(e){if(b)return e();n.e(74981).then(n.bind(n,74981)).then((function(t){return Promise.all([n.e(56604).then(n.t.bind(n,56604,23)),n.e(4007).then(n.t.bind(n,4007,23)),n.e(57787).then(n.t.bind(n,57787,23)),n.e(82679).then(n.t.bind(n,82679,23))]).then((function(n){b=t.default,e()}))}))}((function(){e&&o(!0)})),function(){e=!1}}),[]);var l=a.useCallback((function(e){return null!==e&&e.editor&&(e.editor.commands.addCommand({name:"execute",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:function(){return t.execScript(document)}}),e.editor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-s",mac:"Command-s"},exec:function(){t.saveService.saveNow()}})),function(){if(e&&e.editor){var t=e.editor.commands.commands.execute;t&&e.editor.commands.removeCommand(t,!0);var n=e.editor.commands.commands.save;n&&e.editor.commands.removeCommand(n,!0)}}}),[t]);return a.createElement("div",{className:(0,u.default)(s.brythonCodeBlock,s.editor)},i?a.createElement(b,{className:s.brythonEditor,style:{width:"100%"},onPaste:function(e){t.versioned&&(t.setPastedEdit(!0),t.saveService.saveNow())},maxLines:25,ref:l,mode:"python",theme:"dracula",keyBindings:"VSCode",onChange:function(e){t.setData({code:e})},readOnly:t.showRaw||!t.loaded,value:t.showRaw?t.rawScript:t.data.code,defaultValue:t.code,name:d.h5.aceEditor(t.codeId),editorProps:{$blockScrolling:!0},setOptions:{displayIndentGuides:!0,vScrollBarAlwaysVisible:!1,highlightGutterLine:!1},showPrintMargin:!1,highlightActiveLine:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!1,enableSnippets:!1,showGutter:!0}):a.createElement(v,{webKey:e.webKey}),a.createElement(y,{webKey:e.webKey}))})),g=n(61193),_=n.n(g),w=function(e){if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((function(){return t.click()}),1)}}},E=n(61212),S=function(e){return Object.entries(e||{}).map((function(e){return e[0]+'="'+e[1]+'"'})).join(" ")},N=function e(t,n){"root"===t.type?t.children.forEach((function(t){e(t,n)})):"element"===t.type&&"svg"===t.tagName&&"properties"in t&&(t.properties=Object.assign({},t.properties,n))},x=function e(t){var n=[],r=t.properties,a=t.tagName,i=t.type,o=t.children;switch("root"===i&&o.forEach((function(t){n.push.apply(n,e(t))})),a){case"svg":t.metadata&&n.push(t.metadata),n.push("<svg "+S(r)+">"),o.forEach((function(t){n.push.apply(n,e(t))})),n.push("</svg>");break;case"rect":o.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to}})),n.push("<rect "+S(r)+"></rect>");break;case"g":if(0===(o||[]).length)return n;n.push("<g "+S(r)+">"),o.forEach((function(t){n.push.apply(n,e(t))})),n.push("</g>");break;case"line":o.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;r[t.attributeName]=t.to}})),n.push("<line "+S(r)+"></line>");break;case"circle":o.forEach((function(e){if(["animate","set"].includes(e.tagName)&&e.properties){var t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),r.style&&/\s*display:\s*none;\s*/.test(r.style)&&(r.style=r.style.replace(/\s*display:\s*none;\s*/g,"")),n.push("<circle "+S(r)+"></circle>");break;case"text":var l="";o.forEach((function(e){switch(e.type){case"text":l=e.value;break;case"element":var t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to}})),n.push("<text "+S(r)+">"+l+"</text>");break;case"polygon":var c="0,0,0",s="0,0";o.forEach((function(e){var t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(r.style=r.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),r[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(c=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),n.push("<polygon "+S(r)+' transform="translate('+s+") rotate("+c+')"></polygon>')}return n},C=function(e,t){var n=(0,E.Q)(e);return t&&N(n,t),x(n).join("\n")},R=function(e){var t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},k=function(e,t,n,r){e.setAttribute("xmlns","http://www.w3.org/2000/svg");var a=e.getBBox(),i={viewBox:a.x-5+","+(a.y-5)+","+(a.width+10)+","+(a.height+10),width:a.width+10,height:a.height+10},o=e.outerHTML,l='<?xml version="1.0" standalone="no"?>',c=document.createElement("div"),s=0;if(r||window.__KEEP_TURTLE_ANIMATIONS__){var u=e.cloneNode(!0),d=u.querySelectorAll("animate"),m=Array.from(d).map((function(e){return(e.id.match(/\d+/)||[])[0]})).filter((function(e){return e})).map((function(e){return Number.parseInt(e)})).sort((function(e,t){return e>t?1:-1}));if(m.length>0){var f=m[m.length-1],p=u.getElementById("animation_frame0");if(p){var y=document.createElement("rect");y.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+f+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',p.parentElement.insertBefore(y,p),p.setAttribute("begin","looper_animation.end"),p.setAttribute("width",""+i.width)}}u.querySelectorAll('animate[attributeName="width"]').forEach((function(e){e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+i.width),e.setAttribute("to",""+i.width)})),u.setAttribute("viewBox",i.viewBox),u.setAttribute("height",""+i.height),u.setAttribute("width",""+i.width),c.innerHTML=l+"\r\n"+u.outerHTML,s=Array.from(u.querySelectorAll("animate")).map(R).reduce((function(e,t){return e+t}),0)}else{var b=C(""+l+o,i);c.innerHTML=b}if(!window.__DISABLE_TURTLE_METADATA__){var v=c.querySelector("svg"),h=document.createElement("metadata"),g=document.createElement("raw");g.innerHTML=n||"",h.appendChild(g),v.appendChild(h)}var _=new Blob([c.innerHTML],{type:"image/svg+xml;charset=utf-8"}),w=URL.createObjectURL(_),E=document.createElement("a");E.href=w,E.download=s>0?t+"__"+(Math.round(10*s)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(E),E.click(),document.body.removeChild(E)},T=n(92814),B=n(51436),I=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=(0,f.oR)("documentStore");return a.createElement(_(),{onStop:w,positionOffset:{x:0,y:"-50%"}},a.createElement("div",{className:s.brythonTurtleResult},a.createElement("div",{className:s.brythonTurtleResultHead},a.createElement("span",null,"Output"),a.createElement("span",{className:s.spacer}),a.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:s.slimStrippedButton,style:{zIndex:1e3},onClick:function(){var e=document.getElementById(d.h5.turtleSvgContainer(t.codeId));e&&k(e,""+t.codeId,t.executedScriptSource,!0)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(T.G,{icon:B.Bxq}))),a.createElement("button",{"aria-label":"Download SVG",type:"button",className:s.slimStrippedButton,style:{zIndex:1e3},onClick:function(){var e=document.getElementById(d.h5.turtleSvgContainer(t.codeId));e&&k(e,""+t.codeId,t.executedScriptSource)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(T.G,{icon:B.q7m}))),a.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:s.slimStrippedButton,onClick:function(){return n.setOpendTurtleModal(void 0)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(T.G,{icon:B.NBC})))),a.createElement("div",{id:d.h5.turtleResult(t.codeId),className:"brython-turtle-result"})))})),L=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return 0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((function(e){return e.output})).join(""))?null:a.createElement("div",{className:s.brythonOut},t.logMessages.length>0&&a.createElement("pre",{style:{overflowX:"auto"}},t.logMessages.map((function(e,t){return a.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.output)}))))})),K=n(51417),A=n(68949),D=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return a.createElement("button",{onClick:function(){return t.execScript(document)},className:(0,u.default)(s.playButton,s.headerButton),title:"Code Ausf\xfchren"},a.createElement(T.G,{icon:t.executing?K.Bmx:B.zc,spin:t.executing}))})),P=(0,m.Pi)((function(e){var t=e.slim,n=e.title,r=e.resettable,i=e.webKey,o=a.useState(!1),l=o[0],c=o[1],d=(0,f.oR)("documentStore").find(i);if(!d)return null;return a.useEffect((function(){var e,t=(0,A.U5)((function(){return d.saveService.state}),(function(t,n){"save"===n&&"done"===t&&(c(!0),e=setTimeout((function(){c(!1),e=void 0}),1500))}));return function(){e&&clearTimeout(e),t()}}),[d]),a.createElement("div",{className:(0,u.default)(s.brythonCodeBlockHeader,s.brythonCodeBlockHeader,s.controls)},!t&&a.createElement(a.Fragment,null,a.createElement("div",{className:s.title},n),!d.loaded&&a.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),d.saveService.isOffline&&a.createElement("span",{className:(0,u.default)("badge","badge--danger",s.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),a.createElement("div",{className:s.spacer}),a.createElement("span",{style:{minWidth:"1em"}},"save"===d.saveService.state&&a.createElement(T.G,{icon:B.UO1,style:{color:"#3578e5"},spin:!0}),l&&a.createElement(T.G,{icon:B.f8k,style:{color:"var(--ifm-color-success)"}})),d.hasEdits&&!d.showRaw&&r&&a.createElement("button",{onClick:function(){r&&(d.readonly?d.setData({code:d.pristine.code}):window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&d.setData({code:d.rawScript}))},className:s.headerButton,title:"\xc4nderungen Verwerfen"},a.createElement(T.G,{icon:B.X7o})),d.hasEdits&&a.createElement("button",{className:(0,u.default)(s.showRawButton,s.headerButton,d.showRaw?s.showRawButtonDisabled:void 0),onClick:(0,A.aD)((function(){return d.showRaw=!d.showRaw})),title:d.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},d.showRaw?a.createElement(T.G,{icon:B.w49}):a.createElement(T.G,{icon:B.rxY}))),a.createElement(D,{webKey:i}))})),M=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=t.find(e.webKey);return a.useEffect((function(){return(0,A.U5)((function(){return n.execCounter}),(function(e){e>0&&(n.clearLogMessages(),window&&window.umami&&window.umami.trackEvent(""+(n.isDummy?"py":n.webKey),"exec-script-"+(n.isDummy?"temp":"persisted")),window.brython(1,{ids:[d.h5.scriptSource(n.codeId)]}))}))}),[n]),a.createElement(a.Fragment,null,a.createElement(P,{slim:e.slim,title:e.title,resettable:e.resettable,webKey:e.webKey}),a.createElement(h,{webKey:e.webKey}),a.createElement("div",{className:(0,u.default)(s.result)},a.createElement(L,{webKey:e.webKey}),t.opendTurtleModalWebKey===n.webKey&&a.createElement(I,{webKey:e.webKey}),a.createElement("div",{id:d.h5.outputDiv(n.codeId)})))})),O=(0,m.Pi)((function(e){var t,n,r,i=(0,f.oR)("documentStore").find(e.webKey),o=a.useCallback((function(e){if(e.detail){var t=e.detail;if("done"===t.type)return(0,A.z)((function(){return i.executing=!1}));i.addLogMessage(t)}}),[i]),l=(t=function(e){e.addEventListener(d.jS,o)},n=function(e){e.removeEventListener(d.jS,o)},r=a.useRef(null),a.useCallback((function(e){r.current&&n(r.current),r.current=e,r.current&&t(r.current)}),[t,n]));return a.createElement("div",{id:d.h5.component(i.codeId),ref:l})})),V=n(3239),H=n(78982),G=function(e,t){"code"===t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,A.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,A.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},U=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("pre",null,a.createElement("code",null,t.legacyData.code)),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return G("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return G("use_current",t)}},"Nein (verwerfen)"))):null})),Z=n(72389),j=n(74322),q=n(80102),z=n(4817),F=n.n(z),J=n(87410),Y=n(12624),$=n(32046),W=["value","dragging","index"],X=function(e){if(e)return a.createElement("span",{dangerouslySetInnerHTML:{__html:J.default.highlight(e,J.default.languages.python,"python")}})},Q=function(e){var t=e.value,n=e.dragging,i=e.index,o=(0,q.Z)(e,W);return a.createElement($.Rl,{prefixCls:"rc-slider-tooltip",overlay:"V"+t,visible:n,placement:"top",key:i},a.createElement($.HH,(0,r.Z)({value:t},o)))},ee=(0,m.Pi)((function(e){var t,n=(0,f.oR)("documentStore"),r=(0,f.oR)("userStore"),i=n.find(e.webKey),o=a.useState(1),l=o[0],c=o[1],d=a.useState(!1),m=d[0],p=d[1];return a.useEffect((function(){return(0,A.U5)((function(){var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(function(t){var r;t&&t>0&&(c(1),m&&(null==(r=n.find(e.webKey))||r.loadVersions()))}))}),[]),i.versioned?a.createElement("div",{className:(0,u.default)(s.codeHistory)},a.createElement("details",{open:m,onClick:function(e){e.preventDefault(),e.stopPropagation(),m||i.loadVersions(),p(!m)},className:(0,u.default)("alert alert--info",s.historyDetails)},a.createElement("summary",null,a.createElement("span",{className:"badge badge--secondary"},i.versionsLoaded?i.versions.length+" Versions":"Load Versions"),a.createElement(T.G,{className:(0,u.default)(s.faButton),color:"var(--ifm-color-primary)",spin:"loading"===i.versionsLoaded,icon:B.UO1,onClick:function(e){e.preventDefault(),e.stopPropagation(),i.loadVersions()}})),a.createElement("div",{className:(0,u.default)(s.content),onClick:function(e){e.preventDefault(),e.stopPropagation()}},a.createElement("div",{className:(0,u.default)(s.versionControl)},a.createElement(Y.Z,{value:l,handle:Q,onChange:function(e){c(e)},min:1,max:i.versions.length-1,dots:i.versions.length<50})),a.createElement("div",{className:(0,u.default)(s.diffViewer)},i.versions.length>1&&a.createElement(F(),{leftTitle:i.versions[l-1].version,rightTitle:a.createElement("div",null,i.versions[l].version,i.versions[l].pasted&&(null==(t=r.current)?void 0:t.admin)&&a.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:i.versions[l-1].data.code,newValue:i.versions[l].data.code,renderContent:X}))))):null})),te=(0,m.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore");(0,f.ky)((function(){return function(e){var t=(e.code||"").trim();return t.length>0&&(t+=" "),{code:t}}(e)}),"code",e.webKey,!e.slim,function(e){if(e.slim)return function(){};var t=(0,H.rV)(e.codeId,e.contextId);return t&&t.edited?function(){return{data:{code:t.edited},cleanup:function(){return(0,H.cl)(e.codeId,e.contextId)}}}:function(){}}(e),e.readonly,e.versioned);var r=t.find(e.webKey);return(0,Z.Z)()?r?a.createElement("div",{className:(0,u.default)(s.wrapper)},!e.slim&&a.createElement(V.Z,null),n.loggedIn&&!e.slim&&a.createElement(U,{webKey:e.webKey}),a.createElement("div",{className:(0,u.default)(s.playgroundContainer,e.slim?s.containerSlim:s.containerBig,"live_py")},a.createElement(O,{webKey:e.webKey}),a.createElement(M,e),a.createElement(ee,{webKey:e.webKey}))):a.createElement(j.Z,null):a.createElement("div",null,"SSR")})),ne=n(25934);function re(){try{return(0,l.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}var ae,ie={},oe=(ae=i.Z,function(e){if(e.live_py&&o.Z.canUseDOM){if(!e.id&&!e.slim)return a.createElement(ae,e);var t=re(),n=e.children.replace(/\n$/,""),i=function(e,t){var n=re();ie[n]||(ie[n]={});var r=c(t);return ie[n][r]||(ie[n][r]=Object.keys(ie[n]).length+1),e?(0,l.Vx)(e):""+ie[n][r]}(e.title,n),s=a.useState(e.id||(0,ne.Z)())[0];return a.createElement(te,(0,r.Z)({},e,{webKey:s,code:n,codeId:i,readonly:!!e.readonly,contextId:t,resettable:!e.persist,slim:!!e.slim,versioned:!!e.versioned,title:(0,l.Vj)(e.title)||"Python"}))}return a.createElement(ae,e)})},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(s){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},80106:function(e){e.exports="from browser import document, window\nimport re\nimport sys\nimport time\n\nhas_turtle_import = False\nlog_line_number_shift = 0\n\ndef notify(node_id, data):\n    event = window.CustomEvent.new('bry_notify', {'detail': data})\n    document[f'py_{node_id}'].dispatchEvent(event)\n\nclass EventOutput:\n    encoding = 'utf-8'\n\n    def __init__(self, node_id, out_type):\n        self.node_id = node_id\n        self.out_type = out_type\n        self.buf = ''\n\n    def write(self, data):\n        self.buf += str(data)\n        self.flush()\n\n    def flush(self):\n        if len(self.buf) > 0:\n            notify(self.node_id, {'type': self.out_type, 'output': self.buf})\n        self.buf = ''\n\n    def __len__(self):\n        return len(self.buf)\n\nclass Trace:\n    def __init__(self):\n        self.buf = \"\"\n\n    def write(self, *data):\n        self.buf += \" \".join([str(x) for x in data])\n\n    def format(self):\n        \"\"\"Remove calls to function in this script from the traceback.\"\"\"\n        return self.buf\n\ndef syntax_error(args):\n    trace = Trace()\n    info, [filename, lineno, offset, line] = args\n    line_nr = lineno - log_line_number_shift if lineno > 0 else 0\n\n    trace.write(f\"  File {filename}, line {line_nr}\\n\")\n    trace.write(\"    \" + line + \"\\n\")\n    trace.write(\"    \" + offset * \" \" + \"^\\n\")\n    trace.write(\"SyntaxError:\", info, \"\\n\")\n    return trace.buf\n\ndef format_exc():\n    trace = Trace()\n    exc_info = sys.exc_info()\n    exc_class = exc_info[0].__name__\n    exc_msg = str(exc_info[1])\n    tb = exc_info[2].tb_next\n    if exc_info[0] is SyntaxError:\n        return syntax_error(exc_info[1].args)\n    trace.write(\"Traceback (most recent call last):\\n\")\n    while tb is not None:\n        frame = tb.tb_frame\n        code = frame.f_code\n        name = code.co_name\n        filename = code.co_filename\n        line_nr = tb.tb_lineno - log_line_number_shift if tb.tb_lineno > 0 else 0\n        trace.write(f\"  File {filename}, line {line_nr}, in {name}\\n\")\n        if not filename.startswith(\"<\"):\n            trace.write(f\"    {tb.tb_lasti}\\n\")\n        tb = tb.tb_next\n    trace.write(f\"{exc_class}: {exc_msg}\\n\")\n    return trace.format()\n\ndef print_exc(file=None):\n    if file is None:\n        file = sys.stderr\n    trace = format_exc()\n    file.write(trace)\n    return trace\n\nTURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)', re.M)\nTURTLE_TEMPLATE = '''from browser import document\nimport turtle\nturtle.restart()\nturtle.set_defaults(\n  turtle_canvas_wrapper = document['{node_id}_turtle_result'],\n  turtle_canvas_id = '{node_id}_svg'\n)\n{py_script}\nturtle.done()\n'''\n\n\ndef run(code, node_id):\n    global has_turtle_import, log_line_number_shift\n    has_turtle_import = len(TURTLE_IMPORTS.findall(code)) > 0\n    log_line_number_shift = 7 if has_turtle_import else 0\n    py_script = TURTLE_TEMPLATE.format(node_id=node_id, py_script=code) if has_turtle_import else code\n\n    sys.stdout = EventOutput(node_id, 'stdout')\n    sys.stderr = EventOutput(node_id, 'stderr')\n    notify(node_id, {'type': 'start', 'time': time.time()})\n    try:\n        res_div = f'{node_id}_brython_result'\n        document[res_div].clear()\n        ns = {'__name__': node_id, 'RESULT_DIV': document[res_div]}\n        loc = {}\n        exec(py_script, ns, loc)\n        # if len(code.splitlines()) < 10:\n        #    print('  --', '\\n'.join([f'{x}: {loc[x]}' for x in loc.keys() if not x.startswith('__')]))\n    except Exception as exc:\n        print_exc(file=sys.stderr)\n    finally:\n        notify(node_id, {'type': 'done', 'time': time.time()})\n    \n    sys.stdout.flush()\n    sys.stderr.flush()\n"}}]);