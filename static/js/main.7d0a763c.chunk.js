(this.webpackJsonpcafe_app=this.webpackJsonpcafe_app||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),r=s(13),c=s.n(r),o=s(4),m=s.n(o),l=s(14),d=s(15),j=s(16),u=s(19),v=s(18),h=s(17),b=s.n(h);s(43);var p=function(e){e.id;var t=e.year,s=e.title,n=e.summary,i=e.poster,r=e.rating,c=e.runtime,o=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsxs)("h4",{className:"movie_title",children:["\uc81c\ubaa9 : ",s]}),Object(a.jsxs)("h4",{className:"movie_year",children:["\ub0a0\uc9dc : ",t]}),Object(a.jsx)("ul",{className:"movie_genres",children:o.map((function(e,t){return Object(a.jsx)("li",{className:"movie_genres-list",children:e},t)}))}),Object(a.jsxs)("h4",{className:"movie_rating",children:[" \ud3c9\uc810 : ",r," \u2605 "]}),Object(a.jsxs)("h4",{className:"movie_runtime",children:["\ud50c\ub808\uc774\ud0c0\uc784 : ",c," \ubd84"]}),Object(a.jsxs)("h4",{className:"movie_summary",children:["\uc694\uc57d : ",n.slice(0,70),"..."]})]})]})},O=(s(44),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1}),console.log(a);case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"\ubd88\ub7ec\uc624\ub294\uc911..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(p,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,runtime:e.runtime,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));c.a.render(Object(a.jsx)(O,{}),document.getElementById("tomato"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7d0a763c.chunk.js.map