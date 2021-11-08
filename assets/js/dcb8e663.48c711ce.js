"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[28553],{66898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=n(84384),s=["components"],d={},o="Sieb des Eratosthenes",m={unversionedId:"Programmieren-1/Aufgaben/grid",id:"version-24f/Programmieren-1/Aufgaben/grid",isDocsHomePage:!1,title:"Sieb des Eratosthenes",description:"09grid.zip",source:"@site/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/09_grid.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/grid",permalink:"/24f/Programmieren-1/Aufgaben/grid",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/09_grid.md",tags:[],version:"24f",sidebarPosition:9,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Zufallszahl",permalink:"/24f/Programmieren-1/Aufgaben/zufalls_zahl"},next:{title:"Name",permalink:"/24f/Programmieren-1/Aufgaben/name"}},u=[{value:"Aufgaben",id:"aufgaben",children:[],level:2}],p={toc:u};function g(e){var t=e.components,d=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sieb-des-eratosthenes"},"Sieb des Eratosthenes"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(46591).Z},"09_grid.zip")),(0,a.kt)("p",null,"Mit folgendem Programm wird auf ",(0,a.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_grid"},"https://io.gbsl.website/color_grid")," ein Gitternetz mit nummerierten Feldern erzeugt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from smartphone_connector import Connector\n\ndevice = Connector('https://io.gbsl.website', 'FooBar')\ndevice.setup_grid(10, 15, enumerate=True)\n\n# verbindung mit dem Ger\xe4t beenden\ndevice.disconnect()\n")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(58108).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},'device.set_grid_at(cell_number=1, color="red")')," kann die Farbe des ersten Feldes auf rot gesetzt werden. Als Farbe sind alle englischen Farb-Namen erlaubt."),(0,a.kt)("p",null,"Weiter kann mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"device.get_grid_at(cell_number=1)")," die aktuelle Farbe des ersten Feldes abgefragt werden."),(0,a.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Zeichnen Sie ein ",(0,a.kt)("inlineCode",{parentName:"p"},"10x10")," grosses Gitternetz und f\xe4rben Sie folgenden Felder rot ein:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"alle Felder der 2er Reihe, ausser die 2 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 3er Reihe, ausser die 3 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 5er Reihe, ausser die 5 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 7er Reihe, ausser die 7 selbst")),(0,a.kt)("p",{parentName:"li"},"Was f\xe4llt Ihnen auf? Was f\xfcr Zahlen sind auf den noch weissen feldern abgebildet?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Dieser Algorithmus zum Auffinden von Primzahlen wurde schon viele Jahrhunderte vor Christus entdeckt, es war aber Eratosthenes welcher ca. 300 v. Chr. dieses Verfahren "Zahlensieb" nannte, weshalb es bis heute noch "Sieb des Eratosthenes" genannt wird.'),(0,a.kt)("p",{parentName:"li"},"Der eigentliche Algorithmus funktioniert wie folgt:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Starte bei der Zahl 2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ist das Ende des Gitters erreicht, springe zu Punkt 4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ist das Feld rot, fahre mit Schritt 3 weiter."),(0,a.kt)("li",{parentName:"ul"},"Ist das aktuelle Feld noch nicht rot, so ist es eine Primzahl und wird ",(0,a.kt)("em",{parentName:"li"},"nicht")," rot gef\xe4rbt. Alle Vielfachen dieser Zahl bis zum Ende des Gitters werden rot gef\xe4rbt."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehe zum n\xe4chsten Feld und fahre mit Schritt 2 weiter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ende"))),(0,a.kt)("p",{parentName:"li"},"Implementieren Sie diesen Algorithmus und pr\xfcfen Sie ihn mit einem ",(0,a.kt)("inlineCode",{parentName:"p"},"20x20")," Gitter."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Zusatz"),": Eigentlich m\xfcssen nicht ganz alle Felder \xfcberpr\xfcft werden. Optimieren Sie ihr Programm, indem Sie nur soviele Felder \xfcberpr\xfcfen, wie minimal n\xf6tig sind."))))}g.isMDXComponent=!0},46591:function(e,t,n){t.Z=n.p+"assets/files/09_grid-bd77570506806e9323706d31cd9d9e2d.zip"},58108:function(e,t,n){t.Z=n.p+"assets/images/grid-73bfaaa3f2cb98f8f88e10258aab8821.png"}}]);