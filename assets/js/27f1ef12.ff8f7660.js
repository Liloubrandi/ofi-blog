"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6826],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=t(83117),r=(t(67294),t(3905));const a={},l="Funktionen",p={unversionedId:"Programmieren-1/v24/Aufgaben/functions",id:"Programmieren-1/v24/Aufgaben/functions",title:"Funktionen",description:"06functions.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/06_functions.mdx",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/functions",permalink:"/Programmieren-1/v24/Aufgaben/functions",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/06_functions.mdx",tags:[],version:"current",lastUpdatedAt:1628611162,formattedLastUpdatedAt:"10. Aug. 2021",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Gr\xfcfnisch",permalink:"/Programmieren-1/v24/Aufgaben/gruefnisch"},next:{title:"Zufallszahl",permalink:"/Programmieren-1/v24/Aufgaben/zufalls_zahl"}},o={},s=[{value:"Voraussetzung",id:"voraussetzung",level:2},{value:"Zeichnungen mit Funktionen erzeugen",id:"zeichnungen-mit-funktionen-erzeugen",level:2}],u=(m="Figure",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:s};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funktionen"},"Funktionen"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(45471).Z},"06_functions.zip")),(0,r.kt)("h2",{id:"voraussetzung"},"Voraussetzung"),(0,r.kt)("p",null,"Sie haben auf ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website"},"jupyter.gbsl.website")," das ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5")," bis und mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5.1")," gelesen und bearbeitet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie ein Nikolaus-Haus. Um die L\xe4nge der Diagonalen zu bestimmen, m\xfcssen Sie die Wurzel aus ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," berechnen. Dies k\xf6nnen Sie, indem Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt")," (abk\xfcrzung f\xfcr Squareroot, \xfcbersetzt auf deutsch Quadratwurzel) aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," importieren:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from math import sqrt\nforward(100 * sqrt(2))\n")),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(17609).Z,width:"724",height:"978"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verschieben Sie den Code, welche das Haus zeichnet, in eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"haus()")," und rufen Sie die Funktion auf, damit ein Haus gezeichnet wird.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Erzeugen Sie nun ein ganzes Quartier mit min. ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," H\xe4usern (Tipp. verwenden Sie eine Schleife). Die H\xe4user sollen zuf\xe4llig positioniert werden."),(0,r.kt)("p",{parentName:"li"},"Die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"randint(-10, 10)")," gibt eine zuf\xe4llige Zahl zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-10")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zur\xfcck."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"pos_x = randint(-10, 10)\npos_y = randint(-10, 10)\ngoto(pos_x, pos_y, draw=False)\n")),(0,r.kt)("p",{parentName:"li"},"Die Positionen sollen zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-150")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"150")," gesetzt werden."),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(10553).Z,width:"974",height:"980"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc4ndern Sie die Funktion so, dass Sie die Gr\xf6sse des Hauses beim Funktionsaufruf mitgeben k\xf6nnen. ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(10)")," soll ein haus mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zeichnen, ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(100)")," eines mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(83919).Z,width:"974",height:"980"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie eine farbeige Stadt:"),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(49502).Z,width:"974",height:"980"})),(0,r.kt)("p",{parentName:"li"},"Dazu brauchen wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"cycle()"),", welche eine Liste auf einem Drehteller ablegt; nachdem die letzte Farbe verwendet wurde, wird wieder die erste Farbe zur\xfcckgegeben:"),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(47167).Z,width:"540",height:"540"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from itertools import cycle\ncolors = [\n   'red',\n   'green',\n   'blue'\n]\ncolor_cycle = cycle(colors)\ncolor = next(color_cycle) # => red\ncolor = next(color_cycle) # => green\ncolor = next(color_cycle) # => blue\ncolor = next(color_cycle) # => red\n")),(0,r.kt)("p",{parentName:"li"},"Statt nur drei Farben, k\xf6nnen Sie auch bspw. die Regenbogenfarben verwenden:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"zeichnungen-mit-funktionen-erzeugen"},"Zeichnungen mit Funktionen erzeugen"),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"5 Funktionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"6 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," gibt es ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," Funktionstasten. Wird eine solche geklickt, wird im Skript mit derselben ",(0,r.kt)("inlineCode",{parentName:"p"},"DeviceID")," die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f1"),", bzw. ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f3")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f4")," aufgerufen."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1")," zeichnet ein Haus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2")," ein ",(0,r.kt)("inlineCode",{parentName:"li"},"8"),"eck"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F3")," einen ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"er Stern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F4")," \xe4ndert die Position mit ",(0,r.kt)("inlineCode",{parentName:"li"},"goto()")," zu einem zuf\xe4lligen neuen Punkt."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"7 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," k\xf6nnen auch die Steuertasten verwendet werden. Sobald eine solche Taste geklickt wird, wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_key(data)")," aufgerufen. In ",(0,r.kt)("inlineCode",{parentName:"p"},"data.key")," steht eine der folgenden Texte drin:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")),(0,r.kt)("p",{parentName:"li"},"Mit den Schl\xfcsselw\xf6rtern ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," ist es m\xf6glich, Codeteile nur dann auszuf\xfchren, wenn ein Vergleich zutrifft oder nicht."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'key = "up"\n\nif key == "down":\n   print("Runter")\nelif key == "up":\n   print("Rauf!!")\nelif key == "right":\n   print("Rechts!!")\nelif key == "left":\n   print("Links!")\nelse:\n   print("Unbekannte Richtung!!!")\n\nprint("Fertig")\n')))))),(0,r.kt)("p",null,"   Hier wird \xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," entspricht (nein). Falls nicht, wird mit ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," eine weitere Bedingung \xfcberpr\xfcft: ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," entspricht (ja). aller einger\xfcckte Code nach Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," ausgef\xfchrt - es wird also ",(0,r.kt)("inlineCode",{parentName:"p"},"Rauf!!")," ausgegeben. Danach springt die Code-Ausf\xfchrung direkt zu Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"14"),"."),(0,r.kt)("p",null,"   Was w\xfcrde ausgegeben wenn auf Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'key = "home"'),' stehen w\xfcrde? Alle Bedingungen w\xfcrden nicht zutreffen, weshalb der "Sonst"-Fall (',(0,r.kt)("inlineCode",{parentName:"p"},"else"),") eintrifft und die Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," ausgef\xfchrt wird."),(0,r.kt)("p",null,"   Schreiben Sie ein Programm, welches bei"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt nach vorn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach rechts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt r\xfcckw\xe4rts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach links")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")," nach hause (",(0,r.kt)("inlineCode",{parentName:"p"},"home()"),")"),(0,r.kt)("p",{parentName:"li"},"geht."),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"6: Bedingte Ausf\xfchrung"))))}c.isMDXComponent=!0},45471:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/06_functions-3a9fda513eff6ff1f617e4714f33b3c8.zip"},47167:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/06_cycle-ed37fca4977a34780ccdf9841152734a.gif"},17609:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/06_house-0474f11f2b068a21a4e841e99cfb5f1c.png"},10553:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/06e_house_city-ed3e3fb53455302aeb414a58b3ba3fee.png"},49502:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/06e_house_color-cd2d6cd5968b17ac4a76ac37c21300b5.png"},83919:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/06e_house_size-71f6f3c267949599552a87e320e92bb7.png"}}]);