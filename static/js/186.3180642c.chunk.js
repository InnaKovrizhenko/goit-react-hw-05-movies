"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),u=t(4390),c=t(7689),s=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Hx)(o).then((function(e){i(e.results)})).catch((function(e){return console.log(e)}))}),[o,i]),(0,s.jsx)(s.Fragment,{children:t.length>0?(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie"})})}},4390:function(e,n,t){t.d(n,{Hx:function(){return m},Tg:function(){return i},Y5:function(){return l},bI:function(){return p},xc:function(){return d}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243),s="7c0c458e245909c66f3397c50f32766a";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?language=en-US",{params:{api_key:s}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?include_adult=false&language=en-US&page=1",{params:{api_key:s,query:n}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?language=en-US&page=1'"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=186.3180642c.chunk.js.map