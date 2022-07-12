"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63432:(e,t,n)=>{n.d(t,{ZP:()=>h});var r=n(87462),s=n(67294),a=n(92814),l=n(51436);const o={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var i=n(86010),c=n(96921);let p;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(p||(p={}));const d={[p.Holiday]:l.skR,[p.Event]:l.$nv,[p.Test]:l.Xf_,[p.Info]:l.YHc};class u extends s.Component{render(){const{align:e,icon:t,date:n}=this.props;var r=this.props.value;return n&&(r=(e=>{const t=e.getDay();return s.createElement("span",{style:{fontFamily:"monospace"}},c.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(n)),s.createElement("td",{align:e},r,t?" ":"",t)}}const m=e=>{var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1};class f extends s.Component{icon(){if(this.props.type)return s.createElement(a.G,{icon:d[this.props.type]})}render(){const{type:e,cells:t}=this.props,n={className:[]};this.props.className&&n.className.push(this.props.className),e&&n.className.push(o[e]);var a=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(a=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&m(new Date)===m(a)&&n.className.push(n.className+" "+o.currentWeek)}return s.createElement("tr",(0,r.Z)({},n,{className:(0,i.default)(...n.className)}),t.map(((e,t)=>{const n={value:e};return 0===t&&(n.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?n.align=this.props.alignments[t]:n.align="left",s.createElement(u,(0,r.Z)({},n,{key:t,date:this.props.dateIndex===t?a:void 0}))})))}}class h extends s.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return s.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,i.default)(o["ofi-table"],o[this.props.size],o[this.props.compact&&"compact"],o[this.props.celled&&"celled"],o[this.props.striped&&"striped"],o[this.props.collapsing&&"collapsing"],o[this.props.selectable&&"selectable"])},s.createElement("thead",null,this.props.header&&s.createElement("tr",null,this.props.header.map(((e,t)=>{var n;const r=((null==(n=this.props.alignments)?void 0:n.length)||0)>t?this.props.alignments[t]:"left";return s.createElement("th",{align:r,key:t},e)})))),s.createElement("tbody",null,t.map(((t,n)=>s.createElement(f,(0,r.Z)({alignments:this.props.alignments},t,{key:n,dateIndex:e}))))))}}},53996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),s=(n(67294),n(3905)),a=n(63432),l=n(96921);const o=JSON.parse('[{"cells":["16.08.2022","Einstieg","ICT Einstieg"]},{"cells":["23.08.2022","ICT","BYOD Basics"]},{"cells":["30.08.2022","ICT","BYOD Basics"]},{"cells":["06.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["13.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["20.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["18.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["25.10.2022","ICT","Kurztest Office"],"type":"test"},{"cells":["01.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["08.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["15.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["17.11.2022","Notenschluss Zwischenzeugnis",""],"type":"event"},{"cells":["22.11.2022","Daten","Datenbanken"]},{"cells":["29.11.2022","Daten","Datenbanken"]},{"cells":["06.12.2022","Kantonaler Fachschaftstag",""],"type":"holiday"},{"cells":["13.12.2022","Daten","Datenbanken"]},{"cells":["20.12.2022","Daten","Datenbanken"]},{"cells":["27.12.2022","Winterferien",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien",""],"type":"holiday"},{"cells":["11.01.2023","Daten","Wiederholung"]},{"cells":["18.01.2023","Daten","Kurztest Daten"],"type":"test"},{"cells":["25.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["01.02.2023","Codes und Daten","Zahlensysteme"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]'),i={sidebar_position:1,sidebar_label:"26P"},c="26P Informatik",p={unversionedId:"home",id:"version-26P/home",title:"26P Informatik",description:"<Table",source:"@site/versioned_docs/version-26P/home.mdx",sourceDirName:".",slug:"/home",permalink:"/26P/home",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-26P/home.mdx",tags:[],version:"26P",lastUpdatedAt:1657553321,formattedLastUpdatedAt:"11.7.2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"26P"},sidebar:"version-26P/sidebar"},d={},u=[],m={toc:u};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"26p-informatik"},"26P Informatik"),(0,s.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:l.Fl,mdxType:"Table"}))}f.isMDXComponent=!0}}]);