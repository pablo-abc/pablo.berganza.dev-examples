var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function c(e){e.forEach(t)}function o(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function i(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function s(){return f(" ")}function d(e,t,n,c){return e.addEventListener(t,n,c),()=>e.removeEventListener(t,n,c)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){(null!=t||e.value)&&(e.value=t)}let _;function g(e){_=e}const v=[],k=[],m=[],y=[],$=Promise.resolve();let b=!1;function x(e){m.push(e)}let w=!1;const E=new Set;function A(){if(!w){w=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];g(t),M(t.$$)}for(v.length=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const t=m[e];E.has(t)||(E.add(t),t())}m.length=0}while(v.length);for(;y.length;)y.pop()();b=!1,w=!1,E.clear()}}function M(e){if(null!==e.fragment){e.update(),c(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const O=new Set;function C(e,t){e&&e.i&&(O.delete(e),e.i(t))}function S(e,t){e.d(1),t.delete(e.key)}function N(e,t){-1===e.$$.dirty[0]&&(v.push(e),b||(b=!0,$.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(u,r,l,i,f,s,d=[-1]){const h=_;g(u);const p=r.props||{},v=u.$$={fragment:null,ctx:null,props:s,update:e,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d};let k=!1;if(v.ctx=l?l(u,p,(e,t,...n)=>{const c=n.length?n[0]:t;return v.ctx&&f(v.ctx[e],v.ctx[e]=c)&&(v.bound[e]&&v.bound[e](c),k&&N(u,e)),t}):[],v.update(),k=!0,c(v.before_update),v.fragment=!!i&&i(v.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);v.fragment&&v.fragment.l(e),e.forEach(a)}else v.fragment&&v.fragment.c();r.intro&&C(u.$$.fragment),function(e,n,u){const{fragment:r,on_mount:l,on_destroy:a,after_update:i}=e.$$;r&&r.m(n,u),x(()=>{const n=l.map(t).filter(o);a?a.push(...n):c(n),e.$$.on_mount=[]}),i.forEach(x)}(u,r.target,r.anchor),A()}g(h)}function D(e,t,n){const c=e.slice();return c[11]=t[n],c[13]=n,c}function L(e,t){let n,c,o,u,p,_,g,v,k=t[11].value+"";return{key:e,first:null,c(){n=i("li"),c=i("input"),p=s(),_=f(k),g=s(),h(c,"id",o=t[11].id),c.checked=u=t[11].checked,h(c,"type","checkbox"),h(n,"class","svelte-1ffscyt"),this.first=n},m(e,o,u){l(e,n,o),r(n,c),r(n,p),r(n,_),r(n,g),u&&v(),v=d(c,"change",t[4])},p(e,t){4&t&&o!==(o=e[11].id)&&h(c,"id",o),4&t&&u!==(u=e[11].checked)&&(c.checked=u),4&t&&k!==(k=e[11].value+"")&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(_,k)},d(e){e&&a(n),v()}}}function T(t){let n,o,u,_,g,v,k,m,y,$,b,x,w,E,A,M,O,N,j,T,q=[],B=new Map,I=t[2];const P=e=>e[11].id;for(let e=0;e<I.length;e+=1){let n=D(t,I,e),c=P(n);B.set(c,q[e]=L(c,n))}return{c(){n=i("form"),o=i("label"),u=i("input"),_=f("\n    All"),g=s(),v=i("label"),k=i("input"),m=f("\n    Checked"),y=s(),$=i("label"),b=i("input"),x=f("\n    Unchecked"),w=s(),E=i("form"),A=i("input"),M=s(),O=i("button"),O.textContent="Add Todo",N=s(),j=i("ul");for(let e=0;e<q.length;e+=1)q[e].c();h(u,"type","radio"),h(u,"id","all"),u.__value="all",u.value=u.__value,t[7][0].push(u),h(o,"for","all"),h(o,"class","svelte-1ffscyt"),h(k,"type","radio"),h(k,"id","checked"),k.__value="checked",k.value=k.__value,t[7][0].push(k),h(v,"for","checked"),h(v,"class","svelte-1ffscyt"),h(b,"type","radio"),h(b,"id","unchecked"),b.__value="unchecked",b.value=b.__value,t[7][0].push(b),h($,"for","unchecked"),h($,"class","svelte-1ffscyt"),h(O,"type","submit")},m(e,a,i){l(e,n,a),r(n,o),r(o,u),u.checked=u.__value===t[1],r(o,_),r(n,g),r(n,v),r(v,k),k.checked=k.__value===t[1],r(v,m),r(n,y),r(n,$),r($,b),b.checked=b.__value===t[1],r($,x),l(e,w,a),l(e,E,a),r(E,A),p(A,t[0]),r(E,M),r(E,O),l(e,N,a),l(e,j,a);for(let e=0;e<q.length;e+=1)q[e].m(j,null);var f;i&&c(T),T=[d(u,"change",t[6]),d(k,"change",t[8]),d(b,"change",t[9]),d(A,"input",t[10]),d(E,"submit",(f=t[3],function(e){return e.preventDefault(),f.call(this,e)}))]},p(e,[t]){if(2&t&&(u.checked=u.__value===e[1]),2&t&&(k.checked=k.__value===e[1]),2&t&&(b.checked=b.__value===e[1]),1&t&&A.value!==e[0]&&p(A,e[0]),20&t){const n=e[2];q=function(e,t,n,c,o,u,r,l,a,i,f,s){let d=e.length,h=u.length,p=d;const _={};for(;p--;)_[e[p].key]=p;const g=[],v=new Map,k=new Map;for(p=h;p--;){const e=s(o,u,p),l=n(e);let a=r.get(l);a?c&&a.p(e,t):(a=i(l,e),a.c()),v.set(l,g[p]=a),l in _&&k.set(l,Math.abs(p-_[l]))}const m=new Set,y=new Set;function $(e){C(e,1),e.m(l,f,r.has(e.key)),r.set(e.key,e),f=e.first,h--}for(;d&&h;){const t=g[h-1],n=e[d-1],c=t.key,o=n.key;t===n?(f=t.first,d--,h--):v.has(o)?!r.has(c)||m.has(c)?$(t):y.has(o)?d--:k.get(c)>k.get(o)?(y.add(c),$(t)):(m.add(o),d--):(a(n,r),d--)}for(;d--;){const t=e[d];v.has(t.key)||a(t,r)}for(;h;)$(g[h-1]);return g}(q,t,P,1,e,n,B,j,S,L,null,D)}},i:e,o:e,d(e){e&&a(n),t[7][0].splice(t[7][0].indexOf(u),1),t[7][0].splice(t[7][0].indexOf(k),1),t[7][0].splice(t[7][0].indexOf(b),1),e&&a(w),e&&a(E),e&&a(N),e&&a(j);for(let e=0;e<q.length;e+=1)q[e].d();c(T)}}}function q(e,t,n){let c=[],o="",u="all";let r;return e.$$.update=()=>{34&e.$$.dirty&&n(2,r=c.filter(e=>"checked"===u?e.checked:"unchecked"===u?!e.checked:e))},[o,u,r,function(){n(5,c=[...c,{value:o,id:Date.now(),checked:!1}]),n(0,o="")},function(e){const t=c.findIndex(t=>t.id===+e.target.id);n(5,c[t].checked=e.target.checked,c)},c,function(){u=this.__value,n(1,u)},[[]],function(){u=this.__value,n(1,u)},function(){u=this.__value,n(1,u)},function(){o=this.value,n(0,o)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}{constructor(e){super(),j(this,e,q,T,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map