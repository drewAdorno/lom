System.register("chunks:///_virtual/FriendListView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./ObjectUtil.ts","./MessageView.ts","./PlantControl.ts","./PlantDefine.ts","./PlantModel.ts","./RoleDataCache.ts","./FriendControl.ts","./FriendDefine.ts","./FriendModel.ts","./UIDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var i,e,n,s,o,a,d,r,h,l,f,c,p,v,u,_,m,g,C,F,y,b,I,L,k,H,w;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.ScrollView,s=t.Button,o=t.UITransform,a=t.Size,d=t.Sprite,r=t.Label,h=t.sys,l=t.Layout},function(t){f=t.SelectedType,c=t.ListItem},function(t){p=t.default},function(t){v=t.default},null,function(t){u=t.default},function(t){_=t.default},function(t){m=t.default},function(t){g=t.PlantEventDefine},function(t){C=t.PlantModel},function(t){F=t.RoleDataCache},function(t){y=t.default},function(t){b=t.FriendDefine,I=t.FriendListType},function(t){L=t.FriendModel},function(t){k=t.PanelTabType,H=t.OpenFunction},function(t){w=t.BaseSubView}],execute:function(){var T;t("EFriendListOpenType",void 0),e._RF.push({},"2e411FvQEBEPKodUW4nKgMu","FriendListView",void 0),function(t){t[t.Default=0]="Default",t[t.Plant=1]="Plant",t[t.PlantRequestHelp=2]="PlantRequestHelp"}(T||(T=t("EFriendListOpenType",{})));t("default",function(t){function e(){var i;return(i=t.call(this)||this).friendList=void 0,i.curWaitFarmInfoRoleId=void 0,i.get_btn=void 0,i.utScrollView=void 0,i.openType=T.Default,i.openData=void 0,i.friend_info_list=void 0,i.friendInfo=void 0,i.list_content=void 0,i.item_height=100,i.screen_height=633,i.is_send_server=!1,i.send_num=0,i.page=1,i.nodeEmpty=void 0,i.name="FriendListView",i.url="ui/module/friend/FriendListView",i}i(e,t);var d=e.prototype;return d.onInit=function(){var t=this,i=this.findChildComponent("list",n);this.nodeEmpty=this.findChild("empty"),this.friendList=this.addUIList(i,P),this.friendList.selectedMode=f.SINGLE,this.list_content=this.findChild("list/view/content"),this.get_btn=this.findChild("get_btn"),this.addComponentCallbackListener(this.get_btn,s.EventType.CLICK,(function(){IS(y).reqGiveGetFriendGift()})),this.utScrollView=this.findChildComponent("list/view",o),this.addComponentCallbackListener(i.node,n.EventType.SCROLL_ENDED,(function(){t.checkNeedSend()}))},d.registerUpdateHandler=function(){var t=this;this.addEvent(b.FriendInfoBack,this.updateInfo,this),this.addEvent(g.ROLE_HOME_FARM_INFO_BACK,(function(i){t.curWaitFarmInfoRoleId&&i.role_id==t.curWaitFarmInfoRoleId&&(IS(C).tryOpenFarm(i),uiMgr.close("FriendView"),uiMgr.close("PlantFriendView"))}))},d.GetDetailHeight=function(){return 90*this.friend_info_list.length},d.checkNeedSend=function(){if(!(this.friend_info_list.length>=this.friendInfo.total_num)){var t=this.list_content.position.y;this.item_height=this.GetDetailHeight();var i=this.item_height+100;if(t+this.screen_height+100>i-1e3&&!this.is_send_server){if(this.is_send_server=!0,this.send_num++,this.send_num>this.friendInfo.total_num/10+1)return void printLogErr("出bug了，不可能请求这么多的 "+this.send_num);this.page++,IS(y).reqFriendList(I.FriendList,this.page)}}},d.onAfterOpen=function(){var t;this.friendInfo=IS(L).GetListInfoByType(I.FriendList),this.friend_info_list=[],this.openType=null!=(t=this.openArgs&&this.openArgs[0])?t:T.Default,this.get_btn.active=this.openType==T.Default,this.openData=this.openArgs&&this.openArgs[1],this.utScrollView.setContentSize(new a(this.utScrollView.contentSize.x,[631.418,670][this.openType==T.Default?0:1])),IS(y).reqFriendList(I.FriendList,1),this.send_num=1,this.page=1,this.is_send_server=!1,this.checkNeedSend()},d.onBeforeClose=function(){this.curWaitFarmInfoRoleId=null,this.openType=T.Default,this.openData=null},d.onDestroy=function(){},d.setOpenFromPlant=function(t){this.openType=t},d.updateInfo=function(){var t=IS(L).GetListByType(I.FriendList);this.friendList.datas=t,this.nodeEmpty.active="PlantFriendView"==this.parentView.name&&t.length<=0,this.friendInfo=IS(L).GetListInfoByType(I.FriendList),this.friend_info_list=t,this.is_send_server=!1,"FriendView"==this.parentView.name&&this.parentView.curType==k.Friend_List&&this.parentView.UpdateEmpty(t.length<=0,899000016)},e}(w));var P=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,i.imgIcon=void 0,i.imgHeadFrame=void 0,i.txtName=void 0,i.txtLev=void 0,i.txtPower=void 0,i.txtTime=void 0,i.txtRank=void 0,i.rank_icon=void 0,i.rank_1=void 0,i.rank_2=void 0,i.rank_3=void 0,i.gift_icon=void 0,i.gift_get_icon=void 0,i.gift_btn=void 0,i.look_btn=void 0,i.imgFavorabilty=void 0,i.txtFavorabilty=void 0,i.btnPlant=void 0,i.imgPlant=void 0,i.btnHelp=void 0,i.nodeHasHelp=void 0,i.canHelp=!0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.imgFrame=p.findChildComponent(this.node,"imgFrame",d),this.imgIcon=p.findChildComponent(this.node,"imgFrame/imgIcon",d),this.imgHeadFrame=p.findChildComponent(this.node,"imgFrame/imgHeadFrame",d),this.txtName=p.findChildComponent(this.node,"name",r),this.txtLev=p.findChildComponent(this.node,"lev",r),this.txtPower=p.findChildComponent(this.node,"power",r),this.txtTime=p.findChildComponent(this.node,"line3/time",r),this.txtRank=p.findChildComponent(this.node,"rank",r),this.imgFavorabilty=p.findChild(this.node,"line3/imgFavorabilty"),this.txtFavorabilty=p.findChildComponent(this.node,"line3/txtFavorabilty",r),h.uiMirror&&this.view.dealMirrorLayout(p.findChildComponent(this.node,"line3",l)),this.rank_icon=p.findChild(this.node,"rank_icon"),this.rank_1=p.findChild(this.node,"rank_icon/rank1"),this.rank_2=p.findChild(this.node,"rank_icon/rank2"),this.rank_3=p.findChild(this.node,"rank_icon/rank3"),this.view.loadIcon(this.rank_1.getComponent(d),"friend","hy_ICON_paiming01"),this.view.loadIcon(this.rank_2.getComponent(d),"friend","hy_ICON_paiming02"),this.view.loadIcon(this.rank_3.getComponent(d),"friend","hy_ICON_paiming03"),this.gift_icon=p.findChildComponent(this.node,"listButtons/gift_btn",d),this.gift_get_icon=p.findChild(this.node,"listButtons/gift_btn/status"),this.gift_btn=p.findChild(this.node,"listButtons/gift_btn"),this.view.addComponentCallbackListener(this.gift_btn,s.EventType.CLICK,(function(){t.onBtnClick()})),this.look_btn=p.findChild(this.node,"imgFrame"),this.view.addComponentCallbackListener(this.look_btn,s.EventType.CLICK,(function(){IS(y).reqOtherRoleNotice(t.data.role_id)})),this.btnPlant=p.findChild(this.node,"listButtons/btnPlant"),this.view.addComponentCallbackListener(this.btnPlant,s.EventType.CLICK,(function(){IS(F).CheckFuncOpen(H.FUNC_FARM,!0)&&(6!=t.data.farm_state?(t.view.curWaitFarmInfoRoleId=t.data.role_id,IS(m).reqFarmInfo(t.data.role_id)):_.showFlyTip(GetLanguage(200296)))})),this.imgPlant=this.btnPlant.getComponent(d),this.btnHelp=p.findChild(this.node,"listButtons/btnHelp"),this.view.addComponentCallbackListener(this.btnHelp,s.EventType.CLICK,(function(){t.onHelpClick()})),this.nodeHasHelp=p.findChild(this.node,"listButtons/hasCallHelp")},n.onRender=function(t,i){var e,n=this.view.openType==T.Default;this.view.loadRemoteIcon(t.head.url,this.imgIcon),this.txtName.string=t.name+" Lv."+t.lv,this.txtPower.string=GetLanguage(200295)+t.cur_power;var s=GetLanguage(200057);0==t.is_online&&(s=v.getDateDiff(t.offline_time)),this.txtTime.string=s;var o=t.head.frame_id;if(o>0){this.imgHeadFrame.node.active=!0;var a=configAvatar_frame.getDataByKey(o);this.view.loadIcon(this.imgHeadFrame,"icon_frame",a.icon)}else this.imgHeadFrame.node.active=!1;this.rank_icon.active=i<=2,i<=2?(this.txtRank.string="",this.rank_1.active=0==i,this.rank_2.active=1==i,this.rank_3.active=2==i):this.txtRank.string=i+1+"";var d=t.daily_gift_type,r=!1,h=!1;switch(1==d?h=!0:2==d&&(r=!0),this.gift_icon.grayscale=r,this.gift_get_icon.active=h,this.imgFavorabilty.active=n,this.txtFavorabilty.node.active=n,n&&(this.txtFavorabilty.string=null!=(e=t.favor)?e:0),this.imgPlant.grayscale=6==this.data.farm_state||!IS(F).CheckFuncOpen(H.FUNC_FARM),this.view.openType){case T.Default:this.btnPlant.active=!0,this.gift_btn.active=!0,this.btnHelp.active=!1;break;case T.Plant:this.btnPlant.active=!0,this.gift_btn.active=!1,this.btnHelp.active=!1;break;case T.PlantRequestHelp:this.btnPlant.active=!1,this.gift_btn.active=!1,this.btnHelp.active=!0}var l=this.view;if(this.canHelp=!0,this.btnHelp.active=!1,this.nodeHasHelp.active=!1,l.openType==T.PlantRequestHelp){var f=l.openData;if(u.isEmpty(f))return this.btnHelp.active=!0,void(this.nodeHasHelp.active=!1);var c=f.shareList;if(null==c||c.length<=0)return this.btnHelp.active=!0,void(this.nodeHasHelp.active=!1);this.btnHelp.active=!0;for(var p=0;p<c.length;p++)if(this.data.role_id==c[p]){this.btnHelp.active=!1,this.nodeHasHelp.active=!0,this.canHelp=!1;break}}},n.onBtnClick=function(){0==this.data.daily_gift_type?IS(y).reqGetFriendGift(this.data.role_id):1==this.data.daily_gift_type?IS(y).reqGiveFriendGift(this.data.role_id):_.showFlyTip(GetLanguage(200297))},n.onHelpClick=function(){if(this.canHelp){var t=this.view.openData;IS(m).req_home_farm_robber_share_c2s(this.data.role_id,t.landId,t.thiefRoleId,t.cropId),this.canHelp=!1,this.btnHelp.active=!1,this.nodeHasHelp.active=!0,_.showFlyTip(GetLanguage(200298))}},e}(c);e._RF.pop()}}}));
