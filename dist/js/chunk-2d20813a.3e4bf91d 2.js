(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20813a"],{a2f9:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"news"},[a("sequential-entrance",{attrs:{fromBottom:""}},[a("div",{staticClass:"top_news"}),a("div",{staticClass:"container"},[a("div",{attrs:{id:"tabs"}},[a("ul",[a("li",{class:s.showTab?"active":"",on:{click:function(t){s.showTab=!s.showTab}}},[a("a",[s._v("Featured News")])]),a("li",{class:s.showTab?"":"active",on:{click:function(t){s.showTab=!s.showTab}}},[a("a",[s._v("Upcoming News")])])])]),s.showTab?a("div",{staticClass:"news_list"},s._l(s.newsList,(function(t,e){return a("div",{key:e,staticClass:"news_card"},[a("div",{staticClass:"news_img"},[a("img",{attrs:{src:t.image,alt:""}})]),a("div",{staticClass:"news_desc"},[a("h3",{staticClass:"news_head",attrs:{head:s.newsList.head}},[s._v(s._s(t.head))]),a("div",{staticClass:"news_text"},[s._v(s._s(t.text))]),a("div",{staticClass:"news_date"},[s._v(s._s(t.date))])])])})),0):s._e(),s.showTab?s._e():a("div",{staticClass:"news_list"},s._l(s.comingNewsList,(function(t,e){return a("div",{key:e,staticClass:"news_card"},[a("div",{staticClass:"news_img"},[a("img",{attrs:{src:t.image,alt:""}})]),a("div",{staticClass:"news_desc"},[a("h3",{staticClass:"news_head",attrs:{head:s.newsList.head}},[s._v(s._s(t.head))]),a("div",{staticClass:"news_text"},[s._v(s._s(t.text))]),a("div",{staticClass:"news_date"},[s._v(s._s(t.date))])])])})),0)])])],1)},n=[],i=a("8206"),c=a.n(i),o={name:"News",data:function(){return{newsList:[],comingNewsList:[],showTab:!0}},mounted:function(){var s=this,t="./news.json";c.a.get(t).then((function(t){s.newsList=t.data})).catch((function(s){console.log(s)}));var a="./news_2.json";c.a.get(a).then((function(t){s.comingNewsList=t.data})).catch((function(s){console.log(s)}))}},l=o,w=a("2877"),d=Object(w["a"])(l,e,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20813a.3e4bf91d.js.map