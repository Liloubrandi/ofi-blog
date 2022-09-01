"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[44768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>C,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var n=r(83117),a=r(67294),i=r(3905),o=r(86010),s=r(96734);const l=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,p=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "],c=()=>{const[e,t]=a.useState(""),[r,n]=a.useState(""),[i,c]=a.useState("text");return a.useEffect((()=>{if("text"!==i||0===e.length)return;const t=e.split("").map((e=>{const t=p.indexOf(e),r=t%5;return""+(Math.floor(t/5)+1)+(r+1)}));n(t.join(" "))}),[e]),a.useEffect((()=>{if("cipher"!==i||0===r.length)return;const e=r.split(" ").map((e=>{const[t,r]=e.split("").map((e=>Number.parseInt(e,10)-1));return p[5*t+r]}));t(e.join(""))}),[r]),a.createElement("div",{className:(0,o.default)("hero","shadow--lw",s.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,o.default)(s.Z.input),value:e,onChange:e=>{const r=Math.max(e.target.selectionStart,e.target.selectionEnd);c("text"),t((e=>e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(l,""))(e.target.value)),setTimeout((()=>e.target.setSelectionRange(r,r)),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,o.default)(s.Z.input),value:r,onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);c("cipher"),n(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(t,t)),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))},m={sidebar_custom_props:{id:"1eada906-fef6-4800-b3fc-3b0ed4a54ae9",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=423844"}}},d="Polybios-Chiffre",u={unversionedId:"Kryptologie/Antike/Polybios",id:"Kryptologie/Antike/Polybios",title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/docs/Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/Kryptologie/Antike/Polybios",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"1eada906-fef6-4800-b3fc-3b0ed4a54ae9",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=423844"}}},sidebar:"sidebar",previous:{title:"Skytale",permalink:"/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/Kryptologie/Antike/Caesar"}},b={},h=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},g=f("Comment"),y=f("Figure"),v=f("SourceRef"),k={toc:h};function C(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"polybios-chiffre"},"Polybios-Chiffre"),(0,i.kt)(g,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)(g,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)(g,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(y,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:r(61833).Z,width:"323",height:"323"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(g,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)(g,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)(g,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)(g,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(g,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)(c,{mdxType:"Polybios"}),(0,i.kt)("hr",null))}C.isMDXComponent=!0},96734:(e,t,r)=>{r.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},61833:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);