(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3034],{73830:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(72389);const o={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",controls:"controls_xr2C"};var i=r(86010),a=r(67294),s=r(16187),c=r(92814),l=r(51436);const d=e=>{const[t,r]=(0,a.useState)(null),[d,u]=(0,a.useState)(-1),[p,m]=(0,a.useState)(e.width),[g,f]=(0,a.useState)(150),h=(0,n.Z)(),[w,v]=(0,a.useState)(!1);a.useEffect((()=>(window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k)})),[]);const y=a.useRef(null),b=()=>{if(!y.current)return;const e=y.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;f(t)}},k=()=>{if(!y.current)return;const t=.98*y.current.getBoundingClientRect().width;b();let r=t,n=!1;e.width&&e.scale?r=Math.min(e.width*e.scale,t):e.width?r=Math.min(e.width,t):e.scale&&(r=e.scale*t),e.minWidth&&r<e.minWidth&&(r=e.minWidth,n=!0),n!==w&&v(n),m(r)},_=e=>{const{scrollX:r,scrollY:n}=window;u(d+e>t?1:d+e<1?t:d+e),setTimeout((()=>{window.scrollTo(r,n)}),0)};return h?a.createElement("div",{className:(0,i.default)(o.pdfWrapper,w&&o.overflowing,(t<=1||void 0!==e.page)&&o.singlepage),ref:y},a.createElement("div",{style:{height:g+8+"px"}},a.createElement(s.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:n}=t;r(n),d<0&&u(e.page||1),k()},className:(0,i.default)(o.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},d>0&&a.createElement(s.T3,{pageNumber:d,width:p,onLoadSuccess:b}),!e.noDownload&&a.createElement("a",{href:e.file,className:(0,i.default)(o.download,"button","button--secondary","button--sm"),download:e.name},a.createElement(c.G,{icon:l.q7m})))),a.createElement("div",{className:(0,i.default)(o.controls)},t>1&&void 0===e.page&&a.createElement("div",{className:(0,i.default)("button-group")},a.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:()=>{_(-1)}},a.createElement(c.G,{icon:l.nP8})),a.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),disabled:!0},d||(t?1:"--")," / ",t||"--"),a.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:()=>{_(1)}},a.createElement(c.G,{icon:l.JYN}))))):a.createElement("div",null,"Loading...")}},45746:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(83117),o=(r(67294),r(3905)),i=r(73830);const a={title:"Kryptow\xe4hrung"},s="Kryptow\xe4rhung",c={unversionedId:"Cryptocurrency/Kryptowaehrung",id:"Cryptocurrency/Kryptowaehrung",title:"Kryptow\xe4hrung",description:"\xdcbersicht von P. Giger",source:"@site/docs/Cryptocurrency/01-Kryptowaehrung.md",sourceDirName:"Cryptocurrency",slug:"/Cryptocurrency/Kryptowaehrung",permalink:"/Cryptocurrency/Kryptowaehrung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Cryptocurrency/01-Kryptowaehrung.md",tags:[],version:"current",lastUpdatedAt:1655377019,formattedLastUpdatedAt:"16. Juni 2022",sidebarPosition:1,frontMatter:{title:"Kryptow\xe4hrung"},sidebar:"sidebar",previous:{title:"Vom USB-Stick starten",permalink:"/Computer/praktikum/os-from-usb"},next:{title:"Diagramme",permalink:"/Excel-WMS/diagramme"}},l={},d=[{value:"\xdcbersicht von P. Giger",id:"\xfcbersicht-von-p-giger",level:2},{value:"Foli von P. Giger",id:"foli-von-p-giger",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kryptow\xe4rhung"},"Kryptow\xe4rhung"),(0,o.kt)("h2",{id:"\xfcbersicht-von-p-giger"},"\xdcbersicht von P. Giger"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)(i.Z,{file:r(70004).Z,name:"Kryptow\xe4hrungen_Skript_Peter_Giger.pdf",page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,o.kt)("h2",{id:"foli-von-p-giger"},"Foli von P. Giger"))}p.isMDXComponent=!0},70004:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/files/Kryptow\xe4hrungen_Skript_Peter_Giger-fc603d9ca0a20527049841311b240f59.pdf"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);