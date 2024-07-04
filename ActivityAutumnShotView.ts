System.register("chunks:///_virtual/ActivityAutumnShotView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./SpineSkeleton.ts","./ConfigGlobal.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./RoleDataCache.ts","./RoleDefine.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityAutumnDataCache.ts","./UIDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,s,h,a,d,u,c,r,g,f,l,m,p,v,S,I,C,y,T,A,M,b,_,E,U,w,R,x,L,P,B,G,O,k,V,D;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button,o=t.Label,s=t.Vec2,h=t.Sprite,a=t.HorizontalTextAlignment,d=t.RichText,u=t.Widget,c=t.UITransform,r=t.js,g=t.Node,f=t.ProgressBar,l=t.RigidBody2D,m=t.CircleCollider2D,p=t.Contact2DType,v=t.sys,S=t.Vec3},function(t){I=t.audioMgr},function(t){C=t.RedPointType},function(t){y=t.RedPointMgr},function(t){T=t.default},function(t){A=t.default},function(t){M=t.default},null,function(t){b=t.SpineSkeleton},function(t){_=t.ConfigGlobal},function(t){E=t.BagEventDefine},function(t){U=t.BagModel},function(t){w=t.default},function(t){R=t.RoleDataCache},function(t){x=t.RoleEventDefine},function(t){L=t.default},function(t){P=t.default},function(t){B=t.ActivityType,G=t.ActivityEventDefine,O=t.ActivityState},function(t){k=t.default},function(t){V=t.OpenFunction},function(t){D=t.BaseView}],execute:function(){n._RF.push({},"9b4f2N01kFJQ4rKD22DPxUD","ActivityAutumnShotView",void 0);var N=_.autumn_strength_dailycap[1],H=1043,F=_.autumn_stage_pass_condition,K=[1,2,3];t("default",function(t){function n(){var i;return(i=t.call(this)||this).banDefeat=!0,i.txtChapter=void 0,i.txtResNum=void 0,i.curChapter=0,i.curChapterCfgId=0,i.isMoving=!1,i.isMovingOn=!1,i.nodeUnitParent=void 0,i.nodeUnitItem=void 0,i.unitItems=void 0,i.unitIdToInfo={},i.usingShotId=0,i.usingShotCfg=void 0,i.touchList=[],i.nodeCancel=void 0,i.nodeCancelOut=void 0,i.nodeCancelIn=void 0,i.cancelPosition=void 0,i.curShottingItem=void 0,i.curShottingRig=void 0,i.nodeShottingParent=void 0,i.utShottingParent=void 0,i.time=0,i.spineSlingShot=void 0,i.boneA=void 0,i.utSlingShot=void 0,i.oriBoneAPosX=void 0,i.oriBoneAPosY=void 0,i.shotIdToItem={},i.txtTime=void 0,i.imgSwitch=void 0,i.oriSpinePos=void 0,i.startTouchMove=!1,i.oriRotation=void 0,i.tempDirX=0,i.endTime=0,i.nodeEdge1=void 0,i.nodeEdge2=void 0,i.nodeEdge3=void 0,i.nodeEdge4=void 0,i.isWatingEnd=!1,i.widgetMap=void 0,i.name="ActivityAutumnShotView",i.url="ui/module/autumn/ActivityAutumnShotView",i}i(n,t);var _=n.prototype;return _.onInit=function(){var t=this,i=this.findChild("bottom/btnClose");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.isMoving?w.showFlyTip(GetLanguage(200758)):t.close()})),this.nodeEdge1=this.findChild("map/edge1"),this.nodeEdge2=this.findChild("map/edge2"),this.nodeEdge3=this.findChild("map/edge3"),this.nodeEdge4=this.findChild("map/edge4"),this.nodeEdge1.active=!1,this.nodeEdge2.active=!1,this.nodeEdge3.active=!1,this.nodeEdge4.active=!1,this.txtTime=this.findChildComponent("top/txtTime",o);var n=this.findChild("bottom/btnVitality");this.addRedPoint("autumn_game_vitality",n,new s(24,24),C.Dot),this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){uiMgr.openView("ActivityAutumnVitalityFetchView")}));var g=this.findChild("bottom/btnGift");this.addComponentCallbackListener(g,e.EventType.CLICK,(function(){IS(R).CheckFuncOpen(V.FUNC_AUTUMN_ACTIVITY,!0)&&(t.isMoving?w.showFlyTip(GetLanguage(200758)):uiMgr.openView("HorseCarnivalGiftView",B.AutumnTurn))}));var f=this.findChild("bottom/btnGuild");this.addComponentCallbackListener(f,e.EventType.CLICK,(function(){uiMgr.openView("ActivityAutumnShotGuideView")}));var l=this.findChild("bottom/btnInvate");l.active=!1,this.addRedPoint("AutumnShare_redPoint",l,new s(34,10)),this.addComponentCallbackListener(l,e.EventType.CLICK,(function(){t.isMoving?w.showFlyTip(GetLanguage(200758)):uiMgr.openView("ShareActView")}));var m=this.findChild("bottom/btnRank");this.addComponentCallbackListener(m,e.EventType.CLICK,(function(){uiMgr.openView("RankActView")}));var p=this.findChild("map/btnLog");this.addComponentCallbackListener(p,e.EventType.CLICK,(function(){uiMgr.openView("ActivityAutumnRewardHistoryView")}));var v=this.findChild("map/btnSwitch");this.addComponentCallbackListener(v,e.EventType.CLICK,(function(){t.isMoving?w.showFlyTip(GetLanguage(200758)):uiMgr.openView("ActivityAutumnShotSwitchView",t.usingShotId)})),this.imgSwitch=this.findChildComponent("map/btnSwitch/imgIcon",h);var S=this.findChild("top/title/btnTip");this.addComponentCallbackListener(S,e.EventType.CLICK,(function(){w.showBoxTip({tip:GetLanguage(200745),btnCnt:1,horizontalAlign:a.LEFT})})),this.txtChapter=this.findChildComponent("top/title/txtChapter",o),this.txtResNum=this.findChildComponent("resRoot/resItem/txtNum",d),this.nodeUnitParent=this.findChild("map/UnitParent"),this.nodeUnitItem=this.findChild("map/UnitParent/Unit"),this.nodeUnitItem.active=!1,this.nodeCancel=this.findChild("map/cancelArea"),this.cancelPosition=this.nodeCancel.worldPosition,this.nodeCancelOut=this.findChild("map/cancelArea/cancelArea1"),this.nodeCancelIn=this.findChild("map/cancelArea/cancelArea2");var I=this.findChild("map");this.widgetMap=I.getComponent(u),this.widgetMap.scheduleOnce((function(){t.nodeEdge1.active=!0,t.nodeEdge2.active=!0,t.nodeEdge3.active=!0,t.nodeEdge4.active=!0}),0),this.addRedPoint("autumn_game_res",I,new s(85,-230),C.Dot),this.nodeShottingParent=this.findChild("map/shotting"),this.utShottingParent=this.nodeShottingParent.getComponent(c),this.spineSlingShot=this.findChildComponent("map/MX_tx_dangong",b),this.boneA=this.spineSlingShot.findBone("a"),this.oriBoneAPosX=this.boneA.x,this.oriBoneAPosY=this.boneA.y,this.utSlingShot=this.spineSlingShot.node.getComponent(c),this.oriRotation=this.boneA.data.rotation;for(var y=0;y<3;y++){var A=K[y],M=configMoonfestival_bullet.getDataByKey(A),_=this.findChild(r.formatStr("map/ready%s/%s",y+1,M.effect_name));this.shotIdToItem[A]={node:_,spine:_.getComponent(b),id:A,nodeGuide:T.findChild(_,"guideLine")},this.shotIdToItem[A].nodeGuide.active=!1}this.initTouch()},_.setGuideLineActive=function(t){this.shotIdToItem[this.usingShotId].nodeGuide.active=t},_.initTouch=function(){var t=this,i=this.utSlingShot.node;this.addComponentCallbackListener(i,g.EventType.TOUCH_START,(function(i){t.onTouchStart(i)})),this.addComponentCallbackListener(i,g.EventType.MOUSE_DOWN,(function(i){t.onTouchStart(i)})),this.addComponentCallbackListener(i,g.EventType.TOUCH_MOVE,(function(i){t.onTouchMove(i)})),this.addComponentCallbackListener(i,g.EventType.MOUSE_MOVE,(function(i){t.onTouchMove(i)})),this.addComponentCallbackListener(i,g.EventType.TOUCH_END,(function(i){t.onTouchEnd(i)})),this.addComponentCallbackListener(i,g.EventType.TOUCH_CANCEL,(function(i){t.onTouchEnd(i)})),this.addComponentCallbackListener(i,g.EventType.MOUSE_UP,(function(i){t.onTouchEnd(i)}))},_.registerUpdateHandler=function(){this.addEvent(G.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(E.GOODS_INFO_UPDATE,this.onGoodsInfoUpdate,this),this.addEvent(G.OnAutumnShotInfoBack,this.OnAutumnShotInfoBack,this),this.addEvent(G.OnAutumnShotFinish,this.OnAutumnShotFinish,this),this.addEvent(G.OnAutumnShotSwitch,this.OnAutumnShotSwitch,this),this.addEvent(G.OnAutumnShotPointFetch,this.updateVitalityRed,this),this.addEvent(x.HIDE_LIST_UPDATE,this.checkShowShare,this)},_.onAfterOpen=function(){var t=IS(P).GetActivityInfo(B.AutumnGame);if(null!=t&&t.state==O.Open){var i=t.state_time[O.Open];this.endTime=i.end_time,IS(L).send_24_54(),this.nodeCancel.active=!1,this.updateResShow(),this.trySetUsingShot(),this.updateRed(),this.updateTime(),this.setGuideLineActive(!1),this.checkShowShare(),IS(k).checkHasOpenGuide()||(uiMgr.openView("ActivityAutumnShotGuideView"),IS(k).setOpenGuide())}else this.close()},_.checkShowShare=function(){var t=this.findChild("bottom/btnInvate");GlobalDefine.IS_APP||IS(R).isHaveHideByType(9)?t.active=!1:t.active=!0},_.updateRed=function(){this.updateVitalityRed(),this.updateResRed(),IS(P).GetTaskRedNum(43)},_.updateVitalityRed=function(){IS(y).changeValue("autumn_game_vitality",IS(k).getGameVitalityFetchRed())},_.updateResRed=function(){IS(y).changeValue("autumn_game_res",IS(k).getGameCanShotRed())},_.updateChapter=function(){this.txtChapter.string=A.formatStrWithMirrorDeal(GetLanguage(200797),this.curChapter),this.updateChapterUnit()},_.updateChapterUnit=function(){var t=this;this.unitItems||(this.unitItems=[]);for(var i=configMoonfestival_stagetemplate.getDataByKey(this.curChapterCfgId).arrange,n=0,e=function(e){var o=i[e],s=o[0],h=o[1],a=configMoonfestival_unit.getDataByKey(h),d=t.getUnitInfoById(s);if(3==a.type&&d&&d.hp<=0)return"continue";var u=t.unitItems[n]||t.newUnitItem();u.id=s,u.node.active=!0,u.cfg=a,u.node.name=String(s),u.effect&&(t.removeUIEffect(u.effect),u.effect=null),u.effect=t.addUIEffect(r.formatStr("prefab/ui-effect/%s",a.effect_name),u.nodeEffect,-1,null,1,(function(t){var i=t.node;u.spine=i.getComponent(b),u.spine.needAnimation="idle"})),u.node.position=new S(o[2][0],o[2][1],0),u.nodePbNormalHp.active=3==a.type&&h!=F,u.nodePbBossHp.active=3==a.type&&h==F,t.updateSingleUnit(u),t.unitItems[n]=u,n+=1},o=0;o<i.length;o++)e(o);for(var s=n;s<this.unitItems.length;s++)this.hideUnitItem(this.unitItems[s])},_.newUnitItem=function(){var t=nodeInstantiate.instantiate(this.nodeUnitItem);return t.parent=this.nodeUnitParent,{node:t,nodeTx:T.findChild(t,"tx"),nodeEffect:T.findChild(t,"effect"),nodePbNormalHp:T.findChild(t,"pbNormalHp"),pbNormalHp:T.findChildComponent(t,"pbNormalHp",f),nodePbBossHp:T.findChild(t,"pbBossHp"),pbBossHp:T.findChildComponent(t,"pbBossHp",f)}},_.getUnitInfoById=function(t){return this.unitIdToInfo[t]},_.updateSingleUnitById=function(t){var i=this.getUnitItemById(t);null!=i&&this.updateSingleUnit(i)},_.getUnitItemById=function(t){if(null!=this.unitItems)for(var i=0;i<this.unitItems.length;i++){var n=this.unitItems[i];if(n.id&&n.id==t)return n}},_.updateSingleUnit=function(t){if(3==t.cfg.type){var i=this.getUnitInfoById(t.id),n=i?i.hp:t.cfg.enemy_hp,e=i?i.max_hp:t.cfg.enemy_hp;t.cfg.id==F?t.pbBossHp.progress=Math.min(1,n/e):t.pbNormalHp.progress=Math.min(1,n/e),n<=0?this.hideUnitItem(t):t.node.acitve=!0}},_.trySetUsingShot=function(){if(0!=this.usingShotId){var t=this.usingShotCfg.item_cost,i=t[0],n=t[1];if(!(IS(U).getGoodsCountByGoodsGtid(i)<n))return;this.usingShotId=0,this.usingShotCfg=null}var e=configMoonfestival_bullet.getDatas();for(var o in e){var s=e[o],h=s.item_cost,a=h[0],d=h[1];if(0==this.usingShotId&&(this.usingShotId=s.id,this.usingShotCfg=s),IS(U).getGoodsCountByGoodsGtid(a)>=d){this.usingShotId=s.id,this.usingShotCfg=s;break}}this.setUsingStatus()},_.setUsingStatus=function(){for(var t in this.shotIdToItem){var i=this.shotIdToItem[t];i.node.active=i.id==this.usingShotId}this.loadIcon(this.imgSwitch,"autumn_shot",this.usingShotCfg.picture)},_.trySetShottingItem=function(t,i){var n=this;this.curShottingItem&&(this.removeUIEffect(this.curShottingItem),this.curShottingRig=null,this.curShottingItem=null);var e=this.utShottingParent.convertToNodeSpaceAR(i);this.isMoving=!0,this.curShottingItem=this.addUIEffect(r.formatStr("prefab/ui-effect/%s",this.usingShotCfg.effect_name),this.nodeShottingParent,-1,new s(e.x,e.y),1,(function(i){i.node.getComponent(b).needAnimation="run",n.curShottingRig=i.node.getComponent(l),i.node.getComponent(m).on(p.BEGIN_CONTACT,n.onBeginContact,n);var e=new s(t.x*n.usingShotCfg.first_force,t.y*n.usingShotCfg.first_force);n.curShottingRig.scheduleOnce((function(){n.curShottingRig.linearVelocity=new s(0,0),i.node.active=!0,n.curShottingRig.scheduleOnce((function(){n.curShottingRig.applyForceToCenter(e,!0)}))})),n.addTimer(.5,1,(function(){n.isMovingOn=!0}))}))},_.onBeginContact=function(t,i){var n=Number(i.node.parent.parent.name),e=this.getUnitItemById(n);if(e)if(2!=e.cfg.type){if(e.spine.setAnimation(0,"hit",!1),e.spine.addAnimation(0,"idle",!0),I.playSound("zhongqiu_jizhong"),1!=e.cfg.type)if(2!=this.usingShotCfg.type){for(var o=this.getUnitInfoById(n),h=o?o.hp:e.cfg.enemy_hp,a=o?o.max_hp:e.cfg.enemy_hp,d=0,u=0;u<this.touchList.length;u++)this.touchList[u].k==n&&(d+=this.touchList[u].v*this.usingShotCfg.demage_num);var c=h-d,r=Math.max(0,c-this.usingShotCfg.demage_num);this.touchList.push({k:n,v:1}),normalTween.to(c,r,.5,(function(t,i){e.cfg.id==F?e.pbBossHp.progress=Math.min(1,i/a):e.pbNormalHp.progress=Math.min(1,i/a)})).call((function(){r<=0&&(e.node.active=!1)})).start()}else this.onBombContact()}else this.curShottingRig.linearVelocity=new s(this.curShottingRig.linearVelocity.x*(e.cfg.speed_effect/1e4),this.curShottingRig.linearVelocity.y*(e.cfg.speed_effect/1e4))},_.onBombContact=function(){var t=this;I.playSound("zhongqiu_shecheng"),this.isWatingEnd=!0,this.curShottingRig.scheduleOnce((function(){t.curShottingRig.node.active=!1}),0);for(var i=function(i){var n=t.unitItems[i],e=n.id;if(!e||0==e)return"continue";if(3!=n.cfg.type)return"continue";var o=t.getUnitInfoById(e),s=o?o.hp:n.cfg.enemy_hp,h=o?o.max_hp:n.cfg.enemy_hp,a=Math.max(0,s-t.usingShotCfg.demage_num);t.touchList.push({k:e,v:1}),t.addUIEffect("prefab/ui-effect/MX_tx_zhadan",n.nodeTx,1),normalTween.to(s,a,.5,(function(t,i){n.cfg.id==F?n.pbBossHp.progress=Math.min(1,i/h):n.pbNormalHp.progress=Math.min(1,i/h)})).call((function(){a<=0&&(n.node.active=!1)})).start()},n=0;n<this.unitItems.length;n++)i(n);this.addTimer(1,1,(function(){t.onMoveEnd()}))},_.onBeforeClose=function(){if(this.isWatingEnd=!1,this.isMoving=!1,this.isMovingOn=!1,this.unitIdToInfo={},this.usingShotId=0,this.usingShotCfg=null,this.touchList=[],this.curShottingRig=null,this.curShottingItem=null,this.time=0,this.endTime=0,this.unitItems)for(var t=0;t<this.unitItems.length;t++)this.hideUnitItem(this.unitItems[t])},_.hideUnitItem=function(t){t.spine=null,this.removeUIEffect(t.effect),t.id=null,t.node.active=!1},_.onDestroy=function(){if(this.unitItems)for(var t=0;t<this.unitItems.length;t++)this.unitItems[t].node.destroy();this.unitItems=null},_.updateTime=function(){var t=A.formatStrWithMirrorDeal(GetLanguage(200043),M.formatTimeStringForSecond(Math.max(0,this.endTime-M.serverTime)));v.uiMirror&&(t=M.formatTimeStringForSecond(Math.max(0,this.endTime-M.serverTime))),this.txtTime.string=t},_.onUpdate=function(t){if(this.time=this.time+t,!this.isWatingEnd&&this.isMoving&&this.curShottingRig&&0==this.curShottingRig.node.active&&(this.curShottingRig.node.active=!0),!(this.time<1)&&(this.time=0,0!=this.endTime&&this.updateTime(),this.isMovingOn&&this.curShottingRig)){var i=this.curShottingRig.linearVelocity;i.x*i.x+i.y*i.y<=.1&&this.onMoveEnd()}},_.onMoveEnd=function(){if(this.isMoving){for(var t=[],i={},n=0;n<this.touchList.length;n++){var e=this.touchList[n];i[e.k]||(i[e.k]=0),i[e.k]=i[e.k]+e.v}for(var o in i)t.push({k:Number(o),v:i[o]});IS(L).send_24_55(this.usingShotId,t),this.isMoving=!1,this.isMovingOn=!1,this.isWatingEnd=!1,this.shotIdToItem[this.usingShotId].node.active=!0,this.removeUIEffect(this.curShottingItem),this.curShottingRig=null,this.curShottingItem=null,this.touchList=[]}},_.updateResShow=function(){var t=IS(U).getGoodsCountByGoodsGtid(H);this.txtResNum.string=r.formatStr("<b><outline color=#000000 width=1><color=#ffd659>%s</color><color=#ffffff>/%s</color></outline></b>",t,N)},_.updateInfo=function(t){t.type==B.AutumnGame&&t.state!=O.Open&&this.close()},_.onGoodsInfoUpdate=function(t,i){i==H&&this.updateResShow(),i!=H&&1051!=i||(this.trySetUsingShot(),this.updateResRed())},_.OnAutumnShotInfoBack=function(t){this.curChapter=t.guanka_id,this.curChapterCfgId=t.cfg_id;for(var i=t.unit_list||[],n=0;n<i.length;n++)this.unitIdToInfo[i[n].id]=i[n];this.updateVitalityRed(),this.updateChapter()},_.OnAutumnShotFinish=function(t){for(var i=0;i<t.length;i++)this.unitIdToInfo[t[i].id]=t[i],this.updateSingleUnitById(t[i].id)},_.OnAutumnShotSwitch=function(t){this.usingShotId=t,this.usingShotCfg=configMoonfestival_bullet.getDataByKey(t),this.setUsingStatus()},_.onTouchStart=function(t){if(this.isMoving)w.showFlyTip(GetLanguage(200758));else{var i=this.usingShotCfg.item_cost;if(IS(U).getGoodsCountByGoodsGtid(i[0])<i[1])w.showFlyTip(GetLanguage(200817));else{var n=t.getUILocation(),e=new S(n.x,n.y,0);this.oriSpinePos=this.utSlingShot.convertToNodeSpaceAR(e),this.shotIdToItem[this.usingShotId].spine.setAnimation(0,"idle2",!0),this.spineSlingShot.setAnimation(0,"skill",!0),this.nodeCancel.active=!0,this.setGuideLineActive(!0),I.playSound("zhongqiu_lagong"),this.startTouchMove=!0}}},_.onTouchMove=function(t){if(this.startTouchMove){var i=t.getUILocation(),n=new S(i.x,i.y,0),e=n.x-this.cancelPosition.x,o=n.y-this.cancelPosition.y,h=Math.sqrt(e*e+o*o)<=50;this.nodeCancelIn.active=h,this.nodeCancelOut.active=!h;var a=this.utSlingShot.convertToNodeSpaceAR(n),d=new s(a.x-this.oriSpinePos.x,a.y-this.oriSpinePos.y).normalize(),u=-d.signAngle(s.UNIT_Y)/Math.PI*180+180;if(u>=0&&u<=70||u>=290&&u<=360){this.tempDirX=-d.x;var c=Math.min(150,s.distance(a,this.oriSpinePos));this.boneA.x=this.oriBoneAPosX+d.x*c,this.boneA.y=this.oriBoneAPosY+d.y*c,this.boneA.data.rotation=u}}},_.onTouchEnd=function(t){var i=this;if(this.startTouchMove){var n=t.getUILocation(),e=new S(n.x,n.y,0),o=e.x-this.cancelPosition.x,h=e.y-this.cancelPosition.y,a=Math.sqrt(o*o+h*h)<=50;if(this.nodeCancel.active=!1,this.setGuideLineActive(!1),a)this.shotIdToItem[this.usingShotId].spine.setAnimation(0,"idle",!0),this.spineSlingShot.setAnimation(0,"idle",!0),this.boneA.data.rotation=this.oriRotation;else{var d=this.utSlingShot.convertToNodeSpaceAR(e),u=new s(this.oriSpinePos.x-d.x,this.oriSpinePos.y-d.y).normalize();0==u.x&&0==u.y&&(u.x=0,u.y=1);var c=Math.cos(Math.PI/180*20),r=Math.sin(Math.PI/180*20),g=Math.cos(Math.PI/180*160);u.x>=0&&u.x>c&&(u.x=c,u.y=r),u.x<=0&&u.x<g&&(u.x=g,u.y=r),u.y<r&&(u.y=r,u.x=this.tempDirX>=0?c:g),this.trySetShottingItem(u,this.shotIdToItem[this.usingShotId].node.worldPosition),this.shotIdToItem[this.usingShotId].spine.setAnimation(0,"idle",!0),this.shotIdToItem[this.usingShotId].node.active=!1,this.spineSlingShot.setAnimation(0,"jieshu",!1),this.spineSlingShot.addAnimation(0,"idle",!0),this.addTimer(.5,1,(function(){i.boneA.data.rotation=i.oriRotation}))}this.startTouchMove=!1}},n}(D));n._RF.pop()}}}));

