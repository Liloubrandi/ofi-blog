"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45558],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),l=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(f,s(s({ref:n},u),{},{components:t})):i.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var l=2;l<a;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(83117),r=t(67294),a=t(72389),s=t(36162),d=t(86010),o="tabItem_LplD";function l(e){var n,t,a,l=e.lazy,u=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,s.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,r.useState)(v),T=x[0],Z=x[1],z=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=y[m];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&Z(I)}var N=function(e){var n=e.currentTarget,t=z.indexOf(n),i=g[t].value;i!==T&&(E(n),Z(i),null!=m&&w(m,i))},V=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=z.indexOf(e.currentTarget)+1;t=z[i]||z[0];break;case"ArrowLeft":var r=z.indexOf(e.currentTarget)-1;t=z[r]||z[z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("tabs",{"tabs--block":u},f)},g.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return z.push(e)},onKeyDown:V,onFocus:N,onClick:N},a,{className:(0,d.default)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function u(e){var n=(0,a.Z)();return r.createElement(l,(0,i.Z)({key:String(n)},e))}},84384:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(92814),s=t(51436),d=t(86010),o=function(e){return i.createElement("span",{className:r.details},i.createElement("span",{className:(0,d.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,d.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,d.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,d.default)("badge badge--secondary")},i.createElement(a.G,{icon:s.Xjp}))))},l=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},u=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+l(t.size)+")",n.maxHeight=l(t.size),delete t.size),t.height&&(n.maxHeight=l(t.height),n.height=l(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+l(t.width)+")",n.width=l(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return i.createElement(u,e);var n=i.useState(!1),t=(n[0],n[1]),a=i.useState(!1),s=a[0],l=a[1],c=e.caption&&"undefined"!==e.caption,p=e.bib||c;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,d.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,r,a,s;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,r=e.clientY,a=n.left<=i&&n.right>=i,s=n.top<=r&&n.bottom>=r,a&&s||t(!1)}},i.createElement(u,e),p&&i.createElement("figcaption",null,c&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,d.default)(r.bib,s?r.visible:void 0),onClick:function(){return l(!s)}},"@"),s&&i.createElement(o,e.bib)))}},85107:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(21073),r=t(67294),a=t(9877),s=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},5532:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),s=t(84384),d=t(85107),o=t(58215),l=["components"],u={title:"Videos Editieren"},c="Video Editieren",p={unversionedId:"Computer/Video-Editor/video-editor",id:"version-24i/Computer/Video-Editor/video-editor",title:"Videos Editieren",description:'Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere Szenen oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.',source:"@site/versioned_docs/version-24i/07-Computer/06-Video-Editor/01-video-editor.md",sourceDirName:"07-Computer/06-Video-Editor",slug:"/Computer/Video-Editor/video-editor",permalink:"/24i/Computer/Video-Editor/video-editor",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/06-Video-Editor/01-video-editor.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"Videos Editieren"},sidebar:"version-24i/sidebar",previous:{title:"Vom USB-Stick starten",permalink:"/24i/Computer/praktikum/os-from-usb"},next:{title:"Kompression",permalink:"/24i/Codes und Daten/compression/"}},m={},f=[{value:"Video Editor \xf6ffnen",id:"video-editor-\xf6ffnen",level:2},{value:"Titel und Text",id:"titel-und-text",level:2},{value:"Zuschneiden und Aufteilen",id:"zuschneiden-und-aufteilen",level:2},{value:"Wiedergabegeschwindigkeit",id:"wiedergabegeschwindigkeit",level:3},{value:"Tonspur",id:"tonspur",level:2},{value:"Tonspuren aufnehmen",id:"tonspuren-aufnehmen",level:3},{value:"Exportieren",id:"exportieren",level:2}],b={toc:f};function g(e){var n=e.components,u=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"video-editieren"},"Video Editieren"),(0,a.kt)("p",null,"Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere ",(0,a.kt)("strong",{parentName:"p"},"Szenen"),' oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.'),(0,a.kt)("p",null,"Dazu kann unter Windows der Video-Editor in der Foto-App und unter Mac die iMovie App verwendet werden."),(0,a.kt)("p",null,"Um ein Video mit mehreren Szenen zusammenzuschneiden, kann wie folgt vorgegangen werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Video-Rohmaterial erstellen:")," Wichtig ist prim\xe4r das ",(0,a.kt)("strong",{parentName:"li"},"Bildmaterial"),", die ",(0,a.kt)("strong",{parentName:"li"},"Tonspur")," kann sp\xe4ter noch aufgenommen und hinzugef\xfcgt werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Videos zuschneiden:")," Ein Video Projekt erstellen, die verschiedenen Sequenzen hinzuf\xfcgen, zuschneiden und fehlerhafte Teile entfernen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Story erz\xe4hlen: Videos anordnen"),": Die einzelnen Clips so anordnen, dass die gew\xfcnschte Geschichte nachvollziehbar und spannend erz\xe4hlt werden kann.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Langweilige/Technische Passagen schneller abspielen"),(0,a.kt)("li",{parentName:"ul"},"\xdcberg\xe4nge zwischen den Sequenzen hinzuf\xfcgen - Achtung: oft lenken schlichte und relative schnelle \xdcbergangseffekte weniger vom Inhalt ab als pomp\xf6se Effekte."),(0,a.kt)("li",{parentName:"ul"},"im Hinblick auf die folgende Vertonung des Videos: im Hinterkopf halten, wo es viel oder wenig Erkl\xe4rungen braucht"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tonspur hinzuf\xfcgen"),": \xdcberlegen Sie sich genau, was Sie mitteilen wollen und nehmen Sie anschliessend den Text auf. Vermeiden Sie st\xf6rende Hintergrundger\xe4usche.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wichtige Dinge k\xf6nnen auch mit Text zus\xe4tzlich untermauert werden."),(0,a.kt)("li",{parentName:"ul"},"F\xfcr Teile ohne Sprache kann auch Musik verwendet werden. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exportieren des Videos"),": Die einzelnen Videosequenzen, Bilder und Tonspuren zu einem Video zusammenf\xfcgen - dieser Prozess wird ",(0,a.kt)("strong",{parentName:"li"},"Rendering")," genannt.")),(0,a.kt)("p",null,"Hilfreiche Links inkl. weiteren Anleitungen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.microsoft.com/de-de/windows/erstellen-von-filmen-mit-einem-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6"},"Windows Video-Editor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.apple.com/imovie/"},"iMovie"))),(0,a.kt)("h2",{id:"video-editor-\xf6ffnen"},"Video Editor \xf6ffnen"),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("p",null,"\xdcber die Fotos-App k\xf6nnen auch Video-Projekte erstellt werden:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Video-Editor",options:{},isInline:!1,src:t(22909).Z,alt:"Video-Editor",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("p",null,"Unter Mac OS X muss die Software ",(0,a.kt)("a",{parentName:"p",href:"https://www.apple.com/de/imovie/"},"iMovie \ud83d\udd17")," aus dem App-Store heruntergeladen werden."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Neues Projekt erstellen",options:{},isInline:!1,src:t(72994).Z,alt:"Neues Projekt erstellen",mdxType:"Image"})),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Medien per Drag&Drop hinzuf\xfcgen",options:{},isInline:!1,src:t(51095).Z,alt:"Medien per Drag&Drop hinzuf\xfcgen",mdxType:"Image"})))),(0,a.kt)("h2",{id:"titel-und-text"},"Titel und Text"),(0,a.kt)("p",null,"Zu Beginn eines Videos soll ein Titel angezeigt werden. Die mitwirkenden Personen werden entweder auch auf der Titelseite, oder aber im Abspann vermerkt."),(0,a.kt)("p",null,"Wichtige Aussagen im Video k\xf6nnen zus\xe4tzlich mit Text untermauert werden. Die Dauer der Texteinblendung kann jeweils eingestellt werden und sollte min. ",(0,a.kt)("inlineCode",{parentName:"p"},"3s")," dauern."),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Hintergrundfarbe einstellen",options:{},isInline:!1,src:t(6087).Z,alt:"Hintergrundfarbe einstellen",mdxType:"Image"})),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Titel hinzuf\xfcgen und Style w\xe4hlen",options:{},isInline:!1,src:t(78988).Z,alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Hintergrundfarbe einstellen",options:{},isInline:!1,src:t(52393).Z,alt:"Hintergrundfarbe einstellen",mdxType:"Image"})),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Titel hinzuf\xfcgen und Style w\xe4hlen",options:{},isInline:!1,src:t(97734).Z,alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",mdxType:"Image"})))),(0,a.kt)("h2",{id:"zuschneiden-und-aufteilen"},"Zuschneiden und Aufteilen"),(0,a.kt)("p",null,"Das Aufteilen von Videos ist besonders hilfreich, wenn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fehlerhafte Teile entfernt werden sollen oder"),(0,a.kt)("li",{parentName:"ul"},"die Geschwindigkeit einzelner Teile ver\xe4ndert werden muss.")),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Video aufteilen",options:{},isInline:!1,src:t(71762).Z,alt:"Video aufteilen",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Video aufteilen",options:{},isInline:!1,src:t(6521).Z,alt:"Video aufteilen",mdxType:"Image"})))),(0,a.kt)("h3",{id:"wiedergabegeschwindigkeit"},"Wiedergabegeschwindigkeit"),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Geschwindigkeit \xe4ndern",options:{maxWidth:"450px"},isInline:!1,src:t(90568).Z,alt:"Geschwindigkeit \xe4ndern --max-width=450px",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Geschwindigkeit \xe4ndern",options:{maxWidth:"450px"},isInline:!1,src:t(97630).Z,alt:"Geschwindigkeit \xe4ndern --max-width=450px",mdxType:"Image"})))),(0,a.kt)("h2",{id:"tonspur"},"Tonspur"),(0,a.kt)("p",null,"Ein Video besitzt normalerweise bereits eine Tonspur. Das Video kann aber auch neu vertont werden, indem neue Tonspuren hinzugef\xfcgt werden. F\xfcr jede Tonspur kann die Lautst\xe4rke individuell eingestellt werden. So lassen sich auch mehrere Tonspuren unterschiedlicher Lautst\xe4rke \xfcberlagern."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"hintergrundmusik"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hintergrundmusik")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Die Tonspur mit gesprochenem Text soll immer klar und verst\xe4ndlich sein. Lieber verzichtet man auf eine durchgehende Hintergrundmusik, als dass dadurch die Klarheit Stimme leidet."))),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("p",null,'Oben rechts "Benutzerdefiniertes Audio" w\xe4hlen und anschliessend mehrere Audiodateien hinzuf\xfcgen. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren k\xf6nnen auch \xfcberlagert werden.   '),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(63123).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Durch Klicken auf das Lautsprechersymbol kann die Lautst\xe4rke f\xfcr diese Tonspur eingestellt werden. Zudem kann eingestellt werden, ob die Tonspur direkt mit der gew\xe4hlten Lautst\xe4rke abgespielt wird, oder ein \xdcbergang verwendet wird."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"",options:{maxWidth:"300px"},isInline:!1,src:t(64312).Z,alt:"--max-width=300px",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("p",null,"Soll die Tonspur des Videos ver\xe4ndert werden, muss zuerst die Tonspur vom Video separiert werden: "),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(31430).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Um die Lautst\xe4rke der Tonspur zu \xe4ndern, kann die horizontale Linie in der Tonspur nach Oben/Unten verschoben werden. Zudem lassen sich die Lautst\xe4rken zu Beginn oder am Ende als \xdcbergang Ein- bzw. Ausblenden."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(82176).Z,mdxType:"Image"})))),(0,a.kt)("h3",{id:"tonspuren-aufnehmen"},"Tonspuren aufnehmen"),(0,a.kt)("p",null,"Gesprochener Text wird am besten direkt zum Abspielen des Videos aufgenommen."),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("p",null,"Unter Windows wird zum Aufnehmen einer Tonspur das Programm ",(0,a.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/verwendung-des-sprachrekorders-6fbb53d5-0539-abda-a9a4-0bcb84a778e7"},"Sprachrekorder")," ben\xf6tigt."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Sprache aufnehmen",options:{},isInline:!1,src:t(5204).Z,alt:"Sprache aufnehmen",mdxType:"Image"})),(0,a.kt)("p",null,"Die gespeicherten Aufzeichnungen k\xf6nnen anschliessend als Tonspur hinzugef\xfcgt werden.")),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("p",null,"In iMovie ist ein Sprachrekorder direkt eingebaut:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Sprache hinzuf\xfcgen",options:{maxWidth:"450px"},isInline:!1,src:t(60802).Z,alt:"Sprache hinzuf\xfcgen --max-width=450px",mdxType:"Image"})))),(0,a.kt)("h2",{id:"exportieren"},"Exportieren"),(0,a.kt)("p",null,"Ist das Video fertiggestellt, kann es als Videodatei exportiert werden. Beim exportieren wird die Darstellung jedes einzelnen Bildes ",(0,a.kt)("em",{parentName:"p"},"(f\xfcr eine Sekunde Film sind es 30 Bilder)")," berechnet, wobei Text\xfcberlagerungen, Tondateien und Spezialeffekte zusammengef\xfcgt werden. Dieser Prozess kann sehr lange dauern und ist abh\xe4ngig von der Geschwindigkeit der Grafikkarte. Dieser Prozess wird auch ",(0,a.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,a.kt)(d.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("p",null,'Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.'),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"",options:{maxWidth:"300px"},isInline:!1,src:t(95867).Z,alt:"--max-width=300px",mdxType:"Image"}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("p",null,'Oben rechts auf das "Teilen" Symbol klicken und "Datei exportieren" w\xe4hlen.'),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"",options:{maxWidth:"450px"},isInline:!1,src:t(86322).Z,alt:"--max-width=450px",mdxType:"Image"})))))}g.isMDXComponent=!0},72994:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor-f8315f17192c225ac23957882fe79d12.png"},51095:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor_b-bed6cf8a7909ea1f233ffa4b5e30075d.png"},52393:function(e,n,t){n.Z=t.p+"assets/images/02-video-editor-bg-color-6d007f3e342bb1d3ec6bf4a7336c8dc0.png"},97734:function(e,n,t){n.Z=t.p+"assets/images/03-video-editor-bg-text-e5feda1ef7844b2871bdbafe2777dd04.png"},6521:function(e,n,t){n.Z=t.p+"assets/images/04-video-editor-split-265e2068ec3bc0d8278dd804bebd594c.png"},97630:function(e,n,t){n.Z=t.p+"assets/images/05-video-editor-speed-0e4992a59bb254acf308c3ee4154bc06.png"},60802:function(e,n,t){n.Z=t.p+"assets/images/06-video-editor-speech-2a9c767a8a9713b97cdcf214e15a3847.png"},31430:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-separate-sound-bd1ea9467cb7012bc89a6179f6b6b93a.png"},82176:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-sound-1-e13bec2f9023c492731b52e148090473.png"},86322:function(e,n,t){n.Z=t.p+"assets/images/09-video-editor-export-229467d7acb4c50afad3fd36e9d79207.png"},22909:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor-170bede5dbf13fa461b8741c73c1ac85.png"},6087:function(e,n,t){n.Z=t.p+"assets/images/02-video-editor-bg-color-616e8d1189d5021e10124165d82ba7ca.png"},78988:function(e,n,t){n.Z=t.p+"assets/images/03-video-editor-bg-text-3a3350dfd4740533701e989d2952f7c4.png"},71762:function(e,n,t){n.Z=t.p+"assets/images/04-video-editor-split-5339f28a8736b785dd4cc73d4d1ad181.png"},90568:function(e,n,t){n.Z=t.p+"assets/images/05-video-editor-speed-76bf68d078f6537d0fa49d93045bee65.png"},5204:function(e,n,t){n.Z=t.p+"assets/images/06-video-editor-speech-13891986a063b5cbc8362fe2b8847a9c.png"},63123:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-sound-1-4f8b851b965dd5e995c29ec09c14aaec.png"},64312:function(e,n,t){n.Z=t.p+"assets/images/08-video-editor-sound-2-065061b13a364bb695623096c5f1bbae.png"},95867:function(e,n,t){n.Z=t.p+"assets/images/09-video-editor-export-e363b9d1f9584cb4e7de54ef407e38b7.png"}}]);