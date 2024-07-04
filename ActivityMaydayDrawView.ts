System.register("chunks:///_virtual/ActivityMaydayDrawView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UIList.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./SpineSkeleton.ts","./ConfigGlobal.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityMaydayDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,a,n,o,d,s,r,l,h,f,c,m,u,g,y,p,v,w,C,T,B,R,L,S,I,x,_,D,M;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,a=t.Label,n=t.Button,o=t.Vec2,d=t.Sprite,s=t.LabelOutline,r=t.ScrollView,l=t.RichText,h=t.js},function(t){f=t.audioMgr},function(t){c=t.SelectedType,m=t.ListItem},function(t){u=t.RedPointType},function(t){g=t.RedPointMgr},function(t){y=t.default},function(t){p=t.default},function(t){v=t.default},null,function(t){w=t.SpineSkeleton},function(t){C=t.ConfigGlobal},function(t){T=t.BagEventDefine},function(t){B=t.BagModel},function(t){R=t.default},function(t){L=t.default},function(t){S=t.default},function(t){I=t.ActivityType,x=t.ActivityState,_=t.ActivityEventDefine},function(t){D=t.default},function(t){M=t.BaseView}],execute:function(){e._RF.push({},"2d60d3RNLtDkp+0s/zSpg+Y","ActivityMaydayDrawView",void 0);var b=C.mayday_ball_limit,A=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtTimeDesc=void 0,i.txtLeftTime=void 0,i.leftTime=0,i.deltaTime=0,i.canUpdate=!1,i.nodeEffectRoot=void 0,i.drawSpine=void 0,i.imgBallEffect=void 0,i.imgBtnBallBg=void 0,i.imgBtnBallIcon=void 0,i.txtBtnBallNum=void 0,i.outlineBtnBallNum=void 0,i.nodeCanBall=void 0,i.txtCount=void 0,i.todayCount=void 0,i.lottery_list=void 0,i.dateList=void 0,i.rewardList=void 0,i.selectDay=void 0,i.bigRewardCfg=void 0,i.imgBigRewardIcon=void 0,i.txtBigRewardTime=void 0,i.txtBigRewardRoleName=void 0,i.txtBigRewardName=void 0,i.nodeBigRewardTime=void 0,i.txtBigRewardLeftTime=void 0,i.curBigRewardDrawTime=void 0,i.nodeBall=void 0,i.txtTitle=void 0,i.isWaitingReward=!1,i.needUpdateAfterReward=!1,i.txtRound=void 0,i.name="ActivityMaydayDrawView",i.url="ui/module/activity/ActivityMaydayDrawView",i.fullScreen=!0,i}i(e,t);var m=e.prototype;return m.onInit=function(){var t=this;this.txtTimeDesc=this.findChildComponent("top/nodeTime/Label",a),this.txtLeftTime=this.findChildComponent("top/nodeTime/txtTime",a);var i=this.findChild("bottom/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("bottom/btnTask");this.addRedPoint("mayday_task",e,new o(25,30),u.Dot),this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){var t=IS(S).GetActivityInfo(I.MaydayDraw);t&&t.state==x.Open?uiMgr.openView("ActivityMaydayTaskView",I.MaydayDraw):t&&t.state==x.Preview?R.showFlyTip(GetLanguage(200086)):R.showFlyTip(GetLanguage(200026))}));var h=this.findChild("top/btnTip");this.addComponentCallbackListener(h,n.EventType.CLICK,(function(){IS(S).ShowSysTips(I.MaydayDraw)})),this.nodeEffectRoot=this.findChild("content/effect");var f=this.findChild("content/btnBall");this.addComponentCallbackListener(f,n.EventType.CLICK,(function(){var t=IS(D).GetTodayBallId();if(!(IS(B).getGoodsCountByGoodsGtid(t)<=0)){var i=IS(S).GetActivityInfo(I.MaydayDraw);i&&i.state==x.Open&&IS(L).send_act_mayday_lottery_ball()}})),this.imgBtnBallBg=f.getComponent(d),this.imgBtnBallIcon=this.findChildComponent("content/btnBall/imgBall",d),this.txtBtnBallNum=this.findChildComponent("content/btnBall/txtBall",a),this.outlineBtnBallNum=this.findChildComponent("content/btnBall/txtBall",s),this.nodeCanBall=this.findChild("content/btnBall/point"),this.txtCount=this.findChildComponent("content/txtCount",a);var m=this.findChildComponent("content/dateScroll",r);this.dateList=this.addUIList(m,A),this.dateList.selectedMode=c.SINGLE;var g=this.findChildComponent("content/rewardScroll",r);this.rewardList=this.addUIList(g,G),this.imgBigRewardIcon=this.findChildComponent("content/finalReward/imgReward",d),this.txtBigRewardTime=this.findChildComponent("content/finalReward/txtTime",a),this.txtBigRewardRoleName=this.findChildComponent("content/finalReward/txtName",a),this.txtBigRewardName=this.findChildComponent("content/finalReward/txtRewardName",a),this.nodeBigRewardTime=this.findChild("content/finalReward/nodeTime"),this.txtBigRewardLeftTime=this.findChildComponent("content/finalReward/nodeTime/txtTime",a),this.txtTitle=this.findChildComponent("top/txtTitle",a),this.txtRound=this.findChildComponent("top/txtRound",l)},m.registerUpdateHandler=function(){this.addEvent(_.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(_.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(_.OnActivityInfoUpdate,this.updateRed,this),this.addEvent(_.OnMaydayLotteryInfoBack,this.OnMaydayLotteryInfoBack,this),this.addEvent(_.OnMaydayLotteryBall,this.OnMaydayLotteryBall,this),this.addEvent(T.GOODS_LIST_UPDATE,this.updateBtnBall,this),this.addEvent(_.OnMaydayLotteryReward,this.OnMaydayLotteryReward,this)},m.onAfterOpen=function(){var t=this;this.isWaitingReward=!1,this.needUpdateAfterReward=!1,this.updateRed(),IS(L).send_act_mayday_lottery_info(IS(D).today_period);var i=IS(S).GetActivityInfo(I.MaydayDraw);if(i){var e;this.txtTitle.string=i.roundCfg.name;var a=null!=(e=i.state_time[i.state])?e:i.state_time[x.Open];if(this.leftTime=a.end_time-v.serverTime,this.leftTime>0){var n="";i.state==x.Preview?n=GetLanguage(200763):i.state==x.Open?n=GetLanguage(200764):i.state==x.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=h.formatStr("%s",v.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}this.addUIEffect("prefab/ui-effect/MX_tx_choujiang_with_ball",this.nodeEffectRoot,-1,new o(116,-212),1,(function(i){var e=i.node;t.drawSpine=e.getComponent(w),t.drawSpine.needAnimation="idle",t.nodeBall=y.findChild(e,"ball"),t.nodeBall.active=!1,t.imgBallEffect=y.findChildComponent(e,"ball/imgBall",d)}));for(var s=configMayday_lottery.getDatas(),r={},l=0,f=new Array,c=0;c<s.length;c++)r[s[c].period]||(f.push(s[c]),l=s[c].period>l?s[c].period:l,r[s[c].period]=!0);this.txtRound.string=h.formatStr("<b><outline width = 2 color=#5270f5><color=#ffffff><color=#1dff00>%s</color>/%s</color></outline></b>",IS(D).today_period,l),this.dateList.datas=f;for(var m=0,u=0;u<f.length;u++)if(f[u].period==IS(D).today_period){m=u;break}this.selectDay=IS(D).today_period,this.dateList.scrollTo(m),this.updateSelect()},m.getRewardInfoById=function(t){if(null!=this.lottery_list)for(var i=0;i<this.lottery_list.length;i++)if(this.lottery_list[i].lottery_id==t)return this.lottery_list[i]},m.OnMaydayLotteryInfoBack=function(t){this.todayCount=t.today_ball_times,t.day==this.selectDay&&(this.lottery_list=t.lottery_list),this.isWaitingReward?this.needUpdateAfterReward=!0:(this.updateCount(),this.updateCurInfo())},m.OnMaydayLotteryBall=function(t){this.todayCount=t,this.updateCount()},m.OnMaydayLotteryReward=function(t){var i=this;null==this.lottery_list&&(this.lottery_list=new Array),t&&this.lottery_list.push(t),this.isWaitingReward=!0;var e=t.lottery_id,a=configMayday_lottery.getDataByKey(e),n=a.ball,o=configGoods.getDataByKey(n);this.loadIcon(this.imgBallEffect,o.icon_group,o.icon),this.drawSpine.setAnimation(0,"skill1",!1),f.playSound("choujiang_yaoyaoquan"),this.addTimer(5.2,1,(function(){i.nodeBall.active=!0})),this.addTimer(7,1,(function(){i.drawSpine.setAnimation(0,"idle",!0),i.nodeBall.active=!1,1==a.type?uiMgr.openView("ActivityMaydayListView",t):uiMgr.openView("ActivityMaydayRewardView",t),i.needUpdateAfterReward&&(i.updateCount(),i.updateCurInfo(),i.needUpdateAfterReward=!1),i.isWaitingReward=!1,i.updateReward()}))},m.updateReward=function(){this.rewardList.items.forEach((function(t,i,e){t.updateReward()})),this.updateBigReward()},m.updateBigReward=function(){var t=this.getRewardInfoById(this.bigRewardCfg.id);this.nodeBigRewardTime.active=null==t,this.txtBigRewardRoleName.string=null==t?GetLanguage_UI(500447):h.formatStr("[%s]%s",t.lottery_role_list[0].server_id,t.lottery_role_list[0].role_name)},m.updateCount=function(){this.txtCount.string=p.formatStr(GetLanguage(999300628),this.todayCount,b)},m.updateCurInfo=function(){this.updateBtnBall(),this.updateSelectInfo()},m.updateBtnBall=function(){var t=IS(D).GetTodayBallId(),i=configGoods.getDataByKey(t);this.loadIcon(this.imgBtnBallIcon,i.icon_group,i.icon);var e=!1,a=IS(S).GetActivityInfo(I.MaydayDraw);a&&a.state==x.Open&&(e=!0);var n=IS(B).getGoodsCountByGoodsGtid(t);this.imgBtnBallBg.grayscale=n<=0||!e,this.nodeCanBall.active=n>0&&e,this.txtBtnBallNum.string=p.formatStr(GetLanguage(999300627),n)},m.updateSelect=function(){this.dateList.items.forEach((function(t,i,e){t.updateSelect()})),IS(L).send_act_mayday_lottery_info(this.selectDay)},m.updateSelectInfo=function(){for(var t=new Array,i=configMayday_lottery.getDatas(),e=0;e<i.length;e++)i[e].period==this.selectDay&&(1==i[e].type?t.push(i[e]):(this.bigRewardCfg=i[e],this.curBigRewardDrawTime=v.getLocalTimeToUTC8(this.bigRewardCfg.time[0][0],this.bigRewardCfg.time[0][1],this.bigRewardCfg.time[0][2],this.bigRewardCfg.time[1][0],this.bigRewardCfg.time[1][1],this.bigRewardCfg.time[1][2])));this.rewardList.datas=t,this.txtBigRewardTime.string=p.formatStr(GetLanguage(999300608),this.bigRewardCfg.time[1][0]),this.loadIcon(this.imgBigRewardIcon,"act_mayday_draw",this.bigRewardCfg.pic),this.txtBigRewardName.string=this.bigRewardCfg.name,this.updateReward()},m.updateBigRewardTime=function(){var t=Math.max(0,this.curBigRewardDrawTime-v.serverTime);this.txtBigRewardLeftTime.string=v.formatENTimeStringForSecond(t)},m.onBeforeClose=function(){this.canUpdate=!1,this.bigRewardCfg=null,this.isWaitingReward=!1,this.needUpdateAfterReward=!1},m.onDestroy=function(){},m.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.updateBigRewardTime(),this.rewardList.items.forEach((function(t,i,e){t.updateTime()})),this.leftTime>0?this.txtLeftTime.string=h.formatStr("%s",v.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},m.updateRed=function(){IS(g).changeValue("mayday_task",IS(S).GetTaskRedNum(I.MaydayDraw))},m.updateInfo=function(t){if(t.type==I.MaydayDraw&&t.state!=x.Null){var i,e=null!=(i=t.state_time[t.state])?i:t.state_time[x.Open];if(this.leftTime=e.end_time-v.serverTime,this.leftTime>0){var a="";t.state==x.Preview?a=GetLanguage(200763):t.state==x.Open?a=GetLanguage(200764):t.state==x.EndShow&&(a=GetLanguage(200765)),this.txtTimeDesc.string=a,this.canUpdate=!0,this.txtLeftTime.string=h.formatStr("%s",v.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}this.updateBtnBall()},e}(M)),function(t){function e(){for(var i,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(i=t.call.apply(t,[this].concat(a))||this).txtDate=void 0,i.nodeSelect=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.txtDate=y.findChildComponent(this.node,"txtDate",a),this.nodeSelect=y.findChild(this.node,"imgSelect"),this.nodeSelect.active=!1},n.onRender=function(t,i){this.txtDate.string=p.formatStrWithMirrorDeal(GetLanguage(700030200),t.period),this.data=t,this.updateSelect()},n.updateSelect=function(){var t=this.view;this.nodeSelect.active=this.data.period==t.selectDay},n.onItemClick=function(){var t=this.view;t.selectDay=this.data.period,t.updateSelect()},e}(m)),G=function(t){function e(){for(var i,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(i=t.call.apply(t,[this].concat(a))||this).txtTime=void 0,i.imgIcon=void 0,i.txtNum=void 0,i.txtName=void 0,i.nodeLeftTime=void 0,i.txtLeftTime=void 0,i.nodeTip=void 0,i.imgHead=void 0,i.imgFrame=void 0,i.curDrawTime=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.adaptiveSize=!0,this.txtTime=y.findChildComponent(this.node,"txtTime",a),this.imgIcon=y.findChildComponent(this.node,"imgDiamond",d),this.txtNum=y.findChildComponent(this.node,"txtNum",a),this.txtName=y.findChildComponent(this.node,"txtName",a),this.nodeLeftTime=y.findChild(this.node,"nodeTime"),this.txtLeftTime=y.findChildComponent(this.node,"nodeTime/txtTime",a),this.nodeTip=y.findChild(this.node,"nodeTip"),this.view.addComponentCallbackListener(y.findChild(this.node,"nodeTip/imgBg-001"),n.EventType.CLICK,(function(){var i=t.view.getRewardInfoById(t.data.id);1==t.data.type?uiMgr.openView("ActivityMaydayListView",i):uiMgr.openView("ActivityMaydayRewardView",i)}))},o.onRender=function(t,i){this.view.loadIcon(this.imgIcon,"act_mayday_draw",t.pic),this.txtNum.string=h.formatStr("x%s",t.rewards[0][1]/100),this.updateReward(),this.updateTime(),this.curDrawTime=v.getLocalTimeToUTC8(t.time[0][0],t.time[0][1],t.time[0][2],t.time[1][0],t.time[1][1],t.time[1][2]),this.data=t;var e=v.ServerDate(1e3*this.curDrawTime-1);this.txtTime.string=GetLanguage([0,700030201,700030202,700030203,700030204,700030205,700030206][e.getDay()])},o.updateReward=function(){var t=this.view.getRewardInfoById(this.data.id);this.nodeTip.active=null!=t,this.nodeLeftTime.active=null==t,this.txtName.string=this.data.name},o.updateTime=function(){var t=Math.max(0,this.curDrawTime-v.serverTime);this.txtLeftTime.string=v.formatENTimeStringForSecond(t)},e}(m);e._RF.pop()}}}));
