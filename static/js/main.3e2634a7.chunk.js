(this["webpackJsonptodo-list-v1"]=this["webpackJsonptodo-list-v1"]||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),r=n(7),c=n.n(r),i=n(5),d=n(4);n(15);function l(t){var e=Object(o.useState)(""),n=Object(d.a)(e,2),r=n[0],c=n[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.addTodo(r),c("")},className:"todo-form"},a.a.createElement("input",{value:r,onChange:function(t){return c(t.target.value)},className:"todo-input",placeholder:"Add a todo"}),a.a.createElement("button",{type:"submit",className:"todo-button"},"Add Todo"))}var m=n(8),u=n(9);function s(t){var e=t.todo,n=t.removeTodo,o=t.completeTodo,r=t.importantTodo;return a.a.createElement("div",{className:e.completed?"todo-row complete":"todo-row",style:e.important?{background:"orange"}:{}},e.text,a.a.createElement("div",{className:"iconsContainer"},a.a.createElement("button",{onClick:function(){return r(e.id)},className:"important-btn"},"!"),a.a.createElement(m.a,{style:{marginRight:5},onClick:function(){return n(e.id)}}),a.a.createElement(u.a,{onClick:function(){return o(e.id)}})))}var p=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],c=function(t){var e=Object(i.a)(n).filter((function(e){return e.id!==t}));r(e)},m=function(t){var e=n.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));r(e)},u=function(t){var e=n.map((function(e){return e.id===t&&(e.important=!e.important),e}));r(e)},p=n.sort((function(t,e){return e.important-t.important}));return a.a.createElement("div",{className:"todo-app"},a.a.createElement("h1",null,"Todo List"),a.a.createElement(l,{addTodo:function(t){var e=1;n.length>0&&(e=n[0].id+1);var o=[{id:e,text:t,completed:!1,important:!1}].concat(Object(i.a)(n));r(o)}}),a.a.createElement("hr",{className:"seperator"}),p.map((function(t){return a.a.createElement(s,{removeTodo:c,completeTodo:m,importantTodo:u,todo:t,key:t.id})})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3e2634a7.chunk.js.map