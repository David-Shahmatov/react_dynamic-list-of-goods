(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(5),s=e(6),a=e(3),i=e.n(a),u=e(1),d=(e(12),e(13),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){var n=t.name,e=t.id,o=t.color;return Object(d.jsx)("li",{"data-cy":"good",style:{color:o},className:"title is-5",children:n},e)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){return f().then((function(t){return t})).then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},j=function(){return f().then((function(t){return t})).then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(){var t=Object(u.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(c.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title is-1",children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r(f)},className:"button is-success",children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r(b)},className:"button is-warning",children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r(j)},className:"button is-danger",children:"Load red goods"}),Object(d.jsx)(l,{goods:e})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.66043fce.chunk.js.map