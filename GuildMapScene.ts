System.register("chunks:///_virtual/GuildMapScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./V2.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./PolyNav2D.ts","./BagDefine.ts","./ChapterDataCache.ts","./MessageView.ts","./GuildWarControl.ts","./GuildWarDefine.ts","./GvGControl.ts","./GvGDataCache.ts","./GvGDefine.ts","./RoleDataCache.ts","./RoleDefine.ts","./GuildControl.ts","./GuildDataCache.ts","./GuildDefine.ts","./SceneCamera9.ts","./SceneLine.ts","./SceneUnit3.ts","./UIDefine.ts"],(function(e){"use strict";var t,i,n,o,s,a,d,h,r,l,c,u,f,v,p,G,g,S,m,w,I,C,_,T,b,y,P,E,k,L,M,R,D,U,V,x,B,A,N,O,F,H,K,W;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,n=e.Prefab,o=e.UITransform,s=e.Node,a=e.Vec3,d=e.Vec2,h=e.Button,r=e.Label,l=e.js,c=e.isValid,u=e.find,f=e.Camera},function(e){v=e.ChapterType},function(e){p=e.V2},function(e){G=e.RedPointType},function(e){g=e.RedPointMgr},function(e){S=e.default},function(e){m=e.default},null,function(e){w=e.ConfigGlobal},function(e){I=e.default},function(e){C=e.PolyNav2D},function(e){_=e.BagEventDefine},function(e){T=e.ChapterDataCache},function(e){b=e.default},function(e){y=e.default},function(e){P=e.GuildBossEventDefine},function(e){E=e.default},function(e){k=e.GvGDataCache},function(e){L=e.GvGEventDefine,M=e.GvGStep},function(e){R=e.RoleDataCache},function(e){D=e.RoleEventDefine,U=e.RoleRedPointSystemEnum},function(e){V=e.default},function(e){x=e.default},function(e){B=e.GuildEventDefine,A=e.RoleUpdateFlag},function(e){N=e.SceneCamera},function(e){O=e.SceneLine},function(e){F=e.SceneEffect,H=e.SceneRole,K=e.SceneBox},function(e){W=e.OpenFunction}],execute:function(){var j;i._RF.push({},"d151dROJzpOW6ugQUMENvS9","GuildMapScene",void 0);e("GuildMapScene",function(){function e(e){this.node=void 0,this.units=[],this.unitMap={},this.view=void 0,this.mapCamera=new N,this.owner=void 0,this.nodeUnit=void 0,this.nodeUnitHub=void 0,this.polyNav=void 0,this.ut=void 0,this.sceneLine=void 0,this.onLoadViewSuccess=void 0,this.startTouchPos=void 0,this.movePaths=[],this.collectPointTime=0,this.collectNum=0,this.btnSchdule=void 0,this.btnGvG=void 0,this.txtGvGStatus=void 0,this.nodeGvGSpeState=void 0,this.gvgEffect=void 0,this.fireEffect=void 0,this.speStartTime=void 0,this.speEndTime=void 0,this.pickingTimer=0,this.checkPickingTime=0,this.counting=0,j=u("SceneRoot"),this.view=e,this.mapCamera.nodeCamera=S.findChild(j,"SceneCamera"),this.mapCamera.camera=this.mapCamera.nodeCamera.getComponent(f)}var i=e.prototype;return i.load=function(){var e=this;this.node||(null!=this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/guild/GuildMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onLoadViewSuccess=function(t){if(e.onLoadViewSuccess=null,!t.error&&null!=t.item&&null!=t.item.asset){var i=t.item.asset,n=nodeInstantiate.instantiate(i);e.node=n,n.setParent(j),e.onInit()}},resourceMgr.loadRes("ui/module/guild/GuildMapScene",n,this.onLoadViewSuccess))},i.onInit=function(){var e=this;this.nodeUnit=S.findChild(this.node,"unit"),this.ut=this.nodeUnit.getComponent(o),this.nodeUnitHub=S.findChild(this.node,"unitHub");var t=this.view;this.sceneLine=new O(S.findChild(this.node,"nodeLine")),this.polyNav=S.findChildComponent(this.node,"polyNav2D",C);var i=S.findChild(this.node,"map_jiazu");t.addComponentCallbackListener(i,s.EventType.TOUCH_END,(function(t){if(e.owner){var i=t.getLocation(),n=new a(i.x,i.y,0),o=e.mapCamera.camera.screenToWorld(n);o.add3f(2e3,0,0),e.moveToTarget(o)}}));var n=S.findChild(this.node,"nodeClickBtn/btnInfo");t.addRedPoint("GuildMainView/btnInfo",S.findChild(n,"btnInfo-001/Label"),new d(70,25),G.Dot),t.addComponentCallbackListener(n,h.EventType.CLICK,(function(){uiMgr.openView("GuildView")}));var c=S.findChild(this.node,"nodeClickBtn/btnShop");t.addComponentCallbackListener(c,h.EventType.CLICK,(function(){uiMgr.openView("GuildStoreView")}));var u=S.findChild(this.node,"nodeClickBtn/btnBoss_1"),f=S.findChild(this.node,"nodeClickBtn/btnBoss_1/btnBoss_1/Label");IS(g).addRedPoint("guild_single_boss",f,new d(76,22)),IS(g).addRedPoint("guild_single_boss_box",f,new d(76,23)),IS(g).changeValue("guild_single_boss_box",IS(x).GetGuildBossRedNum()),IS(g).changeValue("guild_single_boss",IS(x).GetGuildBossRedNum()),t.addComponentCallbackListener(u,h.EventType.CLICK,(function(){IS(V).send_29_21(1)}));var v=S.findChild(this.node,"nodeClickBtn/btnBoss_2");t.addComponentCallbackListener(v,h.EventType.CLICK,(function(){IS(R).CheckFuncOpen(W.FUNC_LEAGUE_GVE_CHAPTER,!0)&&IS(y).reqGuildBossInfo()})),this.btnGvG=S.findChild(this.node,"nodeClickBtn/btnGvG"),IS(g).addRedPoint("guild_gvg",this.btnGvG,new d(85,-40)),t.addComponentCallbackListener(this.btnGvG,h.EventType.CLICK,(function(){e.onGvGClick()})),this.txtGvGStatus=S.findChildComponent(this.node,"nodeClickBtn/btnGvG/txtState",r),this.nodeGvGSpeState=S.findChild(this.node,"nodeClickBtn/btnGvG/speState"),this.btnSchdule=S.findChild(this.node,"nodeClickBtn/btnSchdule"),t.addComponentCallbackListener(this.btnSchdule,h.EventType.CLICK,(function(){uiMgr.openView("GuildSchduleView")})),this.open(),this.speStartTime=new Date(l.formatStr("%s/%s/%s %s:%s:%s",2023,11,13,0,0,0)).getTime()/1e3,this.speEndTime=new Date(l.formatStr("%s/%s/%s %s:%s:%s",2023,11,19,23,59,59)).getTime()/1e3},i.registerEvent=function(){var e=this.view;e.addEvent(B.GUILD_BOX_SHOW,this.showBox,this),e.addEvent(_.GOODS_INFO_UPDATE,this.updateItemCheck,this),e.addEvent(P.TYPE_SOLO_BOX_INFO_UPDATE,this.updateItemCheck,this),e.addEvent(L.GVG_INFO_UPDATE,this.onGvGInfoUpdate,this),e.addEvent(L.GVG_ROAD_INFO_UPDATE,this.updateGvGRed,this),e.addEvent(L.GVG_RED_POINT_UPDATE,this.updateGvGRed,this),e.addEvent(D.ROLE_RED_POINT_LIST_UPDATE,this.updateGvGRed,this),e.addEvent(D.ROLE_RED_DETAIL_UPDATE,this.onRoleRedDetailUpdate,this)},i.open=function(){if(j.active||(j.active=!0),this.node)return this.node.active=!0,this.registerEvent(),void this.onAfterOpen();this.load()},i.close=function(){j.active&&(j.active=!1),this.node&&(this.node.active=!1),null!=this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/guild/GuildMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onBeforeClose()},i.destroy=function(){this.close(),this.node&&(this.node.destroy(),resourceMgr.releaseResRef("ui/module/guild/GuildMapScene"),this.node=null)},i.onAfterOpen=function(){normalEvent.emit(B.GUILD_SCENE_LOAD_FINISH),this.checkPickingTime=1,this.updateGvGSpeState(),IS(E).reqGvGInfo(),IS(V).send_29_24(IS(x).enterPos,0),this.updateGvGStatus(),this.updateGvGRed(),IS(g).changeValue("GuildMainView/btnInfo",IS(x).GetGuildRedNum()),this.tryAddFireEffect()},i.updateGvGSpeState=function(){if(this.speStartTime){var e=m.serverTime,t=e>=this.speStartTime&&e<=this.speEndTime;this.nodeGvGSpeState.active=t,this.txtGvGStatus.node.active=IS(k).step>M.NoInfo&&!t}},i.updateItemCheck=function(){IS(g).changeValue("guild_single_boss",IS(x).GetGuildBossRedNum())},i.tryAddFireEffect=function(){if(!this.fireEffect){var e=new F(this,"prefab/ui-effect/MX_tx_huoba");e.id="eff:2",this.unitMap[e.id]=e,this.units.push(e),e.position=new p(this.btnSchdule.position.x,this.btnSchdule.position.y),this.fireEffect=e}},i.onBeforeClose=function(){if(null!=this.owner){for(var e,i=t(this.units);!(e=i()).done;){e.value.destroy()}this.sceneLine.closeLine(),this.mapCamera.follow=null,this.units.length=0,this.unitMap={},this.owner=null,this.gvgEffect=null,this.fireEffect=null,this.closePickingBox()}},i.onDestroy=function(){},i.moveOwner=function(e){if(this.owner){this.sceneLine.closeLine();var t=this.owner.moveType;this.owner.moveToDir(e),2!=t&&(this.movePaths.length=0,this.collectPointTime=.16),1!=t&&0!=this.owner.moveType||(this.movePaths.push(new d(this.owner.position.x,this.owner.position.y)),IS(V).send_29_26(this.movePaths))}},i.moveToTarget=function(e){if(this.owner&&this.owner.moveToTarget(e)){var t=I.copyArray(this.owner.agent.activePath);IS(V).send_29_26(t),this.sceneLine.showLine(t)}},i.boxClick=function(e){if(this.owner){var t=IS(x).boxMap;if(this.owner.rect.intersects(e.rect)){var i=t[e.uid];if(i&&i.role_list&&i.role_list.length>0&&i.role_list.includes(Number(IS(R).GetRoleId())))return void b.showFlyTip(GetLanguage(200339));var n=IS(x).boxInfo;n&&n.round>0&&this.checkPickingBox(0)}else this.moveToTarget(new d(e.position.x,e.position.y))}},i._updateDepth=function(){this.units.sort((function(e,t){var i=1,n=0,o=e.position.y-t.position.y;return(i-=100*o)-(n+=100*o)}));for(var e=0;e<this.units.length;++e){this.units[e].depth=e}},i.onUpdate=function(e){if(this.node){this.updateGvGSpeState();var t=IS(x);0!=t.roleUpdateFlag&&(t.roleUpdateFlag&A.All&&this.loadAllPlayer(),t.roleUpdateFlag&A.Add&&this.addPlayer(),t.roleUpdateFlag&A.Del&&this.delPlayerOut(),t.roleUpdateFlag&A.Move&&this.movePlayer(),t.roleUpdateFlag&A.Break&&this.breakPlayer()),t.roleUpdateFlag=0,this._updateDepth();for(var i=0;i<this.units.length;i++){var n=this.units[i];n.del?(n.destroy(),this.units.splice(i,1),i--):n.update(e)}if(this.owner){this.mapCamera.onUpdate(),this.owner.agent.isMove||this.sceneLine.closeLine(),2==this.owner.moveType&&(this.collectPointTime<=0&&(this.movePaths.push(new d(this.owner.position.x,this.owner.position.y)),this.collectNum++,this.collectNum>=6&&(IS(V).send_29_26(I.copyArray(this.movePaths)),this.movePaths.length=0,this.collectNum=0),this.collectPointTime=.16+e),this.collectPointTime-=e);var o=IS(x).boxInfo;o&&o.round>0&&this.checkPickingBox(e),IS(x).enterPos.set(this.owner.position.x,this.owner.position.y)}var s=IS(T),a=s.currentLoadType==v.Main||s.chapterType==v.Main;j.active!=a&&(j.active=a)}},i.loadAllPlayer=function(){for(var e=0;e<this.units.length;e++){var t=this.units[e];1==t.type&&(t.destroy(),this.units.splice(e,1),e--,delete this.unitMap[t.id])}this.owner=null;var i=IS(x).roleMap;for(var n in i){var o=i[n],s=new H(this,o);this.units.push(s),this.unitMap[s.id]=s,o.role_id==IS(R).GetRoleId()&&(this.owner=s,this.mapCamera.follow=s)}},i.addPlayer=function(){for(var e,i=IS(x),n=i.roleMap,o=i.roleActions[A.Add],s=t(o);!(e=s()).done;){var a=e.value,d="role:"+a;if(this.unitMap[d]){var h=this.unitMap[d];this.units.splice(this.units.indexOf(h),1),h.destroy(),delete this.unitMap[d]}var r=n[a],l=new H(this,r);this.units.push(l),this.unitMap[l.id]=l}o.clear()},i.delPlayerOut=function(){for(var e,i=IS(x).roleActions[A.Del],n=t(i);!(e=n()).done;){var o="role:"+e.value;this.unitMap[o]&&(this.unitMap[o].del=!0,delete this.unitMap[o])}i.clear()},i.movePlayer=function(){for(var e,i=IS(x),n=i.roleMap,o=i.roleActions[A.Move],s=t(o);!(e=s()).done;){var a=e.value,d="role:"+a;if(this.owner&&this.owner.id!=d){var h=this.unitMap[d];h&&!h.del&&(h.agent.activePath=n[a].pos_list,h.moveType=1,h.agent.isMove=!0)}}o.clear()},i.breakPlayer=function(){for(var e,i=IS(x),n=i.roleMap,o=i.roleActions[A.Break],s=t(o);!(e=s()).done;){var a=e.value,d="role:"+a;if(this.owner&&this.owner.id!=d){var h=this.unitMap[d];h&&!h.del&&c(h.nodeActive)&&(h.nodeActive.active=1!=n[a].break,h.titleicon.active=1!=n[a].break)}}},i.showBox=function(){for(var e=0;e<this.units.length;e++){var t=this.units[e];2==t.type&&(t.destroy(),this.units.splice(e,1),e--,delete this.unitMap[t.id])}var i=IS(x).boxInfo;if(null!=i&&0!=i.round){var n=IS(x).boxMap;for(var o in n){var s=n[o],a=new K(this,s);this.units.push(a),this.unitMap[a.id]=a}}},i.closePickingBox=function(){this.view.removeTimer(this.pickingTimer),this.pickingTimer=0,this.counting=0,this.owner&&this.owner.refreshPickingState(this.counting)},i.checkPickingBox=function(e){var i=this;if(0==this.pickingTimer)if(this.checkPickingTime>0)this.checkPickingTime-=e;else{this.checkPickingTime=1;for(var n,o=!1,s=t(this.units);!(n=s()).done;){var a=n.value;if(2==a.type&&this.owner.rect.intersects(a.rect)){o=!0;break}}if(o){var d=IS(x).boxMap,h=this.view;this.pickingTimer=h.addTimer(.16,-1,(function(){var e=IS(x).boxInfo;if(null!=e&&0!=e.round){for(var n,o=!1,s=null,a=t(i.units);!(n=a()).done;){var h=n.value;2==h.type&&(i.owner.rect.intersects(h.rect)&&(s=d[h.uid],o=!0))}if(s&&s.role_list&&s.role_list.length>0&&s.role_list.includes(Number(IS(R).GetRoleId())))return i.closePickingBox(),void b.showFlyTip(GetLanguage(200339));o?(i.counting+=.16,i.counting>=w.treasure_hunt_pick_time&&(i.closePickingBox(),IS(V).send_29_36(s)),i.owner.refreshPickingState(i.counting)):(i.closePickingBox(),b.showFlyTip(GetLanguage(200340)))}else i.closePickingBox()}))}}},i.onGvGClick=function(){var e=IS(k).step;if(e!=M.NoInfo){if(e!=M.SignUp&&e!=M.Matching)return 0==IS(k).ifJoin?(b.showFlyTip(GetLanguage(200344)),void uiMgr.openView("GvGStoreView")):3==IS(k).ifJoin?(b.showFlyTip(GetLanguage(200345)),void uiMgr.openView("GvGStoreView")):2==IS(k).ifJoin?(b.showFlyTip(GetLanguage(200358)),void uiMgr.openView("GvGStoreView")):void uiMgr.openView("GvGMapView");uiMgr.openView("GvGSignUpView")}else b.showFlyTip(GetLanguage(200343))},i.updateGvGStatus=function(){if(IS(k).step<=M.NoInfo)this.clearGvGEffect(),this.txtGvGStatus.node.active=!1;else{var e;switch(this.tryAddGvGEffect(),this.txtGvGStatus.node.active=!0,IS(k).step){case M.SignUp:case M.Matching:e=GetLanguage_UI(999000231);break;case M.Ready:e=GetLanguage_UI(999000229);break;case M.Adjust:e=GetLanguage_UI(999000234);break;case M.Waiting:e=GetLanguage_UI(999000230);break;case M.Fighting:e=GetLanguage_UI(999000235);break;case M.Showing:e=GetLanguage_UI(999000232)}this.txtGvGStatus.string=e}},i.clearGvGEffect=function(){this.gvgEffect&&(this.unitMap[this.gvgEffect.id],this.gvgEffect.del=!0,this.gvgEffect=null)},i.tryAddGvGEffect=function(){if(!this.gvgEffect){var e=new F(this,"prefab/ui-effect/MX_tx_chuansongmen_pack");e.id="eff:1",this.unitMap[e.id]=e,this.units.push(e),e.position=new p(this.btnGvG.position.x,this.btnGvG.position.y+40),this.gvgEffect=e}},i.updateGvGRed=function(){IS(g).changeValue("guild_gvg",IS(k).getGvGRedPoint())},i.onGvGInfoUpdate=function(){this.updateGvGRed(),this.updateGvGStatus()},i.onRoleRedDetailUpdate=function(e){e==U.System_Guild&&this.updateGvGRed()},e}());i._RF.pop()}}}));
