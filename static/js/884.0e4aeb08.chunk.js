"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(439),s=t(791),a=t(390),i=t(689),c=t(87),u=t(184);n.default=function(){var e=(0,i.UO)().movieId,n=(0,s.useState)(),t=(0,r.Z)(n,2),o=t[0],l=t[1];if((0,s.useEffect)((function(){(0,a.Y5)(e).then(l).catch((function(e){return console.log(e)}))}),[e,l]),console.log(o),!o)return null;var h=o.title,p=o.overview,d=o.genres,f=o.poster_path,v=o.vote_average,x=Object.values(d).map((function(e){return e.name}));return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f),alt:h,width:200}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:h}),(0,u.jsxs)("p",{children:["User Score: ",(0,u.jsx)("span",{children:v})]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:p}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:x.join(", ")})]})]}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(o.id,"/cast"),children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(o.id,"/reviews"),children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]})}},390:function(e,n,t){t.d(n,{Tg:function(){return u},Y5:function(){return l}});var r=t(861),s=t(757),a=t.n(s),i=t(243),c="7c0c458e245909c66f3397c50f32766a";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/all/day?language=en-US",{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?language=en-US"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=884.0e4aeb08.chunk.js.map