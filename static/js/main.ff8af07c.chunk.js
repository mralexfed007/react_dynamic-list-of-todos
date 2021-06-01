(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),c=n(1),l=n.n(c),i=n(12),u=n(4),d=n(8),m=n(9),p=n(10),h=n(14),f=n(11),v=(n(21),n(22),n(5)),_=n.n(v),E=(n(23),function(e){var t=e.todos,n=e.onSelected,a=e.selectOption,r=t.filter((function(e){switch(a){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h2",null,"Todos:"),o.a.createElement("div",{className:"TodoList__list-container"},o.a.createElement("ul",{className:"TodoList__list"},r.map((function(e){return o.a.createElement("li",{key:e.id,className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed}),o.a.createElement("p",null,e.title)),o.a.createElement("button",{className:_()("TodoList__user-button","button",{"TodoList__user-button--selected":e.completed}),type:"button",onClick:function(){n(e.userId)}},"User\xa0#",e.userId))})))))});E.defaultProps={todos:[]};var b=n(13),O=(n(24),function(e){var t="".concat("https://mate-api.herokuapp.com/").concat(e);return fetch(t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),T=function(e){var t="users/".concat(e);return O(t)},k=function(){return O("todos")},N=function(e){var t=e.userId,n=e.onClear,r=e.onSelected,s=Object(a.useState)(0),c=Object(b.a)(s,2),i=c[0],d=c[1];return Object(a.useMemo)(Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:(n=e.sent)?d(n):r(0);case 4:case"end":return e.stop()}}),e)}))),[t]),o.a.createElement("div",{className:"CurrentUser"},o.a.createElement("h2",{className:"CurrentUser__title"},o.a.createElement("span",null,"Selected user:\xa0",i.id)),o.a.createElement("h3",{className:"CurrentUser__name"},i.name),o.a.createElement("p",{className:"CurrentUser__email"},i.email),o.a.createElement("p",{className:"CurrentUser__phone"},i.phone),o.a.createElement("button",{type:"submit",onClick:function(){return n(0)}},"Clear"))},C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],copiedTodos:[],selectedUserId:0,title:"",selectOption:"",randomOption:!1},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(d.a)({},a,o))},e.updateTodos=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:n=t.sent,e.setState({todos:n,copiedTodos:Object(i.a)(n)});case 4:case"end":return t.stop()}}),t)}))),e.selectUserId=function(t){e.setState({selectedUserId:t})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.updateTodos()}},{key:"componentDidUpdate",value:function(e,t){t.title!==this.state.title&&this.titleParse(),t.randomOption!==this.state.randomOption&&this.randomOrder()}},{key:"randomOrder",value:function(){var e=this.state.randomOption?this.state.copiedTodos.sort((function(){return Math.random()-.5})):this.titleParse();this.setState({copiedTodos:e})}},{key:"titleParse",value:function(){var e=this,t=this.state.todos.filter((function(t){return null!==t.title&&t.title.includes(e.state.title)}));return this.setState({copiedTodos:t}),t}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedUserId,a=t.title,r=t.copiedTodos,s=t.selectOption,c=t.randomOption;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App__sidebar"},o.a.createElement("div",{className:"filter"},o.a.createElement("input",{className:"filter-item",type:"text",name:"title",placeholder:"Title",value:a,onChange:this.handleChange}),o.a.createElement("select",{className:"filter-item",name:"selectOption",value:s,onChange:this.handleChange},o.a.createElement("option",{selected:!0,value:"all"},"All"),o.a.createElement("option",{value:"active"},"Active"),o.a.createElement("option",{value:"completed"},"Comleted")),o.a.createElement("button",{className:_()("filter-item","button",{"TodoList__user-button--selected":c}),type:"submit",onClick:function(){return e.setState({randomOption:!c})}},c?"Standart order":"Random order")),o.a.createElement(E,{todos:r,onSelected:this.selectUserId,selectOption:s})),o.a.createElement("div",{className:"App__content"},o.a.createElement("div",{className:"App__content-container"},n?o.a.createElement(N,{userId:n,onClear:this.selectUserId,onSelected:this.selectUserId}):"No user selected")))}}]),n}(o.a.Component);s.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ff8af07c.chunk.js.map