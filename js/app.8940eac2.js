(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"51bd4d6f"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("header",{attrs:{id:"profilePhoto"}},[a("img",{attrs:{src:"https://www.gravatar.com/avatar/3ba4f174206afc508dbe40945928431f?s=1024"}}),a("h3",[t._v("Nicolas Frati")]),a("span",[a("i",[t._v("Developer")])])]),a("div",{staticClass:"box",attrs:{id:"whoAmIBox"}},[a("div",{staticClass:"box-title"},[a("p",[a("b",[t._v("Who am I?")])])]),a("div",{staticClass:"box-content"},[a("p",[t._v("\n          This is a brief description of who am I. Nice to meet you. My a name is Nicolas Frati, I'm a full-stack junior developer. I'm a student in the 4th year of the bachelor sistem career. \n          ")])])]),a("div",{staticClass:"box",attrs:{id:"commonLinksBox"}},[a("div",{staticClass:"box-title"},[a("p",[a("b",[t._v("Contact Me!")])])]),a("div",{staticClass:"box-content"},[a("div",{staticClass:"list"},[a("a",{staticClass:"button",attrs:{href:"#"}},[a("span",{staticClass:"fab fa-github fa-2x"}),t._v("Github")]),a("a",{staticClass:"button",attrs:{href:"https://www.instagram.com/nicofrati/"}},[a("span",{staticClass:"fab fa-instagram fa-2x"}),t._v("Instagram")]),a("a",{staticClass:"button",attrs:{href:"https://twitter.com/NFrati"}},[a("span",{staticClass:"fab fa-twitter fa-2x"}),t._v("Twitter")]),a("a",{staticClass:"button",attrs:{href:"https://twitter.com/NFrati"}},[a("span",{staticClass:"fab fa-linkedin fa-2x"}),t._v("Linkedin")])])])])])])}],i=(a("034f"),a("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),u=c.exports,l=a("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("Home page")])])}],d={name:"home",components:{}},h=d,v=Object(i["a"])(h,f,p,!1,null,null,null),m=v.exports;n["a"].use(l["a"]);var b=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),w=a("2f62");n["a"].use(w["a"]);var _=new w["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:b,store:_,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.8940eac2.js.map