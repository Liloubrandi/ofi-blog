"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[14860],{63432:function(e,t,n){n.d(t,{ZP:function(){return v}});var s,l,r=n(83117),o=n(28900),i=n(21073),a=n(67294),p=n(92814),c=n(51436),d={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},u=n(86010),h=n(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(l||(l={}));var m=((s={})[l.Holiday]=c.skR,s[l.Event]=c.$nv,s[l.Test]=c.Xf_,s[l.Info]=c.YHc,s),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,s=e.date,l=this.props.value;return s&&(l=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},h.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(s)),a.createElement("td",{align:t},l,n?" ":"",n)},t}(a.Component),y=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return a.createElement(p.G,{icon:m[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,s=t.cells,l={className:[]};this.props.className&&l.className.push(this.props.className),n&&l.className.push(d[n]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var p=s[this.props.dateIndex];"string"==typeof p&&(i=function(e){var t=e.match((0,o.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(p))&&y(new Date)===y(i)&&l.className.push(l.className+" "+d.currentWeek)}return a.createElement("tr",(0,r.Z)({},l,{className:u.default.apply(void 0,l.className)}),s.map((function(t,n){var s={value:t};return 0===n&&(s.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?s.align=e.props.alignments[n]:s.align="left",a.createElement(f,(0,r.Z)({},s,{key:n,date:e.props.dateIndex===n?i:void 0}))})))},t}(a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,u.default)(d["ofi-table"],d[this.props.size],d[this.props.compact&&"compact"],d[this.props.celled&&"celled"],d[this.props.striped&&"striped"],d[this.props.collapsing&&"collapsing"],d[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,n){var s,l=((null==(s=e.props.alignments)?void 0:s.length)||0)>n?e.props.alignments[n]:"left";return a.createElement("th",{align:l,key:n},t)})))),a.createElement("tbody",null,this.props.rows.map((function(n,s){return a.createElement(g,(0,r.Z)({alignments:e.props.alignments},n,{key:s,dateIndex:t}))}))))},t}(a.Component)},5716:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var s=n(83117),l=n(80102),r=(n(67294),n(3905)),o=n(63432),i=n(71106),a=["components"],p={sidebar_position:1},c=void 0,d={unversionedId:"home",id:"version-24L/home",title:"home",description:"<Table",source:"@site/versioned_docs/version-24L/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24L/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/home.mdx",tags:[],version:"24L",lastUpdatedAt:1639395492,formattedLastUpdatedAt:"12/13/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24L/sidebar",next:{title:"BYOD Basics",permalink:"/24L/category/byod-basics"}},u=[],h={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{snowflakeCount:200,color:"silver",mdxType:"Snowfall"}),(0,r.kt)("h1",{id:"24l"},"24L"),(0,r.kt)(o.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","Schulstart","Asufall"],type:"holiday"},{cells:["23.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["30.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["06.09.2021","Netzwerke","Routing & DNS"]},{cells:["13.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["20.09.2021","Netzwerke","Workshop"]},{cells:["27.09.2021","Umweltwoche",""],type:"holiday"},{cells:["04.10.2021","Herbstferien",""],type:"holiday"},{cells:["11.10.2021","Herbstferien",""],type:"holiday"},{cells:["18.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Netzwerke","Test"],type:"test"},{cells:["01.11.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["08.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["15.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["22.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["29.11.2021","Kryptologie","Hashfunktion"]},{cells:["06.12.2021","Kryptologie","Digitale Signaturen"]},{cells:["13.12.2021","Kryptologie","Test"],type:"test"},{cells:["20.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["27.12.2021","Winterferien",""],type:"holiday"},{cells:["03.01.2022","Winterferien",""],type:"holiday"},{cells:["10.01.2022","Datenbanken",""]},{cells:["17.01.2022","Datenbanken",""]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["24.01.2022","Datenbanken",""]}],mdxType:"Table"}))}m.isMDXComponent=!0}}]);