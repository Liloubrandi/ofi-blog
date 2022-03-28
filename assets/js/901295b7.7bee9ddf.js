"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[74406],{58215:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(67294);function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(83117),i=n(67294),o=n(72389),r=n(36162),s=n(86010),l="tabItem_LplD";function c(t){var e,n,o,c=t.lazy,u=t.block,p=t.defaultValue,d=t.values,m=t.groupId,f=t.className,h=i.Children.map(t.children,(function(t){if((0,i.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,r.lx)(b,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(e=null!=p?p:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!b.some((function(t){return t.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,r.UB)(),I=k.tabGroupChoices,y=k.setTabGroupChoices,Z=(0,i.useState)(g),w=Z[0],x=Z[1],N=[],T=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=I[m];null!=S&&S!==w&&b.some((function(t){return t.value===S}))&&x(S)}var E=function(t){var e=t.currentTarget,n=N.indexOf(e),a=b[n].value;a!==w&&(T(e),x(a),null!=m&&y(m,a))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=N.indexOf(t.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var i=N.indexOf(t.currentTarget)-1;n=N[i]||N[N.length-1]}null==(e=n)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":u},f)},b.map((function(t){var e=t.value,n=t.label,o=t.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return N.push(t)},onKeyDown:D,onFocus:E,onClick:E},o,{className:(0,s.default)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),c?(0,i.cloneElement)(h.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function u(t){var e=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(e)},t))}},85107:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(21073),i=n(67294),o=n(9877),r=function(t){function e(){return t.apply(this,arguments)||this}return(0,a.Z)(e,t),e.prototype.render=function(){return i.createElement(o.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},e}(i.Component)},31931:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(84384),s=n(85107),l=n(58215),c=["components"],u={title:"1. Python"},p="Python installieren",d={unversionedId:"Software/python",id:"version-24o/Software/python",title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/versioned_docs/version-24o/03-Software/01-python.mdx",sourceDirName:"03-Software",slug:"/Software/python",permalink:"/24o/Software/python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/03-Software/01-python.mdx",tags:[],version:"24o",sidebarPosition:1,frontMatter:{title:"1. Python"},sidebar:"version-24o/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/24o/BYOD-Basics/pruefungsfragen"},next:{title:"2. VS Code",permalink:"/24o/Software/vscode"}},m={},f=[],h={toc:f};function b(t){var e=t.components,u=(0,i.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unter ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,o.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,o.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,o.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(13298).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(5473).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Falls die Option zum Entfernen des Pfadl\xe4ngenlimits angezeigt wird: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(39492).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(34992).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(55622).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(68596).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(57714).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(34770).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:n(27849).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:n(7798).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:n(88340).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 8.",options:{},isInline:!0,src:n(67953).Z,alt:"Installationsschritt 8.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}b.isMDXComponent=!0},55622:function(t,e,n){e.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},68596:function(t,e,n){e.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},57714:function(t,e,n){e.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},34770:function(t,e,n){e.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},27849:function(t,e,n){e.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},7798:function(t,e,n){e.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},88340:function(t,e,n){e.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},67953:function(t,e,n){e.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},13298:function(t,e,n){e.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},5473:function(t,e,n){e.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},39492:function(t,e,n){e.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},34992:function(t,e,n){e.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);