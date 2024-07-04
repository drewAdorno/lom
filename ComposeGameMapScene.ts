System.register("chunks:///_virtual/ComposeGameMapScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./NodeUtil.ts","./MessageView.ts","./GameCenterControl.ts","./GameCenterModel.ts","./ComposeGameDataCache.ts","./ComposeGameDefine.ts","./SceneCamera3.ts","./SceneUnit6.ts"],(function(e){"use strict";var i,t,n,o,s,r,a,u,l,h,f,p,c,d,m,v,_,g,w,M,Q,C,y;return{setters:[function(e){i=e.createForOfIteratorHelperLoose},function(e){t=e.cclegacy,n=e.Prefab,o=e.UITransform,s=e.Node,r=e.Vec3,a=e.Vec2,u=e.find,l=e.Camera},function(e){h=e.V2},function(e){f=e.default},function(e){p=e.default},function(e){c=e.default},function(e){d=e.default},function(e){m=e.default},function(e){v=e.RoleLevel,_=e.JobFigureLevel,g=e.ComposeGameEventDefine,w=e.AttackRange,M=e.DetectRange},function(e){Q=e.SceneCamera},function(e){C=e.SceneRole,y=e.SceneMonster}],execute:function(){var S;t._RF.push({},"943afKAmzJP0IxvdrLFzmqk","ComposeGameMapScene",void 0);e("ComposeGameMapScene",function(){function e(e){this.units=[],this.node=void 0,this.unitMap={},this.view=void 0,this.roleQuene=[],this.mapCamera=new Q,this.owner=void 0,this.nodeUnit=void 0,this.nodeUnitHub=void 0,this.polyNav=void 0,this.ut=void 0,this.onLoadViewSuccess=void 0,this.startTouchPos=void 0,this.frameNum=0,this.queneNum=0,this.quenePos=[],this.completeGame=void 0,S=u("SceneRoot"),this.view=e,this.mapCamera.nodeCamera=f.findChild(S,"SceneCamera"),this.mapCamera.camera=this.mapCamera.nodeCamera.getComponent(l)}var t=e.prototype;return t.load=function(){var e=this;this.node||(null!==this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/composeGame/ComposeGameMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onLoadViewSuccess=function(i){if(e.onLoadViewSuccess=null,!i.error&&null!==i.item&&null!==i.item.asset){var t=i.item.asset,n=nodeInstantiate.instantiate(t);e.node=n,n.setParent(S),e.onInit()}},resourceMgr.loadRes("ui/module/composeGame/ComposeGameMapScene",n,this.onLoadViewSuccess))},t.onInit=function(){var e=this;this.nodeUnit=f.findChild(this.node,"unit"),this.ut=this.nodeUnit.getComponent(o),this.nodeUnitHub=f.findChild(this.node,"unitHub");var i=this.view,t=f.findChild(this.node,"map_xiaoyouxi_02");i.addComponentCallbackListener(t,s.EventType.TOUCH_END,(function(i){if(e.owner){var t=i.getLocation(),n=new r(t.x,t.y,0);e.mapCamera.camera.screenToWorld(n).add3f(2e3,0,0)}}));var n=IS(m);n.roleMap[1]={role_id:1,role_level:v.Level1,inQuene:1,figure:{equip_list:[{k:1,v:40100202}],skin_list:[],hair_figure:8,job_figure:_[v.Level1],mount_figure:0,artifact_figure:0,gender:0,current_title:0},pos:{x:-200,y:-200},break:1},n.roleMap[2]={role_id:2,role_level:v.Level1,inQuene:0,figure:{equip_list:[{k:1,v:40100202}],skin_list:[],hair_figure:8,job_figure:_[v.Level1],mount_figure:0,artifact_figure:0,gender:0,current_title:0},pos:{x:0,y:0},break:1},n.roleMap[3]={role_id:3,role_level:v.Level1,inQuene:0,figure:{equip_list:[{k:1,v:40100202}],skin_list:[],hair_figure:8,job_figure:_[v.Level1],mount_figure:0,artifact_figure:0,gender:0,current_title:0},pos:{x:300,y:0},break:1},n.roleMap[4]={role_id:4,role_level:v.Level2,inQuene:0,figure:{equip_list:[{k:1,v:40100202}],skin_list:[],hair_figure:8,job_figure:_[v.Level2],mount_figure:0,artifact_figure:0,gender:0,current_title:0},pos:{x:150,y:-400},break:1},n.roleMap[5]={role_id:5,role_level:v.Level2,inQuene:0,figure:{equip_list:[{k:1,v:40100202}],skin_list:[],hair_figure:8,job_figure:_[v.Level2],mount_figure:0,artifact_figure:0,gender:0,current_title:0},pos:{x:-500,y:600},break:1},n.monsterMap[1]={monster_id:1,monster_type:1,pos:{x:100,y:200}},n.monsterMap[2]={monster_id:2,monster_type:2,pos:{x:-400,y:300}},n.monsterMap[3]={monster_id:3,monster_type:3,pos:{x:-300,y:-500}},n.monsterMap[4]={monster_id:4,monster_type:4,pos:{x:200,y:-100}},this.loadAllUnit(),this.open()},t.registerEvent=function(){this.view},t.open=function(){if(S.active||(S.active=!0),this.node)return this.registerEvent(),void this.onAfterOpen();this.load()},t.close=function(){S.active&&(S.active=!1),null!==this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/composeGame/ComposeGameMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onBeforeClose()},t.destroy=function(){this.close(),this.node&&(this.node.destroy(),resourceMgr.releaseResRef("ui/module/composeGame/ComposeGameMapScene"),this.node=null)},t.onAfterOpen=function(){normalEvent.emit(g.COMPOSEGAME_SCENE_LOAD_FINISH),this.completeGame=!1},t.onBeforeClose=function(){if(null!==this.owner){for(var e,t=i(this.units);!(e=t()).done;){e.value.destroy()}this.mapCamera.follow=null,this.units.length=0,this.unitMap={},this.owner=null}},t.onDestroy=function(){},t.onUpdate=function(e){this._updateDepth();for(var i=0;i<this.units.length;i++){var t=this.units[i];t.del?(t.destroy(),this.units.splice(i,1),i--):t.update(e)}if(this.owner&&this.mapCamera.onUpdate(),4===this.frameNum?(this.attackMonster(),this.detectRole(),this.frameNum=0):this.frameNum++,!1===this.completeGame){for(var n in this.roleQuene)this.roleQuene[n].info.inQuene>0&&(this.quenePos[this.roleQuene[n].info.inQuene]=new a(this.roleQuene[n].agent.pos.x,this.roleQuene[n].agent.pos.y));for(var o in this.roleQuene)if(this.roleQuene[o].info.role_id!==this.owner.info.role_id&&this.roleQuene[o].info.inQuene>1){var s=this.quenePos[this.roleQuene[o].info.inQuene],r=this.quenePos[this.roleQuene[o].info.inQuene-1],u=h.distance(s,r);if(u>80){var l=new h;l.set(0,0),h.subtract(l,r,s),h.subtract(r,r,new a(70*l.x/u,70*l.y/u)),this.roleQuene[o].moveToTarget(r)}}}},t.attackMonster=function(){if(this.owner){var e=IS(m);for(var i in e.monsterMap){if(h.distance(e.monsterMap[i].pos,this.owner.position)<w)for(var t=0;t<this.units.length;t++){var n=this.units[t];if(2===n.type&&n.id==="monster:"+e.monsterMap[i].monster_id){n.destroy(),this.units.splice(t,1),delete this.unitMap[n.id],delete e.monsterMap[i];break}}}}},t.detectRole=function(){var e=this;if(this.owner){var i=IS(m);for(var t in i.roleMap){if(h.distance(i.roleMap[t].pos,this.owner.position)<M&&0===i.roleMap[t].inQuene){if(i.roleMap[t].role_level===this.owner.info.role_level&&0===i.roleMap[t].inQuene)for(var n in this.queneNum++,i.roleMap[t].inQuene=this.queneNum,this.roleQuene)this.roleQuene[n].info.role_id==i.roleMap[t].role_id&&(this.roleQuene[n].info.inQuene=this.queneNum);if(3===this.queneNum){2===i.roleMap[t].role_level&&(this.completeGame=!0,p.showBoxTip({tip:"您已通关！",btnCnt:1,func:function(i){e.destroy(),uiMgr.getOpenView("ComposeGameMapSceneView").destroy();var t=IS(d).getRewardInfo(2);t&&2!=t.status&&IS(c).repTakeReward(2)},ensure:GetLanguage(200129)})),delete i.roleMap[2],delete i.roleMap[3],i.roleMap[1].inQuene=1;for(var o=0;o<this.roleQuene.length;o++)for(var s=0;s<this.units.length;s++){var r=this.units[s];if(1===r.type&&(r.id==="role:"+this.roleQuene[o].info.role_id&&this.roleQuene[o].info.inQuene>0)){r.destroy(),this.units.splice(s,1),delete this.unitMap[r.id];break}}for(var a=this.roleQuene.length-1;a>=0;a--)this.roleQuene[a].info.inQuene>0&&(this.roleQuene[a].destroy(),this.roleQuene.splice(a,1));this.owner.info.role_level++,this.owner.info.figure.job_figure=_[this.owner.info.role_level],this.owner.info.pos=this.owner.agent.pos,this.owner.info.inQuene=1;var u=new C(this,this.owner.info);this.owner=u,this.roleQuene.splice(0,0,u),this.queneNum=1,this.roleQuene[0].info.inQuene=1,this.mapCamera.follow=this.owner,this.units.splice(0,0,u)}}}}},t.loadAllUnit=function(){for(var e=0;e<this.units.length;e++){var i=this.units[e];1===i.type&&(i.destroy(),this.units.splice(e,1),e--,delete this.unitMap[i.id])}this.owner=null;var t=IS(m),n=t.roleMap;for(var o in n){var s=n[o],r=new C(this,s);1===s.role_id&&(this.owner=r,this.queneNum++,this.owner.info.inQuene=this.queneNum,this.mapCamera.follow=r),this.units.push(r),this.unitMap[r.id]=r,this.roleQuene.push(r)}var a=t.monsterMap;for(var u in a){var l=a[u],h=new y(this,l,l.monster_type);this.units.push(h),this.unitMap[h.id]=h}},t.moveOwner=function(e){if(this.owner){this.owner.moveType;this.owner.moveToDir(e),IS(m).roleMap[this.owner.info.role_id].pos=this.owner.info.pos}},t._updateDepth=function(){this.units.sort((function(e,i){var t=1,n=0,o=e.position.y-i.position.y;return(t-=100*o)-(n+=100*o)}));for(var e=0;e<this.units.length;++e){this.units[e].depth=e}},e}());t._RF.pop()}}}));

