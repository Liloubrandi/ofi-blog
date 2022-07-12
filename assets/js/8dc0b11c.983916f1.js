"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(t),u=i,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={title:"Labyrinth"},s="Ausgangslage f\xfcr die Programmierung eines prefekten Labyrinths",a={unversionedId:"snippets/maze",id:"snippets/maze",title:"Labyrinth",description:"",source:"@site/docs/snippets/maze.md",sourceDirName:"snippets",slug:"/snippets/maze",permalink:"/snippets/maze",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/maze.md",tags:[],version:"current",lastUpdatedAt:1652854143,formattedLastUpdatedAt:"18.5.2022",frontMatter:{title:"Labyrinth"},sidebar:"sidebar",previous:{title:"VueJS",permalink:"/notes/vuejs"},next:{title:"Phaser",permalink:"/snippets/python-phaserjs"}},p={},l=[],c={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ausgangslage-f\xfcr-die-programmierung-eines-prefekten-labyrinths"},"Ausgangslage f\xfcr die Programmierung eines prefekten Labyrinths"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=6d768094-8526-4e7d-831b-3ae04f73e017",live_py:!0,id:"6d768094-8526-4e7d-831b-3ae04f73e017"},"from random import choice\n\nDIM_X = 31\nDIM_Y = 21\n\nfield = []\n\n# prepare list\nfor y in range(0, DIM_Y):\n    row = []\n    for x in range(0, DIM_X):\n        row.append(1)\n    field.append(row)\n\npos = [1, 1]\n\npositions = [pos]\npos_pointer = 0\nfinished = False\n\n# set field at current position to zero\nfield[pos[0]][pos[1]] = 0\n\n# repeat 5 times\n# TODO: repeat until finished\nfor i in range(5):\n    # all directions for the next step\n    options = ['UP', 'RIGHT', 'DOWN', 'LEFT']\n    success = False\n    \n    # find the next field - iterate until a new direction is found, or all\n    # options are checked\n    while len(options) > 0 and not success:\n\n        # pick a random direction from the list\n        direction = choice(options)\n        if direction == 'UP':\n            if False: # TODO (a) check if new cell is on field and (b) if new cell is not already taken\n                # TODO: mark cells as taken\n                # update position\n                 success = True\n            else:\n                # remove option\n                options.remove('UP')\n        elif direction == 'RIGHT':\n            # ...\n            options.remove('RIGHT')\n        elif direction == 'DOWN':\n            # ...\n            options.remove('DOWN')\n        elif direction == 'LEFT':\n            # ...\n            options.remove('LEFT')\n    if success:\n        # add current position to the position tracker\n        positions.append(pos)\n        # update position pointer (where can the current location be looked up?)\n        pos_pointer = len(positions) - 1\n    elif pos_pointer > 0: # is there is a location, where we can look around?\n        pos_pointer = pos_pointer - 1\n        pos = positions[pos_pointer]\n    else:\n        finished = True\n\n# print the maze\n# TODO: draw it with turtles\nfor rows in field:\n    for cell in rows:\n        if cell == 1:\n            print(' x ', end='')\n        else:\n            print(' . ', end='')\n    print('')\n")))}d.isMDXComponent=!0}}]);