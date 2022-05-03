"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[16136],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63432:function(e,t,r){r.d(t,{ZP:function(){return b}});var n,l,o=r(83117),s=r(3435),i=r(21073),a=r(67294),c=r(92814),p=r(51436),u={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},d=r(86010),m=r(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(l||(l={}));var h=((n={})[l.Holiday]=p.skR,n[l.Event]=p.$nv,n[l.Test]=p.Xf_,n[l.Info]=p.YHc,n),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,r=e.icon,n=e.date,l=this.props.value;return n&&(l=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},m.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(n)),a.createElement("td",{align:t},l,r?" ":"",r)},t}(a.Component),f=function(e){var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var r=t.prototype;return r.icon=function(){if(this.props.type)return a.createElement(c.G,{icon:h[this.props.type]})},r.render=function(){var e=this,t=this.props,r=t.type,n=t.cells,l={className:[]};this.props.className&&l.className.push(this.props.className),r&&l.className.push(u[r]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=n[this.props.dateIndex];"string"==typeof c&&(i=function(e){var t=e.match((0,s.Z)(/(\d+)\.(\d+)\.(\d+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&f(new Date)===f(i)&&l.className.push(l.className+" "+u.currentWeek)}return a.createElement("tr",(0,o.Z)({},l,{className:d.default.apply(void 0,l.className)}),n.map((function(t,r){var n={value:t};return 0===r&&(n.icon=e.icon()),e.props.alignments&&e.props.alignments.length>r?n.align=e.props.alignments[r]:n.align="left",a.createElement(y,(0,o.Z)({},n,{key:r,date:e.props.dateIndex===r?i:void 0}))})))},t}(a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,d.default)(u["ofi-table"],u[this.props.size],u[this.props.compact&&"compact"],u[this.props.celled&&"celled"],u[this.props.striped&&"striped"],u[this.props.collapsing&&"collapsing"],u[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,r){var n,l=((null==(n=e.props.alignments)?void 0:n.length)||0)>r?e.props.alignments[r]:"left";return a.createElement("th",{align:l,key:r},t)})))),a.createElement("tbody",null,this.props.rows.map((function(r,n){return a.createElement(g,(0,o.Z)({alignments:e.props.alignments},r,{key:n,dateIndex:t}))}))))},t}(a.Component)},6404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=r(83117),l=r(80102),o=(r(67294),r(3905)),s=r(63432),i=JSON.parse('[{"cells":["26.01.2022","Computer","Logische Schaltungen 1"]},{"cells":["02.02.2022","Computer","Logische Schaltungen 2"]},{"cells":["09.02.2022","Computer","Logische Schaltungen 2"]},{"cells":["16.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["23.02.2022","Computer","Video erstellen: Halbaddierer"]},{"cells":["02.03.2022","Besuch Bundeshaus",""],"type":"holiday"},{"cells":["09.03.2022","Computer","Video finalisieren&schneiden"]},{"cells":["13.03.2022","Videoabgabe",""],"type":"test"},{"cells":["16.03.2022","Computer","Rechnerarchitektur"]},{"cells":["23.03.2022","Computer","Betriebssysteme"]},{"cells":["30.03.2022","Bilder","Grafikformate"]},{"cells":["06.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["13.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["20.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["27.04.2022","Bilder","Kompression"]},{"cells":["04.05.2022","Bilder","Urheberrecht"]},{"cells":["11.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["18.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["25.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["01.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["08.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["15.06.2022","Pr\xe4ventionswoche",""],"type":"holiday"},{"cells":["23.06.2022","Projektabgabe",""],"type":"test"},{"cells":["22.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["29.06.2022","Projekt Austauschen",""]},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["06.07.2022","\ud83d\udea7",""]}]'),a=["components"],c={sidebar_position:1},p="24K",u={unversionedId:"home",id:"version-24K/home",title:"24K",description:"<Table",source:"@site/versioned_docs/version-24K/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24K/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/home.mdx",tags:[],version:"24K",lastUpdatedAt:1643488361,formattedLastUpdatedAt:"1/29/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24K/sidebar",next:{title:"BYOD Basics",permalink:"/24K/category/byod-basics"}},d={},m=[],h={toc:m};function y(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"24k"},"24K"),(0,o.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,mdxType:"Table"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"3. Semester"),(0,o.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["18.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["25.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["01.09.2021","Netzwerke","Routing & DNS"]},{cells:["08.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["15.09.2021","Netzwerke","Workshop"]},{cells:["22.09.2021","Netzwerke","Test"],type:"test"},{cells:["29.09.2021","Umweltwoche",""],type:"holiday"},{cells:["06.10.2021","Herbstferien",""],type:"holiday"},{cells:["13.10.2021","Herbstferien",""],type:"holiday"},{cells:["20.10.2021","Herbstferien",""],type:"holiday"},{cells:["27.10.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["03.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["10.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["17.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["24.11.2021","Kryptologie","Hashfunktion"]},{cells:["01.12.2021","Kryptologie","Digitale Signaturen"]},{cells:["08.12.2021","Kryptologie","Kryptologie im Alltag"]},{cells:["15.12.2021","Kryptologie","Test"],type:"test"},{cells:["22.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["29.12.2021","Winterferien",""],type:"holiday"},{cells:["05.01.2022","Winterferien",""],type:"holiday"},{cells:["12.01.2022","Computer","Grundlagen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["19.01.2022","Computer","Digitale Schaltungen"]},{cells:["26.01.2022","Computer",""]}],mdxType:"Table"})))}y.isMDXComponent=!0}}]);