"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[15586],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>l});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var M=n.createContext({}),o=function(e){var t=n.useContext(M),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},m=function(e){var t=o(e.components);return n.createElement(M.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,M=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),N=o(i),l=a,c=N["".concat(M,".").concat(l)]||N[l]||p[l]||r;return i?n.createElement(c,s(s({ref:t},m),{},{components:i})):n.createElement(c,s({ref:t},m))}));function l(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=N;var d={};for(var M in t)hasOwnProperty.call(t,M)&&(d[M]=t[M]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var o=2;o<r;o++)s[o]=i[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}N.displayName="MDXCreateElement"},65648:(e,t,i)=>{i.d(t,{Z:()=>D});var n=i(91189),a=i(67294),r=i(92814);const s="videoComponent_YfiL",d="headerClosed_s_Of",M="headerOpen_AzNA",o="minimize_pBQC",m="description_p2GN",p="title_YxV5",N="cardOpen_IEP6";var l=i(51436),c=i(86010);class D extends a.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",a.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:i}=e,{innerHeight:n}=window;t<n&&i>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:i,children:n}=this.props;return a.createElement("div",{ref:this.videoRef,className:s},this.state.open?a.createElement("div",{className:N},a.createElement("div",{className:M},e&&a.createElement("h5",{className:p},e),!this.props.expanded&&a.createElement("button",{className:(0,c.default)("button button--sm button--outline button--secondary",o),onClick:this.onClick},a.createElement(r.G,{icon:l.IQi})),n&&a.createElement("div",{className:m},n)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:t,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:l.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:d},a.createElement("div",{className:p},e||"Video"),n&&a.createElement("div",{className:m},n)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},a.createElement("source",{src:t,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:l.IJ7,spin:!0}))))}}},15967:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>M,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=i(83117),a=(i(67294),i(3905)),r=i(65648),s=i(44996);const d={sidebar_label:"Cloud",sidebar_custom_props:{id:"7a8f793a-7ad7-4e77-8280-39ffcae6ab35",source:{name:"rothe.io",ref:"https://rothe.io/?page=ict/writing/2-0-cloud"}}},M="Cloud",o={unversionedId:"ICT/cloud",id:"ICT/cloud",title:"Cloud",description:"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.",source:"@site/docs/ICT/5-cloud.mdx",sourceDirName:"ICT",slug:"/ICT/cloud",permalink:"/ICT/cloud",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/ICT/5-cloud.mdx",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:5,frontMatter:{sidebar_label:"Cloud",sidebar_custom_props:{id:"7a8f793a-7ad7-4e77-8280-39ffcae6ab35",source:{name:"rothe.io",ref:"https://rothe.io/?page=ict/writing/2-0-cloud"}}},sidebar:"sidebar",previous:{title:"E-Mail verwenden",permalink:"/ICT/E-Mail"},next:{title:"Datenverlust",permalink:"/ICT/Sicherheit/Datenverlust"}},m={},p=[{value:"Desktop-App ",id:"desktop-app-",level:2},{value:"Web-App ",id:"web-app-",level:2},{value:"Microsoft 365",id:"microsoft-365",level:2},{value:"OneDrive im Browser",id:"onedrive-im-browser",level:3},{value:"Teams-App",id:"teams-app",level:2}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=N("Comment"),c=N("Figure"),D=N("SourceRef"),u={toc:p};function g(e){let{components:t,...d}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"cloud"},"Cloud"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.\n\xdcblicherweise steht auf dem Server ebenfalls eine ",(0,a.kt)("a",{parentName:"p",href:"#Web-App"},"Web-App")," zu Verf\xfcgung, damit die Dateien im Browser betrachtet oder bearbeitet werden k\xf6nnen."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"desktop-app-"},"Desktop-App ",(0,a.kt)("i",{parentName:"h2",className:"mdi-file-word mdi blue m"})),(0,a.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Damit die Desktop-App verwendet werden kann, muss diese erst auf dem Ger\xe4t installiert worden sein. Desktop-Apps bieten meistens einen gr\xf6sseren Funktionsumfang, k\xf6nnen ohne aktive Internetverbindung gestartet und verwendet werden und sind meist performanter."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"web-app-"},"Web-App ",(0,a.kt)("i",{parentName:"h2",className:"mdi-file-word-outline mdi blue m"})),(0,a.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die Web-App wird beim \xd6ffnen des Dokuments vom Server des Anbieters heruntergeladen und im Browser (daher auf dem Prozessor des Laptops) ausgef\xfchrt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Web-App Architektur",src:i(1515).Z,width:"640",height:"288"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Web-App Architektur",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,a.kt)(D,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/ict/writing/images/cloud-app.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Einzelne Berechnungen k\xf6nnen auch in die Cloud ausgelagert werden, z.B. die Autokorrektur in der Word Web-App:\nBei jeder \xc4nderung wird der aktuelle Abschnitt an die Cloud geschickt und auf Fehler \xfcberpr\xfcft:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)(r.Z,{src:(0,s.Z)("/video/cloud-webapp-word-autokorrektur.mp4"),title:"Autokorrektur in Word Onine",expanded:!0,mdxType:"Video"},(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Auf der rechten Seite ist der Datenaustausch, der f\xfcr die Autokorrektur notwendig ist, ",(0,a.kt)("strong",{parentName:"p"},"vom Laptop zur Cloud")," zu sehen. Bei ",(0,a.kt)("strong",{parentName:"p"},"jeder \xc4nderung")," des Dokuments wird der ",(0,a.kt)("strong",{parentName:"p"},"ganze Inhalt")," des aktuellen Abschnitts an die Cloud geschickt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Web-Apps brauchen eine ",(0,a.kt)("strong",{parentName:"p"},"aktive Internetverbindung")," und sind oft auch etwas langsamer als Desktop-Apps. Meist ist zudem der Funktionsumfang eingeschr\xe4nkt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"microsoft-365"},"Microsoft 365"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h3",{parentName:"div",id:"onedrive-im-browser"},"OneDrive im Browser"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"In ",(0,a.kt)("strong",{parentName:"p"},"OneDrive im Browser")," kann eine Datei wahlweise in der Web-App oder in der Desktop-App ge\xf6ffnet werden. Mit einem Doppelklick wird die Datei in der Web-App ge\xf6ffnet. Klicke auf die drei vertikalen Punkte ",(0,a.kt)("kbd",{parentName:"p"},"\u22ee"),", dann auf \xd6ffnen und In der App \xf6ffnen, um die Datei in der Desktop-App zu \xf6ffnen."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:i(16080).Z,width:"822",height:"200"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"teams-app"},"Teams-App"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"In der ",(0,a.kt)("strong",{parentName:"p"},"Teams-App")," muss auf die drei horizontalen Punkte ",(0,a.kt)("kbd",{parentName:"p"},"\u22ee")," geklickt werden. Es gibt zus\xe4tzlich die M\xf6glichkeit ",(0,a.kt)("inlineCode",{parentName:"p"},"In Teams bearbeiten"),". In diesem Fall wird die Web-App verwendet, diese wird jedoch innerhalb der Team-App gestartet (die Teams-App kann einen Browser anzeigen)."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:i(9390).Z,width:"814",height:"146"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))}g.isMDXComponent=!0},1515:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjI4OHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNNDUwLjU4Myw0Ni40NjRDNDUwLjU4MywyOS42ODMgNDYzLjc2NCwxNi4wNTkgNDgwLDE2LjA1OUM0OTYuMjM2LDE2LjA1OSA1MDkuNDE3LDI5LjY4MyA1MDkuNDE3LDQ2LjQ2NEM1MTguODU5LDMxLjkzMSA1MzcuOTQsMjUuOTg5IDU1MiwzMy4yMDNDNTY2LjA2LDQwLjQxOCA1NjkuODEsNTguMDc0IDU2MC4zNjksNzIuNjA3QzU3Ni43MjIsNjQuMjE2IDU5Ni41OSw2Ny41NDkgNjA0LjcwOCw4MC4wNDRDNjEyLjgyNSw5Mi41MzkgNjA2LjEzOSwxMDkuNDk2IDU4OS43ODYsMTE3Ljg4N0M2MDguNjY5LDExNy44ODcgNjI0LDEyOS42MDEgNjI0LDE0NC4wMjlDNjI0LDE1OC40NTggNjA4LjY2OSwxNzAuMTcyIDU4OS43ODYsMTcwLjE3MkM2MDYuMTM5LDE3OC41NjIgNjEyLjgyNSwxOTUuNTE5IDYwNC43MDgsMjA4LjAxNUM1OTYuNTksMjIwLjUxIDU3Ni43MjIsMjIzLjg0MiA1NjAuMzY5LDIxNS40NTJDNTY5LjgxLDIyOS45ODUgNTY2LjA2LDI0Ny42NDEgNTUyLDI1NC44NTVDNTM3Ljk0LDI2Mi4wNjkgNTE4Ljg1OSwyNTYuMTI3IDUwOS40MTcsMjQxLjU5NEM1MDkuNDE3LDI1OC4zNzYgNDk2LjIzNiwyNzIgNDgwLDI3MkM0NjMuNzY0LDI3MiA0NTAuNTgzLDI1OC4zNzYgNDUwLjU4MywyNDEuNTk0QzQ0MS4xNDEsMjU2LjEyNyA0MjIuMDYsMjYyLjA2OSA0MDgsMjU0Ljg1NUMzOTMuOTQsMjQ3LjY0MSAzOTAuMTksMjI5Ljk4NSAzOTkuNjMxLDIxNS40NTJDMzgzLjI3OCwyMjMuODQyIDM2My40MSwyMjAuNTEgMzU1LjI5MiwyMDguMDE1QzM0Ny4xNzUsMTk1LjUxOSAzNTMuODYxLDE3OC41NjIgMzcwLjIxNCwxNzAuMTcyQzM1MS4zMzEsMTcwLjE3MiAzMzYsMTU4LjQ1OCAzMzYsMTQ0LjAyOUMzMzYsMTI5LjYwMSAzNTEuMzMxLDExNy44ODcgMzcwLjIxNCwxMTcuODg3QzM1My44NjEsMTA5LjQ5NiAzNDcuMTc1LDkyLjUzOSAzNTUuMjkyLDgwLjA0NEMzNjMuNDEsNjcuNTQ5IDM4My4yNzgsNjQuMjE2IDM5OS42MzEsNzIuNjA3QzM5MC4xOSw1OC4wNzQgMzkzLjk0LDQwLjQxOCA0MDgsMzMuMjAzQzQyMi4wNiwyNS45ODkgNDQxLjE0MSwzMS45MzEgNDUwLjU4Myw0Ni40NjRaIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgPHRleHQgeD0iNDU0LjA4N3B4IiB5PSI2NC43MzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+Q2xvdWQ8L3RleHQ+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSI0MTYiIHk9IjE4NC4wNTkiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDMwLjcxMXB4IiB5PSIyMDcuMDQ2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPm1laW5lIERhdGVpPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTMyMCwzMkMzMjAsMjMuMTY5IDMxMi44MzEsMTYgMzA0LDE2TDMyLDE2QzIzLjE2OSwxNiAxNiwyMy4xNjkgMTYsMzJMMTYsMTYwQzE2LDE2OC44MzEgMjMuMTY5LDE3NiAzMiwxNzZMMzA0LDE3NkMzMTIuODMxLDE3NiAzMjAsMTY4LjgzMSAzMjAsMTYwTDMyMCwzMloiIHN0eWxlPSJmaWxsOnJnYigxNzYsMTkwLDE5Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIxMzcuMDMzcHgiIHk9IjM5LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5MYXB0b3A8L3RleHQ+CiAgICA8ZyBpZD0iQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMTI4LDczLjcwNUMxMjgsNjguNDE0IDEyMy43MDQsNjQuMTE3IDExOC40MTIsNjQuMTE3TDQxLjU4OCw2NC4xMTdDMzYuMjk2LDY0LjExNyAzMiw2OC40MTQgMzIsNzMuNzA1TDMyLDE1MC40MTJDMzIsMTU1LjcwNCAzNi4yOTYsMTYwIDQxLjU4OCwxNjBMMTE4LjQxMiwxNjBDMTIzLjcwNCwxNjAgMTI4LDE1NS43MDQgMTI4LDE1MC40MTJMMTI4LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNjIuNDQxcHgiIHk9Ijg3LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcHA8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQnJvd3NlciI+CiAgICAgICAgPHBhdGggZD0iTTMwNCw3My43MDVDMzA0LDY4LjQxNCAyOTkuNzA0LDY0LjExNyAyOTQuNDEyLDY0LjExN0wxNTMuNTg4LDY0LjExN0MxNDguMjk2LDY0LjExNyAxNDQsNjguNDE0IDE0NCw3My43MDVMMTQ0LDE1MC40MTJDMTQ0LDE1NS43MDQgMTQ4LjI5NiwxNjAgMTUzLjU4OCwxNjBMMjk0LjQxMiwxNjBDMjk5LjcwNCwxNjAgMzA0LDE1NS43MDQgMzA0LDE1MC40MTJMMzA0LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTg2LjcwNXB4IiB5PSI4OC4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnJvd3NlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJXZWItQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMjg4LDExNS4yNTlDMjg4LDExMy40OTIgMjg2LjU2NiwxMTIuMDU5IDI4NC44LDExMi4wNTlMMTYzLjIsMTEyLjA1OUMxNjEuNDM0LDExMi4wNTkgMTYwLDExMy40OTIgMTYwLDExNS4yNTlMMTYwLDE0MC44NTlDMTYwLDE0Mi42MjUgMTYxLjQzNCwxNDQuMDU5IDE2My4yLDE0NC4wNTlMMjg0LjgsMTQ0LjA1OUMyODYuNTY2LDE0NC4wNTkgMjg4LDE0Mi42MjUgMjg4LDE0MC44NTlMMjg4LDExNS4yNTlaIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxMzApO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjE4Mi41MTZweCIgeT0iMTMzLjE3MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5XZWItQXBwPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IldlYi1BcHAxIiBzZXJpZjppZD0iV2ViLUFwcCI+CiAgICAgICAgPHBhdGggZD0iTTU0NCwxMTUuMjI5QzU0NCwxMTMuNDYzIDU0Mi41NjYsMTEyLjAyOSA1NDAuOCwxMTIuMDI5TDQxOS4yLDExMi4wMjlDNDE3LjQzNCwxMTIuMDI5IDQxNiwxMTMuNDYzIDQxNiwxMTUuMjI5TDQxNiwxNDAuODI5QzQxNiwxNDIuNTk1IDQxNy40MzQsMTQ0LjAyOSA0MTkuMiwxNDQuMDI5TDU0MC44LDE0NC4wMjlDNTQyLjU2NiwxNDQuMDI5IDU0NCwxNDIuNTk1IDU0NCwxNDAuODI5TDU0NCwxMTUuMjI5WiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MzguNTE2cHgiIHk9IjEzMy4xNzFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+V2ViLUFwcDwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik00MDMuOTk5LDIwMi4wMDJMNDE2LDIwOEw0MDQuMDAxLDIxNC4wMDJDNDA3LjAwMSwyMTEuMDAyIDQwNi45OTksMjA1LjAwMiA0MDMuOTk5LDIwMi4wMDJaIi8+CiAgICA8cGF0aCBkPSJNODAsMTYwLjA1OUw4MCwyMDguMDU5QzgwLDIwOC4wNTkgMzUxLjUyMywyMDguMDExIDQwNi40LDIwOC4wMDIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8cGF0aCBkPSJNMzAwLDEzNC4wMjlMMjg4LDEyOC4wMjlMMzAwLDEyMi4wMjlDMjk3LDEyNS4wMjkgMjk3LDEzMS4wMjkgMzAwLDEzNC4wMjlaIi8+CiAgICA8cGF0aCBkPSJNNDE2LDEyOC4wMjlMMjk3LjYsMTI4LjAyOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxwYXRoIGQ9Ik00MDQsMTg2TDQxNiwxOTJMNDA0LDE5OEM0MDcsMTk1IDQwNywxODkgNDA0LDE4NloiLz4KICAgIDxwYXRoIGQ9Ik0yMjQsMTQ0LjA1OUwyMjQsMTkyTDQwNi40LDE5MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KPC9zdmc+Cg=="},16080:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/onedrive-open-64614cd17252de6f9eee8e961b1081ef.png"},9390:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/teams-open-7af7b912b0949a4680003cee7244d493.png"}}]);