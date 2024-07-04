System.register("chunks:///_virtual/ActivityValentinePassRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./CommonModel.ts","./FriendControl.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./RankingRushDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,a,s,r,d,h,c,l,m,f,v,u,k,g,I,C,p,R,y,x,T,L,w;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button,o=t.Sprite,a=t.Label,s=t.ScrollView,r=t.js},function(t){d=t.V2},function(t){h=t.ItemGrid},function(t){c=t.ListItem},function(t){l=t.default},function(t){m=t.default},function(t){f=t.default},null,function(t){v=t.CommonModel},function(t){u=t.default},function(t){k=t.default},function(t){g=t.RankDefine},function(t){I=t.RankModel},function(t){C=t.RoleDataCache},function(t){p=t.PlayerAttr},function(t){R=t.default},function(t){y=t.ActivityType,x=t.ActivityState,T=t.ActivityEventDefine},function(t){L=t.RankingRushDataCache},function(t){w=t.BaseView}],execute:function(){var S,_;n._RF.push({},"89d57d1VZZNoY2jgGErceKm","ActivityValentinePassRankView",void 0);var G=1,b=2,M="",A=((S={})[y.ValentinePassRank]={1:600000155,2:700000311},S),N=((_={})[1]=new d(0,0),_[2]=new d(0,0),_[3]=new d(0,0),_),B={},U=(t("default",function(t){function n(){var i;return(i=t.call(this)||this).tabBtns=[],i.actType=void 0,i.taskRed=void 0,i.curIndex=0,i.topBg=void 0,i.imgTitle=void 0,i.nodeReward=void 0,i.nodeRank=void 0,i.nodeTopRank=void 0,i.nodeMyRank=void 0,i.giftList=void 0,i.rankList=void 0,i.rewardList=void 0,i.txtMyRank=void 0,i.txtMyScore=void 0,i.myFrame=void 0,i.myIcon=void 0,i.txtMyName=void 0,i.txtMyServer=void 0,i.txtLeftTime=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.roleList={},i.actInfo=void 0,i.rankId=void 0,i.rankInfo=void 0,i.curRankPage=void 0,i.name="ActivityValentinePassRankView",i.url="ui/module/valentine/ActivityValentinePassRankView",i.poolTime=3e3,i}i(n,t);var d=n.prototype;return d.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.close()}));var n=this.findChild("btnClose");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.close()}));var d=this.findChild("root/tips");this.addComponentCallbackListener(d,e.EventType.CLICK,(function(){uiMgr.openView("RankJoinServerView",t.rankId)})),this.taskRed=this.findChild("root/bg/bottomBtn/item3/red");for(var h=function(i){var n=l.findChild(t.node,r.formatStr("root/bg/bottomBtn/item%s",i)),o={itemGo:n,normalTxt:l.findChildComponent(n,"normal/Label",a),normalGo:l.findChild(n,"normal"),selectedGo:l.findChild(n,"selected"),selectTxt:l.findChildComponent(n,"selected/Label",a),index:i};t.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.SetIndex(o.index)})),t.tabBtns[i]=o},c=1;c<=2;c++)h(c);this.nodeReward=this.findChild("root/nodeReward"),this.nodeRank=this.findChild("root/nodeRank"),this.nodeTopRank=this.findChild("root/nodeTopRank"),this.nodeMyRank=this.findChild("root/myRank"),this.topBg=this.findChildComponent("root/bg/imgBanner",o),this.imgTitle=this.findChildComponent("root/imgTitle",o),this.txtLeftTime=this.findChildComponent("root/txtTime",a),this.txtMyRank=this.findChildComponent("root/myRank/rankNum",a),this.txtMyScore=this.findChildComponent("root/myRank/score",a),this.txtMyName=this.findChildComponent("root/myRank/info/name",a),this.txtMyServer=this.findChildComponent("root/myRank/info/server",a),this.myFrame=this.findChildComponent("root/myRank/imgFrame",o),this.myIcon=this.findChildComponent("root/myRank/imgFrame/imgIcon",o);var m=this.findChildComponent("root/nodeRank/rankList",s);this.rankList=this.addUIList(m,E),this.addComponentCallbackListener(m.node,s.EventType.SCROLL_TO_BOTTOM,(function(){if(t.curRankPage<t.rankInfo.max_page){t.curRankPage++;var i=new Array;i.push({type:t.rankId,server:1,page:t.curRankPage}),IS(k).reqRankList(i)}}));var f=this.findChildComponent("root/nodeReward/rankList",s);this.rewardList=this.addUIList(f,U,!0);for(var v=1;v<=3;v++){var u=new O;u.init(this.findChild("root/nodeTopRank/rank"+v),this,v),this.roleList[v]=u}},d.onAfterOpen=function(){var t;for(var i in this.roleList)this.roleList.hasOwnProperty(i)&&this.roleList[i].show();this.txtMyName.string=IS(C).GetRoleAttr(p.ROLE_ATTR_NAME),this.txtMyServer.string=r.formatStr("[s%s]",IS(C).GetRoleAttr(p.ROLE_ATTR_SERVER)),this.loadRemoteIcon(IS(C).GetRoleAttr(p.ROLE_ATTR_HEAD_URL),this.myIcon),this.actType=this.openArgs[0];for(var n=1;n<=2;n++){var e=this.tabBtns[n];e.normalTxt.string=GetLanguage(A[this.actType][n]),e.selectTxt.string=GetLanguage(A[this.actType][n])}this.actInfo=IS(R).GetActivityInfo(this.actType);var o=null!=(t=this.actInfo.state_time[this.actInfo.state])?t:this.actInfo.state_time[x.Open];if(this.leftTime=o.end_time-f.serverTime,this.leftTime>0){this.canUpdate=!0;var a=f.getTimeData(this.leftTime);Math.floor(this.leftTime/86400)>0?this.txtLeftTime.string=m.formatStrWithMirrorDeal(GetLanguage(200080),a[3],a[2]):this.txtLeftTime.string=GetLanguage(200081)+f.formatTimeForSecond(this.leftTime)}else this.txtLeftTime.string=GetLanguage(200026);this.rankId=this.actInfo.roundCfg.rank_id;var s=configRanktype.getDataByKey(this.rankId);M=s.prefix;var d=new Array;d.push({type:this.rankId,server:1,page:1}),this.curRankPage=1,IS(k).reqRankList(d);var h=IS(L).getRankRewardList(this.actInfo);this.rewardList.datas=h,this.tabBtns[G].itemGo.active,this.SetIndex(G)},d.registerUpdateHandler=function(){this.addEvent(g.RankInfoBack,this.UpdateRankInfo,this),this.addEvent(T.OnActivityInfoUpdate,this.OnViewUpdate,this)},d.onBeforeClose=function(){this.canUpdate=!1,this.rankId=0,this.rankList.clearData(),this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0)},d.onDestroy=function(){},d.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0){this.canUpdate=!0;var i=f.getTimeData(this.leftTime);Math.floor(this.leftTime/86400)>0?this.txtLeftTime.string=m.formatStrWithMirrorDeal(GetLanguage(200080),i[3],i[2]):this.txtLeftTime.string=GetLanguage(200081)+f.formatTimeForSecond(this.leftTime)}else this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1},d.SetIndex=function(t){this.curIndex!=t&&(this.curIndex>0&&(this.tabBtns[this.curIndex].selectedGo.active=!1,this.tabBtns[this.curIndex].normalGo.active=!0),this.curIndex=t,this.tabBtns[this.curIndex].normalGo.active=!1,this.tabBtns[this.curIndex].selectedGo.active=!0,this.curIndex==b?(this.nodeReward.active=!0,this.nodeRank.active=!1,this.nodeTopRank.active=!0,this.nodeMyRank.active=!0,this.imgTitle.node.active=!1,this.rewardList.updateAll()):this.curIndex==G&&(this.nodeReward.active=!1,this.nodeRank.active=!0,this.nodeTopRank.active=!0,this.nodeMyRank.active=!0,this.imgTitle.node.active=!1,this.rankList.updateAll()))},d.UpdateRankInfo=function(){if(this.rankInfo=IS(I).GetRankInfoByType(this.rankId),this.rankInfo){var t;this.txtMyRank.string=0!=this.rankInfo.my_info.rank?this.rankInfo.my_info.rank:GetLanguage(200037),this.txtMyScore.string=r.formatStr("%s%s",M,m.GetNumString(null!=(t=this.rankInfo.my_info.score)?t:0)),this.rankList.datas=this.rankInfo.rank_list;for(var i=1;i<=3;i++)this.roleList[i].show(this.rankInfo.rank_list[i-1])}},d.OnViewUpdate=function(){this.actInfo.state!=x.Open&&this.close()},n}(w)),function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).rewardScroll=void 0,i.txtRank=void 0,i.rankIcon=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.txtRank=l.findChildComponent(this.node,"rankNum",a),this.rankIcon=l.findChildComponent(this.node,"rankIcon",o);var t=l.findChildComponent(this.node,"rewardScroll",s);this.rewardScroll=this.view.addUIList(t,V,!1),this.rewardScroll.touchEvent=!1},e.onRender=function(t,i){this.rewardScroll.datas=t.rank_reward,this.rewardScroll.scrollView.enabled=t.rank_reward.length>=6,this.rewardScroll.touchEvent=t.rank_reward.length>=6;var n=t.rank_range[0],e=t.rank_range[1];n==e&&n<=3?(this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+n)):(this.rankIcon.node.active=!1,this.txtRank.node.active=!0,t.show&&""!=t.show?this.txtRank.string=t.show:this.txtRank.string=r.formatStr("%s-%s",n,e))},e.onItemClick=function(){},n}(c)),E=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,i.imgIcon=void 0,i.txtRank=void 0,i.rankIcon=void 0,i.txtName=void 0,i.txtServer=void 0,i.txtScore=void 0,i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.imgFrame=l.findChildComponent(this.node,"imgFrame",o),this.imgIcon=l.findChildComponent(this.node,"imgFrame/imgIcon",o),this.txtRank=l.findChildComponent(this.node,"rankNum",a),this.rankIcon=l.findChildComponent(this.node,"rankIcon",o),this.txtName=l.findChildComponent(this.node,"info/name",a),this.txtServer=l.findChildComponent(this.node,"info/server",a),this.txtScore=l.findChildComponent(this.node,"score",a),this.view.addComponentCallbackListener(this.imgFrame.node,e.EventType.CLICK,(function(){IS(u).reqOtherRoleNotice(t.data.belong_id)}))},s.onRender=function(t,i){this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name,this.txtServer.string="[s"+t.serv_id+"]",this.txtScore.string=M+m.GetNumString(t.score),t.rank<=3?(this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+t.rank)):(this.rankIcon.node.active=!1,this.txtRank.node.active=!0,this.txtRank.string=t.rank)},s.onItemClick=function(){1004==this.data.rank_id?IS(u).reqOtherRoleNotice(this.data.info.belong_id,2):IS(u).reqOtherRoleNotice(this.data.info.belong_id)},n}(c),O=function(){function t(){this.view=void 0,this.node=void 0,this.rank=void 0,this.txtName=void 0,this.txtServer=void 0,this.txtScore=void 0,this.imgFrame=void 0,this.imgIcon=void 0,this.job=void 0,this.data=void 0,this.role=void 0}var i=t.prototype;return i.init=function(t,i,n){this.view=i,this.node=t,this.rank=n,this.onInit()},i.onInit=function(){var t=this;this.job=l.findChild(this.node,"role"),this.txtName=l.findChildComponent(this.node,"info/name",a),this.txtServer=l.findChildComponent(this.node,"info/server",a),this.txtScore=l.findChildComponent(this.node,"score",a),this.imgFrame=l.findChild(this.node,"imgFrame"),this.imgIcon=l.findChildComponent(this.node,"imgFrame/imgIcon",o),this.view.addComponentCallbackListener(this.imgFrame,e.EventType.CLICK,(function(){t.data&&IS(u).reqOtherRoleNotice(t.data.belong_id)}));var i=l.findChild(this.node,"role/click");this.view.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.data&&IS(u).reqOtherRoleNotice(t.data.belong_id)}))},i.show=function(t){var i;if(this.data=t,this.txtName.string=GetLanguage(200038),this.txtServer.string="",this.txtScore.string=null!=(i=B[this.view.actType])?i:"0",this.imgIcon.node.active=!1,null!=this.role&&(this.view.removeUnitModel(this.role),this.role=null),t){var n,e=t.figure;this.role=IS(v).AddRoleModel(this.view,e,this.job,N[this.rank],.9),this.imgIcon.node.active=!0,this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name,this.txtServer.string="[s"+t.serv_id+"]",this.txtScore.string=null!=(n=B[this.view.actType])?n:""+m.GetNumString(t.score,!0)}},t}(),V=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},e.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},n}(c);n._RF.pop()}}}));

