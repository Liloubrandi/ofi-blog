"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[96826],{87978:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=t(84384),p=["components"],o={},s="Funktionen",d={unversionedId:"Programmieren-1/v24/Aufgaben/functions",id:"Programmieren-1/v24/Aufgaben/functions",isDocsHomePage:!1,title:"Funktionen",description:"06functions.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/06_functions.mdx",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/functions",permalink:"/Programmieren-1/v24/Aufgaben/functions",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/06_functions.mdx",tags:[],version:"current",lastUpdatedAt:1628611162,formattedLastUpdatedAt:"8/10/2021",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Gr\xfcfnisch",permalink:"/Programmieren-1/v24/Aufgaben/gruefnisch"},next:{title:"Zufallszahl",permalink:"/Programmieren-1/v24/Aufgaben/zufalls_zahl"}},u=[{value:"Voraussetzung",id:"voraussetzung",children:[],level:2},{value:"Zeichnungen mit Funktionen erzeugen",id:"zeichnungen-mit-funktionen-erzeugen",children:[],level:2}],m={toc:u};function k(e){var n=e.components,o=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funktionen"},"Funktionen"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(65684).Z},"06_functions.zip")),(0,r.kt)("h2",{id:"voraussetzung"},"Voraussetzung"),(0,r.kt)("p",null,"Sie haben auf ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website"},"jupyter.gbsl.website")," das ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5")," bis und mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5.1")," gelesen und bearbeitet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie ein Nikolaus-Haus. Um die L\xe4nge der Diagonalen zu bestimmen, m\xfcssen Sie die Wurzel aus ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," berechnen. Dies k\xf6nnen Sie, indem Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt")," (abk\xfcrzung f\xfcr Squareroot, \xfcbersetzt auf deutsch Quadratwurzel) aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," importieren:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from math import sqrt\nforward(100 * sqrt(2))\n")),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(70588).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verschieben Sie den Code, welche das Haus zeichnet, in eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"haus()")," und rufen Sie die Funktion auf, damit ein Haus gezeichnet wird.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Erzeugen Sie nun ein ganzes Quartier mit min. ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," H\xe4usern (Tipp. verwenden Sie eine Schleife). Die H\xe4user sollen zuf\xe4llig positioniert werden."),(0,r.kt)("p",{parentName:"li"},"Die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"randint(-10, 10)")," gibt eine zuf\xe4llige Zahl zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-10")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zur\xfcck."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"pos_x = randint(-10, 10)\npos_y = randint(-10, 10)\ngoto(pos_x, pos_y, draw=False)\n")),(0,r.kt)("p",{parentName:"li"},"Die Positionen sollen zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-150")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"150")," gesetzt werden."),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(62262).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc4ndern Sie die Funktion so, dass Sie die Gr\xf6sse des Hauses beim Funktionsaufruf mitgeben k\xf6nnen. ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(10)")," soll ein haus mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zeichnen, ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(100)")," eines mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(30208).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie eine farbeige Stadt:"),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(74082).Z,mdxType:"Image"})),(0,r.kt)("p",{parentName:"li"},"Dazu brauchen wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"cycle()"),", welche eine Liste auf einem Drehteller ablegt; nachdem die letzte Farbe verwendet wurde, wird wieder die erste Farbe zur\xfcckgegeben:"),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(44651).Z,mdxType:"Image"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from itertools import cycle\ncolors = [\n   'red',\n   'green',\n   'blue'\n]\ncolor_cycle = cycle(colors)\ncolor = next(color_cycle) # => red\ncolor = next(color_cycle) # => green\ncolor = next(color_cycle) # => blue\ncolor = next(color_cycle) # => red\n")),(0,r.kt)("p",{parentName:"li"},"Statt nur drei Farben, k\xf6nnen Sie auch bspw. die Regenbogenfarben verwenden:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"zeichnungen-mit-funktionen-erzeugen"},"Zeichnungen mit Funktionen erzeugen"),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"5 Funktionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"6 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," gibt es ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," Funktionstasten. Wird eine solche geklickt, wird im Skript mit derselben ",(0,r.kt)("inlineCode",{parentName:"p"},"DeviceID")," die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f1"),", bzw. ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f3")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f4")," aufgerufen."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1")," zeichnet ein Haus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2")," ein ",(0,r.kt)("inlineCode",{parentName:"li"},"8"),"eck"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F3")," einen ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"er Stern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F4")," \xe4ndert die Position mit ",(0,r.kt)("inlineCode",{parentName:"li"},"goto()")," zu einem zuf\xe4lligen neuen Punkt."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"7 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," k\xf6nnen auch die Steuertasten verwendet werden. Sobald eine solche Taste geklickt wird, wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_key(data)")," aufgerufen. In ",(0,r.kt)("inlineCode",{parentName:"p"},"data.key")," steht eine der folgenden Texte drin:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")),(0,r.kt)("p",{parentName:"li"},"Mit den Schl\xfcsselw\xf6rtern ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," ist es m\xf6glich, Codeteile nur dann auszuf\xfchren, wenn ein Vergleich zutrifft oder nicht."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'key = "up"\n\nif key == "down":\n   print("Runter")\nelif key == "up":\n   print("Rauf!!")\nelif key == "right":\n   print("Rechts!!")\nelif key == "left":\n   print("Links!")\nelse:\n   print("Unbekannte Richtung!!!")\n\nprint("Fertig")\n')))))),(0,r.kt)("p",null,"   Hier wird \xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," entspricht (nein). Falls nicht, wird mit ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," eine weitere Bedingung \xfcberpr\xfcft: ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," entspricht (ja). aller einger\xfcckte Code nach Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," ausgef\xfchrt - es wird also ",(0,r.kt)("inlineCode",{parentName:"p"},"Rauf!!")," ausgegeben. Danach springt die Code-Ausf\xfchrung direkt zu Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"14"),"."),(0,r.kt)("p",null,"   Was w\xfcrde ausgegeben wenn auf Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'key = "home"'),' stehen w\xfcrde? Alle Bedingungen w\xfcrden nicht zutreffen, weshalb der "Sonst"-Fall (',(0,r.kt)("inlineCode",{parentName:"p"},"else"),") eintrifft und die Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," ausgef\xfchrt wird."),(0,r.kt)("p",null,"   Schreiben Sie ein Programm, welches bei"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt nach vorn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach rechts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt r\xfcckw\xe4rts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach links")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")," nach hause (",(0,r.kt)("inlineCode",{parentName:"p"},"home()"),")"),(0,r.kt)("p",{parentName:"li"},"geht."),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"6: Bedingte Ausf\xfchrung"))))}k.isMDXComponent=!0},65684:function(e,n,t){n.Z=t.p+"assets/files/06_functions-3a9fda513eff6ff1f617e4714f33b3c8.zip"},44651:function(e,n,t){n.Z=t.p+"assets/images/06_cycle-ed37fca4977a34780ccdf9841152734a.gif"},70588:function(e,n,t){n.Z=t.p+"assets/images/06_house-0474f11f2b068a21a4e841e99cfb5f1c.png"},62262:function(e,n,t){n.Z=t.p+"assets/images/06e_house_city-ed3e3fb53455302aeb414a58b3ba3fee.png"},74082:function(e,n,t){n.Z=t.p+"assets/images/06e_house_color-cd2d6cd5968b17ac4a76ac37c21300b5.png"},30208:function(e,n,t){n.Z=t.p+"assets/images/06e_house_size-71f6f3c267949599552a87e320e92bb7.png"}}]);