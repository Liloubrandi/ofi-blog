"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57097],{58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(83117),r=t(67294),i=t(72389),l=t(97662),u=t(86010),o="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),N=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,r.useState)(f),T=w[0],S=w[1],_=[],z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=N[c];null!=D&&D!==T&&k.some((function(e){return e.value===D}))&&S(D)}var Z=function(e){var n=e.currentTarget,t=_.indexOf(n),a=k[t].value;a!==T&&(z(n),S(a),null!=c&&y(c,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":p},g)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},i,{className:(0,u.default)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},8434:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return c},toc:function(){return g},default:function(){return k}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=t(84384),u=t(9877),o=t(58215),s=["components"],p={},d="Modulo",m={unversionedId:"Programmieren-1/Aufgaben/modulo",id:"version-24i/Programmieren-1/Aufgaben/modulo",title:"Modulo",description:"11modulo.zip",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/11_modulo.mdx",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/modulo",permalink:"/24i/Programmieren-1/Aufgaben/modulo",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/11_modulo.mdx",tags:[],version:"24i",sidebarPosition:11,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Name",permalink:"/24i/Programmieren-1/Aufgaben/name"},next:{title:"Uhren",permalink:"/24i/Programmieren-1/Aufgaben/uhren"}},c={},g=[{value:"1. Kalender",id:"1-kalender",level:2},{value:"2. Schachbrett",id:"2-schachbrett",level:2},{value:"Zusatz",id:"zusatz",level:3}],h={toc:g};function k(e){var n=e.components,p=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modulo"},"Modulo"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(94555).Z},"11_modulo.zip")),(0,i.kt)("h2",{id:"1-kalender"},"1. Kalender"),(0,i.kt)("p",null,"Schreiben Sie ein Programm, das von einem gegebenen Datum im 21. Jahrhundert (vom 1. 1. 2001 bis 31.12.2100) den Wochentag bestimmt."),(0,i.kt)("p",null,"Dabei muss Folgendes beachtet werden:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der 1.1.2001 war ein Montag."),(0,i.kt)("li",{parentName:"ul"},"Schaltjahre haben ",(0,i.kt)("inlineCode",{parentName:"li"},"366")," statt ",(0,i.kt)("inlineCode",{parentName:"li"},"365")," Tage. Ein Schaltjahr ist...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"durch ",(0,i.kt)("inlineCode",{parentName:"li"},"4")," teilbar, aber nicht durch ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," teilbar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ausnahme"),": Ist die Jahreszahl durch ",(0,i.kt)("inlineCode",{parentName:"li"},"400")," teilbar, dann ist es ein Schaltjahr")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Zusatzaufgabe"),": Erweitern Sie das Programm so, dass es f\xfcr alle Daten im Gregorianischen Kalender (ab Freitag 15.10.1582) funktioniert."),(0,i.kt)(u.Z,{defaultValue:"step-1",values:[{label:"Schritt 1",value:"step-1"},{label:"Schritt 2",value:"step-2"},{label:"Schritt 3",value:"step-3"},{label:"Schritt 4",value:"step-4"},{label:"Schritt 5",value:"step-5"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"step-1",mdxType:"TabItem"},(0,i.kt)("p",null,"Zuerst \xfcber eine Eingabe Tag, Monat und Jahr abfragen (achtung Datentyp...)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"tag = input('Tag')\nmonat = input('Monat')\njahr = input('Jahr')\n"))),(0,i.kt)(o.Z,{value:"step-2",mdxType:"TabItem"},(0,i.kt)("p",null,"Erster Schritt: Wie bestimmt man den Wochentag?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr den Januar 2001 funktionieren."),(0,i.kt)("p",null,"--\x3e Wir brauchen eine Liste, welche der Reihe nach die Wochentage enth\xe4lt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),": Der 1.1.2001 sollte ein Montag sein. Das stimmt aktuell noch nicht. Wie muss das Programm angepasst werden, damits stimmt? Wieso?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"TAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']\n\nwochentag = TAGE[tag % 7]\nprint(wochentag)\n"))),(0,i.kt)(o.Z,{value:"step-3",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr das Jahr 2001 funktionieren."),(0,i.kt)("p",null,"Es m\xfcsssen die Anzahl Tage jedes ",(0,i.kt)("strong",{parentName:"p"},"verstrichenen")," Monats umgewandelt werden. Dazu erstellen wir eine Liste, welche die Anzahl Tage jedes Jahres enth\xe4lt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,i.kt)("inlineCode",{parentName:"li"},"tag + monats_tage"),"."),(0,i.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfe: Der 1.6.2001 ist war ein Freitag. ",(0,i.kt)("em",{parentName:"li"},"Hinweis"),': Aktuell wird es noch "Sonntag" ausgeben, wieso? \xdcberpr\xfcfe wie viele Monate zu ',(0,i.kt)("inlineCode",{parentName:"li"},"monats_tage")," hinzugef\xfcgt werden")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"MONATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\nmonates_tage = 0\nfor m in range(0, monat, 1):\n    monates_tage = monates_tage + MONATE[m]\n"))),(0,i.kt)(o.Z,{value:"step-4",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr bis zum Jahr 2003 funktionieren."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,i.kt)("p",null,"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,i.kt)("inlineCode",{parentName:"p"},"tag + monats_tage + jahres_tage"),". Der 1.6.2003 sollte ein Sonntag sein."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"jahres_tage = 0\nfor year in range(2001, jahr, 1):\n    jahres_tage = jahres_tage + 365\n"))),(0,i.kt)(o.Z,{value:"step-5",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Schaltjahre, bis 2001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,i.kt)("inlineCode",{parentName:"li"},"jahres_tage")," \xfcberpr\xfcfen, ob ein Jahr ein Schaltjahr ist. Falls ja: ",(0,i.kt)("inlineCode",{parentName:"li"},"366")," Tage hinzuf\xfcgen, sonst ",(0,i.kt)("inlineCode",{parentName:"li"},"365")),(0,i.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,i.kt)("inlineCode",{parentName:"li"},"monats_tage")," \xfcberpr\xfcfen, ob das gew\xe4hlte Jahr ein Schaltjahr ist ",(0,i.kt)("strong",{parentName:"li"},"und")," ob der Monat nach dem Februar gew\xe4hlt ist. Dann muss noch ein Tag zus\xe4tzlich hinzugef\xfcgt werden.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\xdcberpr\xfcfen")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"28.6.2020 war ein Sonntag"),(0,i.kt)("li",{parentName:"ul"},"28.6.2100 wird ein Montag sein")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=kalender.py id=13c15f99-7389-4d8e-a884-1ca388c0cbb0",live_py:!0,title:"kalender.py",id:"13c15f99-7389-4d8e-a884-1ca388c0cbb0"},"# kalender\n\n")),(0,i.kt)("h2",{id:"2-schachbrett"},"2. Schachbrett"),(0,i.kt)("p",null,"Erzeugen Sie auf ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website/playground"},"https://io.gbsl.website")," ein ",(0,i.kt)("inlineCode",{parentName:"p"},"8x8")," Schachbrett."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Schachbrett",options:{},isInline:!1,src:t(13817).Z,alt:"Schachbrett",mdxType:"Image"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipps"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zeichnen Sie ein Feld ",(0,i.kt)("inlineCode",{parentName:"li"},"20x20")," einheiten gross"),(0,i.kt)("li",{parentName:"ul"},"verwenden Sie eine verschachtelte ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),"-Schleife - eine f\xfcr die ",(0,i.kt)("inlineCode",{parentName:"li"},"y"),"-Werte, eine f\xfcr die ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"-Werte:\n",(0,i.kt)(l.Z,{bib:void 0,caption:"checker-anim",options:{},isInline:!0,src:t(84191).Z,alt:"checker-anim",mdxType:"Image"}))),(0,i.kt)("h3",{id:"zusatz"},"Zusatz"),(0,i.kt)("p",null,"Stellen Sie die Schach-Figuren auf:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(61007).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die Bilder f\xfcr die Figuren finden Sie im Ordner ",(0,i.kt)("inlineCode",{parentName:"p"},"chess")," - dieser Ordner muss beim Konfigurieren des Playgrounds angegeben werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"device.configure_playground(\n  width=180,\n  height=180,\n  origin_x=10,\n  origin_y=10,\n  color='bisque',\n  images='chess'\n)\n")),(0,i.kt)("p",null,"Anschliessend kann einem Objekt ein Hintergrundbild mitgegeben werden (",(0,i.kt)("strong",{parentName:"p"},"Achtung"),": nur der Name des Bildes wird angegeben, keine Dateierweiterung!)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"device.add_square(\n  pos_x=0,\n  pos_y=0,\n  size=15,\n  image='s_dame'\n)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/07T_Playground.ipynb"},"Theorie: Jupyterhub Kapitel 7.4")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipp"),": Setzen Sie den Anker der Schach-Figuren auf ",(0,i.kt)("inlineCode",{parentName:"p"},"anchor=[0.5, 0.5]"),"."))}k.isMDXComponent=!0},94555:function(e,n,t){n.Z=t.p+"assets/files/11_modulo-0e910dcaeeae2d5be0eda8905be727c8.zip"},84191:function(e,n,t){n.Z=t.p+"assets/images/animate_draw-cb56433100290e187e835da5ef47d1b5.gif"},13817:function(e,n,t){n.Z=t.p+"assets/images/chess1-76130d67696b99434bc39c71027873b6.png"},61007:function(e,n,t){n.Z=t.p+"assets/images/chess2-efed82b0da53bf68a52ffd15d6de5d3b.png"}}]);