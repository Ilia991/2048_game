parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||r(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=document.querySelector(".game-score"),c=document.querySelector(".start"),l=document.querySelector(".game-field"),s=document.querySelector("tbody"),u=document.querySelector(".message-start"),d=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],g=!1;if(window.matchMedia("(min-width: 1000px)").matches)window.addEventListener("keydown",function(t){if(g)switch(t.key){case"ArrowUp":return E();case"ArrowDown":return q();case"ArrowLeft":return C();case"ArrowRight":return x()}});else{var v=null,m=null;l.addEventListener("touchstart",function(t){var e=t.changedTouches[0];v=e.clientX,m=e.clientY},!1),l.addEventListener("touchend",function(t){if(v&&m){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,r=v-e,o=m-n;return Math.abs(r)>Math.abs(o)?1===Math.sign(r)?C():x():Math.abs(r)<Math.abs(o)?1===Math.sign(o)?E():q():void 0}},!1)}function p(){for(;s.firstChild;)s.removeChild(s.firstChild);for(var t=0;t<f.length;t++){var e=document.createElement("tr");e.classList.add("field-row");for(var n=0;n<f[t].length;n++){var r=document.createElement("td");r.classList.add("field-cell"),f[t][n]>1&&(r.classList.add("field-cell--".concat(f[t][n])),r.innerText="".concat(f[t][n])),e.appendChild(r)}s.appendChild(e)}}function y(){var t=Math.ceil(100*Math.random()),e=Math.ceil(4*Math.random())-1,n=Math.ceil(4*Math.random())-1;0===f[e][n]?f[e][n]=t>=90?4:2:y(),p()}function w(){g&&(y(),y())}function b(){for(var t=0;t<f.length;t++)for(var e=0;e<f[t].length;e++)f[t][e]=0;p()}function L(t){return t.filter(function(t){return 0!==t})}function M(t){for(var e=L(t),n=0;n<e.length-1;n++)e[n]===e[n+1]&&(e[n]*=2,e[n+1]=0,i.textContent=+i.textContent+ +e[n]);for(e=L(e);e.length<f.length;)e.push(0);return e}function S(t){for(var e=L(t),n=e.length-1;n>=1;n--)e[n-1]===e[n]&&(e[n]*=2,e[n-1]=0,i.textContent=+i.textContent+ +e[n]);for(e=L(e);e.length<f.length;)e.unshift(0);return e}function A(){for(var t=0;t<f.length;t++)for(var e=0;e<f[t].length;e++)2048===f[t][e]&&d.classList.remove("hidden")}function C(){for(var e=[],n=0;n<f.length;n++){var r=[f[n][0],f[n][1],f[n][2],f[n][3]],o=t(r),a=[];r=M(r);for(var i=0;i<o.length;i++)a.push(o[i]===r[i]);f[n][0]=r[0],f[n][1]=r[1],f[n][2]=r[2],f[n][3]=r[3],e.push(!a.includes(!1))}e.includes(!1)&&y(),A(),T()}function x(){for(var e=[],n=0;n<f.length;n++){var r=[f[n][0],f[n][1],f[n][2],f[n][3]],o=t(r),a=[];r=S(r);for(var i=0;i<o.length;i++)a.push(o[i]===r[i]);f[n][0]=r[0],f[n][1]=r[1],f[n][2]=r[2],f[n][3]=r[3],e.push(!a.includes(!1))}e.includes(!1)&&y(),A(),T()}function q(){for(var e=[],n=0;n<f.length;n++){var r=[f[0][n],f[1][n],f[2][n],f[3][n]],o=t(r),a=[];r=S(r);for(var i=0;i<o.length;i++)a.push(o[i]===r[i]);f[0][n]=r[0],f[1][n]=r[1],f[2][n]=r[2],f[3][n]=r[3],e.push(!a.includes(!1))}e.includes(!1)&&y(),A(),T()}function E(){for(var e=[],n=0;n<f.length;n++){var r=[f[0][n],f[1][n],f[2][n],f[3][n]],o=t(r),a=[];r=M(r);for(var i=0;i<o.length;i++)a.push(o[i]===r[i]);f[0][n]=r[0],f[1][n]=r[1],f[2][n]=r[2],f[3][n]=r[3],e.push(!a.includes(!1))}e.includes(!1)&&y(),A(),T()}function T(){for(var t=!1,e=[],n=0;n<f.length;n++){if(f[n].includes(0)){t=!1;break}t=!0}if(t)for(var r=0;r<f.length;r++)for(var o=0;o<f[r].length;o++)if(f[r][o]>0){var a=r>0&&f[r-1][o]===f[r][o],i=r<f.length-1&&f[r+1][o]===f[r][o],c=o<f[r].length-1&&f[r][o+1]===f[r][o],l=o>0&&f[r][o-1]===f[r][o];a||i||c||l||e.push(!(a||i||c||l))}16===e.length&&h.classList.remove("hidden")}c.addEventListener("click",function(){g=!g,c.classList.toggle("restart"),c.classList.toggle("start"),u.classList.toggle("hidden"),h.classList.add("hidden"),c.innerText=g?"Restart":"Start",g||(b(),i.textContent=0),w()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8cc24bb9.js.map