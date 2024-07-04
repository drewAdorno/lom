System.register("chunks:///_virtual/SceneCamera.ts",["cc"],(function(i){"use strict";var t,s,e,o,h;return{setters:[function(i){t=i.cclegacy,s=i.Vec2,e=i.Vec3,o=i.Rect,h=i.screen}],execute:function(){t._RF.push({},"01eb9/ZzdxDk6I9MChdF+yq","SceneCamera",void 0);var n=800;i("SceneCamera",function(){function i(){this.nodeCamera=void 0,this.camera=void 0,this.follow=void 0,this.oriPos=new e,this.box=new o(-360,-20,720,40),this._destPos=new e,this._startPos=new e,this._moveTime=0,this._moveTimer=0,this._isMove=!1,n=800/h.windowSize.height*h.windowSize.width}var t=i.prototype;return t.onUpdate=function(i){this.updatePosition(i);var t=this.oriPos,s=this.box;t.x<=s.xMin&&(this.oriPos.x=s.xMin),t.x>=s.xMax&&(this.oriPos.x=s.xMax),t.y<=s.yMin&&(this.oriPos.y=s.yMin),t.y>=s.yMax&&(this.oriPos.y=s.yMax),this.nodeCamera.position=this.oriPos},t.getEdge=function(i){var t=this.box;i.x<=t.xMin&&(i.x=t.xMin),i.x>=t.xMax&&(i.x=t.xMax),i.y<=t.yMin&&(i.y=t.yMin),i.y>=t.yMax&&(i.y=t.yMax)},t.updatePosition=function(i){if(this.follow){this.endMove();var t=this.follow.model.position;return this.oriPos.set(t.x,t.y,10),void this.getEdge(this.oriPos)}var e=0;if(this._isMove){this._moveTime=Math.min(this._moveTime+i,this._moveTimer);var o=1-Math.pow(2,-10*this._moveTime/this._moveTimer);this._moveTime>=this._moveTimer&&(o=1,this.endMove()),e=o}var h=this._destPos;e>0?s.lerp(this.oriPos,this._startPos,h,e):s.distance(this.oriPos,h)>.1&&this.oriPos.set(h),this.oriPos.z=10},t.endMove=function(){this._isMove=!1,this._moveTime=0,this._moveTimer=0,this._startPos.set(this._destPos)},t.setMapSize=function(i,t,e){void 0===e&&(e=1);var o=this.box;o.width=i-2*n,o.height=t-1600,o.width=o.width/e,o.height=o.height/e,o.center=s.ZERO},t.toTargetPos=function(i,t){void 0===t&&(t=0),this._destPos.set(i),this.getEdge(this._destPos),t>0?(this._isMove=!0,this._startPos.set(this.oriPos),this._moveTimer=t,this._moveTime=0):(this.endMove(),this.oriPos.set(this._destPos))},i}());t._RF.pop()}}}));

