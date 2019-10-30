parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dTec":[function(require,module,exports) {
"use strict";function n(n){return e(n)||r(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function e(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array(9).fill(null),r=function(n){return t[0]===n&&t[1]===n&&t[2]===n||t[3]===n&&t[4]===n&&t[5]===n||t[6]===n&&t[7]===n&&t[8]===n||t[0]===n&&t[3]===n&&t[6]===n||t[1]===n&&t[4]===n&&t[7]===n||t[2]===n&&t[5]===n&&t[8]===n||t[0]===n&&t[4]===n&&t[8]===n||t[2]===n&&t[4]===n&&t[6]===n};return{validMove:function(n){return n>=1&&n<=9&&null===t[n-1]},getValidMoves:function(){return t.reduce(function(t,r,e){return null===r?[].concat(n(t),[e+1]):t},[])},setCell:function(n,r){t[n-1]=r},winner:function(){return r(0)?0:r(1)?1:t.includes(null)?null:-1},toString:function(){return t.map(function(n){return null===n?" ":["X","O"][n]})},clone:function(){return u(n(t))}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;
},{}],"eDsD":[function(require,module,exports) {
"use strict";function e(e,t){return{name:e,token:["X","O"][t],playMove:function(){}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"FCUV":[function(require,module,exports) {
"use strict";function e(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,r=["X","O"][t],n=function(e){for(var t;"playing"===(t=e.getStatus()).status;){var o=e.getValidMoves(),r=o[Math.floor(Math.random()*o.length)];e.playMove(r)}return t};return{name:e,token:r,playMove:function(e,t){var a=function(e){for(var t=e.getValidMoves().map(function(e){return{move:e,score:0,total:0}}),a=0,s=Date.now()+o;Date.now()<s&&a<5e4;a+=1){var v=Math.floor(Math.random()*t.length),u=t[v].move,c=e.clone();c.playMove(u);var l=n(c),i=l.status,M=l.player;"win"===i&&((void 0===M?{}:M).token===r?t[v].score+=1:t[v].score-=1),t[v].total+=1}return t.reduce(function(e,t){var o=e.bestMove,r=e.bestScore,n=t.move,a=t.score/t.total;return a>r?{bestMove:n,bestScore:a}:{bestMove:o,bestScore:r}},{bestMove:0,bestScore:-9e99}).bestMove}(e);setTimeout(function(){return t(a)},100)}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"IEHn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./board.js")),t=n(require("./player.js")),r=n(require("./ai.js"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return i(e)||o(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var l=function n(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,e.default)(),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{setPlayer:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o[n]=a?(0,r.default)(e,n):(0,t.default)(e,n)},playMove:function(e){return!!u.validMove(e)&&(u.setCell(e,i),i=1-i,!0)},getStatus:function(){switch(u.winner()){case 0:return{status:"win",player:o[0]};case 1:return{status:"win",player:o[1]};case-1:return{status:"draw"};default:return{status:"playing"}}},getBoardState:function(){return u.toString()},newGame:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;u=(0,e.default)(),i=t},clone:function(){return n(u.clone(),a(o),i)},getValidMoves:function(){return u.getValidMoves()},nextPlayerTurn:function(e){o[i].playMove(l,e)}}}(),s=l;exports.default=s;
},{"./board.js":"dTec","./player.js":"eDsD","./ai.js":"FCUV"}],"QvaY":[function(require,module,exports) {
"use strict";var e=t(require("./game.js"));function t(e){return e&&e.__esModule?e:{default:e}}var a="https://robohash.org";window.gs=e.default;var c=document.querySelector("#tic-tac-toe"),r=document.querySelector("#winner");function n(){e.default.getBoardState().forEach(function(e,t){" "===e?document.querySelector("#tic-tac-toe").children[t].className="cell":document.querySelector("#tic-tac-toe").children[t].classList.add(e.toLowerCase())})}function l(e,t){var c=document.createElement("img");return c.src="".concat(a,"/").concat(e),c.id="avatar-".concat(t),c}function o(e){document.querySelector("#cell-".concat(e)).click(),n()}function u(){e.default.newGame();var t=document.querySelector("#player-1").value,a=document.querySelector("#player-2").value;e.default.setPlayer(t,0,document.querySelector("#ai-1").checked),e.default.setPlayer(a,1,document.querySelector("#ai-2").checked),document.querySelector("#avatar-1").replaceWith(l(t,1)),document.querySelector("#avatar-2").replaceWith(l(a,2)),c.style.display="grid",n(),r.style.display="none",e.default.nextPlayerTurn(o)}function d(t){if(t.target.classList.contains("cell")&&"playing"===e.default.getStatus().status){var a=t.target.id.split("-")[1];e.default.playMove(a),n();var c=e.default.getStatus(),l=c.status,u=c.player,d=(u=void 0===u?{}:u).name;"playing"!==l?(r.textContent="win"===l?"Winner: ".concat(d):"No winner!",r.style.display="block",document.querySelector("#play").textContent="Play again!"):e.default.nextPlayerTurn(o)}}c.addEventListener("click",d),document.querySelector("#play").addEventListener("click",u);
},{"./game.js":"IEHn"}]},{},["QvaY"], null)
//# sourceMappingURL=js.c8d77229.js.map