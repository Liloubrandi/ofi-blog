"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[98358],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},960032:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=t(583117),i=t(480102),a=(t(667294),t(603905)),o=["components"],l={},c="\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",p={unversionedId:"BYOD-Basics/Skills/material_python",id:"version-25h/BYOD-Basics/Skills/material_python",title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",description:"\u2b07 Download BYOD Material",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/material_python",permalink:"/25h/BYOD-Basics/Skills/material_python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",tags:[],version:"25h",sidebarPosition:10,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/25h/BYOD-Basics/Skills/pruefungsfragen"},next:{title:"Texte",permalink:"/25h/category/texte"}},s={},f=[],u={toc:f};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-python-material-f\xfcr-die-byod-pr\xfcfung"},"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung"),(0,a.kt)("a",{href:"https://ofi.gbsl.website/files/material_byod.zip"},"\u2b07 Download BYOD Material"),(0,a.kt)("p",null,"Alle Python-Bezogenen Aufgabe sollen direkt auf dieser Seite gemacht werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hello__world.py id=4ceda0c5-4c49-457d-9839-80eeed8c100a",live_py:!0,title:"hello__world.py",id:"4ceda0c5-4c49-457d-9839-80eeed8c100a"},'print("Hello World! It\'s a beautiful Day.")\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=create__mesh.py id=fbcb116a-7d0c-4643-a160-728823d19262",live_py:!0,title:"create__mesh.py",id:"fbcb116a-7d0c-4643-a160-728823d19262"},"from turtle import *\nfrom math import sqrt\nimport random\n\nSQRT3 = sqrt(3)\nCOLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']\nspeed(7)\n\nfor index_x in range(5):\n    for index_y in range(5):\n        x = index_x * 30\n        if index_y % 2 == 1:\n            x = x - 15\n        y = index_y * 15 * SQRT3\n        penup()\n        goto(x, y)\n        pendown()\n        for i in range(3):\n            color(random.sample(COLORS, 1)[0])\n            forward(30)\n            left(120)\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=klammern.py id=4f38b217-cd53-40a4-92ff-645bf19f44b4",live_py:!0,title:"klammern.py",id:"4f38b217-cd53-40a4-92ff-645bf19f44b4"},"\n\n")))}d.isMDXComponent=!0}}]);