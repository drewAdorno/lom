System.register("chunks:///_virtual/PvpCometitionRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./RankTitle.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./CommonModel.ts","./MessageView.ts","./FriendControl.ts","./FrameDataCache.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,a,s,r,d,h,l,m,c,v,f,k,g,u,C,p,I,R,y,T;return{setters:[function(t){i=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy,o=t.Button,a=t.HorizontalTextAlignment,s=t.Sprite,r=t.Label,d=t.ScrollView},function(t){h=t.V2},function(t){l=t.RankTitle,m=t.TitleType},function(t){c=t.ListItem},function(t){v=t.default},null,function(t){f=t.CommonModel},function(t){k=t.default},function(t){g=t.default},function(t){u=t.FrameDataCache},function(t){C=t.default},function(t){p=t.RankDefine},function(t){I=t.RankModel},function(t){R=t.RoleDataCache},function(t){y=t.PlayerAttr},function(t){T=t.BaseView}],execute:function(){var L;e._RF.push({},"ec536FkusBCQKBBg+ZlUVM2","PvpCometitionRankView",void 0);var w=((L={})[1]=new h(0,0),L[2]=new h(0,0),L[3]=new h(0,0),L),_=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).tabBtns=[],i.actType=void 0,i.taskRed=void 0,i.curIndex=0,i.topBg=void 0,i.imgTitle=void 0,i.nodeReward=void 0,i.nodeRank=void 0,i.nodeTopRank=void 0,i.nodeMyRank=void 0,i.giftList=void 0,i.rankList=void 0,i.txtMyRank=void 0,i.titleBg=void 0,i.txtMyTitle=void 0,i.myFrame=void 0,i.myIcon=void 0,i.imgHeadFrame=void 0,i.txtMyName=void 0,i.txtLeftTime=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.roleList={},i.actInfo=void 0,i.rankId=void 0,i.rankInfo=void 0,i.curRankPage=void 0,i.isSendToServer=!1,i.name="PvpCometitionRankView",i.url="ui/module/pvp/PvpCometitionRankView",i.poolTime=3e3,i}i(e,t);var h=e.prototype;return h.onInit=function(){var t=this,i=this.findChild("root/bg/btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()}));var n=this.findChild("root/bg/title/tips");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){var t=GetLanguage(104235);""!=t&&k.showBoxTip({tip:t,btnCnt:1,horizontalAlign:a.LEFT})})),this.nodeRank=this.findChild("root/nodeRank"),this.nodeTopRank=this.findChild("root/nodeTopRank"),this.nodeMyRank=this.findChild("root/myRank"),this.topBg=this.findChildComponent("root/bg/imgBanner",s),this.imgTitle=this.findChildComponent("root/imgTitle",s),this.txtLeftTime=this.findChildComponent("root/txtTime",r),this.txtMyRank=this.findChildComponent("root/myRank/rankNum",r),this.txtMyTitle=this.findChild("root/myRank/title"),this.titleBg=this.findChild("root/myRank/titleBg"),this.txtMyName=this.findChildComponent("root/myRank/name",r),this.myFrame=this.findChildComponent("root/myRank/imgFrame",s),this.myIcon=this.findChildComponent("root/myRank/imgFrame/imgIcon",s),this.imgHeadFrame=this.findChildComponent("root/myRank/imgFrame/imgHeadFrame",s);var e=this.findChildComponent("root/nodeRank/rankList",d);this.rankList=this.addUIList(e,_),this.addComponentCallbackListener(e.node,d.EventType.SCROLL_TO_BOTTOM,(function(){var i=t.rankInfo.total_num,n=t.rankInfo.rank_list.length;if(!t.isSendToServer&&t.curRankPage<t.rankInfo.max_page&&n<i){t.curRankPage++;var e=new Array;e.push({type:t.rankId,server:1,page:t.curRankPage}),IS(C).reqRankList(e),t.isSendToServer=!0}}));for(var h=1;h<=3;h++){var l=new x;l.init(this.findChild("root/nodeTopRank/rank"+h),this,h),this.roleList[h]=l}},h.onAfterOpen=function(){for(var t in this.roleList)this.roleList.hasOwnProperty(t)&&this.roleList[t].show();this.txtMyName.string=IS(R).GetRoleAttr(y.ROLE_ATTR_NAME),this.loadRemoteIcon(IS(R).GetRoleAttr(y.ROLE_ATTR_HEAD_URL),this.myIcon),this.rankId=1025;var i=new Array;i.push({type:this.rankId,server:1,page:1}),this.curRankPage=1,IS(C).reqRankList(i),this.UpdateRankInfo()},h.GetRankTitle=function(t){if(t&&t.extra&&t.extra.length>0){for(var i,e=-1,o=n(t.extra);!(i=o()).done;){var a=i.value;11==a.k&&(e=a.v)}var s=configCross_pvp_grade.getDataByKey(e);if(s)return s.title}},h.registerUpdateHandler=function(){this.addEvent(p.RankInfoBack,this.UpdateRankInfo,this)},h.onBeforeClose=function(){this.canUpdate=!1,this.rankId=0,this.rankList.clearData()},h.onDestroy=function(){},h.onUpdate=function(t){},h.UpdateRankInfo=function(){if(this.rankInfo=IS(I).GetRankInfoByType(this.rankId),this.rankInfo){var t="";0==this.rankInfo.my_info.rank?t=GetLanguage(200037):this.rankInfo.my_info.rank<=100&&(t=this.rankInfo.my_info.rank),this.txtMyRank.string=t;var i=this.GetRankTitle(this.rankInfo.my_info);if(i)new l(this,this.txtMyTitle).SetRankTitle(i,m.NORMAL),this.titleBg.active=!0,this.txtMyTitle.active=!0;else this.txtMyTitle.active=!1,this.titleBg.active=!1;for(var n=[],e=0;e<this.rankInfo.rank_list.length;e++)e>2&&n.push(this.rankInfo.rank_list[e]);this.rankList.datas=n;for(var o=1;o<=3;o++)this.roleList[o].show(this.rankInfo.rank_list[o-1]);var a=IS(u).curFrameId;if(a>0){var s=configAvatar_frame.getDataByKey(a);this.loadIcon(this.imgHeadFrame,"icon_frame",s.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1;this.isSendToServer=!1}},h.OnViewUpdate=function(){},e}(T)),function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,i.imgIcon=void 0,i.imgHeadFrame=void 0,i.txtRank=void 0,i.rankIcon=void 0,i.txtName=void 0,i.txtScore=void 0,i.title=void 0,i.bg=void 0,i.rankBg=void 0,i.rankTitleBg=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){var t=this;this.bg=v.findChild(this.node,"bg"),this.rankBg=v.findChildComponent(this.node,"rankBg",s),this.rankTitleBg=v.findChildComponent(this.node,"rankBg/titleBg",s),this.imgFrame=v.findChildComponent(this.node,"imgFrame",s),this.imgIcon=v.findChildComponent(this.node,"imgFrame/imgIcon",s),this.imgHeadFrame=v.findChildComponent(this.node,"imgFrame/imgHeadFrame",s),this.txtRank=v.findChildComponent(this.node,"rankNum",r),this.rankIcon=v.findChildComponent(this.node,"rankIcon",s),this.txtName=v.findChildComponent(this.node,"name",r),this.txtScore=v.findChildComponent(this.node,"score",r),this.title=v.findChild(this.node,"title"),this.view.addComponentCallbackListener(this.imgFrame.node,o.EventType.CLICK,(function(){IS(g).reqOtherRoleNotice(t.data.belong_id)}))},e.onRender=function(t,i){this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name;var n=this.view.GetRankTitle(t);new l(this.view,this.title).SetRankTitle(n,m.NORMAL),t.rank<=3?(this.rankIcon.node.active=!0,this.txtRank.node.active=!1,this.view.loadIcon(this.rankIcon,"common","common_ICON_paiming0"+t.rank),this.view.loadIcon(this.rankBg,"rank_numBg","phb_img_di_0"+t.rank),this.view.loadIcon(this.rankTitleBg,"rank","phb_img_txtdi_0"+t.rank),this.bg.active=!1,this.rankBg.node.active=!0):(this.rankIcon.node.active=!1,this.txtRank.node.active=!0,this.bg.active=!0,this.rankBg.node.active=!1,this.txtRank.string=t.rank>100?"":t.rank);var e=t.head.frame_id;if(e>0){this.imgHeadFrame.node.active=!0;var o=configAvatar_frame.getDataByKey(e);this.view.loadIcon(this.imgHeadFrame,"icon_frame",o.icon)}else this.imgHeadFrame.node.active=!1},e.onItemClick=function(){IS(g).reqOtherRoleNotice(this.data.info.belong_id)},n}(c)),x=function(){function t(){this.view=void 0,this.node=void 0,this.rank=void 0,this.txtName=void 0,this.txtScore=void 0,this.imgFrame=void 0,this.imgIcon=void 0,this.rankIcon=void 0,this.job=void 0,this.data=void 0,this.role=void 0,this.title=void 0}var i=t.prototype;return i.init=function(t,i,n){this.view=i,this.node=t,this.rank=n,this.onInit()},i.onInit=function(){var t=this;this.job=v.findChild(this.node,"role"),this.txtName=v.findChildComponent(this.node,"name",r),this.imgFrame=v.findChild(this.node,"imgFrame"),this.imgIcon=v.findChildComponent(this.node,"imgFrame/imgIcon",s),this.view.addComponentCallbackListener(this.imgFrame,o.EventType.CLICK,(function(){t.data&&IS(g).reqOtherRoleNotice(t.data.belong_id)}));var i=v.findChild(this.node,"role/click");this.view.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.data&&IS(g).reqOtherRoleNotice(t.data.belong_id)})),this.title=v.findChild(this.node,"title")},i.show=function(t){if(this.data=t,this.txtName.string=GetLanguage(200038),this.imgIcon.node.active=!1,null!=this.role&&(this.view.removeUnitModel(this.role),this.role=null),t){var i=t.figure;this.role=IS(f).AddRoleModel(this.view,i,this.job,null,.9),this.imgIcon.node.active=!0,this.view.loadRemoteIcon(t.head.url,this.imgIcon),i.mount_figure<=0&&(this.view.getUnitModel(this.role).position=w[this.rank]);var n=this.view.GetRankTitle(t);if(n)this.title.active=!0,new l(this.view,this.title).SetRankTitle(n,m.NORMAL);else this.title.active=!1;this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name}else this.title.active=!1},t}();e._RF.pop()}}}));

