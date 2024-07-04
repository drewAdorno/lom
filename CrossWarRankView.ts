System.register("chunks:///_virtual/CrossWarRankView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GuildPinItem.ts","./RankTitle.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./MessageView.ts","./FriendControl.ts","./GuildControl.ts","./FrameDataCache.ts","./RankControl.ts","./RankDefine.ts","./RankModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./CrossWarDatacache.ts","./CrossWarDefine.ts","./BaseSubView.ts"],(function(e){"use strict";var n,i,t,a,o,r,s,d,h,m,l,c,f,v,k,g,u,R,p,C,I,_,S,T,x,F,y,b,L;return{setters:[function(e){n=e.inheritsLoose,i=e.createForOfIteratorHelperLoose},function(e){t=e.cclegacy,a=e.Button,o=e.ScrollView,r=e.Label,s=e.Sprite,d=e.sys,h=e.js},function(e){m=e.GuildPinItem},function(e){l=e.RankTitle,c=e.TitleType},function(e){f=e.ListItem},function(e){v=e.default},function(e){k=e.default},null,function(e){g=e.default},function(e){u=e.default},function(e){R=e.default},function(e){p=e.default},function(e){C=e.FrameDataCache},function(e){I=e.default},function(e){_=e.RankDefine},function(e){S=e.RankModel},function(e){T=e.RoleDataCache},function(e){x=e.PlayerAttr},function(e){F=e.CrossWarDataCache},function(e){y=e.RankTabType,b=e.TabName},function(e){L=e.BaseSubView}],execute:function(){var N;t._RF.push({},"ab077PHPb1Inbf+vMDkztZz","CrossWarRankView",void 0);var H=e("tabToRankid",((N={})[y.serverRank]=1032,N[y.personalRank]=1031,N[y.combatRank]=1028,N[y.killRank]=1042,N)),G=(e("default",function(e){function t(){var n;return(n=e.call(this)||this).tabBtns=[],n.curIndex=0,n.canReq=!0,n.bgTopRank=void 0,n.nodeTopRank=void 0,n.nodeServer=void 0,n.emptyTips=void 0,n.rankList=void 0,n.page=1,n.isSendToServer=void 0,n.rankInfo=void 0,n.rank_info_list=void 0,n.myInfo=void 0,n.Top3NodeList=[],n.flagRankList=[],n.des_str=void 0,n.item_des_str=void 0,n.end_str=void 0,n.meRankIcon=void 0,n.imgHeadFrame=void 0,n.meRankIndex=void 0,n.meServer=void 0,n.meNoRank=void 0,n.meRankGuildFlag=void 0,n.meRankHeadFram=void 0,n.meRankHeadBase=void 0,n.meRankScore=void 0,n.meRankName=void 0,n.name="CrossWarRankView",n.url="ui/module/crosswar/CrossWarRankView",n.poolTime=3e3,n}n(t,e);var f=t.prototype;return f.onInit=function(){var e=this,n=this.findChild("btnReward");this.addComponentCallbackListener(n,a.EventType.CLICK,(function(){uiMgr.openView("CrossWarRewardView",e.curIndex)}));for(var i=function(n){var i=v.findChild(e.node,h.formatStr("bottom/bottomBtn/item%s",n)),t={itemGo:i,normalGo:v.findChild(i,"normal"),normalTxt:v.findChildComponent(i,"normal/Label",r),selectedGo:v.findChild(i,"selected"),selectTxt:v.findChildComponent(i,"selected/Label",r),index:n};t.normalTxt.string=GetLanguage(b[n]),t.selectTxt.string=GetLanguage(b[n]),e.addComponentCallbackListener(i,a.EventType.CLICK,(function(){e.SetIndex(t.index)})),e.tabBtns[n]=t},t=1;t<=4;t++)i(t);var l=this.findChildComponent("nodeRank/rankList",o);this.addComponentCallbackListener(l.node,o.EventType.SCROLL_TO_BOTTOM,(function(){if(!(e.isSendToServer||e.rank_info_list.length>=e.rankInfo.total_num)){e.page+=1;var n=new Array;n.push({type:H[e.curIndex],server:2,page:e.page}),IS(I).reqRankList(n),e.isSendToServer=!0}})),this.rankList=this.addUIList(l,G);for(var c=function(){var n={baseNode:e.findChild("nodeRank/nodeTopRank/rank"+f),txtName:e.findChildComponent("nodeRank/nodeTopRank/rank"+f+"/name",r),txtScore:e.findChildComponent("nodeRank/nodeTopRank/rank"+f+"/score",r),txtServer:e.findChildComponent("nodeRank/nodeTopRank/rank"+f+"/server",r),imgHead:e.findChildComponent("nodeRank/nodeTopRank/rank"+f+"/imgFrame/frame/imgIcon",s),imgFrame:e.findChildComponent("nodeRank/nodeTopRank/rank"+f+"/imgFrame/frame/imgHeadFrame",s),imgTitle:e.findChild("nodeRank/nodeTopRank/rank"+f+"/titleIcon"),imgHeadBaseFram:e.findChild("nodeRank/nodeTopRank/rank"+f+"/imgFrame/frame"),imgHeadFram:e.findChild("nodeRank/nodeTopRank/rank"+f+"/imgFrame/frame2"),icon:e.findChild("nodeRank/nodeTopRank/rank"+f+"/imgFrame"),nodeJob:e.findChild("nodeRank/nodeTopRank/rank"+f+"/role"),clickbtn:e.findChild("nodeRank/nodeTopRank/rank"+f+"/role/click"),belong_id:0};e.addComponentCallbackListener(n.icon,a.EventType.CLICK,(function(){e.onClickCheck(n.belong_id)})),e.addComponentCallbackListener(n.clickbtn,a.EventType.CLICK,(function(){e.onClickCheck(n.belong_id)})),e.Top3NodeList.push(n)},f=1;f<4;f++)c();for(var k=1;k<5;k++){var g=this.findChild(1==k?"nodeRank/nodeServer/node"+k:"nodeRank/nodeServer/Node/node"+k),u={nodeBase:g,nodeFlag:v.findChild(g,"flag1"),score:k,server:k,txtScore:v.findChildComponent(g,"bgScore/txtScore",r),txtServer:v.findChildComponent(g,"bgServer/txtServer",r),sel:v.findChild(g,"sel"),nid:k};this.flagRankList.push(u)}this.meRankIcon=this.findChildComponent("nodeRank/meRank/imgFrame/frame/imgIcon",s),this.imgHeadFrame=this.findChildComponent("nodeRank/meRank/imgFrame/frame/imgHeadFrame",s),this.meRankGuildFlag=new m(this,v.findChild(this.node,"nodeRank/meRank/imgFrame/GuildPinItem")),this.meRankHeadBase=this.findChild("nodeRank/meRank/imgFrame/frame"),this.meRankHeadFram=this.findChild("nodeRank/meRank/imgFrame/frame2"),this.meRankName=this.findChildComponent("nodeRank/meRank/Node/name",r),this.meRankIndex=this.findChildComponent("nodeRank/meRank/rank",r),this.meServer=this.findChildComponent("nodeRank/meRank/Node/server",r),this.meNoRank=this.findChild("nodeRank/meRank/no_rank"),this.meRankScore=this.findChildComponent("nodeRank/meRank/score",r),this.bgTopRank=this.findChild("nodeRank/bg"),this.emptyTips=this.findChild("nodeRank/emptyTips"),this.nodeTopRank=this.findChild("nodeRank/nodeTopRank"),this.nodeServer=this.findChild("nodeRank/nodeServer"),d.uiMirror&&(this.loadIcon(this.findChildComponent("nodeRank/nodeServer/node1/hy_ICON_paiming01",s),"common","common_ICON_paiming01"),this.loadIcon(this.findChildComponent("nodeRank/nodeServer/Node/node2/hy_ICON_paiming01",s),"common","common_ICON_paiming02"),this.loadIcon(this.findChildComponent("nodeRank/nodeServer/Node/node3/hy_ICON_paiming01",s),"common","common_ICON_paiming03"),this.loadIcon(this.findChildComponent("nodeRank/nodeServer/Node/node4/hy_ICON_paiming01",s),"common","common_ICON_paiming04"),this.loadIcon(this.findChildComponent("nodeRank/nodeTopRank/rank1/imgFrame/frame/rank_icon",s),"friend","hy_ICON_paiming01"),this.loadIcon(this.findChildComponent("nodeRank/nodeTopRank/rank2/imgFrame/frame/rank_icon",s),"friend","hy_ICON_paiming02"),this.loadIcon(this.findChildComponent("nodeRank/nodeTopRank/rank3/imgFrame/frame/rank_icon",s),"friend","hy_ICON_paiming03"))},f.registerUpdateHandler=function(){this.addEvent(_.RankInfoBack,this.refreshRank,this)},f.onAfterOpen=function(){this.canReq=!0,this.SetIndex(y.personalRank),this.setPrefix(),this.rebaseTop3()},f.refreshRank=function(e){var n=IS(S).GetRankInfoByType(H[this.curIndex]);if(null==n)return this.emptyTips.active=!0,this.setPrefix(),this.rebaseTop3(),this.refreshTop3(),this.refreshScrollItem(),void this.refreshMyInfo();this.emptyTips.active=!1,this.rankInfo=n;var i=n.rank_list;this.rank_info_list=i,this.myInfo=n.my_info,this.setPrefix(),this.rebaseTop3(),this.curIndex==y.serverRank?(this.refreshFlagInfo(),this.rankList.datas=[]):(this.refreshTop3(),this.refreshScrollItem()),this.refreshMyInfo(),this.isSendToServer=!1},f.onClickCheck=function(e){this.rank_info_list&&this.rank_info_list.length>0&&(2==configRanktype.getDataByKey(H[this.curIndex]).rank_type?e==IS(T).GetServerId()?u.showFlyTip(GetLanguage(200230)):IS(p).send_29_1(e):IS(R).reqOtherRoleNotice(e))},f.setPrefix=function(){var e="",n="",i="";1032==H[this.curIndex]||1031==H[this.curIndex]?(e="",i=GetLanguage(200231)):(1028==H[this.curIndex]||1029==H[this.curIndex])&&(e=GetLanguage(200232),n=GetLanguage(200232)),this.des_str=e,this.item_des_str=n,this.end_str=i},f.rebaseTop3=function(){for(var e,n=i(this.Top3NodeList);!(e=n()).done;){var t=e.value;t.imgTitle.active=!1,t.txtName.string=GetLanguage(200038),t.txtServer.string="",t.txtScore.string=this.des_str+"0"}for(var a,o=i(this.flagRankList);!(a=o()).done;){var r=a.value;r.txtServer.string=GetLanguage(200038),r.txtScore.string="0"}this.Top3NodeList[0].nodeJob.removeAllChildren(),this.Top3NodeList[1].nodeJob.removeAllChildren(),this.Top3NodeList[2].nodeJob.removeAllChildren()},f.refreshScrollItem=function(){var e=IS(S).GetRankInfoByType(H[this.curIndex]),n=new Array;if(e)for(var i=0;i<e.rank_list.length;i++)i>2&&n.push({info:e.rank_list[i],des_str:this.item_des_str,end_str:this.end_str,rank_id:H[this.curIndex]});this.rankList.datas=n},f.refreshTop3=function(){if(!g.isEmpty(this.rank_info_list))for(var e,n=i(this.rank_info_list.entries());!(e=n()).done;){var t=e.value,a=t[0],o=t[1];if(a>2)break;var r=this.Top3NodeList[a];r.belong_id=o.belong_id;var s=o.figure;if(0!=s.job_figure){for(var h=s.skin_list||[],m=0,f=0;f<h.length;f++)2==h[f].k&&(m=h[f].v);for(var v=0,u=0,R=0,p=0;p<s.equip_list.length;p++)1==s.equip_list[p].k&&(v=s.equip_list[p].v),2==s.equip_list[p].k&&(u=s.equip_list[p].v),3==s.equip_list[p].k&&(R=s.equip_list[p].v);var C=s.gender||1,I=this.addUnitModel({job:s.job_figure,dressId:m,gender:C,parent:r.nodeJob,color:s.hair_figure,weapon:v,ornaments:u,face:R,mount:s.mount_figure,shenqi:s.artifact_figure});d.uiMirror&&(this.getUnitModel(I).dir=-1);var _=s.current_title;if(_>0){var S=this.getUnitModel(I).modelHeight;r.imgTitle.setPosition(0,S+50),r.imgTitle.active=!0,new l(this,r.imgTitle).SetRankTitle(_,c.NORMAL)}else r.imgTitle.active=!1}r.icon.active=!0,r.imgHead.node.active=!0,r.imgHeadFram.active=!0,r.txtServer.node.active=!0,r.imgHeadBaseFram.active=!0,this.loadRemoteIcon(o.head.url,r.imgHead);var T=o.head.frame_id;if(T>0){r.imgFrame.node.active=!0;var x=configAvatar_frame.getDataByKey(T);this.loadIcon(r.imgFrame,"icon_frame",x.icon)}else r.imgFrame.node.active=!1;r.txtName.string=o.name,r.txtScore.string=this.des_str+k.GetNumString(o.score)+this.end_str,r.txtServer.string="[s"+o.serv_id+"]"}},f.refreshFlagInfo=function(){for(var e,n=this.rank_info_list,t=i(this.flagRankList);!(e=t()).done;){e.value.nodeBase.active=!1}for(var a=IS(F).server_list.length,o=0;o<a;o++)this.flagRankList[o].nodeBase.active=!0;n.sort((function(e,n){return 0==e.rank?1:0==n.rank?-1:e.rank>n.rank?1:e.rank==n.rank?e.serv_id-n.serv_id:-1}));for(var r,s=i(n.entries());!(r=s()).done;){var d=r.value,h=d[0],l=d[1],c=this.flagRankList[h];new m(this,c.nodeFlag).SetItem(l.guild_flag),c.txtServer.string="[s"+l.serv_id+"]",c.server=l.serv_id,c.txtScore&&(c.txtScore.string=k.GetNumString(l.score))}},f.refreshMyInfo=function(){this.myInfo||(this.myInfo={}),this.meNoRank.active=this.myInfo.rank<=0,this.myInfo.rank>0?this.meRankIndex.string=this.myInfo.rank+"":this.meRankIndex.string="";var e=IS(T).GetRoleAttr(x.ROLE_ATTR_HEAD_URL);if(this.curIndex==y.serverRank)this.meRankIcon.node.active=!1,this.meRankHeadBase.active=!1,this.meRankHeadFram.active=!1,this.meRankGuildFlag.node.active=!0,this.meRankGuildFlag.SetItem(this.myInfo.guild_flag),this.meRankName.string="[s"+IS(T).GetServerId()+"]",this.meServer.node.active=!1;else{this.meRankIcon.node.active=!0,this.meRankHeadBase.active=!0,this.meRankHeadFram.active=!0,this.meRankGuildFlag.node.active=!1,this.loadRemoteIcon(e,this.meRankIcon);var n=IS(C).curFrameId;if(n>0){var i=configAvatar_frame.getDataByKey(n);this.loadIcon(this.imgHeadFrame,"icon_frame",i.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1;this.meServer.node.active=!0,this.meServer.string="[s"+IS(T).GetServerId()+"]",this.meRankName.string=IS(T).GetRoleName()}this.meRankScore.string=this.item_des_str+k.GetNumString(this.myInfo.score||0)+this.end_str},f.onBeforeClose=function(){var e;null==(e=this.rankList)||e.clearData(),this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0),this.canReq=!0},f.onDestroy=function(){},f.SetIndex=function(e){var n=this;if(this.canReq&&this.curIndex!=e){if(this.curIndex>0&&(this.tabBtns[this.curIndex].selectedGo.active=!1,this.tabBtns[this.curIndex].normalGo.active=!0),this.curIndex=e,this.tabBtns[this.curIndex].normalGo.active=!1,this.tabBtns[this.curIndex].selectedGo.active=!0,this.curIndex==y.serverRank)this.bgTopRank.active=!1,this.nodeTopRank.active=!1,this.nodeServer.active=!0;else{this.bgTopRank.active=!0,this.nodeTopRank.active=!0,this.nodeServer.active=!1;for(var t,a=i(this.Top3NodeList);!(t=a()).done;){var o=t.value;o.baseNode.active=!0,o.icon.active=!1,o.imgHeadBaseFram.active=!0,o.imgHeadFram.active=!0,o.imgTitle.active=!1,o.txtServer.node.active=!0,o.txtName.node.active=!0,o.txtScore.node.active=!0}}this.rankList.scrollView.scrollToTop(),this.page=1,this.isSendToServer=!1,this.canReq=!1;var r=new Array;r.push({type:H[this.curIndex],server:2,page:this.page}),IS(I).reqRankList(r),this.addTimer(.2,1,(function(){n.canReq=!0}))}},t}(L)),function(e){function i(){for(var n,i=arguments.length,t=new Array(i),a=0;a<i;a++)t[a]=arguments[a];return(n=e.call.apply(e,[this].concat(t))||this).imgFrame=void 0,n.imgIcon=void 0,n.imgHeadFrame=void 0,n.titleIcon=void 0,n.txtScore=void 0,n.txtRank=void 0,n.txtName=void 0,n.txtServer=void 0,n.btnHead=void 0,n.guildFlag=void 0,n.imgHeadFram=void 0,n}n(i,e);var t=i.prototype;return t.onInit=function(){var e=this;this.imgFrame=v.findChildComponent(this.node,"imgFrame",s),this.imgIcon=v.findChildComponent(this.node,"imgFrame/frame/imgIcon",s),this.imgHeadFrame=v.findChildComponent(this.node,"imgFrame/frame/imgHeadFrame",s),this.titleIcon=v.findChildComponent(this.node,"titleIcon",s),this.txtScore=v.findChildComponent(this.node,"score",r),this.txtRank=v.findChildComponent(this.node,"rank",r),this.txtServer=v.findChildComponent(this.node,"Node/server",r),this.txtName=v.findChildComponent(this.node,"Node/name",r),this.guildFlag=new m(this.view,v.findChild(this.node,"imgFrame/GuildPinItem")),this.imgHeadFram=v.findChild(this.node,"imgFrame/frame2"),this.btnHead=v.findChild(this.node,"imgFrame"),this.view.addComponentCallbackListener(this.btnHead,a.EventType.CLICK,(function(){e.onItemClick()}))},t.onRender=function(e,n){this.view.curIndex==y.serverRank?(this.imgIcon.node.active=!1,this.imgHeadFram.active=!1,this.guildFlag.node.active=!0,this.guildFlag.SetItem(e.info.guild_flag),this.txtName.string="[s"+e.info.serv_id+"]",this.txtServer.node.active=!1):(this.imgIcon.node.active=!0,this.imgHeadFram.active=!0,this.guildFlag.node.active=!1,this.view.loadRemoteIcon(e.info.head.url,this.imgIcon),this.txtServer.node.active=!0,this.txtServer.string="[s"+e.info.serv_id+"]",this.txtName.string=e.info.name);var i=e.info.head.frame_id;if(i>0){this.imgHeadFrame.node.active=!0;var t=configAvatar_frame.getDataByKey(i);this.view.loadIcon(this.imgHeadFrame,"icon_frame",t.icon)}else this.imgHeadFrame.node.active=!1;this.txtRank.string=e.info.rank,this.txtScore.string=e.des_str+k.GetNumString(e.info.score)+e.end_str,this.titleIcon.node.active=!1},t.onItemClick=function(){1004==this.data.rank_id?IS(R).reqOtherRoleNotice(this.data.info.belong_id,2):32==configRanktype.getDataByKey(this.data.rank_id).rank_type?this.data.info.belong_id==IS(T).GetGuildId()?u.showFlyTip(GetLanguage(200233)):IS(p).send_29_1(this.data.info.belong_id):IS(R).reqOtherRoleNotice(this.data.info.belong_id)},i}(f));t._RF.pop()}}}));

