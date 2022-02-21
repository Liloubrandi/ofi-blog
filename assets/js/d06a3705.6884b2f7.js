"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86958],{44866:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=["components"],d={title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},m="6. Dateiformate erkennen [^1]",p={unversionedId:"Codes-and-Data/Grafikformate/files",id:"Codes-and-Data/Grafikformate/files",title:"6. Dateiformate erkennen",description:"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:",source:"@site/docs/Codes-and-Data/02-Grafikformate/06-files.md",sourceDirName:"Codes-and-Data/02-Grafikformate",slug:"/Codes-and-Data/Grafikformate/files",permalink:"/Codes-and-Data/Grafikformate/files",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/02-Grafikformate/06-files.md",tags:[],version:"current",lastUpdatedAt:1644534991,formattedLastUpdatedAt:"2/10/2022",sidebarPosition:6,frontMatter:{title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},sidebar:"sidebar",previous:{title:"5. Vektorgrafik",permalink:"/Codes-and-Data/Grafikformate/vector"},next:{title:"Informationsgehalt",permalink:"/Codes-and-Data/Compression/redundancy"}},o=[{value:"Dateiformat",id:"dateiformat",children:[],level:2},{value:"Dateiendung",id:"dateiendung",children:[],level:2},{value:"Magische Bytes",id:"magische-bytes",children:[],level:2},{value:"<em>Internet Media Type</em>",id:"internet-media-type",children:[],level:2},{value:"Wichtige Dateiformate",id:"wichtige-dateiformate",children:[],level:2}],k={toc:o};function s(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-dateiformate-erkennen-"},"6. Dateiformate erkennen ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00100011 00100000 01000100 01100001 01110100 01100101 01101001 01100101 01101110 00001010 00101101 00101101 00101101 00001010 00001010 01000101 01101001 01101110 01100101 00100000 01000100 01100001 01110100 01100101 \u2026")),(0,r.kt)("h2",{id:"dateiformat"},"Dateiformat"),(0,r.kt)("p",null,"Die f\xfcr eine Datei verwendete Codierung wird auch ",(0,r.kt)("strong",{parentName:"p"},"Dateiformat")," genannt. Anhand der bin\xe4ren Daten alleine ist nicht erkennbar, was f\xfcr eine Codierung f\xfcr eine Datei verwendet wurde."),(0,r.kt)("p",null,"Ohne diese zus\xe4tzliche Information k\xf6nnen die Daten aber nicht decodiert werden. Bei jeder Datei muss also zus\xe4tzlich angegeben werden, welche Codierung f\xfcr diese Datei verwendet wurde."),(0,r.kt)("p",null,"Es gibt drei Ans\xe4tze, das Dateiformat (also die Codierung) einer Datei zu erkennen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dateiendung"),(0,r.kt)("li",{parentName:"ul"},"Magische Bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Internet Media Type"))),(0,r.kt)("h2",{id:"dateiendung"},"Dateiendung"),(0,r.kt)("p",null,"Eine Dateiendung wie ",(0,r.kt)("em",{parentName:"p"},".docx")," oder ",(0,r.kt)("em",{parentName:"p"},".jpg")," wird an den Dateinamen angeh\xe4ngt. Eine Dateiendung beginnt immer mit einem Punkt. So wird sie vom Dateinamen abgetrennt. Ein Betriebssystem wie Windows oder macOS verwendet die Dateiendung, um zu ermitteln, mit welcher Anwendung eine Datei ge\xf6ffnet werden soll."),(0,r.kt)("h2",{id:"magische-bytes"},"Magische Bytes"),(0,r.kt)("p",null,"Viele Dateiformate verwenden magische Bytes am Dateianfang zur Kennzeichnung, wie die enthaltenen Informationen codiert sind."),(0,r.kt)("p",null,"Beispielsweise beginnt jede ",(0,r.kt)("em",{parentName:"p"},".jpg"),"-Datei mit der Bitfolge ",(0,r.kt)("inlineCode",{parentName:"p"},"11111111 11011000 11111111"),". Diese Darstellung ist etwas lang und umst\xe4ndlich, daher wird h\xe4ufig das Hexadezimalsystem (16-er System) verwendet."),(0,r.kt)("h2",{id:"internet-media-type"},(0,r.kt)("em",{parentName:"h2"},"Internet Media Type")),(0,r.kt)("p",null,"Der ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," oder ",(0,r.kt)("em",{parentName:"p"},"MIME-Type")," ist ein Standard, mit welchem Codierungen f\xfcr die \xdcbermittlung von Daten im Internet angegeben werden. So teilt ein Webserver einem Browser per ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," mit, ob er einen Text, ein Bild oder ein Video \xfcbermittelt. Auch bei der \xdcbermittlung von E-Mails wird dieses System verwendet."),(0,r.kt)("p",null,"Ein ",(0,r.kt)("em",{parentName:"p"},"Internet Media Type")," besteht immer aus einem Haupt- und einem Untertype. Es gibt folgende Haupttypen:"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Typ"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application")),(0,r.kt)("td",{parentName:"tr",align:"left"},"anwendungsspezifische Codierungen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"audio")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Audiodaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Grafiken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"video")),(0,r.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Videomaterial"))))),(0,r.kt)("h2",{id:"wichtige-dateiformate"},"Wichtige Dateiformate"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Bezeichnung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Dateiendung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Internet Media Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Magische Bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPEG-Bild"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".jpg")," / ",(0,r.kt)("em",{parentName:"td"},".jpeg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image/jpeg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FF D8 FF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Portable Network Graphics"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".png")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image/png")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"89 50 4E 47 0D 0A 1A 0A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ZIP-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Word-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".docx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,r.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Excel-Datei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".xlsx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,r.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Portable Document Format"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".pdf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"application/pdf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"25 50 44 46 2D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Textdatei"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".txt")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Webseite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".html")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/html")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python-Programm"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},".py")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/python")),(0,r.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,r.kt)("br",null),"(ohne magische Bytes)"))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=206603"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);