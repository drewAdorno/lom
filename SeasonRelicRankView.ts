System.register("chunks:///_virtual/SeasonRelicRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./CommonModel.ts","./MessageView.ts","./FriendControl.ts","./GuildControl.ts","./FrameDataCache.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./BaseView.ts"],(function(e){"use strict";var n,t,i,o,a,r,d,s,h,c,m,l,f,v,k,y,R,p,I,u,C,g,S,_;return{setters:[function(e){n=e.inheritsLoose,t=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,o=e.Button,a=e.ScrollView,r=e.Sprite,d=e.Label,s=e.js},function(e){h=e.ItemGrid},function(e){c=e.ListItem},function(e){m=e.default},function(e){l=e.default},null,function(e){f=e.default},function(e){v=e.CommonModel},function(e){k=e.default},function(e){y=e.default},function(e){R=e.default},function(e){p=e.FrameDataCache},function(e){I=e.default},function(e){u=e.RankDefine},function(e){C=e.RankModel},function(e){g=e.RoleDataCache},function(e){S=e.PlayerAttr},function(e){_=e.BaseView}],execute:function(){i._RF.push({},"2ef640DlydOnoJ3OZEpAhNU","SeasonRelicRankView",void 0);var x=1054,T=1,w=2,L={1:"1st",2:"2rd",3:"3th"},b=(e("default",function(e){function i(){var n;return(n=e.call(this)||this).tabBtns=[],n.curIndex=0,n.nodeTopRank=void 0,n.scrollRank=void 0,n.scrollReward=void 0,n.rankList=void 0,n.rewardList=void 0,n.page=1,n.isSendToServer=void 0,n.rankInfo=void 0,n.rank_info_list=void 0,n.myInfo=void 0,n.Top3NodeList=[],n.myRankIcon=void 0,n.imgHeadFrame=void 0,n.myRankIndex=void 0,n.myServer=void 0,n.meNoRank=void 0,n.myRankHeadFram=void 0,n.myRankHeadBase=void 0,n.myRankScore=void 0,n.myRankName=void 0,n.nodeMyRank=void 0,n.nodeMyReward=void 0,n.myRewardScroll=void 0,n.txtMyRank=void 0,n.myIcon=void 0,n.name="SeasonRelicRankView",n.url="ui/module/season/scene-view/SeasonRelicRankView",n.poolTime=3e3,n}n(i,e);var h=i.prototype;return h.onInit=function(){var e=this,n=this.findChild("root/btnClose");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){e.close()}));for(var t=function(n){var t=m.findChild(e.node,s.formatStr("root/bottomBtn/item%s",n)),i={itemGo:t,normalGo:m.findChild(t,"normal"),selectedGo:m.findChild(t,"selected"),index:n};e.addComponentCallbackListener(t,o.EventType.CLICK,(function(){e.SetIndex(i.index)})),e.tabBtns[n]=i},i=1;i<=2;i++)t(i);this.scrollReward=this.findChildComponent("root/rewardList",a),this.rewardList=this.addUIList(this.scrollReward,N,!0),this.scrollRank=this.findChildComponent("root/rankList",a),this.addComponentCallbackListener(this.scrollRank.node,a.EventType.SCROLL_TO_BOTTOM,(function(){if(!(e.isSendToServer||e.rank_info_list.length>=e.rankInfo.total_num)){e.page+=1;var n=new Array;n.push({type:x,server:2,page:e.page}),IS(I).reqRankList(n),e.isSendToServer=!0}})),this.rankList=this.addUIList(this.scrollRank,b);for(var h=function(){var n={baseNode:e.findChild("root/nodeTopRank/rank"+c),txtName:e.findChildComponent("root/nodeTopRank/rank"+c+"/info/name",d),txtScore:e.findChildComponent("root/nodeTopRank/rank"+c+"/score",d),txtServer:e.findChildComponent("root/nodeTopRank/rank"+c+"/info/server",d),imgHead:e.findChildComponent("root/nodeTopRank/rank"+c+"/imgFrame/imgIcon",r),imgFrame:e.findChildComponent("root/nodeTopRank/rank"+c+"/imgFrame/imgHeadFrame",r),imgHeadFram:e.findChild("root/nodeTopRank/rank"+c+"/imgFrame/frame2"),icon:e.findChild("root/nodeTopRank/rank"+c+"/imgFrame"),info:e.findChild("root/nodeTopRank/rank"+c+"/info"),nodeEmpty:e.findChild("root/nodeTopRank/rank"+c+"/empty"),nodeJob:e.findChild("root/nodeTopRank/rank"+c+"/role"),clickbtn:e.findChild("root/nodeTopRank/rank"+c+"/role/click"),belong_id:0};e.addComponentCallbackListener(n.icon,o.EventType.CLICK,(function(){e.onClickCheck(n.belong_id)})),e.addComponentCallbackListener(n.clickbtn,o.EventType.CLICK,(function(){e.onClickCheck(n.belong_id)})),e.Top3NodeList.push(n)},c=1;c<4;c++)h();this.nodeMyRank=this.findChild("root/myRank"),this.nodeMyReward=this.findChild("root/myReward"),this.myRankIcon=this.findChildComponent("root/myRank/imgFrame/frame/imgIcon",r),this.imgHeadFrame=this.findChildComponent("root/myRank/imgFrame/frame/imgHeadFrame",r),this.myRankHeadBase=this.findChild("root/myRank/imgFrame/frame"),this.myRankHeadFram=this.findChild("root/myRank/imgFrame/frame2"),this.myRankName=this.findChildComponent("root/myRank/info/name",d),this.myRankIndex=this.findChildComponent("root/myRank/rank",d),this.myServer=this.findChildComponent("root/myRank/info/server",d),this.meNoRank=this.findChild("root/myRank/no_rank"),this.myRankScore=this.findChildComponent("root/myRank/score",d);var l=this.findChildComponent("root/myReward/rewardScroll",a);this.myRewardScroll=this.addUIList(l,F,!0),this.txtMyRank=this.findChildComponent("root/myReward/rankNum",d),this.myIcon=this.findChildComponent("root/myReward/rankIcon",r),this.nodeTopRank=this.findChild("root/nodeTopRank")},h.registerUpdateHandler=function(){this.addEvent(u.RankInfoBack,this.refreshRank,this)},h.onAfterOpen=function(){this.SetIndex(T);var e=configSeason_rank_reward.getDataByList("type",x);this.rewardList.datas=e,this.rebaseTop3()},h.refreshRank=function(e){var n=IS(C).GetRankInfoByType(x);if(null==n)return this.rebaseTop3(),this.refreshTop3(),this.refreshScrollItem(),void this.refreshMyInfo();this.rankInfo=n,this.rank_info_list=n.rank_list,this.myInfo=n.my_info,this.rebaseTop3(),this.refreshTop3(),this.refreshScrollItem(),this.refreshMyInfo(),this.isSendToServer=!1},h.onClickCheck=function(e){this.rank_info_list&&this.rank_info_list.length>0&&(2==configRanktype.getDataByKey(x).rank_type?e==IS(g).GetServerId()?k.showFlyTip(GetLanguage(200230)):IS(R).send_29_1(e):IS(y).reqOtherRoleNotice(e))},h.rebaseTop3=function(){for(var e,n=t(this.Top3NodeList);!(e=n()).done;){var i=e.value;i.txtName.string="",i.txtServer.string="",i.txtScore.string="0"}this.Top3NodeList[0].nodeJob.removeAllChildren(),this.Top3NodeList[1].nodeJob.removeAllChildren(),this.Top3NodeList[2].nodeJob.removeAllChildren()},h.refreshScrollItem=function(){var e=IS(C).GetRankInfoByType(x),n=new Array;if(e)for(var t=0;t<e.rank_list.length;t++)t>2&&n.push({info:e.rank_list[t],rank_id:x});this.rankList.datas=n},h.refreshTop3=function(){if(!f.isEmpty(this.rank_info_list))for(var e,n=t(this.rank_info_list.entries());!(e=n()).done;){var i=e.value,o=i[0],a=i[1];if(o>2)break;var d=this.Top3NodeList[o];d.belong_id=a.belong_id;var s=a.figure;IS(v).AddRoleModel(this,s,d.nodeJob),d.icon.active=!0,d.info.active=!0,d.imgHead.node.active=!0,d.imgHeadFram.active=!0,d.txtScore.node.active=!0,d.nodeEmpty.active=!1;var h=m.findChildComponent(d.baseNode,"imgFrame/rank_icon",r);this.loadIcon(h,"rank","phb_paiming_tx_"+L[o+1]),this.loadRemoteIcon(a.head.url,d.imgHead);var c=a.head.frame_id;if(c>0){d.imgFrame.node.active=!0;var k=configAvatar_frame.getDataByKey(c);this.loadIcon(d.imgFrame,"icon_frame",k.icon)}else d.imgFrame.node.active=!1;d.txtName.string=a.name,d.txtScore.string=l.GetNumString(a.score),d.txtServer.string="[s"+a.serv_id+"]"}},h.refreshMyInfo=function(){this.myInfo||(this.myInfo={});var e=m.findChildComponent(this.node,"/root/myRank/rankIcon",r);this.myInfo.rank>0?(this.myInfo.rank<=3?(this.myRankIndex.node.active=!1,e.node.active=!0,this.loadIcon(e,"common","common_ICON_paiming0"+this.myInfo.rank)):(this.myRankIndex.node.active=!0,this.myRankIndex.string=this.myInfo.rank+"",e.node.active=!1),this.meNoRank.active=!1,this.myServer.node.active=!0):(this.meNoRank.active=!0,this.myServer.node.active=!1,this.myRankIndex.node.active=!1,e.node.active=!1);var n=IS(g),i=n.GetRoleAttr(S.ROLE_ATTR_HEAD_URL);n.GetRoleAttr(S.ROLE_ATTR_HEAD_ID);if(this.curIndex==w)this.myRankIcon.node.active=!1,this.myRankHeadBase.active=!1,this.myRankHeadFram.active=!1,this.myRankName.string=IS(g).GetRoleName();else{this.myRankIcon.node.active=!0,this.myRankHeadBase.active=!0,this.myRankHeadFram.active=!0,this.loadRemoteIcon(i,this.myRankIcon);var o=IS(p).curFrameId;if(o>0){var a=configAvatar_frame.getDataByKey(o);this.loadIcon(this.imgHeadFrame,"icon_frame",a.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1;this.myServer.string="[s"+IS(g).GetServerId()+"]",this.myRankName.string=IS(g).GetRoleName()}var d=configRanktype.getDataByKey(x).prefix;this.myRankScore.string=d+l.GetNumString(this.myInfo.score||0);var s,h=0;this.rankInfo&&this.rankInfo.my_info&&(h=this.rankInfo.my_info.rank);var c=configSeason_rank_reward.getDataByList("type",x);if(0==h)s=c[c.length-1];else for(var f,v=t(c);!(f=v()).done;){var k=f.value,y=k.range[0],R=k.range[1];if(h>=y){if(0==R){s=k;break}if(h<=R){s=k;break}}}if(this.myRewardScroll.datas=s.reward,0==h){this.myIcon.node.active=!1,this.txtMyRank.node.active=!0;var I="",u=s.range[0],C=s.range[1];I=0==C?u+"+":u==C?u:C+"+",this.txtMyRank.string=I}else h>0&&h<=3?(this.myIcon.node.active=!0,this.txtMyRank.node.active=!1,this.loadIcon(this.myIcon,"common","common_ICON_paiming0"+h)):(this.myIcon.node.active=!1,this.txtMyRank.node.active=!0,this.txtMyRank.string=h+"")},h.onBeforeClose=function(){var e;null==(e=this.rankList)||e.clearData(),this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0)},h.onDestroy=function(){},h.SetIndex=function(e){if(this.curIndex!=e){if(this.curIndex>0&&(this.tabBtns[this.curIndex].selectedGo.active=!1,this.tabBtns[this.curIndex].normalGo.active=!0),this.curIndex=e,this.tabBtns[this.curIndex].normalGo.active=!1,this.tabBtns[this.curIndex].selectedGo.active=!0,this.curIndex==w)this.nodeMyRank.active=!1,this.nodeMyReward.active=!0,this.scrollRank.node.active=!1,this.rewardList.node.active=!0;else{this.nodeMyRank.active=!0,this.nodeMyReward.active=!1,this.scrollRank.node.active=!0,this.rewardList.node.active=!1;for(var n,i=t(this.Top3NodeList);!(n=i()).done;){var o=n.value;o.baseNode.active=!0,o.icon.active=!1,o.info.active=!1,o.txtScore.node.active=!1,o.nodeEmpty.active=!0}}this.rankList.scrollView.scrollToTop(),this.page=1,this.isSendToServer=!1;var a=new Array;a.push({type:x,server:2,page:this.page}),IS(I).reqRankList(a)}},i}(_)),function(e){function t(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))||this).imgHeadFrame=void 0,n.txtScore=void 0,n.txtRank=void 0,n.txtName=void 0,n.txtServer=void 0,n.btnHead=void 0,n}n(t,e);var i=t.prototype;return i.onInit=function(){var e=this;this.imgHeadFrame=m.findChildComponent(this.node,"imgFrame/frame/imgHeadFrame",r),this.txtScore=m.findChildComponent(this.node,"score",d),this.txtRank=m.findChildComponent(this.node,"rank",d),this.txtServer=m.findChildComponent(this.node,"Node/server",d),this.txtName=m.findChildComponent(this.node,"Node/name",d),this.btnHead=m.findChild(this.node,"imgFrame"),this.view.addComponentCallbackListener(this.btnHead,o.EventType.CLICK,(function(){e.onItemClick()}))},i.onRender=function(e,n){var t=e.info.head.frame_id;if(t>0){this.imgHeadFrame.node.active=!0;var i=configAvatar_frame.getDataByKey(t);this.view.loadIcon(this.imgHeadFrame,"icon_frame",i.icon)}else this.imgHeadFrame.node.active=!1;this.txtName.string=e.info.name,this.txtServer.string="[s"+e.info.serv_id+"]",this.txtRank.string=e.info.rank;var o=configRanktype.getDataByKey(x).prefix;this.txtScore.string=o+l.GetNumString(e.info.score)},i.onItemClick=function(){1004==this.data.rank_id?IS(y).reqOtherRoleNotice(this.data.info.belong_id,2):32==configRanktype.getDataByKey(this.data.rank_id).rank_type?this.data.info.belong_id==IS(g).GetGuildId()?k.showFlyTip(GetLanguage(200233)):IS(R).send_29_1(this.data.info.belong_id):IS(y).reqOtherRoleNotice(this.data.info.belong_id)},t}(c)),N=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))||this).rewardScroll=void 0,n.txtRank=void 0,n.rankIcon=void 0,n}n(t,e);var i=t.prototype;return i.onInit=function(){this.txtRank=m.findChildComponent(this.node,"rankNum",d),this.rankIcon=m.findChildComponent(this.node,"rankIcon",r);var e=m.findChildComponent(this.node,"rewardScroll",a);this.rewardScroll=this.view.addUIList(e,F,!1),this.rewardScroll.touchEvent=!1},i.onRender=function(e,n){this.rewardScroll.datas=e.reward;var t=e.range[0],i=e.range[1];if(t==i&&t<=3)this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+t);else{this.rankIcon.node.active=!1,this.txtRank.node.active=!0;var o="";o=0==i?t+"+":t==i?t:t+"-"+i,this.txtRank.string=o}},i.onItemClick=function(){},t}(c),F=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))||this).itemGridNode=void 0,n.itemGrid=void 0,n}n(t,e);var i=t.prototype;return i.onInit=function(){this.itemGridNode=m.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},i.onRender=function(e,n){this.itemGrid.SetItemId(e[0],e[1])},t}(c);i._RF.pop()}}}));
