"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[66389],{36934:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={},c="While Schleife",u={unversionedId:"Programmieren-1/v24/Turtles/while-loop",id:"Programmieren-1/v24/Turtles/while-loop",isDocsHomePage:!1,title:"While Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/docs/Programmieren-1/v24/Turtles/003-while-loop.md",sourceDirName:"Programmieren-1/v24/Turtles",slug:"/Programmieren-1/v24/Turtles/while-loop",permalink:"/Programmieren-1/v24/Turtles/while-loop",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Turtles/003-while-loop.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"For Schleife",permalink:"/Programmieren-1/v24/Turtles/for-loop"},next:{title:"Begriff",permalink:"/Codierung/Begriff"}},d=[],s={toc:d};function p(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"while-schleife"},"While Schleife"),(0,o.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife kann man sich wie ein kleines Kind auf einer Wanderung vorstellen, das nach jedem Schritt wieder dieselbe Frage stellt: ",(0,o.kt)("em",{parentName:"p"},"Sind wir schon da?"),". Solange das Ziel noch nicht erreicht ist, muss das Kind aber den n\xe4chsten Schritt machen."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife stellt ebenfalls immerzu dieselbe Frage, die jeweils mit Ja (",(0,o.kt)("inlineCode",{parentName:"p"},"True"),") oder Nein (",(0,o.kt)("inlineCode",{parentName:"p"},"False"),") beantwortet wird. Solange die Frage mit ",(0,o.kt)("em",{parentName:"p"},"Ja")," beantwortet wird, wird der Code-Teil erneut wiederholt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f53cdb80-f26f-463c-b399-a2104cecf834",live_py:!0,id:"f53cdb80-f26f-463c-b399-a2104cecf834"},"from turtle import *\ncounter = 0\n\nwhile counter < 4:\n    forward(100)\n    left(90)\n    counter = counter + 1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\ncounter = 0               # counter = 0\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 1\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 2\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 3\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 4\n\n# Bedingung: \u274c (counter ist nicht mehr kleiner als 4)\n# --\x3e wiederholung abbrechen\n")),(0,o.kt)("h1",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f78c086e-30d9-4805-b3b8-fb4269ddd712",live_py:!0,id:"f78c086e-30d9-4805-b3b8-fb4269ddd712"},"from turtle import *\n\npenup()\ngoto(-30, 0)\npendown()\n\ncounter = 0\nwhile counter < 8:\n    forward(60)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-30, 100)\npendown()\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    right(45)\n    counter = counter + 1\n\npenup()\ngoto(30, 100)\npendown()\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-48, 40)\npendown()\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\ncounter = 0\nwhile counter < 3:\n    forward(40)\n    left(45)\n    counter = counter + 1\n")))}p.isMDXComponent=!0}}]);