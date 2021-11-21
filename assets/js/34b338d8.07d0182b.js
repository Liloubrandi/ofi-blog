"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[53744],{13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function u(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return u}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),u=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,i=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,u.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},22460:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(67294),u=n(86010),a="loginPage_gxz4",o="users__xQI",i=n(11022),l=n(52263),c=n(11207),s=n(21314),m=n(73727),f=n(71217);function d(){var e=(0,l.Z)().siteConfig;return r.createElement("header",{className:(0,u.default)("hero hero--primary",c.Z.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}var E=(0,f.Pi)((function(){var e=(0,s.oR)("userStore"),t=e.current;return r.createElement(r.Fragment,null,t&&t.admin&&r.createElement("div",{className:o},r.createElement("h3",null,"Benutzer"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Id"),r.createElement("th",null,"Email"),r.createElement("th",null,"Klasse"),r.createElement("th",null,"Admin?"),r.createElement("th",null,"Created At"))),r.createElement("tbody",null,e.users.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,e.id),r.createElement("td",null,e.email),r.createElement("td",null,e.klasse),r.createElement("td",null,e.admin&&r.createElement("span",{className:"badge badge--primary"},"Admin")),r.createElement("td",null,e.createdAt.toISOString().slice(0,10)))}))))))})),v=(0,f.Pi)((function(){var e=(0,s.oR)("msalStore"),t=e.account,n=e.loggedIn;return r.createElement(i.Z,{description:"OF Informatik Website by B. Hofer"},r.createElement(d,null),r.createElement("main",null,r.createElement("div",{className:a},n?r.createElement(r.Fragment,null,r.createElement("h3",null,"Eingeloggt als ",t.username),r.createElement("button",{className:"button button--danger",onClick:function(){return e.logout()}},"Logout")):r.createElement(m.rU,{to:"/",onClick:function(){return e.login()},className:"button button--warning"},"Login mit GBSL Account"),r.createElement(E,null))))}))},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return i},RN:function(){return l}});var r=n(68949),u=n(67294),a=n(52182),o=function(e){return u.useContext(a.Nx)[e]},i=function(e,t,n,o,i,l){var c=u.useState(!1),s=c[0],m=c[1];u.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,o,i,l).finally((function(){m(!0)}))}),[]),u.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){s&&r&&a.Ux.documentStore.provideDocument(e(),t,n,o,i,l,!0)}))}),[s]),u.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,o,i,l,!0)}))}),[s])},l=function(e){var t=u.useState(!1),n=t[0],o=t[1];u.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){o(!0)}))}),[]),u.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),u.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])}},64622:function(e,t,n){n.d(t,{Z:function(){return E}});var r,u=n(67294),a=n(42207),o=n(21314),i=n(73727),l=n(52263),c=n(10412),s=n(71217),m=n(86010),f="navBadge_3ua7",d="userBadge_3R-z",E=(r=a.Z,(0,s.Pi)((function(e){if(!c.Z.canUseDOM)return u.createElement(r,e);var t=(0,o.oR)("userStore"),n=function(e){return e.find((function(e){return e.path.length>1&&window.location.pathname.startsWith(e.path)}))}((0,l.Z)().globalData["docusaurus-plugin-content-docs"].default.versions);return"login"===e.to&&t.current?t.current.admin?u.createElement("div",{className:(0,m.default)(f,"dropdown","dropdown--hoverable")},u.createElement("button",{className:(0,m.default)("badge",t.isMyView?"badge--primary":"badge--warning")},t.currentView.name),u.createElement("ul",{className:"dropdown__menu"},t.byClass(null==n?void 0:n.name).map((function(e,n){return u.createElement("li",{key:n,onClick:function(){return t.setView(e)}},u.createElement("div",{className:(0,m.default)(d,"badge","badge--secondary","dropdown__link")},e.name))})))):u.createElement(i.rU,{to:"/"+e.to,className:"badge badge--primary margin--xs"},u.createElement("span",null,t.current.name)):u.createElement(r,e)})))},11207:function(e,t){t.Z={heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW"}}}]);