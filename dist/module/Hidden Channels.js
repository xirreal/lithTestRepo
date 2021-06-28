parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@goosemod/webpack")),n=r(require("@goosemod/patcher"));function t(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,r=new WeakMap;return(t=function(e){return e?r:n})(e)}function r(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t(n);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}function a(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function s(e){a(o,r,i,s,l,"next",e)}function l(e){a(o,r,i,s,l,"throw",e)}s(void 0)})}}var o=e.findByProps("dispatch"),s=e.findByProps("getMutableGuildChannels").getMutableGuildChannels,l=e.findByProps("getCurrentUser").getCurrentUser(),c=e.findByProps("computePermissions").can,u=e.find(function(e){var n;return"ChannelItem"===(null==e?void 0:null===(n=e.default)||void 0===n?void 0:n.displayName)}),d=e.findByProps("getChannel"),f=d.getChannel,h=e.findByProps("getGuilds"),p=h.getGuilds,y=e.findByProps("Permissions","ChannelTypes"),v=y.Permissions,C=y.ChannelTypes,g=e.findByProps("getDefaultChannel"),m=e.findByProps("getCategories","initialize"),E=e.findByProps("hasUnread").__proto__,P=e.findByProps("fetchMessages"),b=Object.assign({},P).fetchMessages,_=function(){var n=document.querySelector(".".concat(e.findByProps("messagesWrapper").messagesWrapper));if(n){n.firstChild.style.display="none",n.firstChild.nextSibling&&(n.firstChild.nextSibling.style.display="none"),n.parentElement.children[1].style.display="none",n.parentElement.parentElement.children[1].style.display="none",document.querySelector(".".concat(e.findByProps("toolbar","selected").toolbar)).style.display="none";var t=document.createElement("div"),r=e.findByProps("h5"),a=e.findByProps("flex");t.className=a.flexCenter,t.style.width="100%",t.innerHTML='\n        <div class="'.concat(a.flex," ").concat(a.directionColumn," ").concat(a.alignCenter,'">\n        <h2 class="').concat(r.h2," ").concat(r.defaultColor,'">This is a hidden channel.</h2>\n        <h5 class="').concat(r.h5," ").concat(r.defaultColor,'">You cannot see the contents of this channel. However, you may see its name and topic.</h5>\n        </div>'),n.appendChild(t)}},O=function(e){"CHANNEL_SELECT"===e.type&&e.channelId&&(L(e.channelId)||setTimeout(_))},L=function(e){var n=f(e);return!(n&&e&&![C.DM,C.GROUP_DM].includes(null==n?void 0:n.type))||[C.GUILD_TEXT,C.GUILD_VOICE,C.GUILD_STAGE_VOICE,C.GUILD_ANNOUNCEMENT,C.ANNOUNCEMENT_THREAD,C.PRIVATE_THREAD,C.PUBLIC_THREAD].includes(null==n?void 0:n.type)&&c(v.VIEW_CHANNEL,l,n)},M=Object.values(p()).reduce(function(e,n){return e[n.id]={channels:g.getChannels(n.id).count,hiddenChannels:[]},e},{}),T=!1,N=function(){T=!0,Object.values(s()).forEach(function(e){e.type===C.GUILD_CATEGORY||L(e.id)||M[e.guild_id].hiddenChannels.push(e)}),T=!1},B={},I=document.createElement("style");I.id="hidden-channels-css",I.textContent='[aria-label$="hidden"] > div[aria-label$="(Limited)"] path[d^="M2"][d*="19"], [aria-label$="hidden"] > div[aria-label$="(Locked)"] path[d^="M17"][d*="19"]{ fill: #ed4245 !important; }';var U={goosemodHandlers:{onImport:function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N(),o.subscribe("CHANNEL_SELECT",O),document.head.appendChild(I),B.CSS=function(){I.remove()},B.getDefaultChannel=n.patch(g,"getChannels",function(e,n){var t;return e[0]?((null===(t=M[e[0]])||void 0===t?void 0:t.channels)==n.count||T||(T=!0,M[e[0]]={channels:g.getChannels(e[0]).count,hiddenChannels:[]},n.SELECTABLE.concat(n.VOCAL).forEach(function(n){L(null==n?void 0:n.id)||M[e[0]].hiddenChannels.push(n)}),T=!1),n):n}),B.getCategories=n.patch(m,"getCategories",function(e,n){return M[e[0]].hiddenChannels.forEach(function(e){if(!e)return n;var t=n[e.parent_id||"null"];if(t.filter(function(n){var t;return(null==n?void 0:null===(t=n.channel)||void 0===t?void 0:t.id)===e.id}).length)return n;t.push({channel:e,index:0})}),n}),B.ChannelItem=n.patch(u,"default",function(e){return L(e[0].channel.id)||(e[0]["aria-label"]+=" hidden"),e},!0),B.hasUnread=n.patch(E,"hasUnread",function(e){return L(e[0])||(e[0]=""),e},!0),B.hasUnreadPins=n.patch(E,"hasUnreadPins",function(e){return L(e[0])?e:["unread"]},!0),P.fetchMessages=function(e){if(L(e.channelId))return b(e)},B.fetchMessages=function(){P.fetchMessages=b};case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.unsubscribe("CHANNEL_SELECT",O),Object.values(B).forEach(function(e){return e()});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=U;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js"}]},{},["index.js"], null);parcelRequire('index.js').default