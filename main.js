(()=>{"use strict";var n,r,e,t,o,a,i,c,s,l,p,d,u,f,x={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n    height: 100vh;\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 20px;\r\n    background-color: #1F2937;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    font-size: 24px;\r\n    color: #F9FAF8;\r\n    font-weight: bold;\r\n}\r\n\r\n.links {\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.pic {\r\n    background-color:aliceblue;\r\n    padding: 100px 150px;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.landing {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #1F2937;\r\n    padding: 100px 0px;\r\n    gap: 200px;\r\n}\r\n\r\n.links, .description {\r\n    font-size: 18px;\r\n    color: #E5E7EB;\r\n}\r\n\r\n.hero {\r\n    font-size: 48px;\r\n    font-weight: 800;\r\n    color: #F9FAF8;\r\n}\r\n\r\nbutton {\r\n    background-color: #3882F6;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 8px 25px;\r\n    color: #E5E7EB;\r\n    font-weight: bold;\r\n}\r\n.btn1 {\r\n    margin-top: 10px;\r\n}\r\n\r\n.landing-description {\r\n    width: 450px;\r\n}\r\n\r\n.information { \r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    gap: 50px;\r\n    padding: 50px;\r\n}\r\n\r\n.info {\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n}\r\n.box {\r\n    border: solid;\r\n    border-color: #3882F6;\r\n    padding: 70px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n.boxes {\r\n    display: flex;\r\n    gap: 40px;\r\n\r\n}\r\n\r\n.item {\r\n    flex-flow: column;\r\n    display: flex;\r\n    width: 150px;\r\n    gap: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.quote-section {\r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    background-color: #E5E7EB;\r\n    padding: 100px;\r\n}\r\n\r\n.quote {\r\n    font-style: italic;\r\n    font-weight: lighter;\r\n    font-size: 36px;\r\n}\r\n\r\n.quote-box {\r\n    display: flex;\r\n    flex-flow: column;\r\n    width: 720px;\r\n    gap: 20px;\r\n}\r\n.author {\r\n    align-self: flex-end;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var x=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:x,references:1})}i.push(d)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var p=e(a[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},g={};function h(n){var r=g[n];if(void 0!==r)return r.exports;var e=g[n]={id:n,exports:{}};return x[n](e,e.exports,h),e.exports}h.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return h.d(r,{a:r}),r},h.d=(n,r)=>{for(var e in r)h.o(r,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},h.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=h(379),r=h.n(n),e=h(795),t=h.n(e),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),l=h.n(s),p=h(589),d=h.n(p),u=h(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();