(function(e){function t(t){for(var n,l,d=t[0],i=t[1],u=t[2],s=0,p=[];s<d.length;s++)l=d[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);a&&a(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,d=1;d<o.length;d++){var i=o[d];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},c=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/todo/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var a=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v(" To-Do List ")]),o("md-card",{staticClass:"todoBox"},[o("md-field",[o("md-input",{attrs:{placeholder:"Add an item to your todo-list!"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("div",{staticClass:"todos"},e._l(e.todos,(function(t,n){return o("li",{key:t.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"completeButton",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,c=!!r.checked;if(Array.isArray(n)){var l=null,d=e._i(n,l);r.checked?d<0&&e.$set(t,"completed",n.concat([l])):d>-1&&e.$set(t,"completed",n.slice(0,d).concat(n.slice(d+1)))}else e.$set(t,"completed",c)}}}),t.edit?o("md-input",{staticClass:"todo-item-edit",attrs:{type:"text"},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.completedEdit(t)}},model:{value:t.label,callback:function(o){e.$set(t,"label",o)},expression:"todo.label"}}):o("span",{staticClass:"todo-item-label",class:{completed:t.completed},on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(" "+e._s(t.label)+" ")]),o("md-raised",{staticClass:"closeButton",on:{click:function(t){return e.removeTodo(n)}}},[e._v("X")])],1)})),0)],1)],1)},c=[],l=(o("a434"),{data:function(){return{todos:[],currentTodo:"",editedTodo:null}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,edit:!1}),this.currentTodo=""},removeTodo:function(e){this.todos.splice(e,1)},editTodo:function(e){e.edit=!0},completedEdit:function(e){e.edit=!1}}}),d=l,i=(o("034f"),o("2877")),u=Object(i["a"])(d,r,c,!1,null,null,null),a=u.exports,s=(o("51de"),o("43f9")),p=o.n(s);o("bb87");n["default"].use(p.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(a)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.3652fec4.js.map