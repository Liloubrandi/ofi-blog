"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87521],{97334:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var i=a(87462),t=a(63366),r=(a(67294),a(3905)),l=["components"],s={},u="Zufallszahl",o={unversionedId:"Programmieren-1/Aufgaben/zufalls_zahl",id:"version-24i/Programmieren-1/Aufgaben/zufalls_zahl",isDocsHomePage:!1,title:"Zufallszahl",description:"07zufallszahl.zip",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/07_zufalls_zahl.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/zufalls_zahl",permalink:"/24i/Programmieren-1/Aufgaben/zufalls_zahl",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/07_zufalls_zahl.md",tags:[],version:"24i",sidebarPosition:7,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Funktionen",permalink:"/24i/Programmieren-1/Aufgaben/functions"},next:{title:"Sieb des Eratosthenes",permalink:"/24i/Programmieren-1/Aufgaben/grid"}},d=[{value:"Voraussetzung",id:"voraussetzung",children:[],level:2},{value:"Aufgabe",id:"aufgabe",children:[],level:2},{value:"Vorgehen*",id:"vorgehen",children:[],level:2},{value:"Zusatz",id:"zusatz",children:[],level:2}],p={toc:d};function m(e){var n=e.components,s=(0,t.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zufallszahl"},"Zufallszahl"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(96535).Z},"07_zufallszahl.zip")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b"},"Tutorial")),(0,r.kt)("h2",{id:"voraussetzung"},"Voraussetzung"),(0,r.kt)("p",null,"Sie haben auf ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/02T_Schleifen.ipynb"},"jupyter.gbsl.website")," das ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 2.1")," gelesen und bearbeitet."),(0,r.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,r.kt)("p",null,"Auf einer langen Autfahrt spielen Maria und Bob das Zufallsspiel:"),(0,r.kt)("p",null,"Maria denkt sich eine Zahl zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"9")," aus. Err\xe4t Bob die Zahl in den ersten ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," versuchen, so hat er gewonnen, sonst Maria."),(0,r.kt)("p",null,"Aufgabe: Schreiben Sie ein Skript welches den Part von Maria \xfcbernimmt und das Zufallsspiel mit Ihnen spielt."),(0,r.kt)("p",null,"Um mit Python eine Zufallszahl zu erzeugen, brauchen wir die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"randint()")," aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"random"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from random import randint\n\nzufallszahl = randint(0, 9)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merke")," mit ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," wird die untere Grenze, mit ",(0,r.kt)("inlineCode",{parentName:"p"},"9")," die obere Grenze festgelegt. F\xfcr eine Zufallszahl zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," w\xfcrde der Aufruf also ",(0,r.kt)("inlineCode",{parentName:"p"},"randint(10, 100)")," lauten."),(0,r.kt)("h2",{id:"vorgehen"},"Vorgehen","*"),(0,r.kt)("p",null,"Wir brauchen eine Zufallszahl, m\xfcssen immer wissen wie viele Versuche bereits gemacht wurden und welche Zahl aktuell geraten wurde. F\xfcr diese drei Informationen braucht es Variablen."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Weisen Sie der Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"zufallszahl")," eine zuf\xe4llige Zahl zwischen ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"9")," zu."),(0,r.kt)("li",{parentName:"ol"},"Fragen Sie den Bentzer nach einer Zahl und speichern Sie das Resultat in einer Variable, z.B. ",(0,r.kt)("inlineCode",{parentName:"li"},"geraten")),(0,r.kt)("li",{parentName:"ol"},"Achtung, die Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"geraten")," muss noch in eine Zahl umgewandelt werden!"),(0,r.kt)("li",{parentName:"ol"},"Das war der erste Versuch! Weisen Sie der Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"versuche")," den Wert ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," zu."),(0,r.kt)("li",{parentName:"ol"},"Solange die geratene Zahl nicht der Zufallszahl entspricht und die Anzahl Versuche noch kleiner als ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," sind, wird erneut nach einer Zufallszahl gefragt und dabei immer die Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"versuch")," um ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," erh\xf6ht."),(0,r.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfen Sie nach der Schleife, ob Sie gewonnen haben, indem mit ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," \xfcberpr\xfcft wird, ob die geratene Zahl der Zufallszahl entspricht. In diesem Fall soll ",(0,r.kt)("inlineCode",{parentName:"li"},"Du gewinnst!!")," ausgegeben werden"),(0,r.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfen Sie weiter, ob die Maschine gewonnen hat, indem mit ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," \xfcberpr\xfcft wird, ob die geratene Zahl ",(0,r.kt)("strong",{parentName:"li"},"nicht")," der Zufallszahl entspricht. In diesem Fall soll ",(0,r.kt)("inlineCode",{parentName:"li"},"Die Maschine gewinnt")," ausgegeben werden.")),(0,r.kt)("h2",{id:"zusatz"},"Zusatz"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie das Skript so um, dass es nach einem Durchlauf wieder neu gestartet wird."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tipp")," Erzeugen Sie rund um das ganze Skript (aussert die ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," Zeilen) eine immer wahre ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," Schleife:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'while True:\n    print("Ich bin immer wahr...")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Binden Sie die Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"smartphone_connector")," ein und schicken Sie die Fragen und die Sieger-Nachrichten ans Smartphone. Beachten Sie, dass der Verbindungs-Aufbau (",(0,r.kt)("inlineCode",{parentName:"p"},"phone = Connector..."),") nur genau ein Mal gemacht werden sollte."),(0,r.kt)("p",{parentName:"li"},"Da Sie bereits wissen, dass der Benutzer eine Zahl eingeben soll, kann dies auch mitgegeben werden, so dass auf dem Smartphone eine Zahlen-Tastatur angezeigt wird. ",(0,r.kt)("strong",{parentName:"p"},"Achtung")," der R\xfcckgabewert ist dennoch ein Text."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from smartphone_connector import Connector\n\nphone = Connector("https://io.gbsl.website", "FooBar")\ngeraten = phone.input("Zufallszhal? ", input_type="number")\n')),(0,r.kt)("p",{parentName:"li"},"Zudem soll die Gewinner-Benachrichtigung vom Benutzer best\xe4tigt werden m\xfcssen. Dazu rufen Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"alert()")," statt ",(0,r.kt)("inlineCode",{parentName:"p"},"print()")," auf."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'phone.alert("Du gewinnst!")\n')))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"*"," Falls Ihnen die erste Aufgabe nicht gelingt: hier eine Video Anleitung dazu. Achtung, versuchen Sie es zuerst mit der Anleitung."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b"},"Video Anleitung")))}m.isMDXComponent=!0},96535:function(e,n,a){n.Z=a.p+"assets/files/07_zufallszahl-caf1d243b5e8569f1e2d45ba10506190.zip"}}]);