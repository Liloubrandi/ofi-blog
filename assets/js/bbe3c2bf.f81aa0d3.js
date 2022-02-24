"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[36576],{7564:function(t,e,a){var n=a(86010),r=a(67294),i=a(97566),l=/[ENIR]/gi,d=/[BCDFGHJKLMOPQUVWXYZ]/gi,g=[{find:/\xe4/g,replace:"ae"},{find:/\xf6/g,replace:"oe"},{find:/\xfc/g,replace:"ue"},{find:/\xc4/g,replace:"Ae"},{find:/\xd6/g,replace:"Oe"},{find:/\xdc/g,replace:"Ue"},{find:/\s+/g,replace:" "},{find:/^\s/g,replace:""},{find:/\s$/g,replace:""}];e.Z=function(){var t=r.useState(""),e=t[0],a=t[1],m=r.useState("frequent"),p=m[0],o=m[1],s=r.useState(""),k=s[0],f=s[1];return r.useEffect((function(){if(0!==e.length){var t=function(t){return g.reduce((function(t,e){return t.replace(e.find,e.replace)}),t)}(e);switch(console.log(t,t.replace(l,""),t.replace(d,"")),p){case"frequent":f(t.replace(l,""));break;case"rare":f(t.replace(d,""))}}}),[e,p]),r.createElement("div",{className:(0,n.default)("hero","shadow--lw",i.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Buchstaben Redundanz"),r.createElement("h4",null,"Originaltext"),r.createElement("textarea",{className:(0,n.default)(i.Z.input),value:e,onChange:function(t){a(t.target.value)},rows:5,placeholder:"Originaltext"}),r.createElement("div",{className:(0,n.default)("buttongroup",i.Z.modes)},r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","frequent"===p&&"button--active"),title:"H\xe4ufige: "+l.source.slice(1,-1).split("").join(", "),onClick:function(){return o("frequent")}},"H\xe4ufige Entfernen"),r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","rare"===p&&"button--active"),onClick:function(){return o("rare")},title:"Seltene: "+d.source.slice(1,-1).split("").join(", ")},"Seltene entfernen")),r.createElement("h4",null,"Ausgabe"),r.createElement("p",null,"Ohne: ",("frequent"===p?l:d).source.slice(1,-1).split("").join(", ")),r.createElement("textarea",{className:(0,n.default)(i.Z.input),value:k,onChange:function(){},rows:5,placeholder:"Ausgabe"})))}},31433:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return f}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(84384),d=a(7564),g=["components"],m={title:"2. Informationsgehalt",label:"2. Informationsgehalt"},p="2. Informationsgehalt [^1]",o={unversionedId:"Codes-and-Data/Compression/redundancy",id:"Codes-and-Data/Compression/redundancy",title:"2. Informationsgehalt",description:"Buchstabenh\xe4ufigkeit",source:"@site/docs/Codes-and-Data/03-Compression/02-redundancy.md",sourceDirName:"Codes-and-Data/03-Compression",slug:"/Codes-and-Data/Compression/redundancy",permalink:"/Codes-and-Data/Compression/redundancy",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/03-Compression/02-redundancy.md",tags:[],version:"current",lastUpdatedAt:1645693179,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:2,frontMatter:{title:"2. Informationsgehalt",label:"2. Informationsgehalt"},sidebar:"sidebar",previous:{title:"1. Huffman-Codierung",permalink:"/Codes-and-Data/Compression/huffman"},next:{title:"Schl\xfcsselanh\xe4nger",permalink:"/Codes-and-Data/QR-Codes/qr"}},s=[{value:"Buchstabenh\xe4ufigkeit",id:"buchstabenh\xe4ufigkeit",children:[],level:2},{value:"Informationsgehalt",id:"informationsgehalt",children:[],level:2}],k={toc:s};function f(t){var e=t.components,m=(0,r.Z)(t,g);return(0,i.kt)("wrapper",(0,n.Z)({},k,m,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-informationsgehalt-"},"2. Informationsgehalt ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"buchstabenh\xe4ufigkeit"},"Buchstabenh\xe4ufigkeit"),(0,i.kt)("p",null,"Die Buchstabenh\xe4ufigkeit gibt an, wie oft ein Buchstabe in einem Text vorkommen. Die H\xe4ufigkeit der einzelnen Buchstaben ist je nach Sprache unterschiedlich. Das folgende Diagramm zeigt die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(98817).Z,mdxType:"Image"})),(0,i.kt)("h2",{id:"informationsgehalt"},"Informationsgehalt"),(0,i.kt)("p",null,"Wir f\xfchren ein Experiment durch. Aus einem deutschen Text werden etwa 40% der Buchstaben entfernt. Zuerst werden die vier h\xe4ufigsten Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," entfernt. Danach werden diese Buchstaben sowie ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," beibehalten und die restlichen entfernt. Obschon etwa die gleiche Menge Buchstaben entfernt worden sind, bleibt der Text nach dem Entfernen der h\xe4ufigen Buchstaben verst\xe4ndlicher."),(0,i.kt)(d.Z,{mdxType:"Redundancy"}),(0,i.kt)("p",null,"Offenbar tragen die h\xe4ufigen Buchstaben weniger zum Inhalt des Textes bei. Sie haben einen kleineren ",(0,i.kt)("strong",{parentName:"p"},"Informationsgehalt"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u2b50\ufe0f Huffman Codierung f\xfcr die deutsche Sprache"),(0,i.kt)("p",null,"Die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten kann der folgenden Tabelle entnommen werden:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},"15.99%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.34%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.40%"),(0,i.kt)("td",{parentName:"tr",align:null},"J"),(0,i.kt)("td",{parentName:"tr",align:null},"0.27 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"9.59%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.92%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.22%"),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:null},"0.24 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.71%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.11%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.71%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.06%"),(0,i.kt)("td",{parentName:"tr",align:null},"\xdf"),(0,i.kt)("td",{parentName:"tr",align:null},"0.15 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.60%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.21%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.94%"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"0.13 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.43%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.80%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.63%"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"0.07 %")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.41%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.02%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.50%"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.54%"),(0,i.kt)("td",{parentName:"tr",align:null},"Q"),(0,i.kt)("td",{parentName:"tr",align:null},"0.04 %"))))),(0,i.kt)("p",null,"Daraus ergibt sich"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",options:{},isInline:!1,src:a(290).Z,alt:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",mdxType:"Image"})),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"(leer)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0101"),(0,i.kt)("td",{parentName:"tr",align:"right"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Q"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11100110111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01111"),(0,i.kt)("td",{parentName:"tr",align:"right"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1111")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0011")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},"110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1110010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11100110110")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"J"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111001100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1110011010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000111"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000100"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10101101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},"01110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"111001110")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10101100")))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=195436"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},(0,i.kt)("a",{parentName:"li",href:"http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/german-letter-frequencies/"},"Practical Cryptography: German Letter Frequencies"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},97566:function(t,e){e.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},290:function(t,e,a){e.Z=a.p+"assets/images/huffman-german-e146d68a9775a0c649a0f99a6e760185.svg"},98817:function(t,e,a){e.Z=a.p+"assets/images/letter-frequency-de-589f8e0aa0703df3d1fd96ead993c13b.svg"}}]);