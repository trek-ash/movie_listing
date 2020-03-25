(this.webpackJsonpmovie_listing=this.webpackJsonpmovie_listing||[]).push([[0],{107:function(e,t,n){e.exports=n(222)},112:function(e,t,n){},113:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},124:function(e,t){},126:function(e,t){},164:function(e,t){},165:function(e,t){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(104),i=n.n(r),c=(n(112),n(113),n(18)),l=function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",id:"searchText",placeholder:"Search ...",className:"form-control",onChange:e.Change}))},u=function(e){return o.a.createElement("div",{className:"card mt-4"},o.a.createElement("div",{className:"card-header"},e.movie.original_title||e.movie.title,e.isFavourite?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"float-right",onClick:function(){return e.removeFromFavourite(e.movie.movie_id)}},"Remove from favourite")):o.a.createElement("span",{className:"float-right",onClick:function(){return e.addToFavourite(e.movie.original_title,e.movie.overview,e.movie.id)}},"Add to favourite"),e.movie.original_title),o.a.createElement("div",{className:"card-body"},e.movie.overview),o.a.createElement("div",{className:"card-footer"},o.a.createElement("span",{className:"float-right"},o.a.createElement("b",null,"Rating:")," ",e.movie.vote_average)))},m=function(e){var t,n;return o.a.createElement("div",{className:"mt-4 border p-2"},e.result?null===(t=e.result)||void 0===t||null===(n=t.results)||void 0===n?void 0:n.map((function(t){return o.a.createElement(u,{addToFavourite:e.addToFavourite,removeFromFavourite:e.removeFromFavourite,key:t.id,movie:t})})):"No Results")},s=n(10),h=n(16),f="http://localhost:8000",v=n(37),d=function e(){Object(v.a)(this,e),this.add=function(e,t,n,a){var o={method:"POST",headers:{"content-type":"application/json",email:e},body:JSON.stringify({title:t,overview:n,movie_id:a})};return new Promise((function(e,t){fetch("".concat(f,"/movie/favourites/add"),o).then((function(t){return 400===t.status?e(!1):t.json()})).then((function(t){e(!!t)})).catch((function(e){return t(e)}))}))},this.remove=function(e,t){var n={method:"POST",headers:{"content-type":"application/json",email:e},body:JSON.stringify({movie_id:t})};return new Promise((function(e,t){fetch("".concat(f,"/movie/favourites/remove"),n).then((function(t){return 400===t.status?e(!1):t.json()})).then((function(t){e(t)})).catch((function(e){return t(e)}))}))},this.getFavourites=function(e){var t={method:"GET",headers:{"content-type":"application/json",email:e}};return new Promise((function(e,n){fetch("".concat(f,"/movie/favourites"),t).then((function(t){return 400===t.status?e(!1):t.json()})).then((function(t){e(t.Body)})).catch((function(e){return n(e)}))}))}},g=new d,E=function(e){var t,n=Object(a.useState)(""),r=Object(c.a)(n,2),i=r[0],u=r[1],f=function(e){var t="".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("9500fbf690cb228f96fef08854b76a46","&language=en-US&page=1&include_adult=false&query=").concat(e);fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})),console.log(e)};return Object(a.useEffect)((function(){console.log(i)}),[i]),e.auth.isAuthenticated()?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"my-3 border-bottom"},o.a.createElement(s.b,{to:"/favourites"},"Favourites")),o.a.createElement("h2",null,"Welcome!"),o.a.createElement("div",null,o.a.createElement(l,{Change:function(){var e=document.getElementById("searchText").value;clearTimeout(t),e&&(t=setTimeout((function(){return f(e)}),2e3))}}),o.a.createElement(m,{result:i,addToFavourite:function(t,n,a){var o=e.auth.getEmail();g.add(o,t,n,a)},removeFromFavourite:function(t){var n=e.auth.getEmail();g.remove(n,t)}})))):o.a.createElement(h.a,{to:"/"})},p=(n(118),function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(""),u=Object(c.a)(l,2),m=u[0],s=u[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.action(r,m)}},o.a.createElement("input",{type:"email",name:"email",className:"form-control",value:r,onChange:function(e){return i(e.target.value)},placeholder:"Enter email",id:"email"}),o.a.createElement("input",{type:"password",name:"password",className:"form-control mt-3",value:m,onChange:function(e){return s(e.target.value)},placeholder:"Enter password",id:"password"}),o.a.createElement("button",{className:"btn btn-primary float-right mt-4",type:"submit"},e.role))});function b(e){var t=Object(h.g)();return o.a.createElement("div",{className:"container mx-auto mt-5"},o.a.createElement("h3",null,"Please login to continue"),"  ",o.a.createElement("br",null),o.a.createElement(p,{role:"login",action:function(n,a){e.auth.login(n,a).then((function(e){t.push("/home")})).catch((function(e){t.push("/login")}))}}),o.a.createElement("div",{className:"mt-4"}," New User? ",o.a.createElement(s.b,{to:"/Register"},"Register")))}function y(e){return null==e.auth.isAuthenticated()?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container mx-auto"},o.a.createElement(b,{auth:e.auth}))):o.a.createElement(h.a,{to:"/home"})}n(119);var j=function(e){var t=Object(h.g)(),n=e.auth.isAuthenticated();return o.a.createElement("nav",{className:"py-5 px-4 border-bottom"},n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"clear-both"}),o.a.createElement("button",{className:"float-right btn btn-danger",onClick:function(){e.auth.logout(),t.push("/")}},"Logout")):"",o.a.createElement("h1",null,"Movie Finder | ",o.a.createElement("small",null,"Search what to watch next")))},N=n(120);function w(e){var t=Object(h.g)();return o.a.createElement("div",{className:"container mx-auto mt-5"},o.a.createElement("h3",null,"Register yourself with us ")," ",o.a.createElement("br",null),o.a.createElement(p,{role:"Register",action:function(n,a){console.log(n,a),e.auth.register(n,a).then((function(){t.push("/home")})).catch((function(e){t.push("/register")}))}}),o.a.createElement("div",{className:"mt-4"},"Existing User: ",o.a.createElement(s.b,{to:"/login"},"Login")))}var O=function(e){Object(h.g)();var t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],l=function(t){e.favourite.remove(e.auth.getEmail(),t).then((function(e){i(e.Body.favourites)}))};return Object(a.useEffect)((function(){e.favourite.getFavourites(e.auth.getEmail()).then((function(e){i(e)}))}),[]),o.a.createElement("div",null,e.auth.isAuthenticated?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container mx-auto mt-5"},o.a.createElement("div",{className:"my-3 border-bottom"},o.a.createElement(s.b,{to:"/home"},"Home")),o.a.createElement("h3",null,"My Favourites"),o.a.createElement("div",null,null===r||void 0===r?void 0:r.map((function(e){return o.a.createElement(u,{removeFromFavourite:l,key:e.movie_id,movie:e,isFavourite:"true"})}))))):o.a.createElement(h.a,{to:"/"}))},F=new function e(){var t=this;Object(v.a)(this,e),this.login=function(e,n){var a={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:n})};return new Promise((function(n,o){fetch("".concat(f,"/login"),a).then((function(e){return 400===e.status?n(!1):e.json()})).then((function(a){console.log(a),a?(t.email=e,t.setSession(a),n(!0)):n(!1)})).catch((function(e){return o(e)}))}))},this.register=function(e,n){var a={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:n})};return new Promise((function(n,o){fetch("".concat(f,"/register"),a).then((function(e){return e.json()})).then((function(a){a?(t.email=e,t.setSession(a),n(!0)):n(!1)})).catch((function(e){o(e)}))}))},this.handleAuthentication=function(){},this.setSession=function(e){localStorage.setItem("access_token",e.Body.split(" ")[1])},this.logout=function(){localStorage.removeItem("access_token")},this.isAuthenticated=function(){return localStorage.getItem("access_token")},this.getEmail=function(){var e=localStorage.getItem("access_token");return N.decode(e).email}},S=new d;var _=function(e){return o.a.createElement(s.a,null,o.a.createElement("main",null,o.a.createElement(j,{auth:F}),o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/",exact:!0,render:function(e){return o.a.createElement(y,Object.assign({auth:F},e))}}),o.a.createElement(h.b,{path:"/home",render:function(e){return o.a.createElement(E,Object.assign({auth:F},e))}}),o.a.createElement(h.b,{path:"/login",exact:!0,render:function(e){return o.a.createElement(b,Object.assign({auth:F},e))}}),o.a.createElement(h.b,{path:"/register",render:function(e){return o.a.createElement(w,Object.assign({auth:F},e))}}),o.a.createElement(h.b,{path:"/favourites",render:function(e){return o.a.createElement(O,Object.assign({auth:F,favourite:S},e))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(221);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.6e4a8117.chunk.js.map