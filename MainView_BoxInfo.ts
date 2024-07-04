System.register("chunks:///_virtual/MainView_BoxInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AudioMgr.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./BaseSubView.ts","./ItemIcon.ts","./SpineSkeleton.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./AdventureTitleDataCache.ts","./BagDefine.ts","./BagModel.ts","./ChapterDataCache.ts","./GuideModel.ts","./MessageView.ts","./EquipControl.ts","./EquipDataCache.ts","./EquipDefine.ts","./EquipModel.ts","./GainBuffDataCache.ts","./GainBuffDefine.ts","./PrivilegeDataCache.ts","./PrivilegeDefine.ts","./RoleControl.ts","./RoleDataCache.ts","./RoleDefine.ts","./NativeToJs.ts","./MainViewModel.ts","./UIDefine.ts"],(function(t){"use strict";var i,e,n,o,s,a,u,h,f,d,l,r,c,p,m,v,g,B,S,x,y,E,I,C,T,_,A,b,w,O,q,P,k,L,R,V,M,D,U,N,G,K,F,W,Q;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.Animation,a=t.Vec2,u=t.Sprite,h=t.Label,f=t.Vec3,d=t.js,l=t.sys},function(t){r=t.V2},function(t){c=t.audioMgr},function(t){p=t.RedPointType},function(t){m=t.RedPointMgr},function(t){v=t.default},function(t){g=t.default},null,function(t){B=t.BaseSubView},function(t){S=t.IconAseetType},function(t){x=t.SpineSkeleton},function(t){y=t.ConfigGlobal},function(t){E=t.default},function(t){I=t.AdventureTitleDataCache},function(t){C=t.BagEventDefine},function(t){T=t.BagModel},function(t){_=t.ChapterDataCache},function(t){A=t.GuideModel},function(t){b=t.default},function(t){w=t.default},function(t){O=t.EquipDataCache},function(t){q=t.EquipEventDefine,P=t.EquipChangeType},function(t){k=t.EquipModel},function(t){L=t.GainBuffDataCache},function(t){R=t.GainBuffEventDefine,V=t.GainBuffType,M=t.GainBuff},function(t){D=t.PrivilegeDataCache},function(t){U=t.PrivilegeCardEffect},function(t){N=t.default},function(t){G=t.RoleDataCache},function(t){K=t.ClientData},function(t){F=t.NativeToJs},function(t){W=t.MainViewModel},function(t){Q=t.OpenFunction}],execute:function(){var X;n._RF.push({},"d03367Yb3xLyZxC5IRwguKl","MainView_BoxInfo",void 0);var j=y.box_goods_id,H=y.box_delay_time/1e3,z={BattleHubView:!0,GuideView:!0},Y={defalut:0,L1:1,L2:2,L3:3},J=((X={})[1]="bai",X[2]="lv",X[3]="lan",X[4]="zi",X[5]="jin",X[6]="cheng",X[7]="hong",X[8]="fen",X[9]="cai",X[10]="liujin",X[11]="yongheng",X);t("default",function(t){function n(){var i;return(i=t.call(this)||this).nodeAutoOpen=void 0,i.nodeOpen=void 0,i.nodeWaiting=void 0,i.nodeLevel=void 0,i.txtNum=void 0,i.txtLevel=void 0,i.imgWating=void 0,i.btnOpen=void 0,i.btnAdventureTitle=void 0,i.spineBox=void 0,i.gearBox=void 0,i.spineBox1=void 0,i.yanEffect=void 0,i.aniTimer=void 0,i.txTimer=void 0,i.iconTimer=void 0,i.sellTimer=void 0,i.isPlayAni=void 0,i.PlayingAniTime=0,i.yanEffect2=void 0,i.sellTime=void 0,i.nodeTxRoot1=void 0,i.nodeTxRoot2=void 0,i.oriPos=void 0,i.animationAuto=void 0,i.animationSell=void 0,i.time=void 0,i.updateboxtime=void 0,i.updatebufftime=void 0,i.yaneffectQuality=void 0,i.nodeSpecialBuff=void 0,i.nodeBuff=void 0,i.resItems=void 0,i.bottomEffect=void 0,i.showIdle=!0,i.openBoxAni=!1,i.needSell=!1,i.needOkTip=!1,i.timeScale=1,i.needReCover=!1,i.nodeBottom=void 0,i.imgBottom=void 0,i.curSkin=void 0,i.effBox=void 0,i.imgNumBg=void 0,i.nodeBoxEffectRoot=void 0,i.nodeBoxLevel=void 0,i.name="MainView_BoxInfo",i}i(n,t);var B=n.prototype;return B.onInit=function(){var t=this;this.time=0,this.resItems=new Array,this.nodeAutoOpen=this.findChild("btnAutoOpen"),this.gearBox=this.findChildComponent("btnAutoOpen/imgGear",x),this.gearBox.setAnimation(0,"idle",!0),this.addComponentCallbackListener(this.nodeAutoOpen,o.EventType.CLICK,(function(){t.onAutoOpenClick()})),this.animationSell=this.findChildComponent("btnBox/MX_tx_chushou",s);var i=this.findChild("btnBox");this.nodeOpen=this.findChild("btnBox/imgBox"),this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){c.playSound("common_tubiao"),t.onOpenClick()})),this.btnOpen=i,this.btnAdventureTitle=this.findChild("btnAdventureTitle"),this.addRedPoint("AdventureTitle",this.btnAdventureTitle,new a(17,21),p.Dot),this.addComponentCallbackListener(this.btnAdventureTitle,o.EventType.CLICK,(function(){uiMgr.openView("AdventureTitleView")})),this.imgBottom=this.findChildComponent("btnBox/imgBottom",u),this.nodeBottom=this.imgBottom.node,this.imgNumBg=this.findChildComponent("btnBox/imgNumBg",u),this.nodeBoxEffectRoot=this.findChild("btnBox/imgBox/effect"),this.txtNum=this.findChildComponent("btnBox/txtNum",h),this.nodeWaiting=this.findChild("imgOpen"),this.imgWating=this.findChildComponent("imgEquip",u),this.addComponentCallbackListener(this.imgWating.node,o.EventType.CLICK,(function(){t.onOpenClick()}));var e=this.imgWating.node.position;this.oriPos=new f(e.x,e.y,e.z),this.nodeTxRoot1=this.findChild("txRoot1"),this.nodeTxRoot2=this.findChild("txRoot2"),this.txtLevel=this.findChildComponent("btnBox/imgBox/txtLevel",h);var n=this.findChild("levBtn");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){t.onLevelClick()})),this.addRedPoint("btnBox",this.txtLevel.node,new a(20,28),p.Dot),this.addComponentCallbackListener(this.txtLevel.node,o.EventType.CLICK,(function(){t.onLevelClick()})),this.nodeSpecialBuff=this.findChild("SpecialBuff");for(var r=1;r<=10;r++){var m=this.findChild(d.formatStr("resRoot/ResItem%s",r));m.active=!1;var g=m.position;l.uiMirror&&r>5&&this.loadIcon(v.findChildComponent(m,"imgIcon",u),"icon_item","3"),this.resItems.push({node:m,txtResCount:v.findChildComponent(m,"txtCount",h),posX:g.x,posY:g.y,resId:r<=5?1:3})}l.uiMirror&&(this.btnOpen.setScale(-1,1,1),this.nodeTxRoot1.setScale(-1,1,1),this.nodeTxRoot2.setScale(-1,1,1),this.txtNum.node.setScale(1,1,1),this.txtLevel.node.setScale(1,1,1))},B.registerUpdateHandler=function(){this.addEvent(q.EQUIP_LIST_UPDATE,this.onEquipListUpdate,this),this.addEvent(C.GOODS_INFO_UPDATE,this.onGoodsInfoUpdate,this),this.addEvent(C.GOODS_BOX_UPDATE,this.updateBoxNum,this),this.addEvent(q.BOX_INFO_UPDATE,this.onBoxInfoUpdate,this),this.addEvent(q.OPEN_EQUIP_EDITOR_VIEW,this.onOpenView,this),this.addEvent(q.AUTO_OPEN_STATUS_CHANGE,this.onAutoOpenStatusChange,this),this.addEvent(q.EQUIP_SELL,this.onEquipSell,this),this.addEvent(q.EQUIP_LIST_INIT,this.onEquipListInit,this),this.addEvent(R.GAINBUFF_INFO_UPDATE,this.onGainBuffUpdate,this),this.addEvent(q.BOX_SKIN_CHANGE,this.tryChangeBoxSkin,this)},B.onAfterOpen=function(){var t=this;this.tryChangeBoxSkin(),this.tryChangeBoxAni(),this.isPlayAni=!1,this.updateBoxNum(),this.updateBoxLevel(),this.updateBoxStatus(),this.onGainBuffUpdate(),IS(m).changeValue("btnBox",IS(O).getBoxProgressRedPoint()+IS(O).getBoxUpgradeRedPoint()),this.setIconFlop(),this.updateAutoAni(),this.updateboxtime=0,this.sellTime=0,IS(I).updateRed();var i=IS(G).getClientDataByNum(K.Equip,"auto_num");if(!i){var e=0;e=this.addTimer(1,-1,(function(){IS(G).GetLevel()>=20&&IS(W).checkGuideShow()&&(IS(A).openGuide(1020),i++,IS(N).send_3_29(K.Equip,1,"auto_num",String(i)),t.removeTimer(e))}))}this.updateBoxSkin()},B.tryChangeBoxSkin=function(){var t=this;if(!this.curSkin||this.curSkin!=IS(O).curSkin){this.curSkin=IS(O).curSkin;var i=configTreasure_skin.getDataByKey(this.curSkin);this.nodeBottom.active=i.bottom_icon&&""!=i.bottom_icon,i.bottom_icon&&""!=i.bottom_icon&&this.loadIcon(this.imgBottom,"main",i.bottom_icon),this.loadIcon(this.imgNumBg,"main",i.number_bg_icon);var e=i.shendeng_plot;this.nodeWaiting.position=new f(e[2][0],e[2][1],0),this.imgWating.node.position=new f(e[1][0],e[1][1],0),this.oriPos=new f(e[1][0],e[1][1],0),this.effBox&&(this.removeUIEffect(this.effBox),this.spineBox=null,this.nodeBoxLevel=null),this.effBox=this.addUIEffect(d.formatStr("prefab/ui-effect/%s",i.path),this.nodeBoxEffectRoot,-1,new a(e[0][0],e[0][1]),i.shendeng_scale/1e4,(function(i){var e=i.node;t.spineBox=e.getComponent(x),t.spineBox.needAnimation="idle",t.nodeBoxLevel=v.findChild(e,"level"),t.txtLevel.node.parent=t.nodeBoxLevel,t.txtLevel.node.position=new f(0,0,0),t.updateBoxSkin()}))}},B.updateBoxSkin=function(){if(null!=this.spineBox&&1==this.curSkin){var t,i=IS(k).getBoxInfo();t=E.isEmpty(i)?1:i.lv;var e=configTreasure_level.getDataByKey(t);this.spineBox.setSkin(e.skin),this.spineBox._defaultSkinIndex=Y[e.skin]}},B.onGainBuffUpdate=function(){var t={},i=IS(L).gain_buff_info[V.BoxBuff];if(i){this.nodeSpecialBuff.active=!0,this.nodeSpecialBuff.position=l.uiMirror?new f(143,88.512,0):new f(-127.66,88.512,0);for(var n,o=e(i);!(n=o()).done;){var s=n.value;t[s.k]=s.v}this.nodeBuff=new M(this.nodeSpecialBuff,this,V.BoxBuff);var a=configSpecil_buff.getDataByKey(V.BoxBuff);this.loadIcon(this.nodeBuff.icon,"icon_buff",a.state_icon),a.time>0?(this.nodeBuff.nodeTime.active=!0,this.updatebufftime=t[2]-g.serverTime,this.nodeBuff.txtTime.string=g.formatTimeForSecond(t[2]-g.serverTime)):this.nodeBuff.nodeTime.active=!1,a.quantity>0?(t[1]<=0&&(this.nodeSpecialBuff.active=!1),this.nodeBuff.txtNum.node.active=!0,this.nodeBuff.txtNum.string=t[1]+"/"+a.quantity):this.nodeBuff.txtNum.node.active=!1}else this.nodeSpecialBuff.active=!1},B.onEquipSell=function(t){var i=this;this.checkMainViewNoTabOpen()&&c.playSound("shendeng_tx_shoumai"),this.animationSell.play(),this.addTimer(.5,1,(function(){i.tryShowResFly(t)}))},B.tryShowResFly=function(t){for(var i=this,e=0,n=0,o=0;o<t.length;o++)1==t[o].gtid&&(e+=t[o].num),3==t[o].gtid&&(n+=t[o].num);var s=Math.floor(e/5),a=e-5*s,u={};if(a>0)for(var h=1;h<=a;h++)u[h-1]=!0;var l,r=Math.floor(n/5),c=n-5*r;if(c>0)for(var p=1;p<=c;p++)u[5+p-1]=!0;for(var m=0;m<this.resItems.length;m++){var v=this.resItems[m];v.node.setPosition(new f(v.posX,v.posY,0)),l=1==v.resId?s:r,v.txtResCount.string=d.formatStr("+%s",u[m]?l+1:l),v.node.active=!0}normalTween.to(0,1,1,(function(t,e){for(var n=0;n<i.resItems.length;n++){var o=i.resItems[n];o.node.setPosition(new f(o.posX,o.posY+20*e,0))}})).start().call((function(){for(var t=0;t<i.resItems.length;t++){i.resItems[t].node.active=!1}}))},B.updateAutoAni=function(){IS(k).getAutoOpen()?this.gearBox.setAnimation(0,"run",!0):this.gearBox.setAnimation(0,"idle",!0)},B.setIconFlop=function(){var t=this;normalTween.to(0,1,2,(function(i,e){var n;n=e<=.5?t.oriPos.y+20*e:t.oriPos.y+20*(1-e),t.imgWating.node.setPosition(t.oriPos.x,n,t.oriPos.z)})).loop(-1).start()},B.setRootActive=function(t){this.btnOpen.active=t},B.onUpdate=function(t){if(this.openBoxAni&&null!=this.time&&!(this.timeScale>2)){if(this.time=this.time+t,this.time>5&&(this.time=0,this.tryChangeBoxAni()),this.updateboxtime>0&&(this.updateboxtime=this.updateboxtime-t,this.updateboxtime<=0&&(this.updateboxtime=0,this.updateBoxStatus(!0,this.needSell,this.needOkTip))),this.sellTime>0&&(this.sellTime=this.sellTime-t,this.sellTime<=0&&(this.sellTime=0,IS(k).isAutoOpen))){var i=IS(k).getEmptyEquipIdList(!0,0);IS(w).reqSellEquip(i)}this.updatebufftime>0&&(this.updatebufftime=this.updatebufftime-t,this.updatebufftime<=0&&(this.updatebufftime=0,this.nodeSpecialBuff.active=!1),this.nodeBuff.txtTime.string=g.formatTimeForSecond(this.updatebufftime))}},B.tryChangeBoxAni=function(){this.openBoxAni&&this.showIdle&&(this.isPlayAni||(this.checkMainViewNoTabOpen()&&c.playSound("shendeng_tx_daiji"),this.spineBox&&1==this.curSkin&&this.spineBox.setAnimation(0,"idle",!1)))},B.boxFallAni=function(){this.spineBox&&(1==this.curSkin&&this.spineBox.addAnimation(0,"jiangluo",!1),this.spineBox.addAnimation(0,"idle",!1))},B.updateBoxNum=function(){this.txtNum.string=IS(T).getGoodsCountByGoodsGtid(j)},B.updateBoxLevel=function(){var t,i=IS(k).getBoxInfo();t=E.isEmpty(i)?1:i.lv,this.txtLevel.string=t},B.updateBoxSpineStatus=function(){var t=IS(k).getEmptyEquipIdList(!1,0),i=E.isEmpty(t);this.showIdle=i&&IS(T).getGoodsCountByGoodsGtid(j)>0},B.updateBoxStatus=function(t,i,e){var n=this;if(t||!this.isPlayAni){var o=IS(k).getEmptyEquipIdList(!0,0),s=E.isEmpty(o);if(this.nodeWaiting.active=!s,this.imgWating.node.active=!s,this.updateBoxSpineStatus(),s)return this.removeEffect(),this.isPlayAni=!1,void this.loadIcon(this.imgWating,"","",null,S.ICON_SPRITE);var a=o[0],u=IS(k).getEquipInfoByEquipId(a),h=configEquipment.getDataByKey(u.config_id);if(this.yaneffectQuality&&this.yaneffectQuality!=h.quality&&this.removeEffect(),this.yanEffect){var f=this.getUIEffect(this.yanEffect);if(f){var l=f.node;if(l){var c=l.getComponent(x);c&&(c.timeScale=1)}}}if(this.yanEffect2){var p=this.getUIEffect(this.yanEffect2);if(p){var m=p.node;if(m){var v=m.getComponent(x);v&&(v.timeScale=1)}}}if(this.loadIcon(this.imgWating,h.atlas,h.icon,null,S.ICON_SPRITE),!s&&null==this.yanEffect){this.yaneffectQuality=h.quality;var g=configTreasure_skin.getDataByKey(this.curSkin),B=d.formatStr(g.equip_path[0][0],J[h.quality]),y=d.formatStr("prefab/ui-effect/%s",B);if(this.yanEffect=this.addUIEffect(y,this.nodeTxRoot2,-1,new r(g.equip_path[0][1][0],g.equip_path[0][1][1]),g.equip_path[0][2],(function(t){var i=t.node.getComponent(x);i.timeScale=1,i.needAnimation="chixu"})),g.equip_path[1]){var I=d.formatStr(g.equip_path[1][0],J[h.quality]);this.yanEffect2=this.addUIEffect(d.formatStr("prefab/ui-effect/%s",I),this.nodeTxRoot2,-1,new r(g.equip_path[1][1][0],g.equip_path[1][1][1]),g.equip_path[1][2],(function(t){var i=t.node.getComponent(x);i.timeScale=1,i.needAnimation="chixu"}))}h.quality>=5&&(this.bottomEffect=this.addUIEffect("prefab/ui-effect/MX_tx_dizuo",this.btnOpen,-1,new r(0,-40),1))}t&&(i&&IS(k).isAutoOpen&&(this.sellTime=(H+.5)/this.timeScale),this.iconTimer=this.addTimer(.5/this.timeScale,1,(function(){n.isPlayAni=!1,e&&b.showFlyTip(GetLanguage(200442)),i&&IS(k).isAutoOpen||(!IS(k).isAutoOpen||n.checkMainViewNoTabOpen()?(o.length<=1?IS(k).tryOpenEquipEditView(o[0]):uiMgr.openView("EquipTempBagView"),null!=IS(k).waitShwoReward&&(uiMgr.openView("GoodsGetView",IS(k).waitShwoReward),IS(k).waitShwoReward=null)):n.needReCover=!0)})))}},B.checkMainViewNoTabOpen=function(){var t=uiMgr.checkOnlyOpenView2("MainView",z);if(null==t)return!1;for(var i,n=e(t.tabTypes);!(i=n()).done;){var o,s=i.value;if(null!=(o=t.getTabPanel(s,!1))&&o.isActive)return!1}return!0},B.clearTimers=function(){this.clearTimerByKey("aniTimer"),this.clearTimerByKey("txTimer"),this.clearTimerByKey("iconTimer"),this.clearTimerByKey("sellTimer")},B.clearTimerByKey=function(t){null!=this[t]&&(this.removeTimer(this[t]),this[t]=null)},B.onBeforeClose=function(){this.isPlayAni=!1,this.clearTimers()},B.onDestroy=function(){},B.onEquipListInit=function(){this.updateBoxStatus()},B.onEquipListUpdate=function(t,i){if(t==P.ADD){if(1==i)return;0==i&&IS(k).setAutoOpen(!1)}this.updateBoxStatus()},B.onGoodsInfoUpdate=function(t,i){i==j&&(l.now()-IS(_).lastKillRewardTime<2||(this.updateBoxNum(),this.updateBoxSpineStatus()))},B.onBoxInfoUpdate=function(){this.updateBoxLevel(),this.updateBoxSkin()},B.onAutoOpenStatusChange=function(){IS(k).getAutoOpen()||(this.sellTime=0),this.updateAutoAni()},B.onOpenView=function(t,i,e){var n=this;this.timeScale=IS(D).getPrivilegeCardValue(U.LAMSPEED)>0?2:1,this.clearTimers(),this.isPlayAni=!0,this.PlayingAniTime=g.getLocalTime();var o=this.spineBox;o&&(o.timeScale=this.timeScale,o.setAnimation(0,"hu1",!1),1!=this.curSkin&&o.addAnimation(0,"idle",!0)),this.checkMainViewNoTabOpen()&&c.playSound("shendeng_tx_daiji"),this.aniTimer=this.addTimer(.1/this.timeScale,1,(function(){n.tryPlayEffect(t,i,e)}))},B.removeEffect=function(){null!=this.yanEffect&&(this.removeUIEffect(this.yanEffect),this.yanEffect=null),null!=this.yanEffect2&&(this.removeUIEffect(this.yanEffect2),this.yanEffect2=null),this.bottomEffect&&(this.removeUIEffect(this.bottomEffect),this.bottomEffect=null),this.yaneffectQuality=null},B.tryPlayEffect=function(t,i,e){var n=this;if(!(this.timeScale>2)){if(this.removeEffect(),this.spineBox.timeScale=1,null==t)return this.spineBox&&1==this.curSkin&&this.spineBox.setAnimation(0,"idle2",!0),void(this.isPlayAni=!1);var o=configTreasure_skin.getDataByKey(this.curSkin);this.checkMainViewNoTabOpen()&&c.playSound(o.sound_id);var s=IS(k).getEquipInfoByEquipId(t);if(null==s)return this.spineBox&&1==this.curSkin&&this.spineBox.setAnimation(0,"idle2",!0),void(this.isPlayAni=!1);this.checkMainViewNoTabOpen()&&c.playSound("shendeng_tx_maoyan");var a=configEquipment.getDataByKey(s.config_id);this.yaneffectQuality=a.quality;var u=d.formatStr(o.equip_path[0][0],J[this.yaneffectQuality]),h=d.formatStr("prefab/ui-effect/%s",u);if(this.yanEffect=this.addUIEffect(h,this.nodeTxRoot2,-1,new r(o.equip_path[0][1][0],o.equip_path[0][1][1]),o.equip_path[0][2],(function(t){t.node.getComponent(x).timeScale=n.timeScale})),o.equip_path[1]){var f=d.formatStr(o.equip_path[1][0],J[a.quality]);this.yanEffect2=this.addUIEffect(d.formatStr("prefab/ui-effect/%s",f),this.nodeTxRoot2,-1,new r(o.equip_path[1][1][0],o.equip_path[1][1][1]),o.equip_path[1][2],(function(t){t.node.getComponent(x).timeScale=n.timeScale}))}a.quality>=5&&(this.bottomEffect=this.addUIEffect("prefab/ui-effect/MX_tx_dizuo",this.btnOpen,-1,new r(0,-40),1)),this.updateboxtime=.8/this.timeScale,this.needSell=i,this.needOkTip=e}},B.onAutoOpenClick=function(){if(IS(G).CheckFuncOpen(Q.FUNC_AUTO_OPEN,!0)){this.needReCover||IS(k).setAutoOpen(!1);var t=IS(k).getEmptyEquipIdList(!1,0);if(t.length<=0)uiMgr.openView("EquipAutoOpenView");else if(!this.isPlayAni){if(t.length<=1)return this.needReCover=!1,void IS(k).tryOpenEquipEditView(t[0]);this.needReCover=!1,uiMgr.openView("EquipTempBagView")}}},B.tryOpenMuti=function(){var t=IS(k).getEmptyEquipIdList(!1,0);if(t.length<=0)uiMgr.openView("EquipMultiOpenView");else if(t.length<=1){if(this.isPlayAni)return;IS(k).tryOpenEquipEditView(t[0])}else uiMgr.openView("EquipTempBagView")},B.onOpenClick=function(){if(this.needReCover||IS(k).setAutoOpen(!1),IS(G).GetLevel()>=3&&!F.PermissionCache&&(F.PermissionCache=!0,F.checkPermissions()),this.isPlayAni){if(!(g.getLocalTime()-this.PlayingAniTime>5))return;console.error("播放动画超时"),this.isPlayAni=!1}var t=IS(k).getEmptyEquipIdList(!1,0);if(t.length<=0)IS(k).tryOpenBox()&&this.spineBox&&1==this.curSkin&&this.spineBox.setAnimation(0,"idle2",!0);else{if(t.length<=1)return this.needReCover=!1,void IS(k).tryOpenEquipEditView(t[0]);this.needReCover=!1,uiMgr.openView("EquipTempBagView")}},B.onLevelClick=function(){uiMgr.openView("BoxUpgradeView")},B.activeBox=function(){this.nodeOpen.active=!0},n}(B));n._RF.pop()}}}));

