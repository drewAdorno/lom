System.register("chunks:///_virtual/ActivityFlappyFrogRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./FriendControl.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var n,i,e,o,a,r,s,d,h,c,f,l,m,k,v,u,y,p,R;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t.Button,o=t.Label,a=t.Sprite,r=t.ScrollView,s=t.js},function(t){d=t.ListItem},function(t){h=t.default},function(t){c=t.default},null,function(t){f=t.default},function(t){l=t.default},function(t){m=t.RankDefine},function(t){k=t.RankModel},function(t){v=t.RoleDataCache},function(t){u=t.PlayerAttr},function(t){y=t.default},function(t){p=t.ActivityType},function(t){R=t.BaseView}],execute:function(){var g;i._RF.push({},"7c1b7PS0olNz7yOMLMUzBwt","ActivityFlappyFrogRankView",void 0);var I="",C=((g={})[p.FrogFlappy]=!1,g),x=(t("default",function(t){function i(){var n;return(n=t.call(this)||this).tabBtns=[],n.actType=void 0,n.curIndex=0,n.nodeReward=void 0,n.nodeRank=void 0,n.nodeTopRank=void 0,n.nodeMyRank=void 0,n.rankList=void 0,n.txtMyRank=void 0,n.txtMyScore=void 0,n.myFrame=void 0,n.myIcon=void 0,n.txtMyName=void 0,n.txtServer=void 0,n.actInfo=void 0,n.rankId=void 0,n.rankInfo=void 0,n.curRankPage=void 0,n.name="ActivityFlappyFrogRankView",n.url="ui/module/activityFrog/ActivityFlappyFrogRankView",n}n(i,t);var d=i.prototype;return d.onInit=function(){var t=this,n=this.findChild("imgMask");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.close()}));var i=this.findChild("btnClose");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.close()})),this.nodeReward=this.findChild("root/nodeReward"),this.nodeRank=this.findChild("root/nodeRank"),this.nodeTopRank=this.findChild("root/nodeTopRank"),this.nodeMyRank=this.findChild("root/myRank"),this.txtMyRank=this.findChildComponent("root/myRank/rankNum",o),this.txtMyScore=this.findChildComponent("root/myRank/score",o),this.txtMyName=this.findChildComponent("root/myRank/name",o),this.txtServer=this.findChildComponent("root/myRank/txtServer",o),this.myFrame=this.findChildComponent("root/myRank/imgFrame",a),this.myIcon=this.findChildComponent("root/myRank/imgFrame/imgIcon",a);var s=this.findChildComponent("root/nodeRank/rankList",r);this.rankList=this.addUIList(s,x),this.addComponentCallbackListener(s.node,r.EventType.SCROLL_TO_BOTTOM,(function(){if(t.curRankPage<t.rankInfo.max_page){t.curRankPage++;var n=new Array;n.push({type:t.rankId,server:1,page:t.curRankPage}),IS(l).reqRankList(n)}}))},d.registerUpdateHandler=function(){this.addEvent(m.RankInfoBack,this.UpdateRankInfo,this)},d.onAfterOpen=function(){this.actType=p.FrogFlappy,this.txtMyName.string=IS(v).GetRoleAttr(u.ROLE_ATTR_NAME),C[this.actType]?(this.txtMyName.node.setPosition(this.txtMyName.node.getPosition().x,0),this.txtServer.node.active=!1):(this.txtMyName.node.setPosition(this.txtMyName.node.getPosition().x,15),this.txtServer.node.active=!0,this.txtServer.string=s.formatStr("[s%s]",IS(v).GetRoleAttr(u.ROLE_ATTR_SERVER))),this.loadRemoteIcon(IS(v).GetRoleAttr(u.ROLE_ATTR_HEAD_URL),this.myIcon),this.actInfo=IS(y).GetActivityInfo(this.actType),this.rankId=this.actInfo.roundCfg.rank_id;var t=configRanktype.getDataByKey(this.rankId);I=t.prefix;var n=new Array;n.push({type:this.rankId,server:1,page:1}),this.curRankPage=1,IS(l).reqRankList(n)},d.onBeforeClose=function(){this.rankId=0,this.rankList.clearData(),this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0)},d.onDestroy=function(){},d.UpdateRankInfo=function(){if(this.rankInfo=IS(k).GetRankInfoByType(this.rankId),this.rankInfo){var t;this.txtMyRank.string=0!=this.rankInfo.my_info.rank?this.rankInfo.my_info.rank:GetLanguage(200037),this.txtMyScore.string=s.formatStr("%s%s",I,c.GetNumString(null!=(t=this.rankInfo.my_info.score)?t:0));for(var n=[],i=0;i<this.rankInfo.rank_list.length;i++)n.push(this.rankInfo.rank_list[i]);this.rankList.datas=n}},i}(R)),function(t){function i(){for(var n,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,n.imgIcon=void 0,n.txtRank=void 0,n.txtName=void 0,n.txtServer=void 0,n.txtScore=void 0,n}n(i,t);var r=i.prototype;return r.onInit=function(){var t=this;this.imgFrame=h.findChildComponent(this.node,"imgFrame",a),this.imgIcon=h.findChildComponent(this.node,"imgFrame/imgIcon",a),this.txtRank=h.findChildComponent(this.node,"rankNum",o),this.txtName=h.findChildComponent(this.node,"name",o),this.txtServer=h.findChildComponent(this.node,"txtServer",o),this.txtScore=h.findChildComponent(this.node,"score",o),this.view.addComponentCallbackListener(this.imgFrame.node,e.EventType.CLICK,(function(){IS(f).reqOtherRoleNotice(t.data.belong_id)}))},r.onRender=function(t,n){this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name,C[p.FrogFlappy]?(this.txtName.node.setPosition(this.txtName.node.getPosition().x,-55),this.txtServer.node.active=!1):(this.txtName.node.setPosition(this.txtName.node.getPosition().x,-40),this.txtServer.node.active=!0,this.txtServer.string=s.formatStr("[s%s]",t.serv_id)),this.txtScore.string=I+c.GetNumString(t.score),this.txtRank.node.active=!0,this.txtRank.string=t.rank},r.onItemClick=function(){IS(f).reqOtherRoleNotice(this.data.info.belong_id)},i}(d));i._RF.pop()}}}));
