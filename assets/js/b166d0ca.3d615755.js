"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1365],{4494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return o},default:function(){return f}});var i=n(87462),l=n(63366),a=(n(67294),n(3905)),s=["components"],r={title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python"},c="\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",d={unversionedId:"Kryptologie/Antike/python-tools",id:"Kryptologie/Antike/python-tools",isDocsHomePage:!1,title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",description:"Skytale",source:"@site/docs/Kryptologie/02-Antike/08-python-tools.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/python-tools",permalink:"/Kryptologie/Antike/python-tools",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/08-python-tools.md",tags:[],version:"current",lastUpdatedAt:1635004281,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:8,frontMatter:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python"},sidebar:"sidebar",previous:{title:"Vign\xe8re-Chiffre",permalink:"/Kryptologie/Antike/Vignere"},next:{title:"Umwandlung ins Bin\xe4rsystem",permalink:"/Kryptologie/Symmetrisch/binaer"}},o=[{value:"Skytale",id:"skytale",children:[],level:2},{value:"Polybios",id:"polybios",children:[],level:2},{value:"Caesar-Chiffre",id:"caesar-chiffre",children:[],level:2},{value:"Substitutions-Chiffre",id:"substitutions-chiffre",children:[],level:2}],p={toc:o};function f(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-antike-verschl\xfcsselung-mit-python"},"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python"),(0,a.kt)("h2",{id:"skytale"},"Skytale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__skytale.py id=401ae4f3-626c-4f6f-95a0-bf366b9ae1c3",live_py:!0,title:"to__skytale.py",id:"401ae4f3-626c-4f6f-95a0-bf366b9ae1c3"},"klartext = 'Skytale'\nschl\xfcssel = 3\n\nzeilen = []\n\n# f\xfcge f\xfcr jede Zeile einen leeren Text ein\nfor i in range(schl\xfcssel):\n    zeilen.append('')\n\n# verteile die Buchstaben auf die Zeilen\nnr = 0\nfor buchstabe in klartext:\n    zeilen[nr] = zeilen[nr] + buchstabe\n    nr = nr + 1\n    if nr == schl\xfcssel:\n        nr = 0\n# alle Zeilen mit einer neuen Zeile verkn\xfcpfen\nverschl\xfcsselt = '\\n'.join(zeilen)\n\nprint(verschl\xfcsselt)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__skytale.py id=b53eb042-3589-4bab-b504-36243f65af67",live_py:!0,title:"from__skytale.py",id:"b53eb042-3589-4bab-b504-36243f65af67"},"verschl\xfcsselt = '''\\\nSte\nka\nyl'''\n\nzeilen = verschl\xfcsselt.splitlines()\n# die erste Zeile gibt vor, wie viele Spalten es gibt\nspalten = len(zeilen[0])\n\nklartext = ''\n\n# f\xfcr jede Spalte...\nfor spalte in range(spalten):\n    # wird in jeder Zeile...\n    for zeile in zeilen:\n        if len(zeile) > spalte:\n            # der Buchstabe in dieser Spalte dem Text hinzugef\xfcgt\n            klartext = klartext + zeile[spalte]\n\nprint(klartext)\n")),(0,a.kt)("h2",{id:"polybios"},"Polybios"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__polybios.py id=7de16f01-3830-43dc-9ce6-6cf0b0161e9a",live_py:!0,title:"to__polybios.py",id:"7de16f01-3830-43dc-9ce6-6cf0b0161e9a"},"QUADRAT = [\n    'A', 'B', 'C', 'D', 'E',\n    'F', 'G', 'H', 'I', 'K',\n    'L', 'M', 'N', 'O', 'P',\n    'Q', 'R', 'S', 'T', 'U',\n    'E', 'X', 'Y', 'Z', ' '\n]\nklartext = 'Hallo'\n\nklartext = klartext.upper().replace('J', 'I').replace('V', 'U')\nverschl\xfcsselt = ''\nfor buchstabe in klartext:\n    index = QUADRAT.index(buchstabe)\n    spalte = index % 5 # berechnet den ganzzahligen Rest bei einer Division durch 5\n    zeile = index // 5 # berechnet die ganzzahlige Division durch 5\n    verschl\xfcsselt = verschl\xfcsselt + f'{zeile + 1}{spalte + 1} '\n\nprint(verschl\xfcsselt.strip()) # strip entfernt Leerzeichen an den R\xe4ndern\n")),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Lesen Sie das Programm durch und versuchen Sie, jede Zeile zu verstehen."),(0,a.kt)("p",{parentName:"div"},"Flicken Sie den Code, so dass der verschl\xfcsselte Text lesbar wird. "),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__polybios.py id=2a72f129-612f-45f5-9972-ac82561bc97e",live_py:!0,title:"from__polybios.py",id:"2a72f129-612f-45f5-9972-ac82561bc97e"},"QUADRAT = [\n    'A', 'B', 'C', 'D', 'E',\n    'F', 'G', 'H', 'I', 'K',\n    'L', 'M', 'N', 'O', 'P',\n    'Q', 'R', 'S', 'T', 'U',\n    'E', 'X', 'Y', 'Z', ' '\n]\n\nverschl\xfcsselt = '35 34 31 53 12 24 34 43'\nklartext = ''\nzahlen = verschl\xfcsselt.split(' ')\nfor zahl in zahlen:\n    zeile = int(zahl[0])\n    spalte = int(zahl[1])\n    index = 0\n    klartext = klartext + QUADRAT[index]\n\nprint(klartext)\n")))),(0,a.kt)("h2",{id:"caesar-chiffre"},"Caesar-Chiffre"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__caesar.py id=4f0f7d8d-a2d3-4c2f-b05f-ed9bd6b52b33",live_py:!0,title:"to__caesar.py",id:"4f0f7d8d-a2d3-4c2f-b05f-ed9bd6b52b33"},"ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\nSCHL\xdcSSEL = 'D'\nROT = ALPHABET.index(SCHL\xdcSSEL)\n\nklartext = 'CAESAR'\n\nklartext = klartext.upper()\nverschl\xfcsselt = ''\nfor buchstabe in klartext:\n    index = ALPHABET.index(buchstabe) + ROT\n    index = index % 26 # ganzzahliger Rest bei Division durch 26\n    verschl\xfcsselt = verschl\xfcsselt + ALPHABET[index]\n\nprint(verschl\xfcsselt)\n")),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\xc4ndern Sie den Code so ab, dass der verschl\xfcsselte Text wieder entschl\xfcsselt werden kann."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__caesar.py id=ebc928b8-7ff6-4566-9438-475718cedc03",live_py:!0,title:"from__caesar.py",id:"ebc928b8-7ff6-4566-9438-475718cedc03"},"ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\nSCHL\xdcSSEL = 'D'\nROT = ALPHABET.index(SCHL\xdcSSEL)\n\nverschl\xfcsselt = 'JDLXV'\n\nverschl\xfcsselt = klartext.upper()\nklartext = ''\nfor buchstabe in verschl\xfcsselt:\n    index = 0\n    klartext = klartext + ALPHABET[index]\n\nprint(klartext)\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u2b50\ufe0f Zusatz"),(0,a.kt)("p",{parentName:"div"},"Sie haben eine geheime Nachricht abgefangen, kennen aber den Schl\xfcssel nicht. Sie wissen aber, dass ",(0,a.kt)("inlineCode",{parentName:"p"},"ALCZLJ")," ein sinnvolles Wort ergeben muss. Schreiben Sie ein Programm, das alle m\xf6glichen Schl\xfcssel durchprobiert und jeweils den entschl\xfcsselten Text ausdruckt."),(0,a.kt)("p",{parentName:"div"},"Verwenden Sie die Ausgangslage aus dem obigen Programm."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hack__caesar.py id=a99f0b6f-07cd-4498-b0d7-69af7aed70dd",live_py:!0,title:"hack__caesar.py",id:"a99f0b6f-07cd-4498-b0d7-69af7aed70dd"},"verschl\xfcsselt = 'ALCZLJ'\n"))))),(0,a.kt)("h2",{id:"substitutions-chiffre"},"Substitutions-Chiffre"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__substitution.py id=db63b078-a82a-4f00-90df-729ed1901f07",live_py:!0,title:"to__substitution.py",id:"db63b078-a82a-4f00-90df-729ed1901f07"},"ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nSCHL\xdcSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')\n\nklartext = 'HEUTE GEHE ICH IM WALD JOGGEN'\nklartext = klartext.upper()\nverschl\xfcsselt = ''\n\nfor buchstabe in klartext:\n    if buchstabe in ALPHABET:\n        index = ALPHABET.index(buchstabe)\n        verschl\xfcsselt = verschl\xfcsselt + SCHL\xdcSSEL[index]\n    else:\n        verschl\xfcsselt = verschl\xfcsselt + buchstabe\n\nprint(verschl\xfcsselt)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__substitution.py id=25d474c6-eef5-485f-b721-b6338cfc8889",live_py:!0,title:"from__substitution.py",id:"25d474c6-eef5-485f-b721-b6338cfc8889"},"ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nSCHL\xdcSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')\n\nverschl\xfcsselt = 'EXV SEFL QMW CIAAGEWALW WIXV SELG'\nverschl\xfcsselt = verschl\xfcsselt.upper()\nklartext = ''\n\nfor buchstabe in verschl\xfcsselt:\n    if buchstabe in SCHL\xdcSSEL:\n        index = SCHL\xdcSSEL.index(buchstabe)\n        klartext = klartext + ALPHABET[index]\n    else:\n        klartext = klartext + buchstabe\n\nprint(klartext)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=schl\xfcssel.py id=94fcf1be-7efe-4ebd-98a6-1c2a4fa43957",live_py:!0,title:"schl\xfcssel.py",id:"94fcf1be-7efe-4ebd-98a6-1c2a4fa43957"},"from random import shuffle\nschl\xfcssel='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nshuffle(schl\xfcssel)\nprint(' '.join(schl\xfcssel))\n")))}f.isMDXComponent=!0}}]);