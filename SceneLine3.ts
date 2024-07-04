System.register("chunks:///_virtual/SceneLine3.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./TimeUtil.ts","./UIEffectAsset.ts","./ConfigSeason_kv.ts","./SLGMapData.ts","./RoleDataCache.ts","./SeasonSceneDataCache.ts","./SceneUnit4.ts","./SeasonMapScene.ts"],(function(e){"use strict";var i,o,t,s,n,a,c,d,r,h,f,l,p,m,u,v,I,S,C;return{setters:[function(e){i=e.inheritsLoose,o=e.createClass},function(e){t=e.cclegacy,s=e.Vec2,n=e.Color,a=e.Sprite,c=e.UITransform,d=e.Label,r=e.sys,h=e.Button},function(e){f=e.default},function(e){l=e.default},function(e){p=e.UIEffectAsset},function(e){m=e.ConfigSeason_kv},function(e){u=e.SLGMapData},function(e){v=e.RoleDataCache},function(e){I=e.SeasonSceneDataCache},function(e){S=e.SceneUnit},function(e){C=e._regionColors}],execute:function(){t._RF.push({},"df652lbjHNKs4P2CNbM0cYo","SceneLine",void 0);var _=new s,P=n.fromHEX(new n,"#9bfff9"),N=n.fromHEX(new n,"#9eff90"),D=n.fromHEX(new n,"#fe2e2e");e("SceneLine",function(e){function t(i,o){var t;(t=e.call(this)||this).info=void 0,t.map=void 0,t.model=void 0,t.startPos=new s,t.endPos=new s,t.dir=new s,t.distance=void 0,t.moveDis=void 0,t.speed=void 0,t.curPos=new s,t.ship=void 0,t.shipName=void 0,t.faceNormal=void 0,t.faceCD=void 0,t.faceCDTime=void 0,t.faceIcon=void 0,t.roleId=0,t.initFinish=!1,t.map=i,t.info=o;var c="",m=0;if(o){var S=u.getCRToPos(o.start_pos.x,o.start_pos.y);t.startPos.set(S),S=u.getCRToPos(o.end_pos.x,o.end_pos.y),t.endPos.set(S),t.distance=s.distance(t.startPos,t.endPos),t.speed=t.distance/(o.end_time-o.start_time);var C=s.subtract(t.dir,t.endPos,t.startPos);C.normalize();var _=(l.serverTime-o.start_time)*t.speed;t.moveDis=_,s.multiplyScalar(t.curPos,C,_),t.curPos.add(t.startPos),t.model=p.alloc("ui/module/season/scene/Line",i.nodeUnitMap.line,-1,(function(e){t.onInit(e)})),t.id=o.obj_id,m=o.role_id,t.model.position=t.startPos,c=o.role_name}else{t.id=IS(v).GetRoleId(),m=t.id;var P=IS(I).teamInfo.now_pos,w=u.getCRToPos(P.x,P.y);t.curPos.set(w.x,w.y),c=IS(v).GetRoleName()}return t.roleId=m,t.ship=p.alloc("ui/module/season/scene/Ship",i.nodeUnitMap.ship,-1),t.ship.position=t.curPos,t.ship.dir=t.dir.x>0?1:-1,t.shipName=p.alloc("ui/module/season/scene/ShipName",i.nodeUnitMap.shipName,-1,(function(e){var i=f.findChildComponent(e.node,"txtName",d);i.string=c,r.uiMirror&&i.node.setScale(1,1,1),m==IS(v).GetRoleId()?i.color=N:o.area_id!=IS(I).myAreaId?i.color=D:i.color=n.WHITE,t.faceNormal=f.findChild(e.node,"face/normal"),t.map.view.addComponentCallbackListener(t.faceNormal,h.EventType.CLICK,(function(){uiMgr.openView("SeasonFaceView")})),t.faceCD=f.findChild(e.node,"face/cd"),t.faceCDTime=f.findChildComponent(e.node,"face/cd/time",d),r.uiMirror&&t.faceCDTime.node.setScale(1,1,1),t.faceIcon=f.findChildComponent(e.node,"face/face",a),t.info||(t.faceNormal.active=!1,t.faceCD.active=!1,t.map.view.loadIcon(t.faceIcon,"icon_chat","")),t.initFinish=!0})),t.shipName.position=t.curPos,t}i(t,e);var S=t.prototype;return S.onInit=function(e){var i=e.node,o=this.dir;e.lookAt(o.x,o.y),i.getComponent(a).color=this.roleId==IS(v).GetRoleId()?P:C[this.info.area_id-1]},S.onUpdate=function(e){if(this.info){var i=s.distance(this.curPos,this.endPos);if(this.speed*e>i?this.curPos.set(this.endPos):(s.multiplyScalar(_,this.dir,this.speed*e),this.curPos.add(_)),this.model.position=this.curPos,this.distance=s.distance(this.curPos,this.endPos),this.model.node){var o=40*Math.floor(this.distance/40+.5);this.model.node.getComponent(c).width=o}if(this.ship.position=this.curPos,this.shipName.position=this.curPos,this.initFinish){this.info.role_id!=IS(v).GetRoleId()&&(this.map.view.loadIcon(this.faceIcon,"icon_chat",""),this.faceCD.active=!1,this.faceNormal.active=!1);var t=l.serverTime-(this.info.emoji_end_time+m.SEASON_EMOJI_CD-m.SEASON_EMOJI_SHOWTIME);t<=0?t>-(m.SEASON_EMOJI_CD-m.SEASON_EMOJI_SHOWTIME)?(this.faceCD.active=!0,this.faceCDTime.string=l.getTimeLeft(-t),this.map.view.loadIcon(this.faceIcon,"icon_chat","")):(this.faceCD.active=!1,this.faceNormal.active=!1,""!=this.info.emoji_id?this.map.view.loadIcon(this.faceIcon,"icon_chat",this.info.emoji_id):this.map.view.loadIcon(this.faceIcon,"icon_chat","")):(this.map.view.loadIcon(this.faceIcon,"icon_chat",""),this.faceCD.active=!1,this.faceNormal.active=!0)}}},S.onDestroy=function(){this.model&&this.model.free(),this.ship&&this.ship.free(),this.shipName&&this.shipName.free()},o(t,[{key:"position",get:function(){return this.ship.position},set:function(e){this.ship.position=e,this.shipName.position=e}},{key:"depth",get:function(){return this.ship.depth},set:function(e){this.ship.depth=e}}]),t}(S));t._RF.pop()}}}));

