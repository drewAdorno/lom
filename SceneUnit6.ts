System.register("chunks:///_virtual/SceneUnit6.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./UIEffectAsset.ts","./PolyNavAgent.ts","./CommonModel.ts"],(function(e){"use strict";var t,i,o,n,s,r,d,a,c;return{setters:[function(e){t=e.inheritsLoose,i=e.createClass},function(e){o=e.cclegacy,n=e.Vec2,s=e.Rect},function(e){r=e.V2},function(e){d=e.UIEffectAsset},function(e){a=e.PolyNavAgent},function(e){c=e.CommonModel}],execute:function(){o._RF.push({},"b774cVfdwJIqZmOWYqHc2Pv","SceneUnit",void 0);var l=e("SceneUnit",function(){function e(){this.id=void 0,this.uid=0,this.del=!1,this.isDestroy=!1,this.type=1,this.rect=new s}var t=e.prototype;return t.update=function(e){this.del||this.onUpdate(e)},t.destroy=function(){this.isDestroy||(this.isDestroy=!0,this.del=!0,this.onDestroy())},e}());e("SceneRole",function(e){function o(t,i){var o;(o=e.call(this)||this).map=void 0,o.info=void 0,o.agent=void 0,o.model=void 0,o.moveType=0,o.velocity=void 0,o.infoView=void 0,o.target=void 0,o.btnBreak=void 0,o.nodePb=void 0,o.pbPicking=void 0,o.pickingNum=0,o.info=i,o.info.inQuene=0,o.uid=i.role_id,o.map=t;var n=new r(i.pos.x,i.pos.y);return o.model=IS(c).createRoleModel(i.figure,t.nodeUnit,n,1),o.agent=new a(t.polyNav),o.agent.pos.set(n.x,n.y),o.agent.maxSpeed=150,o.rect.width=50,o.rect.height=50,o.rect.center=n,o.id="role:"+i.role_id,o}t(o,e);var s=o.prototype;return s.onUpdate=function(e){if(!this.del){this.agent.onUpdate(e),1==this.moveType?this.agent.isMove?this.model.aniName="skill1":(this.model.aniName="idle",this.moveType=0):2==this.moveType&&this.agent.setDirPos(this.velocity,e),this.rect.center=this.agent.pos,this.model.position=this.agent.pos;var t=this.agent.dir;this.model.direction=t}},s.moveToTarget=function(e){return!(n.distance(this.position,e)<1)&&(this.agent.activePath.push(e),this.moveType=1,this.agent.isMove=!0,!0)},s.moveToDir=function(e){e.lengthSqr()>1?(this.moveType=2,this.model.aniName="skill1",this.velocity=e):(this.moveType=0,this.model.aniName="idle",this.velocity=n.ZERO)},s.onDestroy=function(){this.infoView&&this.infoView.free(),this.model&&this.model.free()},i(o,[{key:"position",get:function(){return this.model.position},set:function(e){this.model.position=e,this.agent.pos.set(e.x,e.y),this.rect.center=e}},{key:"depth",get:function(){return this.model.depth},set:function(e){this.model.depth=e}}]),o}(l)),e("SceneMonster",function(e){function o(t,i,o){var n;switch((n=e.call(this)||this).model=void 0,n.isPlayerNearby=void 0,n.type=2,o){case 1:n.model=d.alloc("prefab/model/MX_jy_banlanjuxi",t.nodeUnit,-1);break;case 2:n.model=d.alloc("prefab/model/MX_jy_baobaoxueshanlang",t.nodeUnit,-1);break;case 3:n.model=d.alloc("prefab/model/MX_jy_shuyao",t.nodeUnit,-1);break;case 4:n.model=d.alloc("prefab/model/MX_jy_juxingwugong",t.nodeUnit,-1)}return n.id="monster:"+i.monster_id,n.model.position=new r(i.pos.x,i.pos.y),n}t(o,e);var n=o.prototype;return n.onDestroy=function(){this.model&&this.model.free()},n.detectPlayer=function(e){this.isPlayerNearby=e},n.onUpdate=function(e){this.isPlayerNearby&&this.destroy()},i(o,[{key:"position",get:function(){return this.model.position},set:function(e){this.model.position=e}},{key:"depth",get:function(){return this.model.depth},set:function(e){this.model.depth=e}}]),o}(l));o._RF.pop()}}}));
