(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    background-color: cadetblue;\n    color: blanchedalmond;\n}\n\n/* HEADER */\n\nheader {\n    margin: 30px 0;\n}\n\n#header-title {\n    text-align: center;\n}\n\n#header-title, nav {\n    width: 50%;\n    display: inline-block;  \n}\n\nnav a {\n    text-decoration: none;\n    padding: 12px   ;\n    color: brown;\n    background-color: blanchedalmond;    \n}\n\nnav ul {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n}\n\nnav li {\n    display: inline-block;\n    padding: 12px 0;\n}\n\n/* HOME-CONTENT */\n#about {\n    width: 80%;\n    margin: 0 auto;\n    padding: 35px 0;\n}\n\n\n\n#about p {\n   padding: 10px 0;\n}\n\n/* FOOTER */\nfooter {\n    text-align: center;\n    font-size: 12px;\n    background-color: brown;\n    padding: 20px;\n    margin-top: 15px;\n    color: #ffffff;\n}\n\n/* MENU */\n.section-header {\n    text-align: center;\n\n}\n\n#menu-items {\n    display: flex;\n    flex-flow: row wrap;\n}\n\n.menu-box {\n\n    border-radius: 10px;\n    background-color: blanchedalmond;\n    color: brown;\n    display: inline-block;\n    width: 45%;\n    height: 250px;\n    padding: 50px;\n    margin: 20px;\n}\n.menu-box h2 {\n    text-align: center;\n}\n.menu-box p {\n    margin-bottom: 7px;\n}\n.sidebar {\n\n}\n@media (max-width: 300px){\n    .menu-box {\n        width: 100%;\n    }\n}\n\n/* MID-SECTION MAIN-CONTENT */\n.main-content {\n    max-width: 75%;\n    margin: 0 auto;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},228:(e,n,t)=>{e.exports=t.p+"1bb7d6d6713a42b9e7a9.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(228);function n(){const n=document.createElement("section");n.id="home-content";const t=document.createElement("div");t.id="main-img";const o=new Image;o.src=e,t.appendChild(o),n.appendChild(t);const r=document.createElement("article");r.id="about";const a=document.createElement("h1");a.innerText="Welcome Home",a.classList.add("section-header"),n.appendChild(a);const c=["This place is the best diner in the Midwest. Folks come from miles around to eat here. Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.","You won't find a friendlier bunch of misfits to welcome you to a warm meal and comfortable atmosphere.","Our modern approach to classic diner-style experience will definitely be something to experience whether you are a local, new in town, or just passing through."];for(const e of c){const n=document.createElement("p");n.innerText=e,r.appendChild(n)}return n.appendChild(r),n}function o(){const e=document.createElement("div");e.id="menu-wrapper",e.classList.add("main-content");const n=document.createElement("div");n.classList.add("section-header");const t=document.createElement("h1");t.innerHTML="Menu",n.appendChild(t);const o=document.createElement("section");o.id="menu-items",o.classList.add("menu-list");const r={Breakfast:["eggs","bacon","pancakes"],Lunch:["burger","salad","chicken tenders"],Dinner:["salmon","ribeye","pasta"],Dessert:["apple pie","cherry pie","pumpkin pie"]};for(const[e,n]of Object.entries(r)){console.log(e,n);let t=document.createElement("article");t.id=e.toLowerCase(),t.classList.add("menu-box");let r=document.createElement("h2");r.innerText=e,t.appendChild(r);for(const e of n){let n=document.createElement("p");n.innerText=e,t.appendChild(n)}o.append(t)}const a=document.createElement("section");a.classList.add("sidebar");const c=["Coffee","Soda","Tea"],i=document.createElement("h3");i.innerHTML="Beverages",a.appendChild(i);const d=document.createElement("article");for(let e of c){let n=document.createElement("p");n.innerHTML=e,d.appendChild(n)}return a.appendChild(d),e.appendChild(n),e.appendChild(o),e.appendChild(a),e}var r=t(379),a=t.n(r),c=t(795),i=t.n(c),d=t(569),l=t.n(d),s=t(565),p=t.n(s),u=t(216),m=t.n(u),h=t(589),f=t.n(h),g=t(426),v={};function b(){const e=document.createElement("div");e.id="contact-wrapper";const n=document.createElement("div"),t=document.createElement("h2");t.innerHTML="Contact",n.appendChild(t),e.appendChild(n);const o=document.createElement("div"),r=document.createElement("form"),a=document.createElement("fieldset");r.appendChild(a),o.appendChild(r);const c=document.createElement("label");c.htmlFor="fname",c.innerText="Your Name: ",a.appendChild(c);const i=document.createElement("input");i.type="text",i.name="name",i.placeholder="John Smith",c.appendChild(i);const d=document.createElement("label");d.innerText="Your Email: ";const l=document.createElement("input");l.type="email",l.placeholder="johnsmith@example.com",d.appendChild(l),a.appendChild(d);const s=document.createElement("label");s.htmlFor="message",s.innerText="Leave us a message: ";const p=document.createElement("textarea");p.placeholder="Amazing food...",s.appendChild(p),a.appendChild(s);const u=document.createElement("div"),m=document.createElement("ul"),h=["Facebook","Instagram","TikTok"];for(let e of h){let n=document.createElement("li");n.innerHTML=e,m.appendChild(n)}return u.appendChild(m),e.appendChild(o),e.appendChild(u),e}function E(e){const n=document.getElementById("content"),t=n.children;return n.replaceChild(e(),t[1]),n}v.styleTagTransform=f(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=m(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,function(){const e=document.getElementById("content");0===e.children.length&&(e.appendChild(function(){const e=document.createElement("header");e.id="header-wrapper";const n=document.createElement("div");n.id="header-title";const t=document.createElement("p");t.innerText="Tom's Diner",t.classList.add("logo-text"),n.appendChild(t),e.appendChild(n);const o=function(){const e=document.createElement("nav"),n=document.createElement("ul"),t=["Menu","Contact"];for(let e of t){let t=document.createElement("li"),o=document.createElement("a");o.innerHTML=e,o.id=e.toLowerCase(),o.href="#",t.appendChild(o),n.appendChild(t)}return e.appendChild(n),e}();return e.appendChild(o),e}()),e.appendChild(n()),e.appendChild(function(){const e=document.createElement("footer");e.id="footer";const n=document.createElement("p");return n.innerText="Copyright 2022",e.appendChild(n),e}()))}(),document.getElementById("header-title").addEventListener("click",(function(){E(n)})),document.getElementById("menu").addEventListener("click",(function(){E(o)})),document.getElementById("contact").addEventListener("click",(function(){E(b)}))})()})();