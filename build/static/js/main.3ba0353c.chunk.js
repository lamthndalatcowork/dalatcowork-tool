(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),o=n.n(l),c=n(33),s=(n(79),n(47),n(34)),i=(n(80),n(7)),u=n(8),m=n(10),E=n(9),d=n(11),p=n(42),f=n.n(p),h={PageNotFound:function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:f.a.title},"Page Not Found"),r.a.createElement("div",{className:f.a.message},"Sorry! This page is not available."),r.a.createElement(c.b,{to:"/"},"Back to home"))}}]),t}(r.a.Component)},g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,Object(s.a)(this.props.route.routes))}}]),t}(r.a.Component),O=n(6),b=(n(48),n(19)),v=n(29),_=n.n(v),y=n(71),C=n(28),T=n(24),N=n(35),S=n(20),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).onNodeClick=function(e){"blur"===e.type&&n.setState({stateValue:e.target.value}),n.setState({isEdit:!n.state.isEdit})},n.onInputChange=function(e){var t=e.target.value;t=t.charAt(t.length-1),n.setState({stateValue:t.toUpperCase()}),n.props.updateNode(t.toUpperCase(),n.props.rowIndex,n.props.colIndex)},n.state={isEdit:!1,stateValue:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({isEdit:!1,stateValue:this.props.item})}},{key:"componentWillReceiveProps",value:function(e){this.setState({stateValue:e.item})}},{key:"render",value:function(){var e=this,t=this.state.stateValue,n=this.props.max===this.props.colIndex+1?r.a.createElement("br",null):"";return r.a.createElement(a.Fragment,null,this.state.isEdit?r.a.createElement(S.a,{onBlur:function(t){return e.onNodeClick(t)},onChange:this.onInputChange,value:t,className:"m-1 input-node-question text-center",autoFocus:!0}):r.a.createElement(N.a,{onClick:function(t){return e.onNodeClick(t)},color:"primary",className:"m-1 button-node-question"},t),n)}}]),t}(r.a.Component),k=n(27),M=n(22),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).onInputContentChange=function(e){n.setState({content:e.target.value})},n.state={content:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.content;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(k.a,{for:"contentFill",className:"mr-2"},r.a.createElement("h1",null,"Questions")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h4",null,e))),r.a.createElement(M.a,null,r.a.createElement(S.a,{type:"text",id:"contentFill",value:e,onChange:this.onInputContentChange,name:"questions",placeholder:"your question"})))}}]),t}(r.a.Component),F=n(68),w=n(122),I=n(123),P=n(69),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={levels:[],score:"",time:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){for(var e=[],t=1;t<=10;t++)e.push(t);this.setState({levels:e})}},{key:"render",value:function(){var e=this.state,t=e.levels;e.score,e.time;return r.a.createElement(a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(C.a,{form:!0},r.a.createElement(T.a,{md:4},r.a.createElement(M.a,null,r.a.createElement(k.a,{for:"levelFill",className:"mr-1"},"Level"),r.a.createElement(S.a,{type:"select",name:"select",id:"levelFill"},t.map(function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement(T.a,{md:4},r.a.createElement(M.a,null,r.a.createElement(k.a,{for:"scoreFill"},"Score"),r.a.createElement(S.a,{type:"number",name:"score",id:"scoreFill",placeholder:"0"}))),r.a.createElement(T.a,{md:4},r.a.createElement(M.a,null,r.a.createElement(k.a,{for:"timeFill"},"Time"),r.a.createElement(w.a,null,r.a.createElement(S.a,{type:"number",name:"time",id:"timeFill",placeholder:"0"}),r.a.createElement(I.a,{addonType:"append"},r.a.createElement(P.a,null,"S"))))))))}}]),t}(r.a.Component),x=n(37),R=n.n(x),U=new(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"get",value:function(e){return R.a.get(e)}},{key:"post",value:function(e,t){return R.a.post(e,t)}},{key:"delete",value:function(e){return R.a.delete(e)}}]),e}()),A=function(e){return{type:e,isFetching:!0,payload:null,error:null}},B=function(e,t,n){return{type:e,isFetching:!1,payload:t,error:n}},Q=function(e){return function(t){t(A("POST_CREATE_QUESTION_REQUEST")),U.post("https://egame-websocket.herokuapp.com/questions",e).then(function(e){t(B("POST_CREATE_QUESTION_COMPLETE",e,null))}).catch(function(e){t(B("POST_CREATE_QUESTION_COMPLETE",null,e))})}},Y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).onInputContentChange=function(e){n.setState({answerContent:e.target.value.toUpperCase()})},n.onBtnGetGameClick=function(){""!==n.state.answerContent?n.props.onBtnGetGameClick(n.state.answerContent):document.getElementById("answerFill").focus()},n.state={answerContent:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.answerContent;return r.a.createElement(a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(S.a,{type:"text",className:"text-center",id:"answerFill",value:e,onChange:this.onInputContentChange,name:"questions",placeholder:"your answer"})),r.a.createElement(M.a,{className:"text-center"},r.a.createElement(N.a,{onClick:this.onBtnGetGameClick},"GET GAME")))}}]),t}(r.a.Component),D=n(70),W=n.n(D),q=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:W.a.ldsEllipsis},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},V=n(104),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,node:[],numberMatrix:5},n.getMatrixBegin=function(){for(var e=[],t=0;t<n.state.numberMatrix;t++){for(var a=[],r=0;r<n.state.numberMatrix;r++)a.push("*");e.push(a)}return e},n.getMatrixRandomChar=function(e){for(var t=0;t<n.state.numberMatrix;t++)for(var a=0;a<n.state.numberMatrix;a++)"*"===e[t][a]&&(e[t][a]=V({upper:!0}));return e},n.getMatrixWithMeanWord=function(e){e=e.split("");var t=n.getMatrixBegin(),a=Math.floor(Math.random()*t[0].length),r=Math.floor(Math.random()*t[0].length);t[a][r]=e[0];for(var l=[a,r],o=1;o<e.length;o++){if(void 0===(l=n.updateANote(l[0],l[1],t)))return n.getMatrixWithMeanWord(e);t[l[0]][l[1]]=e[o]}return t},n.updateANote=function(e,t,n){var a=[[e-1,t],[e,t-1],[e,t+1],[e+1,t]].filter(function(e){try{return"*"===n[e[0]][e[1]]}catch(t){return!1}});return a[Math.floor(Math.random()*a.length)]},n.updateNode=function(e,t,a){for(var r=0;r<n.state.numberMatrix;r++)for(var l=0;l<n.state.numberMatrix;l++)r===t&&l===a&&(n.state.node[r][l]=e)},n.onBtnSaveClick=function(){var e=document.getElementById("levelFill").value,t=document.getElementById("timeFill").value,a=document.getElementById("scoreFill").value,r=document.getElementById("contentFill").value,l=document.getElementById("answerFill").value;if(_.a.isEmpty(e)||_.a.isEmpty(t)||_.a.isEmpty(a)||_.a.isEmpty(r)||_.a.isEmpty(l)||a<=0||t<=0||e<=0)alert("Error");else{var o=n.props.dispatch,c={content:r,matrix:n.state.node,time:t,score:a,answer:l.trim(),level:e};o(Q(c))}},n.onBtnGetGameClick=function(e){var t=n.getMatrixWithMeanWord(e);t=n.getMatrixRandomChar(t),n.setState({node:t})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.getMatrixBegin();e=this.getMatrixRandomChar(e),this.setState({node:e})}},{key:"componentWillReceiveProps",value:function(e){var t=e.question;switch(t.type){case"POST_CREATE_QUESTION_REQUEST":this.setState({isLoading:!0});break;case"POST_CREATE_QUESTION_COMPLETE":this.setState({isLoading:!1}),t.error?alert("error"):alert("save success"),window.location.reload();break;default:return}}},{key:"render",value:function(){var e=this,t=this.state.isLoading,n=r.a.createElement(a.Fragment,null,r.a.createElement(y.a,{id:"questions"},r.a.createElement(C.a,{className:"flex-column justify-content-center align-items-center d-flex"},r.a.createElement(T.a,{md:{size:5}},r.a.createElement(j,null)),r.a.createElement(T.a,{md:3,className:"mt-1"},r.a.createElement(Y,{onBtnGetGameClick:this.onBtnGetGameClick})),r.a.createElement(T.a,{md:{size:12},className:"flex-column justify-content-center align-items-center d-flex"},this.state.node.map(function(t,n){return r.a.createElement("div",null,t.map(function(t,a){return r.a.createElement(L,{updateNode:e.updateNode,colIndex:a,rowIndex:n,item:t,max:e.state.numberMatrix})}))})),r.a.createElement(T.a,{md:{size:5},className:"mt-2 mb-4"},r.a.createElement(G,null),r.a.createElement(N.a,{onClick:this.onBtnSaveClick,color:"success",size:"lg",block:!0},"SAVE")))));return t?r.a.createElement(q,null):n}}]),t}(r.a.Component),J=Object(b.b)(function(e){return{question:Object(O.a)({},e.question)}})(z),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.getUser()}},{key:"componentWillReceiveProps",value:function(e,t){switch(e.users.type){case"GET_USER_COMPLETE":this.setState({users:e.users.result.data}),console.log(e.users.result.data);break;default:return}}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("ul",null,this.state.users.map(function(e){return r.a.createElement("li",null,e.username)})))}}]),t}(r.a.Component),$=Object(b.b)(function(e){return{users:Object(O.a)({},e.users)}},function(e){return{getUser:function(){return e(function(e){U.get("http://localhost:5000/users").then(function(t){e({type:"GET_USER_COMPLETE",payload:t,error:null})}).catch(function(t){e({type:"GET_USER_COMPLETE",payload:null,error:t})})})}}})(H),K=n(124),X=(n(112),function(e){return{type:e,isFetching:!0,payload:null,error:null}}),Z=function(e,t,n){return{type:e,isFetching:!1,payload:t,error:n}},ee=function(e){return function(t){t(X("POST_CREATE_LOG_MONEY_REQUEST")),U.post("https://egame-websocket.herokuapp.com/coffee/logs",e).then(function(e){t(Z("POST_CREATE_LOG_MONEY_COMPLETE",e,null))}).catch(function(e){t(Z("POST_CREATE_LOG_MONEY_COMPLETE",null,e))})}},te=function(e){return function(t){t(X("POST_LOGIN_REQUEST")),U.post("https://egame-websocket.herokuapp.com/coffee/login",e).then(function(e){t(Z("POST_LOGIN_COMPLETE",e,null))}).catch(function(e){t(Z("POST_LOGIN_COMPLETE",null,e))})}},ne=function(e){return function(t){t(X("DELETE_LOGS_MONEY_REQUEST")),U.delete("https://egame-websocket.herokuapp.com/coffee/logs/"+e).then(function(e){t(Z("DELETE_LOGS_MONEY_COMPLETE",e,null))}).catch(function(e){t(Z("DELETE_LOGS_MONEY_COMPLETE",null,e))})}},ae=(n(113),function(){return r.a.createElement("div",{className:"box"},r.a.createElement("span",{className:"s1"}),r.a.createElement("span",{className:"s2"}),r.a.createElement("span",{className:"s3"}))}),re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,error:null},n.onSubmitForm=function(){var e={},t=document.getElementById("inputUserName").value,a=document.getElementById("inputPassword").value;e.user_name=t,e.password=a,(0,n.props.dispatch)(te(e))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e&&(0,this.props.dispatch)(te(e))}},{key:"componentWillReceiveProps",value:function(e){switch(e.login.type){case"POST_LOGIN_REQUEST":this.setState({isLoading:e.login.isFetching});break;case"POST_LOGIN_COMPLETE":this.setState({isLoading:e.login.isFetching}),e.login.result.data.success?(localStorage.setItem("user",JSON.stringify(e.login.result.data.success)),this.props.history.push("/coffee")):this.setState({error:"Incorrect!!!"});break;default:return}}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,l=t.error,o=r.a.createElement("button",{type:"submit",className:"login-form-btn",onClick:function(){return e.onSubmitForm()}},"Login"),c=null===l?"":r.a.createElement(K.a,{style:{margin:"0"},color:"warning"},"Incorrect!!!");return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container-login"},r.a.createElement("div",{className:"wrap-login"},r.a.createElement("form",{className:"login-form"},r.a.createElement("img",{className:"text-center",src:"http://www.pngmart.com/files/1/Coffee-Logo-PNG-Image.png",width:63}),r.a.createElement(w.a,null,r.a.createElement(I.a,{addonType:"prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement(S.a,{placeholder:"Username",id:"inputUserName",type:"text"})),r.a.createElement(w.a,null,r.a.createElement(I.a,{addonType:"prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement(S.a,{placeholder:"******",id:"inputPassword",type:"password"})),c,n?r.a.createElement(ae,null):o))))}}]),t}(r.a.Component),le=Object(b.b)(function(e){return{login:Object(O.a)({},e.login)}})(re),oe=(n(64),n(131)),ce=n(125),se=n(126),ie=n(127),ue=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).subFunction=function(){n.setState(function(e){return{sub:!e.sub}})},n.addFunction=function(){n.setState(function(e){return{add:!e.add}})},n.onCreateLogsClick=function(e){"IN_CREATE"===e?n.addFunction():n.subFunction(),n.props.onCreateLogsClick(e)},n.state={add:!1,sub:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.add,l=t.sub;return r.a.createElement(a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(T.a,{md:6,sm:12,className:"mb-2"},r.a.createElement(N.a,{color:"success",onClick:this.addFunction,block:!0},"+")),r.a.createElement(T.a,{md:6,sm:12,className:"mb-2"},r.a.createElement(N.a,{color:"danger",onClick:this.subFunction,block:!0},"-"))),r.a.createElement("div",null,r.a.createElement(oe.a,{isOpen:n,toggle:this.addFunction,className:this.props.className},r.a.createElement(ce.a,{toggle:this.addFunction},"TH\xcaM QU\u1ef6"),r.a.createElement(se.a,null,r.a.createElement(k.a,{for:""},"M\xf4 t\u1ea3"),r.a.createElement(S.a,{id:"describeAdd",type:"textarea",rows:3}),r.a.createElement(k.a,{for:""},"Ti\u1ec1n"),r.a.createElement(S.a,{id:"moneyAdd",type:"number"})),r.a.createElement(ie.a,null,r.a.createElement(N.a,{id:"btnAdd",color:"success",onClick:function(){e.onCreateLogsClick("IN_CREATE")}},"+")," "))),r.a.createElement("div",null,r.a.createElement(oe.a,{isOpen:l,toggle:this.subFunction,className:this.props.className},r.a.createElement(ce.a,{toggle:this.subFunction},"TR\u1eea QU\u1ef6"),r.a.createElement(se.a,null,r.a.createElement(k.a,{for:""},"M\xf4 t\u1ea3"),r.a.createElement(S.a,{id:"describeSub",type:"textarea",rows:3}),r.a.createElement(k.a,{for:""},"Ti\u1ec1n"),r.a.createElement(S.a,{id:"moneySub",type:"number"})),r.a.createElement(ie.a,null,r.a.createElement(N.a,{color:"danger",onClick:function(){e.onCreateLogsClick("REDUCE")}},"-")," "))))}}]),t}(r.a.Component),me=n(128),Ee=n(129),de=n(130),pe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).getNumberFormat=function(e){return new Intl.NumberFormat("vn-IN",{}).format(e)+" \u0111"},n.state={},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.log;return r.a.createElement(a.Fragment,null,r.a.createElement(me.a,null,r.a.createElement(Ee.a,{className:"IN_CREATE"===t.type?"bg-success p-2 ":"bg-danger p-2"}),r.a.createElement(de.a,{className:"position-relative"},r.a.createElement("div",{className:"describe"},t.caption),r.a.createElement("div",{className:"money"},"IN_CREATE"===t.type?"+":"-",this.getNumberFormat(t.money)),r.a.createElement("div",{className:"deleteButton",onClick:function(){e.props.onDelete(t._id)}},r.a.createElement("i",{className:"fas fa-times-circle"})))))}}]),t}(r.a.Component),fe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).onCreateLogsClick=function(e){var t,a;"REDUCE"===(e=e.toUpperCase())&&(t=document.getElementById("describeSub").value,a=parseInt(document.getElementById("moneySub").value)),"IN_CREATE"===e&&(t=document.getElementById("describeAdd").value,a=parseInt(document.getElementById("moneyAdd").value));var r=n.props.dispatch;null!=t&&null!=a?r(ee({caption:t,money:a,type:e})):alert("May be description or money is null")},n.onBtnLogoutClick=function(){localStorage.removeItem("user"),n.props.history.push("/")},n.getNumberFormat=function(e){return new Intl.NumberFormat("vn-IN",{}).format(e)+" \u0111"},n.onDeleteLogClick=function(e){n.setState({idDelete:e}),(0,n.props.dispatch)(ne(e))},n.state={isLoading:!1,logs:[],money:0,idDelete:null,typeUser:"CLIENT"},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e;(0,this.props.dispatch)(function(t){t(X("GET_LOGS_MONEY_REQUEST")),U.get("https://egame-websocket.herokuapp.com/coffee/logs",e).then(function(e){t(Z("GET_LOGS_MONEY_COMPLETE",e,null))}).catch(function(e){t(Z("GET_LOGS_MONEY_COMPLETE",null,e))})})}},{key:"componentWillReceiveProps",value:function(e){var t=e.coffee.result;switch(e.coffee.type){case"GET_LOGS_MONEY_REQUEST":this.setState({isLoading:e.coffee.isFetching});break;case"GET_LOGS_MONEY_COMPLETE":if(!e.login.result)return void this.props.history.push("/");this.setState({isLoading:e.coffee.isFetching,logs:e.coffee.result.data.logs,money:e.coffee.result.data.money,typeUser:e.login.result.data.success.type});break;case"POST_CREATE_LOG_MONEY_REQUEST":this.setState({isLoading:e.coffee.isFetching});break;case"POST_CREATE_LOG_MONEY_COMPLETE":var n=this.state.logs;n.push(t.data.success.logs.data),this.setState({isLoading:e.coffee.isFetching,money:t.data.success.money,logs:n});break;case"DELETE_LOGS_MONEY_COMPLETE":if(t.data.success){var a=this.state.logs;a=a.filter(function(e){return!(e._id===t.data.success.id)}),this.setState({isLoading:e.coffee.isFetching,money:t.data.success.money,logs:a,idDelete:null})}else alert("delete fail");break;default:return}}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.logs,l=t.money,o=t.typeUser,c=t.idDelete,s=r.a.createElement(ue,{onCreateLogsClick:this.onCreateLogsClick});return r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12,className:"mt-3"},r.a.createElement("div",{className:"float-right"},r.a.createElement(N.a,{onClick:this.onBtnLogoutClick},"Log out"))),r.a.createElement(T.a,{sm:{size:8,offset:2},md:{size:6,offset:3}},r.a.createElement("h2",{className:"sumMoney"},this.getNumberFormat(l)),n?r.a.createElement(q,null):r.a.createElement("div",{className:"wrap"},a.map(function(t,n){return t._id===c?r.a.createElement(q,null):r.a.createElement(pe,{log:t,keu:n,onDelete:e.onDeleteLogClick})})),"ADMIN"===o?s:"")))}}]),t}(r.a.Component),he=[{component:g,routes:[{path:"/",component:le,exact:!0},{path:"/questions",component:J,exact:!0},{path:"/coffee",component:Object(b.b)(function(e){return{login:Object(O.a)({},e.login),coffee:Object(O.a)({},e.coffee)}})(fe),exact:!0},{path:"/trang_chu",component:$,exact:!0},{path:"*",component:h.PageNotFound}]}],ge=function(){return Object(s.a)(he)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(26),be=n(72),ve=n(73),_e=n.n(ve),ye=Object(Oe.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOME_REQUEST":return Object(O.a)({},e,{type:t.type,isFetching:!0});case"HOME_COMPLETE":return Object(O.a)({},e,{type:t.type,isFetching:!1,result:t.payload,error:t.error});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_COMPLETE":return Object(O.a)({},e,{type:t.type,isFetching:!1,result:t.payload,error:t.error});default:return e}},question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUESTION_BY_ID_REQUEST":case"POST_CREATE_QUESTION_REQUEST":case"GET_QUESTION_BY_ID_COMPLETE":case"POST_CREATE_QUESTION_COMPLETE":return Object(O.a)({},e,{type:t.type,isFetching:t.isFetching,result:t.payload,error:t.error});default:return e}},coffee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS_MONEY_REQUEST":case"GET_LOGS_MONEY_COMPLETE":case"POST_CREATE_LOG_MONEY_REQUEST":case"POST_CREATE_LOG_MONEY_COMPLETE":case"DELETE_LOGS_MONEY_REQUEST":case"DELETE_LOGS_MONEY_COMPLETE":return Object(O.a)({},e,{type:t.type,isFetching:t.isFetching,result:t.payload,error:t.error});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_LOGIN_REQUEST":case"POST_LOGIN_COMPLETE":return Object(O.a)({},e,{type:t.type,isFetching:t.isFetching,result:t.payload,error:t.error});default:return e}}}),Ce=function(e){return function(e){return function(t){console.log("Middleware"),e(t)}}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Oe.d)(ye,e,Object(Oe.a)(be.a,_e.a,Ce))};o.a.render(r.a.createElement(c.a,null,r.a.createElement(b.a,{store:Te()},r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,n){e.exports={title:"PageNotFound_title__3LgjU",message:"PageNotFound_message__2OjJE"}},48:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){e.exports={ldsEllipsis:"Loading_ldsEllipsis__24DMW",ldsEllipsis1:"Loading_ldsEllipsis1__3qOno",ldsEllipsis2:"Loading_ldsEllipsis2__20QeU",ldsEllipsis3:"Loading_ldsEllipsis3__1N2wm"}},74:function(e,t,n){e.exports=n(121)},79:function(e,t,n){},80:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.3ba0353c.chunk.js.map