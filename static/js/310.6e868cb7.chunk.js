"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{5310:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r,a=n(9439),u=n(1087),i=n(7689),c=n(2791),s=n(4390),o=n(7870),p=n(3736),l=n(5403),f=n(168),m=n(8789).ZP.ul(r||(r=(0,f.Z)(["\nlist-style: none;\n"]))),h=n(184),d=function(){var e,t=(0,u.lr)(),n=(0,a.Z)(t,2),r=n[0],f=n[1],d=null!==(e=r.get("movieTitle"))&&void 0!==e?e:"",v=(0,c.useState)([]),g=(0,a.Z)(v,2),x=g[0],y=g[1],Z=(0,i.TH)();(0,c.useEffect)((function(){""!==d&&(0,s.bI)(d).then(y).catch((function(e){return console.log(e)}))}),[d,r]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;f({movieTitle:t.elements.movieTitle.value}),t.reset()},children:[(0,h.jsx)(o.Z,{id:"outlined-basic",label:"movie search",variant:"outlined",name:"movieTitle",color:"warning",size:"small"}),(0,h.jsx)(p.Z,{type:"submit",variant:"contained",color:"inherit",startIcon:(0,h.jsx)(l.Z,{}),children:"Search"})]}),x&&(0,h.jsx)(m,{children:x.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:Z},children:e.title||e.name})},e.id)}))})]})}},4390:function(e,t,n){n.d(t,{Hx:function(){return v},Tg:function(){return s},Y5:function(){return f},bI:function(){return p},xc:function(){return h}});var r=n(5861),a=n(4687),u=n.n(a),i=n(1243),c="7c0c458e245909c66f3397c50f32766a";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/all/day?language=en-US",{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?include_adult=false&language=en-US&page=1",{params:{api_key:c,query:t}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?language=en-US"),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?language=en-US"),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?language=en-US&page=1'"),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=310.6e868cb7.chunk.js.map