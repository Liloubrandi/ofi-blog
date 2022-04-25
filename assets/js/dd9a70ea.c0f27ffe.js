"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[63878],{64514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return g}});var i=n(83117),a=n(80102),s=(n(67294),n(3905)),r=n(84384),l=["components"],o={title:"Zusammenfassung"},c="Zusammenfassung",d={unversionedId:"Kryptologie/Digitale-Signaturen/the-big-picture",id:"version-24L/Kryptologie/Digitale-Signaturen/the-big-picture",title:"Zusammenfassung",description:"Das grosse Ganze",source:"@site/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/05-the-big-picture.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/the-big-picture",permalink:"/24L/Kryptologie/Digitale-Signaturen/the-big-picture",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/05-the-big-picture.md",tags:[],version:"24L",sidebarPosition:5,frontMatter:{title:"Zusammenfassung"},sidebar:"version-24L/sidebar",previous:{title:"Zertifizierungsstellen",permalink:"/24L/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen"},next:{title:"Alltag",permalink:"/24L/category/alltag"}},u={},g=[{value:"Das grosse Ganze",id:"das-grosse-ganze",level:2}],m={toc:g};function h(e){var t=e.components,o=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"zusammenfassung"},"Zusammenfassung"),(0,s.kt)("h2",{id:"das-grosse-ganze"},"Das grosse Ganze"),(0,s.kt)("p",null,"Verschl\xfcsselte, signierte Nachrichten: Verkn\xfcpfung aller Verfahren."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(30725).Z,mdxType:"Image"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"bemerke"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Bemerke")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Charlie berechnet den Hashwert der Nachricht."),(0,s.kt)("li",{parentName:"ul"},"Charlie verwendet seinen  ",(0,s.kt)("span",{className:"badge",style:{background:"teal"}},"privaten Schl\xfcssel")," um den Hashwert zu signieren.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Den signierten Hashwert kann von jeder Empf\xe4nger:in mit Charlies ",(0,s.kt)("strong",{parentName:"li"},"\xf6ffentlichem")," Schl\xfcssel entschl\xfcsselt werden. Jedoch kann der Hash von niemandem ver\xe4ndert werden, da niemand den privaten Schl\xfcssel von Charlie besitzt."))),(0,s.kt)("li",{parentName:"ul"},"Die signierte Nachricht wird mit einem Sitzungsschl\xfcssel ",(0,s.kt)("strong",{parentName:"li"},"symmetrisch")," verschl\xfcsselt."),(0,s.kt)("li",{parentName:"ul"},"Der Sitzungsschl\xfcssel wird mit Alices ",(0,s.kt)("span",{className:"badge",style:{background:"#d53189"}},"\xf6ffentlichem Schl\xfcssel")," verschl\xfcsselt."),(0,s.kt)("li",{parentName:"ul"},"Alice kann nun",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"den Sitzungsschl\xfcssel mit ihrem ",(0,s.kt)("span",{className:"badge",style:{background:"#d53189"}},"privaten Schl\xfcssel")," entschl\xfcsseln"),(0,s.kt)("li",{parentName:"ul"},"mit dem Sitzungsschl\xfcssel den Klartext entschl\xfcsseln"),(0,s.kt)("li",{parentName:"ul"},"mit dem ",(0,s.kt)("span",{className:"badge",style:{background:"teal"}},"\xf6ffentlichen Schl\xfcssel")," von Charlie durch Entschl\xfcsselung der Signatur die ",(0,s.kt)("strong",{parentName:"li"},"Echtheit best\xe4tigen")),(0,s.kt)("li",{parentName:"ul"},"mit der entschl\xfcsselten Signatur (=der von Charlie berechneten Hashwert) und dem selbst berechneten Hashwert der erhaltenen Nachricht die ",(0,s.kt)("strong",{parentName:"li"},"Integrit\xe4t")," der Nachricht verifizieren, wenn die beiden Hashwerte \xfcbereinstimmen.")))))))}h.isMDXComponent=!0},30725:function(e,t,n){t.Z=n.p+"assets/images/the_big_picture-755b13c88d1c31bcd3087249a9ea66f7.svg"}}]);