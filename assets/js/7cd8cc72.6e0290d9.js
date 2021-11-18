"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3247],{3239:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(67294),a="noLoginAlert_boZc",r=i(73727),l=i(71217),o=i(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:a},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.rU,{to:"/login"},"Login"))}))},21314:function(e,t,i){i.d(t,{oR:function(){return l},ky:function(){return o},RN:function(){return c}});var n=i(68949),a=i(67294),r=i(16731),l=function(e){return a.useContext(r.Nx)[e]},o=function(e,t,i,l,o,c){var s=a.useState(!1),u=s[0],d=s[1];a.useEffect((function(){r.Ux.documentStore.provideDocument(e(),t,i,l,o,c).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,n.U5)((function(){return r.Ux.userStore.currentView}),(function(n){u&&n&&r.Ux.documentStore.provideDocument(e(),t,i,l,o,c,!0)}))}),[u]),a.useEffect((function(){return(0,n.U5)((function(){return r.Ux.msalStore.isApiOffline}),(function(n){u&&!n&&r.Ux.documentStore.provideDocument(e(),t,i,l,o,c,!0)}))}),[u])},c=function(e){var t=a.useState(!1),i=t[0],l=t[1];console.log("initial load"),a.useEffect((function(){r.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),a.useEffect((function(){return(0,n.U5)((function(){return r.Ux.userStore.currentView}),(function(t,n){i&&t&&(console.log("load from view"),r.Ux.timedTopicStore.provideTopic(e,!0))}))}),[i]),a.useEffect((function(){return(0,n.U5)((function(){return r.Ux.msalStore.isApiOffline}),(function(t,n){i&&!t&&n&&(console.log("load from offlineChecker"),r.Ux.timedTopicStore.provideTopic(e,!0))}))}),[i])}},47502:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return h},default:function(){return _},frontMatter:function(){return w},metadata:function(){return T},toc:function(){return K}});var n=i(87462),a=i(63366),r=i(67294),l=i(3905),o=i(72389),c=i(86010),s=i(71217),u=i(21314),d=i(3239),m=i(68949),f={exercise:"exercise_2JKe",base:"base_xr4Z",time:"time_3S6I",controls:"controls_a9qo",faButton:"faButton_1qcZ",labels:"labels_Ckyo",icon:"icon_H_kV",timeSpan:"timeSpan_KVl-",active:"active_lieS",timeText:"timeText_3EUu"},p=i(92814),v=i(51436),b=(0,s.Pi)((function(e){var t=e.timeSpan;if(1===t.exercise.timeSpans.length)return null;var i,n,a=t.timeSpentBefore,l=t.duration,o=t.timeSpentAfter;if(t.exercise.isRunning){var s=6e4-t.exercise.duration%6e4;o+=s,t.isRunning&&(l+=s,o=0)}return t?r.createElement("div",{className:(0,c.default)(f.timeSpan)},r.createElement("div",{className:(0,c.default)(f.spacer),style:{flexGrow:a}}),r.createElement("div",{className:(0,c.default)(f.time,t.isRunning&&f.active),style:{flexGrow:l}},r.createElement("div",{className:(0,c.default)(f.timeText)},(i=t.duration,(n=new Date(i).toISOString().slice(11,-5)).startsWith("00:00")?n.slice(6).replace(/^0+/,"")+"s":n.startsWith("00")?n.slice(3).replace(/^0+/,"")+"m":n.replace(/^0+/,"")+"h"))),r.createElement("div",{className:(0,c.default)(f.spacer),style:{flexGrow:o}})):void 0})),g={solved:v.f8k,fail:v.nYk,important:v.eHv,question:v.sph},k={solved:"var(--ifm-color-success)",fail:"var(--ifm-color-danger)",important:"var(--ifm-color-warning)",question:"var(--ifm-color-info)"},E=(0,s.Pi)((function(e){var t,i,n,a,l,o,s=r.useState(!1),u=s[0],d=s[1],E=e.exercise;return r.createElement("div",{className:(0,c.default)(f.exercise)},r.createElement("div",{className:(0,c.default)(f.base)},r.createElement("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",value:E.name,onChange:(0,m.aD)((function(e){return E.name=e.target.value})),placeholder:"Aufgabe"}),r.createElement("span",{className:(0,c.default)("badge","badge--secondary",f.time),onClick:function(){return d(!u)}},(n=E.lastEdited,a=n.toISOString().slice(0,10).split("-"),l=a[0],o=a[1],a[2]+"."+o+"."+l)),r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{className:(0,c.default)(f.controls)},E.isRunning?r.createElement(p.G,{className:(0,c.default)(f.faButton),color:"var(--ifm-color-primary)",icon:v.Bg$,onClick:function(){return E.stop()}}):r.createElement(p.G,{className:(0,c.default)(f.faButton),color:"var(--ifm-color-success)",icon:v.zc,onClick:function(){return E.start()}}),r.createElement("span",{className:(0,c.default)("badge","badge--secondary",f.time),onClick:function(){return d(!u)}},(t=E.duration||0,(i=new Date(t).toISOString().slice(11,-5)).startsWith("00")?i.slice(3)+" m":i+" h"))),r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{className:(0,c.default)(f.labels)},["solved","fail","important","question"].map((function(e,t){var i=E.labels.includes(e);return r.createElement(p.G,{key:t,className:(0,c.default)(f.icon),color:i?k[e]:"gray",icon:g[e],onClick:function(){return E.toggleLabel(e)}})}))),r.createElement("div",{style:{flexGrow:1}}),r.createElement(p.G,{className:(0,c.default)(f.faButton),color:"red",icon:v.$aW,onClick:function(){confirm("Wirklich L\xf6schen?")&&E.delete()}})),u&&r.createElement("div",{className:(0,c.default)(f.details)},E.timeSpans.map((function(e,t){return r.createElement(b,{timeSpan:e,key:t})}))))})),x=(0,s.Pi)((function(e){var t=(0,u.oR)("timedTopicStore").find(e.webKey);return r.createElement("div",null,r.createElement("div",{className:(0,c.default)(f.exercises)},t.exercises.map((function(e,t){return r.createElement(E,{exercise:e,key:t})})),r.createElement("button",{className:(0,c.default)("button","button--sm","button--primary"),onClick:(0,m.aD)((function(){t.addExercise()}))},"+")))})),S=(0,s.Pi)((function(e){var t=(0,u.oR)("timedTopicStore");return(0,u.RN)(e.webKey),(0,o.Z)()?t.find(e.webKey)?r.createElement("div",null,r.createElement(d.Z,null),r.createElement("div",{className:(0,c.default)(f.TimedExercisesContainer)},r.createElement(x,{webKey:e.webKey}))):r.createElement("div",null,"Loading"):r.createElement("div",null,"SSR")})),y=["components"],w={title:"Algebra 1",sidebar_label:"Algebra 1",sidebar_position:2},h="Algebra 1",T={unversionedId:"algebra1",id:"version-24w/algebra1",isDocsHomePage:!1,title:"Algebra 1",description:"Kapitel 1",source:"@site/versioned_docs/version-24w/algebra1.md",sourceDirName:".",slug:"/algebra1",permalink:"/24w/algebra1",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24w/algebra1.md",tags:[],version:"24w",lastUpdatedAt:1637277629,formattedLastUpdatedAt:"11/18/2021",sidebarPosition:2,frontMatter:{title:"Algebra 1",sidebar_label:"Algebra 1",sidebar_position:2},sidebar:"version-24w/sidebar",previous:{title:"Home 24w",permalink:"/24w/home"},next:{title:"Diagramme",permalink:"/24w/Excel/diagramme"}},K=[{value:"Kapitel 1",id:"kapitel-1",children:[],level:2},{value:"Kapitel 2",id:"kapitel-2",children:[],level:2},{value:"Kapitel 3",id:"kapitel-3",children:[],level:2},{value:"Kapitel 5",id:"kapitel-5",children:[],level:2},{value:"Kapitel 6",id:"kapitel-6",children:[],level:2}],N={toc:K};function _(e){var t=e.components,i=(0,a.Z)(e,y);return(0,l.kt)("wrapper",(0,n.Z)({},N,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"algebra-1"},"Algebra 1"),(0,l.kt)("h2",{id:"kapitel-1"},"Kapitel 1"),(0,l.kt)(S,{webKey:"915b28a8-0722-4f72-93b9-dd7ef6f7537d",topic:"Kapitel 1",mdxType:"TimedTopic"}),(0,l.kt)("h2",{id:"kapitel-2"},"Kapitel 2"),(0,l.kt)(S,{webKey:"16d653a0-92ad-4530-8a79-78dca5972e22",topic:"Kapitel 2",mdxType:"TimedTopic"}),(0,l.kt)("h2",{id:"kapitel-3"},"Kapitel 3"),(0,l.kt)(S,{webKey:"23f279a3-5eb5-4557-989d-bc9be25bfc58",topic:"Kapitel 3",mdxType:"TimedTopic"}),(0,l.kt)("h2",{id:"kapitel-5"},"Kapitel 5"),(0,l.kt)(S,{webKey:"f56d9901-f3c5-405f-85d5-3efedff22a62",topic:"Kapitel 5",mdxType:"TimedTopic"}),(0,l.kt)("h2",{id:"kapitel-6"},"Kapitel 6"),(0,l.kt)(S,{webKey:"81d29bab-40f2-4ec9-bcc9-80710b23aca3",topic:"Kapitel 6",mdxType:"TimedTopic"}))}_.isMDXComponent=!0}}]);