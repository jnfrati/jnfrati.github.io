(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"51bd4d6f"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}r[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"43c9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"container"},[a("div",{staticClass:"box",attrs:{id:"whoAmIBox"}},[t._m(3),a("div",{staticClass:"box-content"},[a("p",[t._v(t._s(t.whoAmI))])])]),a("div",{staticClass:"box",attrs:{id:"commonLinksBox"}},[t._m(4),a("div",{staticClass:"box-content"},[a("p",[t._v(t._s(t.whatIDo))])])])]),t._m(5),a("div",{staticClass:"work-cards"},t._l(t.projects,function(e){return a("div",{staticClass:"project-box"},[a("div",{staticClass:"box-title"},[a("p",[a("b",[t._v(t._s(e.name))])])]),t._m(6,!0)])}),0),t._m(7)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"floatingList"}},[a("a",{attrs:{onClick:"expandBrandList()"}},[a("span",{staticClass:"fas fa-link"})]),a("div",{attrs:{id:"listItems"}},[a("a",{attrs:{href:"http://github.com/jnfrati",target:"_blank"}},[a("span",{staticClass:"fab fa-github"})]),a("a",{attrs:{href:"https://www.instagram.com/nicofrati/",target:"_blank"}},[a("span",{staticClass:"fab fa-instagram"})]),a("a",{attrs:{href:"https://twitter.com/NFrati",target:"_blank"}},[a("span",{staticClass:"fab fa-twitter"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/jnfrati",target:"_blank"}},[a("span",{staticClass:"fab fa-linkedin"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{attrs:{id:"profile"}},[a("img",{attrs:{id:"profilePhoto",src:"https://www.gravatar.com/avatar/3ba4f174206afc508dbe40945928431f?s=1024"}}),a("div",{attrs:{id:"profileDescription"}},[a("h3",[t._v("Nicolas Frati")]),a("span",[a("i",[t._v("Developer")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divisor"},[a("span",[t._v("About Me")]),a("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-title"},[a("p",[a("b",[t._v("Who am I?")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-title"},[a("p",[a("b",[t._v("What I do?")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divisor"},[a("span",[t._v("My Projects")]),a("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-buttons"},[a("a",{attrs:{href:"{{project.url}}",target:"_blank"}},[t._v("Go to project"),a("span",{staticClass:"fas fa-external-link-alt"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("Frati Nicolas Portfolio. 2019")])])}],i={whoAmI:"Hola! Soy José Nicolás Frati, tengo 20 años, naci en Argentina y vivo en la provincia de La Rioja. Soy estudiante de 4to año de la carrera Licenciatura en Sistemas de la Universidad Nacional de Chilecito. Y actualmente estoy en busqueda de un cambio para encontrar nuevos tipos de desafios y oportunidades.",whatIDo:"Hago desarrollo web. Me considero un desarrollador full stack junior, sin experiencia laboral real, pero con experiencia habiendo trabajado en algunos proyectos dentro del contexto universitario. Trabajo en el front end preferentemente con VueJS aunque tengo conocimientos basicos de Angular y ReactJS. En el back end he trabajado con Express y GraphQL en NodeJS desarrollando API y con Laravel desarrollando aplicaciones MVC. ",projects:[{id:1,name:"This Web!",url:"https://github.com/jnfrati/jnfrati.github.io"},{id:2,name:"CODE Front-end",url:"https://github.com/GrupoETICUndec/code-frontend"},{id:3,name:"CODE Back-end",url:"https://github.com/GrupoETICUndec/code"},{id:4,name:"KIUS Front-end",url:"https://github.com/kius-system/web-frontend"}]},s=(a("43c9"),{data:function(){return{whoAmI:i.whoAmI,whatIDo:i.whatIDo,projects:i.projects}},methods:{expandBrandList:function(){var t=document.getElementById("listItems");"none"==t.style.display||""==t.style.display?t.style.display="inherit":t.style.display="none"}}}),c=s,l=a("2877"),u=Object(l["a"])(c,r,o,!1,null,null,null),d=u.exports,f=a("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("Home page")])])}],h={name:"home",components:{}},v=h,b=Object(l["a"])(v,p,m,!1,null,null,null),_=b.exports;n["a"].use(f["a"]);var g=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),w=a("2f62");n["a"].use(w["a"]);var y=new w["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:g,store:y,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.bea90a1d.js.map