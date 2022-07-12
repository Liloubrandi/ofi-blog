"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=s,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63432:(e,t,r)=>{r.d(t,{ZP:()=>h});var n=r(87462),s=r(67294),a=r(92814),l=r(51436);const o={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var i=r(86010),c=r(96921);let p;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(p||(p={}));const d={[p.Holiday]:l.skR,[p.Event]:l.$nv,[p.Test]:l.Xf_,[p.Info]:l.YHc};class m extends s.Component{render(){const{align:e,icon:t,date:r}=this.props;var n=this.props.value;return r&&(n=(e=>{const t=e.getDay();return s.createElement("span",{style:{fontFamily:"monospace"}},c.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(r)),s.createElement("td",{align:e},n,t?" ":"",t)}}const u=e=>{var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1};class f extends s.Component{icon(){if(this.props.type)return s.createElement(a.G,{icon:d[this.props.type]})}render(){const{type:e,cells:t}=this.props,r={className:[]};this.props.className&&r.className.push(this.props.className),e&&r.className.push(o[e]);var a=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(a=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&u(new Date)===u(a)&&r.className.push(r.className+" "+o.currentWeek)}return s.createElement("tr",(0,n.Z)({},r,{className:(0,i.default)(...r.className)}),t.map(((e,t)=>{const r={value:e};return 0===t&&(r.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?r.align=this.props.alignments[t]:r.align="left",s.createElement(m,(0,n.Z)({},r,{key:t,date:this.props.dateIndex===t?a:void 0}))})))}}class h extends s.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return s.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,i.default)(o["ofi-table"],o[this.props.size],o[this.props.compact&&"compact"],o[this.props.celled&&"celled"],o[this.props.striped&&"striped"],o[this.props.collapsing&&"collapsing"],o[this.props.selectable&&"selectable"])},s.createElement("thead",null,this.props.header&&s.createElement("tr",null,this.props.header.map(((e,t)=>{var r;const n=((null==(r=this.props.alignments)?void 0:r.length)||0)>t?this.props.alignments[t]:"left";return s.createElement("th",{align:n,key:t},e)})))),s.createElement("tbody",null,t.map(((t,r)=>s.createElement(f,(0,n.Z)({alignments:this.props.alignments},t,{key:r,dateIndex:e}))))))}}},58615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(87462),s=(r(67294),r(3905)),a=r(63432),l=r(96921);const o=JSON.parse('[{"cells":["04.02.2022","Codes und Daten","Textcodierung"]},{"cells":["11.02.2022","Codes und Daten","Farbdarstellung"]},{"cells":["18.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["25.02.2022","Codes und Daten","Grafikformate"]},{"cells":["04.03.2022","Codes und Daten","Kompression"]},{"cells":["11.03.2022","Codes und Daten","Anwendungen"]},{"cells":["18.03.2022","Codes und Daten","Wiederholung"]},{"cells":["25.03.2022","Codes und Daten","Test"],"type":"test"},{"cells":["01.04.2022","Codes und Daten","QR Codes"]},{"cells":["08.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["15.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["22.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["29.04.2022","Big Data","Gesellschaft"]},{"cells":["06.05.2022","Big Data","Pr\xe4sentieren"]},{"cells":["13.05.2022","Big Data","Gesellschaft - Gruppendiskussion"]},{"cells":["20.05.2022","Big Data","Gesellschaft"]},{"cells":["27.05.2022","Auffahrt",""],"type":"holiday"},{"cells":["03.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["10.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["17.06.2022","Sportwoche",""],"type":"holiday"},{"cells":["24.06.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Filmanlass",""],"type":"event"},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["08.07.2022","Schulschluss",""],"type":"holiday"}]'),i={sidebar_position:1,sidebar_label:"EF"},c="EF Informatik",p={unversionedId:"home",id:"version-24ef/home",title:"EF Informatik",description:"<Table",source:"@site/versioned_docs/version-24ef/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24ef/home",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24ef/home.mdx",tags:[],version:"24ef",lastUpdatedAt:1657553321,formattedLastUpdatedAt:"11.7.2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"EF"},sidebar:"version-24ef/sidebar"},d={},m=[],u={toc:m};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ef-informatik"},"EF Informatik"),(0,s.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:l.Fl,mdxType:"Table"}))}f.isMDXComponent=!0}}]);