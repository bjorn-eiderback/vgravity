!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vgravity",[],t):"object"==typeof exports?exports.vgravity=t():e.vgravity=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.directive("gravity",{bind:function(e,t,n){function r(e){var t=e.beta,n=e.gamma;t>90&&(t=90),t<-90&&(t=-90),t>80&&t<150&&(n=.2*Math.abs(n)),t+=90,n+=90,f.style.top=u*(i.gy*t/180-i.gy/2)+"px",f.style.left=u*(i.gx*n/180-i.gx/2)+"px"}var o=(t.modifiers,t.value),i=(t.arg,{gx:0,gy:0}),u=1;o.x&&(i.gx=o.x),o.y&&(i.gy=o.y),o.d&&(u=o.d);var f=e;window.addEventListener("deviceorientation",r)}})}}])});
//# sourceMappingURL=vgravity.js.map