"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[76838],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),i=t(67294),l=t(72389),r=t(79443);var s=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(41544),o=t(86010),d="tabItem_1uMI";function u(e){var n,t,a,l=e.lazy,r=e.block,u=e.defaultValue,h=e.values,m=e.groupId,p=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,c.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),w=g.tabGroupChoices,N=g.setTabGroupChoices,y=(0,i.useState)(b),S=y[0],z=y[1],x=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=w[m];null!=Z&&Z!==S&&v.some((function(e){return e.value===Z}))&&z(Z)}var T=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==S&&(C(n),z(a),null!=m&&N(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":r},p)},v.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,className:(0,o.default)("tabs__item",d,{"tabs__item--active":S===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:T,onClick:T},null!=t?t:n)}))),l?(0,i.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function h(e){var n=(0,l.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},61330:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return m},default:function(){return f}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=t(84384),s=t(26396),c=t(58215),o=["components"],d={sidebar_label:"Schichtenmodell",sidebar_position:1},u="Schichtenmodell [^1]",h={unversionedId:"Netzwerke-of/Schichtenmodell/0a-Schichtenmodell",id:"Netzwerke-of/Schichtenmodell/0a-Schichtenmodell",isDocsHomePage:!1,title:"Schichtenmodell [^1]",description:"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden.",source:"@site/docs/Netzwerke-of/001-Schichtenmodell/0a-Schichtenmodell.mdx",sourceDirName:"Netzwerke-of/001-Schichtenmodell",slug:"/Netzwerke-of/Schichtenmodell/0a-Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0a-Schichtenmodell",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/001-Schichtenmodell/0a-Schichtenmodell.mdx",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Schichtenmodell",sidebar_position:1},sidebar:"sidebar",previous:{title:"Kombinierte Verfahren",permalink:"/Kryptologie/Asymmetrisch/kombiniert"},next:{title:"TCP/IP-Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0b-TCP-IP-Schichtenmodell"}},m=[{value:"Vorteile des Schichtenmodells",id:"vorteile-des-schichtenmodells",children:[{value:"Aufbau auf bestehendem",id:"aufbau-auf-bestehendem",children:[],level:3},{value:"Austauschbare Schichten",id:"austauschbare-schichten",children:[],level:3}],level:2},{value:"Andere Schichtenmondelle",id:"andere-schichtenmondelle",children:[{value:"Informatik",id:"informatik",children:[],level:3},{value:"Andere Wissenschaften",id:"andere-wissenschaften",children:[],level:3},{value:"Weitere...",id:"weitere",children:[],level:3}],level:2}],p={toc:m};function f(e){var n=e.components,d=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,d,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schichtenmodell-"},"Schichtenmodell ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden."),(0,l.kt)("p",null,"Wir wollen die Vorteile des Schichtenmodell an Hand eines Beispiels versuchen zu verstehen:"),(0,l.kt)("h1",{id:"beispiel-schule"},'Beispiel "Schule"'),(0,l.kt)("p",null,"Die Schule Madretsch feiert 100-j\xe4hriges Jubil\xe4um und braucht f\xfcr ihr Fest zus\xe4tzliche Schulpulte. Wir m\xf6chten helfen und einige Pulte schicken."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"Pulte zum Verschicken",options:{},isInline:!1,src:t(94396).Z,alt:"Pulte zum Verschicken",mdxType:"Image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wie funktioniert dies?"),(0,l.kt)("li",{parentName:"ul"},"Wer ist alles involviert?")),(0,l.kt)("blockquote",null,(0,l.kt)(s.Z,{defaultValue:"step-1",values:[{label:"Details 1",value:"step-1"},{label:"Details 2",value:"step-2"},{label:"Details 3",value:"step-3"},{label:"Details 4",value:"step-4"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"step-1",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/1-application/layer-4.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(18941).Z,mdxType:"Image"})),(0,l.kt)("p",null,"Den Sch\xfcler:innen ist egal, wie die Pulte in die Schule kommen. Sie freuen sich einfach \xfcber die zus\xe4tzlichen Schulpulte.")),(0,l.kt)(c.Z,{value:"step-2",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/2-transport/layer-3.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(8921).Z,mdxType:"Image"})),(0,l.kt)("p",null,"Da die Pulte zu sperrig sind, werden diese vom GBSL-Hausdienst zerlegt und in einzelne Pakete verpackt.\nWenn die Pakete ankommen, kann der Madretsch-Hausdienst die Pakete auspacken und die Pulte wieder zusammensetzen.  ")),(0,l.kt)(c.Z,{value:"step-3",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/3-network/layer-2.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(70326).Z,mdxType:"Image"})),(0,l.kt)("p",null,"Der Hausdienst tr\xe4gt diese Pakete aber nicht selber zur Schule Madretsch.\nNein, die Pakete werden an die Post \xfcbergeben.\nDiese ist f\xfcr den Transport zust\xe4ndig.\nDie Pakete machen auch einen Zwischenstopp im Verteilzentrum H\xe4rkingen.")),(0,l.kt)(c.Z,{value:"step-4",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/4-physical/layer-1.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(89899).Z,mdxType:"Image"})),(0,l.kt)("p",null,"Die Post verwendet nun f\xfcr den eigentlichen Transport verschiedene Fahrzeuge.\nIm Verteilzentrum wird der Inhalt entladen und gem\xe4ss Adresse weitergeleitet.")))),(0,l.kt)("h2",{id:"vorteile-des-schichtenmodells"},"Vorteile des Schichtenmodells"),(0,l.kt)("h3",{id:"aufbau-auf-bestehendem"},"Aufbau auf bestehendem"),(0,l.kt)("p",null,"Ohne Probleme liesse sich das obenstehende Beispiel verwenden, um andere Inhalte zu transportieren. So k\xf6nnten statt Pulten auch St\xfchle \u2013 oder z.B. auch Esswaren transportiert werden."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"So funktioniert auch unser Postsystem: Bis auf wenige Ausnahmen transportiert die Post alles."),(0,l.kt)("li",{parentName:"ul"},"Die \xdcbertragung von E-Mails und die einer Webseite unterscheidet sich nur in der obersten Schicht. Beide bauen auf den 3 identischen unteren Schichten auf")),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufbau-auf-bestehendem"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufbau auf bestehendem")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Was k\xf6nnte noch \xdcbertragen werden, wobei die unteren Schichten verwendet werden?"))),(0,l.kt)("h3",{id:"austauschbare-schichten"},"Austauschbare Schichten"),(0,l.kt)("p",null,"Die Schichten k\xf6nnen ausgetauscht werden, solange sie ihre Aufgabe erf\xfcllen und die Schnittstelle zwischen der dar\xfcber- und der darunterliegenden Schicht erf\xfcllt wird."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Post kann auch mit dem Flugzeug oder dem Zug transportiert werden. (Daten k\xf6nnen Kabelgebunden oder per Funk \xfcbertragen werden)"),(0,l.kt)("li",{parentName:"ul"},"Statt der Post kann man einen privaten Transportservice engagieren. (Swisscom- oder UPC-Anschluss f\xfcrs Internet zu Hause)"),(0,l.kt)("li",{parentName:"ul"},"Statt des Hauswartes k\xf6nnen Sch\xfcler*innen die Pulte auseinanderschrauben und wieder zusammensetzen.")),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"schichten-austauschen"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichten austauschen")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Sehen Sie andere Optionen zum Austauschen einer Schicht?"))),(0,l.kt)("h2",{id:"andere-schichtenmondelle"},"Andere Schichtenmondelle"),(0,l.kt)("h3",{id:"informatik"},"Informatik"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Golftheman",source:"https://commons.wikimedia.org/wiki/File:Operating_system_placement-de.svg",licence:"Creative Commons 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(62424).Z,mdxType:"Image"})),(0,l.kt)("h3",{id:"andere-wissenschaften"},"Andere Wissenschaften"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"Golftheman",source:"https://oinf.ch/konzept/schichtenmodell/",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Naturwissenschaften als Schichtenmodell @",options:{},isInline:!1,src:t(54656).Z,alt:"Naturwissenschaften als Schichtenmodell @",mdxType:"Image"})),(0,l.kt)("p",null,"Verschiedene Naturwissenschaften bauen aufeinander auf und bilden so eine Art Schichtenmodell, um die ungeheure Komplexit\xe4t der Natur in den Griff zu bekommen. Somit kann man sich z.B. auf sehr verschiedenen Abstraktionsebenen mit dem Organismus \xabSchwan\xbb auseinandersetzen (K\xf6rperbau? Verhalten? DNA?) und kann die jeweils anderen Ebenen gr\xf6sstenteils ausblenden."),(0,l.kt)("h3",{id:"weitere"},"Weitere..."),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"schichtenmodelle-finden"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichtenmodelle finden")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Finden Sie weitere Schichtenmodelle?"))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/01.schichtenmodell.html#beispiel-%C2%ABpaketversand%C2%BB"},"mygymer.ch"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},54656:function(e,n,t){n.Z=t.p+"assets/images/0a-Schichtenmodell-Wissenschaft-ed96a0fa69c4c3caaf6cac7dc8737a00.png"},62424:function(e,n,t){n.Z=t.p+"assets/images/0a-os-structure-f2e1ec5100d5e2f8578db65034aac9fc.svg"},94396:function(e,n,t){n.Z=t.p+"assets/images/0a-pulte-af22b48fa4ecbe2a1b45dd0771e2467f.png"},89899:function(e,n,t){n.Z=t.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"},70326:function(e,n,t){n.Z=t.p+"assets/images/2-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"},8921:function(e,n,t){n.Z=t.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"},18941:function(e,n,t){n.Z=t.p+"assets/images/4-school-example-fbef75aead28316ece5916b9ee068869.svg"}}]);