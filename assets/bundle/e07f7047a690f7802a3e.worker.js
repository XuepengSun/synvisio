!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="E:\\University\\synteny-project\\synvisio\\build\\assets\\bundle/",n(n.s=0)}([function(e,t,n){"use strict";function r(e){let t,n=new Map,r=new Map;return e.split("\n").forEach(function(e){let o=(t=e.split("\t"))[0],s=t[0].slice(0,2),a=parseInt(t[2]),i=parseInt(t[3]),u=t[1];if(o.length>=2&&o.length<=4)if(n.set(u,{start:a,end:i,chromosomeId:o}),r.has(o)){var c=r.get(o);a<c.start&&(c.start=a),i>c.end&&(c.end=i),r.set(o,c)}else r.set(o,{start:a,end:i,speciesIdentifier:s})}),r.forEach(e=>{e.width=e.end-e.start}),{genomeLibrary:n,chromosomeMap:r}}n.r(t),n.d(t,"process",function(){return r}),addEventListener("message",function(e){var n,r=e.data,o=r.type,s=r.method,a=r.id,i=r.params;"RPC"===o&&s&&((n=t[s])?Promise.resolve().then(function(){return n.apply(t,i)}):Promise.reject("No such method")).then(function(e){postMessage({type:"RPC",id:a,result:e})}).catch(function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:a,error:t})})}),postMessage({type:"RPC",method:"ready"})}]);