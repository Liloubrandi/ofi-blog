"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2132],{58215:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(87462),a=t(67294),r=t(72389),l=t(79443);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(41544),d=t(86010),p="tabItem_1uMI";function u(e){var n,t,i,r=e.lazy,l=e.block,u=e.defaultValue,c=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),y=g.tabGroupChoices,w=g.setTabGroupChoices,I=(0,a.useState)(b),N=I[0],Z=I[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=y[m];null!=S&&S!==N&&v.some((function(e){return e.value===S}))&&Z(S)}var T=function(e){var n=e.currentTarget,t=x.indexOf(n),i=v[t].value;i!==N&&(C(n),Z(i),null!=m&&w(m,i))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=x.indexOf(e.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("tabs",{"tabs--block":l},f)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,d.default)("tabs__item",p,{"tabs__item--active":N===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:T,onClick:T},null!=t?t:n)}))),r?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(n)},e))}},79443:function(e,n,t){var i=(0,t(67294).createContext)(void 0);n.Z=i},85107:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(94578),a=t(67294),r=t(26396),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},12435:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=t(84384),o=t(85107),s=t(58215),d=["components"],p={title:"2. VS Code"},u="VS Code",c={unversionedId:"software-installation/vscode-1.59",id:"software-installation/vscode-1.59",isDocsHomePage:!1,title:"2. VS Code",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/docs/software-installation/vscode-1.59.mdx",sourceDirName:"software-installation",slug:"/software-installation/vscode-1.59",permalink:"/software-installation/vscode-1.59",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/vscode-1.59.mdx",tags:[],version:"current",lastUpdatedAt:1628606969,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"2. VS Code"},sidebar:"sidebar",previous:{title:"1. Python",permalink:"/software-installation/python-3.9"},next:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"}},m=[{value:"Installieren",id:"installieren",children:[],level:2},{value:"Konfigurieren",id:"konfigurieren",children:[{value:"Python Interpreter",id:"python-interpreter",children:[],level:3}],level:2},{value:"Verwenden",id:"verwenden",children:[{value:"1. Wo ist was?",id:"1-wo-ist-was",children:[],level:3},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",children:[],level:3},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",children:[],level:3},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",children:[],level:3},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",children:[],level:3}],level:2}],f={toc:m};function h(e){var n=e.components,p=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},f,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vs-code"},"VS Code"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("h2",{id:"installieren"},"Installieren"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unter ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Surface Pro X -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ARM")),(0,r.kt)("li",{parentName:"ul"},"Windows -> ",(0,r.kt)("inlineCode",{parentName:"li"},"64 bit")),(0,r.kt)("li",{parentName:"ul"},"Mac mit M1 Chip -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Apple Silicon")),(0,r.kt)("li",{parentName:"ul"},"Mac OS -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Intel Chip"),(0,r.kt)(l.Z,{bib:void 0,caption:"Download Optionen",options:{},isInline:!0,src:t(16693).Z,alt:"Download Optionen",mdxType:"Image"})))),(0,r.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken"),(0,r.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Installations-Optionen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:t(25738).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:t(2197).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(12484).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:t(69032).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:t(69211).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:t(86971).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:t(9727).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei ist eine komprimierte ",(0,r.kt)("inlineCode",{parentName:"li"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,r.kt)("li",{parentName:"ol"},"Die Datei ",(0,r.kt)("inlineCode",{parentName:"li"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,r.kt)("li",{parentName:"ol"},"Beim ersten \xd6fnnen kommt folgender Hinweis:\n",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(56290).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,r.kt)("p",null,"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,r.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,r.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"VS Code Plugins",options:{},isInline:!1,src:t(57087).Z,alt:"VS Code Plugins",mdxType:"Image"})),(0,r.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,r.kt)("p",null,"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,r.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(19135).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"}))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Der ",(0,r.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(47481).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Eine andere Version verwenden"),(0,r.kt)("p",null,"Unter ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,r.kt)("p",null,"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,r.kt)("p",null,"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,r.kt)("h2",{id:"verwenden"},"Verwenden"),(0,r.kt)("p",null,"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,r.kt)("h3",{id:"1-wo-ist-was"},"1. Wo ist was?"),(0,r.kt)("p",null,"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(40960).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(2117).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,r.kt)("p",null,"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(45197).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,r.kt)("p",null,'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,r.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,r.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(99833).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(8003).Z,mdxType:"Image"})),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},45197:function(e,n,t){n.Z=t.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},99833:function(e,n,t){n.Z=t.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},40960:function(e,n,t){n.Z=t.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},8003:function(e,n,t){n.Z=t.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},2117:function(e,n,t){n.Z=t.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},56290:function(e,n,t){n.Z=t.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},47481:function(e,n,t){n.Z=t.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},16693:function(e,n,t){n.Z=t.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},57087:function(e,n,t){n.Z=t.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},25738:function(e,n,t){n.Z=t.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},2197:function(e,n,t){n.Z=t.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},12484:function(e,n,t){n.Z=t.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},69032:function(e,n,t){n.Z=t.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},69211:function(e,n,t){n.Z=t.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},86971:function(e,n,t){n.Z=t.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},9727:function(e,n,t){n.Z=t.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},19135:function(e,n,t){n.Z=t.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);