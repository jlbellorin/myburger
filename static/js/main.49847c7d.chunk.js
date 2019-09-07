(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return E});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(22),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,,,,,function(e,t,n){"use strict";var r=n(1),a=n(18),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://my-burger-react-1b412.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(22),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.g,error:t}))})}},p=n(33),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCAiFRo11azKBfsC4AljvOOUBa78AvT1gs";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCAiFRo11azKBfsC4AljvOOUBa78AvT1gs"),m.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))})}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return _})},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3XPWz",BreadTop:"BurgerIngredient_BreadTop__3cJTt",Seeds1:"BurgerIngredient_Seeds1__2upvS",Seeds2:"BurgerIngredient_Seeds2__1MuVn",Meat:"BurgerIngredient_Meat__3HJhE",Cheese:"BurgerIngredient_Cheese__3VIDj",Salad:"BurgerIngredient_Salad__27wvD",Bacon:"BurgerIngredient_Bacon__38oC_"}},function(e,t,n){"use strict";var r=n(33),a=n.n(r).a.create({baseURL:"https://my-burger-react-1b412.firebaseio.com/"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3w34U",Open:"SideDrawer_Open__1zwSB",Close:"SideDrawer_Close__1Hl1-",Logo:"SideDrawer_Logo__1CG0K"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2fchG",Less:"BuildControl_Less__yhk34",More:"BuildControl_More__1gdgu",Label:"BuildControl_Label__3peX_"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(65),d=n.n(s),p=n(31),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__Tc6X9",Logo:"Toolbar_Logo__33pHW",DesktopOnly:"Toolbar_DesktopOnly__1mSi2"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3tHcj",active:"NavigationItem_active__2aCzl"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3MEL9",OrderButton:"BuildControls_OrderButton__2JJET",enable:"BuildControls_enable__2YVbd"}},function(e,t,n){e.exports={Button:"Button_Button__3Jrn6",Success:"Button_Success__xf1DK",Danger:"Button_Danger__2vkRs"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(66),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(32);t.a=function(e,t){return function(n){function d(){var e,t;Object(r.a)(this,d);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(d)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(d,n),Object(a.a)(d,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),d}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(64),c=n.n(i),u=n(4),l=n(5),s=n(7),d=n(6),p=n(8),m=n(17),h=n.n(m),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout_Content__1z32_"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3mGYU"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3KD6O"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__Z-IDH"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3a8I4"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2VGWK"}},function(e,t,n){e.exports={Modal:"Modal_Modal__13dc9"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2haT3",load2:"Spinner_load2__3R2om"}},,function(e,t,n){e.exports=n(100)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=n(21),u=n(14),l=n(20),s=n(56),d=(n(77),n(4)),p=n(5),m=n(7),h=n(6),f=n(8),g=n(19),b=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(f.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},E=n(57),_=n.n(E),v=n(34),O=n.n(v),y=n(58),j=n.n(y),k=n(59),C=n.n(k),S=function(e){return a.a.createElement("div",{className:C.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:j.a,alt:"MyBurger"}))},I=n(60),w=n.n(I),B=n(38),T=n.n(B),N=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},A=function(e){return a.a.createElement("ul",{className:w.a.NavigationItems},a.a.createElement(N,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(N,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(N,{link:"/logout"},"Logout"):a.a.createElement(N,{link:"/auth"},"Authenticate"))},D=n(62),R=n.n(D),L=function(e){return a.a.createElement("div",{className:R.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},x=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(L,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:O.a.DesktopOnly},a.a.createElement(A,{isAuthenticated:e.isAuth})))},H=n(23),P=n.n(H),U=n(31),M=function(e){var t=[P.a.SideDrawer,P.a.Close];return e.open&&(t=[P.a.SideDrawer,P.a.Open]),a.a.createElement(r.Fragment,null,a.a.createElement(U.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:P.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(A,{isAuthenticated:e.isAuth}))))},F=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(x,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:_.a.Content},this.props.children))}}]),t}(r.Component),z=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(F),G=n(22),W=n(54),J=n(40),q=n.n(J),K=n(27),V=n.n(K),Y=function(e){return a.a.createElement("div",{className:V.a.BuildControl},a.a.createElement("div",{className:V.a.Label},e.label),a.a.createElement("button",{className:V.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:V.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),$.map(function(t){return a.a.createElement(Y,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},Z=n(32),Q=n(35),ee=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(r.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(Q.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(Q.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),te=n(42),ne=n(43),re=n(15),ae=n(18),oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(G.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,o=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(te.a,null);return this.props.ings&&(o=a.a.createElement(r.Fragment,null,a.a.createElement(W.a,{ingredients:this.props.ings}),a.a.createElement(X,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(ee,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(r.Fragment,null,a.a.createElement(Z.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),o)}}]),t}(r.Component),ie=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(re.a(t))},onIngredientRemoved:function(t){return e(re.i(t))},onInitIngredients:function(){return e(re.e())},onInitPurchase:function(){return e(re.h())},onSetAuthRedirectPath:function(t){return e(re.j(t))}}})(Object(ne.a)(oe,ae.a)),ce=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),ue=Object(u.b)(null,function(e){return{onLogout:function(){return e(re.f())}}})(ce),le=b(function(){return n.e(3).then(n.bind(null,108))}),se=b(function(){return n.e(5).then(n.bind(null,109))}),de=b(function(){return n.e(4).then(n.bind(null,107))}),pe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:de}),a.a.createElement(g.b,{path:"/",exact:!0,component:ie}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:le}),a.a.createElement(g.b,{path:"/orders",component:se}),a.a.createElement(g.b,{path:"/logout",component:ue}),a.a.createElement(g.b,{path:"/auth",component:de}),a.a.createElement(g.b,{path:"/",exact:!0,component:ie}),a.a.createElement(g.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(z,null,e))}}]),t}(r.Component),me=Object(g.f)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(re.c())}}})(pe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(24),fe=n(1),ge=n(3),be={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return function(e,t){var n=Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)}(e,t);case fe.n:return function(e,t){var n=Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice-Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)}(e,t);case fe.p:return function(e,t){return Object(ge.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})}(e,t);case fe.f:return function(e,t){return Object(ge.b)(e,{error:!0})}(e);default:return e}},ve={orders:[],loading:!1,purchased:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.m:return function(e,t){return Object(ge.b)(e,{purchased:!1})}(e);case fe.k:return function(e,t){return Object(ge.b)(e,{loading:!0})}(e);case fe.l:return function(e,t){var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case fe.j:return function(e,t){return Object(ge.b)(e,{loading:!1})}(e);case fe.h:return function(e,t){return Object(ge.b)(e,{loading:!0})}(e);case fe.i:return function(e,t){return Object(ge.b)(e,{orders:t.orders,loading:!1})}(e,t);case fe.g:return function(e,t){return Object(ge.b)(e,{loading:!1})}(e);default:return e}},ye={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.d:return function(e,t){return Object(ge.b)(e,{error:null,loading:!0})}(e);case fe.e:return function(e,t){return Object(ge.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case fe.b:return function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})}(e,t);case fe.c:return function(e,t){return Object(ge.b)(e,{token:null,userId:null})}(e);case fe.o:return function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},ke=l.d,Ce=Object(l.c)({burgerBuilder:_e,order:Oe,auth:je}),Se=Object(l.e)(Ce,ke(Object(l.a)(s.a))),Ie=a.a.createElement(u.a,{store:Se},a.a.createElement(c.a,null,a.a.createElement(me,null)));i.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[68,1,2]]]);
//# sourceMappingURL=main.49847c7d.chunk.js.map