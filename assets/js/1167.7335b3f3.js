(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1167],{36511:(e,t,n)=>{"use strict";var o=n(27418),r={};function i(e,t,n,o,r,i,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,i,a,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}var a="mixins";e.exports=function(e,t,n){var s=[],l={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},u={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},c={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)d(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=g(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(!t)return;for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){if(i(!(n in c),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in e)return i("DEFINE_MANY_MERGED"===(u.hasOwnProperty(n)?u[n]:null),"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=g(e[n],o));e[n]=o}}}(e,t)},autobind:function(){}};function p(e,t){var n=l.hasOwnProperty(t)?l[t]:null;E.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function d(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,r=o.__reactAutoBindPairs;for(var s in n.hasOwnProperty(a)&&c.mixins(e,n.mixins),n)if(n.hasOwnProperty(s)&&s!==a){var u=n[s],d=o.hasOwnProperty(s);if(p(d,s),c.hasOwnProperty(s))c[s](e,u);else{var h=l.hasOwnProperty(s);if("function"==typeof u&&!h&&!d&&!1!==n.autobind)r.push(s,u),o[s]=u;else if(d){var m=l[s];i(h&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,s),"DEFINE_MANY_MERGED"===m?o[s]=g(o[s],u):"DEFINE_MANY"===m&&(o[s]=f(o[s],u))}else o[s]=u}}}else;}function h(e,t){for(var n in i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function g(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return h(r,n),h(r,o),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){return t.bind(e)}var b={componentDidMount:function(){this.__isMounted=!0}},y={componentWillUnmount:function(){this.__isMounted=!1}},E={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},v=function(){};return o(v.prototype,e.prototype,E),function(e){var t=function(e,o,a){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}(this),this.props=e,this.context=o,this.refs=r,this.updater=a||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;i("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=s};for(var o in t.prototype=new v,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],s.forEach(d.bind(null,t)),d(t,b),d(t,e),d(t,y),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),l)t.prototype[o]||(t.prototype[o]=null);return t}}},72555:(e,t,n)=>{"use strict";var o=n(67294),r=n(36511);if(void 0===o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new o.Component).updater;e.exports=r(o.Component,o.isValidElement,i)},72278:(e,t,n)=>{"use strict";e.exports=function(e){function t(t){var n=e.createElement.bind(null,t);return n.type=t,n}return{a:t("a"),abbr:t("abbr"),address:t("address"),area:t("area"),article:t("article"),aside:t("aside"),audio:t("audio"),b:t("b"),base:t("base"),bdi:t("bdi"),bdo:t("bdo"),big:t("big"),blockquote:t("blockquote"),body:t("body"),br:t("br"),button:t("button"),canvas:t("canvas"),caption:t("caption"),cite:t("cite"),code:t("code"),col:t("col"),colgroup:t("colgroup"),data:t("data"),datalist:t("datalist"),dd:t("dd"),del:t("del"),details:t("details"),dfn:t("dfn"),dialog:t("dialog"),div:t("div"),dl:t("dl"),dt:t("dt"),em:t("em"),embed:t("embed"),fieldset:t("fieldset"),figcaption:t("figcaption"),figure:t("figure"),footer:t("footer"),form:t("form"),h1:t("h1"),h2:t("h2"),h3:t("h3"),h4:t("h4"),h5:t("h5"),h6:t("h6"),head:t("head"),header:t("header"),hgroup:t("hgroup"),hr:t("hr"),html:t("html"),i:t("i"),iframe:t("iframe"),img:t("img"),input:t("input"),ins:t("ins"),kbd:t("kbd"),keygen:t("keygen"),label:t("label"),legend:t("legend"),li:t("li"),link:t("link"),main:t("main"),map:t("map"),mark:t("mark"),menu:t("menu"),menuitem:t("menuitem"),meta:t("meta"),meter:t("meter"),nav:t("nav"),noscript:t("noscript"),object:t("object"),ol:t("ol"),optgroup:t("optgroup"),option:t("option"),output:t("output"),p:t("p"),param:t("param"),picture:t("picture"),pre:t("pre"),progress:t("progress"),q:t("q"),rp:t("rp"),rt:t("rt"),ruby:t("ruby"),s:t("s"),samp:t("samp"),script:t("script"),section:t("section"),select:t("select"),small:t("small"),source:t("source"),span:t("span"),strong:t("strong"),style:t("style"),sub:t("sub"),summary:t("summary"),sup:t("sup"),table:t("table"),tbody:t("tbody"),td:t("td"),textarea:t("textarea"),tfoot:t("tfoot"),th:t("th"),thead:t("thead"),time:t("time"),title:t("title"),tr:t("tr"),track:t("track"),u:t("u"),ul:t("ul"),var:t("var"),video:t("video"),wbr:t("wbr"),circle:t("circle"),clipPath:t("clipPath"),defs:t("defs"),ellipse:t("ellipse"),g:t("g"),image:t("image"),line:t("line"),linearGradient:t("linearGradient"),mask:t("mask"),path:t("path"),pattern:t("pattern"),polygon:t("polygon"),polyline:t("polyline"),radialGradient:t("radialGradient"),rect:t("rect"),stop:t("stop"),svg:t("svg"),text:t("text"),tspan:t("tspan")}}(n(67294))},55020:(e,t,n)=>{"use strict";var o=n(67294),r=n(73935),i=n(72555),a=n(51127),s=(n(13311),n(59704)),l=n(18446),u=n(45697),c=n(72278),p=i({displayName:"Quill",mixins:[a],propTypes:{id:u.string,className:u.string,theme:u.string,style:u.object,readOnly:u.bool,value:u.oneOfType([u.string,u.shape({ops:u.array})]),defaultValue:u.oneOfType([u.string,u.shape({ops:u.array})]),placeholder:u.string,tabIndex:u.number,bounds:u.oneOfType([u.string,u.element]),onChange:u.func,onChangeSelection:u.func,onFocus:u.func,onBlur:u.func,onKeyPress:u.func,onKeyDown:u.func,onKeyUp:u.func,preserveWhitespace:u.bool,modules:function(e){var t=u.object.apply(this,arguments);return t||(e.modules&&e.modules.toolbar&&e.modules.toolbar[0]&&e.modules.toolbar[0].type?new Error("Since v1.0.0, React Quill will not create a custom toolbar for you anymore. Create a toolbar explictly, or let Quill create one. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100"):void 0)},toolbar:function(e){if("toolbar"in e)return new Error("The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100")},formats:function(e){var t=u.arrayOf(u.string).apply(this,arguments);if(t)return new Error("You cannot specify custom `formats` anymore. Use Parchment instead.  See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.")},styles:function(e){if("styles"in e)return new Error("The `styles` prop has been deprecated. Use custom stylesheets instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.")},pollInterval:function(e){if("pollInterval"in e)return new Error("The `pollInterval` property does not have any effect anymore. You can safely remove it from your props.See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.")},children:function(e){var t=u.element.apply(this,arguments);if(t)return new Error("The Quill editing area can only be composed of a single React element.");if(o.Children.count(e.children)){var n=o.Children.only(e.children);if("textarea"===n.type)return new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}}},dirtyProps:["modules","formats","bounds","theme","children"],cleanProps:["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],getDefaultProps:function(){return{theme:"snow",modules:{}}},isControlled:function(){return"value"in this.props},getInitialState:function(){return{generation:0,value:this.isControlled()?this.props.value:this.props.defaultValue}},componentWillReceiveProps:function(e,t){var n=this.editor;if(n){if("value"in e){var o=this.getEditorContents(),r=e.value;if(r===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");this.isEqualValue(r,o)||this.setEditorContents(n,r)}return"readOnly"in e&&e.readOnly!==this.props.readOnly&&this.setEditorReadOnly(n,e.readOnly),this.shouldComponentRegenerate(e,t)?this.regenerate():void 0}},componentDidMount:function(){if(this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig()),this.quillDelta)return this.editor.setContents(this.quillDelta),this.editor.setSelection(this.quillSelection),this.editor.focus(),void(this.quillDelta=this.quillSelection=null);this.state.value&&this.setEditorContents(this.editor,this.state.value)},componentWillUnmount:function(){var e;(e=this.getEditor())&&(this.unhookEditor(e),this.editor=null)},shouldComponentUpdate:function(e,t){var n=this;return this.state.generation!==t.generation||s(this.cleanProps,(function(t){return!l(e[t],n.props[t])}))},shouldComponentRegenerate:function(e,t){var n=this;return s(this.dirtyProps,(function(t){return!l(e[t],n.props[t])}))},componentWillUpdate:function(e,t){this.state.generation!==t.generation&&this.componentWillUnmount()},componentDidUpdate:function(e,t){this.state.generation!==t.generation&&this.componentDidMount()},getEditorConfig:function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},getEditor:function(){return this.editor},getEditingArea:function(){return r.findDOMNode(this.editingArea)},getEditorContents:function(){return this.state.value},getEditorSelection:function(){return this.state.selection},isDelta:function(e){return e&&e.ops},isEqualValue:function(e,t){return this.isDelta(e)&&this.isDelta(t)?l(e.ops,t.ops):l(e,t)},regenerate:function(){this.quillDelta=this.editor.getContents(),this.quillSelection=this.editor.getSelection(),this.setState({generation:this.state.generation+1})},renderEditingArea:function(){var e=this,t=this.props.children,n=this.props.preserveWhitespace,r={key:this.state.generation,tabIndex:this.props.tabIndex,ref:function(t){e.editingArea=t}},i=o.Children.count(t)?o.Children.only(t):null,a=n?c.pre:c.div;return i?o.cloneElement(i,r):a(r)},render:function(){return c.div({id:this.props.id,style:this.props.style,key:this.state.generation,className:["quill"].concat(this.props.className).join(" "),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},onEditorChangeText:function(e,t,n,o){var r=this.getEditorContents(),i=this.isDelta(r)?o.getContents():o.getHTML();this.isEqualValue(i,r)||(this.lastDeltaChangeSet=t,this.setState({value:i}),this.props.onChange&&this.props.onChange(e,t,n,o))},onEditorChangeSelection:function(e,t,n){var o=this.getEditorSelection(),r=!o&&e,i=o&&!e;l(e,o)||(this.setState({selection:e}),this.props.onChangeSelection&&this.props.onChangeSelection(e,t,n),r&&this.props.onFocus?this.props.onFocus(e,t,n):i&&this.props.onBlur&&this.props.onBlur(o,t,n))},focus:function(){this.editor.focus()},blur:function(){this.setEditorSelection(this.editor,null)}});e.exports=p},44290:(e,t,n)=>{var o=n(76095),r=n(55020);e.exports=r,e.exports.default=r,e.exports.Quill=o,e.exports.Mixin=n(51127),e.exports.Toolbar=n(16229)},51127:(e,t,n)=>{"use strict";var o=n(76095),r={createEditor:function(e,t){var n=new o(e,t);return void 0!==t.tabIndex&&this.setEditorTabIndex(n,t.tabIndex),this.hookEditor(n),n},hookEditor:function(e){var t=this.makeUnprivilegedEditor(e);this.handleTextChange=function(n,o,r){this.onEditorChangeText&&(this.onEditorChangeText(e.root.innerHTML,n,r,t),this.onEditorChangeSelection(e.getSelection(),r,t))}.bind(this),this.handleSelectionChange=function(e,n,o){this.onEditorChangeSelection&&this.onEditorChangeSelection(e,o,t)}.bind(this),e.on("editor-change",function(e,t,n,r){e===o.events.SELECTION_CHANGE&&this.handleSelectionChange(t,n,r),e===o.events.TEXT_CHANGE&&this.handleTextChange(t,n,r)}.bind(this))},unhookEditor:function(e){e.off("selection-change"),e.off("text-change")},setEditorReadOnly:function(e,t){t?e.disable():e.enable()},setEditorContents:function(e,t){var n=e.getSelection();"string"==typeof t?e.setContents(e.clipboard.convert(t)):e.setContents(t),n&&e.hasFocus()&&this.setEditorSelection(e,n)},setEditorSelection:function(e,t){if(t){var n=e.getLength();t.index=Math.max(0,Math.min(t.index,n-1)),t.length=Math.max(0,Math.min(t.length,n-1-t.index))}e.setSelection(t)},setEditorTabIndex:function(e,t){e.editor&&e.editor.scroll&&e.editor.scroll.domNode&&(e.editor.scroll.domNode.tabIndex=t)},makeUnprivilegedEditor:function(e){var t=e;return{getLength:function(){return t.getLength.apply(t,arguments)},getText:function(){return t.getText.apply(t,arguments)},getHTML:function(){return t.root.innerHTML},getContents:function(){return t.getContents.apply(t,arguments)},getSelection:function(){return t.getSelection.apply(t,arguments)},getBounds:function(){return t.getBounds.apply(t,arguments)}}}};e.exports=r},16229:(e,t,n)=>{"use strict";n(67294);var o=n(97762),r=n(72555),i=n(13311),a=n(18446),s=n(45697),l=n(72278),u=["rgb(  0,   0,   0)","rgb(230,   0,   0)","rgb(255, 153,   0)","rgb(255, 255,   0)","rgb(  0, 138,   0)","rgb(  0, 102, 204)","rgb(153,  51, 255)","rgb(255, 255, 255)","rgb(250, 204, 204)","rgb(255, 235, 204)","rgb(255, 255, 204)","rgb(204, 232, 204)","rgb(204, 224, 245)","rgb(235, 214, 255)","rgb(187, 187, 187)","rgb(240, 102, 102)","rgb(255, 194, 102)","rgb(255, 255, 102)","rgb(102, 185, 102)","rgb(102, 163, 224)","rgb(194, 133, 255)","rgb(136, 136, 136)","rgb(161,   0,   0)","rgb(178, 107,   0)","rgb(178, 178,   0)","rgb(  0,  97,   0)","rgb(  0,  71, 178)","rgb(107,  36, 178)","rgb( 68,  68,  68)","rgb( 92,   0,   0)","rgb(102,  61,   0)","rgb(102, 102,   0)","rgb(  0,  55,   0)","rgb(  0,  41, 102)","rgb( 61,  20,  10)"].map((function(e){return{value:e}})),c=[{label:"Formats",type:"group",items:[{label:"Font",type:"font",items:[{label:"Sans Serif",value:"sans-serif",selected:!0},{label:"Serif",value:"serif"},{label:"Monospace",value:"monospace"}]},{label:"Size",type:"size",items:[{label:"Small",value:"10px"},{label:"Normal",value:"13px",selected:!0},{label:"Large",value:"18px"},{label:"Huge",value:"32px"}]},{label:"Alignment",type:"align",items:[{label:"",value:"",selected:!0},{label:"",value:"center"},{label:"",value:"right"},{label:"",value:"justify"}]}]},{label:"Text",type:"group",items:[{type:"bold",label:"Bold"},{type:"italic",label:"Italic"},{type:"strike",label:"Strike"},{type:"underline",label:"Underline"},{type:"color",label:"Color",items:u},{type:"background",label:"Background color",items:u},{type:"link",label:"Link"}]},{label:"Blocks",type:"group",items:[{type:"list",value:"bullet"},{type:"list",value:"ordered"}]},{label:"Blocks",type:"group",items:[{type:"image",label:"Image"}]}],p=r({displayName:"Quill Toolbar",propTypes:{id:s.string,className:s.string,style:s.object,items:s.array},getDefaultProps:function(){return{items:c}},componentDidMount:function(){console.warn("QuillToolbar is deprecated. Consider switching to the official Quill toolbar format, or providing your own toolbar instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v1-0-0")},shouldComponentUpdate:function(e,t){return!a(e,this.props)},renderGroup:function(e,t){return l.span({key:e.label||t,className:"ql-formats"},e.items.map(this.renderItem))},renderChoiceItem:function(e,t){return l.option({key:e.label||e.value||t,value:e.value},e.label)},renderChoices:function(e,t){var n=e.items.map(this.renderChoiceItem),o=i(e.items,(function(e){return e.selected})),r={key:e.label||t,title:e.label,className:"ql-"+e.type,value:o.value};return l.select(r,n)},renderButton:function(e,t){return l.button({type:"button",key:e.label||e.value||t,value:e.value,className:"ql-"+e.type,title:e.label},e.children)},renderAction:function(e,t){return l.button({key:e.label||e.value||t,className:"ql-"+e.type,title:e.label},e.children)},renderItem:function(e,t){switch(e.type){case"group":return this.renderGroup(e,t);case"font":case"header":case"align":case"size":case"color":case"background":return this.renderChoices(e,t);case"bold":case"italic":case"underline":case"strike":case"link":case"list":case"bullet":case"ordered":case"indent":case"image":case"video":return this.renderButton(e,t);default:return this.renderAction(e,t)}},getClassName:function(){return"quill-toolbar "+(this.props.className||"")},render:function(){var e=this.props.items.map(this.renderItem).map(o.renderToStaticMarkup).join("");return l.div({id:this.props.id,className:this.getClassName(),style:this.props.style,dangerouslySetInnerHTML:{__html:e}})}});e.exports=p,p.defaultItems=c,p.defaultColors=u}}]);