/*! For license information please see 3b1baa31-926662fcf87683615352.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[644],{2599:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;n.d(t,{Ep:function(){return h},J0:function(){return o},RQ:function(){return B},WK:function(){return H},X3:function(){return N},Zn:function(){return j},aU:function(){return r},cP:function(){return p},cm:function(){return A},fp:function(){return m},lX:function(){return l},pC:function(){return U}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const i="popstate";function l(e){return void 0===e&&(e={}),f((function(e,t){let{pathname:n,search:a,hash:r}=e.location;return c("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:h(t)}),null,e)}function o(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function f(e,t,n,l){void 0===l&&(l={});let{window:s=document.defaultView,v5Compat:p=!1}=l,f=s.history,d=r.Pop,m=null,g=v();function v(){return(f.state||{idx:null}).idx}function y(){d=r.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:d,location:b.location,delta:t})}function w(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:h(e);return n=n.replace(/ $/,"%20"),o(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(a({},f.state,{idx:g}),""));let b={get action(){return d},get location(){return e(s,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,y),m=e,()=>{s.removeEventListener(i,y),m=null}},createHref(e){return t(s,e)},createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=r.Push;let a=c(b.location,e,t);n&&n(a,e),g=v()+1;let i=u(a,g),l=b.createHref(a);try{f.pushState(i,"",l)}catch(o){if(o instanceof DOMException&&"DataCloneError"===o.name)throw o;s.location.assign(l)}p&&m&&m({action:d,location:b.location,delta:1})},replace:function(e,t){d=r.Replace;let a=c(b.location,e,t);n&&n(a,e),g=v();let i=u(a,g),l=b.createHref(a);f.replaceState(i,"",l),p&&m&&m({action:d,location:b.location,delta:0})},go(e){return f.go(e)}};return b}var d;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,a){let r=j(("string"==typeof t?p(t):t).pathname||"/",n);if(null==r)return null;let i=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let o=0;null==l&&o<i.length;++o){let e=R(r);l=L(i[o],e,a)}return l}function v(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let s=B([a,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let a of y(e.path))r(e,t,a);else r(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===a.length)return r?[i,""]:[i];let l=y(a.join("/")),o=[];return o.push(...l.map((e=>""===e?i:[i,e].join("/")))),r&&o.push(...l),o.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,b=3,P=2,S=1,x=10,$=-2,W=e=>"*"===e;function E(e,t){let n=e.split("/"),a=n.length;return n.some(W)&&(a+=$),t&&(a+=P),n.filter((e=>!W(e))).reduce(((e,t)=>e+(w.test(t)?b:""===t?S:x)),a)}function L(e,t,n){void 0===n&&(n=!1);let{routesMeta:a}=e,r={},i="/",l=[];for(let o=0;o<a.length;++o){let e=a[o],s=o===a.length-1,u="/"===i?t:t.slice(i.length)||"/",c=O({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),h=e.route;if(!c&&s&&n&&!a[a.length-1].route.index&&(c=O({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(r,c.params),l.push({params:r,pathname:B([i,c.pathname]),pathnameBase:M(B([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=B([i,c.pathnameBase]))}return l}function O(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let i=new RegExp(r,t?void 0:"i");return[i,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=o[n];return e[a]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function R(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function k(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function C(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function A(e,t){let n=C(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function U(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=p(e):(i=a({},e),o(!i.pathname||!i.pathname.includes("?"),k("?","pathname","search",i)),o(!i.pathname||!i.pathname.includes("#"),k("#","pathname","hash",i)),o(!i.search||!i.search.includes("#"),k("#","search","hash",i)));let l,s=""===e||""===i.pathname,u=s?"/":i.pathname;if(null==u)l=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}l=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?p(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:_(a),hash:I(r)}}(i,l),h=u&&"/"!==u&&u.endsWith("/"),f=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!f||(c.pathname+="/"),c}const B=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",I=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class N extends Error{}function H(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const T=["post","put","patch","delete"],D=(new Set(T),["get",...T]);new Set(D),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")}}]);
//# sourceMappingURL=3b1baa31-926662fcf87683615352.js.map