System.register("chunks:///_virtual/MarryMapSceneView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./ChatDataCache.ts","./ChatDefine.ts","./CommonDefine.ts","./RoleDataCache.ts","./MarryControl.ts","./AudioMgr.ts","./PlatformUtil.ts","./StringUtil.ts","./SpineSkeleton.ts","./ChatControl.ts","./MessageView.ts","./MarryDataCache.ts","./MarryDefine.ts","./MarryMapScene.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,r,a,o,s,h,d,m,c,f,l,u,p,v,C,y,S,g,w,T,I,M,B,L,N,_,b,E,G,R,x,A,V,H,D,O,P;return{setters:[function(e){t=e.inheritsLoose,i=e.assertThisInitialized},function(e){n=e.cclegacy,r=e.Vec2,a=e.Vec3,o=e.Button,s=e.UITransform,h=e.Label,d=e.sys,m=e.NodeEventType,c=e.Sprite,f=e.Node,l=e.Widget,u=e.RichText,p=e.RenderTexture,v=e.instantiate,C=e.Camera,y=e.find,S=e.js,g=e.screen},function(e){w=e.default},function(e){T=e.default},null,function(e){I=e.ChatDataCache},function(e){M=e.ChatDefine,B=e.ChatEventDefine},function(e){L=e.CommonEventDefine},function(e){N=e.RoleDataCache},function(e){_=e.default},function(e){b=e.audioMgr},function(e){E=e.PlatformUtil},function(e){G=e.default},function(e){R=e.SpineSkeleton},function(e){x=e.default},function(e){A=e.default},function(e){V=e.default},function(e){H=e.WeddingStage,D=e.MarryEventDefine},function(e){O=e.MarryMapScene},function(e){P=e.BaseView}],execute:function(){n._RF.push({},"7c5a56yM5RBV5upKHYaJA19","MarryMapSceneView",void 0);var U=new r,k=new a,F=(e("default",function(e){function n(){var t;return(t=e.call(this)||this).mapScene=void 0,t.faceOriScale=void 0,t.chatRoot=void 0,t.txtName=void 0,t.content=void 0,t.face=void 0,t.nodeHandle=void 0,t.nodeShow=void 0,t.utShow=void 0,t.utHandle=void 0,t.handleBall=void 0,t.ballPos=new a(0,0,0),t.startTouchPos=new a,t.startTouch=!1,t._buffer=void 0,t.treasurePanel=void 0,t.shotCamera=void 0,t.cheerEff=void 0,t.btnList=void 0,t.memberNum=void 0,t.hotLabel=void 0,t.fireBtnNum=void 0,t.fireBtnNumBg=void 0,t.cheerBtnTimeBg=void 0,t.cheerBtnTime=void 0,t.fireBtn=void 0,t.cheerBtn=void 0,t.merryBtnList=void 0,t.guideFireEff=void 0,t.merryCheerGuideInfo=void 0,t.cheerTimer=void 0,t.isOpenNewWedding=void 0,t.nodeTop=void 0,t.hideNameState=void 0,t.showNameState=void 0,t.isHideName=!1,t.name="MarryMapSceneView",t.url="ui/module/marry/MarryMapSceneView",t.fullScreen=!0,t.mapScene=new O(i(t)),t}t(n,e);var R=n.prototype;return R.onInit=function(){var e=this,t=this.findChild("btnChatRoot");this.addComponentCallbackListener(t,o.EventType.CLICK,(function(){var e=IS(V).GetMarryStageInfo(),t=M.ViewType.World;e&&e.wedding_id>0&&(t=M.ViewType.Marry),uiMgr.openView("ChatView",t,null,null,null,null,-81)})),this.addComponentCallbackListener(this.findChild("btnClose"),o.EventType.CLICK,(function(){var t=IS(V).GetMarryStageInfo();t&&1==t.isEnterMoney&&t.stage>0&&t.stage<H.Over?A.showBoxTip({tip:GetLanguage(204421),title:GetLanguage(200048),func:function(t){"type_yes"==t&&e.close()}}):e.close()})),this.chatRoot=t;var i=w.findChild(t,"name/messageContent"),n=w.findChildComponent(t,"name",s);this.txtName=w.findChildComponent(t,"name",h),d.uiMirror?(i.setScale(-1,1,1),i.setPosition(-(n.width+7),-1.389)):i.setPosition(n.width+7,-1.389),this.txtName.node.on(m.SIZE_CHANGED,(function(){d.uiMirror?i.setPosition(-(n.width+7),-1.389):i.setPosition(n.width+7,-1.389)})),this.content=w.findChildComponent(t,"name/messageContent/content",h),this.face=w.findChildComponent(t,"name/messageContent/face",c),this.faceOriScale=this.face.node.scale,this.nodeHandle=this.findChild("nodeHandle"),this.nodeShow=w.findChild(this.nodeHandle,"nodeShow"),this.utShow=this.nodeShow.getComponent(s),this.utHandle=this.nodeHandle.getComponent(s),this.handleBall=w.findChild(this.nodeHandle,"nodeShow/nodeBall"),this.addComponentCallbackListener(this.nodeHandle,f.EventType.TOUCH_START,(function(t){if(e.GetIsCanMove()){var i=t.getUILocation();k.set(i.x,i.y);var n=e.utHandle.convertToNodeSpaceAR(k);n.z=0,e.startTouchPos.set(n),e.startTouch=!0,t.preventSwallow=!0}})),this.addComponentCallbackListener(this.nodeHandle,f.EventType.TOUCH_MOVE,(function(t){if(e.startTouch&&e.GetIsCanMove()){var i=t.getUILocation();if(k.set(i.x,i.y),e.nodeShow.active){var n=e.utShow.convertToNodeSpaceAR(k);n.z=0,t.propagationStopped=!0,t.propagationImmediateStopped=!0;var r=n;return n.length()>50&&(r=n.normalize().multiplyScalar(50)),e.handleBall.position=r,e.mapScene.moveOwner(U.set(r.x,r.y)),void(e.ballPos=r)}var o=e.utHandle.convertToNodeSpaceAR(k);a.subtract(new a,e.startTouchPos,o).length()>50?(e.nodeShow.active=!0,e.nodeShow.position=e.startTouchPos,e.handleBall.position=a.ZERO,t.propagationStopped=!0,t.propagationImmediateStopped=!0):t.preventSwallow=!0}})),d.uiMirror&&this.nodeHandle.setScale(-1,1,1),this.addComponentCallbackListener(this.nodeHandle,f.EventType.TOUCH_END,(function(t){if(e.startTouch=!1,e.nodeShow.active){if(e.nodeShow.active=!1,t.propagationStopped=!0,t.propagationImmediateStopped=!0,!e.GetIsCanMove())return;e.mapScene.moveOwner(r.ZERO)}else t.preventSwallow=!0})),this.nodeTop=this.findChildComponent("merryBtnList/top",l),this.nodeTop.scheduleOnce((function(){e.setTopPos()}),0),this.merryBtnList=this.findChild("merryBtnList"),this.btnList=this.findChild("merryBtnList/btnList"),this.fireBtn=this.findChild("merryBtnList/btnList/fireBtn"),this.fireBtnNumBg=this.findChild("merryBtnList/btnList/fireBtn/fireNum"),this.addComponentCallbackListener(this.fireBtn,o.EventType.CLICK,(function(){var t=IS(V).GetMarryStageInfo();e.cheerTimer&&(e.removeTimer(e.cheerTimer),e.cheerTimer=null),t&&uiMgr.openView("MarryFireUseTipsView",t.fireNum)})),this.cheerBtn=this.findChild("merryBtnList/btnList/cheerBtn"),this.addComponentCallbackListener(this.cheerBtn,o.EventType.CLICK,(function(){IS(_).send_marry_party_action_c2s(1)})),this.guideFireEff=this.findChild("merryBtnList/guideEff"),this.cheerBtnTimeBg=this.findChild("merryBtnList/btnList/cheerBtn/time"),this.fireBtnNum=this.findChildComponent("merryBtnList/btnList/fireBtn/fireNum/Label",h),this.cheerBtnTime=this.findChildComponent("merryBtnList/btnList/cheerBtn/time/Label",h),this.memberNum=this.findChildComponent("merryBtnList/top/memberNum/Label",u);var S=this.findChild("merryBtnList/top/hot");this.addComponentCallbackListener(S,o.EventType.CLICK,(function(){var e=IS(V).GetMarryStageInfo();uiMgr.openView("DesTipsView",GetLanguage(204583),G.formatStr(GetLanguage(204584),e.fire_max),S)})),this.hotLabel=this.findChildComponent("merryBtnList/top/hot/Label",u),this.addComponentCallbackListener(this.findChild("merryBtnList/btnList/shotBtn"),o.EventType.CLICK,(function(){if(!e.shotCamera){var t=new p;t.initialize({width:476,height:335});var i=v(e.mapScene.mapCamera.nodeCamera),n=i.getComponent(C);y("SceneRoot").addChild(i),n.targetTexture=t,e.shotCamera=n,e.shotCamera.orthoHeight=504}var o=e.mapScene.owner.position;if(e.mapScene.mapCamera.getCamIsLock()){var s=e.mapScene.mapCamera.nodeCamera.position;o=new r(s.x,s.y)}var h=316,d=o.y;(d>h||d<-316)&&(d=d>h?h:-316),e.shotCamera.node.position=new a(0,d,10),e.shotCamera.scheduleOnce((function(){console.log("下一帧开始--\x3e");for(var t=e.shotCamera.targetTexture,i=t.readPixels(),n=new Uint8Array(i.length),r=0;r<t.height;r++)for(var a=0;a<t.width;a++){var o=4*(r*t.width+a),s=4*((t.height-r-1)*t.width+a);n[s]=i[o],n[s+1]=i[o+1],n[s+2]=i[o+2],n[s+3]=i[o+3]}i=n,b.playSound("hunli_paizhao"),uiMgr.openView("MarryShotView",i)}))})),this.treasurePanel=new F(this,this.findChild("nodeTreasure")),this.cheerEff=new W(this,this.findChild("cheerEff")),this.hideNameState=this.findChild("merryBtnList/top/hideNameBtn/hide"),this.showNameState=this.findChild("merryBtnList/top/hideNameBtn/show"),this.addComponentCallbackListener(this.findChild("merryBtnList/top/hideNameBtn"),o.EventType.CLICK,(function(){e.showHideNameState(!e.isHideName)}))},R.registerUpdateHandler=function(){var e=this;this.addEvent(B.InsertNewMsg,this.updateMessage,this),this.addEvent(B.UpdateChatMsg,this.updateMessage,this),this.addEvent(D.MARRY_BOX_SHOW,(function(){e.treasurePanel.showBoxBanner(),e.updateFire()})),this.addEvent(D.MARRY_SCENE_ENTER,(function(){e.mapScene.open()}),this),this.addEvent(D.MARRY_MAIN_QUESTION,(function(){var e=IS(V).GetAnswerInfo();e&&e.answer_id>0&&e.answer_id==IS(N).GetRoleId()&&0==e.answer&&uiMgr.openView("MarrySceneQAView")}),this),this.addEvent(D.MARRY_OPERATE_CHANGE,(function(t){1==t.action&&e.cheerEff.show(!0,t.reward_list)})),this.addEvent(D.MARRY_STAGE_STATE,this.UpdateBtnList,this),this.addEvent(D.MARRY_PARTY_INFO,this.NewMarryOpen,this),this.addEvent(D.MARRY_FIRE_UPDATE,this.updateFire,this)},R.onAfterOpen=function(){this.isOpenNewWedding=null,this.showHideNameState(!1),IS(x).reqChatHistory(M.Channel.Marry),uiMgr.close("ChatView");var e=IS(V).GetMarryStateInfo();e&&e.stage>0?IS(_).send_marry_scene_enter_c2s(IS(V).enterPos,0):IS(V).SetFakeMarryStageInfo(),normalEvent.emit(L.HIDE_MAINVIEWALL,!0),this.UpdateBtnList(),this.updateMessage()},R.onBeforeClose=function(){var e;this.merryCheerGuideInfo&&(this.merryCheerGuideInfo.time&&this.removeTimer(this.merryCheerGuideInfo),this.merryCheerGuideInfo=null),normalEvent.emit(L.HIDE_MAINVIEWALL,!1),this.cheerEff.show(!1),this.mapScene.close(),null==(e=this.treasurePanel)||e.close(),this.cheerTimer&&(this.removeTimer(this.cheerTimer),this.cheerTimer=null),IS(I).SetOpenTempViewTypeState(M.ViewType.Marry,!1)},R.onDestroy=function(){this.mapScene.destroy()},R.onUpdate=function(e){this.mapScene.onUpdate(e)},R.showHideNameState=function(e){this.isHideName=e,this.hideNameState.active=e,this.showNameState.active=!e,normalEvent.emit(D.MARRY_SHOW_NAME_STATE,e)},R.NewMarryOpen=function(){var e=IS(V).GetMarryStateInfo();!this.isOpenNewWedding&&e&&e.stage>0&&this.mapScene.stage==H.NotStart&&(uiMgr.openView("MarryWeddingInfoView"),this.isOpenNewWedding=!0)},R.UpdateBtnList=function(){var e=this,t=IS(V).GetMarryStageInfo();if(this.cheerTimer&&(this.removeTimer(this.cheerTimer),this.cheerTimer=null),t){var i;if(t.wedding_id>0?(this.merryBtnList.active=!0,IS(I).SetOpenTempViewTypeState(M.ViewType.Marry,!0)):(this.merryBtnList.active=!1,IS(I).SetOpenTempViewTypeState(M.ViewType.Marry,!1)),t.stage>=H.SubMain){for(var n,r=IS(N).GetRoleId(),a=!1,o=0;o<t.bride_list.length;o++){if(r==t.bride_list[o]){a=!0;break}}if(this.cheerBtnTimeBg.active=!1,a&&t.stage==H.SubMain){var s=configMarry.getDataByKey(t.party_type),h=t.stage_time-s.cheers_time[0];n=h-T.serverTime>0,h-T.serverTime>0&&h-T.serverTime<60&&(this.cheerBtnTimeBg.active=!0,this.cheerTimer=this.addTimer(1,h-T.serverTime,(function(){h-T.serverTime>0?e.cheerBtnTime.string=T.formatTimeForSecond(h-T.serverTime):e.cheerBtnTimeBg.active=!1})))}this.cheerBtn.active=t.stage==H.SubMain&&1!=t.cheerNum&&a&&n}else this.fireBtn.active=!1,this.cheerBtn.active=!1;if(t.stage>=H.SubMain&&t.stage<H.End&&t.fireNum&&t.fireNum>0&&(!this.merryCheerGuideInfo||this.merryCheerGuideInfo.weddingId!=t.wedding_id)){this.guideFireEff.active=!0,this.merryCheerGuideInfo&&this.merryCheerGuideInfo.time&&(this.removeTimer(this.merryCheerGuideInfo.time),delete this.merryCheerGuideInfo.time);var d=this.addTimer(5,1,(function(){e.guideFireEff.active=!1,e.merryCheerGuideInfo&&e.merryCheerGuideInfo.time&&(e.removeTimer(e.merryCheerGuideInfo.time),delete e.merryCheerGuideInfo.time)}));this.merryCheerGuideInfo={weddingId:t.wedding_id,time:d}}else this.guideFireEff.active=!1;this.fireBtnNum.string=null!=(i=t.fireNum)?i:0,this.fireBtn.active=t.stage>=H.SubMain&&t.stage<H.End}else this.merryBtnList.active=!1,this.fireBtn.active=!1,this.guideFireEff.active=!1,this.cheerBtn.active=!1,IS(I).SetOpenTempViewTypeState(M.ViewType.Marry,!1);this.updateFire()},R.updateFire=function(){var e=IS(V).GetMarryStageInfo();if(e){var t,i=null!=(t=e.fire_val)?t:0,n=e.fire_max;i>=n&&(i=S.formatStr("<color=#c54444>%s</color>",i)),this.hotLabel.string=S.formatStr("<b>%s/%s</b>",i,n)}},R.updateMemberNum=function(e){var t=e,i=IS(V).GetMarryStageInfo();if(i&&i.party_type>0){var n=configMarry.getDataByKey(i.party_type);e>=n.num_max&&(t=S.formatStr("<color=#c54444>%s</color>",e)),this.memberNum.string=S.formatStr("<b>%s</b>",G.formatStr(GetLanguage(204125),t,n.num_max))}},R.updateMessage=function(e){void 0===e&&(e=null);var t=IS(V).GetMarryStageInfo(),i=M.Channel.World;if(t&&t.wedding_id>0&&(i=M.Channel.Marry),!e||e.channel==i){var n=IS(I).GetChatInfo(i,0);if(n&&n.length>0){var r=n[n.length-1];if(this.txtName.string=""==r.name?"":d.uiMirror?"："+r.name:r.name+"：",r.type==M.ChatContentType.Conetnt||r.type==M.ChatContentType.Share){var o=r.content;this.content.string=o,this.face.node.active=!1}else if(r.type==M.ChatContentType.Face){this.face.node.active=!0,this.content.string="";var s=IS(I).GetFaceIconByContent(r.content),h=s[0],m=s[1],c=this.faceOriScale.y*m.scale;this.face.node.scale=new a(c,c,c),this.loadIcon(this.face,"icon_chat",h)}this.txtName.node.active=!0}else this.txtName.string="",this.content.string=""}},R.GetIsCanMove=function(){if(this.mapScene.mapCamera.getCamIsLock())return!1;var e=IS(V).GetMarryStageInfo();if(e&&(e.stage==H.Main||e.stage==H.Question))for(var t=0;t<e.bride_list.length;t++){if(e.bride_list[t]==IS(N).GetRoleId())return!1}return!0},R.setTopPos=function(){if(!GlobalDefine.IPAD&&E.getMeunButtonTopDelta()>0){var e=this.nodeTop,t=720/g.windowSize.width*g.windowSize.height,i=E.getMeunButtonTopDelta()*t,n=new a(0,t-i,0),r=e.node.parent.getComponent(s).convertToNodeSpaceAR(n),o=e.node.getPosition();e.node.setPosition(new a(o.x,r.y,o.z))}},n}(P)),function(){function e(e,t){this.node=void 0,this.view=void 0,this.txtTreasureNum=void 0,this.txtTime=void 0,this.nodeTime=void 0,this.title1=void 0,this.title2=void 0,this.title3=void 0,this.treasuretimer=0,this.view=e,this.node=t;var i=w.findChildComponent(t,"bg/nodeShow/nodeNum/txtnum",h);this.txtTreasureNum=i,this.txtTime=w.findChildComponent(t,"bg/nodeShow/nodeTime/txtTime",h),this.nodeTime=w.findChild(t,"bg/nodeShow/nodeTime"),this.title1=w.findChild(t,"bg/type1"),this.title2=w.findChild(t,"bg/type2"),this.title3=w.findChild(t,"bg/type3")}var t=e.prototype;return t.showBoxBanner=function(){var e=this,t=IS(V).boxInfo;if(t)if(0!=t.round){this.node.active=!0;var i=this.txtTreasureNum,n=IS(V).GetMarryStageInfo(),r=5;if(n.party_type&&n.party_type>0)r=configMarry.getDataByKey(n.party_type).output_get_num;i.string=t.my_open+"/"+r,0==this.treasuretimer&&(this.updateBoxTime(),this.treasuretimer=this.view.addTimer(1,-1,(function(){e.updateBoxTime()})))}else this.node.active=!1},t.updateBoxTime=function(){var e=IS(V).boxInfo,t=this.nodeTime,i=this.title1,n=this.title2,r=this.title3,a=e.countdown-T.serverTime,o=T.formatDate(new Date(1e3*a),"ss");this.txtTime.string=o,t.active=!0,Number(o)>50?(n.active=!0,i.active=!1,r.active=!1):(n.active=!1,i.active=!0,r.active=!1),0==e.round&&(t.active=!1,n.active=!1,i.active=!1,r.active=!0,Number(o)<-10&&(this.node.active=!1,this.treasuretimer&&(this.view.removeTimer(this.treasuretimer),this.treasuretimer=0)))},t.close=function(){this.treasuretimer=0},e}()),W=function(){function e(e,t){var i=this;this.view=void 0,this.node=void 0,this.time=void 0,this.state=0,this.rewardData=void 0,this.eff=void 0,this.view=e,this.node=t,this.rewardData=[],e.addComponentCallbackListener(t,o.EventType.CLICK,(function(){1==i.state&&i.time&&(i.view.removeTimer(i.time),i.time=null,i.playCheerAnim())})),this.eff=w.findChildComponent(t,"eff/MX_tx_jiehundaoju",R)}var t=e.prototype;return t.show=function(e,t){var i=this;this.time&&(this.view.removeTimer(this.time),this.time=null),e?(this.eff.setAnimation(0,"idle",!0),this.node.active=!0,this.rewardData=t,this.state=1,this.time=this.view.addTimer(5,1,(function(){i.playCheerAnim()}))):this.node.active=!1},t.playCheerAnim=function(){var e=this;b.playSound("hunli_pengbei"),this.state=2,this.eff.setAnimation(0,"skill1",!0),this.time=this.view.addTimer(1.5,1,(function(){e.rewardData&&uiMgr.openView("GoodsGetView",e.rewardData),e.node.active=!1}))},e}();n._RF.pop()}}}));
