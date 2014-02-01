define("js/todo-app",[],function(){var e="../../../../../../../Users/guybedford/Projects/traceur-todomvc/js/todo-app",t=Backbone,n=t.Model,r=t.View,i=t.Collection,s=t.Router,o=t.LocalStorage,u=13,a="",f=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)},l=$traceurRuntime.createClass(f,{defaults:function(){return{title:"",completed:!1}},toggle:function(){this.save({completed:!this.get("completed")})}},{},n),c=function(e){$traceurRuntime.superCall(this,h.prototype,"constructor",[e]),this.model=f,this.localStorage=new o("todos-traceur-backbone")},h=$traceurRuntime.createClass(c,{completed:function(){return this.filter(function(e){return e.get("completed")})},remaining:function(){var e;return(e=this).without.apply(e,$traceurRuntime.toObject(this.completed()))},nextOrder:function(){return this.length?this.last().get("order")+1:1},comparator:function(e){return e.get("order")}},{},i),p=new c,d=function(e){this.tagName="li",this.model=f,this.template=_.template($("#item-template").html()),this.input="",this.events={"click .toggle":"toggleCompleted","dblclick label":"edit","click .destroy":"clear","keypress .edit":"updateOnEnter","blur .edit":"close"},$traceurRuntime.superCall(this,v.prototype,"constructor",[e]),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.remove),this.listenTo(this.model,"visible",this.toggleVisible)},v=$traceurRuntime.createClass(d,{render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.toggleClass("completed",this.model.get("completed")),this.toggleVisible(),this.input=this.$(".edit"),this},toggleVisible:function(){this.$el.toggleClass("hidden",this.isHidden)},get isHidden(){var e=this.model.get("completed");return!e&&a==="completed"||e&&a==="active"},toggleCompleted:function(){this.model.toggle()},edit:function(){var e=this.input.val();this.$el.addClass("editing"),this.input.val(e).focus()},close:function(){var e=this.input.val();e?this.model.save({title:e}):this.clear(),this.$el.removeClass("editing")},updateOnEnter:function(e){e.which===u&&this.close()},clear:function(){this.model.destroy()}},{},r),m=function(){this.setElement($("#todoapp"),!0),this.statsTemplate=_.template($("#stats-template").html()),this.events={"keypress #new-todo":"createOnEnter","click #clear-completed":"clearCompleted","click #toggle-all":"toggleAllComplete"},this.allCheckbox=this.$("#toggle-all")[0],this.$input=this.$("#new-todo"),this.$footer=this.$("#footer"),this.$main=this.$("#main"),this.listenTo(p,"add",this.addOne),this.listenTo(p,"reset",this.addAll),this.listenTo(p,"change:completed",this.filterOne),this.listenTo(p,"filter",this.filterAll),this.listenTo(p,"all",this.render),p.fetch(),$traceurRuntime.superCall(this,g.prototype,"constructor",[])},g=$traceurRuntime.createClass(m,{render:function(){var e=p.completed().length,t=p.remaining().length;p.length?(this.$main.show(),this.$footer.show(),this.$footer.html(this.statsTemplate({completed:e,remaining:t})),this.$("#filters li a").removeClass("selected").filter('[href="#/'+(a||"")+'"]').addClass("selected")):(this.$main.hide(),this.$footer.hide()),this.allCheckbox.checked=!t},addOne:function(e){var t=new d({model:e});$("#todo-list").append(t.render().el)},addAll:function(){this.$("#todo-list").html(""),p.each(this.addOne,this)},filterOne:function(e){e.trigger("visible")},filterAll:function(){p.each(this.filterOne,this)},newAttributes:function(){return{title:this.$input.val().trim(),order:p.nextOrder(),completed:!1}},createOnEnter:function(e){if(e.which!==u||!this.$input.val().trim())return;p.create(this.newAttributes()),this.$input.val("")},clearCompleted:function(){return _.invoke(p.completed(),"destroy"),!1},toggleAllComplete:function(){var e=this.allCheckbox.checked;p.each(function(t){return t.save({completed:e})})}},{},r),y=function(){this.routes={"*filter":"filter"},this._bindRoutes()};return y=$traceurRuntime.createClass(y,{filter:function(){var e=arguments[0]!==void 0?arguments[0]:"";a=e,p.trigger("filter")}},{},s),{get AppView(){return m},get Filters(){return y},__transpiledModule:!0}}),define("js/app",["./todo-app"],function(e){var t="../../../../../../../Users/guybedford/Projects/traceur-todomvc/js/app",n=e,r=n.AppView,i=n.Filters;return $(function(){new r,new i,Backbone.history.start()}),{}});