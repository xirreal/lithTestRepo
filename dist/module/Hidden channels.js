parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../moduleWrappers/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@goosemod/webpack"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function r(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(o,i){var a=e.apply(n,t);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)})}}function i(e,n){return function(){try{return e.apply(void 0,arguments)}catch(t){console.error("Error occurred in "+n,t)}}}function a(e,n,t){"function"==typeof t&&(t={instead:t,silent:!0});var r=t,o=r.before,a=r.after,c=r.instead,s=r.once,u=void 0!==s&&s,l=r.silent,d=void 0!==l&&l,p=r.force,f=void 0!==p&&p,h=t.displayName||e.displayName||e.name||e.constructor?e.constructor.displayName||e.constructor.name:null;if(d||console.log("%c[ED_MonkeyPatch] %c[Modules]","color: red;","color: black;","Patched ".concat(n," in module ").concat(h||"<unknown>",":"),e),!e[n]){if(!f)return console.warn("%c[ED_MonkeyPatch] %c[Modules]","color: red;","color: black;","Method ".concat(n," doesn't exist in module ").concat(h||"<unknown>"),e);e[n]=function(){}}var m=e[n],y=function(){d||console.log("%c[ED_MonkeyPatch] %c[Modules]","color: red;","color: black;","Unpatched ".concat(n," in module ").concat(h||"<unknown>",":"),e),e[n]=m};return e[n]=function(){var t={thisObject:this,methodArguments:arguments,cancelPatch:y,originalMethod:m,callOriginalMethod:function(){return t.returnValue=t.originalMethod.apply(t.thisObject,t.methodArguments)}};if(c){var r=i(c,"`instead` callback of "+e[n].displayName)(t);void 0!==r&&(t.returnValue=r)}else o&&i(o,"`before` callback of "+e[n].displayName)(t),t.callOriginalMethod(),a&&i(a,"`after` callback of "+e[n].displayName)(t);return u&&y(),t.returnValue},e[n].__monkeyPatched=!0,e[n].displayName="patched "+(e[n].displayName||n),e[n].unpatch=y,y}function c(e){"CHANNEL_SELECT"===e.type&&u(e.channelId)&&u(e.channelId).isHidden()&&setTimeout(s)}function s(){var n=document.querySelector(".".concat(e.findByProps("messagesWrapper").messagesWrapper));if(n){n.firstChild.style.display="none",n.parentElement.children[1].style.display="none",n.parentElement.parentElement.children[1].style.display="none",document.querySelector("."+e.findByProps(function(e){if(!(e instanceof Window))return e.toolbar&&e.selected?e:void 0}).toolbar).style.display="none";var t=document.createElement("div"),r=e.findByProps("h5"),o=e.findByProps("flex");t.className=o.flexCenter,t.style.width="100%",t.innerHTML='\n        <div class="'.concat(o.flex," ").concat(o.directionColumn," ").concat(o.alignCenter,'">\n        <h2 class="').concat(r.h2," ").concat(r.defaultColor,'">This is a hidden channel.</h2>\n        <h5 class="').concat(r.h5," ").concat(r.defaultColor,'">You cannot see the contents of this channel. However, you may see its name and topic.</h5>\n        </div>'),n.appendChild(t)}}var u,l,d,p,f,h,m,y,g,v,M,P,E,b,C,B,O,N={},k={},A={},w={goosemodHandlers:{onImport:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Enabling hidden channels");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var n=o(regeneratorRuntime.mark(function n(){var t,r,o,i,s,P,E,b,w,_,I;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:f=e.findByProps("dispatch"),u=e.findByProps("getChannel").getChannel,N=e.findByProps("switchItem"),k=e.find(function(e){return e.group&&e.item}),A=e.findByProps("actionIcon"),t=e.findByProps("getCurrentUser").getCurrentUser,r=e.findByProps("getMutableGuildChannels").getMutableGuildChannels,o=e.findByProps("computePermissions").can,a(l=e.findByProps("getDefaultChannel"),"getChannels",function(e){var n=e.callOriginalMethod(e.methodArguments);if(!e.methodArguments[0])return n;var i=[],a=r();for(var c in a)a[c].guild_id===e.methodArguments[0]&&(4===a[c].type||o({data:BigInt(1024)},t(),u(a[c].id))||i.push(a[c]));return n.HIDDEN=i,n}),(h=e.find(function(e){return e.prototype&&e.prototype.isManaged})).prototype.isHidden=function(){return[0,4,5].includes(this.type)&&!o({data:BigInt(1024)},t(),this)},a(d=e.find(function(e){return e.getCategories&&!e.EMOJI_NAME_RE}),"getCategories",function(e){var n=e.callOriginalMethod(e.methodArguments);return l.getChannels(e.methodArguments[0]).HIDDEN.forEach(function(e){n[e.parent_id||"null"].filter(function(n){return n.channel.id===e.id}).length||n[e.parent_id||"null"].push({channel:e,index:0})}),n}),a(p=e.findByProps("hasUnread").__proto__,"hasUnread",function(e){return(!u(e.methodArguments[0])||!u(e.methodArguments[0]).isHidden())&&e.callOriginalMethod(e.methodArguments)}),a(p,"hasUnreadPins",function(e){return(!u(e.methodArguments[0])||!u(e.methodArguments[0]).isHidden())&&e.callOriginalMethod(e.methodArguments)}),f.subscribe("CHANNEL_SELECT",c),a(m=e.findByProps("fetchMessages"),"fetchMessages",function(e){if(!u(e.methodArguments[0])||!u(e.methodArguments[0]).isHidden())return e.callOriginalMethod(e.methodArguments)}),i=e.findByDisplayName("Clickable"),s=e.findByProps("TooltipContainer").TooltipContainer,P=e.findByProps("Messages"),E=P.Messages,b=e.find(function(e){return e.id&&"function"==typeof e.keys&&e.keys().includes("./Gear")}),w=b("./Gear").default,a(y=e.find(function(e){return e.default&&e.default.prototype&&e.default.prototype.renderEditButton}).default.prototype,"renderEditButton",function(n){return e.common.React.createElement(s,{text:E.EDIT_CHANNEL},e.common.React.createElement(i,{className:A.iconItem,onClick:function(){return O=null,B=n.thisObject.props.channel.id,n.thisObject.handleEditClick.apply(n.thisObject,arguments)},onMouseEnter:n.thisObject.props.onMouseEnter,onMouseLeave:n.thisObject.props.onMouseLeave},e.common.React.createElement(w,{width:16,height:16,className:A.actionIcon})))}),a(g=e.findByDisplayName("SettingsView").prototype,"getPredicateSections",{before:function(e){var n=e.thisObject.props.sections.find(function(e){return"PERMISSIONS"===e.section});n&&(n.predicate=function(){return!0})},silent:!0}),a(v=e.findByDisplayName("FluxContainer(ChannelSettings)").prototype,"render",function(e){var n=e.callOriginalMethod(e.methodArguments);return n.props.canManageRoles=!0,n}),a(M=e.findByDisplayName("FluxContainer(ChannelSettingsPermissions)").prototype,"render",function(e){var n=e.callOriginalMethod(e.methodArguments),t=u(n.props.channel.id);return t&&t.isHidden()?(n.props.canSyncChannel=!1,n.props.locked=!0,setTimeout(function(){document.querySelectorAll("."+k.group).forEach(function(e){return e.style="opacity: 0.5; pointer-events: none;"})}),n):n}),_=e.findByProps("can").can,I=e.findByProps("getGuild").getGuild,a(C=e.findByDisplayName("PermissionsForm").prototype,"render",function(e){var n=e.callOriginalMethod(e.methodArguments),t=O?I(O):null,r=B?u(B):null;return t||r?_({data:BigInt(268435456)},t?{guildId:t.id}:{channelId:r.id})?n:n.props.children&&n.props.children[1]?(n.props.children[1].forEach(function(e){e.disabled=!0,e.props.disabled=!0}),n):n:n});case 37:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var e=o(regeneratorRuntime.mark(function e(){var n,t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(l.getChannels.unpatch(),d.getCategories.unpatch(),p.hasUnread.unpatch(),p.hasUnreadPins.unpatch(),m.fetchMessages.unpatch(),y.renderEditButton.unpatch(),n=0,t=[g,v,M,P,E,C];n<t.length;n++)(r=t[n])&&r.render&&r.render.unpatch&&r.render.unpatch();f.unsubscribe("CHANNEL_SELECT",c);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=w;
},{"@goosemod/webpack":"../../moduleWrappers/webpack.js"}]},{},["index.js"], null);parcelRequire('index.js').default