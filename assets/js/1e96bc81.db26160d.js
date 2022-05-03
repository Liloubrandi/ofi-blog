"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[96177],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=f(t),u=s,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var f=2;f<a;f++)i[f]=t[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38335:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return c}});var r=t(83117),s=t(80102),a=(t(67294),t(3905)),i=["components"],o={},l="Phaser",f={unversionedId:"snippets/python-phaserjs",id:"snippets/python-phaserjs",title:"Phaser",description:"3d-Animation",source:"@site/docs/snippets/python-phaserjs.md",sourceDirName:"snippets",slug:"/snippets/python-phaserjs",permalink:"/snippets/python-phaserjs",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/python-phaserjs.md",tags:[],version:"current",lastUpdatedAt:1643533353,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"VueJS",permalink:"/notes/vuejs"},next:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"}},p={},c=[{value:"3d-Animation",id:"3d-animation",level:2},{value:"Starter Game: WIP",id:"starter-game-wip",level:2}],d={toc:c};function u(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"phaser"},"Phaser"),(0,a.kt)("h2",{id:"3d-animation"},"3d-Animation"),(0,a.kt)("p",null,"Inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://phaser.io/examples/v3/view/dwitter/5479"},"@dwitter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=phaser-demo.py id=1efa38ff-1c08-4422-86b2-2d35fc986105",live_py:!0,title:"phaser-demo.py",id:"1efa38ff-1c08-4422-86b2-2d35fc986105"},"\nfrom browser import window, document, html\nimport javascript\nfrom math import sin, cos, tan\n\nPhaser = window.Phaser\n\nclass Game(object):\n    def __init__(self):\n        self.c = None\n        self.x = None\n        self.texture = None\n        self.time = 0\n        self.frame = 0\n        self.game = window.Phaser.Game.new({\n            'type': Phaser.CANVAS,\n            'parent': RESULT_DIV,\n            'width': 510,\n            'height': 540,\n            'backgroundColor': '#ffffff',\n            'scene': {\n                'create': self.create,\n                'update': self.update\n            }\n        })\n    \n    def destroy(self, *args):\n        self.game.destroy(True)\n\n    def create(self, *args):\n        this = javascript.this()\n        self.texture = this.textures.createCanvas('dwitter', 1920, 1080)\n        self.c = self.texture.getCanvas()\n        self.x = self.c.getContext('2d')\n        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.4)\n        this.input.on('pointerdown', self.destroy, this)\n\n    def update(self, *args):\n        self.time = self.frame / 60\n        self.frame = self.frame + 1\n        if self.frame % 30 ==0:\n            self.frame += 0.001\n        self.c['width'] = 1020\n\n        for i in range(0, 31, 1):\n            for j in range(20, -21, -4):\n                self.x.fillRect(\n                    510+j*i*0.5*cos(i*0.2)+cos(2*self.time+i*0.2)*300,\n                    540+j*i*0.5*sin(i*0.2)+sin(2.2*self.time+i*0.2)*200,\n                    9,\n                    9\n                )\n\n\ngame = Game()\n\n")),(0,a.kt)("h2",{id:"starter-game-wip"},"Starter Game: WIP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=79a92e22-6e57-434b-afcb-69f68818a073",live_py:!0,id:"79a92e22-6e57-434b-afcb-69f68818a073"},"from browser import window, document, html\nimport javascript\nfrom math import sin, cos, tan\n\nPhaser = window.Phaser\ndef set_bounce(child):\n    print('hi',child)\n    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))\n\nclass Game(object):\n    def __init__(self):\n        self.player = None\n        self.stars = None\n        self.platforms = None\n        self.cursors = None\n        self.score = 0\n        self.scoreText = None\n        self.game = Phaser.Game.new({\n            'type': Phaser.AUTO,\n            'parent': RESULT_DIV,\n            'width': 800,\n            'height': 600,\n            'physics': {\n                'default': 'arcade',\n                'arcade': {\n                    'gravity': { 'y': 300 },\n                    'debug': False\n                }\n            },\n            'scene': {\n                'preload': self.preload,\n                'create': self.create,\n                'update': self.update\n            }\n        })\n    \n\n    def preload(self, *args):\n        this = javascript.this()\n        this.load.setBaseURL('http://labs.phaser.io')\n        this.load.image('sky', 'assets/skies/sky1.png')\n        this.load.image('ground', 'assets/rope/pipe1.png')\n        this.load.image('star', 'assets/particles/gold.png')\n        this.load.image('bomb', 'assets/particles/flame2.png')\n        this.load.spritesheet('dude', 'assets/rope/pikachu.png', { 'frameWidth': 32, 'frameHeight': 48 })\n\n    def create(self, *args):\n        this = javascript.this()\n        this.add.image(400, 300, 'sky')\n        platforms = this.physics.add.staticGroup()\n\n        platforms.create(400, 568, 'ground').setScale(2).refreshBody()\n\n        platforms.create(600, 400, 'ground')\n        platforms.create(50, 250, 'ground')\n        platforms.create(750, 220, 'ground')\n\n        self.player = this.physics.add.sprite(100, 450, 'dude')\n\n        self.player.setBounce(0.2)\n        self.player.setCollideWorldBounds(True)\n\n        this.anims.create({\n            'key': 'left',\n            'frames': this.anims.generateFrameNumbers('dude', { 'start': 0, 'end': 3 }),\n            'frameRate': 10,\n            'repeat': -1\n        })\n\n        this.anims.create({\n            'key': 'turn',\n            'frames': [ { 'key': 'dude', 'frame': 4 } ],\n            'frameRate': 20\n        })\n\n        this.anims.create({\n            'key': 'right',\n            'frames': this.anims.generateFrameNumbers('dude', { 'start': 5, 'end': 8 }),\n            'frameRate': 10,\n            'repeat': -1\n        })\n\n        self.cursors = this.input.keyboard.createCursorKeys()\n\n        self.stars = this.physics.add.group({\n            'key': 'star',\n            'repeat': 11,\n            'setXY': { 'x': 12, 'y': 0, 'stepX': 70 }\n        })\n\n        for i in self.stars['children']:\n            print(i,type(i))\n\n        self.scoreText = this.add.text(16, 16, 'score: 0', { 'fontSize': '32px', 'fill': '#000' })\n\n        this.physics.add.collider(self.player, self.platforms)\n        this.physics.add.collider(self.stars, self.platforms)\n\n        this.physics.add.overlap(self.player, self.stars, self.collectStar, None, this)\n\n    def update(self, *args):\n        if self.cursors.left.isDown:\n            self.player.setVelocityX(-160)\n            self.player.anims.play('left', True)\n        elif self.cursors.right.isDown:\n            self.player.setVelocityX(160)\n            self.player.anims.play('right', True)\n        else:\n            self.player.setVelocityX(0)\n            self.player.anims.play('turn')\n\n        if self.cursors.up.isDown and self.player.body.touching.down:\n            self.player.setVelocityY(-330)\n\n    def collectStar (self, player, star):\n        star.disableBody(True, True)\n        self.score += 10\n        self.scoreText.setText('Score: ' + self.score)\n    \n    def destroy(self, *args):\n        self.game.destroy(True)\n\ngame = Game() \n")))}u.isMDXComponent=!0}}]);