"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8715],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,b=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return r?t.createElement(b,o(o({ref:n},m),{},{components:r})):t.createElement(b,o({ref:n},m))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59568:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={},o="Regenbogen Display",l={unversionedId:"Programmieren-1/v24/Aufgaben/smartphone_rainbow",id:"Programmieren-1/v24/Aufgaben/smartphone_rainbow",title:"Regenbogen Display",description:"02smartphonerainbow.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/02_smartphone_rainbow.md",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/smartphone_rainbow",permalink:"/Programmieren-1/v24/Aufgaben/smartphone_rainbow",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/02_smartphone_rainbow.md",tags:[],version:"current",lastUpdatedAt:1628611162,formattedLastUpdatedAt:"10.8.2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Turtle Graphics",permalink:"/Programmieren-1/v24/Aufgaben/turtles"},next:{title:"Ein- und Ausgabe: Aufgabe",permalink:"/Programmieren-1/v24/Aufgaben/io"}},p={},s=[{value:"Verbindung herstellen",id:"verbindung-herstellen",level:2}],m={toc:s};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"regenbogen-display"},"Regenbogen Display"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(51691).Z},"02_smartphone_rainbow.zip")),(0,a.kt)("p",null,"Mit der Python-Bibliothek ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/smartphone-connector/"},"smartphone-connector")," kann eine Verbindung mit dem Smartphone aufgebaut werden."),(0,a.kt)("p",null,"\xd6ffnen Sie dazu mit dem Smartphone die Website ",(0,a.kt)("a",{parentName:"p",href:"https://io.gbsl.website"},"https://io.gbsl.website")," und geben Sie bei der ",(0,a.kt)("strong",{parentName:"p"},"DeviceID")," Ihren Namen (oder einen Alias-Namen) ein. Diese DeviceID brauchen wir anschliessend, um die Befehle ans richtige Smartphone zu schicken."),(0,a.kt)("p",null,"Es gibt aktuell drei verschiedene Interaktionsm\xf6glichkeiten: ",(0,a.kt)("inlineCode",{parentName:"p"},"Steuertasten"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Farbdisplay")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Farbraster"),". Heute verwenden wir nur das ",(0,a.kt)("inlineCode",{parentName:"p"},"Farbdisplay"),"."),(0,a.kt)("h2",{id:"verbindung-herstellen"},"Verbindung herstellen"),(0,a.kt)("p",null,"Mit dem Smartphone auf die ",(0,a.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_panel"},"Farbdisplay"),"-Seite gehen. Das folgende Skript stellt den Bildschirm zuerst auf auf rot und nach 0.5 Sekunden dann auf orange."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Die Bibliothek laden - sie nimmt uns viel Arbeit ab\nfrom smartphone_connector import Connector\n\n\n#                      Hier die DeviceID ihres Smartphones eingeben\n#                                                    \u2193\nconnector = Connector('https://io.gbsl.website', 'DeviceID')\n\n# die Anzeigefarbe auf dem Smartphone auf rot setzen\nconnector.set_color('red')\n\n# 0.5 Sekunden warten\nconnector.sleep(0.5)\n\n# die Anzeigefarbe auf dem Smartphone auf cyan setzen\nconnector.set_color('orange')\n")),(0,a.kt)("h1",{id:"aufgabe"},"Aufgabe"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(51691).Z},"Skripts Herunterladen")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben Sie ein Skript, das jede Regenbogenfarbe eine Sekunde lang auf Ihrem Smartphone anzeigt."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,a.kt)("a",{parentName:"p",href:"/Programmieren-1/v24/Turtles/while-loop"},"While-Schleife"),". Versuchen Sie dieses Konzept hier zu verwenden, um die Farbreihenfolge unendlich lange auf dem Smartphone abzuspielen. Sie m\xfcssen dazu eine Bedingung finden, die immer Wahr bleibt.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,a.kt)("a",{parentName:"p",href:"/Programmieren-1/v24/Turtles/for-loop"},"For-Schleife"),". Passen Sie ihren Code so an, dass eine ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," Schleife f\xfcr die verschiedenen Farben verwendet wird."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Tipp"),": folgender zeigt nacheinander die Farben ",(0,a.kt)("em",{parentName:"p"},"schwarz"),", ",(0,a.kt)("em",{parentName:"p"},"weiss")," und ",(0,a.kt)("em",{parentName:"p"},"grau")," an:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-py"},"for color in ['black', 'white', 'gray']:\n   connector.set_color(color)\n   connector.sleep(0.5)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Spielen Sie mit der Anzeigedauer der Farben. K\xf6nnen Sie ein Stroboskop erzeugen? (",(0,a.kt)("strong",{parentName:"p"},"!!Achtung"),", bei Eptileptikern k\xf6nnen solche Strobo-Effekte zu einem Anfall f\xfchren. Sie d\xfcrfen das Strobo-Ger\xe4t daher niemandem ungefragt vorhalten.)"))))}c.isMDXComponent=!0},51691:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/files/02_smartphone_rainbow-bff079c0785cda106209fc54f5405170.zip"}}]);