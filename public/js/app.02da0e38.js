(function(t){function r(r){for(var n,a,c=r[0],u=r[1],s=r[2],l=0,d=[];l<c.length;l++)a=c[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(r);while(d.length)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,r=0;r<i.length;r++){for(var e=i[r],n=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(n=!1)}n&&(i.splice(r--,1),t=u(u.s=e[0]))}return t}var n={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-3fc7f890":"891e35c7","chunk-a240de86":"91bdea55"}[t]+".js"}function u(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var r=[],e={"chunk-3fc7f890":1};a[t]?r.push(a[t]):0!==a[t]&&e[t]&&r.push(a[t]=new Promise(function(r,e){for(var n="css/"+({}[t]||t)+"."+{"chunk-3fc7f890":"847d1665","chunk-a240de86":"31d6cfe0"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return r()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===n||l===o)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var n=r&&r.target&&r.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),e(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(function(r,e){n=o[t]=[r,e]});r.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(r){l.onerror=l.onload=null,clearTimeout(d);var e=o[t];if(0!==e){if(e){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,e[1](i)}o[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(r)},u.m=t,u.c=n,u.d=function(t,r,e){u.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,r){if(1&r&&(t=u(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)u.d(e,n,function(r){return t[r]}.bind(null,n));return e},u.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(r,"a",r),r},u.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var d=0;d<s.length;d++)r(s[d]);var f=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},1308:function(t,r,e){"use strict";e.d(r,"c",function(){return n}),e.d(r,"a",function(){return a}),e.d(r,"b",function(){return o}),e.d(r,"d",function(){return i}),e.d(r,"e",function(){return c});var n="loadOrders",a="getOrder",o="loadOrder",i="loadProducts",c="loadVariations"},"34fa":function(t,r,e){"use strict";e.d(r,"f",function(){return n}),e.d(r,"g",function(){return a}),e.d(r,"h",function(){return o}),e.d(r,"a",function(){return i}),e.d(r,"d",function(){return c}),e.d(r,"c",function(){return u}),e.d(r,"b",function(){return s}),e.d(r,"e",function(){return l}),e.d(r,"k",function(){return d}),e.d(r,"i",function(){return f}),e.d(r,"j",function(){return p});var n="setOrders",a="setProducts",o="setVariation",i="addProductToCart",c="removeItemFromCart",u="deleteItemFromCart",s="clearCart",l="setError",d="unsetError",f="startVariationsLoading",p="stopVariationsLoading"},"555f":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"d-flex d-flex-row justify-content-center align-self-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],o={name:"loader"},i=o,c=(e("556f"),e("2877")),u=Object(c["a"])(i,n,a,!1,null,"b693cf30",null);r["a"]=u.exports},"556f":function(t,r,e){"use strict";var n=e("d411"),a=e.n(n);a.a},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("navbar"),t.error?e("alert",{attrs:{message:t.error}}):t._e(),e("router-view")],1)},o=[],i=e("cebc"),c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Shop")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/orders"}},[t._v("Orders")])],1)])])],1)},u=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],s={name:"navbar"},l=s,d=e("2877"),f=Object(d["a"])(l,c,u,!1,null,null,null),p=f.exports,v=e("ecee"),h=e("c074"),b=e("ad3d"),m=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"alert alert-danger fixed-top center-block",attrs:{role:"alert"}},[e("span",[t._v(t._s(t.message))]),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},g=[],_=e("34fa"),y={name:"alert",props:["message"],methods:{close:function(){this.$store.commit(_["k"])}}},O=y,j=Object(d["a"])(O,m,g,!1,null,null,null),w=j.exports,k=e("2f62");v["c"].add(h["a"],h["b"],h["d"],h["c"]),n["a"].component("font-awesome-icon",b["a"]);var C={name:"App",components:{Navbar:p,Alert:w},computed:Object(i["a"])({},Object(k["b"])(["error"]))},x=C,I=Object(d["a"])(x,a,o,!1,null,null,null),E=I.exports,P=e("8c4f"),L=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.isLoading?e("loader"):t.order?e("div",{staticClass:"orders-list container"},[e("h1",[t._v("Order "),e("small",{staticClass:"text-muted"},[t._v("# "+t._s(t.order.id))])]),e("h3",[t._v("Customer")]),e("p",{staticClass:"mb5"},[t._v("\n      "+t._s(t.order.billing.first_name)+" "+t._s(t.order.billing.last_name)),e("br"),t._v("\n      "+t._s(t.order.billing.address_1)+" "+t._s(t.order.billing.address_2)),e("br"),t._v("\n      "+t._s(t.order.billing.city)+" "+t._s(t.order.billing.state)),e("br"),t._v("\n      "+t._s(t.order.billing.postcode)+" "+t._s(t.order.billing.country)),e("br")]),e("table",{staticClass:"table"},[e("tr",[e("th",[t._v("Product")]),e("th",[t._v("Quantity")]),e("th",[t._v("Price")]),e("th",[t._v("Total")])]),t._l(t.order.line_items,function(r){return e("tr",{key:r.id,staticClass:"line-item"},[e("td",[t._v(t._s(r.name))]),e("td",[t._v(t._s(r.quantity))]),e("td",[t._v(t._s(t.order.currency_symbol)+t._s(r.price))]),e("td",[t._v(t._s(t.order.currency_symbol)+t._s(r.total))])])})],2),e("p",[e("strong",[t._v("Total: ")]),t._v("\n      "+t._s(t.order.total)+" "+t._s(t.order.currency)+"\n    ")])]):t._e()],1)},A=[],R=(e("96cf"),e("3b8d")),U=e("1308"),S=e("555f"),T={name:"order",components:{Loader:S["a"]},data:function(){return{order:null,isLoading:!1}},created:function(){this.loadOrder()},methods:{loadOrder:function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,this.$store.dispatch(U["a"],this.$route.params.id);case 4:this.order=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$store.commit(_["e"],"Something went wrong");case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,7,10,13]])}));function r(){return t.apply(this,arguments)}return r}()}},$=T,q=Object(d["a"])($,L,A,!1,null,null,null),N=q.exports;n["a"].use(P["a"]);var D,M,V=new P["a"]({mode:"hash",base:"/",routes:[{path:"/orders",name:"ordersList",component:function(){return e.e("chunk-a240de86").then(e.bind(null,"bf4b"))}},{path:"/orders/new",name:"orderNew",component:function(){return e.e("chunk-3fc7f890").then(e.bind(null,"8a5f"))}},{path:"/orders/:id",name:"order",component:N},{path:"*",redirect:"/orders/new"}]}),B=e("bd86"),F=(e("5df3"),e("ac6a"),e("8e98")),J=(e("456d"),e("bc3a")),H=e.n(J),K={baseUrl:"http://staffshop.ladaclubhungary.hu",basePath:"api/products",getAll:function(){return H.a.get(this.getUrl(null,{status:"publish",stock_status:"instock",orderby:"title",per_page:100}))},get:function(t){return H.a.get(this.getUrl(t))},getUrl:function(t,r){var e=this.baseUrl+"/"+this.basePath;if(t&&(e+="/"+t),r){e+="?";for(var n=0,a=Object.keys(r);n<a.length;n++){var o=a[n];e+=encodeURIComponent(o)+"="+encodeURIComponent(r[o])+"&"}}return e}},Q=(D={},Object(B["a"])(D,U["c"],function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(r){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F["a"].getAll();case 2:e=t.sent,r.commit(_["f"],e.data);case 4:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}()),Object(B["a"])(D,U["b"],function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(r,e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F["a"].get(e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}()),Object(B["a"])(D,U["a"],function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(r,e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.getters.order(e)||r.dispatch(U["b"],e),t.abrupt("return",n);case 2:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}()),Object(B["a"])(D,U["d"],function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(r){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},r.commit(_["g"],e),t.next=4,K.getAll();case 4:n=t.sent.data,n.forEach(function(t){t.variationsData=[],e[t.id]=t,r.dispatch(U["e"],t)}),r.commit(_["g"],e);case 7:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}()),Object(B["a"])(D,U["e"],function(){var t=Object(R["a"])(regeneratorRuntime.mark(function t(r,e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.commit(_["i"],e.id),n=[],e.variations.forEach(function(t){n.push(K.get(t))}),t.abrupt("return",Promise.all(n).then(function(t){Array.isArray(t)&&t.forEach(function(t){r.commit(_["h"],t.data)})}).finally(function(){r.commit(_["j"],e.id)}));case 4:case"end":return t.stop()}},t)}));return function(r,e){return t.apply(this,arguments)}}()),D),z=function(t,r){return t.productId===r.productId&&t.variationId===r.variationId},G=(M={},Object(B["a"])(M,_["f"],function(t,r){t.orders=r}),Object(B["a"])(M,_["g"],function(t,r){t.products=r}),Object(B["a"])(M,_["e"],function(t,r){t.error=r}),Object(B["a"])(M,_["k"],function(t){t.error=null}),Object(B["a"])(M,_["a"],function(t,r){var e=r.productId,n=r.variationId,a=r.quantity,o=!1,i={productId:e,variationId:n,quantity:a};t.cart.some(function(t){return z(t,i)&&(t.quantity+=i.quantity,o=!0),o}),o||t.cart.push({productId:e,variationId:n,quantity:a})}),Object(B["a"])(M,_["d"],function(t,r){var e=r.productId,n=r.variationId,a={productId:e,variationId:n};t.cart.some(function(r,e){return!!z(r,a)&&(r.quantity-=1,r.quantity<=0&&t.cart.splice(e,1),!0)})}),Object(B["a"])(M,_["c"],function(t,r){var e=r.productId,n=r.variationId,a={productId:e,variationId:n};t.cart.some(function(r,e){return!!z(r,a)&&(t.cart.splice(e,1),!0)})}),Object(B["a"])(M,_["b"],function(t){t.cart=[]}),Object(B["a"])(M,_["i"],function(t,r){t.variationLoading=Object(i["a"])({},t.variationLoading,Object(B["a"])({},r,!0))}),Object(B["a"])(M,_["j"],function(t,r){t.variationLoading=Object(i["a"])({},t.variationLoading,Object(B["a"])({},r,!1))}),Object(B["a"])(M,_["h"],function(t,r){var e=r.parent_id;if(!t.products.hasOwnProperty(e))throw new Error("Could not find product for variation");t.products[e].variationsData.push(r),t.products=Object(i["a"])({},t.products)}),M),W={order:function(t){return function(r){var e=t.orders.filter(function(t){return t.id===r});return e.length?e.pop():null}},product:function(t){return function(r){return t.products[r]}},variation:function(t){return function(r,e){var n,a=t.products[r];return a&&(n=a.variationsData.filter(function(t){return t.id===e}),n=1===n.length?n[0]:void 0),n}}},X={state:{orders:[],products:{},cart:[],error:null,variationLoading:{}},actions:Q,mutations:G,getters:W};n["a"].use(k["a"]);var Y=function(){return new k["a"].Store(X)};n["a"].config.productionTip=!1,n["a"].use(k["a"]);var Z=Y();new n["a"]({router:V,store:Z,render:function(t){return t(E)}}).$mount("#app")},"8e98":function(t,r,e){"use strict";var n=e("bc3a"),a=e.n(n);r["a"]={baseUrl:"http://staffshop.ladaclubhungary.hu",basePath:"api/orders",getAll:function(){return a.a.get(this.getUrl())},get:function(t){return a.a.get(this.getUrl(t))},create:function(t){return a.a.post(this.getUrl(),t)},getUrl:function(t){var r=this.baseUrl+"/"+this.basePath;return r+(t?"/"+t:"")}}},d411:function(t,r,e){}});
//# sourceMappingURL=app.02da0e38.js.map