(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(808),t.b),d=a()(r()),p=s()(l);d.push([n.id,`* {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    --main-color: #ec0053;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\n.bg-image {\n    position: fixed;\n    left: -5%;\n    right: 0;\n    top: -5%;\n    z-index: -1;\n    display: block;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 110%;\n    height: 110%;\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n/* header */\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 20%;\n    background-color: transparent;\n    border-bottom: 3px solid var(--main-color);\n    text-align: center;\n    box-sizing: border-box;\n}\n\nheader > h1 {\n    color: white;\n    font-size: 45px;\n    margin-bottom: 10px;\n}\n\nnav {\n    display: flex;\n    gap: 20px;\n}\n\n.nav-btn.active {\n    border-bottom: 2px solid var(--main-color);\n}\n\n.nav-btn {\n    padding: 10px;\n    background-color: transparent;\n    color: white;\n    font-size: 20px;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n\n.nav-link:hover {\n    border-bottom: 2px solid var(--main-color);\n}\n\n/* content */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    text-align: center;\n}\n\n/* home page */\n\n#welcome {\n    color: var(--main-color);\n    font-size: 70px;\n    font-weight: 700;    \n}\n\n.title {\n    margin-top: -40px;\n    font-size: 80px;\n    font-weight: 700;\n    color: white;\n    text-transform: uppercase;\n}\n\n.line {\n    width: 280px;\n    border: 2px solid var(--main-color);\n    margin: 30px 0;\n}\n\n.slogan {\n    color: white;\n    font-size: 30px;\n    margin-bottom: 20px;\n}\n\n/* menu page */\n\n#menu-btn {\n    background-color: var(--main-color);\n    padding: 15px;\n    color: white;\n    border-radius: 5px;\n    font-size: 15px;\n    text-transform: uppercase;\n    cursor: pointer;\n    display: block;\n}\n\n.white-bg {\n    background-color: #f2f2f2;\n    padding: 60px 0;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px 20px;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-title {\n    font-size: 70px;\n    text-transform: uppercase;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    border-bottom: 3px solid var(--main-color);\n    justify-self: center;\n    padding: 10px 0;\n    text-align: center;\n}\n\n.item-title {\n    font-size: 30px;\n    color: var(--main-color);\n}\n\n/* footer */\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0px;\n    gap: 5px;\n    background-color: transparent;\n    border-top: 3px solid var(--main-color);\n    color: white;\n    font-size: 18px;\n}`,""]);const u=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},808:(n,e,t)=>{n.exports=t.p+"0493c0b507f808e7f821.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),l=t(540),d=t.n(l),p=t(113),u=t.n(p),m=t(208),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=()=>{const n=document.getElementById("content"),e=document.createElement("p");e.id="welcome",e.textContent="Bienvenuti",n.appendChild(e);const t=document.createElement("h1");t.classList.add("title"),t.textContent="La Pizzeria",n.appendChild(t);const o=document.createElement("div");o.classList.add("line"),n.appendChild(o);const r=document.createElement("p");r.classList.add("slogan"),r.textContent="Fatto con passione!",n.appendChild(r);const i=document.createElement("btn");i.id="menu-btn",i.classList.add("page-btn"),i.textContent="View Menu",n.appendChild(i)};h();const g=document.getElementById("content");document.addEventListener("click",(n=>{const e=n.target;e.classList.contains("page-btn")&&(g.innerHTML="",g.className="","home"===e.id&&h(),"menu"!==e.id&&"menu-btn"!==e.id||(()=>{const n=document.getElementById("content");n.classList.add("white-bg");const e=document.createElement("h1");e.classList.add("menu-title"),e.textContent="Menu",n.appendChild(e);const t=document.createElement("div");t.classList.add("line"),n.appendChild(t);const o=document.createElement("div");o.classList.add("grid-container"),n.appendChild(o),["Bella Napoli Pizza","Amalfi Coast Pizza","Vesuvio Pizza","Capri Pizza","Toscana Pizza","Roma Rustica Pizza"].forEach((n=>{const e=document.createElement("div");e.classList.add("menu-item"),o.appendChild(e);const t=document.createElement("h2");t.textContent=n,t.classList.add("item-title"),e.appendChild(t);const r=document.createElement("p");r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit",e.appendChild(r);const i=document.createElement("h2");i.textContent="$25",e.appendChild(i)}))})(),"about"===e.id&&document.getElementById("content").classList.add("white-bg"))}))})()})();