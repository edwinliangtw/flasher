(()=>{"use strict";var e=[function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(3),c=r(5);new(function(e){function t(){var t=e.call(this,"main")||this;(new c.XStage).addChild(t),t.percentWidth=100,t.percentHeight=100,t.background="rgba(0,0,0,0.5)";var r=new s.XSprite;r.x=200,r.y=300,t.addChild(r);var n=new i.XLabel;n.text="test",r.addChild(n);var o=new s.XSprite;o.percentWidth=100,o.percentHeight=100,t.addChild(o);for(var l=0;l<100;l++){var u=new i.XLabel;u.text="x",u.y=10*l,o.addChild(u)}var a=function(){for(var e=0,t=o.numChildren;e<t;e++){o.getChildAt(e).x++}requestAnimationFrame(a)};return requestAnimationFrame(a),t}return o(t,e),t}(s.XSprite))},function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.XLabel=void 0;var i=r(2),s=function(e){function t(t){var r=e.call(this,t)||this;return r._text="",r.background="",r.style.width="",r.style.height="",r}return o(t,e),Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){this._text=e},enumerable:!1,configurable:!0}),t.prototype.getVNode=function(){return(0,i.m)("span",{id:this.id,style:(0,i.style)(this.style)},[this._text],i.VFlags.ONLY_TEXT_CHILDREN)},t}(r(3).XSprite);t.XLabel=s},(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=()=>(e,t,r,n=[])=>{const o=r?.props??{},i=t.props??{};for(const t in{...o,...i}){const r=o[t],s=i[t];if(r!==s)if(t.startsWith("on")){const o=t.slice(2).toLowerCase();n.push((()=>{r&&e.removeEventListener(o,r),e.addEventListener(o,s)}))}else void 0===e[t]||e instanceof SVGElement?s?n.push((()=>e.setAttribute(t,String(s)))):n.push((()=>e.removeAttribute(t))):s?n.push((()=>e[t]=s)):n.push((()=>{e.removeAttribute(t),delete e[t]}))}return{el:e,newVNode:t,oldVNode:r,workStack:n}},n="__m_old_vnode";var o;t.VFlags=void 0,(o=t.VFlags||(t.VFlags={}))[o.IGNORE_NODE=0]="IGNORE_NODE",o[o.REPLACE_NODE=1]="REPLACE_NODE",o[o.NO_CHILDREN=2]="NO_CHILDREN",o[o.ONLY_TEXT_CHILDREN=3]="ONLY_TEXT_CHILDREN",o[o.ONLY_KEYED_CHILDREN=4]="ONLY_KEYED_CHILDREN",o[o.ANY_CHILDREN=5]="ANY_CHILDREN";const i=()=>(e,r,n,o=[])=>{const i={el:e,newVNode:r,oldVNode:n,workStack:o};if(r.flag===t.VFlags.IGNORE_NODE)return i;if(r.flag===t.VFlags.REPLACE_NODE)return e.replaceWith(a(r)),i;const s=n?.children??[],c=r.children,u=r.delta;if(u){for(let t=0;t<u.length;++t){const[r,n]=u[t],i=e.childNodes[n];switch(r){case 0:o.push((()=>e.insertBefore(a(c[n]),i)));break;case 1:l(i,c[n],s[n]);break;case 2:o.push((()=>e.removeChild(i)))}}return i}if(!c||r.flag===t.VFlags.NO_CHILDREN)return s?(o.push((()=>e.textContent="")),i):i;if(void 0===r.flag||r.flag===t.VFlags.ANY_CHILDREN){if(s)for(let t=s.length-1;t>=0;--t)l(e.childNodes[t],c[t],s[t]);for(let t=s.length??0;t<c.length;++t){const r=a(c[t],!1);o.push((()=>e.appendChild(r)))}return i}if(r.flag===t.VFlags.ONLY_TEXT_CHILDREN)return o.push((()=>e.textContent=r.children.join(""))),i;if(r.flag===t.VFlags.ONLY_KEYED_CHILDREN){let t=0,r=0,n=s.length-1,l=c.length-1;for(;t<=n&&r<=l&&s[n].key===c[l].key;)n--,l--;for(;t<=n&&r<=l&&s[t].key===c[r].key;)t++,r++;if(t>n)for(;r<=l;){const t=r++;o.push((()=>e.insertBefore(a(c[t],!1),e.childNodes[t])))}else if(r>l)for(;t<=n;){const r=e.childNodes[t++];o.push((()=>e.removeChild(r)))}else{const i={};for(let e=n;e>=t;--e)i[s[e].key]=e;for(;r<=l;){const t=c[r],n=i[t.key],l=e.childNodes[n],u=r++;void 0!==n&&t.key===s[n].key?(u!==n&&o.push((()=>e.insertBefore(l,e.childNodes[u]))),delete i[t.key]):o.push((()=>e.insertBefore(a(t,!1),e.childNodes[u])))}for(const t of Object.values(i)){const r=e.childNodes[t];o.push((()=>e.removeChild(r)))}}return i}return i},s=(e=[],t=(e=>e()))=>{for(let r=0;r<e.length;++r)t(e[r])},c=(e=[])=>(t,r,n,o=[])=>{const i=e=>(o.push((()=>{n||(e.__m_old_vnode=r)})),{el:e,newVNode:r,oldVNode:n,workStack:o});if(!r&&""!==r)return o.push((()=>t.remove())),i(t);{const s=n??t.__m_old_vnode,c="string"==typeof s||"string"==typeof r;if(c&&s!==r){const e=a(r);return o.push((()=>t.replaceWith(e))),i(e)}if(!c){const n=s,c=r;if(void 0===n?.key&&void 0===c?.key||n?.key!==c?.key){if(n?.tag!==c?.tag||t instanceof Text){const e=a(r);return o.push((()=>t.replaceWith(e))),i(e)}for(let r=0;r<e.length;++r)e[r](t,c,n,o)}}}return i(t)},l=(e,t,n,o=[])=>{const l=c([i(),r()])(e,t,n,o);return s(l.workStack),l.el},u=r(),a=(e,t=!0)=>{if("string"==typeof e)return document.createTextNode(e);const r=e.props?.ns?document.createElementNS(e.props?.ns,e.tag):document.createElement(e.tag);if(s(u(r,e).workStack),e.children)for(let t=0;t<e.children.length;++t)r.appendChild(a(e.children[t]));return t&&(r.__m_old_vnode=e),r},p=(e,t,r)=>{if(t.className&&(t.class=t.className,delete t.className),t.ns="http://www.w3.org/2000/svg",r&&"foreignObject"!==e)for(const e of r)"string"!=typeof e&&e.props&&p(e.tag,e.props,e.children)},d=(e,t,r,n,o)=>{let i;return t?.key&&(i=t.key,delete t.key),{tag:e,props:t,children:r,key:i,flag:n,delta:o}},h=e=>{if(e.__m_old_vnode)return e.__m_old_vnode;if(e instanceof Text)return String(e.nodeValue);const t={},r=new Array(e.children.length).fill(0);for(let r=0;r<e.attributes.length;r++)t[e.attributes[r].nodeName]=e.attributes[r].nodeValue;for(let t=0;t<e.childNodes.length;t++)r[t]=h(e.childNodes[t]);const n=d(e.tagName,t,r);return e.__m_old_vnode=n,n},f=[],_=Promise.resolve();let y=0,g=!1;const b=()=>navigator?.scheduling?.isInputPending({includeContinuous:!0})||performance.now()>=y,v=()=>{for(y=performance.now()+16.666666666666668;!b();){const e=f.shift();if(!e)break;e()}g=!1,f.length>0&&N()},N=()=>{g||queueMicrotask((()=>{_.then(v),g=!0}))};t.DELETE=(e=0)=>[2,e],t.INSERT=(e=0)=>[0,e],t.OLD_VNODE_FIELD=n,t.UPDATE=(e=0)=>[1,e],t.childrenDriver=i,t.className=e=>Object.keys(e).filter((t=>e[t])).join(" "),t.compose=c,t.createElement=a,t.flush=v,t.flushWorkStack=s,t.kebab=e=>{const t={};for(const r in e)t[r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()]=e[r];return t},t.m=d,t.nextTick=N,t.ns=p,t.patch=l,t.propsDriver=r,t.schedule=e=>{f.push(e),N()},t.shouldYield=b,t.style=e=>Object.entries(e).map((e=>e.join(":"))).join(";"),t.svg=e=>(e.props||(e.props={}),p(e.tag,e.props,e.children),e),t.toVNode=h},function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.XSprite=void 0;var i=r(2),s=function(e){function t(t){var r=e.call(this)||this;return r._childrens=[],r._id=t||"obj_"+r.createId,r.style={position:"absolute",display:"inline-block",left:"0px",top:"0px",width:"100px",height:"100px",background:"rgba(0,0,0,.05)"},console.log(r.id),r}return o(t,e),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stage",{get:function(){return this._stage},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return parseInt(this.style.width)},set:function(e){this.style.width=e+"px",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return parseInt(this.style.height)},set:function(e){this.style.height=e+"px",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"percentWidth",{get:function(){return parseInt(this.style.width)},set:function(e){this.style.width=e+"%",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"percentHeight",{get:function(){return parseInt(this.style.height)},set:function(e){this.style.height=e+"%",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return parseInt(this.style.left)},set:function(e){this.style.left=e+"px",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return parseInt(this.style.top)},set:function(e){this.style.top=e+"px",this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"background",{get:function(){return this.style.background},set:function(e){this.style.background=e,this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this._childrens.length},enumerable:!1,configurable:!0}),t.prototype.addChild=function(e){return e._parent=this,e._stage=this.stage,this._childrens.push(e),this.render(),e},t.prototype.addChildAt=function(e,t){return e._parent=this,e._stage=this.stage,this._childrens.splice(t,0,e),this.render(),e},t.prototype.removeChild=function(e){e._parent=void 0,e._stage=void 0;var t=this._childrens.findIndex((function(t){return t==e}));return this._childrens.splice(t,1),this.render(),e},t.prototype.removeChildAt=function(e){var t=this._childrens.splice(e,1)[0];return t._parent=void 0,t._stage=void 0,this.render(),t},t.prototype.removeChildren=function(){this._childrens.map((function(e){e._parent=void 0,e._stage=void 0})),this._childrens.length=0,this.render()},t.prototype.getChildAt=function(e){return this._childrens[e]},t.prototype.getVNode=function(){return(0,i.m)("div",{id:this._id,style:(0,i.style)(this.style)},this._childrens.map((function(e){return e.getVNode()})))},t.prototype.render=function(){var e=document.getElementById(this.id);e&&(0,i.patch)(e,this.getVNode())},t}(r(4).XObject);t.XSprite=s},(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.XObject=void 0;var r=function(){function e(){this._createId=0,this._createId=++e.createIdCounter}return Object.defineProperty(e.prototype,"createId",{get:function(){return this._createId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"className",{get:function(){return this.constructor.name},enumerable:!1,configurable:!0}),e.createIdCounter=0,e}();t.XObject=r},function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.XStage=void 0;var i=r(2),s=function(e){function t(){var t=e.call(this,"stage")||this;return t.percentWidth=100,t.percentHeight=100,t.background="rgb(0,0,0,0)",t._stage=t,document.body.append((0,i.createElement)(t.getVNode())),t}return o(t,e),t}(r(3).XSprite);t.XStage=s}],t={};(function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports})(0)})();