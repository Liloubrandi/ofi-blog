"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[27766],{12416:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},l="Regenbogen Display",p={unversionedId:"Programmieren-1/Aufgaben/smartphone_rainbow",id:"version-24K/Programmieren-1/Aufgaben/smartphone_rainbow",isDocsHomePage:!1,title:"Regenbogen Display",description:"02smartphonerainbow.zip",source:"@site/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/02_smartphone_rainbow.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/smartphone_rainbow",permalink:"/24K/Programmieren-1/Aufgaben/smartphone_rainbow",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/02_smartphone_rainbow.md",tags:[],version:"24K",sidebarPosition:2,frontMatter:{},sidebar:"version-24K/sidebar",previous:{title:"Turtle Graphics",permalink:"/24K/Programmieren-1/Aufgaben/turtles"},next:{title:"Ein- und Ausgabe: Aufgabe",permalink:"/24K/Programmieren-1/Aufgaben/io"}},m=[{value:"Verbindung herstellen",id:"verbindung-herstellen",children:[],level:2}],d={toc:m};function u(e){var n=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regenbogen-display"},"Regenbogen Display"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(97490).Z},"02_smartphone_rainbow.zip")),(0,i.kt)("p",null,"Mit der Python-Bibliothek ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/smartphone-connector/"},"smartphone-connector")," kann eine Verbindung mit dem Smartphone aufgebaut werden."),(0,i.kt)("p",null,"\xd6ffnen Sie dazu mit dem Smartphone die Website ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website"},"https://io.gbsl.website")," und geben Sie bei der ",(0,i.kt)("strong",{parentName:"p"},"DeviceID")," Ihren Namen (oder einen Alias-Namen) ein. Diese DeviceID brauchen wir anschliessend, um die Befehle ans richtige Smartphone zu schicken."),(0,i.kt)("p",null,"Es gibt aktuell drei verschiedene Interaktionsm\xf6glichkeiten: ",(0,i.kt)("inlineCode",{parentName:"p"},"Steuertasten"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbdisplay")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbraster"),". Heute verwenden wir nur das ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbdisplay"),"."),(0,i.kt)("h2",{id:"verbindung-herstellen"},"Verbindung herstellen"),(0,i.kt)("p",null,"Mit dem Smartphone auf die ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_panel"},"Farbdisplay"),"-Seite gehen. Das folgende Skript stellt den Bildschirm zuerst auf auf rot und nach 0.5 Sekunden dann auf orange."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Die Bibliothek laden - sie nimmt uns viel Arbeit ab\nfrom smartphone_connector import Connector\n\n\n#                      Hier die DeviceID ihres Smartphones eingeben\n#                                                    \u2193\nconnector = Connector('https://io.gbsl.website', 'DeviceID')\n\n# die Anzeigefarbe auf dem Smartphone auf rot setzen\nconnector.set_color('red')\n\n# 0.5 Sekunden warten\nconnector.sleep(0.5)\n\n# die Anzeigefarbe auf dem Smartphone auf cyan setzen\nconnector.set_color('orange')\n")),(0,i.kt)("h1",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(97490).Z},"Skripts Herunterladen")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Skript, das jede Regenbogenfarbe eine Sekunde lang auf Ihrem Smartphone anzeigt."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,i.kt)("a",{parentName:"p",href:"/24K/Programmieren-1/Turtles/while-loop"},"While-Schleife"),". Versuchen Sie dieses Konzept hier zu verwenden, um die Farbreihenfolge unendlich lange auf dem Smartphone abzuspielen. Sie m\xfcssen dazu eine Bedingung finden, die immer Wahr bleibt.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,i.kt)("a",{parentName:"p",href:"/24K/Programmieren-1/Turtles/for-loop"},"For-Schleife"),". Passen Sie ihren Code so an, dass eine ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleife f\xfcr die verschiedenen Farben verwendet wird."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipp"),": folgender zeigt nacheinander die Farben ",(0,i.kt)("em",{parentName:"p"},"schwarz"),", ",(0,i.kt)("em",{parentName:"p"},"weiss")," und ",(0,i.kt)("em",{parentName:"p"},"grau")," an:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for color in ['black', 'white', 'gray']:\n   connector.set_color(color)\n   connector.sleep(0.5)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spielen Sie mit der Anzeigedauer der Farben. K\xf6nnen Sie ein Stroboskop erzeugen? (",(0,i.kt)("strong",{parentName:"p"},"!!Achtung"),", bei Eptileptikern k\xf6nnen solche Strobo-Effekte zu einem Anfall f\xfchren. Sie d\xfcrfen das Strobo-Ger\xe4t daher niemandem ungefragt vorhalten.)"))))}u.isMDXComponent=!0},97490:function(e,n,r){n.Z=r.p+"assets/files/02_smartphone_rainbow-bff079c0785cda106209fc54f5405170.zip"}}]);