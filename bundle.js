(()=>{"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(s)}function i(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c;function a(e,t){return e===t||(c||(c=document.createElement("a")),c.href=t,e===c.href)}function u(t,n,s){t.$$.on_destroy.push(function(t,...n){if(null==t){for(const e of n)e(void 0);return e}const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function f(e,t,n,s){if(e){const o=d(e,t,n,s);return e[0](o)}}function d(e,t,s,o){return e[1]&&o?n(s.ctx.slice(),e[1](o(t))):s.ctx}function p(e,t,n,s){if(e[2]&&s){const o=e[2](s(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|o[s];return e}return t.dirty|o}return t.dirty}function v(e,t,n,s,o,r){if(o){const i=d(t,n,s,r);e.p(i,o)}}function m(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}const h="undefined"!=typeof window;let $=h?()=>window.performance.now():()=>Date.now(),g=h?e=>requestAnimationFrame(e):e;const x=new Set;function b(e){x.forEach((t=>{t.c(e)||(x.delete(t),t.f())})),0!==x.size&&g(b)}const k="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class y{_listeners="WeakMap"in k?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,t){return this._listeners.set(e,t),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver((e=>{for(const t of e)y.entries.set(t.target,t),this._listeners.get(t.target)?.(t)})))}}y.entries="WeakMap"in k?new WeakMap:void 0;let w=!1;function q(e,t){e.appendChild(t)}function _(e,t,n){const s=C(e);if(!s.getElementById(t)){const e=E("style");e.id=t,e.textContent=n,z(s,e)}}function C(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function S(e){const t=E("style");return t.textContent="/* empty */",z(C(e),t),t.sheet}function z(e,t){return q(e.head||e,t),t.sheet}function M(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function L(){return H(" ")}function P(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function O(e,t,n){e.classList.toggle(t,!!n)}function N(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}const F=new Map;let D,B=0;function R(e,t,n,s,o,r,i,l=0){const c=16.666/s;let a="{\n";for(let e=0;e<=1;e+=c){const s=t+(n-t)*r(e);a+=100*e+`%{${i(s,1-s)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,d=C(e),{stylesheet:p,rules:v}=F.get(d)||function(e,t){const n={stylesheet:S(t),rules:{}};return F.set(e,n),n}(d,e);v[f]||(v[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${f} ${s}ms linear ${o}ms 1 both`,B+=1,f}function W(e){D=e}function G(){if(!D)throw new Error("Function called outside component initialization");return D}function J(){const e=G();return(t,n,{cancelable:s=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=N(t,n,{cancelable:s});return o.slice().forEach((t=>{t.call(e,r)})),!r.defaultPrevented}return!0}}function I(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const Y=[],V=[];let K=[];const Q=[],U=Promise.resolve();let X=!1;function Z(e){K.push(e)}const ee=new Set;let te,ne=0;function se(){if(0!==ne)return;const e=D;do{try{for(;ne<Y.length;){const e=Y[ne];ne++,W(e),oe(e.$$)}}catch(e){throw Y.length=0,ne=0,e}for(W(null),Y.length=0,ne=0;V.length;)V.pop()();for(let e=0;e<K.length;e+=1){const t=K[e];ee.has(t)||(ee.add(t),t())}K.length=0}while(Y.length);for(;Q.length;)Q.pop()();X=!1,ee.clear(),W(e)}function oe(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function re(e,t,n){e.dispatchEvent(N(`${t?"intro":"outro"}${n}`))}const ie=new Set;let le;function ce(){le={r:0,c:[],p:le}}function ae(){le.r||r(le.c),le=le.p}function ue(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function fe(e,t,n,s){if(e&&e.o){if(ie.has(e))return;ie.add(e),le.c.push((()=>{ie.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}const de={duration:0};function pe(n,s,o,l){let c,a=s(n,o,{direction:"both"}),u=l?0:1,f=null,d=null,p=null;function v(){p&&function(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-s.length;o&&(e.style.animation=s.join(", "),B-=o,B||g((()=>{B||(F.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&j(t)})),F.clear())})))}(n,p)}function m(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(s){const{delay:o=0,duration:i=300,easing:l=t,tick:h=e,css:k}=a||de,y={start:$()+o,b:s};s||(y.group=le,le.r+=1),"inert"in n&&(s?void 0!==c&&(n.inert=c):(c=n.inert,n.inert=!0)),f||d?d=y:(k&&(v(),p=R(n,u,s,i,o,l,k)),s&&h(0,1),f=m(y,i),Z((()=>re(n,s,"start"))),function(e){let t;0===x.size&&g(b),new Promise((n=>{x.add(t={c:e,f:n})}))}((e=>{if(d&&e>d.start&&(f=m(d,i),d=null,re(n,f.b,"start"),k&&(v(),p=R(n,u,f.b,f.duration,0,l,a.css))),f)if(e>=f.end)h(u=f.b,1-u),re(n,f.b,"end"),d||(f.b?v():--f.group.r||r(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;u=f.a+f.d*l(t/f.duration),h(u,1-u)}return!(!f&&!d)})))}return{run(e){i(a)?(te||(te=Promise.resolve(),te.then((()=>{te=null}))),te).then((()=>{a=a({direction:e?"in":"out"}),h(e)})):h(e)},end(){v(),f=d=null}}}function ve(e){return void 0!==e?.length?e:Array.from(e)}function me(e,t){e.d(1),t.delete(e.key)}function he(e,t){const n={},s={},o={$$scope:1};let r=e.length;for(;r--;){const i=e[r],l=t[r];if(l){for(const e in i)e in l||(s[e]=1);for(const e in l)o[e]||(n[e]=l[e],o[e]=1);e[r]=l}else for(const e in i)o[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function $e(e){return"object"==typeof e&&null!==e?e:{}}let ge;function xe(e){e&&e.c()}function be(e,t,n){const{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),Z((()=>{const t=e.$$.on_mount.map(s).filter(i);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),l.forEach(Z)}function ke(e,t){const n=e.$$;null!==n.fragment&&(function(e){const t=[],n=[];K.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),K=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,n,s,i,l,c,a=null,u=[-1]){const f=D;W(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let p=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),p&&function(e,t){-1===e.$$.dirty[0]&&(Y.push(e),X||(X=!0,U.then(se)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){w=!0;const e=(v=n.target,Array.from(v.childNodes));d.fragment&&d.fragment.l(e),e.forEach(j)}else d.fragment&&d.fragment.c();n.intro&&ue(t.$$.fragment),be(t,n.target,n.anchor),w=!1,se()}var v;W(f)}function we(e,t,n,s){const o=n[e]?.type;if(t="Boolean"===o&&"boolean"!=typeof t?null!=t:t,!s||!n[e])return t;if("toAttribute"===s)switch(o){case"Object":case"Array":return null==t?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return null==t?null:t;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":default:return t;case"Number":return null!=t?+t:t}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(ge=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn||this.$$c)return;function e(e){return()=>{let t;return{c:function(){t=E("slot"),"default"!==e&&A(t,"name",e)},m:function(e,n){M(e,t,n)},d:function(e){e&&j(t)}}}}const t={},n=function(e){const t={};return e.childNodes.forEach((e=>{t[e.slot||"default"]=!0})),t}(this);for(const o of this.$$s)o in n&&(t[o]=[e(o)]);for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=we(i,r.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)l in this.$$d||void 0===this[l]||(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const e in this.$$p_d)if(this.$$d[e]=this.$$c.$$.ctx[this.$$c.$$.props[e]],this.$$p_d[e].reflect){const t=we(e,this.$$d[e],this.$$p_d,"toAttribute");null==t?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const c in this.$$l)for(const a of this.$$l[c]){const u=this.$$c.$on(c,a);this.$$l_u.set(a,u)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=we(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(e){return Object.keys(this.$$p_d).find((t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e))||e}});class qe{$$=void 0;$$set=void 0;$destroy(){ke(this,1),this.$destroy=e}$on(t,n){if(!i(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const _e=[];function Ce(t,n=e){let s;const o=new Set;function r(e){if(l(t,e)&&(t=e,s)){const e=!_e.length;for(const e of o)e[1](),_e.push(e,t);if(e){for(let e=0;e<_e.length;e+=2)_e[e][0](_e[e+1]);_e.length=0}}}function i(e){r(e(t))}return{set:r,update:i,subscribe:function(l,c=e){const a=[l,c];return o.add(a),1===o.size&&(s=n(r,i)||e),l(t),()=>{o.delete(a),0===o.size&&s&&(s(),s=null)}}}}const Se=Ce(0);function ze(e){_(e,"svelte-fv7hvc",'.Header.svelte-fv7hvc.svelte-fv7hvc{background-color:white;position:fixed;width:100%}.Header-container.svelte-fv7hvc.svelte-fv7hvc{grid-template-columns:minmax(auto, 936px);display:grid;justify-content:center;background-color:white;border-bottom:1px solid rgba(38, 38, 38, 0.4)}.Header-content.svelte-fv7hvc.svelte-fv7hvc{display:flex;align-items:center;justify-content:space-between;padding:0.5em}.Header.svelte-fv7hvc ul.svelte-fv7hvc{list-style:none}.Header.svelte-fv7hvc li.svelte-fv7hvc{display:inline-block;margin:0 0 0 1em}.Header.svelte-fv7hvc i.svelte-fv7hvc{font-size:16px;color:rgba(38, 38, 38, 0.7);cursor:pointer}h1.svelte-fv7hvc.svelte-fv7hvc{padding:0;margin:0;font-size:28px;color:black;font-family:"Pacifico", cursive;cursor:pointer;position:relative;background:#fff;mix-blend-mode:multiply;display:inline-block}h1.svelte-fv7hvc.svelte-fv7hvc:before{content:"";display:block;width:100%;height:100%;background:radial-gradient(circle at top left, #f09433, #bc1888);mix-blend-mode:screen;position:absolute;top:0;left:0}')}function Me(t){let n,s,o,r,i,l,c,a,u,f,d,p,v,m=(0===t[0]?"":t[0])+"";return{c(){n=E("div"),s=E("div"),o=E("div"),r=E("div"),r.innerHTML='<h1 class="svelte-fv7hvc">Gatosgram Svelte</h1>',i=L(),l=E("div"),c=E("ul"),a=E("li"),u=E("i"),f=L(),d=H(m),p=L(),v=E("li"),v.innerHTML='<i class="fas fa-user-alt svelte-fv7hvc"></i>',A(r,"class","Header-logo"),A(u,"class","fas fa-heart svelte-fv7hvc"),A(a,"class","svelte-fv7hvc"),A(v,"class","svelte-fv7hvc"),A(c,"class","svelte-fv7hvc"),A(l,"class","Header-nav"),A(o,"class","Header-content svelte-fv7hvc"),A(s,"class","Header-container svelte-fv7hvc"),A(n,"class","Header svelte-fv7hvc")},m(e,t){M(e,n,t),q(n,s),q(s,o),q(o,r),q(o,i),q(o,l),q(l,c),q(c,a),q(a,u),q(a,f),q(a,d),q(c,p),q(c,v)},p(e,[t]){1&t&&m!==(m=(0===e[0]?"":e[0])+"")&&T(d,m)},i:e,o:e,d(e){e&&j(n)}}}function je(e,t,n){let s;return u(e,Se,(e=>n(0,s=e))),[s]}const Ee=class extends qe{constructor(e){super(),ye(this,e,je,Me,l,{},ze)}};function He(e){_(e,"svelte-xjneym",".Main.svelte-xjneym{display:grid;grid-template-columns:minmax(auto, 936px);justify-content:center;background-color:#fafafa}.Main-container.svelte-xjneym{display:grid;grid-template-columns:3fr 1fr;grid-gap:2em;padding:2em 0}")}function Le(e){let t,n,s;const o=e[1].default,r=f(o,e,e[0],null);return{c(){t=E("div"),n=E("div"),r&&r.c(),A(n,"class","Main-container svelte-xjneym"),A(t,"class","Main svelte-xjneym")},m(e,o){M(e,t,o),q(t,n),r&&r.m(n,null),s=!0},p(e,[t]){r&&r.p&&(!s||1&t)&&v(r,o,e,e[0],s?p(o,e[0],t,null):m(e[0]),null)},i(e){s||(ue(r,e),s=!0)},o(e){fe(r,e),s=!1},d(e){e&&j(t),r&&r.d(e)}}}function Pe(e,t,n){let{$$slots:s={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,s]}const Ae=class extends qe{constructor(e){super(),ye(this,e,Pe,Le,l,{},He)}};function Te(e){_(e,"svelte-14okdlf",".Profile-content.svelte-14okdlf.svelte-14okdlf{display:flex;align-items:center}.Profile-avatar.svelte-14okdlf img.svelte-14okdlf{width:42px;height:42px;border-radius:50%}.Profile-info.svelte-14okdlf.svelte-14okdlf{margin:0 0 0 0.5em}.Profile-info.svelte-14okdlf h2.svelte-14okdlf{font-size:14px;color:black;margin:0;padding:0}.Profile-info.svelte-14okdlf span.svelte-14okdlf{font-size:12px;font-weight:normal}")}function Oe(t){let n,s,o,r,i,l,c,a,u,f;return{c(){n=E("div"),s=E("div"),o=E("div"),o.innerHTML='<img src="https://placekitten.com/200/200" alt="Avatar" class="svelte-14okdlf"/>',r=L(),i=E("div"),l=E("h2"),c=H(t[0]),a=L(),u=E("span"),f=H(t[1]),A(o,"class","Profile-avatar svelte-14okdlf"),A(l,"class","svelte-14okdlf"),A(u,"class","svelte-14okdlf"),A(i,"class","Profile-info svelte-14okdlf"),A(s,"class","Profile-content svelte-14okdlf"),A(n,"class","Profile")},m(e,t){M(e,n,t),q(n,s),q(s,o),q(s,r),q(s,i),q(i,l),q(l,c),q(i,a),q(i,u),q(u,f)},p(e,[t]){1&t&&T(c,e[0]),2&t&&T(f,e[1])},i:e,o:e,d(e){e&&j(n)}}}function Ne(e,t,n){let{nickname:s}=t,{name:o}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,o=e.name)},[s,o]}const Fe=class extends qe{constructor(e){super(),ye(this,e,Ne,Oe,l,{nickname:0,name:1},Te)}};function De(e){_(e,"svelte-1uqui3g",".Stories.svelte-1uqui3g.svelte-1uqui3g{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;margin:1em 0;padding:0.5em 1em;background-color:white}.Stories-item.svelte-1uqui3g img.svelte-1uqui3g{width:32px;height:32px;border-radius:50%}.Stories-item.svelte-1uqui3g.svelte-1uqui3g{display:flex;align-items:center;margin:0 0 0.5em 0}.Stories-item.svelte-1uqui3g h2.svelte-1uqui3g{font-size:14px;color:black;margin:0 0 0 0.5em}.Stories-item.svelte-1uqui3g h2 span.svelte-1uqui3g{display:block;font-size:9px;text-transform:uppercase;color:gray}.Stories-head.svelte-1uqui3g.svelte-1uqui3g{display:flex;justify-content:space-between;align-items:center;padding:0.5em 0 0 0}.Stories-head.svelte-1uqui3g h2.svelte-1uqui3g{font-size:12px;font-weight:600}.Stories-head.svelte-1uqui3g span.svelte-1uqui3g{font-size:12px;font-weight:normal;color:black}.Stories-items.svelte-1uqui3g.svelte-1uqui3g{margin:0.5em 0 0.5em 0}.Stories-item-box.svelte-1uqui3g.svelte-1uqui3g{width:32px;height:32px;border:double 2px transparent;border-radius:100%;background-image:linear-gradient(#fff, #fff),\n      radial-gradient(circle at top left, #f09433, #bc1888);background-origin:border-box;background-clip:content-box, border-box}")}function Be(t){let n;return{c(){n=E("div"),n.innerHTML='<div class="Stories-container"><div class="Stories-head svelte-1uqui3g"><h2 class="svelte-1uqui3g">Historias</h2> <span class="svelte-1uqui3g">Ver más</span></div> <div class="Stories-items svelte-1uqui3g"><div class="Stories-item svelte-1uqui3g"><div class="Stories-item-box svelte-1uqui3g"><img src="https://placekitten.com/200/200" alt="Gato 1" class="svelte-1uqui3g"/></div> <h2 class="svelte-1uqui3g">JIAcode.cat\n                <span class="svelte-1uqui3g">Hace 10 horas</span></h2></div></div></div>',A(n,"class","Stories svelte-1uqui3g")},m(e,t){M(e,n,t)},p:e,i:e,o:e,d(e){e&&j(n)}}}const Re=class extends qe{constructor(e){super(),ye(this,e,null,Be,l,{},De)}};function We(e){_(e,"svelte-1v2349h",".Footer.svelte-1v2349h{font-size:11px;letter-spacing:1px;font-weight:normal;color:#535151}")}function Ge(t){let n,s,o;return{c(){n=E("div"),s=E("div"),o=E("div"),o.textContent=`© 2023-${t[0]} Gatosgram`,A(o,"class","Footer-copy"),A(s,"class","Footer-container"),A(n,"class","Footer svelte-1v2349h")},m(e,t){M(e,n,t),q(n,s),q(s,o)},p:e,i:e,o:e,d(e){e&&j(n)}}}function Je(e){return[(new Date).getFullYear()]}const Ie=class extends qe{constructor(e){super(),ye(this,e,Je,Ge,l,{},We)}};function Ye(e){_(e,"svelte-1qo3yk8",".Sidebar.svelte-1qo3yk8{position:relative;padding:4.5em 0 0 0}.Sidebar-container.svelte-1qo3yk8{position:fixed}")}function Ve(e){let t,n,s,o,r,i,l,c;return s=new Fe({props:{nickname:e[0],name:e[1]}}),r=new Re({}),l=new Ie({}),{c(){t=E("div"),n=E("div"),xe(s.$$.fragment),o=L(),xe(r.$$.fragment),i=L(),xe(l.$$.fragment),A(n,"class","Sidebar-container svelte-1qo3yk8"),A(t,"class","Sidebar svelte-1qo3yk8")},m(e,a){M(e,t,a),q(t,n),be(s,n,null),q(n,o),be(r,n,null),q(n,i),be(l,n,null),c=!0},p(e,[t]){const n={};1&t&&(n.nickname=e[0]),2&t&&(n.name=e[1]),s.$set(n)},i(e){c||(ue(s.$$.fragment,e),ue(r.$$.fragment,e),ue(l.$$.fragment,e),c=!0)},o(e){fe(s.$$.fragment,e),fe(r.$$.fragment,e),fe(l.$$.fragment,e),c=!1},d(e){e&&j(t),ke(s),ke(r),ke(l)}}}function Ke(e,t,n){let{nickname:s}=t,{name:o}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,o=e.name)},[s,o]}const Qe=class extends qe{constructor(e){super(),ye(this,e,Ke,Ve,l,{nickname:0,name:1},Ye)}};function Ue(e){_(e,"svelte-ptqmp0",".Comments.svelte-ptqmp0 h3.svelte-ptqmp0{font-size:14px;color:black;font-weight:bold;margin:0;padding:0}.Comments.svelte-ptqmp0 span.svelte-ptqmp0{font-size:14px;margin:0 0 0 0.5em;font-weight:normal;color:rgba(black, 0.9)}.Comments-add.svelte-ptqmp0.svelte-ptqmp0{padding:1em 1em 1em 1em;border-top:1px solid rgba(219, 219, 219, 0.8)}.Comments-add.svelte-ptqmp0 form.svelte-ptqmp0{display:flex;justify-content:space-between;align-items:center}.Comments-content.svelte-ptqmp0.svelte-ptqmp0{padding:0 1em 0.5em 1em}.Comments-users.svelte-ptqmp0.svelte-ptqmp0{margin:0 0 0.5em 0;display:flex}input.svelte-ptqmp0.svelte-ptqmp0{border:solid 1px #e9e9e9;border-radius:5px;color:#696969;border:1px solid transparent;font-size:12px;outline:none;width:100%;display:flex}button.svelte-ptqmp0.svelte-ptqmp0{border:none;color:#3897f0;font-size:12px;outline:none;cursor:pointer}")}function Xe(e,t,n){const s=e.slice();return s[2]=t[n],s}function Ze(e,t){let n,s,o,r,i,l,c=t[2].username+"",a=t[2].text+"";return{key:e,first:null,c(){n=E("div"),s=E("h3"),o=H(c),r=L(),i=E("span"),l=H(a),A(s,"class","svelte-ptqmp0"),A(i,"class","svelte-ptqmp0"),A(n,"class","Comments-users svelte-ptqmp0"),this.first=n},m(e,t){M(e,n,t),q(n,s),q(s,o),q(n,r),q(n,i),q(i,l)},p(e,n){t=e,1&n&&c!==(c=t[2].username+"")&&T(o,c),1&n&&a!==(a=t[2].text+"")&&T(l,a)},d(e){e&&j(n)}}}function et(t){let n,s,o,i,l,c,a,u=[],f=new Map,d=ve(t[0]);const p=e=>e[2].id;for(let e=0;e<d.length;e+=1){let n=Xe(t,d,e),s=p(n);f.set(s,u[e]=Ze(s,n))}return{c(){n=E("div"),s=E("div");for(let e=0;e<u.length;e+=1)u[e].c();o=L(),i=E("div"),l=E("form"),l.innerHTML='<input class="Comments-input svelte-ptqmp0" type="text" id="text" placeholder="Añade un comentario..."/> <button type="submit" class="svelte-ptqmp0">Post</button>',A(l,"class","svelte-ptqmp0"),A(i,"class","Comments-add svelte-ptqmp0"),A(s,"class","Comments-content svelte-ptqmp0"),A(n,"class","Comments svelte-ptqmp0")},m(e,r){M(e,n,r),q(n,s);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(s,null);var f;q(s,o),q(s,i),q(i,l),c||(a=P(l,"submit",(f=t[1],function(e){return e.preventDefault(),f.call(this,e)})),c=!0)},p(e,[t]){1&t&&(d=ve(e[0]),u=function(e,t,n,s,o,i,l,c,a,u,f,d){let p=e.length,v=i.length,m=p;const h={};for(;m--;)h[e[m].key]=m;const $=[],g=new Map,x=new Map,b=[];for(m=v;m--;){const e=d(o,i,m),s=n(e);let r=l.get(s);r?b.push((()=>r.p(e,t))):(r=u(s,e),r.c()),g.set(s,$[m]=r),s in h&&x.set(s,Math.abs(m-h[s]))}const k=new Set,y=new Set;function w(e){ue(e,1),e.m(c,f),l.set(e.key,e),f=e.first,v--}for(;p&&v;){const t=$[v-1],n=e[p-1],s=t.key,o=n.key;t===n?(f=t.first,p--,v--):g.has(o)?!l.has(s)||k.has(s)?w(t):y.has(o)?p--:x.get(s)>x.get(o)?(y.add(s),w(t)):(k.add(o),p--):(a(n,l),p--)}for(;p--;){const t=e[p];g.has(t.key)||a(t,l)}for(;v;)w($[v-1]);return r(b),$}(u,t,p,0,e,d,f,s,me,Ze,o,Xe))},i:e,o:e,d(e){e&&j(n);for(let e=0;e<u.length;e+=1)u[e].d();c=!1,a()}}}function tt(e,t,n){let{comments:s=[]}=t;return e.$$set=e=>{"comments"in e&&n(0,s=e.comments)},[s,function(e){e.preventDefault();const t=e.target.text.value;if(t.length>2){const o={id:Date.now(),text:t,username:"Segote"};n(0,s=[...s,o]),e.target.text.value=""}}]}const nt=class extends qe{constructor(e){super(),ye(this,e,tt,et,l,{comments:0},Ue)}};function st(e){_(e,"svelte-1h16sv",".Modal.svelte-1h16sv{position:relative}.Modal-overlay.svelte-1h16sv{background-color:rgba(0, 0, 0, 0.7);position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:8;cursor:pointer}")}function ot(e){let t,n,s,o,r,i;const l=e[2].default,c=f(l,e,e[1],null);return{c(){t=E("div"),n=E("div"),s=L(),c&&c.c(),A(n,"class","Modal-overlay svelte-1h16sv"),A(t,"class","Modal svelte-1h16sv")},m(l,a){M(l,t,a),q(t,n),q(t,s),c&&c.m(t,null),o=!0,r||(i=P(n,"click",e[0]),r=!0)},p(e,[t]){c&&c.p&&(!o||2&t)&&v(c,l,e,e[1],o?p(l,e[1],t,null):m(e[1]),null)},i(e){o||(ue(c,e),o=!0)},o(e){fe(c,e),o=!1},d(e){e&&j(t),c&&c.d(e),r=!1,i()}}}function rt(e,t,n){let{$$slots:s={},$$scope:o}=t;const r=J();return e.$$set=e=>{"$$scope"in e&&n(1,o=e.$$scope)},[function(){r("close")},o,s]}const it=class extends qe{constructor(e){super(),ye(this,e,rt,ot,l,{},st)}};function lt(e){_(e,"svelte-9kgcfp",".Share.svelte-9kgcfp.svelte-9kgcfp{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0;width:300px;height:80px;position:absolute;top:300px;left:30%;z-index:9;padding:1em}.Share-head.svelte-9kgcfp.svelte-9kgcfp{display:flex;justify-content:space-between;align-items:center}.Share-head.svelte-9kgcfp h2.svelte-9kgcfp{font-size:16px}.Share-head.svelte-9kgcfp button.svelte-9kgcfp{cursor:pointer}.Share-content.svelte-9kgcfp a.svelte-9kgcfp{display:flex;align-items:center;text-decoration:none;color:black;font-size:14px;margin:0 0 0 0}.Share-content.svelte-9kgcfp i.svelte-9kgcfp{color:#3b5998;margin:0 0 0 0;font-size:20px}")}function ct(t){let n,s,o,r,i,l,c,a,u;return{c(){n=E("div"),s=E("div"),o=E("h2"),o.textContent="Compartir",r=L(),i=E("button"),l=L(),c=E("div"),c.innerHTML='<a href="https://www.facebook.com/sharer/sharer.php?&amp;u=https://gatosgram.jiacode.dev" class="svelte-9kgcfp"><i class="fab fa-facebook-square svelte-9kgcfp" target="_blank"></i>\n            Compartir en Facebook</a>',A(o,"class","svelte-9kgcfp"),A(i,"class","fas fa-times-circle svelte-9kgcfp"),A(s,"class","Share-head svelte-9kgcfp"),A(c,"class","Share-content svelte-9kgcfp"),A(n,"class","Share svelte-9kgcfp")},m(e,f){M(e,n,f),q(n,s),q(s,o),q(s,r),q(s,i),q(n,l),q(n,c),a||(u=P(i,"click",t[0]),a=!0)},p:e,i:e,o:e,d(e){e&&j(n),a=!1,u()}}}function at(e){return[function(t){I.call(this,e,t)}]}const ut=class extends qe{constructor(e){super(),ye(this,e,at,ct,l,{},lt)}};function ft(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function dt(e,{delay:t=0,duration:n=400,easing:s=ft,amount:o=5,opacity:r=0}={}){const i=getComputedStyle(e),l=+i.opacity,c="none"===i.filter?"":i.filter,a=l*(1-r),[u,f]=function(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}(o);return{delay:t,duration:n,easing:s,css:(e,t)=>`opacity: ${l-a*t}; filter: ${c} blur(${t*u}${f});`}}function pt(e){_(e,"svelte-1xox57v",".Card.svelte-1xox57v.svelte-1xox57v{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0}.Card-Header.svelte-1xox57v.svelte-1xox57v{display:flex;justify-content:space-between;align-items:center;padding:1em}.Card-user.svelte-1xox57v.svelte-1xox57v{display:flex;align-items:center;justify-content:flex-end}.Card-user.svelte-1xox57v img.svelte-1xox57v{width:32px;height:32px;border-radius:50%}.Card-user.svelte-1xox57v h2.svelte-1xox57v{margin:0;padding:0;font-size:14px;font-weight:600;margin:0 0 0 1em;color:black}.Card-user.svelte-1xox57v h2 span.svelte-1xox57v{display:block;font-size:12px;font-weight:normal;color:rgba(38, 38, 38, 0.7)}.Card-photo.svelte-1xox57v.svelte-1xox57v{padding:0;margin:0}.Card-photo.svelte-1xox57v img.svelte-1xox57v{width:100%;height:auto}.Card-photo.svelte-1xox57v figure.svelte-1xox57v{margin:0;padding:0;cursor:pointer}.Card-settings.svelte-1xox57v i.svelte-1xox57v{cursor:pointer}.Card-icons.svelte-1xox57v.svelte-1xox57v{padding:1em;display:flex;justify-content:space-between;align-items:center}.Card-icons.svelte-1xox57v i.svelte-1xox57v{margin:0 1em 0 0;cursor:pointer;font-size:20px}.Card-icons.svelte-1xox57v i.svelte-1xox57v:last-child{margin:0}.Card-description.svelte-1xox57v.svelte-1xox57v{padding:0 1em 1em 1em}.Card-description.svelte-1xox57v h3.svelte-1xox57v{font-size:14px;font-weight:bold;color:black}.Card-description.svelte-1xox57v span.svelte-1xox57v{font-size:14px}.active-like.svelte-1xox57v.svelte-1xox57v{color:#bc1888;animation:svelte-1xox57v-bounce linear 0.8s;animation-iteration-count:1;transform-origin:20% 20%}.active-bookmark.svelte-1xox57v.svelte-1xox57v{color:#f09433;animation:svelte-1xox57v-bounce linear 0.8s;animation-iteration-count:1;transform-origin:20% 20%}@keyframes svelte-1xox57v-bounce{0%{transform:translate(0px, 0px)}15%{transform:translate(0px, -25px)}30%{transform:translate(0px, 0px)}45%{transform:translate(0px, -15px)}60%{transform:translate(0px, 0px)}75%{transform:translate(0px, -5px)}100%{transform:translate(0px, 0px)}}")}function vt(e){let t,n,s,o;return n=new it({props:{styles:`width: 100%; height: 100%; position: absolute; top: ${e[9]}px; left: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 100;`,$$slots:{default:[mt]},$$scope:{ctx:e}}}),n.$on("close",e[12]),{c(){t=E("div"),xe(n.$$.fragment)},m(e,s){M(e,t,s),be(n,t,null),o=!0},p(e,t){const s={};512&t&&(s.styles=`width: 100%; height: 100%; position: absolute; top: ${e[9]}px; left: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 100;`),131072&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){o||(ue(n.$$.fragment,e),e&&Z((()=>{o&&(s||(s=pe(t,dt,{},!0)),s.run(1))})),o=!0)},o(e){fe(n.$$.fragment,e),e&&(s||(s=pe(t,dt,{},!1)),s.run(0)),o=!1},d(e){e&&j(t),ke(n),e&&s&&s.end()}}}function mt(t){let n,s;return n=new ut({}),n.$on("click",t[12]),{c(){xe(n.$$.fragment)},m(e,t){be(n,e,t),s=!0},p:e,i(e){s||(ue(n.$$.fragment,e),s=!0)},o(e){fe(n.$$.fragment,e),s=!1},d(e){ke(n,e)}}}function ht(e){let t,n;return{c(){t=E("img"),a(t.src,n=e[2])||A(t,"src",n),A(t,"alt",e[0]),A(t,"class","svelte-1xox57v")},m(e,n){M(e,t,n)},p(e,s){4&s&&!a(t.src,n=e[2])&&A(t,"src",n),1&s&&A(t,"alt",e[0])},d(e){e&&j(t)}}}function $t(e){let t,n;return{c(){t=E("img"),a(t.src,n=e[2])||A(t,"src",n),A(t,"alt",e[0]),A(t,"class","svelte-1xox57v")},m(e,n){M(e,t,n)},p(e,s){4&s&&!a(t.src,n=e[2])&&A(t,"src",n),1&s&&A(t,"alt",e[0])},d(e){e&&j(t)}}}function gt(e){let t,n;return t=new nt({props:{comments:e[4]}}),{c(){xe(t.$$.fragment)},m(e,s){be(t,e,s),n=!0},p(e,n){const s={};16&n&&(s.comments=e[4]),t.$set(s)},i(e){n||(ue(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function xt(e){let t,n,s,o,i,l,c,u,f,d,p,v,m,h,$,g,x,b,k,y,w,_,C,S,z,N,F,D,B,R,W,G,J,I,Y,V,K,Q,U,X,Z,ee=e[6]&&vt(e);function te(e,t){return e[7]?$t:ht}let ne=te(e),se=ne(e),oe=e[10]&&gt(e);return{c(){t=E("div"),ee&&ee.c(),n=L(),s=E("div"),o=E("div"),i=E("div"),l=E("img"),u=L(),f=E("h2"),d=H(e[0]),p=L(),v=E("span"),m=H(e[1]),h=L(),$=E("div"),$.innerHTML='<div class="Card-settings svelte-1xox57v"><i class="fas fa-ellipsis-h svelte-1xox57v"></i> <div class="Card-header-info-date">2 hours ago</div></div>',g=L(),x=E("div"),b=E("figure"),se.c(),k=L(),y=E("div"),w=E("div"),_=E("i"),C=L(),S=E("i"),z=L(),N=E("i"),F=L(),D=E("div"),B=E("i"),R=L(),W=E("div"),G=E("h3"),J=H(e[0]),I=L(),Y=E("span"),V=H(e[3]),K=L(),Q=E("div"),oe&&oe.c(),a(l.src,c=e[5])||A(l,"src",c),A(l,"alt",e[0]),A(l,"class","svelte-1xox57v"),A(v,"class","svelte-1xox57v"),A(f,"class","svelte-1xox57v"),A(i,"class","Card-user svelte-1xox57v"),A($,"class","Card-header-info"),A(o,"class","Card-Header svelte-1xox57v"),A(b,"class","svelte-1xox57v"),A(x,"class","Card-photo svelte-1xox57v"),A(_,"class","far fa-heart svelte-1xox57v"),A(_,"aria-label","Like Post"),O(_,"active-like",e[7]),A(S,"class","far fa-comment svelte-1xox57v"),A(N,"class","far fa-paper-plane svelte-1xox57v"),A(w,"class","Card-icons-left"),A(B,"class","far fa-bookmark svelte-1xox57v"),O(B,"active-bookmark",e[8]),A(D,"class","active-bookmark svelte-1xox57v"),A(G,"class","svelte-1xox57v"),A(Y,"class","svelte-1xox57v"),A(W,"class","Card-description svelte-1xox57v"),A(Q,"class","Card-comments"),A(y,"class","Card-icons svelte-1xox57v"),A(s,"class","Card-container"),A(t,"class","Card svelte-1xox57v")},m(r,c){M(r,t,c),ee&&ee.m(t,null),q(t,n),q(t,s),q(s,o),q(o,i),q(i,l),q(i,u),q(i,f),q(f,d),q(f,p),q(f,v),q(v,m),q(o,h),q(o,$),q(s,g),q(s,x),q(x,b),se.m(b,null),q(s,k),q(s,y),q(y,w),q(w,_),q(w,C),q(w,S),q(w,z),q(w,N),q(y,F),q(y,D),q(D,B),q(y,R),q(y,W),q(W,G),q(G,J),q(W,I),q(W,Y),q(Y,V),q(y,K),q(y,Q),oe&&oe.m(Q,null),U=!0,X||(Z=[P(b,"dblclick",e[13]),P(_,"click",e[13]),P(S,"click",e[15]),P(N,"click",e[12]),P(B,"click",e[14])],X=!0)},p(e,[s]){e[6]?ee?(ee.p(e,s),64&s&&ue(ee,1)):(ee=vt(e),ee.c(),ue(ee,1),ee.m(t,n)):ee&&(ce(),fe(ee,1,1,(()=>{ee=null})),ae()),(!U||32&s&&!a(l.src,c=e[5]))&&A(l,"src",c),(!U||1&s)&&A(l,"alt",e[0]),(!U||1&s)&&T(d,e[0]),(!U||2&s)&&T(m,e[1]),ne===(ne=te(e))&&se?se.p(e,s):(se.d(1),se=ne(e),se&&(se.c(),se.m(b,null))),(!U||128&s)&&O(_,"active-like",e[7]),(!U||256&s)&&O(B,"active-bookmark",e[8]),(!U||1&s)&&T(J,e[0]),(!U||8&s)&&T(V,e[3]),e[10]?oe?(oe.p(e,s),1024&s&&ue(oe,1)):(oe=gt(e),oe.c(),ue(oe,1),oe.m(Q,null)):oe&&(ce(),fe(oe,1,1,(()=>{oe=null})),ae())},i(e){U||(ue(ee),ue(oe),U=!0)},o(e){fe(ee),fe(oe),U=!1},d(e){e&&j(t),ee&&ee.d(),se.d(),oe&&oe.d(),X=!1,r(Z)}}}function bt(e,t,n){let s;J();let{username:o}=t,{location:r}=t,{photo:i}=t,{postComment:l}=t,{comments:c}=t,{avatar:a}=t,f=!1,d=!1,p=!1,v=Ce(!0);u(e,v,(e=>n(10,s=e)));let m=0;return e.$$set=e=>{"username"in e&&n(0,o=e.username),"location"in e&&n(1,r=e.location),"photo"in e&&n(2,i=e.photo),"postComment"in e&&n(3,l=e.postComment),"comments"in e&&n(4,c=e.comments),"avatar"in e&&n(5,a=e.avatar)},[o,r,i,l,c,a,f,d,p,m,s,v,function(){n(9,m=window.scrollY),n(6,f=!f)},function(){n(7,d=!d),d?Se.update((e=>e+1)):Se.update((e=>e-1))},function(){n(8,p=!p)},function(){v.update((e=>!e))}]}const kt=class extends qe{constructor(e){super(),ye(this,e,bt,xt,l,{username:0,location:1,photo:2,postComment:3,comments:4,avatar:5},pt)}};function yt(e){_(e,"svelte-1bfnmt0",".Timeline.svelte-1bfnmt0{padding:4em 0 0 0}")}function wt(e,t,n){const s=e.slice();return s[1]=t[n],s}function qt(t){let n;return{c(){n=E("p"),n.textContent="Loading..."},m(e,t){M(e,n,t)},p:e,d(e){e&&j(n)}}}function _t(e){let t,s;const o=[e[1]];let r={};for(let e=0;e<o.length;e+=1)r=n(r,o[e]);return t=new kt({props:r}),{c(){xe(t.$$.fragment)},m(e,n){be(t,e,n),s=!0},p(e,n){const s=1&n?he(o,[$e(e[1])]):{};t.$set(s)},i(e){s||(ue(t.$$.fragment,e),s=!0)},o(e){fe(t.$$.fragment,e),s=!1},d(e){ke(t,e)}}}function Ct(e){let t,n,s,o=ve(e[0]),r=[];for(let t=0;t<o.length;t+=1)r[t]=_t(wt(e,o,t));const i=e=>fe(r[e],1,1,(()=>{r[e]=null}));let l=null;return o.length||(l=qt()),{c(){t=E("div"),n=E("div");for(let e=0;e<r.length;e+=1)r[e].c();l&&l.c(),A(n,"class","Timeline-container"),A(t,"class","Timeline svelte-1bfnmt0")},m(e,o){M(e,t,o),q(t,n);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(n,null);l&&l.m(n,null),s=!0},p(e,[t]){if(1&t){let s;for(o=ve(e[0]),s=0;s<o.length;s+=1){const i=wt(e,o,s);r[s]?(r[s].p(i,t),ue(r[s],1)):(r[s]=_t(i),r[s].c(),ue(r[s],1),r[s].m(n,null))}for(ce(),s=o.length;s<r.length;s+=1)i(s);ae(),!o.length&&l?l.p(e,t):o.length?l&&(l.d(1),l=null):(l=qt(),l.c(),l.m(n,null))}},i(e){if(!s){for(let e=0;e<o.length;e+=1)ue(r[e]);s=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)fe(r[e]);s=!1},d(e){e&&j(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(r,e),l&&l.d()}}}function St(e,t,n){let{posts:s=[]}=t;return e.$$set=e=>{"posts"in e&&n(0,s=e.posts)},[s]}const zt=class extends qe{constructor(e){super(),ye(this,e,St,Ct,l,{posts:0},yt)}};function Mt(e){_(e,"svelte-10udrfy",'@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");@import url("https://fonts.googleapis.com/css?family=Lato:300,400,600&display=swap");body{background-color:#fafafa;color:rgba(38, 38, 38, 0.7);font-family:"Lato", sans-serif;margin:0;padding:0}h1, h2, h3{margin:0;padding:0}')}function jt(t){let n;return{c(){n=E("p"),n.textContent=`Something went wrong: ${t[2].message}`},m(e,t){M(e,n,t)},p:e,i:e,o:e,d(e){e&&j(n)}}}function Et(e){let t,n;return t=new Ae({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),{c(){xe(t.$$.fragment)},m(e,s){be(t,e,s),n=!0},p(e,n){const s={};8&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(ue(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Ht(e){let t,s,o,r;t=new zt({props:{posts:e[1].posts}});const i=[e[1].user];let l={};for(let e=0;e<i.length;e+=1)l=n(l,i[e]);return o=new Qe({props:l}),{c(){xe(t.$$.fragment),s=L(),xe(o.$$.fragment)},m(e,n){be(t,e,n),M(e,s,n),be(o,e,n),r=!0},p(e,t){const n=1&t?he(i,[$e(e[1].user)]):{};o.$set(n)},i(e){r||(ue(t.$$.fragment,e),ue(o.$$.fragment,e),r=!0)},o(e){fe(t.$$.fragment,e),fe(o.$$.fragment,e),r=!1},d(e){e&&j(s),ke(t,e),ke(o,e)}}}function Lt(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Pt(e){let t,n,s,o,r;t=new Ee({});let i={ctx:e,current:null,token:null,hasCatch:!0,pending:Lt,then:Et,catch:jt,value:1,error:2,blocks:[,,,]};return function(e,t){const n=t.token={};function s(e,s,o,r){if(t.token!==n)return;t.resolved=r;let i=t.ctx;void 0!==o&&(i=i.slice(),i[o]=r);const l=e&&(t.current=e)(i);let c=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==s&&e&&(ce(),fe(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),ae())})):t.block.d(1),l.c(),ue(l,1),l.m(t.mount(),t.anchor),c=!0),t.block=l,t.blocks&&(t.blocks[s]=l),c&&se()}if(!(o=e)||"object"!=typeof o&&"function"!=typeof o||"function"!=typeof o.then){if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}else{const n=G();if(e.then((e=>{W(n),s(t.then,1,t.value,e),W(null)}),(e=>{if(W(n),s(t.catch,2,t.error,e),W(null),!t.hasCatch)throw e})),t.current!==t.pending)return s(t.pending,0),!0}var o}(o=e[0],i),{c(){xe(t.$$.fragment),n=L(),s=H(""),i.block.c()},m(e,o){be(t,e,o),M(e,n,o),M(e,s,o),i.block.m(e,i.anchor=o),i.mount=()=>s.parentNode,i.anchor=s,r=!0},p(t,[n]){!function(e,t,n){const s=t.slice(),{resolved:o}=e;e.current===e.then&&(s[e.value]=o),e.current===e.catch&&(s[e.error]=o),e.block.p(s,n)}(i,e=t,n)},i(e){r||(ue(t.$$.fragment,e),ue(i.block),r=!0)},o(e){fe(t.$$.fragment,e);for(let e=0;e<3;e+=1)fe(i.blocks[e]);r=!1},d(e){e&&(j(n),j(s)),ke(t,e),i.block.d(e),i.token=null,i=null}}}function At(e){return[fetch("./gatos.json").then((e=>e.json()))]}new class extends qe{constructor(e){super(),ye(this,e,At,Pt,l,{},Mt)}}({target:document.querySelector("main")})})();