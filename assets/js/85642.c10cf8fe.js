"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[85642],{85642:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(67294),l=a(3905),o=a(46291),r=a(11022),c=a(86010),i=a(41544),d=a(93783),s=a(55537),u=a(87462),m=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=a(95999),b=a(63366),f=a(39960),h=a(13919),v=a(90541),E="menuLinkText_1J2g",g=["items"],k=["item"],_=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],N=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},S=(0,n.memo)((function(e){var t=e.items,a=(0,b.Z)(e,g);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,u.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,b.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(T,(0,u.Z)({item:t},a)):n.createElement(M,(0,u.Z)({item:t},a))}function T(e){var t,a=e.item,l=e.onItemClick,o=e.activePath,r=e.level,d=(0,b.Z)(e,_),s=a.items,m=a.label,p=a.collapsible,f=a.className,h=N(a,o),v=(0,i.uR)({initialState:function(){return!!p&&(!h&&a.collapsed)}}),g=v.collapsed,k=v.setCollapsed,C=v.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,o=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:h,collapsed:g,setCollapsed:k}),n.createElement("li",{className:(0,c.default)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},f)},n.createElement("a",(0,u.Z)({className:(0,c.default)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&h},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},d),m),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.createElement(S,{items:s,tabIndex:g?-1:0,onItemClick:l,activePath:o,level:r+1})))}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,r=(0,b.Z)(e,C),d=t.href,s=t.label,m=t.className,p=N(t,l);return n.createElement("li",{className:(0,c.default)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:s},n.createElement(f.Z,(0,u.Z)({className:(0,c.default)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:d},(0,h.Z)(d)&&{onClick:a},r),(0,h.Z)(d)?s:n.createElement("span",null,s,n.createElement(v.Z,null))))}var Z="sidebar_15mo",A="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",w="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",P="collapseSidebarButtonIcon_3E-R";function x(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.default)("button button--secondary button--outline",F),onClick:t},n.createElement(m,{className:P}))}function R(e){var t,a,l=e.path,o=e.sidebar,r=e.onCollapse,d=e.isHidden,u=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return n.createElement("div",{className:(0,c.default)(Z,(t={},t[A]=p,t[y]=d,t))},p&&n.createElement(s.Z,{tabIndex:-1,className:w}),n.createElement("nav",{className:(0,c.default)("menu thin-scrollbar",B,(a={},a[L]=u,a))},n.createElement("ul",{className:(0,c.default)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:o,activePath:l,level:1}))),b&&n.createElement(x,{onClick:r}))}var H=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,c.default)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:l,onItemClick:function(){return t()},level:1}))};function D(e){return n.createElement(i.Cv,{component:H,props:e})}var W=n.memo(R),z=n.memo(D);function Y(e){var t=(0,d.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),l&&n.createElement(z,e))}var J=a(27440),K=a(24608),U="backToTopButton_35hR",q="backToTopButtonShow_18ls";function G(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var O=function(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],o=(0,n.useRef)(!1),r=G(),d=r.smoothScrollTop,s=r.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(o.current)o.current=!1;else{var r=a<n;if(r||s(),a<300)l(!1);else if(r){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&l(!0)}else l(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.default)("clean-btn",i.kM.common.backToTopButton,U,(e={},e[q]=a,e)),type:"button",onClick:function(){return d()}})},Q=a(76775),X={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},j=a(12859);function V(e){var t,a,o,d=e.currentDocRoute,s=e.versionMetadata,u=e.children,b=s.pluginId,f=s.version,h=d.sidebar,v=h?s.docsSidebars[h]:void 0,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],N=_[1],S=(0,n.useCallback)((function(){C&&N(!1),k((function(e){return!e}))}),[C]);return n.createElement(r.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,i.os)(b,f)}},n.createElement("div",{className:X.docPage},n.createElement(O,null),v&&n.createElement("aside",{className:(0,c.default)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&g&&N(!0)}},n.createElement(Y,{key:h,sidebar:v,path:d.path,onCollapse:S,isHidden:C}),C&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(m,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.default)(X.docMainContainer,(a={},a[X.docMainContainerEnhanced]=g||!v,a))},n.createElement("div",{className:(0,c.default)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(o={},o[X.docItemWrapperEnhanced]=g,o))},n.createElement(l.Zo,{components:J.Z},u)))))}var $=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,r=t.find((function(e){return(0,Q.LX)(l.pathname,e)}));return r?n.createElement(n.Fragment,null,n.createElement(j.Z,null,n.createElement("html",{className:a.className})),n.createElement(V,{currentDocRoute:r,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):n.createElement(K.default,null)}},24608:function(e,t,a){a.r(t);var n=a(67294),l=a(11022),o=a(95999);t.default=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);