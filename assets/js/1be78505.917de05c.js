"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[29514,20486],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(67294),l=n(86010),r=n(1944),i=n(35281),o=n(53438),c=n(43320),s=n(74477),d=n(1116),m=n(95124),u=n(95999),b=n(12466),h=n(85936);const p="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:i,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const i=null==n?void 0:n.scrollY;i&&(r.current?r.current=!1:a>=i?(o(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,h.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",i.k.common.backToTopButton,p,e&&E),type:"button",onClick:t})}var g=n(76775),v=n(87524),_=n(86668),k=n(21327),C=n(83117);function N(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function w(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",S),onClick:t},a.createElement(N,{className:I}))}var x=n(59689),y=n(902);const T=Symbol("EmptyContext"),L=a.createContext(T);function Z(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var A=n(86043),F=n(48596),M=n(39960),B=n(72389);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:h,href:p}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0),[e,t])}(t),g=(0,o._F)(t,r),v=(0,F.Mg)(p,r),{collapsed:k,setCollapsed:N}=(0,A.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(L);if(e===T)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),w=function(e){void 0===e&&(e=!k),I(e?null:s),N(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,y.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:k,updateCollapsed:w}),(0,a.useEffect)((()=>{b&&S&&S!==s&&E&&N(!0)}),[b,S,s,N,E]),a.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},h)},a.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(M.Z,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!p&&b,"menu__link--active":g}),onClick:b?e=>{null==n||n(t),p?w(!1):(e.preventDefault(),w())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=f?f:"#":f},d),u),p&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),w()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(G,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:c+1})))}var D=n(13919),W=n(39471);const z="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b}=t,h=(0,o._F)(t,r),p=(0,D.Z)(m);return a.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.Z,(0,C.Z)({className:(0,l.default)("menu__link",!p&&z,{"menu__link--active":h}),"aria-current":h?"page":void 0,to:m},p&&{onClick:n?()=>n(t):void 0},d),u,!p&&a.createElement(W.Z,null)))}const K="menuHtmlItem_M9Kj";function U(e){let{item:t,level:n,index:r}=e;const{value:o,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[K,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:o}})}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(U,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(Z,null,t.map(((e,t)=>a.createElement(V,(0,C.Z)({key:t,item:e,index:t},n)))))}const G=(0,a.memo)(j),Y="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:r}=e;const o=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.default)("menu thin-scrollbar",Y,o&&q,r)},a.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(G,{items:n,activePath:t,level:1})))}const J="sidebar_njMd",X="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:i}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,l.default)(J,o&&X,i&&Q)},o&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),c&&a.createElement(w,{onClick:r}))}const te=a.memo(ee);var ne=n(13102),ae=n(72961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(G,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}const ie=a.memo(re);function oe(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(ie,e))}const ce="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(N,{className:se}))}const me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,g.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.default)(i.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(oe,{sidebar:t,path:o,onCollapse:d,isHidden:c})),c&&a.createElement(de,{toggleSidebar:d}))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.default)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}const fe="docPage__5DB",ge="docsWrapper_BCFX";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(20486),ke=n(90197);function Ce(e){const{versionMetadata:t}=e,n=(0,o.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(r.FG,{className:(0,l.default)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(ve,null,m)))))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),l=n(95999),r=n(1944),i=n(95124),o=n(76775);function c(){const e=(0,o.TH)();if(/^\/24(i|f|o|L|K)\//i.test(e.pathname)){const t="https://ofi.24.gbsl.website"+e.pathname+e.hash+e.search;return a.createElement(a.Fragment,null,a.createElement(r.d,{title:"Seite archiviert"}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement("a",{href:t,className:"button hero__title button--outline button--success margin--xs"},"Weiter zum Artikel"," ",a.createElement("i",{className:"mdi mdi-arrow-right-bold-box",style:{marginLeft:"0.1em"}}))),a.createElement("p",null,"Die Kurse fr\xfcherer Jahrg\xe4nge wurden ",a.createElement("b",null,"archiviert")," und werden nicht weiter aktualisiert/ver\xe4ndert."),a.createElement("p",null,"Die archivierte Seite ist unter"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website"},"https://ofi.24.gbsl.website")," zu finden."),a.createElement("p",null,"Bis zum Ende Ihrer Schulzeit k\xf6nnen Sie sich dort weiterhin mit Ihrem Schulaccount einloggen, ihre Daten bearbeiten, ver\xe4ndern oder aber auch die gespeicherten Daten"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website/login"},"herunterladen")," oder deren"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website/login"},"L\xf6schung")," beantragen."),a.createElement("a",{href:t,className:"button button--success margin--xs"},"Weiter zum Artikel"," ",a.createElement("i",{className:"mdi mdi-arrow-right-bold-box",style:{marginLeft:"1em",marginRight:"-1em"}})))))))}return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);