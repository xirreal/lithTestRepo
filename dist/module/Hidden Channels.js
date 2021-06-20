parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@goosemod/webpack")),n=r(require("@goosemod/patcher"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function i(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)})}}var o=e.findByProps("dispatch"),s=e.findByProps("getMutableGuildChannels").getMutableGuildChannels,c=e.findByProps("getCurrentUser").getCurrentUser(),l=e.findByProps("computePermissions").can,u=e.find(function(e){var n;return"ChannelItem"===(null==e?void 0:null===(n=e.default)||void 0===n?void 0:n.displayName)}),d=e.findByProps("getChannel"),f=d.getChannel,h=e.findByProps("getGuilds"),p=h.getGuilds,y=e.findByProps("Permissions","ChannelTypes"),C=y.Permissions,v=y.ChannelTypes,g=e.findByProps("getDefaultChannel"),m=e.findByProps("getCategories","initialize"),E=e.findByProps("hasUnread").__proto__,P=e.findByProps("fetchMessages"),b=Object.assign({},P).fetchMessages,_=function(){var n=document.querySelector(".".concat(e.findByProps("messagesWrapper").messagesWrapper));if(n){n.firstChild.style.display="none",n.firstChild.nextSibling&&(n.firstChild.nextSibling.style.display="none"),n.parentElement.children[1].style.display="none",n.parentElement.parentElement.children[1].style.display="none",document.querySelector(".".concat(e.findByProps("toolbar","selected").toolbar)).style.display="none";var t=document.createElement("div"),r=e.findByProps("h5"),i=e.findByProps("flex");try{t.className=i.flexCenter,t.style.width="100%",t.innerHTML='\n            <div class="'.concat(i.flex," ").concat(i.directionColumn," ").concat(i.alignCenter,'">\n            <h2 class="').concat(r.h2," ").concat(r.defaultColor,'">This is a hidden channel.</h2>\n            <h5 class="').concat(r.h5," ").concat(r.defaultColor,'">You cannot see the contents of this channel. However, you may see its name and topic.</h5>\n            </div>'),n.appendChild(t)}catch(a){}}},O=function(e){"CHANNEL_SELECT"===e.type&&e.channelId&&(B(e.channelId)||setTimeout(_))},B=function(e){var n=f(e);return!![v.DM].includes(null==n?void 0:n.type)||[v.GUILD_TEXT,v.GUILD_VOICE,v.STAGE_VOICE,v.GUILD_ANNOUNCEMENTS].includes(null==n?void 0:n.type)&&l(C.VIEW_CHANNEL,c,n)},L=Object.values(p()).reduce(function(e,n){return e[n.id]={channels:g.getChannels(n.id).count,hiddenChannels:[]},e},{}),M=!1,I=function(){M=!0,Object.values(s()).forEach(function(e){e.type===v.GUILD_CATEGORY||B(e.id)||L[e.guild_id].hiddenChannels.push(e)}),M=!1},N={},T=document.createElement("style");T.id="hidden-channels-css",T.textContent='[aria-label$="hidden"] > div[aria-label$="(Limited)"] path[d^="M2"][d*="19"] { fill: #ed4245 !important; }';var w={goosemodHandlers:{onImport:function(){var e=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:I(),o.subscribe("CHANNEL_SELECT",O),document.head.appendChild(T),N.CSS=function(){T.remove()},N.getDefaultChannel=n.patch(g,"getChannels",function(e,n){var t;return e[0]?((null===(t=L[e[0]])||void 0===t?void 0:t.channels)==n.count||M||(M=!0,L[e[0]]={channels:g.getChannels(e[0]).count,hiddenChannels:[]},n.SELECTABLE.concat(n.VOICE).forEach(function(n){B(null==n?void 0:n.id)||L[e[0]].hiddenChannels.push(n)}),M=!1),n):n}),N.getCategories=n.patch(m,"getCategories",function(e,n){return L[e[0]].hiddenChannels.forEach(function(e){e&&(n[e.parent_id||"null"].filter(function(n){return n.channel.id===e.id}).length||n[e.parent_id||"null"].push({channel:e,index:0}))}),n}),N.ChannelItem=n.patch(u,"default",function(e){return B(e[0].channel.id)||(e[0]["aria-label"]+=" hidden"),e},!0),N.hasUnread=n.patch(E,"hasUnread",function(e){return B(e[0])||(e[0]=""),e},!0),N.hasUnreadPins=n.patch(E,"hasUnreadPins",function(e){return B(e[0])?e:["unread"]},!0),P.fetchMessages=function(e){if(B(e.channelId))return b(e)},N.fetchMessages=function(){P.fetchMessages=b};case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.unsubscribe("CHANNEL_SELECT",O),Object.values(N).forEach(function(e){return e()});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=w;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js"}]},{},["index.js"], null);parcelRequire('index.js').default