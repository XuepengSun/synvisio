!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function i(t){var e,r=t.split("\n"),i={parameters:[["match score",(e=r.slice(0,11))[1].split(":")[1].trim()],["match size",e[2].split(":")[1].trim()],["gap penality",e[3].split(":")[1].trim()],["overlap wndow",e[4].split(":")[1].trim()],["e value",e[5].split(":")[1].trim()],["maximum gaps",e[6].split(":")[1].trim()]],stats:{no_of_collinear_genes:e[8].split(",")[0].split(":")[1].trim(),percentage:Number(e[8].split(",")[1].split(":")[1].trim()),no_of_all_genes:e[8].split(",")[1].split(":")[1].trim()}},s=[],l={};r.slice(11).forEach(function(t,e){t.indexOf("Alignment")>-1?(l.links&&s.push(l),(l=function(t){let e=t.split(" ");return{score:Number(e[3].split("=")[1].trim()),e_value:Number(e[4].split("=")[1].trim()),count:Number(e[5].split("=")[1].trim()),type:"plus"==e[7].trim()?"regular":"flipped",source:e[6].split("&")[0].trim(),target:e[6].split("&")[1].trim(),sourceKey:Number(e[6].split("&")[0].trim().slice(2)),targetKey:Number(e[6].split("&")[1].trim().slice(2)),alignmentID:Number(e[2].split(":")[0].trim())}}(t)).links=[]):t.trim().length>1&&l.links.push(function(t){let e=t.split(":")[1].trim().split(/\s+/);return{source:e[0],target:e[1],e_value:e[2]}}(t))}),s.push(l);let o=[];return s.map(t=>{o.push(t.source,t.target)}),{information:i,alignmentList:s,uniqueIDList:o.filter(n)}}function n(t,e,r){return r.indexOf(t)===e}r.r(e),r.d(e,"process",function(){return i}),addEventListener("message",function(t){var r,i=t.data,n=i.type,s=i.method,l=i.id,o=i.params;"RPC"===n&&s&&((r=e[s])?Promise.resolve().then(function(){return r.apply(e,o)}):Promise.reject("No such method")).then(function(t){postMessage({type:"RPC",id:l,result:t})}).catch(function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:l,error:e})})}),postMessage({type:"RPC",method:"ready"})}]);