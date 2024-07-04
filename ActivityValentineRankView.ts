System.register("chunks:///_virtual/ActivityValentineRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./CommonModel.ts","./MessageView.ts","./FriendControl.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./RankingRushDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,a,r,s,d,h,c,l,m,f,v,u,k,I,g,C,p,R,x,y,T,L,w,S,_;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button,o=t.HorizontalTextAlignment,a=t.Sprite,r=t.Label,s=t.ScrollView,d=t.js},function(t){h=t.V2},function(t){c=t.ItemGrid},function(t){l=t.ListItem},function(t){m=t.default},function(t){f=t.default},function(t){v=t.default},null,function(t){u=t.CommonModel},function(t){k=t.default},function(t){I=t.default},function(t){g=t.default},function(t){C=t.RankDefine},function(t){p=t.RankModel},function(t){R=t.RoleDataCache},function(t){x=t.PlayerAttr},function(t){y=t.default},function(t){T=t.ActivityType,L=t.ActivityState,w=t.ActivityEventDefine},function(t){S=t.RankingRushDataCache},function(t){_=t.BaseView}],execute:function(){var G;n._RF.push({},"185c7BUYoxJl7rYQkUL0VUa","ActivityValentineRankView",void 0);var b=1,A=2,M=3,N=4,B="",U={1:204268,2:204269,3:204266,4:204267},F=((G={})[1]=new h(0,0),G[2]=new h(0,0),G[3]=new h(0,0),G),E={},O=(t("default",function(t){function n(){var i;return(i=t.call(this)||this).tabBtns=[],i.actType=void 0,i.taskRed=void 0,i.curIndex=0,i.topBg=void 0,i.imgTitle=void 0,i.nodeReward=void 0,i.nodeRank=void 0,i.nodeTopRank=void 0,i.nodeMyRank=void 0,i.giftList=void 0,i.rankList=void 0,i.rewardList=void 0,i.txtMyRank=void 0,i.txtMyScore=void 0,i.myFrame=void 0,i.myIcon=void 0,i.txtMyName=void 0,i.txtMyServer=void 0,i.txtLeftTime=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.roleList={},i.actInfo=void 0,i.rankId=void 0,i.rankInfo=void 0,i.curRankPage=void 0,i.name="ActivityValentineRankView",i.url="ui/module/valentine/ActivityValentineRankView",i.poolTime=3e3,i}i(n,t);var h=n.prototype;return h.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.close()}));var n=this.findChild("btnClose");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.close()}));var h=this.findChild("root/btnTips");this.addComponentCallbackListener(h,e.EventType.CLICK,(function(){var t=GetLanguage(9993e5);k.showBoxTip({tip:t,btnCnt:1,horizontalAlign:o.LEFT})})),this.taskRed=this.findChild("root/bg/bottomBtn/item3/red");for(var c=function(i){var n=m.findChild(t.node,d.formatStr("root/bg/bottomBtn/item%s",i)),o={itemGo:n,normalTxt:m.findChildComponent(n,"normal/Label",r),normalGo:m.findChild(n,"normal"),selectedGo:m.findChild(n,"selected"),selectTxt:m.findChildComponent(n,"selected/Label",r),index:i};t.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.SetIndex(o.index)})),t.tabBtns[i]=o},l=1;l<=4;l++)c(l);this.nodeReward=this.findChild("root/nodeReward"),this.nodeRank=this.findChild("root/nodeRank"),this.nodeTopRank=this.findChild("root/nodeTopRank"),this.nodeMyRank=this.findChild("root/myRank"),this.topBg=this.findChildComponent("root/bg/imgBanner",a),this.imgTitle=this.findChildComponent("root/imgTitle",a),this.txtLeftTime=this.findChildComponent("root/txtTime",r),this.txtMyRank=this.findChildComponent("root/myRank/rankNum",r),this.txtMyScore=this.findChildComponent("root/myRank/score",r),this.txtMyName=this.findChildComponent("root/myRank/info/name",r),this.txtMyServer=this.findChildComponent("root/myRank/info/server",r),this.myFrame=this.findChildComponent("root/myRank/imgFrame",a),this.myIcon=this.findChildComponent("root/myRank/imgFrame/imgIcon",a);var f=this.findChildComponent("root/nodeRank/rankList",s);this.rankList=this.addUIList(f,V),this.addComponentCallbackListener(f.node,s.EventType.SCROLL_TO_BOTTOM,(function(){if(t.curRankPage<t.rankInfo.max_page){t.curRankPage++;var i=new Array;i.push({type:t.rankId,server:1,page:t.curRankPage}),IS(g).reqRankList(i)}}));var v=this.findChildComponent("root/nodeReward/rankList",s);this.rewardList=this.addUIList(v,O,!0);for(var u=1;u<=3;u++){var I=new D;I.init(this.findChild("root/nodeTopRank/rank"+u),this,u),this.roleList[u]=I}},h.onAfterOpen=function(){var t;for(var i in this.roleList)this.roleList.hasOwnProperty(i)&&this.roleList[i].show();this.txtMyName.string=IS(R).GetRoleAttr(x.ROLE_ATTR_NAME),this.txtMyServer.string=d.formatStr("[s%s]",IS(R).GetRoleAttr(x.ROLE_ATTR_SERVER)),this.loadRemoteIcon(IS(R).GetRoleAttr(x.ROLE_ATTR_HEAD_URL),this.myIcon),this.actType=T.QiXiFlowerRank;for(var n=1;n<=4;n++){var e=this.tabBtns[n];e.normalTxt.string=GetLanguage(U[n]),e.selectTxt.string=GetLanguage(U[n])}this.actInfo=IS(y).GetActivityInfo(this.actType);var o=null!=(t=this.actInfo.state_time[this.actInfo.state])?t:this.actInfo.state_time[L.Open];if(this.leftTime=o.end_time-v.serverTime,this.leftTime>0){this.canUpdate=!0;var a=v.getTimeData(this.leftTime);Math.floor(this.leftTime/86400)>0?this.txtLeftTime.string=f.formatStrWithMirrorDeal(GetLanguage(200080),a[3],a[2]):this.txtLeftTime.string=GetLanguage(200081)+v.formatTimeForSecond(this.leftTime)}else this.txtLeftTime.string=GetLanguage(200026);this.SetIndex(b)},h.registerUpdateHandler=function(){this.addEvent(C.RankInfoBack,this.UpdateRankInfo,this),this.addEvent(w.OnActivityInfoUpdate,this.OnViewUpdate,this)},h.onBeforeClose=function(){this.canUpdate=!1,this.rankId=0,this.rankList.clearData(),this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0)},h.onDestroy=function(){},h.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0){this.canUpdate=!0;var i=v.getTimeData(this.leftTime);Math.floor(this.leftTime/86400)>0?this.txtLeftTime.string=f.formatStrWithMirrorDeal(GetLanguage(200080),i[3],i[2]):this.txtLeftTime.string=GetLanguage(200081)+v.formatTimeForSecond(this.leftTime)}else this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1},h.SetIndex=function(t){if(this.curIndex!=t){this.curIndex>0&&(this.tabBtns[this.curIndex].selectedGo.active=!1,this.tabBtns[this.curIndex].normalGo.active=!0),this.curIndex=t,this.tabBtns[this.curIndex].normalGo.active=!1,this.tabBtns[this.curIndex].selectedGo.active=!0;var i=!0,n=this.actInfo;if(this.curIndex==b||this.curIndex==A?(n=IS(y).GetActivityInfo(T.QiXiFlowerRank),this.rankId==n.roundCfg.rank_id?i=!1:this.rankId=n.roundCfg.rank_id):(n=IS(y).GetActivityInfo(T.QiXiSendFlowerRank),this.rankId==n.roundCfg.rank_id?i=!1:this.rankId=n.roundCfg.rank_id),i){var e=configRanktype.getDataByKey(this.rankId);B=e.prefix;var o=new Array;o.push({type:this.rankId,server:1,page:1}),this.curRankPage=1,IS(g).reqRankList(o);var a=IS(S).getRankRewardList(n);this.rewardList.datas=a}this.curIndex==A||this.curIndex==N?(this.nodeReward.active=!0,this.nodeRank.active=!1,this.nodeTopRank.active=!0,this.nodeMyRank.active=!0,this.imgTitle.node.active=!1,this.rewardList.updateAll()):this.curIndex!=b&&this.curIndex!=M||(this.nodeReward.active=!1,this.nodeRank.active=!0,this.nodeTopRank.active=!0,this.nodeMyRank.active=!0,this.imgTitle.node.active=!1,this.rankList.updateAll())}},h.UpdateRankInfo=function(){if(this.rankInfo=IS(p).GetRankInfoByType(this.rankId),this.rankInfo){var t;this.txtMyRank.string=0!=this.rankInfo.my_info.rank?this.rankInfo.my_info.rank:GetLanguage(200037),this.txtMyScore.string=d.formatStr("%s%s",B,f.GetNumString(null!=(t=this.rankInfo.my_info.score)?t:0)),this.rankList.datas=this.rankInfo.rank_list;for(var i=1;i<=3;i++)this.roleList[i].show(this.rankInfo.rank_list[i-1])}},h.OnViewUpdate=function(){this.actInfo.state!=L.Open&&this.close()},n}(_)),function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).rewardScroll=void 0,i.txtRank=void 0,i.rankIcon=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.txtRank=m.findChildComponent(this.node,"rankNum",r),this.rankIcon=m.findChildComponent(this.node,"rankIcon",a);var t=m.findChildComponent(this.node,"rewardScroll",s);this.rewardScroll=this.view.addUIList(t,K,!1),this.rewardScroll.touchEvent=!1},e.onRender=function(t,i){this.rewardScroll.datas=t.rank_reward,this.rewardScroll.scrollView.enabled=t.rank_reward.length>=6,this.rewardScroll.touchEvent=t.rank_reward.length>=6;var n=t.rank_range[0],e=t.rank_range[1];n==e&&n<=3?(this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+n)):(this.rankIcon.node.active=!1,this.txtRank.node.active=!0,t.show&&""!=t.show?this.txtRank.string=t.show:this.txtRank.string=d.formatStr("%s-%s",n,e))},e.onItemClick=function(){},n}(l)),V=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,i.imgIcon=void 0,i.txtRank=void 0,i.rankIcon=void 0,i.txtName=void 0,i.txtServer=void 0,i.txtScore=void 0,i}i(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.imgFrame=m.findChildComponent(this.node,"imgFrame",a),this.imgIcon=m.findChildComponent(this.node,"imgFrame/imgIcon",a),this.txtRank=m.findChildComponent(this.node,"rankNum",r),this.rankIcon=m.findChildComponent(this.node,"rankIcon",a),this.txtName=m.findChildComponent(this.node,"info/name",r),this.txtServer=m.findChildComponent(this.node,"info/server",r),this.txtScore=m.findChildComponent(this.node,"score",r),this.view.addComponentCallbackListener(this.imgFrame.node,e.EventType.CLICK,(function(){IS(I).reqOtherRoleNotice(t.data.belong_id)}))},o.onRender=function(t,i){this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name,this.txtServer.string="[s"+t.serv_id+"]",this.txtScore.string=B+f.GetNumString(t.score),t.rank<=3?(this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+t.rank)):(this.rankIcon.node.active=!1,this.txtRank.node.active=!0,this.txtRank.string=t.rank)},o.onItemClick=function(){1004==this.data.rank_id?IS(I).reqOtherRoleNotice(this.data.info.belong_id,2):IS(I).reqOtherRoleNotice(this.data.info.belong_id)},n}(l),D=function(){function t(){this.view=void 0,this.node=void 0,this.rank=void 0,this.txtName=void 0,this.txtServer=void 0,this.txtScore=void 0,this.imgFrame=void 0,this.imgIcon=void 0,this.job=void 0,this.data=void 0,this.role=void 0}var i=t.prototype;return i.init=function(t,i,n){this.view=i,this.node=t,this.rank=n,this.onInit()},i.onInit=function(){var t=this;this.job=m.findChild(this.node,"role"),this.txtName=m.findChildComponent(this.node,"info/name",r),this.txtServer=m.findChildComponent(this.node,"info/server",r),this.txtScore=m.findChildComponent(this.node,"score",r),this.imgFrame=m.findChild(this.node,"imgFrame"),this.imgIcon=m.findChildComponent(this.node,"imgFrame/imgIcon",a),this.view.addComponentCallbackListener(this.imgFrame,e.EventType.CLICK,(function(){t.data&&IS(I).reqOtherRoleNotice(t.data.belong_id)}));var i=m.findChild(this.node,"role/click");this.view.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.data&&IS(I).reqOtherRoleNotice(t.data.belong_id)}))},i.show=function(t){var i;if(this.data=t,this.txtName.string=GetLanguage(200038),this.txtServer.string="",this.txtScore.string=null!=(i=E[this.view.actType])?i:"0",this.imgIcon.node.active=!1,null!=this.role&&(this.view.removeUnitModel(this.role),this.role=null),t){var n,e=t.figure;this.role=IS(u).AddRoleModel(this.view,e,this.job,F[this.rank],.9),this.imgIcon.node.active=!0,this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name,this.txtServer.string="[s"+t.serv_id+"]",this.txtScore.string=null!=(n=E[this.view.actType])?n:""+f.GetNumString(t.score,!0)}},t}(),K=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.itemGridNode=m.findChild(this.node,"itemGrid"),this.itemGrid=new c(this.view,this.itemGridNode)},e.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},n}(l);n._RF.pop()}}}));
