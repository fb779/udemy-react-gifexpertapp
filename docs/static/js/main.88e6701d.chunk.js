(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),o=function(e){var t=e.setcategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i&&(t((function(e){return e.includes(i)?e:[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Valor por defecto"})})},j=n(10),d=(n(16),function(e){var t=e.title,n=e.url;return Object(a.jsxs)("section",{className:"grid-item animate__animated animate__fadeIn",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:n,alt:t})}),Object(a.jsx)("p",{children:t})]})}),l=n(6),f=n.n(l),b=n(8),p=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=",10,"&api_key=").concat("rkEjzeb6bqXN90eJS8gFpMOEUwhqT52n"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_large.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(n(18),function(e){var t=e.category,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(c.useState)({data:[],loading:!0}),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){p(e).then((function(e){return setTimeout((function(){i({data:e,loading:!1})}),t)}))}),[e,t]),r}(t),r=n.data,i=n.loading;return Object(a.jsxs)("section",{className:"gif",children:[Object(a.jsx)("section",{className:"gif-title animate__animated animate__lightSpeedInRight",children:Object(a.jsx)("h4",{children:t})}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando data..."}),Object(a.jsx)("section",{className:"gif-grid",children:r.map((function(e){return Object(a.jsx)(d,Object(j.a)({},e),e.id)}))})]})}),m=function(){var e=Object(c.useState)(["Samurai X"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o,{setcategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(19),n(20);i.a.render(Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.88e6701d.chunk.js.map