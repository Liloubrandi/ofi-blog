(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[17553],{64502:(e,a,n)=>{"use strict";n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>d,toc:()=>l});var t=n(83117),i=(n(67294),n(3905)),r=n(93456);const m={sidebar_custom_props:{id:"91a22690-48d6-4d3b-b355-36ea196f45c5"}},s="Programmiersprachen",d={unversionedId:"EF-Python/Programmiersprachen/index",id:"EF-Python/Programmiersprachen/index",title:"Programmiersprachen",description:"Jede Programmiersprache hat eigene Regeln und Richtlinien, wie ein Programm geschrieben wird. Es wird dabei zwischen der Syntax und der Semantik unterschieden.",source:"@site/docs/EF-Python/01-Programmiersprachen/index.md",sourceDirName:"EF-Python/01-Programmiersprachen",slug:"/EF-Python/Programmiersprachen/",permalink:"/EF-Python/Programmiersprachen/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/01-Programmiersprachen/index.md",tags:[],version:"current",lastUpdatedAt:1661517503,formattedLastUpdatedAt:"26. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"91a22690-48d6-4d3b-b355-36ea196f45c5"}},sidebar:"sidebar",previous:{title:"Kryptow\xe4rhung",permalink:"/Cryptocurrency/Kryptowaehrung"},next:{title:"Sprachelemente",permalink:"/EF-Python/Sprachelemente"}},p={},l=[{value:"Sprachstufen",id:"sprachstufen",level:2},{value:"Maschinensprache",id:"maschinensprache",level:2},{value:"Assembler Sprache",id:"assembler-sprache",level:2},{value:"Hochsprachen",id:"hochsprachen",level:2},{value:"Kompilierte Sprachen",id:"kompilierte-sprachen",level:3},{value:"Interpretierte Sprachen",id:"interpretierte-sprachen",level:3}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},o=c("Comment"),h=c("GTabs"),g=c("Figure"),I={toc:l};function N(e){let{components:a,...m}=e;return(0,i.kt)("wrapper",(0,t.Z)({},I,m,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"programmiersprachen"},"Programmiersprachen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Jede Programmiersprache hat eigene Regeln und Richtlinien, wie ein Programm geschrieben wird. Es wird dabei zwischen der Syntax und der Semantik unterschieden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dt",{parentName:"dl"},"Syntax\n"),(0,i.kt)("dd",{parentName:"dl"},"W\xf6rter und Symbole, die in einer Programmiersprache verwendet werden d\xfcrfen"),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-flash-triangle mdi red"})," Fehler werden bereits vor dem Programmstart erkannt"),(0,i.kt)("dt",{parentName:"dl"},"Semantik\n"),(0,i.kt)("dd",{parentName:"dl"},"Inhaltliche Bedeutung des Codes"),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-information mdi blue"})," Die Bedeutung ergibt sich durch die Verwendung der gegebenen Syntax"),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-flash-triangle mdi red"})," Fehler werden erst zur Laufzeit erkannt")),(0,i.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Mittlerweilen gibt es eine schier un\xfcberschaubar grosse Anzahl an Programmiersprachen (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_programming_languages_by_type"},"Liste aller Programmiersprachen"),"). Im EF werden wir zu Beginn mit Python 3 programmieren, bevor wir dann auch Einblicke in andere Programmiersprachen und Dom\xe4nenspezifische Sprachen (SQL) erhalten werden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"sprachstufen"},"Sprachstufen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bei der Klassifizierung von Programmiersprachen wird aktuell unter vier Typen von Programmiersprachen unterschieden:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)(r.Mermaid,{config:{},chart:"graph TD\n    A(Maschinensprache) --- B(Assembler)\n    B --- C(Hochsprache)\n    C --- D[Kompilierte Sprachen]\n    C --- E[Interpretierte Sprachen]",mdxType:"Mermaid"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wobei die Interpretierten Sprachen auch oft Skriptsprachen genannt werden"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"maschinensprache"},"Maschinensprache"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zu den Pionierzeiten der Computerentwicklung war die einzige M\xf6glichkeit, ein Programm f\xfcr einen Computer zu erstellen, dieses in bin\xe4rem Maschinencode zu schreiben (bzw. auf Lochkarten zu stanzen). Aufgrund ihrere f\xfcr Menschen extrem schwer verst\xe4ndlichen Form ist die Programmierung in Maschinensprache nicht mehr gebr\xe4uchlich."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Maschinensprache kann direkt von einer CPU ausgef\xfchrt werden. "),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"achtung-"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung "),(0,i.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Maschinencode l\xe4uft nicht einfach auf allen Prozessoren - je nach Aufbau/Architektur des Prozessors m\xfcssen andere Befehle verwendet werden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    0  00101001111101100111101101\n    1  00101001111110101110000010\n    2  10001001010101000100000000\n    3  00101001111101100100100101\n    4  10001001010101000100000000\n    5  00100110001110010111001100\n    6  01010111110110100100010010\n    7  00100110010001010101110100\n    8  00011000000100100011110011\n    9  10000101100000111101000011\n    10 01110110010000010111100011\n    11 00100111001000111110110000\n    12 00101001111101100111101101\n    13 00101001111111000111000010\n    14 10001001010101000100000000\n    15 00101001111101100110001001\n    16 00100110010000110001111000   \n    17 10001001010101000100000000\n    18 00101001111101100111101101\n    19 00101001111111100011001010\n    20 10001001010101000100000000\n    21 00101001111101100110001001\n    22 00100110010011001110001000\n    23 10001001010101000100000000\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"unlesbar, unver\xe4nderbar"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"nur ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linus_Torvalds"},"Linus Torvalds"),", Erfinder von Linux, schreibt und \xe4ndert Maschinencode"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In einigen wenigen Spezialf\xe4llen (wenn z.B. der eigentliche Quellcode oder die urspr\xfcngliche Programmierumgebung nicht mehr verf\xfcgbar ist) kann es unter Umst\xe4nden erforderlich sein, direkt den Maschinencode zu bearbeiten."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"assembler-sprache"},"Assembler Sprache"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Assembler gibt es als Erleichterung f\xfcr die Programmierer:in sogenannte mnemonische K\xfcrzel (Mnemonics), die eine Ged\xe4chtnisst\xfctze f\xfcr die entsprechend m\xf6glichen CPU-Befehle sein sollen, bspw. ",(0,i.kt)("inlineCode",{parentName:"p"},"addiu")," f\xfcr die ",(0,i.kt)("em",{parentName:"p"},"Addition von positiven ganzen Zahlen")," (",(0,i.kt)("em",{parentName:"p"},"Add Integer Unsigned"),").\nDie Assemblersprache ist gerade noch verst\xe4ndlich f\xfcr einen Menschen und kann leicht von einem Programm, dem sogenannten ",(0,i.kt)("strong",{parentName:"p"},"Compiler")," in Maschinensprache \xfcbersetzt werden, da f\xfcr jeden Mnemonics ein CPU-Befehl existiert. Dennoch ist Assembler-Sprache bereits auf eine CPU-Architektur zugeschnitten und es muss im Voraus entschieden werden, welches Ziel man sich vornimmt (nicht jede CPU-Familie weist dieselbe Befehlspalette auf)."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)(r.Mermaid,{chart:"graph LR\n    A[Assembler]--\x3eB(Compiler)--\x3eC[Maschinen Code]\n    style B fill:#3578e5,color:white",mdxType:"Mermaid"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein einfaches Beispiel einer Addition von zwei ganzen Zahlen"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mips",metastring:"{7-10} showLineNumbers","{7-10}":!0,showLineNumbers:!0},"sum:\n    addiu   $sp,$sp,-8\n    sw      $fp,4($sp)\n    move    $fp,$sp\n    sw      $4,8($fp)\n    sw      $5,12($fp)\n    lw      $3,8($fp)\n    lw      $2,12($fp)\n    nop\n    addiu   $2,$3,$2\n    move    $sp,$fp\n    lw      $fp,4($sp)\n    addiu   $sp,$sp,8\n    jr      $31\n    nop\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Aufgrund der m\xfchseligen Programmierung und der fehlenden Portabilit\xe4t von Programmen auf unterschiedliche Systeme ist Assembler nicht f\xfcr komplexe Projekte zu empfehlen. F\xfcr bestimmte zeitkritische Aufgaben (Echtzeit), wo es auf Geschwindigkeit ankommt (bspw. Grafiktreiber) oder nur sehr wenig Platz zur Verf\xfcgung steht (embedded systems), wird auch heute noch auf Assembler zur\xfcckgegriffen."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"hochsprachen"},"Hochsprachen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Hochsprachen wird eine Abstraktionsschicht f\xfcr komplexen Funktionen wie"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Speichermanagment"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Repetition von immer gleichen Mustern"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Betriebssystemabh\xe4ngige Unterschiede"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"hinzugef\xfcgt. Dadurch m\xfcssen Programmierer:innen Algorithmen nicht f\xfcr jede CPU-Architektur neu schreiben. Zudem ist der Code nochmals bedeutend besser lesbar als in der Assembler Sprache."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Obiges Beispiel in Assemblersprache sieht in Hochsprachen wie folgt aus:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)(h,{getLabel:e=>["C","Java","C#","Python","Ruby","JavaScript"][e],highlighted:[],mdxType:"GTabs"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:"showLineNumbers",showLineNumbers:!0},'#include <stdio.h>\n\nint sum(int zahl1, int zahl2) {\n    return zahl1 + zahl2;\n}\n\nint main()\n{\n    printf("3 + 4 = %d", sum(3, 4));\n    return 0;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyClass {\n    public static int sum(int zahl1, int zahl2) {\n        return zahl1 + zahl2;\n    }\n    public static void main(String args[]) {\n      System.out.println("3 + 4 = " + sum(3, 4));\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'using System;\n                    \npublic class Program\n{\n    public static int sum(int zahl1, int zahl2)\n    {\n        return zahl1 + zahl2;\n    }\n\n    public static void Main()\n    {\n        int s = sum(3, 4);\n        Console.WriteLine($"3 + 4 = {s}");\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def sum(zahl1, zahl2):\n    return zahl1 + zahl2\n\nprint(f'3 + 4 = {sum(3, 4)}')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rb",metastring:"showLineNumbers",showLineNumbers:!0},'def sum(zahl1, zahl2)\n    return zahl1 + zahl2\nend\n\nputs "3 + 4 = #{sum(3, 4)}"\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"function sum(zahl1, zahl2) {\n    return zahl1 + zahl2;\n}\nconsole.log(`3 + 4 = ${sum(3, 4)}`)\n"))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Was f\xe4llt Ihnen bei den verschiedenen Programmiersprachen auf?"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Hochsprachen wird zus\xe4tzlich unterschieden zwischen ",(0,i.kt)("strong",{parentName:"p",className:"underline"},"kompilierten")," und ",(0,i.kt)("strong",{parentName:"p",className:"underline"},"interpretierten")," Sprachen."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"kompilierte-sprachen"},"Kompilierte Sprachen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("span",{className:"badge badge--secondary"},"C")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"C#")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"Java")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"..."),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wie bei der Assemblersprache muss ein geschriebenes Programm durch einen Compiler in Maschinensprache \xfcbersetzt werden. Dieser Prozess ist bei Hochsprachen um einiges komplexer als bei Assemblersprache, da keine direkte \xdcbersetzung m\xf6glich ist. Da das Programm nach der Kompilierung von einem Prozessor ausgef\xfchrt wird, braucht es einen vorgegebenen Einstiegspunkt - eine Funktion namens ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". "),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,i.kt)(r.Mermaid,{chart:"graph LR\n    A[C/C#]--\x3eB(Compiler)--\x3eC[Maschinen Code]\n    style B fill:#3578e5,color:white",mdxType:"Mermaid"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("div",{parentName:"div"},(0,i.kt)("details",{parentName:"div"},(0,i.kt)("summary",{parentName:"details"},"Zwischenschritt Bytecode"),(0,i.kt)("div",{parentName:"details",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Einige kompilierte Sprachen verwenden zur Erh\xf6hung der Portabilit\xe4t eine Zwischensprache, sogenannter Bytecode verwendet. Dieser Bytecode ist quasi die Maschinensprache f\xfcr eine virtuelle Maschine (",(0,i.kt)("strong",{parentName:"p"},"VM")," f\xfcr Virtual Machine). Um den Bytecode auszuf\xfchren, muss also lediglich die VM auf einem System installiert werden, und der Bytecode kann ausgef\xfchrt werden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,i.kt)(r.Mermaid,{chart:"graph LR\n    A[Java]--\x3eB(Compiler)--\x3eC(Bytecode)--\x3eD[Virtuelle Maschine]\n    style B fill:#3578e5,color:white\n\tstyle C fill:#ffba00",mdxType:"Mermaid"}))),(0,i.kt)(o,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"interpretierte-sprachen"},"Interpretierte Sprachen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,i.kt)("span",{className:"badge badge--secondary"},"Python")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"Ruby")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"Java Script")," ",(0,i.kt)("span",{className:"badge badge--secondary"},"..."),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"F\xfcr die Programmierung einer Skriptsprache braucht es keine Installation eines zus\xe4tzlichen Compilers. Die Programmiersprache, also bspw. Python, interpretiert den Quellcode direkt. Dazu wird der Code gelesen (",(0,i.kt)("strong",{parentName:"p",className:"underline"},"Parsen"),") und gem\xe4ss der Syntax-Vorgaben in einen Syntax-Baum (",(0,i.kt)("strong",{parentName:"p",className:"underline"},"AST"),", ",(0,i.kt)("em",{parentName:"p"},"Abstract Syntax Tree"),") \xfcbersetzt. "),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"272px",justifyContent:"center"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Python Code"',title:'"Python','Code"':!0},"def sum(zahl1, zahl2):\n    return zahl1 + zahl2\n")))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"400px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"\xdcbersetzer AST",src:n(59837).Z,width:"608",height:"539"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"\xdcbersetzer AST",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(o,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/ef-24/Programmieren/Visualize-AST.ipynb"},"\ud83d\udc49 Jupyter Notebook zur Erzeugung eines AST"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Auf dieser Basis entscheidet der Interpreter f\xfcr jeden Knoten im Baum, welche kompilierte Funktion ausgef\xfchrt werden soll. Diese kompilierten Funktionen werden oft in ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," geschrieben und bei der Installation der Programmiersprache in Maschinencode compiliert (bzw. bereits compiliert heruntergeladen)."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,i.kt)(r.Mermaid,{chart:"graph LR\n    A[Skriptsprache]--\x3eB(AST)\n    subgraph interp [Interpreter]\n        B--\x3eC(Evaluieren)\n    end\n    style interp fill:#00a400,color:white",mdxType:"Mermaid"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Da kein eigentlicher Compile-Schritt notwendig ist, muss bei Skriptsprachen auch keine ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," als Einstiegspunkt vorhanden sein. Zudem ist es im Gegensatz zu kompilierten Sprachen m\xf6glich, den Quellcode von laufenden Programmen zu ver\xe4ndern. Deshalb ist es etwa auch m\xf6glich, eine interaktive Code-Konsole (",(0,i.kt)("strong",{parentName:"p",className:"underline"},"REPL")," ",(0,i.kt)("strong",{parentName:"p"},"R"),"ead",(0,i.kt)("strong",{parentName:"p"},"E"),"valuate",(0,i.kt)("strong",{parentName:"p"},"P"),"rint",(0,i.kt)("strong",{parentName:"p"},"L"),"oop) f\xfcr Skriptsprachen auszuf\xfchren."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Insgesamt ist das Arbeiten mit Skriptsprachen mit weniger Konfigurationsaufwand, weniger Standardcode (Boilerplate Code) verbunden und daher effizienter. Der Nachteil ist, dass die Programme deutlich langsamer (ca. 10x langsamer) ausgef\xfchrt werden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Jupyter Notebook: ",(0,i.kt)("a",{target:"_blank",href:n(19740).Z},"\u2b07\ufe0f Visualize-AST.ipynb"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/01-Programmiersprachen/code/Visualize-AST.ipynb"},(0,i.kt)("i",{parentName:"a",className:"mdi-github mdi "})," Github")),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}N.isMDXComponent=!0},19740:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/files/Visualize-AST-a3f93dd343ca75734808450e2edb4658.ipynb"},11748:(e,a,n)=>{var t={"./locale":89234,"./locale.js":89234};function i(e){var a=r(e);return n(a)}function r(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=r,e.exports=i,i.id=11748},59837:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDU2cHQiIGhlaWdodD0iNDA0cHQiIHZpZXdCb3g9IjAuMDAgMC4wMCA0NTYuMDAgNDA0LjAwIj4KPGcgaWQ9ImdyYXBoMCIgY2xhc3M9ImdyYXBoIiB0cmFuc2Zvcm09InNjYWxlKDEgMSkgcm90YXRlKDApIHRyYW5zbGF0ZSg0IDQwMCkiPgo8dGl0bGU+JTM8L3RpdGxlPgo8cG9seWdvbiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ0cmFuc3BhcmVudCIgcG9pbnRzPSItNCw0IC00LC00MDAgNDUyLC00MDAgNDUyLDQgLTQsNCIvPgo8IS0tIDAgLS0+CjxnIGlkPSJub2RlMSIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MDwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTA0IiB5PSItMzc1LjMiIGZvbnQtZmFtaWx5PSJDb3VyaWVyLG1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDQwODAiPk1vZHVsZTwvdGV4dD4KPC9nPgo8IS0tIDEgLS0+CjxnIGlkPSJub2RlMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MTwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iODMuNSIgeT0iLTMwMy4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDA0MDgwIj5GdW5jdGlvbkRlZjwvdGV4dD4KPC9nPgo8IS0tIDAmIzQ1OyYjNDU7MSAtLT4KPGcgaWQ9ImVkZ2UxIiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT4wLS0xPC90aXRsZT4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgZD0iTTEyOSwtMzU5LjdDMTI5LC0zNDguODUgMTI5LC0zMzQuOTIgMTI5LC0zMjQuMSIvPgo8L2c+CjwhLS0gMiAtLT4KPGcgaWQ9Im5vZGUzIiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT4yPC90aXRsZT4KPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzYiIHk9Ii0yMzAuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODAwMDQwIj4mcXVvdDtzdW0mcXVvdDs8L3RleHQ+CjwvZz4KPCEtLSAxJiM0NTsmIzQ1OzIgLS0+CjxnIGlkPSJlZGdlMiIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+MS0tMjwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xMzAsLTI4N0MxMzAsLTI4NyA5Mi44MiwtMjY2LjQzIDY1LjIzLC0yNTEuMTciLz4KPC9nPgo8IS0tIDMgLS0+CjxnIGlkPSJub2RlNCIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MzwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTEuNSIgeT0iLTIzMS4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDA0MDgwIj5hcmd1bWVudHM8L3RleHQ+CjwvZz4KPCEtLSAxJiM0NTsmIzQ1OzMgLS0+CjxnIGlkPSJlZGdlMyIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+MS0tMzwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xMzAsLTI4N0MxMzAsLTI4NyAxMjkuNjIsLTI2Ny4xOSAxMjkuMzMsLTI1Mi4wMyIvPgo8L2c+CjwhLS0gOCAtLT4KPGcgaWQ9Im5vZGU5IiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT44PC90aXRsZT4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyMjkiIHk9Ii0yMzEuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwNDA4MCI+UmV0dXJuPC90ZXh0Pgo8L2c+CjwhLS0gMSYjNDU7JiM0NTs4IC0tPgo8ZyBpZD0iZWRnZTgiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjEtLTg8L3RpdGxlPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMTMwLC0yODdDMTMwLC0yODcgMTg0LjA0LC0yNjQuMzQgMjIwLjc3LC0yNDguOTQiLz4KPC9nPgo8IS0tIDQgLS0+CjxnIGlkPSJub2RlNSIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+NDwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMzQuNSIgeT0iLTE1OS4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDA0MDgwIj5hcmc8L3RleHQ+CjwvZz4KPCEtLSAzJiM0NTsmIzQ1OzQgLS0+CjxnIGlkPSJlZGdlNCIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+My0tNDwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xMjEsLTIxNUMxMjEsLTIxNSA5Mi44MSwtMTk1LjE5IDcxLjIzLC0xODAuMDMiLz4KPC9nPgo8IS0tIDYgLS0+CjxnIGlkPSJub2RlNyIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+NjwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTE2LjUiIHk9Ii0xNTkuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwNDA4MCI+YXJnPC90ZXh0Pgo8L2c+CjwhLS0gMyYjNDU7JiM0NTs2IC0tPgo8ZyBpZD0iZWRnZTYiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjMtLTY8L3RpdGxlPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMTIxLC0yMTVDMTIxLC0yMTUgMTI0LjA1LC0xOTUuMTkgMTI2LjM4LC0xODAuMDMiLz4KPC9nPgo8IS0tIDUgLS0+CjxnIGlkPSJub2RlNiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+NTwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3IiB5PSItODYuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODAwMDQwIj4mcXVvdDt6YWhsMSZxdW90OzwvdGV4dD4KPC9nPgo8IS0tIDQmIzQ1OyYjNDU7NSAtLT4KPGcgaWQ9ImVkZ2U1IiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT40LS01PC90aXRsZT4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgZD0iTTQ0LjUzLC0xNDMuN0M0Mi45OCwtMTMyLjg1IDQwLjk5LC0xMTguOTIgMzkuNDQsLTEwOC4xIi8+CjwvZz4KPCEtLSA3IC0tPgo8ZyBpZD0ibm9kZTgiIGNsYXNzPSJub2RlIj4KPHRpdGxlPjc8L3RpdGxlPgo8dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIxMjkiIHk9Ii04Ni4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4MDAwNDAiPiZxdW90O3phaGwyJnF1b3Q7PC90ZXh0Pgo8L2c+CjwhLS0gNiYjNDU7JiM0NTs3IC0tPgo8ZyBpZD0iZWRnZTciIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjYtLTc8L3RpdGxlPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMTI5LC0xNDMuN0MxMjksLTEzMi44NSAxMjksLTExOC45MiAxMjksLTEwOC4xIi8+CjwvZz4KPCEtLSA5IC0tPgo8ZyBpZD0ibm9kZTEwIiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT45PC90aXRsZT4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyNDciIHk9Ii0xNTkuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwNDA4MCI+QmluT3A8L3RleHQ+CjwvZz4KPCEtLSA4JiM0NTsmIzQ1OzkgLS0+CjxnIGlkPSJlZGdlOSIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+OC0tOTwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0yNTcuNDYsLTIxNS43QzI1OS42MywtMjA0Ljg1IDI2Mi40MiwtMTkwLjkyIDI2NC41OCwtMTgwLjEiLz4KPC9nPgo8IS0tIDEwIC0tPgo8ZyBpZD0ibm9kZTExIiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT4xMDwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTk0IiB5PSItODcuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwNDA4MCI+TmFtZTwvdGV4dD4KPC9nPgo8IS0tIDkmIzQ1OyYjNDU7MTAgLS0+CjxnIGlkPSJlZGdlMTAiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjktLTEwPC90aXRsZT4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgZD0iTTI3MSwtMTQzQzI3MSwtMTQzIDI0OC4xNCwtMTIzLjE5IDIzMC42NSwtMTA4LjAzIi8+CjwvZz4KPCEtLSAxMyAtLT4KPGcgaWQ9Im5vZGUxNCIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MTM8L3RpdGxlPgo8dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIyODMiIHk9Ii04Ni4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4MDAwNDAiPkFkZDwvdGV4dD4KPC9nPgo8IS0tIDkmIzQ1OyYjNDU7MTMgLS0+CjxnIGlkPSJlZGdlMTMiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjktLTEzPC90aXRsZT4KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgZD0iTTI3MSwtMTQzQzI3MSwtMTQzIDI3NS41NywtMTIzLjE5IDI3OS4wNywtMTA4LjAzIi8+CjwvZz4KPCEtLSAxNCAtLT4KPGcgaWQ9Im5vZGUxNSIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MTQ8L3RpdGxlPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjMzOCIgeT0iLTg3LjMiIGZvbnQtZmFtaWx5PSJDb3VyaWVyLG1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDQwODAiPk5hbWU8L3RleHQ+CjwvZz4KPCEtLSA5JiM0NTsmIzQ1OzE0IC0tPgo8ZyBpZD0iZWRnZTE0IiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT45LS0xNDwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0yNzEsLTE0M0MyNzEsLTE0MyAzMDMuNCwtMTIyLjk0IDMyNy45NiwtMTA3Ljc0Ii8+CjwvZz4KPCEtLSAxMSAtLT4KPGcgaWQ9Im5vZGUxMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+MTE8L3RpdGxlPgo8dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIxNDQiIHk9Ii0xNC4zIiBmb250LWZhbWlseT0iQ291cmllcixtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4MDAwNDAiPiZxdW90O3phaGwxJnF1b3Q7PC90ZXh0Pgo8L2c+CjwhLS0gMTAmIzQ1OyYjNDU7MTEgLS0+CjxnIGlkPSJlZGdlMTEiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjEwLS0xMTwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0yMDYsLTcxQzIwNiwtNzEgMTgyLjM4LC01MS4xOSAxNjQuMywtMzYuMDMiLz4KPC9nPgo8IS0tIDEyIC0tPgo8ZyBpZD0ibm9kZTEzIiBjbGFzcz0ibm9kZSI+Cjx0aXRsZT4xMjwvdGl0bGU+Cjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIyNiIgeT0iLTE0LjMiIGZvbnQtZmFtaWx5PSJDb3VyaWVyLG1vbm9zcGFjZSIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzgwMDA0MCI+TG9hZDwvdGV4dD4KPC9nPgo8IS0tIDEwJiM0NTsmIzQ1OzEyIC0tPgo8ZyBpZD0iZWRnZTEyIiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT4xMC0tMTI8L3RpdGxlPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMjA2LC03MUMyMDYsLTcxIDIxMy42MiwtNTEuMTkgMjE5LjQ1LC0zNi4wMyIvPgo8L2c+CjwhLS0gMTUgLS0+CjxnIGlkPSJub2RlMTYiIGNsYXNzPSJub2RlIj4KPHRpdGxlPjE1PC90aXRsZT4KPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzM5IiB5PSItMTQuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODAwMDQwIj4mcXVvdDt6YWhsMiZxdW90OzwvdGV4dD4KPC9nPgo8IS0tIDE0JiM0NTsmIzQ1OzE1IC0tPgo8ZyBpZD0iZWRnZTE1IiBjbGFzcz0iZWRnZSI+Cjx0aXRsZT4xNC0tMTU8L3RpdGxlPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMzYwLC03MUMzNjAsLTcxIDM1MiwtNTEuMTkgMzQ1Ljg4LC0zNi4wMyIvPgo8L2c+CjwhLS0gMTYgLS0+CjxnIGlkPSJub2RlMTciIGNsYXNzPSJub2RlIj4KPHRpdGxlPjE2PC90aXRsZT4KPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iNDIxIiB5PSItMTQuMyIgZm9udC1mYW1pbHk9IkNvdXJpZXIsbW9ub3NwYWNlIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODAwMDQwIj5Mb2FkPC90ZXh0Pgo8L2c+CjwhLS0gMTQmIzQ1OyYjNDU7MTYgLS0+CjxnIGlkPSJlZGdlMTYiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPjE0LS0xNjwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0zNjAsLTcxQzM2MCwtNzEgMzgzLjI0LC01MS4xOSA0MDEuMDMsLTM2LjAzIi8+CjwvZz4KPC9nPgo8L3N2Zz4="}}]);