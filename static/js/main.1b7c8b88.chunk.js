(this["webpackJsonpjavad.dev"]=this["webpackJsonpjavad.dev"]||[]).push([[0],{33:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(38),t(39),t(12)),i=t(13),u=t(17),m=t(14),s=t(18),g=t(16),E=t(52),h=t(53),p=t(54),d=t(55),b=t(15),v=function(e){return{type:"CHANGE_LANGUAGE",payload:{lng:e}}},f=(t(44),t(7)),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).toggleLanguage=t.toggleLanguage.bind(Object(s.a)(t)),t.mainStyle=t.mainStyle.bind(Object(s.a)(t)),t.languageStyle=t.languageStyle.bind(Object(s.a)(t)),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"toggleLanguage",value:function(e){"English"===this.props.lng?this.props.changeLanguage("\u0641\u0627\u0631\u0633\u06cc"):this.props.changeLanguage("English")}},{key:"mainStyle",value:function(){return"\u0641\u0627\u0631\u0633\u06cc"===this.props.lng?"english":"persian"}},{key:"languageStyle",value:function(){return"English"===this.props.lng?"english":"persian"}},{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,{className:this.languageStyle(),xs:6,sm:6,md:6,lg:6,xl:6},l.a.createElement(d.a,{onClick:function(a){return e.toggleLanguage(a)},variant:"outline-dark"},this.props.lng)),l.a.createElement(p.a,{xs:6,sm:6,md:6,lg:6,xl:6},l.a.createElement(f.a,null,l.a.createElement(f.b,{to:"/"},l.a.createElement(d.a,{variant:"outline-danger"},"/"))))),l.a.createElement(h.a,{className:"main "+this.mainStyle()},this.props.children))}}]),a}(n.Component),y=Object(b.b)((function(e){return{lng:e.lng}}),{changeLanguage:v})(j),k=t(9);n.Component,n.Component,t(46);var O=Object(b.b)((function(e){return{lng:e.lng}}),null)((function(e){return console.log(e),l.a.createElement(y,null,l.a.createElement(f.a,{basename:"/"},"English"===e.lng?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"\u062c\u0648\u0627\u062f \u0645\u062e\u062a\u0627\u0631\u06cc \u06a9\u0648\u0634\u06cc\u0627\u0631"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement(f.b,{to:"/about"},"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/email"},"\u0627\u06cc\u0645\u06cc\u0644"))),l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/about"},l.a.createElement("p",null,"\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647 \u0641\u0631\u0627\u0646\u062a\u200c\u0627\u0646\u062f \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06cc \u062a\u062d\u062a \u0648\u0628")),l.a.createElement(k.a,{path:"/email"},l.a.createElement("p",{className:"english"},"javadmokhtari (@) outlook (.) com"),l.a.createElement("p",{className:"english"},"me (@) javad (.) dev")))):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Javad Mokhtari Koushyar"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement(f.b,{to:"/about"},"About Me")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/email"},"Email"))),l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/about"},l.a.createElement("p",null,"Front-End Web Developer")),l.a.createElement(k.a,{path:"/email"},l.a.createElement("p",null,"javadmokhtari (@) outlook (.) com"),l.a.createElement("p",null,"me (@) javad (.) dev"))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);var N=t(11),w=t(32),L={lng:"\u0641\u0627\u0631\u0633\u06cc"};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_LANGUAGE":return Object(w.a)({},e,{lng:a.payload.lng});default:return e}},A=t(31),C=Object(N.createStore)(S,Object(A.devToolsEnhancer)());c.a.render(l.a.createElement(b.a,{store:C},l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1b7c8b88.chunk.js.map