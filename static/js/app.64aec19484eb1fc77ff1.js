webpackJsonp([0],{"+KYZ":function(t,a,e){"use strict";var n=e("WEHx"),s=(e.n(n),{install:function(t){t.directive("click-outside",n.directive)}});a.a=s},0:function(t,a){},"0FOK":function(t,a,e){"use strict";a.a={}},"0u29":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._t("header")],2),t._v(" "),e("div",{staticClass:"card-block"},[t._t("default")],2)])},s=[],i={render:n,staticRenderFns:s};a.a=i},"1lSy":function(t,a,e){"use strict";var n=e("Ond/"),s=e("ZQf1"),i={install:function(t){t.component("fg-input",n.a),t.component("drop-down",s.a)}};a.a=i},"1m1Q":function(t,a){},"2aTV":function(t,a,e){"use strict";function n(t){e("ypf5")}var s=e("zTLC"),i=e("Qcps"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},"3LYd":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-us full-screen"},[e("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._v(" "),t._m(1),t._v(" "),e("footer",{staticClass:"footer-demo"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"pull-left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._v(" "),t._m(2)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper wrapper-full-page section content"},[e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[e("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),t._v(" "),e("h2",{staticClass:"title"},[t._v("Oops! It seems that this page does not exist.")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright pull-right"},[t._v("\n        © 2017, made with\n        "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by Paper admin\n      ")])}],i={render:n,staticRenderFns:s};a.a=i},"3nrQ":function(t,a){},"4EeD":function(t,a){},"5FAv":function(t,a,e){"use strict";var n=e("eAxr"),s=e("3LYd"),i=e("VU/8"),r=i(n.a,s.a,null,null,null);a.a=r.exports},"7uS5":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card",[e("template",{attrs:{slot:"header"},slot:"header"},[t._t("title",[e("h5",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),t._t("subTitle",[e("p",{staticClass:"category"},[t._v("\n        "+t._s(t.subTitle)+"\n      ")])])],2),t._v(" "),e("div",[t._t("default"),t._v(" "),e("div",{staticClass:"ct-chart",class:t.chartClasses,attrs:{id:t.chartId}}),t._v(" "),e("div",{staticClass:"footer"},[e("div",{staticClass:"legend"},[t._t("legend")],2),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"stats"},[t._t("stats")],2)])],2)],2)},s=[],i={render:n,staticRenderFns:s};a.a=i},"95mf":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("router-view")},s=[],i={render:n,staticRenderFns:s};a.a=i},Crv8:function(t,a,e){"use strict";var n=e("R5Ta"),s={showSidebar:!1,sidebarLinks:[{name:"Dashboard",icon:"now-ui-icons design_app",path:"/admin/overview"}],displaySidebar:function(t){var a=setInterval(function(){window.dispatchEvent(new Event("resize"))},180);setTimeout(function(){clearInterval(a)},1e3),t?document.body.classList.add("nav-open"):document.body.classList.remove("nav-open"),this.showSidebar=t}},i={install:function(t){t.mixin({data:function(){return{sidebarStore:s}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",n.a)}};a.a=i},GQtS:function(t,a){},KOYu:function(t,a){},Ln1U:function(t,a,e){"use strict";var n=e("kVx9"),s=e("ddgI"),i=e("aAG9"),r=e("jEp+");a.a={components:{ChartCard:s.a,"n-table":i.a,Checkbox:n.a,Card:r.a},data:function(){return{emailStatsChart:{data:{labels:["62%","32%","10%"],series:[62,32,10]}},usersChart:{data:{labels:["9:00AM","12:00AM","3:00PM","6:00PM","9:00PM","12:00PM","3:00AM","6:00AM"],series:[[287,385,490,492,554,586,698,695,752]]},options:{low:0,high:800,chartPadding:0,showArea:!0,height:"245px",axisX:{showGrid:!1},axisY:{showGrid:!1},lineSmooth:this.$Chartist.Interpolation.simple({divisor:6}),showLine:!1,showPoint:!0,fullWidth:!0},responsiveOptions:[["screen and (max-width: 640px)",{axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},salesChart:{data:{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895],[412,243,280,580,453,353,300,364,368,410,636,695]]},options:{seriesBarDistance:10,axisX:{showGrid:!1},height:"245px"},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},tableData:{columns:["name","test"],data:[{title:'Sign contract for "What are conference organizers afraid of?"',checked:!1},{title:"Lines From Great Russian Literature? Or E-mails From My Boss?",checked:!0},{title:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",checked:!0},{title:"Create 4 Invisible User Experiences you Never Knew About",checked:!1},{title:'Read "Following makes Medium better"',checked:!1},{title:"Unfollow 5 enemies from twitter",checked:!1}]}}}}},M93x:function(t,a,e){"use strict";function n(t){e("QwOL")}var s=e("xJD8"),i=e("95mf"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},MZ8R:function(t,a,e){"use strict";function n(t){e("PpAE")}var s=e("0FOK"),i=e("g3BW"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},Mca5:function(t,a,e){"use strict";a.a={props:{backgroundColor:{type:String,default:"orange",validator:function(t){return-1!==["orange","black","darkblue"].indexOf(t)}},activeColor:{type:String,default:"success",validator:function(t){return-1!==["primary","info","success","warning","danger"].indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}}},data:function(){return{linkHeight:60,activeLinkIndex:0,windowWidth:0,isWindows:!1,hasAutoHeight:!1}},methods:{findActiveLink:function(){var t=this;this.sidebarLinks.find(function(a,e){var n=a.path===t.$route.path;return n&&(t.activeLinkIndex=e),n})}},mounted:function(){this.findActiveLink()},watch:{$route:function(){this.findActiveLink()}}}},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s=e("/ocq"),i=e("1lSy"),r=e("+KYZ"),o=e("Crv8"),c=e("M93x"),l=e("T1vP"),u=e("715g"),d=e.n(u),v=e("cfT+"),f=(e.n(v),e("MU8w"));e.n(f);n.default.use(s.a),n.default.use(i.a),n.default.use(r.a),n.default.use(o.a);var p=new s.a({routes:l.a,linkActiveClass:"active"});Object.defineProperty(n.default.prototype,"$Chartist",{get:function(){return this.$root.Chartist}}),new n.default({el:"#app",render:function(t){return t(c.a)},router:p,data:{Chartist:d.a}})},"Nx4+":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table"},[e("thead",[t._t("columns",t._l(t.columns,function(a){return e("th",[t._v(t._s(a))])}))],2),t._v(" "),e("tbody",t._l(t.data,function(a){return e("tr",[t._t("default",t._l(t.columns,function(n){return t.hasValue(a,n)?e("td",[t._v(t._s(t.itemValue(a,n)))]):t._e()}),{item:a})],2)}))])},s=[],i={render:n,staticRenderFns:s};a.a=i},O81G:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],staticClass:"dropdown",class:{open:t.isOpen},on:{click:t.toggleDropDown}},[e("a",{staticClass:"dropdown-toggle btn-rotate",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[t._t("title",[e("i",{class:t.icon}),t._v(" "),t._m(0)])],2),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[t._t("default")],2)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"notification"},[e("b",{staticClass:"caret"})])}],i={render:n,staticRenderFns:s};a.a=i},OaMs:function(t,a,e){"use strict";var n=e("jEp+");a.a={name:"chart-card",components:{Card:n.a},props:{title:{type:String,default:"Chart title"},subTitle:{type:String,default:"Subtitle"},chartType:{type:String,default:"Line"},chartClasses:{type:String,default:""},chartOptions:{type:Object,default:function(){return{}}},chartResponsiveOptions:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){return{labels:[],series:[]}}}},data:function(){return{chartId:"no-id",chart:{}}},methods:{initChart:function(){var t="#"+this.chartId;this.chart=this.$Chartist[this.chartType](t,this.chartData,this.chartOptions,this.chartReponsiveOptions),"Line"===this.chartType?this.animateLineChart():"Bar"===this.chartType&&this.animateBarChart()},updateChartId:function(){var t=(new Date).getTime().toString(),a=this.getRandomInt(0,t);this.chartId="div_"+a},getRandomInt:function(t,a){return Math.floor(Math.random()*(a-t+1))+t},animateLineChart:function(t){var a=this,e=0;this.chart.on("draw",function(t){"line"===t.type||"area"===t.type?t.element.animate({d:{begin:600,dur:700,from:t.path.clone().scale(1,0).translate(0,t.chartRect.height()).stringify(),to:t.path.clone().stringify(),easing:a.$Chartist.Svg.Easing.easeOutQuint}}):"point"===t.type&&(e++,t.element.animate({opacity:{begin:80*e,dur:500,from:0,to:1,easing:"ease"}}))}),e=0},animateBarChart:function(){var t=0;this.chart.on("draw",function(a){"bar"===a.type&&(t++,a.element.animate({opacity:{begin:80*t,dur:500,from:0,to:1,easing:"ease"}}))})}},mounted:function(){this.updateChartId(),this.$nextTick(this.initChart)}}},"Ond/":function(t,a,e){"use strict";function n(t){e("4EeD")}var s=e("eU1q"),i=e("e0BJ"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},PpAE:function(t,a){},QDyf:function(t,a,e){"use strict";a.a={}},Qcps:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-toggleable-md bg-white"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"navbar-minimize"},[e("button",{staticClass:"navbar-toggler",class:{toggled:t.$sidebar.showSidebar},attrs:{type:"button"},on:{click:t.toggleSidebar}},[e("span",{staticClass:"navbar-toggler-bar bar1"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar bar2"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar bar3"})])]),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(" Dashboard ")]),t._v(" "),t._m(1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-bar navbar-kebab"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar navbar-kebab"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar navbar-kebab"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navigation"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("p",{staticClass:"hidden-lg hidden-md"},[t._v("Account")])])]),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("p",[t._v("\n              Dropdown\n            ")])]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("p",{staticClass:"hidden-lg hidden-md"},[t._v("Log out")])])])])])}],i={render:n,staticRenderFns:s};a.a=i},Qkg6:function(t,a,e){"use strict";a.a={props:{columns:Array,data:Array,title:{type:String,default:""},subTitle:{type:String,default:""}},methods:{hasValue:function(t,a){return"undefined"!==t[a.toLowerCase()]},itemValue:function(t,a){return t[a.toLowerCase()]}}}},QwOL:function(t,a){},R2fa:function(t,a,e){"use strict";function n(t){e("KOYu")}var s=e("Ln1U"),i=e("jQ3J"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},R5Ta:function(t,a,e){"use strict";function n(t){e("1m1Q")}var s=e("Mca5"),i=e("e55s"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},T1vP:function(t,a,e){"use strict";var n=e("eCSI"),s=e("5FAv"),i=e("R2fa"),r=[{path:"/",component:n.a,redirect:"/admin/overview"},{path:"/admin",component:n.a,redirect:"/admin/stats",children:[{path:"overview",name:"overview",component:i.a}]},{path:"*",component:s.a}];a.a=r},TQ5B:function(t,a,e){"use strict";var n=e("2aTV"),s=e("MZ8R"),i=e("bwpC");a.a={components:{TopNavbar:n.a,ContentFooter:s.a,DashboardContent:i.a},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}}},UCnk:function(t,a){},VnhA:function(t,a,e){"use strict";a.a={}},WbFy:function(t,a){},ZQf1:function(t,a,e){"use strict";var n=e("sQGm"),s=e("O81G"),i=e("VU/8"),r=i(n.a,s.a,null,null,null);a.a=r.exports},aAG9:function(t,a,e){"use strict";function n(t){e("j+aM")}var s=e("Qkg6"),i=e("Nx4+"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},bwpC:function(t,a,e){"use strict";function n(t){e("3nrQ")}var s=e("VnhA"),i=e("ywEp"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},"cfT+":function(t,a){},ddgI:function(t,a,e){"use strict";function n(t){e("UCnk")}var s=e("OaMs"),i=e("7uS5"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},e0BJ:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[t.label?e("label"):t._e(),t._v(" "),e("input",t._b({staticClass:"form-control border-input",domProps:{value:t.value},on:{input:function(a){t.$emit("input",a.target.value)}}},"input",t.$props,!1))])},s=[],i={render:n,staticRenderFns:s};a.a=i},e55s:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar",attrs:{"data-color":t.backgroundColor,"data-active-color":t.activeColor}},[t._m(0),t._v(" "),t._t("default"),t._v(" "),e("div",{staticClass:"sidebar-wrapper"},[e("ul",{staticClass:"nav"},t._l(t.sidebarLinks,function(a,n){return e("router-link",{key:""+a+n,ref:a.name,refInFor:!0,attrs:{to:a.path,tag:"li"}},[e("a",[e("i",{class:a.icon}),t._v(" "),e("p",[t._v(t._s(a.name)+"\n          ")])])])}))]),t._v(" "),e("div",{staticClass:"sidebar-background",staticStyle:{"background-image":"url(/static/img/blurred-image-1.jpg)"}})],2)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text",attrs:{href:"http://www.creative-tim.com"}},[t._v("\n      Creative Tim\n    ")])])}],i={render:n,staticRenderFns:s};a.a=i},eAxr:function(t,a,e){"use strict";a.a={}},eCSI:function(t,a,e){"use strict";function n(t){e("GQtS")}var s=e("TQ5B"),i=e("lNAQ"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},eU1q:function(t,a,e){"use strict";a.a={props:{type:{type:String,default:"text"},label:String,name:String,disabled:Boolean,placeholder:String,value:[String,Number]}}},g3BW:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/admin"}}},[t._v("Dashboard")])],1)])]),t._v(" "),t._m(0)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright pull-right"},[t._v("\n      © Coded with\n      "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by\n      "),e("a",{attrs:{href:"https://github.com/cristijora",target:"_blank"}},[t._v("Cristi Jora")]),t._v(".\n      Designed by "),e("a",{attrs:{href:"https://www.creative-tim.com/?ref=pdf-vuejs",target:"_blank"}},[t._v("Creative Tim")]),t._v(".\n    ")])}],i={render:n,staticRenderFns:s};a.a=i},"j+aM":function(t,a){},"jEp+":function(t,a,e){"use strict";function n(t){e("WbFy")}var s=e("QDyf"),i=e("0u29"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},jQ3J:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("chart-card",{attrs:{title:"Email Statistics","sub-title":"Last Campaign Performance","chart-type":"Pie","chart-classes":"ct-perfect-fourth","chart-data":t.emailStatsChart.data}},[e("template",{attrs:{slot:"legend"},slot:"legend"},[e("i",{staticClass:"fa fa-circle text-gray"}),t._v(" Open\n          "),e("i",{staticClass:"fa fa-circle text-primary"}),t._v(" Bounce\n          "),e("i",{staticClass:"fa fa-circle text-warning"}),t._v(" Unsubscribe\n        ")])],2)],1),t._v(" "),e("div",{staticClass:"col-md-8"},[e("chart-card",{attrs:{title:"Users Behavior","sub-title":"24 Hours performance","chart-data":t.usersChart.data,"chart-options":t.usersChart.options,"chart-responsive-options":t.usersChart.responsiveOptions}},[e("div",{staticClass:"statistics-container"},[e("div",{staticClass:"statistics"},[e("p",{staticClass:"description"},[t._v("NASDAQ: AAPL")]),t._v(" "),e("h3",[t._v("127.33")]),t._v(" "),e("h6",[t._v("OCT 2:16 PM EDT")])]),t._v(" "),e("div",{staticClass:"statistics-badge"},[e("span",{staticClass:"badge badge-primary"},[e("i",{staticClass:"now-ui-icons media-2_sound-wave"}),t._v("\n              1 Year\n          ")])])]),t._v(" "),e("template",{attrs:{slot:"stats"},slot:"stats"},[e("i",{staticClass:"now-ui-icons loader_refresh spin"}),t._v(" Updated 3 minutes ago\n        ")])],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("chart-card",{attrs:{title:"2014 Sales","sub-title":"All products including Taxes","chart-type":"Bar","chart-data":t.salesChart.data,"chart-options":t.salesChart.options,"chart-responsive-options":t.salesChart.responsiveOptions}},[e("template",{attrs:{slot:"legend"},slot:"legend"},[e("i",{staticClass:"fa fa-circle text-gray"}),t._v(" Tesla Model S\n          "),e("i",{staticClass:"fa fa-circle text-primary"}),t._v(" BMW 5 Series\n        ")]),t._v(" "),e("template",{attrs:{slot:"stats"},slot:"stats"},[e("i",{staticClass:"now-ui-icons ui-1_check"}),t._v(" Data information certified\n        ")])],2)],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("Card",[e("template",{attrs:{slot:"header"},slot:"header"},[e("h5",{staticClass:"title"},[t._v("Tasks")]),t._v(" "),e("p",{staticClass:"category"},[t._v("Backend development")])]),t._v(" "),e("n-table",{attrs:{data:t.tableData.data,columns:t.tableData.columns},scopedSlots:t._u([{key:"default",fn:function(a){return[e("td",[e("Checkbox",{model:{value:a.item.checked,callback:function(t){a.item.checked=t},expression:"props.item.checked"}})],1),t._v(" "),e("td",[t._v(t._s(a.item.title))]),t._v(" "),e("td",{staticClass:"td-actions text-right"},[e("button",{staticClass:"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral",attrs:{type:"button",rel:"tooltip",title:"","data-original-title":"Edit Task"}},[e("i",{staticClass:"now-ui-icons ui-2_settings-90"})]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral",attrs:{type:"button",rel:"tooltip",title:"","data-original-title":"Remove"}},[e("i",{staticClass:"now-ui-icons ui-1_simple-remove"})])])]}}])},[e("template",{attrs:{slot:"columns"},slot:"columns"})],2),t._v(" "),e("div",{staticClass:"footer"},[e("hr"),t._v(" "),e("div",{staticClass:"stats"},[e("i",{staticClass:"now-ui-icons loader_refresh spin"}),t._v(" Updated 3 minutes ago\n          ")])])],2)],1)])])},s=[],i={render:n,staticRenderFns:s};a.a=i},kVx9:function(t,a,e){"use strict";function n(t){e("qXgG")}var s=e("uEKC"),i=e("pp31"),r=e("VU/8"),o=n,c=r(s.a,i.a,o,null,null);a.a=c.exports},lNAQ:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("side-bar",{attrs:{"sidebar-links":t.$sidebar.sidebarLinks}}),t._v(" "),e("div",{staticClass:"main-panel"},[e("top-navbar"),t._v(" "),e("dashboard-content",{nativeOn:{click:function(a){t.toggleSidebar(a)}}}),t._v(" "),e("content-footer")],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},pp31:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"n-checkbox checkbox",class:t.checkboxType},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:!0===t.model,checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{__c:function(a){var e=t.model,n=a.target,s=!!n.checked;if(Array.isArray(e)){var i=t._i(e,null);n.checked?i<0&&(t.model=e.concat([null])):i>-1&&(t.model=e.slice(0,i).concat(e.slice(i+1)))}else t.model=s}}}),t._v(" "),e("label",{attrs:{for:t.cbId}},[t._t("default")],2)])},s=[],i={render:n,staticRenderFns:s};a.a=i},qXgG:function(t,a){},sQGm:function(t,a,e){"use strict";a.a={props:{title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}}},uEKC:function(t,a,e){"use strict";a.a={name:"n-checkbox",model:{prop:"checked",event:"change"},props:{checked:[Array,Boolean],disabled:[Boolean,String],type:{type:String,default:"neutral"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.checked},set:function(t){this.$emit("change",t)}},checkboxType:function(){if(this.type)return"checkbox-"+this.type}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}},xJD8:function(t,a,e){"use strict";a.a={}},ypf5:function(t,a){},ywEp:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])},s=[],i={render:n,staticRenderFns:s};a.a=i},zTLC:function(t,a,e){"use strict";a.a={computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)}}}}},["NHnr"]);
//# sourceMappingURL=app.64aec19484eb1fc77ff1.js.map