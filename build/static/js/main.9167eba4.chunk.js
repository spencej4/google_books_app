(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(9),r=n.n(c),s=(n(22),n(10)),i=n(11),l=n(14),u=n(12),h=n(15),d=(n(23),n(13)),f=n.n(d),m={search:function(e){return f.a.get("https:////www.googleapis.com/books/v1/volumes?q="+e+"&api_key=AIzaSyCs7U8ifQclZeF1-qxsmWZHEhlJiPnK9F0")}},p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).searchGoogleBooks=function(e){m.search(e).then(function(e){return n.setState({results:e.data.data})}).catch(function(e){return console.log(e)})},n.state={searchInput:"",results:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.searchGoogleBooks("coffee"),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Google Books"))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.9167eba4.chunk.js.map