(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",function(){return o}),n.d(t,"query",function(){return s});n(73),n(74),n(142),n(76),n(75),n(55),n(34),n(144),n(146);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=(n(148),function(e){var t=e.data;return r.a.createElement("div",{className:"lh-copy mw6 center ph3"},r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f1 lh-title mb0"},"Reading list"),r.a.createElement("h2",{className:"f5 fw1"},"Recent articles from the Mozilla, Chrome, WebKit, SmashingMag, CSS Wizardry, Jake Archibald and Bram Stein")),r.a.createElement("main",{role:"main"},r.a.createElement("ul",{className:"list pa0"},"undefined"!=typeof window?function e(t){for(var n=[],a=0;a<t.length;a++)Array.isArray(t[a])?n=n.concat(e(t[a])):n.push(t[a]);return n}(Object.keys(t.oneGraph).map(function(e){var n=t.oneGraph[e].rss2Feed;return n.items.map(function(e){return{source:n.title,content:e}})})).sort(function(e,t){var n=e.content;return t.content.pubDate-n.pubDate}).map(function(e){e.source;var t,n,a,i,c,o=e.content,s=o.title.split(" ").map(function(e){return e.toLowerCase()}).join("-"),u=localStorage.getItem("opened_articles");return r.a.createElement("li",{key:s,className:"pv3 dim"},r.a.createElement("a",{href:o.link,onClick:function(){if(u){var e=JSON.parse(u).data;e.includes(s)||localStorage.setItem("opened_articles",JSON.stringify({data:[s].concat(e)}))}else localStorage.setItem("opened_articles",JSON.stringify({data:[s]}))},className:"link near-black "+(u&&JSON.parse(u).data.includes(s)?"strike":""),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("small",null,(t=new Date(o.pubDate),n=t.getHours(),a=t.getMinutes(),i=n>=12?"pm":"am",c=(n=(n%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+i,t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+c)),r.a.createElement("h3",{className:"ma0"},o.title)))}):null)),r.a.createElement("footer",null))});o.propTypes={data:c.a.shape({oneGraph:c.a.objectOf(c.a.shape({rss2Feed:c.a.shape({items:c.a.arrayOf(c.a.shape({link:c.a.string.isRequired,pubDate:c.a.number.isRequired,title:c.a.string.isRequired}).isRequired),title:c.a.string.isRequired}).isRequired}).isRequired).isRequired}).isRequired},t.default=o;var s="234483935"},142:function(e,t,n){"use strict";n(143)("link",function(e){return function(t){return e(this,"a","href",t)}})},143:function(e,t,n){var a=n(11),r=n(18),i=n(20),c=/"/g,o=function(e,t,n,a){var r=String(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},144:function(e,t,n){var a=n(25),r=n(33);n(145)("keys",function(){return function(e){return r(a(e))}})},145:function(e,t,n){var a=n(11),r=n(19),i=n(18);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],c={};c[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",c)}},146:function(e,t,n){"use strict";var a=n(11),r=n(26),i=n(25),c=n(18),o=[].sort,s=[1,2,3];a(a.P+a.F*(c(function(){s.sort(void 0)})||!c(function(){s.sort(null)})||!n(147)(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})},147:function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-index-js-3ad598c84c2fe297174f.js.map