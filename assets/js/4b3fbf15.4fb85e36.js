"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5155],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>c});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(r),c=a,g=p["".concat(o,".").concat(c)]||p[c]||d[c]||l;return r?t.createElement(g,i(i({ref:n},m),{},{components:r})):t.createElement(g,i({ref:n},m))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(67294),a=r(86010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:r,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.default)(l,i),hidden:r},n)}},65488:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(87462),a=r(67294),l=r(86010),i=r(72389),u=r(67392),o=r(7094),s=r(12466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,r;const{lazy:i,block:p,defaultValue:c,values:g,groupId:f,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:k.map((e=>{let{props:{value:n,label:r,attributes:t}}=e;return{value:n,label:r,attributes:t}})),b=(0,u.l)(v,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(n=null!=c?c:null==(r=k.find((e=>e.props.default)))?void 0:r.props.value)?n:k[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:D}=(0,o.U)(),[w,F]=(0,a.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&v.some((n=>n.value===e))&&F(e)}const _=e=>{const n=e.currentTarget,r=E.indexOf(n),t=v[r].value;t!==w&&(O(n),F(t),null!=f&&D(f,String(t)))},P=e=>{var n;let r=null;switch(e.key){case"ArrowRight":{var t;const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{var a;const n=E.indexOf(e.currentTarget)-1;r=null!=(a=E[n])?a:E[E.length-1];break}}null==(n=r)||n.focus()};return a.createElement("div",{className:(0,l.default)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:n,label:r,attributes:i}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>E.push(e),onKeyDown:P,onFocus:_,onClick:_},i,{className:(0,l.default)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=r?r:n)}))),i?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function c(e){const n=(0,i.Z)();return a.createElement(p,(0,t.Z)({key:String(n)},e))}},85107:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(67294),a=r(65488);class l extends t.Component{render(){return t.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},65648:(e,n,r)=>{r.d(n,{Z:()=>f});var t=r(4942),a=r(67294),l=r(92814);const i="videoComponent_YfiL",u="headerClosed_s_Of",o="headerOpen_AzNA",s="minimize_pBQC",m="description_p2GN",d="title_YxV5",p="cardOpen_IEP6";var c=r(51436),g=r(86010);class f extends a.Component{constructor(){super(...arguments),(0,t.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,t.Z)(this,"videoRef",a.createRef()),(0,t.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:n,bottom:r}=e,{innerHeight:t}=window;n<t&&r>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,t.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:n,type:r,children:t}=this.props;return a.createElement("div",{ref:this.videoRef,className:i},this.state.open?a.createElement("div",{className:p},a.createElement("div",{className:o},e&&a.createElement("h5",{className:d},e),!this.props.expanded&&a.createElement("button",{className:(0,g.default)("button button--sm button--outline button--secondary",s),onClick:this.onClick},a.createElement(l.G,{icon:c.IQi})),t&&a.createElement("div",{className:m},t)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:n,type:"video/"+(r||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(l.G,{icon:c.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:u},a.createElement("div",{className:d},e||"Video"),t&&a.createElement("div",{className:m},t)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},a.createElement("source",{src:n,type:"video/"+(r||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(l.G,{icon:c.IJ7,spin:!0}))))}}},43378:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var t=r(87462),a=(r(67294),r(3905)),l=r(85107),i=(r(44996),r(65648),r(85162));r(92814);const u={},o="\u270d\ufe0f Pr\xfcfungsfragen",s={unversionedId:"byod-basics/v24/pruefungsfragen",id:"byod-basics/v24/pruefungsfragen",title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/docs/byod-basics/v24/007-pruefungsfragen.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/pruefungsfragen",permalink:"/byod-basics/v24/pruefungsfragen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/007-pruefungsfragen.mdx",tags:[],version:"current",lastUpdatedAt:1634811842,formattedLastUpdatedAt:"21.10.2021",sidebarPosition:7,frontMatter:{},sidebar:"sidebar",previous:{title:"Software",permalink:"/byod-basics/v24/software"},next:{title:"BYOD v25",permalink:"/category/byod-v25"}},m={},d=[{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Frage 1",id:"frage-1",level:2},{value:"Frage 2",id:"frage-2",level:2},{value:"Frage 3",id:"frage-3",level:2},{value:"Frage 4",id:"frage-4",level:2},{value:"Frage 5",id:"frage-5",level:2},{value:"Frage 6",id:"frage-6",level:2},{value:"Frage 7",id:"frage-7",level:2},{value:"Frage 8",id:"frage-8",level:2},{value:"Frage 9",id:"frage-9",level:2},{value:"Frage 10",id:"frage-10",level:2},{value:"Frage 11",id:"frage-11",level:2},{value:"Frage 12",id:"frage-12",level:2},{value:"Frage 13",id:"frage-13",level:2},{value:"Frage 14",id:"frage-14",level:2},{value:"Frage 15",id:"frage-15",level:2},{value:"Frage 16",id:"frage-16",level:2},{value:"Frage 17",id:"frage-17",level:2},{value:"Frage 18",id:"frage-18",level:2},{value:"Frage 19",id:"frage-19",level:2},{value:"Frage 20",id:"frage-20",level:2},{value:"Frage 21",id:"frage-21",level:2},{value:"Frage 22",id:"frage-22",level:2},{value:"Frage 23",id:"frage-23",level:2},{value:"Frage 24",id:"frage-24",level:2},{value:"Frage 25",id:"frage-25",level:2},{value:"Frage 26",id:"frage-26",level:2},{value:"Frage 27",id:"frage-27",level:2},{value:"Frage 28",id:"frage-28",level:2},{value:"Frage 29",id:"frage-29",level:2},{value:"Frage 30",id:"frage-30",level:2}],p={toc:d};function c(e){let{components:n,...u}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,a.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,a.kt)("li",{parentName:"ul"},"Material ",(0,a.kt)("a",{target:"_blank",href:r(99856).Z},"material_byod.zip")," herunterladen"),(0,a.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"frage-1"},"Frage 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,a.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,a.kt)("h2",{id:"frage-2"},"Frage 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,a.kt)("h2",{id:"frage-3"},"Frage 3"),(0,a.kt)(l.Z,{mdxType:"OsTabs"},(0,a.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,a.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,a.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,a.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Eine Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,a.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,a.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,a.kt)("h2",{id:"frage-4"},"Frage 4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,a.kt)("h2",{id:"frage-5"},"Frage 5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},'ein neues Programm mit dem Namen "fledermaus" hinzuf\xfcgen')),(0,a.kt)("h2",{id:"frage-6"},"Frage 6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,a.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,a.kt)("h2",{id:"frage-7"},"Frage 7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"sonnenuntergang.docx" \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},"(ab jetzt nur mit Tasten-Shortcuts)"),(0,a.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,a.kt)("li",{parentName:"ul"},"Den ganzen zweiten Abschnitt ausw\xe4hlen und l\xf6schen"),(0,a.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,a.kt)("h2",{id:"frage-8"},"Frage 8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finder und das Mail-Programm \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,a.kt)("h2",{id:"frage-9"},"Frage 9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,a.kt)("h2",{id:"frage-10"},"Frage 10"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ordner "programme" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},'Das Programm "create_mesh" \xf6ffnen, den ganzen Code kopieren'),(0,a.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,a.kt)("h2",{id:"frage-11"},"Frage 11"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,a.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,a.kt)("h2",{id:"frage-12"},"Frage 12"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,a.kt)("h2",{id:"frage-13"},"Frage 13"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,a.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,a.kt)("h2",{id:"frage-14"},"Frage 14"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,a.kt)("h2",{id:"frage-15"},"Frage 15"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},"(ab jetzt mit Tasten-Shortcuts)"),(0,a.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,a.kt)("li",{parentName:"ul"},"abspeichern"),(0,a.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,a.kt)("h2",{id:"frage-16"},"Frage 16"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},"(ab jetzt mit Tastenk\xfcrzel)"),(0,a.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,a.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,a.kt)("li",{parentName:"ul"},"abspeichern")),(0,a.kt)("h2",{id:"frage-17"},"Frage 17"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Das Programm "create_mesh.py" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},'Nach dem Wort "SQRT3" suchen. Wie oft kommt es im Programm vor?')),(0,a.kt)("h2",{id:"frage-18"},"Frage 18"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,a.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,a.kt)("h2",{id:"frage-19"},"Frage 19"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,a.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,a.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,a.kt)("h2",{id:"frage-20"},"Frage 20"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Milch kaufen"')),(0,a.kt)("h2",{id:"frage-21"},"Frage 21"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,a.kt)("h2",{id:"frage-22"},"Frage 22"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,a.kt)("h2",{id:"frage-23"},"Frage 23"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,a.kt)("h2",{id:"frage-24"},"Frage 24"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,a.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2020 setzen"),(0,a.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,a.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,a.kt)("h2",{id:"frage-25"},"Frage 25"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,a.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,a.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,a.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,a.kt)("h2",{id:"frage-26"},"Frage 26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,a.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,a.kt)("h2",{id:"frage-27"},"Frage 27"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,a.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,a.kt)("h2",{id:"frage-28"},"Frage 28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,a.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,a.kt)("h2",{id:"frage-29"},"Frage 29"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,a.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,a.kt)("h2",{id:"frage-30"},"Frage 30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,a.kt)("li",{parentName:"ul"},'Im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen')))}c.isMDXComponent=!0},99856:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/files/material_byod_v24-728aae2f4f6e98014955e8e92ac8bbcd.zip"}}]);