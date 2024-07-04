System.register("chunks:///_virtual/PvpMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RankTitle.ts","./UIList.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./MulLanguageUtil.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./FriendControl.ts","./FrameDataCache.ts","./RoleDataCache.ts","./RoleDefine.ts","./PvpControl.ts","./PvpDataCache.ts","./PvpDefine.ts","./UIDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,a,d,r,h,l,c,m,f,C,v,p,g,u,I,y,S,R,_,L,P,T,k,N,b,w,x,F,E,O,V,D,G;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.ScrollView,a=t.Label,d=t.sys,r=t.HorizontalTextAlignment,h=t.Sprite,l=t.Vec2,c=t.Layout,m=t.UITransform,f=t.Node},function(t){C=t.RankTitle,v=t.TitleType},function(t){p=t.ListItem},function(t){g=t.RedPointType},function(t){u=t.RedPointMgr},function(t){I=t.default},function(t){y=t.default},function(t){S=t.default},function(t){R=t.default},null,function(t){_=t.ConfigGlobal},function(t){L=t.default},function(t){P=t.BagEventDefine},function(t){T=t.BagModel},function(t){k=t.default},function(t){N=t.default},function(t){b=t.FrameDataCache},function(t){w=t.RoleDataCache},function(t){x=t.RoleEventDefine,F=t.PlayerAttr},function(t){E=t.default},function(t){O=t.PvpDataCache},function(t){V=t.PvpEventDefine},function(t){D=t.OpenFunction},function(t){G=t.BaseView}],execute:function(){n._RF.push({},"97a2eGSp6RLGZcF/fVhtxhq","PvpMainView",void 0);var K=1,A=2,H=3,M=5,B=(t("PvpMainView",function(t){function n(){var i;return(i=t.call(this)||this).crossPvpTimer=void 0,i.scrollRankList=void 0,i.scrollRankListS1=void 0,i.scrollRankListS2=void 0,i.scrollReward1=void 0,i.scrollReward2=void 0,i.txtTime=void 0,i.btnChallenge=void 0,i.content1=void 0,i.content2=void 0,i.battletype=void 0,i.btnBase=void 0,i.btnRank=void 0,i.KFJJCstate1=void 0,i.KFJJCstate2=void 0,i.KFJJCstate3=void 0,i.btnRandomChallenge=void 0,i.btnKFReward=void 0,i.btnRopRank=void 0,i.btnShop=void 0,i.btnFKRecord=void 0,i.isSendToServer=void 0,i.name="PvpMainView",i.url="ui/module/pvp/PvpMainView",i.fullScreen=!0,i}i(n,t);var m=n.prototype;return m.onInit=function(){var t=this,i=this.findChild("content/btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()})),this.btnBase=this.findChild("content/btnBase"),this.addComponentCallbackListener(this.btnBase,o.EventType.CLICK,(function(){1!=t.battletype&&t.refreshShow(1)})),this.btnRank=this.findChild("content/btnRank"),this.addComponentCallbackListener(this.btnRank,o.EventType.CLICK,(function(){if(IS(w).CheckFuncOpen(D.FUNC_CROSS_PVP,!0)){if(2==t.battletype)return;t.refreshShow(2),y.set("CROSS_PVP_REMIND",R.serverTime),normalEvent.emit(V.CROSS_PVP_INFO_UPDATE)}})),this.content1=this.findChild("content/Node1");var e=I.findChildComponent(this.content1,"scrollRank",s);this.scrollRankList=this.addUIList(e,U),this.txtTime=I.findChildComponent(this.content1,"title/txtTime",a);var n=I.findChild(this.content1,"btnChallenge"),l=I.findChild(this.content1,"btnRecord");this.btnChallenge=n,this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){uiMgr.openView("PvpChalleneView")})),this.addComponentCallbackListener(l,o.EventType.CLICK,(function(){uiMgr.openView("PvpRecordView")}));var c=I.findChild(this.content1,"title/btnRule");this.addComponentCallbackListener(c,o.EventType.CLICK,(function(){var t=L.GetconfigLanguage_Text(104168);k.showBoxTip({tip:t.text,title:GetLanguage(200143),btnCnt:1,horizontalAlign:d.uiMirror?r.RIGHT:r.LEFT})}));var m=I.findChild(this.content1,"btnBox");this.addComponentCallbackListener(m,o.EventType.CLICK,(function(){uiMgr.openView("PvpRewardView")})),this.content2=this.findChild("content/Node2"),this.KFJJCstate1=this.findChild("content/Node2/state1"),this.KFJJCstate2=this.findChild("content/Node2/state2"),this.KFJJCstate3=this.findChild("content/Node2/state3");var f=I.findChildComponent(this.content2,"state1/scrollRank",s);this.scrollRankListS1=this.addUIList(f,J);var C=I.findChildComponent(this.content2,"state2/scrollRank",s);this.scrollRankListS2=this.addUIList(C,q),this.addComponentCallbackListener(C.node,s.EventType.SCROLL_TO_BOTTOM,(function(){var i=IS(O);t.isSendToServer||i.CrossPvpRankList.length>=i.total_num||(IS(E).reqCrossPvpRankInfo(i.cur_page+1),t.isSendToServer=!0)}));var v=I.findChildComponent(this.content2,"state1/reward/bg/ScrollView",s);this.scrollReward1=this.addUIList(v,B);var p=I.findChildComponent(this.content2,"state2/reward/bg/ScrollView",s);this.scrollReward2=this.addUIList(p,B),this.btnRandomChallenge=I.findChild(this.content2,"btnChallenge"),this.addComponentCallbackListener(this.btnRandomChallenge,o.EventType.CLICK,(function(){var i=IS(O).CrossPvpInfo;if(i){var e=0;1==i.type?e=_.cross_pvp_grading_match_time-i.combat_num:2==i.type&&(e=IS(T).getGoodsCountByGoodsGtid(1037)),e>0?(IS(E).reqCrossPvpCombat(0),1==i.type?IS(O).cachePos=t.scrollRankListS1.scrollView.content.getPosition():IS(O).cachePos=t.scrollRankListS2.scrollView.content.getPosition()):k.showFlyTip(GetLanguage(200560))}})),this.btnKFReward=I.findChild(this.content2,"btnBox"),this.addComponentCallbackListener(this.btnKFReward,o.EventType.CLICK,(function(){uiMgr.openView("PvpCompetitionRewardView")})),this.btnShop=I.findChild(this.content2,"btnShop"),this.loadIcon(this.btnShop.getComponent(h),"jjc","pws_btn_shoping"),this.addComponentCallbackListener(this.btnShop,o.EventType.CLICK,(function(){uiMgr.openView("PvPCompetitionStoreView")})),this.btnRopRank=I.findChild(this.content2,"btnRank"),this.addComponentCallbackListener(this.btnRopRank,o.EventType.CLICK,(function(){uiMgr.openView("PvpCometitionRankView")})),this.btnFKRecord=I.findChild(this.content2,"btnRecord"),this.addComponentCallbackListener(this.btnFKRecord,o.EventType.CLICK,(function(){uiMgr.openView("PvpCompetitionRecordView")}))},m.registerUpdateHandler=function(){this.addEvent(V.PVP_RANK_LIST,this.onRankList,this),this.addEvent(P.GOODS_INFO_UPDATE,this.onGoodsUpdate,this),this.addEvent(V.CROSS_PVP_INFO_UPDATE,this.onRefreshCross,this),this.addEvent(V.CROSS_PVP_RANK_UPDATE,this.onRefreshCrossRank,this),this.addEvent(V.CROSS_PVP_REFRESH_REQ,this.onReRequest,this),this.addEvent(x.ROLE_OPEN_FUNCTION_UPDATE,this.onRoleOpenFunctionUpdate,this),this.addEvent(V.CROSS_PVP_RANK_UPDATE_RankPos,this.UpdateScrollPos,this)},m.UpdateScrollPos=function(){var t=IS(O).cachePos;t&&(1==IS(O).CrossPvpInfo.type?(this.scrollRankListS1.scrollView.scrollToOffset(new l(t.x,t.y)),this.scrollRankListS1.updateAll()):2==IS(O).CrossPvpInfo.type&&(this.scrollRankListS2.scrollView.scrollToOffset(new l(t.x,t.y)),this.scrollRankListS2.updateAll()))},m.onReRequest=function(){IS(E).reqCrossPvpInfo()},m.refreshShow=function(t){t!=this.battletype&&(this.battletype,I.findChild(this.btnBase,"normal").active=1!=t,I.findChild(this.btnBase,"select").active=1==t,I.findChild(this.btnRank,"normal").active=2!=t,I.findChild(this.btnRank,"select").active=2==t,this.content1.active=1==t,this.content2.active=2==t)},m.onRoleOpenFunctionUpdate=function(t){t==D.FUNC_CROSS_PVP&&(IS(E).reqCrossPvpInfo(),this.findChild("content/btnRank/lock").active=!1)},m.onAfterOpen=function(){var t=this;IS(E).reqRankList(),this.checkChallengeBtn(),this.updateTime(),this.addTimer(1,-1,(function(){t.updateTime()})),this.refreshShow(this.openArgs[0]||1),this.findChild("content/btnRank/lock").active=!0,IS(w).CheckFuncOpen(D.FUNC_CROSS_PVP)&&(this.scrollRankListS2.scrollTo(0),IS(O).initRankList([]),IS(E).reqCrossPvpInfo(),this.findChild("content/btnRank/lock").active=!1)},m.checkCrossPvpTips=function(){var t=IS(O).CrossPvpInfo,i=this.findChild("content/btnRank/RP");if(i.active=!1,t){var e=!1,n=y.get("CROSS_PVP_REMIND");if(n)R.formatDate(new Date(1e3*n),"MM/dd")!=R.formatDate(new Date(1e3*R.serverTime),"MM/dd")&&(e=!0);else e=!0;(0==t.type&&0==t.is_sign||1==t.type&&e||2==t.type&&e)&&(i.active=!0)}},m.onRefreshCross=function(){var t=IS(O).CrossPvpInfo;t&&(this.checkCrossPvpTips(),this.KFJJCstate1.active=!1,this.KFJJCstate2.active=!1,this.KFJJCstate3.active=!1,0==t.type?this.refreshState3():1==t.type?this.refreshState1():(2==t.type||3==t.type)&&this.refreshState2())},m.onBeforeClose=function(){var t;this.scrollRankListS2.scrollView.scrollToTop(0),null==(t=this.scrollRankListS2)||t.clearData(),this.crossPvpTimer&&(this.removeTimer(this.crossPvpTimer),this.crossPvpTimer=null)},m.onDestroy=function(){},m.checkChallengeBtn=function(){this.addRedPoint("PvpMainView/btnChallenge",this.btnChallenge,new l(85,25),g.NumDot,1.3);var t=IS(T).getGoodsCountByGoodsGtid(1006);0!=t?IS(u).changeValue("PvpMainView/btnChallenge",t):IS(u).changeValue("PvpMainView/btnChallenge",0)},m.updateTime=function(){if(null!=IS(O).rankList){var t=IS(O).rankList.end_time-R.serverTime;if(t<0)IS(E).reqRankList();else{var i="--:--:--",e=Math.floor(t/3600)%24,n=Math.floor(t/86400);i=n>0?S.formatStrWithMirrorDeal(GetLanguage(200006),n,e):R.formatTimeForSecond(t),this.txtTime.string=i}}},m.updateMyInfo=function(){var t=I.findChildComponent(this.content1,"myInfo/txtName",a),i=I.findChildComponent(this.content1,"myInfo/bgNum/txtNum",a),e=I.findChildComponent(this.content1,"myInfo/txtScore",a),n=I.findChildComponent(this.content1,"myInfo/txtPower",a),o=IS(O).rankList;t.string=IS(w).GetRoleName(),i.string=String(o.my_rank),I.findChild(this.content1,"myInfo/imgNum1").active=1==o.my_rank,I.findChild(this.content1,"myInfo/imgNum2").active=2==o.my_rank,I.findChild(this.content1,"myInfo/imgNum3").active=3==o.my_rank,this.loadIcon(I.findChildComponent(this.content1,"myInfo/imgNum1",h),"friend","hy_ICON_paiming01"),this.loadIcon(I.findChildComponent(this.content1,"myInfo/imgNum2",h),"friend","hy_ICON_paiming02"),this.loadIcon(I.findChildComponent(this.content1,"myInfo/imgNum3",h),"friend","hy_ICON_paiming03"),e.string=String(o.my_score),n.string="Lv."+IS(w).GetLevel();var s=I.findChildComponent(this.content1,"myInfo/imgHeadIcon",h);this.loadRemoteIcon(IS(w).GetHeadUrl(),s);var d=I.findChildComponent(this.content1,"myInfo/imgHeadFrame",h),r=IS(b).curFrameId;if(r>0){var l=configAvatar_frame.getDataByKey(r);this.loadIcon(d,"icon_frame",l.icon),d.node.active=!0}else d.node.active=!1},m.onRankList=function(){this.scrollRankList.datas=IS(O).rankList.rank_list,this.updateMyInfo()},m.onGoodsUpdate=function(t,i){1006==i?this.checkChallengeBtn():1037==i&&this.refreshState2()},m.refreshState3=function(){var t=this;this.btnRandomChallenge.active=!1;var i=this.KFJJCstate3;i.active=!0;var e=I.findChildComponent(i,"myInfo/imgHeadIcon",h);this.loadRemoteIcon(IS(w).GetHeadUrl(),e);var n=I.findChildComponent(i,"myInfo/txtName",a),s=I.findChildComponent(i,"myInfo/txtNum",a),d=I.findChildComponent(i,"myInfo/txtRank",a),r=I.findChild(i,"bgRest/RankTitle"),l=I.findChild(i,"myInfo/RankTitle"),c=I.findChildComponent(i,"txtTime",a),m=I.findChild(i,"title/btnRule");this.addComponentCallbackListener(m,o.EventType.CLICK,(function(){var t=L.GetconfigLanguage_Text(104170);k.showBoxTip({tip:t.text,title:GetLanguage(200143),btnCnt:1,horizontalAlign:0})}));var f=I.findChildComponent(i,"myInfo/imgHeadFrame",h),p=IS(b).curFrameId;if(p>0){var g=configAvatar_frame.getDataByKey(p);this.loadIcon(f,"icon_frame",g.icon),f.node.active=!0}else f.node.active=!1;var u=IS(O).CrossPvpInfo;u&&(this.refreshSignStatus(),n.string=IS(w).GetRoleName(),s.string=u.my_score+"",d.string=u.my_rank+"",new C(this,r).SetRankTitle(u.dan,v.CROSS_PVP),new C(this,l).SetRankTitle(u.dan,v.CROSS_PVP),this.updateTimeByState(3,c),IS(O).CrossPvpInfo&&IS(O).CrossPvpInfo.end_time-R.serverTime>0&&!this.crossPvpTimer&&(this.crossPvpTimer=this.addTimer(1,-1,(function(){t.updateTimeByState(3,c)}))))},m.refreshSignStatus=function(){var t=this.KFJJCstate3,i=I.findChild(t,"doSign"),e=I.findChild(t,"signDone"),n=I.findChild(i,"btnSign");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){IS(E).reqCrossPvpSignUp()}));var s=IS(O).CrossPvpInfo;s&&(i.active=0==s.is_sign,e.active=1==s.is_sign)},m.updateTimeByState=function(t,i){if(IS(O).CrossPvpInfo){var e=IS(O).CrossPvpInfo.end_time;if(0!=e){var n=e-R.serverTime;if(n<0)return IS(E).reqCrossPvpInfo(),printLogErr("跨服排位赛倒计时结束",t),void(this.crossPvpTimer&&(this.removeTimer(this.crossPvpTimer),this.crossPvpTimer=null));var o="--:--:--",s=Math.floor(n/3600)%24,a=Math.floor(n/86400);o=a>0?S.formatStrWithMirrorDeal(GetLanguage(200006),a,s):R.formatTimeForSecond(n),i.string=o}else i.string="--:--:--"}},m.refreshState2=function(){var t=this;this.btnRandomChallenge.active=!0;var i=this.KFJJCstate2;i.active=!0,this.dealMirrorLayout(I.findChildComponent(i,"bgRest/Node",c));var e=I.findChildComponent(i,"bgRest/Node/num",a),n=I.findChildComponent(i,"bgRest/Node/num2",a),s=I.findChild(i,"bgRest/RankTitle"),d=I.findChild(i,"myInfo/imgNum1"),r=I.findChild(i,"myInfo/imgNum2"),l=I.findChild(i,"myInfo/imgNum3");this.loadIcon(d.getComponent(h),"friend","hy_ICON_paiming01"),this.loadIcon(r.getComponent(h),"friend","hy_ICON_paiming02"),this.loadIcon(l.getComponent(h),"friend","hy_ICON_paiming03");var m=I.findChildComponent(i,"myInfo/txtName",a),f=I.findChildComponent(i,"myInfo/txtLevel",a),p=I.findChildComponent(i,"myInfo/txtScore",a),g=I.findChildComponent(i,"myInfo/bgNum/txtNum",a),u=I.findChildComponent(i,"myInfo/txtPower",a),y=I.findChildComponent(i,"myInfo/imgHeadIcon",h);this.loadRemoteIcon(IS(w).GetHeadUrl(),y);var P=I.findChild(i,"title/btnRule"),N=I.findChildComponent(i,"title/Node/txtTime",a),x=I.findChildComponent(i,"title/Node/Label",a);this.addComponentCallbackListener(P,o.EventType.CLICK,(function(){var t=L.GetconfigLanguage_Text(104170);k.showBoxTip({tip:t.text,title:GetLanguage(200561),btnCnt:1,horizontalAlign:0})}));var F=I.findChild(i,"bgRest/btnBuyTicket");this.addComponentCallbackListener(F,o.EventType.CLICK,(function(){IS(O).buy_times_cross>=5?k.showFlyTip(GetLanguage(200558)):uiMgr.openView("PvpBuyView",{goods:[1037,1],price:[2,500]})})),this.updateTimeByState(2,N);var E=I.findChildComponent(i,"myInfo/imgHeadFrame",h),V=IS(b).curFrameId;if(V>0){var D=configAvatar_frame.getDataByKey(V);this.loadIcon(E,"icon_frame",D.icon),E.node.active=!0}else E.node.active=!1;IS(O).CrossPvpInfo&&(2==IS(O).CrossPvpInfo.type?(x.node.active=!1,N.node.active=!0,IS(O).CrossPvpInfo.end_time-R.serverTime>0&&!this.crossPvpTimer&&(this.crossPvpTimer=this.addTimer(1,-1,(function(){t.updateTimeByState(2,N)})))):3==IS(O).CrossPvpInfo.type&&(x.node.active=!0,N.node.active=!1));this.scrollReward2.datas=_.cross_pvp_battle_reward;var G=IS(O).CrossPvpInfo;if(G){F.active=2==G.type,m.string=IS(w).GetRoleName(),f.string="Lv."+IS(w).GetLevel(),p.string=G.my_score+"",g.string=G.my_rank+"",d.active=1==G.my_rank,r.active=2==G.my_rank,l.active=3==G.my_rank;var K=_.cross_pvp_battle_max;e.string=IS(T).getGoodsCountByGoodsGtid(1037)+"",n.string=K+"",u.string=S.GetNumString(IS(w).GetPowerInfoByID(0)),new C(this,s).SetRankTitle(G.dan,v.CROSS_PVP)}},m.onRefreshCrossRank=function(){var t=IS(O).CrossPvpInfo;if(t){for(var i,n=0,o=0,s=!1,a=e(t.ext);!(i=a()).done;){var d=i.value;1==d.k?n=d.v:2==d.k?o=d.v:3==d.k&&(s=1==d.v)}var r=[];if(s){r.push({isTitle:1,type:2});for(var h,l=e(IS(O).CrossPvpRankList);!(h=l()).done;){var c=h.value;r.push({player:c,type:2})}}else{for(var m,f=[],C=[],v=[],p=e(IS(O).CrossPvpRankList);!(m=p()).done;){for(var g,u=m.value,I=0,y=e(u.ext_list);!(g=y()).done;){var S=g.value;S.k==H&&(I=S.v)}I<=n?f.push({player:u,type:1}):I>o?v.push({player:u,type:3}):C.push({player:u,type:2})}f.length>0&&(r.push({isTitle:1,type:1,title:GetLanguage(200562)}),r=r.concat(f)),C.length>0&&(r.push({isTitle:1,type:1,title:GetLanguage(200563)}),r=r.concat(C)),v.length>0&&(r.push({isTitle:1,type:1,title:GetLanguage(200564)}),r=r.concat(v))}this.scrollRankListS2.datas=r,this.isSendToServer=!1}},m.refreshState1=function(){this.btnRandomChallenge.active=!0;var t=this.KFJJCstate1;t.active=!0,this.dealMirrorLayout(I.findChildComponent(t,"bgRest/Node",c));var i=I.findChildComponent(t,"bgRest/Node/num",a),e=I.findChildComponent(t,"bgRest/Node/num2",a),n=I.findChildComponent(t,"myInfo/txtPower",a),s=(I.findChildComponent(t,"title/txtTime",a),I.findChildComponent(t,"myInfo/imgHeadIcon",h));this.loadRemoteIcon(IS(w).GetHeadUrl(),s);var d=I.findChild(t,"myInfo/RankTitle"),r=I.findChild(t,"myInfo/RankTitle-001"),l=I.findChild(t,"title/btnRule"),m=I.findChildComponent(t,"myInfo/imgHeadFrame",h),f=IS(b).curFrameId;if(f>0){var p=configAvatar_frame.getDataByKey(f);this.loadIcon(m,"icon_frame",p.icon),m.node.active=!0}else m.node.active=!1;this.addComponentCallbackListener(l,o.EventType.CLICK,(function(){var t=L.GetconfigLanguage_Text(104169);k.showBoxTip({tip:t.text,title:GetLanguage(200565),btnCnt:1,horizontalAlign:0})})),this.scrollReward1.datas=_.cross_pvp_grading_match_reward;var g=IS(O).CrossPvpInfo;if(g){var u=_.cross_pvp_grading_match_time;i.string=u-g.combat_num+"",e.string=u+"";var y=configCross_pvp_grading_match.getDataByKeys("rank_id",g.dan);console.log("ban "+g.dan);var R=configCross_pvp_grading_match.getDataByKey(y.id+1);new C(this,d).SetRankTitle(g.dan,v.CROSS_PVP),new C(this,r).SetRankTitle(R.rank_id,v.CROSS_PVP);var P=R.promote_win_num-g.win_num;n.string=S.formatStrWithMirrorDeal(GetLanguage(300133),P),this.scrollRankListS1.datas=g.enemy_list}},n}(G)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).imgIcon=void 0,i.txtNum=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.imgIcon=I.findChildComponent(this.node,"icon",h),this.txtNum=I.findChildComponent(this.node,"num",a)},n.onRender=function(t,i){this.view.loadIcon(this.imgIcon,"icon_item",t[0]),this.txtNum.string=t[1]},e}(p)),U=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtNum=void 0,i.txtScore=void 0,i.txtPower=void 0,i.titleicon=void 0,i.imgHeadFrame=void 0,i.scoreNode=void 0,i.imgNum1=void 0,i.imgNum2=void 0,i.imgNum3=void 0,i.role_id=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.txtName=I.findChildComponent(this.node,"txtName",a),this.txtNum=I.findChildComponent(this.node,"txtNum",a),d.uiMirror&&this.view.dealMirrorLayout(I.findChildComponent(this.node,"score",c)),this.txtScore=I.findChildComponent(this.node,"score/txtScore",a),this.txtPower=I.findChildComponent(this.node,"txtPower",a),this.titleicon=I.findChild(this.node,"titleIcon"),this.imgHeadFrame=I.findChildComponent(this.node,"imgHeadFrame",h),this.imgNum1=I.findChild(this.node,"imgNum1"),this.imgNum2=I.findChild(this.node,"imgNum2"),this.imgNum3=I.findChild(this.node,"imgNum3"),this.view.loadIcon(I.findChildComponent(this.node,"imgNum1/imgNum1",h),"friend","hy_ICON_paiming01"),this.view.loadIcon(I.findChildComponent(this.node,"imgNum2/imgNum2",h),"friend","hy_ICON_paiming02"),this.view.loadIcon(I.findChildComponent(this.node,"imgNum3/imgNum3",h),"friend","hy_ICON_paiming03"),this.scoreNode=I.findChild(this.node,"jjc_ICON_jjtubiao"),I.findChild(this.node,"imgHeadIcon").on(o.EventType.CLICK,(function(){IS(N).reqOtherRoleNotice(t.role_id,2)}))},n.onRender=function(t,i){this.role_id=t.id,this.txtName.string=t.name,this.txtNum.string=String(t.rank),this.imgNum1.active=1==t.rank,this.imgNum2.active=2==t.rank,this.imgNum3.active=3==t.rank,this.txtScore.string=String(t.score),this.txtPower.string="Lv."+t.lev;var e=I.findChildComponent(this.node,"imgHeadIcon",h);this.view.loadRemoteIcon(t.head.url,e);var n=t.title;n>0?(this.titleicon.active=!0,new C(this.view,this.titleicon).SetRankTitle(n,v.NORMAL)):this.titleicon.active=!1;var o=t.head.frame_id;if(o>0){this.imgHeadFrame.node.active=!0;var s=configAvatar_frame.getDataByKey(o);this.view.loadIcon(this.imgHeadFrame,"icon_frame",s.icon)}else this.imgHeadFrame.node.active=!1;this.txtScore.node.setScale(1,1,1)},e}(p),J=function(t){function n(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtNum=void 0,i.txtScore=void 0,i.txtPower=void 0,i.nodeRank=void 0,i.imgHeadFrame=void 0,i.role_id=void 0,i.infoList={},i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.txtName=I.findChildComponent(this.node,"txtName",a),this.txtNum=I.findChildComponent(this.node,"txtNum",a),this.txtScore=I.findChildComponent(this.node,"txtScore",a),this.txtPower=I.findChildComponent(this.node,"txtPower",a),this.nodeRank=I.findChild(this.node,"RankTitle"),this.imgHeadFrame=I.findChildComponent(this.node,"imgHeadFrame",h);var i=I.findChild(this.node,"imgHeadIcon");this.view.addComponentCallbackListener(i,o.EventType.CLICK,(function(){IS(N).reqOtherRoleNotice(t.role_id,2)}));var e=I.findChild(this.node,"btnChallenge");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){IS(E).reqCrossPvpCombat(t.role_id),IS(O).cachePos=t.list.scrollView.content.getPosition()}))},s.onRender=function(t,i){this.role_id=t.role_id;for(var n,o=e(t.info_list.ks);!(n=o()).done;){var s=n.value;this.infoList[s.k]=s.s}for(var a,d=e(t.info_list.kv);!(a=d()).done;){var r=a.value;this.infoList[r.k]=r.v}for(var l,c=e(t.ext_list);!(l=c()).done;){var m=l.value;this.infoList[m.k]=m.v}this.txtName.string=this.infoList[F.ROLE_ATTR_NAME],this.txtScore.string=S.GetNumString(this.infoList[F.ROLE_ATTR_POWER_SHOW]),this.txtPower.string="Lv."+this.infoList[F.ROLE_ATTR_LVL];var f=I.findChildComponent(this.node,"imgHeadIcon",h);(this.view.loadRemoteIcon(this.infoList[F.ROLE_ATTR_HEAD_URL],f),this.infoList[1]>0)&&new C(this.view,this.nodeRank).SetRankTitle(this.infoList[K],v.CROSS_PVP);var p=this.infoList[F.ROLE_ATTR_HEAD_FRAME_ID];if(p>0){this.imgHeadFrame.node.active=!0;var g=configAvatar_frame.getDataByKey(p);this.view.loadIcon(this.imgHeadFrame,"icon_frame",g.icon)}else this.imgHeadFrame.node.active=!1},n}(p),q=function(t){function n(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtTitle=void 0,i.txtLock=void 0,i.scrollRankList=void 0,i.sUT=void 0,i.nodeTitle=void 0,i.nodeLock=void 0,i.nodePlayer=void 0,i.txtName=void 0,i.txtNum=void 0,i.txtScore=void 0,i.txtPower=void 0,i.txtLevel=void 0,i.titleicon=void 0,i.imgHeadFrame=void 0,i.scoreNode=void 0,i.btnChallenge=void 0,i.imgNum1=void 0,i.imgNum2=void 0,i.imgNum3=void 0,i.imgUp=void 0,i.imgDown=void 0,i.role_id=void 0,i.infoList={},i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.adaptiveSize=!0,this.nodeTitle=I.findChild(this.node,"bgTitle"),this.nodeLock=I.findChild(this.node,"lockdesc"),this.nodePlayer=I.findChild(this.node,"item"),this.txtTitle=I.findChildComponent(this.node,"bgTitle/Label",a),this.txtLock=I.findChildComponent(this.node,"lockdesc/ScrollView/view/content/item",a);var i=I.findChildComponent(this.node,"lockdesc/ScrollView/view/content",m);this.txtLock.node.on(f.EventType.SIZE_CHANGED,(function(){i.height=t.txtLock.node.getComponent(m).height})),this.sUT=I.findChildComponent(this.node,"scrollArea",m),this.txtName=I.findChildComponent(this.nodePlayer,"txtName",a),this.txtNum=I.findChildComponent(this.nodePlayer,"txtNum",a),this.txtScore=I.findChildComponent(this.nodePlayer,"txtScore",a),this.txtPower=I.findChildComponent(this.nodePlayer,"txtPower",a),this.txtLevel=I.findChildComponent(this.nodePlayer,"txtLevel",a),this.titleicon=I.findChildComponent(this.nodePlayer,"titleIcon",h),this.imgHeadFrame=I.findChildComponent(this.nodePlayer,"imgHeadFrame",h),this.imgNum1=I.findChild(this.nodePlayer,"imgNum1"),this.imgNum2=I.findChild(this.nodePlayer,"imgNum2"),this.imgNum3=I.findChild(this.nodePlayer,"imgNum3"),this.view.loadIcon(I.findChildComponent(this.nodePlayer,"imgNum1/imgNum1",h),"friend","hy_ICON_paiming01"),this.view.loadIcon(I.findChildComponent(this.nodePlayer,"imgNum2/imgNum2",h),"friend","hy_ICON_paiming02"),this.view.loadIcon(I.findChildComponent(this.nodePlayer,"imgNum3/imgNum3",h),"friend","hy_ICON_paiming03"),this.imgUp=I.findChild(this.nodePlayer,"imgUp"),this.imgDown=I.findChild(this.nodePlayer,"imgDown"),this.scoreNode=I.findChild(this.nodePlayer,"jjc_ICON_jjtubiao");var e=I.findChild(this.nodePlayer,"imgHeadIcon");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){IS(N).reqOtherRoleNotice(t.role_id,2)})),this.btnChallenge=I.findChild(this.nodePlayer,"btnChallenge"),this.view.addComponentCallbackListener(this.btnChallenge,o.EventType.CLICK,(function(){if(1!=t.infoList[M]){var i=IS(O).CrossPvpInfo;if(i){if(2!=i.type)return void k.showFlyTip(GetLanguage(200566));IS(T).getGoodsCountByGoodsGtid(1037)>0?(IS(E).reqCrossPvpCombat(t.role_id),IS(O).cachePos=t.list.scrollView.content.getPosition()):k.showFlyTip(GetLanguage(200560))}}else k.showFlyTip(configErrorInfo.getDataByKey(220).info)}))},s.onRender=function(t,i){1==t.isTitle?(this.nodePlayer.active=!1,1==t.type?(this.nodeTitle.active=!0,this.nodeLock.active=!1,this.txtTitle.string=t.title):2==t.type&&(this.nodeTitle.active=!1,this.nodeLock.active=!0,this.txtLock.string=GetLanguage(200716))):(this.nodeTitle.active=!1,this.nodeLock.active=!1,this.nodePlayer.active=!0,this.onRenderPlayerInfo(t))},s.onRenderPlayerInfo=function(t){var i=t.player;this.role_id=i.role_id;for(var n,o=e(i.info_list.ks);!(n=o()).done;){var s=n.value;this.infoList[s.k]=s.s}for(var a,d=e(i.info_list.kv);!(a=d()).done;){var r=a.value;this.infoList[r.k]=r.v}for(var l,c=e(i.ext_list);!(l=c()).done;){var m=l.value;this.infoList[m.k]=m.v}this.btnChallenge.active=!0,this.role_id==Number(IS(w).GetRoleId())&&(this.btnChallenge.active=!1),this.btnChallenge.getComponent(h).grayscale=1==this.infoList[M];var f=IS(O).CrossPvpInfo;f&&f.type&&(this.btnChallenge.getComponent(h).grayscale=2!=f.type),this.imgUp.active=1==t.type,this.imgDown.active=3==t.type,2==t.type&&(this.imgUp.active=!1,this.imgDown.active=!1),this.imgNum1.active=1==this.infoList[3],this.imgNum2.active=2==this.infoList[3],this.imgNum3.active=3==this.infoList[3],this.txtName.string=this.infoList[F.ROLE_ATTR_NAME],this.txtNum.string=this.infoList[H],this.txtPower.string=S.GetNumString(this.infoList[F.ROLE_ATTR_POWER_SHOW]),this.txtLevel.string="Lv."+this.infoList[F.ROLE_ATTR_LVL],this.txtScore.string=this.infoList[A];var C=I.findChildComponent(this.nodePlayer,"imgHeadIcon",h);this.view.loadRemoteIcon(this.infoList[F.ROLE_ATTR_HEAD_URL],C);var v=this.infoList[F.ROLE_ATTR_HEAD_FRAME_ID];if(v>0){this.imgHeadFrame.node.active=!0;var p=configAvatar_frame.getDataByKey(v);this.view.loadIcon(this.imgHeadFrame,"icon_frame",p.icon)}else this.imgHeadFrame.node.active=!1},n}(p);n._RF.pop()}}}));
