(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about",contact:"contact",home:"home",shop:"shop"}[e]||e)+"."+{about:"cef6bb47",contact:"b9c45fb5",home:"656636f0",shop:"ed2657de"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,contact:1,home:1,shop:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",contact:"contact",home:"home",shop:"shop"}[e]||e)+"."+{about:"5baa7380",contact:"2c88e0d1",home:"2ad42f56",shop:"5dcc2292"}[e]+".css",r=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===o||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2137:function(e,t,n){"use strict";n("cadb")},"34b7":function(e,t,n){},3525:function(e,t,n){},"669f":function(e,t,n){"use strict";n("3525")},cadb:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,r,a){var i=Object(o["v"])("navigation"),u=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["d"])("div",{class:["v-app",{"is-black":e.isBlack}]},[Object(o["g"])(i),Object(o["g"])(u)],2)}var r=Object(o["z"])("data-v-4365f422");Object(o["s"])("data-v-4365f422");var a={class:"v-nav"},i={class:"v-nav__left"},u={class:"v-nav__title h-ui-button"},s=Object(o["f"])("Hervé"),l={key:0,class:"v-nav__navigation"},f={class:"v-nav__list"},b=Object(o["f"])("Home"),g=Object(o["f"])("Shop"),p=Object(o["f"])("About"),d=Object(o["f"])("Contact"),h={class:"v-nav__right"},v=Object(o["g"])("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60.48 60.48"},[Object(o["g"])("path",{d:"M32.4,54.42c-.12-1.8-.9-3.3-2.28-3.42a3.2,3.2,0,0,0-2,.66L18.72,58a.75.75,0,0,1-.9.12.67.67,0,0,1-.12-.9L20,52c1.08-2.46.72-4.62-2.28-4.44l-11.58.78a.65.65,0,0,1-.54-.24c-.18-.48,0-.72.18-.84L10.44,44c2.34-1.5,2.88-3.6.18-4.92L.36,34A.73.73,0,0,1,0,33.36c0-.36.18-.48.36-.48l5.7-.42c2.52-.24,4.68-1.8,3-4.32L2.64,18.78c-.24-.42-.36-.72-.24-.9a.55.55,0,0,1,.84-.12L8.46,20c2.46,1.08,4.62.78,4.44-2.16L12.12,6.42a.86.86,0,0,1,.3-.78c.42-.12.66,0,.78.24l3.24,4.62c1.62,2.4,3.84,2.82,5,.18L26.22.54a1.06,1.06,0,0,1,.9-.54.47.47,0,0,1,.48.48L28,6.12c.12,1.74.9,3.24,2.1,3.42a3.89,3.89,0,0,0,2.22-.66l9.36-6.3c.48-.24.72-.24.9-.12s.42.66.18.9l-2.34,5c-1.14,2.46-.66,4.74,2.22,4.5l11.58-.78a.64.64,0,0,1,.54.36.6.6,0,0,1-.18.78L50,16.44c-2.28,1.62-2.88,3.6-.18,5l10.26,5c.3.12.42.3.42.72a.45.45,0,0,1-.42.42l-5.7.48c-2.52.18-4.5,1.68-2.88,4.32l6.36,9.36c.24.42.3.66.18.9a.74.74,0,0,1-.9.18L52,40.44c-2.4-1.14-4.68-.6-4.44,2.22l.72,11.4a.94.94,0,0,1-.24.78.57.57,0,0,1-.84-.18L44,50c-1.68-2.46-3.84-2.82-5.1-.18L34.2,60a1.06,1.06,0,0,1-.9.48c-.3,0-.42-.18-.42-.36ZM42.6,29.76a15.44,15.44,0,0,0-12.36-6.18,15.08,15.08,0,0,0-12.3,6.24V30.9a15.1,15.1,0,0,0,12.3,6.18A15.31,15.31,0,0,0,42.6,30.9ZM20,30.36a13.32,13.32,0,0,1,10.2-4.74A13.48,13.48,0,0,1,40.5,30.3,13.6,13.6,0,0,1,30.24,35,13.2,13.2,0,0,1,20,30.36Zm6.06-.06a4.14,4.14,0,1,0,4.14-4.08A4.15,4.15,0,0,0,26.1,30.3Zm2.82.06a1.35,1.35,0,1,1,1.32,1.32A1.33,1.33,0,0,1,28.92,30.36Z"})],-1),m=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 59.7 38.7","xml:space":"preserve"},[Object(o["g"])("g",null,[Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"1.5",x2:"0",y2:"1.5"}),Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"19.3",x2:"0",y2:"19.3"}),Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"37.2",x2:"0",y2:"37.2"})])],-1),O=Object(o["g"])("div",{class:"v-nav__toggle-menu"},null,-1);Object(o["q"])();var j=r((function(e,t,n,c,j,y){var w=Object(o["v"])("router-link");return Object(o["p"])(),Object(o["d"])("section",a,[Object(o["g"])("div",i,[Object(o["g"])("h1",u,[Object(o["g"])(w,{to:"/"},{default:r((function(){return[s]})),_:1})])]),e.isOpen?(Object(o["p"])(),Object(o["d"])("div",l,[Object(o["g"])("ul",f,[Object(o["g"])("li",null,[Object(o["g"])(w,{class:"h-ui-button",to:"/"},{default:r((function(){return[b]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(w,{class:"h-ui-button",to:"/shop"},{default:r((function(){return[g]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(w,{class:"h-ui-button",to:"/about"},{default:r((function(){return[p]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(w,{class:"h-ui-button",to:"/contact"},{default:r((function(){return[d]})),_:1})])])])):Object(o["e"])("",!0),Object(o["g"])("div",h,[Object(o["g"])("div",{onClick:t[1]||(t[1]=function(){return e.toggleSiteLang&&e.toggleSiteLang.apply(e,arguments)}),class:"v-nav__item h-ui-button"},"Fr/En"),Object(o["g"])("div",{onClick:t[2]||(t[2]=function(){return e.toggleTheme&&e.toggleTheme.apply(e,arguments)}),class:"v-nav__item h-ui-button v-nav__site-color"},[v]),Object(o["g"])("div",{class:"h-ui-button v-nav__toggle-icon",onClick:t[3]||(t[3]=function(){return e.toggleMenu&&e.toggleMenu.apply(e,arguments)})},[m,O])])])})),y=n("5502"),w=Object(o["h"])({name:"navigation",props:{data:{}},data:function(){return{isOpen:!1,store:Object(y["b"])()}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen},toggleSiteLang:function(){this.store.commit("toggleSiteLang")},toggleTheme:function(){this.store.commit("toggleSiteTheme")}}});n("669f");w.render=j,w.__scopeId="data-v-4365f422";var _=w,k=Object(o["h"])({components:{Navigation:_},data:function(){return{store:Object(y["b"])()}},computed:{isBlack:function(){return this.store.state.isBlack}}});n("2137");k.render=c;var x=k,L=n("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a4d3"),n("e01a"),n("d3b7"),Symbol("state");var S=Object(y["a"])({state:{isBlack:!0,isFr:!0},mutations:{toggleSiteTheme:function(e){e.isBlack=!e.isBlack},toggleSiteLang:function(e){e.isFr=!e.isFr}},actions:{},modules:{}}),A=(n("34b7"),n("3ca3"),n("ddb0"),n("6c02")),C=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/shop",name:"Shop",component:function(){return n.e("shop").then(n.bind(null,"0fa5"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}}],B=Object(A["a"])({history:Object(A["b"])("/"),routes:C}),T=B;Object(o["c"])(x).use(T).use(S).mount("#app")}});
//# sourceMappingURL=app.8d7b239b.js.map