"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[14860],{63432:function(e,t,n){n.d(t,{ZP:function(){return b}});var r,o,l=n(87462),i=n(26528),s=n(94578),a=n(67294),c=n(92814),p=n(51436),u={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},d=n(86010);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(o||(o={}));var f=((r={})[o.Holiday]=p.skR,r[o.Event]=p.$nv,r[o.Test]=p.Xf_,r[o.Info]=p.YHc,r),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,r=e.date,o=this.props.value;return r&&(o=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},y[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(r)),a.createElement("td",{align:t},o,n?" ":"",n)},t}(a.Component),y=["So","Mo","Di","Mi","Do","Fr","Sa"],m=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,s.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return a.createElement(c.G,{icon:f[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,r=t.cells,o={};n&&(o.className=u[n]);var s=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=r[this.props.dateIndex];"string"==typeof c&&(s=function(e){var t=e.match((0,i.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&m(new Date)===m(s)&&(o.className=o.className+" "+u.currentWeek)}return a.createElement("tr",o,r.map((function(t,n){var r={value:t};return 0===n&&(r.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?r.align=e.props.alignments[n]:r.align="left",a.createElement(h,(0,l.Z)({},r,{key:n,date:e.props.dateIndex===n?s:void 0}))})))},t}(a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,d.default)(u["ofi-table"],u[this.props.size],u[this.props.compact&&"compact"],u[this.props.celled&&"celled"],u[this.props.striped&&"striped"],u[this.props.collapsing&&"collapsing"],u[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,n){var r,o=((null==(r=e.props.alignments)?void 0:r.length)||0)>n?e.props.alignments[n]:"left";return a.createElement("th",{align:o,key:n},t)})))),a.createElement("tbody",null,this.props.rows.map((function(n,r){return a.createElement(g,(0,l.Z)({alignments:e.props.alignments},n,{key:r,dateIndex:t}))}))))},t}(a.Component)},5716:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=n(63432),s=["components"],a={sidebar_position:1},c="24L",p={unversionedId:"home",id:"version-24L/home",isDocsHomePage:!1,title:"24L",description:"<Table",source:"@site/versioned_docs/version-24L/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24L/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/home.mdx",tags:[],version:"24L",lastUpdatedAt:1634634325,formattedLastUpdatedAt:"10/19/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24L/sidebar",next:{title:"Basics",permalink:"/24L/BYOD-Basics/overview"}},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"24l"},"24L"),(0,l.kt)(i.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","Schulstart","Asufall"],type:"holiday"},{cells:["23.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["30.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["06.09.2021","Netzwerke","Routing & DNS"]},{cells:["13.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["20.09.2021","Netzwerke","Workshop"]},{cells:["27.09.2021","Umweltwoche",""],type:"holiday"},{cells:["04.10.2021","Herbstferien",""],type:"holiday"},{cells:["11.10.2021","Herbstferien",""],type:"holiday"},{cells:["18.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Netzwerke","Test"],type:"test"},{cells:["01.11.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["08.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["15.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["22.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["29.11.2021","Kryptologie","Hashfunktion"]},{cells:["06.12.2021","Kryptologie","Digitale Signaturen"]},{cells:["13.12.2021","Kryptologie","Test"],type:"test"},{cells:["20.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["27.12.2021","Winterferien",""],type:"holiday"},{cells:["03.01.2022","Winterferien",""],type:"holiday"},{cells:["10.01.2022","Datenbanken",""]},{cells:["17.01.2022","Datenbanken",""]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["24.01.2022","Datenbanken",""]}],mdxType:"Table"}))}f.isMDXComponent=!0},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return i}});var o=n(89611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,o.Z)(e,t)}function i(){i=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,l){var i=new RegExp(e,r);return t.set(i,l||t.get(e)),(0,o.Z)(i,n.prototype)}function s(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return l(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=s(n,this)),n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var l=t.get(this);return e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+l[t]})))}if("function"==typeof o){var i=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(s(e,i)),o.apply(this,e)}))}return e[Symbol.replace].call(this,n,o)},i.apply(this,arguments)}}}]);