System.register("chunks:///_virtual/SceneCamera9.ts",["cc"],(function(i){"use strict";var o,e,t,s;return{setters:[function(i){o=i.cclegacy,e=i.Rect,t=i.Vec3,s=i.screen}],execute:function(){o._RF.push({},"c48b8Pc76FNH6V8+RedRhVg","SceneCamera",void 0);var n=new e(-360,-20,720,40);i("SceneCamera",function(){function i(){this.nodeCamera=void 0,this.camera=void 0,this.follow=void 0,this.oriPos=new t;var i=800/s.windowSize.height*s.windowSize.width;i=1440-2*i,n.width=i,n.x=-i/2}return i.prototype.onUpdate=function(){var i=this.follow.model.position;this.oriPos.set(i.x,i.y,10);var o=this.oriPos;o.x<=n.xMin&&(this.oriPos.x=n.xMin),o.x>=n.xMax&&(this.oriPos.x=n.xMax),o.y<=n.yMin&&(this.oriPos.y=n.yMin),o.y>=n.yMax&&(this.oriPos.y=n.yMax),this.nodeCamera.position=this.oriPos},i}());o._RF.pop()}}}));
