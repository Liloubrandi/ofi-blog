"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[65244],{16896:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(67294),r=n(86010),a=n(71217),o=n(21314),u="users_1zdf",c="button_3vLP",m="sort_34yi",s="group_iZxc",i=n(68949),d=n(51436),p=n(92814),E=(0,a.Pi)((function(){var e=(0,o.oR)("userStore");return l.createElement("span",{className:m,onClick:function(){(0,i.z)((function(){e.filterEmailOrder="asc"===e.filterEmailOrder?"desc":"asc"}))}},l.createElement(p.G,{icon:"asc"===e.filterEmailOrder?d.r5q:d.FPD}))})),f=(0,a.Pi)((function(e){return l.createElement("span",{className:(0,r.default)(s,"badge","badge--primary")},e.name,l.createElement(p.G,{icon:d.nYk,onClick:e.onRemove}))})),b=(0,a.Pi)((function(){var e=l.useState(""),t=e[0],n=e[1],a=l.useState(""),m=a[0],s=a[1],b=(0,o.oR)("userStore"),k=(0,o.oR)("policyStore"),v=b.current;return v&&v.admin?l.createElement("div",{className:u},l.createElement("h3",null,"Benutzer"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:t,onChange:function(e){return n(e.target.value)}}),l.createElement("button",{onClick:function(){b.createGroup(t),n("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Klasse",value:m,onChange:function(e){return s(e.target.value)}}),l.createElement("button",{onClick:function(){b.createKlass(m),s("")}},"Add"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Id"),l.createElement("th",null,l.createElement(E,null),"Email"),l.createElement("th",null,l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:(0,r.default)(c,"button","button--primary","button--sm")},b.filterKlasse||"Klasse"),l.createElement("ul",{className:"dropdown__menu"},b.klasses.map((function(e,t){return l.createElement("li",{className:"dropdown__link",key:t,onClick:function(){(0,i.z)((function(){b.filterKlasse=e}))}},e||"null")}))))),l.createElement("th",null,l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:(0,r.default)(c,"button","button--primary","button--sm")},b.filterGroup||"Gruppe"),l.createElement("ul",{className:"dropdown__menu"},Array.from(new Set([void 0].concat(b.groups,k.groups))).map((function(e,t){return""===e?null:l.createElement("li",{className:"dropdown__link",key:t,onClick:function(){(0,i.z)((function(){b.filterGroup=e}))}},e||"null")}))))),l.createElement("th",null,"Admin?"),l.createElement("th",null,"Created At"))),l.createElement("tbody",null,b.filteredUsers.map((function(e,t){return l.createElement("tr",{key:t},l.createElement("td",null,e.id),l.createElement("td",null,e.email),l.createElement("td",null,l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:(0,r.default)(c,"button","button--secondary","button--sm")},e.klasse||"null"),l.createElement("ul",{className:"dropdown__menu"},b.klasses.map((function(t,n){return l.createElement("li",{className:"dropdown__link",key:n,onClick:function(){(0,i.z)((function(){b.setKlasse(e,t)}))}},t||"null")}))))),l.createElement("td",null,e.groups.map((function(t,n){return l.createElement(f,{key:n,name:t,onRemove:function(){return b.removeGroup(e,t)}})})),l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:(0,r.default)(c,"button","button--secondary","button--sm")},l.createElement(p.G,{icon:d.r8p})),l.createElement("ul",{className:"dropdown__menu"},Array.from(new Set([void 0].concat(b.groups,k.groups))).map((function(t,n){return""===t?null:l.createElement("li",{className:(0,r.default)("dropdown__link"),key:n,onClick:function(){(0,i.z)((function(){b.addGroup(e,t)}))}},t)}))))),l.createElement("td",null,e.admin&&l.createElement("span",{className:"badge badge--primary"},"Admin")),l.createElement("td",null,e.createdAt.toISOString().slice(0,10)))}))))):null}))}}]);