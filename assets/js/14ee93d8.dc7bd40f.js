(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2959],{73830:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(72389);const r={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",controls:"controls_xr2C"};var d=a(86010),i=a(67294),o=a(16187),s=a(92814),m=a(51436);const l=e=>{const[t,a]=(0,i.useState)(null),[l,c]=(0,i.useState)(-1),[p,u]=(0,i.useState)(e.width),[f,k]=(0,i.useState)(150),v=(0,n.Z)(),[N,g]=(0,i.useState)(!1);i.useEffect((()=>(window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)})),[]);const h=i.useRef(null),b=()=>{if(!h.current)return;const e=h.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;k(t)}},w=()=>{if(!h.current)return;const t=.98*h.current.getBoundingClientRect().width;b();let a=t,n=!1;e.width&&e.scale?a=Math.min(e.width*e.scale,t):e.width?a=Math.min(e.width,t):e.scale&&(a=e.scale*t),e.minWidth&&a<e.minWidth&&(a=e.minWidth,n=!0),n!==N&&g(n),u(a)},C=e=>{const{scrollX:a,scrollY:n}=window;c(l+e>t?1:l+e<1?t:l+e),setTimeout((()=>{window.scrollTo(a,n)}),0)};return v?i.createElement("div",{className:(0,d.default)(r.pdfWrapper,N&&r.overflowing,(t<=1||void 0!==e.page)&&r.singlepage),ref:h},i.createElement("div",{style:{height:f+8+"px"}},i.createElement(o.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:n}=t;a(n),l<0&&c(e.page||1),w()},className:(0,d.default)(r.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},l>0&&i.createElement(o.T3,{pageNumber:l,width:p,onLoadSuccess:b}),!e.noDownload&&i.createElement("a",{href:e.file,className:(0,d.default)(r.download,"button","button--secondary","button--sm"),download:e.name},i.createElement(s.G,{icon:m.q7m})))),i.createElement("div",{className:(0,d.default)(r.controls)},t>1&&void 0===e.page&&i.createElement("div",{className:(0,d.default)("button-group")},i.createElement("button",{className:(0,d.default)("button","button--secondary","button--sm"),onClick:()=>{C(-1)}},i.createElement(s.G,{icon:m.nP8})),i.createElement("button",{className:(0,d.default)("button","button--secondary","button--sm"),disabled:!0},l||(t?1:"--")," / ",t||"--"),i.createElement("button",{className:(0,d.default)("button","button--secondary","button--sm"),onClick:()=>{C(1)}},i.createElement(s.G,{icon:m.JYN}))))):i.createElement("div",null,"Loading...")}},3530:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(83117),r=(a(67294),a(3905)),d=a(73830);const i={label:"2. QR Code",sidebar_custom_props:{id:"b794d920-060f-4c8f-a509-f6c5013506a3"}},o="2. QR Code",s={unversionedId:"Codes-and-Data/Anwendungen/qr-code",id:"Codes-and-Data/Anwendungen/qr-code",title:"2. QR Code",description:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",source:"@site/docs/Codes-and-Data/04-Anwendungen/02-qr-code.md",sourceDirName:"Codes-and-Data/04-Anwendungen",slug:"/Codes-and-Data/Anwendungen/qr-code",permalink:"/Codes-and-Data/Anwendungen/qr-code",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/04-Anwendungen/02-qr-code.md",tags:[],version:"current",lastUpdatedAt:1659798183,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:2,frontMatter:{label:"2. QR Code",sidebar_custom_props:{id:"b794d920-060f-4c8f-a509-f6c5013506a3"}},sidebar:"sidebar",previous:{title:"1. Morsecode",permalink:"/Codes-and-Data/Anwendungen/morsecode"},next:{title:"3. Fehlerkorrektur",permalink:"/Codes-and-Data/Anwendungen/fehlerkorrektur"}},m={},l=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=c("Comment"),u=c("Figure"),f={toc:l};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"2-qr-code"},"2. QR Code"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",src:a(36850).Z,width:"245",height:"245"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"auftrag"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Auftrag"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Recherchieren Sie in einer 2er bis 3er Gruppe"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wie ein QR-Code funktioniert"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"welche Elemente darin vorkommen"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wie viele Zeichen darin codiert werden k\xf6nnen"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"weshalb der Inhalt immer noch lesbar ist, auch wenn ein Teil des QR-Codes abgedeckt ist"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"weitere spannende Fakten, denen Sie begegnen"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie Ihre Erkenntnisse auf einem A3-Plakat fest."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(d.Z,{file:a(87884).Z,name:"qr-script.pdf",page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"PDF-Quelle ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"https://www.swisseduc.ch/informatik/theoretische_informatik/qr_codes/docs/unterlagen_lernende.pdf"},"swisseduc.ch")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}k.isMDXComponent=!0},87884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/qr-script-b2f2e38d40832d1b0eef66035920fef4.pdf"},36850:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/piraten-c774f7ffb4fc03b0467ad7c932e6faeb.svg"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);