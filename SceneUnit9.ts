System.register("chunks:///_virtual/SceneUnit9.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DevourGameDefine.ts"],(function(t){"use strict";var i,e,o,s,n;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t.Vec3,s=t.Vec2},function(t){n=t.MoveRange}],execute:function(){e._RF.push({},"e80d2FLGFBHx4kOWk1ymuZe","SceneUnit",void 0);var h=t("SceneUnit",function(){function t(t,i){this.node=void 0,this.radius=void 0,this.ut=void 0,this.node=t,this.ut=i,this.resetSize()}return t.prototype.resetSize=function(){this.radius=this.node.scale.y*this.ut.contentSize.y/2*.9},t}());t("SceneRole",function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).velocity=new s(0,0),i.MoveSpeed=1,i}i(e,t);var h=e.prototype;return h.onUpdate=function(t){this.MoveSpeed=1/this.node.scale.y,this.velocity.equals2f(0,0,.01)||(this.velocity.x>0&&this.node.position.x<n.Right-this.radius&&this.velocity.y>0&&this.node.position.y<n.Top-this.radius&&this.node.translate(new o(this.velocity.x*t*this.MoveSpeed,this.velocity.y*t*this.MoveSpeed,0)),this.velocity.x>0&&this.node.position.x<n.Right-this.radius&&this.velocity.y<0&&this.node.position.y>n.Bottom+this.radius&&this.node.translate(new o(this.velocity.x*t*this.MoveSpeed,this.velocity.y*t*this.MoveSpeed,0)),this.velocity.x<0&&this.node.position.x>n.Left+this.radius&&this.velocity.y>0&&this.node.position.y<n.Top-this.radius&&this.node.translate(new o(this.velocity.x*t*this.MoveSpeed,this.velocity.y*t*this.MoveSpeed,0)),this.velocity.x<0&&this.node.position.x>n.Left+this.radius&&this.velocity.y<0&&this.node.position.y>n.Bottom+this.radius&&this.node.translate(new o(this.velocity.x*t*this.MoveSpeed,this.velocity.y*t*this.MoveSpeed,0)))},h.moveToDir=function(t){this.velocity=t},e}(h));e._RF.pop()}}}));

