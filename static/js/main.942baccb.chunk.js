(this.webpackJsonpweather_forcast=this.webpackJsonpweather_forcast||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),s=c(4),r=c.n(s),o=(c(14),c(5)),l=c(6),j=c(8),d=c(7),h=(c(15),c(3),function(e){var t=e.time,c=e.temp_c,a=e.temp_f,i=(e.humidity,e.icon),s=e.text,r=e.locationCity,o=e.locationRegion;return Object(n.jsxs)("article",{className:"mw5 center bg-lightest-blue br3 pa3 pa4-ns mv3 ba b--black-10",children:[Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)("img",{src:i,alt:"weatherImg",className:"br-100 h3 w3 dib",title:"WeatherImage"}),Object(n.jsx)("hr",{className:"mw3 bb bw1 b--black-10"}),Object(n.jsx)("div",{className:"temperature",children:Object(n.jsxs)("span",{children:[c,"\xb0 c"]})}),Object(n.jsx)("div",{className:"temperature",children:Object(n.jsxs)("span",{children:[a,"\xb0 f"]})}),Object(n.jsx)("div",{className:"weatherCondition",children:s})]}),Object(n.jsxs)("div",{className:"place",children:[r,", ",o]}),Object(n.jsx)("div",{className:"f5",children:t})]})}),m=function(e){var t=e.weather,c=e.location;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("article",{className:"center mw5 mw6-ns hidden ba mv4 bg-lightest-blue",children:[Object(n.jsx)("h1",{className:"f4 bg-near-black white mv0 pv2 ph3",children:"WEATHER FORCAST"}),Object(n.jsxs)("div",{className:"pa3 bt",children:[Object(n.jsxs)("div",{className:"f3",children:["Location :",c.name]}),Object(n.jsxs)("div",{className:"f3",children:["Region :",c.region]}),Object(n.jsxs)("div",{className:"f3",children:["tz_id :",c.tz_id]}),Object(n.jsxs)("div",{className:"f3",children:["Country :",c.country]}),Object(n.jsxs)("div",{className:"mt2",children:["Date & Time :",c.localtime]})]})]}),Object(n.jsx)("div",{className:"flex flex-wrap items-start",children:t.map((function(e,t){return Object(n.jsx)(h,{time:e.time,temp_c:e.temp_c,temp_f:e.temp_f,humidity:e.humidity,icon:e.condition.icon,text:e.condition.text,locationCity:c.name,locationRegion:c.region},t)}))})]})},b=(c(16),function(){return Object(n.jsx)("p",{className:"loading",children:"Loading"})}),u=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={weather:[],location:[],error:[]},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.weatherapi.com/v1/forecast.json?key=95f16632360b44e79a6173255200712&q=Haldwani&days=1").then((function(e){return e.json()})).then((function(t){e.setState({weather:t.forecast.forecastday[0].hour,location:t.location})})).catch((function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.weather,c=e.location;return t.length?Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{weather:t,location:c})}):Object(n.jsx)(b,{})}}]),c}(a.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.942baccb.chunk.js.map