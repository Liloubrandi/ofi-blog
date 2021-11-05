"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3447],{13919:function(e,n,r){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return a}})},44996:function(e,n,r){r.d(n,{C:function(){return l},Z:function(){return i}});var t=r(52263),a=r(13919);function l(){var e=(0,t.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,l=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var l=void 0===t?{}:t,i=l.forcePrependBaseUrl,u=void 0!==i&&i,o=l.absolute,s=void 0!==o&&o;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(u)return n+r;var d=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+d:d}(l,r,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,l().withBaseUrl)(e,n)}},58215:function(e,n,r){var t=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},26396:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(87462),a=r(67294),l=r(72389),i=r(79443);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(41544),s=r(86010),d="tabItem_1uMI";function m(e){var n,r,t,l=e.lazy,i=e.block,m=e.defaultValue,c=e.values,f=e.groupId,p=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,o.lx)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=h[0])?void 0:t.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=u(),N=b.tabGroupChoices,D=b.setTabGroupChoices,y=(0,a.useState)(v),F=y[0],w=y[1],E=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=N[f];null!=O&&O!==F&&g.some((function(e){return e.value===O}))&&w(O)}var z=function(e){var n=e.currentTarget,r=E.indexOf(n),t=g[r].value;t!==F&&(_(n),w(t),null!=f&&D(f,t))},C=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=E.indexOf(e.currentTarget)+1;r=E[t]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":i},p)},g.map((function(e){var n=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:F===n?0:-1,"aria-selected":F===n,className:(0,s.default)("tabs__item",d,{"tabs__item--active":F===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:z,onClick:z},null!=r?r:n)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===F}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==F})}))))}function c(e){var n=(0,l.Z)();return a.createElement(m,(0,t.Z)({key:String(n)},e))}},79443:function(e,n,r){var t=(0,r(67294).createContext)(void 0);n.Z=t},85107:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(94578),a=r(67294),l=r(26396),i=function(e){function n(){return e.apply(this,arguments)||this}return(0,t.Z)(n,e),n.prototype.render=function(){return a.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},65648:function(e,n,r){r.d(n,{Z:function(){return k}});var t=r(97326),a=r(94578),l=r(4942),i=r(67294),u=r(92814),o="videoComponent_187V",s="headerClosed_1HK6",d="headerOpen_hP6H",m="minimize_1JZh",c="description_2U1a",f="title_1XFt",p="cardOpen_1vws",h=r(51436),g=r(86010),k=function(e){function n(){for(var n,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=e.call.apply(e,[this].concat(a))||this,(0,l.Z)((0,t.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,l.Z)((0,t.Z)(n),"videoRef",i.createRef()),(0,l.Z)((0,t.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),r=e.top,t=e.bottom;r<window.innerHeight&&t>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,l.Z)((0,t.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,a.Z)(n,e);var r=n.prototype;return r.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},r.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},r.render=function(){var e=this.props,n=e.title,r=e.src,t=e.type,a=e.children;return i.createElement("div",{ref:this.videoRef,className:o},this.state.open?i.createElement("div",{className:p},i.createElement("div",{className:d},n&&i.createElement("h5",{className:f},n),!this.props.expanded&&i.createElement("button",{className:(0,g.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},i.createElement(u.G,{icon:h.IQi})),a&&i.createElement("div",{className:c},a)),this.state.visible?i.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},i.createElement("source",{src:r,type:"video/"+(t||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(u.G,{icon:h.IJ7,spin:!0}))):i.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.createElement("div",{className:s},i.createElement("div",{className:f},n||"Video"),a&&i.createElement("div",{className:c},a)),this.state.visible?i.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},i.createElement("source",{src:r,type:"video/"+(t||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(u.G,{icon:h.IJ7,spin:!0}))))},n}(i.Component)},45106:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var t=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(85107),u=(r(44996),r(65648),r(58215)),o=(r(92814),["components"]),s={},d="\u270d\ufe0f Pr\xfcfungsfragen",m={unversionedId:"BYOD-Basics/pruefungsfragen",id:"version-24L/BYOD-Basics/pruefungsfragen",isDocsHomePage:!1,title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/versioned_docs/version-24L/02-BYOD-Basics/007-pruefungsfragen.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/pruefungsfragen",permalink:"/24L/BYOD-Basics/pruefungsfragen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/02-BYOD-Basics/007-pruefungsfragen.mdx",tags:[],version:"24L",sidebarPosition:7,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"Software",permalink:"/24L/BYOD-Basics/software"},next:{title:"1. Python",permalink:"/24L/Software/python"}},c=[{value:"Vorbereitung",id:"vorbereitung",children:[],level:3},{value:"Frage 1",id:"frage-1",children:[],level:2},{value:"Frage 2",id:"frage-2",children:[],level:2},{value:"Frage 3",id:"frage-3",children:[],level:2},{value:"Frage 4",id:"frage-4",children:[],level:2},{value:"Frage 5",id:"frage-5",children:[],level:2},{value:"Frage 6",id:"frage-6",children:[],level:2},{value:"Frage 7",id:"frage-7",children:[],level:2},{value:"Frage 8",id:"frage-8",children:[],level:2},{value:"Frage 9",id:"frage-9",children:[],level:2},{value:"Frage 10",id:"frage-10",children:[],level:2},{value:"Frage 11",id:"frage-11",children:[],level:2},{value:"Frage 12",id:"frage-12",children:[],level:2},{value:"Frage 13",id:"frage-13",children:[],level:2},{value:"Frage 14",id:"frage-14",children:[],level:2},{value:"Frage 15",id:"frage-15",children:[],level:2},{value:"Frage 16",id:"frage-16",children:[],level:2},{value:"Frage 17",id:"frage-17",children:[],level:2},{value:"Frage 18",id:"frage-18",children:[],level:2},{value:"Frage 19",id:"frage-19",children:[],level:2},{value:"Frage 20",id:"frage-20",children:[],level:2},{value:"Frage 21",id:"frage-21",children:[],level:2},{value:"Frage 22",id:"frage-22",children:[],level:2},{value:"Frage 23",id:"frage-23",children:[],level:2},{value:"Frage 24",id:"frage-24",children:[],level:2},{value:"Frage 25",id:"frage-25",children:[],level:2},{value:"Frage 26",id:"frage-26",children:[],level:2},{value:"Frage 27",id:"frage-27",children:[],level:2},{value:"Frage 28",id:"frage-28",children:[],level:2},{value:"Frage 29",id:"frage-29",children:[],level:2},{value:"Frage 30",id:"frage-30",children:[],level:2}],f={toc:c};function p(e){var n=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,l.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,l.kt)("li",{parentName:"ul"},"Material ",(0,l.kt)("a",{target:"_blank",href:r(62495).Z},"material_byod.zip")," herunterladen"),(0,l.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"frage-1"},"Frage 1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,l.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,l.kt)("h2",{id:"frage-2"},"Frage 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,l.kt)("h2",{id:"frage-3"},"Frage 3"),(0,l.kt)(i.Z,{mdxType:"OsTabs"},(0,l.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,l.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Eine Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,l.kt)("h2",{id:"frage-4"},"Frage 4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,l.kt)("h2",{id:"frage-5"},"Frage 5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Programm mit dem Namen "fledermaus" hinzuf\xfcgen')),(0,l.kt)("h2",{id:"frage-6"},"Frage 6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,l.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,l.kt)("h2",{id:"frage-7"},"Frage 7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"sonnenuntergang.docx" \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt nur mit Tasten-Shortcuts)"),(0,l.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,l.kt)("li",{parentName:"ul"},"Den ganzen zweiten Abschnitt ausw\xe4hlen und l\xf6schen"),(0,l.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,l.kt)("h2",{id:"frage-8"},"Frage 8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finder und das Mail-Programm \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,l.kt)("h2",{id:"frage-9"},"Frage 9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,l.kt)("h2",{id:"frage-10"},"Frage 10"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'Das Programm "create_mesh" \xf6ffnen, den ganzen Code kopieren'),(0,l.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-11"},"Frage 11"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,l.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,l.kt)("h2",{id:"frage-12"},"Frage 12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,l.kt)("h2",{id:"frage-13"},"Frage 13"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,l.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-14"},"Frage 14"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,l.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,l.kt)("h2",{id:"frage-15"},"Frage 15"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt mit Tasten-Shortcuts)"),(0,l.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,l.kt)("li",{parentName:"ul"},"abspeichern"),(0,l.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,l.kt)("h2",{id:"frage-16"},"Frage 16"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt mit Tastenk\xfcrzel)"),(0,l.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,l.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,l.kt)("li",{parentName:"ul"},"abspeichern")),(0,l.kt)("h2",{id:"frage-17"},"Frage 17"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "create_mesh.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'Nach dem Wort "SQRT3" suchen. Wie oft kommt es im Programm vor?')),(0,l.kt)("h2",{id:"frage-18"},"Frage 18"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,l.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,l.kt)("h2",{id:"frage-19"},"Frage 19"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,l.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,l.kt)("h2",{id:"frage-20"},"Frage 20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Milch kaufen"')),(0,l.kt)("h2",{id:"frage-21"},"Frage 21"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-22"},"Frage 22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-23"},"Frage 23"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-24"},"Frage 24"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,l.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2020 setzen"),(0,l.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,l.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-25"},"Frage 25"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,l.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,l.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,l.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,l.kt)("h2",{id:"frage-26"},"Frage 26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,l.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,l.kt)("h2",{id:"frage-27"},"Frage 27"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,l.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,l.kt)("h2",{id:"frage-28"},"Frage 28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,l.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-29"},"Frage 29"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,l.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,l.kt)("h2",{id:"frage-30"},"Frage 30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,l.kt)("li",{parentName:"ul"},'Im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen')))}p.isMDXComponent=!0},62495:function(e,n,r){n.Z=r.p+"assets/files/material_byod_v24-728aae2f4f6e98014955e8e92ac8bbcd.zip"},97326:function(e,n,r){function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return t}})}}]);